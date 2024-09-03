
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot11Bikini/scripts/Slot11.Slot11Controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2aad0rE74xJoLKq04SaGFaH', 'Slot11.Slot11Controller');
// Slot11Bikini/scripts/Slot11.Slot11Controller.ts

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
var Slot11_Cmd_1 = require("./Slot11.Cmd");
var Configs_1 = require("../../Loading/src/Configs");
var Slot11_PopupSelectLine_1 = require("./Slot11.PopupSelectLine");
var Slot11_PopupBonus_1 = require("./Slot11.PopupBonus");
var Slot11_TrialResults_1 = require("./Slot11.TrialResults");
var Slot11_Lobby_1 = require("./Slot11.Lobby");
var Slot11_Item_1 = require("./Slot11.Item");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
var SlotNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/SlotNetworkClient");
var BundleControl_1 = require("../../Loading/src/BundleControl");
var Slot11_PopupGuide_1 = require("./Slot11.PopupGuide");
var Slot11_PopupJackpotHistory_1 = require("./Slot11.PopupJackpotHistory");
var Slot11_PopupHistory_1 = require("./Slot11.PopupHistory");
var TYPE_WIN;
(function (TYPE_WIN) {
    TYPE_WIN[TYPE_WIN["MISS"] = 0] = "MISS";
    TYPE_WIN[TYPE_WIN["WIN"] = 1] = "WIN";
    TYPE_WIN[TYPE_WIN["BIGWIN"] = 2] = "BIGWIN";
    TYPE_WIN[TYPE_WIN["JACKPOT"] = 3] = "JACKPOT";
    TYPE_WIN[TYPE_WIN["SUPERWIN"] = 4] = "SUPERWIN";
    TYPE_WIN[TYPE_WIN["BONUS"] = 5] = "BONUS";
})(TYPE_WIN || (TYPE_WIN = {}));
var TW = cc.tween;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot11Controller = /** @class */ (function (_super) {
    __extends(Slot11Controller, _super);
    function Slot11Controller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeCoin = null;
        _this.popupContainer = null;
        _this.mSlotLobby = null;
        _this.preItem = null;
        _this.mHeightItem = 170;
        _this.mWidthItem = 170;
        _this.skeSpin = null;
        _this.reels = null; // reel
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
        _this.particleJackpt = null;
        _this.particleBonus = null;
        _this.particleBigWin = null;
        _this.particleEffFree = null;
        _this.effectBonus = null;
        _this.effectFreeSpin = null;
        _this.popupSelectLine = null;
        _this.popupBonus = null;
        _this.soundSpinMis = null;
        _this.soundSpinWin = null;
        _this.soundBigWin = null;
        _this.soundJackpot = null;
        _this.soundBonus = null;
        _this.soundClick = null;
        _this.soundSpin = null;
        _this.soundReelStop = null;
        //end music setting
        _this.soundBg = null;
        _this.currentNumberFreeSpin = 0;
        _this.daiLyFreeSpin = 0;
        _this.rollStartItemCount = 15;
        _this.rollAddItemCount = 10;
        _this.spinDuration = 1.2;
        _this.addSpinDuration = 0.3;
        //private itemHeight = 0;
        _this.betIdx = -1;
        _this.listBet = [100, 1000, 10000];
        _this.listBetLabel = ["100", "1000", "10000"];
        _this.arrLineSelect = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
            22, 23, 24, 25,
        ];
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
            [10, 1, 12, 3, 14],
        ];
        _this.lastSpinRes = null;
        _this.columnsWild = [];
        _this.popupGuide = null;
        _this.popupHonor = null;
        _this.popupHistory = null;
        _this.musicSlotState = null;
        _this.soundSlotState = null;
        _this.remoteMusicBackground = null;
        _this.mIsTrial = false;
        _this.effectSound_Spin = 0;
        _this.mutipleJpNode = null;
        return _this;
    }
    Slot11Controller.prototype.start = function () {
        var _this = this;
        this.soundInit();
        this.currentNumberFreeSpin = 0;
        //this.itemHeight = this.itemTemplate.height;
        for (var i = 0; i < this.reels.childrenCount; i++) {
            var reel = this.reels.children[i];
            var count = this.rollStartItemCount + i * this.rollAddItemCount;
            for (var j = 0; j < count; j++) {
                //let item = cc.instantiate(this.itemTemplate);
                var itemNode = cc.instantiate(this.preItem);
                itemNode.height = this.mHeightItem;
                itemNode.width = this.mWidthItem;
                var item = itemNode.getComponent(Slot11_Item_1.default);
                itemNode.parent = reel;
                var id = Utils_1.default.randomRangeInt(0, 10);
                item.init(id, j);
            }
        }
        // this.itemTemplate.removeFromParent();
        // this.itemTemplate = null;
        //dang ky khi mat ket noi tu dong back
        SlotNetworkClient_1.default.getInstance().addOnClose(function () {
            //this.actBack();
            _this.mSlotLobby.onBtnBack();
        }, this);
        //listenner client - server
        SlotNetworkClient_1.default.getInstance().addListener(function (data) {
            var inpacket = new Network_InPacket_1.default(data);
            switch (inpacket.getCmdId()) {
                case Slot11_Cmd_1.default.Code.FREE_DAI_LY:
                    {
                        if (!_this.mIsTrial) {
                            var res_1 = new Slot11_Cmd_1.default.ReceiveFreeDaiLy(data);
                            cc.log("init info Slot11:" + JSON.stringify(res_1));
                            _this.daiLyFreeSpin = res_1.freeSpin;
                        }
                    }
                    break;
                case Slot11_Cmd_1.default.Code.DATE_X2:
                    {
                        var res_2 = new Slot11_Cmd_1.default.ReceiveDateX2(data);
                        cc.log("init info Slot11:" + JSON.stringify(res_2));
                        _this.currentNumberFreeSpin = res_2.freeSpin + _this.daiLyFreeSpin;
                        if (_this.currentNumberFreeSpin > 0) {
                            _this.lblFreeSpinCount.node.parent.active = true;
                            _this.lblFreeSpinCount.string = _this.currentNumberFreeSpin + "";
                        }
                        else {
                            _this.lblFreeSpinCount.node.parent.active = false;
                        }
                    }
                    break;
                case Slot11_Cmd_1.default.Code.UPDATE_POT:
                    var res = new Slot11_Cmd_1.default.ReceiveUpdatePot(data);
                    Tween_1.default.numberTo(_this.lblJackpot, res.jackpot, 0.3);
                    break;
                case Slot11_Cmd_1.default.Code.UPDATE_JACKPOT_SLOTS:
                    _this.mSlotLobby.onUpdateJackpot(data);
                    break;
                case Slot11_Cmd_1.default.Code.PLAY:
                    {
                        var res_3 = new Slot11_Cmd_1.default.ReceivePlay(data);
                        cc.log(res_3);
                        _this.onSpinResult(res_3);
                    }
                    break;
                default:
                    break;
            }
        }, this);
        SlotNetworkClient_1.default.getInstance().sendCheck(new Slot11_Cmd_1.default.ReqSubcribeHallSlot());
        //cc.log("Slot3Controller started");
        //SlotNetworkClient.getInstance().send(new cmd.SendSubcribe(this.betIdx));
        this.stopShowLinesWin();
        this.toast.active = false;
        this.effectWinCash.active = false;
        this.effectJackpot.active = false;
        this.effectBigWin.active = false;
        this.panelSetting.active = false;
        this.lblTotalBet.string = (this.arrLineSelect.length * this.listBet[this.betIdx]).toString();
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function () {
            Tween_1.default.numberTo(_this.lblCoin, Configs_1.default.Login.Coin, 0.3);
        }, this);
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        App_1.default.instance.showErrLoading("Đang kết nối tới server...");
        SlotNetworkClient_1.default.getInstance().checkConnect(function () {
            App_1.default.instance.showLoading(false);
        });
        //cc.log("Slot3Controller started");
        this.mSlotLobby.init(this);
        this.mSlotLobby.node.active = true;
        this.btnPlayReal.node.active = false;
        this.btnPlayTry.node.active = false;
        //this.initMutipleJPNode();
    };
    Slot11Controller.prototype.initMutipleJPNode = function () {
        var _this = this;
        if (!this.mutipleJpNode) {
            cc.assetManager.getBundle("Lobby").load("prefabs/MutipleJackpotPr", cc.Prefab, function (finish, total, item) { }, function (err1, prefab) {
                if (err1 != null) {
                    cc.log("errr load game TIENLEN:", err1);
                }
                else {
                    _this.mutipleJpNode = cc
                        .instantiate(prefab)
                        .getComponent("MutipleJackpot");
                    _this.mutipleJpNode.node.parent = cc.director
                        .getScene()
                        .getChildByName("Canvas");
                    _this.mutipleJpNode.setInfo("BITCOIN");
                }
            });
        }
    };
    Slot11Controller.prototype.showCoins = function (prize) {
        var number = prize / 20000;
        if (number <= 10)
            number = 10;
        else if (number >= 30)
            number = 30;
        App_1.default.instance.showCoins(number, this.lblWinNow.node, this.nodeCoin);
    };
    Slot11Controller.prototype.onJoinRoom = function () {
        this.lblBet.string = this.listBetLabel[this.betIdx];
        var totalbet = this.arrLineSelect.length * this.listBet[this.betIdx];
        Tween_1.default.numberTo(this.lblTotalBet, totalbet, 0.3);
        this.skeSpin.animation = "xoay";
        this.skeSpin.loop = true;
    };
    Slot11Controller.prototype.showToast = function (msg) {
        var _this = this;
        this.toast.getComponentInChildren(cc.Label).string = msg;
        this.toast.stopAllActions();
        this.toast.active = true;
        this.toast.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function () {
            _this.toast.active = false;
        })));
    };
    Slot11Controller.prototype.moneyToK = function (money) {
        // if (money < 10000) {
        //     return money.toString();
        // }
        // money = parseInt((money / 1000).toString());
        return money.toString();
    };
    Slot11Controller.prototype.setEnabledAllButtons = function (enabled) {
        this.btnSpin.interactable = enabled;
        this.btnBack.interactable = enabled;
        // this.btnBetUp.interactable = enabled;
        // this.btnBetDown.interactable = enabled;
        this.btnLine.interactable = enabled;
        this.btnPlayTry.interactable = false;
        this.btnPlayReal.interactable = false;
        //this.toggleTrial.interactable = enabled;
        this.btnSpin.getComponentInChildren(cc.Sprite).node.active = !enabled;
    };
    Slot11Controller.prototype.stopAllEffects = function () {
        this.effectJackpot.stopAllActions();
        this.effectJackpot.active = false;
        this.effectBigWin.stopAllActions();
        this.effectBigWin.active = false;
        this.effectFreeSpin.stopAllActions();
        this.effectFreeSpin.active = false;
    };
    Slot11Controller.prototype.stopShowLinesWin = function () {
        this.linesWin.stopAllActions();
        for (var i = 0; i < this.linesWin.childrenCount; i++) {
            this.linesWin.children[i].active = false;
        }
        for (var i = 0; i < this.iconWildColumns.childrenCount; i++) {
            this.iconWildColumns.children[i].active = false;
        }
        this.stopAllItemEffect();
    };
    Slot11Controller.prototype.stopAllItemEffect = function () {
        for (var i = 0; i < this.reels.childrenCount; i++) {
            for (var i_1 = 0; i_1 < this.reels.childrenCount; i_1++) {
                var children = this.reels.children[i_1].children; // ???
                for (var j = 0; j < children.length; j++) {
                    cc.Tween.stopAllByTarget(children[j]);
                    children[j].scale = 0.67;
                }
            }
        }
    };
    Slot11Controller.prototype.spin = function () {
        if (!this.isSpined)
            return;
        var isTrail = this.mIsTrial;
        if (!isTrail) {
            if (this.currentNumberFreeSpin <= 0) {
                if (Configs_1.default.Login.Coin <
                    this.listBet[this.betIdx] * this.arrLineSelect.length) {
                    App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_not_enough"));
                    return;
                }
                var curMoney = Configs_1.default.Login.Coin -
                    this.arrLineSelect.length * this.listBet[this.betIdx];
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
            this.changeAllItemToDark(false);
            this.stopAllEffects();
            this.stopShowLinesWin();
            this.setEnabledAllButtons(false);
            this.btnSpin.node.getComponentInChildren(cc.Sprite).node.active = true;
            cc.log("PLAY:", new Slot11_Cmd_1.default.SendPlay(this.arrLineSelect.toString()));
            SlotNetworkClient_1.default.getInstance().send(new Slot11_Cmd_1.default.SendPlay(this.arrLineSelect.toString()));
        }
        else {
            this.isSpined = false;
            this.stopAllEffects();
            this.stopShowLinesWin();
            this.setEnabledAllButtons(false);
            this.btnSpin.node.getComponentInChildren(cc.Sprite).node.active = true;
            var rIdx = Utils_1.default.randomRangeInt(0, Slot11_TrialResults_1.default.results.length);
            this.onSpinResult(Slot11_TrialResults_1.default.results[rIdx]);
        }
    };
    Slot11Controller.prototype.stopSpin = function () {
        for (var i = 0; i < this.reels.childrenCount; i++) {
            var roll = this.reels.children[i];
            roll.stopAllActions();
            roll.setPosition(cc.v2(roll.getPosition().x, 0));
        }
    };
    Slot11Controller.prototype.showLineWins = function () {
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
        }
        if (this.lastSpinRes.prize > 0) {
            this.changeAllItemToDark(true);
            this.linesWin.setSiblingIndex(1);
            this.reels.parent.setSiblingIndex(0);
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
                        // cc.log("================: " + lineIdx);
                        _this.linesWin.setSiblingIndex(0);
                        _this.reels.parent.setSiblingIndex(1);
                        line.active = true;
                        var mLine = _this.mapLine[lineIdx];
                        var countItemWin = 0;
                        var fisrtItemId = parseInt(matrix[mLine[0]]);
                        for (var j = 0; j < mLine.length; j++) {
                            var itemId = parseInt(matrix[mLine[j]]);
                            if (fisrtItemId == itemId ||
                                (itemId == _this.wildItemId && fisrtItemId > 3) ||
                                _this.columnsWild.indexOf(j) >= 0) {
                                // cc.log("==" + itemId + " j:" + j);
                                countItemWin++;
                            }
                            else {
                                break;
                            }
                        }
                        for (var j = 0; j < countItemWin; j++) {
                            var itemRow = parseInt((mLine[j] / 5).toString());
                            var item = rolls[j].children[2 - itemRow].getComponent(Slot11_Item_1.default);
                            item.node.stopAllActions();
                            item.checkShowSpriteOrSpine();
                        }
                        // cc.log("lineIdx: " + lineIdx + "fisrtItemId: " + fisrtItemId + " countItemWin: " + countItemWin);
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
    Slot11Controller.prototype.showWinCash = function (cash) {
        var _this = this;
        this.effectWinCash.stopAllActions();
        this.effectWinCash.active = true;
        var label = this.effectWinCash.getComponentInChildren(cc.Label);
        label.string = "0";
        this.effectWinCash.opacity = 0;
        this.showCoins(cash);
        this.effectWinCash.runAction(cc.sequence(cc.fadeIn(0.3), cc.callFunc(function () {
            Tween_1.default.numberTo(label, cash, 0.5);
        }), cc.delayTime(1.5), cc.fadeOut(0.3), cc.callFunc(function () {
            _this.effectWinCash.active = false;
        })));
    };
    Slot11Controller.prototype.showEffectBigWin = function (cash, cb) {
        var _this = this;
        this.effectBigWin.stopAllActions();
        this.effectBigWin.active = true;
        // this.effectBigWin.getComponentInChildren("MultiLanguage").updateSkeleton();
        var label = this.effectBigWin.getComponentInChildren(cc.Label);
        var partical = this.effectBigWin.getComponentInChildren(cc.ParticleSystem);
        partical.node.active = true;
        label.node.active = false;
        this.effectBigWin.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function () {
            label.string = "";
            label.node.active = true;
            Tween_1.default.numberTo(label, cash, 1);
        }), cc.delayTime(3), cc.callFunc(function () {
            partical.resetSystem();
            _this.effectBigWin.active = false;
            if (cb != null)
                cb();
        })));
    };
    Slot11Controller.prototype.showEffectFreeSpin = function (cb) {
        var _this = this;
        this.effectFreeSpin.stopAllActions();
        this.effectFreeSpin.active = true;
        this.effectFreeSpin
            .getComponentInChildren(sp.Skeleton)
            .setAnimation(0, "freespin", true);
        this.particleEffFree.node.active = true;
        this.effectFreeSpin.runAction(cc.sequence(cc.delayTime(1), cc.delayTime(3), cc.callFunc(function () {
            _this.particleEffFree.resetSystem();
            _this.particleEffFree.node.active = false;
            _this.effectFreeSpin.active = false;
            if (cb != null)
                cb();
        })));
    };
    Slot11Controller.prototype.showEffectJackpot = function (cash, cb) {
        var _this = this;
        if (cb === void 0) { cb = null; }
        var animName = ["animation7"];
        var index = parseInt(Math.random() + "");
        this.effectJackpot.stopAllActions();
        this.effectJackpot.active = true;
        this.effectJackpot
            .getComponentInChildren(sp.Skeleton)
            .setAnimation(0, animName[index], false);
        var label = this.effectJackpot.getComponentInChildren(cc.Label);
        label.node.active = false;
        this.effectJackpot.runAction(cc.sequence(cc.delayTime(0.4), cc.callFunc(function () {
            _this.particleJackpt.resetSystem();
        }), cc.callFunc(function () {
            label.string = "";
            label.node.active = true;
            Tween_1.default.numberTo(label, cash, 1);
        }), cc.delayTime(5), cc.callFunc(function () {
            _this.effectJackpot.active = false;
            if (cb != null)
                cb();
        })));
    };
    Slot11Controller.prototype.showEffectBonus = function (cb) {
        var _this = this;
        this.effectBonus.stopAllActions();
        this.effectBonus.active = true;
        this.effectBonus
            .getComponentInChildren(sp.Skeleton)
            .setAnimation(0, "bounus", true);
        this.particleBonus.node.active = true;
        this.effectBonus.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function () {
            _this.particleBonus.resetSystem();
            _this.particleBonus.node.active = false;
            _this.effectBonus.active = false;
            if (cb != null)
                cb();
        })));
    };
    Slot11Controller.prototype.onSpinResult = function (res) {
        var _this = this;
        this.stopSpin();
        cc.log("onSpinResult:" + JSON.stringify(res));
        // res = JSON.parse('{"_pos":114,"_data":{"0":1,"1":15,"2":161,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":9,"11":120,"12":2,"13":0,"14":29,"15":51,"16":44,"17":53,"18":44,"19":50,"20":44,"21":54,"22":44,"23":49,"24":44,"25":54,"26":44,"27":50,"28":44,"29":50,"30":44,"31":53,"32":44,"33":49,"34":44,"35":53,"36":44,"37":54,"38":44,"39":55,"40":44,"41":55,"42":44,"43":53,"44":0,"45":44,"46":49,"47":44,"48":51,"49":44,"50":52,"51":44,"52":54,"53":44,"54":55,"55":44,"56":57,"57":44,"58":49,"59":48,"60":44,"61":49,"62":49,"63":44,"64":49,"65":51,"66":44,"67":49,"68":53,"69":44,"70":49,"71":54,"72":44,"73":49,"74":55,"75":44,"76":49,"77":57,"78":44,"79":50,"80":49,"81":44,"82":50,"83":50,"84":44,"85":50,"86":51,"87":44,"88":50,"89":53,"90":0,"91":0,"92":0,"93":0,"94":0,"95":0,"96":0,"97":103,"98":194,"99":128,"100":0,"101":0,"102":0,"103":0,"104":37,"105":174,"106":98,"107":186,"108":0,"109":0,"110":0,"111":0,"112":0,"113":0},"_length":114,"_controllerId":1,"_cmdId":4001,"_error":0,"ref":2424,"result":2,"matrix":"3,5,2,6,1,6,2,2,5,1,5,6,7,7,5","linesWin":"1,3,4,6,7,9,10,11,13,15,16,17,19,21,22,23,25","haiSao":"","prize":6800000,"currentMoney":632185530,"freeSpin":0,"isFree":false,"itemsWild":"","ratio":0,"currentNumberFreeSpin":0}');
        var successResult = [0, 1, 2, 3, 4, 5, 6];
        //res.result == 5 //bonus
        //res.result == 0 //khong an
        //res.result == 1 //thang thuong
        //res.result == 2 //thang lon
        //res.result == 3 //no hu
        //res.result == 6 //thang cuc lon
        // cc.log("saosao:" + (successResult.indexOf(res.result) === -1));
        if (successResult.indexOf(res.result) === -1) {
            this.isSpined = true;
            this.toggleAuto.isChecked = false;
            this.toggleAuto.interactable = true;
            this.toggleBoost.isChecked = false;
            this.toggleBoost.interactable = true;
            this.setEnabledAllButtons(true);
            switch (res.result) {
                case 102:
                    this.showToast(App_1.default.instance.getTextLang("txt_slot_error"));
                    break;
                default:
                    this.showToast(App_1.default.instance.getTextLang("txt_unknown_error1"));
                    break;
            }
            return;
        }
        this.changeAllItemToDark(false);
        this.currentNumberFreeSpin = res.currentNumberFreeSpin;
        this.lastSpinRes = res;
        this.columnsWild.length = 0;
        var isTrail = this.mIsTrial;
        if (!isTrail && !this.lastSpinRes.isFree) {
            Configs_1.default.Login.Coin = res.currentMoney;
        }
        var matrix = res.matrix.split(",");
        var timeScale = this.toggleBoost.isChecked ? 0.5 : 1;
        if (this.soundSlotState == 1) {
            this.effectSound_Spin = cc.audioEngine.play(this.soundSpin, false, 1);
        }
        var _loop_2 = function (i) {
            var roll = this_1.reels.children[i];
            var step1Pos = this_1.mHeightItem * 0.3;
            var step2Pos = -this_1.mHeightItem * roll.childrenCount +
                this_1.mHeightItem * 3 -
                this_1.mHeightItem * 0.3;
            var step3Pos = -this_1.mHeightItem * roll.childrenCount + this_1.mHeightItem * 3;
            roll.runAction(cc.sequence(cc.delayTime(0.2 * i * timeScale), cc
                .moveTo(0.2 * timeScale, cc.v2(roll.position.x, step1Pos))
                .easing(cc.easeQuadraticActionOut()), cc
                .moveTo((this_1.spinDuration + this_1.addSpinDuration * i) * timeScale, cc.v2(roll.position.x, step2Pos))
                .easing(cc.easeQuadraticActionInOut()), cc.callFunc(function () {
                if (_this.soundSlotState == 1) {
                    cc.audioEngine.play(_this.soundReelStop, false, 1);
                    if (i == 4) {
                        cc.audioEngine.stop(_this.effectSound_Spin);
                    }
                }
            }), cc
                .moveTo(0.2 * timeScale, cc.v2(roll.position.x, step3Pos))
                .easing(cc.easeQuadraticActionIn()), cc.callFunc(function () {
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
                        _this.iconWildColumns.children[c].active = true;
                        var children = _this.reels.children[c].children;
                        children[2]
                            .getComponent(Slot11_Item_1.default)
                            .changeSpineIcon(_this.wildItemId);
                        children[1]
                            .getComponent(Slot11_Item_1.default)
                            .changeSpineIcon(_this.wildItemId);
                        children[0]
                            .getComponent(Slot11_Item_1.default)
                            .changeSpineIcon(_this.wildItemId);
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
            })));
            //rool = reel
            TW(roll)
                .delay(0.2 * i * timeScale + 0.4 * timeScale)
                .call(function () {
                for (var m = 0; m < roll.childrenCount; m++) {
                    var item = roll.children[m].getComponent(Slot11_Item_1.default);
                    item.changeSpriteBlurByItemId(item.itemId);
                }
            })
                .start();
            TW(roll)
                .delay((0.47 + 0.2 * i) * timeScale)
                .call(function () {
                var listItemNode = roll.children;
                listItemNode[2]
                    .getComponent(Slot11_Item_1.default)
                    .changeSpineIcon(parseInt(matrix[i]));
                listItemNode[1]
                    .getComponent(Slot11_Item_1.default)
                    .changeSpineIcon(parseInt(matrix[5 + i]));
                listItemNode[0]
                    .getComponent(Slot11_Item_1.default)
                    .changeSpineIcon(parseInt(matrix[10 + i]));
                listItemNode[listItemNode.length - 1]
                    .getComponent(Slot11_Item_1.default)
                    .changeSpineIcon(parseInt(matrix[i]));
                listItemNode[listItemNode.length - 2]
                    .getComponent(Slot11_Item_1.default)
                    .changeSpineIcon(parseInt(matrix[5 + i]));
                listItemNode[listItemNode.length - 3]
                    .getComponent(Slot11_Item_1.default)
                    .changeSpineIcon(parseInt(matrix[10 + i]));
                for (var m = 0; m < roll.childrenCount; m++) {
                    var item = roll.children[m].getComponent(Slot11_Item_1.default);
                    item.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
                }
            })
                .start();
        };
        var this_1 = this;
        for (var i = 0; i < this.reels.childrenCount; i++) {
            _loop_2(i);
        }
    };
    Slot11Controller.prototype.spined = function () {
        var _this = this;
        this.skeSpin.animation = "xoay";
        this.currentNumberFreeSpin = this.lastSpinRes.currentNumberFreeSpin;
        if (this.lastSpinRes.currentNumberFreeSpin > 0) {
            this.lblFreeSpinCount.node.parent.active = true;
            this.lblFreeSpinCount.string = this.currentNumberFreeSpin + "";
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
                        if (this.lastSpinRes.prize > 0)
                            cc.audioEngine.play(this.soundSpinWin, false, 1);
                        else
                            cc.audioEngine.play(this.soundSpinMis, false, 1);
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
                case TYPE_WIN.JACKPOT: //jackpot
                    if (this.soundSlotState == 1) {
                        cc.audioEngine.play(this.soundJackpot, false, 1);
                    }
                    this.showEffectJackpot(this.lastSpinRes.prize, function () {
                        _this.showLineWins();
                    });
                    break;
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
                        var linesWin = _this.lastSpinRes.linesWin.split(",");
                        linesWin = Utils_1.default.removeDups(linesWin);
                        for (var i = 0; i < linesWin.length; i++) {
                            if (linesWin[i] == "0") {
                                linesWin.splice(i, 1);
                                i--;
                            }
                        }
                        var matrix = _this.lastSpinRes.matrix.split(",");
                        var countItem = 0;
                        for (var i = 0; i < linesWin.length; i++) {
                            var countItemBonus = 0;
                            var lineIdx = parseInt(linesWin[i]) - 1;
                            var mLine = _this.mapLine[lineIdx];
                            for (var j = 0; j < mLine.length; j++) {
                                var itemId = matrix[mLine[j]];
                                if (itemId == "1") {
                                    countItemBonus++;
                                }
                                else {
                                    if (countItemBonus > countItem) {
                                        countItem = countItemBonus;
                                    }
                                    break;
                                }
                            }
                        }
                        _this.actShowBonus(_this.mIsTrial ? 100 : _this.listBet[_this.betIdx], _this.lastSpinRes.haiSao, function () {
                            _this.showLineWins();
                        }, countItem);
                    });
                    break;
            }
        }
    };
    Slot11Controller.prototype.onBtnSoundTouchBonus = function () { };
    Slot11Controller.prototype.onBtnSoundSumary = function () { };
    Slot11Controller.prototype.actBack = function () {
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        SlotNetworkClient_1.default.getInstance().send(new Slot11_Cmd_1.default.SendUnSubcribe(this.betIdx));
        // cc.audioEngine.stopAll();
        // App.instance.loadScene("Lobby");
        this.mSlotLobby.node.active = true;
    };
    Slot11Controller.prototype.actChangeRoom = function () {
        if (!this.isSpined)
            return;
        this.actBack();
    };
    Slot11Controller.prototype.actHidden = function () {
        this.showToast(App_1.default.instance.getTextLang("txt_function_in_development"));
    };
    Slot11Controller.prototype.actBetUp = function () {
        var _this = this;
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        var isTrail = this.mIsTrial;
        if (isTrail) {
            this.showToast(App_1.default.instance.getTextLang("txt_slot_error"));
            return;
        }
        if (this.betIdx < this.listBet.length - 1) {
            this.daiLyFreeSpin = 0;
            this.lblFreeSpinCount.node.parent.active = false;
            SlotNetworkClient_1.default.getInstance().send(new Slot11_Cmd_1.default.SendChangeRoom(this.betIdx, ++this.betIdx));
            this.lblBet.string = this.listBetLabel[this.betIdx];
            Tween_1.default.numberTo(this.lblTotalBet, this.arrLineSelect.length * this.listBet[this.betIdx], 0.3, function (n) {
                return _this.moneyToK(n);
            });
        }
    };
    Slot11Controller.prototype.actBetDown = function () {
        var _this = this;
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        var isTrail = this.mIsTrial;
        if (isTrail) {
            this.showToast(App_1.default.instance.getTextLang("txt_slot_error"));
            return;
        }
        if (this.betIdx > 0) {
            this.daiLyFreeSpin = 0;
            this.lblFreeSpinCount.node.parent.active = false;
            SlotNetworkClient_1.default.getInstance().send(new Slot11_Cmd_1.default.SendChangeRoom(this.betIdx, --this.betIdx));
            this.lblBet.string = this.listBetLabel[this.betIdx];
            Tween_1.default.numberTo(this.lblTotalBet, this.arrLineSelect.length * this.listBet[this.betIdx], 0.3, function (n) {
                return _this.moneyToK(n);
            });
        }
    };
    Slot11Controller.prototype.actLine = function () {
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        var isTrail = this.mIsTrial;
        if (isTrail) {
            this.showToast(App_1.default.instance.getTextLang("txt_slot_error"));
            return;
        }
        this.popupSelectLine.show();
    };
    Slot11Controller.prototype.actSetting = function () {
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        this.panelSetting.active = !this.panelSetting.active;
    };
    Slot11Controller.prototype.toggleTrialOnCheck = function () {
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
        cc.log("isTrial==" + this.mIsTrial);
    };
    Slot11Controller.prototype.toggleAutoOnCheck = function () {
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        var isTrail = this.mIsTrial;
        if (this.toggleAuto.isChecked && isTrail) {
            this.toggleAuto.isChecked = false;
            this.showToast(App_1.default.instance.getTextLang("txt_slot_error"));
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
    Slot11Controller.prototype.toggleBoostOnCheck = function () {
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        var isTrail = this.mIsTrial;
        if (this.toggleBoost.isChecked && isTrail) {
            this.toggleBoost.isChecked = false;
            this.showToast(App_1.default.instance.getTextLang("txt_slot_error"));
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
    Slot11Controller.prototype.soundInit = function () {
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
    Slot11Controller.prototype.settingMusic = function () {
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
    Slot11Controller.prototype.settingSound = function () {
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
    Slot11Controller.prototype.changeAllItemToDark = function (state) {
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
                if (!state) {
                    cc.Tween.stopAllByTarget(sprite.node);
                    sprite.node.scale = 1.0;
                    cc.Tween.stopAllByTarget(spine.node);
                }
            }
        }
    };
    Slot11Controller.prototype.actSelectline = function () {
        var _this = this;
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        if (this.mIsTrial) {
            App_1.default.instance.showToast(App_1.default.instance.getTextLang("txt_slot_error"));
            return;
        }
        if (this.popupSelectLine == null) {
            BundleControl_1.default.loadPrefabGame("Slot11Bikini", "prefabs/PopupSelectLine", function (finish, total) {
                // App.instance.showErrLoading(App.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
                App_1.default.instance.showLoading(false);
                _this.popupSelectLine = cc
                    .instantiate(prefab)
                    .getComponent(Slot11_PopupSelectLine_1.default);
                _this.popupSelectLine.node.parent = cc.director
                    .getScene()
                    .getChildByName("Canvas");
                _this.popupSelectLine.show();
                _this.popupSelectLine.onSelectedChanged = function (lines) {
                    _this.arrLineSelect = lines;
                    _this.lblLine.string = _this.arrLineSelect.length.toString();
                    Tween_1.default.numberTo(_this.lblTotalBet, _this.arrLineSelect.length * _this.listBet[_this.betIdx], 0.3, function (n) {
                        return _this.moneyToK(n);
                    });
                };
            });
        }
        else {
            this.popupSelectLine.show();
        }
    };
    Slot11Controller.prototype.actGuide = function () {
        var _this = this;
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        if (this.mIsTrial) {
            App_1.default.instance.showToast(App_1.default.instance.getTextLang("txt_slot_error"));
            return;
        }
        if (this.popupGuide == null) {
            BundleControl_1.default.loadPrefabGame("Slot11Bikini", "prefabs/PopupGuide", function (finish, total) {
                // App.instance.showErrLoading(App.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
                App_1.default.instance.showLoading(false);
                _this.popupGuide = cc.instantiate(prefab).getComponent(Slot11_PopupGuide_1.default);
                _this.popupGuide.node.parent = cc.director
                    .getScene()
                    .getChildByName("Canvas");
                _this.popupGuide.show();
            });
        }
        else {
            this.popupGuide.show();
        }
    };
    Slot11Controller.prototype.actHonor = function () {
        var _this = this;
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        if (this.mIsTrial) {
            App_1.default.instance.showToast(App_1.default.instance.getTextLang("txt_slot_error"));
            return;
        }
        if (this.popupHonor == null) {
            BundleControl_1.default.loadPrefabGame("Slot11Bikini", "prefabs/PopupJackpotHistory", function (finish, total) {
                // App.instance.showErrLoading(App.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
                App_1.default.instance.showLoading(false);
                _this.popupHonor = cc
                    .instantiate(prefab)
                    .getComponent(Slot11_PopupJackpotHistory_1.default);
                _this.popupHonor.node.parent = cc.director
                    .getScene()
                    .getChildByName("Canvas");
                _this.popupHonor.show();
            });
        }
        else {
            this.popupHonor.show();
        }
    };
    Slot11Controller.prototype.actHistory = function () {
        var _this = this;
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        if (this.mIsTrial) {
            App_1.default.instance.showToast(App_1.default.instance.getTextLang("txt_slot_error"));
            return;
        }
        if (this.popupHistory == null) {
            BundleControl_1.default.loadPrefabGame("Slot11Bikini", "prefabs/PopupHistory", function (finish, total) {
                // App.instance.showErrLoading(App.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
                App_1.default.instance.showLoading(false);
                _this.popupHistory = cc.instantiate(prefab).getComponent(Slot11_PopupHistory_1.default);
                _this.popupHistory.node.parent = cc.director
                    .getScene()
                    .getChildByName("Canvas");
                _this.popupHistory.show();
            });
        }
        else {
            this.popupHistory.show();
        }
    };
    Slot11Controller.prototype.actShowBonus = function (isTrial, dataHaiSao, cb, numberIcon) {
        var _this = this;
        if (this.popupBonus == null) {
            BundleControl_1.default.loadPrefabGame("Slot11Bikini", "prefabs/PopupBonus", function (finish, total) {
                // App.instance.showErrLoading(App.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
                App_1.default.instance.showLoading(false);
                _this.popupBonus = cc.instantiate(prefab).getComponent(Slot11_PopupBonus_1.default);
                _this.popupBonus.node.parent = cc.director
                    .getScene()
                    .getChildByName("Canvas");
                _this.popupBonus.showBonus(isTrial, dataHaiSao, _this, cb, numberIcon);
            });
        }
        else {
            this.popupBonus.showBonus(isTrial, dataHaiSao, this, cb, numberIcon);
        }
    };
    Slot11Controller.prototype.actTrialOnCheck = function () {
        var _this = this;
        this.mIsTrial = true;
        var isTrail = this.mIsTrial;
        if (isTrail) {
            this.btnPlayReal.node.active = false;
            this.btnPlayTry.node.active = false;
            this.lblLine.string = "25";
            this.lblBet.string = "100";
            Tween_1.default.numberTo(this.lblTotalBet, 2500, 0.3, function (n) { return _this.moneyToK(n); });
        }
        cc.log("isTrial==" + this.mIsTrial);
    };
    __decorate([
        property(cc.Node)
    ], Slot11Controller.prototype, "nodeCoin", void 0);
    __decorate([
        property(cc.Node)
    ], Slot11Controller.prototype, "popupContainer", void 0);
    __decorate([
        property(Slot11_Lobby_1.default)
    ], Slot11Controller.prototype, "mSlotLobby", void 0);
    __decorate([
        property(cc.Prefab)
    ], Slot11Controller.prototype, "preItem", void 0);
    __decorate([
        property(cc.Integer)
    ], Slot11Controller.prototype, "mHeightItem", void 0);
    __decorate([
        property(cc.Integer)
    ], Slot11Controller.prototype, "mWidthItem", void 0);
    __decorate([
        property(sp.Skeleton)
    ], Slot11Controller.prototype, "skeSpin", void 0);
    __decorate([
        property(cc.Node)
    ], Slot11Controller.prototype, "reels", void 0);
    __decorate([
        property(cc.Node)
    ], Slot11Controller.prototype, "linesWin", void 0);
    __decorate([
        property(cc.Node)
    ], Slot11Controller.prototype, "iconWildColumns", void 0);
    __decorate([
        property(cc.Label)
    ], Slot11Controller.prototype, "lblJackpot", void 0);
    __decorate([
        property(cc.Label)
    ], Slot11Controller.prototype, "lblBet", void 0);
    __decorate([
        property(cc.Label)
    ], Slot11Controller.prototype, "lblLine", void 0);
    __decorate([
        property(cc.Label)
    ], Slot11Controller.prototype, "lblTotalBet", void 0);
    __decorate([
        property(cc.Label)
    ], Slot11Controller.prototype, "lblCoin", void 0);
    __decorate([
        property(cc.Label)
    ], Slot11Controller.prototype, "lblWinNow", void 0);
    __decorate([
        property(cc.Label)
    ], Slot11Controller.prototype, "lblFreeSpinCount", void 0);
    __decorate([
        property(cc.Toggle)
    ], Slot11Controller.prototype, "toggleAuto", void 0);
    __decorate([
        property(cc.Toggle)
    ], Slot11Controller.prototype, "toggleSound", void 0);
    __decorate([
        property(cc.Toggle)
    ], Slot11Controller.prototype, "togglgeMusic", void 0);
    __decorate([
        property(cc.Toggle)
    ], Slot11Controller.prototype, "toggleBoost", void 0);
    __decorate([
        property(cc.Button)
    ], Slot11Controller.prototype, "btnSpin", void 0);
    __decorate([
        property(cc.Button)
    ], Slot11Controller.prototype, "btnBack", void 0);
    __decorate([
        property(cc.Button)
    ], Slot11Controller.prototype, "btnPlayTry", void 0);
    __decorate([
        property(cc.Button)
    ], Slot11Controller.prototype, "btnPlayReal", void 0);
    __decorate([
        property(cc.Button)
    ], Slot11Controller.prototype, "btnLine", void 0);
    __decorate([
        property(cc.Node)
    ], Slot11Controller.prototype, "toast", void 0);
    __decorate([
        property(cc.Node)
    ], Slot11Controller.prototype, "panelSetting", void 0);
    __decorate([
        property(cc.Node)
    ], Slot11Controller.prototype, "effectWinCash", void 0);
    __decorate([
        property(cc.Node)
    ], Slot11Controller.prototype, "effectBigWin", void 0);
    __decorate([
        property(cc.Node)
    ], Slot11Controller.prototype, "effectJackpot", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], Slot11Controller.prototype, "particleJackpt", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], Slot11Controller.prototype, "particleBonus", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], Slot11Controller.prototype, "particleBigWin", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], Slot11Controller.prototype, "particleEffFree", void 0);
    __decorate([
        property(cc.Node)
    ], Slot11Controller.prototype, "effectBonus", void 0);
    __decorate([
        property(cc.Node)
    ], Slot11Controller.prototype, "effectFreeSpin", void 0);
    __decorate([
        property(Slot11_PopupSelectLine_1.default)
    ], Slot11Controller.prototype, "popupSelectLine", void 0);
    __decorate([
        property(Slot11_PopupBonus_1.default)
    ], Slot11Controller.prototype, "popupBonus", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot11Controller.prototype, "soundSpinMis", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot11Controller.prototype, "soundSpinWin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot11Controller.prototype, "soundBigWin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot11Controller.prototype, "soundJackpot", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot11Controller.prototype, "soundBonus", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot11Controller.prototype, "soundClick", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot11Controller.prototype, "soundSpin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot11Controller.prototype, "soundReelStop", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot11Controller.prototype, "soundBg", void 0);
    Slot11Controller = __decorate([
        ccclass
    ], Slot11Controller);
    return Slot11Controller;
}(cc.Component));
exports.default = Slot11Controller;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDExQmlraW5pXFxzY3JpcHRzXFxTbG90MTEuU2xvdDExQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBK0I7QUFFL0IscURBQWdEO0FBQ2hELG1FQUF1RDtBQUN2RCx5REFBNkM7QUFDN0MsNkRBQWlEO0FBQ2pELCtDQUF5QztBQUN6Qyw2Q0FBdUM7QUFDdkMsaUVBQTREO0FBQzVELDZGQUF3RjtBQUN4RixxRUFBZ0U7QUFDaEUscUVBQWdFO0FBQ2hFLDZGQUFnRjtBQUNoRiwrRkFBMEY7QUFDMUYsaUVBQTREO0FBQzVELHlEQUE2QztBQUM3QywyRUFBK0Q7QUFDL0QsNkRBQWlEO0FBRWpELElBQVcsUUFPVjtBQVBELFdBQVcsUUFBUTtJQUNqQix1Q0FBUSxDQUFBO0lBQ1IscUNBQU8sQ0FBQTtJQUNQLDJDQUFVLENBQUE7SUFDViw2Q0FBVyxDQUFBO0lBQ1gsK0NBQVksQ0FBQTtJQUNaLHlDQUFTLENBQUE7QUFDWCxDQUFDLEVBUFUsUUFBUSxLQUFSLFFBQVEsUUFPbEI7QUFFRCxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO0FBQ1osSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUF5MUNDO1FBdjFDQyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBRy9CLGdCQUFVLEdBQWdCLElBQUksQ0FBQztRQUcvQixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRzFCLGlCQUFXLEdBQVcsR0FBRyxDQUFDO1FBRzFCLGdCQUFVLEdBQVcsR0FBRyxDQUFDO1FBRXpCLGFBQU8sR0FBZ0IsSUFBSSxDQUFDO1FBRzVCLFdBQUssR0FBWSxJQUFJLENBQUMsQ0FBQyxPQUFPO1FB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QUFDLGdDQUFlLENBQUM7NkRBQ2M7SUFFeEM7UUFEQyxRQUFRLENBQUMsMkJBQVUsQ0FBQzt3REFDUztJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7MERBQ0M7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDOzBEQUNDO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzt5REFDQTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7MERBQ0M7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO3dEQUNEO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzt3REFDRDtJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7dURBQ0Y7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDOzJEQUNFO0lBS25DO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztxREFDSjtJQXpIVixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQXkxQ3BDO0lBQUQsdUJBQUM7Q0F6MUNELEFBeTFDQyxDQXoxQzZDLEVBQUUsQ0FBQyxTQUFTLEdBeTFDekQ7a0JBejFDb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNtZCBmcm9tIFwiLi9TbG90MTEuQ21kXCI7XG5cbmltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgUG9wdXBTZWxlY3RMaW5lIGZyb20gXCIuL1Nsb3QxMS5Qb3B1cFNlbGVjdExpbmVcIjtcbmltcG9ydCBQb3B1cEJvbnVzIGZyb20gXCIuL1Nsb3QxMS5Qb3B1cEJvbnVzXCI7XG5pbXBvcnQgVHJpYWxSZXN1bHRzIGZyb20gXCIuL1Nsb3QxMS5UcmlhbFJlc3VsdHNcIjtcbmltcG9ydCBTbG90MTFMb2JieSBmcm9tIFwiLi9TbG90MTEuTG9iYnlcIjtcbmltcG9ydCBTbG90MTFJdGVtIGZyb20gXCIuL1Nsb3QxMS5JdGVtXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IEJyb2FkY2FzdFJlY2VpdmVyIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0Jyb2FkY2FzdFJlY2VpdmVyXCI7XG5pbXBvcnQgVHdlZW4gZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vVHdlZW5cIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuaW1wb3J0IEluUGFja2V0IGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5JblBhY2tldFwiO1xuaW1wb3J0IFNsb3ROZXR3b3JrQ2xpZW50IGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvU2xvdE5ldHdvcmtDbGllbnRcIjtcbmltcG9ydCBCdW5kbGVDb250cm9sIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9CdW5kbGVDb250cm9sXCI7XG5pbXBvcnQgUG9wdXBHdWlkZSBmcm9tIFwiLi9TbG90MTEuUG9wdXBHdWlkZVwiO1xuaW1wb3J0IFBvcHVwSmFja3BvdEhpc3RvcnkgZnJvbSBcIi4vU2xvdDExLlBvcHVwSmFja3BvdEhpc3RvcnlcIjtcbmltcG9ydCBQb3B1cEhpc3RvcnkgZnJvbSBcIi4vU2xvdDExLlBvcHVwSGlzdG9yeVwiO1xuXG5jb25zdCBlbnVtIFRZUEVfV0lOIHtcbiAgTUlTUyA9IDAsXG4gIFdJTiA9IDEsXG4gIEJJR1dJTiA9IDIsXG4gIEpBQ0tQT1QgPSAzLFxuICBTVVBFUldJTiA9IDQsXG4gIEJPTlVTID0gNSxcbn1cblxudmFyIFRXID0gY2MudHdlZW47XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdDExQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBub2RlQ29pbjogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBwb3B1cENvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgQHByb3BlcnR5KFNsb3QxMUxvYmJ5KVxuICBtU2xvdExvYmJ5OiBTbG90MTFMb2JieSA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgcHJlSXRlbTogY2MuUHJlZmFiID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgbUhlaWdodEl0ZW06IG51bWJlciA9IDE3MDtcblxuICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgbVdpZHRoSXRlbTogbnVtYmVyID0gMTcwO1xuICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXG4gIHNrZVNwaW46IHNwLlNrZWxldG9uID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgcmVlbHM6IGNjLk5vZGUgPSBudWxsOyAvLyByZWVsXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBsaW5lc1dpbjogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBpY29uV2lsZENvbHVtbnM6IGNjLk5vZGUgPSBudWxsOyAvLyBtYW5nIGNhYyBpdGVtIGV4cGFuZCB3aWxkXG5cbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBsYmxKYWNrcG90OiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgbGJsQmV0OiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgbGJsTGluZTogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGxibFRvdGFsQmV0OiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgbGJsQ29pbjogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGxibFdpbk5vdzogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGxibEZyZWVTcGluQ291bnQ6IGNjLkxhYmVsID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuVG9nZ2xlKVxuICB0b2dnbGVBdXRvOiBjYy5Ub2dnbGUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXG4gIHRvZ2dsZVNvdW5kOiBjYy5Ub2dnbGUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXG4gIHRvZ2dsZ2VNdXNpYzogY2MuVG9nZ2xlID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuVG9nZ2xlKVxuICB0b2dnbGVCb29zdDogY2MuVG9nZ2xlID0gbnVsbDtcbiAgLy8gQHByb3BlcnR5KGNjLlRvZ2dsZSlcbiAgLy8gdG9nZ2xlVHJpYWw6IGNjLlRvZ2dsZSA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgYnRuU3BpbjogY2MuQnV0dG9uID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgYnRuQmFjazogY2MuQnV0dG9uID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgYnRuUGxheVRyeTogY2MuQnV0dG9uID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgYnRuUGxheVJlYWw6IGNjLkJ1dHRvbiA9IG51bGw7XG4gIC8vIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gIC8vIGJ0bkJldFVwOiBjYy5CdXR0b24gPSBudWxsO1xuICAvLyBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAvLyBidG5CZXREb3duOiBjYy5CdXR0b24gPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICBidG5MaW5lOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICB0b2FzdDogY2MuTm9kZSA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHBhbmVsU2V0dGluZzogY2MuTm9kZSA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGVmZmVjdFdpbkNhc2g6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgZWZmZWN0QmlnV2luOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGVmZmVjdEphY2twb3Q6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuUGFydGljbGVTeXN0ZW0pXG4gIHBhcnRpY2xlSmFja3B0OiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5QYXJ0aWNsZVN5c3RlbSlcbiAgcGFydGljbGVCb251czogY2MuUGFydGljbGVTeXN0ZW0gPSBudWxsO1xuICBAcHJvcGVydHkoY2MuUGFydGljbGVTeXN0ZW0pXG4gIHBhcnRpY2xlQmlnV2luOiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5QYXJ0aWNsZVN5c3RlbSlcbiAgcGFydGljbGVFZmZGcmVlOiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBlZmZlY3RCb251czogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBlZmZlY3RGcmVlU3BpbjogY2MuTm9kZSA9IG51bGw7XG5cbiAgQHByb3BlcnR5KFBvcHVwU2VsZWN0TGluZSlcbiAgcG9wdXBTZWxlY3RMaW5lOiBQb3B1cFNlbGVjdExpbmUgPSBudWxsO1xuICBAcHJvcGVydHkoUG9wdXBCb251cylcbiAgcG9wdXBCb251czogUG9wdXBCb251cyA9IG51bGw7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gIHNvdW5kU3Bpbk1pczogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gIHNvdW5kU3BpbldpbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gIHNvdW5kQmlnV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgc291bmRKYWNrcG90OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgc291bmRCb251czogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gIHNvdW5kQ2xpY2s6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICBzb3VuZFNwaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICBzb3VuZFJlZWxTdG9wOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gIC8vZW5kIG11c2ljIHNldHRpbmdcblxuICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgc291bmRCZzogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgcHJpdmF0ZSBjdXJyZW50TnVtYmVyRnJlZVNwaW4gPSAwO1xuICBwcml2YXRlIGRhaUx5RnJlZVNwaW4gPSAwO1xuICBwcml2YXRlIHJvbGxTdGFydEl0ZW1Db3VudCA9IDE1O1xuICBwcml2YXRlIHJvbGxBZGRJdGVtQ291bnQgPSAxMDtcbiAgcHJpdmF0ZSBzcGluRHVyYXRpb24gPSAxLjI7XG4gIHByaXZhdGUgYWRkU3BpbkR1cmF0aW9uID0gMC4zO1xuICAvL3ByaXZhdGUgaXRlbUhlaWdodCA9IDA7XG4gIHB1YmxpYyBiZXRJZHggPSAtMTtcbiAgcHJpdmF0ZSBsaXN0QmV0ID0gWzEwMCwgMTAwMCwgMTAwMDBdO1xuICBwcml2YXRlIGxpc3RCZXRMYWJlbCA9IFtcIjEwMFwiLCBcIjEwMDBcIiwgXCIxMDAwMFwiXTtcbiAgcHJpdmF0ZSBhcnJMaW5lU2VsZWN0ID0gW1xuICAgIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMCwgMjEsXG4gICAgMjIsIDIzLCAyNCwgMjUsXG4gIF07XG4gIHByaXZhdGUgaXNTcGluZWQgPSB0cnVlO1xuICBwcml2YXRlIHJlYWRvbmx5IHdpbGRJdGVtSWQgPSAyO1xuICBwcml2YXRlIHJlYWRvbmx5IG1hcExpbmUgPSBbXG4gICAgWzUsIDYsIDcsIDgsIDldLCAvLzFcbiAgICBbMCwgMSwgMiwgMywgNF0sIC8vMlxuICAgIFsxMCwgMTEsIDEyLCAxMywgMTRdLCAvLzNcbiAgICBbMTAsIDYsIDIsIDgsIDE0XSwgLy80XG4gICAgWzAsIDYsIDEyLCA4LCA0XSwgLy81XG4gICAgWzUsIDEsIDIsIDMsIDldLCAvLzZcbiAgICBbNSwgMTEsIDEyLCAxMywgOV0sIC8vN1xuICAgIFswLCAxLCA3LCAxMywgMTRdLCAvLzhcbiAgICBbMTAsIDExLCA3LCAzLCA0XSwgLy85XG4gICAgWzUsIDExLCA3LCAzLCA5XSwgLy8xMFxuICAgIFs1LCAxLCA3LCAxMywgOV0sIC8vMTFcbiAgICBbMCwgNiwgNywgOCwgNF0sIC8vMTJcbiAgICBbMTAsIDYsIDcsIDgsIDE0XSwgLy8xM1xuICAgIFswLCA2LCAyLCA4LCA0XSwgLy8xNFxuICAgIFsxMCwgNiwgMTIsIDgsIDE0XSwgLy8xNVxuICAgIFs1LCA2LCAyLCA4LCA5XSwgLy8xNlxuICAgIFs1LCA2LCAxMiwgOCwgOV0sIC8vMTdcbiAgICBbMCwgMSwgMTIsIDMsIDRdLCAvLzE4XG4gICAgWzEwLCAxMSwgMiwgMTMsIDE0XSwgLy8xOVxuICAgIFswLCAxMSwgMTIsIDEzLCA0XSwgLy8yMFxuICAgIFsxMCwgMSwgMiwgMywgMTRdLCAvLzIxXG4gICAgWzUsIDEsIDEyLCAzLCA5XSwgLy8yMlxuICAgIFs1LCAxMSwgMiwgMTMsIDldLCAvLzIzXG4gICAgWzAsIDExLCAyLCAxMywgNF0sIC8vMjRcbiAgICBbMTAsIDEsIDEyLCAzLCAxNF0sIC8vMjVcbiAgXTtcbiAgcHJpdmF0ZSBsYXN0U3BpblJlczogY21kLlJlY2VpdmVQbGF5ID0gbnVsbDtcbiAgcHJpdmF0ZSBjb2x1bW5zV2lsZCA9IFtdO1xuICBwcml2YXRlIHBvcHVwR3VpZGU6IFBvcHVwR3VpZGUgPSBudWxsO1xuICBwcml2YXRlIHBvcHVwSG9ub3I6IFBvcHVwSmFja3BvdEhpc3RvcnkgPSBudWxsO1xuICBwcml2YXRlIHBvcHVwSGlzdG9yeTogUG9wdXBIaXN0b3J5ID0gbnVsbDtcbiAgcHJpdmF0ZSBtdXNpY1Nsb3RTdGF0ZSA9IG51bGw7XG4gIHB1YmxpYyBzb3VuZFNsb3RTdGF0ZSA9IG51bGw7XG4gIHByaXZhdGUgcmVtb3RlTXVzaWNCYWNrZ3JvdW5kID0gbnVsbDtcbiAgcHJpdmF0ZSBtSXNUcmlhbCA9IGZhbHNlO1xuICBwcml2YXRlIGVmZmVjdFNvdW5kX1NwaW4gPSAwO1xuICBtdXRpcGxlSnBOb2RlID0gbnVsbDtcblxuICBzdGFydCgpIHtcbiAgICB0aGlzLnNvdW5kSW5pdCgpO1xuICAgIHRoaXMuY3VycmVudE51bWJlckZyZWVTcGluID0gMDtcbiAgICAvL3RoaXMuaXRlbUhlaWdodCA9IHRoaXMuaXRlbVRlbXBsYXRlLmhlaWdodDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmVlbHMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICBsZXQgcmVlbCA9IHRoaXMucmVlbHMuY2hpbGRyZW5baV07XG4gICAgICBsZXQgY291bnQgPSB0aGlzLnJvbGxTdGFydEl0ZW1Db3VudCArIGkgKiB0aGlzLnJvbGxBZGRJdGVtQ291bnQ7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvdW50OyBqKyspIHtcbiAgICAgICAgLy9sZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbVRlbXBsYXRlKTtcbiAgICAgICAgbGV0IGl0ZW1Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVJdGVtKTtcbiAgICAgICAgaXRlbU5vZGUuaGVpZ2h0ID0gdGhpcy5tSGVpZ2h0SXRlbTtcbiAgICAgICAgaXRlbU5vZGUud2lkdGggPSB0aGlzLm1XaWR0aEl0ZW07XG4gICAgICAgIGxldCBpdGVtOiBTbG90MTFJdGVtID0gaXRlbU5vZGUuZ2V0Q29tcG9uZW50KFNsb3QxMUl0ZW0pO1xuICAgICAgICBpdGVtTm9kZS5wYXJlbnQgPSByZWVsO1xuICAgICAgICBsZXQgaWQgPSBVdGlscy5yYW5kb21SYW5nZUludCgwLCAxMCk7XG4gICAgICAgIGl0ZW0uaW5pdChpZCwgaik7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHRoaXMuaXRlbVRlbXBsYXRlLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAvLyB0aGlzLml0ZW1UZW1wbGF0ZSA9IG51bGw7XG5cbiAgICAvL2Rhbmcga3kga2hpIG1hdCBrZXQgbm9pIHR1IGRvbmcgYmFja1xuICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuYWRkT25DbG9zZSgoKSA9PiB7XG4gICAgICAvL3RoaXMuYWN0QmFjaygpO1xuICAgICAgdGhpcy5tU2xvdExvYmJ5Lm9uQnRuQmFjaygpO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgLy9saXN0ZW5uZXIgY2xpZW50IC0gc2VydmVyXG4gICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5hZGRMaXN0ZW5lcigoZGF0YSkgPT4ge1xuICAgICAgbGV0IGlucGFja2V0ID0gbmV3IEluUGFja2V0KGRhdGEpO1xuICAgICAgc3dpdGNoIChpbnBhY2tldC5nZXRDbWRJZCgpKSB7XG4gICAgICAgIGNhc2UgY21kLkNvZGUuRlJFRV9EQUlfTFk6XG4gICAgICAgICAge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm1Jc1RyaWFsKSB7XG4gICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVGcmVlRGFpTHkoZGF0YSk7XG4gICAgICAgICAgICAgIGNjLmxvZyhcImluaXQgaW5mbyBTbG90MTE6XCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgICAgdGhpcy5kYWlMeUZyZWVTcGluID0gcmVzLmZyZWVTcGluO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBjbWQuQ29kZS5EQVRFX1gyOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVEYXRlWDIoZGF0YSk7XG4gICAgICAgICAgICBjYy5sb2coXCJpbml0IGluZm8gU2xvdDExOlwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnROdW1iZXJGcmVlU3BpbiA9IHJlcy5mcmVlU3BpbiArIHRoaXMuZGFpTHlGcmVlU3BpbjtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnROdW1iZXJGcmVlU3BpbiA+IDApIHtcbiAgICAgICAgICAgICAgdGhpcy5sYmxGcmVlU3BpbkNvdW50Lm5vZGUucGFyZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgIHRoaXMubGJsRnJlZVNwaW5Db3VudC5zdHJpbmcgPSB0aGlzLmN1cnJlbnROdW1iZXJGcmVlU3BpbiArIFwiXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmxibEZyZWVTcGluQ291bnQubm9kZS5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGNtZC5Db2RlLlVQREFURV9QT1Q6XG4gICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZVVwZGF0ZVBvdChkYXRhKTtcbiAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxibEphY2twb3QsIHJlcy5qYWNrcG90LCAwLjMpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgY21kLkNvZGUuVVBEQVRFX0pBQ0tQT1RfU0xPVFM6XG4gICAgICAgICAgdGhpcy5tU2xvdExvYmJ5Lm9uVXBkYXRlSmFja3BvdChkYXRhKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBjbWQuQ29kZS5QTEFZOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVQbGF5KGRhdGEpO1xuICAgICAgICAgICAgY2MubG9nKHJlcyk7XG4gICAgICAgICAgICB0aGlzLm9uU3BpblJlc3VsdChyZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmRDaGVjayhuZXcgY21kLlJlcVN1YmNyaWJlSGFsbFNsb3QoKSk7XG5cbiAgICAvL2NjLmxvZyhcIlNsb3QzQ29udHJvbGxlciBzdGFydGVkXCIpO1xuXG4gICAgLy9TbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kU3ViY3JpYmUodGhpcy5iZXRJZHgpKTtcbiAgICB0aGlzLnN0b3BTaG93TGluZXNXaW4oKTtcblxuICAgIHRoaXMudG9hc3QuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5lZmZlY3RXaW5DYXNoLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuZWZmZWN0SmFja3BvdC5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmVmZmVjdEJpZ1dpbi5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnBhbmVsU2V0dGluZy5hY3RpdmUgPSBmYWxzZTtcblxuICAgIHRoaXMubGJsVG90YWxCZXQuc3RyaW5nID0gKFxuICAgICAgdGhpcy5hcnJMaW5lU2VsZWN0Lmxlbmd0aCAqIHRoaXMubGlzdEJldFt0aGlzLmJldElkeF1cbiAgICApLnRvU3RyaW5nKCk7XG5cbiAgICBCcm9hZGNhc3RSZWNlaXZlci5yZWdpc3RlcihcbiAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsQ29pbiwgQ29uZmlncy5Mb2dpbi5Db2luLCAwLjMpO1xuICAgICAgfSxcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG5cbiAgICBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoXCLEkGFuZyBr4bq/dCBu4buRaSB04bubaSBzZXJ2ZXIuLi5cIik7XG4gICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5jaGVja0Nvbm5lY3QoKCkgPT4ge1xuICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcbiAgICAvL2NjLmxvZyhcIlNsb3QzQ29udHJvbGxlciBzdGFydGVkXCIpO1xuXG4gICAgdGhpcy5tU2xvdExvYmJ5LmluaXQodGhpcyk7XG4gICAgdGhpcy5tU2xvdExvYmJ5Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmJ0blBsYXlSZWFsLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5idG5QbGF5VHJ5Lm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgLy90aGlzLmluaXRNdXRpcGxlSlBOb2RlKCk7XG4gIH1cbiAgcHJpdmF0ZSBpbml0TXV0aXBsZUpQTm9kZSgpIHtcbiAgICBpZiAoIXRoaXMubXV0aXBsZUpwTm9kZSkge1xuICAgICAgY2MuYXNzZXRNYW5hZ2VyLmdldEJ1bmRsZShcIkxvYmJ5XCIpLmxvYWQoXG4gICAgICAgIFwicHJlZmFicy9NdXRpcGxlSmFja3BvdFByXCIsXG4gICAgICAgIGNjLlByZWZhYixcbiAgICAgICAgZnVuY3Rpb24gKGZpbmlzaCwgdG90YWwsIGl0ZW0pIHt9LFxuICAgICAgICAoZXJyMSwgcHJlZmFiOiBjYy5QcmVmYWIpID0+IHtcbiAgICAgICAgICBpZiAoZXJyMSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjYy5sb2coXCJlcnJyIGxvYWQgZ2FtZSBUSUVOTEVOOlwiLCBlcnIxKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tdXRpcGxlSnBOb2RlID0gY2NcbiAgICAgICAgICAgICAgLmluc3RhbnRpYXRlKHByZWZhYilcbiAgICAgICAgICAgICAgLmdldENvbXBvbmVudChcIk11dGlwbGVKYWNrcG90XCIpO1xuICAgICAgICAgICAgdGhpcy5tdXRpcGxlSnBOb2RlLm5vZGUucGFyZW50ID0gY2MuZGlyZWN0b3JcbiAgICAgICAgICAgICAgLmdldFNjZW5lKClcbiAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpO1xuICAgICAgICAgICAgdGhpcy5tdXRpcGxlSnBOb2RlLnNldEluZm8oXCJCSVRDT0lOXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBzaG93Q29pbnMocHJpemUpIHtcbiAgICB2YXIgbnVtYmVyID0gcHJpemUgLyAyMDAwMDtcbiAgICBpZiAobnVtYmVyIDw9IDEwKSBudW1iZXIgPSAxMDtcbiAgICBlbHNlIGlmIChudW1iZXIgPj0gMzApIG51bWJlciA9IDMwO1xuICAgIEFwcC5pbnN0YW5jZS5zaG93Q29pbnMobnVtYmVyLCB0aGlzLmxibFdpbk5vdy5ub2RlLCB0aGlzLm5vZGVDb2luKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkpvaW5Sb29tKCkge1xuICAgIHRoaXMubGJsQmV0LnN0cmluZyA9IHRoaXMubGlzdEJldExhYmVsW3RoaXMuYmV0SWR4XTtcbiAgICBsZXQgdG90YWxiZXQgPSB0aGlzLmFyckxpbmVTZWxlY3QubGVuZ3RoICogdGhpcy5saXN0QmV0W3RoaXMuYmV0SWR4XTtcbiAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxibFRvdGFsQmV0LCB0b3RhbGJldCwgMC4zKTtcblxuICAgIHRoaXMuc2tlU3Bpbi5hbmltYXRpb24gPSBcInhvYXlcIjtcbiAgICB0aGlzLnNrZVNwaW4ubG9vcCA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIHNob3dUb2FzdChtc2c6IHN0cmluZykge1xuICAgIHRoaXMudG9hc3QuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nID0gbXNnO1xuICAgIHRoaXMudG9hc3Quc3RvcEFsbEFjdGlvbnMoKTtcbiAgICB0aGlzLnRvYXN0LmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy50b2FzdC5ydW5BY3Rpb24oXG4gICAgICBjYy5zZXF1ZW5jZShcbiAgICAgICAgY2MuZGVsYXlUaW1lKDIpLFxuICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgdGhpcy50b2FzdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBtb25leVRvSyhtb25leTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAvLyBpZiAobW9uZXkgPCAxMDAwMCkge1xuICAgIC8vICAgICByZXR1cm4gbW9uZXkudG9TdHJpbmcoKTtcbiAgICAvLyB9XG4gICAgLy8gbW9uZXkgPSBwYXJzZUludCgobW9uZXkgLyAxMDAwKS50b1N0cmluZygpKTtcbiAgICByZXR1cm4gbW9uZXkudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0RW5hYmxlZEFsbEJ1dHRvbnMoZW5hYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuYnRuU3Bpbi5pbnRlcmFjdGFibGUgPSBlbmFibGVkO1xuICAgIHRoaXMuYnRuQmFjay5pbnRlcmFjdGFibGUgPSBlbmFibGVkO1xuICAgIC8vIHRoaXMuYnRuQmV0VXAuaW50ZXJhY3RhYmxlID0gZW5hYmxlZDtcbiAgICAvLyB0aGlzLmJ0bkJldERvd24uaW50ZXJhY3RhYmxlID0gZW5hYmxlZDtcbiAgICB0aGlzLmJ0bkxpbmUuaW50ZXJhY3RhYmxlID0gZW5hYmxlZDtcbiAgICB0aGlzLmJ0blBsYXlUcnkuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgdGhpcy5idG5QbGF5UmVhbC5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAvL3RoaXMudG9nZ2xlVHJpYWwuaW50ZXJhY3RhYmxlID0gZW5hYmxlZDtcbiAgICB0aGlzLmJ0blNwaW4uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5TcHJpdGUpLm5vZGUuYWN0aXZlID0gIWVuYWJsZWQ7XG4gIH1cblxuICBwcml2YXRlIHN0b3BBbGxFZmZlY3RzKCkge1xuICAgIHRoaXMuZWZmZWN0SmFja3BvdC5zdG9wQWxsQWN0aW9ucygpO1xuICAgIHRoaXMuZWZmZWN0SmFja3BvdC5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmVmZmVjdEJpZ1dpbi5zdG9wQWxsQWN0aW9ucygpO1xuICAgIHRoaXMuZWZmZWN0QmlnV2luLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuZWZmZWN0RnJlZVNwaW4uc3RvcEFsbEFjdGlvbnMoKTtcbiAgICB0aGlzLmVmZmVjdEZyZWVTcGluLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBzdG9wU2hvd0xpbmVzV2luKCkge1xuICAgIHRoaXMubGluZXNXaW4uc3RvcEFsbEFjdGlvbnMoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGluZXNXaW4uY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICB0aGlzLmxpbmVzV2luLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaWNvbldpbGRDb2x1bW5zLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgdGhpcy5pY29uV2lsZENvbHVtbnMuY2hpbGRyZW5baV0uYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuc3RvcEFsbEl0ZW1FZmZlY3QoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RvcEFsbEl0ZW1FZmZlY3QoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlZWxzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlZWxzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLnJlZWxzLmNoaWxkcmVuW2ldLmNoaWxkcmVuOyAvLyA/Pz9cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChjaGlsZHJlbltqXSk7XG4gICAgICAgICAgY2hpbGRyZW5bal0uc2NhbGUgPSAwLjY3O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzcGluKCkge1xuICAgIGlmICghdGhpcy5pc1NwaW5lZCkgcmV0dXJuO1xuXG4gICAgbGV0IGlzVHJhaWwgPSB0aGlzLm1Jc1RyaWFsO1xuICAgIGlmICghaXNUcmFpbCkge1xuICAgICAgaWYgKHRoaXMuY3VycmVudE51bWJlckZyZWVTcGluIDw9IDApIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIENvbmZpZ3MuTG9naW4uQ29pbiA8XG4gICAgICAgICAgdGhpcy5saXN0QmV0W3RoaXMuYmV0SWR4XSAqIHRoaXMuYXJyTGluZVNlbGVjdC5sZW5ndGhcbiAgICAgICAgKSB7XG4gICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfbm90X2Vub3VnaFwiKVxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdXJNb25leSA9XG4gICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luIC1cbiAgICAgICAgICB0aGlzLmFyckxpbmVTZWxlY3QubGVuZ3RoICogdGhpcy5saXN0QmV0W3RoaXMuYmV0SWR4XTtcbiAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxDb2luLCBjdXJNb25leSwgMC4zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3VycmVudE51bWJlckZyZWVTcGluLS07XG4gICAgICAgIHRoaXMubGJsRnJlZVNwaW5Db3VudC5zdHJpbmcgPSB0aGlzLmN1cnJlbnROdW1iZXJGcmVlU3BpbiArIFwiXCI7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnROdW1iZXJGcmVlU3BpbiA8PSAwKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50TnVtYmVyRnJlZVNwaW4gPSAwO1xuICAgICAgICAgIHRoaXMubGJsRnJlZVNwaW5Db3VudC5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmlzU3BpbmVkID0gZmFsc2U7XG4gICAgICB0aGlzLmNoYW5nZUFsbEl0ZW1Ub0RhcmsoZmFsc2UpO1xuICAgICAgdGhpcy5zdG9wQWxsRWZmZWN0cygpO1xuICAgICAgdGhpcy5zdG9wU2hvd0xpbmVzV2luKCk7XG4gICAgICB0aGlzLnNldEVuYWJsZWRBbGxCdXR0b25zKGZhbHNlKTtcbiAgICAgIHRoaXMuYnRuU3Bpbi5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuU3ByaXRlKS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICBjYy5sb2coXCJQTEFZOlwiLCBuZXcgY21kLlNlbmRQbGF5KHRoaXMuYXJyTGluZVNlbGVjdC50b1N0cmluZygpKSk7XG4gICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQoXG4gICAgICAgIG5ldyBjbWQuU2VuZFBsYXkodGhpcy5hcnJMaW5lU2VsZWN0LnRvU3RyaW5nKCkpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzU3BpbmVkID0gZmFsc2U7XG4gICAgICB0aGlzLnN0b3BBbGxFZmZlY3RzKCk7XG4gICAgICB0aGlzLnN0b3BTaG93TGluZXNXaW4oKTtcbiAgICAgIHRoaXMuc2V0RW5hYmxlZEFsbEJ1dHRvbnMoZmFsc2UpO1xuICAgICAgdGhpcy5idG5TcGluLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5TcHJpdGUpLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHZhciBySWR4ID0gVXRpbHMucmFuZG9tUmFuZ2VJbnQoMCwgVHJpYWxSZXN1bHRzLnJlc3VsdHMubGVuZ3RoKTtcbiAgICAgIHRoaXMub25TcGluUmVzdWx0KFRyaWFsUmVzdWx0cy5yZXN1bHRzW3JJZHhdKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0b3BTcGluKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yZWVscy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgIHZhciByb2xsID0gdGhpcy5yZWVscy5jaGlsZHJlbltpXTtcbiAgICAgIHJvbGwuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgIHJvbGwuc2V0UG9zaXRpb24oY2MudjIocm9sbC5nZXRQb3NpdGlvbigpLngsIDApKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNob3dMaW5lV2lucygpIHtcbiAgICB0aGlzLmlzU3BpbmVkID0gdHJ1ZTtcbiAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxibFdpbk5vdywgdGhpcy5sYXN0U3BpblJlcy5wcml6ZSwgMC4zKTtcbiAgICBsZXQgaXNUcmFpbCA9IHRoaXMubUlzVHJpYWw7XG4gICAgaWYgKCFpc1RyYWlsKSBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuICAgIGlmICghdGhpcy50b2dnbGVBdXRvLmlzQ2hlY2tlZCAmJiAhdGhpcy50b2dnbGVCb29zdC5pc0NoZWNrZWQpXG4gICAgICB0aGlzLnNldEVuYWJsZWRBbGxCdXR0b25zKHRydWUpO1xuXG4gICAgdGhpcy5saW5lc1dpbi5zdG9wQWxsQWN0aW9ucygpO1xuICAgIGxldCBsaW5lc1dpbiA9IHRoaXMubGFzdFNwaW5SZXMubGluZXNXaW4uc3BsaXQoXCIsXCIpO1xuICAgIGxpbmVzV2luID0gVXRpbHMucmVtb3ZlRHVwcyhsaW5lc1dpbik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lc1dpbi5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGxpbmVzV2luW2ldID09IFwiMFwiKSB7XG4gICAgICAgIGxpbmVzV2luLnNwbGljZShpLCAxKTtcbiAgICAgICAgaS0tO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgbWF0cml4ID0gdGhpcy5sYXN0U3BpblJlcy5tYXRyaXguc3BsaXQoXCIsXCIpO1xuICAgIGxldCBsaW5lc1dpbkNoaWxkcmVuID0gdGhpcy5saW5lc1dpbi5jaGlsZHJlbjtcbiAgICBsZXQgcm9sbHMgPSB0aGlzLnJlZWxzLmNoaWxkcmVuO1xuICAgIGxldCBhY3Rpb25zID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lc1dpbkNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaW5lc1dpbkNoaWxkcmVuW2ldLmFjdGl2ZSA9IGxpbmVzV2luLmluZGV4T2YoXCJcIiArIChpICsgMSkpID49IDA7XG4gICAgfVxuICAgIGlmICh0aGlzLmxhc3RTcGluUmVzLnByaXplID4gMCkge1xuICAgICAgdGhpcy5jaGFuZ2VBbGxJdGVtVG9EYXJrKHRydWUpO1xuICAgICAgdGhpcy5saW5lc1dpbi5zZXRTaWJsaW5nSW5kZXgoMSk7XG4gICAgICB0aGlzLnJlZWxzLnBhcmVudC5zZXRTaWJsaW5nSW5kZXgoMCk7XG4gICAgICB0aGlzLnNob3dXaW5DYXNoKHRoaXMubGFzdFNwaW5SZXMucHJpemUpO1xuICAgICAgYWN0aW9ucy5wdXNoKGNjLmRlbGF5VGltZSgxLjUpKTtcbiAgICAgIGFjdGlvbnMucHVzaChcbiAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXNXaW5DaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGluZXNXaW5DaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgYWN0aW9ucy5wdXNoKGNjLmRlbGF5VGltZSgwLjMpKTtcbiAgICAgIGlmICghdGhpcy50b2dnbGVCb29zdC5pc0NoZWNrZWQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lc1dpbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBsaW5lSWR4ID0gcGFyc2VJbnQobGluZXNXaW5baV0pIC0gMTtcbiAgICAgICAgICBsZXQgbGluZSA9IGxpbmVzV2luQ2hpbGRyZW5bbGluZUlkeF07XG4gICAgICAgICAgYWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAvLyBjYy5sb2coXCI9PT09PT09PT09PT09PT09OiBcIiArIGxpbmVJZHgpO1xuICAgICAgICAgICAgICB0aGlzLmxpbmVzV2luLnNldFNpYmxpbmdJbmRleCgwKTtcbiAgICAgICAgICAgICAgdGhpcy5yZWVscy5wYXJlbnQuc2V0U2libGluZ0luZGV4KDEpO1xuICAgICAgICAgICAgICBsaW5lLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgIGxldCBtTGluZSA9IHRoaXMubWFwTGluZVtsaW5lSWR4XTtcbiAgICAgICAgICAgICAgbGV0IGNvdW50SXRlbVdpbiA9IDA7XG4gICAgICAgICAgICAgIGxldCBmaXNydEl0ZW1JZCA9IHBhcnNlSW50KG1hdHJpeFttTGluZVswXV0pO1xuICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1MaW5lLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1JZCA9IHBhcnNlSW50KG1hdHJpeFttTGluZVtqXV0pO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIGZpc3J0SXRlbUlkID09IGl0ZW1JZCB8fFxuICAgICAgICAgICAgICAgICAgKGl0ZW1JZCA9PSB0aGlzLndpbGRJdGVtSWQgJiYgZmlzcnRJdGVtSWQgPiAzKSB8fFxuICAgICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5zV2lsZC5pbmRleE9mKGopID49IDBcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcIj09XCIgKyBpdGVtSWQgKyBcIiBqOlwiICsgaik7XG4gICAgICAgICAgICAgICAgICBjb3VudEl0ZW1XaW4rKztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY291bnRJdGVtV2luOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbVJvdyA9IHBhcnNlSW50KChtTGluZVtqXSAvIDUpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID1cbiAgICAgICAgICAgICAgICAgIHJvbGxzW2pdLmNoaWxkcmVuWzIgLSBpdGVtUm93XS5nZXRDb21wb25lbnQoU2xvdDExSXRlbSk7XG4gICAgICAgICAgICAgICAgaXRlbS5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgaXRlbS5jaGVja1Nob3dTcHJpdGVPclNwaW5lKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gY2MubG9nKFwibGluZUlkeDogXCIgKyBsaW5lSWR4ICsgXCJmaXNydEl0ZW1JZDogXCIgKyBmaXNydEl0ZW1JZCArIFwiIGNvdW50SXRlbVdpbjogXCIgKyBjb3VudEl0ZW1XaW4pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGFjdGlvbnMucHVzaChjYy5kZWxheVRpbWUoMSkpO1xuICAgICAgICAgIGFjdGlvbnMucHVzaChcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgbGluZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy5zdG9wQWxsSXRlbUVmZmVjdCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGFjdGlvbnMucHVzaChjYy5kZWxheVRpbWUoMC4xKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGFjdGlvbnMubGVuZ3RoID09IDApIHtcbiAgICAgIGFjdGlvbnMucHVzaChcbiAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgIC8vZml4ZWQgY2FsbCBjYy5zZXF1ZW5jZS5hcHBseVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgYWN0aW9ucy5wdXNoKFxuICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICB0aGlzLmNoYW5nZUFsbEl0ZW1Ub0RhcmsoZmFsc2UpO1xuICAgICAgICBpZiAodGhpcy50b2dnbGVCb29zdC5pc0NoZWNrZWQgfHwgdGhpcy50b2dnbGVBdXRvLmlzQ2hlY2tlZCkge1xuICAgICAgICAgIHRoaXMuc3BpbigpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gICAgdGhpcy5saW5lc1dpbi5ydW5BY3Rpb24oY2Muc2VxdWVuY2UuYXBwbHkobnVsbCwgYWN0aW9ucykpO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG93V2luQ2FzaChjYXNoOiBudW1iZXIpIHtcbiAgICB0aGlzLmVmZmVjdFdpbkNhc2guc3RvcEFsbEFjdGlvbnMoKTtcbiAgICB0aGlzLmVmZmVjdFdpbkNhc2guYWN0aXZlID0gdHJ1ZTtcbiAgICBsZXQgbGFiZWwgPSB0aGlzLmVmZmVjdFdpbkNhc2guZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCk7XG4gICAgbGFiZWwuc3RyaW5nID0gXCIwXCI7XG4gICAgdGhpcy5lZmZlY3RXaW5DYXNoLm9wYWNpdHkgPSAwO1xuICAgIHRoaXMuc2hvd0NvaW5zKGNhc2gpO1xuICAgIHRoaXMuZWZmZWN0V2luQ2FzaC5ydW5BY3Rpb24oXG4gICAgICBjYy5zZXF1ZW5jZShcbiAgICAgICAgY2MuZmFkZUluKDAuMyksXG4gICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICBUd2Vlbi5udW1iZXJUbyhsYWJlbCwgY2FzaCwgMC41KTtcbiAgICAgICAgfSksXG4gICAgICAgIGNjLmRlbGF5VGltZSgxLjUpLFxuICAgICAgICBjYy5mYWRlT3V0KDAuMyksXG4gICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmVmZmVjdFdpbkNhc2guYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc2hvd0VmZmVjdEJpZ1dpbihjYXNoOiBudW1iZXIsIGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5lZmZlY3RCaWdXaW4uc3RvcEFsbEFjdGlvbnMoKTtcbiAgICB0aGlzLmVmZmVjdEJpZ1dpbi5hY3RpdmUgPSB0cnVlO1xuICAgIC8vIHRoaXMuZWZmZWN0QmlnV2luLmdldENvbXBvbmVudEluQ2hpbGRyZW4oXCJNdWx0aUxhbmd1YWdlXCIpLnVwZGF0ZVNrZWxldG9uKCk7XG4gICAgbGV0IGxhYmVsID0gdGhpcy5lZmZlY3RCaWdXaW4uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCk7XG4gICAgbGV0IHBhcnRpY2FsID0gdGhpcy5lZmZlY3RCaWdXaW4uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5QYXJ0aWNsZVN5c3RlbSk7XG4gICAgcGFydGljYWwubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIGxhYmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cbiAgICB0aGlzLmVmZmVjdEJpZ1dpbi5ydW5BY3Rpb24oXG4gICAgICBjYy5zZXF1ZW5jZShcbiAgICAgICAgY2MuZGVsYXlUaW1lKDEpLFxuICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgbGFiZWwuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICBsYWJlbC5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICBUd2Vlbi5udW1iZXJUbyhsYWJlbCwgY2FzaCwgMSk7XG4gICAgICAgIH0pLFxuICAgICAgICBjYy5kZWxheVRpbWUoMyksXG4gICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICBwYXJ0aWNhbC5yZXNldFN5c3RlbSgpO1xuICAgICAgICAgIHRoaXMuZWZmZWN0QmlnV2luLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIGlmIChjYiAhPSBudWxsKSBjYigpO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNob3dFZmZlY3RGcmVlU3BpbihjYjogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMuZWZmZWN0RnJlZVNwaW4uc3RvcEFsbEFjdGlvbnMoKTtcbiAgICB0aGlzLmVmZmVjdEZyZWVTcGluLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5lZmZlY3RGcmVlU3BpblxuICAgICAgLmdldENvbXBvbmVudEluQ2hpbGRyZW4oc3AuU2tlbGV0b24pXG4gICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiZnJlZXNwaW5cIiwgdHJ1ZSk7XG4gICAgdGhpcy5wYXJ0aWNsZUVmZkZyZWUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuZWZmZWN0RnJlZVNwaW4ucnVuQWN0aW9uKFxuICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgIGNjLmRlbGF5VGltZSgxKSxcbiAgICAgICAgY2MuZGVsYXlUaW1lKDMpLFxuICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wYXJ0aWNsZUVmZkZyZWUucmVzZXRTeXN0ZW0oKTtcbiAgICAgICAgICB0aGlzLnBhcnRpY2xlRWZmRnJlZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZWZmZWN0RnJlZVNwaW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgaWYgKGNiICE9IG51bGwpIGNiKCk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc2hvd0VmZmVjdEphY2twb3QoY2FzaDogbnVtYmVyLCBjYjogKCkgPT4gdm9pZCA9IG51bGwpIHtcbiAgICB2YXIgYW5pbU5hbWUgPSBbXCJhbmltYXRpb243XCJdO1xuICAgIHZhciBpbmRleCA9IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKyBcIlwiKTtcbiAgICB0aGlzLmVmZmVjdEphY2twb3Quc3RvcEFsbEFjdGlvbnMoKTtcbiAgICB0aGlzLmVmZmVjdEphY2twb3QuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmVmZmVjdEphY2twb3RcbiAgICAgIC5nZXRDb21wb25lbnRJbkNoaWxkcmVuKHNwLlNrZWxldG9uKVxuICAgICAgLnNldEFuaW1hdGlvbigwLCBhbmltTmFtZVtpbmRleF0sIGZhbHNlKTtcbiAgICBsZXQgbGFiZWwgPSB0aGlzLmVmZmVjdEphY2twb3QuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCk7XG4gICAgbGFiZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgIHRoaXMuZWZmZWN0SmFja3BvdC5ydW5BY3Rpb24oXG4gICAgICBjYy5zZXF1ZW5jZShcbiAgICAgICAgY2MuZGVsYXlUaW1lKDAuNCksXG4gICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnBhcnRpY2xlSmFja3B0LnJlc2V0U3lzdGVtKCk7XG4gICAgICAgIH0pLFxuICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgbGFiZWwuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICBsYWJlbC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgVHdlZW4ubnVtYmVyVG8obGFiZWwsIGNhc2gsIDEpO1xuICAgICAgICB9KSxcbiAgICAgICAgY2MuZGVsYXlUaW1lKDUpLFxuICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgdGhpcy5lZmZlY3RKYWNrcG90LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIGlmIChjYiAhPSBudWxsKSBjYigpO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNob3dFZmZlY3RCb251cyhjYjogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMuZWZmZWN0Qm9udXMuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICB0aGlzLmVmZmVjdEJvbnVzLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5lZmZlY3RCb251c1xuICAgICAgLmdldENvbXBvbmVudEluQ2hpbGRyZW4oc3AuU2tlbGV0b24pXG4gICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiYm91bnVzXCIsIHRydWUpO1xuICAgIHRoaXMucGFydGljbGVCb251cy5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICB0aGlzLmVmZmVjdEJvbnVzLnJ1bkFjdGlvbihcbiAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICBjYy5kZWxheVRpbWUoMyksXG4gICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnBhcnRpY2xlQm9udXMucmVzZXRTeXN0ZW0oKTtcbiAgICAgICAgICB0aGlzLnBhcnRpY2xlQm9udXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmVmZmVjdEJvbnVzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIGlmIChjYiAhPSBudWxsKSBjYigpO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIG9uU3BpblJlc3VsdChyZXM6IGNtZC5SZWNlaXZlUGxheSB8IGFueSkge1xuICAgIHRoaXMuc3RvcFNwaW4oKTtcbiAgICBjYy5sb2coXCJvblNwaW5SZXN1bHQ6XCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAvLyByZXMgPSBKU09OLnBhcnNlKCd7XCJfcG9zXCI6MTE0LFwiX2RhdGFcIjp7XCIwXCI6MSxcIjFcIjoxNSxcIjJcIjoxNjEsXCIzXCI6MCxcIjRcIjowLFwiNVwiOjAsXCI2XCI6MCxcIjdcIjowLFwiOFwiOjAsXCI5XCI6MCxcIjEwXCI6OSxcIjExXCI6MTIwLFwiMTJcIjoyLFwiMTNcIjowLFwiMTRcIjoyOSxcIjE1XCI6NTEsXCIxNlwiOjQ0LFwiMTdcIjo1MyxcIjE4XCI6NDQsXCIxOVwiOjUwLFwiMjBcIjo0NCxcIjIxXCI6NTQsXCIyMlwiOjQ0LFwiMjNcIjo0OSxcIjI0XCI6NDQsXCIyNVwiOjU0LFwiMjZcIjo0NCxcIjI3XCI6NTAsXCIyOFwiOjQ0LFwiMjlcIjo1MCxcIjMwXCI6NDQsXCIzMVwiOjUzLFwiMzJcIjo0NCxcIjMzXCI6NDksXCIzNFwiOjQ0LFwiMzVcIjo1MyxcIjM2XCI6NDQsXCIzN1wiOjU0LFwiMzhcIjo0NCxcIjM5XCI6NTUsXCI0MFwiOjQ0LFwiNDFcIjo1NSxcIjQyXCI6NDQsXCI0M1wiOjUzLFwiNDRcIjowLFwiNDVcIjo0NCxcIjQ2XCI6NDksXCI0N1wiOjQ0LFwiNDhcIjo1MSxcIjQ5XCI6NDQsXCI1MFwiOjUyLFwiNTFcIjo0NCxcIjUyXCI6NTQsXCI1M1wiOjQ0LFwiNTRcIjo1NSxcIjU1XCI6NDQsXCI1NlwiOjU3LFwiNTdcIjo0NCxcIjU4XCI6NDksXCI1OVwiOjQ4LFwiNjBcIjo0NCxcIjYxXCI6NDksXCI2MlwiOjQ5LFwiNjNcIjo0NCxcIjY0XCI6NDksXCI2NVwiOjUxLFwiNjZcIjo0NCxcIjY3XCI6NDksXCI2OFwiOjUzLFwiNjlcIjo0NCxcIjcwXCI6NDksXCI3MVwiOjU0LFwiNzJcIjo0NCxcIjczXCI6NDksXCI3NFwiOjU1LFwiNzVcIjo0NCxcIjc2XCI6NDksXCI3N1wiOjU3LFwiNzhcIjo0NCxcIjc5XCI6NTAsXCI4MFwiOjQ5LFwiODFcIjo0NCxcIjgyXCI6NTAsXCI4M1wiOjUwLFwiODRcIjo0NCxcIjg1XCI6NTAsXCI4NlwiOjUxLFwiODdcIjo0NCxcIjg4XCI6NTAsXCI4OVwiOjUzLFwiOTBcIjowLFwiOTFcIjowLFwiOTJcIjowLFwiOTNcIjowLFwiOTRcIjowLFwiOTVcIjowLFwiOTZcIjowLFwiOTdcIjoxMDMsXCI5OFwiOjE5NCxcIjk5XCI6MTI4LFwiMTAwXCI6MCxcIjEwMVwiOjAsXCIxMDJcIjowLFwiMTAzXCI6MCxcIjEwNFwiOjM3LFwiMTA1XCI6MTc0LFwiMTA2XCI6OTgsXCIxMDdcIjoxODYsXCIxMDhcIjowLFwiMTA5XCI6MCxcIjExMFwiOjAsXCIxMTFcIjowLFwiMTEyXCI6MCxcIjExM1wiOjB9LFwiX2xlbmd0aFwiOjExNCxcIl9jb250cm9sbGVySWRcIjoxLFwiX2NtZElkXCI6NDAwMSxcIl9lcnJvclwiOjAsXCJyZWZcIjoyNDI0LFwicmVzdWx0XCI6MixcIm1hdHJpeFwiOlwiMyw1LDIsNiwxLDYsMiwyLDUsMSw1LDYsNyw3LDVcIixcImxpbmVzV2luXCI6XCIxLDMsNCw2LDcsOSwxMCwxMSwxMywxNSwxNiwxNywxOSwyMSwyMiwyMywyNVwiLFwiaGFpU2FvXCI6XCJcIixcInByaXplXCI6NjgwMDAwMCxcImN1cnJlbnRNb25leVwiOjYzMjE4NTUzMCxcImZyZWVTcGluXCI6MCxcImlzRnJlZVwiOmZhbHNlLFwiaXRlbXNXaWxkXCI6XCJcIixcInJhdGlvXCI6MCxcImN1cnJlbnROdW1iZXJGcmVlU3BpblwiOjB9Jyk7XG4gICAgdmFyIHN1Y2Nlc3NSZXN1bHQgPSBbMCwgMSwgMiwgMywgNCwgNSwgNl07XG4gICAgLy9yZXMucmVzdWx0ID09IDUgLy9ib251c1xuICAgIC8vcmVzLnJlc3VsdCA9PSAwIC8va2hvbmcgYW5cbiAgICAvL3Jlcy5yZXN1bHQgPT0gMSAvL3RoYW5nIHRodW9uZ1xuICAgIC8vcmVzLnJlc3VsdCA9PSAyIC8vdGhhbmcgbG9uXG4gICAgLy9yZXMucmVzdWx0ID09IDMgLy9ubyBodVxuICAgIC8vcmVzLnJlc3VsdCA9PSA2IC8vdGhhbmcgY3VjIGxvblxuICAgIC8vIGNjLmxvZyhcInNhb3NhbzpcIiArIChzdWNjZXNzUmVzdWx0LmluZGV4T2YocmVzLnJlc3VsdCkgPT09IC0xKSk7XG4gICAgaWYgKHN1Y2Nlc3NSZXN1bHQuaW5kZXhPZihyZXMucmVzdWx0KSA9PT0gLTEpIHtcbiAgICAgIHRoaXMuaXNTcGluZWQgPSB0cnVlO1xuXG4gICAgICB0aGlzLnRvZ2dsZUF1dG8uaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICB0aGlzLnRvZ2dsZUF1dG8uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgIHRoaXMudG9nZ2xlQm9vc3QuaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICB0aGlzLnRvZ2dsZUJvb3N0LmludGVyYWN0YWJsZSA9IHRydWU7XG5cbiAgICAgIHRoaXMuc2V0RW5hYmxlZEFsbEJ1dHRvbnModHJ1ZSk7XG4gICAgICBzd2l0Y2ggKHJlcy5yZXN1bHQpIHtcbiAgICAgICAgY2FzZSAxMDI6XG4gICAgICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X3Nsb3RfZXJyb3JcIikpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF91bmtub3duX2Vycm9yMVwiKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlQWxsSXRlbVRvRGFyayhmYWxzZSk7XG4gICAgdGhpcy5jdXJyZW50TnVtYmVyRnJlZVNwaW4gPSByZXMuY3VycmVudE51bWJlckZyZWVTcGluO1xuICAgIHRoaXMubGFzdFNwaW5SZXMgPSByZXM7XG4gICAgdGhpcy5jb2x1bW5zV2lsZC5sZW5ndGggPSAwO1xuXG4gICAgbGV0IGlzVHJhaWwgPSB0aGlzLm1Jc1RyaWFsO1xuICAgIGlmICghaXNUcmFpbCAmJiAhdGhpcy5sYXN0U3BpblJlcy5pc0ZyZWUpIHtcbiAgICAgIENvbmZpZ3MuTG9naW4uQ29pbiA9IHJlcy5jdXJyZW50TW9uZXk7XG4gICAgfVxuXG4gICAgbGV0IG1hdHJpeCA9IHJlcy5tYXRyaXguc3BsaXQoXCIsXCIpO1xuICAgIGxldCB0aW1lU2NhbGUgPSB0aGlzLnRvZ2dsZUJvb3N0LmlzQ2hlY2tlZCA/IDAuNSA6IDE7XG4gICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgdGhpcy5lZmZlY3RTb3VuZF9TcGluID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU3BpbiwgZmFsc2UsIDEpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmVlbHMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICBsZXQgcm9sbCA9IHRoaXMucmVlbHMuY2hpbGRyZW5baV07XG4gICAgICBsZXQgc3RlcDFQb3MgPSB0aGlzLm1IZWlnaHRJdGVtICogMC4zO1xuICAgICAgbGV0IHN0ZXAyUG9zID1cbiAgICAgICAgLXRoaXMubUhlaWdodEl0ZW0gKiByb2xsLmNoaWxkcmVuQ291bnQgK1xuICAgICAgICB0aGlzLm1IZWlnaHRJdGVtICogMyAtXG4gICAgICAgIHRoaXMubUhlaWdodEl0ZW0gKiAwLjM7XG4gICAgICBsZXQgc3RlcDNQb3MgPVxuICAgICAgICAtdGhpcy5tSGVpZ2h0SXRlbSAqIHJvbGwuY2hpbGRyZW5Db3VudCArIHRoaXMubUhlaWdodEl0ZW0gKiAzO1xuICAgICAgcm9sbC5ydW5BY3Rpb24oXG4gICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjIgKiBpICogdGltZVNjYWxlKSxcbiAgICAgICAgICBjY1xuICAgICAgICAgICAgLm1vdmVUbygwLjIgKiB0aW1lU2NhbGUsIGNjLnYyKHJvbGwucG9zaXRpb24ueCwgc3RlcDFQb3MpKVxuICAgICAgICAgICAgLmVhc2luZyhjYy5lYXNlUXVhZHJhdGljQWN0aW9uT3V0KCkpLFxuICAgICAgICAgIGNjXG4gICAgICAgICAgICAubW92ZVRvKFxuICAgICAgICAgICAgICAodGhpcy5zcGluRHVyYXRpb24gKyB0aGlzLmFkZFNwaW5EdXJhdGlvbiAqIGkpICogdGltZVNjYWxlLFxuICAgICAgICAgICAgICBjYy52Mihyb2xsLnBvc2l0aW9uLngsIHN0ZXAyUG9zKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmVhc2luZyhjYy5lYXNlUXVhZHJhdGljQWN0aW9uSW5PdXQoKSksXG4gICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRSZWVsU3RvcCwgZmFsc2UsIDEpO1xuICAgICAgICAgICAgICBpZiAoaSA9PSA0KSB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmVmZmVjdFNvdW5kX1NwaW4pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2NcbiAgICAgICAgICAgIC5tb3ZlVG8oMC4yICogdGltZVNjYWxlLCBjYy52Mihyb2xsLnBvc2l0aW9uLngsIHN0ZXAzUG9zKSlcbiAgICAgICAgICAgIC5lYXNpbmcoY2MuZWFzZVF1YWRyYXRpY0FjdGlvbkluKCkpLFxuICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgIHJvbGwuc2V0UG9zaXRpb24oY2MudjIocm9sbC5wb3NpdGlvbi54LCAwKSk7XG4gICAgICAgICAgICBpZiAoaSA9PSA0KSB7XG4gICAgICAgICAgICAgIC8vZmluZCBjb2x1bW5zIHdpbGRcbiAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXRyaXgubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQobWF0cml4W2pdKSA9PSB0aGlzLndpbGRJdGVtSWQpIHtcbiAgICAgICAgICAgICAgICAgIGxldCBjID0gaiAlIDU7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb2x1bW5zV2lsZC5pbmRleE9mKGMpID09IC0xKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbnNXaWxkLnB1c2goYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vcmVwbGFjZSB3aWxkIGl0ZW1zIGluIGNvbHVtbnNcbiAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnNXaWxkLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGMgPSB0aGlzLmNvbHVtbnNXaWxkW2pdO1xuICAgICAgICAgICAgICAgIHRoaXMuaWNvbldpbGRDb2x1bW5zLmNoaWxkcmVuW2NdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gdGhpcy5yZWVscy5jaGlsZHJlbltjXS5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjaGlsZHJlblsyXVxuICAgICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChTbG90MTFJdGVtKVxuICAgICAgICAgICAgICAgICAgLmNoYW5nZVNwaW5lSWNvbih0aGlzLndpbGRJdGVtSWQpO1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuWzFdXG4gICAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KFNsb3QxMUl0ZW0pXG4gICAgICAgICAgICAgICAgICAuY2hhbmdlU3BpbmVJY29uKHRoaXMud2lsZEl0ZW1JZCk7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5bMF1cbiAgICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoU2xvdDExSXRlbSlcbiAgICAgICAgICAgICAgICAgIC5jaGFuZ2VTcGluZUljb24odGhpcy53aWxkSXRlbUlkKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAodGhpcy5jb2x1bW5zV2lsZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcm9sbC5ydW5BY3Rpb24oXG4gICAgICAgICAgICAgICAgICBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDIuNiksXG4gICAgICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSA8IHRoaXMuaWNvbldpbGRDb2x1bW5zLmNoaWxkcmVuQ291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpKytcbiAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWNvbldpbGRDb2x1bW5zLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjEpLFxuICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGluZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3BpbmVkKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICAvL3Jvb2wgPSByZWVsXG4gICAgICBUVyhyb2xsKVxuICAgICAgICAuZGVsYXkoMC4yICogaSAqIHRpbWVTY2FsZSArIDAuNCAqIHRpbWVTY2FsZSlcbiAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgcm9sbC5jaGlsZHJlbkNvdW50OyBtKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gcm9sbC5jaGlsZHJlblttXS5nZXRDb21wb25lbnQoU2xvdDExSXRlbSk7XG4gICAgICAgICAgICBpdGVtLmNoYW5nZVNwcml0ZUJsdXJCeUl0ZW1JZChpdGVtLml0ZW1JZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuc3RhcnQoKTtcbiAgICAgIFRXKHJvbGwpXG4gICAgICAgIC5kZWxheSgoMC40NyArIDAuMiAqIGkpICogdGltZVNjYWxlKVxuICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgbGV0IGxpc3RJdGVtTm9kZSA9IHJvbGwuY2hpbGRyZW47XG4gICAgICAgICAgbGlzdEl0ZW1Ob2RlWzJdXG4gICAgICAgICAgICAuZ2V0Q29tcG9uZW50KFNsb3QxMUl0ZW0pXG4gICAgICAgICAgICAuY2hhbmdlU3BpbmVJY29uKHBhcnNlSW50KG1hdHJpeFtpXSkpO1xuICAgICAgICAgIGxpc3RJdGVtTm9kZVsxXVxuICAgICAgICAgICAgLmdldENvbXBvbmVudChTbG90MTFJdGVtKVxuICAgICAgICAgICAgLmNoYW5nZVNwaW5lSWNvbihwYXJzZUludChtYXRyaXhbNSArIGldKSk7XG4gICAgICAgICAgbGlzdEl0ZW1Ob2RlWzBdXG4gICAgICAgICAgICAuZ2V0Q29tcG9uZW50KFNsb3QxMUl0ZW0pXG4gICAgICAgICAgICAuY2hhbmdlU3BpbmVJY29uKHBhcnNlSW50KG1hdHJpeFsxMCArIGldKSk7XG4gICAgICAgICAgbGlzdEl0ZW1Ob2RlW2xpc3RJdGVtTm9kZS5sZW5ndGggLSAxXVxuICAgICAgICAgICAgLmdldENvbXBvbmVudChTbG90MTFJdGVtKVxuICAgICAgICAgICAgLmNoYW5nZVNwaW5lSWNvbihwYXJzZUludChtYXRyaXhbaV0pKTtcbiAgICAgICAgICBsaXN0SXRlbU5vZGVbbGlzdEl0ZW1Ob2RlLmxlbmd0aCAtIDJdXG4gICAgICAgICAgICAuZ2V0Q29tcG9uZW50KFNsb3QxMUl0ZW0pXG4gICAgICAgICAgICAuY2hhbmdlU3BpbmVJY29uKHBhcnNlSW50KG1hdHJpeFs1ICsgaV0pKTtcbiAgICAgICAgICBsaXN0SXRlbU5vZGVbbGlzdEl0ZW1Ob2RlLmxlbmd0aCAtIDNdXG4gICAgICAgICAgICAuZ2V0Q29tcG9uZW50KFNsb3QxMUl0ZW0pXG4gICAgICAgICAgICAuY2hhbmdlU3BpbmVJY29uKHBhcnNlSW50KG1hdHJpeFsxMCArIGldKSk7XG4gICAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCByb2xsLmNoaWxkcmVuQ291bnQ7IG0rKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSByb2xsLmNoaWxkcmVuW21dLmdldENvbXBvbmVudChTbG90MTFJdGVtKTtcbiAgICAgICAgICAgIGl0ZW0uc3ByaXRlSWNvbi5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5UUklNTUVEO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzcGluZWQoKSB7XG4gICAgdGhpcy5za2VTcGluLmFuaW1hdGlvbiA9IFwieG9heVwiO1xuICAgIHRoaXMuY3VycmVudE51bWJlckZyZWVTcGluID0gdGhpcy5sYXN0U3BpblJlcy5jdXJyZW50TnVtYmVyRnJlZVNwaW47XG4gICAgaWYgKHRoaXMubGFzdFNwaW5SZXMuY3VycmVudE51bWJlckZyZWVTcGluID4gMCkge1xuICAgICAgdGhpcy5sYmxGcmVlU3BpbkNvdW50Lm5vZGUucGFyZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLmxibEZyZWVTcGluQ291bnQuc3RyaW5nID0gdGhpcy5jdXJyZW50TnVtYmVyRnJlZVNwaW4gKyBcIlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxibEZyZWVTcGluQ291bnQubm9kZS5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLmxhc3RTcGluUmVzLmZyZWVTcGluID09IDEpIHtcbiAgICAgIHRoaXMuc2hvd0VmZmVjdEZyZWVTcGluKCgpID0+IHtcbiAgICAgICAgdGhpcy5zaG93TGluZVdpbnMoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc3VjY2Vzc1Jlc3VsdCA9IFswLCAxLCAzLCA1LCA2XTtcbiAgICAgIHN3aXRjaCAodGhpcy5sYXN0U3BpblJlcy5yZXN1bHQpIHtcbiAgICAgICAgY2FzZSBUWVBFX1dJTi5NSVNTOiAvL2sgYW5cbiAgICAgICAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTcGluTWlzLCBmYWxzZSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc2hvd0xpbmVXaW5zKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVFlQRV9XSU4uV0lOOiAvLyB0aGFuZyB0aHVvbmdcbiAgICAgICAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sYXN0U3BpblJlcy5wcml6ZSA+IDApXG4gICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNwaW5XaW4sIGZhbHNlLCAxKTtcbiAgICAgICAgICAgIGVsc2UgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU3Bpbk1pcywgZmFsc2UsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnNob3dMaW5lV2lucygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFRZUEVfV0lOLkJJR1dJTjogLy8gdGhhbmcgbG9uXG4gICAgICAgICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQmlnV2luLCBmYWxzZSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc2hvd0VmZmVjdEJpZ1dpbih0aGlzLmxhc3RTcGluUmVzLnByaXplLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dMaW5lV2lucygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFRZUEVfV0lOLkpBQ0tQT1Q6IC8vamFja3BvdFxuICAgICAgICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEphY2twb3QsIGZhbHNlLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zaG93RWZmZWN0SmFja3BvdCh0aGlzLmxhc3RTcGluUmVzLnByaXplLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dMaW5lV2lucygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFRZUEVfV0lOLlNVUEVSV0lOOiAvL2phY2twb3RcbiAgICAgICAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRKYWNrcG90LCBmYWxzZSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc2hvd0VmZmVjdEphY2twb3QodGhpcy5sYXN0U3BpblJlcy5wcml6ZSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93TGluZVdpbnMoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OiAvL3RoYW5nIHNpZXUgbG9uXG4gICAgICAgICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQmlnV2luLCBmYWxzZSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc2hvd0VmZmVjdEJpZ1dpbih0aGlzLmxhc3RTcGluUmVzLnByaXplLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dMaW5lV2lucygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFRZUEVfV0lOLkJPTlVTOiAvL2JvbnVzXG4gICAgICAgICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQm9udXMsIGZhbHNlLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zaG93RWZmZWN0Qm9udXMoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGxpbmVzV2luID0gdGhpcy5sYXN0U3BpblJlcy5saW5lc1dpbi5zcGxpdChcIixcIik7XG4gICAgICAgICAgICBsaW5lc1dpbiA9IFV0aWxzLnJlbW92ZUR1cHMobGluZXNXaW4pO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lc1dpbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBpZiAobGluZXNXaW5baV0gPT0gXCIwXCIpIHtcbiAgICAgICAgICAgICAgICBsaW5lc1dpbi5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBtYXRyaXggPSB0aGlzLmxhc3RTcGluUmVzLm1hdHJpeC5zcGxpdChcIixcIik7XG4gICAgICAgICAgICBsZXQgY291bnRJdGVtID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXNXaW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgbGV0IGNvdW50SXRlbUJvbnVzID0gMDtcbiAgICAgICAgICAgICAgbGV0IGxpbmVJZHggPSBwYXJzZUludChsaW5lc1dpbltpXSkgLSAxO1xuICAgICAgICAgICAgICBsZXQgbUxpbmUgPSB0aGlzLm1hcExpbmVbbGluZUlkeF07XG4gICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbUxpbmUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbUlkID0gbWF0cml4W21MaW5lW2pdXTtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbUlkID09IFwiMVwiKSB7XG4gICAgICAgICAgICAgICAgICBjb3VudEl0ZW1Cb251cysrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBpZiAoY291bnRJdGVtQm9udXMgPiBjb3VudEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRJdGVtID0gY291bnRJdGVtQm9udXM7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWN0U2hvd0JvbnVzKFxuICAgICAgICAgICAgICB0aGlzLm1Jc1RyaWFsID8gMTAwIDogdGhpcy5saXN0QmV0W3RoaXMuYmV0SWR4XSxcbiAgICAgICAgICAgICAgdGhpcy5sYXN0U3BpblJlcy5oYWlTYW8sXG4gICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dMaW5lV2lucygpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjb3VudEl0ZW1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uQnRuU291bmRUb3VjaEJvbnVzKCkge31cblxuICBvbkJ0blNvdW5kU3VtYXJ5KCkge31cbiAgYWN0QmFjaygpIHtcbiAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgIH1cbiAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kVW5TdWJjcmliZSh0aGlzLmJldElkeCkpO1xuICAgIC8vIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcbiAgICAvLyBBcHAuaW5zdGFuY2UubG9hZFNjZW5lKFwiTG9iYnlcIik7XG5cbiAgICB0aGlzLm1TbG90TG9iYnkubm9kZS5hY3RpdmUgPSB0cnVlO1xuICB9XG4gIGFjdENoYW5nZVJvb20oKSB7XG4gICAgaWYgKCF0aGlzLmlzU3BpbmVkKSByZXR1cm47XG4gICAgdGhpcy5hY3RCYWNrKCk7XG4gIH1cbiAgYWN0SGlkZGVuKCkge1xuICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9mdW5jdGlvbl9pbl9kZXZlbG9wbWVudFwiKSk7XG4gIH1cblxuICBhY3RCZXRVcCgpIHtcbiAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgIH1cblxuICAgIGxldCBpc1RyYWlsID0gdGhpcy5tSXNUcmlhbDtcbiAgICBpZiAoaXNUcmFpbCkge1xuICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X3Nsb3RfZXJyb3JcIikpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5iZXRJZHggPCB0aGlzLmxpc3RCZXQubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5kYWlMeUZyZWVTcGluID0gMDtcbiAgICAgIHRoaXMubGJsRnJlZVNwaW5Db3VudC5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChcbiAgICAgICAgbmV3IGNtZC5TZW5kQ2hhbmdlUm9vbSh0aGlzLmJldElkeCwgKyt0aGlzLmJldElkeClcbiAgICAgICk7XG4gICAgICB0aGlzLmxibEJldC5zdHJpbmcgPSB0aGlzLmxpc3RCZXRMYWJlbFt0aGlzLmJldElkeF07XG4gICAgICBUd2Vlbi5udW1iZXJUbyhcbiAgICAgICAgdGhpcy5sYmxUb3RhbEJldCxcbiAgICAgICAgdGhpcy5hcnJMaW5lU2VsZWN0Lmxlbmd0aCAqIHRoaXMubGlzdEJldFt0aGlzLmJldElkeF0sXG4gICAgICAgIDAuMyxcbiAgICAgICAgKG4pID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5tb25leVRvSyhuKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBhY3RCZXREb3duKCkge1xuICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgfVxuXG4gICAgbGV0IGlzVHJhaWwgPSB0aGlzLm1Jc1RyaWFsO1xuICAgIGlmIChpc1RyYWlsKSB7XG4gICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfc2xvdF9lcnJvclwiKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmJldElkeCA+IDApIHtcbiAgICAgIHRoaXMuZGFpTHlGcmVlU3BpbiA9IDA7XG4gICAgICB0aGlzLmxibEZyZWVTcGluQ291bnQubm9kZS5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQoXG4gICAgICAgIG5ldyBjbWQuU2VuZENoYW5nZVJvb20odGhpcy5iZXRJZHgsIC0tdGhpcy5iZXRJZHgpXG4gICAgICApO1xuICAgICAgdGhpcy5sYmxCZXQuc3RyaW5nID0gdGhpcy5saXN0QmV0TGFiZWxbdGhpcy5iZXRJZHhdO1xuICAgICAgVHdlZW4ubnVtYmVyVG8oXG4gICAgICAgIHRoaXMubGJsVG90YWxCZXQsXG4gICAgICAgIHRoaXMuYXJyTGluZVNlbGVjdC5sZW5ndGggKiB0aGlzLmxpc3RCZXRbdGhpcy5iZXRJZHhdLFxuICAgICAgICAwLjMsXG4gICAgICAgIChuKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubW9uZXlUb0sobik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgYWN0TGluZSgpIHtcbiAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgIH1cblxuICAgIGxldCBpc1RyYWlsID0gdGhpcy5tSXNUcmlhbDtcbiAgICBpZiAoaXNUcmFpbCkge1xuICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X3Nsb3RfZXJyb3JcIikpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnBvcHVwU2VsZWN0TGluZS5zaG93KCk7XG4gIH1cblxuICBhY3RTZXR0aW5nKCkge1xuICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgfVxuICAgIHRoaXMucGFuZWxTZXR0aW5nLmFjdGl2ZSA9ICF0aGlzLnBhbmVsU2V0dGluZy5hY3RpdmU7XG4gIH1cblxuICB0b2dnbGVUcmlhbE9uQ2hlY2soKSB7XG4gICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICB9XG5cbiAgICB0aGlzLm1Jc1RyaWFsID0gIXRoaXMubUlzVHJpYWw7XG4gICAgbGV0IGlzVHJhaWwgPSB0aGlzLm1Jc1RyaWFsO1xuICAgIGlmIChpc1RyYWlsKSB7XG4gICAgICB0aGlzLmJ0blBsYXlSZWFsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuYnRuUGxheVRyeS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5sYmxMaW5lLnN0cmluZyA9IFwiMjVcIjtcbiAgICAgIHRoaXMubGJsQmV0LnN0cmluZyA9IFwiMTAwXCI7XG4gICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxibFRvdGFsQmV0LCAyNTAwLCAwLjMsIChuKSA9PiB0aGlzLm1vbmV5VG9LKG4pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5idG5QbGF5UmVhbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5idG5QbGF5VHJ5Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMubGJsTGluZS5zdHJpbmcgPSB0aGlzLmFyckxpbmVTZWxlY3QubGVuZ3RoLnRvU3RyaW5nKCk7XG4gICAgICB0aGlzLmxibEJldC5zdHJpbmcgPSB0aGlzLmxpc3RCZXRMYWJlbFt0aGlzLmJldElkeF07XG4gICAgICBUd2Vlbi5udW1iZXJUbyhcbiAgICAgICAgdGhpcy5sYmxUb3RhbEJldCxcbiAgICAgICAgdGhpcy5hcnJMaW5lU2VsZWN0Lmxlbmd0aCAqIHRoaXMubGlzdEJldFt0aGlzLmJldElkeF0sXG4gICAgICAgIDAuMyxcbiAgICAgICAgKG4pID0+IHRoaXMubW9uZXlUb0sobilcbiAgICAgICk7XG4gICAgfVxuICAgIGNjLmxvZyhcImlzVHJpYWw9PVwiICsgdGhpcy5tSXNUcmlhbCk7XG4gIH1cblxuICB0b2dnbGVBdXRvT25DaGVjaygpIHtcbiAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgIH1cblxuICAgIGxldCBpc1RyYWlsID0gdGhpcy5tSXNUcmlhbDtcbiAgICBpZiAodGhpcy50b2dnbGVBdXRvLmlzQ2hlY2tlZCAmJiBpc1RyYWlsKSB7XG4gICAgICB0aGlzLnRvZ2dsZUF1dG8uaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfc2xvdF9lcnJvclwiKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnRvZ2dsZUF1dG8uaXNDaGVja2VkKSB7XG4gICAgICB0aGlzLnNwaW4oKTtcbiAgICAgIHRoaXMudG9nZ2xlQm9vc3QuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9nZ2xlQm9vc3QuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLmlzU3BpbmVkKSB7XG4gICAgICAgIHRoaXMuc2V0RW5hYmxlZEFsbEJ1dHRvbnModHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlQm9vc3RPbkNoZWNrKCkge1xuICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgfVxuXG4gICAgbGV0IGlzVHJhaWwgPSB0aGlzLm1Jc1RyaWFsO1xuICAgIGlmICh0aGlzLnRvZ2dsZUJvb3N0LmlzQ2hlY2tlZCAmJiBpc1RyYWlsKSB7XG4gICAgICB0aGlzLnRvZ2dsZUJvb3N0LmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X3Nsb3RfZXJyb3JcIikpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy50b2dnbGVCb29zdC5pc0NoZWNrZWQpIHtcbiAgICAgIHRoaXMuc3BpbigpO1xuICAgICAgdGhpcy50b2dnbGVBdXRvLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvZ2dsZUF1dG8uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLmlzU3BpbmVkKSB7XG4gICAgICAgIHRoaXMuc2V0RW5hYmxlZEFsbEJ1dHRvbnModHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy9tdXNpYyBzZXR0aW5nXG5cbiAgcHJpdmF0ZSBzb3VuZEluaXQoKSB7XG4gICAgLy8gbXVzaWNTYXZlIDogICAwID09IE9GRiAsIDEgPT0gT05cbiAgICB2YXIgbXVzaWNTYXZlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibXVzaWNfU2xvdF83XCIpO1xuICAgIGlmIChtdXNpY1NhdmUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5tdXNpY1Nsb3RTdGF0ZSA9IHBhcnNlSW50KG11c2ljU2F2ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubXVzaWNTbG90U3RhdGUgPSAxO1xuICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXVzaWNfU2xvdF83XCIsIFwiMVwiKTtcbiAgICB9XG5cbiAgICAvLyBzb3VuZFNhdmUgOiAgIDAgPT0gT0ZGICwgMSA9PSBPTlxuICAgIHZhciBzb3VuZFNhdmUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzb3VuZF9TbG90XzdcIik7XG4gICAgaWYgKHNvdW5kU2F2ZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLnNvdW5kU2xvdFN0YXRlID0gcGFyc2VJbnQoc291bmRTYXZlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zb3VuZFNsb3RTdGF0ZSA9IDE7XG4gICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzb3VuZF9TbG90XzdcIiwgXCIxXCIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm11c2ljU2xvdFN0YXRlID09IDApIHtcbiAgICAgIC8vdGhpcy5tdXNpY09mZi5hY3RpdmUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvL3RoaXMubXVzaWNPZmYuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMCkge1xuICAgICAgLy90aGlzLnNvdW5kT2ZmLmFjdGl2ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vdGhpcy5zb3VuZE9mZi5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tdXNpY1Nsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICB0aGlzLnJlbW90ZU11c2ljQmFja2dyb3VuZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLnNvdW5kQmcsIHRydWUpO1xuICAgIH1cbiAgfVxuICBzZXR0aW5nTXVzaWMoKSB7XG4gICAgLy90aGlzLm11c2ljT2ZmLmFjdGl2ZSA9ICF0aGlzLm11c2ljT2ZmLmFjdGl2ZTtcbiAgICBpZiAoIXRoaXMudG9nZ2xnZU11c2ljLmlzQ2hlY2tlZCkge1xuICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLnJlbW90ZU11c2ljQmFja2dyb3VuZCk7XG4gICAgICB0aGlzLm11c2ljU2xvdFN0YXRlID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdGVNdXNpY0JhY2tncm91bmQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5zb3VuZEJnLCB0cnVlKTtcbiAgICAgIHRoaXMubXVzaWNTbG90U3RhdGUgPSAxO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgfVxuXG4gICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXVzaWNfU2xvdF83XCIsIFwiXCIgKyB0aGlzLm11c2ljU2xvdFN0YXRlKTtcbiAgfVxuICBzZXR0aW5nU291bmQoKSB7XG4gICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMudG9nZ2xlU291bmQuaXNDaGVja2VkKSB7XG4gICAgICB0aGlzLnNvdW5kU2xvdFN0YXRlID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zb3VuZFNsb3RTdGF0ZSA9IDE7XG4gICAgfVxuXG4gICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXVzaWNfU2xvdF83XCIsIFwiXCIgKyB0aGlzLnNvdW5kU2xvdFN0YXRlKTtcbiAgfVxuICBjaGFuZ2VBbGxJdGVtVG9EYXJrKHN0YXRlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlZWxzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgbGV0IGNvbCA9IHRoaXMucmVlbHMuY2hpbGRyZW5baV07XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbC5jaGlsZHJlbkNvdW50OyBqKyspIHtcbiAgICAgICAgbGV0IGl0ZW0gPSBjb2wuY2hpbGRyZW5bal07XG4gICAgICAgIGxldCBzcHJpdGUgPSBpdGVtLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuU3ByaXRlKTtcbiAgICAgICAgbGV0IHNwaW5lID0gaXRlbS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKHNwLlNrZWxldG9uKTtcbiAgICAgICAgc3BpbmUubm9kZS5jb2xvciA9IHN0YXRlID8gY2MuQ29sb3IuR1JBWSA6IGNjLkNvbG9yLldISVRFO1xuICAgICAgICBzcHJpdGUubm9kZS5jb2xvciA9IHN0YXRlID8gY2MuQ29sb3IuR1JBWSA6IGNjLkNvbG9yLldISVRFO1xuICAgICAgICBzcGluZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBzcHJpdGUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHNwcml0ZS5ub2RlKTtcbiAgICAgICAgICBzcHJpdGUubm9kZS5zY2FsZSA9IDEuMDtcbiAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoc3BpbmUubm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYWN0U2VsZWN0bGluZSgpIHtcbiAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgIH1cbiAgICBpZiAodGhpcy5tSXNUcmlhbCkge1xuICAgICAgQXBwLmluc3RhbmNlLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfc2xvdF9lcnJvclwiKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnBvcHVwU2VsZWN0TGluZSA9PSBudWxsKSB7XG4gICAgICBCdW5kbGVDb250cm9sLmxvYWRQcmVmYWJHYW1lKFxuICAgICAgICBcIlNsb3QxMUJpa2luaVwiLFxuICAgICAgICBcInByZWZhYnMvUG9wdXBTZWxlY3RMaW5lXCIsXG4gICAgICAgIChmaW5pc2gsIHRvdGFsKSA9PiB7XG4gICAgICAgICAgLy8gQXBwLmluc3RhbmNlLnNob3dFcnJMb2FkaW5nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvYWRpbmcxJykgKyBwYXJzZUludCgoZmluaXNoIC8gdG90YWwpICogMTAwKSArIFwiJVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgKHByZWZhYikgPT4ge1xuICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgdGhpcy5wb3B1cFNlbGVjdExpbmUgPSBjY1xuICAgICAgICAgICAgLmluc3RhbnRpYXRlKHByZWZhYilcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoUG9wdXBTZWxlY3RMaW5lKTtcbiAgICAgICAgICB0aGlzLnBvcHVwU2VsZWN0TGluZS5ub2RlLnBhcmVudCA9IGNjLmRpcmVjdG9yXG4gICAgICAgICAgICAuZ2V0U2NlbmUoKVxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpO1xuICAgICAgICAgIHRoaXMucG9wdXBTZWxlY3RMaW5lLnNob3coKTtcbiAgICAgICAgICB0aGlzLnBvcHVwU2VsZWN0TGluZS5vblNlbGVjdGVkQ2hhbmdlZCA9IChsaW5lcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcnJMaW5lU2VsZWN0ID0gbGluZXM7XG4gICAgICAgICAgICB0aGlzLmxibExpbmUuc3RyaW5nID0gdGhpcy5hcnJMaW5lU2VsZWN0Lmxlbmd0aC50b1N0cmluZygpO1xuICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8oXG4gICAgICAgICAgICAgIHRoaXMubGJsVG90YWxCZXQsXG4gICAgICAgICAgICAgIHRoaXMuYXJyTGluZVNlbGVjdC5sZW5ndGggKiB0aGlzLmxpc3RCZXRbdGhpcy5iZXRJZHhdLFxuICAgICAgICAgICAgICAwLjMsXG4gICAgICAgICAgICAgIChuKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9uZXlUb0sobik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wb3B1cFNlbGVjdExpbmUuc2hvdygpO1xuICAgIH1cbiAgfVxuICBhY3RHdWlkZSgpIHtcbiAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgIH1cbiAgICBpZiAodGhpcy5tSXNUcmlhbCkge1xuICAgICAgQXBwLmluc3RhbmNlLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfc2xvdF9lcnJvclwiKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnBvcHVwR3VpZGUgPT0gbnVsbCkge1xuICAgICAgQnVuZGxlQ29udHJvbC5sb2FkUHJlZmFiR2FtZShcbiAgICAgICAgXCJTbG90MTFCaWtpbmlcIixcbiAgICAgICAgXCJwcmVmYWJzL1BvcHVwR3VpZGVcIixcbiAgICAgICAgKGZpbmlzaCwgdG90YWwpID0+IHtcbiAgICAgICAgICAvLyBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9hZGluZzEnKSArIHBhcnNlSW50KChmaW5pc2ggLyB0b3RhbCkgKiAxMDApICsgXCIlXCIpO1xuICAgICAgICB9LFxuICAgICAgICAocHJlZmFiKSA9PiB7XG4gICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICB0aGlzLnBvcHVwR3VpZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChQb3B1cEd1aWRlKTtcbiAgICAgICAgICB0aGlzLnBvcHVwR3VpZGUubm9kZS5wYXJlbnQgPSBjYy5kaXJlY3RvclxuICAgICAgICAgICAgLmdldFNjZW5lKClcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIkNhbnZhc1wiKTtcbiAgICAgICAgICB0aGlzLnBvcHVwR3VpZGUuc2hvdygpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBvcHVwR3VpZGUuc2hvdygpO1xuICAgIH1cbiAgfVxuICBhY3RIb25vcigpIHtcbiAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgIH1cbiAgICBpZiAodGhpcy5tSXNUcmlhbCkge1xuICAgICAgQXBwLmluc3RhbmNlLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfc2xvdF9lcnJvclwiKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnBvcHVwSG9ub3IgPT0gbnVsbCkge1xuICAgICAgQnVuZGxlQ29udHJvbC5sb2FkUHJlZmFiR2FtZShcbiAgICAgICAgXCJTbG90MTFCaWtpbmlcIixcbiAgICAgICAgXCJwcmVmYWJzL1BvcHVwSmFja3BvdEhpc3RvcnlcIixcbiAgICAgICAgKGZpbmlzaCwgdG90YWwpID0+IHtcbiAgICAgICAgICAvLyBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9hZGluZzEnKSArIHBhcnNlSW50KChmaW5pc2ggLyB0b3RhbCkgKiAxMDApICsgXCIlXCIpO1xuICAgICAgICB9LFxuICAgICAgICAocHJlZmFiKSA9PiB7XG4gICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICB0aGlzLnBvcHVwSG9ub3IgPSBjY1xuICAgICAgICAgICAgLmluc3RhbnRpYXRlKHByZWZhYilcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoUG9wdXBKYWNrcG90SGlzdG9yeSk7XG4gICAgICAgICAgdGhpcy5wb3B1cEhvbm9yLm5vZGUucGFyZW50ID0gY2MuZGlyZWN0b3JcbiAgICAgICAgICAgIC5nZXRTY2VuZSgpXG4gICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJDYW52YXNcIik7XG4gICAgICAgICAgdGhpcy5wb3B1cEhvbm9yLnNob3coKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wb3B1cEhvbm9yLnNob3coKTtcbiAgICB9XG4gIH1cbiAgYWN0SGlzdG9yeSgpIHtcbiAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgIH1cbiAgICBpZiAodGhpcy5tSXNUcmlhbCkge1xuICAgICAgQXBwLmluc3RhbmNlLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfc2xvdF9lcnJvclwiKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnBvcHVwSGlzdG9yeSA9PSBudWxsKSB7XG4gICAgICBCdW5kbGVDb250cm9sLmxvYWRQcmVmYWJHYW1lKFxuICAgICAgICBcIlNsb3QxMUJpa2luaVwiLFxuICAgICAgICBcInByZWZhYnMvUG9wdXBIaXN0b3J5XCIsXG4gICAgICAgIChmaW5pc2gsIHRvdGFsKSA9PiB7XG4gICAgICAgICAgLy8gQXBwLmluc3RhbmNlLnNob3dFcnJMb2FkaW5nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvYWRpbmcxJykgKyBwYXJzZUludCgoZmluaXNoIC8gdG90YWwpICogMTAwKSArIFwiJVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgKHByZWZhYikgPT4ge1xuICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgdGhpcy5wb3B1cEhpc3RvcnkgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChQb3B1cEhpc3RvcnkpO1xuICAgICAgICAgIHRoaXMucG9wdXBIaXN0b3J5Lm5vZGUucGFyZW50ID0gY2MuZGlyZWN0b3JcbiAgICAgICAgICAgIC5nZXRTY2VuZSgpXG4gICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJDYW52YXNcIik7XG4gICAgICAgICAgdGhpcy5wb3B1cEhpc3Rvcnkuc2hvdygpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBvcHVwSGlzdG9yeS5zaG93KCk7XG4gICAgfVxuICB9XG4gIGFjdFNob3dCb251cyhpc1RyaWFsLCBkYXRhSGFpU2FvLCBjYiwgbnVtYmVySWNvbikge1xuICAgIGlmICh0aGlzLnBvcHVwQm9udXMgPT0gbnVsbCkge1xuICAgICAgQnVuZGxlQ29udHJvbC5sb2FkUHJlZmFiR2FtZShcbiAgICAgICAgXCJTbG90MTFCaWtpbmlcIixcbiAgICAgICAgXCJwcmVmYWJzL1BvcHVwQm9udXNcIixcbiAgICAgICAgKGZpbmlzaCwgdG90YWwpID0+IHtcbiAgICAgICAgICAvLyBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9hZGluZzEnKSArIHBhcnNlSW50KChmaW5pc2ggLyB0b3RhbCkgKiAxMDApICsgXCIlXCIpO1xuICAgICAgICB9LFxuICAgICAgICAocHJlZmFiKSA9PiB7XG4gICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICB0aGlzLnBvcHVwQm9udXMgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChQb3B1cEJvbnVzKTtcbiAgICAgICAgICB0aGlzLnBvcHVwQm9udXMubm9kZS5wYXJlbnQgPSBjYy5kaXJlY3RvclxuICAgICAgICAgICAgLmdldFNjZW5lKClcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIkNhbnZhc1wiKTtcbiAgICAgICAgICB0aGlzLnBvcHVwQm9udXMuc2hvd0JvbnVzKGlzVHJpYWwsIGRhdGFIYWlTYW8sIHRoaXMsIGNiLCBudW1iZXJJY29uKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wb3B1cEJvbnVzLnNob3dCb251cyhpc1RyaWFsLCBkYXRhSGFpU2FvLCB0aGlzLCBjYiwgbnVtYmVySWNvbik7XG4gICAgfVxuICB9XG5cbiAgYWN0VHJpYWxPbkNoZWNrKCkge1xuICAgIHRoaXMubUlzVHJpYWwgPSB0cnVlO1xuICAgIGxldCBpc1RyYWlsID0gdGhpcy5tSXNUcmlhbDtcbiAgICBpZiAoaXNUcmFpbCkge1xuICAgICAgdGhpcy5idG5QbGF5UmVhbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5idG5QbGF5VHJ5Lm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmxibExpbmUuc3RyaW5nID0gXCIyNVwiO1xuICAgICAgdGhpcy5sYmxCZXQuc3RyaW5nID0gXCIxMDBcIjtcbiAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsVG90YWxCZXQsIDI1MDAsIDAuMywgKG4pID0+IHRoaXMubW9uZXlUb0sobikpO1xuICAgIH1cbiAgICBjYy5sb2coXCJpc1RyaWFsPT1cIiArIHRoaXMubUlzVHJpYWwpO1xuICB9XG59XG4iXX0=