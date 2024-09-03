"use strict";
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