"use strict";
cc._RF.push(module, 'ce50em84F1KY49MkXQhfHHH', 'TabTopupNapThe');
// Lobby/LobbyScript/Payment/TabTopupNapThe.ts

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
var Utils_1 = require("../Script/common/Utils");
var TabTopupChuyenKhoan_1 = require("./TabTopupChuyenKhoan");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TabTopupNapThe = /** @class */ (function (_super) {
    __extends(TabTopupNapThe, _super);
    function TabTopupNapThe() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lbFree = null;
        _this.editName = null;
        _this.editMoney = null;
        _this.listCard = [{ value: 10000, str: "10.000 VNĐ" }, { value: 20000, str: "20.000 VNĐ" }, { value: 50000, str: "50.000 VNĐ" }, { value: 100000, str: "100.000 VNĐ" }, { value: 200000, str: "200.000 VNĐ" }, { value: 500000, str: "500.000 VNĐ" }];
        _this.listRateCard = [{ type: "VNM", fee: "26%" }, { type: "GATE", fee: "32%" }, { type: "VCOIN", fee: "32%" }, { type: "VMS", fee: "26%" }, { type: "VTT", fee: "24%" }, { type: "VNP", fee: "26%" }, { type: "ZING", fee: "32%" }];
        return _this;
    }
    TabTopupNapThe.prototype.show = function (data, providerName) {
        _super.prototype.show.call(this, data, providerName);
        this.loadCardList();
        this.lbFree.string = "- Mỗi loại thẻ có phí nạp khác nhau.";
    };
    TabTopupNapThe.prototype.onBtnXacNhan = function () {
        var cardPin = this.editName.string.trim();
        var seri = this.editMoney.string.trim();
        var money = Utils_1.default.formatEditBox(this.dropCard.labelCaption.string);
        if (seri == "" || cardPin == "" || this.dataBankChosing == null) {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_input_all"));
            return;
        }
        App_1.default.instance.showLoading(true, -1);
        var request = {
            "c": 2033,
            "p": cardPin,
            "sn": seri,
            "am": money,
            "tc": this.dataBankChosing['key'],
            "nn": Configs_1.default.Login.Nickname,
            "at": Configs_1.default.Login.AccessToken,
        };
        //  cc.log("request:", request);
        Http_1.default.get(Configs_1.default.App.API, request, function (err, res) {
            App_1.default.instance.showLoading(false);
            //  cc.log(res);
            if (res.success == true) {
                App_1.default.instance.ShowAlertDialog("Yêu cầu nạp thẻ đã được gửi thành công!\nQuý khách vui lòng chờ trong ít phút!");
            }
            else {
                App_1.default.instance.ShowAlertDialog("Thông tin thẻ không đúng.\nVui lòng kiểm tra lại!");
            }
        });
    };
    TabTopupNapThe.prototype.loadCardList = function () {
        var datas = new Array();
        for (var i = 0; i < this.listCard.length; i++) {
            datas.push({ optionString: this.listCard[i]['str'] });
        }
        this.dropCard.clearOptionDatas();
        this.dropCard.addOptionDatas(datas);
        this.dropCard.selectedIndex = 0;
    };
    TabTopupNapThe.prototype.onBtnChoseBank = function () {
        var _this = this;
        this.lobbyChoseBank.init(this.tabWell, this.data.banks, function (dataBankChosing) {
            _this.dataBankChosing = dataBankChosing;
            //  cc.log("data card=", this.dataBankChosing);
            for (var i = 0; i < _this.listRateCard.length; i++) {
                if (_this.dataBankChosing['key'] == _this.listRateCard[i]['type']) {
                    _this.lbFree.string = "- Phí nạp: " + _this.listRateCard[i]['fee'];
                }
            }
            _this.showBankChosing();
        });
        this.lobbyChoseBank.show();
    };
    __decorate([
        property(cc.Label)
    ], TabTopupNapThe.prototype, "lbFree", void 0);
    __decorate([
        property({
            type: cc.EditBox,
            displayName: "edbCardPin",
            override: true
        })
    ], TabTopupNapThe.prototype, "editName", void 0);
    __decorate([
        property({
            type: cc.EditBox,
            displayName: "edbCardSeri",
            override: true
        })
    ], TabTopupNapThe.prototype, "editMoney", void 0);
    TabTopupNapThe = __decorate([
        ccclass
    ], TabTopupNapThe);
    return TabTopupNapThe;
}(TabTopupChuyenKhoan_1.default));
exports.default = TabTopupNapThe;

cc._RF.pop();