"use strict";
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