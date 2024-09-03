"use strict";
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