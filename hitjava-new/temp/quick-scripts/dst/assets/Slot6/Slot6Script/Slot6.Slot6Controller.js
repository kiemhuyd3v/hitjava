
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot6/Slot6Script/Slot6.Slot6Controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '509b3oRs4ZIcazFqQj5vokU', 'Slot6.Slot6Controller');
// Slot6/Slot6Script/Slot6.Slot6Controller.ts

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
var Slot6_Cmd_1 = require("./Slot6.Cmd");
var Configs_1 = require("../../Loading/src/Configs");
var Slot6_PopupSelectLine_1 = require("./Slot6.PopupSelectLine");
var Slot6_PopupBonus_1 = require("./Slot6.PopupBonus");
var Slot6_TrialResults_1 = require("./Slot6.TrialResults");
var Slot6_Item_1 = require("./Slot6.Item");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
var SlotNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/SlotNetworkClient");
var BundleControl_1 = require("../../Loading/src/BundleControl");
var Slot6_PopupHistory_1 = require("./Slot6.PopupHistory");
var TW = cc.tween;
var TYPE_WIN;
(function (TYPE_WIN) {
    TYPE_WIN[TYPE_WIN["MISS"] = 0] = "MISS";
    TYPE_WIN[TYPE_WIN["WIN"] = 1] = "WIN";
    TYPE_WIN[TYPE_WIN["BIGWIN"] = 2] = "BIGWIN";
    TYPE_WIN[TYPE_WIN["JACKPOT"] = 3] = "JACKPOT";
    TYPE_WIN[TYPE_WIN["SUPERWIN"] = 4] = "SUPERWIN";
    TYPE_WIN[TYPE_WIN["BONUS"] = 5] = "BONUS";
})(TYPE_WIN || (TYPE_WIN = {}));
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot6Controller = /** @class */ (function (_super) {
    __extends(Slot6Controller, _super);
    function Slot6Controller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeCoin = null;
        _this.preItem = null;
        _this.mHeightItem = 180;
        _this.mWidthItem = 180;
        _this.reels = null; // reel
        _this.effSpin = null; // reel
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
        _this.btnSpin = null;
        _this.btnBack = null;
        _this.btnPlayTry = null;
        _this.btnPlayReal = null;
        _this.btnLine = null;
        _this.toast = null;
        _this.panelSetting = null;
        _this.effectWinCash = null;
        _this.effectBigWin = null;
        _this.effectJackpot = null;
        _this.particleJackpt = null;
        _this.particleJackpt1 = null;
        _this.particleBigWin = null;
        _this.particleBigWin1 = null;
        _this.particleFreeSpin = null;
        _this.particleBonus = null;
        _this.effectBonus = null;
        _this.effectFreeSpin = null;
        _this.popupSelectLine = null;
        _this.popupBonus = null;
        _this.soundSpinClick = null;
        _this.soundSpinMis = null;
        _this.soundSpinWin = null;
        _this.soundBigWin = null;
        _this.soundFreespin = null;
        _this.soundJackpot = null;
        _this.soundBonus = null;
        _this.soundClick = null;
        _this.soundSpin = null;
        _this.soundWild = null;
        _this.soundReelStop = null;
        //end music setting
        _this.soundBg = null;
        _this.soundBgBonus = null;
        _this.currentNumberFreeSpin = 0;
        _this.daiLyFreeSpin = 0;
        _this.rollStartItemCount = 15;
        _this.rollAddItemCount = 10;
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
        _this.musicSlotState = null;
        _this.soundSlotState = null;
        _this.remoteMusicBackground = null;
        _this.mIsTrial = false;
        _this.popupJackpotHistory = null;
        _this.popupHistory = null;
        _this.mutipleJpNode = null;
        return _this;
    }
    Slot6Controller.prototype.onBtnBack = function () {
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        SlotNetworkClient_1.default.getInstance().send(new Slot6_Cmd_1.default.SendUnSubcribe(this.betIdx));
        cc.audioEngine.stopAll();
        App_1.default.instance.loadScene("Lobby");
    };
    Slot6Controller.prototype.start = function () {
        var _this = this;
        this.soundInit();
        this.currentNumberFreeSpin = 0;
        this.lblWinNow.string = "0";
        this.iconWildColumns.zIndex = 3;
        //this.itemHeight = this.itemTemplate.height;
        for (var i = 0; i < this.reels.childrenCount; i++) {
            var reel = this.reels.children[i];
            var count = this.rollStartItemCount + i * this.rollAddItemCount;
            for (var j = 0; j < count; j++) {
                //let item = cc.instantiate(this.itemTemplate);
                var itemNode = cc.instantiate(this.preItem);
                itemNode.height = this.mHeightItem;
                itemNode.width = this.mWidthItem;
                var item = itemNode.getComponent(Slot6_Item_1.default);
                itemNode.parent = reel;
                // if (j >= 3) {
                //     item.children[0].getComponent(cc.Sprite).spriteFrame = this.sprFrameItemsBlur[Utils.randomRangeInt(0, this.sprFrameItemsBlur.length)];
                // } else {
                //     item.children[0].getComponent(cc.Sprite).spriteFrame = this.sprFrameItems[Utils.randomRangeInt(0, this.sprFrameItems.length)];
                // }
                var id = Utils_1.default.randomRangeInt(0, 10);
                item.setId(id);
                //item.children[0].width=this.itemTemplate.children[0].width;
                //item.children[0].height=this.itemTemplate.children[0].height;
            }
        }
        // this.itemTemplate.removeFromParent();
        // this.itemTemplate = null;
        //dang ky khi mat ket noi tu dong back
        SlotNetworkClient_1.default.getInstance().addOnClose(function () {
            //this.actBack();
            _this.onBtnBack();
        }, this);
        //listenner client - server
        SlotNetworkClient_1.default.getInstance().addListener(function (data) {
            var inpacket = new Network_InPacket_1.default(data);
            switch (inpacket.getCmdId()) {
                case Slot6_Cmd_1.default.Code.FREE_DAI_LY:
                    {
                        if (!_this.mIsTrial) {
                            var res_1 = new Slot6_Cmd_1.default.ReceiveFreeDaiLy(data);
                            //  cc.log("init info Slot6:" + JSON.stringify(res));
                            _this.daiLyFreeSpin = res_1.freeSpin;
                        }
                    }
                    break;
                case Slot6_Cmd_1.default.Code.DATE_X2:
                    {
                        var res_2 = new Slot6_Cmd_1.default.ReceiveDateX2(data);
                        //  cc.log("init info Slot6:" + JSON.stringify(res));
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
                case Slot6_Cmd_1.default.Code.UPDATE_POT:
                    var res = new Slot6_Cmd_1.default.ReceiveUpdatePot(data);
                    Tween_1.default.numberTo(_this.lblJackpot, res.jackpot, 0.3);
                    break;
                case Slot6_Cmd_1.default.Code.UPDATE_JACKPOT_SLOTS:
                    break;
                case Slot6_Cmd_1.default.Code.PLAY:
                    {
                        var res_3 = new Slot6_Cmd_1.default.ReceivePlay(data);
                        // //  cc.log(res);
                        _this.onSpinResult(res_3);
                    }
                    break;
                default:
                    break;
            }
        }, this);
        SlotNetworkClient_1.default.getInstance().sendCheck(new Slot6_Cmd_1.default.ReqSubcribeHallSlot());
        ////  cc.log("Slot3Controller started");
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
        ////  cc.log("Slot3Controller started");
        this.btnPlayReal.node.active = false;
        this.btnPlayTry.node.active = true;
        this.betIdx = 0;
        SlotNetworkClient_1.default.getInstance().send(new Slot6_Cmd_1.default.SendSubcribe(this.betIdx));
        this.onJoinRoom();
        //this.initMutipleJPNode();
    };
    Slot6Controller.prototype.initMutipleJPNode = function () {
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
                    _this.mutipleJpNode.setInfo("CHIEMTINH");
                }
            });
        }
    };
    Slot6Controller.prototype.onBtnSub = function () {
        SlotNetworkClient_1.default.getInstance().send(new Slot6_Cmd_1.default.SendUnSubcribe(this.betIdx));
        this.betIdx--;
        if (this.betIdx <= 0) {
            this.betIdx = 0;
        }
        SlotNetworkClient_1.default.getInstance().send(new Slot6_Cmd_1.default.SendSubcribe(this.betIdx));
        this.onJoinRoom();
    };
    Slot6Controller.prototype.onBtnAdd = function () {
        SlotNetworkClient_1.default.getInstance().send(new Slot6_Cmd_1.default.SendUnSubcribe(this.betIdx));
        this.betIdx++;
        if (this.betIdx >= 2) {
            this.betIdx = 2;
        }
        SlotNetworkClient_1.default.getInstance().send(new Slot6_Cmd_1.default.SendSubcribe(this.betIdx));
        this.onJoinRoom();
    };
    Slot6Controller.prototype.showCoins = function (prize) {
        var number = prize / 20000;
        if (number <= 10)
            number = 10;
        else if (number >= 30)
            number = 30;
        App_1.default.instance.showCoins(number, this.lblWinNow.node, this.nodeCoin);
    };
    Slot6Controller.prototype.onJoinRoom = function () {
        this.lblBet.string = this.listBetLabel[this.betIdx];
        var totalbet = (this.arrLineSelect.length * this.listBet[this.betIdx]);
        Tween_1.default.numberTo(this.lblTotalBet, totalbet, 0.3);
        // this.skeSpin.animation = "iat";
        // this.skeSpin.loop = true;
    };
    Slot6Controller.prototype.showToast = function (msg) {
        var _this = this;
        this.toast.getComponentInChildren(cc.Label).string = msg;
        this.toast.stopAllActions();
        this.toast.active = true;
        this.toast.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function () {
            _this.toast.active = false;
        })));
    };
    Slot6Controller.prototype.moneyToK = function (money) {
        // if (money < 10000) {
        //     return money.toString();
        // }
        // money = parseInt((money / 1000).toString());
        return money.toString();
    };
    Slot6Controller.prototype.setEnabledAllButtons = function (enabled) {
        this.btnSpin.interactable = enabled;
        this.btnBack.interactable = enabled;
        // this.btnBetUp.interactable = enabled;
        // this.btnBetDown.interactable = enabled;
        this.btnLine.interactable = enabled;
        this.btnPlayTry.interactable = enabled;
        this.btnPlayReal.interactable = enabled;
        this.effSpin.active = enabled;
        //this.toggleTrial.interactable = enabled;
    };
    Slot6Controller.prototype.stopAllEffects = function () {
        this.effectJackpot.stopAllActions();
        this.effectJackpot.active = false;
        this.effectBigWin.stopAllActions();
        this.effectBigWin.active = false;
        this.effectFreeSpin.stopAllActions();
        this.effectFreeSpin.active = false;
    };
    Slot6Controller.prototype.stopShowLinesWin = function () {
        this.linesWin.stopAllActions();
        for (var i = 0; i < this.linesWin.childrenCount; i++) {
            this.linesWin.children[i].active = false;
        }
        for (var i = 0; i < this.iconWildColumns.childrenCount; i++) {
            this.iconWildColumns.children[i].active = false;
        }
        this.stopAllItemEffect();
    };
    Slot6Controller.prototype.stopAllItemEffect = function () {
        for (var i = 0; i < this.reels.childrenCount; i++) {
            var children = this.reels.children[i].children; // ???
            for (var j = 0; j < children.length; j++) {
                cc.Tween.stopAllByTarget(children[j]);
                children[j].scale = 1;
            }
        }
    };
    Slot6Controller.prototype.spin = function () {
        if (!this.isSpined)
            return;
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundSpinClick, false, 1);
        }
        var isTrail = this.mIsTrial;
        if (!isTrail) {
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
            this.stopAllEffects();
            this.stopShowLinesWin();
            this.changeAllItemToDark(false);
            this.setEnabledAllButtons(false);
            // this.skeSpin.animation = "at";
            // this.skeSpin.loop = true;
            SlotNetworkClient_1.default.getInstance().send(new Slot6_Cmd_1.default.SendPlay(this.arrLineSelect.toString()));
        }
        else {
            this.changeAllItemToDark(false);
            this.isSpined = false;
            this.stopAllEffects();
            this.stopShowLinesWin();
            this.setEnabledAllButtons(false);
            // this.skeSpin.animation = "at";
            // this.skeSpin.loop = true;
            var rIdx = Utils_1.default.randomRangeInt(0, Slot6_TrialResults_1.default.results.length);
            this.onSpinResult(Slot6_TrialResults_1.default.results[rIdx]);
        }
    };
    Slot6Controller.prototype.stopSpin = function () {
        for (var i = 0; i < this.reels.childrenCount; i++) {
            var roll = this.reels.children[i];
            cc.Tween.stopAllByTarget(roll);
            roll.setPosition(cc.v2(roll.getPosition().x, 0));
        }
    };
    Slot6Controller.prototype.showLineWins = function () {
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
            this.linesWin.zIndex = 1;
            this.reels.parent.zIndex = 0;
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
                        _this.linesWin.zIndex = 0;
                        _this.reels.parent.zIndex = 1;
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
                        var _loop_2 = function (j) {
                            var itemRow = parseInt((mLine[j] / 5).toString());
                            var item = rolls[j].children[2 - itemRow];
                            item.stopAllActions();
                            cc.Tween.stopAllByTarget(item);
                            // TW(item).repeatForever(TW().to(0.2, { scale: 1.1 }).to(0.2, { scale: 1.0 })).start();
                            item.getComponent(Slot6_Item_1.default).showItemAnim();
                            TW(item).delay(0.9).call(function () {
                                item.getComponent(Slot6_Item_1.default).offItemAnim();
                            }).start();
                        };
                        for (var j = 0; j < countItemWin; j++) {
                            _loop_2(j);
                        }
                        // //  cc.log("lineIdx: " + lineIdx + "fisrtItemId: " + fisrtItemId + " countItemWin: " + countItemWin);
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
    Slot6Controller.prototype.showWinCash = function (cash) {
        var _this = this;
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundSpinWin, false, 1);
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
    Slot6Controller.prototype.showEffectBigWin = function (cash, cb) {
        var _this = this;
        this.effectBigWin.stopAllActions();
        this.effectBigWin.active = true;
        this.effectBigWin.getComponentInChildren(sp.Skeleton).setAnimation(0, "thang sieu lon fx", true);
        var label = this.effectBigWin.getComponentInChildren(cc.Label);
        label.node.active = false;
        this.particleBigWin.resetSystem();
        this.particleBigWin1.resetSystem();
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
    Slot6Controller.prototype.showEffectFreeSpin = function (cb) {
        var _this = this;
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundFreespin, false, 1);
        }
        this.effectFreeSpin.stopAllActions();
        this.effectFreeSpin.active = true;
        this.effectFreeSpin.getComponentInChildren(sp.Skeleton).setAnimation(0, "freespin fx", true);
        this.particleFreeSpin.resetSystem();
        this.effectFreeSpin.runAction(cc.sequence(cc.delayTime(1), cc.delayTime(3), cc.callFunc(function () {
            _this.effectFreeSpin.active = false;
            if (cb != null)
                cb();
        })));
    };
    Slot6Controller.prototype.showEffectJackpot = function (cash, cb) {
        var _this = this;
        if (cb === void 0) { cb = null; }
        var animName = ["jackpot fx"];
        var index = parseInt(Math.random() + "");
        this.effectJackpot.stopAllActions();
        this.effectJackpot.active = true;
        this.effectJackpot.getComponentInChildren(sp.Skeleton).setAnimation(0, animName[index], true);
        var label = this.effectJackpot.getComponentInChildren(cc.Label);
        label.node.active = false;
        this.effectJackpot.runAction(cc.sequence(cc.delayTime(0.4), cc.callFunc(function () {
            _this.particleJackpt.resetSystem();
            _this.particleJackpt1.resetSystem();
        }), cc.delayTime(0.6), cc.callFunc(function () {
            label.string = "";
            label.node.active = true;
            Tween_1.default.numberTo(label, cash, 1);
        }), cc.delayTime(6), cc.callFunc(function () {
            _this.effectJackpot.active = false;
            if (cb != null)
                cb();
        })));
    };
    Slot6Controller.prototype.showEffectBonus = function (cb) {
        var _this = this;
        this.effectBonus.stopAllActions();
        this.effectBonus.active = true;
        this.effectBonus.getComponentInChildren(sp.Skeleton).setAnimation(0, "bonus fx", true);
        this.particleBonus.resetSystem();
        this.effectBonus.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function () {
            _this.effectBonus.active = false;
            if (cb != null)
                cb();
        })));
    };
    Slot6Controller.prototype.onSpinResult = function (res) {
        var _this = this;
        this.stopSpin();
        //  cc.log("onSpinResult:" + JSON.stringify(res));
        // res=JSON.parse('{"_pos":85,"_data":{"0":1,"1":23,"2":113,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":6,"11":73,"12":1,"13":0,"14":30,"15":52,"16":44,"17":52,"18":44,"19":52,"20":44,"21":53,"22":44,"23":57,"24":44,"25":52,"26":44,"27":56,"28":44,"29":52,"30":44,"31":57,"32":44,"33":53,"34":44,"35":53,"36":44,"37":49,"38":48,"39":44,"40":50,"41":44,"42":53,"43":44,"44":52,"45":0,"46":14,"47":50,"48":44,"49":54,"50":44,"51":56,"52":44,"53":49,"54":49,"55":44,"56":49,"57":56,"58":44,"59":50,"60":50,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":35,"70":40,"71":0,"72":0,"73":0,"74":0,"75":2,"76":63,"77":114,"78":248,"79":0,"80":0,"81":0,"82":0,"83":0,"84":0},"_length":85,"_controllerId":1,"_cmdId":6001,"_error":0,"ref":1609,"result":1,"matrix":"4,4,4,5,9,4,8,4,9,5,5,10,2,5,4","linesWin":"2,6,8,11,18,22","haiSao":"","prize":9000,"currentMoney":37712632,"freeSpin":0,"isFree":false,"itemsWild":"","ratio":0,"currentNumberFreeSpin":0}')
        var successResult = [0, 1, 2, 3, 4, 5, 6];
        if (successResult.indexOf(res.result) === -1) {
            this.isSpined = true;
            this.toggleAuto.isChecked = false;
            this.toggleAuto.interactable = true;
            this.toggleBoost.isChecked = false;
            this.toggleBoost.interactable = true;
            this.setEnabledAllButtons(true);
            switch (res.result) {
                case 102:
                    this.showToast(App_1.default.instance.getTextLang('txt_slot_error'));
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
        var isTrail = this.mIsTrial;
        if (!isTrail && !this.lastSpinRes.isFree) {
            Configs_1.default.Login.Coin = res.currentMoney;
        }
        var matrix = res.matrix.split(",");
        var timeScale = this.toggleBoost.isChecked ? 0.5 : 1;
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundSpin, false, 1);
        }
        var _loop_3 = function (i) {
            var roll = this_1.reels.children[i];
            var step1Pos = this_1.mHeightItem * 0.3;
            var step2Pos = -this_1.mHeightItem * roll.childrenCount + this_1.mHeightItem * 3 - this_1.mHeightItem * 0.3;
            var step3Pos = -this_1.mHeightItem * roll.childrenCount + this_1.mHeightItem * 3;
            TW(roll)
                .delay(0.2 * i * timeScale)
                .to(0.2 * timeScale, { position: cc.v3(roll.position.x, step1Pos) }, { easing: cc.easing.quadOut })
                .to((this_1.spinDuration + this_1.addSpinDuration * i) * timeScale, { position: cc.v3(roll.position.x, step2Pos) }, { easing: cc.easing.quadInOut })
                .to(0.2 * timeScale, { position: cc.v3(roll.position.x, step3Pos) }, { easing: cc.easing.quadIn })
                .call(function () {
                if (_this.soundSlotState == 1) {
                    cc.audioEngine.play(_this.soundReelStop, false, 1);
                }
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
                        var children = _this.reels.children[c].children;
                        children[2].getComponent(Slot6_Item_1.default).setId(_this.wildItemId, true);
                        children[1].getComponent(Slot6_Item_1.default).setId(_this.wildItemId, true);
                        children[0].getComponent(Slot6_Item_1.default).setId(_this.wildItemId, true);
                        _this.iconWildColumns.children[c].active = true;
                        _this.iconWildColumns.children[c].scale = 0;
                        cc.Tween.stopAllByTarget(_this.iconWildColumns.children[c]);
                        if (_this.soundSlotState == 1) {
                            cc.audioEngine.play(_this.soundWild, false, 1);
                        }
                        cc.tween(_this.iconWildColumns.children[c])
                            .to(0.4, { scale: 1 }, { easing: "backOut" })
                            .start();
                        _this.iconWildColumns.children[c].getComponent(sp.Skeleton).animation = "animation";
                        _this.iconWildColumns.children[c].getComponent(sp.Skeleton).loop = true;
                    }
                    if (_this.columnsWild.length > 0) {
                        roll.runAction(cc.sequence(cc.delayTime(2.6), cc.callFunc(function () {
                            for (var i_1 = 0; i_1 < _this.iconWildColumns.childrenCount; i_1++) {
                                _this.iconWildColumns.children[i_1].active = false;
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
            //rool = reel
            TW(roll)
                .delay((0.2 * i * timeScale) + (0.4 * timeScale))
                .call(function () {
                for (var m = 0; m < roll.childrenCount; m++) {
                    var item = roll.children[m];
                    item.getComponent(Slot6_Item_1.default).setIdBlur(Utils_1.default.randomRangeInt(0, 11));
                }
            })
                .start();
            TW(roll)
                .delay((0.47 + 0.2 * i) * timeScale)
                .call(function () {
                var listItemNode = roll.children;
                listItemNode[2].getComponent(Slot6_Item_1.default).setId(parseInt(matrix[i]), true);
                listItemNode[1].getComponent(Slot6_Item_1.default).setId(parseInt(matrix[5 + i]), true);
                listItemNode[0].getComponent(Slot6_Item_1.default).setId(parseInt(matrix[10 + i]), true);
                listItemNode[listItemNode.length - 1].getComponent(Slot6_Item_1.default).setId(parseInt(matrix[i]), true);
                listItemNode[listItemNode.length - 2].getComponent(Slot6_Item_1.default).setId(parseInt(matrix[5 + i]), true);
                listItemNode[listItemNode.length - 3].getComponent(Slot6_Item_1.default).setId(parseInt(matrix[10 + i]), true);
            })
                .start();
        };
        var this_1 = this;
        for (var i = 0; i < this.reels.childrenCount; i++) {
            _loop_3(i);
        }
    };
    Slot6Controller.prototype.spined = function () {
        var _this = this;
        // this.skeSpin.animation = "iat";
        // this.skeSpin.loop = true;
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
            //  cc.log("lastSpineRes:" + this.lastSpinRes.result);
            switch (this.lastSpinRes.result) {
                case TYPE_WIN.MISS: //k an
                    if (this.soundSlotState == 1) {
                        cc.audioEngine.play(this.soundSpinMis, false, 1);
                    }
                    this.showLineWins();
                    break;
                case TYPE_WIN.WIN: // thang thuong
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
                        if (_this.soundSlotState == 1) {
                            _this.remoteMusicBackground = cc.audioEngine.playMusic(_this.soundBgBonus, true);
                        }
                        // this.popupBonus.showBonus(this.mIsTrial ? 100 : this.listBet[this.betIdx], this.lastSpinRes.haiSao, this, () => {
                        //     if (this.soundSlotState == 1) {
                        //         this.remoteMusicBackground = cc.audioEngine.playMusic(this.soundBg, true);
                        //     }
                        //     this.showLineWins();
                        // });
                        _this.actShowBonus(_this.mIsTrial ? 100 : _this.listBet[_this.betIdx], _this.lastSpinRes.haiSao, function () {
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
    Slot6Controller.prototype.onBtnSoundTouchBonus = function () {
    };
    Slot6Controller.prototype.onBtnSoundSumary = function () {
    };
    Slot6Controller.prototype.actBack = function () {
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        SlotNetworkClient_1.default.getInstance().send(new Slot6_Cmd_1.default.SendUnSubcribe(this.betIdx));
        // cc.audioEngine.stopAll();
        // App.instance.loadScene("Lobby");
    };
    Slot6Controller.prototype.actHidden = function () {
        this.showToast(App_1.default.instance.getTextLang('txt_function_in_development'));
    };
    Slot6Controller.prototype.actBetUp = function () {
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
            this.daiLyFreeSpin = 0;
            this.lblFreeSpinCount.node.parent.active = false;
            SlotNetworkClient_1.default.getInstance().send(new Slot6_Cmd_1.default.SendChangeRoom(this.betIdx, ++this.betIdx));
            this.lblBet.string = this.listBetLabel[this.betIdx];
            Tween_1.default.numberTo(this.lblTotalBet, this.arrLineSelect.length * this.listBet[this.betIdx], 0.3, function (n) { return _this.moneyToK(n); });
        }
    };
    Slot6Controller.prototype.actBetDown = function () {
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
            this.daiLyFreeSpin = 0;
            this.lblFreeSpinCount.node.parent.active = false;
            SlotNetworkClient_1.default.getInstance().send(new Slot6_Cmd_1.default.SendChangeRoom(this.betIdx, --this.betIdx));
            this.lblBet.string = this.listBetLabel[this.betIdx];
            Tween_1.default.numberTo(this.lblTotalBet, this.arrLineSelect.length * this.listBet[this.betIdx], 0.3, function (n) { return _this.moneyToK(n); });
        }
    };
    Slot6Controller.prototype.actLine = function () {
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
    Slot6Controller.prototype.actSetting = function () {
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        this.panelSetting.active = !this.panelSetting.active;
    };
    Slot6Controller.prototype.toggleTrialOnCheck = function () {
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
    Slot6Controller.prototype.toggleAutoOnCheck = function () {
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
    Slot6Controller.prototype.toggleBoostOnCheck = function () {
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
    Slot6Controller.prototype.soundInit = function () {
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
    Slot6Controller.prototype.settingMusic = function () {
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
    Slot6Controller.prototype.settingSound = function () {
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
    Slot6Controller.prototype.changeAllItemToDark = function (state) {
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
    Slot6Controller.prototype.actHistoryJackpot = function () {
        var _this = this;
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        if (this.mIsTrial) {
            App_1.default.instance.showToast(App_1.default.instance.getTextLang('txt_slot_error'));
            return;
        }
        if (this.popupJackpotHistory == null) {
            BundleControl_1.default.loadPrefabGame("Slot6", "prefabs/PopupJackpotHistory", function (finish, total) {
                // App.instance.showErrLoading(App.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
                App_1.default.instance.showLoading(false);
                _this.popupJackpotHistory = cc.instantiate(prefab).getComponent("Slot6.PopupJackpotHistory");
                _this.popupJackpotHistory.node.parent = cc.director.getScene().getChildByName("Canvas");
                _this.popupJackpotHistory.show();
            });
        }
        else {
            this.popupJackpotHistory.show();
        }
    };
    Slot6Controller.prototype.actHistory = function () {
        var _this = this;
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        if (this.mIsTrial) {
            App_1.default.instance.showToast(App_1.default.instance.getTextLang('txt_slot_error'));
            return;
        }
        if (this.popupHistory == null) {
            BundleControl_1.default.loadPrefabGame("Slot6", "prefabs/PopupHistory", function (finish, total) {
                // App.instance.showErrLoading(App.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
                App_1.default.instance.showLoading(false);
                _this.popupHistory = cc.instantiate(prefab).getComponent(Slot6_PopupHistory_1.default);
                _this.popupHistory.node.parent = cc.director.getScene().getChildByName("Canvas");
                _this.popupHistory.show();
            });
        }
        else {
            this.popupHistory.show();
        }
    };
    Slot6Controller.prototype.actSelectline = function () {
        var _this = this;
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        if (this.mIsTrial) {
            App_1.default.instance.showToast(App_1.default.instance.getTextLang('txt_slot_error'));
            return;
        }
        if (this.popupSelectLine == null) {
            BundleControl_1.default.loadPrefabGame("Slot6", "prefabs/PopupSelectLine", function (finish, total) {
                // App.instance.showErrLoading(App.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
                App_1.default.instance.showLoading(false);
                _this.popupSelectLine = cc.instantiate(prefab).getComponent(Slot6_PopupSelectLine_1.default);
                _this.popupSelectLine.node.parent = cc.director.getScene().getChildByName("Canvas");
                _this.popupSelectLine.show();
                _this.popupSelectLine.onSelectedChanged = function (lines) {
                    _this.arrLineSelect = lines;
                    _this.lblLine.string = _this.arrLineSelect.length.toString();
                    Tween_1.default.numberTo(_this.lblTotalBet, _this.arrLineSelect.length * _this.listBet[_this.betIdx], 0.3, function (n) { return _this.moneyToK(n); });
                };
            });
        }
        else {
            this.popupSelectLine.show();
        }
    };
    Slot6Controller.prototype.actShowBonus = function (isTrial, dataHaiSao, cb) {
        var _this = this;
        if (this.popupBonus == null) {
            BundleControl_1.default.loadPrefabGame("Slot6", "prefabs/PopupBonus", function (finish, total) {
                // App.instance.showErrLoading(App.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
                App_1.default.instance.showLoading(false);
                _this.popupBonus = cc.instantiate(prefab).getComponent(Slot6_PopupBonus_1.default);
                _this.popupBonus.node.parent = cc.director.getScene().getChildByName("Canvas");
                _this.popupBonus.showBonus(isTrial, dataHaiSao, _this, cb);
            });
        }
        else {
            this.popupBonus.showBonus(isTrial, dataHaiSao, this, cb);
        }
    };
    __decorate([
        property(cc.Node)
    ], Slot6Controller.prototype, "nodeCoin", void 0);
    __decorate([
        property(cc.Prefab)
    ], Slot6Controller.prototype, "preItem", void 0);
    __decorate([
        property(cc.Integer)
    ], Slot6Controller.prototype, "mHeightItem", void 0);
    __decorate([
        property(cc.Integer)
    ], Slot6Controller.prototype, "mWidthItem", void 0);
    __decorate([
        property(cc.Node)
    ], Slot6Controller.prototype, "reels", void 0);
    __decorate([
        property(cc.Node)
    ], Slot6Controller.prototype, "effSpin", void 0);
    __decorate([
        property(cc.Node)
    ], Slot6Controller.prototype, "linesWin", void 0);
    __decorate([
        property(cc.Node)
    ], Slot6Controller.prototype, "iconWildColumns", void 0);
    __decorate([
        property(cc.Label)
    ], Slot6Controller.prototype, "lblJackpot", void 0);
    __decorate([
        property(cc.Label)
    ], Slot6Controller.prototype, "lblBet", void 0);
    __decorate([
        property(cc.Label)
    ], Slot6Controller.prototype, "lblLine", void 0);
    __decorate([
        property(cc.Label)
    ], Slot6Controller.prototype, "lblTotalBet", void 0);
    __decorate([
        property(cc.Label)
    ], Slot6Controller.prototype, "lblCoin", void 0);
    __decorate([
        property(cc.Label)
    ], Slot6Controller.prototype, "lblWinNow", void 0);
    __decorate([
        property(cc.Label)
    ], Slot6Controller.prototype, "lblFreeSpinCount", void 0);
    __decorate([
        property(cc.Toggle)
    ], Slot6Controller.prototype, "toggleAuto", void 0);
    __decorate([
        property(cc.Toggle)
    ], Slot6Controller.prototype, "toggleSound", void 0);
    __decorate([
        property(cc.Toggle)
    ], Slot6Controller.prototype, "togglgeMusic", void 0);
    __decorate([
        property(cc.Toggle)
    ], Slot6Controller.prototype, "toggleBoost", void 0);
    __decorate([
        property(cc.Button)
    ], Slot6Controller.prototype, "btnSpin", void 0);
    __decorate([
        property(cc.Button)
    ], Slot6Controller.prototype, "btnBack", void 0);
    __decorate([
        property(cc.Button)
    ], Slot6Controller.prototype, "btnPlayTry", void 0);
    __decorate([
        property(cc.Button)
    ], Slot6Controller.prototype, "btnPlayReal", void 0);
    __decorate([
        property(cc.Button)
    ], Slot6Controller.prototype, "btnLine", void 0);
    __decorate([
        property(cc.Node)
    ], Slot6Controller.prototype, "toast", void 0);
    __decorate([
        property(cc.Node)
    ], Slot6Controller.prototype, "panelSetting", void 0);
    __decorate([
        property(cc.Node)
    ], Slot6Controller.prototype, "effectWinCash", void 0);
    __decorate([
        property(cc.Node)
    ], Slot6Controller.prototype, "effectBigWin", void 0);
    __decorate([
        property(cc.Node)
    ], Slot6Controller.prototype, "effectJackpot", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], Slot6Controller.prototype, "particleJackpt", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], Slot6Controller.prototype, "particleJackpt1", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], Slot6Controller.prototype, "particleBigWin", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], Slot6Controller.prototype, "particleBigWin1", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], Slot6Controller.prototype, "particleFreeSpin", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], Slot6Controller.prototype, "particleBonus", void 0);
    __decorate([
        property(cc.Node)
    ], Slot6Controller.prototype, "effectBonus", void 0);
    __decorate([
        property(cc.Node)
    ], Slot6Controller.prototype, "effectFreeSpin", void 0);
    __decorate([
        property(Slot6_PopupSelectLine_1.default)
    ], Slot6Controller.prototype, "popupSelectLine", void 0);
    __decorate([
        property(Slot6_PopupBonus_1.default)
    ], Slot6Controller.prototype, "popupBonus", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot6Controller.prototype, "soundSpinClick", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot6Controller.prototype, "soundSpinMis", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot6Controller.prototype, "soundSpinWin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot6Controller.prototype, "soundBigWin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot6Controller.prototype, "soundFreespin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot6Controller.prototype, "soundJackpot", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot6Controller.prototype, "soundBonus", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot6Controller.prototype, "soundClick", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot6Controller.prototype, "soundSpin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot6Controller.prototype, "soundWild", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot6Controller.prototype, "soundReelStop", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot6Controller.prototype, "soundBg", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot6Controller.prototype, "soundBgBonus", void 0);
    Slot6Controller = __decorate([
        ccclass
    ], Slot6Controller);
    return Slot6Controller;
}(cc.Component));
exports.default = Slot6Controller;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDZcXFNsb3Q2U2NyaXB0XFxTbG90Ni5TbG90NkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseUNBQThCO0FBRTlCLHFEQUFnRDtBQUNoRCxpRUFBc0Q7QUFDdEQsdURBQTRDO0FBQzVDLDJEQUFnRDtBQUNoRCwyQ0FBcUM7QUFDckMsaUVBQTREO0FBQzVELDZGQUF3RjtBQUN4RixxRUFBZ0U7QUFDaEUscUVBQWdFO0FBQ2hFLDZGQUFnRjtBQUNoRiwrRkFBMEY7QUFFMUYsaUVBQTREO0FBQzVELDJEQUFnRDtBQUVoRCxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO0FBQ2xCLElBQVcsUUFPVjtBQVBELFdBQVcsUUFBUTtJQUNmLHVDQUFRLENBQUE7SUFDUixxQ0FBTyxDQUFBO0lBQ1AsMkNBQVUsQ0FBQTtJQUNWLDZDQUFXLENBQUE7SUFDWCwrQ0FBWSxDQUFBO0lBQ1oseUNBQVMsQ0FBQTtBQUNiLENBQUMsRUFQVSxRQUFRLEtBQVIsUUFBUSxRQU9sQjtBQUdLLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBeXFDQztRQXRxQ0csY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRzFCLGlCQUFXLEdBQVcsR0FBRyxDQUFDO1FBRzFCLGdCQUFVLEdBQVcsR0FBRyxDQUFDO1FBRXpCLFdBQUssR0FBWSxJQUFJLENBQUMsQ0FBQyxPQUFPO1FBRTlCLGFBQU8sR0FBWSxJQUFJLENBQUMsQ0FBQyxPQUFPO1FBQ2hDLHFCQUFxQjtRQUNyQixnQ0FBZ0M7UUFFaEMsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixxQkFBZSxHQUFZLElBQUksQ0FBQyxDQUFDLDRCQUE0QjtR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UUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzt5REFDQztJQTFIakIsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQXlxQ25DO0lBQUQsc0JBQUM7Q0F6cUNELEFBeXFDQyxDQXpxQzRDLEVBQUUsQ0FBQyxTQUFTLEdBeXFDeEQ7a0JBenFDb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGNtZCBmcm9tIFwiLi9TbG90Ni5DbWRcIjtcblxuaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBQb3B1cFNlbGVjdExpbmUgZnJvbSBcIi4vU2xvdDYuUG9wdXBTZWxlY3RMaW5lXCI7XG5pbXBvcnQgUG9wdXBCb251cyBmcm9tIFwiLi9TbG90Ni5Qb3B1cEJvbnVzXCI7XG5pbXBvcnQgVHJpYWxSZXN1bHRzIGZyb20gXCIuL1Nsb3Q2LlRyaWFsUmVzdWx0c1wiO1xuaW1wb3J0IFNsb3Q2SXRlbSBmcm9tIFwiLi9TbG90Ni5JdGVtXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IEJyb2FkY2FzdFJlY2VpdmVyIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0Jyb2FkY2FzdFJlY2VpdmVyXCI7XG5pbXBvcnQgVHdlZW4gZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vVHdlZW5cIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuaW1wb3J0IEluUGFja2V0IGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5JblBhY2tldFwiO1xuaW1wb3J0IFNsb3ROZXR3b3JrQ2xpZW50IGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvU2xvdE5ldHdvcmtDbGllbnRcIjtcbmltcG9ydCBQb3B1cEphY2twb3RIaXN0b3J5IGZyb20gXCIuL1Nsb3Q2LlBvcHVwSmFja3BvdEhpc3RvcnlcIjtcbmltcG9ydCBCdW5kbGVDb250cm9sIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9CdW5kbGVDb250cm9sXCI7XG5pbXBvcnQgUG9wdXBIaXN0b3J5IGZyb20gXCIuL1Nsb3Q2LlBvcHVwSGlzdG9yeVwiO1xuXG52YXIgVFcgPSBjYy50d2VlbjtcbmNvbnN0IGVudW0gVFlQRV9XSU4ge1xuICAgIE1JU1MgPSAwLFxuICAgIFdJTiA9IDEsXG4gICAgQklHV0lOID0gMixcbiAgICBKQUNLUE9UID0gMyxcbiAgICBTVVBFUldJTiA9IDQsXG4gICAgQk9OVVMgPSA1XG59XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3Q2Q29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlQ29pbjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZUl0ZW06IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgICBtSGVpZ2h0SXRlbTogbnVtYmVyID0gMTgwO1xuXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gICAgbVdpZHRoSXRlbTogbnVtYmVyID0gMTgwO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHJlZWxzOiBjYy5Ob2RlID0gbnVsbDsgLy8gcmVlbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVmZlNwaW46IGNjLk5vZGUgPSBudWxsOyAvLyByZWVsXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gaXRlbVRlbXBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaW5lc1dpbjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaWNvbldpbGRDb2x1bW5zOiBjYy5Ob2RlID0gbnVsbDsgLy8gbWFuZyBjYWMgaXRlbSBleHBhbmQgd2lsZFxuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibEphY2twb3Q6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsQmV0OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibExpbmU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsVG90YWxCZXQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsQ29pbjogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxXaW5Ob3c6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsRnJlZVNwaW5Db3VudDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZSlcbiAgICB0b2dnbGVBdXRvOiBjYy5Ub2dnbGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZSlcbiAgICB0b2dnbGVTb3VuZDogY2MuVG9nZ2xlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXG4gICAgdG9nZ2xnZU11c2ljOiBjYy5Ub2dnbGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZSlcbiAgICB0b2dnbGVCb29zdDogY2MuVG9nZ2xlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgYnRuU3BpbjogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0bkJhY2s6IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG5QbGF5VHJ5OiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgYnRuUGxheVJlYWw6IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG5MaW5lOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdG9hc3Q6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcGFuZWxTZXR0aW5nOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVmZmVjdFdpbkNhc2g6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVmZmVjdEJpZ1dpbjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZWZmZWN0SmFja3BvdDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlBhcnRpY2xlU3lzdGVtKVxuICAgIHBhcnRpY2xlSmFja3B0OiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlBhcnRpY2xlU3lzdGVtKVxuICAgIHBhcnRpY2xlSmFja3B0MTogY2MuUGFydGljbGVTeXN0ZW0gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QYXJ0aWNsZVN5c3RlbSlcbiAgICBwYXJ0aWNsZUJpZ1dpbjogY2MuUGFydGljbGVTeXN0ZW0gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QYXJ0aWNsZVN5c3RlbSlcbiAgICBwYXJ0aWNsZUJpZ1dpbjE6IGNjLlBhcnRpY2xlU3lzdGVtID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUGFydGljbGVTeXN0ZW0pXG4gICAgcGFydGljbGVGcmVlU3BpbjogY2MuUGFydGljbGVTeXN0ZW0gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QYXJ0aWNsZVN5c3RlbSlcbiAgICBwYXJ0aWNsZUJvbnVzOiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZWZmZWN0Qm9udXM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVmZmVjdEZyZWVTcGluOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShQb3B1cFNlbGVjdExpbmUpXG4gICAgcG9wdXBTZWxlY3RMaW5lOiBQb3B1cFNlbGVjdExpbmUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShQb3B1cEJvbnVzKVxuICAgIHBvcHVwQm9udXM6IFBvcHVwQm9udXMgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHNvdW5kU3BpbkNsaWNrOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHNvdW5kU3Bpbk1pczogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgICBzb3VuZFNwaW5XaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgc291bmRCaWdXaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgc291bmRGcmVlc3BpbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgICBzb3VuZEphY2twb3Q6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgc291bmRCb251czogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgICBzb3VuZENsaWNrOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHNvdW5kU3BpbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgICBzb3VuZFdpbGQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgc291bmRSZWVsU3RvcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICAvL2VuZCBtdXNpYyBzZXR0aW5nXG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgICBzb3VuZEJnOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHNvdW5kQmdCb251czogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBwcml2YXRlIGN1cnJlbnROdW1iZXJGcmVlU3BpbiA9IDA7XG4gICAgcHJpdmF0ZSBkYWlMeUZyZWVTcGluID0gMDtcbiAgICBwcml2YXRlIHJvbGxTdGFydEl0ZW1Db3VudCA9IDE1O1xuICAgIHByaXZhdGUgcm9sbEFkZEl0ZW1Db3VudCA9IDEwO1xuICAgIHByaXZhdGUgc3BpbkR1cmF0aW9uID0gMS4yO1xuICAgIHByaXZhdGUgYWRkU3BpbkR1cmF0aW9uID0gMC4zO1xuICAgIC8vcHJpdmF0ZSBpdGVtSGVpZ2h0ID0gMDtcbiAgICBwdWJsaWMgYmV0SWR4ID0gLTE7XG4gICAgcHJpdmF0ZSBsaXN0QmV0ID0gWzEwMCwgMTAwMCwgMTAwMDBdO1xuICAgIHByaXZhdGUgbGlzdEJldExhYmVsID0gW1wiMTAwXCIsIFwiMS4wMDBcIiwgXCIxMC4wMDBcIl07XG4gICAgcHJpdmF0ZSBhcnJMaW5lU2VsZWN0ID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMCwgMjEsIDIyLCAyMywgMjQsIDI1XTtcbiAgICBwcml2YXRlIGlzU3BpbmVkID0gdHJ1ZTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHdpbGRJdGVtSWQgPSAyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgbWFwTGluZSA9IFtcbiAgICAgICAgWzUsIDYsIDcsIDgsIDldLC8vMVxuICAgICAgICBbMCwgMSwgMiwgMywgNF0sLy8yXG4gICAgICAgIFsxMCwgMTEsIDEyLCAxMywgMTRdLC8vM1xuICAgICAgICBbMTAsIDYsIDIsIDgsIDE0XSwvLzRcbiAgICAgICAgWzAsIDYsIDEyLCA4LCA0XSwvLzVcbiAgICAgICAgWzUsIDEsIDIsIDMsIDldLC8vNlxuICAgICAgICBbNSwgMTEsIDEyLCAxMywgOV0sLy83XG4gICAgICAgIFswLCAxLCA3LCAxMywgMTRdLC8vOFxuICAgICAgICBbMTAsIDExLCA3LCAzLCA0XSwvLzlcbiAgICAgICAgWzUsIDExLCA3LCAzLCA5XSwvLzEwXG4gICAgICAgIFs1LCAxLCA3LCAxMywgOV0sLy8xMVxuICAgICAgICBbMCwgNiwgNywgOCwgNF0sLy8xMlxuICAgICAgICBbMTAsIDYsIDcsIDgsIDE0XSwvLzEzXG4gICAgICAgIFswLCA2LCAyLCA4LCA0XSwvLzE0XG4gICAgICAgIFsxMCwgNiwgMTIsIDgsIDE0XSwvLzE1XG4gICAgICAgIFs1LCA2LCAyLCA4LCA5XSwvLzE2XG4gICAgICAgIFs1LCA2LCAxMiwgOCwgOV0sLy8xN1xuICAgICAgICBbMCwgMSwgMTIsIDMsIDRdLC8vMThcbiAgICAgICAgWzEwLCAxMSwgMiwgMTMsIDE0XSwvLzE5XG4gICAgICAgIFswLCAxMSwgMTIsIDEzLCA0XSwvLzIwXG4gICAgICAgIFsxMCwgMSwgMiwgMywgMTRdLC8vMjFcbiAgICAgICAgWzUsIDEsIDEyLCAzLCA5XSwvLzIyXG4gICAgICAgIFs1LCAxMSwgMiwgMTMsIDldLC8vMjNcbiAgICAgICAgWzAsIDExLCAyLCAxMywgNF0sLy8yNFxuICAgICAgICBbMTAsIDEsIDEyLCAzLCAxNF0vLzI1XG4gICAgXTtcbiAgICBwcml2YXRlIGxhc3RTcGluUmVzOiBjbWQuUmVjZWl2ZVBsYXkgPSBudWxsO1xuICAgIHByaXZhdGUgY29sdW1uc1dpbGQgPSBbXTtcblxuICAgIHByaXZhdGUgbXVzaWNTbG90U3RhdGUgPSBudWxsO1xuICAgIHB1YmxpYyBzb3VuZFNsb3RTdGF0ZSA9IG51bGw7XG4gICAgcHJpdmF0ZSByZW1vdGVNdXNpY0JhY2tncm91bmQgPSBudWxsO1xuICAgIHByaXZhdGUgbUlzVHJpYWwgPSBmYWxzZTtcblxuICAgIHByaXZhdGUgcG9wdXBKYWNrcG90SGlzdG9yeTogUG9wdXBKYWNrcG90SGlzdG9yeSA9IG51bGw7XG4gICAgcHJpdmF0ZSBwb3B1cEhpc3Rvcnk6IFBvcHVwSGlzdG9yeSA9IG51bGw7XG4gICAgcHJpdmF0ZSBtdXRpcGxlSnBOb2RlPW51bGw7XG5cblxuICAgIHB1YmxpYyBvbkJ0bkJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZFVuU3ViY3JpYmUodGhpcy5iZXRJZHgpKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xuICAgICAgICBBcHAuaW5zdGFuY2UubG9hZFNjZW5lKFwiTG9iYnlcIik7XG4gICAgfVxuXG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5zb3VuZEluaXQoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50TnVtYmVyRnJlZVNwaW4gPSAwO1xuICAgICAgICB0aGlzLmxibFdpbk5vdy5zdHJpbmcgPSBcIjBcIjtcbiAgICAgICAgdGhpcy5pY29uV2lsZENvbHVtbnMuekluZGV4ID0gMztcbiAgICAgICAgLy90aGlzLml0ZW1IZWlnaHQgPSB0aGlzLml0ZW1UZW1wbGF0ZS5oZWlnaHQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yZWVscy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCByZWVsID0gdGhpcy5yZWVscy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IHRoaXMucm9sbFN0YXJ0SXRlbUNvdW50ICsgaSAqIHRoaXMucm9sbEFkZEl0ZW1Db3VudDtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY291bnQ7IGorKykge1xuICAgICAgICAgICAgICAgIC8vbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1UZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVJdGVtKTtcbiAgICAgICAgICAgICAgICBpdGVtTm9kZS5oZWlnaHQgPSB0aGlzLm1IZWlnaHRJdGVtO1xuICAgICAgICAgICAgICAgIGl0ZW1Ob2RlLndpZHRoID0gdGhpcy5tV2lkdGhJdGVtO1xuICAgICAgICAgICAgICAgIGxldCBpdGVtOiBTbG90Nkl0ZW0gPSBpdGVtTm9kZS5nZXRDb21wb25lbnQoU2xvdDZJdGVtKTtcbiAgICAgICAgICAgICAgICBpdGVtTm9kZS5wYXJlbnQgPSByZWVsO1xuICAgICAgICAgICAgICAgIC8vIGlmIChqID49IDMpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgaXRlbS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByRnJhbWVJdGVtc0JsdXJbVXRpbHMucmFuZG9tUmFuZ2VJbnQoMCwgdGhpcy5zcHJGcmFtZUl0ZW1zQmx1ci5sZW5ndGgpXTtcbiAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgICBpdGVtLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJGcmFtZUl0ZW1zW1V0aWxzLnJhbmRvbVJhbmdlSW50KDAsIHRoaXMuc3ByRnJhbWVJdGVtcy5sZW5ndGgpXTtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgbGV0IGlkID0gVXRpbHMucmFuZG9tUmFuZ2VJbnQoMCwgMTApO1xuICAgICAgICAgICAgICAgIGl0ZW0uc2V0SWQoaWQpO1xuICAgICAgICAgICAgICAgIC8vaXRlbS5jaGlsZHJlblswXS53aWR0aD10aGlzLml0ZW1UZW1wbGF0ZS5jaGlsZHJlblswXS53aWR0aDtcbiAgICAgICAgICAgICAgICAvL2l0ZW0uY2hpbGRyZW5bMF0uaGVpZ2h0PXRoaXMuaXRlbVRlbXBsYXRlLmNoaWxkcmVuWzBdLmhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLml0ZW1UZW1wbGF0ZS5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgIC8vIHRoaXMuaXRlbVRlbXBsYXRlID0gbnVsbDtcblxuICAgICAgICAvL2Rhbmcga3kga2hpIG1hdCBrZXQgbm9pIHR1IGRvbmcgYmFja1xuICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmFkZE9uQ2xvc2UoKCkgPT4ge1xuICAgICAgICAgICAgLy90aGlzLmFjdEJhY2soKTtcbiAgICAgICAgICAgIHRoaXMub25CdG5CYWNrKCk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIC8vbGlzdGVubmVyIGNsaWVudCAtIHNlcnZlclxuICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmFkZExpc3RlbmVyKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBsZXQgaW5wYWNrZXQgPSBuZXcgSW5QYWNrZXQoZGF0YSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGlucGFja2V0LmdldENtZElkKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkZSRUVfREFJX0xZOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMubUlzVHJpYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlRnJlZURhaUx5KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJpbml0IGluZm8gU2xvdDY6XCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhaUx5RnJlZVNwaW4gPSByZXMuZnJlZVNwaW47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkRBVEVfWDI6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVEYXRlWDIoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiaW5pdCBpbmZvIFNsb3Q2OlwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnROdW1iZXJGcmVlU3BpbiA9IHJlcy5mcmVlU3BpbiArIHRoaXMuZGFpTHlGcmVlU3BpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnROdW1iZXJGcmVlU3BpbiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibEZyZWVTcGluQ291bnQubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibEZyZWVTcGluQ291bnQuc3RyaW5nID0gdGhpcy5jdXJyZW50TnVtYmVyRnJlZVNwaW4gKyBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxGcmVlU3BpbkNvdW50Lm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuVVBEQVRFX1BPVDpcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZVVwZGF0ZVBvdChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxKYWNrcG90LCByZXMuamFja3BvdCwgMC4zKTtcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlVQREFURV9KQUNLUE9UX1NMT1RTOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlBMQVk6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVQbGF5KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gLy8gIGNjLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblNwaW5SZXN1bHQocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZENoZWNrKG5ldyBjbWQuUmVxU3ViY3JpYmVIYWxsU2xvdCgpKTtcblxuICAgICAgICAvLy8vICBjYy5sb2coXCJTbG90M0NvbnRyb2xsZXIgc3RhcnRlZFwiKTtcblxuICAgICAgICAvL1Nsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRTdWJjcmliZSh0aGlzLmJldElkeCkpO1xuICAgICAgICB0aGlzLnN0b3BTaG93TGluZXNXaW4oKTtcblxuICAgICAgICB0aGlzLnRvYXN0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVmZmVjdFdpbkNhc2guYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZWZmZWN0SmFja3BvdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lZmZlY3RCaWdXaW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGFuZWxTZXR0aW5nLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMubGJsVG90YWxCZXQuc3RyaW5nID0gKHRoaXMuYXJyTGluZVNlbGVjdC5sZW5ndGggKiB0aGlzLmxpc3RCZXRbdGhpcy5iZXRJZHhdKS50b1N0cmluZygpO1xuXG5cbiAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIucmVnaXN0ZXIoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTiwgKCkgPT4ge1xuICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxDb2luLCBDb25maWdzLkxvZ2luLkNvaW4sIDAuMyk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuXG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93RXJyTG9hZGluZyhcIsSQYW5nIGvhur90IG7hu5FpIHThu5tpIHNlcnZlci4uLlwiKTtcbiAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5jaGVja0Nvbm5lY3QoKCkgPT4ge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vLy8gIGNjLmxvZyhcIlNsb3QzQ29udHJvbGxlciBzdGFydGVkXCIpO1xuXG4gICAgICAgIHRoaXMuYnRuUGxheVJlYWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idG5QbGF5VHJ5Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5iZXRJZHggPSAwO1xuXG4gICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRTdWJjcmliZSh0aGlzLmJldElkeCkpO1xuICAgICAgICB0aGlzLm9uSm9pblJvb20oKTtcbiAgICAgICAgLy90aGlzLmluaXRNdXRpcGxlSlBOb2RlKCk7XG4gICAgfVxuICAgIHByaXZhdGUgaW5pdE11dGlwbGVKUE5vZGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5tdXRpcGxlSnBOb2RlKSB7XG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKFwiTG9iYnlcIikubG9hZChcInByZWZhYnMvTXV0aXBsZUphY2twb3RQclwiLCBjYy5QcmVmYWIsIGZ1bmN0aW9uIChmaW5pc2gsIHRvdGFsLCBpdGVtKSB7XG4gICAgICAgICAgICB9LCAoZXJyMSwgcHJlZmFiOiBjYy5QcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyMSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJlcnJyIGxvYWQgZ2FtZSBUSUVOTEVOOlwiLCBlcnIxKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm11dGlwbGVKcE5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChcIk11dGlwbGVKYWNrcG90XCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm11dGlwbGVKcE5vZGUubm9kZS5wYXJlbnQgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXV0aXBsZUpwTm9kZS5zZXRJbmZvKFwiQ0hJRU1USU5IXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQnRuU3ViKCkge1xuICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kVW5TdWJjcmliZSh0aGlzLmJldElkeCkpO1xuICAgICAgICB0aGlzLmJldElkeC0tO1xuICAgICAgICBpZiAodGhpcy5iZXRJZHggPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5iZXRJZHggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZFN1YmNyaWJlKHRoaXMuYmV0SWR4KSk7XG4gICAgICAgIHRoaXMub25Kb2luUm9vbSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25CdG5BZGQoKSB7XG4gICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRVblN1YmNyaWJlKHRoaXMuYmV0SWR4KSk7XG4gICAgICAgIHRoaXMuYmV0SWR4Kys7XG4gICAgICAgIGlmICh0aGlzLmJldElkeCA+PSAyKSB7XG4gICAgICAgICAgICB0aGlzLmJldElkeCA9IDI7XG4gICAgICAgIH1cbiAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZFN1YmNyaWJlKHRoaXMuYmV0SWR4KSk7XG4gICAgICAgIHRoaXMub25Kb2luUm9vbSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2hvd0NvaW5zKHByaXplKSB7XG4gICAgICAgIHZhciBudW1iZXIgPSBwcml6ZSAvIDIwMDAwO1xuICAgICAgICBpZiAobnVtYmVyIDw9IDEwKSBudW1iZXIgPSAxMDtcbiAgICAgICAgZWxzZSBpZiAobnVtYmVyID49IDMwKSBudW1iZXIgPSAzMDtcbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dDb2lucyhudW1iZXIsIHRoaXMubGJsV2luTm93Lm5vZGUsIHRoaXMubm9kZUNvaW4pO1xuICAgIH1cblxuXG4gICAgcHVibGljIG9uSm9pblJvb20oKSB7XG4gICAgICAgIHRoaXMubGJsQmV0LnN0cmluZyA9IHRoaXMubGlzdEJldExhYmVsW3RoaXMuYmV0SWR4XTtcbiAgICAgICAgbGV0IHRvdGFsYmV0ID0gKHRoaXMuYXJyTGluZVNlbGVjdC5sZW5ndGggKiB0aGlzLmxpc3RCZXRbdGhpcy5iZXRJZHhdKTtcbiAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxUb3RhbEJldCwgdG90YWxiZXQsIDAuMyk7XG5cbiAgICAgICAgLy8gdGhpcy5za2VTcGluLmFuaW1hdGlvbiA9IFwiaWF0XCI7XG4gICAgICAgIC8vIHRoaXMuc2tlU3Bpbi5sb29wID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dUb2FzdChtc2c6IHN0cmluZykge1xuICAgICAgICB0aGlzLnRvYXN0LmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyA9IG1zZztcbiAgICAgICAgdGhpcy50b2FzdC5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aGlzLnRvYXN0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMudG9hc3QucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgyKSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50b2FzdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSkpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG1vbmV5VG9LKG1vbmV5OiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICAvLyBpZiAobW9uZXkgPCAxMDAwMCkge1xuICAgICAgICAvLyAgICAgcmV0dXJuIG1vbmV5LnRvU3RyaW5nKCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gbW9uZXkgPSBwYXJzZUludCgobW9uZXkgLyAxMDAwKS50b1N0cmluZygpKTtcbiAgICAgICAgcmV0dXJuIG1vbmV5LnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRFbmFibGVkQWxsQnV0dG9ucyhlbmFibGVkOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuYnRuU3Bpbi5pbnRlcmFjdGFibGUgPSBlbmFibGVkO1xuICAgICAgICB0aGlzLmJ0bkJhY2suaW50ZXJhY3RhYmxlID0gZW5hYmxlZDtcbiAgICAgICAgLy8gdGhpcy5idG5CZXRVcC5pbnRlcmFjdGFibGUgPSBlbmFibGVkO1xuICAgICAgICAvLyB0aGlzLmJ0bkJldERvd24uaW50ZXJhY3RhYmxlID0gZW5hYmxlZDtcbiAgICAgICAgdGhpcy5idG5MaW5lLmludGVyYWN0YWJsZSA9IGVuYWJsZWQ7XG4gICAgICAgIHRoaXMuYnRuUGxheVRyeS5pbnRlcmFjdGFibGUgPSBlbmFibGVkO1xuICAgICAgICB0aGlzLmJ0blBsYXlSZWFsLmludGVyYWN0YWJsZSA9IGVuYWJsZWQ7XG5cbiAgICAgICAgdGhpcy5lZmZTcGluLmFjdGl2ZSA9IGVuYWJsZWQ7XG4gICAgICAgIC8vdGhpcy50b2dnbGVUcmlhbC5pbnRlcmFjdGFibGUgPSBlbmFibGVkO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RvcEFsbEVmZmVjdHMoKSB7XG4gICAgICAgIHRoaXMuZWZmZWN0SmFja3BvdC5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aGlzLmVmZmVjdEphY2twb3QuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZWZmZWN0QmlnV2luLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuZWZmZWN0QmlnV2luLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVmZmVjdEZyZWVTcGluLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuZWZmZWN0RnJlZVNwaW4uYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdG9wU2hvd0xpbmVzV2luKCkge1xuICAgICAgICB0aGlzLmxpbmVzV2luLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saW5lc1dpbi5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubGluZXNXaW4uY2hpbGRyZW5baV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmljb25XaWxkQ29sdW1ucy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuaWNvbldpbGRDb2x1bW5zLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RvcEFsbEl0ZW1FZmZlY3QoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0b3BBbGxJdGVtRWZmZWN0KCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmVlbHMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLnJlZWxzLmNoaWxkcmVuW2ldLmNoaWxkcmVuOyAvLyA/Pz9cbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoY2hpbGRyZW5bal0pO1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuW2pdLnNjYWxlID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3BpbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3BpbmVkKSByZXR1cm47XG5cblxuICAgICAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTcGluQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaXNUcmFpbCA9IHRoaXMubUlzVHJpYWw7XG4gICAgICAgIGlmICghaXNUcmFpbCkge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TnVtYmVyRnJlZVNwaW4gPD0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChDb25maWdzLkxvZ2luLkNvaW4gPCB0aGlzLmxpc3RCZXRbdGhpcy5iZXRJZHhdICogdGhpcy5hcnJMaW5lU2VsZWN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfbm90X2Vub3VnaFwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGN1ck1vbmV5ID0gQ29uZmlncy5Mb2dpbi5Db2luIC0gdGhpcy5hcnJMaW5lU2VsZWN0Lmxlbmd0aCAqIHRoaXMubGlzdEJldFt0aGlzLmJldElkeF07XG4gICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxDb2luLCBjdXJNb25leSwgMC4zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE51bWJlckZyZWVTcGluLS07XG4gICAgICAgICAgICAgICAgdGhpcy5sYmxGcmVlU3BpbkNvdW50LnN0cmluZyA9IHRoaXMuY3VycmVudE51bWJlckZyZWVTcGluICsgXCJcIjtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TnVtYmVyRnJlZVNwaW4gPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnROdW1iZXJGcmVlU3BpbiA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsRnJlZVNwaW5Db3VudC5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaXNTcGluZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc3RvcEFsbEVmZmVjdHMoKTtcbiAgICAgICAgICAgIHRoaXMuc3RvcFNob3dMaW5lc1dpbigpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VBbGxJdGVtVG9EYXJrKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RW5hYmxlZEFsbEJ1dHRvbnMoZmFsc2UpO1xuICAgICAgICAgICAgLy8gdGhpcy5za2VTcGluLmFuaW1hdGlvbiA9IFwiYXRcIjtcbiAgICAgICAgICAgIC8vIHRoaXMuc2tlU3Bpbi5sb29wID0gdHJ1ZTtcbiAgICAgICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRQbGF5KHRoaXMuYXJyTGluZVNlbGVjdC50b1N0cmluZygpKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUFsbEl0ZW1Ub0RhcmsoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5pc1NwaW5lZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zdG9wQWxsRWZmZWN0cygpO1xuICAgICAgICAgICAgdGhpcy5zdG9wU2hvd0xpbmVzV2luKCk7XG4gICAgICAgICAgICB0aGlzLnNldEVuYWJsZWRBbGxCdXR0b25zKGZhbHNlKTtcbiAgICAgICAgICAgIC8vIHRoaXMuc2tlU3Bpbi5hbmltYXRpb24gPSBcImF0XCI7XG4gICAgICAgICAgICAvLyB0aGlzLnNrZVNwaW4ubG9vcCA9IHRydWU7XG4gICAgICAgICAgICB2YXIgcklkeCA9IFV0aWxzLnJhbmRvbVJhbmdlSW50KDAsIFRyaWFsUmVzdWx0cy5yZXN1bHRzLmxlbmd0aCk7XG4gICAgICAgICAgICB0aGlzLm9uU3BpblJlc3VsdChUcmlhbFJlc3VsdHMucmVzdWx0c1tySWR4XSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0b3BTcGluKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVlbHMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcm9sbCA9IHRoaXMucmVlbHMuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQocm9sbCk7XG4gICAgICAgICAgICByb2xsLnNldFBvc2l0aW9uKGNjLnYyKHJvbGwuZ2V0UG9zaXRpb24oKS54LCAwKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dMaW5lV2lucygpIHtcbiAgICAgICAgdGhpcy5pc1NwaW5lZCA9IHRydWU7XG4gICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsV2luTm93LCB0aGlzLmxhc3RTcGluUmVzLnByaXplLCAwLjMpO1xuICAgICAgICBsZXQgaXNUcmFpbCA9IHRoaXMubUlzVHJpYWw7XG4gICAgICAgIGlmICghaXNUcmFpbCkgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcbiAgICAgICAgaWYgKCF0aGlzLnRvZ2dsZUF1dG8uaXNDaGVja2VkICYmICF0aGlzLnRvZ2dsZUJvb3N0LmlzQ2hlY2tlZCkgdGhpcy5zZXRFbmFibGVkQWxsQnV0dG9ucyh0cnVlKTtcblxuICAgICAgICB0aGlzLmxpbmVzV2luLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGxldCBsaW5lc1dpbiA9IHRoaXMubGFzdFNwaW5SZXMubGluZXNXaW4uc3BsaXQoXCIsXCIpO1xuICAgICAgICBsaW5lc1dpbiA9IFV0aWxzLnJlbW92ZUR1cHMobGluZXNXaW4pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzV2luLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobGluZXNXaW5baV0gPT0gXCIwXCIpIHtcbiAgICAgICAgICAgICAgICBsaW5lc1dpbi5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBtYXRyaXggPSB0aGlzLmxhc3RTcGluUmVzLm1hdHJpeC5zcGxpdChcIixcIik7XG4gICAgICAgIGxldCBsaW5lc1dpbkNoaWxkcmVuID0gdGhpcy5saW5lc1dpbi5jaGlsZHJlbjtcbiAgICAgICAgbGV0IHJvbGxzID0gdGhpcy5yZWVscy5jaGlsZHJlbjtcbiAgICAgICAgbGV0IGFjdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lc1dpbkNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsaW5lc1dpbkNoaWxkcmVuW2ldLmFjdGl2ZSA9IGxpbmVzV2luLmluZGV4T2YoXCJcIiArIChpICsgMSkpID49IDA7O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxhc3RTcGluUmVzLnByaXplID4gMCkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VBbGxJdGVtVG9EYXJrKHRydWUpO1xuICAgICAgICAgICAgdGhpcy5saW5lc1dpbi56SW5kZXggPSAxO1xuICAgICAgICAgICAgdGhpcy5yZWVscy5wYXJlbnQuekluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2hvd1dpbkNhc2godGhpcy5sYXN0U3BpblJlcy5wcml6ZSk7XG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goY2MuZGVsYXlUaW1lKDEuNSkpO1xuICAgICAgICAgICAgYWN0aW9ucy5wdXNoKGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzV2luQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZXNXaW5DaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goY2MuZGVsYXlUaW1lKDAuMykpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnRvZ2dsZUJvb3N0LmlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXNXaW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxpbmVJZHggPSBwYXJzZUludChsaW5lc1dpbltpXSkgLSAxO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGluZSA9IGxpbmVzV2luQ2hpbGRyZW5bbGluZUlkeF07XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnMucHVzaChjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAvLyAgY2MubG9nKFwiPT09PT09PT09PT09PT09PTogXCIgKyBsaW5lSWR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGluZXNXaW4uekluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVlbHMucGFyZW50LnpJbmRleCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbUxpbmUgPSB0aGlzLm1hcExpbmVbbGluZUlkeF07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY291bnRJdGVtV2luID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaXNydEl0ZW1JZCA9IG1hdHJpeFttTGluZVswXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1MaW5lLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1JZCA9IG1hdHJpeFttTGluZVtqXV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpc3J0SXRlbUlkID09IGl0ZW1JZCB8fCBwYXJzZUludChpdGVtSWQpID09IHRoaXMud2lsZEl0ZW1JZCB8fCB0aGlzLmNvbHVtbnNXaWxkLmluZGV4T2YoaikgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAvLyAgY2MubG9nKFwiPT1cIiArIGl0ZW1JZCArIFwiIGo6XCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRJdGVtV2luKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3VudEl0ZW1XaW47IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtUm93ID0gcGFyc2VJbnQoKG1MaW5lW2pdIC8gNSkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSByb2xsc1tqXS5jaGlsZHJlblsyIC0gaXRlbVJvd107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUVyhpdGVtKS5yZXBlYXRGb3JldmVyKFRXKCkudG8oMC4yLCB7IHNjYWxlOiAxLjEgfSkudG8oMC4yLCB7IHNjYWxlOiAxLjAgfSkpLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoU2xvdDZJdGVtKS5zaG93SXRlbUFuaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUVyhpdGVtKS5kZWxheSgwLjkpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChTbG90Nkl0ZW0pLm9mZkl0ZW1BbmltKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpdGVtLnJ1bkFjdGlvbihjYy5yZXBlYXRGb3JldmVyKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjYy5zY2FsZVRvKDAuMiwgMS4xKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY2Muc2NhbGVUbygwLjIsIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gLy8gIGNjLmxvZyhcImxpbmVJZHg6IFwiICsgbGluZUlkeCArIFwiZmlzcnRJdGVtSWQ6IFwiICsgZmlzcnRJdGVtSWQgKyBcIiBjb3VudEl0ZW1XaW46IFwiICsgY291bnRJdGVtV2luKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goY2MuZGVsYXlUaW1lKDEpKTtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BBbGxJdGVtRWZmZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKGNjLmRlbGF5VGltZSgwLjEpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGlvbnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGFjdGlvbnMucHVzaChjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy9maXhlZCBjYWxsIGNjLnNlcXVlbmNlLmFwcGx5XG4gICAgICAgICAgICB9KSlcbiAgICAgICAgfVxuICAgICAgICBhY3Rpb25zLnB1c2goY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VBbGxJdGVtVG9EYXJrKGZhbHNlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnRvZ2dsZUJvb3N0LmlzQ2hlY2tlZCB8fCB0aGlzLnRvZ2dsZUF1dG8uaXNDaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGluKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5saW5lc1dpbi5ydW5BY3Rpb24oY2Muc2VxdWVuY2UuYXBwbHkobnVsbCwgYWN0aW9ucykpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2hvd1dpbkNhc2goY2FzaDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNwaW5XaW4sIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3dDb2lucyhjYXNoKTtcbiAgICAgICAgdGhpcy5lZmZlY3RXaW5DYXNoLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuZWZmZWN0V2luQ2FzaC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBsZXQgbGFiZWwgPSB0aGlzLmVmZmVjdFdpbkNhc2guZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCk7XG4gICAgICAgIGxhYmVsLnN0cmluZyA9IFwiMFwiO1xuICAgICAgICB0aGlzLmVmZmVjdFdpbkNhc2gub3BhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMuZWZmZWN0V2luQ2FzaC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5mYWRlSW4oMC4zKSxcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyhsYWJlbCwgY2FzaCwgMC41KTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDEuNSksXG4gICAgICAgICAgICBjYy5mYWRlT3V0KDAuMyksXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZmZlY3RXaW5DYXNoLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaG93RWZmZWN0QmlnV2luKGNhc2g6IG51bWJlciwgY2I6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5lZmZlY3RCaWdXaW4uc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5lZmZlY3RCaWdXaW4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lZmZlY3RCaWdXaW4uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwidGhhbmcgc2lldSBsb24gZnhcIiwgdHJ1ZSk7XG4gICAgICAgIGxldCBsYWJlbCA9IHRoaXMuZWZmZWN0QmlnV2luLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpO1xuICAgICAgICBsYWJlbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBhcnRpY2xlQmlnV2luLnJlc2V0U3lzdGVtKCk7XG4gICAgICAgIHRoaXMucGFydGljbGVCaWdXaW4xLnJlc2V0U3lzdGVtKCk7XG4gICAgICAgIHRoaXMuZWZmZWN0QmlnV2luLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgIGNjLmRlbGF5VGltZSgxKSxcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGxhYmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyhsYWJlbCwgY2FzaCwgMSk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGNjLmRlbGF5VGltZSgzKSxcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVmZmVjdEJpZ1dpbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoY2IgIT0gbnVsbCkgY2IoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2hvd0VmZmVjdEZyZWVTcGluKGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEZyZWVzcGluLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lZmZlY3RGcmVlU3Bpbi5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aGlzLmVmZmVjdEZyZWVTcGluLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZWZmZWN0RnJlZVNwaW4uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiZnJlZXNwaW4gZnhcIiwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5wYXJ0aWNsZUZyZWVTcGluLnJlc2V0U3lzdGVtKCk7XG4gICAgICAgIHRoaXMuZWZmZWN0RnJlZVNwaW4ucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDEpLFxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDMpLFxuICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZWZmZWN0RnJlZVNwaW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGNiICE9IG51bGwpIGNiKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dFZmZlY3RKYWNrcG90KGNhc2g6IG51bWJlciwgY2I6ICgpID0+IHZvaWQgPSBudWxsKSB7XG4gICAgICAgIHZhciBhbmltTmFtZSA9IFtcImphY2twb3QgZnhcIl07XG4gICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKyBcIlwiKTtcbiAgICAgICAgdGhpcy5lZmZlY3RKYWNrcG90LnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuZWZmZWN0SmFja3BvdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmVmZmVjdEphY2twb3QuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGFuaW1OYW1lW2luZGV4XSwgdHJ1ZSk7XG4gICAgICAgIGxldCBsYWJlbCA9IHRoaXMuZWZmZWN0SmFja3BvdC5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKTtcbiAgICAgICAgbGFiZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmVmZmVjdEphY2twb3QucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuNCksXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZUphY2twdC5yZXNldFN5c3RlbSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGFydGljbGVKYWNrcHQxLnJlc2V0U3lzdGVtKCk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjYpLFxuICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxhYmVsLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgbGFiZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKGxhYmVsLCBjYXNoLCAxKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDYpLFxuICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZWZmZWN0SmFja3BvdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoY2IgIT0gbnVsbCkgY2IoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2hvd0VmZmVjdEJvbnVzKGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMuZWZmZWN0Qm9udXMuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5lZmZlY3RCb251cy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmVmZmVjdEJvbnVzLmdldENvbXBvbmVudEluQ2hpbGRyZW4oc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImJvbnVzIGZ4XCIsIHRydWUpO1xuICAgICAgICB0aGlzLnBhcnRpY2xlQm9udXMucmVzZXRTeXN0ZW0oKTtcbiAgICAgICAgdGhpcy5lZmZlY3RCb251cy5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoMyksXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZmZlY3RCb251cy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoY2IgIT0gbnVsbCkgY2IoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TcGluUmVzdWx0KHJlczogY21kLlJlY2VpdmVQbGF5IHwgYW55KSB7XG4gICAgICAgIHRoaXMuc3RvcFNwaW4oKTtcbiAgICAgICAgLy8gIGNjLmxvZyhcIm9uU3BpblJlc3VsdDpcIiArIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgICAvLyByZXM9SlNPTi5wYXJzZSgne1wiX3Bvc1wiOjg1LFwiX2RhdGFcIjp7XCIwXCI6MSxcIjFcIjoyMyxcIjJcIjoxMTMsXCIzXCI6MCxcIjRcIjowLFwiNVwiOjAsXCI2XCI6MCxcIjdcIjowLFwiOFwiOjAsXCI5XCI6MCxcIjEwXCI6NixcIjExXCI6NzMsXCIxMlwiOjEsXCIxM1wiOjAsXCIxNFwiOjMwLFwiMTVcIjo1MixcIjE2XCI6NDQsXCIxN1wiOjUyLFwiMThcIjo0NCxcIjE5XCI6NTIsXCIyMFwiOjQ0LFwiMjFcIjo1MyxcIjIyXCI6NDQsXCIyM1wiOjU3LFwiMjRcIjo0NCxcIjI1XCI6NTIsXCIyNlwiOjQ0LFwiMjdcIjo1NixcIjI4XCI6NDQsXCIyOVwiOjUyLFwiMzBcIjo0NCxcIjMxXCI6NTcsXCIzMlwiOjQ0LFwiMzNcIjo1MyxcIjM0XCI6NDQsXCIzNVwiOjUzLFwiMzZcIjo0NCxcIjM3XCI6NDksXCIzOFwiOjQ4LFwiMzlcIjo0NCxcIjQwXCI6NTAsXCI0MVwiOjQ0LFwiNDJcIjo1MyxcIjQzXCI6NDQsXCI0NFwiOjUyLFwiNDVcIjowLFwiNDZcIjoxNCxcIjQ3XCI6NTAsXCI0OFwiOjQ0LFwiNDlcIjo1NCxcIjUwXCI6NDQsXCI1MVwiOjU2LFwiNTJcIjo0NCxcIjUzXCI6NDksXCI1NFwiOjQ5LFwiNTVcIjo0NCxcIjU2XCI6NDksXCI1N1wiOjU2LFwiNThcIjo0NCxcIjU5XCI6NTAsXCI2MFwiOjUwLFwiNjFcIjowLFwiNjJcIjowLFwiNjNcIjowLFwiNjRcIjowLFwiNjVcIjowLFwiNjZcIjowLFwiNjdcIjowLFwiNjhcIjowLFwiNjlcIjozNSxcIjcwXCI6NDAsXCI3MVwiOjAsXCI3MlwiOjAsXCI3M1wiOjAsXCI3NFwiOjAsXCI3NVwiOjIsXCI3NlwiOjYzLFwiNzdcIjoxMTQsXCI3OFwiOjI0OCxcIjc5XCI6MCxcIjgwXCI6MCxcIjgxXCI6MCxcIjgyXCI6MCxcIjgzXCI6MCxcIjg0XCI6MH0sXCJfbGVuZ3RoXCI6ODUsXCJfY29udHJvbGxlcklkXCI6MSxcIl9jbWRJZFwiOjYwMDEsXCJfZXJyb3JcIjowLFwicmVmXCI6MTYwOSxcInJlc3VsdFwiOjEsXCJtYXRyaXhcIjpcIjQsNCw0LDUsOSw0LDgsNCw5LDUsNSwxMCwyLDUsNFwiLFwibGluZXNXaW5cIjpcIjIsNiw4LDExLDE4LDIyXCIsXCJoYWlTYW9cIjpcIlwiLFwicHJpemVcIjo5MDAwLFwiY3VycmVudE1vbmV5XCI6Mzc3MTI2MzIsXCJmcmVlU3BpblwiOjAsXCJpc0ZyZWVcIjpmYWxzZSxcIml0ZW1zV2lsZFwiOlwiXCIsXCJyYXRpb1wiOjAsXCJjdXJyZW50TnVtYmVyRnJlZVNwaW5cIjowfScpXG4gICAgICAgIHZhciBzdWNjZXNzUmVzdWx0ID0gWzAsIDEsIDIsIDMsIDQsIDUsIDZdO1xuXG4gICAgICAgIGlmIChzdWNjZXNzUmVzdWx0LmluZGV4T2YocmVzLnJlc3VsdCkgPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3BpbmVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy50b2dnbGVBdXRvLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy50b2dnbGVBdXRvLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUJvb3N0LmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy50b2dnbGVCb29zdC5pbnRlcmFjdGFibGUgPSB0cnVlO1xuXG5cbiAgICAgICAgICAgIHRoaXMuc2V0RW5hYmxlZEFsbEJ1dHRvbnModHJ1ZSk7XG4gICAgICAgICAgICBzd2l0Y2ggKHJlcy5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDEwMjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfc2xvdF9lcnJvcicpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfdW5rbm93bl9lcnJvcjEnKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudE51bWJlckZyZWVTcGluID0gcmVzLmN1cnJlbnROdW1iZXJGcmVlU3BpbjtcbiAgICAgICAgdGhpcy5sYXN0U3BpblJlcyA9IHJlcztcbiAgICAgICAgdGhpcy5jb2x1bW5zV2lsZC5sZW5ndGggPSAwO1xuXG4gICAgICAgIGxldCBpc1RyYWlsID0gdGhpcy5tSXNUcmlhbDtcbiAgICAgICAgaWYgKCFpc1RyYWlsICYmICF0aGlzLmxhc3RTcGluUmVzLmlzRnJlZSkge1xuICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luID0gcmVzLmN1cnJlbnRNb25leTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtYXRyaXggPSByZXMubWF0cml4LnNwbGl0KFwiLFwiKTtcbiAgICAgICAgbGV0IHRpbWVTY2FsZSA9IHRoaXMudG9nZ2xlQm9vc3QuaXNDaGVja2VkID8gMC41IDogMTtcbiAgICAgICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU3BpbiwgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yZWVscy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb2xsID0gdGhpcy5yZWVscy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxldCBzdGVwMVBvcyA9IHRoaXMubUhlaWdodEl0ZW0gKiAwLjM7XG4gICAgICAgICAgICBsZXQgc3RlcDJQb3MgPSAtdGhpcy5tSGVpZ2h0SXRlbSAqIHJvbGwuY2hpbGRyZW5Db3VudCArIHRoaXMubUhlaWdodEl0ZW0gKiAzIC0gdGhpcy5tSGVpZ2h0SXRlbSAqIDAuMztcbiAgICAgICAgICAgIGxldCBzdGVwM1BvcyA9IC10aGlzLm1IZWlnaHRJdGVtICogcm9sbC5jaGlsZHJlbkNvdW50ICsgdGhpcy5tSGVpZ2h0SXRlbSAqIDM7XG4gICAgICAgICAgICBUVyhyb2xsKVxuICAgICAgICAgICAgICAgIC5kZWxheSgwLjIgKiBpICogdGltZVNjYWxlKVxuICAgICAgICAgICAgICAgIC50bygwLjIgKiB0aW1lU2NhbGUsIHsgcG9zaXRpb246IGNjLnYzKHJvbGwucG9zaXRpb24ueCwgc3RlcDFQb3MpIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcucXVhZE91dCB9KVxuICAgICAgICAgICAgICAgIC50bygodGhpcy5zcGluRHVyYXRpb24gKyB0aGlzLmFkZFNwaW5EdXJhdGlvbiAqIGkpICogdGltZVNjYWxlLCB7IHBvc2l0aW9uOiBjYy52Myhyb2xsLnBvc2l0aW9uLngsIHN0ZXAyUG9zKSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnF1YWRJbk91dCB9KVxuICAgICAgICAgICAgICAgIC50bygwLjIgKiB0aW1lU2NhbGUsIHsgcG9zaXRpb246IGNjLnYzKHJvbGwucG9zaXRpb24ueCwgc3RlcDNQb3MpIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcucXVhZEluIH0pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRSZWVsU3RvcCwgZmFsc2UsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJvbGwuc2V0UG9zaXRpb24oY2MudjIocm9sbC5wb3NpdGlvbi54LCAwKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZmluZCBjb2x1bW5zIHdpbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWF0cml4Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KG1hdHJpeFtqXSkgPT0gdGhpcy53aWxkSXRlbUlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjID0gaiAlIDU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbHVtbnNXaWxkLmluZGV4T2YoYykgPT0gLTEpIHRoaXMuY29sdW1uc1dpbGQucHVzaChjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3JlcGxhY2Ugd2lsZCBpdGVtcyBpbiBjb2x1bW5zXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uc1dpbGQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYyA9IHRoaXMuY29sdW1uc1dpbGRbal07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gdGhpcy5yZWVscy5jaGlsZHJlbltjXS5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlblsyXS5nZXRDb21wb25lbnQoU2xvdDZJdGVtKS5zZXRJZCh0aGlzLndpbGRJdGVtSWQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuWzFdLmdldENvbXBvbmVudChTbG90Nkl0ZW0pLnNldElkKHRoaXMud2lsZEl0ZW1JZCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KFNsb3Q2SXRlbSkuc2V0SWQodGhpcy53aWxkSXRlbUlkLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmljb25XaWxkQ29sdW1ucy5jaGlsZHJlbltjXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWNvbldpbGRDb2x1bW5zLmNoaWxkcmVuW2NdLnNjYWxlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5pY29uV2lsZENvbHVtbnMuY2hpbGRyZW5bY10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV2lsZCwgZmFsc2UsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmljb25XaWxkQ29sdW1ucy5jaGlsZHJlbltjXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuNCwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogXCJiYWNrT3V0XCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pY29uV2lsZENvbHVtbnMuY2hpbGRyZW5bY10uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5hbmltYXRpb24gPSBcImFuaW1hdGlvblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWNvbldpbGRDb2x1bW5zLmNoaWxkcmVuW2NdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikubG9vcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb2x1bW5zV2lsZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sbC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgyLjYpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaWNvbldpbGRDb2x1bW5zLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWNvbldpbGRDb2x1bW5zLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3BpbmVkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3BpbmVkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICAgICAgLy9yb29sID0gcmVlbFxuICAgICAgICAgICAgVFcocm9sbClcbiAgICAgICAgICAgICAgICAuZGVsYXkoKDAuMiAqIGkgKiB0aW1lU2NhbGUpICsgKDAuNCAqIHRpbWVTY2FsZSkpXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBtID0gMDsgbSA8IHJvbGwuY2hpbGRyZW5Db3VudDsgbSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHJvbGwuY2hpbGRyZW5bbV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChTbG90Nkl0ZW0pLnNldElkQmx1cihVdGlscy5yYW5kb21SYW5nZUludCgwLCAxMSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgIFRXKHJvbGwpXG4gICAgICAgICAgICAgICAgLmRlbGF5KCgwLjQ3ICsgMC4yICogaSkgKiB0aW1lU2NhbGUpXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdEl0ZW1Ob2RlID0gcm9sbC5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW1Ob2RlWzJdLmdldENvbXBvbmVudChTbG90Nkl0ZW0pLnNldElkKHBhcnNlSW50KG1hdHJpeFtpXSksIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbU5vZGVbMV0uZ2V0Q29tcG9uZW50KFNsb3Q2SXRlbSkuc2V0SWQocGFyc2VJbnQobWF0cml4WzUgKyBpXSksIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbU5vZGVbMF0uZ2V0Q29tcG9uZW50KFNsb3Q2SXRlbSkuc2V0SWQocGFyc2VJbnQobWF0cml4WzEwICsgaV0pLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW1Ob2RlW2xpc3RJdGVtTm9kZS5sZW5ndGggLSAxXS5nZXRDb21wb25lbnQoU2xvdDZJdGVtKS5zZXRJZChwYXJzZUludChtYXRyaXhbaV0pLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW1Ob2RlW2xpc3RJdGVtTm9kZS5sZW5ndGggLSAyXS5nZXRDb21wb25lbnQoU2xvdDZJdGVtKS5zZXRJZChwYXJzZUludChtYXRyaXhbNSArIGldKSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtTm9kZVtsaXN0SXRlbU5vZGUubGVuZ3RoIC0gM10uZ2V0Q29tcG9uZW50KFNsb3Q2SXRlbSkuc2V0SWQocGFyc2VJbnQobWF0cml4WzEwICsgaV0pLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzcGluZWQoKSB7XG4gICAgICAgIC8vIHRoaXMuc2tlU3Bpbi5hbmltYXRpb24gPSBcImlhdFwiO1xuICAgICAgICAvLyB0aGlzLnNrZVNwaW4ubG9vcCA9IHRydWU7XG4gICAgICAgIHRoaXMuY3VycmVudE51bWJlckZyZWVTcGluID0gdGhpcy5sYXN0U3BpblJlcy5jdXJyZW50TnVtYmVyRnJlZVNwaW47XG4gICAgICAgIGlmICh0aGlzLmxhc3RTcGluUmVzLmN1cnJlbnROdW1iZXJGcmVlU3BpbiA+IDApIHtcbiAgICAgICAgICAgIHRoaXMubGJsRnJlZVNwaW5Db3VudC5ub2RlLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sYmxGcmVlU3BpbkNvdW50LnN0cmluZyA9IHRoaXMuY3VycmVudE51bWJlckZyZWVTcGluICsgXCJcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGJsRnJlZVNwaW5Db3VudC5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sYXN0U3BpblJlcy5mcmVlU3BpbiA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dFZmZlY3RGcmVlU3BpbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TGluZVdpbnMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHN1Y2Nlc3NSZXN1bHQgPSBbMCwgMSwgMywgNSwgNl07XG4gICAgICAgICAgICAvLyAgY2MubG9nKFwibGFzdFNwaW5lUmVzOlwiICsgdGhpcy5sYXN0U3BpblJlcy5yZXN1bHQpO1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmxhc3RTcGluUmVzLnJlc3VsdCkge1xuXG4gICAgICAgICAgICAgICAgY2FzZSBUWVBFX1dJTi5NSVNTOi8vayBhblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTcGluTWlzLCBmYWxzZSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TGluZVdpbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBUWVBFX1dJTi5XSU46Ly8gdGhhbmcgdGh1b25nXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TGluZVdpbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBUWVBFX1dJTi5CSUdXSU46Ly8gdGhhbmcgbG9uXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJpZ1dpbiwgZmFsc2UsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0VmZmVjdEJpZ1dpbih0aGlzLmxhc3RTcGluUmVzLnByaXplLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dMaW5lV2lucygpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBUWVBFX1dJTi5KQUNLUE9UOiBjYXNlIFRZUEVfV0lOLlNVUEVSV0lOOi8vamFja3BvdFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRKYWNrcG90LCBmYWxzZSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RWZmZWN0SmFja3BvdCh0aGlzLmxhc3RTcGluUmVzLnByaXplLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dMaW5lV2lucygpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA2Oi8vdGhhbmcgc2lldSBsb25cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQmlnV2luLCBmYWxzZSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RWZmZWN0QmlnV2luKHRoaXMubGFzdFNwaW5SZXMucHJpemUsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xpbmVXaW5zKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFRZUEVfV0lOLkJPTlVTOi8vYm9udXNcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQm9udXMsIGZhbHNlLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dFZmZlY3RCb251cygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdGVNdXNpY0JhY2tncm91bmQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5zb3VuZEJnQm9udXMsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnBvcHVwQm9udXMuc2hvd0JvbnVzKHRoaXMubUlzVHJpYWwgPyAxMDAgOiB0aGlzLmxpc3RCZXRbdGhpcy5iZXRJZHhdLCB0aGlzLmxhc3RTcGluUmVzLmhhaVNhbywgdGhpcywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5yZW1vdGVNdXNpY0JhY2tncm91bmQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5zb3VuZEJnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5zaG93TGluZVdpbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RTaG93Qm9udXModGhpcy5tSXNUcmlhbCA/IDEwMCA6IHRoaXMubGlzdEJldFt0aGlzLmJldElkeF0sIHRoaXMubGFzdFNwaW5SZXMuaGFpU2FvLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW90ZU11c2ljQmFja2dyb3VuZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLnNvdW5kQmcsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dMaW5lV2lucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIG9uQnRuU291bmRUb3VjaEJvbnVzKCkge1xuXG4gICAgfVxuXG4gICAgb25CdG5Tb3VuZFN1bWFyeSgpIHtcblxuICAgIH1cbiAgICBhY3RCYWNrKCkge1xuICAgICAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRVblN1YmNyaWJlKHRoaXMuYmV0SWR4KSk7XG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcbiAgICAgICAgLy8gQXBwLmluc3RhbmNlLmxvYWRTY2VuZShcIkxvYmJ5XCIpO1xuXG4gICAgfVxuXG4gICAgYWN0SGlkZGVuKCkge1xuICAgICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9mdW5jdGlvbl9pbl9kZXZlbG9wbWVudCcpKTtcbiAgICB9XG5cbiAgICBhY3RCZXRVcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpc1RyYWlsID0gdGhpcy5tSXNUcmlhbDtcbiAgICAgICAgaWYgKGlzVHJhaWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Nsb3RfZXJyb3InKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYmV0SWR4IDwgdGhpcy5saXN0QmV0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMuZGFpTHlGcmVlU3BpbiA9IDA7XG4gICAgICAgICAgICB0aGlzLmxibEZyZWVTcGluQ291bnQubm9kZS5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kQ2hhbmdlUm9vbSh0aGlzLmJldElkeCwgKyt0aGlzLmJldElkeCkpO1xuICAgICAgICAgICAgdGhpcy5sYmxCZXQuc3RyaW5nID0gdGhpcy5saXN0QmV0TGFiZWxbdGhpcy5iZXRJZHhdO1xuICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxUb3RhbEJldCwgdGhpcy5hcnJMaW5lU2VsZWN0Lmxlbmd0aCAqIHRoaXMubGlzdEJldFt0aGlzLmJldElkeF0sIDAuMywgKG4pID0+IHsgcmV0dXJuIHRoaXMubW9uZXlUb0sobikgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhY3RCZXREb3duKCkge1xuICAgICAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlzVHJhaWwgPSB0aGlzLm1Jc1RyaWFsO1xuICAgICAgICBpZiAoaXNUcmFpbCkge1xuICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfc2xvdF9lcnJvcicpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5iZXRJZHggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmRhaUx5RnJlZVNwaW4gPSAwO1xuICAgICAgICAgICAgdGhpcy5sYmxGcmVlU3BpbkNvdW50Lm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZENoYW5nZVJvb20odGhpcy5iZXRJZHgsIC0tdGhpcy5iZXRJZHgpKTtcbiAgICAgICAgICAgIHRoaXMubGJsQmV0LnN0cmluZyA9IHRoaXMubGlzdEJldExhYmVsW3RoaXMuYmV0SWR4XTtcbiAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsVG90YWxCZXQsIHRoaXMuYXJyTGluZVNlbGVjdC5sZW5ndGggKiB0aGlzLmxpc3RCZXRbdGhpcy5iZXRJZHhdLCAwLjMsIChuKSA9PiB7IHJldHVybiB0aGlzLm1vbmV5VG9LKG4pIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWN0TGluZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpc1RyYWlsID0gdGhpcy5tSXNUcmlhbDtcbiAgICAgICAgaWYgKGlzVHJhaWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Nsb3RfZXJyb3InKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3B1cFNlbGVjdExpbmUuc2hvdygpO1xuICAgIH1cblxuICAgIGFjdFNldHRpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYW5lbFNldHRpbmcuYWN0aXZlID0gIXRoaXMucGFuZWxTZXR0aW5nLmFjdGl2ZTtcbiAgICB9XG5cbiAgICB0b2dnbGVUcmlhbE9uQ2hlY2soKSB7XG4gICAgICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1Jc1RyaWFsID0gIXRoaXMubUlzVHJpYWw7XG4gICAgICAgIGxldCBpc1RyYWlsID0gdGhpcy5tSXNUcmlhbDtcbiAgICAgICAgaWYgKGlzVHJhaWwpIHtcbiAgICAgICAgICAgIHRoaXMuYnRuUGxheVJlYWwubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5idG5QbGF5VHJ5Lm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxibExpbmUuc3RyaW5nID0gXCIyNVwiO1xuICAgICAgICAgICAgdGhpcy5sYmxCZXQuc3RyaW5nID0gXCIxMDBcIjtcbiAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsVG90YWxCZXQsIDI1MDAsIDAuMywgKG4pID0+IHRoaXMubW9uZXlUb0sobikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idG5QbGF5UmVhbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5idG5QbGF5VHJ5Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubGJsTGluZS5zdHJpbmcgPSB0aGlzLmFyckxpbmVTZWxlY3QubGVuZ3RoLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmxibEJldC5zdHJpbmcgPSB0aGlzLmxpc3RCZXRMYWJlbFt0aGlzLmJldElkeF07XG4gICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxibFRvdGFsQmV0LCB0aGlzLmFyckxpbmVTZWxlY3QubGVuZ3RoICogdGhpcy5saXN0QmV0W3RoaXMuYmV0SWR4XSwgMC4zLCAobikgPT4gdGhpcy5tb25leVRvSyhuKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVBdXRvT25DaGVjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpc1RyYWlsID0gdGhpcy5tSXNUcmlhbDtcbiAgICAgICAgaWYgKHRoaXMudG9nZ2xlQXV0by5pc0NoZWNrZWQgJiYgaXNUcmFpbCkge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVBdXRvLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfc2xvdF9lcnJvcicpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50b2dnbGVBdXRvLmlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5zcGluKCk7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUJvb3N0LmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVCb29zdC5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNTcGluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVuYWJsZWRBbGxCdXR0b25zKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlQm9vc3RPbkNoZWNrKCkge1xuICAgICAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlzVHJhaWwgPSB0aGlzLm1Jc1RyaWFsO1xuICAgICAgICBpZiAodGhpcy50b2dnbGVCb29zdC5pc0NoZWNrZWQgJiYgaXNUcmFpbCkge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVCb29zdC5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Nsb3RfZXJyb3InKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudG9nZ2xlQm9vc3QuaXNDaGVja2VkKSB7XG4gICAgICAgICAgICB0aGlzLnNwaW4oKTtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQXV0by5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQXV0by5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNTcGluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVuYWJsZWRBbGxCdXR0b25zKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9tdXNpYyBzZXR0aW5nXG5cbiAgICBwcml2YXRlIHNvdW5kSW5pdCgpIHtcbiAgICAgICAgLy8gbXVzaWNTYXZlIDogICAwID09IE9GRiAsIDEgPT0gT05cbiAgICAgICAgdmFyIG11c2ljU2F2ZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm11c2ljX1Nsb3RfN1wiKTtcbiAgICAgICAgaWYgKG11c2ljU2F2ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLm11c2ljU2xvdFN0YXRlID0gcGFyc2VJbnQobXVzaWNTYXZlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubXVzaWNTbG90U3RhdGUgPSAxO1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXVzaWNfU2xvdF83XCIsIFwiMVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNvdW5kU2F2ZSA6ICAgMCA9PSBPRkYgLCAxID09IE9OXG4gICAgICAgIHZhciBzb3VuZFNhdmUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzb3VuZF9TbG90XzdcIik7XG4gICAgICAgIGlmIChzb3VuZFNhdmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zb3VuZFNsb3RTdGF0ZSA9IHBhcnNlSW50KHNvdW5kU2F2ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNvdW5kU2xvdFN0YXRlID0gMTtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNvdW5kX1Nsb3RfN1wiLCBcIjFcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5tdXNpY1Nsb3RTdGF0ZSA9PSAwKSB7XG4gICAgICAgICAgICAvL3RoaXMubXVzaWNPZmYuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vdGhpcy5tdXNpY09mZi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDApIHtcbiAgICAgICAgICAgIC8vdGhpcy5zb3VuZE9mZi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy90aGlzLnNvdW5kT2ZmLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubXVzaWNTbG90U3RhdGUgPT0gMSkge1xuXG4gICAgICAgICAgICB0aGlzLnJlbW90ZU11c2ljQmFja2dyb3VuZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLnNvdW5kQmcsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldHRpbmdNdXNpYygpIHtcbiAgICAgICAgLy90aGlzLm11c2ljT2ZmLmFjdGl2ZSA9ICF0aGlzLm11c2ljT2ZmLmFjdGl2ZTtcbiAgICAgICAgaWYgKCF0aGlzLnRvZ2dsZ2VNdXNpYy5pc0NoZWNrZWQpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5yZW1vdGVNdXNpY0JhY2tncm91bmQpO1xuICAgICAgICAgICAgdGhpcy5tdXNpY1Nsb3RTdGF0ZSA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlbW90ZU11c2ljQmFja2dyb3VuZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLnNvdW5kQmcsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5tdXNpY1Nsb3RTdGF0ZSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXVzaWNfU2xvdF83XCIsIFwiXCIgKyB0aGlzLm11c2ljU2xvdFN0YXRlKTtcbiAgICB9XG4gICAgc2V0dGluZ1NvdW5kKCkge1xuICAgICAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnRvZ2dsZVNvdW5kLmlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5zb3VuZFNsb3RTdGF0ZSA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHRoaXMuc291bmRTbG90U3RhdGUgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXVzaWNfU2xvdF83XCIsIFwiXCIgKyB0aGlzLnNvdW5kU2xvdFN0YXRlKTtcbiAgICB9XG4gICAgY2hhbmdlQWxsSXRlbVRvRGFyayhzdGF0ZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmVlbHMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY29sID0gdGhpcy5yZWVscy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sLmNoaWxkcmVuQ291bnQ7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gY29sLmNoaWxkcmVuW2pdO1xuICAgICAgICAgICAgICAgIGxldCBzcHJpdGUgPSBpdGVtLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuU3ByaXRlKTtcbiAgICAgICAgICAgICAgICBsZXQgc3BpbmUgPSBpdGVtLmdldENvbXBvbmVudEluQ2hpbGRyZW4oc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgICAgIHNwaW5lLm5vZGUuY29sb3IgPSBzdGF0ZSA/IGNjLkNvbG9yLkdSQVkgOiBjYy5Db2xvci5XSElURTtcbiAgICAgICAgICAgICAgICBzcHJpdGUubm9kZS5jb2xvciA9IHN0YXRlID8gY2MuQ29sb3IuR1JBWSA6IGNjLkNvbG9yLldISVRFO1xuICAgICAgICAgICAgICAgIHNwaW5lLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc3ByaXRlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGFjdEhpc3RvcnlKYWNrcG90KCkge1xuICAgICAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1Jc1RyaWFsKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Nsb3RfZXJyb3InKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucG9wdXBKYWNrcG90SGlzdG9yeSA9PSBudWxsKSB7XG4gICAgICAgICAgICBCdW5kbGVDb250cm9sLmxvYWRQcmVmYWJHYW1lKFwiU2xvdDZcIiwgXCJwcmVmYWJzL1BvcHVwSmFja3BvdEhpc3RvcnlcIiwgKGZpbmlzaCwgdG90YWwpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9hZGluZzEnKSArIHBhcnNlSW50KChmaW5pc2ggLyB0b3RhbCkgKiAxMDApICsgXCIlXCIpO1xuICAgICAgICAgICAgfSwgcHJlZmFiID0+IHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBKYWNrcG90SGlzdG9yeSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYikuZ2V0Q29tcG9uZW50KFwiU2xvdDYuUG9wdXBKYWNrcG90SGlzdG9yeVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwSmFja3BvdEhpc3Rvcnkubm9kZS5wYXJlbnQgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBKYWNrcG90SGlzdG9yeS5zaG93KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBKYWNrcG90SGlzdG9yeS5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWN0SGlzdG9yeSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tSXNUcmlhbCkge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9zbG90X2Vycm9yJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBvcHVwSGlzdG9yeSA9PSBudWxsKSB7XG4gICAgICAgICAgICBCdW5kbGVDb250cm9sLmxvYWRQcmVmYWJHYW1lKFwiU2xvdDZcIiwgXCJwcmVmYWJzL1BvcHVwSGlzdG9yeVwiLCAoZmluaXNoLCB0b3RhbCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEFwcC5pbnN0YW5jZS5zaG93RXJyTG9hZGluZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9sb2FkaW5nMScpICsgcGFyc2VJbnQoKGZpbmlzaCAvIHRvdGFsKSAqIDEwMCkgKyBcIiVcIik7XG4gICAgICAgICAgICB9LCBwcmVmYWIgPT4ge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEhpc3RvcnkgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChQb3B1cEhpc3RvcnkpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBIaXN0b3J5Lm5vZGUucGFyZW50ID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZShcIkNhbnZhc1wiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwSGlzdG9yeS5zaG93KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBIaXN0b3J5LnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhY3RTZWxlY3RsaW5lKCkge1xuICAgICAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1Jc1RyaWFsKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Nsb3RfZXJyb3InKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucG9wdXBTZWxlY3RMaW5lID09IG51bGwpIHtcbiAgICAgICAgICAgIEJ1bmRsZUNvbnRyb2wubG9hZFByZWZhYkdhbWUoXCJTbG90NlwiLCBcInByZWZhYnMvUG9wdXBTZWxlY3RMaW5lXCIsIChmaW5pc2gsIHRvdGFsKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQXBwLmluc3RhbmNlLnNob3dFcnJMb2FkaW5nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvYWRpbmcxJykgKyBwYXJzZUludCgoZmluaXNoIC8gdG90YWwpICogMTAwKSArIFwiJVwiKTtcbiAgICAgICAgICAgIH0sIHByZWZhYiA9PiB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwU2VsZWN0TGluZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYikuZ2V0Q29tcG9uZW50KFBvcHVwU2VsZWN0TGluZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cFNlbGVjdExpbmUubm9kZS5wYXJlbnQgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBTZWxlY3RMaW5lLnNob3coKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwU2VsZWN0TGluZS5vblNlbGVjdGVkQ2hhbmdlZCA9IChsaW5lcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFyckxpbmVTZWxlY3QgPSBsaW5lcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxMaW5lLnN0cmluZyA9IHRoaXMuYXJyTGluZVNlbGVjdC5sZW5ndGgudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxUb3RhbEJldCwgdGhpcy5hcnJMaW5lU2VsZWN0Lmxlbmd0aCAqIHRoaXMubGlzdEJldFt0aGlzLmJldElkeF0sIDAuMywgKG4pID0+IHsgcmV0dXJuIHRoaXMubW9uZXlUb0sobikgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwU2VsZWN0TGluZS5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWN0U2hvd0JvbnVzKGlzVHJpYWwsIGRhdGFIYWlTYW8sIGNiKSB7XG4gICAgICAgIGlmICh0aGlzLnBvcHVwQm9udXMgPT0gbnVsbCkge1xuICAgICAgICAgICAgQnVuZGxlQ29udHJvbC5sb2FkUHJlZmFiR2FtZShcIlNsb3Q2XCIsIFwicHJlZmFicy9Qb3B1cEJvbnVzXCIsIChmaW5pc2gsIHRvdGFsKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQXBwLmluc3RhbmNlLnNob3dFcnJMb2FkaW5nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvYWRpbmcxJykgKyBwYXJzZUludCgoZmluaXNoIC8gdG90YWwpICogMTAwKSArIFwiJVwiKTtcbiAgICAgICAgICAgIH0sIHByZWZhYiA9PiB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwQm9udXMgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChQb3B1cEJvbnVzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwQm9udXMubm9kZS5wYXJlbnQgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBCb251cy5zaG93Qm9udXMoaXNUcmlhbCwgZGF0YUhhaVNhbywgdGhpcywgY2IpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBCb251cy5zaG93Qm9udXMoaXNUcmlhbCwgZGF0YUhhaVNhbywgdGhpcywgY2IpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19