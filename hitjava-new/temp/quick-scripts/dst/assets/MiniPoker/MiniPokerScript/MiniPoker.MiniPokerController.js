
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/MiniPoker/MiniPokerScript/MiniPoker.MiniPokerController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTWluaVBva2VyXFxNaW5pUG9rZXJTY3JpcHRcXE1pbmlQb2tlci5NaW5pUG9rZXJDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBNEQ7QUFDNUQscURBQWdEO0FBQ2hELDZEQUF3RDtBQUN4RCxpRUFBNEQ7QUFDNUQsNkZBQXdGO0FBQ3hGLHFFQUFnRTtBQUNoRSxxRUFBZ0U7QUFDaEUsdUdBQWtHO0FBQ2xHLDZGQUFnRjtBQUNoRixpREFBa0M7QUFLNUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBQTtRQUVJLFdBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsYUFBUSxHQUFtQixJQUFJLENBQUM7UUFFaEMsYUFBUSxHQUFtQixJQUFJLENBQUM7UUFFaEMsY0FBUyxHQUFHLEtBQUssQ0FBQztJQU90QixDQUFDO0lBTEcsNkJBQVMsR0FBVCxVQUFVLFFBQWlCO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzNGLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQ3pDLENBQUM7SUFaRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNLO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7K0NBQ087SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsrQ0FDTztJQU52QixTQUFTO1FB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RUFBRSxDQUFDLFNBQVMsQ0FBQzs0REFDVTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dEQUNNO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eURBQ087SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyREFDUztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lEQUNPO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7MERBQ1E7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytEQUNhO0lBRy9CO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO3VEQUNVO0lBL0JiLG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBNFp2QztJQUFELDBCQUFDO0NBNVpELEFBNFpDLENBNVpnRCxrQkFBUSxHQTRaeEQ7a0JBNVpvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnVuZGxlQ29udHJvbCBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvQnVuZGxlQ29udHJvbFwiO1xuaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBNaW5pR2FtZSBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvTWluaUdhbWVcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgQnJvYWRjYXN0UmVjZWl2ZXIgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQnJvYWRjYXN0UmVjZWl2ZXJcIjtcbmltcG9ydCBUd2VlbiBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9Ud2VlblwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgTWluaUdhbWVOZXR3b3JrQ2xpZW50IGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvTWluaUdhbWVOZXR3b3JrQ2xpZW50XCI7XG5pbXBvcnQgSW5QYWNrZXQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLkluUGFja2V0XCI7XG5pbXBvcnQgY21kIGZyb20gXCIuL01pbmlQb2tlci5DbWRcIjtcbmltcG9ydCBQb3B1cEhpc3RvcnkgZnJvbSBcIi4vTWluaVBva2VyLlBvcHVwSGlzdG9yeVwiO1xuaW1wb3J0IFBvcHVwSG9ub3JzIGZyb20gXCIuL01pbmlQb2tlci5Qb3B1cEhvbm9yc1wiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKFwiQnV0dG9uQmV0XCIpXG5leHBvcnQgY2xhc3MgQnV0dG9uQmV0IHtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgc2ZOb3JtYWw6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgc2ZBY3RpdmU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuICAgIF9pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgc2V0QWN0aXZlKGlzQWN0aXZlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzQWN0aXZlID0gaXNBY3RpdmU7XG4gICAgICAgIHRoaXMuYnV0dG9uLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gaXNBY3RpdmUgPyB0aGlzLnNmQWN0aXZlIDogdGhpcy5zZk5vcm1hbDtcbiAgICAgICAgdGhpcy5idXR0b24uaW50ZXJhY3RhYmxlID0gIWlzQWN0aXZlO1xuICAgIH1cbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbmlQb2tlckNvbnRyb2xsZXIgZXh0ZW5kcyBNaW5pR2FtZSB7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUF0bGFzKVxuICAgIHNwckF0bGFzQ2FyZHM6IGNjLlNwcml0ZUF0bGFzID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb2x1bW5zOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpdGVtVGVtcGxhdGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxKYWNrcG90OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KFtCdXR0b25CZXRdKVxuICAgIGJ1dHRvbkJldHM6IEJ1dHRvbkJldFtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFRvYXN0OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcbiAgICBidG5TcGluQW5pbTogY2MuQW5pbWF0aW9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0blNwaW46IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG5DbG9zZTogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlKVxuICAgIHRvZ2dsZUF1dG86IGNjLlRvZ2dsZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZSlcbiAgICBidG5Cb29zdDogY2MuVG9nZ2xlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXG4gICAgc3ByUmVzdWx0OiBzcC5Ta2VsZXRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGJsV2luQ2FzaDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcG9wdXBDb250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcbiAgICBwdWJsaWMgcG9wdXBzOiBjYy5Ob2RlW10gPSBbXTtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgcm9sbFN0YXJ0SXRlbUNvdW50ID0gMTU7XG4gICAgcHJpdmF0ZSByZWFkb25seSByb2xsQWRkSXRlbUNvdW50ID0gMTA7XG4gICAgcHJpdmF0ZSByZWFkb25seSBzcGluRHVyYXRpb24gPSAxLjI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBhZGRTcGluRHVyYXRpb24gPSAwLjM7XG4gICAgcHJpdmF0ZSByZWFkb25seSBsaXN0QmV0ID0gWzEwMCwgMTAwMCwgMTAwMDBdO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZGVmYXVsdENhcmRzID0gWzAsIDEsIDIsIDMsIDRdO1xuICAgIHByaXZhdGUgaXRlbUhlaWdodCA9IDA7XG4gICAgcHJpdmF0ZSBiZXRJZHggPSAwO1xuICAgIHByaXZhdGUgaXNCb29zdCA9IGZhbHNlO1xuICAgIHByaXZhdGUgaXNDYW5DaGFuZ2VCZXQgPSB0cnVlO1xuICAgIHByaXZhdGUgaXNTcGluZWQgPSB0cnVlO1xuICAgIHByaXZhdGUgbGFzdFNwaW5SZXM6IGNtZC5SZWNlaXZlU3BpbiA9IG51bGw7XG4gICAgcHJpdmF0ZSBwb3B1cEd1aWRlID0gbnVsbDtcbiAgICBwcml2YXRlIHBvcHVwSGlzdG9yeTogUG9wdXBIaXN0b3J5ID0gbnVsbDtcbiAgICBwcml2YXRlIHBvcHVwSG9ub3I6IFBvcHVwSG9ub3JzID0gbnVsbDtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLml0ZW1IZWlnaHQgPSB0aGlzLml0ZW1UZW1wbGF0ZS5oZWlnaHQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNvbHVtbiA9IHRoaXMuY29sdW1ucy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IHRoaXMucm9sbFN0YXJ0SXRlbUNvdW50ICsgaSAqIHRoaXMucm9sbEFkZEl0ZW1Db3VudDtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY291bnQ7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtVGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50ID0gY29sdW1uO1xuICAgICAgICAgICAgICAgIGlmIChqID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByQXRsYXNDYXJkcy5nZXRTcHJpdGVGcmFtZShcImNhcmRCbHVyX1wiICsgVXRpbHMucmFuZG9tUmFuZ2VJbnQoMSwgMTUpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJBdGxhc0NhcmRzLmdldFNwcml0ZUZyYW1lKFwiY2FyZFwiICsgdGhpcy5kZWZhdWx0Q2FyZHNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZS5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gbnVsbDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnV0dG9uQmV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJ0biA9IHRoaXMuYnV0dG9uQmV0c1tpXTtcbiAgICAgICAgICAgIGJ0bi5zZXRBY3RpdmUoaSA9PSB0aGlzLmJldElkeCk7XG4gICAgICAgICAgICBidG4uYnV0dG9uLm5vZGUub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dCZ01pbmlHYW1lKFwiTWluaVBva2VyXCIpO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0NhbkNoYW5nZUJldCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9ub3RpZnlfZmFzdF9hY3Rpb24nKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IG9sZElkeCA9IHRoaXMuYmV0SWR4O1xuICAgICAgICAgICAgICAgIHRoaXMuYmV0SWR4ID0gaTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnV0dG9uQmV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbkJldHNbaV0uc2V0QWN0aXZlKGkgPT0gdGhpcy5iZXRJZHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlzQ2FuQ2hhbmdlQmV0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ2FuQ2hhbmdlQmV0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZENoYW5nZVJvb20ob2xkSWR4LCB0aGlzLmJldElkeCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRvZ2dsZUF1dG8ubm9kZS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93QmdNaW5pR2FtZShcIk1pbmlQb2tlclwiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnRvZ2dsZUF1dG8uaXNDaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTcGluZWQpIHRoaXMuYWN0U3BpbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuQm9vc3QuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuQm9vc3QuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NwaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVuYWJsZUFsbEJ1dHRvbnModHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJ0bkJvb3N0Lm5vZGUub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0JnTWluaUdhbWUoXCJNaW5pUG9rZXJcIik7XG4gICAgICAgICAgICB0aGlzLmlzQm9vc3QgPSAhdGhpcy5pc0Jvb3N0O1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNCb29zdCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU3BpbmVkKSB0aGlzLmFjdFNwaW4oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUF1dG8uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5Cb29zdC5pc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUF1dG8uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkJvb3N0LmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU3BpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RW5hYmxlQWxsQnV0dG9ucyh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnJlZ2lzdGVyKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfTE9HT1VULCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5hZGRPbkNsb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5ub2RlLmFjdGl2ZSkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmFkZExpc3RlbmVyKChkYXRhOiBVaW50OEFycmF5KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHJldHVybjtcbiAgICAgICAgICAgIGxldCBpbnBhY2tldCA9IG5ldyBJblBhY2tldChkYXRhKTtcbiAgICAgICAgICAgIHN3aXRjaCAoaW5wYWNrZXQuZ2V0Q21kSWQoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuVVBEQVRFX0pBQ0tQT1Q6IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZVVwZGF0ZUphY2twb3QoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsSmFja3BvdCwgcmVzLnZhbHVlLCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5TUElOOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVTcGluKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU3BpblJlc3VsdChyZXMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUuYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLnJlT3JkZXIoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0JnTWluaUdhbWUoXCJNaW5pUG9rZXJcIik7XG4gICAgICAgIHN1cGVyLnNob3coKTtcblxuICAgICAgICB0aGlzLmxibFRvYXN0Lm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNwclJlc3VsdC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxibFdpbkNhc2guYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5pc1NwaW5lZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNDYW5DaGFuZ2VCZXQgPSB0cnVlO1xuICAgICAgICB0aGlzLmJldElkeCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idXR0b25CZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkJldHNbaV0uc2V0QWN0aXZlKGkgPT0gdGhpcy5iZXRJZHgpO1xuICAgICAgICB9XG4gICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kU2NyaWJlKHRoaXMuYmV0SWR4KSk7XG4gICAgfVxuXG4gICAgYWN0U3BpbigpIHtcbiAgICAgICAgLy8gY2MubG9nKFwiYWN0U3BpblwiKTtcbiAgICAgICAgLy9BcHAuaW5zdGFuY2Uuc2hvd0JnTWluaUdhbWUoXCJNaW5pUG9rZXJcIik7XG4gICAgICAgIGlmICghdGhpcy5pc1NwaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbm90aWZ5X2Zhc3RfYWN0aW9uJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYnRuU3BpbkFuaW0ucGxheShcInNwaW5cIiwgMCk7XG4gICAgICAgIHRoaXMuaXNTcGluZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZXRFbmFibGVBbGxCdXR0b25zKGZhbHNlKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJ1dHRvbkJldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uQmV0c1tpXS5idXR0b24uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRTcGluKHRoaXMubGlzdEJldFt0aGlzLmJldElkeF0pKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dUb2FzdChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5sYmxUb2FzdC5zdHJpbmcgPSBtZXNzYWdlO1xuICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy5sYmxUb2FzdC5ub2RlLnBhcmVudDtcbiAgICAgICAgcGFyZW50LnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHBhcmVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBwYXJlbnQub3BhY2l0eSA9IDA7XG4gICAgICAgIHBhcmVudC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZmFkZUluKDAuMSksIGNjLmRlbGF5VGltZSgyKSwgY2MuZmFkZU91dCgwLjIpLCBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICBwYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRFbmFibGVBbGxCdXR0b25zKGlzRW5hYmxlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuYnRuU3Bpbi5pbnRlcmFjdGFibGUgPSBpc0VuYWJsZTtcbiAgICAgICAgdGhpcy5idG5DbG9zZS5pbnRlcmFjdGFibGUgPSBpc0VuYWJsZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU3BpblJlc3VsdChkYXRhOiBjbWQuUmVjZWl2ZVNwaW4pIHtcbiAgICAgICAgLy8gY2MubG9nKGRhdGEpO1xuICAgICAgICB0aGlzLmxhc3RTcGluUmVzID0gZGF0YTtcblxuICAgICAgICB2YXIgcmVzdWx0U3VjY2VzcyA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTFdO1xuICAgICAgICBpZiAocmVzdWx0U3VjY2Vzcy5pbmRleE9mKGRhdGEucmVzdWx0KSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3BpbmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRFbmFibGVBbGxCdXR0b25zKHRydWUpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJ1dHRvbkJldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbkJldHNbaV0uYnV0dG9uLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQXV0by5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQXV0by5pbnRlcmFjdGFibGUgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLmlzQm9vc3QgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYnRuQm9vc3QuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYnRuQm9vc3QuaXNDaGVja2VkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoZGF0YS5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDEwMjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbm90X2Vub3VnaCcpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfdW5rbm93bl9lcnJvcjEnKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luIC09IHRoaXMubGlzdEJldFt0aGlzLmJldElkeF07XG4gICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG4gICAgICAgIENvbmZpZ3MuTG9naW4uQ29pbiA9IGRhdGEuY3VycmVudE1vbmV5O1xuXG4gICAgICAgIGxldCByZXN1bHQgPSBbZGF0YS5jYXJkMSwgZGF0YS5jYXJkMiwgZGF0YS5jYXJkMywgZGF0YS5jYXJkNCwgZGF0YS5jYXJkNV07XG4gICAgICAgIC8vY3VycmVudE1vbmV5OiAzMzkyNzQ4XG4gICAgICAgIC8vIHByaXplOiAwXG4gICAgICAgIC8vIHJlc3VsdDogMTAgPSBraG9uZyBhblxuICAgICAgICAvLyByZXN1bHQ6IDkgPSBkb2kgSitcbiAgICAgICAgLy8gcmVzdWx0OiA4ID0gaGFpIGRvaVxuICAgICAgICAvLyByZXN1bHQ6IDcgPSBzYW1cbiAgICAgICAgbGV0IHRpbWVTY2FsZSA9IHRoaXMuaXNCb29zdCA/IDAuNSA6IDE7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvbGwgPSB0aGlzLmNvbHVtbnMuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBsZXQgc3RlcDFQb3MgPSB0aGlzLml0ZW1IZWlnaHQgKiAwLjI7XG4gICAgICAgICAgICBsZXQgc3RlcDJQb3MgPSAtdGhpcy5pdGVtSGVpZ2h0ICogcm9sbC5jaGlsZHJlbkNvdW50ICsgdGhpcy5pdGVtSGVpZ2h0IC0gdGhpcy5pdGVtSGVpZ2h0ICogMC4yO1xuICAgICAgICAgICAgbGV0IHN0ZXAzUG9zID0gLXRoaXMuaXRlbUhlaWdodCAqIHJvbGwuY2hpbGRyZW5Db3VudCArIHRoaXMuaXRlbUhlaWdodDtcbiAgICAgICAgICAgIHJvbGwucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjIgKiBpICogdGltZVNjYWxlKSxcbiAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4yICogdGltZVNjYWxlLCBjYy52Mihyb2xsLmdldFBvc2l0aW9uKCkueCwgc3RlcDFQb3MpKS5lYXNpbmcoY2MuZWFzZVF1YWRyYXRpY0FjdGlvbk91dCgpKSxcbiAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oKHRoaXMuc3BpbkR1cmF0aW9uICsgdGhpcy5hZGRTcGluRHVyYXRpb24gKiBpKSAqIHRpbWVTY2FsZSwgY2MudjIocm9sbC5nZXRQb3NpdGlvbigpLngsIHN0ZXAyUG9zKSkuZWFzaW5nKGNjLmVhc2VRdWFkcmF0aWNBY3Rpb25Jbk91dCgpKSxcbiAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4yICogdGltZVNjYWxlLCBjYy52Mihyb2xsLmdldFBvc2l0aW9uKCkueCwgc3RlcDNQb3MpKS5lYXNpbmcoY2MuZWFzZVF1YWRyYXRpY0FjdGlvbkluKCkpLFxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm9sbC5zZXRQb3NpdGlvbihjYy52Mihyb2xsLmdldFBvc2l0aW9uKCkueCwgMCkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gdGhpcy5jb2x1bW5zLmNoaWxkcmVuQ291bnQgLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwaW5lZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgcm9sbC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKCgwLjQ1ICsgMC4yICogaSkgKiB0aW1lU2NhbGUpLFxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gcm9sbC5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJvdHRvbVNwcml0ZSA9IGNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdG9wU3ByaXRlID0gY2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoIC0gMV0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbVNwcml0ZS5zcHJpdGVGcmFtZSA9IHRvcFNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByQXRsYXNDYXJkcy5nZXRTcHJpdGVGcmFtZShcImNhcmRcIiArIHJlc3VsdFtpXSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzcGluZWQoKSB7XG4gICAgICAgIC8vIGNjLmxvZyhcInZhbyBkYXkgY2h1IGhhOlwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5sYXN0U3BpblJlcykpO1xuICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuICAgICAgICB0aGlzLnNldEVuYWJsZUFsbEJ1dHRvbnModHJ1ZSk7XG4gICAgICAgIGlmICh0aGlzLmxhc3RTcGluUmVzLnByaXplID4gMCkge1xuICAgICAgICAgICAgLy8gdGhpcy5sYXN0U3BpblJlcy5yZXN1bHQgPSA5O1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmxhc3RTcGluUmVzLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJSZXN1bHQuYW5pbWF0aW9uID0gXCJqYWNrcG9ydFwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwclJlc3VsdC5sb29wID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc3ByUmVzdWx0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zZlR4dE5vSHU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJSZXN1bHQuYW5pbWF0aW9uID0gXCJ0aMO5bmcgcGjDoSBz4bqjbmgyXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc3ByUmVzdWx0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zZlR4dFRodW5nUGhhU2FuaDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwclJlc3VsdC5hbmltYXRpb24gPSBcInR1IHF1eVwiO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNwclJlc3VsdC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZUeHRUdVF1eTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwclJlc3VsdC5hbmltYXRpb24gPSBcImPDuSBsxalcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zcHJSZXN1bHQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNmVHh0VGh1bmc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJSZXN1bHQuYW5pbWF0aW9uID0gXCJ0aMO5bmdcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zcHJSZXN1bHQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNmVHh0Q3VMdTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwclJlc3VsdC5hbmltYXRpb24gPSBcInNhbmhcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zcHJSZXN1bHQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNmVHh0U2FuaDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwclJlc3VsdC5hbmltYXRpb24gPSBcInPDoW0gY8O0XCI7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc3ByUmVzdWx0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zZlR4dFNhbUNvO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByUmVzdWx0LmFuaW1hdGlvbiA9IFwiaGFpIMSRw7RpXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc3ByUmVzdWx0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zZlR4dEhhaURvaTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwclJlc3VsdC5hbmltYXRpb24gPSBcIsSRw7RpIEorXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc3ByUmVzdWx0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zZlR4dERvaUo7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zcHJSZXN1bHQubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zcHJSZXN1bHQubm9kZS5zZXRTY2FsZSgxKTtcblxuICAgICAgICAgICAgdGhpcy5sYmxXaW5DYXNoLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxibFdpbkNhc2guZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIitcIiArIHRoaXMubGFzdFNwaW5SZXMucHJpemU7XG4gICAgICAgICAgICB0aGlzLmxibFdpbkNhc2guc2V0UG9zaXRpb24oMCwgNDIpO1xuICAgICAgICAgICAgdGhpcy5sYmxXaW5DYXNoLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC41KSxcbiAgICAgICAgICAgICAgICBjYy5tb3ZlQnkoMSwgY2MudjIoMCwgMTQwKSksXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDEpLFxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJSZXN1bHQubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxXaW5DYXNoLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU3BpbmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvZ2dsZUF1dG8uaXNDaGVja2VkIHx8IHRoaXMuaXNCb29zdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0U3BpbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYnV0dG9uQmV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbkJldHNbaV0uYnV0dG9uLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCAwLjIpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3BpbmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50b2dnbGVBdXRvLmlzQ2hlY2tlZCB8fCB0aGlzLmlzQm9vc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RTcGluKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJ1dHRvbkJldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uQmV0c1tpXS5idXR0b24uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDAuNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNtaXNzKCkge1xuICAgICAgICBzdXBlci5kaXNtaXNzKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wb3B1cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBzW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIEFwcC5pbnN0YW5jZS5oaWRlR2FtZU1pbmkoXCJNaW5pUG9rZXJcIik7XG4gICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kVW5TY3JpYmUodGhpcy5iZXRJZHgpKTtcbiAgICB9XG4gICAgYWN0UG9wdXBHdWlkZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucG9wdXBHdWlkZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBCdW5kbGVDb250cm9sLmxvYWRQcmVmYWJHYW1lKFwiTWluaVBva2VyXCIsIFwicmVzL3ByZWZhYnMvUG9wdXBHdWlkZVwiLCAoZmluaXNoLCB0b3RhbCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEFwcC5pbnN0YW5jZS5zaG93RXJyTG9hZGluZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9sb2FkaW5nMScpICsgcGFyc2VJbnQoKGZpbmlzaCAvIHRvdGFsKSAqIDEwMCkgKyBcIiVcIik7XG4gICAgICAgICAgICB9LCBwcmVmYWIgPT4ge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEd1aWRlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKS5nZXRDb21wb25lbnQoXCJEaWFsb2dcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEd1aWRlLm5vZGUucGFyZW50ID0gdGhpcy5wb3B1cENvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwR3VpZGUuc2hvdygpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBzLnB1c2godGhpcy5wb3B1cEd1aWRlLm5vZGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwR3VpZGUuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFjdFBvcHVwSGlzdG9yeSgpIHtcbiAgICAgICAgaWYgKHRoaXMucG9wdXBIaXN0b3J5ID09IG51bGwpIHtcbiAgICAgICAgICAgIEJ1bmRsZUNvbnRyb2wubG9hZFByZWZhYkdhbWUoXCJNaW5pUG9rZXJcIiwgXCJyZXMvcHJlZmFicy9Qb3B1cEhpc3RvcnlcIiwgKGZpbmlzaCwgdG90YWwpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9hZGluZzEnKSArIHBhcnNlSW50KChmaW5pc2ggLyB0b3RhbCkgKiAxMDApICsgXCIlXCIpO1xuICAgICAgICAgICAgfSwgcHJlZmFiID0+IHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBIaXN0b3J5ID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKS5nZXRDb21wb25lbnQoXCJNaW5pUG9rZXIuUG9wdXBIaXN0b3J5XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBIaXN0b3J5Lm5vZGUucGFyZW50ID0gdGhpcy5wb3B1cENvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwSGlzdG9yeS5zaG93KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cHMucHVzaCh0aGlzLnBvcHVwSGlzdG9yeS5ub2RlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3B1cEhpc3Rvcnkuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFjdFBvcHVwSG9ub3IoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvcHVwSG9ub3IgPT0gbnVsbCkge1xuICAgICAgICAgICAgQnVuZGxlQ29udHJvbC5sb2FkUHJlZmFiR2FtZShcIk1pbmlQb2tlclwiLCBcInJlcy9wcmVmYWJzL1BvcHVwSG9ub3JzXCIsIChmaW5pc2gsIHRvdGFsKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQXBwLmluc3RhbmNlLnNob3dFcnJMb2FkaW5nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvYWRpbmcxJykgKyBwYXJzZUludCgoZmluaXNoIC8gdG90YWwpICogMTAwKSArIFwiJVwiKTtcbiAgICAgICAgICAgIH0sIHByZWZhYiA9PiB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwSG9ub3IgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChcIk1pbmlQb2tlci5Qb3B1cEhvbm9yc1wiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwSG9ub3Iubm9kZS5wYXJlbnQgPSB0aGlzLnBvcHVwQ29udGFpbmVyO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBIb25vci5zaG93KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cHMucHVzaCh0aGlzLnBvcHVwSG9ub3Iubm9kZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBIb25vci5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHJlT3JkZXIoKSB7XG4gICAgICAgIHN1cGVyLnJlT3JkZXIoKTtcbiAgICB9XG59XG4iXX0=