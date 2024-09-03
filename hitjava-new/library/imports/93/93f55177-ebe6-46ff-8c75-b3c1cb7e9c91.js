"use strict";
cc._RF.push(module, '93f55F36+ZG/4x1s8HLfpyR', 'MiniPoker.MiniPokerController');
// MiniPoker/MiniPokerScript/MiniPoker.MiniPokerController.ts

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
exports.ButtonBet = void 0;
var BundleControl_1 = require("../../Loading/src/BundleControl");
var Configs_1 = require("../../Loading/src/Configs");
var MiniGame_1 = require("../../Lobby/LobbyScript/MiniGame");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var MiniGameNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient");
var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
var MiniPoker_Cmd_1 = require("./MiniPoker.Cmd");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ButtonBet = /** @class */ (function () {
    function ButtonBet() {
        this.button = null;
        this.sfNormal = null;
        this.sfActive = null;
        this._isActive = false;
    }
    ButtonBet.prototype.setActive = function (isActive) {
        this._isActive = isActive;
        this.button.getComponent(cc.Sprite).spriteFrame = isActive ? this.sfActive : this.sfNormal;
        this.button.interactable = !isActive;
    };
    __decorate([
        property(cc.Button)
    ], ButtonBet.prototype, "button", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], ButtonBet.prototype, "sfNormal", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], ButtonBet.prototype, "sfActive", void 0);
    ButtonBet = __decorate([
        ccclass("ButtonBet")
    ], ButtonBet);
    return ButtonBet;
}());
exports.ButtonBet = ButtonBet;
var MiniPokerController = /** @class */ (function (_super) {
    __extends(MiniPokerController, _super);
    function MiniPokerController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprAtlasCards = null;
        _this.columns = null;
        _this.itemTemplate = null;
        _this.lblJackpot = null;
        _this.buttonBets = [];
        _this.lblToast = null;
        _this.btnSpinAnim = null;
        _this.btnSpin = null;
        _this.btnClose = null;
        _this.toggleAuto = null;
        _this.btnBoost = null;
        _this.sprResult = null;
        _this.lblWinCash = null;
        _this.popupContainer = null;
        _this.popups = [];
        _this.rollStartItemCount = 15;
        _this.rollAddItemCount = 10;
        _this.spinDuration = 1.2;
        _this.addSpinDuration = 0.3;
        _this.listBet = [100, 1000, 10000];
        _this.defaultCards = [0, 1, 2, 3, 4];
        _this.itemHeight = 0;
        _this.betIdx = 0;
        _this.isBoost = false;
        _this.isCanChangeBet = true;
        _this.isSpined = true;
        _this.lastSpinRes = null;
        _this.popupGuide = null;
        _this.popupHistory = null;
        _this.popupHonor = null;
        return _this;
    }
    MiniPokerController.prototype.start = function () {
        var _this = this;
        this.itemHeight = this.itemTemplate.height;
        for (var i = 0; i < this.columns.childrenCount; i++) {
            var column = this.columns.children[i];
            var count = this.rollStartItemCount + i * this.rollAddItemCount;
            for (var j = 0; j < count; j++) {
                var item = cc.instantiate(this.itemTemplate);
                item.parent = column;
                if (j >= 1) {
                    item.children[0].getComponent(cc.Sprite).spriteFrame = this.sprAtlasCards.getSpriteFrame("cardBlur_" + Utils_1.default.randomRangeInt(1, 15));
                }
                else {
                    item.children[0].getComponent(cc.Sprite).spriteFrame = this.sprAtlasCards.getSpriteFrame("card" + this.defaultCards[i]);
                }
            }
        }
        this.itemTemplate.removeFromParent();
        this.itemTemplate = null;
        var _loop_1 = function (i) {
            btn = this_1.buttonBets[i];
            btn.setActive(i == this_1.betIdx);
            btn.button.node.on("click", function () {
                App_1.default.instance.showBgMiniGame("MiniPoker");
                if (!_this.isCanChangeBet) {
                    _this.showToast(App_1.default.instance.getTextLang('txt_notify_fast_action'));
                    return;
                }
                var oldIdx = _this.betIdx;
                _this.betIdx = i;
                for (var i_1 = 0; i_1 < _this.buttonBets.length; i_1++) {
                    _this.buttonBets[i_1].setActive(i_1 == _this.betIdx);
                }
                _this.isCanChangeBet = false;
                _this.scheduleOnce(function () {
                    _this.isCanChangeBet = true;
                }, 1);
                MiniGameNetworkClient_1.default.getInstance().send(new MiniPoker_Cmd_1.default.SendChangeRoom(oldIdx, _this.betIdx));
            });
        };
        var this_1 = this, btn;
        for (var i = 0; i < this.buttonBets.length; i++) {
            _loop_1(i);
        }
        this.toggleAuto.node.on("click", function () {
            App_1.default.instance.showBgMiniGame("MiniPoker");
            if (_this.toggleAuto.isChecked) {
                if (_this.isSpined)
                    _this.actSpin();
                _this.btnBoost.interactable = false;
            }
            else {
                _this.btnBoost.interactable = true;
                if (_this.isSpined) {
                    _this.setEnableAllButtons(true);
                }
            }
        });
        this.btnBoost.node.on("click", function () {
            App_1.default.instance.showBgMiniGame("MiniPoker");
            _this.isBoost = !_this.isBoost;
            if (_this.isBoost) {
                if (_this.isSpined)
                    _this.actSpin();
                _this.toggleAuto.interactable = false;
                _this.btnBoost.isChecked = true;
            }
            else {
                _this.toggleAuto.interactable = true;
                _this.btnBoost.isChecked = false;
                if (_this.isSpined) {
                    _this.setEnableAllButtons(true);
                }
            }
        });
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_LOGOUT, function () {
            if (!_this.node.active)
                return;
            _this.dismiss();
        }, this);
        MiniGameNetworkClient_1.default.getInstance().addOnClose(function () {
            if (!_this.node.active)
                return;
            _this.dismiss();
        }, this);
        MiniGameNetworkClient_1.default.getInstance().addListener(function (data) {
            if (!_this.node.active)
                return;
            var inpacket = new Network_InPacket_1.default(data);
            switch (inpacket.getCmdId()) {
                case MiniPoker_Cmd_1.default.Code.UPDATE_JACKPOT: {
                    var res = new MiniPoker_Cmd_1.default.ReceiveUpdateJackpot(data);
                    Tween_1.default.numberTo(_this.lblJackpot, res.value, 0.3);
                    break;
                }
                case MiniPoker_Cmd_1.default.Code.SPIN: {
                    var res = new MiniPoker_Cmd_1.default.ReceiveSpin(data);
                    _this.onSpinResult(res);
                    break;
                }
            }
        }, this);
    };
    MiniPokerController.prototype.show = function () {
        if (this.node.active) {
            this.reOrder();
            return;
        }
        App_1.default.instance.showBgMiniGame("MiniPoker");
        _super.prototype.show.call(this);
        this.lblToast.node.parent.active = false;
        this.sprResult.node.active = false;
        this.lblWinCash.active = false;
        this.isSpined = true;
        this.isCanChangeBet = true;
        this.betIdx = 0;
        for (var i = 0; i < this.buttonBets.length; i++) {
            this.buttonBets[i].setActive(i == this.betIdx);
        }
        MiniGameNetworkClient_1.default.getInstance().send(new MiniPoker_Cmd_1.default.SendScribe(this.betIdx));
    };
    MiniPokerController.prototype.actSpin = function () {
        // cc.log("actSpin");
        //App.instance.showBgMiniGame("MiniPoker");
        if (!this.isSpined) {
            this.showToast(App_1.default.instance.getTextLang('txt_notify_fast_action'));
            return;
        }
        this.btnSpinAnim.play("spin", 0);
        this.isSpined = false;
        this.setEnableAllButtons(false);
        for (var i = 0; i < this.buttonBets.length; i++) {
            this.buttonBets[i].button.interactable = false;
        }
        MiniGameNetworkClient_1.default.getInstance().send(new MiniPoker_Cmd_1.default.SendSpin(this.listBet[this.betIdx]));
    };
    MiniPokerController.prototype.showToast = function (message) {
        this.lblToast.string = message;
        var parent = this.lblToast.node.parent;
        parent.stopAllActions();
        parent.active = true;
        parent.opacity = 0;
        parent.runAction(cc.sequence(cc.fadeIn(0.1), cc.delayTime(2), cc.fadeOut(0.2), cc.callFunc(function () {
            parent.active = false;
        })));
    };
    MiniPokerController.prototype.setEnableAllButtons = function (isEnable) {
        this.btnSpin.interactable = isEnable;
        this.btnClose.interactable = isEnable;
    };
    MiniPokerController.prototype.onSpinResult = function (data) {
        var _this = this;
        // cc.log(data);
        this.lastSpinRes = data;
        var resultSuccess = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        if (resultSuccess.indexOf(data.result) < 0) {
            this.scheduleOnce(function () {
                this.isSpined = true;
            }, 1);
            this.setEnableAllButtons(true);
            for (var i = 0; i < this.buttonBets.length; i++) {
                this.buttonBets[i].button.interactable = true;
            }
            this.toggleAuto.isChecked = false;
            this.toggleAuto.interactable = true;
            this.isBoost = false;
            this.btnBoost.interactable = true;
            this.btnBoost.isChecked = false;
            switch (data.result) {
                case 102:
                    this.showToast(App_1.default.instance.getTextLang('txt_not_enough'));
                    break;
                default:
                    this.showToast(App_1.default.instance.getTextLang('txt_unknown_error1'));
                    break;
            }
            return;
        }
        Configs_1.default.Login.Coin -= this.listBet[this.betIdx];
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        Configs_1.default.Login.Coin = data.currentMoney;
        var result = [data.card1, data.card2, data.card3, data.card4, data.card5];
        //currentMoney: 3392748
        // prize: 0
        // result: 10 = khong an
        // result: 9 = doi J+
        // result: 8 = hai doi
        // result: 7 = sam
        var timeScale = this.isBoost ? 0.5 : 1;
        var _loop_2 = function (i_2) {
            var roll = this_2.columns.children[i_2];
            var step1Pos = this_2.itemHeight * 0.2;
            var step2Pos = -this_2.itemHeight * roll.childrenCount + this_2.itemHeight - this_2.itemHeight * 0.2;
            var step3Pos = -this_2.itemHeight * roll.childrenCount + this_2.itemHeight;
            roll.runAction(cc.sequence(cc.delayTime(0.2 * i_2 * timeScale), cc.moveTo(0.2 * timeScale, cc.v2(roll.getPosition().x, step1Pos)).easing(cc.easeQuadraticActionOut()), cc.moveTo((this_2.spinDuration + this_2.addSpinDuration * i_2) * timeScale, cc.v2(roll.getPosition().x, step2Pos)).easing(cc.easeQuadraticActionInOut()), cc.moveTo(0.2 * timeScale, cc.v2(roll.getPosition().x, step3Pos)).easing(cc.easeQuadraticActionIn()), cc.callFunc(function () {
                roll.setPosition(cc.v2(roll.getPosition().x, 0));
                if (i_2 === _this.columns.childrenCount - 1) {
                    _this.spined();
                }
            })));
            roll.runAction(cc.sequence(cc.delayTime((0.45 + 0.2 * i_2) * timeScale), cc.callFunc(function () {
                var children = roll.children;
                var bottomSprite = children[0].children[0].getComponent(cc.Sprite);
                var topSprite = children[children.length - 1].children[0].getComponent(cc.Sprite);
                bottomSprite.spriteFrame = topSprite.spriteFrame = _this.sprAtlasCards.getSpriteFrame("card" + result[i_2]);
            })));
        };
        var this_2 = this;
        for (var i_2 = 0; i_2 < this.columns.childrenCount; i_2++) {
            _loop_2(i_2);
        }
    };
    MiniPokerController.prototype.spined = function () {
        var _this = this;
        // cc.log("vao day chu ha:" + JSON.stringify(this.lastSpinRes));
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        this.setEnableAllButtons(true);
        if (this.lastSpinRes.prize > 0) {
            // this.lastSpinRes.result = 9;
            switch (this.lastSpinRes.result) {
                case 1:
                    this.sprResult.animation = "jackport";
                    this.sprResult.loop = false;
                    // this.sprResult.getComponent(cc.Sprite).spriteFrame = this.sfTxtNoHu;
                    break;
                case 2:
                    this.sprResult.animation = "thùng phá sảnh2";
                    // this.sprResult.getComponent(cc.Sprite).spriteFrame = this.sfTxtThungPhaSanh;
                    break;
                case 3:
                    this.sprResult.animation = "tu quy";
                    // this.sprResult.getComponent(cc.Sprite).spriteFrame = this.sfTxtTuQuy;
                    break;
                case 4:
                    this.sprResult.animation = "cù lũ";
                    // this.sprResult.getComponent(cc.Sprite).spriteFrame = this.sfTxtThung;
                    break;
                case 5:
                    this.sprResult.animation = "thùng";
                    // this.sprResult.getComponent(cc.Sprite).spriteFrame = this.sfTxtCuLu;
                    break;
                case 6:
                    this.sprResult.animation = "sanh";
                    // this.sprResult.getComponent(cc.Sprite).spriteFrame = this.sfTxtSanh;
                    break;
                case 7:
                    this.sprResult.animation = "sám cô";
                    // this.sprResult.getComponent(cc.Sprite).spriteFrame = this.sfTxtSamCo;
                    break;
                case 8:
                    this.sprResult.animation = "hai đôi";
                    // this.sprResult.getComponent(cc.Sprite).spriteFrame = this.sfTxtHaiDoi;
                    break;
                case 9:
                    this.sprResult.animation = "đôi J+";
                    // this.sprResult.getComponent(cc.Sprite).spriteFrame = this.sfTxtDoiJ;
                    break;
            }
            this.sprResult.node.active = true;
            this.sprResult.node.setScale(1);
            this.lblWinCash.active = true;
            this.lblWinCash.getComponent(cc.Label).string = "+" + this.lastSpinRes.prize;
            this.lblWinCash.setPosition(0, 42);
            this.lblWinCash.runAction(cc.sequence(cc.delayTime(0.5), cc.moveBy(1, cc.v2(0, 140)), cc.delayTime(1), cc.callFunc(function () {
                _this.sprResult.node.active = false;
                _this.lblWinCash.active = false;
                _this.scheduleOnce(function () {
                    _this.isSpined = true;
                    if (_this.toggleAuto.isChecked || _this.isBoost) {
                        _this.actSpin();
                    }
                    else {
                        for (var i = 0; i < _this.buttonBets.length; i++) {
                            _this.buttonBets[i].button.interactable = true;
                        }
                    }
                }, 0.2);
            })));
        }
        else {
            this.scheduleOnce(function () {
                _this.isSpined = true;
                if (_this.toggleAuto.isChecked || _this.isBoost) {
                    _this.actSpin();
                }
                else {
                    for (var i = 0; i < _this.buttonBets.length; i++) {
                        _this.buttonBets[i].button.interactable = true;
                    }
                }
            }, 0.4);
        }
    };
    MiniPokerController.prototype.dismiss = function () {
        _super.prototype.dismiss.call(this);
        for (var i = 0; i < this.popups.length; i++) {
            this.popups[i].active = false;
        }
        App_1.default.instance.hideGameMini("MiniPoker");
        MiniGameNetworkClient_1.default.getInstance().send(new MiniPoker_Cmd_1.default.SendUnScribe(this.betIdx));
    };
    MiniPokerController.prototype.actPopupGuide = function () {
        var _this = this;
        if (this.popupGuide == null) {
            BundleControl_1.default.loadPrefabGame("MiniPoker", "res/prefabs/PopupGuide", function (finish, total) {
                // App.instance.showErrLoading(App.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
                App_1.default.instance.showLoading(false);
                _this.popupGuide = cc.instantiate(prefab).getComponent("Dialog");
                _this.popupGuide.node.parent = _this.popupContainer;
                _this.popupGuide.show();
                _this.popups.push(_this.popupGuide.node);
            });
        }
        else {
            this.popupGuide.show();
        }
    };
    MiniPokerController.prototype.actPopupHistory = function () {
        var _this = this;
        if (this.popupHistory == null) {
            BundleControl_1.default.loadPrefabGame("MiniPoker", "res/prefabs/PopupHistory", function (finish, total) {
                // App.instance.showErrLoading(App.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
                App_1.default.instance.showLoading(false);
                _this.popupHistory = cc.instantiate(prefab).getComponent("MiniPoker.PopupHistory");
                _this.popupHistory.node.parent = _this.popupContainer;
                _this.popupHistory.show();
                _this.popups.push(_this.popupHistory.node);
            });
        }
        else {
            this.popupHistory.show();
        }
    };
    MiniPokerController.prototype.actPopupHonor = function () {
        var _this = this;
        if (this.popupHonor == null) {
            BundleControl_1.default.loadPrefabGame("MiniPoker", "res/prefabs/PopupHonors", function (finish, total) {
                // App.instance.showErrLoading(App.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
                App_1.default.instance.showLoading(false);
                _this.popupHonor = cc.instantiate(prefab).getComponent("MiniPoker.PopupHonors");
                _this.popupHonor.node.parent = _this.popupContainer;
                _this.popupHonor.show();
                _this.popups.push(_this.popupHonor.node);
            });
        }
        else {
            this.popupHonor.show();
        }
    };
    MiniPokerController.prototype.reOrder = function () {
        _super.prototype.reOrder.call(this);
    };
    __decorate([
        property(cc.SpriteAtlas)
    ], MiniPokerController.prototype, "sprAtlasCards", void 0);
    __decorate([
        property(cc.Node)
    ], MiniPokerController.prototype, "columns", void 0);
    __decorate([
        property(cc.Node)
    ], MiniPokerController.prototype, "itemTemplate", void 0);
    __decorate([
        property(cc.Label)
    ], MiniPokerController.prototype, "lblJackpot", void 0);
    __decorate([
        property([ButtonBet])
    ], MiniPokerController.prototype, "buttonBets", void 0);
    __decorate([
        property(cc.Label)
    ], MiniPokerController.prototype, "lblToast", void 0);
    __decorate([
        property(cc.Animation)
    ], MiniPokerController.prototype, "btnSpinAnim", void 0);
    __decorate([
        property(cc.Button)
    ], MiniPokerController.prototype, "btnSpin", void 0);
    __decorate([
        property(cc.Button)
    ], MiniPokerController.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Toggle)
    ], MiniPokerController.prototype, "toggleAuto", void 0);
    __decorate([
        property(cc.Toggle)
    ], MiniPokerController.prototype, "btnBoost", void 0);
    __decorate([
        property(sp.Skeleton)
    ], MiniPokerController.prototype, "sprResult", void 0);
    __decorate([
        property(cc.Node)
    ], MiniPokerController.prototype, "lblWinCash", void 0);
    __decorate([
        property(cc.Node)
    ], MiniPokerController.prototype, "popupContainer", void 0);
    __decorate([
        property([cc.Node])
    ], MiniPokerController.prototype, "popups", void 0);
    MiniPokerController = __decorate([
        ccclass
    ], MiniPokerController);
    return MiniPokerController;
}(MiniGame_1.default));
exports.default = MiniPokerController;

cc._RF.pop();