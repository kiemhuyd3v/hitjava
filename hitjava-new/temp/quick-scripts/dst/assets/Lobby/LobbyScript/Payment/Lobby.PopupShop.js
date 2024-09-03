
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Payment/Lobby.PopupShop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f799d8RfyVPQ6kTX/5FYaW1', 'Lobby.PopupShop');
// Lobby/LobbyScript/Payment/Lobby.PopupShop.ts

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
exports.TabTransfer = void 0;
var Dialog_1 = require("../Script/common/Dialog");
var Lobby_Cmd_1 = require("../Lobby.Cmd");
var Network_InPacket_1 = require("../Script/networks/Network.InPacket");
var MiniGameNetworkClient_1 = require("../Script/networks/MiniGameNetworkClient");
//import Dropdown from "../Script/common/Dropdown";
var Configs_1 = require("../../../Loading/src/Configs");
var App_1 = require("../Script/common/App");
var Utils_1 = require("../Script/common/Utils");
//import Http from "../Script/common/Http";
var BroadcastReceiver_1 = require("../Script/common/BroadcastReceiver");
//import VersionConfig from "../Script/common/VersionConfig";
//import ShootFishNetworkClient from "../../scripts/networks/ShootFishNetworkClient";
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TabTransfer = /** @class */ (function () {
    function TabTransfer() {
        this.panelContent = null;
        this.panelContinue = null;
        this.lblBalance = null;
        this.lblFee = null;
        this.lblReceive = null;
        this.lblDaiLy = null;
        this.lblNote = null;
        this.edbNickname = null;
        this.edbReNickname = null;
        this.edbCoinTransfer = null;
        this.edbNote = null;
        this.edbOTP = null;
        this.ratioTransfer = Configs_1.default.App.SERVER_CONFIG.ratioTransfer;
        this.receiverAgent = false;
    }
    TabTransfer.prototype.start = function () {
        var _this = this;
        this.edbCoinTransfer.node.on("editing-did-ended", function () {
            var number = Utils_1.default.stringToInt(_this.edbCoinTransfer.string);
            _this.edbCoinTransfer.string = Utils_1.default.formatNumber(number);
            _this.lblReceive.string = Utils_1.default.formatNumber(Math.round(_this.ratioTransfer * number));
        });
        this.edbNickname.node.on("editing-did-ended", function () {
            var nickname = _this.edbNickname.string.trim();
            if (nickname != "") {
                App_1.default.instance.showLoading(true);
                MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqCheckNicknameTransfer(nickname));
            }
        });
    };
    TabTransfer.prototype.reset = function () {
        this.panelContent.active = true;
        //   this.panelContinue.active = false;
        this.lblDaiLy.node.active = false;
        this.lblFee.string = "0";
        this.lblBalance.string = Utils_1.default.formatNumber(Configs_1.default.Login.Coin);
        this.lblReceive.string = "0";
        this.edbNickname.string = "";
        this.edbReNickname.string = "";
        this.edbNote.string = "";
        this.edbCoinTransfer.string = "";
        this.lblNote.string = this.lblNote.string.replace("%s", Math.round((1 - this.ratioTransfer) * 100) + "%");
        this.lblFee.string = Math.round((1 - this.ratioTransfer) * 100) + "%";
    };
    TabTransfer.prototype.continue = function () {
        var nickname = this.edbNickname.string.trim();
        var reNickname = this.edbReNickname.string.trim();
        var coin = Utils_1.default.stringToInt(this.edbCoinTransfer.string);
        var note = this.edbNote.string.trim();
        if (nickname == "") {
            App_1.default.instance.alertDialog.showMsg("Nickname không được để trống.");
            return;
        }
        if (nickname != reNickname) {
            App_1.default.instance.alertDialog.showMsg("Hai nickname không giống nhau.");
            return;
        }
        if (note == "") {
            App_1.default.instance.alertDialog.showMsg("Lý do chuyển khoản không được để trống.");
            return;
        }
        if (coin < 10000) {
            App_1.default.instance.alertDialog.showMsg("Số tiền giao dịch tối thiểu bằng 200.000.");
            return;
        }
        if (coin > Configs_1.default.Login.Coin) {
            App_1.default.instance.alertDialog.showMsg("Số dư không đủ.");
            return;
        }
        App_1.default.instance.confirmDialog.show2("Bạn có chắc chắn muốn chuyển cho\nTài khoản: \"" + nickname + "\" (Không phải Đ.Lý)\nSố tiền: " + this.edbCoinTransfer.string + "\nLý do: " + note, function (isConfirm) {
            if (isConfirm) {
                App_1.default.instance.showLoading(true);
                MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqTransferCoin(nickname, coin, note));
            }
        });
    };
    __decorate([
        property(cc.Node)
    ], TabTransfer.prototype, "panelContent", void 0);
    __decorate([
        property(cc.Node)
    ], TabTransfer.prototype, "panelContinue", void 0);
    __decorate([
        property(cc.Label)
    ], TabTransfer.prototype, "lblBalance", void 0);
    __decorate([
        property(cc.Label)
    ], TabTransfer.prototype, "lblFee", void 0);
    __decorate([
        property(cc.Label)
    ], TabTransfer.prototype, "lblReceive", void 0);
    __decorate([
        property(cc.Label)
    ], TabTransfer.prototype, "lblDaiLy", void 0);
    __decorate([
        property(cc.Label)
    ], TabTransfer.prototype, "lblNote", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabTransfer.prototype, "edbNickname", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabTransfer.prototype, "edbReNickname", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabTransfer.prototype, "edbCoinTransfer", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabTransfer.prototype, "edbNote", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabTransfer.prototype, "edbOTP", void 0);
    TabTransfer = __decorate([
        ccclass("Lobby.PopupShop.TabTransfer")
    ], TabTransfer);
    return TabTransfer;
}());
exports.TabTransfer = TabTransfer;
var PopupShop = /** @class */ (function (_super) {
    __extends(PopupShop, _super);
    function PopupShop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tabs = null;
        _this.tabContents = null;
        _this.tabTransfer = null;
        _this.lblContainsBotOTPs = [];
        _this.tabSelectedIdx = 0;
        return _this;
    }
    PopupShop.prototype.start = function () {
        var _this = this;
        this.tabTransfer.reset();
        /* switch (VersionConfig.CPName) {
            case VersionConfig.CP_NAME_F69:
                this.tabs.toggleItems[2].node.active = false;//inactive momo tab
                this.tabs.toggleItems[5].node.active = true;//active bitcoin tab
                break;
            default:
                this.tabs.toggleItems[2].node.active = true;//active momo tab
                this.tabs.toggleItems[5].node.active = false;//inactive bitcoin tab
                break;
        } */
        for (var i = 0; i < this.lblContainsBotOTPs.length; i++) {
            var lbl = this.lblContainsBotOTPs[i];
            lbl.string = lbl.string.replace("$bot_otp", "@" + Configs_1.default.App.getLinkTelegram());
        }
        var _loop_1 = function (i) {
            this_1.tabs.toggleItems[i].node.on("toggle", function () {
                _this.tabSelectedIdx = i;
                _this.onTabChanged();
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.tabs.toggleItems.length; i++) {
            _loop_1(i);
        }
        MiniGameNetworkClient_1.default.getInstance().addListener(function (data) {
            var inpacket = new Network_InPacket_1.default(data);
            console.log(inpacket.getCmdId());
            switch (inpacket.getCmdId()) {
                case Lobby_Cmd_1.default.Code.DEPOSIT_CARD: {
                    App_1.default.instance.showLoading(false);
                    var res = new Lobby_Cmd_1.default.ResDepositCard(data);
                    switch (res.error) {
                        case 0:
                            App_1.default.instance.alertDialog.showMsg("Nạp thẻ thành công.");
                            Configs_1.default.Login.Coin = res.currentMoney;
                            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                            break;
                        case 30:
                            _this.tabNapThe.resetForm();
                            App_1.default.instance.alertDialog.showMsg("Hệ thống đã ghi nhận giao dịch, vui lòng chờ hệ thống xử lý.");
                            break;
                        case 31:
                            App_1.default.instance.alertDialog.showMsg("Thẻ đã được sử dụng.");
                            break;
                        case 32:
                            App_1.default.instance.alertDialog.showMsg("Thẻ đã bị khóa.");
                            break;
                        case 33:
                            App_1.default.instance.alertDialog.showMsg("Thẻ chưa được kích hoạt.");
                            break;
                        case 34:
                            App_1.default.instance.alertDialog.showMsg("Thẻ đã hết hạn sử dụng.");
                            break;
                        case 35:
                            App_1.default.instance.alertDialog.showMsg("Mã thẻ không đúng.");
                            break;
                        case 36:
                            App_1.default.instance.alertDialog.showMsg("Số serial không đúng.");
                            break;
                        case 8:
                            App_1.default.instance.alertDialog.showMsg("Tài khoản đã bị khóa nạp thẻ do nạp sai quá nhiều lần! Thời gian khóa nạp thẻ còn lại: " + _this.longToTime(res.timeFail));
                            break;
                        default:
                            App_1.default.instance.alertDialog.showMsg("Lỗi " + res.error + ". Không xác định.");
                            break;
                    }
                    break;
                }
                case Lobby_Cmd_1.default.Code.CHECK_NICKNAME_TRANSFER: {
                    App_1.default.instance.showLoading(false);
                    var res = new Lobby_Cmd_1.default.ResCheckNicknameTransfer(data);
                    // console.log(res);
                    if (res.error == 0) {
                        _this.tabTransfer.edbNickname.string = _this.tabTransfer.edbReNickname.string = "";
                        App_1.default.instance.alertDialog.showMsg("Tài khoản không tồn tại.");
                        break;
                    }
                    _this.tabTransfer.receiverAgent = res.type == 1 || res.type == 2;
                    if (!_this.tabTransfer.receiverAgent)
                        //    {
                        //        this.tabTransfer.edbNickname.string ="";
                        //        App.instance.alertDialog.showMsg("Tài khoản "+this.tabTransfer.edbNickname.string+" Không phải là tài khoản đại lý.");
                        //        break;
                        //    }
                        _this.tabTransfer.lblDaiLy.node.active = res.type == 1 || res.type == 2;
                    _this.tabTransfer.lblFee.string = res.fee + "%";
                    _this.tabTransfer.ratioTransfer = (100 - res.fee) / 100;
                    break;
                }
                case Lobby_Cmd_1.default.Code.TRANSFER_COIN: {
                    App_1.default.instance.showLoading(false);
                    var res = new Lobby_Cmd_1.default.ResTransferCoin(data);
                    console.log(res);
                    switch (res.error) {
                        case 0:
                            _this.tabTransfer.panelContent.active = true;
                            //   this.tabTransfer.panelContinue.active = true;
                            //    this.tabTransfer.edbOTP.string = "";
                            App_1.default.instance.alertDialog.showMsg("Chuyển khoản thành công");
                            break;
                        case 2:
                            App_1.default.instance.alertDialog.showMsg("Số tiền tối thiểu là 200.000.");
                            break;
                        case 3:
                            App_1.default.instance.alertDialog.showMsg("Chức năng chỉ dành cho những tài khoản đăng ký bảo mật SMS PLUS.");
                            break;
                        case 4:
                            App_1.default.instance.alertDialog.showMsg("Số dư không đủ.");
                            break;
                        case 5:
                            App_1.default.instance.alertDialog.showMsg("Tài khoản bị cấm chuyển tiền.");
                            break;
                        case 6:
                            App_1.default.instance.alertDialog.showMsg("Nickname nhận không tồn tại.");
                            break;
                        case 10:
                            App_1.default.instance.alertDialog.showMsg("Chức năng bảo mật sẽ tự động kích hoạt sau 24h kể từ thời điểm đăng ký thành công!");
                            break;
                        case 11:
                            App_1.default.instance.alertDialog.showMsg("Bạn chỉ được chuyển cho Đại lý tổng trong khoảng tiền quy định!");
                            break;
                        case 22:
                            App_1.default.instance.alertDialog.showMsg("Tài khoản chưa đủ điều kiện để chuyển tiền.");
                            break;
                        default:
                            App_1.default.instance.alertDialog.showMsg("Lỗi " + res.error + ". vui lòng thử lại sau.");
                            break;
                    }
                    break;
                }
                case Lobby_Cmd_1.default.Code.GET_OTP: {
                    if (!_this.node.active)
                        return;
                    App_1.default.instance.showLoading(false);
                    var res = new Lobby_Cmd_1.default.ResGetOTP(data);
                    // console.log(res);
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
                    var res = new Lobby_Cmd_1.default.ResSendOTP(data);
                    // console.log(res);
                    if (res.error != 0) {
                        App_1.default.instance.showLoading(false);
                        switch (res.error) {
                            case 1:
                            case 2:
                                App_1.default.instance.alertDialog.showMsg("Giao dịch thất bại!");
                                break;
                            case 3:
                                App_1.default.instance.alertDialog.showMsg("Mã xác thực không chính xác, vui lòng thử lại!");
                                break;
                            case 4:
                                App_1.default.instance.alertDialog.showMsg("Mã OTP đã hết hạn!");
                                break;
                            default:
                                App_1.default.instance.alertDialog.showMsg("Lỗi " + res.error + ". Không xác định.");
                                break;
                        }
                        return;
                    }
                    App_1.default.instance.showLoading(true);
                    break;
                }
                case Lobby_Cmd_1.default.Code.RESULT_TRANSFER_COIN: {
                    if (!_this.node.active)
                        return;
                    App_1.default.instance.showLoading(false);
                    var res = new Lobby_Cmd_1.default.ResResultTransferCoin(data);
                    // console.log(res);
                    switch (res.error) {
                        case 0:
                            Configs_1.default.Login.Coin = res.currentMoney;
                            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                            App_1.default.instance.alertDialog.showMsg("Giao dịch chuyển khoản thành công!");
                            break;
                        default:
                            App_1.default.instance.alertDialog.showMsg("Lỗi " + res.error + ". vui lòng thử lại sau.");
                            break;
                    }
                    _this.tabTransfer.reset();
                    break;
                }
                case Lobby_Cmd_1.default.Code.INSERT_GIFTCODE: {
                    App_1.default.instance.showLoading(false);
                    var res = new Lobby_Cmd_1.default.ResInsertGiftcode(data);
                    switch (res.error) {
                        case 0:
                            App_1.default.instance.alertDialog.showMsg("Mã thẻ không chính xác. Vui lòng kiểm tra lại!");
                            break;
                        case 1:
                            App_1.default.instance.alertDialog.showMsg("Mã thẻ đã được sử dụng.");
                            break;
                        case 3:
                            App_1.default.instance.alertDialog.showMsg("Để sử dụng tính năng này vui lòng đăng ký bảo mật.");
                            break;
                        case 4:
                        case 5:
                        case 6:
                            App_1.default.instance.alertDialog.showMsg("Mã thẻ đã nhập không hợp lệ.");
                            break;
                        case 2:
                            Configs_1.default.Login.Coin = res.currentMoneyVin;
                            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                            App_1.default.instance.alertDialog.showMsg("Nạp thẻ thành công.");
                            break;
                    }
                    break;
                }
                case Lobby_Cmd_1.default.Code.DEPOSIT_BANK: {
                    App_1.default.instance.showLoading(false);
                    var res = new Lobby_Cmd_1.default.ResDepositBank(data);
                    switch (res.error) {
                        case 0:
                            App_1.default.instance.alertDialog.showMsg("Hệ thống đã ghi nhận giao dịch của bạn, vui lòng chờ trong giây lát để chúng tôi xử lý");
                            break;
                        case 3:
                            App_1.default.instance.alertDialog.showMsg("Bạn đang có giao dịch chờ xử lý, vui lòng chờ đến khi giao dịch được hoàn tất");
                            break;
                        case 2:
                        case 1:
                            App_1.default.instance.alertDialog.showMsg("Dữ liệu lỗi, vui lòng thử lại!");
                            break;
                        default:
                            App_1.default.instance.alertDialog.showMsg("Dữ liệu lỗi, vui lòng thử lại!");
                    }
                    console.log(res.error);
                    break;
                }
                case Lobby_Cmd_1.default.Code.DEPOSIT_MOMO: {
                    App_1.default.instance.showLoading(false);
                    var res = new Lobby_Cmd_1.default.ResDepositMomo(data);
                    switch (res.error) {
                        case 0:
                            App_1.default.instance.alertDialog.showMsg("Hệ thống đã ghi nhận giao dịch của bạn, vui lòng chờ trong giây lát để chúng tôi xử lý");
                            break;
                        case 3:
                            App_1.default.instance.alertDialog.showMsg("Bạn đang có giao dịch chờ xử lý, vui lòng chờ đến khi giao dịch được hoàn tất");
                            break;
                        case 2:
                        case 1:
                            App_1.default.instance.alertDialog.showMsg("Dữ liệu lỗi, vui lòng thử lại!");
                            break;
                        default:
                            App_1.default.instance.alertDialog.showMsg("Dữ liệu lỗi, vui lòng thử lại!");
                    }
                    console.log(res.error);
                    break;
                }
            }
        }, this);
        this.tabTransfer.start();
    };
    PopupShop.prototype.onTabChanged = function () {
        for (var i = 0; i < this.tabContents.childrenCount; i++) {
            this.tabContents.children[i].active = i == this.tabSelectedIdx;
        }
        for (var j = 0; j < this.tabs.toggleItems.length; j++) {
            this.tabs.toggleItems[j].node.getComponentInChildren(cc.Label).node.color = j == this.tabSelectedIdx ? cc.Color.YELLOW : cc.Color.WHITE;
        }
        switch (this.tabSelectedIdx) {
            case 0:
                this.tabNapThe.reset();
                break;
            case 1:
                this.tabTransfer.reset();
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                this.tabCard.reset();
                break;
            case 5:
                this.tabBitCoin.start(this);
                break;
        }
    };
    PopupShop.prototype.longToTime = function (l) {
        return (l / 60) + " giờ " + (l % 60) + " phút";
    };
    PopupShop.prototype.show = function () {
        _super.prototype.show.call(this);
        this.tabSelectedIdx = 0;
        this.tabs.toggleItems[this.tabSelectedIdx].isChecked = true;
        this.onTabChanged();
    };
    PopupShop.prototype.showAndOpenTransfer = function (nickname) {
        if (nickname === void 0) { nickname = null; }
        _super.prototype.show.call(this);
        this.tabSelectedIdx = 1;
        this.tabs.toggleItems[this.tabSelectedIdx].isChecked = true;
        this.onTabChanged();
        if (nickname != null) {
            this.tabTransfer.edbNickname.string = this.tabTransfer.edbReNickname.string = nickname;
            //  App.instance.showLoading(true);
            //  MiniGameNetworkClient.getInstance().send(new cmd.ReqCheckNicknameTransfer(nickname));
        }
    };
    PopupShop.prototype.actContinueTransfer = function () {
        this.tabTransfer.continue();
    };
    PopupShop.prototype.actGetOTP = function () {
        App_1.default.instance.showLoading(true);
        MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqGetOTP());
    };
    PopupShop.prototype.actSubmitTransfer = function () {
        var otp = this.tabTransfer.edbOTP.string.trim();
        if (otp.length == 0) {
            App_1.default.instance.alertDialog.showMsg("Mã xác thực không được bỏ trống.");
            return;
        }
        App_1.default.instance.showLoading(true);
        MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqSendOTP(otp, 0));
    };
    PopupShop.prototype.actSubmitNapMomo = function () {
        this.tabMomo.submit();
    };
    PopupShop.prototype.actSubmitNapNganHang = function () {
        this.tabBank.submit();
    };
    PopupShop.prototype.actSubmitCard = function () {
        this.tabCard.submit();
    };
    __decorate([
        property(cc.ToggleContainer)
    ], PopupShop.prototype, "tabs", void 0);
    __decorate([
        property(cc.Node)
    ], PopupShop.prototype, "tabContents", void 0);
    __decorate([
        property(TabTransfer)
    ], PopupShop.prototype, "tabTransfer", void 0);
    __decorate([
        property([cc.Label])
    ], PopupShop.prototype, "lblContainsBotOTPs", void 0);
    PopupShop = __decorate([
        ccclass
    ], PopupShop);
    return PopupShop;
}(Dialog_1.default));
exports.default = PopupShop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxQYXltZW50XFxMb2JieS5Qb3B1cFNob3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUE2QztBQUM3QywwQ0FBK0I7QUFDL0Isd0VBQTJEO0FBQzNELGtGQUE2RTtBQUM3RSxtREFBbUQ7QUFDbkQsd0RBQW1EO0FBQ25ELDRDQUF1QztBQUN2QyxnREFBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLHdFQUFtRTtBQUNuRSw2REFBNkQ7QUFDN0QscUZBQXFGO0FBRS9FLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBSTVDO0lBQUE7UUFFSSxpQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixrQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixlQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLFdBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsZUFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixhQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLFlBQU8sR0FBYSxJQUFJLENBQUM7UUFFekIsZ0JBQVcsR0FBZSxJQUFJLENBQUM7UUFFL0Isa0JBQWEsR0FBZSxJQUFJLENBQUM7UUFFakMsb0JBQWUsR0FBZSxJQUFJLENBQUM7UUFFbkMsWUFBTyxHQUFlLElBQUksQ0FBQztRQUczQixXQUFNLEdBQWUsSUFBSSxDQUFDO1FBRTFCLGtCQUFhLEdBQUcsaUJBQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUV4RCxrQkFBYSxHQUFXLEtBQUssQ0FBQztJQWlFbEMsQ0FBQztJQS9ERywyQkFBSyxHQUFMO1FBQUEsaUJBYUM7UUFaRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUU7WUFDOUMsSUFBSSxNQUFNLEdBQUcsZUFB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MUIsQ0FBQztJQTVXRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDOzJDQUNHO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ1U7SUFJNUI7UUFEQyxRQUFRLENBQUMsV0FBVyxDQUFDO2tEQUNVO0lBS2hDO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO3lEQUNlO0lBZG5CLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FnWDdCO0lBQUQsZ0JBQUM7Q0FoWEQsQUFnWEMsQ0FoWHNDLGdCQUFNLEdBZ1g1QztrQkFoWG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlhbG9nIGZyb20gXCIuLi9TY3JpcHQvY29tbW9uL0RpYWxvZ1wiO1xyXG5pbXBvcnQgY21kIGZyb20gXCIuLi9Mb2JieS5DbWRcIjtcclxuaW1wb3J0IEluUGFja2V0IGZyb20gXCIuLi9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5JblBhY2tldFwiO1xyXG5pbXBvcnQgTWluaUdhbWVOZXR3b3JrQ2xpZW50IGZyb20gXCIuLi9TY3JpcHQvbmV0d29ya3MvTWluaUdhbWVOZXR3b3JrQ2xpZW50XCI7XHJcbi8vaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuLi9TY3JpcHQvY29tbW9uL0Ryb3Bkb3duXCI7XHJcbmltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIi4uL1NjcmlwdC9jb21tb24vQXBwXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xyXG4vL2ltcG9ydCBIdHRwIGZyb20gXCIuLi9TY3JpcHQvY29tbW9uL0h0dHBcIjtcclxuaW1wb3J0IEJyb2FkY2FzdFJlY2VpdmVyIGZyb20gXCIuLi9TY3JpcHQvY29tbW9uL0Jyb2FkY2FzdFJlY2VpdmVyXCI7XHJcbi8vaW1wb3J0IFZlcnNpb25Db25maWcgZnJvbSBcIi4uL1NjcmlwdC9jb21tb24vVmVyc2lvbkNvbmZpZ1wiO1xyXG4vL2ltcG9ydCBTaG9vdEZpc2hOZXR3b3JrQ2xpZW50IGZyb20gXCIuLi8uLi9zY3JpcHRzL25ldHdvcmtzL1Nob290RmlzaE5ldHdvcmtDbGllbnRcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5cclxuQGNjY2xhc3MoXCJMb2JieS5Qb3B1cFNob3AuVGFiVHJhbnNmZXJcIilcclxuZXhwb3J0IGNsYXNzIFRhYlRyYW5zZmVyIHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGFuZWxDb250ZW50OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGFuZWxDb250aW51ZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJsQmFsYW5jZTogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJsRmVlOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYmxSZWNlaXZlOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYmxEYWlMeTogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJsTm90ZTogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXHJcbiAgICBlZGJOaWNrbmFtZTogY2MuRWRpdEJveCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcclxuICAgIGVkYlJlTmlja25hbWU6IGNjLkVkaXRCb3ggPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXHJcbiAgICBlZGJDb2luVHJhbnNmZXI6IGNjLkVkaXRCb3ggPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXHJcbiAgICBlZGJOb3RlOiBjYy5FZGl0Qm94ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcclxuICAgIGVkYk9UUDogY2MuRWRpdEJveCA9IG51bGw7XHJcblxyXG4gICAgcmF0aW9UcmFuc2ZlciA9IENvbmZpZ3MuQXBwLlNFUlZFUl9DT05GSUcucmF0aW9UcmFuc2ZlcjtcclxuICAgIFxyXG4gICAgcmVjZWl2ZXJBZ2VudDogYm9vbGVhbj0gZmFsc2U7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5lZGJDb2luVHJhbnNmZXIubm9kZS5vbihcImVkaXRpbmctZGlkLWVuZGVkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IG51bWJlciA9IFV0aWxzLnN0cmluZ1RvSW50KHRoaXMuZWRiQ29pblRyYW5zZmVyLnN0cmluZyk7XHJcbiAgICAgICAgICAgIHRoaXMuZWRiQ29pblRyYW5zZmVyLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihudW1iZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmxibFJlY2VpdmUuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKE1hdGgucm91bmQodGhpcy5yYXRpb1RyYW5zZmVyICogbnVtYmVyKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lZGJOaWNrbmFtZS5ub2RlLm9uKFwiZWRpdGluZy1kaWQtZW5kZWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbmlja25hbWUgPSB0aGlzLmVkYk5pY2tuYW1lLnN0cmluZy50cmltKCk7XHJcbiAgICAgICAgICAgIGlmIChuaWNrbmFtZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlJlcUNoZWNrTmlja25hbWVUcmFuc2ZlcihuaWNrbmFtZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbENvbnRlbnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAvLyAgIHRoaXMucGFuZWxDb250aW51ZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxibERhaUx5Lm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sYmxGZWUuc3RyaW5nID0gXCIwXCI7XHJcbiAgICAgICAgdGhpcy5sYmxCYWxhbmNlLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihDb25maWdzLkxvZ2luLkNvaW4pO1xyXG4gICAgICAgIHRoaXMubGJsUmVjZWl2ZS5zdHJpbmcgPSBcIjBcIjtcclxuICAgICAgICB0aGlzLmVkYk5pY2tuYW1lLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5lZGJSZU5pY2tuYW1lLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5lZGJOb3RlLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5lZGJDb2luVHJhbnNmZXIuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICB0aGlzLmxibE5vdGUuc3RyaW5nID0gdGhpcy5sYmxOb3RlLnN0cmluZy5yZXBsYWNlKFwiJXNcIiwgTWF0aC5yb3VuZCgoMSAtIHRoaXMucmF0aW9UcmFuc2ZlcikgKiAxMDApICsgXCIlXCIpO1xyXG4gICAgICAgIHRoaXMubGJsRmVlLnN0cmluZyA9IE1hdGgucm91bmQoKDEgLSB0aGlzLnJhdGlvVHJhbnNmZXIpICogMTAwKSArIFwiJVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRpbnVlKCkge1xyXG4gICAgICAgIGxldCBuaWNrbmFtZSA9IHRoaXMuZWRiTmlja25hbWUuc3RyaW5nLnRyaW0oKTtcclxuICAgICAgICBsZXQgcmVOaWNrbmFtZSA9IHRoaXMuZWRiUmVOaWNrbmFtZS5zdHJpbmcudHJpbSgpO1xyXG4gICAgICAgIGxldCBjb2luID0gVXRpbHMuc3RyaW5nVG9JbnQodGhpcy5lZGJDb2luVHJhbnNmZXIuc3RyaW5nKTtcclxuICAgICAgICBsZXQgbm90ZSA9IHRoaXMuZWRiTm90ZS5zdHJpbmcudHJpbSgpO1xyXG4gICAgICAgIGlmIChuaWNrbmFtZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiTmlja25hbWUga2jDtG5nIMSRxrDhu6NjIMSR4buDIHRy4buRbmcuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuaWNrbmFtZSAhPSByZU5pY2tuYW1lKSB7XHJcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiSGFpIG5pY2tuYW1lIGtow7RuZyBnaeG7kW5nIG5oYXUuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChub3RlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJMw70gZG8gY2h1eeG7g24ga2hv4bqjbiBraMO0bmcgxJHGsOG7o2MgxJHhu4MgdHLhu5FuZy5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvaW4gPCAxMDAwMCkge1xyXG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIlPhu5EgdGnhu4FuIGdpYW8gZOG7i2NoIHThu5FpIHRoaeG7g3UgYuG6sW5nIDIwMC4wMDAuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb2luID4gQ29uZmlncy5Mb2dpbi5Db2luKSB7XHJcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiU+G7kSBkxrAga2jDtG5nIMSR4bunLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQXBwLmluc3RhbmNlLmNvbmZpcm1EaWFsb2cuc2hvdzIoXCJC4bqhbiBjw7MgY2jhuq9jIGNo4bqvbiBtdeG7kW4gY2h1eeG7g24gY2hvXFxuVMOgaSBraG/huqNuOiBcXFwiXCIgKyBuaWNrbmFtZSArIFwiXFxcIiAoS2jDtG5nIHBo4bqjaSDEkC5Mw70pXFxuU+G7kSB0aeG7gW46IFwiICsgdGhpcy5lZGJDb2luVHJhbnNmZXIuc3RyaW5nICsgXCJcXG5Mw70gZG86IFwiICsgbm90ZSwgKGlzQ29uZmlybSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNDb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuUmVxVHJhbnNmZXJDb2luKG5pY2tuYW1lLCBjb2luLCBub3RlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwU2hvcCBleHRlbmRzIERpYWxvZyB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZUNvbnRhaW5lcilcclxuICAgIHRhYnM6IGNjLlRvZ2dsZUNvbnRhaW5lciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRhYkNvbnRlbnRzOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eShUYWJUcmFuc2ZlcilcclxuICAgIHRhYlRyYW5zZmVyOiBUYWJUcmFuc2ZlciA9IG51bGw7XHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuTGFiZWxdKVxyXG4gICAgbGJsQ29udGFpbnNCb3RPVFBzOiBjYy5MYWJlbFtdID0gW107XHJcblxyXG5cclxuICAgIFxyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSB0YWJTZWxlY3RlZElkeCA9IDA7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblx0XHR0aGlzLnRhYlRyYW5zZmVyLnJlc2V0KCk7XHJcbiAgICAgICAgLyogc3dpdGNoIChWZXJzaW9uQ29uZmlnLkNQTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFZlcnNpb25Db25maWcuQ1BfTkFNRV9GNjk6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhYnMudG9nZ2xlSXRlbXNbMl0ubm9kZS5hY3RpdmUgPSBmYWxzZTsvL2luYWN0aXZlIG1vbW8gdGFiXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhYnMudG9nZ2xlSXRlbXNbNV0ubm9kZS5hY3RpdmUgPSB0cnVlOy8vYWN0aXZlIGJpdGNvaW4gdGFiXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMudGFicy50b2dnbGVJdGVtc1syXS5ub2RlLmFjdGl2ZSA9IHRydWU7Ly9hY3RpdmUgbW9tbyB0YWJcclxuICAgICAgICAgICAgICAgIHRoaXMudGFicy50b2dnbGVJdGVtc1s1XS5ub2RlLmFjdGl2ZSA9IGZhbHNlOy8vaW5hY3RpdmUgYml0Y29pbiB0YWJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH0gKi9cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxibENvbnRhaW5zQm90T1RQcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbGJsID0gdGhpcy5sYmxDb250YWluc0JvdE9UUHNbaV07XHJcbiAgICAgICAgICAgIGxibC5zdHJpbmcgPSBsYmwuc3RyaW5nLnJlcGxhY2UoXCIkYm90X290cFwiLCBcIkBcIiArIENvbmZpZ3MuQXBwLmdldExpbmtUZWxlZ3JhbSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YWJzLnRvZ2dsZUl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFicy50b2dnbGVJdGVtc1tpXS5ub2RlLm9uKFwidG9nZ2xlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJZHggPSBpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblRhYkNoYW5nZWQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5hZGRMaXN0ZW5lcigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaW5wYWNrZXQgPSBuZXcgSW5QYWNrZXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlucGFja2V0LmdldENtZElkKCkpO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGlucGFja2V0LmdldENtZElkKCkpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuREVQT1NJVF9DQVJEOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZXNEZXBvc2l0Q2FyZChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlcy5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIk7huqFwIHRo4bq7IHRow6BuaCBjw7RuZy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW4gPSByZXMuY3VycmVudE1vbmV5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDMwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJOYXBUaGUucmVzZXRGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIkjhu4cgdGjhu5FuZyDEkcOjIGdoaSBuaOG6rW4gZ2lhbyBk4buLY2gsIHZ1aSBsw7JuZyBjaOG7nSBo4buHIHRo4buRbmcgeOG7rSBsw70uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIlRo4bq7IMSRw6MgxJHGsOG7o2Mgc+G7rSBk4bulbmcuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIlRo4bq7IMSRw6MgYuG7iyBraMOzYS5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiVGjhursgY2jGsGEgxJHGsOG7o2Mga8OtY2ggaG/huqF0LlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJUaOG6uyDEkcOjIGjhur90IGjhuqFuIHPhu60gZOG7pW5nLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJNw6MgdGjhursga2jDtG5nIMSRw7puZy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiU+G7kSBzZXJpYWwga2jDtG5nIMSRw7puZy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJUw6BpIGtob+G6o24gxJHDoyBi4buLIGtow7NhIG7huqFwIHRo4bq7IGRvIG7huqFwIHNhaSBxdcOhIG5oaeG7gXUgbOG6p24hIFRo4budaSBnaWFuIGtow7NhIG7huqFwIHRo4bq7IGPDsm4gbOG6oWk6IFwiICsgdGhpcy5sb25nVG9UaW1lKHJlcy50aW1lRmFpbCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIkzhu5dpIFwiICsgcmVzLmVycm9yICsgXCIuIEtow7RuZyB4w6FjIMSR4buLbmguXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5DSEVDS19OSUNLTkFNRV9UUkFOU0ZFUjoge1xyXG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVzQ2hlY2tOaWNrbmFtZVRyYW5zZmVyKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5lcnJvciA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFiVHJhbnNmZXIuZWRiTmlja25hbWUuc3RyaW5nID0gdGhpcy50YWJUcmFuc2Zlci5lZGJSZU5pY2tuYW1lLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiVMOgaSBraG/huqNuIGtow7RuZyB04buTbiB04bqhaS5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYlRyYW5zZmVyLnJlY2VpdmVyQWdlbnQ9cmVzLnR5cGUgPT0gMSB8fCByZXMudHlwZSA9PSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLnRhYlRyYW5zZmVyLnJlY2VpdmVyQWdlbnQpXHJcbiAgICAgICAgICAgICAgICAvLyAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgdGhpcy50YWJUcmFuc2Zlci5lZGJOaWNrbmFtZS5zdHJpbmcgPVwiXCI7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJUw6BpIGtob+G6o24gXCIrdGhpcy50YWJUcmFuc2Zlci5lZGJOaWNrbmFtZS5zdHJpbmcrXCIgS2jDtG5nIHBo4bqjaSBsw6AgdMOgaSBraG/huqNuIMSR4bqhaSBsw70uXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFiVHJhbnNmZXIubGJsRGFpTHkubm9kZS5hY3RpdmUgPSByZXMudHlwZSA9PSAxIHx8IHJlcy50eXBlID09IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJUcmFuc2Zlci5sYmxGZWUuc3RyaW5nID0gcmVzLmZlZSArIFwiJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFiVHJhbnNmZXIucmF0aW9UcmFuc2ZlciA9ICgxMDAgLSByZXMuZmVlKSAvIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuVFJBTlNGRVJfQ09JTjoge1xyXG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVzVHJhbnNmZXJDb2luKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFiVHJhbnNmZXIucGFuZWxDb250ZW50LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHRoaXMudGFiVHJhbnNmZXIucGFuZWxDb250aW51ZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICB0aGlzLnRhYlRyYW5zZmVyLmVkYk9UUC5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJDaHV54buDbiBraG/huqNuIHRow6BuaCBjw7RuZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIlPhu5EgdGnhu4FuIHThu5FpIHRoaeG7g3UgbMOgIDIwMC4wMDAuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiQ2jhu6ljIG7Eg25nIGNo4buJIGTDoG5oIGNobyBuaOG7r25nIHTDoGkga2hv4bqjbiDEkcSDbmcga8O9IGLhuqNvIG3huq10IFNNUyBQTFVTLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIlPhu5EgZMawIGtow7RuZyDEkeG7py5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJUw6BpIGtob+G6o24gYuG7iyBj4bqlbSBjaHV54buDbiB0aeG7gW4uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiTmlja25hbWUgbmjhuq1uIGtow7RuZyB04buTbiB04bqhaS5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiQ2jhu6ljIG7Eg25nIGLhuqNvIG3huq10IHPhur0gdOG7sSDEkeG7mW5nIGvDrWNoIGhv4bqhdCBzYXUgMjRoIGvhu4MgdOG7qyB0aOG7nWkgxJFp4buDbSDEkcSDbmcga8O9IHRow6BuaCBjw7RuZyFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiQuG6oW4gY2jhu4kgxJHGsOG7o2MgY2h1eeG7g24gY2hvIMSQ4bqhaSBsw70gdOG7lW5nIHRyb25nIGtob+G6o25nIHRp4buBbiBxdXkgxJHhu4tuaCFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiVMOgaSBraG/huqNuIGNoxrBhIMSR4bunIMSRaeG7gXUga2nhu4duIMSR4buDIGNodXnhu4NuIHRp4buBbi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiTOG7l2kgXCIgKyByZXMuZXJyb3IgKyBcIi4gdnVpIGzDsm5nIHRo4butIGzhuqFpIHNhdS5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkdFVF9PVFA6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlc0dldE9UUChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZXJyb3IgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIk3DoyBPVFAgxJHDoyDEkcaw4bujYyBn4butaSDEkWkhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmVycm9yID09IDMwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiTeG7l2kgdGhhbyB0w6FjIGzhuqV5IFNNUyBPVFAgcGjhuqNpIGPDoWNoIG5oYXUgw610IG5o4bqldCA1IHBow7p0IVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIlRoYW8gdMOhYyBraMO0bmcgdGjDoG5oIGPDtG5nIHZ1aSBsw7JuZyB0aOG7rSBs4bqhaSBzYXUhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuU0VORF9PVFA6IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZXNTZW5kT1RQKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5lcnJvciAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJHaWFvIGThu4tjaCB0aOG6pXQgYuG6oWkhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiTcOjIHjDoWMgdGjhu7FjIGtow7RuZyBjaMOtbmggeMOhYywgdnVpIGzDsm5nIHRo4butIGzhuqFpIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIk3DoyBPVFAgxJHDoyBo4bq/dCBo4bqhbiFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiTOG7l2kgXCIgKyByZXMuZXJyb3IgKyBcIi4gS2jDtG5nIHjDoWMgxJHhu4tuaC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlJFU1VMVF9UUkFOU0ZFUl9DT0lOOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLm5vZGUuYWN0aXZlKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZXNSZXN1bHRUcmFuc2ZlckNvaW4oZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlcy5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW4gPSByZXMuY3VycmVudE1vbmV5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiR2lhbyBk4buLY2ggY2h1eeG7g24ga2hv4bqjbiB0aMOgbmggY8O0bmchXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIkzhu5dpIFwiICsgcmVzLmVycm9yICsgXCIuIHZ1aSBsw7JuZyB0aOG7rSBs4bqhaSBzYXUuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFiVHJhbnNmZXIucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuSU5TRVJUX0dJRlRDT0RFOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZXNJbnNlcnRHaWZ0Y29kZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlcy5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIk3DoyB0aOG6uyBraMO0bmcgY2jDrW5oIHjDoWMuIFZ1aSBsw7JuZyBraeG7g20gdHJhIGzhuqFpIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIk3DoyB0aOG6uyDEkcOjIMSRxrDhu6NjIHPhu60gZOG7pW5nLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIsSQ4buDIHPhu60gZOG7pW5nIHTDrW5oIG7Eg25nIG7DoHkgdnVpIGzDsm5nIMSRxINuZyBrw70gYuG6o28gbeG6rXQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIk3DoyB0aOG6uyDEkcOjIG5o4bqtcCBraMO0bmcgaOG7o3AgbOG7hy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luID0gcmVzLmN1cnJlbnRNb25leVZpbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIk7huqFwIHRo4bq7IHRow6BuaCBjw7RuZy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkRFUE9TSVRfQkFOSzoge1xyXG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVzRGVwb3NpdEJhbmsoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKHJlcy5lcnJvcil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiSOG7hyB0aOG7kW5nIMSRw6MgZ2hpIG5o4bqtbiBnaWFvIGThu4tjaCBj4bunYSBi4bqhbiwgdnVpIGzDsm5nIGNo4budIHRyb25nIGdpw6J5IGzDoXQgxJHhu4MgY2jDum5nIHTDtGkgeOG7rSBsw71cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJC4bqhbiDEkWFuZyBjw7MgZ2lhbyBk4buLY2ggY2jhu50geOG7rSBsw70sIHZ1aSBsw7JuZyBjaOG7nSDEkeG6v24ga2hpIGdpYW8gZOG7i2NoIMSRxrDhu6NjIGhvw6BuIHThuqV0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJE4buvIGxp4buHdSBs4buXaSwgdnVpIGzDsm5nIHRo4butIGzhuqFpIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJE4buvIGxp4buHdSBs4buXaSwgdnVpIGzDsm5nIHRo4butIGzhuqFpIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuREVQT1NJVF9NT01POiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZXNEZXBvc2l0TW9tbyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2gocmVzLmVycm9yKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJI4buHIHRo4buRbmcgxJHDoyBnaGkgbmjhuq1uIGdpYW8gZOG7i2NoIGPhu6dhIGLhuqFuLCB2dWkgbMOybmcgY2jhu50gdHJvbmcgZ2nDonkgbMOhdCDEkeG7gyBjaMO6bmcgdMO0aSB44butIGzDvVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIkLhuqFuIMSRYW5nIGPDsyBnaWFvIGThu4tjaCBjaOG7nSB44butIGzDvSwgdnVpIGzDsm5nIGNo4budIMSR4bq/biBraGkgZ2lhbyBk4buLY2ggxJHGsOG7o2MgaG/DoG4gdOG6pXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIkThu68gbGnhu4d1IGzhu5dpLCB2dWkgbMOybmcgdGjhu60gbOG6oWkhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIkThu68gbGnhu4d1IGzhu5dpLCB2dWkgbMOybmcgdGjhu60gbOG6oWkhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudGFiVHJhbnNmZXIuc3RhcnQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uVGFiQ2hhbmdlZCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFiQ29udGVudHMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFiQ29udGVudHMuY2hpbGRyZW5baV0uYWN0aXZlID0gaSA9PSB0aGlzLnRhYlNlbGVjdGVkSWR4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMudGFicy50b2dnbGVJdGVtcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICB0aGlzLnRhYnMudG9nZ2xlSXRlbXNbal0ubm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5ub2RlLmNvbG9yID0gaiA9PSB0aGlzLnRhYlNlbGVjdGVkSWR4ID8gY2MuQ29sb3IuWUVMTE9XIDogY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAodGhpcy50YWJTZWxlY3RlZElkeCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhYk5hcFRoZS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMudGFiVHJhbnNmZXIucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHRoaXMudGFiQ2FyZC5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIHRoaXMudGFiQml0Q29pbi5zdGFydCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvbmdUb1RpbWUobDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gKGwgLyA2MCkgKyBcIiBnaeG7nSBcIiArIChsICUgNjApICsgXCIgcGjDunRcIjtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KCkge1xyXG4gICAgICAgIHN1cGVyLnNob3coKTtcclxuICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSWR4ID0gMDtcclxuICAgICAgICB0aGlzLnRhYnMudG9nZ2xlSXRlbXNbdGhpcy50YWJTZWxlY3RlZElkeF0uaXNDaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm9uVGFiQ2hhbmdlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dBbmRPcGVuVHJhbnNmZXIobmlja25hbWU6IHN0cmluZyA9IG51bGwpIHtcclxuICAgICAgICBzdXBlci5zaG93KCk7XHJcbiAgICAgICAgdGhpcy50YWJTZWxlY3RlZElkeCA9IDE7XHJcbiAgICAgICAgdGhpcy50YWJzLnRvZ2dsZUl0ZW1zW3RoaXMudGFiU2VsZWN0ZWRJZHhdLmlzQ2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vblRhYkNoYW5nZWQoKTtcclxuICAgICAgICBpZiAobmlja25hbWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYlRyYW5zZmVyLmVkYk5pY2tuYW1lLnN0cmluZyA9IHRoaXMudGFiVHJhbnNmZXIuZWRiUmVOaWNrbmFtZS5zdHJpbmcgPSBuaWNrbmFtZTtcclxuICAgICAgICAgIC8vICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAvLyAgTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlJlcUNoZWNrTmlja25hbWVUcmFuc2ZlcihuaWNrbmFtZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBhY3RDb250aW51ZVRyYW5zZmVyKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudGFiVHJhbnNmZXIuY29udGludWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RHZXRPVFAoKSB7XHJcbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5SZXFHZXRPVFAoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0U3VibWl0VHJhbnNmZXIoKSB7XHJcbiAgICAgICAgbGV0IG90cCA9IHRoaXMudGFiVHJhbnNmZXIuZWRiT1RQLnN0cmluZy50cmltKCk7XHJcbiAgICAgICAgaWYgKG90cC5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIk3DoyB4w6FjIHRo4buxYyBraMO0bmcgxJHGsOG7o2MgYuG7jyB0cuG7kW5nLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlJlcVNlbmRPVFAob3RwLCAwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0U3VibWl0TmFwTW9tbygpIHtcclxuICAgICAgICB0aGlzLnRhYk1vbW8uc3VibWl0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0U3VibWl0TmFwTmdhbkhhbmcoKSB7XHJcbiAgICAgICAgdGhpcy50YWJCYW5rLnN1Ym1pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdFN1Ym1pdENhcmQoKSB7XHJcbiAgICAgICAgdGhpcy50YWJDYXJkLnN1Ym1pdCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==