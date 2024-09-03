
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Payment/Lobby.PopupThe.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxQYXltZW50XFxMb2JieS5Qb3B1cFRoZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQTZDO0FBQzdDLDBDQUErQjtBQUMvQix3RUFBMkQ7QUFDM0Qsb0ZBQStFO0FBQy9FLHNEQUFpRDtBQUNqRCx3REFBbUQ7QUFDbkQsNENBQXVDO0FBQ3ZDLGdEQUEyQztBQUUzQyx3RUFBbUU7QUFDbkUsNkRBQTZEO0FBQzdELGlGQUFpRjtBQUMzRSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFBO1FBRUksa0JBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0IsbUJBQWMsR0FBYSxJQUFJLENBQUM7UUFFaEMsWUFBTyxHQUFlLElBQUksQ0FBQztRQUUzQixjQUFTLEdBQWUsSUFBSSxDQUFDO1FBRTdCLHVCQUFrQixHQUFZLElBQUksQ0FBQztJQXlEdkMsQ0FBQztJQXZERyx5QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGlCQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekUsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7WUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFFbkIsSUFBSSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFD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ZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpYWxvZyBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9EaWFsb2dcIjtcclxuaW1wb3J0IGNtZCBmcm9tIFwiLi4vTG9iYnkuQ21kXCI7XHJcbmltcG9ydCBJblBhY2tldCBmcm9tIFwiLi4vU2NyaXB0L25ldHdvcmtzL05ldHdvcmsuSW5QYWNrZXRcIjtcclxuaW1wb3J0IE1pbmlHYW1lTmV0d29ya0NsaWVudDIgZnJvbSBcIi4uL1NjcmlwdC9uZXR3b3Jrcy9NaW5pR2FtZU5ldHdvcmtDbGllbnQyXCI7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9Ecm9wZG93blwiO1xyXG5pbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCIuLi9TY3JpcHQvY29tbW9uL0FwcFwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL1NjcmlwdC9jb21tb24vVXRpbHNcIjtcclxuaW1wb3J0IEh0dHAgZnJvbSBcIi4uL1NjcmlwdC9jb21tb24vSHR0cFwiO1xyXG5pbXBvcnQgQnJvYWRjYXN0UmVjZWl2ZXIgZnJvbSBcIi4uL1NjcmlwdC9jb21tb24vQnJvYWRjYXN0UmVjZWl2ZXJcIjtcclxuLy9pbXBvcnQgVmVyc2lvbkNvbmZpZyBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9WZXJzaW9uQ29uZmlnXCI7XHJcbi8vaW1wb3J0IFNob290RmlzaE5ldHdvcmtDbGllbnQgZnJvbSBcIi4uL1NjcmlwdC9uZXR3b3Jrcy9TaG9vdEZpc2hOZXR3b3JrQ2xpZW50XCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzKFwiTG9iYnkuUG9wdXBTaG9wLlRhYk5hcFRoZVwiKVxyXG5leHBvcnQgY2xhc3MgVGFiTmFwVGhlIHtcclxuICAgIEBwcm9wZXJ0eShEcm9wZG93bilcclxuICAgIGRyb3Bkb3duVGVsY286IERyb3Bkb3duID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShEcm9wZG93bilcclxuICAgIGRyb3Bkb3duQW1vdW50OiBEcm9wZG93biA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcclxuICAgIGVkYkNvZGU6IGNjLkVkaXRCb3ggPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXHJcbiAgICBlZGJTZXJpYWw6IGNjLkVkaXRCb3ggPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBpdGVtRmFjdG9yVGVtcGxhdGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuaXRlbUZhY3RvclRlbXBsYXRlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ29uZmlncy5BcHAuU0VSVkVSX0NPTkZJRy5saXN0TWVuaEdpYU5hcFRoZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbUZhY3RvclRlbXBsYXRlKTtcclxuICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLml0ZW1GYWN0b3JUZW1wbGF0ZS5wYXJlbnQ7XHJcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBtZW5oR2lhID0gQ29uZmlncy5BcHAuU0VSVkVSX0NPTkZJRy5saXN0TWVuaEdpYU5hcFRoZVtpXTtcclxuICAgICAgICAgICAgbGV0IG5oYW4gPSBNYXRoLmNlaWwobWVuaEdpYSAqIENvbmZpZ3MuQXBwLlNFUlZFUl9DT05GSUcucmF0aW9OYXBUaGUpO1xyXG4gICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwibWVuaGdpYVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihtZW5oR2lhKTtcclxuICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImtodXllbm1haVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiMCVcIjtcclxuICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcIm5oYW5cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIobmhhbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5kcm9wZG93blRlbGNvLnNldE9wdGlvbnMoW1wiQ2jhu41uIG5ow6AgbeG6oW5nXCJdLmNvbmNhdChDb25maWdzLkFwcC5TRVJWRVJfQ09ORklHLmxpc3RUZW5OaGFNYW5nKSk7XHJcbiAgICAgICAgbGV0IGxpc3RNZW5oR2lhID0gW1wiQ2jhu41uIG3hu4duaCBnacOhXCJdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ29uZmlncy5BcHAuU0VSVkVSX0NPTkZJRy5saXN0TWVuaEdpYU5hcFRoZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsaXN0TWVuaEdpYS5wdXNoKFV0aWxzLmZvcm1hdE51bWJlcihDb25maWdzLkFwcC5TRVJWRVJfQ09ORklHLmxpc3RNZW5oR2lhTmFwVGhlW2ldKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZHJvcGRvd25BbW91bnQuc2V0T3B0aW9ucyhsaXN0TWVuaEdpYSk7XHJcbiAgICAgICAgdGhpcy5yZXNldEZvcm0oKTtcclxuICAgIH1cclxuICAgIHJlc2V0Rm9ybSgpIHtcclxuICAgICAgICB0aGlzLmRyb3Bkb3duVGVsY28uc2V0VmFsdWUoMCk7XHJcbiAgICAgICAgdGhpcy5kcm9wZG93bkFtb3VudC5zZXRWYWx1ZSgwKTtcclxuICAgICAgICB0aGlzLmVkYkNvZGUuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICB0aGlzLmVkYlNlcmlhbC5zdHJpbmcgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIGxldCBkZFRlbGNvVmFsdWUgPSB0aGlzLmRyb3Bkb3duVGVsY28uZ2V0VmFsdWUoKTtcclxuICAgICAgICBsZXQgZGRBbW91bnRWYWx1ZSA9IHRoaXMuZHJvcGRvd25BbW91bnQuZ2V0VmFsdWUoKTtcclxuICAgICAgICBsZXQgY29kZSA9IHRoaXMuZWRiQ29kZS5zdHJpbmcudHJpbSgpO1xyXG4gICAgICAgIGxldCBzZXJpYWwgPSB0aGlzLmVkYlNlcmlhbC5zdHJpbmcudHJpbSgpO1xyXG4gICAgICAgIGlmIChkZFRlbGNvVmFsdWUgPT0gMCkge1xyXG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIlZ1aSBsw7JuZyBjaOG7jW4gbmjDoCBt4bqhbmcuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkZEFtb3VudFZhbHVlID09IDApIHtcclxuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJWdWkgbMOybmcgY2jhu41uIG3hu4duaCBnacOhLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29kZSA9PSBcIlwiIHx8IHBhcnNlSW50KGNvZGUpIDw9IDAgfHwgaXNOYU4ocGFyc2VJbnQoY29kZSkpKSB7XHJcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiTcOjIHRo4bq7IGtow7RuZyBo4bujcCBs4buHLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VyaWFsID09IFwiXCIgfHwgcGFyc2VJbnQoc2VyaWFsKSA8PSAwIHx8IGlzTmFOKHBhcnNlSW50KHNlcmlhbCkpKSB7XHJcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiTcOjIHNlcmlhbCBraMO0bmcgaOG7o3AgbOG7hy5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRlbGNvSWQgPSBDb25maWdzLkFwcC5TRVJWRVJfQ09ORklHLmxpc3RJZE5oYU1hbmdbZGRUZWxjb1ZhbHVlIC0gMV07XHJcbiAgICAgICAgbGV0IGFtb3VudCA9IENvbmZpZ3MuQXBwLlNFUlZFUl9DT05GSUcubGlzdE1lbmhHaWFOYXBUaGVbZGRBbW91bnRWYWx1ZSAtIDFdLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudDIuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuUmVxRGVwb3NpdENhcmQodGVsY29JZCwgc2VyaWFsLCBjb2RlLCBhbW91bnQpKTtcclxuICAgIH1cclxufVxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFNob3AgZXh0ZW5kcyBEaWFsb2cge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGVDb250YWluZXIpXHJcbiAgICB0YWJzOiBjYy5Ub2dnbGVDb250YWluZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0YWJDb250ZW50czogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFRhYk5hcFRoZSlcclxuICAgIHRhYk5hcFRoZTogVGFiTmFwVGhlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShbY2MuTGFiZWxdKVxyXG4gICAgbGJsQ29udGFpbnNCb3RPVFBzOiBjYy5MYWJlbFtdID0gW107XHJcbiAgICBwcml2YXRlIHRhYlNlbGVjdGVkSWR4ID0gMDtcclxuICAgIHN0YXJ0KCkge1xyXG5cdFx0dGhpcy50YWJOYXBUaGUucmVzZXQoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGJsQ29udGFpbnNCb3RPVFBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBsYmwgPSB0aGlzLmxibENvbnRhaW5zQm90T1RQc1tpXTtcclxuICAgICAgICAgICAgbGJsLnN0cmluZyA9IGxibC5zdHJpbmcucmVwbGFjZShcIiRib3Rfb3RwXCIsIFwiQFwiICsgQ29uZmlncy5BcHAuZ2V0TGlua1RlbGVncmFtKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFicy50b2dnbGVJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnRhYnMudG9nZ2xlSXRlbXNbaV0ubm9kZS5vbihcInRvZ2dsZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSWR4ID0gaTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25UYWJDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQyLmdldEluc3RhbmNlKCkuYWRkTGlzdGVuZXIoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgbGV0IGlucGFja2V0ID0gbmV3IEluUGFja2V0KGRhdGEpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbnBhY2tldC5nZXRDbWRJZCgpKTtcclxuICAgICAgICAgICAgc3dpdGNoIChpbnBhY2tldC5nZXRDbWRJZCgpKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkRFUE9TSVRfQ0FSRDoge1xyXG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVzRGVwb3NpdENhcmQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZXMuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJO4bqhcCB0aOG6uyB0aMOgbmggY8O0bmcuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luID0gcmVzLmN1cnJlbnRNb25leTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFiTmFwVGhlLnJlc2V0Rm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJI4buHIHRo4buRbmcgxJHDoyBnaGkgbmjhuq1uIGdpYW8gZOG7i2NoLCB2dWkgbMOybmcgY2jhu50gaOG7hyB0aOG7kW5nIHjhu60gbMO9LlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDMxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJUaOG6uyDEkcOjIMSRxrDhu6NjIHPhu60gZOG7pW5nLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDMyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJUaOG6uyDEkcOjIGLhu4sga2jDs2EuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIlRo4bq7IGNoxrBhIMSRxrDhu6NjIGvDrWNoIGhv4bqhdC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiVGjhursgxJHDoyBo4bq/dCBo4bqhbiBz4butIGThu6VuZy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiTcOjIHRo4bq7IGtow7RuZyDEkcO6bmcuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIlPhu5Egc2VyaWFsIGtow7RuZyDEkcO6bmcuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiVMOgaSBraG/huqNuIMSRw6MgYuG7iyBraMOzYSBu4bqhcCB0aOG6uyBkbyBu4bqhcCBzYWkgcXXDoSBuaGnhu4F1IGzhuqduISBUaOG7nWkgZ2lhbiBraMOzYSBu4bqhcCB0aOG6uyBjw7JuIGzhuqFpOiBcIiArIHRoaXMubG9uZ1RvVGltZShyZXMudGltZUZhaWwpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJM4buXaSBcIiArIHJlcy5lcnJvciArIFwiLiBLaMO0bmcgeMOhYyDEkeG7i25oLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuQ0hFQ0tfTklDS05BTUVfVFJBTlNGRVI6IHtcclxuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlc0NoZWNrTmlja25hbWVUcmFuc2ZlcihkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZXJyb3IgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYlRyYW5zZmVyLmVkYk5pY2tuYW1lLnN0cmluZyA9IHRoaXMudGFiVHJhbnNmZXIuZWRiUmVOaWNrbmFtZS5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIlTDoGkga2hv4bqjbiBraMO0bmcgdOG7k24gdOG6oWkuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJUcmFuc2Zlci5yZWNlaXZlckFnZW50PXJlcy50eXBlID09IDEgfHwgcmVzLnR5cGUgPT0gMjtcclxuICAgICAgICAgICAgICAgICAgICBpZighdGhpcy50YWJUcmFuc2Zlci5yZWNlaXZlckFnZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJUcmFuc2Zlci5lZGJOaWNrbmFtZS5zdHJpbmcgPVwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiVMOgaSBraG/huqNuIFwiK3RoaXMudGFiVHJhbnNmZXIuZWRiTmlja25hbWUuc3RyaW5nK1wiIEtow7RuZyBwaOG6o2kgbMOgIHTDoGkga2hv4bqjbiDEkeG6oWkgbMO9LlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFiVHJhbnNmZXIubGJsRGFpTHkubm9kZS5hY3RpdmUgPSByZXMudHlwZSA9PSAxIHx8IHJlcy50eXBlID09IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJUcmFuc2Zlci5sYmxGZWUuc3RyaW5nID0gcmVzLmZlZSArIFwiJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFiVHJhbnNmZXIucmF0aW9UcmFuc2ZlciA9ICgxMDAgLSByZXMuZmVlKSAvIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuVFJBTlNGRVJfQ09JTjoge1xyXG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVzVHJhbnNmZXJDb2luKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZXMuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJUcmFuc2Zlci5wYW5lbENvbnRlbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYlRyYW5zZmVyLnBhbmVsQ29udGludWUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFiVHJhbnNmZXIuZWRiT1RQLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIlZ1aSBsw7JuZyBuaOG6pW4gXFxcIkzhuqV5IE9UUCBTTVNcXFwiIGhv4bq3YyBs4bqleSBPVFAgdOG7qyBUZWxlZ3JhbSB2w6Agbmjhuq1wIG3DoyBPVFAgxJHhu4MgdGnhur9wIHThu6VjIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIlPhu5EgdGnhu4FuIHThu5FpIHRoaeG7g3UgbMOgIDIwMC4wMDAuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiQ2jhu6ljIG7Eg25nIGNo4buJIGTDoG5oIGNobyBuaOG7r25nIHTDoGkga2hv4bqjbiDEkcSDbmcga8O9IGLhuqNvIG3huq10IFNNUyBQTFVTLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIlPhu5EgZMawIGtow7RuZyDEkeG7py5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJUw6BpIGtob+G6o24gYuG7iyBj4bqlbSBjaHV54buDbiB0aeG7gW4uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiTmlja25hbWUgbmjhuq1uIGtow7RuZyB04buTbiB04bqhaS5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiQ2jhu6ljIG7Eg25nIGLhuqNvIG3huq10IHPhur0gdOG7sSDEkeG7mW5nIGvDrWNoIGhv4bqhdCBzYXUgMjRoIGvhu4MgdOG7qyB0aOG7nWkgxJFp4buDbSDEkcSDbmcga8O9IHRow6BuaCBjw7RuZyFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiQuG6oW4gY2jhu4kgxJHGsOG7o2MgY2h1eeG7g24gY2hvIMSQ4bqhaSBsw70gdOG7lW5nIHRyb25nIGtob+G6o25nIHRp4buBbiBxdXkgxJHhu4tuaCFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiVMOgaSBraG/huqNuIGNoxrBhIMSR4bunIMSRaeG7gXUga2nhu4duIMSR4buDIGNodXnhu4NuIHRp4buBbi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiTOG7l2kgXCIgKyByZXMuZXJyb3IgKyBcIi4gdnVpIGzDsm5nIHRo4butIGzhuqFpIHNhdS5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkdFVF9PVFA6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlc0dldE9UUChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZXJyb3IgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIk3DoyBPVFAgxJHDoyDEkcaw4bujYyBn4butaSDEkWkhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmVycm9yID09IDMwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiTeG7l2kgdGhhbyB0w6FjIGzhuqV5IFNNUyBPVFAgcGjhuqNpIGPDoWNoIG5oYXUgw610IG5o4bqldCA1IHBow7p0IVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIlRoYW8gdMOhYyBraMO0bmcgdGjDoG5oIGPDtG5nIHZ1aSBsw7JuZyB0aOG7rSBs4bqhaSBzYXUhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuU0VORF9PVFA6IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZXNTZW5kT1RQKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5lcnJvciAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJHaWFvIGThu4tjaCB0aOG6pXQgYuG6oWkhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiTcOjIHjDoWMgdGjhu7FjIGtow7RuZyBjaMOtbmggeMOhYywgdnVpIGzDsm5nIHRo4butIGzhuqFpIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIk3DoyBPVFAgxJHDoyBo4bq/dCBo4bqhbiFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiTOG7l2kgXCIgKyByZXMuZXJyb3IgKyBcIi4gS2jDtG5nIHjDoWMgxJHhu4tuaC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlJFU1VMVF9UUkFOU0ZFUl9DT0lOOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLm5vZGUuYWN0aXZlKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZXNSZXN1bHRUcmFuc2ZlckNvaW4oZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlcy5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW4gPSByZXMuY3VycmVudE1vbmV5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiR2lhbyBk4buLY2ggY2h1eeG7g24ga2hv4bqjbiB0aMOgbmggY8O0bmchXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIkzhu5dpIFwiICsgcmVzLmVycm9yICsgXCIuIHZ1aSBsw7JuZyB0aOG7rSBs4bqhaSBzYXUuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFiVHJhbnNmZXIucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuSU5TRVJUX0dJRlRDT0RFOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZXNJbnNlcnRHaWZ0Y29kZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlcy5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIk3DoyB0aOG6uyBraMO0bmcgY2jDrW5oIHjDoWMuIFZ1aSBsw7JuZyBraeG7g20gdHJhIGzhuqFpIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIk3DoyB0aOG6uyDEkcOjIMSRxrDhu6NjIHPhu60gZOG7pW5nLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIsSQ4buDIHPhu60gZOG7pW5nIHTDrW5oIG7Eg25nIG7DoHkgdnVpIGzDsm5nIMSRxINuZyBrw70gYuG6o28gbeG6rXQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIk3DoyB0aOG6uyDEkcOjIG5o4bqtcCBraMO0bmcgaOG7o3AgbOG7hy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luID0gcmVzLmN1cnJlbnRNb25leVZpbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIk7huqFwIHRo4bq7IHRow6BuaCBjw7RuZy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkRFUE9TSVRfQkFOSzoge1xyXG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVzRGVwb3NpdEJhbmsoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKHJlcy5lcnJvcil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiSOG7hyB0aOG7kW5nIMSRw6MgZ2hpIG5o4bqtbiBnaWFvIGThu4tjaCBj4bunYSBi4bqhbiwgdnVpIGzDsm5nIGNo4budIHRyb25nIGdpw6J5IGzDoXQgxJHhu4MgY2jDum5nIHTDtGkgeOG7rSBsw71cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJC4bqhbiDEkWFuZyBjw7MgZ2lhbyBk4buLY2ggY2jhu50geOG7rSBsw70sIHZ1aSBsw7JuZyBjaOG7nSDEkeG6v24ga2hpIGdpYW8gZOG7i2NoIMSRxrDhu6NjIGhvw6BuIHThuqV0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJE4buvIGxp4buHdSBs4buXaSwgdnVpIGzDsm5nIHRo4butIGzhuqFpIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJE4buvIGxp4buHdSBs4buXaSwgdnVpIGzDsm5nIHRo4butIGzhuqFpIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhyZXMuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5ERVBPU0lUX01PTU86IHtcclxuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlc0RlcG9zaXRNb21vKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChyZXMuZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIkjhu4cgdGjhu5FuZyDEkcOjIGdoaSBuaOG6rW4gZ2lhbyBk4buLY2ggY+G7p2EgYuG6oW4sIHZ1aSBsw7JuZyBjaOG7nSB0cm9uZyBnacOieSBsw6F0IMSR4buDIGNow7puZyB0w7RpIHjhu60gbMO9XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiQuG6oW4gxJFhbmcgY8OzIGdpYW8gZOG7i2NoIGNo4budIHjhu60gbMO9LCB2dWkgbMOybmcgY2jhu50gxJHhur9uIGtoaSBnaWFvIGThu4tjaCDEkcaw4bujYyBob8OgbiB04bqldFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiROG7ryBsaeG7h3UgbOG7l2ksIHZ1aSBsw7JuZyB0aOG7rSBs4bqhaSFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiROG7ryBsaeG7h3UgbOG7l2ksIHZ1aSBsw7JuZyB0aOG7rSBs4bqhaSFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2cocmVzLmVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnRhYk5hcFRoZS5zdGFydCgpO1xyXG4gICAgICAgXHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uVGFiQ2hhbmdlZCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFiQ29udGVudHMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFiQ29udGVudHMuY2hpbGRyZW5baV0uYWN0aXZlID0gaSA9PSB0aGlzLnRhYlNlbGVjdGVkSWR4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMudGFicy50b2dnbGVJdGVtcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICB0aGlzLnRhYnMudG9nZ2xlSXRlbXNbal0ubm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5ub2RlLmNvbG9yID0gaiA9PSB0aGlzLnRhYlNlbGVjdGVkSWR4ID8gY2MuQ29sb3IuWUVMTE9XIDogY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAodGhpcy50YWJTZWxlY3RlZElkeCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhYk5hcFRoZS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMudGFiTmFwVGhlLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhYk5hcFRoZS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIHRoaXMudGFiTmFwVGhlLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGxvbmdUb1RpbWUobDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gKGwgLyA2MCkgKyBcIiBnaeG7nSBcIiArIChsICUgNjApICsgXCIgcGjDunRcIjtcclxuICAgIH1cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgc3VwZXIuc2hvdygpO1xyXG4gICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJZHggPSAwO1xyXG4gICAgICAgIHRoaXMudGFicy50b2dnbGVJdGVtc1t0aGlzLnRhYlNlbGVjdGVkSWR4XS5pc0NoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub25UYWJDaGFuZ2VkKCk7XHJcbiAgICB9XHJcbiAgICBzaG93QW5kT3BlblRyYW5zZmVyKG5pY2tuYW1lOiBzdHJpbmcgPSBudWxsKSB7XHJcbiAgICAgICAgc3VwZXIuc2hvdygpO1xyXG4gICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJZHggPSAxO1xyXG4gICAgICAgIHRoaXMudGFicy50b2dnbGVJdGVtc1t0aGlzLnRhYlNlbGVjdGVkSWR4XS5pc0NoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub25UYWJDaGFuZ2VkKCk7XHJcbiAgICAgICAgaWYgKG5pY2tuYW1lICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy50YWJUcmFuc2Zlci5lZGJOaWNrbmFtZS5zdHJpbmcgPSB0aGlzLnRhYlRyYW5zZmVyLmVkYlJlTmlja25hbWUuc3RyaW5nID0gbmlja25hbWU7XHJcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgTWluaUdhbWVOZXR3b3JrQ2xpZW50Mi5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5SZXFDaGVja05pY2tuYW1lVHJhbnNmZXIobmlja25hbWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhY3RTdWJtaXROYXBUaGUoKSB7XHJcbiAgICAgICAgdGhpcy50YWJOYXBUaGUuc3VibWl0KCk7XHJcbiAgICB9XHJcbiAgICBhY3RDb250aW51ZVRyYW5zZmVyKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLnRhYlRyYW5zZmVyLnJlY2VpdmVyQWdlbnQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIkNo4buJIGPDsyB0aOG7gyBjaHV54buDbiB0aeG7gW4gY2hvIHTDoGkga2hv4bqjbiDEkeG6oWkgbMO9XCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGFiVHJhbnNmZXIuY29udGludWUoKTtcclxuICAgIH1cclxuICAgIGFjdEdldE9UUCgpIHtcclxuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgTWluaUdhbWVOZXR3b3JrQ2xpZW50Mi5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5SZXFHZXRPVFAoKSk7XHJcbiAgICB9XHJcbiAgICBhY3RTdWJtaXRUcmFuc2ZlcigpIHtcclxuICAgICAgICBsZXQgb3RwID0gdGhpcy50YWJUcmFuc2Zlci5lZGJPVFAuc3RyaW5nLnRyaW0oKTtcclxuICAgICAgICBpZiAob3RwLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiTcOjIHjDoWMgdGjhu7FjIGtow7RuZyDEkcaw4bujYyBi4buPIHRy4buRbmcuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQyLmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlJlcVNlbmRPVFAob3RwLCAwKSk7XHJcbiAgICB9XHJcbiAgICBhY3RTdWJtaXRDYXJkKCkge1xyXG4gICAgICAgIHRoaXMudGFiQ2FyZC5zdWJtaXQoKTtcclxuICAgIH1cclxufVxyXG4gIl19