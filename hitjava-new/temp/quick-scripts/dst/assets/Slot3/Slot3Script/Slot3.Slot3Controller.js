
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot3/Slot3Script/Slot3.Slot3Controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0c646aVL1dHuaVCHSCUXWn1', 'Slot3.Slot3Controller');
// Slot3/Slot3Script/Slot3.Slot3Controller.ts

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
var Slot3_Cmd_1 = require("./Slot3.Cmd");
var Configs_1 = require("../../Loading/src/Configs");
var Slot3_PopupSelectLine_1 = require("./Slot3.PopupSelectLine");
var Slot3_PopupBonus_1 = require("./Slot3.PopupBonus");
var Slot3_TrialResults_1 = require("./Slot3.TrialResults");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
var SlotNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/SlotNetworkClient");
var BundleControl_1 = require("../../Loading/src/BundleControl");
var Slot3_PopupGuide_1 = require("./Slot3.PopupGuide");
var Slot3_PopupHistory_1 = require("./Slot3.PopupHistory");
var Slot3_PopupJackpotHistory_1 = require("./Slot3.PopupJackpotHistory");
var Lobby_Cmd_1 = require("../../Lobby/LobbyScript/Lobby.Cmd");
var TW = cc.tween;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot3Controller = /** @class */ (function (_super) {
    __extends(Slot3Controller, _super);
    function Slot3Controller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeCoin = null;
        _this.toggleMusic = null;
        _this.sprFrameItems = [];
        _this.sprFrameItemsBlur = [];
        _this.columns = null;
        _this.itemTemplate = null;
        _this.linesWin = null;
        _this.iconWildColumns = null;
        _this.lblJackpot = null;
        _this.lblBet = null;
        _this.lblLine = null;
        _this.lblTotalBet = null;
        _this.lblCoin = null;
        _this.lblWinNow = null;
        _this.lblFreeSpinCount = null;
        _this.toggleAuto = null;
        _this.toggleBoost = null;
        _this.toggleTrial = null;
        _this.btnSpin = null;
        _this.btnBack = null;
        _this.btnBetUp = null;
        _this.btnBetDown = null;
        _this.btnLine = null;
        _this.toast = null;
        _this.effectWinCash = null;
        _this.effectBigWin = null;
        _this.effectJackpot = null;
        _this.effectBonus = null;
        _this.effectFreeSpin = null;
        _this.popupSelectLine = null;
        _this.popupGuide = null;
        _this.popupJackpotHistory = null;
        _this.popupHistory = null;
        _this.popupBonus = null;
        _this.soundBg = null;
        _this.soundBgBonus = null;
        _this.soundClick = null;
        _this.soundBonusFail = null;
        _this.soundFreeSpin = null;
        _this.soundGoldEarn = null;
        _this.soundJackpot = null;
        _this.soundSpinResult = null;
        _this.soundSpinSpinning = null;
        _this.spineIcon = null;
        _this.spineIconList = [];
        _this.daiLyFreeSpin = 0;
        _this.rollStartItemCount = 15;
        _this.rollAddItemCount = 10;
        _this.spinDuration = 1.2;
        _this.addSpinDuration = 0.3;
        _this.itemHeight = 0;
        _this.betIdx = 0;
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
        _this.currentNumberFreeSpin = 0;
        _this.mutipleJpNode = null;
        _this.musicSlotState = null;
        _this.soundSlotState = null;
        _this.remoteMusicBackground = null;
        return _this;
    }
    Slot3Controller.prototype.start = function () {
        var _this = this;
        this.daiLyFreeSpin = 0;
        var musicSave = cc.sys.localStorage.getItem("music_Slot_3");
        if (musicSave != null) {
            this.musicSlotState = parseInt(musicSave);
        }
        else {
            this.musicSlotState = 1;
            cc.sys.localStorage.setItem("music_Slot_3", "1");
        }
        // soundSave :   0 == OFF , 1 == ON
        var soundSave = cc.sys.localStorage.getItem("music_Slot_3");
        if (soundSave != null) {
            this.soundSlotState = parseInt(soundSave);
        }
        else {
            this.soundSlotState = 1;
            cc.sys.localStorage.setItem("music_Slot_3", "1");
        }
        if (this.musicSlotState == 0) {
            this.toggleMusic.isChecked = true;
        }
        else {
            this.toggleMusic.isChecked = false;
        }
        if (this.musicSlotState == 1) {
            var musicId = this.randomBetween(0, 4);
            this.remoteMusicBackground = cc.audioEngine.playMusic(this.soundBg, true);
        }
        // cc.audioEngine.play(this.soundBg, true, 1);
        this.itemHeight = this.itemTemplate.height;
        for (var i = 0; i < this.columns.childrenCount; i++) {
            var column = this.columns.children[i];
            var count = this.rollStartItemCount + i * this.rollAddItemCount;
            for (var j = 0; j < count; j++) {
                var item = cc.instantiate(this.itemTemplate);
                item.getComponentInChildren(sp.Skeleton).node.active = false;
                item.parent = column;
                if (j >= 3) {
                    this.setItemSprite(item.children[0].getComponent(cc.Sprite), this.sprFrameItemsBlur[Utils_1.default.randomRangeInt(0, this.sprFrameItemsBlur.length)]);
                }
                else {
                    this.setItemSprite(item.children[0].getComponent(cc.Sprite), this.sprFrameItems[Utils_1.default.randomRangeInt(0, this.sprFrameItems.length)]);
                }
            }
        }
        this.itemTemplate.removeFromParent();
        this.itemTemplate = null;
        SlotNetworkClient_1.default.getInstance().addOnClose(function () {
            _this.actBack();
        }, this);
        SlotNetworkClient_1.default.getInstance().send(new Slot3_Cmd_1.default.SendSubcribe(this.betIdx));
        SlotNetworkClient_1.default.getInstance().addListener(function (data) {
            var inpacket = new Network_InPacket_1.default(data);
            switch (inpacket.getCmdId()) {
                case Lobby_Cmd_1.default.Code.UPDATE_JACKPOT_SLOTS:
                    {
                        var res = new Lobby_Cmd_1.default.ResUpdateJackpotSlots(data);
                        var resJson = JSON.parse(res.pots);
                        // //  cc.log("UPDATE_JACKPOT_SLOTS:"+JSON.stringify(resJson));
                    }
                    break;
                case Slot3_Cmd_1.default.Code.FREE_DAI_LY:
                    {
                        if (!_this.toggleTrial.isChecked) {
                            var res = new Slot3_Cmd_1.default.ReceiveFreeDaiLy(data);
                            _this.daiLyFreeSpin = res.freeSpin;
                        }
                    }
                    break;
                case Slot3_Cmd_1.default.Code.DATE_X2:
                    {
                        var res = new Slot3_Cmd_1.default.ReceiveDateX2(data);
                        //  cc.log("DATE_X2:" + JSON.stringify(res));
                        _this.currentNumberFreeSpin = res.freeSpin + _this.daiLyFreeSpin;
                        if (res.freeSpin > 0) {
                            _this.lblFreeSpinCount.node.parent.active = true;
                            _this.lblFreeSpinCount.string = res.freeSpin.toString();
                        }
                        else {
                            _this.lblFreeSpinCount.node.parent.active = false;
                        }
                    }
                    break;
                case Slot3_Cmd_1.default.Code.UPDATE_POT:
                    {
                        var res = new Slot3_Cmd_1.default.ReceiveUpdatePot(data);
                        Tween_1.default.numberTo(_this.lblJackpot, res.jackpot, 0.3);
                    }
                    break;
                case Slot3_Cmd_1.default.Code.PLAY:
                    {
                        var res = new Slot3_Cmd_1.default.ReceivePlay(data);
                        // //  cc.log(res);
                        _this.onSpinResult(res);
                    }
                    break;
            }
        }, this);
        this.stopShowLinesWin();
        this.changeItemToDark(false);
        this.toast.active = false;
        this.effectWinCash.active = false;
        this.effectJackpot.active = false;
        this.effectBigWin.active = false;
        this.lblTotalBet.string = Utils_1.default.formatMoney(this.arrLineSelect.length * this.listBet[this.betIdx]);
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function () {
            Tween_1.default.numberTo(_this.lblCoin, Configs_1.default.Login.Coin, 0.3);
        }, this);
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        App_1.default.instance.showErrLoading("Đang kết nối tới server...");
        SlotNetworkClient_1.default.getInstance().checkConnect(function () {
            App_1.default.instance.showLoading(false);
        });
        cc.tween(this.btnSpin.node.getChildByName("ic_arrow")).by(1.0, { angle: -360 }).repeatForever().start();
        //this.initMutipleJPNode();
    };
    Slot3Controller.prototype.initMutipleJPNode = function () {
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
                    _this.mutipleJpNode.setInfo("THANTAI");
                }
            });
        }
    };
    Slot3Controller.prototype.showToast = function (msg) {
        var _this = this;
        this.toast.getComponentInChildren(cc.Label).string = msg;
        this.toast.stopAllActions();
        this.toast.active = true;
        this.toast.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function () {
            _this.toast.active = false;
        })));
    };
    Slot3Controller.prototype.moneyToK = function (money) {
        // if (money < 10000) {
        //     return money.toString();
        // }
        // money = parseInt((money / 1000).toString());
        return Utils_1.default.formatMoney(money);
        // return money.toString();
    };
    Slot3Controller.prototype.setEnabledAllButtons = function (enabled) {
        this.btnSpin.interactable = enabled;
        this.btnBack.interactable = enabled;
        this.btnBetUp.interactable = enabled;
        this.btnBetDown.interactable = enabled;
        this.btnLine.interactable = enabled;
        this.toggleTrial.interactable = enabled;
        if (enabled) {
            this.btnSpin.node.getChildByName("ic_arrow").active = true;
            cc.Tween.stopAllByTarget(this.btnSpin.node.getChildByName("ic_arrow"));
            cc.tween(this.btnSpin.node.getChildByName("ic_arrow")).by(1.0, { angle: -360 }).repeatForever().start();
        }
        else {
            this.btnSpin.node.getChildByName("ic_arrow").active = false;
        }
    };
    Slot3Controller.prototype.stopAllEffects = function () {
        this.effectJackpot.stopAllActions();
        this.effectJackpot.active = false;
        this.effectBigWin.stopAllActions();
        this.effectBigWin.active = false;
        this.effectFreeSpin.stopAllActions();
        this.effectFreeSpin.active = false;
    };
    Slot3Controller.prototype.stopShowLinesWin = function () {
        this.linesWin.stopAllActions();
        for (var i = 0; i < this.linesWin.childrenCount; i++) {
            this.linesWin.children[i].active = false;
        }
        for (var i = 0; i < this.iconWildColumns.childrenCount; i++) {
            this.iconWildColumns.children[i].active = false;
        }
        this.stopAllItemEffect();
    };
    Slot3Controller.prototype.stopAllItemEffect = function () {
        for (var i = 0; i < this.columns.childrenCount; i++) {
            var col = this.columns.children[i];
            for (var j = 0; j < col.childrenCount; j++) {
                var item = col.children[j];
                item.stopAllActions();
                item.scale = 1;
            }
        }
    };
    Slot3Controller.prototype.spin = function () {
        if (!this.isSpined)
            return;
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundSpinSpinning, false, 1);
        }
        if (!this.toggleTrial.isChecked) {
            if (this.currentNumberFreeSpin <= 0) {
                if (Configs_1.default.Login.Coin < this.listBet[this.betIdx] * this.arrLineSelect.length) {
                    App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_not_enough"));
                    return;
                }
                var curMoney = Configs_1.default.Login.Coin - this.arrLineSelect.length * this.listBet[this.betIdx];
                Tween_1.default.numberTo(this.lblCoin, curMoney, 0.3);
            }
            else {
                this.currentNumberFreeSpin--;
                this.lblFreeSpinCount.string = this.currentNumberFreeSpin + "";
                if (this.currentNumberFreeSpin <= 0) {
                    this.currentNumberFreeSpin = 0;
                    this.lblFreeSpinCount.node.parent.active = false;
                }
            }
            this.isSpined = false;
            this.changeItemToDark(false);
            this.stopAllEffects();
            this.stopShowLinesWin();
            this.setEnabledAllButtons(false);
            SlotNetworkClient_1.default.getInstance().send(new Slot3_Cmd_1.default.SendPlay(this.arrLineSelect.toString()));
        }
        else {
            this.isSpined = false;
            this.changeItemToDark(false);
            this.stopAllEffects();
            this.stopShowLinesWin();
            this.setEnabledAllButtons(false);
            var rIdx = Utils_1.default.randomRangeInt(0, Slot3_TrialResults_1.default.results.length);
            this.onSpinResult(Slot3_TrialResults_1.default.results[rIdx]);
        }
    };
    Slot3Controller.prototype.stopSpin = function () {
        for (var i = 0; i < this.columns.childrenCount; i++) {
            var roll = this.columns.children[i];
            roll.stopAllActions();
            roll.setPosition(cc.v2(roll.getPosition().x, 0));
        }
    };
    Slot3Controller.prototype.showLineWins = function () {
        var _this = this;
        this.isSpined = true;
        this.linesWin.zIndex = 2;
        this.columns.zIndex = 1;
        Tween_1.default.numberTo(this.lblWinNow, this.lastSpinRes.prize, 0.3);
        if (!this.toggleTrial.isChecked)
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
        var rolls = this.columns.children;
        var actions = [];
        for (var i = 0; i < linesWinChildren.length; i++) {
            linesWinChildren[i].active = linesWin.indexOf("" + (i + 1)) >= 0;
            ;
        }
        if (this.lastSpinRes.prize > 0) {
            this.changeItemToDark(true);
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
                        _this.linesWin.zIndex = 1;
                        _this.columns.zIndex = 2;
                        // //  cc.log("================: " + lineIdx);
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
                        for (var j = 0; j < countItemWin; j++) {
                            var itemRow = parseInt((mLine[j] / 5).toString());
                            var item = rolls[j].children[2 - itemRow];
                            item.stopAllActions();
                            item.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(0.2, 1.1), cc.scaleTo(0.2, 1))));
                            _this.setDarkItem(item, false);
                        }
                        // //  cc.log("lineIdx: " + lineIdx + "fisrtItemId: " + fisrtItemId + " countItemWin: " + countItemWin);
                    }));
                    actions.push(cc.delayTime(1));
                    actions.push(cc.callFunc(function () {
                        line.active = false;
                        _this.changeItemToDark(true);
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
            _this.changeItemToDark(false);
            if (_this.toggleBoost.isChecked || _this.toggleAuto.isChecked) {
                _this.spin();
            }
        }));
        this.linesWin.runAction(cc.sequence.apply(null, actions));
    };
    Slot3Controller.prototype.showCoins = function (prize) {
        var number = prize / 20000;
        if (number <= 10)
            number = 10;
        else if (number >= 30)
            number = 30;
        //  cc.log("showCoins:" + number);
        App_1.default.instance.showCoins(number, this.effectWinCash, this.nodeCoin);
    };
    Slot3Controller.prototype.showWinCash = function (cash) {
        var _this = this;
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundGoldEarn, false, 1);
        }
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
    Slot3Controller.prototype.showEffectFreeSpin = function (cb) {
        var _this = this;
        this.effectFreeSpin.stopAllActions();
        this.effectFreeSpin.active = true;
        var spine = this.effectFreeSpin.getComponentInChildren(sp.Skeleton);
        spine.setAnimation(0, "animation", false);
        spine.setCompleteListener(function () {
            _this.effectFreeSpin.active = false;
            if (cb != null)
                cb();
        });
        // this.effectFreeSpin.runAction(cc.sequence(
        //     cc.delayTime(1),
        //     cc.delayTime(3),
        //     cc.callFunc(() => {
        //     })
        // ));
    };
    Slot3Controller.prototype.showEffectBigWin = function (cash, cb) {
        var _this = this;
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundGoldEarn, false, 1);
        }
        this.effectBigWin.stopAllActions();
        this.effectBigWin.active = true;
        this.effectBigWin.getComponentInChildren(sp.Skeleton).setAnimation(0, "thang sieu lon2", true);
        var label = this.effectBigWin.getComponentInChildren(cc.Label);
        label.node.active = false;
        this.effectBigWin.runAction(cc.sequence(
        // cc.delayTime(1),
        cc.callFunc(function () {
            label.string = "";
            label.node.active = true;
            Tween_1.default.numberTo(label, cash, 1);
        }), cc.delayTime(3), cc.callFunc(function () {
            _this.effectBigWin.active = false;
            if (cb != null)
                cb();
        })));
    };
    Slot3Controller.prototype.showEffectJackpot = function (cash, cb) {
        var _this = this;
        if (cb === void 0) { cb = null; }
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundJackpot, false, 1);
        }
        this.effectJackpot.stopAllActions();
        this.effectJackpot.active = true;
        this.effectJackpot.getComponentInChildren(sp.Skeleton).setAnimation(0, "animation", true);
        var label = this.effectJackpot.getComponentInChildren(cc.Label);
        label.node.active = false;
        this.effectJackpot.runAction(cc.sequence(
        // cc.delayTime(1),
        cc.callFunc(function () {
            label.string = "";
            label.node.active = true;
            Tween_1.default.numberTo(label, cash, 1);
        }), cc.delayTime(3), cc.callFunc(function () {
            _this.effectJackpot.active = false;
            if (cb != null)
                cb();
        })));
    };
    Slot3Controller.prototype.showEffectBonus = function (cb) {
        var _this = this;
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundSpinResult, false, 1);
        }
        this.effectBonus.stopAllActions();
        this.effectBonus.active = true;
        // this.effectBonus.getComponentInChildren(sp.Skeleton).setAnimation(0, "animation", false);
        // this.effectBonus.runAction(cc.sequence(
        //     cc.delayTime(3),
        //     cc.callFunc(() => {
        // this.effectBonus.active = false;
        // if (cb != null) cb();
        //     })
        // ));
        cc.tween(this.effectBonus).call(function () {
            _this.effectBonus.getComponentInChildren(sp.Skeleton).setAnimation(0, "animation", true);
        }).delay(3.0).call(function () {
            _this.effectBonus.active = false;
            if (cb != null)
                cb();
        }).start();
    };
    Slot3Controller.prototype.onSpinResult = function (res) {
        var _this = this;
        this.stopSpin();
        //  cc.log("onSpinResult:" + JSON.stringify(res));
        var successResult = [0, 1, 2, 3, 4, 5, 6];
        //res.result == 5 //bonus
        //res.result == 0 //khong an
        //res.result == 1 //thang thuong
        //res.result == 2 //thang lon
        //res.result == 3 //no hu
        //res.result == 6 //thang cuc lon
        // res = JSON.parse('{"_pos":136,"_data":{"0":1,"1":46,"2":225,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":16,"11":162,"12":2,"13":0,"14":30,"15":53,"16":44,"17":49,"18":48,"19":44,"20":56,"21":44,"22":51,"23":44,"24":54,"25":44,"26":53,"27":44,"28":54,"29":44,"30":52,"31":44,"32":51,"33":44,"34":52,"35":44,"36":52,"37":44,"38":50,"39":44,"40":50,"41":44,"42":52,"43":44,"44":52,"45":0,"46":65,"47":49,"48":44,"49":50,"50":44,"51":51,"52":44,"53":52,"54":44,"55":53,"56":44,"57":54,"58":44,"59":55,"60":44,"61":56,"62":44,"63":57,"64":44,"65":49,"66":48,"67":44,"68":49,"69":49,"70":44,"71":49,"72":50,"73":44,"74":49,"75":51,"76":44,"77":49,"78":52,"79":44,"80":49,"81":53,"82":44,"83":49,"84":54,"85":44,"86":49,"87":55,"88":44,"89":49,"90":56,"91":44,"92":49,"93":57,"94":44,"95":50,"96":48,"97":44,"98":50,"99":49,"100":44,"101":50,"102":50,"103":44,"104":50,"105":51,"106":44,"107":50,"108":52,"109":44,"110":50,"111":53,"112":0,"113":0,"114":0,"115":0,"116":0,"117":0,"118":0,"119":1,"120":1,"121":208,"122":0,"123":0,"124":0,"125":0,"126":2,"127":100,"128":111,"129":84,"130":0,"131":0,"132":0,"133":0,"134":0,"135":0},"_length":136,"_controllerId":1,"_cmdId":12001,"_error":0,"ref":4258,"result":2,"matrix":"5,10,8,3,6,5,6,4,3,4,4,2,2,4,4","linesWin":"1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25","haiSao":"","prize":66000,"currentMoney":40136532,"freeSpin":0,"isFree":false,"itemsWild":"","ratio":0,"currentNumberFreeSpin":0}');
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
        this.currentNumberFreeSpin = res.currentNumberFreeSpin;
        this.lastSpinRes = res;
        this.columnsWild.length = 0;
        if (!this.toggleTrial.isChecked) {
            Configs_1.default.Login.Coin = res.currentMoney;
        }
        var matrix = res.matrix.split(",");
        var timeScale = this.toggleBoost.isChecked ? 0.5 : 1;
        var _loop_2 = function (i) {
            var roll = this_1.columns.children[i];
            var step1Pos = this_1.itemHeight * 0.3;
            var step2Pos = -this_1.itemHeight * roll.childrenCount + this_1.itemHeight * 3 - this_1.itemHeight * 0.3;
            var step3Pos = -this_1.itemHeight * roll.childrenCount + this_1.itemHeight * 3;
            TW(roll).delay(0.2 * i * timeScale)
                .to(0.2 * timeScale, { x: roll.position.x, y: step1Pos }, { easing: cc.easing.quadOut })
                .to(this_1.spinDuration + this_1.addSpinDuration * i, { x: roll.position.x, y: step2Pos }, { easing: cc.easing.quadInOut })
                .to(0.2 * timeScale, { x: roll.x, y: step3Pos }, { easing: cc.easing.quadIn })
                .call(function () {
                roll.setPosition(cc.v2(roll.position.x, 0));
                if (i == 4) {
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
                        var children = _this.columns.children[c].children;
                        for (var i_1 = 0; i_1 < 3; i_1++) {
                            var itemAnimIcon = children[i_1].getComponentInChildren(sp.Skeleton);
                            itemAnimIcon.node.active = false;
                            itemAnimIcon.skeletonData = _this.spineIconList[0];
                            itemAnimIcon.setAnimation(0, "Jackpot", true); //thuc ra la wild.ba Fio de nham ten.
                            itemAnimIcon.node.y = -60;
                            _this.setItemSprite(children[i_1].getComponentInChildren(cc.Sprite), _this.sprFrameItems[2]);
                            children[i_1]['id'] = 3;
                            children[i_1]['animationName'] = "Jackpot";
                            // children[i].getComponentInChildren(cc.Sprite).node.active = false;
                        }
                        _this.iconWildColumns.children[c].active = true;
                        _this.iconWildColumns.children[c].getComponent(sp.Skeleton).animation = "wild dai";
                        _this.iconWildColumns.children[c].getComponent(sp.Skeleton).loop = false;
                        if (_this.soundSlotState == 1) {
                            cc.audioEngine.play(_this.soundSpinResult, false, 1);
                        }
                    }
                    if (_this.columnsWild.length > 0) {
                        roll.runAction(cc.sequence(cc.delayTime(2.6), cc.callFunc(function () {
                            for (var i_2 = 0; i_2 < _this.iconWildColumns.childrenCount; i_2++) {
                                _this.iconWildColumns.children[i_2].active = false;
                            }
                        }), cc.delayTime(0.1), cc.callFunc(function () {
                            _this.spined();
                        })));
                    }
                    else {
                        _this.spined();
                    }
                }
            }).start();
            TW(roll)
                .delay((0.47 + 0.2 * i) * timeScale)
                .call(function () {
                var children = roll.children;
                _this.setItemSprite(children[2].children[0].getComponent(cc.Sprite), _this.sprFrameItems[parseInt(matrix[i])]);
                _this.setItemSprite(children[1].children[0].getComponent(cc.Sprite), _this.sprFrameItems[parseInt(matrix[5 + i])]);
                _this.setItemSprite(children[0].children[0].getComponent(cc.Sprite), _this.sprFrameItems[parseInt(matrix[10 + i])]);
                // children[2]['id'] = parseInt(matrix[10 + i]);
                // children[1]['id'] = parseInt(matrix[5 + i]);
                // children[0]['id'] = parseInt(matrix[10 + i]);
                var item1 = children[children.length - 1];
                var item2 = children[children.length - 2];
                var item3 = children[children.length - 3];
                item1['id'] = parseInt(matrix[i]);
                item2['id'] = parseInt(matrix[5 + i]);
                item3['id'] = parseInt(matrix[10 + i]);
                _this.setItemSprite(item1.children[0].getComponent(cc.Sprite), _this.sprFrameItems[parseInt(matrix[i])]);
                _this.setItemSprite(item2.children[0].getComponent(cc.Sprite), _this.sprFrameItems[parseInt(matrix[5 + i])]);
                _this.setItemSprite(item3.children[0].getComponent(cc.Sprite), _this.sprFrameItems[parseInt(matrix[10 + i])]);
                _this.checkIconSpine(children[2], parseInt(matrix[i]));
                _this.checkIconSpine(children[1], parseInt(matrix[5 + i]));
                _this.checkIconSpine(children[0], parseInt(matrix[10 + i]));
                _this.checkIconSpine(item3, parseInt(matrix[10 + i]));
                _this.checkIconSpine(item2, parseInt(matrix[5 + i]));
                _this.checkIconSpine(item1, parseInt(matrix[i]));
            }).start();
        };
        var this_1 = this;
        for (var i = 0; i < this.columns.childrenCount; i++) {
            _loop_2(i);
        }
    };
    Slot3Controller.prototype.checkIconSpine = function (item, idSprite) {
        idSprite = idSprite + 1;
        var spine = item.getComponentInChildren(sp.Skeleton);
        spine.skeletonData = this.spineIcon;
        var sprite = item.getComponentInChildren(cc.Sprite);
        spine.node.y = -66;
        // sprite.node.active = false;
        // spine.node.active = true;
        spine.node.scale = 0.6;
        var animName = "";
        switch (idSprite) {
            case 1: {
                spine.skeletonData = this.spineIconList[2];
                spine.node.scale = 0.65;
                animName = "Scatter2";
                // spine.setAnimation(0, "Scatter2", true);
                break;
            }
            case 2: {
                spine.node.scale = 0.65;
                // spine.setAnimation(0, "bonus", true);
                animName = "bonus";
                break;
            }
            case 3: { //wild
                spine.skeletonData = this.spineIconList[0];
                // spine.setAnimation(0, "Jackpot", true);
                animName = "Jackpot";
                spine.node.y = -60;
                break;
            }
            case 4: { //jackpot
                spine.skeletonData = this.spineIconList[1];
                spine.node.scale = 0.23;
                // spine.setAnimation(0, "animation", true);
                animName = "animation";
                spine.node.y = -122;
                break;
            }
            default: {
                spine.node.active = false;
                sprite.node.active = true;
                break;
            }
        }
        item['animationName'] = animName != "" ? animName : null;
    };
    Slot3Controller.prototype.setItemSprite = function (spr, frame) {
        spr.spriteFrame = frame;
        spr.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        spr.node.setContentSize(cc.size(spr.node.width / 1, spr.node.height / 1));
    };
    Slot3Controller.prototype.spined = function () {
        var _this = this;
        this.currentNumberFreeSpin = this.lastSpinRes.currentNumberFreeSpin;
        if (this.lastSpinRes.currentNumberFreeSpin > 0) {
            this.lblFreeSpinCount.node.parent.active = true;
            this.lblFreeSpinCount.string = this.currentNumberFreeSpin.toString();
        }
        else {
            this.lblFreeSpinCount.node.parent.active = false;
        }
        if (this.lastSpinRes.freeSpin == 1) {
            this.showEffectFreeSpin(function () {
                _this.showLineWins();
            });
        }
        else {
            var successResult = [0, 1, 3, 4, 5, 6];
            switch (this.lastSpinRes.result) {
                case 0: //k an
                    this.showLineWins();
                    break;
                case 1: // thang thuong
                    this.showLineWins();
                    break;
                case 2: // thang lon
                    this.showEffectBigWin(this.lastSpinRes.prize, function () {
                        _this.showLineWins();
                    });
                    break;
                case 3:
                case 4: //jackpot
                    this.showEffectJackpot(this.lastSpinRes.prize, function () {
                        _this.showLineWins();
                    });
                    break;
                case 6: //thang sieu lon
                    this.showEffectBigWin(this.lastSpinRes.prize, function () {
                        _this.showLineWins();
                    });
                    break;
                case 5: //bonus
                    this.showEffectBonus(function () {
                        if (_this.soundSlotState == 1) {
                            _this.remoteMusicBackground = cc.audioEngine.playMusic(_this.soundBgBonus, true);
                        }
                        _this.actPopupBonus(function () {
                            if (_this.soundSlotState == 1) {
                                _this.remoteMusicBackground = cc.audioEngine.playMusic(_this.soundBg, true);
                            }
                            _this.showLineWins();
                        });
                    });
                    break;
            }
        }
    };
    Slot3Controller.prototype.onBtnSoundSumary = function () {
    };
    Slot3Controller.prototype.onBtnSoundTouchBonus = function () {
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
    };
    Slot3Controller.prototype.actBack = function () {
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        SlotNetworkClient_1.default.getInstance().send(new Slot3_Cmd_1.default.SendUnSubcribe(this.betIdx));
        cc.audioEngine.stopAll();
        App_1.default.instance.loadScene("Lobby");
    };
    Slot3Controller.prototype.actHidden = function () {
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        this.showToast(App_1.default.instance.getTextLang('txt_function_in_development'));
    };
    Slot3Controller.prototype.actBetUp = function () {
        var _this = this;
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        if (this.toggleTrial.isChecked) {
            this.showToast(App_1.default.instance.getTextLang('txt_slot_error'));
            return;
        }
        if (this.betIdx < this.listBet.length - 1) {
            SlotNetworkClient_1.default.getInstance().send(new Slot3_Cmd_1.default.SendChangeRoom(this.betIdx, ++this.betIdx));
            this.lblBet.string = this.listBetLabel[this.betIdx];
            Tween_1.default.numberTo(this.lblTotalBet, this.arrLineSelect.length * this.listBet[this.betIdx], 0.3, function (n) {
                return _this.moneyToK(n);
            });
        }
    };
    Slot3Controller.prototype.actBetDown = function () {
        var _this = this;
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        if (this.toggleTrial.isChecked) {
            this.showToast(App_1.default.instance.getTextLang('txt_slot_error'));
            return;
        }
        if (this.betIdx > 0) {
            SlotNetworkClient_1.default.getInstance().send(new Slot3_Cmd_1.default.SendChangeRoom(this.betIdx, --this.betIdx));
            this.lblBet.string = this.listBetLabel[this.betIdx];
            Tween_1.default.numberTo(this.lblTotalBet, this.arrLineSelect.length * this.listBet[this.betIdx], 0.3, function (n) { return _this.moneyToK(n); });
        }
    };
    Slot3Controller.prototype.randomBetween = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    Slot3Controller.prototype.settingMusic = function () {
        // this.toggleMusic.isChecked = !this.toggleMusic.isChecked;
        if (this.toggleMusic.isChecked) {
            cc.audioEngine.stop(this.remoteMusicBackground);
            this.musicSlotState = 0;
            this.soundSlotState = 0;
        }
        else {
            var musicId = this.randomBetween(0, 4);
            this.remoteMusicBackground = cc.audioEngine.playMusic(this.soundBg, true);
            this.musicSlotState = 1;
            this.soundSlotState = 1;
        }
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        cc.sys.localStorage.setItem("music_Slot_3", "" + this.musicSlotState);
        cc.sys.localStorage.setItem("sound_Slot_3", "" + this.soundSlotState);
    };
    Slot3Controller.prototype.actPopupBonus = function (cb) {
        var _this = this;
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        if (this.popupBonus == null) {
            BundleControl_1.default.loadPrefabGame("Slot3", "res/thantai/prefabs/PopupBonus", function (finish, total) {
                App_1.default.instance.showErrLoading(App_1.default.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
                App_1.default.instance.showLoading(false);
                _this.popupBonus = cc.instantiate(prefab).getComponent("Slot3.PopupBonus");
                _this.popupBonus.node.active = true;
                _this.popupBonus.node.parent = cc.director.getScene().getChildByName("Canvas");
                _this.popupBonus.showBonus(_this.toggleTrial.isChecked ? 100 : _this.listBet[_this.betIdx], _this.lastSpinRes.haiSao, _this, cb);
            });
        }
        else {
            this.popupBonus.node.active = true;
            this.popupBonus.showBonus(this.toggleTrial.isChecked ? 100 : this.listBet[this.betIdx], this.lastSpinRes.haiSao, this, cb);
        }
    };
    Slot3Controller.prototype.actLine = function () {
        var _this = this;
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        if (this.toggleTrial.isChecked) {
            this.showToast(App_1.default.instance.getTextLang('txt_slot_error'));
            return;
        }
        if (this.popupSelectLine == null) {
            BundleControl_1.default.loadPrefabGame("Slot3", "res/thantai/prefabs/PopupSelectLine", function (finish, total) {
                App_1.default.instance.showErrLoading(App_1.default.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
                App_1.default.instance.showLoading(false);
                _this.popupSelectLine = cc.instantiate(prefab).getComponent("Slot3.PopupSelectLine");
                _this.popupSelectLine.node.parent = cc.director.getScene().getChildByName("Canvas");
                _this.popupSelectLine.onSelectedChanged = function (lines) {
                    _this.arrLineSelect = lines;
                    _this.lblLine.string = _this.arrLineSelect.length.toString();
                    _this.lblTotalBet.string = Utils_1.default.formatMoney(_this.arrLineSelect.length * _this.listBet[_this.betIdx]);
                };
                _this.popupSelectLine.show();
            });
        }
        else {
            this.popupSelectLine.show();
        }
    };
    Slot3Controller.prototype.actGuide = function () {
        var _this = this;
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        if (this.toggleTrial.isChecked) {
            this.showToast(App_1.default.instance.getTextLang('txt_slot_error'));
            return;
        }
        if (this.popupGuide == null) {
            BundleControl_1.default.loadPrefabGame("Slot3", "res/thantai/prefabs/PopupGuide", function (finish, total) {
                App_1.default.instance.showErrLoading(App_1.default.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
                App_1.default.instance.showLoading(false);
                _this.popupGuide = cc.instantiate(prefab).getComponent("Slot3.PopupGuide");
                _this.popupGuide.node.parent = cc.director.getScene().getChildByName("Canvas");
                _this.popupGuide.show();
            });
        }
        else {
            this.popupGuide.show();
        }
    };
    Slot3Controller.prototype.actHistoryJackpot = function () {
        var _this = this;
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        if (this.toggleTrial.isChecked) {
            this.showToast(App_1.default.instance.getTextLang('txt_slot_error'));
            return;
        }
        if (this.popupJackpotHistory == null) {
            BundleControl_1.default.loadPrefabGame("Slot3", "res/thantai/prefabs/PopupJackpotHistory", function (finish, total) {
                App_1.default.instance.showErrLoading(App_1.default.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
                App_1.default.instance.showLoading(false);
                _this.popupJackpotHistory = cc.instantiate(prefab).getComponent("Slot3.PopupJackpotHistory");
                _this.popupJackpotHistory.node.parent = cc.director.getScene().getChildByName("Canvas");
                _this.popupJackpotHistory.show();
            });
        }
        else {
            this.popupJackpotHistory.show();
        }
    };
    Slot3Controller.prototype.actHistory = function () {
        var _this = this;
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        if (this.toggleTrial.isChecked) {
            this.showToast(App_1.default.instance.getTextLang('txt_slot_error'));
            return;
        }
        if (this.popupHistory == null) {
            BundleControl_1.default.loadPrefabGame("Slot3", "res/thantai/prefabs/PopupHistory", function (finish, total) {
                App_1.default.instance.showErrLoading(App_1.default.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
                App_1.default.instance.showLoading(false);
                _this.popupHistory = cc.instantiate(prefab).getComponent("Slot3.PopupHistory");
                _this.popupHistory.node.parent = cc.director.getScene().getChildByName("Canvas");
                _this.popupHistory.show();
            });
        }
        else {
            this.popupHistory.show();
        }
    };
    Slot3Controller.prototype.toggleTrialOnCheck = function () {
        if (this.toggleTrial.isChecked) {
            this.lblLine.string = "25";
            this.lblBet.string = "100";
            this.lblTotalBet.string = Utils_1.default.formatMoney(250000);
        }
        else {
            this.lblLine.string = this.arrLineSelect.length.toString();
            this.lblBet.string = this.listBetLabel[this.betIdx];
            this.lblTotalBet.string = Utils_1.default.formatMoney(this.arrLineSelect.length * this.listBet[this.betIdx]);
        }
    };
    Slot3Controller.prototype.toggleAutoOnCheck = function () {
        if (this.toggleAuto.isChecked && this.toggleTrial.isChecked) {
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
    Slot3Controller.prototype.toggleBoostOnCheck = function () {
        if (this.toggleBoost.isChecked && this.toggleTrial.isChecked) {
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
    Slot3Controller.prototype.changeItemToDark = function (state) {
        for (var i = 0; i < this.columns.childrenCount; i++) {
            var col = this.columns.children[i];
            for (var j = 0; j < col.childrenCount; j++) {
                var item = col.children[j];
                var sprite = item.getComponentInChildren(cc.Sprite);
                var spine = item.getComponentInChildren(sp.Skeleton);
                sprite.node.color = state ? cc.Color.GRAY : cc.Color.WHITE;
                spine.node.color = state ? cc.Color.GRAY : cc.Color.WHITE;
                if (state) {
                    sprite.node.active = true;
                    spine.node.active = false;
                }
            }
        }
    };
    Slot3Controller.prototype.setDarkItem = function (item, state) {
        var spine = item.getComponentInChildren(sp.Skeleton);
        var sprite = item.getComponentInChildren(cc.Sprite);
        sprite.node.color = state ? cc.Color.GRAY : cc.Color.WHITE;
        spine.node.color = state ? cc.Color.GRAY : cc.Color.WHITE;
        if (!state) {
            if (item['id'] && item['id'] < 5 && item['animationName'] && item['animationName'] != "") {
                sprite.node.active = false;
                spine.node.active = true;
                spine.setAnimation(0, item['animationName'], true);
            }
            else {
                sprite.node.active = true;
                spine.node.active = false;
            }
        }
        else {
            sprite.node.active = true;
            spine.node.active = false;
        }
    };
    __decorate([
        property(cc.Node)
    ], Slot3Controller.prototype, "nodeCoin", void 0);
    __decorate([
        property(cc.Toggle)
    ], Slot3Controller.prototype, "toggleMusic", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Slot3Controller.prototype, "sprFrameItems", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Slot3Controller.prototype, "sprFrameItemsBlur", void 0);
    __decorate([
        property(cc.Node)
    ], Slot3Controller.prototype, "columns", void 0);
    __decorate([
        property(cc.Node)
    ], Slot3Controller.prototype, "itemTemplate", void 0);
    __decorate([
        property(cc.Node)
    ], Slot3Controller.prototype, "linesWin", void 0);
    __decorate([
        property(cc.Node)
    ], Slot3Controller.prototype, "iconWildColumns", void 0);
    __decorate([
        property(cc.Label)
    ], Slot3Controller.prototype, "lblJackpot", void 0);
    __decorate([
        property(cc.Label)
    ], Slot3Controller.prototype, "lblBet", void 0);
    __decorate([
        property(cc.Label)
    ], Slot3Controller.prototype, "lblLine", void 0);
    __decorate([
        property(cc.Label)
    ], Slot3Controller.prototype, "lblTotalBet", void 0);
    __decorate([
        property(cc.Label)
    ], Slot3Controller.prototype, "lblCoin", void 0);
    __decorate([
        property(cc.Label)
    ], Slot3Controller.prototype, "lblWinNow", void 0);
    __decorate([
        property(cc.Label)
    ], Slot3Controller.prototype, "lblFreeSpinCount", void 0);
    __decorate([
        property(cc.Toggle)
    ], Slot3Controller.prototype, "toggleAuto", void 0);
    __decorate([
        property(cc.Toggle)
    ], Slot3Controller.prototype, "toggleBoost", void 0);
    __decorate([
        property(cc.Toggle)
    ], Slot3Controller.prototype, "toggleTrial", void 0);
    __decorate([
        property(cc.Button)
    ], Slot3Controller.prototype, "btnSpin", void 0);
    __decorate([
        property(cc.Button)
    ], Slot3Controller.prototype, "btnBack", void 0);
    __decorate([
        property(cc.Button)
    ], Slot3Controller.prototype, "btnBetUp", void 0);
    __decorate([
        property(cc.Button)
    ], Slot3Controller.prototype, "btnBetDown", void 0);
    __decorate([
        property(cc.Button)
    ], Slot3Controller.prototype, "btnLine", void 0);
    __decorate([
        property(cc.Node)
    ], Slot3Controller.prototype, "toast", void 0);
    __decorate([
        property(cc.Node)
    ], Slot3Controller.prototype, "effectWinCash", void 0);
    __decorate([
        property(cc.Node)
    ], Slot3Controller.prototype, "effectBigWin", void 0);
    __decorate([
        property(cc.Node)
    ], Slot3Controller.prototype, "effectJackpot", void 0);
    __decorate([
        property(cc.Node)
    ], Slot3Controller.prototype, "effectBonus", void 0);
    __decorate([
        property(cc.Node)
    ], Slot3Controller.prototype, "effectFreeSpin", void 0);
    __decorate([
        property(Slot3_PopupSelectLine_1.default)
    ], Slot3Controller.prototype, "popupSelectLine", void 0);
    __decorate([
        property(Slot3_PopupGuide_1.default)
    ], Slot3Controller.prototype, "popupGuide", void 0);
    __decorate([
        property(Slot3_PopupJackpotHistory_1.default)
    ], Slot3Controller.prototype, "popupJackpotHistory", void 0);
    __decorate([
        property(Slot3_PopupHistory_1.default)
    ], Slot3Controller.prototype, "popupHistory", void 0);
    __decorate([
        property(Slot3_PopupBonus_1.default)
    ], Slot3Controller.prototype, "popupBonus", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot3Controller.prototype, "soundBg", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot3Controller.prototype, "soundBgBonus", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot3Controller.prototype, "soundClick", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot3Controller.prototype, "soundBonusFail", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot3Controller.prototype, "soundFreeSpin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot3Controller.prototype, "soundGoldEarn", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot3Controller.prototype, "soundJackpot", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot3Controller.prototype, "soundSpinResult", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot3Controller.prototype, "soundSpinSpinning", void 0);
    __decorate([
        property({ type: sp.SkeletonData })
    ], Slot3Controller.prototype, "spineIcon", void 0);
    __decorate([
        property([sp.SkeletonData])
    ], Slot3Controller.prototype, "spineIconList", void 0);
    Slot3Controller = __decorate([
        ccclass
    ], Slot3Controller);
    return Slot3Controller;
}(cc.Component));
exports.default = Slot3Controller;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDNcXFNsb3QzU2NyaXB0XFxTbG90My5TbG90M0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQThCO0FBRTlCLHFEQUFnRDtBQUNoRCxpRUFBc0Q7QUFDdEQsdURBQTRDO0FBQzVDLDJEQUFnRDtBQUNoRCxpRUFBNEQ7QUFDNUQsNkZBQXdGO0FBQ3hGLHFFQUFnRTtBQUNoRSxxRUFBZ0U7QUFDaEUsNkZBQWdGO0FBQ2hGLCtGQUEwRjtBQUMxRixpRUFBNEQ7QUFDNUQsdURBQTRDO0FBQzVDLDJEQUFnRDtBQUNoRCx5RUFBOEQ7QUFDOUQsK0RBQXlEO0FBQ3pELElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7QUFDWixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQThtQ0M7UUE1bUNHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsbUJBQWEsR0FBcUIsRUFBRSxDQUFDO1FBRXJDLHVCQUFpQixHQUFxQixFQUFFLENBQUM7UUFHekMsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBR2hDLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0Isc0JBQWdCLEdBQWEsSUFBSSxDQUFDO1FBR2xDLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRzlCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFMUIsYUFBTyxHQUFjLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFHMUIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUcvQixxQkFBZSxHQUFvQixJQUFJLENBQUM7UUFFeEMsZ0JBQVUsR0FBZSxJQUFJLENBQUM7UUFFOUIseUJBQW1CLEdBQXdCLElBQUksQ0FBQztRQUVoRCxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsZ0JBQVUsR0FBZSxJQUFJLENBQUM7UUFHOUIsYUFBTyxHQUFpQixJQUFJLENBQUM7UUFFN0Isa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBSWxDLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUVoQyxvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFFcEMsbUJBQWEsR0FBaUIsSUFBSSxDQUFDO1FBRW5DLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUVuQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMscUJBQWUsR0FBaUIsSUFBSSxDQUFDO1FBRXJDLHVCQUFpQixHQUFpQixJQUFJLENBQUM7UUFJdkMsZUFBUyxHQUFvQixJQUFJLENBQUM7UUFFbEMsbUJBQWEsR0FBc0IsRUFBRSxDQUFDO1FBQy9CLG1CQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLHdCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUN4QixzQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIsa0JBQVksR0FBRyxHQUFHLENBQUM7UUFDbkIscUJBQWUsR0FBRyxHQUFHLENBQUM7UUFDdEIsZ0JBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsYUFBTyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3QixrQkFBWSxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUMxQyxtQkFBYSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUcsY0FBUSxHQUFHLElBQUksQ0FBQztRQUNQLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsYUFBTyxHQUFHO1lBQ3ZCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUNwQixDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDakIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDakIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNsQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUNuQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxF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QUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZHLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNHLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVHLEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0RCxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFELEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0QsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyRCxLQUFJLENBQUMsY0FB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QUUsQ0FBQztzREFDRjtJQUVsQztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQzswREFDVTtJQXRHckIsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQThtQ25DO0lBQUQsc0JBQUM7Q0E5bUNELEFBOG1DQyxDQTltQzRDLEVBQUUsQ0FBQyxTQUFTLEdBOG1DeEQ7a0JBOW1Db0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbWQgZnJvbSBcIi4vU2xvdDMuQ21kXCI7XG5cbmltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgUG9wdXBTZWxlY3RMaW5lIGZyb20gXCIuL1Nsb3QzLlBvcHVwU2VsZWN0TGluZVwiO1xuaW1wb3J0IFBvcHVwQm9udXMgZnJvbSBcIi4vU2xvdDMuUG9wdXBCb251c1wiO1xuaW1wb3J0IFRyaWFsUmVzdWx0cyBmcm9tIFwiLi9TbG90My5UcmlhbFJlc3VsdHNcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgQnJvYWRjYXN0UmVjZWl2ZXIgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQnJvYWRjYXN0UmVjZWl2ZXJcIjtcbmltcG9ydCBUd2VlbiBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9Ud2VlblwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgSW5QYWNrZXQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLkluUGFja2V0XCI7XG5pbXBvcnQgU2xvdE5ldHdvcmtDbGllbnQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9TbG90TmV0d29ya0NsaWVudFwiO1xuaW1wb3J0IEJ1bmRsZUNvbnRyb2wgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0J1bmRsZUNvbnRyb2xcIjtcbmltcG9ydCBQb3B1cEd1aWRlIGZyb20gXCIuL1Nsb3QzLlBvcHVwR3VpZGVcIjtcbmltcG9ydCBQb3B1cEhpc3RvcnkgZnJvbSBcIi4vU2xvdDMuUG9wdXBIaXN0b3J5XCI7XG5pbXBvcnQgUG9wdXBKYWNrcG90SGlzdG9yeSBmcm9tIFwiLi9TbG90My5Qb3B1cEphY2twb3RIaXN0b3J5XCI7XG5pbXBvcnQgbG9iYnlDTUQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L0xvYmJ5LkNtZFwiO1xudmFyIFRXID0gY2MudHdlZW47XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdDNDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlQ29pbjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZSlcbiAgICB0b2dnbGVNdXNpYzogY2MuVG9nZ2xlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBzcHJGcmFtZUl0ZW1zOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgc3ByRnJhbWVJdGVtc0JsdXI6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvbHVtbnM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGl0ZW1UZW1wbGF0ZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGluZXNXaW46IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGljb25XaWxkQ29sdW1uczogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsSmFja3BvdDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxCZXQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsTGluZTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxUb3RhbEJldDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxDb2luOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFdpbk5vdzogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxGcmVlU3BpbkNvdW50OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlKVxuICAgIHRvZ2dsZUF1dG86IGNjLlRvZ2dsZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZSlcbiAgICB0b2dnbGVCb29zdDogY2MuVG9nZ2xlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlKVxuICAgIHRvZ2dsZVRyaWFsOiBjYy5Ub2dnbGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG5TcGluOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgYnRuQmFjazogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0bkJldFVwOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgYnRuQmV0RG93bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0bkxpbmU6IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0b2FzdDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBlZmZlY3RXaW5DYXNoOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBlZmZlY3RCaWdXaW46IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVmZmVjdEphY2twb3Q6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVmZmVjdEJvbnVzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBlZmZlY3RGcmVlU3BpbjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoUG9wdXBTZWxlY3RMaW5lKVxuICAgIHBvcHVwU2VsZWN0TGluZTogUG9wdXBTZWxlY3RMaW5lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoUG9wdXBHdWlkZSlcbiAgICBwb3B1cEd1aWRlOiBQb3B1cEd1aWRlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoUG9wdXBKYWNrcG90SGlzdG9yeSlcbiAgICBwb3B1cEphY2twb3RIaXN0b3J5OiBQb3B1cEphY2twb3RIaXN0b3J5ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoUG9wdXBIaXN0b3J5KVxuICAgIHBvcHVwSGlzdG9yeTogUG9wdXBIaXN0b3J5ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoUG9wdXBCb251cylcbiAgICBwb3B1cEJvbnVzOiBQb3B1cEJvbnVzID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHNvdW5kQmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgc291bmRCZ0JvbnVzOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgICBzb3VuZENsaWNrOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHNvdW5kQm9udXNGYWlsOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHNvdW5kRnJlZVNwaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgc291bmRHb2xkRWFybjogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgICBzb3VuZEphY2twb3Q6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgc291bmRTcGluUmVzdWx0OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHNvdW5kU3BpblNwaW5uaW5nOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBzcC5Ta2VsZXRvbkRhdGEgfSlcbiAgICBzcGluZUljb246IHNwLlNrZWxldG9uRGF0YSA9IG51bGw7XG4gICAgQHByb3BlcnR5KFtzcC5Ta2VsZXRvbkRhdGFdKVxuICAgIHNwaW5lSWNvbkxpc3Q6IHNwLlNrZWxldG9uRGF0YVtdID0gW107XG4gICAgcHVibGljIGRhaUx5RnJlZVNwaW4gPSAwO1xuICAgIHByaXZhdGUgcm9sbFN0YXJ0SXRlbUNvdW50ID0gMTU7XG4gICAgcHJpdmF0ZSByb2xsQWRkSXRlbUNvdW50ID0gMTA7XG4gICAgcHJpdmF0ZSBzcGluRHVyYXRpb24gPSAxLjI7XG4gICAgcHJpdmF0ZSBhZGRTcGluRHVyYXRpb24gPSAwLjM7XG4gICAgcHJpdmF0ZSBpdGVtSGVpZ2h0ID0gMDtcbiAgICBwcml2YXRlIGJldElkeCA9IDA7XG4gICAgcHJpdmF0ZSBsaXN0QmV0ID0gWzEwMCwgMTAwMCwgMTAwMDBdO1xuICAgIHByaXZhdGUgbGlzdEJldExhYmVsID0gW1wiMTAwXCIsIFwiMS4wMDBcIiwgXCIxMC4wMDBcIl07XG4gICAgcHJpdmF0ZSBhcnJMaW5lU2VsZWN0ID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMCwgMjEsIDIyLCAyMywgMjQsIDI1XTtcbiAgICBwcml2YXRlIGlzU3BpbmVkID0gdHJ1ZTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHdpbGRJdGVtSWQgPSAyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgbWFwTGluZSA9IFtcbiAgICAgICAgWzUsIDYsIDcsIDgsIDldLC8vMVxuICAgICAgICBbMCwgMSwgMiwgMywgNF0sLy8yXG4gICAgICAgIFsxMCwgMTEsIDEyLCAxMywgMTRdLC8vM1xuICAgICAgICBbMTAsIDYsIDIsIDgsIDE0XSwvLzRcbiAgICAgICAgWzAsIDYsIDEyLCA4LCA0XSwvLzVcbiAgICAgICAgWzUsIDEsIDIsIDMsIDldLC8vNlxuICAgICAgICBbNSwgMTEsIDEyLCAxMywgOV0sLy83XG4gICAgICAgIFswLCAxLCA3LCAxMywgMTRdLC8vOFxuICAgICAgICBbMTAsIDExLCA3LCAzLCA0XSwvLzlcbiAgICAgICAgWzUsIDExLCA3LCAzLCA5XSwvLzEwXG4gICAgICAgIFs1LCAxLCA3LCAxMywgOV0sLy8xMVxuICAgICAgICBbMCwgNiwgNywgOCwgNF0sLy8xMlxuICAgICAgICBbMTAsIDYsIDcsIDgsIDE0XSwvLzEzXG4gICAgICAgIFswLCA2LCAyLCA4LCA0XSwvLzE0XG4gICAgICAgIFsxMCwgNiwgMTIsIDgsIDE0XSwvLzE1XG4gICAgICAgIFs1LCA2LCAyLCA4LCA5XSwvLzE2XG4gICAgICAgIFs1LCA2LCAxMiwgOCwgOV0sLy8xN1xuICAgICAgICBbMCwgMSwgMTIsIDMsIDRdLC8vMThcbiAgICAgICAgWzEwLCAxMSwgMiwgMTMsIDE0XSwvLzE5XG4gICAgICAgIFswLCAxMSwgMTIsIDEzLCA0XSwvLzIwXG4gICAgICAgIFsxMCwgMSwgMiwgMywgMTRdLC8vMjFcbiAgICAgICAgWzUsIDEsIDEyLCAzLCA5XSwvLzIzXG4gICAgICAgIFs1LCAxMSwgMiwgMTMsIDldLC8vMjJcbiAgICAgICAgWzAsIDExLCAyLCAxMywgNF0sLy8yNFxuICAgICAgICBbMTAsIDEsIDEyLCAzLCAxNF0vLzI1XG4gICAgXTtcbiAgICBwcml2YXRlIGxhc3RTcGluUmVzOiBjbWQuUmVjZWl2ZVBsYXkgPSBudWxsO1xuICAgIHByaXZhdGUgY29sdW1uc1dpbGQgPSBbXTtcbiAgICBwcml2YXRlIGN1cnJlbnROdW1iZXJGcmVlU3BpbiA9IDA7XG4gICAgcHJpdmF0ZSBtdXRpcGxlSnBOb2RlID0gbnVsbDtcbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5kYWlMeUZyZWVTcGluID0gMDtcbiAgICAgICAgdmFyIG11c2ljU2F2ZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm11c2ljX1Nsb3RfM1wiKTtcblxuICAgICAgICBpZiAobXVzaWNTYXZlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMubXVzaWNTbG90U3RhdGUgPSBwYXJzZUludChtdXNpY1NhdmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tdXNpY1Nsb3RTdGF0ZSA9IDE7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtdXNpY19TbG90XzNcIiwgXCIxXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc291bmRTYXZlIDogICAwID09IE9GRiAsIDEgPT0gT05cbiAgICAgICAgdmFyIHNvdW5kU2F2ZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm11c2ljX1Nsb3RfM1wiKTtcbiAgICAgICAgaWYgKHNvdW5kU2F2ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNvdW5kU2xvdFN0YXRlID0gcGFyc2VJbnQoc291bmRTYXZlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc291bmRTbG90U3RhdGUgPSAxO1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXVzaWNfU2xvdF8zXCIsIFwiMVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm11c2ljU2xvdFN0YXRlID09IDApIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlTXVzaWMuaXNDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlTXVzaWMuaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5tdXNpY1Nsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICB2YXIgbXVzaWNJZCA9IHRoaXMucmFuZG9tQmV0d2VlbigwLCA0KTtcbiAgICAgICAgICAgIHRoaXMucmVtb3RlTXVzaWNCYWNrZ3JvdW5kID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuc291bmRCZywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQmcsIHRydWUsIDEpO1xuICAgICAgICB0aGlzLml0ZW1IZWlnaHQgPSB0aGlzLml0ZW1UZW1wbGF0ZS5oZWlnaHQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNvbHVtbiA9IHRoaXMuY29sdW1ucy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IHRoaXMucm9sbFN0YXJ0SXRlbUNvdW50ICsgaSAqIHRoaXMucm9sbEFkZEl0ZW1Db3VudDtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY291bnQ7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtVGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihzcC5Ta2VsZXRvbikubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpdGVtLnBhcmVudCA9IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBpZiAoaiA+PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SXRlbVNwcml0ZShpdGVtLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLCB0aGlzLnNwckZyYW1lSXRlbXNCbHVyW1V0aWxzLnJhbmRvbVJhbmdlSW50KDAsIHRoaXMuc3ByRnJhbWVJdGVtc0JsdXIubGVuZ3RoKV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SXRlbVNwcml0ZShpdGVtLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLCB0aGlzLnNwckZyYW1lSXRlbXNbVXRpbHMucmFuZG9tUmFuZ2VJbnQoMCwgdGhpcy5zcHJGcmFtZUl0ZW1zLmxlbmd0aCldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9IG51bGw7XG5cbiAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5hZGRPbkNsb3NlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWN0QmFjaygpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZFN1YmNyaWJlKHRoaXMuYmV0SWR4KSk7XG4gICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuYWRkTGlzdGVuZXIoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGxldCBpbnBhY2tldCA9IG5ldyBJblBhY2tldChkYXRhKTtcbiAgICAgICAgICAgIHN3aXRjaCAoaW5wYWNrZXQuZ2V0Q21kSWQoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgbG9iYnlDTUQuQ29kZS5VUERBVEVfSkFDS1BPVF9TTE9UUzpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBsb2JieUNNRC5SZXNVcGRhdGVKYWNrcG90U2xvdHMoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzSnNvbiA9IEpTT04ucGFyc2UocmVzLnBvdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gLy8gIGNjLmxvZyhcIlVQREFURV9KQUNLUE9UX1NMT1RTOlwiK0pTT04uc3RyaW5naWZ5KHJlc0pzb24pKTtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuRlJFRV9EQUlfTFk6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy50b2dnbGVUcmlhbC5pc0NoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlRnJlZURhaUx5KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGFpTHlGcmVlU3BpbiA9IHJlcy5mcmVlU3BpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuREFURV9YMjpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZURhdGVYMihkYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkRBVEVfWDI6XCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE51bWJlckZyZWVTcGluID0gcmVzLmZyZWVTcGluICsgdGhpcy5kYWlMeUZyZWVTcGluO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5mcmVlU3BpbiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibEZyZWVTcGluQ291bnQubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibEZyZWVTcGluQ291bnQuc3RyaW5nID0gcmVzLmZyZWVTcGluLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibEZyZWVTcGluQ291bnQubm9kZS5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5VUERBVEVfUE9UOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlVXBkYXRlUG90KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxKYWNrcG90LCByZXMuamFja3BvdCwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlBMQVk6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVQbGF5KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gLy8gIGNjLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblNwaW5SZXN1bHQocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG5cblxuICAgICAgIFxuICAgICAgICB0aGlzLnN0b3BTaG93TGluZXNXaW4oKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VJdGVtVG9EYXJrKGZhbHNlKTtcbiAgICAgICAgdGhpcy50b2FzdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lZmZlY3RXaW5DYXNoLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVmZmVjdEphY2twb3QuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZWZmZWN0QmlnV2luLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxibFRvdGFsQmV0LnN0cmluZyA9IFV0aWxzLmZvcm1hdE1vbmV5KHRoaXMuYXJyTGluZVNlbGVjdC5sZW5ndGggKiB0aGlzLmxpc3RCZXRbdGhpcy5iZXRJZHhdKTtcblxuXG4gICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnJlZ2lzdGVyKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4sICgpID0+IHtcbiAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsQ29pbiwgQ29uZmlncy5Mb2dpbi5Db2luLCAwLjMpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcblxuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoXCLEkGFuZyBr4bq/dCBu4buRaSB04bubaSBzZXJ2ZXIuLi5cIik7XG4gICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuY2hlY2tDb25uZWN0KCgpID0+IHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmJ0blNwaW4ubm9kZS5nZXRDaGlsZEJ5TmFtZShcImljX2Fycm93XCIpKS5ieSgxLjAsIHsgYW5nbGU6IC0zNjAgfSkucmVwZWF0Rm9yZXZlcigpLnN0YXJ0KCk7XG4gICAgICAgIC8vdGhpcy5pbml0TXV0aXBsZUpQTm9kZSgpO1xuICAgIH1cbiAgICBpbml0TXV0aXBsZUpQTm9kZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLm11dGlwbGVKcE5vZGUpIHtcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoXCJMb2JieVwiKS5sb2FkKFwicHJlZmFicy9NdXRpcGxlSmFja3BvdFByXCIsIGNjLlByZWZhYiwgZnVuY3Rpb24gKGZpbmlzaCwgdG90YWwsIGl0ZW0pIHtcbiAgICAgICAgICAgIH0sIChlcnIxLCBwcmVmYWI6IGNjLlByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIxICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcImVycnIgbG9hZCBnYW1lIFRJRU5MRU46XCIsIGVycjEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXV0aXBsZUpwTm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYikuZ2V0Q29tcG9uZW50KFwiTXV0aXBsZUphY2twb3RcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXV0aXBsZUpwTm9kZS5ub2RlLnBhcmVudCA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q2hpbGRCeU5hbWUoXCJDYW52YXNcIilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tdXRpcGxlSnBOb2RlLnNldEluZm8oXCJUSEFOVEFJXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dUb2FzdChtc2c6IHN0cmluZykge1xuICAgICAgICB0aGlzLnRvYXN0LmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyA9IG1zZztcbiAgICAgICAgdGhpcy50b2FzdC5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aGlzLnRvYXN0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMudG9hc3QucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgyKSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50b2FzdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSkpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG1vbmV5VG9LKG1vbmV5OiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICAvLyBpZiAobW9uZXkgPCAxMDAwMCkge1xuICAgICAgICAvLyAgICAgcmV0dXJuIG1vbmV5LnRvU3RyaW5nKCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gbW9uZXkgPSBwYXJzZUludCgobW9uZXkgLyAxMDAwKS50b1N0cmluZygpKTtcbiAgICAgICAgcmV0dXJuIFV0aWxzLmZvcm1hdE1vbmV5KG1vbmV5KTtcbiAgICAgICAgLy8gcmV0dXJuIG1vbmV5LnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRFbmFibGVkQWxsQnV0dG9ucyhlbmFibGVkOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuYnRuU3Bpbi5pbnRlcmFjdGFibGUgPSBlbmFibGVkO1xuICAgICAgICB0aGlzLmJ0bkJhY2suaW50ZXJhY3RhYmxlID0gZW5hYmxlZDtcbiAgICAgICAgdGhpcy5idG5CZXRVcC5pbnRlcmFjdGFibGUgPSBlbmFibGVkO1xuICAgICAgICB0aGlzLmJ0bkJldERvd24uaW50ZXJhY3RhYmxlID0gZW5hYmxlZDtcbiAgICAgICAgdGhpcy5idG5MaW5lLmludGVyYWN0YWJsZSA9IGVuYWJsZWQ7XG4gICAgICAgIHRoaXMudG9nZ2xlVHJpYWwuaW50ZXJhY3RhYmxlID0gZW5hYmxlZDtcbiAgICAgICAgaWYgKGVuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYnRuU3Bpbi5ub2RlLmdldENoaWxkQnlOYW1lKFwiaWNfYXJyb3dcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLmJ0blNwaW4ubm9kZS5nZXRDaGlsZEJ5TmFtZShcImljX2Fycm93XCIpKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuYnRuU3Bpbi5ub2RlLmdldENoaWxkQnlOYW1lKFwiaWNfYXJyb3dcIikpLmJ5KDEuMCwgeyBhbmdsZTogLTM2MCB9KS5yZXBlYXRGb3JldmVyKCkuc3RhcnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnRuU3Bpbi5ub2RlLmdldENoaWxkQnlOYW1lKFwiaWNfYXJyb3dcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgc3RvcEFsbEVmZmVjdHMoKSB7XG4gICAgICAgIHRoaXMuZWZmZWN0SmFja3BvdC5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aGlzLmVmZmVjdEphY2twb3QuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZWZmZWN0QmlnV2luLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuZWZmZWN0QmlnV2luLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVmZmVjdEZyZWVTcGluLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuZWZmZWN0RnJlZVNwaW4uYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdG9wU2hvd0xpbmVzV2luKCkge1xuICAgICAgICB0aGlzLmxpbmVzV2luLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saW5lc1dpbi5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubGluZXNXaW4uY2hpbGRyZW5baV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmljb25XaWxkQ29sdW1ucy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuaWNvbldpbGRDb2x1bW5zLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RvcEFsbEl0ZW1FZmZlY3QoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0b3BBbGxJdGVtRWZmZWN0KCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sdW1ucy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjb2wgPSB0aGlzLmNvbHVtbnMuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbC5jaGlsZHJlbkNvdW50OyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGNvbC5jaGlsZHJlbltqXTtcbiAgICAgICAgICAgICAgICBpdGVtLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgaXRlbS5zY2FsZSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNwaW4oKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1NwaW5lZCkgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTcGluU3Bpbm5pbmcsIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKCF0aGlzLnRvZ2dsZVRyaWFsLmlzQ2hlY2tlZCkge1xuXG5cbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnROdW1iZXJGcmVlU3BpbiA8PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKENvbmZpZ3MuTG9naW4uQ29pbiA8IHRoaXMubGlzdEJldFt0aGlzLmJldElkeF0gKiB0aGlzLmFyckxpbmVTZWxlY3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9ub3RfZW5vdWdoXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgY3VyTW9uZXkgPSBDb25maWdzLkxvZ2luLkNvaW4gLSB0aGlzLmFyckxpbmVTZWxlY3QubGVuZ3RoICogdGhpcy5saXN0QmV0W3RoaXMuYmV0SWR4XTtcbiAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxibENvaW4sIGN1ck1vbmV5LCAwLjMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TnVtYmVyRnJlZVNwaW4tLTtcbiAgICAgICAgICAgICAgICB0aGlzLmxibEZyZWVTcGluQ291bnQuc3RyaW5nID0gdGhpcy5jdXJyZW50TnVtYmVyRnJlZVNwaW4gKyBcIlwiO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnROdW1iZXJGcmVlU3BpbiA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE51bWJlckZyZWVTcGluID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxGcmVlU3BpbkNvdW50Lm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXNTcGluZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlSXRlbVRvRGFyayhmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnN0b3BBbGxFZmZlY3RzKCk7XG4gICAgICAgICAgICB0aGlzLnN0b3BTaG93TGluZXNXaW4oKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RW5hYmxlZEFsbEJ1dHRvbnMoZmFsc2UpO1xuICAgICAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZFBsYXkodGhpcy5hcnJMaW5lU2VsZWN0LnRvU3RyaW5nKCkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNTcGluZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlSXRlbVRvRGFyayhmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnN0b3BBbGxFZmZlY3RzKCk7XG4gICAgICAgICAgICB0aGlzLnN0b3BTaG93TGluZXNXaW4oKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RW5hYmxlZEFsbEJ1dHRvbnMoZmFsc2UpO1xuICAgICAgICAgICAgdmFyIHJJZHggPSBVdGlscy5yYW5kb21SYW5nZUludCgwLCBUcmlhbFJlc3VsdHMucmVzdWx0cy5sZW5ndGgpO1xuICAgICAgICAgICAgdGhpcy5vblNwaW5SZXN1bHQoVHJpYWxSZXN1bHRzLnJlc3VsdHNbcklkeF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdG9wU3BpbigpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbHVtbnMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcm9sbCA9IHRoaXMuY29sdW1ucy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIHJvbGwuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgIHJvbGwuc2V0UG9zaXRpb24oY2MudjIocm9sbC5nZXRQb3NpdGlvbigpLngsIDApKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2hvd0xpbmVXaW5zKCkge1xuICAgICAgICB0aGlzLmlzU3BpbmVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5saW5lc1dpbi56SW5kZXggPSAyO1xuICAgICAgICB0aGlzLmNvbHVtbnMuekluZGV4ID0gMTtcbiAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxXaW5Ob3csIHRoaXMubGFzdFNwaW5SZXMucHJpemUsIDAuMyk7XG4gICAgICAgIGlmICghdGhpcy50b2dnbGVUcmlhbC5pc0NoZWNrZWQpIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG4gICAgICAgIGlmICghdGhpcy50b2dnbGVBdXRvLmlzQ2hlY2tlZCAmJiAhdGhpcy50b2dnbGVCb29zdC5pc0NoZWNrZWQpIHRoaXMuc2V0RW5hYmxlZEFsbEJ1dHRvbnModHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5saW5lc1dpbi5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICBsZXQgbGluZXNXaW4gPSB0aGlzLmxhc3RTcGluUmVzLmxpbmVzV2luLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgbGluZXNXaW4gPSBVdGlscy5yZW1vdmVEdXBzKGxpbmVzV2luKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lc1dpbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGxpbmVzV2luW2ldID09IFwiMFwiKSB7XG4gICAgICAgICAgICAgICAgbGluZXNXaW4uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgbWF0cml4ID0gdGhpcy5sYXN0U3BpblJlcy5tYXRyaXguc3BsaXQoXCIsXCIpO1xuICAgICAgICBsZXQgbGluZXNXaW5DaGlsZHJlbiA9IHRoaXMubGluZXNXaW4uY2hpbGRyZW47XG4gICAgICAgIGxldCByb2xscyA9IHRoaXMuY29sdW1ucy5jaGlsZHJlbjtcbiAgICAgICAgbGV0IGFjdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lc1dpbkNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsaW5lc1dpbkNoaWxkcmVuW2ldLmFjdGl2ZSA9IGxpbmVzV2luLmluZGV4T2YoXCJcIiArIChpICsgMSkpID49IDA7O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxhc3RTcGluUmVzLnByaXplID4gMCkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VJdGVtVG9EYXJrKHRydWUpO1xuICAgICAgICAgICAgdGhpcy5zaG93V2luQ2FzaCh0aGlzLmxhc3RTcGluUmVzLnByaXplKTtcbiAgICAgICAgICAgIGFjdGlvbnMucHVzaChjYy5kZWxheVRpbWUoMS41KSk7XG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXNXaW5DaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsaW5lc1dpbkNoaWxkcmVuW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIGFjdGlvbnMucHVzaChjYy5kZWxheVRpbWUoMC4zKSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMudG9nZ2xlQm9vc3QuaXNDaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lc1dpbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGluZUlkeCA9IHBhcnNlSW50KGxpbmVzV2luW2ldKSAtIDE7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsaW5lID0gbGluZXNXaW5DaGlsZHJlbltsaW5lSWR4XTtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGluZXNXaW4uekluZGV4ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29sdW1ucy56SW5kZXggPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gLy8gIGNjLmxvZyhcIj09PT09PT09PT09PT09PT06IFwiICsgbGluZUlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbUxpbmUgPSB0aGlzLm1hcExpbmVbbGluZUlkeF07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY291bnRJdGVtV2luID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaXNydEl0ZW1JZCA9IG1hdHJpeFttTGluZVswXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1MaW5lLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1JZCA9IG1hdHJpeFttTGluZVtqXV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpc3J0SXRlbUlkID09IGl0ZW1JZCB8fCBwYXJzZUludChpdGVtSWQpID09IHRoaXMud2lsZEl0ZW1JZCB8fCB0aGlzLmNvbHVtbnNXaWxkLmluZGV4T2YoaikgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAvLyAgY2MubG9nKFwiPT1cIiArIGl0ZW1JZCArIFwiIGo6XCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRJdGVtV2luKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3VudEl0ZW1XaW47IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtUm93ID0gcGFyc2VJbnQoKG1MaW5lW2pdIC8gNSkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSByb2xsc1tqXS5jaGlsZHJlblsyIC0gaXRlbVJvd107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucnVuQWN0aW9uKGNjLnJlcGVhdEZvcmV2ZXIoY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4yLCAxLjEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMiwgMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXJrSXRlbShpdGVtLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAvLyAgY2MubG9nKFwibGluZUlkeDogXCIgKyBsaW5lSWR4ICsgXCJmaXNydEl0ZW1JZDogXCIgKyBmaXNydEl0ZW1JZCArIFwiIGNvdW50SXRlbVdpbjogXCIgKyBjb3VudEl0ZW1XaW4pO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnMucHVzaChjYy5kZWxheVRpbWUoMSkpO1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlSXRlbVRvRGFyayh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcEFsbEl0ZW1FZmZlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goY2MuZGVsYXlUaW1lKDAuMSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aW9ucy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgYWN0aW9ucy5wdXNoKGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvL2ZpeGVkIGNhbGwgY2Muc2VxdWVuY2UuYXBwbHlcbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9XG4gICAgICAgIGFjdGlvbnMucHVzaChjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUl0ZW1Ub0RhcmsoZmFsc2UpO1xuICAgICAgICAgICAgaWYgKHRoaXMudG9nZ2xlQm9vc3QuaXNDaGVja2VkIHx8IHRoaXMudG9nZ2xlQXV0by5pc0NoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwaW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLmxpbmVzV2luLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZS5hcHBseShudWxsLCBhY3Rpb25zKSk7XG4gICAgfVxuICAgIHByaXZhdGUgc2hvd0NvaW5zKHByaXplKSB7XG4gICAgICAgIHZhciBudW1iZXIgPSBwcml6ZSAvIDIwMDAwO1xuICAgICAgICBpZiAobnVtYmVyIDw9IDEwKSBudW1iZXIgPSAxMDtcbiAgICAgICAgZWxzZSBpZiAobnVtYmVyID49IDMwKSBudW1iZXIgPSAzMDtcbiAgICAgICAgLy8gIGNjLmxvZyhcInNob3dDb2luczpcIiArIG51bWJlcik7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93Q29pbnMobnVtYmVyLCB0aGlzLmVmZmVjdFdpbkNhc2gsIHRoaXMubm9kZUNvaW4pO1xuICAgIH1cbiAgICBwcml2YXRlIHNob3dXaW5DYXNoKGNhc2g6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRHb2xkRWFybiwgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvd0NvaW5zKGNhc2gpO1xuICAgICAgICB0aGlzLmVmZmVjdFdpbkNhc2guc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5lZmZlY3RXaW5DYXNoLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGxldCBsYWJlbCA9IHRoaXMuZWZmZWN0V2luQ2FzaC5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKTtcbiAgICAgICAgbGFiZWwuc3RyaW5nID0gXCIwXCI7XG4gICAgICAgIHRoaXMuZWZmZWN0V2luQ2FzaC5vcGFjaXR5ID0gMDtcbiAgICAgICAgdGhpcy5lZmZlY3RXaW5DYXNoLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgIGNjLmZhZGVJbigwLjMpLFxuICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKGxhYmVsLCBjYXNoLCAwLjUpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoMS41KSxcbiAgICAgICAgICAgIGNjLmZhZGVPdXQoMC4zKSxcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVmZmVjdFdpbkNhc2guYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICApKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dFZmZlY3RGcmVlU3BpbihjYjogKCkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLmVmZmVjdEZyZWVTcGluLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuZWZmZWN0RnJlZVNwaW4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbGV0IHNwaW5lID0gdGhpcy5lZmZlY3RGcmVlU3Bpbi5nZXRDb21wb25lbnRJbkNoaWxkcmVuKHNwLlNrZWxldG9uKTtcbiAgICAgICAgc3BpbmUuc2V0QW5pbWF0aW9uKDAsIFwiYW5pbWF0aW9uXCIsIGZhbHNlKTtcbiAgICAgICAgc3BpbmUuc2V0Q29tcGxldGVMaXN0ZW5lcigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVmZmVjdEZyZWVTcGluLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGNiICE9IG51bGwpIGNiKCk7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgLy8gdGhpcy5lZmZlY3RGcmVlU3Bpbi5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgIC8vICAgICBjYy5kZWxheVRpbWUoMSksXG4gICAgICAgIC8vICAgICBjYy5kZWxheVRpbWUoMyksXG4gICAgICAgIC8vICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG5cbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vICkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2hvd0VmZmVjdEJpZ1dpbihjYXNoOiBudW1iZXIsIGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEdvbGRFYXJuLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lZmZlY3RCaWdXaW4uc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5lZmZlY3RCaWdXaW4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lZmZlY3RCaWdXaW4uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwidGhhbmcgc2lldSBsb24yXCIsIHRydWUpO1xuICAgICAgICBsZXQgbGFiZWwgPSB0aGlzLmVmZmVjdEJpZ1dpbi5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKTtcbiAgICAgICAgbGFiZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmVmZmVjdEJpZ1dpbi5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAvLyBjYy5kZWxheVRpbWUoMSksXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICBsYWJlbC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8obGFiZWwsIGNhc2gsIDEpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoMyksXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZmZlY3RCaWdXaW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGNiICE9IG51bGwpIGNiKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dFZmZlY3RKYWNrcG90KGNhc2g6IG51bWJlciwgY2I6ICgpID0+IHZvaWQgPSBudWxsKSB7XG4gICAgICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEphY2twb3QsIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVmZmVjdEphY2twb3Quc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5lZmZlY3RKYWNrcG90LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZWZmZWN0SmFja3BvdC5nZXRDb21wb25lbnRJbkNoaWxkcmVuKHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJhbmltYXRpb25cIiwgdHJ1ZSk7XG4gICAgICAgIGxldCBsYWJlbCA9IHRoaXMuZWZmZWN0SmFja3BvdC5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKTtcbiAgICAgICAgbGFiZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmVmZmVjdEphY2twb3QucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgLy8gY2MuZGVsYXlUaW1lKDEpLFxuICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxhYmVsLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgbGFiZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKGxhYmVsLCBjYXNoLCAxKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDMpLFxuICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZWZmZWN0SmFja3BvdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoY2IgIT0gbnVsbCkgY2IoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2hvd0VmZmVjdEJvbnVzKGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNwaW5SZXN1bHQsIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVmZmVjdEJvbnVzLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuZWZmZWN0Qm9udXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5lZmZlY3RCb251cy5nZXRDb21wb25lbnRJbkNoaWxkcmVuKHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJhbmltYXRpb25cIiwgZmFsc2UpO1xuXG4gICAgICAgIC8vIHRoaXMuZWZmZWN0Qm9udXMucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAvLyAgICAgY2MuZGVsYXlUaW1lKDMpLFxuICAgICAgICAvLyAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAvLyB0aGlzLmVmZmVjdEJvbnVzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyBpZiAoY2IgIT0gbnVsbCkgY2IoKTtcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vICkpO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmVmZmVjdEJvbnVzKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWZmZWN0Qm9udXMuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiYW5pbWF0aW9uXCIsIHRydWUpO1xuICAgICAgICB9KS5kZWxheSgzLjApLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lZmZlY3RCb251cy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChjYiAhPSBudWxsKSBjYigpO1xuICAgICAgICB9KS5zdGFydCgpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNwaW5SZXN1bHQocmVzOiBjbWQuUmVjZWl2ZVBsYXkgfCBhbnkpIHtcbiAgICAgICAgdGhpcy5zdG9wU3BpbigpO1xuICAgICAgICAvLyAgY2MubG9nKFwib25TcGluUmVzdWx0OlwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgIHZhciBzdWNjZXNzUmVzdWx0ID0gWzAsIDEsIDIsIDMsIDQsIDUsIDZdO1xuICAgICAgICAvL3Jlcy5yZXN1bHQgPT0gNSAvL2JvbnVzXG4gICAgICAgIC8vcmVzLnJlc3VsdCA9PSAwIC8va2hvbmcgYW5cbiAgICAgICAgLy9yZXMucmVzdWx0ID09IDEgLy90aGFuZyB0aHVvbmdcbiAgICAgICAgLy9yZXMucmVzdWx0ID09IDIgLy90aGFuZyBsb25cbiAgICAgICAgLy9yZXMucmVzdWx0ID09IDMgLy9ubyBodVxuICAgICAgICAvL3Jlcy5yZXN1bHQgPT0gNiAvL3RoYW5nIGN1YyBsb25cbiAgICAgICAgLy8gcmVzID0gSlNPTi5wYXJzZSgne1wiX3Bvc1wiOjEzNixcIl9kYXRhXCI6e1wiMFwiOjEsXCIxXCI6NDYsXCIyXCI6MjI1LFwiM1wiOjAsXCI0XCI6MCxcIjVcIjowLFwiNlwiOjAsXCI3XCI6MCxcIjhcIjowLFwiOVwiOjAsXCIxMFwiOjE2LFwiMTFcIjoxNjIsXCIxMlwiOjIsXCIxM1wiOjAsXCIxNFwiOjMwLFwiMTVcIjo1MyxcIjE2XCI6NDQsXCIxN1wiOjQ5LFwiMThcIjo0OCxcIjE5XCI6NDQsXCIyMFwiOjU2LFwiMjFcIjo0NCxcIjIyXCI6NTEsXCIyM1wiOjQ0LFwiMjRcIjo1NCxcIjI1XCI6NDQsXCIyNlwiOjUzLFwiMjdcIjo0NCxcIjI4XCI6NTQsXCIyOVwiOjQ0LFwiMzBcIjo1MixcIjMxXCI6NDQsXCIzMlwiOjUxLFwiMzNcIjo0NCxcIjM0XCI6NTIsXCIzNVwiOjQ0LFwiMzZcIjo1MixcIjM3XCI6NDQsXCIzOFwiOjUwLFwiMzlcIjo0NCxcIjQwXCI6NTAsXCI0MVwiOjQ0LFwiNDJcIjo1MixcIjQzXCI6NDQsXCI0NFwiOjUyLFwiNDVcIjowLFwiNDZcIjo2NSxcIjQ3XCI6NDksXCI0OFwiOjQ0LFwiNDlcIjo1MCxcIjUwXCI6NDQsXCI1MVwiOjUxLFwiNTJcIjo0NCxcIjUzXCI6NTIsXCI1NFwiOjQ0LFwiNTVcIjo1MyxcIjU2XCI6NDQsXCI1N1wiOjU0LFwiNThcIjo0NCxcIjU5XCI6NTUsXCI2MFwiOjQ0LFwiNjFcIjo1NixcIjYyXCI6NDQsXCI2M1wiOjU3LFwiNjRcIjo0NCxcIjY1XCI6NDksXCI2NlwiOjQ4LFwiNjdcIjo0NCxcIjY4XCI6NDksXCI2OVwiOjQ5LFwiNzBcIjo0NCxcIjcxXCI6NDksXCI3MlwiOjUwLFwiNzNcIjo0NCxcIjc0XCI6NDksXCI3NVwiOjUxLFwiNzZcIjo0NCxcIjc3XCI6NDksXCI3OFwiOjUyLFwiNzlcIjo0NCxcIjgwXCI6NDksXCI4MVwiOjUzLFwiODJcIjo0NCxcIjgzXCI6NDksXCI4NFwiOjU0LFwiODVcIjo0NCxcIjg2XCI6NDksXCI4N1wiOjU1LFwiODhcIjo0NCxcIjg5XCI6NDksXCI5MFwiOjU2LFwiOTFcIjo0NCxcIjkyXCI6NDksXCI5M1wiOjU3LFwiOTRcIjo0NCxcIjk1XCI6NTAsXCI5NlwiOjQ4LFwiOTdcIjo0NCxcIjk4XCI6NTAsXCI5OVwiOjQ5LFwiMTAwXCI6NDQsXCIxMDFcIjo1MCxcIjEwMlwiOjUwLFwiMTAzXCI6NDQsXCIxMDRcIjo1MCxcIjEwNVwiOjUxLFwiMTA2XCI6NDQsXCIxMDdcIjo1MCxcIjEwOFwiOjUyLFwiMTA5XCI6NDQsXCIxMTBcIjo1MCxcIjExMVwiOjUzLFwiMTEyXCI6MCxcIjExM1wiOjAsXCIxMTRcIjowLFwiMTE1XCI6MCxcIjExNlwiOjAsXCIxMTdcIjowLFwiMTE4XCI6MCxcIjExOVwiOjEsXCIxMjBcIjoxLFwiMTIxXCI6MjA4LFwiMTIyXCI6MCxcIjEyM1wiOjAsXCIxMjRcIjowLFwiMTI1XCI6MCxcIjEyNlwiOjIsXCIxMjdcIjoxMDAsXCIxMjhcIjoxMTEsXCIxMjlcIjo4NCxcIjEzMFwiOjAsXCIxMzFcIjowLFwiMTMyXCI6MCxcIjEzM1wiOjAsXCIxMzRcIjowLFwiMTM1XCI6MH0sXCJfbGVuZ3RoXCI6MTM2LFwiX2NvbnRyb2xsZXJJZFwiOjEsXCJfY21kSWRcIjoxMjAwMSxcIl9lcnJvclwiOjAsXCJyZWZcIjo0MjU4LFwicmVzdWx0XCI6MixcIm1hdHJpeFwiOlwiNSwxMCw4LDMsNiw1LDYsNCwzLDQsNCwyLDIsNCw0XCIsXCJsaW5lc1dpblwiOlwiMSwyLDMsNCw1LDYsNyw4LDksMTAsMTEsMTIsMTMsMTQsMTUsMTYsMTcsMTgsMTksMjAsMjEsMjIsMjMsMjQsMjVcIixcImhhaVNhb1wiOlwiXCIsXCJwcml6ZVwiOjY2MDAwLFwiY3VycmVudE1vbmV5XCI6NDAxMzY1MzIsXCJmcmVlU3BpblwiOjAsXCJpc0ZyZWVcIjpmYWxzZSxcIml0ZW1zV2lsZFwiOlwiXCIsXCJyYXRpb1wiOjAsXCJjdXJyZW50TnVtYmVyRnJlZVNwaW5cIjowfScpO1xuICAgICAgICBpZiAoc3VjY2Vzc1Jlc3VsdC5pbmRleE9mKHJlcy5yZXN1bHQpID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5pc1NwaW5lZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQXV0by5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQXV0by5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy50b2dnbGVCb29zdC5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQm9vc3QuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcblxuXG4gICAgICAgICAgICB0aGlzLnNldEVuYWJsZWRBbGxCdXR0b25zKHRydWUpO1xuICAgICAgICAgICAgc3dpdGNoIChyZXMucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxMDI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25vdF9lbm91Z2gnKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Vua25vd25fZXJyb3IxJykpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnROdW1iZXJGcmVlU3BpbiA9IHJlcy5jdXJyZW50TnVtYmVyRnJlZVNwaW47XG4gICAgICAgIHRoaXMubGFzdFNwaW5SZXMgPSByZXM7XG4gICAgICAgIHRoaXMuY29sdW1uc1dpbGQubGVuZ3RoID0gMDtcblxuICAgICAgICBpZiAoIXRoaXMudG9nZ2xlVHJpYWwuaXNDaGVja2VkKSB7XG4gICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW4gPSByZXMuY3VycmVudE1vbmV5O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1hdHJpeCA9IHJlcy5tYXRyaXguc3BsaXQoXCIsXCIpO1xuICAgICAgICBsZXQgdGltZVNjYWxlID0gdGhpcy50b2dnbGVCb29zdC5pc0NoZWNrZWQgPyAwLjUgOiAxO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sdW1ucy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb2xsID0gdGhpcy5jb2x1bW5zLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgbGV0IHN0ZXAxUG9zID0gdGhpcy5pdGVtSGVpZ2h0ICogMC4zO1xuICAgICAgICAgICAgbGV0IHN0ZXAyUG9zID0gLXRoaXMuaXRlbUhlaWdodCAqIHJvbGwuY2hpbGRyZW5Db3VudCArIHRoaXMuaXRlbUhlaWdodCAqIDMgLSB0aGlzLml0ZW1IZWlnaHQgKiAwLjM7XG4gICAgICAgICAgICBsZXQgc3RlcDNQb3MgPSAtdGhpcy5pdGVtSGVpZ2h0ICogcm9sbC5jaGlsZHJlbkNvdW50ICsgdGhpcy5pdGVtSGVpZ2h0ICogMztcbiAgICAgICAgICAgIFRXKHJvbGwpLmRlbGF5KDAuMiAqIGkgKiB0aW1lU2NhbGUpXG4gICAgICAgICAgICAgICAgLnRvKDAuMiAqIHRpbWVTY2FsZSwgeyB4OiByb2xsLnBvc2l0aW9uLngsIHk6IHN0ZXAxUG9zIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcucXVhZE91dCB9KVxuICAgICAgICAgICAgICAgIC50byh0aGlzLnNwaW5EdXJhdGlvbiArIHRoaXMuYWRkU3BpbkR1cmF0aW9uICogaSwgeyB4OiByb2xsLnBvc2l0aW9uLngsIHk6IHN0ZXAyUG9zIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcucXVhZEluT3V0IH0pXG4gICAgICAgICAgICAgICAgLnRvKDAuMiAqIHRpbWVTY2FsZSwgeyB4OiByb2xsLngsIHk6IHN0ZXAzUG9zIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcucXVhZEluIH0pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb2xsLnNldFBvc2l0aW9uKGNjLnYyKHJvbGwucG9zaXRpb24ueCwgMCkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2ZpbmQgY29sdW1ucyB3aWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1hdHJpeC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChtYXRyaXhbal0pID09IHRoaXMud2lsZEl0ZW1JZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYyA9IGogJSA1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb2x1bW5zV2lsZC5pbmRleE9mKGMpID09IC0xKSB0aGlzLmNvbHVtbnNXaWxkLnB1c2goYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy9yZXBsYWNlIHdpbGQgaXRlbXMgaW4gY29sdW1uc1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnNXaWxkLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGMgPSB0aGlzLmNvbHVtbnNXaWxkW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY29sdW1ucy5jaGlsZHJlbltjXS5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbUFuaW1JY29uID0gY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1BbmltSWNvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtQW5pbUljb24uc2tlbGV0b25EYXRhID0gdGhpcy5zcGluZUljb25MaXN0WzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtQW5pbUljb24uc2V0QW5pbWF0aW9uKDAsIFwiSmFja3BvdFwiLCB0cnVlKTsgLy90aHVjIHJhIGxhIHdpbGQuYmEgRmlvIGRlIG5oYW0gdGVuLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtQW5pbUljb24ubm9kZS55ID0gLTYwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEl0ZW1TcHJpdGUoY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5TcHJpdGUpLCB0aGlzLnNwckZyYW1lSXRlbXNbMl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbltpXVsnaWQnXSA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2ldWydhbmltYXRpb25OYW1lJ10gPSBcIkphY2twb3RcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5TcHJpdGUpLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWNvbldpbGRDb2x1bW5zLmNoaWxkcmVuW2NdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pY29uV2lsZENvbHVtbnMuY2hpbGRyZW5bY10uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5hbmltYXRpb24gPSBcIndpbGQgZGFpXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pY29uV2lsZENvbHVtbnMuY2hpbGRyZW5bY10uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5sb29wID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTcGluUmVzdWx0LCBmYWxzZSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29sdW1uc1dpbGQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGwucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMi42KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmljb25XaWxkQ29sdW1ucy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmljb25XaWxkQ29sdW1ucy5jaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwaW5lZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwaW5lZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgIFRXKHJvbGwpXG4gICAgICAgICAgICAgICAgLmRlbGF5KCgwLjQ3ICsgMC4yICogaSkgKiB0aW1lU2NhbGUpXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSByb2xsLmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEl0ZW1TcHJpdGUoY2hpbGRyZW5bMl0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSksIHRoaXMuc3ByRnJhbWVJdGVtc1twYXJzZUludChtYXRyaXhbaV0pXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SXRlbVNwcml0ZShjaGlsZHJlblsxXS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSwgdGhpcy5zcHJGcmFtZUl0ZW1zW3BhcnNlSW50KG1hdHJpeFs1ICsgaV0pXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SXRlbVNwcml0ZShjaGlsZHJlblswXS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSwgdGhpcy5zcHJGcmFtZUl0ZW1zW3BhcnNlSW50KG1hdHJpeFsxMCArIGldKV0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoaWxkcmVuWzJdWydpZCddID0gcGFyc2VJbnQobWF0cml4WzEwICsgaV0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGlsZHJlblsxXVsnaWQnXSA9IHBhcnNlSW50KG1hdHJpeFs1ICsgaV0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGlsZHJlblswXVsnaWQnXSA9IHBhcnNlSW50KG1hdHJpeFsxMCArIGldKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbTEgPSBjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0yID0gY2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoIC0gMl07XG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtMyA9IGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aCAtIDNdO1xuICAgICAgICAgICAgICAgICAgICBpdGVtMVsnaWQnXSA9IHBhcnNlSW50KG1hdHJpeFtpXSk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0yWydpZCddID0gcGFyc2VJbnQobWF0cml4WzUgKyBpXSk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0zWydpZCddID0gcGFyc2VJbnQobWF0cml4WzEwICsgaV0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEl0ZW1TcHJpdGUoaXRlbTEuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSksIHRoaXMuc3ByRnJhbWVJdGVtc1twYXJzZUludChtYXRyaXhbaV0pXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SXRlbVNwcml0ZShpdGVtMi5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSwgdGhpcy5zcHJGcmFtZUl0ZW1zW3BhcnNlSW50KG1hdHJpeFs1ICsgaV0pXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SXRlbVNwcml0ZShpdGVtMy5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSwgdGhpcy5zcHJGcmFtZUl0ZW1zW3BhcnNlSW50KG1hdHJpeFsxMCArIGldKV0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrSWNvblNwaW5lKGNoaWxkcmVuWzJdLCBwYXJzZUludChtYXRyaXhbaV0pKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0ljb25TcGluZShjaGlsZHJlblsxXSwgcGFyc2VJbnQobWF0cml4WzUgKyBpXSkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrSWNvblNwaW5lKGNoaWxkcmVuWzBdLCBwYXJzZUludChtYXRyaXhbMTAgKyBpXSkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrSWNvblNwaW5lKGl0ZW0zLCBwYXJzZUludChtYXRyaXhbMTAgKyBpXSkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrSWNvblNwaW5lKGl0ZW0yLCBwYXJzZUludChtYXRyaXhbNSArIGldKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tJY29uU3BpbmUoaXRlbTEsIHBhcnNlSW50KG1hdHJpeFtpXSkpO1xuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBjaGVja0ljb25TcGluZShpdGVtLCBpZFNwcml0ZSkge1xuICAgICAgICBpZFNwcml0ZSA9IGlkU3ByaXRlICsgMTtcblxuICAgICAgICBsZXQgc3BpbmUgPSBpdGVtLmdldENvbXBvbmVudEluQ2hpbGRyZW4oc3AuU2tlbGV0b24pO1xuICAgICAgICBzcGluZS5za2VsZXRvbkRhdGEgPSB0aGlzLnNwaW5lSWNvbjtcbiAgICAgICAgbGV0IHNwcml0ZSA9IGl0ZW0uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5TcHJpdGUpO1xuICAgICAgICBzcGluZS5ub2RlLnkgPSAtNjY7XG4gICAgICAgIC8vIHNwcml0ZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyBzcGluZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHNwaW5lLm5vZGUuc2NhbGUgPSAwLjY7XG4gICAgICAgIGxldCBhbmltTmFtZSA9IFwiXCI7XG4gICAgICAgIHN3aXRjaCAoaWRTcHJpdGUpIHtcbiAgICAgICAgICAgIGNhc2UgMToge1xuICAgICAgICAgICAgICAgIHNwaW5lLnNrZWxldG9uRGF0YSA9IHRoaXMuc3BpbmVJY29uTGlzdFsyXTtcbiAgICAgICAgICAgICAgICBzcGluZS5ub2RlLnNjYWxlID0gMC42NTtcbiAgICAgICAgICAgICAgICBhbmltTmFtZSA9IFwiU2NhdHRlcjJcIjtcbiAgICAgICAgICAgICAgICAvLyBzcGluZS5zZXRBbmltYXRpb24oMCwgXCJTY2F0dGVyMlwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgMjoge1xuICAgICAgICAgICAgICAgIHNwaW5lLm5vZGUuc2NhbGUgPSAwLjY1O1xuICAgICAgICAgICAgICAgIC8vIHNwaW5lLnNldEFuaW1hdGlvbigwLCBcImJvbnVzXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgIGFuaW1OYW1lID0gXCJib251c1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAzOiB7Ly93aWxkXG4gICAgICAgICAgICAgICAgc3BpbmUuc2tlbGV0b25EYXRhID0gdGhpcy5zcGluZUljb25MaXN0WzBdO1xuICAgICAgICAgICAgICAgIC8vIHNwaW5lLnNldEFuaW1hdGlvbigwLCBcIkphY2twb3RcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgYW5pbU5hbWUgPSBcIkphY2twb3RcIjtcbiAgICAgICAgICAgICAgICBzcGluZS5ub2RlLnkgPSAtNjA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIDQ6IHsvL2phY2twb3RcbiAgICAgICAgICAgICAgICBzcGluZS5za2VsZXRvbkRhdGEgPSB0aGlzLnNwaW5lSWNvbkxpc3RbMV07XG4gICAgICAgICAgICAgICAgc3BpbmUubm9kZS5zY2FsZSA9IDAuMjM7XG4gICAgICAgICAgICAgICAgLy8gc3BpbmUuc2V0QW5pbWF0aW9uKDAsIFwiYW5pbWF0aW9uXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgIGFuaW1OYW1lID0gXCJhbmltYXRpb25cIjtcbiAgICAgICAgICAgICAgICBzcGluZS5ub2RlLnkgPSAtMTIyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIHNwaW5lLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc3ByaXRlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpdGVtWydhbmltYXRpb25OYW1lJ10gPSBhbmltTmFtZSAhPSBcIlwiID8gYW5pbU5hbWUgOiBudWxsO1xuICAgIH1cbiAgICBwcml2YXRlIHNldEl0ZW1TcHJpdGUoc3ByLCBmcmFtZSkge1xuICAgICAgICBzcHIuc3ByaXRlRnJhbWUgPSBmcmFtZTtcbiAgICAgICAgc3ByLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLlRSSU1NRUQ7XG4gICAgICAgIHNwci5ub2RlLnNldENvbnRlbnRTaXplKGNjLnNpemUoc3ByLm5vZGUud2lkdGggLyAxLCBzcHIubm9kZS5oZWlnaHQgLyAxKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzcGluZWQoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudE51bWJlckZyZWVTcGluID0gdGhpcy5sYXN0U3BpblJlcy5jdXJyZW50TnVtYmVyRnJlZVNwaW47XG4gICAgICAgIGlmICh0aGlzLmxhc3RTcGluUmVzLmN1cnJlbnROdW1iZXJGcmVlU3BpbiA+IDApIHtcbiAgICAgICAgICAgIHRoaXMubGJsRnJlZVNwaW5Db3VudC5ub2RlLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sYmxGcmVlU3BpbkNvdW50LnN0cmluZyA9IHRoaXMuY3VycmVudE51bWJlckZyZWVTcGluLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxibEZyZWVTcGluQ291bnQubm9kZS5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGFzdFNwaW5SZXMuZnJlZVNwaW4gPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5zaG93RWZmZWN0RnJlZVNwaW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xpbmVXaW5zKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBzdWNjZXNzUmVzdWx0ID0gWzAsIDEsIDMsIDQsIDUsIDZdO1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmxhc3RTcGluUmVzLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDovL2sgYW5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TGluZVdpbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOi8vIHRoYW5nIHRodW9uZ1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dMaW5lV2lucygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6Ly8gdGhhbmcgbG9uXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0VmZmVjdEJpZ1dpbih0aGlzLmxhc3RTcGluUmVzLnByaXplLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dMaW5lV2lucygpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOiBjYXNlIDQ6Ly9qYWNrcG90XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0VmZmVjdEphY2twb3QodGhpcy5sYXN0U3BpblJlcy5wcml6ZSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TGluZVdpbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNjovL3RoYW5nIHNpZXUgbG9uXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0VmZmVjdEJpZ1dpbih0aGlzLmxhc3RTcGluUmVzLnByaXplLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dMaW5lV2lucygpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA1Oi8vYm9udXNcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RWZmZWN0Qm9udXMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3RlTXVzaWNCYWNrZ3JvdW5kID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuc291bmRCZ0JvbnVzLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RQb3B1cEJvbnVzKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3RlTXVzaWNCYWNrZ3JvdW5kID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuc291bmRCZywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xpbmVXaW5zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25CdG5Tb3VuZFN1bWFyeSgpIHtcblxuICAgIH1cblxuICAgIG9uQnRuU291bmRUb3VjaEJvbnVzKCkge1xuICAgICAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWN0QmFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kVW5TdWJjcmliZSh0aGlzLmJldElkeCkpO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5sb2FkU2NlbmUoXCJMb2JieVwiKTtcbiAgICB9XG5cbiAgICBhY3RIaWRkZW4oKSB7XG4gICAgICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfZnVuY3Rpb25faW5fZGV2ZWxvcG1lbnQnKSk7XG4gICAgfVxuXG4gICAgYWN0QmV0VXAoKSB7XG4gICAgICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudG9nZ2xlVHJpYWwuaXNDaGVja2VkKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9zbG90X2Vycm9yJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJldElkeCA8IHRoaXMubGlzdEJldC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kQ2hhbmdlUm9vbSh0aGlzLmJldElkeCwgKyt0aGlzLmJldElkeCkpO1xuICAgICAgICAgICAgdGhpcy5sYmxCZXQuc3RyaW5nID0gdGhpcy5saXN0QmV0TGFiZWxbdGhpcy5iZXRJZHhdO1xuICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxUb3RhbEJldCwgdGhpcy5hcnJMaW5lU2VsZWN0Lmxlbmd0aCAqIHRoaXMubGlzdEJldFt0aGlzLmJldElkeF0sIDAuMywgKG4pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tb25leVRvSyhuKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWN0QmV0RG93bigpIHtcbiAgICAgICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50b2dnbGVUcmlhbC5pc0NoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Nsb3RfZXJyb3InKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYmV0SWR4ID4gMCkge1xuICAgICAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZENoYW5nZVJvb20odGhpcy5iZXRJZHgsIC0tdGhpcy5iZXRJZHgpKTtcbiAgICAgICAgICAgIHRoaXMubGJsQmV0LnN0cmluZyA9IHRoaXMubGlzdEJldExhYmVsW3RoaXMuYmV0SWR4XTtcbiAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsVG90YWxCZXQsIHRoaXMuYXJyTGluZVNlbGVjdC5sZW5ndGggKiB0aGlzLmxpc3RCZXRbdGhpcy5iZXRJZHhdLCAwLjMsIChuKSA9PiB7IHJldHVybiB0aGlzLm1vbmV5VG9LKG4pIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmFuZG9tQmV0d2VlbihtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG11c2ljU2xvdFN0YXRlID0gbnVsbDtcbiAgICBwcml2YXRlIHNvdW5kU2xvdFN0YXRlID0gbnVsbDtcbiAgICBwcml2YXRlIHJlbW90ZU11c2ljQmFja2dyb3VuZCA9IG51bGw7XG4gICAgc2V0dGluZ011c2ljKCkge1xuICAgICAgICAvLyB0aGlzLnRvZ2dsZU11c2ljLmlzQ2hlY2tlZCA9ICF0aGlzLnRvZ2dsZU11c2ljLmlzQ2hlY2tlZDtcbiAgICAgICAgaWYgKHRoaXMudG9nZ2xlTXVzaWMuaXNDaGVja2VkKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMucmVtb3RlTXVzaWNCYWNrZ3JvdW5kKTtcbiAgICAgICAgICAgIHRoaXMubXVzaWNTbG90U3RhdGUgPSAwO1xuICAgICAgICAgICAgdGhpcy5zb3VuZFNsb3RTdGF0ZSA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbXVzaWNJZCA9IHRoaXMucmFuZG9tQmV0d2VlbigwLCA0KTtcbiAgICAgICAgICAgIHRoaXMucmVtb3RlTXVzaWNCYWNrZ3JvdW5kID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuc291bmRCZywgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLm11c2ljU2xvdFN0YXRlID0gMTtcbiAgICAgICAgICAgIHRoaXMuc291bmRTbG90U3RhdGUgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXVzaWNfU2xvdF8zXCIsIFwiXCIgKyB0aGlzLm11c2ljU2xvdFN0YXRlKTtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic291bmRfU2xvdF8zXCIsIFwiXCIgKyB0aGlzLnNvdW5kU2xvdFN0YXRlKTtcbiAgICB9XG4gICAgYWN0UG9wdXBCb251cyhjYikge1xuICAgICAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBvcHVwQm9udXMgPT0gbnVsbCkge1xuICAgICAgICAgICAgQnVuZGxlQ29udHJvbC5sb2FkUHJlZmFiR2FtZShcIlNsb3QzXCIsIFwicmVzL3RoYW50YWkvcHJlZmFicy9Qb3B1cEJvbnVzXCIsIChmaW5pc2gsIHRvdGFsKSA9PiB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dFcnJMb2FkaW5nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvYWRpbmcxJykgKyBwYXJzZUludCgoZmluaXNoIC8gdG90YWwpICogMTAwKSArIFwiJVwiKTtcbiAgICAgICAgICAgIH0sIHByZWZhYiA9PiB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwQm9udXMgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChcIlNsb3QzLlBvcHVwQm9udXNcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEJvbnVzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwQm9udXMubm9kZS5wYXJlbnQgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEJvbnVzLnNob3dCb251cyh0aGlzLnRvZ2dsZVRyaWFsLmlzQ2hlY2tlZCA/IDEwMCA6IHRoaXMubGlzdEJldFt0aGlzLmJldElkeF0sIHRoaXMubGFzdFNwaW5SZXMuaGFpU2FvLCB0aGlzLCBjYik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBCb251cy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnBvcHVwQm9udXMuc2hvd0JvbnVzKHRoaXMudG9nZ2xlVHJpYWwuaXNDaGVja2VkID8gMTAwIDogdGhpcy5saXN0QmV0W3RoaXMuYmV0SWR4XSwgdGhpcy5sYXN0U3BpblJlcy5oYWlTYW8sIHRoaXMsIGNiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhY3RMaW5lKCkge1xuICAgICAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRvZ2dsZVRyaWFsLmlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfc2xvdF9lcnJvcicpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wb3B1cFNlbGVjdExpbmUgPT0gbnVsbCkge1xuICAgICAgICAgICAgQnVuZGxlQ29udHJvbC5sb2FkUHJlZmFiR2FtZShcIlNsb3QzXCIsIFwicmVzL3RoYW50YWkvcHJlZmFicy9Qb3B1cFNlbGVjdExpbmVcIiwgKGZpbmlzaCwgdG90YWwpID0+IHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9hZGluZzEnKSArIHBhcnNlSW50KChmaW5pc2ggLyB0b3RhbCkgKiAxMDApICsgXCIlXCIpO1xuICAgICAgICAgICAgfSwgcHJlZmFiID0+IHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBTZWxlY3RMaW5lID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKS5nZXRDb21wb25lbnQoXCJTbG90My5Qb3B1cFNlbGVjdExpbmVcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cFNlbGVjdExpbmUubm9kZS5wYXJlbnQgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBTZWxlY3RMaW5lLm9uU2VsZWN0ZWRDaGFuZ2VkID0gKGxpbmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyTGluZVNlbGVjdCA9IGxpbmVzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxibExpbmUuc3RyaW5nID0gdGhpcy5hcnJMaW5lU2VsZWN0Lmxlbmd0aC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFRvdGFsQmV0LnN0cmluZyA9IFV0aWxzLmZvcm1hdE1vbmV5KHRoaXMuYXJyTGluZVNlbGVjdC5sZW5ndGggKiB0aGlzLmxpc3RCZXRbdGhpcy5iZXRJZHhdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cFNlbGVjdExpbmUuc2hvdygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwU2VsZWN0TGluZS5zaG93KCk7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBhY3RHdWlkZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50b2dnbGVUcmlhbC5pc0NoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Nsb3RfZXJyb3InKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucG9wdXBHdWlkZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBCdW5kbGVDb250cm9sLmxvYWRQcmVmYWJHYW1lKFwiU2xvdDNcIiwgXCJyZXMvdGhhbnRhaS9wcmVmYWJzL1BvcHVwR3VpZGVcIiwgKGZpbmlzaCwgdG90YWwpID0+IHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9hZGluZzEnKSArIHBhcnNlSW50KChmaW5pc2ggLyB0b3RhbCkgKiAxMDApICsgXCIlXCIpO1xuICAgICAgICAgICAgfSwgcHJlZmFiID0+IHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBHdWlkZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYikuZ2V0Q29tcG9uZW50KFwiU2xvdDMuUG9wdXBHdWlkZVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwR3VpZGUubm9kZS5wYXJlbnQgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBHdWlkZS5zaG93KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBHdWlkZS5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWN0SGlzdG9yeUphY2twb3QoKSB7XG4gICAgICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudG9nZ2xlVHJpYWwuaXNDaGVja2VkKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9zbG90X2Vycm9yJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBvcHVwSmFja3BvdEhpc3RvcnkgPT0gbnVsbCkge1xuICAgICAgICAgICAgQnVuZGxlQ29udHJvbC5sb2FkUHJlZmFiR2FtZShcIlNsb3QzXCIsIFwicmVzL3RoYW50YWkvcHJlZmFicy9Qb3B1cEphY2twb3RIaXN0b3J5XCIsIChmaW5pc2gsIHRvdGFsKSA9PiB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dFcnJMb2FkaW5nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvYWRpbmcxJykgKyBwYXJzZUludCgoZmluaXNoIC8gdG90YWwpICogMTAwKSArIFwiJVwiKTtcbiAgICAgICAgICAgIH0sIHByZWZhYiA9PiB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwSmFja3BvdEhpc3RvcnkgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChcIlNsb3QzLlBvcHVwSmFja3BvdEhpc3RvcnlcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEphY2twb3RIaXN0b3J5Lm5vZGUucGFyZW50ID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZShcIkNhbnZhc1wiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwSmFja3BvdEhpc3Rvcnkuc2hvdygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwSmFja3BvdEhpc3Rvcnkuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFjdEhpc3RvcnkoKSB7XG4gICAgICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudG9nZ2xlVHJpYWwuaXNDaGVja2VkKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9zbG90X2Vycm9yJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBvcHVwSGlzdG9yeSA9PSBudWxsKSB7XG4gICAgICAgICAgICBCdW5kbGVDb250cm9sLmxvYWRQcmVmYWJHYW1lKFwiU2xvdDNcIiwgXCJyZXMvdGhhbnRhaS9wcmVmYWJzL1BvcHVwSGlzdG9yeVwiLCAoZmluaXNoLCB0b3RhbCkgPT4ge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93RXJyTG9hZGluZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9sb2FkaW5nMScpICsgcGFyc2VJbnQoKGZpbmlzaCAvIHRvdGFsKSAqIDEwMCkgKyBcIiVcIik7XG4gICAgICAgICAgICB9LCBwcmVmYWIgPT4ge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEhpc3RvcnkgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChcIlNsb3QzLlBvcHVwSGlzdG9yeVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwSGlzdG9yeS5ub2RlLnBhcmVudCA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q2hpbGRCeU5hbWUoXCJDYW52YXNcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEhpc3Rvcnkuc2hvdygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwSGlzdG9yeS5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVUcmlhbE9uQ2hlY2soKSB7XG4gICAgICAgIGlmICh0aGlzLnRvZ2dsZVRyaWFsLmlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5sYmxMaW5lLnN0cmluZyA9IFwiMjVcIjtcbiAgICAgICAgICAgIHRoaXMubGJsQmV0LnN0cmluZyA9IFwiMTAwXCI7XG4gICAgICAgICAgICB0aGlzLmxibFRvdGFsQmV0LnN0cmluZyA9IFV0aWxzLmZvcm1hdE1vbmV5KDI1MDAwMCk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGJsTGluZS5zdHJpbmcgPSB0aGlzLmFyckxpbmVTZWxlY3QubGVuZ3RoLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmxibEJldC5zdHJpbmcgPSB0aGlzLmxpc3RCZXRMYWJlbFt0aGlzLmJldElkeF07XG4gICAgICAgICAgICB0aGlzLmxibFRvdGFsQmV0LnN0cmluZyA9IFV0aWxzLmZvcm1hdE1vbmV5KHRoaXMuYXJyTGluZVNlbGVjdC5sZW5ndGggKiB0aGlzLmxpc3RCZXRbdGhpcy5iZXRJZHhdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUF1dG9PbkNoZWNrKCkge1xuICAgICAgICBpZiAodGhpcy50b2dnbGVBdXRvLmlzQ2hlY2tlZCAmJiB0aGlzLnRvZ2dsZVRyaWFsLmlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVBdXRvLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfc2xvdF9lcnJvcicpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50b2dnbGVBdXRvLmlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5zcGluKCk7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUJvb3N0LmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVCb29zdC5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNTcGluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVuYWJsZWRBbGxCdXR0b25zKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlQm9vc3RPbkNoZWNrKCkge1xuICAgICAgICBpZiAodGhpcy50b2dnbGVCb29zdC5pc0NoZWNrZWQgJiYgdGhpcy50b2dnbGVUcmlhbC5pc0NoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQm9vc3QuaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9zbG90X2Vycm9yJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRvZ2dsZUJvb3N0LmlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5zcGluKCk7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUF1dG8uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUF1dG8uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3BpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRFbmFibGVkQWxsQnV0dG9ucyh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VJdGVtVG9EYXJrKHN0YXRlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNvbCA9IHRoaXMuY29sdW1ucy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sLmNoaWxkcmVuQ291bnQ7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gY29sLmNoaWxkcmVuW2pdO1xuICAgICAgICAgICAgICAgIGxldCBzcHJpdGUgPSBpdGVtLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuU3ByaXRlKTtcbiAgICAgICAgICAgICAgICBsZXQgc3BpbmUgPSBpdGVtLmdldENvbXBvbmVudEluQ2hpbGRyZW4oc3AuU2tlbGV0b24pXG4gICAgICAgICAgICAgICAgc3ByaXRlLm5vZGUuY29sb3IgPSBzdGF0ZSA/IGNjLkNvbG9yLkdSQVkgOiBjYy5Db2xvci5XSElURTtcbiAgICAgICAgICAgICAgICBzcGluZS5ub2RlLmNvbG9yID0gc3RhdGUgPyBjYy5Db2xvci5HUkFZIDogY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHNwaW5lLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldERhcmtJdGVtKGl0ZW0sIHN0YXRlKSB7XG4gICAgICAgIGxldCBzcGluZSA9IGl0ZW0uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihzcC5Ta2VsZXRvbik7XG4gICAgICAgIGxldCBzcHJpdGUgPSBpdGVtLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuU3ByaXRlKTtcbiAgICAgICAgc3ByaXRlLm5vZGUuY29sb3IgPSBzdGF0ZSA/IGNjLkNvbG9yLkdSQVkgOiBjYy5Db2xvci5XSElURTtcbiAgICAgICAgc3BpbmUubm9kZS5jb2xvciA9IHN0YXRlID8gY2MuQ29sb3IuR1JBWSA6IGNjLkNvbG9yLldISVRFO1xuICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICBpZiAoaXRlbVsnaWQnXSAmJiBpdGVtWydpZCddIDwgNSAmJiBpdGVtWydhbmltYXRpb25OYW1lJ10gJiYgaXRlbVsnYW5pbWF0aW9uTmFtZSddICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBzcHJpdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzcGluZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgc3BpbmUuc2V0QW5pbWF0aW9uKDAsIGl0ZW1bJ2FuaW1hdGlvbk5hbWUnXSwgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNwcml0ZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgc3BpbmUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNwcml0ZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBzcGluZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19