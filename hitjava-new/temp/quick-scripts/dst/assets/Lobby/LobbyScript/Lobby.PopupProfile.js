
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.PopupProfile.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5Qb3B1cFByb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHFEQUFnRDtBQUNoRCxtREFBa0Q7QUFDbEQsK0NBQTBDO0FBQzFDLHlDQUE4QjtBQUM5QiwyQ0FBc0M7QUFDdEMsdUVBQWtFO0FBQ2xFLGlEQUE0QztBQUM1QywrQ0FBMEM7QUFDMUMsaUZBQTRFO0FBQzVFLHVFQUEwRDtBQUVwRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFBO1FBRUksZ0JBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0IsWUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixnQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixhQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGNBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsZ0JBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0IsdUJBQWtCLEdBQWEsSUFBSSxDQUFDO1FBRXBDLGFBQVEsR0FBYSxJQUFJLENBQUM7UUFFMUIsZUFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixlQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLGVBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsbUJBQWMsR0FBYyxJQUFJLENBQUM7UUFFakMsMkJBQXNCLEdBQWMsSUFBSSxDQUFDO1FBR3pDLGlCQUFZLEdBQWMsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUE1Qkc7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDVTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNNO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ1U7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFD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QUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxXQUFXLEdBQUcsYUFBRyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbkcsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUM5QixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3BCLE1BQU07U0FDYjtJQUNMLENBQUM7SUE1VUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQzs4Q0FDRztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLFVBQVUsQ0FBQztvREFDUztJQUU5QjtRQURDLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0RBQ0s7SUFFdEI7UUFEQyxRQUFRLENBQUMsT0FBTyxDQUFDO2lEQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLGVBQWUsQ0FBQzt5REFDYztJQWJ2QixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBK1VoQztJQUFELG1CQUFDO0NBL1VELEFBK1VDLENBL1V5QyxnQkFBTSxHQStVL0M7a0JBL1VvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgRHJvcERvd24gZnJvbSBcIi4uLy4uL0xvYWRpbmcvQWRkLW9uL0Ryb3BEb3duL1NjcmlwdC9Ecm9wRG93blwiO1xuaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9HbG9iYWxcIjtcbmltcG9ydCBIdHRwIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9IdHRwXCI7XG5pbXBvcnQgY21kIGZyb20gXCIuL0xvYmJ5LkNtZFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IEJyb2FkY2FzdFJlY2VpdmVyIGZyb20gXCIuL1NjcmlwdC9jb21tb24vQnJvYWRjYXN0UmVjZWl2ZXJcIjtcbmltcG9ydCBEaWFsb2cgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9EaWFsb2dcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgTWluaUdhbWVOZXR3b3JrQ2xpZW50IGZyb20gXCIuL1NjcmlwdC9uZXR3b3Jrcy9NaW5pR2FtZU5ldHdvcmtDbGllbnRcIjtcbmltcG9ydCBJblBhY2tldCBmcm9tIFwiLi9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5JblBhY2tldFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzcyhcIkxvYmJ5LlBvcHVwUHJvZmlsZS5UYWJQcm9maWxlXCIpXG5leHBvcnQgY2xhc3MgVGFiUHJvZmlsZSB7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibE5pY2tuYW1lOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibENoaXA6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsVmlwUG9pbnQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsRW1haWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsR2VuZGVyOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibEJpcnRoZGF5OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFZpcFBvaW50UGVyY2VudDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxQaG9uZTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxBZGRyZXNzOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFJlZmNvZGU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsVmlwTmFtZTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TbGlkZXIpXG4gICAgc2xpZGVyVmlwUG9pbnQ6IGNjLlNsaWRlciA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBzcHJpdGVQcm9ncmVzc1ZpcFBvaW50OiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBzcHJpdGVBdmF0YXI6IGNjLlNwcml0ZSA9IG51bGw7XG59XG5cbkBjY2NsYXNzKFwiTG9iYnkuUG9wdXBQcm9maWxlLlBvcHVwVXBkYXRlSW5mb1wiKVxuZXhwb3J0IGNsYXNzIFBvcHVwVXBkYXRlSW5mbyB7XG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgZWRiTWFpbDogY2MuRWRpdEJveCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgZWRiQWRkcmVzczogY2MuRWRpdEJveCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgZWRiQmlydGhkYXk6IGNjLkVkaXRCb3ggPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIGVkYlJlZkNvZGU6IGNjLkVkaXRCb3ggPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGVDb250YWluZXIpXG4gICAgdG9nZ2xlQ29udGFpbmVyOiBjYy5Ub2dnbGVDb250YWluZXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJnOiBjYy5Ob2RlID0gbnVsbDtcbiAgICB0eXBlID0gMTsvLzEtYWRkcmVzcywyLUVtYWlsO1xuICAgIGdlbmRlciA9IDE7XG4gICAgcmVmY29kZSA9IFwiXCI7XG5cbiAgICBzZXRJbmZvKCkge1xuICAgICAgICB0aGlzLmVkYkJpcnRoZGF5LnN0cmluZyA9IENvbmZpZ3MuTG9naW4uQmlydGhkYXk7XG4gICAgICAgIHRoaXMuZWRiQWRkcmVzcy5zdHJpbmcgPSBDb25maWdzLkxvZ2luLkFkZHJlc3M7XG4gICAgICAgIHRoaXMuZWRiTWFpbC5zdHJpbmcgPSBDb25maWdzLkxvZ2luLk1haWw7XG4gICAgICAgIHRoaXMuZWRiUmVmQ29kZS5zdHJpbmcgPSB0aGlzLnJlZmNvZGU7XG4gICAgICAgIGlmIChDb25maWdzLkxvZ2luLkdlbmRlcikge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVDb250YWluZXIubm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuVG9nZ2xlKS5pc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVDb250YWluZXIubm9kZS5jaGlsZHJlblsyXS5nZXRDb21wb25lbnQoY2MuVG9nZ2xlKS5pc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpc21pc3MoKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuYmcpLnRvKDAuMywgeyBzY2FsZTogMC44LCBvcGFjaXR5OiAxNTAgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5iYWNrSW4gfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJnLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5iZy5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5iZykuc2V0KHsgc2NhbGU6IDAuOCwgb3BhY2l0eTogMTUwIH0pLnRvKDAuMywgeyBzY2FsZTogMSwgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuYmFja091dCB9KS5zdGFydCgpO1xuICAgIH1cbiAgICBvbkNsaWNrVXBkYXRlKCkge1xuICAgICAgICAvLyB0aGlzLmRpc21pc3MoKTtcbiAgICAgICAgLy8gaWYgKHRoaXMuZWRiQmlydGhkYXkuc3RyaW5nID09IFwiXCIgJiYgdGhpcy5lZGJBZGRyZXNzLnN0cmluZyA9PSBcIlwiICYmIHRoaXMuZWRiTWFpbC5zdHJpbmcgPT0gXCJcIikge1xuICAgICAgICAvLyAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X2lucHV0X2FsbFwiKSk7XG4gICAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAgIC8vIH1cblxuICAgICAgICBsZXQgYmlydGhkYXkgPSB0aGlzLmVkYkJpcnRoZGF5LnN0cmluZy50cmltKCk7XG4gICAgICAgIGxldCBhZGRyZXNzID0gdGhpcy5lZGJBZGRyZXNzLnN0cmluZy50cmltKCk7XG4gICAgICAgIGxldCBtYWlsID0gdGhpcy5lZGJNYWlsLnN0cmluZy50cmltKCk7XG4gICAgICAgIGxldCByZWZDb2RlID0gdGhpcy5lZGJSZWZDb2RlLnN0cmluZy50cmltKCk7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGlmIChiaXJ0aGRheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGJpcnRoZGF5Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChiaXJ0aGRheVtpXSA9PSBcIi1cIilcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoY291bnQgPCAyKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X2Vycm9yX2JpcnRoZGF5XCIpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlJlcVVwZGF0ZVVzZXJJbmZvKG1haWwsIGJpcnRoZGF5LCBhZGRyZXNzLCB0aGlzLmdlbmRlciwgcmVmQ29kZSkpO1xuICAgIH1cbiAgICBvbkNsaWNrR2VuZGVyKGRhdGEpIHtcbiAgICAgICAgdGhpcy5nZW5kZXIgPSBwYXJzZUludChkYXRhKTtcbiAgICB9XG59XG5AY2NjbGFzcyhcIkxvYmJ5LlBvcHVwUHJvZmlsZS5UYWJWaXBcIilcbmV4cG9ydCBjbGFzcyBUYWJWaXAge1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxWaXBQb2ludE5hbWU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsVmlwUG9pbnQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsVG90YWxWaXBQb2ludDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxWaXBQb2ludE5leHRMZXZlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgc3ByaXRlUHJvZ3Jlc3NWaXBQb2ludDogY2MuU3ByaXRlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpdGVtczogY2MuTm9kZSA9IG51bGw7XG5cblxuICAgIGdldFZpcFBvaW50SW5mbygpIHtcbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHsgXCJjXCI6IDEyNiwgXCJublwiOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChlcnIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcmVzW1wic3VjY2Vzc1wiXSkge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiTOG7l2kga+G6v3QgbuG7kWksIHZ1aSBsw7JuZyB0aOG7rSBs4bqhaS5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9VdGlscy5Mb2coXCJnZXRWaXBQb2ludEluZm86XCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uVmlwUG9pbnQgPSByZXNbXCJ2aXBwb2ludFwiXTtcbiAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uVmlwUG9pbnRTYXZlID0gcmVzW1widmlwcG9pbnRTYXZlXCJdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtcy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBpZiAoaSA8IHJlc1tcInJhdGlvTGlzdFwiXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImxibFZpcFBvaW50XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKENvbmZpZ3MuTG9naW4uVmlwUG9pbnRzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImxibENvaW5cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoQ29uZmlncy5Mb2dpbi5WaXBQb2ludCAqIHJlc1tcInJhdGlvTGlzdFwiXVtpXSk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJidG5SZWNlaXZlXCIpLmFjdGl2ZSA9IHJlc1tcInJhdGlvTGlzdFwiXVtpXSA+IDA7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJidG5SZWNlaXZlXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGkgPT0gQ29uZmlncy5Mb2dpbi5nZXRWaXBQb2ludEluZGV4KCkgJiYgQ29uZmlncy5Mb2dpbi5WaXBQb2ludCA+IDA7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJidG5SZWNlaXZlXCIpLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLm5vZGUuY29sb3IgPSBpID09IENvbmZpZ3MuTG9naW4uZ2V0VmlwUG9pbnRJbmRleCgpID8gY2MuQ29sb3IuWUVMTE9XIDogY2MuQ29sb3IuR1JBWTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImJ0blJlY2VpdmVcIikub2ZmKFwiY2xpY2tcIik7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJidG5SZWNlaXZlXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmNvbmZpcm1EaWFsb2cuc2hvdzIoXCJC4bqhbiBjw7MgY2jhuq9jIGNo4bqvbiBtdeG7kW4gbmjhuq1uIHRoxrDhu59uZyB2aXBwb2ludFxcblTGsMahbmcg4bupbmcgduG7m2kgY+G6pXAgVmlwcG9pbnQgaGnhu4duIHThuqFpIGLhuqFuIG5o4bqtbiDEkcaw4bujYyA6XFxuXCIgKyBVdGlscy5mb3JtYXROdW1iZXIoQ29uZmlncy5Mb2dpbi5WaXBQb2ludCAqIHJlc1tcInJhdGlvTGlzdFwiXVtpXSkgKyBcIiBYdVwiLCAoaXNDb25maXJtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ29uZmlybSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5SZXFFeGNoYW5nZVZpcFBvaW50KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmxibFZpcFBvaW50TmFtZS5zdHJpbmcgPSBDb25maWdzLkxvZ2luLmdldFZpcFBvaW50TmFtZSgpO1xuICAgICAgICAgICAgdGhpcy5sYmxWaXBQb2ludC5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoQ29uZmlncy5Mb2dpbi5WaXBQb2ludCk7XG4gICAgICAgICAgICB0aGlzLmxibFRvdGFsVmlwUG9pbnQuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKENvbmZpZ3MuTG9naW4uVmlwUG9pbnRTYXZlKTtcbiAgICAgICAgICAgIHRoaXMubGJsVmlwUG9pbnROZXh0TGV2ZWwuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKENvbmZpZ3MuTG9naW4uZ2V0VmlwUG9pbnROZXh0TGV2ZWwoKSk7XG5cbiAgICAgICAgICAgIC8vIGxldCBWaXBQb2ludHMgPSBbODAsIDgwMCwgNDUwMCwgODYwMCwgNTAwMDAsIDEwMDAwMDBdO1xuICAgICAgICAgICAgbGV0IFZpcFBvaW50cyA9IENvbmZpZ3MuTG9naW4uVmlwUG9pbnRzO1xuICAgICAgICAgICAgbGV0IHZpcFBvaW50SWR4ID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBWaXBQb2ludHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoQ29uZmlncy5Mb2dpbi5WaXBQb2ludCA+IFZpcFBvaW50c1tpXSkge1xuICAgICAgICAgICAgICAgICAgICB2aXBQb2ludElkeCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHZpcFBvaW50TmV4dExldmVsID0gVmlwUG9pbnRzWzBdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IFZpcFBvaW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGlmIChDb25maWdzLkxvZ2luLlZpcFBvaW50ID4gVmlwUG9pbnRzW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09IFZpcFBvaW50cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXBQb2ludE5leHRMZXZlbCA9IFZpcFBvaW50c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZpcFBvaW50TmV4dExldmVsID0gVmlwUG9pbnRzW2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdmlwUG9pbnRTdGFydExldmVsID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBWaXBQb2ludHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoQ29uZmlncy5Mb2dpbi5WaXBQb2ludCA+IFZpcFBvaW50c1tpXSkge1xuICAgICAgICAgICAgICAgICAgICB2aXBQb2ludFN0YXJ0TGV2ZWwgPSBWaXBQb2ludHNbaV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkZWx0YSA9IChDb25maWdzLkxvZ2luLlZpcFBvaW50IC0gdmlwUG9pbnRTdGFydExldmVsKSAvICh2aXBQb2ludE5leHRMZXZlbCAtIHZpcFBvaW50U3RhcnRMZXZlbCk7XG4gICAgICAgICAgICAvL1V0aWxzLkxvZyhcImRlbHRhOiBcIiArIGRlbHRhKTtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlUHJvZ3Jlc3NWaXBQb2ludC5maWxsUmFuZ2UgPSAodmlwUG9pbnRJZHggKyAxIC8gNikgKyBkZWx0YSAqICgxIC8gNik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG59XG5cbkBjY2NsYXNzKFwiTG9iYnkuUG9wdXBQcm9maWxlLlRhYkJhbmtcIilcbmV4cG9ydCBjbGFzcyBUYWJCYW5rIHtcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBlZGl0QmFuazogY2MuRWRpdEJveCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgZWRpdE5hbWU6IGNjLkVkaXRCb3ggPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIGVkaXROdW1iZXI6IGNjLkVkaXRCb3ggPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIGVkaXRCcmFuY2g6IGNjLkVkaXRCb3ggPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGRyb3BCYW5rOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb250ZW50SXRlbTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJlZmFiSXRlbTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJOb3RlMTogY2MuTGFiZWwgPSBudWxsO1xuXG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBib3hMaXN0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBib3hMaXN0RW1wdHk6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYm94VXBkYXRlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBlZGl0TmFtZVVwZGF0ZTogY2MuRWRpdEJveCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgZWRpdE51bWJlclVwZGF0ZTogY2MuRWRpdEJveCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgZWRpdEJyYW5jaFVwZGF0ZTogY2MuRWRpdEJveCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZHJvcEJhbmtVcGRhdGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBvcHVwQWRkQmFuazogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIGlkQmFua0Nob3NpbmcgPSAtMTtcbiAgICBwcml2YXRlIGxpc3RCYW5rO1xuICAgIGRyb3BCYW5rQ29tcDogRHJvcERvd24gPSBudWxsO1xuICAgIGRyb3BCYW5rVXBkYXRlQ29tcDogRHJvcERvd24gPSBudWxsO1xuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMuZWRpdEJhbmsubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy5kcm9wQmFuayA9IHRoaXMuZHJvcEJhbmtDb21wLmdldENvbXBvbmVudChcIkRyb3BEb3duXCIpO1xuICAgICAgICB0aGlzLmRyb3BCYW5rLm9uKFwidG91Y2hlbmRcIiwgdGhpcy5vbkNsaWNrQmFuaywgdGhpcyk7XG4gICAgICAgIHRoaXMuZHJvcEJhbmtDb21wID0gdGhpcy5kcm9wQmFuay5nZXRDb21wb25lbnQoXCJEcm9wRG93blwiKTtcbiAgICAgICAgdGhpcy5kcm9wQmFua1VwZGF0ZUNvbXAgPSB0aGlzLmRyb3BCYW5rVXBkYXRlLmdldENvbXBvbmVudChcIkRyb3BEb3duXCIpO1xuICAgICAgICB0aGlzLmVkaXROYW1lLnN0cmluZyA9IFwiXCI7XG4gICAgICAgIHRoaXMuZWRpdE51bWJlci5zdHJpbmcgPSBcIlwiO1xuICAgICAgICB0aGlzLmVkaXRCcmFuY2guc3RyaW5nID0gXCJcIjtcblxuICAgICAgICB0aGlzLmxvYWRCYW5rTGlzdCgpO1xuICAgICAgICB0aGlzLkdldExpc3RCYW5rUHJvZmlsZSgpO1xuXG5cbiAgICB9XG5cbiAgICBwdWJsaWMgb25DbGlja0JhbmsoKSB7XG4gICAgICAgIC8vVXRpbHMuTG9nKFwib25DbGlja0Jhbms6XCIgKyB0aGlzLmRyb3BCYW5rQ29tcC5pc1Nob3cpO1xuICAgICAgICBpZiAoIXRoaXMuZHJvcEJhbmtDb21wLmlzU2hvdykge1xuICAgICAgICAgICAgdGhpcy5lZGl0QmFuay5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmVkaXRCYW5rLmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVkaXRCYW5rLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93UG9wdXBBZGRCYW5rKCkge1xuICAgICAgICB0aGlzLnBvcHVwQWRkQmFuay5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBjYy50d2Vlbih0aGlzLnBvcHVwQWRkQmFuaykuc2V0KHsgc2NhbGU6IDAuOCwgb3BhY2l0eTogMjU1IH0pLnRvKDAuMywgeyBzY2FsZTogMS4wLCBvcGFjaXR5OiAyNTUgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5iYWNrT3V0IH0pLnN0YXJ0KCk7XG4gICAgfVxuICAgIGNsb3NlVGFiQWRkQmFuaygpIHtcbiAgICAgICAgY2MudHdlZW4odGhpcy5wb3B1cEFkZEJhbmspLnRvKDAuMywgeyBzY2FsZTogMC44LCBvcGFjaXR5OiAxNTAgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5iYWNrSW4gfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwQWRkQmFuay5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG4gICAgbG9hZEJhbmtMaXN0KCkge1xuICAgICAgICB2YXIgZGF0YSA9IHt9O1xuICAgICAgICBkYXRhW1wiY1wiXSA9IDIwMTE7XG4gICAgICAgIEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSSwgZGF0YSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAvL1V0aWxzLkxvZyhcImxvYWRCYW5rTGlzdDpcIiArIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgICAgICAgdGhpcy5saXN0QmFuayA9IHJlcy5iYW5rLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICB2YXIgZGF0YXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgIHRoaXMubGlzdEJhbmsuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhLmNoYXJDb2RlQXQoMCkgLSBiLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RCYW5rLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZGF0YXMucHVzaCh7IG9wdGlvblN0cmluZzogdGhpcy5saXN0QmFua1tpXSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZHJvcEJhbmtDb21wLmNsZWFyT3B0aW9uRGF0YXMoKTtcbiAgICAgICAgICAgIHRoaXMuZHJvcEJhbmtDb21wLmFkZE9wdGlvbkRhdGFzKGRhdGFzKTtcbiAgICAgICAgICAgIHRoaXMuZHJvcEJhbmtDb21wLnNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIEdldExpc3RCYW5rUHJvZmlsZSgpIHtcbiAgICAgICAgdGhpcy5jb250ZW50SXRlbS5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBkYXRhID0ge307XG4gICAgICAgIGRhdGFbXCJjXCJdID0gMjAwODtcbiAgICAgICAgZGF0YVtcIm5uXCJdID0gZW5jb2RlVVJJQ29tcG9uZW50KENvbmZpZ3MuTG9naW4uTmlja25hbWUudHJpbSgpKTtcbiAgICAgICAgZGF0YVtcInBuXCJdID0gMTtcbiAgICAgICAgZGF0YVtcImxcIl0gPSAxMDtcbiAgICAgICAgSHR0cC5nZXQoQ29uZmlncy5BcHAuQVBJLCBkYXRhLCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gSlNPTi5wYXJzZShyZXMuZGF0YSkuZGF0YTtcbiAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uTGlzdEJhbmtSdXQgPSBsaXN0O1xuICAgICAgICAgICAgaWYgKHJlcyA9PSBudWxsIHx8IGxpc3QubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICBzZWxmLmJveExpc3QuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2VsZi5ib3hMaXN0RW1wdHkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYuYm94TGlzdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlbGYuYm94TGlzdEVtcHR5LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxldCB0eHROb3RlMSA9IEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9wcm9maWxlX25vdGVfYmFuazFcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5sYk5vdGUxLnN0cmluZyA9IHR4dE5vdGUxLnJlcGxhY2UoXCIlc1wiLCBsaXN0Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub2RlSXRlbSA9IGNjLmluc3RhbnRpYXRlKHNlbGYucHJlZmFiSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVJdGVtLnBhcmVudCA9IHNlbGYuY29udGVudEl0ZW07XG4gICAgICAgICAgICAgICAgICAgIG5vZGVJdGVtLnNldFBvc2l0aW9uKGNjLnYyKDAsIDApKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZUl0ZW0uZ2V0Q29tcG9uZW50KFwiSXRlbUJhbmtQcm9maWxlXCIpLmluaXQobGlzdFtpXSwgc2VsZik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgQ3JlYXRlQmFuaygpIHtcbiAgICAgICAgaWYgKHRoaXMuZWRpdE5hbWUuc3RyaW5nID09IFwiXCIgfHwgdGhpcy5lZGl0TnVtYmVyLnN0cmluZyA9PSBcIlwiIHx8IHRoaXMuZWRpdEJyYW5jaC5zdHJpbmcgPT0gXCJcIikge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X2lucHV0X2FsbFwiKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZWRpdE5hbWUuc3RyaW5nLmluZGV4T2YoJyAnKSA9PSAtMSkge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9naW5fYWNjb3VudF9ub3RfYmxhbmsnKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgZGF0YSA9IHt9O1xuICAgICAgICBkYXRhW1wiY1wiXSA9IDIwMDc7XG4gICAgICAgIGRhdGFbXCJublwiXSA9IGVuY29kZVVSSUNvbXBvbmVudChDb25maWdzLkxvZ2luLk5pY2tuYW1lLnRyaW0oKSk7XG4gICAgICAgIGRhdGFbXCJiblwiXSA9IGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmRyb3BCYW5rQ29tcC5sYWJlbENhcHRpb24uc3RyaW5nLnRyaW0oKSk7O1xuICAgICAgICBkYXRhW1wiY25cIl0gPSBlbmNvZGVVUklDb21wb25lbnQodGhpcy5lZGl0TmFtZS5zdHJpbmcudHJpbSgpKTtcbiAgICAgICAgZGF0YVtcImJudW1cIl0gPSB0aGlzLmVkaXROdW1iZXIuc3RyaW5nO1xuICAgICAgICBkYXRhW1wiYnJcIl0gPSBlbmNvZGVVUklDb21wb25lbnQodGhpcy5lZGl0QnJhbmNoLnN0cmluZy50cmltKCkpOztcbiAgICAgICAgZGF0YVtcInRcIl0gPSAwO1xuICAgICAgICAvL1V0aWxzLkxvZyhcIkNyZWF0ZUJhbms6XCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgIEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSSwgZGF0YSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAvL1V0aWxzLkxvZyhcInJlc3BvbnNlIENyZWF0ZUJhbms6XCIgKyBKU09OLnN0cmluZ2lmeShlcnIpICsgXCIgOiBcIiArIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgICAgICAgdGhpcy5jbG9zZVRhYkFkZEJhbmsoKTtcbiAgICAgICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHNlbGYuR2V0TGlzdEJhbmtQcm9maWxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhyZXMubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbiAgICB9XG5cblxuXG4gICAgbG9hZEJhbmtVcGRhdGVMaXN0KCkge1xuICAgICAgICB2YXIgZGF0YXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RCYW5rLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkYXRhcy5wdXNoKHsgb3B0aW9uU3RyaW5nOiB0aGlzLmxpc3RCYW5rW2ldIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJvcEJhbmtVcGRhdGVDb21wLmNsZWFyT3B0aW9uRGF0YXMoKTtcbiAgICAgICAgdGhpcy5kcm9wQmFua1VwZGF0ZUNvbXAuYWRkT3B0aW9uRGF0YXMoZGF0YXMpO1xuICAgICAgICB0aGlzLmRyb3BCYW5rVXBkYXRlQ29tcC5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICB9XG5cbiAgICBTaG93Qm94VXBkYXRlKGRhdGFJdGVtKSB7XG4gICAgICAgIHRoaXMubG9hZEJhbmtVcGRhdGVMaXN0KCk7XG4gICAgICAgIHRoaXMuYm94VXBkYXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHZhciBpbmRleEJhbmsgPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdEJhbmsubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RCYW5rW2ldID09IGRhdGFJdGVtLmJhbmtOYW1lKSB7XG4gICAgICAgICAgICAgICAgaW5kZXhCYW5rID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyb3BCYW5rVXBkYXRlQ29tcC5zZWxlY3RlZEluZGV4ID0gaW5kZXhCYW5rO1xuICAgICAgICB0aGlzLmRyb3BCYW5rVXBkYXRlQ29tcC5sYWJlbENhcHRpb24uc3RyaW5nID0gZGF0YUl0ZW0uYmFua05hbWU7XG4gICAgICAgIHRoaXMuZWRpdE5hbWVVcGRhdGUuc3RyaW5nID0gZGF0YUl0ZW0uY3VzdG9tZXJOYW1lO1xuICAgICAgICB0aGlzLmVkaXROdW1iZXJVcGRhdGUuc3RyaW5nID0gZGF0YUl0ZW0uYmFua051bWJlcjtcbiAgICAgICAgdGhpcy5lZGl0QnJhbmNoVXBkYXRlLnN0cmluZyA9IGRhdGFJdGVtLmJyYW5jaDtcbiAgICAgICAgdGhpcy5pZEJhbmtDaG9zaW5nID0gZGF0YUl0ZW0uaWQ7XG5cbiAgICB9XG5cbiAgICBvbkNoYW5nZUVkaXRCYW5rKCkge1xuICAgICAgICAvLyAgLy9VdGlscy5Mb2coXCJ2YW8gZGF5IG5lOlwiICsgdGhpcy5lZGl0QmFuay5zdHJpbmcgKyBcIjpcIiArIHRoaXMuZWRpdEJhbmsubm9kZS5hY3RpdmUpO1xuICAgICAgICB2YXIgZGF0YXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RCYW5rLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyAgLy9VdGlscy5Mb2coXCJmaWxlcjpcIiArIGkgKyBcIjpcIiArIHRoaXMuZWRpdEJhbmsuc3RyaW5nICsgXCI6XCIgKyB0aGlzLmxpc3RCYW5rW2ldLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgaWYgKHRoaXMubGlzdEJhbmtbaV0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLmVkaXRCYW5rLnN0cmluZy50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgICAgIC8vVXRpbHMuTG9nKFwibWF0Y2g6XCIgKyB0aGlzLmxpc3RCYW5rW2ldKTtcbiAgICAgICAgICAgICAgICBkYXRhcy5wdXNoKHsgb3B0aW9uU3RyaW5nOiB0aGlzLmxpc3RCYW5rW2ldIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vVXRpbHMuTG9nKFwibG9hZDpcIiArIEpTT04uc3RyaW5naWZ5KGRhdGFzKSk7XG4gICAgICAgIHRoaXMuZHJvcEJhbmtDb21wLmhpZGUoKTtcbiAgICAgICAgdGhpcy5kcm9wQmFua0NvbXAuY2xlYXJPcHRpb25EYXRhcygpO1xuICAgICAgICB0aGlzLmRyb3BCYW5rQ29tcC5hZGRPcHRpb25EYXRhcyhkYXRhcyk7XG4gICAgICAgIHRoaXMuZHJvcEJhbmtDb21wLnNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgICB0aGlzLmRyb3BCYW5rQ29tcC5zaG93KCk7XG4gICAgfVxuXG4gICAgb25CdG5DaG9zZUl0ZW1CYW5rKCkge1xuICAgICAgICB0aGlzLmVkaXRCYW5rLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZHJvcEJhbmtDb21wLmhpZGUoKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZUVkaXROdW1iZXIoKSB7XG4gICAgICAgIHRoaXMuZWRpdE51bWJlci5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXJCYW5rKHRoaXMuZWRpdE51bWJlci5zdHJpbmcpLnRvVXBwZXJDYXNlKCk7XG5cbiAgICB9XG5cbiAgICBvbkNoYW5nZUVkaXROdW1iZXJVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMuZWRpdE51bWJlclVwZGF0ZS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXJCYW5rKHRoaXMuZWRpdE51bWJlclVwZGF0ZS5zdHJpbmcpLnRvVXBwZXJDYXNlKCk7XG5cbiAgICB9XG5cbiAgICBvbkNoYW5nZUVkaXRCcmFuY2goKSB7XG4gICAgICAgIHRoaXMuZWRpdEJyYW5jaC5zdHJpbmcgPSBVdGlscy5mb3JtYXROYW1lQmFuayh0aGlzLmVkaXRCcmFuY2guc3RyaW5nKS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgfVxuXG4gICAgb25DaGFuZ2VFZGl0QnJhbmNoVXBkYXRlKCkge1xuICAgICAgICB0aGlzLmVkaXRCcmFuY2hVcGRhdGUuc3RyaW5nID0gVXRpbHMuZm9ybWF0TmFtZUJhbmsodGhpcy5lZGl0QnJhbmNoVXBkYXRlLnN0cmluZykudG9VcHBlckNhc2UoKTtcblxuICAgIH1cblxuICAgIG9uQ2hhbmdlRWRpdE5hbWUoKSB7XG4gICAgICAgIHRoaXMuZWRpdE5hbWUuc3RyaW5nID0gVXRpbHMuZm9ybWF0TmFtZUJhbmsodGhpcy5lZGl0TmFtZS5zdHJpbmcpLnRvVXBwZXJDYXNlKCk7XG5cbiAgICB9XG5cbiAgICBvbkNoYW5nZUVkaXROYW1lVXBkYXRlKCkge1xuICAgICAgICB0aGlzLmVkaXROYW1lVXBkYXRlLnN0cmluZyA9IFV0aWxzLmZvcm1hdE5hbWVCYW5rKHRoaXMuZWRpdE5hbWVVcGRhdGUuc3RyaW5nKS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgfVxuXG4gICAgSGlkZUJveFVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5ib3hVcGRhdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaWRCYW5rQ2hvc2luZyA9IC0xO1xuICAgIH1cblxuICAgIFVwZGF0ZUJhbmsoKSB7XG4gICAgICAgIC8vVXRpbHMuTG9nKFwiVXBkYXRlQmFuazpcIiArIHRoaXMuZWRpdE5hbWVVcGRhdGUuc3RyaW5nICsgXCI6XCIgKyB0aGlzLmVkaXROdW1iZXJVcGRhdGUuc3RyaW5nICsgXCI6XCIgKyB0aGlzLmVkaXRCcmFuY2hVcGRhdGUuc3RyaW5nICsgXCI6XCIgKyB0aGlzLmRyb3BCYW5rVXBkYXRlLnNlbGVjdGVkSW5kZXggKyBcIjpcIiArIHRoaXMuaWRCYW5rQ2hvc2luZyk7XG4gICAgICAgIGlmICh0aGlzLmVkaXROYW1lVXBkYXRlLnN0cmluZyA9PSBcIlwiIHx8IHRoaXMuZWRpdE51bWJlclVwZGF0ZS5zdHJpbmcgPT0gXCJcIiB8fCB0aGlzLmVkaXRCcmFuY2hVcGRhdGUuc3RyaW5nID09IFwiXCIgfHwgdGhpcy5pZEJhbmtDaG9zaW5nID09IC0xKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIlZ1aSBsw7JuZyDEkWnhu4FuIMSR4bqneSDEkeG7pyB0aMO0bmcgdGluLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lZGl0TmFtZS5zdHJpbmcuaW5kZXhPZignICcpID09IC0xKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIkNo4bunIHTDoGkga2hv4bqjbiBi4bqvdCBideG7mWMgcGjhuqNpIGPDsyAxIGtob+G6o25nIHRy4bqvbmcuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGRhdGEgPSB7fTtcbiAgICAgICAgZGF0YVtcImNcIl0gPSAyMDA3O1xuICAgICAgICBkYXRhW1wibm5cIl0gPSBDb25maWdzLkxvZ2luLk5pY2tuYW1lO1xuICAgICAgICBkYXRhW1wiYm5cIl0gPSB0aGlzLmRyb3BCYW5rVXBkYXRlQ29tcC5sYWJlbENhcHRpb24uc3RyaW5nO1xuICAgICAgICBkYXRhW1wiY25cIl0gPSB0aGlzLmVkaXROYW1lVXBkYXRlLnN0cmluZztcbiAgICAgICAgZGF0YVtcImJudW1cIl0gPSB0aGlzLmVkaXROdW1iZXJVcGRhdGUuc3RyaW5nO1xuICAgICAgICBkYXRhW1wiYnJcIl0gPSB0aGlzLmVkaXRCcmFuY2hVcGRhdGUuc3RyaW5nO1xuICAgICAgICBkYXRhW1widFwiXSA9IDE7XG4gICAgICAgIGRhdGFbXCJpZFwiXSA9IHRoaXMuaWRCYW5rQ2hvc2luZztcbiAgICAgICAgSHR0cC5nZXQoQ29uZmlncy5BcHAuQVBJLCBkYXRhLCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIC8vVXRpbHMuTG9nKFwiVXBkYXRlQmFuayBzdWNjZXNzOlwiLCByZXMpO1xuICAgICAgICAgICAgICAgIHNlbGYuR2V0TGlzdEJhbmtQcm9maWxlKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5IaWRlQm94VXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhyZXMubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFByb2ZpbGUgZXh0ZW5kcyBEaWFsb2cge1xuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGVDb250YWluZXIpXG4gICAgdGFiczogY2MuVG9nZ2xlQ29udGFpbmVyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0YWJDb250ZW50czogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoVGFiUHJvZmlsZSlcbiAgICB0YWJQcm9maWxlOiBUYWJQcm9maWxlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoVGFiVmlwKVxuICAgIHRhYlZpcDogVGFiVmlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoVGFiQmFuaylcbiAgICB0YWJCYW5rOiBUYWJCYW5rID0gbnVsbDtcbiAgICBAcHJvcGVydHkoUG9wdXBVcGRhdGVJbmZvKVxuICAgIHBvcHVwVXBkYXRlSW5mbzogUG9wdXBVcGRhdGVJbmZvID0gbnVsbDtcblxuICAgIHByaXZhdGUgdGFiU2VsZWN0ZWRJZHggPSAwO1xuXG5cbiAgICBzdGFydCgpIHtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFicy50b2dnbGVJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy50YWJzLnRvZ2dsZUl0ZW1zW2ldLm5vZGUub24oXCJ0b2dnbGVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhYlNlbGVjdGVkSWR4ICE9IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJTZWxlY3RlZElkeCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25UYWJDaGFuZ2VkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIucmVnaXN0ZXIoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9JTkZPX1VQREFURUQsICgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5ub2RlLmFjdGl2ZSkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy50YWJQcm9maWxlLnNwcml0ZUF2YXRhci5zcHJpdGVGcmFtZSA9IEFwcC5pbnN0YW5jZS5nZXRBdmF0YXJTcHJpdGVGcmFtZShDb25maWdzLkxvZ2luLkF2YXRhcik7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmFkZExpc3RlbmVyKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHJldHVybjtcbiAgICAgICAgICAgIGxldCBpbnBhY2tldCA9IG5ldyBJblBhY2tldChkYXRhKTtcbiAgICAgICAgICAgIC8vICAvL1V0aWxzLkxvZyhpbnBhY2tldC5nZXRDbWRJZCgpKTtcbiAgICAgICAgICAgIHN3aXRjaCAoaW5wYWNrZXQuZ2V0Q21kSWQoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuRVhDSEFOR0VfVklQX1BPSU5UOiB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlc0V4Y2hhbmdlVmlwUG9pbnQoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJWdWkgbMOybmcgbmjhuqVuIFxcXCJM4bqleSBPVFBcXFwiIGhv4bq3YyBuaOG6rW4gT1RQIHF1YSBBUFAgT1RQLCB2w6Agbmjhuq1wIMSR4buDIHRp4bq/cCB04bulYy5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X3Jvb21fZXJyNlwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfcHJvZmlsZV9ub3RlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfdW5rbm93bl9lcnJvclwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuUkVTVUxUX0VYQ0hBTkdFX1ZJUF9QT0lOVDoge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZXNSZXN1bHRFeGNoYW5nZVZpcFBvaW50KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlcy5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQ29pbiA9IHJlcy5jdXJyZW50TW9uZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9yZXdhcmQnKSArIFwiXFxuXCIgKyBVdGlscy5mb3JtYXROdW1iZXIocmVzLm1vbmV5QWRkKSArIFwiIFh1XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9yb29tX2VycjZcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Byb2ZpbGVfbm90ZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X3Vua25vd25fZXJyb3JcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkdFVF9PVFA6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLm5vZGUuYWN0aXZlKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlc0dldE9UUChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gIC8vVXRpbHMuTG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZXJyb3IgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfb3RwX3NlbmQnKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmVycm9yID09IDMwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9vdHBfZGVsYXlfdGltZScpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2FjdGlvbl9ub3Rfc3VjY2VzcycpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5TRU5EX09UUDoge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZXNTZW5kT1RQKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgLy9VdGlscy5Mb2cocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZXMuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9lcnJvcl9leGNoYW5nZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNzc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9naW5fYWNjb3VudF9pbmNvcnJlY3Rfb3RwJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvZ2luX2FjY291bnRfZXhwaXJlZF9vdHAnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Vua25vd25fZXJyb3InKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuQ0hBTkdFX0VNQUlMOiB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlc0NoYW5nZUVtYWlsKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdENsb3NlVXBkYXRlSW5mbygpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmVycm9yID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYmxFbWFpbCA9IHRoaXMudGFiUHJvZmlsZS5sYmxFbWFpbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxibEVtYWlsLmVuYWJsZUl0YWxpYyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGJsRW1haWwuZW5hYmxlVW5kZXJsaW5lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYmxFbWFpbC5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxibEVtYWlsLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Byb2ZpbGVfaW5mb19jaGFuZ2UnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYlByb2ZpbGUubGJsRW1haWwuc3RyaW5nID0gdGhpcy5wb3B1cFVwZGF0ZUluZm8uZWRiTWFpbC5zdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF91bmtub3duX2Vycm9yMScpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5VUERBVEVfVVNFUl9JTkZPOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlc1VwZGF0ZVVzZXJJbmZvKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdENsb3NlVXBkYXRlSW5mbygpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmVycm9yID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFiUHJvZmlsZS5sYmxFbWFpbC5zdHJpbmcgPSB0aGlzLnBvcHVwVXBkYXRlSW5mby5lZGJNYWlsLnN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFiUHJvZmlsZS5sYmxBZGRyZXNzLnN0cmluZyA9IHRoaXMucG9wdXBVcGRhdGVJbmZvLmVkYkFkZHJlc3Muc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfcHJvZmlsZV9pbmZvX2NoYW5nZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5SZXFHZXRTZWN1cml0eUluZm8oKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF91bmtub3duX2Vycm9yMScpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5HRVRfU0VDVVJJVFlfSU5GTzoge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZXNHZXRTZWN1cml0eUluZm8oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIC8vVXRpbHMuTG9nKFwiR0VUX1NFQ1VSSVRZX0lORk89XCIsIHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uTWFpbCA9IHJlcy5lbWFpbDtcbiAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5BZGRyZXNzID0gcmVzLmFkZHJlc3M7XG4gICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uR2VuZGVyID0gcmVzLmdlbmRlcjtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxibFBob25lID0gdGhpcy50YWJQcm9maWxlLmxibFBob25lO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGJsRW1haWwgPSB0aGlzLnRhYlByb2ZpbGUubGJsRW1haWw7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsYmxBZGRyZXNzID0gdGhpcy50YWJQcm9maWxlLmxibEFkZHJlc3M7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXBVcGRhdGVJbmZvLnJlZmNvZGUgPSByZXMucmVmZmVyYWxDb2RlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYlByb2ZpbGUubGJsR2VuZGVyLnN0cmluZyA9IENvbmZpZ3MuTG9naW4uR2VuZGVyID09IHRydWUgPyBBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfZ2VuZGVyX21hbGVcIikgOiBBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfZ2VuZGVyX2ZlbWFsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1zZyA9IEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9ub3RfY29uZmlnXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbXNnMSA9IEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9ub3RfdXBkYXRlXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYlByb2ZpbGUubGJsUmVmY29kZS5zdHJpbmcgPSByZXMucmVmZmVyYWxDb2RlICE9IFwiXCIgPyByZXMucmVmZmVyYWxDb2RlIDogbXNnMTtcbiAgICAgICAgICAgICAgICAgICAgbGJsUGhvbmUuc3RyaW5nID0gcmVzLm1vYmlsZSA9PSBcIlwiID8gbXNnIDogcmVzLm1vYmlsZS5zdWJzdHJpbmcoMCwgcmVzLm1vYmlsZS5sZW5ndGggLSAzKSArIFwiKioqXCI7XG4gICAgICAgICAgICAgICAgICAgIGxibFBob25lLmVuYWJsZUl0YWxpYyA9IHJlcy5tb2JpbGUgPT0gXCJcIiA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbGJsUGhvbmUuZW5hYmxlVW5kZXJsaW5lID0gcmVzLm1vYmlsZSA9PSBcIlwiID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBsYmxQaG9uZS5ub2RlLmNvbG9yID0gcmVzLm1vYmlsZSA9PSBcIlwiID8gY2MuQ29sb3IuR1JFRU4gOiBjYy5Db2xvci5XSElURTtcbiAgICAgICAgICAgICAgICAgICAgbGJsRW1haWwuc3RyaW5nID0gcmVzLmVtYWlsID09IFwiXCIgPyBtc2cxIDogcmVzLmVtYWlsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYlByb2ZpbGUubGJsQmlydGhkYXkuc3RyaW5nID0gcmVzWydiaXJ0aGRheSddICE9IFwiXCIgPyByZXNbJ2JpcnRoZGF5J10ucmVwbGFjZSgvLS9nLCAnLycpIDogbXNnMTtcblxuXG4gICAgICAgICAgICAgICAgICAgIGxibEFkZHJlc3Muc3RyaW5nID0gQ29uZmlncy5Mb2dpbi5BZGRyZXNzICE9IFwiXCIgPyBDb25maWdzLkxvZ2luLkFkZHJlc3MgOiBtc2cxO1xuICAgICAgICAgICAgICAgICAgICBpZiAoQ29uZmlncy5Mb2dpbi5BZGRyZXNzID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxibEFkZHJlc3Muc3RyaW5nID0gQ29uZmlncy5Mb2dpbi5GYWNlYm9va0lEICE9IFwiXCIgPyBBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9wcm9maWxlX2NsaWNrJykgOiBtc2cxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxibEFkZHJlc3MuZW5hYmxlSXRhbGljID0gQ29uZmlncy5Mb2dpbi5GYWNlYm9va0lEICE9IFwiXCIgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGxibEFkZHJlc3Mubm9kZS5jb2xvciA9IENvbmZpZ3MuTG9naW4uRmFjZWJvb2tJRCAhPSBcIlwiID8gY2MuQ29sb3IuR1JFRU4gOiBjYy5Db2xvci5XSElURTtcbiAgICAgICAgICAgICAgICAgICAgbGJsQWRkcmVzcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBDb25maWdzLkxvZ2luLkZhY2Vib29rSUQgIT0gXCJcIiA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICBhY3RSdWxlKCkge1xuICAgICAgICBBcHAuaW5zdGFuY2UuYWN0UnVsZSgpO1xuICAgICAgICB0aGlzLmRpc21pc3MoKTtcbiAgICB9XG5cbiAgICBvbkJ0bkNoYW5nZVBhc3MoKSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5hY3RDaGFuZ2VQYXNzKCk7XG4gICAgfVxuICAgIG9uQnRuUmVmdW5kKCkge1xuICAgICAgICB0aGlzLmRpc21pc3MoKTtcbiAgICAgICAgR2xvYmFsLkxvYmJ5Q29udHJvbGxlci5hY3RSZWZ1bmQoKTtcbiAgICB9XG5cdG9uQnRuSGlzdG9yeSgpIHtcbiAgICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgICAgIEdsb2JhbC5Mb2JieUNvbnRyb2xsZXIuYWN0VHJhbnNhY3Rpb24oKTtcbiAgICB9XG4gICAgb25DbGlja0FkZHJlc3MoKSB7XG4gICAgICAgIGNjLnN5cy5vcGVuVVJMKFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL1wiICsgQ29uZmlncy5Mb2dpbi5GYWNlYm9va0lEKTtcbiAgICB9XG4gICAgYWN0Q2hhbmdlQXZhdGFyKCkge1xuICAgICAgICBBcHAuaW5zdGFuY2UuYWN0Q2hhbmdlQXZhdGFyKCk7XG4gICAgfVxuICAgIGFjdFVwZGF0ZUluZm8oKSB7XG4gICAgICAgIHRoaXMucG9wdXBVcGRhdGVJbmZvLnNob3coKTtcbiAgICB9XG4gICAgYWN0U2VuZFVwZGF0ZUluZm8oKSB7XG4gICAgICAgIHRoaXMucG9wdXBVcGRhdGVJbmZvLm9uQ2xpY2tVcGRhdGUoKTtcbiAgICB9XG4gICAgYWN0Q2xvc2VVcGRhdGVJbmZvKCkge1xuICAgICAgICB0aGlzLnBvcHVwVXBkYXRlSW5mby5kaXNtaXNzKCk7XG4gICAgfVxuICAgIGFjdENoYW5nZVVzZXJJbmZvKGV2ZW4sIGRhdGEpIHtcbiAgICAgICAgLy9VdGlscy5Mb2coXCJEYXRhPT1cIiArIGRhdGEpO1xuICAgICAgICBzd2l0Y2ggKGRhdGEpIHtcbiAgICAgICAgICAgIGNhc2UgXCIxXCI6IHtcbiAgICAgICAgICAgICAgICBHbG9iYWwuTG9iYnlDb250cm9sbGVyLmFjdFNlY3VyaXR5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiMlwiOlxuICAgICAgICAgICAgY2FzZSBcIjNcIjoge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBVcGRhdGVJbmZvLnNob3coKVxuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBVcGRhdGVJbmZvLnNldEluZm8oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBhY3RDaG9vc2VHZW5kZXIoZXZlbiwgZGF0YSkge1xuICAgICAgICB0aGlzLnBvcHVwVXBkYXRlSW5mby5vbkNsaWNrR2VuZGVyKGRhdGEpO1xuICAgIH1cbiAgICBzaG93KHRhYkluZGV4ID0gMCkge1xuICAgICAgICBzdXBlci5zaG93KCk7XG4gICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJZHggPSB0YWJJbmRleDtcbiAgICAgICAgdGhpcy50YWJzLnRvZ2dsZUl0ZW1zW3RoaXMudGFiU2VsZWN0ZWRJZHhdLmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgIHRoaXMub25UYWJDaGFuZ2VkKCk7XG4gICAgfVxuXG4gICAgc2hvd1RhYkJhbmsoKSB7XG4gICAgICAgIHN1cGVyLnNob3coKTtcblxuICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSWR4ID0gMjtcbiAgICAgICAgdGhpcy50YWJzLnRvZ2dsZUl0ZW1zW3RoaXMudGFiU2VsZWN0ZWRJZHhdLmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgIHRoaXMub25UYWJDaGFuZ2VkKCk7XG4gICAgfVxuXG4gICAgYWN0Q2hvc2VJdGVtQmFuaygpIHtcbiAgICAgICAgdGhpcy50YWJCYW5rLm9uQnRuQ2hvc2VJdGVtQmFuaygpO1xuICAgIH1cblxuICAgIGFjdEVkaXRCYW5rKCkge1xuICAgICAgICB0aGlzLnRhYkJhbmsub25DaGFuZ2VFZGl0QmFuaygpO1xuICAgIH1cblxuICAgIGFjdEVkaXROdW1iZXIoKSB7XG4gICAgICAgIHRoaXMudGFiQmFuay5vbkNoYW5nZUVkaXROdW1iZXIoKTtcbiAgICB9XG5cbiAgICBhY3RFZGl0TnVtYmVyVXBkYXRlKCkge1xuICAgICAgICB0aGlzLnRhYkJhbmsub25DaGFuZ2VFZGl0TnVtYmVyVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgYWN0RWRpdEJyYW5jaCgpIHtcbiAgICAgICAgdGhpcy50YWJCYW5rLm9uQ2hhbmdlRWRpdEJyYW5jaCgpO1xuICAgIH1cblxuICAgIGFjdEVkaXRCcmFuY2hVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMudGFiQmFuay5vbkNoYW5nZUVkaXRCcmFuY2hVcGRhdGUoKTtcbiAgICB9XG5cbiAgICBhY3RFZGl0TmFtZUJhbmsoKSB7XG4gICAgICAgIHRoaXMudGFiQmFuay5vbkNoYW5nZUVkaXROYW1lKCk7XG4gICAgfVxuXG4gICAgYWN0RWRpdE5hbWVCYW5rVXBkYXRlKCkge1xuICAgICAgICB0aGlzLnRhYkJhbmsub25DaGFuZ2VFZGl0TmFtZVVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGFjdEhpZGVVcGRhdGVCYW5rKCkge1xuICAgICAgICB0aGlzLnRhYkJhbmsuSGlkZUJveFVwZGF0ZSgpO1xuICAgIH1cbiAgICBhY3RIaWRlQWRkQmFuaygpIHtcbiAgICAgICAgdGhpcy50YWJCYW5rLmNsb3NlVGFiQWRkQmFuaygpO1xuICAgIH1cbiAgICBhY3RVcGRhdGVCYW5rKCkge1xuICAgICAgICB0aGlzLnRhYkJhbmsuVXBkYXRlQmFuaygpO1xuICAgIH1cblxuICAgIGFjdENyZWF0ZUJhbmsoKSB7XG4gICAgICAgIHRoaXMudGFiQmFuay5DcmVhdGVCYW5rKCk7XG4gICAgfVxuICAgIGFjdEFkZEJhbmtBY2NvdW50KCkge1xuICAgICAgICB0aGlzLnRhYkJhbmsuc2hvd1BvcHVwQWRkQmFuaygpO1xuICAgIH1cbiAgICBhY3RTaG93QWRkQ29pbigpIHtcbiAgICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5wb3B1cFNob3Auc2hvdygpO1xuICAgIH1cblxuXG5cbiAgICBhY3RHZXRPVFAoKSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlJlcUdldE9UUCgpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVGFiQ2hhbmdlZCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhYkNvbnRlbnRzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy50YWJDb250ZW50cy5jaGlsZHJlbltpXS5hY3RpdmUgPSBpID09IHRoaXMudGFiU2VsZWN0ZWRJZHg7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnRhYnMudG9nZ2xlSXRlbXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgLy8gICAgIHRoaXMudGFicy50b2dnbGVJdGVtc1tqXS5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLm5vZGUuY29sb3IgPSBqID09IHRoaXMudGFiU2VsZWN0ZWRJZHggPyBjYy5Db2xvci5ZRUxMT1cgOiBjYy5Db2xvci5XSElURTtcbiAgICAgICAgLy8gfVxuICAgICAgICBzd2l0Y2ggKHRoaXMudGFiU2VsZWN0ZWRJZHgpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlJlcUdldFNlY3VyaXR5SW5mbygpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYlByb2ZpbGUubGJsTmlja25hbWUuc3RyaW5nID0gQ29uZmlncy5Mb2dpbi5OaWNrbmFtZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYlByb2ZpbGUubGJsQ2hpcC5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoQ29uZmlncy5Mb2dpbi5Db2luKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYlByb2ZpbGUubGJsVmlwUG9pbnQuc3RyaW5nID0gXCJWUDogXCIgKyBVdGlscy5mb3JtYXROdW1iZXIoQ29uZmlncy5Mb2dpbi5WaXBQb2ludCkgKyBcIi9cIiArIFV0aWxzLmZvcm1hdE51bWJlcihDb25maWdzLkxvZ2luLmdldFZpcFBvaW50TmV4dExldmVsKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMudGFiUHJvZmlsZS5sYmxWaXBOYW1lLnN0cmluZyA9IENvbmZpZ3MuTG9naW4uZ2V0VmlwUG9pbnROYW1lKCk7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJQcm9maWxlLnNsaWRlclZpcFBvaW50LnByb2dyZXNzID0gTWF0aC5taW4oQ29uZmlncy5Mb2dpbi5WaXBQb2ludCAvIENvbmZpZ3MuTG9naW4uZ2V0VmlwUG9pbnROZXh0TGV2ZWwoKSwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJQcm9maWxlLnNwcml0ZVByb2dyZXNzVmlwUG9pbnQuZmlsbFJhbmdlID0gdGhpcy50YWJQcm9maWxlLnNsaWRlclZpcFBvaW50LnByb2dyZXNzO1xuICAgICAgICAgICAgICAgIHRoaXMudGFiUHJvZmlsZS5sYmxWaXBQb2ludFBlcmNlbnQuc3RyaW5nID0gTWF0aC5mbG9vcih0aGlzLnRhYlByb2ZpbGUuc2xpZGVyVmlwUG9pbnQucHJvZ3Jlc3MgKiAxMDApICsgXCIlXCI7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJQcm9maWxlLnNwcml0ZUF2YXRhci5zcHJpdGVGcmFtZSA9IEFwcC5pbnN0YW5jZS5nZXRBdmF0YXJTcHJpdGVGcmFtZShDb25maWdzLkxvZ2luLkF2YXRhcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdGhpcy50YWJWaXAuZ2V0VmlwUG9pbnRJbmZvKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGhpcy50YWJCYW5rLnNob3coKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==