
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/GameLive/GameLiveGeneralController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a1bc7vnR69A4L66rBn0DAWC', 'GameLiveGeneralController');
// Lobby/LobbyScript/GameLive/GameLiveGeneralController.ts

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
var Configs_1 = require("../../../Loading/src/Configs");
var Http_1 = require("../../../Loading/src/Http");
var App_1 = require("../Script/common/App");
var BroadcastReceiver_1 = require("../Script/common/BroadcastReceiver");
var Tween_1 = require("../Script/common/Tween");
var Utils_1 = require("../Script/common/Utils");
var ItemGameLive_1 = require("./ItemGameLive");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ListGame = ["Tài khoản chính", "Live Casino AG", "Thể thao IBC2", "Live Casino WM", "Thể thao CMD368"];
var _this = null;
var GameLiveGeneralController = /** @class */ (function (_super) {
    __extends(GameLiveGeneralController, _super);
    function GameLiveGeneralController() {
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        _this_1.boxLeft = null;
        _this_1.boxRight = null;
        _this_1.arrItem = [];
        _this_1.dropFrom = null;
        _this_1.dropTo = null;
        _this_1.editMoney = null;
        _this_1.txtTotalMoney = null;
        _this_1.balanceAG = 0;
        _this_1.balanceIBC = 0;
        _this_1.balanceWM = 0;
        _this_1.balanceCMD = 0;
        _this_1.totalMoney = 0;
        return _this_1;
    }
    GameLiveGeneralController.prototype.onLoad = function () {
        _this = this;
    };
    GameLiveGeneralController.prototype.show = function () {
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
        this.dropFrom = this.dropFrom.getComponent("DropDown");
        this.dropTo = this.dropTo.getComponent("DropDown");
        this.editMoney.string = "";
        this.initDropFrom();
        this.initDropTo();
        this.totalMoney = 0;
        this.totalMoney += Configs_1.default.Login.Coin;
        this.updateTotalMoney();
        this.node.active = true;
        for (var i = 0; i < this.arrItem.length; i++) {
            this.arrItem[i].show();
        }
        this.arrItem[0].updateData(Configs_1.default.Login.Coin);
        this.updateInfoAG(true);
        this.updateInfoIBC(true);
        this.updateInfoWM(true);
        this.updateInfoCMD(true);
    };
    GameLiveGeneralController.prototype.updateInfoAG = function (isUpdateTotal) {
        if (isUpdateTotal === void 0) { isUpdateTotal = false; }
        Http_1.default.get(App_1.default.API_AG, { t: "GetBalance", nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
            ////Utils.Log("updateInfoAg:"+JSON.stringify(res));
            if (res["res"] == 0) {
                if (res["list"][0]["info"] == "error") {
                    _this.arrItem[1].maintain();
                }
                else {
                    _this.arrItem[1].updateData(res.list[0]["info"]);
                    _this.balanceAG = parseInt(res.list[0]["info"]) * 1000;
                    if (isUpdateTotal == true) {
                        _this.totalMoney += parseInt(res.list[0]["info"]) * 1000;
                        _this.updateTotalMoney();
                    }
                }
            }
            else {
                _this.arrItem[1].maintain();
            }
        });
    };
    GameLiveGeneralController.prototype.updateInfoIBC = function (isUpdateTotal) {
        if (isUpdateTotal === void 0) { isUpdateTotal = false; }
        Http_1.default.get(App_1.default.API_IBC, { t: "CheckBalance", nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
            ////Utils.Log("updateInfoICB:"+JSON.stringify(res));
            if (res["code"] == 0) {
                _this.arrItem[2].updateData(res["data"]["balance"]);
                _this.balanceIBC = parseInt(res["data"]["balance"]) * 1000;
                if (isUpdateTotal == true) {
                    _this.totalMoney += parseInt(res["data"]["balance"]) * 1000;
                    _this.updateTotalMoney();
                }
            }
            else {
                _this.arrItem[2].maintain();
            }
        });
    };
    GameLiveGeneralController.prototype.updateInfoWM = function (isUpdateTotal) {
        if (isUpdateTotal === void 0) { isUpdateTotal = false; }
        Http_1.default.get(App_1.default.API_WM, { t: "CheckBalance", nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
            ////Utils.Log("updateInfoWM:"+JSON.stringify(res));
            if (res["list"][0] == 0) {
                _this.arrItem[3].updateData(res["list"][1]);
                _this.balanceWM = parseInt(res["list"][1]) * 1000;
                if (isUpdateTotal == true) {
                    _this.totalMoney += parseInt(res["list"][1]) * 1000;
                    _this.updateTotalMoney();
                }
            }
            else {
                _this.arrItem[3].maintain();
            }
        });
    };
    GameLiveGeneralController.prototype.updateInfoCMD = function (isUpdateTotal) {
        if (isUpdateTotal === void 0) { isUpdateTotal = false; }
        Http_1.default.get(App_1.default.API_CMD, { t: "bl", nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
            ////Utils.Log("updateInfoCMD:"+JSON.stringify(res));
            if (res["code"] == 0) {
                _this.arrItem[4].updateData(res["data"]["data"][0]["betAmount"]);
                _this.balanceCMD = res["data"]["data"][0]["betAmount"];
                if (isUpdateTotal == true) {
                    _this.totalMoney += res["data"]["data"][0]["betAmount"];
                    _this.updateTotalMoney();
                }
            }
            else {
                // if (res["msg"] != null) {
                //     App.instance.ShowAlertDialog("msg");
                // }
                _this.arrItem[4].maintain();
            }
        });
    };
    GameLiveGeneralController.prototype.initDropFrom = function () {
        var datas = new Array();
        for (var i = 0; i < ListGame.length; i++) {
            datas.push({ optionString: ListGame[i] });
        }
        this.dropFrom.clearOptionDatas();
        this.dropFrom.addOptionDatas(datas);
        this.dropFrom.selectedIndex = 0;
    };
    GameLiveGeneralController.prototype.initDropTo = function () {
        var datas = new Array();
        for (var i = 0; i < ListGame.length; i++) {
            datas.push({ optionString: ListGame[i] });
        }
        this.dropTo.clearOptionDatas();
        this.dropTo.addOptionDatas(datas);
        this.dropTo.selectedIndex = 1;
    };
    GameLiveGeneralController.prototype.updateTotalMoney = function () {
        Tween_1.default.numberTo(this.txtTotalMoney, this.totalMoney, 1);
    };
    GameLiveGeneralController.prototype.hide = function () {
        this.node.active = false;
    };
    GameLiveGeneralController.prototype.onToggleDropTo = function () {
    };
    GameLiveGeneralController.prototype.onToggleDropFrom = function () {
    };
    GameLiveGeneralController.prototype.onBtnConfirm = function () {
        ////Utils.Log("vao day cai ne");
        if (this.dropFrom.labelCaption.string == ListGame[0]) {
            //nap
            var money = Utils_1.default.formatEditBox(this.editMoney.string) / 1000;
            if (this.editMoney.string == "") {
                App_1.default.instance.ShowAlertDialog("Vui lòng điền đầy đủ thông tin");
                return;
            }
            else if (this.dropFrom.labelCaption.string == this.dropTo.labelCaption.string) {
                App_1.default.instance.ShowAlertDialog("Thông tin chưa chính xác! Vui lòng kiểm tra lại");
                return;
            }
            else if (this.dropFrom.selectedIndex != 0 && this.dropTo.selectedIndex != 0) {
                App_1.default.instance.ShowAlertDialog("Thông tin chưa chính xác! Vui lòng kiểm tra lại");
            }
            if (this.dropTo.labelCaption.string == ListGame[1]) {
                //ag
                if (money * 1000 > Configs_1.default.Login.Coin) {
                    App_1.default.instance.ShowAlertDialog("Số dư không đủ!");
                    return;
                }
                ////Utils.Log("Nap:" + _this.arrItem[0].money + " : " + _this.arrItem[1].money + " : " + money);
                App_1.default.instance.showLoading(true);
                Http_1.default.get(Configs_1.default.App.API_AG, { t: "Deposit", a: money, nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
                    App_1.default.instance.showLoading(false);
                    if (res["res"] == 0) {
                        ////Utils.Log("Nap AG res:" + JSON.stringify(res));
                        _this.updateInfoAG();
                        _this.arrItem[0].updateData(_this.arrItem[0].money - money * 1000);
                        Configs_1.default.Login.Coin -= money * 1000;
                        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                        App_1.default.instance.ShowAlertDialog("Nạp Thành Công!");
                    }
                    else {
                        App_1.default.instance.ShowAlertDialog(res["msg"]);
                    }
                });
            }
            else if (this.dropTo.labelCaption.string == ListGame[2]) {
                //ibc
                var money = Utils_1.default.formatEditBox(this.editMoney.string);
                if (money > Configs_1.default.Login.Coin) {
                    App_1.default.instance.ShowAlertDialog("Số dư không đủ!");
                    return;
                }
                if (this.editMoney.string == "") {
                    App_1.default.instance.ShowAlertDialog("Vui lòng điền đầy đủ thông tin");
                    return;
                }
                else if (this.dropFrom.labelCaption.string == this.dropTo.labelCaption.string) {
                    App_1.default.instance.ShowAlertDialog("Thông tin chưa chính xác! Vui lòng kiểm tra lại");
                    return;
                }
                else if (this.dropFrom.selectedIndex != 0 && this.dropTo.selectedIndex != 0) {
                    App_1.default.instance.ShowAlertDialog("Thông tin chưa chính xác! Vui lòng kiểm tra lại");
                }
                ////Utils.Log("Nap:" + _this.arrItem[0].money + " : " + _this.arrItem[2].money + " : " + money);
                App_1.default.instance.showLoading(true);
                Http_1.default.get(App_1.default.API_IBC, { t: "Transfer", d: 1, a: money, nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
                    App_1.default.instance.showLoading(false);
                    ////Utils.Log("Nap IBC err:" + JSON.stringify(err));
                    ////Utils.Log("Nap IBC res:" + JSON.stringify(res));
                    if (res["code"] == 0) {
                        _this.updateInfoIBC();
                        _this.arrItem[0].updateData(_this.arrItem[0].money - money);
                        Configs_1.default.Login.Coin -= money;
                        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                        App_1.default.instance.ShowAlertDialog("Nạp Thành Công!");
                    }
                    else {
                        App_1.default.instance.ShowAlertDialog(res["message"]);
                    }
                });
            }
            else if (this.dropTo.labelCaption.string == ListGame[3]) {
                //wm
                var money = Utils_1.default.formatEditBox(this.editMoney.string);
                if (money > Configs_1.default.Login.Coin) {
                    App_1.default.instance.ShowAlertDialog("Số dư không đủ!");
                    return;
                }
                if (this.editMoney.string == "") {
                    App_1.default.instance.ShowAlertDialog("Vui lòng điền đầy đủ thông tin");
                    return;
                }
                else if (this.dropFrom.labelCaption.string == this.dropTo.labelCaption.string) {
                    App_1.default.instance.ShowAlertDialog("Thông tin chưa chính xác! Vui lòng kiểm tra lại");
                    return;
                }
                else if (this.dropFrom.selectedIndex != 0 && this.dropTo.selectedIndex != 0) {
                    App_1.default.instance.ShowAlertDialog("Thông tin chưa chính xác! Vui lòng kiểm tra lại");
                }
                ////Utils.Log("Nap:" + _this.arrItem[0].money + " : " + _this.arrItem[3].money + " : " + money);
                App_1.default.instance.showLoading(true);
                Http_1.default.get(App_1.default.API_WM, { t: "Transfer", d: 1, a: money, nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
                    App_1.default.instance.showLoading(false);
                    ////Utils.Log("Nap wm err:" + JSON.stringify(err));
                    ////Utils.Log("Nap wm res:" + JSON.stringify(res));
                    if (res["res"] == 0) {
                        _this.updateInfoWM();
                        _this.arrItem[0].updateData(_this.arrItem[0].money - money);
                        Configs_1.default.Login.Coin -= money;
                        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                        App_1.default.instance.ShowAlertDialog("Nạp Thành Công!");
                    }
                    else {
                        App_1.default.instance.ShowAlertDialog(res["msg"]);
                    }
                });
            }
            else if (this.dropTo.labelCaption.string == ListGame[4]) {
                //wm
                var money = Utils_1.default.formatEditBox(this.editMoney.string);
                if (money > Configs_1.default.Login.Coin) {
                    App_1.default.instance.ShowAlertDialog("Số dư không đủ!");
                    return;
                }
                if (this.editMoney.string == "") {
                    App_1.default.instance.ShowAlertDialog("Vui lòng điền đầy đủ thông tin");
                    return;
                }
                if (money < 50000) {
                    App_1.default.instance.ShowAlertDialog("Chuyển tiền tối thiểu 50.000");
                    return;
                }
                else if (this.dropFrom.labelCaption.string == this.dropTo.labelCaption.string) {
                    App_1.default.instance.ShowAlertDialog("Thông tin chưa chính xác! Vui lòng kiểm tra lại");
                    return;
                }
                else if (this.dropFrom.selectedIndex != 0 && this.dropTo.selectedIndex != 0) {
                    App_1.default.instance.ShowAlertDialog("Thông tin chưa chính xác! Vui lòng kiểm tra lại");
                }
                ////Utils.Log("Nap:" + _this.arrItem[0].money + " : " + _this.arrItem[4].money + " : " + money);
                App_1.default.instance.showLoading(true);
                Http_1.default.get(App_1.default.API_CMD, { t: "tf", d: 1, a: money, nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
                    App_1.default.instance.showLoading(false);
                    ////Utils.Log("Nap cmd err:" + JSON.stringify(err));
                    ////Utils.Log("Nap cmd res:" + JSON.stringify(res));
                    if (res["code"] == 0) {
                        _this.updateInfoCMD();
                        _this.arrItem[0].updateData(_this.arrItem[0].money - money);
                        Configs_1.default.Login.Coin -= money;
                        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                        App_1.default.instance.ShowAlertDialog("Nạp Thành Công!");
                    }
                    else {
                        App_1.default.instance.ShowAlertDialog(res["message"]);
                    }
                });
            }
        }
        else if (this.dropTo.labelCaption.string == ListGame[0]) {
            //rut
            var money = Utils_1.default.formatEditBox(this.editMoney.string) / 1000;
            if (this.editMoney.string == "") {
                App_1.default.instance.ShowAlertDialog("Vui lòng điền đầy đủ thông tin");
                return;
            }
            else if (this.dropFrom.labelCaption.string == this.dropTo.labelCaption.string) {
                App_1.default.instance.ShowAlertDialog("Thông tin chưa chính xác! Vui lòng kiểm tra lại");
                return;
            }
            else if (this.dropFrom.selectedIndex != 0 && this.dropTo.selectedIndex != 0) {
                App_1.default.instance.ShowAlertDialog("Thông tin chưa chính xác! Vui lòng kiểm tra lại");
            }
            if (this.dropFrom.labelCaption.string == ListGame[1]) {
                ////Utils.Log("Rut:"+this.balanceAG);
                //ag
                if (money * 1000 > this.balanceAG) {
                    App_1.default.instance.ShowAlertDialog("Số dư không đủ!");
                    return;
                }
                App_1.default.instance.showLoading(true);
                Http_1.default.get(App_1.default.API_AG, { t: "Withdraw", a: money, nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
                    App_1.default.instance.showLoading(false);
                    if (res["res"] == 0) {
                        _this.updateInfoAG();
                        _this.arrItem[0].updateData(_this.arrItem[0].money + money * 1000);
                        Configs_1.default.Login.Coin += money * 1000;
                        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                        App_1.default.instance.ShowAlertDialog("Rút Thành Công!");
                    }
                    else {
                        App_1.default.instance.ShowAlertDialog(res["msg"]);
                    }
                });
            }
            else if (this.dropFrom.labelCaption.string == ListGame[2]) {
                var money = Utils_1.default.formatEditBox(this.editMoney.string);
                if (money > this.balanceIBC) {
                    App_1.default.instance.ShowAlertDialog("Số dư không đủ!");
                    return;
                }
                if (this.editMoney.string == "") {
                    App_1.default.instance.ShowAlertDialog("Vui lòng điền đầy đủ thông tin");
                    return;
                }
                else if (this.dropFrom.labelCaption.string == this.dropTo.labelCaption.string) {
                    App_1.default.instance.ShowAlertDialog("Thông tin chưa chính xác! Vui lòng kiểm tra lại");
                    return;
                }
                else if (this.dropFrom.selectedIndex != 0 && this.dropTo.selectedIndex != 0) {
                    App_1.default.instance.ShowAlertDialog("Thông tin chưa chính xác! Vui lòng kiểm tra lại");
                }
                //ibc
                App_1.default.instance.showLoading(true);
                Http_1.default.get(App_1.default.API_IBC, { t: "Transfer", d: 0, a: money, nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
                    App_1.default.instance.showLoading(false);
                    if (res["code"] == 0) {
                        _this.updateInfoIBC();
                        _this.arrItem[0].updateData(_this.arrItem[0].money + money);
                        Configs_1.default.Login.Coin += money;
                        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                        App_1.default.instance.ShowAlertDialog("Rút Thành Công!");
                    }
                    else {
                        App_1.default.instance.ShowAlertDialog(res["message"]);
                    }
                });
            }
            else if (this.dropFrom.labelCaption.string == ListGame[3]) {
                var money = Utils_1.default.formatEditBox(this.editMoney.string);
                if (money > this.balanceWM) {
                    App_1.default.instance.ShowAlertDialog("Số dư không đủ!");
                    return;
                }
                if (this.editMoney.string == "") {
                    App_1.default.instance.ShowAlertDialog("Vui lòng điền đầy đủ thông tin");
                    return;
                }
                else if (this.dropFrom.labelCaption.string == this.dropTo.labelCaption.string) {
                    App_1.default.instance.ShowAlertDialog("Thông tin chưa chính xác! Vui lòng kiểm tra lại");
                    return;
                }
                else if (this.dropFrom.selectedIndex != 0 && this.dropTo.selectedIndex != 0) {
                    App_1.default.instance.ShowAlertDialog("Thông tin chưa chính xác! Vui lòng kiểm tra lại");
                }
                //ibc
                App_1.default.instance.showLoading(true);
                Http_1.default.get(App_1.default.API_WM, { t: "Transfer", d: 0, a: money, nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
                    App_1.default.instance.showLoading(false);
                    ////Utils.Log("withDraw IBC:" + JSON.stringify(res));
                    if (res["res"] == 0) {
                        _this.updateInfoWM();
                        _this.arrItem[0].updateData(_this.arrItem[0].money + money);
                        Configs_1.default.Login.Coin += money;
                        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                        App_1.default.instance.ShowAlertDialog("Rút Thành Công!");
                    }
                    else {
                        App_1.default.instance.ShowAlertDialog(res["msg"]);
                    }
                });
            }
            else if (this.dropFrom.labelCaption.string == ListGame[4]) {
                var money = Utils_1.default.formatEditBox(this.editMoney.string);
                if (money > this.balanceCMD) {
                    App_1.default.instance.ShowAlertDialog("Số dư không đủ!");
                    return;
                }
                if (this.editMoney.string == "") {
                    App_1.default.instance.ShowAlertDialog("Vui lòng điền đầy đủ thông tin");
                    return;
                }
                if (money < 50000) {
                    App_1.default.instance.ShowAlertDialog("Chuyển tiền tối thiểu 50.000");
                    return;
                }
                else if (this.dropFrom.labelCaption.string == this.dropTo.labelCaption.string) {
                    App_1.default.instance.ShowAlertDialog("Thông tin chưa chính xác! Vui lòng kiểm tra lại");
                    return;
                }
                else if (this.dropFrom.selectedIndex != 0 && this.dropTo.selectedIndex != 0) {
                    App_1.default.instance.ShowAlertDialog("Thông tin chưa chính xác! Vui lòng kiểm tra lại");
                }
                //ibc
                App_1.default.instance.showLoading(true);
                Http_1.default.get(App_1.default.API_CMD, { t: "tf", d: 0, a: money, nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
                    App_1.default.instance.showLoading(false);
                    ////Utils.Log("withDraw CMD:" + JSON.stringify(res));
                    if (res["code"] == 0) {
                        _this.updateInfoCMD();
                        _this.arrItem[0].updateData(_this.arrItem[0].money + money);
                        Configs_1.default.Login.Coin += money;
                        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                        App_1.default.instance.ShowAlertDialog("Rút Thành Công!");
                    }
                    else {
                        App_1.default.instance.ShowAlertDialog(res["message"]);
                    }
                });
            }
        }
        else {
            App_1.default.instance.ShowAlertDialog("Thông tin chưa chính xác! Vui lòng kiểm tra lại");
            return;
        }
    };
    __decorate([
        property(cc.Node)
    ], GameLiveGeneralController.prototype, "boxLeft", void 0);
    __decorate([
        property(cc.Node)
    ], GameLiveGeneralController.prototype, "boxRight", void 0);
    __decorate([
        property([ItemGameLive_1.default])
    ], GameLiveGeneralController.prototype, "arrItem", void 0);
    __decorate([
        property(cc.Node)
    ], GameLiveGeneralController.prototype, "dropFrom", void 0);
    __decorate([
        property(cc.Node)
    ], GameLiveGeneralController.prototype, "dropTo", void 0);
    __decorate([
        property(cc.EditBox)
    ], GameLiveGeneralController.prototype, "editMoney", void 0);
    __decorate([
        property(cc.Label)
    ], GameLiveGeneralController.prototype, "txtTotalMoney", void 0);
    GameLiveGeneralController = __decorate([
        ccclass
    ], GameLiveGeneralController);
    return GameLiveGeneralController;
}(cc.Component));
exports.default = GameLiveGeneralController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxHYW1lTGl2ZVxcR2FtZUxpdmVHZW5lcmFsQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBbUQ7QUFDbkQsa0RBQTZDO0FBQzdDLDRDQUF1QztBQUN2Qyx3RUFBbUU7QUFDbkUsZ0RBQTJDO0FBQzNDLGdEQUEyQztBQUMzQywrQ0FBMEM7QUFFcEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUMxRyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7QUFFakI7SUFBdUQsNkNBQVk7SUFBbkU7UUFBQSx1RUFtZ0JDO1FBaGdCRyxlQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGdCQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGVBQU8sR0FBbUIsRUFBRSxDQUFDO1FBRTdCLGdCQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGNBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsaUJBQVMsR0FBZSxJQUFJLENBQUM7UUFFN0IscUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFdkIsaUJBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxrQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGlCQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2Qsa0JBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixrQkFBVSxHQUFHLENBQUMsQ0FBQzs7SUE4ZTNCLENBQUM7SUE3ZUcsMENBQU0sR0FBTjtRQUNJLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDakIsQ0FBQztJQUNELHdDQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEs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QUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkRBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztnRUFDUTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO29FQUNZO0lBZmQseUJBQXlCO1FBRDdDLE9BQU87T0FDYSx5QkFBeUIsQ0FtZ0I3QztJQUFELGdDQUFDO0NBbmdCRCxBQW1nQkMsQ0FuZ0JzRCxFQUFFLENBQUMsU0FBUyxHQW1nQmxFO2tCQW5nQm9CLHlCQUF5QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgSHR0cCBmcm9tIFwiLi4vLi4vLi4vTG9hZGluZy9zcmMvSHR0cFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBCcm9hZGNhc3RSZWNlaXZlciBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9Ccm9hZGNhc3RSZWNlaXZlclwiO1xuaW1wb3J0IFR3ZWVuIGZyb20gXCIuLi9TY3JpcHQvY29tbW9uL1R3ZWVuXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL1NjcmlwdC9jb21tb24vVXRpbHNcIjtcbmltcG9ydCBJdGVtR2FtZUxpdmUgZnJvbSBcIi4vSXRlbUdhbWVMaXZlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG52YXIgTGlzdEdhbWUgPSBbXCJUw6BpIGtob+G6o24gY2jDrW5oXCIsIFwiTGl2ZSBDYXNpbm8gQUdcIiwgXCJUaOG7gyB0aGFvIElCQzJcIiwgXCJMaXZlIENhc2lubyBXTVwiLFwiVGjhu4MgdGhhbyBDTUQzNjhcIl07XG52YXIgX3RoaXMgPSBudWxsO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVMaXZlR2VuZXJhbENvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYm94TGVmdDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYm94UmlnaHQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShbSXRlbUdhbWVMaXZlXSlcbiAgICBhcnJJdGVtOiBJdGVtR2FtZUxpdmVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGRyb3BGcm9tOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBkcm9wVG86IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIGVkaXRNb25leTogY2MuRWRpdEJveCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHR4dFRvdGFsTW9uZXk6IGNjLkxhYmVsID0gbnVsbDtcbiAgXG4gICAgcHJpdmF0ZSBiYWxhbmNlQUcgPSAwO1xuICAgIHByaXZhdGUgYmFsYW5jZUlCQyA9IDA7XG4gICAgcHJpdmF0ZSBiYWxhbmNlV00gPSAwO1xuICAgIHByaXZhdGUgYmFsYW5jZUNNRCA9IDA7XG4gICAgcHJpdmF0ZSB0b3RhbE1vbmV5ID0gMDtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIF90aGlzID0gdGhpcztcbiAgICB9XG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5lZGl0TW9uZXkudGFiSW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5ib3hMZWZ0Lm9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLmJveExlZnQucG9zaXRpb24gPSBuZXcgY2MuVmVjMygwLCAyMDAsIDApO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5ib3hMZWZ0KTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ib3hMZWZ0KVxuICAgICAgICAgICAgLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoMCwgMCwgMCksIG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJiYWNrT3V0XCIgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuXG4gICAgICAgIHRoaXMuYm94UmlnaHQub3BhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMuYm94UmlnaHQucG9zaXRpb24gPSBuZXcgY2MuVmVjMygwLCAtMjAwLCAwKTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuYm94UmlnaHQpO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmJveFJpZ2h0KVxuICAgICAgICAgICAgLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoMCwgMCwgMCksIG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJiYWNrT3V0XCIgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuXG4gICAgICAgIHRoaXMuZHJvcEZyb20gPSB0aGlzLmRyb3BGcm9tLmdldENvbXBvbmVudChcIkRyb3BEb3duXCIpO1xuICAgICAgICB0aGlzLmRyb3BUbyA9IHRoaXMuZHJvcFRvLmdldENvbXBvbmVudChcIkRyb3BEb3duXCIpO1xuICAgICAgICB0aGlzLmVkaXRNb25leS5zdHJpbmcgPSBcIlwiO1xuICAgICAgICB0aGlzLmluaXREcm9wRnJvbSgpO1xuICAgICAgICB0aGlzLmluaXREcm9wVG8oKTtcbiAgICAgICAgdGhpcy50b3RhbE1vbmV5ID0gMDtcbiAgICAgICAgdGhpcy50b3RhbE1vbmV5ICs9IENvbmZpZ3MuTG9naW4uQ29pbjtcbiAgICAgICAgdGhpcy51cGRhdGVUb3RhbE1vbmV5KCk7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hcnJJdGVtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmFyckl0ZW1baV0uc2hvdygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXJySXRlbVswXS51cGRhdGVEYXRhKENvbmZpZ3MuTG9naW4uQ29pbik7XG4gICAgICAgIHRoaXMudXBkYXRlSW5mb0FHKHRydWUpO1xuICAgICAgICB0aGlzLnVwZGF0ZUluZm9JQkModHJ1ZSk7XG4gICAgICAgIHRoaXMudXBkYXRlSW5mb1dNKHRydWUpO1xuICAgICAgICB0aGlzLnVwZGF0ZUluZm9DTUQodHJ1ZSk7XG4gICAgfVxuXG4gICBcblxuICAgIHVwZGF0ZUluZm9BRyhpc1VwZGF0ZVRvdGFsID0gZmFsc2UpIHtcbiAgICAgICAgSHR0cC5nZXQoQXBwLkFQSV9BRywgeyB0OiBcIkdldEJhbGFuY2VcIiwgbm46IENvbmZpZ3MuTG9naW4uTmlja25hbWUsIGF0OiBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgIC8vLy9VdGlscy5Mb2coXCJ1cGRhdGVJbmZvQWc6XCIrSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICBpZiAocmVzW1wicmVzXCJdID09IDApIHtcbiAgICAgICAgICAgICAgICBpZihyZXNbXCJsaXN0XCJdWzBdW1wiaW5mb1wiXSA9PSBcImVycm9yXCIpe1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hcnJJdGVtWzFdLm1haW50YWluKCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hcnJJdGVtWzFdLnVwZGF0ZURhdGEocmVzLmxpc3RbMF1bXCJpbmZvXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYmFsYW5jZUFHID0gIHBhcnNlSW50KHJlcy5saXN0WzBdW1wiaW5mb1wiXSkgKiAxMDAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNVcGRhdGVUb3RhbCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy50b3RhbE1vbmV5ICs9IHBhcnNlSW50KHJlcy5saXN0WzBdW1wiaW5mb1wiXSkgKiAxMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlVG90YWxNb25leSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hcnJJdGVtWzFdLm1haW50YWluKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZUluZm9JQkMoaXNVcGRhdGVUb3RhbCA9IGZhbHNlKSB7XG4gICAgICAgIEh0dHAuZ2V0KEFwcC5BUElfSUJDLCB7IHQ6IFwiQ2hlY2tCYWxhbmNlXCIsIG5uOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBhdDogQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbiB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAvLy8vVXRpbHMuTG9nKFwidXBkYXRlSW5mb0lDQjpcIitKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgIGlmIChyZXNbXCJjb2RlXCJdID09IDApIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hcnJJdGVtWzJdLnVwZGF0ZURhdGEocmVzW1wiZGF0YVwiXVtcImJhbGFuY2VcIl0pO1xuICAgICAgICAgICAgICAgIF90aGlzLmJhbGFuY2VJQkMgPSBwYXJzZUludChyZXNbXCJkYXRhXCJdW1wiYmFsYW5jZVwiXSkgKiAxMDAwO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzVXBkYXRlVG90YWwgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy50b3RhbE1vbmV5ICs9IHBhcnNlSW50KHJlc1tcImRhdGFcIl1bXCJiYWxhbmNlXCJdKSAqIDEwMDA7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZVRvdGFsTW9uZXkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hcnJJdGVtWzJdLm1haW50YWluKCk7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZUluZm9XTShpc1VwZGF0ZVRvdGFsID0gZmFsc2UpIHtcbiAgICAgICAgSHR0cC5nZXQoQXBwLkFQSV9XTSwgeyB0OiBcIkNoZWNrQmFsYW5jZVwiLCBubjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgYXQ6IENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4gfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgLy8vL1V0aWxzLkxvZyhcInVwZGF0ZUluZm9XTTpcIitKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgIGlmIChyZXNbXCJsaXN0XCJdWzBdID09IDApIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hcnJJdGVtWzNdLnVwZGF0ZURhdGEocmVzW1wibGlzdFwiXVsxXSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuYmFsYW5jZVdNID0gIHBhcnNlSW50KHJlc1tcImxpc3RcIl1bMV0pICogMTAwMDtcbiAgICAgICAgICAgICAgICBpZiAoaXNVcGRhdGVUb3RhbCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRvdGFsTW9uZXkgKz0gcGFyc2VJbnQocmVzW1wibGlzdFwiXVsxXSkgKiAxMDAwO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVUb3RhbE1vbmV5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYXJySXRlbVszXS5tYWludGFpbigpO1xuXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVJbmZvQ01EKGlzVXBkYXRlVG90YWwgPSBmYWxzZSkge1xuICAgICAgICBIdHRwLmdldChBcHAuQVBJX0NNRCwgeyB0OiBcImJsXCIsIG5uOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBhdDogQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbiB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAvLy8vVXRpbHMuTG9nKFwidXBkYXRlSW5mb0NNRDpcIitKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgIGlmIChyZXNbXCJjb2RlXCJdID09IDApIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hcnJJdGVtWzRdLnVwZGF0ZURhdGEocmVzW1wiZGF0YVwiXVtcImRhdGFcIl1bMF1bXCJiZXRBbW91bnRcIl0pO1xuICAgICAgICAgICAgICAgIF90aGlzLmJhbGFuY2VDTUQgPSByZXNbXCJkYXRhXCJdW1wiZGF0YVwiXVswXVtcImJldEFtb3VudFwiXTtcblxuICAgICAgICAgICAgICAgIGlmIChpc1VwZGF0ZVRvdGFsID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudG90YWxNb25leSArPSByZXNbXCJkYXRhXCJdW1wiZGF0YVwiXVswXVtcImJldEFtb3VudFwiXTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlVG90YWxNb25leSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGlmIChyZXNbXCJtc2dcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKFwibXNnXCIpO1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBfdGhpcy5hcnJJdGVtWzRdLm1haW50YWluKCk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0RHJvcEZyb20oKSB7XG4gICAgICAgIHZhciBkYXRhcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IExpc3RHYW1lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkYXRhcy5wdXNoKHsgb3B0aW9uU3RyaW5nOiBMaXN0R2FtZVtpXSB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyb3BGcm9tLmNsZWFyT3B0aW9uRGF0YXMoKTtcbiAgICAgICAgdGhpcy5kcm9wRnJvbS5hZGRPcHRpb25EYXRhcyhkYXRhcyk7XG4gICAgICAgIHRoaXMuZHJvcEZyb20uc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgfVxuXG4gICAgaW5pdERyb3BUbygpIHtcbiAgICAgICAgdmFyIGRhdGFzID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTGlzdEdhbWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRhdGFzLnB1c2goeyBvcHRpb25TdHJpbmc6IExpc3RHYW1lW2ldIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJvcFRvLmNsZWFyT3B0aW9uRGF0YXMoKTtcbiAgICAgICAgdGhpcy5kcm9wVG8uYWRkT3B0aW9uRGF0YXMoZGF0YXMpO1xuICAgICAgICB0aGlzLmRyb3BUby5zZWxlY3RlZEluZGV4ID0gMTtcbiAgICB9XG5cbiAgICB1cGRhdGVUb3RhbE1vbmV5KCkge1xuICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLnR4dFRvdGFsTW9uZXksIHRoaXMudG90YWxNb25leSwgMSk7XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uVG9nZ2xlRHJvcFRvKCkge1xuXG4gICAgfVxuXG4gICAgb25Ub2dnbGVEcm9wRnJvbSgpIHtcblxuICAgIH1cbiAgICBvbkJ0bkNvbmZpcm0oKSB7XG4gICAgICAgICAvLy8vVXRpbHMuTG9nKFwidmFvIGRheSBjYWkgbmVcIik7XG4gICAgICAgIGlmICh0aGlzLmRyb3BGcm9tLmxhYmVsQ2FwdGlvbi5zdHJpbmcgPT0gTGlzdEdhbWVbMF0pIHtcbiAgICAgICAgICAgIC8vbmFwXG4gICAgICAgICAgICB2YXIgbW9uZXkgPSBVdGlscy5mb3JtYXRFZGl0Qm94KHRoaXMuZWRpdE1vbmV5LnN0cmluZykgLyAxMDAwO1xuICAgICAgICAgICAgaWYgKHRoaXMuZWRpdE1vbmV5LnN0cmluZyA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhcIlZ1aSBsw7JuZyDEkWnhu4FuIMSR4bqneSDEkeG7pyB0aMO0bmcgdGluXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5kcm9wRnJvbS5sYWJlbENhcHRpb24uc3RyaW5nID09IHRoaXMuZHJvcFRvLmxhYmVsQ2FwdGlvbi5zdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKFwiVGjDtG5nIHRpbiBjaMawYSBjaMOtbmggeMOhYyEgVnVpIGzDsm5nIGtp4buDbSB0cmEgbOG6oWlcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5kcm9wRnJvbS5zZWxlY3RlZEluZGV4ICE9IDAgJiYgdGhpcy5kcm9wVG8uc2VsZWN0ZWRJbmRleCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhcIlRow7RuZyB0aW4gY2jGsGEgY2jDrW5oIHjDoWMhIFZ1aSBsw7JuZyBraeG7g20gdHJhIGzhuqFpXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZHJvcFRvLmxhYmVsQ2FwdGlvbi5zdHJpbmcgPT0gTGlzdEdhbWVbMV0pIHtcbiAgICAgICAgICAgICAgICAvL2FnXG4gICAgICAgICAgICAgICAgaWYgKG1vbmV5ICogMTAwMCA+IENvbmZpZ3MuTG9naW4uQ29pbikge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKFwiU+G7kSBkxrAga2jDtG5nIMSR4bunIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgLy8vL1V0aWxzLkxvZyhcIk5hcDpcIiArIF90aGlzLmFyckl0ZW1bMF0ubW9uZXkgKyBcIiA6IFwiICsgX3RoaXMuYXJySXRlbVsxXS5tb25leSArIFwiIDogXCIgKyBtb25leSk7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgIEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSV9BRywgeyB0OiBcIkRlcG9zaXRcIiwgYTogbW9uZXksIG5uOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBhdDogQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbiB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc1tcInJlc1wiXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgLy8vL1V0aWxzLkxvZyhcIk5hcCBBRyByZXM6XCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZUluZm9BRygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuYXJySXRlbVswXS51cGRhdGVEYXRhKF90aGlzLmFyckl0ZW1bMF0ubW9uZXkgLSBtb25leSAqIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luIC09IG1vbmV5ICogMTAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKFwiTuG6oXAgVGjDoG5oIEPDtG5nIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2cocmVzW1wibXNnXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZHJvcFRvLmxhYmVsQ2FwdGlvbi5zdHJpbmcgPT0gTGlzdEdhbWVbMl0pIHtcbiAgICAgICAgICAgICAgICAvL2liY1xuICAgICAgICAgICAgICAgIHZhciBtb25leSA9IFV0aWxzLmZvcm1hdEVkaXRCb3godGhpcy5lZGl0TW9uZXkuc3RyaW5nKTtcbiAgICAgICAgICAgICAgICBpZiAobW9uZXkgPiBDb25maWdzLkxvZ2luLkNvaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhcIlPhu5EgZMawIGtow7RuZyDEkeG7pyFcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWRpdE1vbmV5LnN0cmluZyA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coXCJWdWkgbMOybmcgxJFp4buBbiDEkeG6p3kgxJHhu6cgdGjDtG5nIHRpblwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZHJvcEZyb20ubGFiZWxDYXB0aW9uLnN0cmluZyA9PSB0aGlzLmRyb3BUby5sYWJlbENhcHRpb24uc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coXCJUaMO0bmcgdGluIGNoxrBhIGNow61uaCB4w6FjISBWdWkgbMOybmcga2nhu4NtIHRyYSBs4bqhaVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmRyb3BGcm9tLnNlbGVjdGVkSW5kZXggIT0gMCAmJiB0aGlzLmRyb3BUby5zZWxlY3RlZEluZGV4ICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhcIlRow7RuZyB0aW4gY2jGsGEgY2jDrW5oIHjDoWMhIFZ1aSBsw7JuZyBraeG7g20gdHJhIGzhuqFpXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgLy8vL1V0aWxzLkxvZyhcIk5hcDpcIiArIF90aGlzLmFyckl0ZW1bMF0ubW9uZXkgKyBcIiA6IFwiICsgX3RoaXMuYXJySXRlbVsyXS5tb25leSArIFwiIDogXCIgKyBtb25leSk7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgIEh0dHAuZ2V0KEFwcC5BUElfSUJDLCB7IHQ6IFwiVHJhbnNmZXJcIiwgZDogMSwgYTogbW9uZXksIG5uOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBhdDogQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbiB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgIC8vLy9VdGlscy5Mb2coXCJOYXAgSUJDIGVycjpcIiArIEpTT04uc3RyaW5naWZ5KGVycikpO1xuICAgICAgICAgICAgICAgICAgICAgLy8vL1V0aWxzLkxvZyhcIk5hcCBJQkMgcmVzOlwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNbXCJjb2RlXCJdID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZUluZm9JQkMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmFyckl0ZW1bMF0udXBkYXRlRGF0YShfdGhpcy5hcnJJdGVtWzBdLm1vbmV5IC0gbW9uZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luIC09IG1vbmV5O1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coXCJO4bqhcCBUaMOgbmggQ8O0bmchXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhyZXNbXCJtZXNzYWdlXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZHJvcFRvLmxhYmVsQ2FwdGlvbi5zdHJpbmcgPT0gTGlzdEdhbWVbM10pIHtcbiAgICAgICAgICAgICAgICAvL3dtXG4gICAgICAgICAgICAgICAgdmFyIG1vbmV5ID0gVXRpbHMuZm9ybWF0RWRpdEJveCh0aGlzLmVkaXRNb25leS5zdHJpbmcpO1xuICAgICAgICAgICAgICAgIGlmIChtb25leSA+IENvbmZpZ3MuTG9naW4uQ29pbikge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKFwiU+G7kSBkxrAga2jDtG5nIMSR4bunIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lZGl0TW9uZXkuc3RyaW5nID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhcIlZ1aSBsw7JuZyDEkWnhu4FuIMSR4bqneSDEkeG7pyB0aMO0bmcgdGluXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5kcm9wRnJvbS5sYWJlbENhcHRpb24uc3RyaW5nID09IHRoaXMuZHJvcFRvLmxhYmVsQ2FwdGlvbi5zdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhcIlRow7RuZyB0aW4gY2jGsGEgY2jDrW5oIHjDoWMhIFZ1aSBsw7JuZyBraeG7g20gdHJhIGzhuqFpXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZHJvcEZyb20uc2VsZWN0ZWRJbmRleCAhPSAwICYmIHRoaXMuZHJvcFRvLnNlbGVjdGVkSW5kZXggIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKFwiVGjDtG5nIHRpbiBjaMawYSBjaMOtbmggeMOhYyEgVnVpIGzDsm5nIGtp4buDbSB0cmEgbOG6oWlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAvLy8vVXRpbHMuTG9nKFwiTmFwOlwiICsgX3RoaXMuYXJySXRlbVswXS5tb25leSArIFwiIDogXCIgKyBfdGhpcy5hcnJJdGVtWzNdLm1vbmV5ICsgXCIgOiBcIiArIG1vbmV5KTtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgSHR0cC5nZXQoQXBwLkFQSV9XTSwgeyB0OiBcIlRyYW5zZmVyXCIsIGQ6IDEsIGE6IG1vbmV5LCBubjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgYXQ6IENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4gfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAvLy8vVXRpbHMuTG9nKFwiTmFwIHdtIGVycjpcIiArIEpTT04uc3RyaW5naWZ5KGVycikpO1xuICAgICAgICAgICAgICAgICAgICAgLy8vL1V0aWxzLkxvZyhcIk5hcCB3bSByZXM6XCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc1tcInJlc1wiXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVJbmZvV00oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmFyckl0ZW1bMF0udXBkYXRlRGF0YShfdGhpcy5hcnJJdGVtWzBdLm1vbmV5IC0gbW9uZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luIC09IG1vbmV5O1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coXCJO4bqhcCBUaMOgbmggQ8O0bmchXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhyZXNbXCJtc2dcIl0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5kcm9wVG8ubGFiZWxDYXB0aW9uLnN0cmluZyA9PSBMaXN0R2FtZVs0XSkge1xuICAgICAgICAgICAgICAgIC8vd21cbiAgICAgICAgICAgICAgICB2YXIgbW9uZXkgPSBVdGlscy5mb3JtYXRFZGl0Qm94KHRoaXMuZWRpdE1vbmV5LnN0cmluZyk7XG4gICAgICAgICAgICAgICAgaWYgKG1vbmV5ID4gQ29uZmlncy5Mb2dpbi5Db2luKSB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coXCJT4buRIGTGsCBraMO0bmcgxJHhu6chXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVkaXRNb25leS5zdHJpbmcgPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKFwiVnVpIGzDsm5nIMSRaeG7gW4gxJHhuqd5IMSR4bunIHRow7RuZyB0aW5cIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1vbmV5IDwgNTAwMDApIHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhcIkNodXnhu4NuIHRp4buBbiB04buRaSB0aGnhu4N1IDUwLjAwMFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmRyb3BGcm9tLmxhYmVsQ2FwdGlvbi5zdHJpbmcgPT0gdGhpcy5kcm9wVG8ubGFiZWxDYXB0aW9uLnN0cmluZykge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKFwiVGjDtG5nIHRpbiBjaMawYSBjaMOtbmggeMOhYyEgVnVpIGzDsm5nIGtp4buDbSB0cmEgbOG6oWlcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5kcm9wRnJvbS5zZWxlY3RlZEluZGV4ICE9IDAgJiYgdGhpcy5kcm9wVG8uc2VsZWN0ZWRJbmRleCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coXCJUaMO0bmcgdGluIGNoxrBhIGNow61uaCB4w6FjISBWdWkgbMOybmcga2nhu4NtIHRyYSBs4bqhaVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIC8vLy9VdGlscy5Mb2coXCJOYXA6XCIgKyBfdGhpcy5hcnJJdGVtWzBdLm1vbmV5ICsgXCIgOiBcIiArIF90aGlzLmFyckl0ZW1bNF0ubW9uZXkgKyBcIiA6IFwiICsgbW9uZXkpO1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICBIdHRwLmdldChBcHAuQVBJX0NNRCwgeyB0OiBcInRmXCIsIGQ6IDEsIGE6IG1vbmV5LCBubjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgYXQ6IENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4gfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAvLy8vVXRpbHMuTG9nKFwiTmFwIGNtZCBlcnI6XCIgKyBKU09OLnN0cmluZ2lmeShlcnIpKTtcbiAgICAgICAgICAgICAgICAgICAgIC8vLy9VdGlscy5Mb2coXCJOYXAgY21kIHJlczpcIiArIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzW1wiY29kZVwiXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVJbmZvQ01EKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5hcnJJdGVtWzBdLnVwZGF0ZURhdGEoX3RoaXMuYXJySXRlbVswXS5tb25leSAtIG1vbmV5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQ29pbiAtPSBtb25leTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKFwiTuG6oXAgVGjDoG5oIEPDtG5nIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2cocmVzW1wibWVzc2FnZVwiXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5kcm9wVG8ubGFiZWxDYXB0aW9uLnN0cmluZyA9PSBMaXN0R2FtZVswXSkge1xuICAgICAgICAgICAgLy9ydXRcbiAgICAgICAgICAgIHZhciBtb25leSA9IFV0aWxzLmZvcm1hdEVkaXRCb3godGhpcy5lZGl0TW9uZXkuc3RyaW5nKSAvIDEwMDA7XG4gICAgICAgICAgICBpZiAodGhpcy5lZGl0TW9uZXkuc3RyaW5nID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKFwiVnVpIGzDsm5nIMSRaeG7gW4gxJHhuqd5IMSR4bunIHRow7RuZyB0aW5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmRyb3BGcm9tLmxhYmVsQ2FwdGlvbi5zdHJpbmcgPT0gdGhpcy5kcm9wVG8ubGFiZWxDYXB0aW9uLnN0cmluZykge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coXCJUaMO0bmcgdGluIGNoxrBhIGNow61uaCB4w6FjISBWdWkgbMOybmcga2nhu4NtIHRyYSBs4bqhaVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmRyb3BGcm9tLnNlbGVjdGVkSW5kZXggIT0gMCAmJiB0aGlzLmRyb3BUby5zZWxlY3RlZEluZGV4ICE9IDApIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKFwiVGjDtG5nIHRpbiBjaMawYSBjaMOtbmggeMOhYyEgVnVpIGzDsm5nIGtp4buDbSB0cmEgbOG6oWlcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5kcm9wRnJvbS5sYWJlbENhcHRpb24uc3RyaW5nID09IExpc3RHYW1lWzFdKSB7XG4gICAgICAgICAgICAgICAgIC8vLy9VdGlscy5Mb2coXCJSdXQ6XCIrdGhpcy5iYWxhbmNlQUcpO1xuICAgICAgICAgICAgICAgIC8vYWdcbiAgICAgICAgICAgICAgICBpZiAobW9uZXkgKiAxMDAwID4gdGhpcy5iYWxhbmNlQUcpIHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhcIlPhu5EgZMawIGtow7RuZyDEkeG7pyFcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgIEh0dHAuZ2V0KEFwcC5BUElfQUcsIHsgdDogXCJXaXRoZHJhd1wiLCBhOiBtb25leSwgbm46IENvbmZpZ3MuTG9naW4uTmlja25hbWUsIGF0OiBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNbXCJyZXNcIl0gPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlSW5mb0FHKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5hcnJJdGVtWzBdLnVwZGF0ZURhdGEoX3RoaXMuYXJySXRlbVswXS5tb25leSArIG1vbmV5ICogMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW4gKz0gbW9uZXkgKiAxMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coXCJSw7p0IFRow6BuaCBDw7RuZyFcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKHJlc1tcIm1zZ1wiXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZHJvcEZyb20ubGFiZWxDYXB0aW9uLnN0cmluZyA9PSBMaXN0R2FtZVsyXSkge1xuICAgICAgICAgICAgICAgIHZhciBtb25leSA9IFV0aWxzLmZvcm1hdEVkaXRCb3godGhpcy5lZGl0TW9uZXkuc3RyaW5nKTtcbiAgICAgICAgICAgICAgICBpZiAobW9uZXkgID4gdGhpcy5iYWxhbmNlSUJDKSB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coXCJT4buRIGTGsCBraMO0bmcgxJHhu6chXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVkaXRNb25leS5zdHJpbmcgPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKFwiVnVpIGzDsm5nIMSRaeG7gW4gxJHhuqd5IMSR4bunIHRow7RuZyB0aW5cIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmRyb3BGcm9tLmxhYmVsQ2FwdGlvbi5zdHJpbmcgPT0gdGhpcy5kcm9wVG8ubGFiZWxDYXB0aW9uLnN0cmluZykge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKFwiVGjDtG5nIHRpbiBjaMawYSBjaMOtbmggeMOhYyEgVnVpIGzDsm5nIGtp4buDbSB0cmEgbOG6oWlcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5kcm9wRnJvbS5zZWxlY3RlZEluZGV4ICE9IDAgJiYgdGhpcy5kcm9wVG8uc2VsZWN0ZWRJbmRleCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coXCJUaMO0bmcgdGluIGNoxrBhIGNow61uaCB4w6FjISBWdWkgbMOybmcga2nhu4NtIHRyYSBs4bqhaVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9pYmNcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgSHR0cC5nZXQoQXBwLkFQSV9JQkMsIHsgdDogXCJUcmFuc2ZlclwiLCBkOiAwLCBhOiBtb25leSwgbm46IENvbmZpZ3MuTG9naW4uTmlja25hbWUsIGF0OiBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzW1wiY29kZVwiXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVJbmZvSUJDKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5hcnJJdGVtWzBdLnVwZGF0ZURhdGEoX3RoaXMuYXJySXRlbVswXS5tb25leSArIG1vbmV5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQ29pbiArPSBtb25leTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKFwiUsO6dCBUaMOgbmggQ8O0bmchXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhyZXNbXCJtZXNzYWdlXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5kcm9wRnJvbS5sYWJlbENhcHRpb24uc3RyaW5nID09IExpc3RHYW1lWzNdKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1vbmV5ID0gVXRpbHMuZm9ybWF0RWRpdEJveCh0aGlzLmVkaXRNb25leS5zdHJpbmcpO1xuICAgICAgICAgICAgICAgIGlmIChtb25leSAgPiB0aGlzLmJhbGFuY2VXTSkge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKFwiU+G7kSBkxrAga2jDtG5nIMSR4bunIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lZGl0TW9uZXkuc3RyaW5nID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhcIlZ1aSBsw7JuZyDEkWnhu4FuIMSR4bqneSDEkeG7pyB0aMO0bmcgdGluXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5kcm9wRnJvbS5sYWJlbENhcHRpb24uc3RyaW5nID09IHRoaXMuZHJvcFRvLmxhYmVsQ2FwdGlvbi5zdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhcIlRow7RuZyB0aW4gY2jGsGEgY2jDrW5oIHjDoWMhIFZ1aSBsw7JuZyBraeG7g20gdHJhIGzhuqFpXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZHJvcEZyb20uc2VsZWN0ZWRJbmRleCAhPSAwICYmIHRoaXMuZHJvcFRvLnNlbGVjdGVkSW5kZXggIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKFwiVGjDtG5nIHRpbiBjaMawYSBjaMOtbmggeMOhYyEgVnVpIGzDsm5nIGtp4buDbSB0cmEgbOG6oWlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vaWJjXG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgIEh0dHAuZ2V0KEFwcC5BUElfV00sIHsgdDogXCJUcmFuc2ZlclwiLCBkOiAwLCBhOiBtb25leSwgbm46IENvbmZpZ3MuTG9naW4uTmlja25hbWUsIGF0OiBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgLy8vL1V0aWxzLkxvZyhcIndpdGhEcmF3IElCQzpcIiArIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzW1wicmVzXCJdID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZUluZm9XTSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuYXJySXRlbVswXS51cGRhdGVEYXRhKF90aGlzLmFyckl0ZW1bMF0ubW9uZXkgKyBtb25leSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW4gKz0gbW9uZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhcIlLDunQgVGjDoG5oIEPDtG5nIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2cocmVzW1wibXNnXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5kcm9wRnJvbS5sYWJlbENhcHRpb24uc3RyaW5nID09IExpc3RHYW1lWzRdKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1vbmV5ID0gVXRpbHMuZm9ybWF0RWRpdEJveCh0aGlzLmVkaXRNb25leS5zdHJpbmcpO1xuICAgICAgICAgICAgICAgIGlmIChtb25leSAgPiB0aGlzLmJhbGFuY2VDTUQpIHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhcIlPhu5EgZMawIGtow7RuZyDEkeG7pyFcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWRpdE1vbmV5LnN0cmluZyA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coXCJWdWkgbMOybmcgxJFp4buBbiDEkeG6p3kgxJHhu6cgdGjDtG5nIHRpblwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobW9uZXkgPCA1MDAwMCkge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKFwiQ2h1eeG7g24gdGnhu4FuIHThu5FpIHRoaeG7g3UgNTAuMDAwXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZHJvcEZyb20ubGFiZWxDYXB0aW9uLnN0cmluZyA9PSB0aGlzLmRyb3BUby5sYWJlbENhcHRpb24uc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coXCJUaMO0bmcgdGluIGNoxrBhIGNow61uaCB4w6FjISBWdWkgbMOybmcga2nhu4NtIHRyYSBs4bqhaVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmRyb3BGcm9tLnNlbGVjdGVkSW5kZXggIT0gMCAmJiB0aGlzLmRyb3BUby5zZWxlY3RlZEluZGV4ICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhcIlRow7RuZyB0aW4gY2jGsGEgY2jDrW5oIHjDoWMhIFZ1aSBsw7JuZyBraeG7g20gdHJhIGzhuqFpXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL2liY1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICBIdHRwLmdldChBcHAuQVBJX0NNRCwgeyB0OiBcInRmXCIsIGQ6IDAsIGE6IG1vbmV5LCBubjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgYXQ6IENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4gfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAvLy8vVXRpbHMuTG9nKFwid2l0aERyYXcgQ01EOlwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNbXCJjb2RlXCJdID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZUluZm9DTUQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmFyckl0ZW1bMF0udXBkYXRlRGF0YShfdGhpcy5hcnJJdGVtWzBdLm1vbmV5ICsgbW9uZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luICs9IG1vbmV5O1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coXCJSw7p0IFRow6BuaCBDw7RuZyFcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKHJlc1tcIm1lc3NhZ2VcIl0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKFwiVGjDtG5nIHRpbiBjaMawYSBjaMOtbmggeMOhYyEgVnVpIGzDsm5nIGtp4buDbSB0cmEgbOG6oWlcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG59XG4iXX0=