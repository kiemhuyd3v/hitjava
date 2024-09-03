"use strict";
cc._RF.push(module, 'b56f77VWBdCWp6al7S5G6/a', 'Lobby.PopupThe');
// Lobby/LobbyScript/Payment/Lobby.PopupThe.ts

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
exports.TabNapThe = void 0;
var Dialog_1 = require("../Script/common/Dialog");
var Lobby_Cmd_1 = require("../Lobby.Cmd");
var Network_InPacket_1 = require("../Script/networks/Network.InPacket");
var MiniGameNetworkClient2_1 = require("../Script/networks/MiniGameNetworkClient2");
var Dropdown_1 = require("../Script/common/Dropdown");
var Configs_1 = require("../../../Loading/src/Configs");
var App_1 = require("../Script/common/App");
var Utils_1 = require("../Script/common/Utils");
var BroadcastReceiver_1 = require("../Script/common/BroadcastReceiver");
//import VersionConfig from "../Script/common/VersionConfig";
//import ShootFishNetworkClient from "../Script/networks/ShootFishNetworkClient";
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TabNapThe = /** @class */ (function () {
    function TabNapThe() {
        this.dropdownTelco = null;
        this.dropdownAmount = null;
        this.edbCode = null;
        this.edbSerial = null;
        this.itemFactorTemplate = null;
    }
    TabNapThe.prototype.start = function () {
        this.itemFactorTemplate.active = false;
        for (var i = 0; i < Configs_1.default.App.SERVER_CONFIG.listMenhGiaNapThe.length; i++) {
            var node = cc.instantiate(this.itemFactorTemplate);
            node.parent = this.itemFactorTemplate.parent;
            node.active = true;
            var menhGia = Configs_1.default.App.SERVER_CONFIG.listMenhGiaNapThe[i];
            var nhan = Math.ceil(menhGia * Configs_1.default.App.SERVER_CONFIG.ratioNapThe);
            node.getChildByName("menhgia").getComponent(cc.Label).string = Utils_1.default.formatNumber(menhGia);
            node.getChildByName("khuyenmai").getComponent(cc.Label).string = "0%";
            node.getChildByName("nhan").getComponent(cc.Label).string = Utils_1.default.formatNumber(nhan);
        }
    };
    TabNapThe.prototype.reset = function () {
        this.dropdownTelco.setOptions(["Chọn nhà mạng"].concat(Configs_1.default.App.SERVER_CONFIG.listTenNhaMang));
        var listMenhGia = ["Chọn mệnh giá"];
        for (var i = 0; i < Configs_1.default.App.SERVER_CONFIG.listMenhGiaNapThe.length; i++) {
            listMenhGia.push(Utils_1.default.formatNumber(Configs_1.default.App.SERVER_CONFIG.listMenhGiaNapThe[i]));
        }
        this.dropdownAmount.setOptions(listMenhGia);
        this.resetForm();
    };
    TabNapThe.prototype.resetForm = function () {
        this.dropdownTelco.setValue(0);
        this.dropdownAmount.setValue(0);
        this.edbCode.string = "";
        this.edbSerial.string = "";
    };
    TabNapThe.prototype.submit = function () {
        var ddTelcoValue = this.dropdownTelco.getValue();
        var ddAmountValue = this.dropdownAmount.getValue();
        var code = this.edbCode.string.trim();
        var serial = this.edbSerial.string.trim();
        if (ddTelcoValue == 0) {
            App_1.default.instance.alertDialog.showMsg("Vui lòng chọn nhà mạng.");
            return;
        }
        if (ddAmountValue == 0) {
            App_1.default.instance.alertDialog.showMsg("Vui lòng chọn mệnh giá.");
            return;
        }
        if (code == "" || parseInt(code) <= 0 || isNaN(parseInt(code))) {
            App_1.default.instance.alertDialog.showMsg("Mã thẻ không hợp lệ.");
            return;
        }
        if (serial == "" || parseInt(serial) <= 0 || isNaN(parseInt(serial))) {
            App_1.default.instance.alertDialog.showMsg("Mã serial không hợp lệ.");
            return;
        }
        var telcoId = Configs_1.default.App.SERVER_CONFIG.listIdNhaMang[ddTelcoValue - 1];
        var amount = Configs_1.default.App.SERVER_CONFIG.listMenhGiaNapThe[ddAmountValue - 1].toString();
        App_1.default.instance.showLoading(true);
        MiniGameNetworkClient2_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqDepositCard(telcoId, serial, code, amount));
    };
    __decorate([
        property(Dropdown_1.default)
    ], TabNapThe.prototype, "dropdownTelco", void 0);
    __decorate([
        property(Dropdown_1.default)
    ], TabNapThe.prototype, "dropdownAmount", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabNapThe.prototype, "edbCode", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabNapThe.prototype, "edbSerial", void 0);
    __decorate([
        property(cc.Node)
    ], TabNapThe.prototype, "itemFactorTemplate", void 0);
    TabNapThe = __decorate([
        ccclass("Lobby.PopupShop.TabNapThe")
    ], TabNapThe);
    return TabNapThe;
}());
exports.TabNapThe = TabNapThe;
var PopupShop = /** @class */ (function (_super) {
    __extends(PopupShop, _super);
    function PopupShop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tabs = null;
        _this.tabContents = null;
        _this.tabNapThe = null;
        _this.lblContainsBotOTPs = [];
        _this.tabSelectedIdx = 0;
        return _this;
    }
    PopupShop.prototype.start = function () {
        var _this = this;
        this.tabNapThe.reset();
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
        MiniGameNetworkClient2_1.default.getInstance().addListener(function (data) {
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
                    if (!_this.tabTransfer.receiverAgent) {
                        _this.tabTransfer.edbNickname.string = "";
                        App_1.default.instance.alertDialog.showMsg("Tài khoản " + _this.tabTransfer.edbNickname.string + " Không phải là tài khoản đại lý.");
                        break;
                    }
                    _this.tabTransfer.lblDaiLy.node.active = res.type == 1 || res.type == 2;
                    _this.tabTransfer.lblFee.string = res.fee + "%";
                    _this.tabTransfer.ratioTransfer = (100 - res.fee) / 100;
                    break;
                }
                case Lobby_Cmd_1.default.Code.TRANSFER_COIN: {
                    App_1.default.instance.showLoading(false);
                    var res = new Lobby_Cmd_1.default.ResTransferCoin(data);
                    // console.log(res);
                    switch (res.error) {
                        case 0:
                            _this.tabTransfer.panelContent.active = false;
                            _this.tabTransfer.panelContinue.active = true;
                            _this.tabTransfer.edbOTP.string = "";
                            App_1.default.instance.alertDialog.showMsg("Vui lòng nhấn \"Lấy OTP SMS\" hoặc lấy OTP từ Telegram và nhập mã OTP để tiếp tục!");
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
                    //  console.log(res.error);
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
                    //    console.log(res.error);
                    break;
                }
            }
        }, this);
        this.tabNapThe.start();
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
                this.tabNapThe.reset();
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                this.tabNapThe.reset();
                break;
            case 5:
                this.tabNapThe.reset();
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
            App_1.default.instance.showLoading(true);
            MiniGameNetworkClient2_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqCheckNicknameTransfer(nickname));
        }
    };
    PopupShop.prototype.actSubmitNapThe = function () {
        this.tabNapThe.submit();
    };
    PopupShop.prototype.actContinueTransfer = function () {
        if (!this.tabTransfer.receiverAgent) {
            App_1.default.instance.alertDialog.showMsg("Chỉ có thể chuyển tiền cho tài khoản đại lý");
            return;
        }
        this.tabTransfer.continue();
    };
    PopupShop.prototype.actGetOTP = function () {
        App_1.default.instance.showLoading(true);
        MiniGameNetworkClient2_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqGetOTP());
    };
    PopupShop.prototype.actSubmitTransfer = function () {
        var otp = this.tabTransfer.edbOTP.string.trim();
        if (otp.length == 0) {
            App_1.default.instance.alertDialog.showMsg("Mã xác thực không được bỏ trống.");
            return;
        }
        App_1.default.instance.showLoading(true);
        MiniGameNetworkClient2_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqSendOTP(otp, 0));
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
        property(TabNapThe)
    ], PopupShop.prototype, "tabNapThe", void 0);
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