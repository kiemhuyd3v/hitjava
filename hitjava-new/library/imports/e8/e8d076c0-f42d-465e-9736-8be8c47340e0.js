"use strict";
cc._RF.push(module, 'e8d07bA9C1GXpc2i+jEc0Dg', 'Lobby.PopupProfile');
// Lobby/LobbyScript/Lobby.PopupProfile.ts

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
exports.TabBank = exports.TabVip = exports.PopupUpdateInfo = exports.TabProfile = void 0;
var Configs_1 = require("../../Loading/src/Configs");
var Global_1 = require("../../Loading/src/Global");
var Http_1 = require("../../Loading/src/Http");
var Lobby_Cmd_1 = require("./Lobby.Cmd");
var App_1 = require("./Script/common/App");
var BroadcastReceiver_1 = require("./Script/common/BroadcastReceiver");
var Dialog_1 = require("./Script/common/Dialog");
var Utils_1 = require("./Script/common/Utils");
var MiniGameNetworkClient_1 = require("./Script/networks/MiniGameNetworkClient");
var Network_InPacket_1 = require("./Script/networks/Network.InPacket");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TabProfile = /** @class */ (function () {
    function TabProfile() {
        this.lblNickname = null;
        this.lblChip = null;
        this.lblVipPoint = null;
        this.lblEmail = null;
        this.lblGender = null;
        this.lblBirthday = null;
        this.lblVipPointPercent = null;
        this.lblPhone = null;
        this.lblAddress = null;
        this.lblRefcode = null;
        this.lblVipName = null;
        this.sliderVipPoint = null;
        this.spriteProgressVipPoint = null;
        this.spriteAvatar = null;
    }
    __decorate([
        property(cc.Label)
    ], TabProfile.prototype, "lblNickname", void 0);
    __decorate([
        property(cc.Label)
    ], TabProfile.prototype, "lblChip", void 0);
    __decorate([
        property(cc.Label)
    ], TabProfile.prototype, "lblVipPoint", void 0);
    __decorate([
        property(cc.Label)
    ], TabProfile.prototype, "lblEmail", void 0);
    __decorate([
        property(cc.Label)
    ], TabProfile.prototype, "lblGender", void 0);
    __decorate([
        property(cc.Label)
    ], TabProfile.prototype, "lblBirthday", void 0);
    __decorate([
        property(cc.Label)
    ], TabProfile.prototype, "lblVipPointPercent", void 0);
    __decorate([
        property(cc.Label)
    ], TabProfile.prototype, "lblPhone", void 0);
    __decorate([
        property(cc.Label)
    ], TabProfile.prototype, "lblAddress", void 0);
    __decorate([
        property(cc.Label)
    ], TabProfile.prototype, "lblRefcode", void 0);
    __decorate([
        property(cc.Label)
    ], TabProfile.prototype, "lblVipName", void 0);
    __decorate([
        property(cc.Slider)
    ], TabProfile.prototype, "sliderVipPoint", void 0);
    __decorate([
        property(cc.Sprite)
    ], TabProfile.prototype, "spriteProgressVipPoint", void 0);
    __decorate([
        property(cc.Sprite)
    ], TabProfile.prototype, "spriteAvatar", void 0);
    TabProfile = __decorate([
        ccclass("Lobby.PopupProfile.TabProfile")
    ], TabProfile);
    return TabProfile;
}());
exports.TabProfile = TabProfile;
var PopupUpdateInfo = /** @class */ (function () {
    function PopupUpdateInfo() {
        this.edbMail = null;
        this.edbAddress = null;
        this.edbBirthday = null;
        this.edbRefCode = null;
        this.toggleContainer = null;
        this.bg = null;
        this.type = 1; //1-address,2-Email;
        this.gender = 1;
        this.refcode = "";
    }
    PopupUpdateInfo.prototype.setInfo = function () {
        this.edbBirthday.string = Configs_1.default.Login.Birthday;
        this.edbAddress.string = Configs_1.default.Login.Address;
        this.edbMail.string = Configs_1.default.Login.Mail;
        this.edbRefCode.string = this.refcode;
        if (Configs_1.default.Login.Gender) {
            this.toggleContainer.node.children[0].getComponent(cc.Toggle).isChecked = true;
        }
        else {
            this.toggleContainer.node.children[2].getComponent(cc.Toggle).isChecked = true;
        }
    };
    PopupUpdateInfo.prototype.dismiss = function () {
        var _this = this;
        cc.tween(this.bg).to(0.3, { scale: 0.8, opacity: 150 }, { easing: cc.easing.backIn }).call(function () {
            _this.bg.parent.active = false;
        }).start();
    };
    PopupUpdateInfo.prototype.show = function () {
        this.bg.parent.active = true;
        cc.tween(this.bg).set({ scale: 0.8, opacity: 150 }).to(0.3, { scale: 1, opacity: 255 }, { easing: cc.easing.backOut }).start();
    };
    PopupUpdateInfo.prototype.onClickUpdate = function () {
        // this.dismiss();
        // if (this.edbBirthday.string == "" && this.edbAddress.string == "" && this.edbMail.string == "") {
        //     App.instance.alertDialog.showMsg(App.instance.getTextLang("txt_input_all"));
        //     return;
        // }
        var birthday = this.edbBirthday.string.trim();
        var address = this.edbAddress.string.trim();
        var mail = this.edbMail.string.trim();
        var refCode = this.edbRefCode.string.trim();
        var count = 0;
        if (birthday.length > 0) {
            for (var i = 0, l = birthday.length; i < l; i++) {
                if (birthday[i] == "-")
                    count++;
            }
            ;
            if (count < 2) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_error_birthday"));
                return;
            }
        }
        MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqUpdateUserInfo(mail, birthday, address, this.gender, refCode));
    };
    PopupUpdateInfo.prototype.onClickGender = function (data) {
        this.gender = parseInt(data);
    };
    __decorate([
        property(cc.EditBox)
    ], PopupUpdateInfo.prototype, "edbMail", void 0);
    __decorate([
        property(cc.EditBox)
    ], PopupUpdateInfo.prototype, "edbAddress", void 0);
    __decorate([
        property(cc.EditBox)
    ], PopupUpdateInfo.prototype, "edbBirthday", void 0);
    __decorate([
        property(cc.EditBox)
    ], PopupUpdateInfo.prototype, "edbRefCode", void 0);
    __decorate([
        property(cc.ToggleContainer)
    ], PopupUpdateInfo.prototype, "toggleContainer", void 0);
    __decorate([
        property(cc.Node)
    ], PopupUpdateInfo.prototype, "bg", void 0);
    PopupUpdateInfo = __decorate([
        ccclass("Lobby.PopupProfile.PopupUpdateInfo")
    ], PopupUpdateInfo);
    return PopupUpdateInfo;
}());
exports.PopupUpdateInfo = PopupUpdateInfo;
var TabVip = /** @class */ (function () {
    function TabVip() {
        this.lblVipPointName = null;
        this.lblVipPoint = null;
        this.lblTotalVipPoint = null;
        this.lblVipPointNextLevel = null;
        this.spriteProgressVipPoint = null;
        this.items = null;
    }
    TabVip.prototype.getVipPointInfo = function () {
        var _this = this;
        App_1.default.instance.showLoading(true);
        Http_1.default.get(Configs_1.default.App.API, { "c": 126, "nn": Configs_1.default.Login.Nickname }, function (err, res) {
            App_1.default.instance.showLoading(false);
            if (err != null) {
                return;
            }
            if (!res["success"]) {
                App_1.default.instance.alertDialog.showMsg("Lỗi kết nối, vui lòng thử lại.");
                return;
            }
            //Utils.Log("getVipPointInfo:" + JSON.stringify(res));
            Configs_1.default.Login.VipPoint = res["vippoint"];
            Configs_1.default.Login.VipPointSave = res["vippointSave"];
            var _loop_1 = function (i) {
                var item = _this.items.children[i];
                if (i < res["ratioList"].length) {
                    item.getChildByName("lblVipPoint").getComponent(cc.Label).string = Utils_1.default.formatNumber(Configs_1.default.Login.VipPoints[i]);
                    item.getChildByName("lblCoin").getComponent(cc.Label).string = Utils_1.default.formatNumber(Configs_1.default.Login.VipPoint * res["ratioList"][i]);
                    item.getChildByName("btnReceive").active = res["ratioList"][i] > 0;
                    item.getChildByName("btnReceive").getComponent(cc.Button).interactable = i == Configs_1.default.Login.getVipPointIndex() && Configs_1.default.Login.VipPoint > 0;
                    item.getChildByName("btnReceive").getComponentInChildren(cc.Label).node.color = i == Configs_1.default.Login.getVipPointIndex() ? cc.Color.YELLOW : cc.Color.GRAY;
                    item.getChildByName("btnReceive").off("click");
                    item.getChildByName("btnReceive").on("click", function () {
                        App_1.default.instance.confirmDialog.show2("Bạn có chắc chắn muốn nhận thưởng vippoint\nTương ứng với cấp Vippoint hiện tại bạn nhận được :\n" + Utils_1.default.formatNumber(Configs_1.default.Login.VipPoint * res["ratioList"][i]) + " Xu", function (isConfirm) {
                            if (isConfirm) {
                                App_1.default.instance.showLoading(true);
                                MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqExchangeVipPoint());
                            }
                        });
                    });
                    item.active = true;
                }
                else {
                    item.active = false;
                }
            };
            for (var i = 0; i < _this.items.childrenCount; i++) {
                _loop_1(i);
            }
            _this.lblVipPointName.string = Configs_1.default.Login.getVipPointName();
            _this.lblVipPoint.string = Utils_1.default.formatNumber(Configs_1.default.Login.VipPoint);
            _this.lblTotalVipPoint.string = Utils_1.default.formatNumber(Configs_1.default.Login.VipPointSave);
            _this.lblVipPointNextLevel.string = Utils_1.default.formatNumber(Configs_1.default.Login.getVipPointNextLevel());
            // let VipPoints = [80, 800, 4500, 8600, 50000, 1000000];
            var VipPoints = Configs_1.default.Login.VipPoints;
            var vipPointIdx = 0;
            for (var i = VipPoints.length - 1; i >= 0; i--) {
                if (Configs_1.default.Login.VipPoint > VipPoints[i]) {
                    vipPointIdx = i;
                    break;
                }
            }
            var vipPointNextLevel = VipPoints[0];
            for (var i = VipPoints.length - 1; i >= 0; i--) {
                if (Configs_1.default.Login.VipPoint > VipPoints[i]) {
                    if (i == VipPoints.length - 1) {
                        vipPointNextLevel = VipPoints[i];
                        break;
                    }
                    vipPointNextLevel = VipPoints[i + 1];
                    break;
                }
            }
            var vipPointStartLevel = 0;
            for (var i = VipPoints.length - 1; i >= 0; i--) {
                if (Configs_1.default.Login.VipPoint > VipPoints[i]) {
                    vipPointStartLevel = VipPoints[i];
                    break;
                }
            }
            var delta = (Configs_1.default.Login.VipPoint - vipPointStartLevel) / (vipPointNextLevel - vipPointStartLevel);
            //Utils.Log("delta: " + delta);
            _this.spriteProgressVipPoint.fillRange = (vipPointIdx + 1 / 6) + delta * (1 / 6);
        });
    };
    __decorate([
        property(cc.Label)
    ], TabVip.prototype, "lblVipPointName", void 0);
    __decorate([
        property(cc.Label)
    ], TabVip.prototype, "lblVipPoint", void 0);
    __decorate([
        property(cc.Label)
    ], TabVip.prototype, "lblTotalVipPoint", void 0);
    __decorate([
        property(cc.Label)
    ], TabVip.prototype, "lblVipPointNextLevel", void 0);
    __decorate([
        property(cc.Sprite)
    ], TabVip.prototype, "spriteProgressVipPoint", void 0);
    __decorate([
        property(cc.Node)
    ], TabVip.prototype, "items", void 0);
    TabVip = __decorate([
        ccclass("Lobby.PopupProfile.TabVip")
    ], TabVip);
    return TabVip;
}());
exports.TabVip = TabVip;
var TabBank = /** @class */ (function () {
    function TabBank() {
        this.editBank = null;
        this.editName = null;
        this.editNumber = null;
        this.editBranch = null;
        this.dropBank = null;
        this.contentItem = null;
        this.prefabItem = null;
        this.lbNote1 = null;
        this.boxList = null;
        this.boxListEmpty = null;
        this.boxUpdate = null;
        this.editNameUpdate = null;
        this.editNumberUpdate = null;
        this.editBranchUpdate = null;
        this.dropBankUpdate = null;
        this.popupAddBank = null;
        this.idBankChosing = -1;
        this.dropBankComp = null;
        this.dropBankUpdateComp = null;
    }
    TabBank.prototype.show = function () {
        this.editBank.node.active = false;
        // this.dropBank = this.dropBankComp.getComponent("DropDown");
        this.dropBank.on("touchend", this.onClickBank, this);
        this.dropBankComp = this.dropBank.getComponent("DropDown");
        this.dropBankUpdateComp = this.dropBankUpdate.getComponent("DropDown");
        this.editName.string = "";
        this.editNumber.string = "";
        this.editBranch.string = "";
        this.loadBankList();
        this.GetListBankProfile();
    };
    TabBank.prototype.onClickBank = function () {
        //Utils.Log("onClickBank:" + this.dropBankComp.isShow);
        if (!this.dropBankComp.isShow) {
            this.editBank.node.active = true;
            this.editBank.focus();
        }
        else {
            this.editBank.node.active = false;
        }
    };
    TabBank.prototype.showPopupAddBank = function () {
        this.popupAddBank.active = true;
        cc.tween(this.popupAddBank).set({ scale: 0.8, opacity: 255 }).to(0.3, { scale: 1.0, opacity: 255 }, { easing: cc.easing.backOut }).start();
    };
    TabBank.prototype.closeTabAddBank = function () {
        var _this = this;
        cc.tween(this.popupAddBank).to(0.3, { scale: 0.8, opacity: 150 }, { easing: cc.easing.backIn }).call(function () {
            _this.popupAddBank.active = false;
        }).start();
    };
    TabBank.prototype.loadBankList = function () {
        var _this = this;
        var data = {};
        data["c"] = 2011;
        Http_1.default.get(Configs_1.default.App.API, data, function (err, res) {
            //Utils.Log("loadBankList:" + JSON.stringify(res));
            _this.listBank = res.bank.split(',');
            var datas = new Array();
            _this.listBank.sort(function (a, b) {
                return a.charCodeAt(0) - b.charCodeAt(0);
            });
            for (var i = 0; i < _this.listBank.length; i++) {
                datas.push({ optionString: _this.listBank[i] });
            }
            _this.dropBankComp.clearOptionDatas();
            _this.dropBankComp.addOptionDatas(datas);
            _this.dropBankComp.selectedIndex = 0;
        });
    };
    TabBank.prototype.GetListBankProfile = function () {
        var _this = this;
        this.contentItem.removeAllChildren();
        var self = this;
        var data = {};
        data["c"] = 2008;
        data["nn"] = encodeURIComponent(Configs_1.default.Login.Nickname.trim());
        data["pn"] = 1;
        data["l"] = 10;
        Http_1.default.get(Configs_1.default.App.API, data, function (err, res) {
            var list = JSON.parse(res.data).data;
            Configs_1.default.Login.ListBankRut = list;
            if (res == null || list.length == 0) {
                self.boxList.active = false;
                self.boxListEmpty.active = true;
            }
            else {
                self.boxList.active = true;
                self.boxListEmpty.active = false;
                var txtNote1 = App_1.default.instance.getTextLang("txt_profile_note_bank1");
                _this.lbNote1.string = txtNote1.replace("%s", list.length);
                for (var i = 0; i < list.length; i++) {
                    var nodeItem = cc.instantiate(self.prefabItem);
                    nodeItem.parent = self.contentItem;
                    nodeItem.setPosition(cc.v2(0, 0));
                    nodeItem.getComponent("ItemBankProfile").init(list[i], self);
                }
            }
        });
    };
    TabBank.prototype.CreateBank = function () {
        var _this = this;
        if (this.editName.string == "" || this.editNumber.string == "" || this.editBranch.string == "") {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_input_all"));
            return;
        }
        if (this.editName.string.indexOf(' ') == -1) {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_account_not_blank'));
            return;
        }
        var self = this;
        var data = {};
        data["c"] = 2007;
        data["nn"] = encodeURIComponent(Configs_1.default.Login.Nickname.trim());
        data["bn"] = encodeURIComponent(this.dropBankComp.labelCaption.string.trim());
        ;
        data["cn"] = encodeURIComponent(this.editName.string.trim());
        data["bnum"] = this.editNumber.string;
        data["br"] = encodeURIComponent(this.editBranch.string.trim());
        ;
        data["t"] = 0;
        //Utils.Log("CreateBank:" + JSON.stringify(data));
        Http_1.default.get(Configs_1.default.App.API, data, function (err, res) {
            //Utils.Log("response CreateBank:" + JSON.stringify(err) + " : " + JSON.stringify(res));
            _this.closeTabAddBank();
            if (res.success) {
                self.GetListBankProfile();
            }
            else {
                App_1.default.instance.alertDialog.showMsg(res.message);
            }
        });
    };
    TabBank.prototype.loadBankUpdateList = function () {
        var datas = new Array();
        for (var i = 0; i < this.listBank.length; i++) {
            datas.push({ optionString: this.listBank[i] });
        }
        this.dropBankUpdateComp.clearOptionDatas();
        this.dropBankUpdateComp.addOptionDatas(datas);
        this.dropBankUpdateComp.selectedIndex = 0;
    };
    TabBank.prototype.ShowBoxUpdate = function (dataItem) {
        this.loadBankUpdateList();
        this.boxUpdate.active = true;
        var indexBank = 0;
        for (var i = 0; i < this.listBank.length; i++) {
            if (this.listBank[i] == dataItem.bankName) {
                indexBank = i;
            }
        }
        this.dropBankUpdateComp.selectedIndex = indexBank;
        this.dropBankUpdateComp.labelCaption.string = dataItem.bankName;
        this.editNameUpdate.string = dataItem.customerName;
        this.editNumberUpdate.string = dataItem.bankNumber;
        this.editBranchUpdate.string = dataItem.branch;
        this.idBankChosing = dataItem.id;
    };
    TabBank.prototype.onChangeEditBank = function () {
        //  //Utils.Log("vao day ne:" + this.editBank.string + ":" + this.editBank.node.active);
        var datas = new Array();
        for (var i = 0; i < this.listBank.length; i++) {
            //  //Utils.Log("filer:" + i + ":" + this.editBank.string + ":" + this.listBank[i].toLowerCase());
            if (this.listBank[i].toLowerCase().includes(this.editBank.string.toLowerCase())) {
                //Utils.Log("match:" + this.listBank[i]);
                datas.push({ optionString: this.listBank[i] });
            }
        }
        //Utils.Log("load:" + JSON.stringify(datas));
        this.dropBankComp.hide();
        this.dropBankComp.clearOptionDatas();
        this.dropBankComp.addOptionDatas(datas);
        this.dropBankComp.selectedIndex = 0;
        this.dropBankComp.show();
    };
    TabBank.prototype.onBtnChoseItemBank = function () {
        this.editBank.node.active = false;
        this.dropBankComp.hide();
    };
    TabBank.prototype.onChangeEditNumber = function () {
        this.editNumber.string = Utils_1.default.formatNumberBank(this.editNumber.string).toUpperCase();
    };
    TabBank.prototype.onChangeEditNumberUpdate = function () {
        this.editNumberUpdate.string = Utils_1.default.formatNumberBank(this.editNumberUpdate.string).toUpperCase();
    };
    TabBank.prototype.onChangeEditBranch = function () {
        this.editBranch.string = Utils_1.default.formatNameBank(this.editBranch.string).toUpperCase();
    };
    TabBank.prototype.onChangeEditBranchUpdate = function () {
        this.editBranchUpdate.string = Utils_1.default.formatNameBank(this.editBranchUpdate.string).toUpperCase();
    };
    TabBank.prototype.onChangeEditName = function () {
        this.editName.string = Utils_1.default.formatNameBank(this.editName.string).toUpperCase();
    };
    TabBank.prototype.onChangeEditNameUpdate = function () {
        this.editNameUpdate.string = Utils_1.default.formatNameBank(this.editNameUpdate.string).toUpperCase();
    };
    TabBank.prototype.HideBoxUpdate = function () {
        this.boxUpdate.active = false;
        this.idBankChosing = -1;
    };
    TabBank.prototype.UpdateBank = function () {
        //Utils.Log("UpdateBank:" + this.editNameUpdate.string + ":" + this.editNumberUpdate.string + ":" + this.editBranchUpdate.string + ":" + this.dropBankUpdate.selectedIndex + ":" + this.idBankChosing);
        if (this.editNameUpdate.string == "" || this.editNumberUpdate.string == "" || this.editBranchUpdate.string == "" || this.idBankChosing == -1) {
            App_1.default.instance.alertDialog.showMsg("Vui lòng điền đầy đủ thông tin.");
            return;
        }
        if (this.editName.string.indexOf(' ') == -1) {
            App_1.default.instance.alertDialog.showMsg("Chủ tài khoản bắt buộc phải có 1 khoảng trắng.");
            return;
        }
        var self = this;
        var data = {};
        data["c"] = 2007;
        data["nn"] = Configs_1.default.Login.Nickname;
        data["bn"] = this.dropBankUpdateComp.labelCaption.string;
        data["cn"] = this.editNameUpdate.string;
        data["bnum"] = this.editNumberUpdate.string;
        data["br"] = this.editBranchUpdate.string;
        data["t"] = 1;
        data["id"] = this.idBankChosing;
        Http_1.default.get(Configs_1.default.App.API, data, function (err, res) {
            if (res.success) {
                //Utils.Log("UpdateBank success:", res);
                self.GetListBankProfile();
                self.HideBoxUpdate();
            }
            else {
                App_1.default.instance.alertDialog.showMsg(res.message);
            }
        });
    };
    __decorate([
        property(cc.EditBox)
    ], TabBank.prototype, "editBank", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabBank.prototype, "editName", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabBank.prototype, "editNumber", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabBank.prototype, "editBranch", void 0);
    __decorate([
        property(cc.Node)
    ], TabBank.prototype, "dropBank", void 0);
    __decorate([
        property(cc.Node)
    ], TabBank.prototype, "contentItem", void 0);
    __decorate([
        property(cc.Node)
    ], TabBank.prototype, "prefabItem", void 0);
    __decorate([
        property(cc.Label)
    ], TabBank.prototype, "lbNote1", void 0);
    __decorate([
        property(cc.Node)
    ], TabBank.prototype, "boxList", void 0);
    __decorate([
        property(cc.Node)
    ], TabBank.prototype, "boxListEmpty", void 0);
    __decorate([
        property(cc.Node)
    ], TabBank.prototype, "boxUpdate", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabBank.prototype, "editNameUpdate", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabBank.prototype, "editNumberUpdate", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabBank.prototype, "editBranchUpdate", void 0);
    __decorate([
        property(cc.Node)
    ], TabBank.prototype, "dropBankUpdate", void 0);
    __decorate([
        property(cc.Node)
    ], TabBank.prototype, "popupAddBank", void 0);
    TabBank = __decorate([
        ccclass("Lobby.PopupProfile.TabBank")
    ], TabBank);
    return TabBank;
}());
exports.TabBank = TabBank;
var PopupProfile = /** @class */ (function (_super) {
    __extends(PopupProfile, _super);
    function PopupProfile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tabs = null;
        _this.tabContents = null;
        _this.tabProfile = null;
        _this.tabVip = null;
        _this.tabBank = null;
        _this.popupUpdateInfo = null;
        _this.tabSelectedIdx = 0;
        return _this;
    }
    PopupProfile.prototype.start = function () {
        var _this = this;
        var _loop_2 = function (i) {
            this_1.tabs.toggleItems[i].node.on("toggle", function () {
                if (_this.tabSelectedIdx != i) {
                    _this.tabSelectedIdx = i;
                    _this.onTabChanged();
                }
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.tabs.toggleItems.length; i++) {
            _loop_2(i);
        }
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_INFO_UPDATED, function () {
            if (!_this.node.active)
                return;
            _this.tabProfile.spriteAvatar.spriteFrame = App_1.default.instance.getAvatarSpriteFrame(Configs_1.default.Login.Avatar);
        }, this);
        MiniGameNetworkClient_1.default.getInstance().addListener(function (data) {
            if (!_this.node.active)
                return;
            var inpacket = new Network_InPacket_1.default(data);
            //  //Utils.Log(inpacket.getCmdId());
            switch (inpacket.getCmdId()) {
                case Lobby_Cmd_1.default.Code.EXCHANGE_VIP_POINT: {
                    App_1.default.instance.showLoading(false);
                    var res = new Lobby_Cmd_1.default.ResExchangeVipPoint(data);
                    switch (res.error) {
                        case 0:
                            App_1.default.instance.alertDialog.showMsg("Vui lòng nhấn \"Lấy OTP\" hoặc nhận OTP qua APP OTP, và nhập để tiếp tục.");
                            break;
                        case 1:
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_room_err6"));
                            break;
                        case 2:
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_profile_note'));
                            break;
                        default:
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_unknown_error"));
                            break;
                    }
                    break;
                }
                case Lobby_Cmd_1.default.Code.RESULT_EXCHANGE_VIP_POINT: {
                    App_1.default.instance.showLoading(false);
                    var res = new Lobby_Cmd_1.default.ResResultExchangeVipPoint(data);
                    switch (res.error) {
                        case 0:
                            Configs_1.default.Login.Coin = res.currentMoney;
                            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_reward') + "\n" + Utils_1.default.formatNumber(res.moneyAdd) + " Xu");
                            break;
                        case 1:
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_room_err6"));
                            break;
                        case 2:
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_profile_note'));
                            break;
                        default:
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_unknown_error"));
                            break;
                    }
                    break;
                }
                case Lobby_Cmd_1.default.Code.GET_OTP: {
                    if (!_this.node.active)
                        return;
                    App_1.default.instance.showLoading(false);
                    var res = new Lobby_Cmd_1.default.ResGetOTP(data);
                    //  //Utils.Log(res);
                    if (res.error == 0) {
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_otp_send'));
                    }
                    else if (res.error == 30) {
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_otp_delay_time'));
                    }
                    else {
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_action_not_success'));
                    }
                    break;
                }
                case Lobby_Cmd_1.default.Code.SEND_OTP: {
                    var res = new Lobby_Cmd_1.default.ResSendOTP(data);
                    //  //Utils.Log(res);
                    App_1.default.instance.showLoading(false);
                    switch (res.error) {
                        case 0:
                            break;
                        case 1:
                        case 2:
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_error_exchange'));
                            break;
                        case 77:
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
                    break;
                }
                case Lobby_Cmd_1.default.Code.CHANGE_EMAIL: {
                    App_1.default.instance.showLoading(false);
                    var res = new Lobby_Cmd_1.default.ResChangeEmail(data);
                    _this.actCloseUpdateInfo();
                    if (res.error == 0) {
                        var lblEmail = _this.tabProfile.lblEmail;
                        lblEmail.enableItalic = false;
                        lblEmail.enableUnderline = false;
                        lblEmail.node.parent.getComponent(cc.Button).interactable = false;
                        lblEmail.node.color = cc.Color.WHITE;
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_profile_info_change'));
                        _this.tabProfile.lblEmail.string = _this.popupUpdateInfo.edbMail.string;
                    }
                    else {
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_unknown_error1'));
                    }
                    break;
                }
                case Lobby_Cmd_1.default.Code.UPDATE_USER_INFO: {
                    var res = new Lobby_Cmd_1.default.ResUpdateUserInfo(data);
                    _this.actCloseUpdateInfo();
                    if (res.error == 0) {
                        _this.tabProfile.lblEmail.string = _this.popupUpdateInfo.edbMail.string;
                        _this.tabProfile.lblAddress.string = _this.popupUpdateInfo.edbAddress.string;
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_profile_info_change'));
                        MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqGetSecurityInfo());
                    }
                    else {
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_unknown_error1'));
                    }
                    break;
                }
                case Lobby_Cmd_1.default.Code.GET_SECURITY_INFO: {
                    App_1.default.instance.showLoading(false);
                    var res = new Lobby_Cmd_1.default.ResGetSecurityInfo(data);
                    //Utils.Log("GET_SECURITY_INFO=", res);
                    Configs_1.default.Login.Mail = res.email;
                    Configs_1.default.Login.Address = res.address;
                    Configs_1.default.Login.Gender = res.gender;
                    var lblPhone = _this.tabProfile.lblPhone;
                    var lblEmail = _this.tabProfile.lblEmail;
                    var lblAddress = _this.tabProfile.lblAddress;
                    _this.popupUpdateInfo.refcode = res.refferalCode;
                    _this.tabProfile.lblGender.string = Configs_1.default.Login.Gender == true ? App_1.default.instance.getTextLang("txt_gender_male") : App_1.default.instance.getTextLang("txt_gender_female");
                    var msg = App_1.default.instance.getTextLang("txt_not_config");
                    var msg1 = App_1.default.instance.getTextLang("txt_not_update");
                    _this.tabProfile.lblRefcode.string = res.refferalCode != "" ? res.refferalCode : msg1;
                    lblPhone.string = res.mobile == "" ? msg : res.mobile.substring(0, res.mobile.length - 3) + "***";
                    lblPhone.enableItalic = res.mobile == "" ? true : false;
                    lblPhone.enableUnderline = res.mobile == "" ? true : false;
                    lblPhone.node.color = res.mobile == "" ? cc.Color.GREEN : cc.Color.WHITE;
                    lblEmail.string = res.email == "" ? msg1 : res.email;
                    _this.tabProfile.lblBirthday.string = res['birthday'] != "" ? res['birthday'].replace(/-/g, '/') : msg1;
                    lblAddress.string = Configs_1.default.Login.Address != "" ? Configs_1.default.Login.Address : msg1;
                    if (Configs_1.default.Login.Address == "") {
                        lblAddress.string = Configs_1.default.Login.FacebookID != "" ? App_1.default.instance.getTextLang('txt_profile_click') : msg1;
                    }
                    lblAddress.enableItalic = Configs_1.default.Login.FacebookID != "" ? true : false;
                    lblAddress.node.color = Configs_1.default.Login.FacebookID != "" ? cc.Color.GREEN : cc.Color.WHITE;
                    lblAddress.node.parent.getComponent(cc.Button).interactable = Configs_1.default.Login.FacebookID != "" ? true : false;
                    break;
                }
            }
        }, this);
    };
    PopupProfile.prototype.actRule = function () {
        App_1.default.instance.actRule();
        this.dismiss();
    };
    PopupProfile.prototype.onBtnChangePass = function () {
        App_1.default.instance.actChangePass();
    };
    PopupProfile.prototype.onBtnRefund = function () {
        this.dismiss();
        Global_1.Global.LobbyController.actRefund();
    };
    PopupProfile.prototype.onBtnHistory = function () {
        this.dismiss();
        Global_1.Global.LobbyController.actTransaction();
    };
    PopupProfile.prototype.onClickAddress = function () {
        cc.sys.openURL("https://www.facebook.com/" + Configs_1.default.Login.FacebookID);
    };
    PopupProfile.prototype.actChangeAvatar = function () {
        App_1.default.instance.actChangeAvatar();
    };
    PopupProfile.prototype.actUpdateInfo = function () {
        this.popupUpdateInfo.show();
    };
    PopupProfile.prototype.actSendUpdateInfo = function () {
        this.popupUpdateInfo.onClickUpdate();
    };
    PopupProfile.prototype.actCloseUpdateInfo = function () {
        this.popupUpdateInfo.dismiss();
    };
    PopupProfile.prototype.actChangeUserInfo = function (even, data) {
        //Utils.Log("Data==" + data);
        switch (data) {
            case "1": {
                Global_1.Global.LobbyController.actSecurity();
                this.dismiss();
                break;
            }
            case "2":
            case "3": {
                this.popupUpdateInfo.show();
                this.popupUpdateInfo.setInfo();
                break;
            }
        }
    };
    PopupProfile.prototype.actChooseGender = function (even, data) {
        this.popupUpdateInfo.onClickGender(data);
    };
    PopupProfile.prototype.show = function (tabIndex) {
        if (tabIndex === void 0) { tabIndex = 0; }
        _super.prototype.show.call(this);
        this.tabSelectedIdx = tabIndex;
        this.tabs.toggleItems[this.tabSelectedIdx].isChecked = true;
        this.onTabChanged();
    };
    PopupProfile.prototype.showTabBank = function () {
        _super.prototype.show.call(this);
        this.tabSelectedIdx = 2;
        this.tabs.toggleItems[this.tabSelectedIdx].isChecked = true;
        this.onTabChanged();
    };
    PopupProfile.prototype.actChoseItemBank = function () {
        this.tabBank.onBtnChoseItemBank();
    };
    PopupProfile.prototype.actEditBank = function () {
        this.tabBank.onChangeEditBank();
    };
    PopupProfile.prototype.actEditNumber = function () {
        this.tabBank.onChangeEditNumber();
    };
    PopupProfile.prototype.actEditNumberUpdate = function () {
        this.tabBank.onChangeEditNumberUpdate();
    };
    PopupProfile.prototype.actEditBranch = function () {
        this.tabBank.onChangeEditBranch();
    };
    PopupProfile.prototype.actEditBranchUpdate = function () {
        this.tabBank.onChangeEditBranchUpdate();
    };
    PopupProfile.prototype.actEditNameBank = function () {
        this.tabBank.onChangeEditName();
    };
    PopupProfile.prototype.actEditNameBankUpdate = function () {
        this.tabBank.onChangeEditNameUpdate();
    };
    PopupProfile.prototype.actHideUpdateBank = function () {
        this.tabBank.HideBoxUpdate();
    };
    PopupProfile.prototype.actHideAddBank = function () {
        this.tabBank.closeTabAddBank();
    };
    PopupProfile.prototype.actUpdateBank = function () {
        this.tabBank.UpdateBank();
    };
    PopupProfile.prototype.actCreateBank = function () {
        this.tabBank.CreateBank();
    };
    PopupProfile.prototype.actAddBankAccount = function () {
        this.tabBank.showPopupAddBank();
    };
    PopupProfile.prototype.actShowAddCoin = function () {
        this.dismiss();
        App_1.default.instance.popupShop.show();
    };
    PopupProfile.prototype.actGetOTP = function () {
        App_1.default.instance.showLoading(true);
        MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqGetOTP());
    };
    PopupProfile.prototype.onTabChanged = function () {
        for (var i = 0; i < this.tabContents.childrenCount; i++) {
            this.tabContents.children[i].active = i == this.tabSelectedIdx;
        }
        // for (let j = 0; j < this.tabs.toggleItems.length; j++) {
        //     this.tabs.toggleItems[j].node.getComponentInChildren(cc.Label).node.color = j == this.tabSelectedIdx ? cc.Color.YELLOW : cc.Color.WHITE;
        // }
        switch (this.tabSelectedIdx) {
            case 0:
                App_1.default.instance.showLoading(true);
                MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqGetSecurityInfo());
                this.tabProfile.lblNickname.string = Configs_1.default.Login.Nickname;
                this.tabProfile.lblChip.string = Utils_1.default.formatNumber(Configs_1.default.Login.Coin);
                this.tabProfile.lblVipPoint.string = "VP: " + Utils_1.default.formatNumber(Configs_1.default.Login.VipPoint) + "/" + Utils_1.default.formatNumber(Configs_1.default.Login.getVipPointNextLevel());
                this.tabProfile.lblVipName.string = Configs_1.default.Login.getVipPointName();
                this.tabProfile.sliderVipPoint.progress = Math.min(Configs_1.default.Login.VipPoint / Configs_1.default.Login.getVipPointNextLevel(), 1);
                this.tabProfile.spriteProgressVipPoint.fillRange = this.tabProfile.sliderVipPoint.progress;
                this.tabProfile.lblVipPointPercent.string = Math.floor(this.tabProfile.sliderVipPoint.progress * 100) + "%";
                this.tabProfile.spriteAvatar.spriteFrame = App_1.default.instance.getAvatarSpriteFrame(Configs_1.default.Login.Avatar);
                break;
            case 1:
                this.tabVip.getVipPointInfo();
                break;
            case 2:
                this.tabBank.show();
                break;
        }
    };
    __decorate([
        property(cc.ToggleContainer)
    ], PopupProfile.prototype, "tabs", void 0);
    __decorate([
        property(cc.Node)
    ], PopupProfile.prototype, "tabContents", void 0);
    __decorate([
        property(TabProfile)
    ], PopupProfile.prototype, "tabProfile", void 0);
    __decorate([
        property(TabVip)
    ], PopupProfile.prototype, "tabVip", void 0);
    __decorate([
        property(TabBank)
    ], PopupProfile.prototype, "tabBank", void 0);
    __decorate([
        property(PopupUpdateInfo)
    ], PopupProfile.prototype, "popupUpdateInfo", void 0);
    PopupProfile = __decorate([
        ccclass
    ], PopupProfile);
    return PopupProfile;
}(Dialog_1.default));
exports.default = PopupProfile;

cc._RF.pop();