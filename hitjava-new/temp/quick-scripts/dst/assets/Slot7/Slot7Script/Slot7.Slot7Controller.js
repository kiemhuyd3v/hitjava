
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot7/Slot7Script/Slot7.Slot7Controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '95313HMFyVLYqrCzBqlfoxX', 'Slot7.Slot7Controller');
// Slot7/Slot7Script/Slot7.Slot7Controller.ts

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
var Slot7_Cmd_1 = require("./Slot7.Cmd");
var Configs_1 = require("../../Loading/src/Configs");
var Slot7_PopupSelectLine_1 = require("./Slot7.PopupSelectLine");
var Slot7_PopupBonus_1 = require("./Slot7.PopupBonus");
var Slot7_TrialResults_1 = require("./Slot7.TrialResults");
var Slot7_Lobby_1 = require("./Slot7.Lobby");
var Slot7_Item_1 = require("./Slot7.Item");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
var SlotNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/SlotNetworkClient");
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
var Slot7Controller = /** @class */ (function (_super) {
    __extends(Slot7Controller, _super);
    function Slot7Controller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeCoin = null;
        _this.mSlotLobby = null;
        _this.preItem = null;
        _this.mHeightItem = 180;
        _this.mWidthItem = 180;
        // @property([cc.SpriteFrame])
        // sprFrameItems: cc.SpriteFrame[] = [];
        // @property([cc.SpriteFrame])
        // sprFrameItemsBlur: cc.SpriteFrame[] = [];
        _this.skeSpin = null;
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
        _this.particleJackpt = null;
        _this.effectBonus = null;
        _this.effectFreeSpin = null;
        _this.popupSelectLine = null;
        _this.popupBonus = null;
        // //music setting
        // @property(cc.Node)
        // musicOff: cc.Node = null;
        // @property(cc.Node)
        // soundOff: cc.Node = null;
        _this.soundSpinMis = null;
        _this.soundSpinWin = null;
        _this.soundBigWin = null;
        _this.soundJackpot = null;
        _this.soundBonus = null;
        _this.soundClick = null;
        _this.soundSpin = null;
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
            [0, 6, 12, 8, 4],
            [10, 6, 2, 8, 14],
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
            [5, 11, 2, 13, 9],
            [5, 1, 12, 3, 9],
            [0, 11, 2, 13, 4],
            [10, 1, 12, 3, 14],
        ];
        _this.lastSpinRes = null;
        _this.columnsWild = [];
        _this.musicSlotState = null;
        _this.soundSlotState = null;
        _this.remoteMusicBackground = null;
        _this.mIsTrial = false;
        _this.mutipleJpNode = null;
        return _this;
    }
    Slot7Controller.prototype.start = function () {
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
                var item = itemNode.getComponent(Slot7_Item_1.default);
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
            _this.mSlotLobby.onBtnBack();
        }, this);
        //listenner client - server
        SlotNetworkClient_1.default.getInstance().addListener(function (data) {
            var inpacket = new Network_InPacket_1.default(data);
            switch (inpacket.getCmdId()) {
                case Slot7_Cmd_1.default.Code.FREE_DAI_LY:
                    {
                        if (!_this.mIsTrial) {
                            var res_1 = new Slot7_Cmd_1.default.ReceiveFreeDaiLy(data);
                            cc.log("init info Slot7:" + JSON.stringify(res_1));
                            _this.daiLyFreeSpin = res_1.freeSpin;
                        }
                    }
                    break;
                case Slot7_Cmd_1.default.Code.DATE_X2:
                    {
                        var res_2 = new Slot7_Cmd_1.default.ReceiveDateX2(data);
                        cc.log("init info Slot7:" + JSON.stringify(res_2));
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
                case Slot7_Cmd_1.default.Code.UPDATE_POT:
                    var res = new Slot7_Cmd_1.default.ReceiveUpdatePot(data);
                    Tween_1.default.numberTo(_this.lblJackpot, res.jackpot, 0.3);
                    break;
                case Slot7_Cmd_1.default.Code.UPDATE_JACKPOT_SLOTS:
                    _this.mSlotLobby.onUpdateJackpot(data);
                    break;
                case Slot7_Cmd_1.default.Code.PLAY:
                    {
                        var res_3 = new Slot7_Cmd_1.default.ReceivePlay(data);
                        // cc.log(res);
                        _this.onSpinResult(res_3);
                    }
                    break;
                default:
                    break;
            }
        }, this);
        SlotNetworkClient_1.default.getInstance().sendCheck(new Slot7_Cmd_1.default.ReqSubcribeHallSlot());
        //cc.log("Slot3Controller started");
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
            Tween_1.default.numberTo(_this.lblTotalBet, _this.arrLineSelect.length * _this.listBet[_this.betIdx], 0.3, function (n) {
                return _this.moneyToK(n);
            });
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
        //cc.log("Slot3Controller started");
        this.mSlotLobby.init(this);
        this.mSlotLobby.node.active = true;
        this.btnPlayReal.node.active = false;
        this.btnPlayTry.node.active = true;
        //this.initMutipleJPNode();
    };
    Slot7Controller.prototype.initMutipleJPNode = function () {
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
    Slot7Controller.prototype.showCoins = function (prize) {
        var number = prize / 20000;
        if (number <= 10)
            number = 10;
        else if (number >= 30)
            number = 30;
        App_1.default.instance.showCoins(number, this.lblWinNow.node, this.nodeCoin);
    };
    Slot7Controller.prototype.onJoinRoom = function () {
        this.lblBet.string = this.listBetLabel[this.betIdx];
        var totalbet = this.arrLineSelect.length * this.listBet[this.betIdx];
        Tween_1.default.numberTo(this.lblTotalBet, totalbet, 0.3);
        this.skeSpin.animation = "iat";
        this.skeSpin.loop = true;
    };
    Slot7Controller.prototype.showToast = function (msg) {
        var _this = this;
        this.toast.getComponentInChildren(cc.Label).string = msg;
        this.toast.stopAllActions();
        this.toast.active = true;
        this.toast.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function () {
            _this.toast.active = false;
        })));
    };
    Slot7Controller.prototype.moneyToK = function (money) {
        // if (money < 10000) {
        //     return money.toString();
        // }
        // money = parseInt((money / 1000).toString());
        return money.toString();
    };
    Slot7Controller.prototype.setEnabledAllButtons = function (enabled) {
        this.btnSpin.interactable = enabled;
        this.btnBack.interactable = enabled;
        // this.btnBetUp.interactable = enabled;
        // this.btnBetDown.interactable = enabled;
        this.btnLine.interactable = enabled;
        this.btnPlayTry.interactable = enabled;
        this.btnPlayReal.interactable = enabled;
        //this.toggleTrial.interactable = enabled;
    };
    Slot7Controller.prototype.stopAllEffects = function () {
        this.effectJackpot.stopAllActions();
        this.effectJackpot.active = false;
        this.effectBigWin.stopAllActions();
        this.effectBigWin.active = false;
        this.effectFreeSpin.stopAllActions();
        this.effectFreeSpin.active = false;
    };
    Slot7Controller.prototype.stopShowLinesWin = function () {
        this.linesWin.stopAllActions();
        for (var i = 0; i < this.linesWin.childrenCount; i++) {
            this.linesWin.children[i].active = false;
        }
        for (var i = 0; i < this.iconWildColumns.childrenCount; i++) {
            this.iconWildColumns.children[i].active = false;
        }
        this.stopAllItemEffect();
    };
    Slot7Controller.prototype.stopAllItemEffect = function () {
        for (var i = 0; i < this.reels.childrenCount; i++) {
            var children = this.reels.children[i].children; // ???
            children[0].stopAllActions();
            children[1].stopAllActions();
            children[2].stopAllActions();
            children[0].runAction(cc.scaleTo(0.1, 1));
            children[1].runAction(cc.scaleTo(0.1, 1));
            children[2].runAction(cc.scaleTo(0.1, 1));
        }
    };
    Slot7Controller.prototype.spin = function () {
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
            this.stopAllEffects();
            this.stopShowLinesWin();
            this.setEnabledAllButtons(false);
            this.skeSpin.animation = "iat2";
            this.skeSpin.loop = true;
            SlotNetworkClient_1.default.getInstance().send(new Slot7_Cmd_1.default.SendPlay(this.arrLineSelect.toString()));
        }
        else {
            this.isSpined = false;
            this.stopAllEffects();
            this.stopShowLinesWin();
            this.setEnabledAllButtons(false);
            this.skeSpin.animation = "iat2";
            this.skeSpin.loop = true;
            var rIdx = Utils_1.default.randomRangeInt(0, Slot7_TrialResults_1.default.results.length);
            this.onSpinResult(Slot7_TrialResults_1.default.results[rIdx]);
        }
    };
    Slot7Controller.prototype.stopSpin = function () {
        for (var i = 0; i < this.reels.childrenCount; i++) {
            var roll = this.reels.children[i];
            roll.stopAllActions();
            roll.setPosition(cc.v2(roll.getPosition().x, 0));
        }
    };
    Slot7Controller.prototype.showLineWins = function () {
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
                        line.active = true;
                        var mLine = _this.mapLine[lineIdx];
                        var countItemWin = 0;
                        var fisrtItemId = matrix[mLine[0]];
                        for (var j = 0; j < mLine.length; j++) {
                            var itemId = matrix[mLine[j]];
                            if (fisrtItemId == itemId ||
                                parseInt(itemId) == _this.wildItemId ||
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
                            rolls[j].children[2 - itemRow].stopAllActions();
                            rolls[j].children[2 - itemRow].runAction(cc.repeatForever(cc.sequence(cc.scaleTo(0.2, 1.1), cc.scaleTo(0.2, 1))));
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
            if (_this.toggleBoost.isChecked || _this.toggleAuto.isChecked) {
                _this.spin();
            }
        }));
        this.linesWin.runAction(cc.sequence.apply(null, actions));
    };
    Slot7Controller.prototype.showWinCash = function (cash) {
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
    Slot7Controller.prototype.showEffectBigWin = function (cash, cb) {
        var _this = this;
        this.effectBigWin.stopAllActions();
        this.effectBigWin.active = true;
        this.effectBigWin
            .getComponentInChildren(sp.Skeleton)
            .setAnimation(0, "animation", false);
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
    Slot7Controller.prototype.showEffectFreeSpin = function (cb) {
        var _this = this;
        this.effectFreeSpin.stopAllActions();
        this.effectFreeSpin.active = true;
        this.effectFreeSpin
            .getComponentInChildren(sp.Skeleton)
            .setAnimation(0, "animation", false);
        this.effectFreeSpin.runAction(cc.sequence(cc.delayTime(1), cc.delayTime(3), cc.callFunc(function () {
            _this.effectFreeSpin.active = false;
            if (cb != null)
                cb();
        })));
    };
    Slot7Controller.prototype.showEffectJackpot = function (cash, cb) {
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
    Slot7Controller.prototype.showEffectBonus = function (cb) {
        var _this = this;
        this.effectBonus.stopAllActions();
        this.effectBonus.active = true;
        this.effectBonus
            .getComponentInChildren(sp.Skeleton)
            .setAnimation(0, "animation", false);
        this.effectBonus.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function () {
            _this.effectBonus.active = false;
            if (cb != null)
                cb();
        })));
    };
    Slot7Controller.prototype.onSpinResult = function (res) {
        var _this = this;
        this.stopSpin();
        cc.log("onSpinResult:" + JSON.stringify(res));
        var successResult = [0, 1, 2, 3, 4, 5, 6];
        //res.result == 5 //bonus
        //res.result == 0 //khong an
        //res.result == 1 //thang thuong
        //res.result == 2 //thang lon
        //res.result == 3 //no hu
        //res.result == 6 //thang cuc lon
        cc.log("saosao:" + (successResult.indexOf(res.result) === -1));
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
                .easing(cc.easeQuadraticActionInOut()), cc
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
                        var children = _this.reels.children[c].children;
                        children[2].getComponent(Slot7_Item_1.default).setId(_this.wildItemId);
                        children[1].getComponent(Slot7_Item_1.default).setId(_this.wildItemId);
                        children[0].getComponent(Slot7_Item_1.default).setId(_this.wildItemId);
                        // children[2].children[0].getComponent(cc.Sprite).spriteFrame = this.sprFrameItems[this.wildItemId];
                        // children[1].children[0].getComponent(cc.Sprite).spriteFrame = this.sprFrameItems[this.wildItemId];
                        // children[0].children[0].getComponent(cc.Sprite).spriteFrame = this.sprFrameItems[this.wildItemId];
                        _this.iconWildColumns.children[c].active = true;
                        _this.iconWildColumns.children[c].getComponent(sp.Skeleton).animation = "1";
                        _this.iconWildColumns.children[c].getComponent(sp.Skeleton).loop = false;
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
            })));
            //rool = reel
            roll.runAction(cc.sequence(cc.delayTime((0.47 + 0.2 * i) * timeScale), cc.callFunc(function () {
                var listItemNode = roll.children;
                // listItem[2].children[0].getComponent(cc.Sprite).spriteFrame = this.sprFrameItems[parseInt(matrix[i])];
                // listItem[1].children[0].getComponent(cc.Sprite).spriteFrame = this.sprFrameItems[parseInt(matrix[5 + i])];
                // listItem[0].children[0].getComponent(cc.Sprite).spriteFrame = this.sprFrameItems[parseInt(matrix[10 + i])];
                // listItem[listItem.length - 1].children[0].getComponent(cc.Sprite).spriteFrame = this.sprFrameItems[parseInt(matrix[i])];
                // listItem[listItem.length - 2].children[0].getComponent(cc.Sprite).spriteFrame = this.sprFrameItems[parseInt(matrix[5 + i])];
                // listItem[listItem.length - 3].children[0].getComponent(cc.Sprite).spriteFrame = this.sprFrameItems[parseInt(matrix[10 + i])];
                listItemNode[2].getComponent(Slot7_Item_1.default).setId(parseInt(matrix[i]));
                listItemNode[1]
                    .getComponent(Slot7_Item_1.default)
                    .setId(parseInt(matrix[5 + i]));
                listItemNode[0]
                    .getComponent(Slot7_Item_1.default)
                    .setId(parseInt(matrix[10 + i]));
                listItemNode[listItemNode.length - 1]
                    .getComponent(Slot7_Item_1.default)
                    .setId(parseInt(matrix[i]));
                listItemNode[listItemNode.length - 2]
                    .getComponent(Slot7_Item_1.default)
                    .setId(parseInt(matrix[5 + i]));
                listItemNode[listItemNode.length - 3]
                    .getComponent(Slot7_Item_1.default)
                    .setId(parseInt(matrix[10 + i]));
            })));
        };
        var this_1 = this;
        for (var i = 0; i < this.reels.childrenCount; i++) {
            _loop_2(i);
        }
    };
    Slot7Controller.prototype.spined = function () {
        var _this = this;
        this.skeSpin.animation = "iat";
        this.skeSpin.loop = true;
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
                        _this.popupBonus.showBonus(_this.mIsTrial ? 100 : _this.listBet[_this.betIdx], _this.lastSpinRes.haiSao, _this, function () {
                            _this.showLineWins();
                        });
                    });
                    break;
            }
        }
    };
    Slot7Controller.prototype.onBtnSoundTouchBonus = function () { };
    Slot7Controller.prototype.onBtnSoundSumary = function () { };
    Slot7Controller.prototype.actBack = function () {
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        SlotNetworkClient_1.default.getInstance().send(new Slot7_Cmd_1.default.SendUnSubcribe(this.betIdx));
        // cc.audioEngine.stopAll();
        // App.instance.loadScene("Lobby");
        this.mSlotLobby.node.active = true;
    };
    Slot7Controller.prototype.actHidden = function () {
        this.showToast(App_1.default.instance.getTextLang("txt_function_in_development"));
    };
    Slot7Controller.prototype.actBetUp = function () {
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
            SlotNetworkClient_1.default.getInstance().send(new Slot7_Cmd_1.default.SendChangeRoom(this.betIdx, ++this.betIdx));
            this.lblBet.string = this.listBetLabel[this.betIdx];
            Tween_1.default.numberTo(this.lblTotalBet, this.arrLineSelect.length * this.listBet[this.betIdx], 0.3, function (n) {
                return _this.moneyToK(n);
            });
        }
    };
    Slot7Controller.prototype.actBetDown = function () {
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
            SlotNetworkClient_1.default.getInstance().send(new Slot7_Cmd_1.default.SendChangeRoom(this.betIdx, --this.betIdx));
            this.lblBet.string = this.listBetLabel[this.betIdx];
            Tween_1.default.numberTo(this.lblTotalBet, this.arrLineSelect.length * this.listBet[this.betIdx], 0.3, function (n) {
                return _this.moneyToK(n);
            });
        }
    };
    Slot7Controller.prototype.actLine = function () {
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
    Slot7Controller.prototype.actSetting = function () {
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        this.panelSetting.active = !this.panelSetting.active;
    };
    Slot7Controller.prototype.toggleTrialOnCheck = function () {
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
    Slot7Controller.prototype.toggleAutoOnCheck = function () {
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
    Slot7Controller.prototype.toggleBoostOnCheck = function () {
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
    Slot7Controller.prototype.soundInit = function () {
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
    Slot7Controller.prototype.settingMusic = function () {
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
    Slot7Controller.prototype.settingSound = function () {
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
    __decorate([
        property(cc.Node)
    ], Slot7Controller.prototype, "nodeCoin", void 0);
    __decorate([
        property(Slot7_Lobby_1.default)
    ], Slot7Controller.prototype, "mSlotLobby", void 0);
    __decorate([
        property(cc.Prefab)
    ], Slot7Controller.prototype, "preItem", void 0);
    __decorate([
        property(cc.Integer)
    ], Slot7Controller.prototype, "mHeightItem", void 0);
    __decorate([
        property(cc.Integer)
    ], Slot7Controller.prototype, "mWidthItem", void 0);
    __decorate([
        property(sp.Skeleton)
    ], Slot7Controller.prototype, "skeSpin", void 0);
    __decorate([
        property(cc.Node)
    ], Slot7Controller.prototype, "reels", void 0);
    __decorate([
        property(cc.Node)
    ], Slot7Controller.prototype, "linesWin", void 0);
    __decorate([
        property(cc.Node)
    ], Slot7Controller.prototype, "iconWildColumns", void 0);
    __decorate([
        property(cc.Label)
    ], Slot7Controller.prototype, "lblJackpot", void 0);
    __decorate([
        property(cc.Label)
    ], Slot7Controller.prototype, "lblBet", void 0);
    __decorate([
        property(cc.Label)
    ], Slot7Controller.prototype, "lblLine", void 0);
    __decorate([
        property(cc.Label)
    ], Slot7Controller.prototype, "lblTotalBet", void 0);
    __decorate([
        property(cc.Label)
    ], Slot7Controller.prototype, "lblCoin", void 0);
    __decorate([
        property(cc.Label)
    ], Slot7Controller.prototype, "lblWinNow", void 0);
    __decorate([
        property(cc.Label)
    ], Slot7Controller.prototype, "lblFreeSpinCount", void 0);
    __decorate([
        property(cc.Toggle)
    ], Slot7Controller.prototype, "toggleAuto", void 0);
    __decorate([
        property(cc.Toggle)
    ], Slot7Controller.prototype, "toggleSound", void 0);
    __decorate([
        property(cc.Toggle)
    ], Slot7Controller.prototype, "togglgeMusic", void 0);
    __decorate([
        property(cc.Toggle)
    ], Slot7Controller.prototype, "toggleBoost", void 0);
    __decorate([
        property(cc.Button)
    ], Slot7Controller.prototype, "btnSpin", void 0);
    __decorate([
        property(cc.Button)
    ], Slot7Controller.prototype, "btnBack", void 0);
    __decorate([
        property(cc.Button)
    ], Slot7Controller.prototype, "btnPlayTry", void 0);
    __decorate([
        property(cc.Button)
    ], Slot7Controller.prototype, "btnPlayReal", void 0);
    __decorate([
        property(cc.Button)
    ], Slot7Controller.prototype, "btnLine", void 0);
    __decorate([
        property(cc.Node)
    ], Slot7Controller.prototype, "toast", void 0);
    __decorate([
        property(cc.Node)
    ], Slot7Controller.prototype, "panelSetting", void 0);
    __decorate([
        property(cc.Node)
    ], Slot7Controller.prototype, "effectWinCash", void 0);
    __decorate([
        property(cc.Node)
    ], Slot7Controller.prototype, "effectBigWin", void 0);
    __decorate([
        property(cc.Node)
    ], Slot7Controller.prototype, "effectJackpot", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], Slot7Controller.prototype, "particleJackpt", void 0);
    __decorate([
        property(cc.Node)
    ], Slot7Controller.prototype, "effectBonus", void 0);
    __decorate([
        property(cc.Node)
    ], Slot7Controller.prototype, "effectFreeSpin", void 0);
    __decorate([
        property(Slot7_PopupSelectLine_1.default)
    ], Slot7Controller.prototype, "popupSelectLine", void 0);
    __decorate([
        property(Slot7_PopupBonus_1.default)
    ], Slot7Controller.prototype, "popupBonus", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot7Controller.prototype, "soundSpinMis", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot7Controller.prototype, "soundSpinWin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot7Controller.prototype, "soundBigWin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot7Controller.prototype, "soundJackpot", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot7Controller.prototype, "soundBonus", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot7Controller.prototype, "soundClick", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot7Controller.prototype, "soundSpin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot7Controller.prototype, "soundBg", void 0);
    Slot7Controller = __decorate([
        ccclass
    ], Slot7Controller);
    return Slot7Controller;
}(cc.Component));
exports.default = Slot7Controller;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDdcXFNsb3Q3U2NyaXB0XFxTbG90Ny5TbG90N0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQThCO0FBRTlCLHFEQUFnRDtBQUNoRCxpRUFBc0Q7QUFDdEQsdURBQTRDO0FBQzVDLDJEQUFnRDtBQUNoRCw2Q0FBdUM7QUFDdkMsMkNBQXFDO0FBQ3JDLGlFQUE0RDtBQUM1RCw2RkFBd0Y7QUFDeEYscUVBQWdFO0FBQ2hFLHFFQUFnRTtBQUNoRSw2RkFBZ0Y7QUFDaEYsK0ZBQTBGO0FBRTFGLElBQVcsUUFPVjtBQVBELFdBQVcsUUFBUTtJQUNqQix1Q0FBUSxDQUFBO0lBQ1IscUNBQU8sQ0FBQTtJQUNQLDJDQUFVLENBQUE7SUFDViw2Q0FBVyxDQUFBO0lBQ1gsK0NBQVksQ0FBQTtJQUNaLHlDQUFTLENBQUE7QUFDWCxDQUFDLEVBUFUsUUFBUSxLQUFSLFFBQVEsUUFPbEI7QUFFSyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQW1vQ0M7UUFqb0NDLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsZ0JBQVUsR0FBZSxJQUFJLENBQUM7UUFHOUIsYUFBTyxHQUFjLElBQUksQ0FBQztRQUcxQixpQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUcxQixnQkFBVSxHQUFXLEdBQUcsQ0FBQztRQUV6Qiw4QkFBOEI7UUFDOUIsd0NBQXdDO1FBQ3hDLDhCQUE4QjtRQUM5Qiw0Q0FBNEM7UUFHNUMsYUFBTyxHQUFnQixJQUFJLENBQUM7UUFHNUIsV0FBSyxHQUFZLElBQUksQ0FBQyxDQUFDLE9BQU87UUFFOUIscUJBQXFCO1FBQ3JCLGdDQUFnQztRQUVoQyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLHFCQUFlLEdBQVksSUFBSSxD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QUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNqQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ2pCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNqQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNqQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDbEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENB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QUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzt5REFDQztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7dURBQ0Q7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO3VEQUNEO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztzREFDRjtJQUsvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7b0RBQ0o7SUEvSFYsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQW1vQ25DO0lBQUQsc0JBQUM7Q0Fub0NELEFBbW9DQyxDQW5vQzRDLEVBQUUsQ0FBQyxTQUFTLEdBbW9DeEQ7a0JBbm9Db0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbWQgZnJvbSBcIi4vU2xvdDcuQ21kXCI7XG5cbmltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgUG9wdXBTZWxlY3RMaW5lIGZyb20gXCIuL1Nsb3Q3LlBvcHVwU2VsZWN0TGluZVwiO1xuaW1wb3J0IFBvcHVwQm9udXMgZnJvbSBcIi4vU2xvdDcuUG9wdXBCb251c1wiO1xuaW1wb3J0IFRyaWFsUmVzdWx0cyBmcm9tIFwiLi9TbG90Ny5UcmlhbFJlc3VsdHNcIjtcbmltcG9ydCBTbG90N0xvYmJ5IGZyb20gXCIuL1Nsb3Q3LkxvYmJ5XCI7XG5pbXBvcnQgU2xvdDdJdGVtIGZyb20gXCIuL1Nsb3Q3Lkl0ZW1cIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgQnJvYWRjYXN0UmVjZWl2ZXIgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQnJvYWRjYXN0UmVjZWl2ZXJcIjtcbmltcG9ydCBUd2VlbiBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9Ud2VlblwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgSW5QYWNrZXQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLkluUGFja2V0XCI7XG5pbXBvcnQgU2xvdE5ldHdvcmtDbGllbnQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9TbG90TmV0d29ya0NsaWVudFwiO1xuXG5jb25zdCBlbnVtIFRZUEVfV0lOIHtcbiAgTUlTUyA9IDAsXG4gIFdJTiA9IDEsXG4gIEJJR1dJTiA9IDIsXG4gIEpBQ0tQT1QgPSAzLFxuICBTVVBFUldJTiA9IDQsXG4gIEJPTlVTID0gNSxcbn1cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3Q3Q29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBub2RlQ29pbjogY2MuTm9kZSA9IG51bGw7XG5cbiAgQHByb3BlcnR5KFNsb3Q3TG9iYnkpXG4gIG1TbG90TG9iYnk6IFNsb3Q3TG9iYnkgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gIHByZUl0ZW06IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gIG1IZWlnaHRJdGVtOiBudW1iZXIgPSAxODA7XG5cbiAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gIG1XaWR0aEl0ZW06IG51bWJlciA9IDE4MDtcblxuICAvLyBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgLy8gc3ByRnJhbWVJdGVtczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuICAvLyBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgLy8gc3ByRnJhbWVJdGVtc0JsdXI6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcblxuICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXG4gIHNrZVNwaW46IHNwLlNrZWxldG9uID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgcmVlbHM6IGNjLk5vZGUgPSBudWxsOyAvLyByZWVsXG5cbiAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gIC8vIGl0ZW1UZW1wbGF0ZTogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBsaW5lc1dpbjogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBpY29uV2lsZENvbHVtbnM6IGNjLk5vZGUgPSBudWxsOyAvLyBtYW5nIGNhYyBpdGVtIGV4cGFuZCB3aWxkXG5cbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBsYmxKYWNrcG90OiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgbGJsQmV0OiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgbGJsTGluZTogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGxibFRvdGFsQmV0OiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgbGJsQ29pbjogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGxibFdpbk5vdzogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGxibEZyZWVTcGluQ291bnQ6IGNjLkxhYmVsID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuVG9nZ2xlKVxuICB0b2dnbGVBdXRvOiBjYy5Ub2dnbGUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXG4gIHRvZ2dsZVNvdW5kOiBjYy5Ub2dnbGUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXG4gIHRvZ2dsZ2VNdXNpYzogY2MuVG9nZ2xlID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuVG9nZ2xlKVxuICB0b2dnbGVCb29zdDogY2MuVG9nZ2xlID0gbnVsbDtcbiAgLy8gQHByb3BlcnR5KGNjLlRvZ2dsZSlcbiAgLy8gdG9nZ2xlVHJpYWw6IGNjLlRvZ2dsZSA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgYnRuU3BpbjogY2MuQnV0dG9uID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgYnRuQmFjazogY2MuQnV0dG9uID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgYnRuUGxheVRyeTogY2MuQnV0dG9uID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgYnRuUGxheVJlYWw6IGNjLkJ1dHRvbiA9IG51bGw7XG4gIC8vIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gIC8vIGJ0bkJldFVwOiBjYy5CdXR0b24gPSBudWxsO1xuICAvLyBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAvLyBidG5CZXREb3duOiBjYy5CdXR0b24gPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICBidG5MaW5lOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICB0b2FzdDogY2MuTm9kZSA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHBhbmVsU2V0dGluZzogY2MuTm9kZSA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGVmZmVjdFdpbkNhc2g6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgZWZmZWN0QmlnV2luOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGVmZmVjdEphY2twb3Q6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuUGFydGljbGVTeXN0ZW0pXG4gIHBhcnRpY2xlSmFja3B0OiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBlZmZlY3RCb251czogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBlZmZlY3RGcmVlU3BpbjogY2MuTm9kZSA9IG51bGw7XG5cbiAgQHByb3BlcnR5KFBvcHVwU2VsZWN0TGluZSlcbiAgcG9wdXBTZWxlY3RMaW5lOiBQb3B1cFNlbGVjdExpbmUgPSBudWxsO1xuICBAcHJvcGVydHkoUG9wdXBCb251cylcbiAgcG9wdXBCb251czogUG9wdXBCb251cyA9IG51bGw7XG5cbiAgLy8gLy9tdXNpYyBzZXR0aW5nXG4gIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAvLyBtdXNpY09mZjogY2MuTm9kZSA9IG51bGw7XG5cbiAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gIC8vIHNvdW5kT2ZmOiBjYy5Ob2RlID0gbnVsbDtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgc291bmRTcGluTWlzOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgc291bmRTcGluV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgc291bmRCaWdXaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICBzb3VuZEphY2twb3Q6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICBzb3VuZEJvbnVzOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgc291bmRDbGljazogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gIHNvdW5kU3BpbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAvL2VuZCBtdXNpYyBzZXR0aW5nXG5cbiAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gIHNvdW5kQmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIHByaXZhdGUgY3VycmVudE51bWJlckZyZWVTcGluID0gMDtcbiAgcHJpdmF0ZSBkYWlMeUZyZWVTcGluID0gMDtcbiAgcHJpdmF0ZSByb2xsU3RhcnRJdGVtQ291bnQgPSAxNTtcbiAgcHJpdmF0ZSByb2xsQWRkSXRlbUNvdW50ID0gMTA7XG4gIHByaXZhdGUgc3BpbkR1cmF0aW9uID0gMS4yO1xuICBwcml2YXRlIGFkZFNwaW5EdXJhdGlvbiA9IDAuMztcbiAgLy9wcml2YXRlIGl0ZW1IZWlnaHQgPSAwO1xuICBwdWJsaWMgYmV0SWR4ID0gLTE7XG4gIHByaXZhdGUgbGlzdEJldCA9IFsxMDAsIDEwMDAsIDEwMDAwXTtcbiAgcHJpdmF0ZSBsaXN0QmV0TGFiZWwgPSBbXCIxMDBcIiwgXCIxMDAwXCIsIFwiMTAwMDBcIl07XG4gIHByaXZhdGUgYXJyTGluZVNlbGVjdCA9IFtcbiAgICAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSwgMjAsIDIxLFxuICAgIDIyLCAyMywgMjQsIDI1LFxuICBdO1xuICBwcml2YXRlIGlzU3BpbmVkID0gdHJ1ZTtcbiAgcHJpdmF0ZSByZWFkb25seSB3aWxkSXRlbUlkID0gMjtcbiAgcHJpdmF0ZSByZWFkb25seSBtYXBMaW5lID0gW1xuICAgIFs1LCA2LCA3LCA4LCA5XSwgLy8xXG4gICAgWzAsIDEsIDIsIDMsIDRdLCAvLzJcbiAgICBbMTAsIDExLCAxMiwgMTMsIDE0XSwgLy8zXG4gICAgWzAsIDYsIDEyLCA4LCA0XSwgLy80XG4gICAgWzEwLCA2LCAyLCA4LCAxNF0sIC8vNVxuICAgIFs1LCAxLCAyLCAzLCA5XSwgLy82XG4gICAgWzUsIDExLCAxMiwgMTMsIDldLCAvLzdcbiAgICBbMCwgMSwgNywgMTMsIDE0XSwgLy84XG4gICAgWzEwLCAxMSwgNywgMywgNF0sIC8vOVxuICAgIFs1LCAxMSwgNywgMywgOV0sIC8vMTBcbiAgICBbNSwgMSwgNywgMTMsIDldLCAvLzExXG4gICAgWzAsIDYsIDcsIDgsIDRdLCAvLzEyXG4gICAgWzEwLCA2LCA3LCA4LCAxNF0sIC8vMTNcbiAgICBbMCwgNiwgMiwgOCwgNF0sIC8vMTRcbiAgICBbMTAsIDYsIDEyLCA4LCAxNF0sIC8vMTVcbiAgICBbNSwgNiwgMiwgOCwgOV0sIC8vMTZcbiAgICBbNSwgNiwgMTIsIDgsIDldLCAvLzE3XG4gICAgWzAsIDEsIDEyLCAzLCA0XSwgLy8xOFxuICAgIFsxMCwgMTEsIDIsIDEzLCAxNF0sIC8vMTlcbiAgICBbMCwgMTEsIDEyLCAxMywgNF0sIC8vMjBcbiAgICBbMTAsIDEsIDIsIDMsIDE0XSwgLy8yMVxuICAgIFs1LCAxMSwgMiwgMTMsIDldLCAvLzIyXG4gICAgWzUsIDEsIDEyLCAzLCA5XSwgLy8yM1xuICAgIFswLCAxMSwgMiwgMTMsIDRdLCAvLzI0XG4gICAgWzEwLCAxLCAxMiwgMywgMTRdLCAvLzI1XG4gIF07XG4gIHByaXZhdGUgbGFzdFNwaW5SZXM6IGNtZC5SZWNlaXZlUGxheSA9IG51bGw7XG4gIHByaXZhdGUgY29sdW1uc1dpbGQgPSBbXTtcblxuICBwcml2YXRlIG11c2ljU2xvdFN0YXRlID0gbnVsbDtcbiAgcHVibGljIHNvdW5kU2xvdFN0YXRlID0gbnVsbDtcbiAgcHJpdmF0ZSByZW1vdGVNdXNpY0JhY2tncm91bmQgPSBudWxsO1xuICBwcml2YXRlIG1Jc1RyaWFsID0gZmFsc2U7XG4gIG11dGlwbGVKcE5vZGUgPSBudWxsO1xuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMuc291bmRJbml0KCk7XG4gICAgdGhpcy5jdXJyZW50TnVtYmVyRnJlZVNwaW4gPSAwO1xuICAgIC8vdGhpcy5pdGVtSGVpZ2h0ID0gdGhpcy5pdGVtVGVtcGxhdGUuaGVpZ2h0O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yZWVscy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgIGxldCByZWVsID0gdGhpcy5yZWVscy5jaGlsZHJlbltpXTtcbiAgICAgIGxldCBjb3VudCA9IHRoaXMucm9sbFN0YXJ0SXRlbUNvdW50ICsgaSAqIHRoaXMucm9sbEFkZEl0ZW1Db3VudDtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY291bnQ7IGorKykge1xuICAgICAgICAvL2xldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtVGVtcGxhdGUpO1xuICAgICAgICBsZXQgaXRlbU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUl0ZW0pO1xuICAgICAgICBpdGVtTm9kZS5oZWlnaHQgPSB0aGlzLm1IZWlnaHRJdGVtO1xuICAgICAgICBpdGVtTm9kZS53aWR0aCA9IHRoaXMubVdpZHRoSXRlbTtcbiAgICAgICAgbGV0IGl0ZW06IFNsb3Q3SXRlbSA9IGl0ZW1Ob2RlLmdldENvbXBvbmVudChTbG90N0l0ZW0pO1xuICAgICAgICBpdGVtTm9kZS5wYXJlbnQgPSByZWVsO1xuICAgICAgICAvLyBpZiAoaiA+PSAzKSB7XG4gICAgICAgIC8vICAgICBpdGVtLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJGcmFtZUl0ZW1zQmx1cltVdGlscy5yYW5kb21SYW5nZUludCgwLCB0aGlzLnNwckZyYW1lSXRlbXNCbHVyLmxlbmd0aCldO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgaXRlbS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByRnJhbWVJdGVtc1tVdGlscy5yYW5kb21SYW5nZUludCgwLCB0aGlzLnNwckZyYW1lSXRlbXMubGVuZ3RoKV07XG4gICAgICAgIC8vIH1cbiAgICAgICAgbGV0IGlkID0gVXRpbHMucmFuZG9tUmFuZ2VJbnQoMCwgMTApO1xuICAgICAgICBpdGVtLnNldElkKGlkKTtcbiAgICAgICAgLy9pdGVtLmNoaWxkcmVuWzBdLndpZHRoPXRoaXMuaXRlbVRlbXBsYXRlLmNoaWxkcmVuWzBdLndpZHRoO1xuICAgICAgICAvL2l0ZW0uY2hpbGRyZW5bMF0uaGVpZ2h0PXRoaXMuaXRlbVRlbXBsYXRlLmNoaWxkcmVuWzBdLmhlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdGhpcy5pdGVtVGVtcGxhdGUucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgIC8vIHRoaXMuaXRlbVRlbXBsYXRlID0gbnVsbDtcblxuICAgIC8vZGFuZyBreSBraGkgbWF0IGtldCBub2kgdHUgZG9uZyBiYWNrXG4gICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5hZGRPbkNsb3NlKCgpID0+IHtcbiAgICAgIC8vdGhpcy5hY3RCYWNrKCk7XG4gICAgICB0aGlzLm1TbG90TG9iYnkub25CdG5CYWNrKCk7XG4gICAgfSwgdGhpcyk7XG5cbiAgICAvL2xpc3Rlbm5lciBjbGllbnQgLSBzZXJ2ZXJcbiAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmFkZExpc3RlbmVyKChkYXRhKSA9PiB7XG4gICAgICBsZXQgaW5wYWNrZXQgPSBuZXcgSW5QYWNrZXQoZGF0YSk7XG4gICAgICBzd2l0Y2ggKGlucGFja2V0LmdldENtZElkKCkpIHtcbiAgICAgICAgY2FzZSBjbWQuQ29kZS5GUkVFX0RBSV9MWTpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubUlzVHJpYWwpIHtcbiAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZUZyZWVEYWlMeShkYXRhKTtcbiAgICAgICAgICAgICAgY2MubG9nKFwiaW5pdCBpbmZvIFNsb3Q3OlwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICAgIHRoaXMuZGFpTHlGcmVlU3BpbiA9IHJlcy5mcmVlU3BpbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgY21kLkNvZGUuREFURV9YMjpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlRGF0ZVgyKGRhdGEpO1xuICAgICAgICAgICAgY2MubG9nKFwiaW5pdCBpbmZvIFNsb3Q3OlwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnROdW1iZXJGcmVlU3BpbiA9IHJlcy5mcmVlU3BpbiArIHRoaXMuZGFpTHlGcmVlU3BpbjtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnROdW1iZXJGcmVlU3BpbiA+IDApIHtcbiAgICAgICAgICAgICAgdGhpcy5sYmxGcmVlU3BpbkNvdW50Lm5vZGUucGFyZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgIHRoaXMubGJsRnJlZVNwaW5Db3VudC5zdHJpbmcgPSB0aGlzLmN1cnJlbnROdW1iZXJGcmVlU3BpbiArIFwiXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmxibEZyZWVTcGluQ291bnQubm9kZS5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGNtZC5Db2RlLlVQREFURV9QT1Q6XG4gICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZVVwZGF0ZVBvdChkYXRhKTtcbiAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxibEphY2twb3QsIHJlcy5qYWNrcG90LCAwLjMpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgY21kLkNvZGUuVVBEQVRFX0pBQ0tQT1RfU0xPVFM6XG4gICAgICAgICAgdGhpcy5tU2xvdExvYmJ5Lm9uVXBkYXRlSmFja3BvdChkYXRhKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBjbWQuQ29kZS5QTEFZOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVQbGF5KGRhdGEpO1xuICAgICAgICAgICAgLy8gY2MubG9nKHJlcyk7XG4gICAgICAgICAgICB0aGlzLm9uU3BpblJlc3VsdChyZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmRDaGVjayhuZXcgY21kLlJlcVN1YmNyaWJlSGFsbFNsb3QoKSk7XG5cbiAgICAvL2NjLmxvZyhcIlNsb3QzQ29udHJvbGxlciBzdGFydGVkXCIpO1xuXG4gICAgLy9TbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kU3ViY3JpYmUodGhpcy5iZXRJZHgpKTtcbiAgICB0aGlzLnN0b3BTaG93TGluZXNXaW4oKTtcblxuICAgIHRoaXMudG9hc3QuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5lZmZlY3RXaW5DYXNoLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuZWZmZWN0SmFja3BvdC5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmVmZmVjdEJpZ1dpbi5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnBhbmVsU2V0dGluZy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnBvcHVwU2VsZWN0TGluZS5vblNlbGVjdGVkQ2hhbmdlZCA9IChsaW5lcykgPT4ge1xuICAgICAgdGhpcy5hcnJMaW5lU2VsZWN0ID0gbGluZXM7XG4gICAgICB0aGlzLmxibExpbmUuc3RyaW5nID0gdGhpcy5hcnJMaW5lU2VsZWN0Lmxlbmd0aC50b1N0cmluZygpO1xuICAgICAgVHdlZW4ubnVtYmVyVG8oXG4gICAgICAgIHRoaXMubGJsVG90YWxCZXQsXG4gICAgICAgIHRoaXMuYXJyTGluZVNlbGVjdC5sZW5ndGggKiB0aGlzLmxpc3RCZXRbdGhpcy5iZXRJZHhdLFxuICAgICAgICAwLjMsXG4gICAgICAgIChuKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubW9uZXlUb0sobik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfTtcbiAgICB0aGlzLmxibFRvdGFsQmV0LnN0cmluZyA9IChcbiAgICAgIHRoaXMuYXJyTGluZVNlbGVjdC5sZW5ndGggKiB0aGlzLmxpc3RCZXRbdGhpcy5iZXRJZHhdXG4gICAgKS50b1N0cmluZygpO1xuXG4gICAgQnJvYWRjYXN0UmVjZWl2ZXIucmVnaXN0ZXIoXG4gICAgICBCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxibENvaW4sIENvbmZpZ3MuTG9naW4uQ29pbiwgMC4zKTtcbiAgICAgIH0sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuXG4gICAgQXBwLmluc3RhbmNlLnNob3dFcnJMb2FkaW5nKFwixJBhbmcga+G6v3QgbuG7kWkgdOG7m2kgc2VydmVyLi4uXCIpO1xuICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuY2hlY2tDb25uZWN0KCgpID0+IHtcbiAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG4gICAgLy9jYy5sb2coXCJTbG90M0NvbnRyb2xsZXIgc3RhcnRlZFwiKTtcblxuICAgIHRoaXMubVNsb3RMb2JieS5pbml0KHRoaXMpO1xuICAgIHRoaXMubVNsb3RMb2JieS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5idG5QbGF5UmVhbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuYnRuUGxheVRyeS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgLy90aGlzLmluaXRNdXRpcGxlSlBOb2RlKCk7XG4gIH1cbiAgcHJpdmF0ZSBpbml0TXV0aXBsZUpQTm9kZSgpIHtcbiAgICBpZiAoIXRoaXMubXV0aXBsZUpwTm9kZSkge1xuICAgICAgY2MuYXNzZXRNYW5hZ2VyLmdldEJ1bmRsZShcIkxvYmJ5XCIpLmxvYWQoXG4gICAgICAgIFwicHJlZmFicy9NdXRpcGxlSmFja3BvdFByXCIsXG4gICAgICAgIGNjLlByZWZhYixcbiAgICAgICAgZnVuY3Rpb24gKGZpbmlzaCwgdG90YWwsIGl0ZW0pIHt9LFxuICAgICAgICAoZXJyMSwgcHJlZmFiOiBjYy5QcmVmYWIpID0+IHtcbiAgICAgICAgICBpZiAoZXJyMSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjYy5sb2coXCJlcnJyIGxvYWQgZ2FtZSBUSUVOTEVOOlwiLCBlcnIxKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tdXRpcGxlSnBOb2RlID0gY2NcbiAgICAgICAgICAgICAgLmluc3RhbnRpYXRlKHByZWZhYilcbiAgICAgICAgICAgICAgLmdldENvbXBvbmVudChcIk11dGlwbGVKYWNrcG90XCIpO1xuICAgICAgICAgICAgdGhpcy5tdXRpcGxlSnBOb2RlLm5vZGUucGFyZW50ID0gY2MuZGlyZWN0b3JcbiAgICAgICAgICAgICAgLmdldFNjZW5lKClcbiAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpO1xuICAgICAgICAgICAgdGhpcy5tdXRpcGxlSnBOb2RlLnNldEluZm8oXCJCSVRDT0lOXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBzaG93Q29pbnMocHJpemUpIHtcbiAgICB2YXIgbnVtYmVyID0gcHJpemUgLyAyMDAwMDtcbiAgICBpZiAobnVtYmVyIDw9IDEwKSBudW1iZXIgPSAxMDtcbiAgICBlbHNlIGlmIChudW1iZXIgPj0gMzApIG51bWJlciA9IDMwO1xuICAgIEFwcC5pbnN0YW5jZS5zaG93Q29pbnMobnVtYmVyLCB0aGlzLmxibFdpbk5vdy5ub2RlLCB0aGlzLm5vZGVDb2luKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkpvaW5Sb29tKCkge1xuICAgIHRoaXMubGJsQmV0LnN0cmluZyA9IHRoaXMubGlzdEJldExhYmVsW3RoaXMuYmV0SWR4XTtcbiAgICBsZXQgdG90YWxiZXQgPSB0aGlzLmFyckxpbmVTZWxlY3QubGVuZ3RoICogdGhpcy5saXN0QmV0W3RoaXMuYmV0SWR4XTtcbiAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxibFRvdGFsQmV0LCB0b3RhbGJldCwgMC4zKTtcblxuICAgIHRoaXMuc2tlU3Bpbi5hbmltYXRpb24gPSBcImlhdFwiO1xuICAgIHRoaXMuc2tlU3Bpbi5sb29wID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgc2hvd1RvYXN0KG1zZzogc3RyaW5nKSB7XG4gICAgdGhpcy50b2FzdC5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5zdHJpbmcgPSBtc2c7XG4gICAgdGhpcy50b2FzdC5zdG9wQWxsQWN0aW9ucygpO1xuICAgIHRoaXMudG9hc3QuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnRvYXN0LnJ1bkFjdGlvbihcbiAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICBjYy5kZWxheVRpbWUoMiksXG4gICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnRvYXN0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIG1vbmV5VG9LKG1vbmV5OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIC8vIGlmIChtb25leSA8IDEwMDAwKSB7XG4gICAgLy8gICAgIHJldHVybiBtb25leS50b1N0cmluZygpO1xuICAgIC8vIH1cbiAgICAvLyBtb25leSA9IHBhcnNlSW50KChtb25leSAvIDEwMDApLnRvU3RyaW5nKCkpO1xuICAgIHJldHVybiBtb25leS50b1N0cmluZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRFbmFibGVkQWxsQnV0dG9ucyhlbmFibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5idG5TcGluLmludGVyYWN0YWJsZSA9IGVuYWJsZWQ7XG4gICAgdGhpcy5idG5CYWNrLmludGVyYWN0YWJsZSA9IGVuYWJsZWQ7XG4gICAgLy8gdGhpcy5idG5CZXRVcC5pbnRlcmFjdGFibGUgPSBlbmFibGVkO1xuICAgIC8vIHRoaXMuYnRuQmV0RG93bi5pbnRlcmFjdGFibGUgPSBlbmFibGVkO1xuICAgIHRoaXMuYnRuTGluZS5pbnRlcmFjdGFibGUgPSBlbmFibGVkO1xuICAgIHRoaXMuYnRuUGxheVRyeS5pbnRlcmFjdGFibGUgPSBlbmFibGVkO1xuICAgIHRoaXMuYnRuUGxheVJlYWwuaW50ZXJhY3RhYmxlID0gZW5hYmxlZDtcbiAgICAvL3RoaXMudG9nZ2xlVHJpYWwuaW50ZXJhY3RhYmxlID0gZW5hYmxlZDtcbiAgfVxuXG4gIHByaXZhdGUgc3RvcEFsbEVmZmVjdHMoKSB7XG4gICAgdGhpcy5lZmZlY3RKYWNrcG90LnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgdGhpcy5lZmZlY3RKYWNrcG90LmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuZWZmZWN0QmlnV2luLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgdGhpcy5lZmZlY3RCaWdXaW4uYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5lZmZlY3RGcmVlU3Bpbi5zdG9wQWxsQWN0aW9ucygpO1xuICAgIHRoaXMuZWZmZWN0RnJlZVNwaW4uYWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIHN0b3BTaG93TGluZXNXaW4oKSB7XG4gICAgdGhpcy5saW5lc1dpbi5zdG9wQWxsQWN0aW9ucygpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saW5lc1dpbi5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgIHRoaXMubGluZXNXaW4uY2hpbGRyZW5baV0uYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pY29uV2lsZENvbHVtbnMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICB0aGlzLmljb25XaWxkQ29sdW1ucy5jaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5zdG9wQWxsSXRlbUVmZmVjdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdG9wQWxsSXRlbUVmZmVjdCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmVlbHMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLnJlZWxzLmNoaWxkcmVuW2ldLmNoaWxkcmVuOyAvLyA/Pz9cbiAgICAgIGNoaWxkcmVuWzBdLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICBjaGlsZHJlblsxXS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgY2hpbGRyZW5bMl0uc3RvcEFsbEFjdGlvbnMoKTtcblxuICAgICAgY2hpbGRyZW5bMF0ucnVuQWN0aW9uKGNjLnNjYWxlVG8oMC4xLCAxKSk7XG4gICAgICBjaGlsZHJlblsxXS5ydW5BY3Rpb24oY2Muc2NhbGVUbygwLjEsIDEpKTtcbiAgICAgIGNoaWxkcmVuWzJdLnJ1bkFjdGlvbihjYy5zY2FsZVRvKDAuMSwgMSkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3BpbigpIHtcbiAgICBpZiAoIXRoaXMuaXNTcGluZWQpIHJldHVybjtcblxuICAgIGxldCBpc1RyYWlsID0gdGhpcy5tSXNUcmlhbDtcbiAgICBpZiAoIWlzVHJhaWwpIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnROdW1iZXJGcmVlU3BpbiA8PSAwKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW4gPFxuICAgICAgICAgIHRoaXMubGlzdEJldFt0aGlzLmJldElkeF0gKiB0aGlzLmFyckxpbmVTZWxlY3QubGVuZ3RoXG4gICAgICAgICkge1xuICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFxuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X25vdF9lbm91Z2hcIilcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY3VyTW9uZXkgPVxuICAgICAgICAgIENvbmZpZ3MuTG9naW4uQ29pbiAtXG4gICAgICAgICAgdGhpcy5hcnJMaW5lU2VsZWN0Lmxlbmd0aCAqIHRoaXMubGlzdEJldFt0aGlzLmJldElkeF07XG4gICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsQ29pbiwgY3VyTW9uZXksIDAuMyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN1cnJlbnROdW1iZXJGcmVlU3Bpbi0tO1xuICAgICAgICB0aGlzLmxibEZyZWVTcGluQ291bnQuc3RyaW5nID0gdGhpcy5jdXJyZW50TnVtYmVyRnJlZVNwaW4gKyBcIlwiO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50TnVtYmVyRnJlZVNwaW4gPD0gMCkge1xuICAgICAgICAgIHRoaXMuY3VycmVudE51bWJlckZyZWVTcGluID0gMDtcbiAgICAgICAgICB0aGlzLmxibEZyZWVTcGluQ291bnQubm9kZS5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5pc1NwaW5lZCA9IGZhbHNlO1xuICAgICAgdGhpcy5zdG9wQWxsRWZmZWN0cygpO1xuICAgICAgdGhpcy5zdG9wU2hvd0xpbmVzV2luKCk7XG4gICAgICB0aGlzLnNldEVuYWJsZWRBbGxCdXR0b25zKGZhbHNlKTtcbiAgICAgIHRoaXMuc2tlU3Bpbi5hbmltYXRpb24gPSBcImlhdDJcIjtcbiAgICAgIHRoaXMuc2tlU3Bpbi5sb29wID0gdHJ1ZTtcbiAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChcbiAgICAgICAgbmV3IGNtZC5TZW5kUGxheSh0aGlzLmFyckxpbmVTZWxlY3QudG9TdHJpbmcoKSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNTcGluZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RvcEFsbEVmZmVjdHMoKTtcbiAgICAgIHRoaXMuc3RvcFNob3dMaW5lc1dpbigpO1xuICAgICAgdGhpcy5zZXRFbmFibGVkQWxsQnV0dG9ucyhmYWxzZSk7XG4gICAgICB0aGlzLnNrZVNwaW4uYW5pbWF0aW9uID0gXCJpYXQyXCI7XG4gICAgICB0aGlzLnNrZVNwaW4ubG9vcCA9IHRydWU7XG4gICAgICB2YXIgcklkeCA9IFV0aWxzLnJhbmRvbVJhbmdlSW50KDAsIFRyaWFsUmVzdWx0cy5yZXN1bHRzLmxlbmd0aCk7XG4gICAgICB0aGlzLm9uU3BpblJlc3VsdChUcmlhbFJlc3VsdHMucmVzdWx0c1tySWR4XSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdG9wU3BpbigpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVlbHMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICB2YXIgcm9sbCA9IHRoaXMucmVlbHMuY2hpbGRyZW5baV07XG4gICAgICByb2xsLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICByb2xsLnNldFBvc2l0aW9uKGNjLnYyKHJvbGwuZ2V0UG9zaXRpb24oKS54LCAwKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzaG93TGluZVdpbnMoKSB7XG4gICAgdGhpcy5pc1NwaW5lZCA9IHRydWU7XG4gICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxXaW5Ob3csIHRoaXMubGFzdFNwaW5SZXMucHJpemUsIDAuMyk7XG4gICAgbGV0IGlzVHJhaWwgPSB0aGlzLm1Jc1RyaWFsO1xuICAgIGlmICghaXNUcmFpbCkgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcbiAgICBpZiAoIXRoaXMudG9nZ2xlQXV0by5pc0NoZWNrZWQgJiYgIXRoaXMudG9nZ2xlQm9vc3QuaXNDaGVja2VkKVxuICAgICAgdGhpcy5zZXRFbmFibGVkQWxsQnV0dG9ucyh0cnVlKTtcblxuICAgIHRoaXMubGluZXNXaW4uc3RvcEFsbEFjdGlvbnMoKTtcbiAgICBsZXQgbGluZXNXaW4gPSB0aGlzLmxhc3RTcGluUmVzLmxpbmVzV2luLnNwbGl0KFwiLFwiKTtcbiAgICBsaW5lc1dpbiA9IFV0aWxzLnJlbW92ZUR1cHMobGluZXNXaW4pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXNXaW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChsaW5lc1dpbltpXSA9PSBcIjBcIikge1xuICAgICAgICBsaW5lc1dpbi5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGktLTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IG1hdHJpeCA9IHRoaXMubGFzdFNwaW5SZXMubWF0cml4LnNwbGl0KFwiLFwiKTtcbiAgICBsZXQgbGluZXNXaW5DaGlsZHJlbiA9IHRoaXMubGluZXNXaW4uY2hpbGRyZW47XG4gICAgbGV0IHJvbGxzID0gdGhpcy5yZWVscy5jaGlsZHJlbjtcbiAgICBsZXQgYWN0aW9ucyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXNXaW5DaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGluZXNXaW5DaGlsZHJlbltpXS5hY3RpdmUgPSBsaW5lc1dpbi5pbmRleE9mKFwiXCIgKyAoaSArIDEpKSA+PSAwO1xuICAgIH1cbiAgICBpZiAodGhpcy5sYXN0U3BpblJlcy5wcml6ZSA+IDApIHtcbiAgICAgIHRoaXMuc2hvd1dpbkNhc2godGhpcy5sYXN0U3BpblJlcy5wcml6ZSk7XG4gICAgICBhY3Rpb25zLnB1c2goY2MuZGVsYXlUaW1lKDEuNSkpO1xuICAgICAgYWN0aW9ucy5wdXNoKFxuICAgICAgICBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lc1dpbkNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsaW5lc1dpbkNoaWxkcmVuW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgICBhY3Rpb25zLnB1c2goY2MuZGVsYXlUaW1lKDAuMykpO1xuICAgICAgaWYgKCF0aGlzLnRvZ2dsZUJvb3N0LmlzQ2hlY2tlZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzV2luLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IGxpbmVJZHggPSBwYXJzZUludChsaW5lc1dpbltpXSkgLSAxO1xuICAgICAgICAgIGxldCBsaW5lID0gbGluZXNXaW5DaGlsZHJlbltsaW5lSWR4XTtcbiAgICAgICAgICBhY3Rpb25zLnB1c2goXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgIC8vIGNjLmxvZyhcIj09PT09PT09PT09PT09PT06IFwiICsgbGluZUlkeCk7XG4gICAgICAgICAgICAgIGxpbmUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgbGV0IG1MaW5lID0gdGhpcy5tYXBMaW5lW2xpbmVJZHhdO1xuICAgICAgICAgICAgICBsZXQgY291bnRJdGVtV2luID0gMDtcbiAgICAgICAgICAgICAgbGV0IGZpc3J0SXRlbUlkID0gbWF0cml4W21MaW5lWzBdXTtcbiAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtTGluZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtSWQgPSBtYXRyaXhbbUxpbmVbal1dO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIGZpc3J0SXRlbUlkID09IGl0ZW1JZCB8fFxuICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoaXRlbUlkKSA9PSB0aGlzLndpbGRJdGVtSWQgfHxcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29sdW1uc1dpbGQuaW5kZXhPZihqKSA+PSAwXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAvLyBjYy5sb2coXCI9PVwiICsgaXRlbUlkICsgXCIgajpcIiArIGopO1xuICAgICAgICAgICAgICAgICAgY291bnRJdGVtV2luKys7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvdW50SXRlbVdpbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1Sb3cgPSBwYXJzZUludCgobUxpbmVbal0gLyA1KS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICByb2xsc1tqXS5jaGlsZHJlblsyIC0gaXRlbVJvd10uc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICByb2xsc1tqXS5jaGlsZHJlblsyIC0gaXRlbVJvd10ucnVuQWN0aW9uKFxuICAgICAgICAgICAgICAgICAgY2MucmVwZWF0Rm9yZXZlcihcbiAgICAgICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoY2Muc2NhbGVUbygwLjIsIDEuMSksIGNjLnNjYWxlVG8oMC4yLCAxKSlcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIGNjLmxvZyhcImxpbmVJZHg6IFwiICsgbGluZUlkeCArIFwiZmlzcnRJdGVtSWQ6IFwiICsgZmlzcnRJdGVtSWQgKyBcIiBjb3VudEl0ZW1XaW46IFwiICsgY291bnRJdGVtV2luKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgICBhY3Rpb25zLnB1c2goY2MuZGVsYXlUaW1lKDEpKTtcbiAgICAgICAgICBhY3Rpb25zLnB1c2goXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgIGxpbmUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMuc3RvcEFsbEl0ZW1FZmZlY3QoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgICBhY3Rpb25zLnB1c2goY2MuZGVsYXlUaW1lKDAuMSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhY3Rpb25zLmxlbmd0aCA9PSAwKSB7XG4gICAgICBhY3Rpb25zLnB1c2goXG4gICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAvL2ZpeGVkIGNhbGwgY2Muc2VxdWVuY2UuYXBwbHlcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICAgIGFjdGlvbnMucHVzaChcbiAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMudG9nZ2xlQm9vc3QuaXNDaGVja2VkIHx8IHRoaXMudG9nZ2xlQXV0by5pc0NoZWNrZWQpIHtcbiAgICAgICAgICB0aGlzLnNwaW4oKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICAgIHRoaXMubGluZXNXaW4ucnVuQWN0aW9uKGNjLnNlcXVlbmNlLmFwcGx5KG51bGwsIGFjdGlvbnMpKTtcbiAgfVxuXG4gIHByaXZhdGUgc2hvd1dpbkNhc2goY2FzaDogbnVtYmVyKSB7XG4gICAgdGhpcy5lZmZlY3RXaW5DYXNoLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgdGhpcy5lZmZlY3RXaW5DYXNoLmFjdGl2ZSA9IHRydWU7XG4gICAgbGV0IGxhYmVsID0gdGhpcy5lZmZlY3RXaW5DYXNoLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpO1xuICAgIGxhYmVsLnN0cmluZyA9IFwiMFwiO1xuICAgIHRoaXMuZWZmZWN0V2luQ2FzaC5vcGFjaXR5ID0gMDtcbiAgICB0aGlzLnNob3dDb2lucyhjYXNoKTtcbiAgICB0aGlzLmVmZmVjdFdpbkNhc2gucnVuQWN0aW9uKFxuICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgIGNjLmZhZGVJbigwLjMpLFxuICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgVHdlZW4ubnVtYmVyVG8obGFiZWwsIGNhc2gsIDAuNSk7XG4gICAgICAgIH0pLFxuICAgICAgICBjYy5kZWxheVRpbWUoMS41KSxcbiAgICAgICAgY2MuZmFkZU91dCgwLjMpLFxuICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgdGhpcy5lZmZlY3RXaW5DYXNoLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNob3dFZmZlY3RCaWdXaW4oY2FzaDogbnVtYmVyLCBjYjogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMuZWZmZWN0QmlnV2luLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgdGhpcy5lZmZlY3RCaWdXaW4uYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmVmZmVjdEJpZ1dpblxuICAgICAgLmdldENvbXBvbmVudEluQ2hpbGRyZW4oc3AuU2tlbGV0b24pXG4gICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiYW5pbWF0aW9uXCIsIGZhbHNlKTtcbiAgICBsZXQgbGFiZWwgPSB0aGlzLmVmZmVjdEJpZ1dpbi5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKTtcbiAgICBsYWJlbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5lZmZlY3RCaWdXaW4ucnVuQWN0aW9uKFxuICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgIGNjLmRlbGF5VGltZSgxKSxcbiAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgIGxhYmVsLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgbGFiZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIFR3ZWVuLm51bWJlclRvKGxhYmVsLCBjYXNoLCAxKTtcbiAgICAgICAgfSksXG4gICAgICAgIGNjLmRlbGF5VGltZSgzKSxcbiAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZWZmZWN0QmlnV2luLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIGlmIChjYiAhPSBudWxsKSBjYigpO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNob3dFZmZlY3RGcmVlU3BpbihjYjogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMuZWZmZWN0RnJlZVNwaW4uc3RvcEFsbEFjdGlvbnMoKTtcbiAgICB0aGlzLmVmZmVjdEZyZWVTcGluLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5lZmZlY3RGcmVlU3BpblxuICAgICAgLmdldENvbXBvbmVudEluQ2hpbGRyZW4oc3AuU2tlbGV0b24pXG4gICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiYW5pbWF0aW9uXCIsIGZhbHNlKTtcblxuICAgIHRoaXMuZWZmZWN0RnJlZVNwaW4ucnVuQWN0aW9uKFxuICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgIGNjLmRlbGF5VGltZSgxKSxcbiAgICAgICAgY2MuZGVsYXlUaW1lKDMpLFxuICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgdGhpcy5lZmZlY3RGcmVlU3Bpbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICBpZiAoY2IgIT0gbnVsbCkgY2IoKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG93RWZmZWN0SmFja3BvdChjYXNoOiBudW1iZXIsIGNiOiAoKSA9PiB2b2lkID0gbnVsbCkge1xuICAgIHZhciBhbmltTmFtZSA9IFtcImFuaW1hdGlvbjdcIl07XG4gICAgdmFyIGluZGV4ID0gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSArIFwiXCIpO1xuICAgIHRoaXMuZWZmZWN0SmFja3BvdC5zdG9wQWxsQWN0aW9ucygpO1xuICAgIHRoaXMuZWZmZWN0SmFja3BvdC5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuZWZmZWN0SmFja3BvdFxuICAgICAgLmdldENvbXBvbmVudEluQ2hpbGRyZW4oc3AuU2tlbGV0b24pXG4gICAgICAuc2V0QW5pbWF0aW9uKDAsIGFuaW1OYW1lW2luZGV4XSwgZmFsc2UpO1xuICAgIGxldCBsYWJlbCA9IHRoaXMuZWZmZWN0SmFja3BvdC5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKTtcbiAgICBsYWJlbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5lZmZlY3RKYWNrcG90LnJ1bkFjdGlvbihcbiAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICBjYy5kZWxheVRpbWUoMC40KSxcbiAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucGFydGljbGVKYWNrcHQucmVzZXRTeXN0ZW0oKTtcbiAgICAgICAgfSksXG4gICAgICAgIGNjLmRlbGF5VGltZSgwLjYpLFxuICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgbGFiZWwuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICBsYWJlbC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgVHdlZW4ubnVtYmVyVG8obGFiZWwsIGNhc2gsIDEpO1xuICAgICAgICB9KSxcbiAgICAgICAgY2MuZGVsYXlUaW1lKDYpLFxuICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgdGhpcy5lZmZlY3RKYWNrcG90LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIGlmIChjYiAhPSBudWxsKSBjYigpO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNob3dFZmZlY3RCb251cyhjYjogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMuZWZmZWN0Qm9udXMuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICB0aGlzLmVmZmVjdEJvbnVzLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5lZmZlY3RCb251c1xuICAgICAgLmdldENvbXBvbmVudEluQ2hpbGRyZW4oc3AuU2tlbGV0b24pXG4gICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiYW5pbWF0aW9uXCIsIGZhbHNlKTtcblxuICAgIHRoaXMuZWZmZWN0Qm9udXMucnVuQWN0aW9uKFxuICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgIGNjLmRlbGF5VGltZSgzKSxcbiAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZWZmZWN0Qm9udXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgaWYgKGNiICE9IG51bGwpIGNiKCk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgb25TcGluUmVzdWx0KHJlczogY21kLlJlY2VpdmVQbGF5IHwgYW55KSB7XG4gICAgdGhpcy5zdG9wU3BpbigpO1xuICAgIGNjLmxvZyhcIm9uU3BpblJlc3VsdDpcIiArIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgIHZhciBzdWNjZXNzUmVzdWx0ID0gWzAsIDEsIDIsIDMsIDQsIDUsIDZdO1xuICAgIC8vcmVzLnJlc3VsdCA9PSA1IC8vYm9udXNcbiAgICAvL3Jlcy5yZXN1bHQgPT0gMCAvL2tob25nIGFuXG4gICAgLy9yZXMucmVzdWx0ID09IDEgLy90aGFuZyB0aHVvbmdcbiAgICAvL3Jlcy5yZXN1bHQgPT0gMiAvL3RoYW5nIGxvblxuICAgIC8vcmVzLnJlc3VsdCA9PSAzIC8vbm8gaHVcbiAgICAvL3Jlcy5yZXN1bHQgPT0gNiAvL3RoYW5nIGN1YyBsb25cbiAgICBjYy5sb2coXCJzYW9zYW86XCIgKyAoc3VjY2Vzc1Jlc3VsdC5pbmRleE9mKHJlcy5yZXN1bHQpID09PSAtMSkpO1xuICAgIGlmIChzdWNjZXNzUmVzdWx0LmluZGV4T2YocmVzLnJlc3VsdCkgPT09IC0xKSB7XG4gICAgICB0aGlzLmlzU3BpbmVkID0gdHJ1ZTtcblxuICAgICAgdGhpcy50b2dnbGVBdXRvLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgdGhpcy50b2dnbGVBdXRvLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICB0aGlzLnRvZ2dsZUJvb3N0LmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgdGhpcy50b2dnbGVCb29zdC5pbnRlcmFjdGFibGUgPSB0cnVlO1xuXG4gICAgICB0aGlzLnNldEVuYWJsZWRBbGxCdXR0b25zKHRydWUpO1xuICAgICAgc3dpdGNoIChyZXMucmVzdWx0KSB7XG4gICAgICAgIGNhc2UgMTAyOlxuICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9zbG90X2Vycm9yXCIpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfdW5rbm93bl9lcnJvcjFcIikpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnROdW1iZXJGcmVlU3BpbiA9IHJlcy5jdXJyZW50TnVtYmVyRnJlZVNwaW47XG4gICAgdGhpcy5sYXN0U3BpblJlcyA9IHJlcztcbiAgICB0aGlzLmNvbHVtbnNXaWxkLmxlbmd0aCA9IDA7XG5cbiAgICBsZXQgaXNUcmFpbCA9IHRoaXMubUlzVHJpYWw7XG4gICAgaWYgKCFpc1RyYWlsICYmICF0aGlzLmxhc3RTcGluUmVzLmlzRnJlZSkge1xuICAgICAgQ29uZmlncy5Mb2dpbi5Db2luID0gcmVzLmN1cnJlbnRNb25leTtcbiAgICB9XG5cbiAgICBsZXQgbWF0cml4ID0gcmVzLm1hdHJpeC5zcGxpdChcIixcIik7XG4gICAgbGV0IHRpbWVTY2FsZSA9IHRoaXMudG9nZ2xlQm9vc3QuaXNDaGVja2VkID8gMC41IDogMTtcbiAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTcGluLCBmYWxzZSwgMSk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yZWVscy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgIGxldCByb2xsID0gdGhpcy5yZWVscy5jaGlsZHJlbltpXTtcbiAgICAgIGxldCBzdGVwMVBvcyA9IHRoaXMubUhlaWdodEl0ZW0gKiAwLjM7XG4gICAgICBsZXQgc3RlcDJQb3MgPVxuICAgICAgICAtdGhpcy5tSGVpZ2h0SXRlbSAqIHJvbGwuY2hpbGRyZW5Db3VudCArXG4gICAgICAgIHRoaXMubUhlaWdodEl0ZW0gKiAzIC1cbiAgICAgICAgdGhpcy5tSGVpZ2h0SXRlbSAqIDAuMztcbiAgICAgIGxldCBzdGVwM1BvcyA9XG4gICAgICAgIC10aGlzLm1IZWlnaHRJdGVtICogcm9sbC5jaGlsZHJlbkNvdW50ICsgdGhpcy5tSGVpZ2h0SXRlbSAqIDM7XG4gICAgICByb2xsLnJ1bkFjdGlvbihcbiAgICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgICAgY2MuZGVsYXlUaW1lKDAuMiAqIGkgKiB0aW1lU2NhbGUpLFxuICAgICAgICAgIGNjXG4gICAgICAgICAgICAubW92ZVRvKDAuMiAqIHRpbWVTY2FsZSwgY2MudjIocm9sbC5wb3NpdGlvbi54LCBzdGVwMVBvcykpXG4gICAgICAgICAgICAuZWFzaW5nKGNjLmVhc2VRdWFkcmF0aWNBY3Rpb25PdXQoKSksXG4gICAgICAgICAgY2NcbiAgICAgICAgICAgIC5tb3ZlVG8oXG4gICAgICAgICAgICAgICh0aGlzLnNwaW5EdXJhdGlvbiArIHRoaXMuYWRkU3BpbkR1cmF0aW9uICogaSkgKiB0aW1lU2NhbGUsXG4gICAgICAgICAgICAgIGNjLnYyKHJvbGwucG9zaXRpb24ueCwgc3RlcDJQb3MpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuZWFzaW5nKGNjLmVhc2VRdWFkcmF0aWNBY3Rpb25Jbk91dCgpKSxcbiAgICAgICAgICBjY1xuICAgICAgICAgICAgLm1vdmVUbygwLjIgKiB0aW1lU2NhbGUsIGNjLnYyKHJvbGwucG9zaXRpb24ueCwgc3RlcDNQb3MpKVxuICAgICAgICAgICAgLmVhc2luZyhjYy5lYXNlUXVhZHJhdGljQWN0aW9uSW4oKSksXG4gICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgcm9sbC5zZXRQb3NpdGlvbihjYy52Mihyb2xsLnBvc2l0aW9uLngsIDApKTtcbiAgICAgICAgICAgIGlmIChpID09IDQpIHtcbiAgICAgICAgICAgICAgLy9maW5kIGNvbHVtbnMgd2lsZFxuICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1hdHJpeC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChtYXRyaXhbal0pID09IHRoaXMud2lsZEl0ZW1JZCkge1xuICAgICAgICAgICAgICAgICAgbGV0IGMgPSBqICUgNTtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbHVtbnNXaWxkLmluZGV4T2YoYykgPT0gLTEpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sdW1uc1dpbGQucHVzaChjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy9yZXBsYWNlIHdpbGQgaXRlbXMgaW4gY29sdW1uc1xuICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uc1dpbGQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgYyA9IHRoaXMuY29sdW1uc1dpbGRbal07XG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gdGhpcy5yZWVscy5jaGlsZHJlbltjXS5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjaGlsZHJlblsyXS5nZXRDb21wb25lbnQoU2xvdDdJdGVtKS5zZXRJZCh0aGlzLndpbGRJdGVtSWQpO1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuWzFdLmdldENvbXBvbmVudChTbG90N0l0ZW0pLnNldElkKHRoaXMud2lsZEl0ZW1JZCk7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KFNsb3Q3SXRlbSkuc2V0SWQodGhpcy53aWxkSXRlbUlkKTtcblxuICAgICAgICAgICAgICAgIC8vIGNoaWxkcmVuWzJdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJGcmFtZUl0ZW1zW3RoaXMud2lsZEl0ZW1JZF07XG4gICAgICAgICAgICAgICAgLy8gY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwckZyYW1lSXRlbXNbdGhpcy53aWxkSXRlbUlkXTtcbiAgICAgICAgICAgICAgICAvLyBjaGlsZHJlblswXS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByRnJhbWVJdGVtc1t0aGlzLndpbGRJdGVtSWRdO1xuICAgICAgICAgICAgICAgIHRoaXMuaWNvbldpbGRDb2x1bW5zLmNoaWxkcmVuW2NdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uV2lsZENvbHVtbnMuY2hpbGRyZW5bY10uZ2V0Q29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgc3AuU2tlbGV0b25cbiAgICAgICAgICAgICAgICApLmFuaW1hdGlvbiA9IFwiMVwiO1xuICAgICAgICAgICAgICAgIHRoaXMuaWNvbldpbGRDb2x1bW5zLmNoaWxkcmVuW2NdLmdldENvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgIHNwLlNrZWxldG9uXG4gICAgICAgICAgICAgICAgKS5sb29wID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHRoaXMuY29sdW1uc1dpbGQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJvbGwucnVuQWN0aW9uKFxuICAgICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgyLjYpLFxuICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgZm9yIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPCB0aGlzLmljb25XaWxkQ29sdW1ucy5jaGlsZHJlbkNvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgaSsrXG4gICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmljb25XaWxkQ29sdW1ucy5jaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4xKSxcbiAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3BpbmVkKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwaW5lZCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKTtcblxuICAgICAgLy9yb29sID0gcmVlbFxuICAgICAgcm9sbC5ydW5BY3Rpb24oXG4gICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgIGNjLmRlbGF5VGltZSgoMC40NyArIDAuMiAqIGkpICogdGltZVNjYWxlKSxcbiAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICBsZXQgbGlzdEl0ZW1Ob2RlID0gcm9sbC5jaGlsZHJlbjtcbiAgICAgICAgICAgIC8vIGxpc3RJdGVtWzJdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJGcmFtZUl0ZW1zW3BhcnNlSW50KG1hdHJpeFtpXSldO1xuICAgICAgICAgICAgLy8gbGlzdEl0ZW1bMV0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwckZyYW1lSXRlbXNbcGFyc2VJbnQobWF0cml4WzUgKyBpXSldO1xuICAgICAgICAgICAgLy8gbGlzdEl0ZW1bMF0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwckZyYW1lSXRlbXNbcGFyc2VJbnQobWF0cml4WzEwICsgaV0pXTtcbiAgICAgICAgICAgIC8vIGxpc3RJdGVtW2xpc3RJdGVtLmxlbmd0aCAtIDFdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJGcmFtZUl0ZW1zW3BhcnNlSW50KG1hdHJpeFtpXSldO1xuICAgICAgICAgICAgLy8gbGlzdEl0ZW1bbGlzdEl0ZW0ubGVuZ3RoIC0gMl0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwckZyYW1lSXRlbXNbcGFyc2VJbnQobWF0cml4WzUgKyBpXSldO1xuICAgICAgICAgICAgLy8gbGlzdEl0ZW1bbGlzdEl0ZW0ubGVuZ3RoIC0gM10uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwckZyYW1lSXRlbXNbcGFyc2VJbnQobWF0cml4WzEwICsgaV0pXTtcblxuICAgICAgICAgICAgbGlzdEl0ZW1Ob2RlWzJdLmdldENvbXBvbmVudChTbG90N0l0ZW0pLnNldElkKHBhcnNlSW50KG1hdHJpeFtpXSkpO1xuICAgICAgICAgICAgbGlzdEl0ZW1Ob2RlWzFdXG4gICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoU2xvdDdJdGVtKVxuICAgICAgICAgICAgICAuc2V0SWQocGFyc2VJbnQobWF0cml4WzUgKyBpXSkpO1xuICAgICAgICAgICAgbGlzdEl0ZW1Ob2RlWzBdXG4gICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoU2xvdDdJdGVtKVxuICAgICAgICAgICAgICAuc2V0SWQocGFyc2VJbnQobWF0cml4WzEwICsgaV0pKTtcbiAgICAgICAgICAgIGxpc3RJdGVtTm9kZVtsaXN0SXRlbU5vZGUubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgLmdldENvbXBvbmVudChTbG90N0l0ZW0pXG4gICAgICAgICAgICAgIC5zZXRJZChwYXJzZUludChtYXRyaXhbaV0pKTtcbiAgICAgICAgICAgIGxpc3RJdGVtTm9kZVtsaXN0SXRlbU5vZGUubGVuZ3RoIC0gMl1cbiAgICAgICAgICAgICAgLmdldENvbXBvbmVudChTbG90N0l0ZW0pXG4gICAgICAgICAgICAgIC5zZXRJZChwYXJzZUludChtYXRyaXhbNSArIGldKSk7XG4gICAgICAgICAgICBsaXN0SXRlbU5vZGVbbGlzdEl0ZW1Ob2RlLmxlbmd0aCAtIDNdXG4gICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoU2xvdDdJdGVtKVxuICAgICAgICAgICAgICAuc2V0SWQocGFyc2VJbnQobWF0cml4WzEwICsgaV0pKTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3BpbmVkKCkge1xuICAgIHRoaXMuc2tlU3Bpbi5hbmltYXRpb24gPSBcImlhdFwiO1xuICAgIHRoaXMuc2tlU3Bpbi5sb29wID0gdHJ1ZTtcbiAgICB0aGlzLmN1cnJlbnROdW1iZXJGcmVlU3BpbiA9IHRoaXMubGFzdFNwaW5SZXMuY3VycmVudE51bWJlckZyZWVTcGluO1xuICAgIGlmICh0aGlzLmxhc3RTcGluUmVzLmN1cnJlbnROdW1iZXJGcmVlU3BpbiA+IDApIHtcbiAgICAgIHRoaXMubGJsRnJlZVNwaW5Db3VudC5ub2RlLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5sYmxGcmVlU3BpbkNvdW50LnN0cmluZyA9IHRoaXMuY3VycmVudE51bWJlckZyZWVTcGluICsgXCJcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sYmxGcmVlU3BpbkNvdW50Lm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5sYXN0U3BpblJlcy5mcmVlU3BpbiA9PSAxKSB7XG4gICAgICB0aGlzLnNob3dFZmZlY3RGcmVlU3BpbigoKSA9PiB7XG4gICAgICAgIHRoaXMuc2hvd0xpbmVXaW5zKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHN1Y2Nlc3NSZXN1bHQgPSBbMCwgMSwgMywgNSwgNl07XG4gICAgICBzd2l0Y2ggKHRoaXMubGFzdFNwaW5SZXMucmVzdWx0KSB7XG4gICAgICAgIGNhc2UgVFlQRV9XSU4uTUlTUzogLy9rIGFuXG4gICAgICAgICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU3Bpbk1pcywgZmFsc2UsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnNob3dMaW5lV2lucygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFRZUEVfV0lOLldJTjogLy8gdGhhbmcgdGh1b25nXG4gICAgICAgICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU3BpbldpbiwgZmFsc2UsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnNob3dMaW5lV2lucygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFRZUEVfV0lOLkJJR1dJTjogLy8gdGhhbmcgbG9uXG4gICAgICAgICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQmlnV2luLCBmYWxzZSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc2hvd0VmZmVjdEJpZ1dpbih0aGlzLmxhc3RTcGluUmVzLnByaXplLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dMaW5lV2lucygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFRZUEVfV0lOLkpBQ0tQT1Q6IC8vamFja3BvdFxuICAgICAgICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEphY2twb3QsIGZhbHNlLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zaG93RWZmZWN0SmFja3BvdCh0aGlzLmxhc3RTcGluUmVzLnByaXplLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dMaW5lV2lucygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFRZUEVfV0lOLlNVUEVSV0lOOiAvL2phY2twb3RcbiAgICAgICAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRKYWNrcG90LCBmYWxzZSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc2hvd0VmZmVjdEphY2twb3QodGhpcy5sYXN0U3BpblJlcy5wcml6ZSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93TGluZVdpbnMoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OiAvL3RoYW5nIHNpZXUgbG9uXG4gICAgICAgICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQmlnV2luLCBmYWxzZSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc2hvd0VmZmVjdEJpZ1dpbih0aGlzLmxhc3RTcGluUmVzLnByaXplLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dMaW5lV2lucygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFRZUEVfV0lOLkJPTlVTOiAvL2JvbnVzXG4gICAgICAgICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQm9udXMsIGZhbHNlLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zaG93RWZmZWN0Qm9udXMoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wb3B1cEJvbnVzLnNob3dCb251cyhcbiAgICAgICAgICAgICAgdGhpcy5tSXNUcmlhbCA/IDEwMCA6IHRoaXMubGlzdEJldFt0aGlzLmJldElkeF0sXG4gICAgICAgICAgICAgIHRoaXMubGFzdFNwaW5SZXMuaGFpU2FvLFxuICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TGluZVdpbnMoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25CdG5Tb3VuZFRvdWNoQm9udXMoKSB7fVxuXG4gIG9uQnRuU291bmRTdW1hcnkoKSB7fVxuICBhY3RCYWNrKCkge1xuICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgfVxuICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRVblN1YmNyaWJlKHRoaXMuYmV0SWR4KSk7XG4gICAgLy8gY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xuICAgIC8vIEFwcC5pbnN0YW5jZS5sb2FkU2NlbmUoXCJMb2JieVwiKTtcblxuICAgIHRoaXMubVNsb3RMb2JieS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gIH1cblxuICBhY3RIaWRkZW4oKSB7XG4gICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X2Z1bmN0aW9uX2luX2RldmVsb3BtZW50XCIpKTtcbiAgfVxuXG4gIGFjdEJldFVwKCkge1xuICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgfVxuXG4gICAgbGV0IGlzVHJhaWwgPSB0aGlzLm1Jc1RyaWFsO1xuICAgIGlmIChpc1RyYWlsKSB7XG4gICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfc2xvdF9lcnJvclwiKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmJldElkeCA8IHRoaXMubGlzdEJldC5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLmRhaUx5RnJlZVNwaW4gPSAwO1xuICAgICAgdGhpcy5sYmxGcmVlU3BpbkNvdW50Lm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKFxuICAgICAgICBuZXcgY21kLlNlbmRDaGFuZ2VSb29tKHRoaXMuYmV0SWR4LCArK3RoaXMuYmV0SWR4KVxuICAgICAgKTtcbiAgICAgIHRoaXMubGJsQmV0LnN0cmluZyA9IHRoaXMubGlzdEJldExhYmVsW3RoaXMuYmV0SWR4XTtcbiAgICAgIFR3ZWVuLm51bWJlclRvKFxuICAgICAgICB0aGlzLmxibFRvdGFsQmV0LFxuICAgICAgICB0aGlzLmFyckxpbmVTZWxlY3QubGVuZ3RoICogdGhpcy5saXN0QmV0W3RoaXMuYmV0SWR4XSxcbiAgICAgICAgMC4zLFxuICAgICAgICAobikgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLm1vbmV5VG9LKG4pO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGFjdEJldERvd24oKSB7XG4gICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICB9XG5cbiAgICBsZXQgaXNUcmFpbCA9IHRoaXMubUlzVHJpYWw7XG4gICAgaWYgKGlzVHJhaWwpIHtcbiAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9zbG90X2Vycm9yXCIpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuYmV0SWR4ID4gMCkge1xuICAgICAgdGhpcy5kYWlMeUZyZWVTcGluID0gMDtcbiAgICAgIHRoaXMubGJsRnJlZVNwaW5Db3VudC5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChcbiAgICAgICAgbmV3IGNtZC5TZW5kQ2hhbmdlUm9vbSh0aGlzLmJldElkeCwgLS10aGlzLmJldElkeClcbiAgICAgICk7XG4gICAgICB0aGlzLmxibEJldC5zdHJpbmcgPSB0aGlzLmxpc3RCZXRMYWJlbFt0aGlzLmJldElkeF07XG4gICAgICBUd2Vlbi5udW1iZXJUbyhcbiAgICAgICAgdGhpcy5sYmxUb3RhbEJldCxcbiAgICAgICAgdGhpcy5hcnJMaW5lU2VsZWN0Lmxlbmd0aCAqIHRoaXMubGlzdEJldFt0aGlzLmJldElkeF0sXG4gICAgICAgIDAuMyxcbiAgICAgICAgKG4pID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5tb25leVRvSyhuKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBhY3RMaW5lKCkge1xuICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgfVxuXG4gICAgbGV0IGlzVHJhaWwgPSB0aGlzLm1Jc1RyaWFsO1xuICAgIGlmIChpc1RyYWlsKSB7XG4gICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfc2xvdF9lcnJvclwiKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucG9wdXBTZWxlY3RMaW5lLnNob3coKTtcbiAgfVxuXG4gIGFjdFNldHRpbmcoKSB7XG4gICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICB9XG4gICAgdGhpcy5wYW5lbFNldHRpbmcuYWN0aXZlID0gIXRoaXMucGFuZWxTZXR0aW5nLmFjdGl2ZTtcbiAgfVxuXG4gIHRvZ2dsZVRyaWFsT25DaGVjaygpIHtcbiAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgIH1cblxuICAgIHRoaXMubUlzVHJpYWwgPSAhdGhpcy5tSXNUcmlhbDtcbiAgICBsZXQgaXNUcmFpbCA9IHRoaXMubUlzVHJpYWw7XG4gICAgaWYgKGlzVHJhaWwpIHtcbiAgICAgIHRoaXMuYnRuUGxheVJlYWwubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5idG5QbGF5VHJ5Lm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmxibExpbmUuc3RyaW5nID0gXCIyNVwiO1xuICAgICAgdGhpcy5sYmxCZXQuc3RyaW5nID0gXCIxMDBcIjtcbiAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsVG90YWxCZXQsIDI1MDAsIDAuMywgKG4pID0+IHRoaXMubW9uZXlUb0sobikpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJ0blBsYXlSZWFsLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmJ0blBsYXlUcnkubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5sYmxMaW5lLnN0cmluZyA9IHRoaXMuYXJyTGluZVNlbGVjdC5sZW5ndGgudG9TdHJpbmcoKTtcbiAgICAgIHRoaXMubGJsQmV0LnN0cmluZyA9IHRoaXMubGlzdEJldExhYmVsW3RoaXMuYmV0SWR4XTtcbiAgICAgIFR3ZWVuLm51bWJlclRvKFxuICAgICAgICB0aGlzLmxibFRvdGFsQmV0LFxuICAgICAgICB0aGlzLmFyckxpbmVTZWxlY3QubGVuZ3RoICogdGhpcy5saXN0QmV0W3RoaXMuYmV0SWR4XSxcbiAgICAgICAgMC4zLFxuICAgICAgICAobikgPT4gdGhpcy5tb25leVRvSyhuKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVBdXRvT25DaGVjaygpIHtcbiAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgIH1cblxuICAgIGxldCBpc1RyYWlsID0gdGhpcy5tSXNUcmlhbDtcbiAgICBpZiAodGhpcy50b2dnbGVBdXRvLmlzQ2hlY2tlZCAmJiBpc1RyYWlsKSB7XG4gICAgICB0aGlzLnRvZ2dsZUF1dG8uaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfc2xvdF9lcnJvclwiKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnRvZ2dsZUF1dG8uaXNDaGVja2VkKSB7XG4gICAgICB0aGlzLnNwaW4oKTtcbiAgICAgIHRoaXMudG9nZ2xlQm9vc3QuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9nZ2xlQm9vc3QuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLmlzU3BpbmVkKSB7XG4gICAgICAgIHRoaXMuc2V0RW5hYmxlZEFsbEJ1dHRvbnModHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlQm9vc3RPbkNoZWNrKCkge1xuICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgfVxuXG4gICAgbGV0IGlzVHJhaWwgPSB0aGlzLm1Jc1RyaWFsO1xuICAgIGlmICh0aGlzLnRvZ2dsZUJvb3N0LmlzQ2hlY2tlZCAmJiBpc1RyYWlsKSB7XG4gICAgICB0aGlzLnRvZ2dsZUJvb3N0LmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X3Nsb3RfZXJyb3JcIikpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy50b2dnbGVCb29zdC5pc0NoZWNrZWQpIHtcbiAgICAgIHRoaXMuc3BpbigpO1xuICAgICAgdGhpcy50b2dnbGVBdXRvLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvZ2dsZUF1dG8uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLmlzU3BpbmVkKSB7XG4gICAgICAgIHRoaXMuc2V0RW5hYmxlZEFsbEJ1dHRvbnModHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy9tdXNpYyBzZXR0aW5nXG5cbiAgcHJpdmF0ZSBzb3VuZEluaXQoKSB7XG4gICAgLy8gbXVzaWNTYXZlIDogICAwID09IE9GRiAsIDEgPT0gT05cbiAgICB2YXIgbXVzaWNTYXZlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibXVzaWNfU2xvdF83XCIpO1xuICAgIGlmIChtdXNpY1NhdmUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5tdXNpY1Nsb3RTdGF0ZSA9IHBhcnNlSW50KG11c2ljU2F2ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubXVzaWNTbG90U3RhdGUgPSAxO1xuICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXVzaWNfU2xvdF83XCIsIFwiMVwiKTtcbiAgICB9XG5cbiAgICAvLyBzb3VuZFNhdmUgOiAgIDAgPT0gT0ZGICwgMSA9PSBPTlxuICAgIHZhciBzb3VuZFNhdmUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzb3VuZF9TbG90XzdcIik7XG4gICAgaWYgKHNvdW5kU2F2ZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLnNvdW5kU2xvdFN0YXRlID0gcGFyc2VJbnQoc291bmRTYXZlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zb3VuZFNsb3RTdGF0ZSA9IDE7XG4gICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzb3VuZF9TbG90XzdcIiwgXCIxXCIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm11c2ljU2xvdFN0YXRlID09IDApIHtcbiAgICAgIC8vdGhpcy5tdXNpY09mZi5hY3RpdmUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvL3RoaXMubXVzaWNPZmYuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMCkge1xuICAgICAgLy90aGlzLnNvdW5kT2ZmLmFjdGl2ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vdGhpcy5zb3VuZE9mZi5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tdXNpY1Nsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICB0aGlzLnJlbW90ZU11c2ljQmFja2dyb3VuZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLnNvdW5kQmcsIHRydWUpO1xuICAgIH1cbiAgfVxuICBzZXR0aW5nTXVzaWMoKSB7XG4gICAgLy90aGlzLm11c2ljT2ZmLmFjdGl2ZSA9ICF0aGlzLm11c2ljT2ZmLmFjdGl2ZTtcbiAgICBpZiAoIXRoaXMudG9nZ2xnZU11c2ljLmlzQ2hlY2tlZCkge1xuICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLnJlbW90ZU11c2ljQmFja2dyb3VuZCk7XG4gICAgICB0aGlzLm11c2ljU2xvdFN0YXRlID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdGVNdXNpY0JhY2tncm91bmQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5zb3VuZEJnLCB0cnVlKTtcbiAgICAgIHRoaXMubXVzaWNTbG90U3RhdGUgPSAxO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgfVxuXG4gICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXVzaWNfU2xvdF83XCIsIFwiXCIgKyB0aGlzLm11c2ljU2xvdFN0YXRlKTtcbiAgfVxuICBzZXR0aW5nU291bmQoKSB7XG4gICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMudG9nZ2xlU291bmQuaXNDaGVja2VkKSB7XG4gICAgICB0aGlzLnNvdW5kU2xvdFN0YXRlID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zb3VuZFNsb3RTdGF0ZSA9IDE7XG4gICAgfVxuXG4gICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXVzaWNfU2xvdF83XCIsIFwiXCIgKyB0aGlzLnNvdW5kU2xvdFN0YXRlKTtcbiAgfVxufVxuIl19