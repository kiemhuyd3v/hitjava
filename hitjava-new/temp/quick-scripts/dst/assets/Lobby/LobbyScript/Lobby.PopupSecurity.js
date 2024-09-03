
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.PopupSecurity.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0e75cAsFntKPqi/S/aghnaV', 'Lobby.PopupSecurity');
// Lobby/LobbyScript/Lobby.PopupSecurity.ts

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
exports.TabSafes = exports.PanelSmsPlus = void 0;
var Configs_1 = require("../../Loading/src/Configs");
var Global_1 = require("../../Loading/src/Global");
var LogEvent_1 = require("../../Loading/src/LogEvent/LogEvent");
var UtilsNative_1 = require("../../Loading/src/UtilsNative");
var Lobby_Cmd_1 = require("./Lobby.Cmd");
var App_1 = require("./Script/common/App");
var BroadcastReceiver_1 = require("./Script/common/BroadcastReceiver");
var Dialog_1 = require("./Script/common/Dialog");
var Utils_1 = require("./Script/common/Utils");
var MiniGameNetworkClient_1 = require("./Script/networks/MiniGameNetworkClient");
var Network_InPacket_1 = require("./Script/networks/Network.InPacket");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PanelSmsPlus = /** @class */ (function () {
    function PanelSmsPlus() {
        this.node = null;
        this.info = null;
        this.update = null;
        this.continue = null;
        this.infoLblUsername = null;
        this.infoLblPhoneNumber = null;
        this.infoBtnActive = null;
        this.infoBtnChange = null;
        this.updateBtnsActive = null;
        this.updateBtnsNotActive = null;
        this.updateEdbPhoneNumber = null;
        this.continueEdbOTP = null;
        this.btnGetOTP = null;
    }
    __decorate([
        property(cc.Node)
    ], PanelSmsPlus.prototype, "node", void 0);
    __decorate([
        property(cc.Node)
    ], PanelSmsPlus.prototype, "info", void 0);
    __decorate([
        property(cc.Node)
    ], PanelSmsPlus.prototype, "update", void 0);
    __decorate([
        property(cc.Node)
    ], PanelSmsPlus.prototype, "continue", void 0);
    __decorate([
        property(cc.Label)
    ], PanelSmsPlus.prototype, "infoLblUsername", void 0);
    __decorate([
        property(cc.Label)
    ], PanelSmsPlus.prototype, "infoLblPhoneNumber", void 0);
    __decorate([
        property(cc.Button)
    ], PanelSmsPlus.prototype, "infoBtnActive", void 0);
    __decorate([
        property(cc.Button)
    ], PanelSmsPlus.prototype, "infoBtnChange", void 0);
    __decorate([
        property(cc.Node)
    ], PanelSmsPlus.prototype, "updateBtnsActive", void 0);
    __decorate([
        property(cc.Node)
    ], PanelSmsPlus.prototype, "updateBtnsNotActive", void 0);
    __decorate([
        property(cc.EditBox)
    ], PanelSmsPlus.prototype, "updateEdbPhoneNumber", void 0);
    __decorate([
        property(cc.EditBox)
    ], PanelSmsPlus.prototype, "continueEdbOTP", void 0);
    __decorate([
        property(cc.Button)
    ], PanelSmsPlus.prototype, "btnGetOTP", void 0);
    PanelSmsPlus = __decorate([
        ccclass("Lobby.PopupSecurity.PanelSmsPlus")
    ], PanelSmsPlus);
    return PanelSmsPlus;
}());
exports.PanelSmsPlus = PanelSmsPlus;
var TabSafes = /** @class */ (function () {
    function TabSafes() {
        this.node = null;
        this.tabs = null;
        this.tabContents = null;
        this.lblBalance = null;
        this.lblBalanceSafes = null;
        this.edbCoinNap = null;
        this.edbCoinRut = null;
        this.edbOTP = null;
        this.toggleAppOTP = null;
        this.tabSelectedIdx = 0;
    }
    TabSafes.prototype.start = function () {
        var _this_1 = this;
        this.edbCoinRut.node.on("editing-did-ended", function () {
            var number = Utils_1.default.stringToInt(_this_1.edbCoinRut.string);
            _this_1.edbCoinRut.string = Utils_1.default.formatNumber(number);
        });
        this.edbCoinNap.node.on("editing-did-ended", function () {
            var number = Utils_1.default.stringToInt(_this_1.edbCoinNap.string);
            _this_1.edbCoinNap.string = Utils_1.default.formatNumber(number);
        });
        var _loop_1 = function (i) {
            this_1.tabs.toggleItems[i].node.on("toggle", function () {
                _this_1.tabSelectedIdx = i;
                _this_1.onTabChanged();
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.tabs.toggleItems.length; i++) {
            _loop_1(i);
        }
    };
    TabSafes.prototype.onTabChanged = function () {
        for (var i = 0; i < this.tabContents.childrenCount; i++) {
            this.tabContents.children[i].active = i == this.tabSelectedIdx;
        }
        for (var j = 0; j < this.tabs.toggleItems.length; j++) {
            this.tabs.toggleItems[j].node.getComponentInChildren(cc.Label).node.color = j == this.tabSelectedIdx ? cc.Color.YELLOW : cc.Color.WHITE;
        }
        switch (this.tabSelectedIdx) {
            case 0:
                this.edbCoinNap.string = "";
                break;
            case 1:
                this.edbCoinRut.string = "";
                this.edbOTP.string = "";
                break;
        }
    };
    __decorate([
        property(cc.Node)
    ], TabSafes.prototype, "node", void 0);
    __decorate([
        property(cc.ToggleContainer)
    ], TabSafes.prototype, "tabs", void 0);
    __decorate([
        property(cc.Node)
    ], TabSafes.prototype, "tabContents", void 0);
    __decorate([
        property(cc.Label)
    ], TabSafes.prototype, "lblBalance", void 0);
    __decorate([
        property(cc.Label)
    ], TabSafes.prototype, "lblBalanceSafes", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabSafes.prototype, "edbCoinNap", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabSafes.prototype, "edbCoinRut", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabSafes.prototype, "edbOTP", void 0);
    __decorate([
        property(cc.Toggle)
    ], TabSafes.prototype, "toggleAppOTP", void 0);
    TabSafes = __decorate([
        ccclass("Lobby.PopupSecurity.TabSafes")
    ], TabSafes);
    return TabSafes;
}());
exports.TabSafes = TabSafes;
var PopupSecurity = /** @class */ (function (_super) {
    __extends(PopupSecurity, _super);
    function PopupSecurity() {
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        _this_1.tabs = null;
        _this_1.tabContents = null;
        _this_1.panelSmsPlus = null;
        _this_1.tabSafes = null;
        _this_1.lblContainsBotOTPs = [];
        _this_1.tabTeleSafe = null;
        _this_1.edbTeleSafe = null;
        _this_1.tabSelectedIdx = 0;
        _this_1.phoneNumber = "";
        _this_1.sessionInfo = "";
        _this_1.captchaToken = "";
        _this_1.isMobileSecure = false;
        return _this_1;
    }
    PopupSecurity.prototype.onLoad = function () {
        Global_1.Global.PopupSecurity = this;
        this.panelSmsPlus.infoLblUsername.string = Configs_1.default.Login.Nickname;
    };
    PopupSecurity.prototype.start = function () {
        var _this_1 = this;
        for (var i = 0; i < this.lblContainsBotOTPs.length; i++) {
            var lbl = this.lblContainsBotOTPs[i];
            lbl.string = lbl.string.replace("$bot_otp", "@" + Configs_1.default.App.getLinkTelegram());
        }
        this.tabSafes.start();
        var _loop_2 = function (i) {
            this_2.tabs.toggleItems[i].node.on("toggle", function () {
                _this_1.tabSelectedIdx = i;
                _this_1.onTabChanged();
            });
        };
        var this_2 = this;
        for (var i = 0; i < this.tabs.toggleItems.length; i++) {
            _loop_2(i);
        }
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function () {
            _this_1.tabSafes.lblBalance.string = Utils_1.default.formatNumber(Configs_1.default.Login.Coin);
        }, this);
        MiniGameNetworkClient_1.default.getInstance().addListener(function (data) {
            if (!_this_1.node.active)
                return;
            var inpacket = new Network_InPacket_1.default(data);
            //  //Utils.Log(inpacket.getCmdId());
            switch (inpacket.getCmdId()) {
                case Lobby_Cmd_1.default.Code.GET_SECURITY_INFO: {
                    App_1.default.instance.showLoading(false);
                    var res = new Lobby_Cmd_1.default.ResGetSecurityInfo(data);
                    //Utils.Log("ResGetSecurityInfo:", JSON.stringify(res));
                    if (_this_1.panelSmsPlus.node.active) {
                        _this_1.phoneNumber = res.mobile;
                        _this_1.isMobileSecure = res.mobileSecure == 1;
                        if (res.mobile.length > 0 || res.isVerifyPhone) {
                            //if (res.isVerifyPhone) {
                            _this_1.panelSmsPlus.info.active = true;
                            _this_1.panelSmsPlus.update.active = false;
                            _this_1.panelSmsPlus.continue.active = false;
                            _this_1.panelSmsPlus.infoLblUsername.string = res.username;
                            _this_1.panelSmsPlus.infoLblPhoneNumber.string = "*******" + _this_1.phoneNumber.substring(_this_1.phoneNumber.length - 3);
                            // this.panelSmsPlus.infoBtnActive.node.active = !this.isMobileSecure;
                            _this_1.panelSmsPlus.infoBtnActive.node.active = false;
                        }
                        else {
                            _this_1.panelSmsPlus.info.active = false;
                            _this_1.panelSmsPlus.update.active = true;
                            _this_1.panelSmsPlus.continue.active = false;
                        }
                        _this_1.panelSmsPlus.updateBtnsActive.active = _this_1.isMobileSecure;
                        _this_1.panelSmsPlus.updateBtnsNotActive.active = !_this_1.isMobileSecure;
                    }
                    if (_this_1.tabSafes.node.active) {
                        _this_1.tabSafes.lblBalanceSafes.string = Utils_1.default.formatNumber(res.safe);
                        _this_1.tabSafes.lblBalance.string = Utils_1.default.formatNumber(Configs_1.default.Login.Coin);
                    }
                    //  //Utils.Log(res);
                    break;
                }
                case Lobby_Cmd_1.default.Code.UPDATE_USER_INFO: {
                    App_1.default.instance.showLoading(false);
                    var res = new Lobby_Cmd_1.default.ResUpdateUserInfo(data);
                    if (res.error != 0) {
                        switch (res.error) {
                            case 1:
                                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_check_connect'));
                                break;
                            case 4:
                                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_phone_number_incorrect'));
                                break;
                            case 5:
                            case 11:
                                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_phone_number_incorrect1'));
                                break;
                            default:
                                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_unknown_error'));
                                break;
                        }
                        return;
                    }
                    _this_1.showSmsPlusContinue();
                    _this_1.actSmsPlusActivePhone();
                    break;
                }
                case Lobby_Cmd_1.default.Code.CHANGE_PHONE_NUMBER: {
                    App_1.default.instance.showLoading(false);
                    var res = new Lobby_Cmd_1.default.ResChangePhoneNumber(data);
                    if (res.error != 0) {
                        switch (res.error) {
                            case 1:
                                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_check_connect'));
                                break;
                            case 2:
                                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_phone_number_incorrect'));
                                break;
                            case 3:
                                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_phone_number_incorrect2'));
                                break;
                            case 4:
                            case 5:
                                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_phone_number_incorrect1'));
                                break;
                            default:
                                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_unknown_error'));
                                break;
                        }
                        return;
                    }
                    _this_1.showSmsPlusContinue();
                    App_1.default.instance.alertDialog.showMsg("Vui lòng nhập mã OTP (Số điện thoại cũ) để tiếp tục thay đổi số điện thoại bảo mật!");
                    break;
                }
                case Lobby_Cmd_1.default.Code.GET_OTP: {
                    App_1.default.instance.showLoading(false);
                    var res = new Lobby_Cmd_1.default.ResGetOTP(data);
                    //Utils.Log("GET_OTP:" + JSON.stringify(res));
                    if (res.error == 0) {
                        App_1.default.instance.alertDialog.showMsg("Mã OTP đã được gửi đi!");
                    }
                    else if (res.error == 30) {
                        App_1.default.instance.alertDialog.showMsg("Mỗi thao tác lấy SMS OTP phải cách nhau ít nhất 5 phút!");
                    }
                    else {
                        App_1.default.instance.alertDialog.showMsg("Thao tác không thành công vui lòng thử lại sau!");
                    }
                    break;
                }
                case Lobby_Cmd_1.default.Code.SEND_OTP: {
                    App_1.default.instance.showLoading(false);
                    var res = new Lobby_Cmd_1.default.ResSendOTP(data);
                    //  //Utils.Log(res);
                    if (res.error != 0) {
                        switch (res.error) {
                            case 1:
                            case 2:
                                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_error'));
                                break;
                            case 3:
                                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_account_incorrect_otp'));
                                break;
                            case 4:
                                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_account_expired_otp'));
                                break;
                            default:
                                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_unknown_error'));
                                break;
                        }
                        return;
                    }
                    break;
                }
                case Lobby_Cmd_1.default.Code.ACTIVE_PHONE: {
                    App_1.default.instance.showLoading(false);
                    var res = new Lobby_Cmd_1.default.ResActivePhone(data);
                    switch (res.error) {
                        case 0:
                            _this_1.showSmsPlusContinue();
                            break;
                        case 1:
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_check_connect'));
                            break;
                        case 2:
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_phone_number_incorrect1'));
                            break;
                        default:
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_unknown_error'));
                            break;
                    }
                    break;
                }
                case Lobby_Cmd_1.default.Code.RESULT_ACTIVE_MOBILE: {
                    App_1.default.instance.showLoading(false);
                    var res = new Lobby_Cmd_1.default.ResResultActiveMobie(data);
                    if (res.error == 0) {
                        LogEvent_1.default.getInstance().sendEventSdt(_this_1.panelSmsPlus.updateEdbPhoneNumber.string.trim());
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_security_success'));
                        _this_1.onTabChanged();
                    }
                    else {
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_security_error'));
                    }
                    break;
                }
                case Lobby_Cmd_1.default.Code.RESULT_ACTIVE_NEW_MOBILE: {
                    App_1.default.instance.showLoading(false);
                    var res = new Lobby_Cmd_1.default.ResResultActiveMobie(data);
                    if (res.error == 0) {
                        LogEvent_1.default.getInstance().sendEventSdt(_this_1.panelSmsPlus.updateEdbPhoneNumber.string.trim());
                        App_1.default.instance.alertDialog.showMsg("Thay đổi số điện thoại và kích hoạt bảo mật thành công!");
                        _this_1.onTabChanged();
                    }
                    else {
                        App_1.default.instance.alertDialog.showMsg("Thao tác không thành công, vui lòng thử lại sau!");
                    }
                    break;
                }
                case Lobby_Cmd_1.default.Code.RESULT_CHANGE_MOBILE_ACTIVED: {
                    App_1.default.instance.showLoading(false);
                    var res = new Lobby_Cmd_1.default.ResResultActiveMobie(data);
                    if (res.error == 0) {
                        _this_1.showSmsPlusContinue();
                        App_1.default.instance.alertDialog.showMsg("Vui lòng nhập mã OTP (Số điện thoại mới) để hoàn tất thay đổi số điện thoại bảo mật!");
                    }
                    else {
                        App_1.default.instance.alertDialog.showMsg("Thao tác không thành công, vui lòng thử lại sau!");
                    }
                    break;
                }
                case Lobby_Cmd_1.default.Code.SAFES: {
                    App_1.default.instance.showLoading(false);
                    var res = new Lobby_Cmd_1.default.ResSafes(data);
                    switch (res.error) {
                        case 0:
                            if (_this_1.tabSafes.tabSelectedIdx == 0) {
                                //nap
                            }
                            else if (_this_1.tabSafes.tabSelectedIdx == 1) {
                                //rut
                                App_1.default.instance.showLoading(true);
                                MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqSendOTP(_this_1.tabSafes.edbOTP.string.trim(), _this_1.tabSafes.toggleAppOTP.isChecked ? 1 : 0));
                            }
                            break;
                        case 1:
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_check_connect'));
                            break;
                        case 2:
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_not_enough'));
                            break;
                        default:
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_unknown_error'));
                            break;
                    }
                    break;
                }
                case Lobby_Cmd_1.default.Code.RESULT_SAFES: {
                    App_1.default.instance.showLoading(false);
                    var res = new Lobby_Cmd_1.default.ResResultSafes(data);
                    //  //Utils.Log(res);
                    switch (res.error) {
                        case 0:
                            if (_this_1.tabSafes.tabSelectedIdx == 0) {
                                //nap
                                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_action_success'));
                                _this_1.tabSafes.lblBalanceSafes.string = Utils_1.default.formatNumber(res.safe);
                                _this_1.tabSafes.edbCoinNap.string = "";
                                Configs_1.default.Login.Coin = res.currentMoney;
                                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                            }
                            else if (_this_1.tabSafes.tabSelectedIdx == 1) {
                                //rut
                                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_action_success'));
                                _this_1.tabSafes.lblBalanceSafes.string = Utils_1.default.formatNumber(res.safe);
                                _this_1.tabSafes.edbCoinRut.string = "";
                                _this_1.tabSafes.edbOTP.string = "";
                                Configs_1.default.Login.Coin = res.currentMoney;
                                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                            }
                            break;
                        default:
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_unknown_error'));
                            break;
                    }
                    break;
                }
            }
        }, this);
    };
    PopupSecurity.prototype.show = function () {
        _super.prototype.show.call(this);
        this.tabSelectedIdx = 0;
        this.tabs.toggleItems[this.tabSelectedIdx].isChecked = true;
        this.onTabChanged();
        // Global.PopupSecurity.recaptchaVerifier = firebase.auth.RecaptchaVerifier(
        //     "recaptcha-container",
        //     {
        //       size: "normal",
        //       callback: function(response) {
        //         Global.PopupSecurity.submitPhoneNumberAuth();
        //       }
        //     }
        //   );
    };
    PopupSecurity.prototype.actSmsPlusInfo = function () {
        this.panelSmsPlus.info.active = true;
        this.panelSmsPlus.update.active = false;
        this.panelSmsPlus.continue.active = false;
    };
    PopupSecurity.prototype.actSmsPlusUpdate = function () {
        this.panelSmsPlus.info.active = false;
        this.panelSmsPlus.update.active = true;
        this.panelSmsPlus.continue.active = false;
        this.panelSmsPlus.updateEdbPhoneNumber.string = "";
    };
    PopupSecurity.prototype.showSmsPlusContinue = function () {
        this.panelSmsPlus.info.active = false;
        this.panelSmsPlus.update.active = false;
        this.panelSmsPlus.continue.active = true;
        this.panelSmsPlus.continueEdbOTP.string = "";
    };
    PopupSecurity.prototype.actSmsPlusSubmitUpdateUserInfo = function () {
        // let phoneNumber = this.panelSmsPlus.updateEdbPhoneNumber.string.trim();
        // if (phoneNumber.length == 0) {
        //     App.instance.alertDialog.showMsg("Số điện thoại không được bỏ trống.");
        //     return;
        // }
        // MiniGameNetworkClient.getInstance().send(new cmd.ReqUpdateUserInfo(phoneNumber));
        this.actGetToken();
    };
    PopupSecurity.prototype.actTeleSafe = function () {
        // let phoneNumber = this.edbTeleSafe.string.trim();
        // if (phoneNumber.length < 10) {
        //     App.instance.ShowAlertDialog(App.instance.getTextLang('txt_check_phone_number'));
        // }
        // if (phoneNumber[0] === "0") {
        //     phoneNumber = phoneNumber.replace('0', '+84');
        // }
        // let url = Configs.App.API + "?c=2028&nn=%s&at=%s&pn=%s";
        // url = cc.js.formatStr(url, Configs.Login.Nickname, Configs.Login.AccessToken, phoneNumber);
        // var _this = this;
        // this.httpGet(url, (err, res) => {
        //     if (err != null) {
        //         App.instance.ShowAlertDialog(App.instance.getTextLang("txt_error"));
        //         return;
        //     }
        //     App.instance.showLoading(false);
        //     let dataRes = res;
        //     if (dataRes.success == true) {
        //         // _this.actSmsPlusInfo();
        //         // App.instance.ShowAlertDialog(App.instance.getTextLang("txt_check_teleSafe"));
        //     } else {
        //         if (dataRes.message != null && dataRes.message != "") {
        //             App.instance.ShowAlertDialog(dataRes.message);
        //         } else {
        //             App.instance.ShowAlertDialog(App.instance.getTextLang("txt_error"));
        //         }
        //     }
        // });
        App_1.default.instance.confirmDialog.show2(App_1.default.instance.getTextLang('txt_check_teleSafe'), function () {
            cc.sys.openURL("https://www.telegram.me/Hitclub6bot?start=" + Configs_1.default.Login.AccessToken + "-" + Configs_1.default.Login.Nickname);
        });
    };
    PopupSecurity.prototype.actSmsPlusSubmitUpdatePhoneNumber = function () {
        var phoneNumber = this.panelSmsPlus.updateEdbPhoneNumber.string.trim();
        if (phoneNumber.length == 0) {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_phone_input1'));
            return;
        }
        App_1.default.instance.showLoading(true);
        MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqChangePhoneNumber(phoneNumber));
    };
    PopupSecurity.prototype.actSmsPlusSubmitContinuePhoneNumber = function () {
        if (Global_1.Global.LobbyController.isUseSDK()) {
            var codeOTP = this.panelSmsPlus.continueEdbOTP.string.trim();
            if (codeOTP == "" || codeOTP.length < 6) {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_otp_invalid"));
                return;
            }
            UtilsNative_1.default.verifyOTP(codeOTP);
        }
        else {
            this.actConfirmOtp();
        }
    };
    PopupSecurity.prototype.actSmsPlusActivePhone = function () {
        App_1.default.instance.showLoading(true);
        MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqActivePhone());
    };
    PopupSecurity.prototype.actSubmitSafesNap = function () {
        var coin = Utils_1.default.stringToInt(this.tabSafes.edbCoinNap.string);
        if (coin <= 0) {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_money_amount_invalid'));
            return;
        }
        App_1.default.instance.showLoading(true);
        MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqSafes(coin, 1));
    };
    PopupSecurity.prototype.actSubmitSafesRut = function () {
        var coin = Utils_1.default.stringToInt(this.tabSafes.edbCoinRut.string);
        var otp = this.tabSafes.edbOTP.string;
        if (coin <= 0) {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_money_amount_invalid'));
            return;
        }
        if (otp.length == 0) {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_otp_blank'));
            return;
        }
        App_1.default.instance.showLoading(true);
        MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqSafes(coin, 0));
    };
    PopupSecurity.prototype.actGetOTP = function () {
        // App.instance.showLoading(true);
        // MiniGameNetworkClient.getInstance().send(new cmd.ReqGetOTP());
        var phoneNumber = this.panelSmsPlus.updateEdbPhoneNumber.string.trim();
        if (phoneNumber[0] === "0") {
            phoneNumber = phoneNumber.replace('0', '+84');
        }
        this.submitPhoneNumberAuth(phoneNumber);
        this.panelSmsPlus.btnGetOTP.node.active = false;
    };
    PopupSecurity.prototype.actTelegram = function () {
        App_1.default.instance.openTelegram();
    };
    // This function runs when the 'confirm-code' button is clicked
    // Takes the value from the 'code' input and submits the code to verify the phone number
    // Return a user object if the authentication was successful, and auth is complete
    PopupSecurity.prototype.actGetToken = function () {
        var _this = this;
        var phoneNumber = _this.panelSmsPlus.updateEdbPhoneNumber.string.trim();
        if (phoneNumber[0] === "0") {
            phoneNumber = phoneNumber.replace('0', '+84');
        }
        else {
            phoneNumber = "+84" + phoneNumber;
        }
        //Utils.Log("actGetToken:" + phoneNumber);
        if (!Global_1.Global.LobbyController.isUseSDK()) {
            this.showSmsPlusContinue();
            this.submitPhoneNumberAuth(phoneNumber);
        }
        else {
            App_1.default.instance.showLoading(true);
            UtilsNative_1.default.verifyPhone(phoneNumber);
        }
    };
    PopupSecurity.prototype.actGetOtpServer = function (token) {
        var phoneNumber = this.panelSmsPlus.updateEdbPhoneNumber.string.trim();
        var url = Configs_1.default.App.API + "?c=2012&nn=%s&pn=%s&cpt=%s&at=%s";
        if (phoneNumber[0] === "0") {
            phoneNumber = phoneNumber.replace('0', '+84');
        }
        url = cc.js.formatStr(url, Configs_1.default.Login.Nickname, phoneNumber, token, Configs_1.default.Login.AccessToken2);
        var data = Object.create({});
        data.nn = Configs_1.default.Login.Nickname;
        data.pn = phoneNumber;
        data.cpt = token;
        var _this = this;
        if (!Global_1.Global.LobbyController.isUseSDK()) { //tren web van dang dùng tạm qua thằng 2012
            this.httpGet(url, function (err, res) {
                if (err != null) {
                    App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_error"));
                    return;
                }
                App_1.default.instance.showLoading(false);
                var data = res;
                if (data != {} && data.hasOwnProperty("success") && data.success == true) {
                    _this.sessionInfo = data.data;
                    _this.actGetVerifyCode();
                }
                else {
                    App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_error"));
                }
            });
        }
        else { //tren native thi bỏ qua 2012 ,Lưu sessionid lại rồi sau khi nhâp otp call luôn 2013;
            App_1.default.instance.showLoading(false);
            this.sessionInfo = token;
            this.showSmsPlusContinue();
        }
    };
    PopupSecurity.prototype.actGetVerifyCode = function (isValidOpt) {
        if (isValidOpt === void 0) { isValidOpt = null; }
        if (Global_1.Global.LobbyController.isUseSDK()) {
            if (isValidOpt == "Failed") {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_error"));
                return;
            }
        }
        if (this.sessionInfo == "" || this.panelSmsPlus.continueEdbOTP.string == "") {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_otp_invalid"));
            return;
        }
        var codeOTP = this.panelSmsPlus.continueEdbOTP.string.trim();
        var phoneNumber = this.panelSmsPlus.updateEdbPhoneNumber.string.trim();
        if (codeOTP.length < 6) {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_otp_invalid"));
            return;
        }
        App_1.default.instance.showLoading(true);
        var url = Configs_1.default.App.API + "?c=2013&nn=%s&at=%s&pn=%s";
        url = cc.js.formatStr(url, Configs_1.default.Login.Nickname, Configs_1.default.Login.AccessToken, phoneNumber);
        var _this = this;
        this.httpGet(url, function (err, res) {
            if (err != null) {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_error"));
                return;
            }
            App_1.default.instance.showLoading(false);
            var dataRes = res;
            if (dataRes.success == true) {
                _this.actSmsPlusInfo();
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_verify_phone_success"));
            }
            else {
                if (dataRes.message != null && dataRes.message != "") {
                    App_1.default.instance.ShowAlertDialog(dataRes.message);
                }
                else {
                    App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_error"));
                }
            }
        });
    };
    PopupSecurity.prototype.actConfirmOtp = function () {
        if (this.panelSmsPlus.continueEdbOTP.string == "") {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_otp_invalid"));
            return;
        }
        var codeOTP = this.panelSmsPlus.continueEdbOTP.string.trim();
        if (codeOTP.length < 6) {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_otp_invalid"));
            return;
        }
        var _this = this;
        window.confirmationResult.confirm(codeOTP).then(function (result) {
            // User signed in successfully.
            //Utils.Log("VERIFY OTP SUCCESS:", result);
            _this.actGetVerifyCode();
            var user = result.user;
        }).catch(function (error) {
            //Utils.Log("VERIFY OTP FAILED");
            App_1.default.instance.showLoading(false);
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_error"));
        });
    };
    PopupSecurity.prototype.setupRecaptcha = function () {
        //Utils.Log("Setup Captchar");
        var _this = this;
        if (window.recaptchaVerifier == null) {
            window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
                size: "invisible",
                callback: function (response) {
                    //Utils.Log("setupRecaptcha:CB==", response);
                    _this.sessionInfo = response;
                }
            });
        }
    };
    PopupSecurity.prototype.submitPhoneNumberAuth = function (phoneNum) {
        this.setupRecaptcha();
        var appVerifier = window.recaptchaVerifier;
        var _this = this;
        firebase.auth().signInWithPhoneNumber(phoneNum, appVerifier).then(function (confirmationResult) {
            //Utils.Log("SMS  Sended");
            window.confirmationResult = confirmationResult;
            App_1.default.instance.showLoading(false);
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_sms_otp_sended"));
        }).catch(function (error) {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_error"));
            _this.panelSmsPlus.btnGetOTP.node.active = true;
            App_1.default.instance.showLoading(false);
            //Utils.Log("SMS Not Send", error);
        });
    };
    PopupSecurity.prototype.httpGet = function (url, onFinished) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var data = null;
                    var e = null;
                    try {
                        data = JSON.parse(xhr.responseText);
                    }
                    catch (ex) {
                        e = ex;
                    }
                    onFinished(e, data);
                }
                else {
                    onFinished(xhr.status, null);
                }
            }
        };
        xhr.open("GET", url, true);
        xhr.send();
    };
    PopupSecurity.prototype.onTabChanged = function () {
        for (var i = 0; i < this.tabContents.childrenCount; i++) {
            this.tabContents.children[i].active = i == this.tabSelectedIdx;
            if (i == this.tabSelectedIdx) {
                //Utils.Log("onTabChanged");
            }
        }
        for (var j = 0; j < this.tabs.toggleItems.length; j++) {
            this.tabs.toggleItems[j].node.getComponentInChildren(cc.Label).node.color = j == this.tabSelectedIdx ? cc.Color.YELLOW : cc.Color.WHITE;
        }
        //Utils.Log("tab selectedidx=" + this.tabSelectedIdx);
        switch (this.tabSelectedIdx) {
            case 0:
                App_1.default.instance.showLoading(true);
                MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqGetSecurityInfo());
                break;
            case 1:
                break;
            case 2:
                App_1.default.instance.showLoading(true);
                MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqGetSecurityInfo());
                this.tabSafes.tabSelectedIdx = 0;
                this.tabSafes.tabs.toggleItems[this.tabSafes.tabSelectedIdx].isChecked = true;
                this.tabSafes.onTabChanged();
                break;
        }
    };
    __decorate([
        property(cc.ToggleContainer)
    ], PopupSecurity.prototype, "tabs", void 0);
    __decorate([
        property(cc.Node)
    ], PopupSecurity.prototype, "tabContents", void 0);
    __decorate([
        property(PanelSmsPlus)
    ], PopupSecurity.prototype, "panelSmsPlus", void 0);
    __decorate([
        property(TabSafes)
    ], PopupSecurity.prototype, "tabSafes", void 0);
    __decorate([
        property([cc.Label])
    ], PopupSecurity.prototype, "lblContainsBotOTPs", void 0);
    __decorate([
        property(cc.Node)
    ], PopupSecurity.prototype, "tabTeleSafe", void 0);
    __decorate([
        property(cc.EditBox)
    ], PopupSecurity.prototype, "edbTeleSafe", void 0);
    PopupSecurity = __decorate([
        ccclass
    ], PopupSecurity);
    return PopupSecurity;
}(Dialog_1.default));
exports.default = PopupSecurity;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5Qb3B1cFNlY3VyaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBZ0Q7QUFDaEQsbURBQWtEO0FBQ2xELGdFQUEyRDtBQUMzRCw2REFBd0Q7QUFDeEQseUNBQThCO0FBQzlCLDJDQUFzQztBQUN0Qyx1RUFBa0U7QUFDbEUsaURBQTRDO0FBQzVDLCtDQUEwQztBQUMxQyxpRkFBNEU7QUFDNUUsdUVBQTBEO0FBRXBELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQUE7UUFFSSxTQUFJLEdBQVksSUFBSSxDQUFDO1FBR3JCLFNBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsV0FBTSxHQUFZLElBQUksQ0FBQztRQUV2QixhQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLG9CQUFlLEdBQWEsSUFBSSxDQUFDO1FBRWpDLHVCQUFrQixHQUFhLElBQUksQ0FBQztRQUVwQyxrQkFBYSxHQUFjLElBQUksQ0FBQztRQUVoQyxrQkFBYSxHQUFjLElBQUksQ0FBQztRQUdoQyxxQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFFakMsd0JBQW1CLEdBQVksSUFBSSxDQUFDO1FBRXBDLHlCQUFvQixHQUFlLElBQUksQ0FBQztRQUd4QyxtQkFBYyxHQUFlLElBQUksQ0FBQztRQUVsQyxjQUFTLEdBQWMsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUE3Qkc7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDRztJQUdyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FB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LENBQUMsZUFBZSxDQUFDOytDQUNHO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsWUFBWSxDQUFDO3VEQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLFFBQVEsQ0FBQzttREFDTztJQUUxQjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQzs2REFDZTtJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7c0RBQ1U7SUFkZCxhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBNG5CakM7SUFBRCxvQkFBQztDQTVuQkQsQUE0bkJDLENBNW5CMEMsZ0JBQU0sR0E0bkJoRDtrQkE1bkJvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9HbG9iYWxcIjtcbmltcG9ydCBMb2dFdmVudCBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvTG9nRXZlbnQvTG9nRXZlbnRcIjtcbmltcG9ydCBVdGlsc05hdGl2ZSBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvVXRpbHNOYXRpdmVcIjtcbmltcG9ydCBjbWQgZnJvbSBcIi4vTG9iYnkuQ21kXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgQnJvYWRjYXN0UmVjZWl2ZXIgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9Ccm9hZGNhc3RSZWNlaXZlclwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL0RpYWxvZ1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1NjcmlwdC9jb21tb24vVXRpbHNcIjtcbmltcG9ydCBNaW5pR2FtZU5ldHdvcmtDbGllbnQgZnJvbSBcIi4vU2NyaXB0L25ldHdvcmtzL01pbmlHYW1lTmV0d29ya0NsaWVudFwiO1xuaW1wb3J0IEluUGFja2V0IGZyb20gXCIuL1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLkluUGFja2V0XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzcyhcIkxvYmJ5LlBvcHVwU2VjdXJpdHkuUGFuZWxTbXNQbHVzXCIpXG5leHBvcnQgY2xhc3MgUGFuZWxTbXNQbHVzIHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGluZm86IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHVwZGF0ZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29udGludWU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGluZm9MYmxVc2VybmFtZTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBpbmZvTGJsUGhvbmVOdW1iZXI6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGluZm9CdG5BY3RpdmU6IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBpbmZvQnRuQ2hhbmdlOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdXBkYXRlQnRuc0FjdGl2ZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdXBkYXRlQnRuc05vdEFjdGl2ZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgdXBkYXRlRWRiUGhvbmVOdW1iZXI6IGNjLkVkaXRCb3ggPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgY29udGludWVFZGJPVFA6IGNjLkVkaXRCb3ggPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgYnRuR2V0T1RQOiBjYy5CdXR0b24gPSBudWxsO1xufVxuXG5AY2NjbGFzcyhcIkxvYmJ5LlBvcHVwU2VjdXJpdHkuVGFiU2FmZXNcIilcbmV4cG9ydCBjbGFzcyBUYWJTYWZlcyB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlQ29udGFpbmVyKVxuICAgIHRhYnM6IGNjLlRvZ2dsZUNvbnRhaW5lciA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGFiQ29udGVudHM6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibEJhbGFuY2U6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsQmFsYW5jZVNhZmVzOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBlZGJDb2luTmFwOiBjYy5FZGl0Qm94ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIGVkYkNvaW5SdXQ6IGNjLkVkaXRCb3ggPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIGVkYk9UUDogY2MuRWRpdEJveCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZSlcbiAgICB0b2dnbGVBcHBPVFA6IGNjLlRvZ2dsZSA9IG51bGw7XG5cbiAgICB0YWJTZWxlY3RlZElkeCA9IDA7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5lZGJDb2luUnV0Lm5vZGUub24oXCJlZGl0aW5nLWRpZC1lbmRlZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgbnVtYmVyID0gVXRpbHMuc3RyaW5nVG9JbnQodGhpcy5lZGJDb2luUnV0LnN0cmluZyk7XG4gICAgICAgICAgICB0aGlzLmVkYkNvaW5SdXQuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKG51bWJlcik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVkYkNvaW5OYXAubm9kZS5vbihcImVkaXRpbmctZGlkLWVuZGVkXCIsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBudW1iZXIgPSBVdGlscy5zdHJpbmdUb0ludCh0aGlzLmVkYkNvaW5OYXAuc3RyaW5nKTtcbiAgICAgICAgICAgIHRoaXMuZWRiQ29pbk5hcC5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIobnVtYmVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YWJzLnRvZ2dsZUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnRhYnMudG9nZ2xlSXRlbXNbaV0ubm9kZS5vbihcInRvZ2dsZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJTZWxlY3RlZElkeCA9IGk7XG4gICAgICAgICAgICAgICAgdGhpcy5vblRhYkNoYW5nZWQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25UYWJDaGFuZ2VkKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFiQ29udGVudHMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnRhYkNvbnRlbnRzLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IGkgPT0gdGhpcy50YWJTZWxlY3RlZElkeDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMudGFicy50b2dnbGVJdGVtcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgdGhpcy50YWJzLnRvZ2dsZUl0ZW1zW2pdLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkubm9kZS5jb2xvciA9IGogPT0gdGhpcy50YWJTZWxlY3RlZElkeCA/IGNjLkNvbG9yLllFTExPVyA6IGNjLkNvbG9yLldISVRFO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodGhpcy50YWJTZWxlY3RlZElkeCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHRoaXMuZWRiQ29pbk5hcC5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMuZWRiQ29pblJ1dC5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuZWRiT1RQLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFNlY3VyaXR5IGV4dGVuZHMgRGlhbG9nIHtcbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlQ29udGFpbmVyKVxuICAgIHRhYnM6IGNjLlRvZ2dsZUNvbnRhaW5lciA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGFiQ29udGVudHM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShQYW5lbFNtc1BsdXMpXG4gICAgcGFuZWxTbXNQbHVzOiBQYW5lbFNtc1BsdXMgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShUYWJTYWZlcylcbiAgICB0YWJTYWZlczogVGFiU2FmZXMgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShbY2MuTGFiZWxdKVxuICAgIGxibENvbnRhaW5zQm90T1RQczogY2MuTGFiZWxbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRhYlRlbGVTYWZlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBlZGJUZWxlU2FmZTogY2MuRWRpdEJveCA9IG51bGw7XG5cbiAgICBwcml2YXRlIHRhYlNlbGVjdGVkSWR4ID0gMDtcbiAgICBwcml2YXRlIHBob25lTnVtYmVyID0gXCJcIjtcbiAgICBwdWJsaWMgc2Vzc2lvbkluZm8gPSBcIlwiO1xuICAgIHByaXZhdGUgY2FwdGNoYVRva2VuID0gXCJcIlxuICAgIHByaXZhdGUgaXNNb2JpbGVTZWN1cmUgPSBmYWxzZTtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIEdsb2JhbC5Qb3B1cFNlY3VyaXR5ID0gdGhpcztcbiAgICAgICAgdGhpcy5wYW5lbFNtc1BsdXMuaW5mb0xibFVzZXJuYW1lLnN0cmluZyA9IENvbmZpZ3MuTG9naW4uTmlja25hbWU7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGJsQ29udGFpbnNCb3RPVFBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbGJsID0gdGhpcy5sYmxDb250YWluc0JvdE9UUHNbaV07XG4gICAgICAgICAgICBsYmwuc3RyaW5nID0gbGJsLnN0cmluZy5yZXBsYWNlKFwiJGJvdF9vdHBcIiwgXCJAXCIgKyBDb25maWdzLkFwcC5nZXRMaW5rVGVsZWdyYW0oKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRhYlNhZmVzLnN0YXJ0KCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhYnMudG9nZ2xlSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMudGFicy50b2dnbGVJdGVtc1tpXS5ub2RlLm9uKFwidG9nZ2xlXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSWR4ID0gaTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uVGFiQ2hhbmdlZCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5yZWdpc3RlcihCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRhYlNhZmVzLmxibEJhbGFuY2Uuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKENvbmZpZ3MuTG9naW4uQ29pbik7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmFkZExpc3RlbmVyKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHJldHVybjtcbiAgICAgICAgICAgIGxldCBpbnBhY2tldCA9IG5ldyBJblBhY2tldChkYXRhKTtcbiAgICAgICAgICAgIC8vICAvL1V0aWxzLkxvZyhpbnBhY2tldC5nZXRDbWRJZCgpKTtcbiAgICAgICAgICAgIHN3aXRjaCAoaW5wYWNrZXQuZ2V0Q21kSWQoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuR0VUX1NFQ1VSSVRZX0lORk86IHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVzR2V0U2VjdXJpdHlJbmZvKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgLy9VdGlscy5Mb2coXCJSZXNHZXRTZWN1cml0eUluZm86XCIsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYW5lbFNtc1BsdXMubm9kZS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGhvbmVOdW1iZXIgPSByZXMubW9iaWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc01vYmlsZVNlY3VyZSA9IHJlcy5tb2JpbGVTZWN1cmUgPT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLm1vYmlsZS5sZW5ndGggPiAwfHxyZXMuaXNWZXJpZnlQaG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9pZiAocmVzLmlzVmVyaWZ5UGhvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhbmVsU21zUGx1cy5pbmZvLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5lbFNtc1BsdXMudXBkYXRlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFuZWxTbXNQbHVzLmNvbnRpbnVlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFuZWxTbXNQbHVzLmluZm9MYmxVc2VybmFtZS5zdHJpbmcgPSByZXMudXNlcm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5lbFNtc1BsdXMuaW5mb0xibFBob25lTnVtYmVyLnN0cmluZyA9IFwiKioqKioqKlwiICsgdGhpcy5waG9uZU51bWJlci5zdWJzdHJpbmcodGhpcy5waG9uZU51bWJlci5sZW5ndGggLSAzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnBhbmVsU21zUGx1cy5pbmZvQnRuQWN0aXZlLm5vZGUuYWN0aXZlID0gIXRoaXMuaXNNb2JpbGVTZWN1cmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5lbFNtc1BsdXMuaW5mb0J0bkFjdGl2ZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFuZWxTbXNQbHVzLmluZm8uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5lbFNtc1BsdXMudXBkYXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5lbFNtc1BsdXMuY29udGludWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhbmVsU21zUGx1cy51cGRhdGVCdG5zQWN0aXZlLmFjdGl2ZSA9IHRoaXMuaXNNb2JpbGVTZWN1cmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhbmVsU21zUGx1cy51cGRhdGVCdG5zTm90QWN0aXZlLmFjdGl2ZSA9ICF0aGlzLmlzTW9iaWxlU2VjdXJlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhYlNhZmVzLm5vZGUuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYlNhZmVzLmxibEJhbGFuY2VTYWZlcy5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIocmVzLnNhZmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJTYWZlcy5sYmxCYWxhbmNlLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihDb25maWdzLkxvZ2luLkNvaW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICAvL1V0aWxzLkxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5VUERBVEVfVVNFUl9JTkZPOiB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlc1VwZGF0ZVVzZXJJbmZvKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmVycm9yICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9jaGVja19jb25uZWN0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Bob25lX251bWJlcl9pbmNvcnJlY3QnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9waG9uZV9udW1iZXJfaW5jb3JyZWN0MScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfdW5rbm93bl9lcnJvcicpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U21zUGx1c0NvbnRpbnVlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0U21zUGx1c0FjdGl2ZVBob25lKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkNIQU5HRV9QSE9ORV9OVU1CRVI6IHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVzQ2hhbmdlUGhvbmVOdW1iZXIoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZXJyb3IgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZXMuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2NoZWNrX2Nvbm5lY3QnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfcGhvbmVfbnVtYmVyX2luY29ycmVjdCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9waG9uZV9udW1iZXJfaW5jb3JyZWN0MicpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfcGhvbmVfbnVtYmVyX2luY29ycmVjdDEnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Vua25vd25fZXJyb3InKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Ntc1BsdXNDb250aW51ZSgpO1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIlZ1aSBsw7JuZyBuaOG6rXAgbcOjIE9UUCAoU+G7kSDEkWnhu4duIHRob+G6oWkgY8WpKSDEkeG7gyB0aeG6v3AgdOG7pWMgdGhheSDEkeG7lWkgc+G7kSDEkWnhu4duIHRob+G6oWkgYuG6o28gbeG6rXQhXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5HRVRfT1RQOiB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlc0dldE9UUChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgIC8vVXRpbHMuTG9nKFwiR0VUX09UUDpcIiArIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmVycm9yID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiTcOjIE9UUCDEkcOjIMSRxrDhu6NjIGfhu61pIMSRaSFcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmVycm9yID09IDMwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIk3hu5dpIHRoYW8gdMOhYyBs4bqleSBTTVMgT1RQIHBo4bqjaSBjw6FjaCBuaGF1IMOtdCBuaOG6pXQgNSBwaMO6dCFcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIlRoYW8gdMOhYyBraMO0bmcgdGjDoG5oIGPDtG5nIHZ1aSBsw7JuZyB0aOG7rSBs4bqhaSBzYXUhXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlNFTkRfT1RQOiB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlc1NlbmRPVFAoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAvL1V0aWxzLkxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmVycm9yICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfZXJyb3InKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9naW5fYWNjb3VudF9pbmNvcnJlY3Rfb3RwJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvZ2luX2FjY291bnRfZXhwaXJlZF9vdHAnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Vua25vd25fZXJyb3InKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkFDVElWRV9QSE9ORToge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZXNBY3RpdmVQaG9uZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZXMuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dTbXNQbHVzQ29udGludWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9jaGVja19jb25uZWN0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Bob25lX251bWJlcl9pbmNvcnJlY3QxJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF91bmtub3duX2Vycm9yJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlJFU1VMVF9BQ1RJVkVfTU9CSUxFOiB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlc1Jlc3VsdEFjdGl2ZU1vYmllKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmVycm9yID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ0V2ZW50LmdldEluc3RhbmNlKCkuc2VuZEV2ZW50U2R0KHRoaXMucGFuZWxTbXNQbHVzLnVwZGF0ZUVkYlBob25lTnVtYmVyLnN0cmluZy50cmltKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfc2VjdXJpdHlfc3VjY2VzcycpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25UYWJDaGFuZ2VkKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9zZWN1cml0eV9lcnJvcicpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5SRVNVTFRfQUNUSVZFX05FV19NT0JJTEU6IHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVzUmVzdWx0QWN0aXZlTW9iaWUoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZXJyb3IgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nRXZlbnQuZ2V0SW5zdGFuY2UoKS5zZW5kRXZlbnRTZHQodGhpcy5wYW5lbFNtc1BsdXMudXBkYXRlRWRiUGhvbmVOdW1iZXIuc3RyaW5nLnRyaW0oKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIlRoYXkgxJHhu5VpIHPhu5EgxJFp4buHbiB0aG/huqFpIHbDoCBrw61jaCBob+G6oXQgYuG6o28gbeG6rXQgdGjDoG5oIGPDtG5nIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25UYWJDaGFuZ2VkKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIlRoYW8gdMOhYyBraMO0bmcgdGjDoG5oIGPDtG5nLCB2dWkgbMOybmcgdGjhu60gbOG6oWkgc2F1IVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5SRVNVTFRfQ0hBTkdFX01PQklMRV9BQ1RJVkVEOiB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlc1Jlc3VsdEFjdGl2ZU1vYmllKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmVycm9yID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Ntc1BsdXNDb250aW51ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJWdWkgbMOybmcgbmjhuq1wIG3DoyBPVFAgKFPhu5EgxJFp4buHbiB0aG/huqFpIG3hu5tpKSDEkeG7gyBob8OgbiB04bqldCB0aGF5IMSR4buVaSBz4buRIMSRaeG7h24gdGhv4bqhaSBi4bqjbyBt4bqtdCFcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIlRoYW8gdMOhYyBraMO0bmcgdGjDoG5oIGPDtG5nLCB2dWkgbMOybmcgdGjhu60gbOG6oWkgc2F1IVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5TQUZFUzoge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZXNTYWZlcyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZXMuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50YWJTYWZlcy50YWJTZWxlY3RlZElkeCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbmFwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRhYlNhZmVzLnRhYlNlbGVjdGVkSWR4ID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9ydXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuUmVxU2VuZE9UUCh0aGlzLnRhYlNhZmVzLmVkYk9UUC5zdHJpbmcudHJpbSgpLCB0aGlzLnRhYlNhZmVzLnRvZ2dsZUFwcE9UUC5pc0NoZWNrZWQgPyAxIDogMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9jaGVja19jb25uZWN0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25vdF9lbm91Z2gnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Vua25vd25fZXJyb3InKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuUkVTVUxUX1NBRkVTOiB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlc1Jlc3VsdFNhZmVzKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgLy9VdGlscy5Mb2cocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZXMuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50YWJTYWZlcy50YWJTZWxlY3RlZElkeCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbmFwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2FjdGlvbl9zdWNjZXNzJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYlNhZmVzLmxibEJhbGFuY2VTYWZlcy5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIocmVzLnNhZmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYlNhZmVzLmVkYkNvaW5OYXAuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luID0gcmVzLmN1cnJlbnRNb25leTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGFiU2FmZXMudGFiU2VsZWN0ZWRJZHggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3J1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9hY3Rpb25fc3VjY2VzcycpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJTYWZlcy5sYmxCYWxhbmNlU2FmZXMuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKHJlcy5zYWZlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJTYWZlcy5lZGJDb2luUnV0LnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFiU2FmZXMuZWRiT1RQLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQ29pbiA9IHJlcy5jdXJyZW50TW9uZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF91bmtub3duX2Vycm9yJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgc3VwZXIuc2hvdygpO1xuICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSWR4ID0gMDtcbiAgICAgICAgdGhpcy50YWJzLnRvZ2dsZUl0ZW1zW3RoaXMudGFiU2VsZWN0ZWRJZHhdLmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgIHRoaXMub25UYWJDaGFuZ2VkKCk7XG5cbiAgICAgICAgLy8gR2xvYmFsLlBvcHVwU2VjdXJpdHkucmVjYXB0Y2hhVmVyaWZpZXIgPSBmaXJlYmFzZS5hdXRoLlJlY2FwdGNoYVZlcmlmaWVyKFxuICAgICAgICAvLyAgICAgXCJyZWNhcHRjaGEtY29udGFpbmVyXCIsXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgIHNpemU6IFwibm9ybWFsXCIsXG4gICAgICAgIC8vICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAvLyAgICAgICAgIEdsb2JhbC5Qb3B1cFNlY3VyaXR5LnN1Ym1pdFBob25lTnVtYmVyQXV0aCgpO1xuICAgICAgICAvLyAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgKTtcbiAgICB9XG5cblxuXG4gICAgYWN0U21zUGx1c0luZm8oKSB7XG4gICAgICAgIHRoaXMucGFuZWxTbXNQbHVzLmluZm8uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYW5lbFNtc1BsdXMudXBkYXRlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBhbmVsU21zUGx1cy5jb250aW51ZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBhY3RTbXNQbHVzVXBkYXRlKCkge1xuICAgICAgICB0aGlzLnBhbmVsU21zUGx1cy5pbmZvLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBhbmVsU21zUGx1cy51cGRhdGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYW5lbFNtc1BsdXMuY29udGludWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGFuZWxTbXNQbHVzLnVwZGF0ZUVkYlBob25lTnVtYmVyLnN0cmluZyA9IFwiXCI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaG93U21zUGx1c0NvbnRpbnVlKCkge1xuICAgICAgICB0aGlzLnBhbmVsU21zUGx1cy5pbmZvLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBhbmVsU21zUGx1cy51cGRhdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGFuZWxTbXNQbHVzLmNvbnRpbnVlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucGFuZWxTbXNQbHVzLmNvbnRpbnVlRWRiT1RQLnN0cmluZyA9IFwiXCI7XG4gICAgfVxuXG4gICAgYWN0U21zUGx1c1N1Ym1pdFVwZGF0ZVVzZXJJbmZvKCkge1xuICAgICAgICAvLyBsZXQgcGhvbmVOdW1iZXIgPSB0aGlzLnBhbmVsU21zUGx1cy51cGRhdGVFZGJQaG9uZU51bWJlci5zdHJpbmcudHJpbSgpO1xuICAgICAgICAvLyBpZiAocGhvbmVOdW1iZXIubGVuZ3RoID09IDApIHtcbiAgICAgICAgLy8gICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiU+G7kSDEkWnhu4duIHRob+G6oWkga2jDtG5nIMSRxrDhu6NjIGLhu48gdHLhu5FuZy5cIik7XG4gICAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlJlcVVwZGF0ZVVzZXJJbmZvKHBob25lTnVtYmVyKSk7XG4gICAgICAgIHRoaXMuYWN0R2V0VG9rZW4oKTtcbiAgICB9XG4gICAgYWN0VGVsZVNhZmUoKSB7XG4gICAgICAgIC8vIGxldCBwaG9uZU51bWJlciA9IHRoaXMuZWRiVGVsZVNhZmUuc3RyaW5nLnRyaW0oKTtcbiAgICAgICAgLy8gaWYgKHBob25lTnVtYmVyLmxlbmd0aCA8IDEwKSB7XG4gICAgICAgIC8vICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2NoZWNrX3Bob25lX251bWJlcicpKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiAocGhvbmVOdW1iZXJbMF0gPT09IFwiMFwiKSB7XG4gICAgICAgIC8vICAgICBwaG9uZU51bWJlciA9IHBob25lTnVtYmVyLnJlcGxhY2UoJzAnLCAnKzg0Jyk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gbGV0IHVybCA9IENvbmZpZ3MuQXBwLkFQSSArIFwiP2M9MjAyOCZubj0lcyZhdD0lcyZwbj0lc1wiO1xuICAgICAgICAvLyB1cmwgPSBjYy5qcy5mb3JtYXRTdHIodXJsLCBDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuLCBwaG9uZU51bWJlcik7XG4gICAgICAgIC8vIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIHRoaXMuaHR0cEdldCh1cmwsIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAvLyAgICAgaWYgKGVyciAhPSBudWxsKSB7XG4gICAgICAgIC8vICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfZXJyb3JcIikpO1xuICAgICAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIC8vICAgICBsZXQgZGF0YVJlcyA9IHJlcztcbiAgICAgICAgLy8gICAgIGlmIChkYXRhUmVzLnN1Y2Nlc3MgPT0gdHJ1ZSkge1xuICAgICAgICAvLyAgICAgICAgIC8vIF90aGlzLmFjdFNtc1BsdXNJbmZvKCk7XG4gICAgICAgIC8vICAgICAgICAgLy8gQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfY2hlY2tfdGVsZVNhZmVcIikpO1xuXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIGlmIChkYXRhUmVzLm1lc3NhZ2UgIT0gbnVsbCAmJiBkYXRhUmVzLm1lc3NhZ2UgIT0gXCJcIikge1xuICAgICAgICAvLyAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKGRhdGFSZXMubWVzc2FnZSk7XG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfZXJyb3JcIikpO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cblxuICAgICAgICAvLyB9KTtcbiAgICAgICAgQXBwLmluc3RhbmNlLmNvbmZpcm1EaWFsb2cuc2hvdzIoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfY2hlY2tfdGVsZVNhZmUnKSwgKCkgPT4ge1xuICAgICAgICAgICAgY2Muc3lzLm9wZW5VUkwoXCJodHRwczovL3d3dy50ZWxlZ3JhbS5tZS9IaXRjbHViNmJvdD9zdGFydD1cIiArIENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4gKyBcIi1cIiArIENvbmZpZ3MuTG9naW4uTmlja25hbWUpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBhY3RTbXNQbHVzU3VibWl0VXBkYXRlUGhvbmVOdW1iZXIoKSB7XG4gICAgICAgIGxldCBwaG9uZU51bWJlciA9IHRoaXMucGFuZWxTbXNQbHVzLnVwZGF0ZUVkYlBob25lTnVtYmVyLnN0cmluZy50cmltKCk7XG4gICAgICAgIGlmIChwaG9uZU51bWJlci5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfcGhvbmVfaW5wdXQxJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlJlcUNoYW5nZVBob25lTnVtYmVyKHBob25lTnVtYmVyKSk7XG5cbiAgICB9XG5cbiAgICBhY3RTbXNQbHVzU3VibWl0Q29udGludWVQaG9uZU51bWJlcigpIHtcbiAgICAgICAgaWYgKEdsb2JhbC5Mb2JieUNvbnRyb2xsZXIuaXNVc2VTREsoKSkge1xuICAgICAgICAgICAgbGV0IGNvZGVPVFAgPSB0aGlzLnBhbmVsU21zUGx1cy5jb250aW51ZUVkYk9UUC5zdHJpbmcudHJpbSgpO1xuICAgICAgICAgICAgaWYgKGNvZGVPVFAgPT0gXCJcIiB8fCBjb2RlT1RQLmxlbmd0aCA8IDYpIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9vdHBfaW52YWxpZFwiKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgVXRpbHNOYXRpdmUudmVyaWZ5T1RQKGNvZGVPVFApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hY3RDb25maXJtT3RwKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGFjdFNtc1BsdXNBY3RpdmVQaG9uZSgpIHtcbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuUmVxQWN0aXZlUGhvbmUoKSk7XG4gICAgfVxuXG4gICAgYWN0U3VibWl0U2FmZXNOYXAoKSB7XG4gICAgICAgIGxldCBjb2luID0gVXRpbHMuc3RyaW5nVG9JbnQodGhpcy50YWJTYWZlcy5lZGJDb2luTmFwLnN0cmluZyk7XG4gICAgICAgIGlmIChjb2luIDw9IDApIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X21vbmV5X2Ftb3VudF9pbnZhbGlkJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlJlcVNhZmVzKGNvaW4sIDEpKTtcbiAgICB9XG5cbiAgICBhY3RTdWJtaXRTYWZlc1J1dCgpIHtcbiAgICAgICAgbGV0IGNvaW4gPSBVdGlscy5zdHJpbmdUb0ludCh0aGlzLnRhYlNhZmVzLmVkYkNvaW5SdXQuc3RyaW5nKTtcbiAgICAgICAgbGV0IG90cCA9IHRoaXMudGFiU2FmZXMuZWRiT1RQLnN0cmluZztcbiAgICAgICAgaWYgKGNvaW4gPD0gMCkge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbW9uZXlfYW1vdW50X2ludmFsaWQnKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG90cC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfb3RwX2JsYW5rJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlJlcVNhZmVzKGNvaW4sIDApKTtcbiAgICB9XG5cbiAgICBhY3RHZXRPVFAoKSB7XG4gICAgICAgIC8vIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgLy8gTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlJlcUdldE9UUCgpKTtcbiAgICAgICAgdmFyIHBob25lTnVtYmVyID0gdGhpcy5wYW5lbFNtc1BsdXMudXBkYXRlRWRiUGhvbmVOdW1iZXIuc3RyaW5nLnRyaW0oKTtcbiAgICAgICAgaWYgKHBob25lTnVtYmVyWzBdID09PSBcIjBcIikge1xuICAgICAgICAgICAgcGhvbmVOdW1iZXIgPSBwaG9uZU51bWJlci5yZXBsYWNlKCcwJywgJys4NCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3VibWl0UGhvbmVOdW1iZXJBdXRoKHBob25lTnVtYmVyKTtcbiAgICAgICAgdGhpcy5wYW5lbFNtc1BsdXMuYnRuR2V0T1RQLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYWN0VGVsZWdyYW0oKSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5vcGVuVGVsZWdyYW0oKTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHJ1bnMgd2hlbiB0aGUgJ2NvbmZpcm0tY29kZScgYnV0dG9uIGlzIGNsaWNrZWRcbiAgICAvLyBUYWtlcyB0aGUgdmFsdWUgZnJvbSB0aGUgJ2NvZGUnIGlucHV0IGFuZCBzdWJtaXRzIHRoZSBjb2RlIHRvIHZlcmlmeSB0aGUgcGhvbmUgbnVtYmVyXG4gICAgLy8gUmV0dXJuIGEgdXNlciBvYmplY3QgaWYgdGhlIGF1dGhlbnRpY2F0aW9uIHdhcyBzdWNjZXNzZnVsLCBhbmQgYXV0aCBpcyBjb21wbGV0ZVxuXG4gICAgYWN0R2V0VG9rZW4oKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBwaG9uZU51bWJlciA9IF90aGlzLnBhbmVsU21zUGx1cy51cGRhdGVFZGJQaG9uZU51bWJlci5zdHJpbmcudHJpbSgpO1xuICAgICAgICBpZiAocGhvbmVOdW1iZXJbMF0gPT09IFwiMFwiKSB7XG4gICAgICAgICAgICBwaG9uZU51bWJlciA9IHBob25lTnVtYmVyLnJlcGxhY2UoJzAnLCAnKzg0Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwaG9uZU51bWJlciA9IFwiKzg0XCIgKyBwaG9uZU51bWJlcjtcbiAgICAgICAgfVxuICAgICAgICAgLy9VdGlscy5Mb2coXCJhY3RHZXRUb2tlbjpcIiArIHBob25lTnVtYmVyKTtcbiAgICAgICAgaWYgKCFHbG9iYWwuTG9iYnlDb250cm9sbGVyLmlzVXNlU0RLKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Ntc1BsdXNDb250aW51ZSgpO1xuICAgICAgICAgICAgdGhpcy5zdWJtaXRQaG9uZU51bWJlckF1dGgocGhvbmVOdW1iZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgVXRpbHNOYXRpdmUudmVyaWZ5UGhvbmUocGhvbmVOdW1iZXIpO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgYWN0R2V0T3RwU2VydmVyKHRva2VuKSB7XG4gICAgICAgIGxldCBwaG9uZU51bWJlciA9IHRoaXMucGFuZWxTbXNQbHVzLnVwZGF0ZUVkYlBob25lTnVtYmVyLnN0cmluZy50cmltKCk7XG4gICAgICAgIGxldCB1cmwgPSBDb25maWdzLkFwcC5BUEkgKyBcIj9jPTIwMTImbm49JXMmcG49JXMmY3B0PSVzJmF0PSVzXCI7XG4gICAgICAgIGlmIChwaG9uZU51bWJlclswXSA9PT0gXCIwXCIpIHtcbiAgICAgICAgICAgIHBob25lTnVtYmVyID0gcGhvbmVOdW1iZXIucmVwbGFjZSgnMCcsICcrODQnKTtcbiAgICAgICAgfVxuICAgICAgICB1cmwgPSBjYy5qcy5mb3JtYXRTdHIodXJsLCBDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBwaG9uZU51bWJlciwgdG9rZW4sIENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4yKTtcbiAgICAgICAgbGV0IGRhdGEgPSBPYmplY3QuY3JlYXRlKHt9KTtcbiAgICAgICAgZGF0YS5ubiA9IENvbmZpZ3MuTG9naW4uTmlja25hbWU7XG4gICAgICAgIGRhdGEucG4gPSBwaG9uZU51bWJlcjtcbiAgICAgICAgZGF0YS5jcHQgPSB0b2tlbjtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCFHbG9iYWwuTG9iYnlDb250cm9sbGVyLmlzVXNlU0RLKCkpIHsvL3RyZW4gd2ViIHZhbiBkYW5nIGTDuW5nIHThuqFtIHF1YSB0aOG6sW5nIDIwMTJcbiAgICAgICAgICAgIHRoaXMuaHR0cEdldCh1cmwsIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9lcnJvclwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcztcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSAhPSB7fSAmJiBkYXRhLmhhc093blByb3BlcnR5KFwic3VjY2Vzc1wiKSAmJiBkYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXNzaW9uSW5mbyA9IGRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWN0R2V0VmVyaWZ5Q29kZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X2Vycm9yXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHsvL3RyZW4gbmF0aXZlIHRoaSBi4buPIHF1YSAyMDEyICxMxrB1IHNlc3Npb25pZCBs4bqhaSBy4buTaSBzYXUga2hpIG5ow6JwIG90cCBjYWxsIGx1w7RuIDIwMTM7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICB0aGlzLnNlc3Npb25JbmZvID0gdG9rZW47XG4gICAgICAgICAgICB0aGlzLnNob3dTbXNQbHVzQ29udGludWUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhY3RHZXRWZXJpZnlDb2RlKGlzVmFsaWRPcHQgPSBudWxsKSB7Ly9zZW5kIG90cCBsw6puIHNlcnZlclxuICAgICAgICBpZiAoR2xvYmFsLkxvYmJ5Q29udHJvbGxlci5pc1VzZVNESygpKSB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZE9wdCA9PSBcIkZhaWxlZFwiKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfZXJyb3JcIikpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zZXNzaW9uSW5mbyA9PSBcIlwiIHx8IHRoaXMucGFuZWxTbXNQbHVzLmNvbnRpbnVlRWRiT1RQLnN0cmluZyA9PSBcIlwiKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9vdHBfaW52YWxpZFwiKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvZGVPVFAgPSB0aGlzLnBhbmVsU21zUGx1cy5jb250aW51ZUVkYk9UUC5zdHJpbmcudHJpbSgpO1xuICAgICAgICBsZXQgcGhvbmVOdW1iZXIgPSB0aGlzLnBhbmVsU21zUGx1cy51cGRhdGVFZGJQaG9uZU51bWJlci5zdHJpbmcudHJpbSgpO1xuICAgICAgICBpZiAoY29kZU9UUC5sZW5ndGggPCA2KSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9vdHBfaW52YWxpZFwiKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICBsZXQgdXJsID0gQ29uZmlncy5BcHAuQVBJICsgXCI/Yz0yMDEzJm5uPSVzJmF0PSVzJnBuPSVzXCI7XG4gICAgICAgIHVybCA9IGNjLmpzLmZvcm1hdFN0cih1cmwsIENvbmZpZ3MuTG9naW4uTmlja25hbWUsIENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4sIHBob25lTnVtYmVyKTtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5odHRwR2V0KHVybCwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9lcnJvclwiKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIGxldCBkYXRhUmVzID0gcmVzO1xuICAgICAgICAgICAgaWYgKGRhdGFSZXMuc3VjY2VzcyA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWN0U21zUGx1c0luZm8oKTtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF92ZXJpZnlfcGhvbmVfc3VjY2Vzc1wiKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhUmVzLm1lc3NhZ2UgIT0gbnVsbCAmJiBkYXRhUmVzLm1lc3NhZ2UgIT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKGRhdGFSZXMubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfZXJyb3JcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgIH1cbiAgICBhY3RDb25maXJtT3RwKCkgey8vRMO5bmcgdGjhurFuZyBmaXJlYmFzZSDEkeG7gyB4w6FjIHRo4buxYyBtw6Mgb3RwIGfhu61pIGzDqm4uSMOgbSBuw6B5IGTDuW5nIGNobyB3ZWIgLlRyb25nIG5hdGl2ZSDEkcOjIGPDsyAxIGjDoG0gY+G7p2Egc2RrIHLhu5NpLlxuICAgICAgICBpZiAodGhpcy5wYW5lbFNtc1BsdXMuY29udGludWVFZGJPVFAuc3RyaW5nID09IFwiXCIpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X290cF9pbnZhbGlkXCIpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY29kZU9UUCA9IHRoaXMucGFuZWxTbXNQbHVzLmNvbnRpbnVlRWRiT1RQLnN0cmluZy50cmltKCk7XG4gICAgICAgIGlmIChjb2RlT1RQLmxlbmd0aCA8IDYpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X290cF9pbnZhbGlkXCIpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB3aW5kb3cuY29uZmlybWF0aW9uUmVzdWx0LmNvbmZpcm0oY29kZU9UUCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAvLyBVc2VyIHNpZ25lZCBpbiBzdWNjZXNzZnVsbHkuXG4gICAgICAgICAgICAgLy9VdGlscy5Mb2coXCJWRVJJRlkgT1RQIFNVQ0NFU1M6XCIsIHJlc3VsdCk7XG4gICAgICAgICAgICBfdGhpcy5hY3RHZXRWZXJpZnlDb2RlKCk7XG4gICAgICAgICAgICBjb25zdCB1c2VyID0gcmVzdWx0LnVzZXI7XG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgIC8vVXRpbHMuTG9nKFwiVkVSSUZZIE9UUCBGQUlMRURcIik7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfZXJyb3JcIikpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2V0dXBSZWNhcHRjaGEoKSB7XG4gICAgICAgICAvL1V0aWxzLkxvZyhcIlNldHVwIENhcHRjaGFyXCIpO1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAod2luZG93LnJlY2FwdGNoYVZlcmlmaWVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZWNhcHRjaGFWZXJpZmllciA9IG5ldyBmaXJlYmFzZS5hdXRoLlJlY2FwdGNoYVZlcmlmaWVyKFxuICAgICAgICAgICAgICAgIFwicmVjYXB0Y2hhLWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJpbnZpc2libGVcIixcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgIC8vVXRpbHMuTG9nKFwic2V0dXBSZWNhcHRjaGE6Q0I9PVwiLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXNzaW9uSW5mbyA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHN1Ym1pdFBob25lTnVtYmVyQXV0aChwaG9uZU51bSkge1xuICAgICAgICB0aGlzLnNldHVwUmVjYXB0Y2hhKCk7XG4gICAgICAgIHZhciBhcHBWZXJpZmllciA9IHdpbmRvdy5yZWNhcHRjaGFWZXJpZmllcjtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhQaG9uZU51bWJlcihwaG9uZU51bSwgYXBwVmVyaWZpZXIpLnRoZW4oZnVuY3Rpb24gKGNvbmZpcm1hdGlvblJlc3VsdCkge1xuICAgICAgICAgICAgIC8vVXRpbHMuTG9nKFwiU01TICBTZW5kZWRcIik7XG4gICAgICAgICAgICB3aW5kb3cuY29uZmlybWF0aW9uUmVzdWx0ID0gY29uZmlybWF0aW9uUmVzdWx0O1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X3Ntc19vdHBfc2VuZGVkXCIpKTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9lcnJvclwiKSk7XG4gICAgICAgICAgICBfdGhpcy5wYW5lbFNtc1BsdXMuYnRuR2V0T1RQLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgLy9VdGlscy5Mb2coXCJTTVMgTm90IFNlbmRcIiwgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaHR0cEdldCh1cmw6IHN0cmluZywgb25GaW5pc2hlZDogKGVycjogYW55LCBqc29uOiBhbnkpID0+IHZvaWQpIHtcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZSA9IGV4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9uRmluaXNoZWQoZSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb25GaW5pc2hlZCh4aHIuc3RhdHVzLCBudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgfVxuICAgIHByaXZhdGUgb25UYWJDaGFuZ2VkKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFiQ29udGVudHMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnRhYkNvbnRlbnRzLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IGkgPT0gdGhpcy50YWJTZWxlY3RlZElkeDtcbiAgICAgICAgICAgIGlmIChpID09IHRoaXMudGFiU2VsZWN0ZWRJZHgpIHtcbiAgICAgICAgICAgICAgICAgLy9VdGlscy5Mb2coXCJvblRhYkNoYW5nZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnRhYnMudG9nZ2xlSXRlbXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHRoaXMudGFicy50b2dnbGVJdGVtc1tqXS5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLm5vZGUuY29sb3IgPSBqID09IHRoaXMudGFiU2VsZWN0ZWRJZHggPyBjYy5Db2xvci5ZRUxMT1cgOiBjYy5Db2xvci5XSElURTtcbiAgICAgICAgfVxuICAgICAgICAgLy9VdGlscy5Mb2coXCJ0YWIgc2VsZWN0ZWRpZHg9XCIgKyB0aGlzLnRhYlNlbGVjdGVkSWR4KTtcbiAgICAgICAgc3dpdGNoICh0aGlzLnRhYlNlbGVjdGVkSWR4KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5SZXFHZXRTZWN1cml0eUluZm8oKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5SZXFHZXRTZWN1cml0eUluZm8oKSk7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJTYWZlcy50YWJTZWxlY3RlZElkeCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJTYWZlcy50YWJzLnRvZ2dsZUl0ZW1zW3RoaXMudGFiU2FmZXMudGFiU2VsZWN0ZWRJZHhdLmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJTYWZlcy5vblRhYkNoYW5nZWQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==