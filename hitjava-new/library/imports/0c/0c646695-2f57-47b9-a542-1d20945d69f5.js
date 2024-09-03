"use strict";
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