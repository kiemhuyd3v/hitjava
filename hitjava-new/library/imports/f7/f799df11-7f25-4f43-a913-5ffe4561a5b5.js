"use strict";
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