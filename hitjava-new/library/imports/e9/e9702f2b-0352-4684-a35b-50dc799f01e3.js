"use strict";
cc._RF.push(module, 'e97028rA1JGhKNbUNx5nwHj', 'GameLiveController');
// Lobby/LobbyScript/GameLive/GameLiveController.ts

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
var DropDown_1 = require("../../../Loading/Add-on/DropDown/Script/DropDown");
var Configs_1 = require("../../../Loading/src/Configs");
var Http_1 = require("../../../Loading/src/Http");
var App_1 = require("../Script/common/App");
var BroadcastReceiver_1 = require("../Script/common/BroadcastReceiver");
var Tween_1 = require("../Script/common/Tween");
var Utils_1 = require("../Script/common/Utils");
var ItemGameLive_1 = require("./ItemGameLive");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ListGame = ["Tài khoản chính", "Thể thao"];
var _this = null;
var GameLiveController = /** @class */ (function (_super) {
    __extends(GameLiveController, _super);
    function GameLiveController() {
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        _this_1.boxLeft = null;
        _this_1.boxRight = null;
        _this_1.arrItem = [];
        _this_1.dropFrom = null;
        _this_1.dropTo = null;
        _this_1.editMoney = null;
        _this_1.txtTotalMoney = null;
        _this_1.balanceEBET = 0;
        _this_1.totalMoney = 0;
        return _this_1;
    }
    GameLiveController.prototype.onLoad = function () {
        _this = this;
        ListGame = [App_1.default.instance.getTextLang("txt_main_account"), "Thể thao"];
    };
    GameLiveController.prototype.show = function () {
        this.node.setSiblingIndex(this.node.parent.childrenCount);
        this.editMoney.tabIndex = -1;
        this.boxLeft.opacity = 0;
        this.boxLeft.position = new cc.Vec3(0, 200, 0);
        cc.Tween.stopAllByTarget(this.boxLeft);
        cc.tween(this.boxLeft)
            .to(0.5, { position: cc.v3(0, 0, 0), opacity: 255 }, { easing: "backOut" })
            .start();
        this.boxRight.opacity = 0;
        this.boxRight.position = new cc.Vec3(0, -200, 0);
        cc.Tween.stopAllByTarget(this.boxRight);
        cc.tween(this.boxRight)
            .to(0.5, { position: cc.v3(0, 0, 0), opacity: 255 }, { easing: "backOut" })
            .start();
        // this.dropFrom = this.dropFrom.getComponent("DropDown");
        this.dropTo = this.dropTo.getComponent("DropDown");
        this.editMoney.string = "";
        this.initDropFrom();
        this.initDropTo();
        this.totalMoney = Configs_1.default.Login.Coin;
        this.updateTotalMoney();
        this.node.active = true;
        for (var i = 0; i < this.arrItem.length; i++) {
            this.arrItem[i].show();
        }
        this.arrItem[0].updateData(Configs_1.default.Login.Coin);
        this.updateInfoEBET(true);
    };
    GameLiveController.prototype.updateInfoEBET = function (isUpdateTotal) {
        var _this_1 = this;
        if (isUpdateTotal === void 0) { isUpdateTotal = false; }
        Http_1.default.postz("https://server.FANVIN.wIN/InfoEBET", { t: "CheckBalance", nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
            ////Utils.Log("updateInfo EBET:" + JSON.stringify(res));
            if (res["res"] == 0) {
                _this.arrItem[6].updateData(res["data"]["money"] * 100);
                _this.balanceEBET = res["data"]["money"] * 100;
                if (isUpdateTotal == true) {
                    _this.totalMoney += res["data"]["money"] * 100;
                    _this.updateTotalMoney();
                }
            }
            else {
                _this_1.arrItem[6].maintain();
            }
        });
    };
    GameLiveController.prototype.initDropFrom = function () {
        var datas = new Array();
        for (var i = 0; i < ListGame.length; i++) {
            datas.push({ optionString: ListGame[i] });
        }
        this.dropFrom.clearOptionDatas();
        this.dropFrom.addOptionDatas(datas);
        this.dropFrom.selectedIndex = 0;
    };
    GameLiveController.prototype.initDropTo = function () {
        var datas = new Array();
        for (var i = 0; i < ListGame.length; i++) {
            datas.push({ optionString: ListGame[i] });
        }
        this.dropTo.clearOptionDatas();
        this.dropTo.addOptionDatas(datas);
        this.dropTo.selectedIndex = 1;
    };
    GameLiveController.prototype.updateTotalMoney = function () {
        Tween_1.default.numberTo(this.txtTotalMoney, this.totalMoney, 1);
    };
    GameLiveController.prototype.hide = function () {
        this.node.active = false;
    };
    GameLiveController.prototype.onToggleDropTo = function () {
    };
    GameLiveController.prototype.onToggleDropFrom = function () {
    };
    GameLiveController.prototype.onBtnConfirm = function () {
        ////Utils.Log("vao day cai ne");
        //console.log(ListGame);
        var _this_1 = this;
        setTimeout(function () {
            if (_this_1.dropFrom.labelCaption.string == ListGame[0]) {
                //nap
                var money = Utils_1.default.formatEditBox(_this_1.editMoney.string) / 100;
                if (_this_1.editMoney.string == "") {
                    App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_input_all"));
                    return;
                }
                else if (_this_1.dropFrom.labelCaption.string == _this_1.dropTo.labelCaption.string) {
                    App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_input_error"));
                    return;
                }
                else if (_this_1.dropFrom.selectedIndex != 0 && _this_1.dropTo.selectedIndex != 0) {
                    App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_input_error"));
                }
                switch (_this_1.dropTo.labelCaption.string) {
                    case ListGame[1]:
                        if (money * 100 > Configs_1.default.Login.Coin) {
                            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_not_enough"));
                            return;
                        }
                        ////Utils.Log("Nap:" + _this.arrItem[0].money + " : " + _this.arrItem[1].money + " : " + money);
                        App_1.default.instance.showLoading(true);
                        Http_1.default.get(App_1.default.API_AG, { t: "Deposit", a: money, nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
                            App_1.default.instance.showLoading(false);
                            if (res["res"] == 0) {
                                ////Utils.Log("Nap AG res:" + JSON.stringify(res));
                                _this.updateInfoEBET();
                                _this.arrItem[0].updateData(_this.arrItem[0].money - money * 100);
                                Configs_1.default.Login.Coin -= money * 100;
                                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_note_transfer_8"));
                            }
                            else {
                                App_1.default.instance.ShowAlertDialog(res["msg"]);
                            }
                        });
                        break;
                }
            }
            else if (_this_1.dropTo.labelCaption.string == ListGame[0]) {
                //rut
                var money = Utils_1.default.formatEditBox(_this_1.editMoney.string) / 100;
                if (_this_1.editMoney.string == "") {
                    App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_input_all"));
                    return;
                }
                else if (_this_1.dropFrom.labelCaption.string == _this_1.dropTo.labelCaption.string) {
                    App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_input_error"));
                    return;
                }
                else if (_this_1.dropFrom.selectedIndex != 0 && _this_1.dropTo.selectedIndex != 0) {
                    App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_input_error"));
                }
                switch (_this_1.dropFrom.labelCaption.string) {
                    case ListGame[1]:
                        ////Utils.Log("Rut:" + this.balanceAG);
                        //ag
                        if (money * 100 > _this_1.balanceEBET) {
                            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_not_enough"));
                            return;
                        }
                        App_1.default.instance.showLoading(true);
                        Http_1.default.get(App_1.default.API_AG, { t: "Withdraw", a: money, nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
                            App_1.default.instance.showLoading(false);
                            if (res["res"] == 0) {
                                _this.updateInfoAG();
                                _this.arrItem[0].updateData(_this.arrItem[0].money + money * 100);
                                Configs_1.default.Login.Coin += money * 100;
                                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_note_transfer_9"));
                            }
                            else {
                                App_1.default.instance.ShowAlertDialog(res["msg"]);
                            }
                        });
                        break;
                }
            }
            else {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_input_error"));
                return;
            }
        }, 300);
    };
    __decorate([
        property(cc.Node)
    ], GameLiveController.prototype, "boxLeft", void 0);
    __decorate([
        property(cc.Node)
    ], GameLiveController.prototype, "boxRight", void 0);
    __decorate([
        property([ItemGameLive_1.default])
    ], GameLiveController.prototype, "arrItem", void 0);
    __decorate([
        property(DropDown_1.default)
    ], GameLiveController.prototype, "dropFrom", void 0);
    __decorate([
        property(DropDown_1.default)
    ], GameLiveController.prototype, "dropTo", void 0);
    __decorate([
        property(cc.EditBox)
    ], GameLiveController.prototype, "editMoney", void 0);
    __decorate([
        property(cc.Label)
    ], GameLiveController.prototype, "txtTotalMoney", void 0);
    GameLiveController = __decorate([
        ccclass
    ], GameLiveController);
    return GameLiveController;
}(cc.Component));
exports.default = GameLiveController;

cc._RF.pop();