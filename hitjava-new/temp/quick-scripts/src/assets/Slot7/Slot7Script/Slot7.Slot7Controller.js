"use strict";
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