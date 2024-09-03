"use strict";
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