"use strict";
cc._RF.push(module, '38d5aYoteVN0rb+NVYyNXJz', 'Lobby.PopupDaiLy');
// Lobby/LobbyScript/Lobby.PopupDaiLy.ts

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
var Configs_1 = require("../../Loading/src/Configs");
var Http_1 = require("../../Loading/src/Http");
var PopupConfirmTransfer_1 = require("./PopupConfirmTransfer");
var App_1 = require("./Script/common/App");
var Dialog_1 = require("./Script/common/Dialog");
var ScrollViewControl_1 = require("./Script/common/ScrollViewControl");
var Utils_1 = require("./Script/common/Utils");
var BundleControl_1 = require("../../Loading/src/BundleControl");
var TYPE_SEARCH = {
    NICKNAME: 0,
    SDT: 1,
    REGION: 2
};
var TAB = {
    CASHIN: 0,
    CASHOUT: 1,
    HISTORY: 2
};
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupDaiLy = /** @class */ (function (_super) {
    __extends(PopupDaiLy, _super);
    function PopupDaiLy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listAgency = [];
        _this.listBank = [];
        _this.listSearchAgency = [];
        _this.typeSearch = TYPE_SEARCH.REGION;
        _this.scrAgency = null;
        _this.scrBankList = null;
        _this.edbSearch = null;
        _this.edbMoney = null;
        _this.edbTransID = null;
        _this.lbChipReceive = null;
        _this.lblPage = null;
        _this.popupBankInfo = null;
        _this.popupConfirm = null;
        _this.dropBankUser = null;
        _this.nodeBankUser = null;
        _this.nodeBankAgency = null;
        _this.dropBankAgency = null;
        _this.nodeTransfer = null;
        _this.nodeHistory = null;
        _this.lbNameAgency = null;
        _this.lbNickname = null;
        _this.toggleDropBankUser = null;
        _this.toggleDropBankAgency = null;
        _this.toggleCashIn = null;
        _this.toggleCashOut = null;
        _this.itemHistoryContainer = null;
        _this.tab = 0;
        _this.currentDataDaily = null;
        _this.currentBankDaily = null;
        _this.currentDataUser = null;
        _this.page = 1;
        _this.maxPage = 1;
        return _this;
    }
    PopupDaiLy.prototype.show = function () {
        _super.prototype.show.call(this);
        if (typeof (this.tab) != "number") {
            this.tab = 0;
        }
        if (this.tab == 0) {
            this.toggleCashIn.isChecked = true;
            this.toggleCashIn.check();
            this.onChangeTab(null, this.tab);
        }
        else if (this.tab == 1) {
            this.toggleCashOut.isChecked = true;
            this.toggleCashOut.check();
            this.onChangeTab(null, this.tab);
        }
    };
    PopupDaiLy.prototype.dismiss = function () {
        _super.prototype.dismiss.call(this);
    };
    PopupDaiLy.prototype.onBtnCopy = function (obj, data) {
        Utils_1.default.copy(data);
        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_content_copied') + data);
    };
    PopupDaiLy.prototype._onShowed = function () {
        _super.prototype._onShowed.call(this);
    };
    PopupDaiLy.prototype.onEnable = function () {
        this.loadData();
        this.edbSearch.string = "";
    };
    PopupDaiLy.prototype.loadData = function () {
        var _this = this;
        //http://43.128.27.35:8081/api?c=2034&code=367457&key=&pg=1&mi=10&level=2
        App_1.default.instance.showLoading(true);
        this.listAgency = [];
        Http_1.default.get(Configs_1.default.App.API2, { "c": 2034, "nn": Configs_1.default.Login.Nickname }, function (err, res) {
            App_1.default.instance.showLoading(false);
            if (err != null)
                return;
            if (res["success"] && res['data'] != null) {
                //  cc.log(res);
                _this.listAgency = res['data'];
            }
            _this.scrAgency.setDataList(_this.setDataItem, _this.listAgency);
            //  cc.log("list Agency=", this.listAgency);
        });
        var data = {};
        data["c"] = 2008;
        data["nn"] = encodeURIComponent(Configs_1.default.Login.Nickname.trim());
        data["pn"] = 1;
        data["l"] = 10;
        Http_1.default.get(Configs_1.default.App.API2, data, function (err, res) {
            var list = JSON.parse(res.data).data;
            _this.setInfoDropBankUser(list);
        });
    };
    PopupDaiLy.prototype.setDataItem = function (item, data) {
        item.opacity = data['rank'] >= 1 ? 255 : 150;
        item.getChildByName('lbStt').getComponent(cc.Label).string = item['itemID'] + 1;
        item.getChildByName('lbName').getComponent(cc.Label).string = data['nameagent'];
        item.getChildByName('lbNickname').getComponent(cc.Label).string = data['nickname'];
        item.getChildByName('lbRegion').getComponent(cc.Label).string = data['address'];
        item.getChildByName('lbSdt').getComponent(cc.Label).string = data['phone'];
        item.getChildByName('bg').active = data['index'] % 2 == 0;
        item['data'] = data;
        item.active = true;
    };
    PopupDaiLy.prototype.setDataItemBank = function (item, data) {
        item.getChildByName('lbStt').getComponent(cc.Label).string = item['itemID'] + 1;
        item.getChildByName('lbAgencyCode').getComponent(cc.Label).string = data['agent_code'];
        item.getChildByName('lbBankAccount').getComponent(cc.Label).string = data['bank_acount'];
        item.getChildByName('lbBankName').getComponent(cc.Label).string = data['bank_name'];
        if (data['bank_name'].length > 30) {
            item.getChildByName('lbBankName').getComponent(cc.Label).string = data['bank_name'].slice(0, 27) + "...";
        }
        item.getChildByName('lbBranch').getComponent(cc.Label).string = data['bank_branch'];
        item.getChildByName('lbBankNumber').getComponent(cc.Label).string = data['bank_number'];
        item['data'] = data;
        item.active = true;
    };
    PopupDaiLy.prototype.onClickItemAgency = function (even) {
        //api?c=2033&code=367457&key=&nn=a&at=2&pg=1&mi=10",
        if (even.target['data'].rank < 1) {
            App_1.default.instance.showToast(App_1.default.instance.getTextLang('txt_agency_note1'));
        }
        else {
            var dataAgency = even.target['data'];
            //  cc.log("dataAgency:", dataAgency);
            this.currentDataDaily = dataAgency;
            this.lbNameAgency.string = dataAgency['nameagent'];
            this.lbNickname.string = dataAgency['nickname'];
            var listBankAgency = [];
            this.currentBankDaily = null;
            this.toggleDropBankAgency.isChecked = false;
            this.toggleDropBankAgency.node.parent.getChildByName('lbCurrentBank').getComponent('MultiLanguage').updateText();
            if (dataAgency['banks'] != null) {
                listBankAgency = JSON.parse(dataAgency['banks']);
            }
            this.setInfoDropBankAgency(listBankAgency);
        }
    };
    PopupDaiLy.prototype.onClickItemDetail = function (even) {
        var _this = this;
        var idAgency = even.target.parent['data']['code'];
        this.listBank = [];
        this.scrBankList.scrollView.content.children.forEach(function (item) {
            item.active = false;
        });
        Http_1.default.get(Configs_1.default.App.API2, { "c": 2033, "code": idAgency, "nn": Configs_1.default.Login.Nickname, "at": Configs_1.default.Login.AccessToken }, function (err, res) {
            App_1.default.instance.showLoading(false);
            //  cc.log(res);
            if (err != null)
                return;
            if (res["success"] && res['data'] != null) {
                _this.listBank = res['data'];
                _this.scrBankList.setDataList(_this.setDataItemBank, _this.listBank);
                _this.popupBankInfo.show();
            }
        });
    };
    PopupDaiLy.prototype.onClickSearch = function () {
        var _this = this;
        var keySearch = this.edbSearch.string.trim().toLowerCase();
        ;
        if (keySearch == "") {
            this.scrAgency.setDataList(this.setDataItem, this.listAgency);
            return;
        }
        var paramsSearch = "";
        this.listSearchAgency = [];
        if (this.typeSearch == TYPE_SEARCH.REGION) {
            paramsSearch = 'address';
        }
        else if (this.typeSearch == TYPE_SEARCH.NICKNAME) {
            paramsSearch = "nickname";
        }
        else {
            paramsSearch = "phone";
        }
        this.listAgency.forEach(function (item) {
            if (item[paramsSearch] != null) {
                if (item[paramsSearch].toLowerCase().includes(keySearch))
                    _this.listSearchAgency.push(item);
            }
        });
        this.scrAgency.setDataList(this.setDataItem, this.listSearchAgency);
    };
    PopupDaiLy.prototype.onClickTypeSearch = function (even, data) {
        this.typeSearch = parseInt(data);
    };
    PopupDaiLy.prototype.onEdbChange = function () {
        if (this.edbSearch.string.trim() == "") {
            this.scrAgency.setDataList(this.setDataItem, this.listAgency);
        }
    };
    PopupDaiLy.prototype.onClickFacebook = function (even) {
        var fbLink = even.target.parent['data']['facebook'];
        cc.sys.openURL(fbLink);
    };
    PopupDaiLy.prototype.onClickTelegram = function (even) {
        var tlLink = even.target.parent['data']['site'];
        cc.sys.openURL(tlLink);
    };
    PopupDaiLy.prototype.edbChanged = function () {
        this.lbChipReceive.string = this.edbMoney.string + " ROL";
    };
    PopupDaiLy.prototype.actBankUpdate = function () {
        var _this = this;
        var cb = function (prefab) {
            var popupProfile = cc.instantiate(prefab).getComponent("Lobby.PopupProfile");
            App_1.default.instance.canvas.addChild(popupProfile.node);
            _this.popupProfile = popupProfile;
            _this.popupProfile.showTabBank();
        };
        BundleControl_1.default.loadPrefabPopup("PrefabPopup/PopupProfile", cb);
    };
    PopupDaiLy.prototype.onClickConfirm = function () {
        var agencyName = this.lbNameAgency.string.trim();
        var nickname = this.lbNickname.string.trim();
        var amount = Utils_1.default.ToInt(this.edbMoney.string.trim());
        var transactionID = this.generateTransMsg();
        if (this.tab == TAB.CASHIN) {
            if (agencyName == "" || nickname == "" || amount == 0 || this.currentDataDaily == null || this.currentDataUser == null) {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_input_all'));
                return;
            }
            var dataCashIn = Object.create({});
            dataCashIn['nameagent'] = agencyName;
            dataCashIn['nickname'] = nickname;
            dataCashIn['amount'] = amount;
            dataCashIn['cid'] = transactionID;
            dataCashIn['usernamebank'] = this.currentDataUser['bankName'];
            dataCashIn['agencynamebank'] = this.currentBankDaily['bank_name'];
            dataCashIn['bank_number'] = this.currentBankDaily['bank_number'];
            dataCashIn['agencyID'] = this.currentDataDaily['code'];
            dataCashIn['userbanknumber'] = this.currentDataUser["bankNumber"];
            this.popupConfirm.setInfoCashIn(dataCashIn);
            this.popupConfirm.show();
        }
        else {
            if (agencyName == "" || nickname == "" || amount == 0) {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_input_all'));
                return;
            }
            var dataCashOut = Object.create({});
            dataCashOut['nameagent'] = agencyName;
            dataCashOut['nickname'] = nickname;
            dataCashOut['amount'] = amount;
            dataCashOut['agencyID'] = this.currentDataDaily['code'];
            dataCashOut['userbankname'] = this.currentDataUser["bankName"];
            dataCashOut['useraccountname'] = this.currentDataUser["customerName"];
            dataCashOut['userbanknumber'] = this.currentDataUser["bankNumber"];
            this.popupConfirm.setInfoCashOut(dataCashOut);
            this.popupConfirm.show();
        }
    };
    PopupDaiLy.prototype.setInfoDropBankUser = function (data) {
        //  cc.log("setInfoDropBankUser:", data);
        this.dropBankUser.children.forEach(function (item) {
            item.active = false;
        });
        for (var i = 0; i < data.length; i++) {
            var itemBank = this.dropBankUser.children[i];
            if (!cc.isValid(itemBank)) {
                itemBank = cc.instantiate(this.dropBankUser.children[0]);
                itemBank.parent = this.dropBankUser;
            }
            itemBank.active = true;
            itemBank.getComponentInChildren(cc.Label).string = data[i]['bankName'];
            itemBank['data'] = data[i];
        }
    };
    PopupDaiLy.prototype.setInfoDropBankAgency = function (data) {
        if (data.length > 0) {
            this.dropBankAgency.children.forEach(function (item) {
                item.active = false;
            });
            //  cc.log("data:", data);
            for (var i = 0; i < data.length; i++) {
                var itemBank = this.dropBankAgency.children[i];
                if (!cc.isValid(itemBank)) {
                    itemBank = cc.instantiate(this.dropBankAgency.children[0]);
                    itemBank.parent = this.dropBankAgency;
                }
                itemBank.active = true;
                itemBank.getComponentInChildren(cc.Label).string = data[i]['bank_name'];
                if (itemBank.getComponentInChildren(cc.Label).string.length > 20) {
                    itemBank.getComponentInChildren(cc.Label).string = itemBank.getComponentInChildren(cc.Label).string.slice(0, 20) + "...";
                }
                itemBank['data'] = data[i];
            }
        }
    };
    PopupDaiLy.prototype.onClickItemBankUser = function (even, data) {
        this.toggleDropBankUser.isChecked = false;
        //  cc.log("onClickItemBankUser:", even.target['data']);
        if (even.target['data'] != null) {
            this.toggleDropBankUser.node.parent.getChildByName('lbCurrentBank').getComponent(cc.Label).string = even.target['data']['bankName'];
            this.currentDataUser = even.target['data'];
        }
    };
    PopupDaiLy.prototype.onClickItemBankAgency = function (even, data) {
        this.toggleDropBankAgency.isChecked = false;
        if (even.target['data'] != null) {
            this.toggleDropBankAgency.node.parent.getChildByName('lbCurrentBank').getComponent(cc.Label).string = even.target['data']['bank_name'];
            this.currentBankDaily = even.target['data'];
        }
    };
    PopupDaiLy.prototype.onChangeTab = function (even, data) {
        //  cc.log("onchangetab");
        switch (parseInt(data)) {
            case TAB.CASHIN:
                this.tab = parseInt(data);
                this.nodeTransfer.active = true;
                this.nodeHistory.active = false;
                this.edbTransID.node.active = false;
                this.nodeBankUser.active = true;
                this.nodeBankAgency.active = true;
                this.maxPage = 1;
                this.page = 1;
                break;
            case TAB.CASHOUT:
                this.tab = parseInt(data);
                this.nodeTransfer.active = true;
                this.nodeHistory.active = false;
                this.edbTransID.node.active = false;
                this.nodeBankAgency.active = false;
                this.maxPage = 1;
                this.page = 1;
                break;
            case TAB.HISTORY:
                this.nodeTransfer.active = false;
                this.nodeHistory.active = true;
                this.loadDataHistory();
                break;
        }
    };
    PopupDaiLy.prototype.loadDataHistory = function () {
        var _this = this;
        var params;
        if (this.tab == 0) { //cashin
            params = { "c": 2016, "nn": Configs_1.default.Login.Nickname, "tt": 0, "p": this.page, "mi": 5 };
        }
        else { //cashout
            params = { "c": 2016, "nn": Configs_1.default.Login.Nickname, "tt": 1, "p": this.page, "mi": 5 };
        }
        Http_1.default.get(Configs_1.default.App.API2, params, function (err, res) {
            //  cc.log(res);
            App_1.default.instance.showLoading(false);
            if (err != null) {
                return;
            }
            if (res['success']) {
                if (res['totalRecords'] <= 5) {
                    _this.maxPage = 1;
                }
                else {
                    _this.maxPage = res['totalRecords'] % 5 == 0 ? (res['totalRecords'] % 5) : Math.floor(res['totalRecords'] / 5) + 1;
                }
                _this.lblPage.string = _this.page + "/" + _this.maxPage;
                _this.setHistory(res['data']);
            }
        });
    };
    PopupDaiLy.prototype.setHistory = function (data) {
        this.itemHistoryContainer.children.forEach(function (item) {
            item.active = false;
        });
        for (var i = 0; i < data.length; i++) {
            var item = this.itemHistoryContainer.children[i];
            if (!cc.isValid(item)) {
                item = cc.instantiate(this.itemHistoryContainer.children[0]);
                item.parent = this.itemHistoryContainer;
            }
            item.active = true;
            item.getChildByName('lbTime').getComponent(cc.Label).string = data[i]['CreatedAt'].replace(" ", "\n");
            item.getChildByName('lbBank').getComponent(cc.Label).string = data[i]['BankCode'];
            item.getChildByName('lbAmount').getComponent(cc.Label).string = Utils_1.default.formatMoney(data[i]['Amount']);
            switch (data[i]['Status']) {
                case 0:
                    item.getChildByName("lbStatus").getComponent(cc.Label).string = App_1.default.instance.getTextLang('txt_pending');
                    item.getChildByName("lbStatus").color = cc.Color.YELLOW;
                    break;
                case 2:
                    item.getChildByName("lbStatus").getComponent(cc.Label).string = App_1.default.instance.getTextLang('txt_success');
                    item.getChildByName("lbStatus").color = cc.Color.GREEN;
                    break;
                case 3:
                    item.getChildByName("lbStatus").getComponent(cc.Label).string = App_1.default.instance.getTextLang('txt_failed');
                    item.getChildByName("lbStatus").color = cc.Color.RED;
                    break;
                case 4:
                    item.getChildByName("lbStatus").getComponent(cc.Label).string = App_1.default.instance.getTextLang('txt_completed');
                    item.getChildByName("lbStatus").color = cc.Color.GREEN;
                    break;
                case 12:
                    item.getChildByName("lbStatus").getComponent(cc.Label).string = App_1.default.instance.getTextLang('txt_request_cashout');
                    item.getChildByName("lbStatus").color = cc.Color.CYAN;
                    break;
                default:
                    item.getChildByName("lbStatus").getComponent(cc.Label).string = App_1.default.instance.getTextLang('txt_receive2');
                    item.getChildByName("lbStatus").color = cc.Color.WHITE;
            }
        }
    };
    PopupDaiLy.prototype.actNextPage = function () {
        if (this.page < this.maxPage) {
            this.page++;
            this.lblPage.string = this.page + "/" + this.maxPage;
            this.loadDataHistory();
        }
    };
    PopupDaiLy.prototype.actPrevPage = function () {
        if (this.page > 1) {
            this.page--;
            this.lblPage.string = this.page + "/" + this.maxPage;
            this.loadDataHistory();
        }
    };
    PopupDaiLy.prototype.generateTransMsg = function () {
        return (Configs_1.default.Login.Nickname + "-ROY88");
    };
    __decorate([
        property(ScrollViewControl_1.default)
    ], PopupDaiLy.prototype, "scrAgency", void 0);
    __decorate([
        property(ScrollViewControl_1.default)
    ], PopupDaiLy.prototype, "scrBankList", void 0);
    __decorate([
        property(cc.EditBox)
    ], PopupDaiLy.prototype, "edbSearch", void 0);
    __decorate([
        property(cc.EditBox)
    ], PopupDaiLy.prototype, "edbMoney", void 0);
    __decorate([
        property(cc.EditBox)
    ], PopupDaiLy.prototype, "edbTransID", void 0);
    __decorate([
        property(cc.Label)
    ], PopupDaiLy.prototype, "lbChipReceive", void 0);
    __decorate([
        property(cc.Label)
    ], PopupDaiLy.prototype, "lblPage", void 0);
    __decorate([
        property(Dialog_1.default)
    ], PopupDaiLy.prototype, "popupBankInfo", void 0);
    __decorate([
        property(PopupConfirmTransfer_1.default)
    ], PopupDaiLy.prototype, "popupConfirm", void 0);
    __decorate([
        property(cc.Node)
    ], PopupDaiLy.prototype, "dropBankUser", void 0);
    __decorate([
        property(cc.Node)
    ], PopupDaiLy.prototype, "nodeBankUser", void 0);
    __decorate([
        property(cc.Node)
    ], PopupDaiLy.prototype, "nodeBankAgency", void 0);
    __decorate([
        property(cc.Node)
    ], PopupDaiLy.prototype, "dropBankAgency", void 0);
    __decorate([
        property(cc.Node)
    ], PopupDaiLy.prototype, "nodeTransfer", void 0);
    __decorate([
        property(cc.Node)
    ], PopupDaiLy.prototype, "nodeHistory", void 0);
    __decorate([
        property(cc.Label)
    ], PopupDaiLy.prototype, "lbNameAgency", void 0);
    __decorate([
        property(cc.Label)
    ], PopupDaiLy.prototype, "lbNickname", void 0);
    __decorate([
        property(cc.Toggle)
    ], PopupDaiLy.prototype, "toggleDropBankUser", void 0);
    __decorate([
        property(cc.Toggle)
    ], PopupDaiLy.prototype, "toggleDropBankAgency", void 0);
    __decorate([
        property(cc.Toggle)
    ], PopupDaiLy.prototype, "toggleCashIn", void 0);
    __decorate([
        property(cc.Toggle)
    ], PopupDaiLy.prototype, "toggleCashOut", void 0);
    __decorate([
        property(cc.Node)
    ], PopupDaiLy.prototype, "itemHistoryContainer", void 0);
    PopupDaiLy = __decorate([
        ccclass
    ], PopupDaiLy);
    return PopupDaiLy;
}(Dialog_1.default));
exports.default = PopupDaiLy;

cc._RF.pop();