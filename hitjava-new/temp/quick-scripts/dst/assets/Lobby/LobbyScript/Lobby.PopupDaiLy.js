
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.PopupDaiLy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5Qb3B1cERhaUx5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUNoRCwrQ0FBMEM7QUFDMUMsK0RBQTBEO0FBQzFELDJDQUFzQztBQUN0QyxpREFBNEM7QUFDNUMsdUVBQWtFO0FBQ2xFLCtDQUEwQztBQUMxQyxpRUFBNEQ7QUFDNUQsSUFBSSxXQUFXLEdBQUc7SUFDZCxRQUFRLEVBQUUsQ0FBQztJQUNYLEdBQUcsRUFBRSxDQUFDO0lBQ04sTUFBTSxFQUFFLENBQUM7Q0FDWixDQUFBO0FBQ0QsSUFBSSxHQUFHLEdBQUc7SUFDTixNQUFNLEVBQUUsQ0FBQztJQUNULE9BQU8sRUFBRSxDQUFDO0lBQ1YsT0FBTyxFQUFFLENBQUM7Q0FDYixDQUFBO0FBQ0ssSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQU07SUFBOUM7UUFBQSxxRUE0Y0M7UUExY0csZ0JBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsY0FBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLHNCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUN0QixnQkFBVSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFFaEMsZUFBUyxHQUFzQixJQUFJLENBQUM7UUFHcEMsaUJBQVcsR0FBc0IsSUFBSSxDQUFDO1FBR3RDLGVBQVMsR0FBZSxJQUFJLENBQUM7UUFHN0IsY0FBUSxHQUFlLElBQUksQ0FBQztRQUc1QixnQkFBVSxHQUFlLElBQUksQ0FBQztRQUc5QixtQkFBYSxHQUFhLElBQUksQ0FBQztRQUUvQixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBR3pCLG1CQUFhLEdBQVcsSUFBSSxDQUFDO1FBRzdCLGtCQUFZLEdBQXlCLElBQUksQ0FBQztRQUcxQyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUcvQixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUcvQixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5QixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUc1Qix3QkFBa0IsR0FBYyxJQUFJLENBQUM7UUFFckMsMEJBQW9CLEdBQWMsSUFBSSxDQUFDO1FBRXZDLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRS9CLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBRWhDLDBCQUFvQixHQUFZLElBQUksQ0FBQztRQUVyQyxTQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1Isc0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLHNCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixxQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixVQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsYUFBTyxHQUFHLENBQUMsQ0FBQzs7SUFxWWhCLENBQUM7SUFwWUcseUJBQUksR0FBSjtRQUNJLGlCQUFNLElBQUksV0FBRSxDQUFDO1FBQ2IsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFFBQVEsRUFBRTtZQUMvQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNoQjtRQUNELElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUU7WUFDZixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDbkM7YUFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtTQUNuQztJQUNMLENBQUM7SUFDRCw0QkFBTyxHQUFQO1FBQ0ksaUJBQU0sT0FBTyxXQUFFLENBQUM7SUFFcEIsQ0FBQztJQUNELDhCQUFTLEdBQVQsVUFBVSxHQUFHLEVBQUUsSUFBSTtRQUNmLGVBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakIsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUNELDhCQUFTLEdBQVQ7UUFDSSxpQkFBTSxTQUFTLFdBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ0QsNkJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUNELDZCQUFRLEdBQVI7UUFBQSxpQkF1QkM7UUF0QkcseUVBQXlFO1FBQ3pFLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLGNBQUksQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsaUJBQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztZQUM3RSxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoQyxJQUFJLEdBQUcsSUFBSSxJQUFJO2dCQUFFLE9BQU87WUFDeEIsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRTtnQkFDdkMsZ0JBQWdCO2dCQUNoQixLQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNqQztZQUNELEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzlELDRDQUE0QztRQUNoRCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLGtCQUFrQixDQUFDLGlCQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2YsY0FBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7WUFDdEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxnQ0FBVyxHQUFYLFVBQVksSUFBSSxFQUFFLElBQUk7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUM3QyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDO0lBQ0Qsb0NBQWUsR0FBZixVQUFnQixJQUFJLEVBQUUsSUFBSTtRQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdkYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEYsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRTtZQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUM1RztRQUNELElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUNELHNDQUFpQixHQUFqQixVQUFrQixJQUFJO1FBQ2xCLG9EQUFvRDtRQUNwRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTtZQUM5QixhQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7U0FDeEU7YUFBTTtZQUNILElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckMsc0NBQXNDO1lBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQUM7WUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNoRCxJQUFJLGNBQWMsR0FBRyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztZQUM3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUM1QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2pILElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksRUFBRTtnQkFDN0IsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDcEQ7WUFDRCxJQUFJLENBQUMscUJBQXFCLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDOUM7SUFFTCxDQUFDO0lBQ0Qsc0NBQWlCLEdBQWpCLFVBQWtCLElBQUk7UUFBdEIsaUJBZ0JDO1FBZkcsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ3RELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsY0FBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLGlCQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsaUJBQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztZQUNoSSxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoQyxnQkFBZ0I7WUFDaEIsSUFBSSxHQUFHLElBQUksSUFBSTtnQkFBRSxPQUFPO1lBQ3hCLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBQ3ZDLEtBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM1QixLQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsZUFBZSxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbEUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUM3QjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELGtDQUFhLEdBQWI7UUFBQSxpQkF1QkM7UUF0QkcsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFBQSxDQUFDO1FBQzVELElBQUksU0FBUyxJQUFJLEVBQUUsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM5RCxPQUFPO1NBQ1Y7UUFDRCxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUN2QyxZQUFZLEdBQUcsU0FBUyxDQUFDO1NBQzVCO2FBQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLFdBQVcsQ0FBQyxRQUFRLEVBQUU7WUFDaEQsWUFBWSxHQUFHLFVBQVUsQ0FBQztTQUM3QjthQUFNO1lBQ0gsWUFBWSxHQUFHLE9BQU8sQ0FBQztTQUMxQjtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtZQUN6QixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBQzVCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7b0JBQ3BELEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDeEM7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFFeEUsQ0FBQztJQUNELHNDQUFpQixHQUFqQixVQUFrQixJQUFJLEVBQUUsSUFBSTtRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVyQyxDQUFDO0lBQ0QsZ0NBQVcsR0FBWDtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ2pFO0lBQ0wsQ0FBQztJQUNELG9DQUFlLEdBQWYsVUFBZ0IsSUFBSTtRQUNoQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwRCxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0osb0NBQWUsR0FBZixVQUFnQixJQUFJO1FBQ2IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNELCtCQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFFOUQsQ0FBQztJQUdKLGtDQUFhLEdBQWI7UUFBQSxpQkFnQlE7UUFYVyxJQUFJLEVBQUUsR0FBRyxVQUFDLE1BQU07WUFDWixJQUFJLFlBQVksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQzdFLGFBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEQsS0FBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7WUFDakMsS0FBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQyxDQUFDLENBQUE7UUFDRCx1QkFBYSxDQUFDLGVBQWUsQ0FBQywwQkFBMEIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUsxRSxDQUFDO0lBSUwsbUNBQWMsR0FBZDtRQUNJLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdDLElBQUksTUFBTSxHQUFHLGVBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN0RCxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM1QyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUN4QixJQUFJLFVBQVUsSUFBSSxFQUFFLElBQUksUUFBUSxJQUFJLEVBQUUsSUFBSSxNQUFNLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLEVBQUU7Z0JBQ3BILGFBQUcsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hFLE9BQU87YUFDVjtZQUNELElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDbkMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxHQUFHLFVBQVUsQ0FBQztZQUNyQyxVQUFVLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDO1lBQ2xDLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7WUFDOUIsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLGFBQWEsQ0FBQztZQUNsQyxVQUFVLENBQUMsY0FBYyxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM5RCxVQUFVLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbEUsVUFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNqRSxVQUFVLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZELFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUM1QjthQUFNO1lBQ0gsSUFBSSxVQUFVLElBQUksRUFBRSxJQUFJLFFBQVEsSUFBSSxFQUFFLElBQUksTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDbkQsYUFBRyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztnQkFDeEUsT0FBTzthQUNWO1lBQ0QsSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNwQyxXQUFXLENBQUMsV0FBVyxDQUFDLEdBQUcsVUFBVSxDQUFDO1lBQ3RDLFdBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxRQUFRLENBQUM7WUFDbkMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQztZQUMvQixXQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hELFdBQVcsQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQy9ELFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDdEUsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQUNELHdDQUFtQixHQUFuQixVQUFvQixJQUFJO1FBQ3BCLHlDQUF5QztRQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3ZCLFFBQVEsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ3hELFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUN2QztZQUNELFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN2RSxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlCO0lBQ0wsQ0FBQztJQUNELDBDQUFxQixHQUFyQixVQUFzQixJQUFJO1FBQ3RCLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtnQkFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDeEIsQ0FBQyxDQUFDLENBQUE7WUFDRiwwQkFBMEI7WUFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2xDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDdkIsUUFBUSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFDMUQsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO2lCQUN6QztnQkFDRCxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDdkIsUUFBUSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN4RSxJQUFJLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUU7b0JBQzlELFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDO2lCQUM1SDtnQkFDRCxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzlCO1NBQ0o7SUFDTCxDQUFDO0lBQ0Qsd0NBQW1CLEdBQW5CLFVBQW9CLElBQUksRUFBRSxJQUFJO1FBQzFCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzFDLHdEQUF3RDtRQUN4RCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFO1lBQzdCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3BJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM5QztJQUNMLENBQUM7SUFDRCwwQ0FBcUIsR0FBckIsVUFBc0IsSUFBSSxFQUFFLElBQUk7UUFDNUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDNUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRTtZQUM3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN2SSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMvQztJQUNMLENBQUM7SUFDRCxnQ0FBVyxHQUFYLFVBQVksSUFBSSxFQUFFLElBQUk7UUFDbEIsMEJBQTBCO1FBQzFCLFFBQVEsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BCLEtBQUssR0FBRyxDQUFDLE1BQU07Z0JBQ1gsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2dCQUNkLE1BQU07WUFDVixLQUFLLEdBQUcsQ0FBQyxPQUFPO2dCQUNaLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztnQkFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQ2QsTUFBTTtZQUNWLEtBQUssR0FBRyxDQUFDLE9BQU87Z0JBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDdkIsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUNELG9DQUFlLEdBQWY7UUFBQSxpQkF1QkM7UUF0QkcsSUFBSSxNQUFNLENBQUM7UUFDWCxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUMsUUFBUTtZQUN4QixNQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDMUY7YUFBTSxFQUFDLFNBQVM7WUFDYixNQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDMUY7UUFDRCxjQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztZQUN4QyxnQkFBZ0I7WUFDaEIsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO2dCQUNiLE9BQU87YUFDVjtZQUNELElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUNoQixJQUFJLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQzFCLEtBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2lCQUNwQjtxQkFBTTtvQkFDSCxLQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNySDtnQkFDRCxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNyRCxLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQ2hDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsK0JBQVUsR0FBVixVQUFXLElBQUk7UUFDWCxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7WUFDNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUE7UUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNuQixJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQzVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDO2FBQzNDO1lBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN0RyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNsRixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLGVBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDckcsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3ZCLEtBQUssQ0FBQztvQkFDRixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUN4RyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztvQkFDeEQsTUFBTTtnQkFDVixLQUFLLENBQUM7b0JBQ0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDeEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7b0JBQ3ZELE1BQU07Z0JBQ1YsS0FBSyxDQUFDO29CQUNGLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3ZHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO29CQUNyRCxNQUFNO2dCQUNWLEtBQUssQ0FBQztvQkFDRixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUMxRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztvQkFDdkQsTUFBTTtnQkFDVixLQUFLLEVBQUU7b0JBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO29CQUNoSCxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztvQkFDdEQsTUFBTTtnQkFDVjtvQkFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUN6RyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQzthQUU5RDtTQUNKO0lBQ0wsQ0FBQztJQUVELGdDQUFXLEdBQVg7UUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUMxQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3JELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFFRCxnQ0FBVyxHQUFYO1FBQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNmLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDckQsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQUNKLHFDQUFnQixHQUFoQjtRQUNPLE9BQU8sQ0FBQyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQXBjRDtRQURDLFFBQVEsQ0FBQywyQkFBaUIsQ0FBQztpREFDUTtJQUdwQztRQURDLFFBQVEsQ0FBQywyQkFBaUIsQ0FBQzttREFDVTtJQUd0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO2lEQUNRO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0RBQ087SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztrREFDUztJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNZO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ007SUFHekI7UUFEQyxRQUFRLENBQUMsZ0JBQU0sQ0FBQztxREFDWTtJQUc3QjtRQURDLFFBQVEsQ0FBQyw4QkFBb0IsQ0FBQztvREFDVztJQUcxQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNXO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ1c7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDYTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNhO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ1c7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDVTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO29EQUNXO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ1M7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswREFDaUI7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0REFDbUI7SUFFdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFDVztJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNZO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NERBQ21CO0lBaEVwQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBNGM5QjtJQUFELGlCQUFDO0NBNWNELEFBNGNDLENBNWN1QyxnQkFBTSxHQTRjN0M7a0JBNWNvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBIdHRwIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9IdHRwXCI7XG5pbXBvcnQgUG9wdXBDb25maXJtVHJhbnNmZXIgZnJvbSBcIi4vUG9wdXBDb25maXJtVHJhbnNmZXJcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBEaWFsb2cgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9EaWFsb2dcIjtcbmltcG9ydCBTY3JvbGxWaWV3Q29udHJvbCBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL1Njcm9sbFZpZXdDb250cm9sXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuaW1wb3J0IEJ1bmRsZUNvbnRyb2wgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0J1bmRsZUNvbnRyb2xcIjtcbnZhciBUWVBFX1NFQVJDSCA9IHtcbiAgICBOSUNLTkFNRTogMCxcbiAgICBTRFQ6IDEsXG4gICAgUkVHSU9OOiAyXG59XG52YXIgVEFCID0ge1xuICAgIENBU0hJTjogMCxcbiAgICBDQVNIT1VUOiAxLFxuICAgIEhJU1RPUlk6IDJcbn1cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cERhaUx5IGV4dGVuZHMgRGlhbG9nIHtcblxuICAgIGxpc3RBZ2VuY3kgPSBbXTtcbiAgICBsaXN0QmFuayA9IFtdO1xuICAgIGxpc3RTZWFyY2hBZ2VuY3kgPSBbXTtcbiAgICB0eXBlU2VhcmNoID0gVFlQRV9TRUFSQ0guUkVHSU9OO1xuICAgIEBwcm9wZXJ0eShTY3JvbGxWaWV3Q29udHJvbClcbiAgICBzY3JBZ2VuY3k6IFNjcm9sbFZpZXdDb250cm9sID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShTY3JvbGxWaWV3Q29udHJvbClcbiAgICBzY3JCYW5rTGlzdDogU2Nyb2xsVmlld0NvbnRyb2wgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgZWRiU2VhcmNoOiBjYy5FZGl0Qm94ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIGVkYk1vbmV5OiBjYy5FZGl0Qm94ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIGVkYlRyYW5zSUQ6IGNjLkVkaXRCb3ggPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiQ2hpcFJlY2VpdmU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsUGFnZTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KERpYWxvZylcbiAgICBwb3B1cEJhbmtJbmZvOiBEaWFsb2cgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KFBvcHVwQ29uZmlybVRyYW5zZmVyKVxuICAgIHBvcHVwQ29uZmlybTogUG9wdXBDb25maXJtVHJhbnNmZXIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZHJvcEJhbmtVc2VyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vZGVCYW5rVXNlcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlQmFua0FnZW5jeTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBkcm9wQmFua0FnZW5jeTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlVHJhbnNmZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZUhpc3Rvcnk6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiTmFtZUFnZW5jeTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYk5pY2tuYW1lOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlKVxuICAgIHRvZ2dsZURyb3BCYW5rVXNlcjogY2MuVG9nZ2xlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlKVxuICAgIHRvZ2dsZURyb3BCYW5rQWdlbmN5OiBjYy5Ub2dnbGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXG4gICAgdG9nZ2xlQ2FzaEluOiBjYy5Ub2dnbGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXG4gICAgdG9nZ2xlQ2FzaE91dDogY2MuVG9nZ2xlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpdGVtSGlzdG9yeUNvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICB0YWIgPSAwO1xuICAgIGN1cnJlbnREYXRhRGFpbHkgPSBudWxsO1xuICAgIGN1cnJlbnRCYW5rRGFpbHkgPSBudWxsO1xuICAgIGN1cnJlbnREYXRhVXNlciA9IG51bGw7XG4gICAgcGFnZSA9IDE7XG4gICAgbWF4UGFnZSA9IDE7XG4gICAgc2hvdygpIHtcbiAgICAgICAgc3VwZXIuc2hvdygpO1xuICAgICAgICBpZiAodHlwZW9mICh0aGlzLnRhYikgIT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdGhpcy50YWIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRhYiA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUNhc2hJbi5pc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy50b2dnbGVDYXNoSW4uY2hlY2soKTtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2VUYWIobnVsbCwgdGhpcy50YWIpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50YWIgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVDYXNoT3V0LmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUNhc2hPdXQuY2hlY2soKTtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2VUYWIobnVsbCwgdGhpcy50YWIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzbWlzcygpIHtcbiAgICAgICAgc3VwZXIuZGlzbWlzcygpO1xuXG4gICAgfVxuICAgIG9uQnRuQ29weShvYmosIGRhdGEpIHtcbiAgICAgICAgVXRpbHMuY29weShkYXRhKTtcbiAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfY29udGVudF9jb3BpZWQnKSArIGRhdGEpO1xuICAgIH1cbiAgICBfb25TaG93ZWQoKSB7XG4gICAgICAgIHN1cGVyLl9vblNob3dlZCgpO1xuICAgIH1cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgICAgICB0aGlzLmVkYlNlYXJjaC5zdHJpbmcgPSBcIlwiO1xuICAgIH1cbiAgICBsb2FkRGF0YSgpIHtcbiAgICAgICAgLy9odHRwOi8vNDMuMTI4LjI3LjM1OjgwODEvYXBpP2M9MjAzNCZjb2RlPTM2NzQ1NyZrZXk9JnBnPTEmbWk9MTAmbGV2ZWw9MlxuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgIHRoaXMubGlzdEFnZW5jeSA9IFtdO1xuICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEkyLCB7IFwiY1wiOiAyMDM0LCBcIm5uXCI6IENvbmZpZ3MuTG9naW4uTmlja25hbWUgfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgaWYgKGVyciAhPSBudWxsKSByZXR1cm47XG4gICAgICAgICAgICBpZiAocmVzW1wic3VjY2Vzc1wiXSAmJiByZXNbJ2RhdGEnXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdEFnZW5jeSA9IHJlc1snZGF0YSddO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zY3JBZ2VuY3kuc2V0RGF0YUxpc3QodGhpcy5zZXREYXRhSXRlbSwgdGhpcy5saXN0QWdlbmN5KTtcbiAgICAgICAgICAgIC8vICBjYy5sb2coXCJsaXN0IEFnZW5jeT1cIiwgdGhpcy5saXN0QWdlbmN5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBkYXRhID0ge307XG4gICAgICAgIGRhdGFbXCJjXCJdID0gMjAwODtcbiAgICAgICAgZGF0YVtcIm5uXCJdID0gZW5jb2RlVVJJQ29tcG9uZW50KENvbmZpZ3MuTG9naW4uTmlja25hbWUudHJpbSgpKTtcbiAgICAgICAgZGF0YVtcInBuXCJdID0gMTtcbiAgICAgICAgZGF0YVtcImxcIl0gPSAxMDtcbiAgICAgICAgSHR0cC5nZXQoQ29uZmlncy5BcHAuQVBJMiwgZGF0YSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICB2YXIgbGlzdCA9IEpTT04ucGFyc2UocmVzLmRhdGEpLmRhdGE7XG4gICAgICAgICAgICB0aGlzLnNldEluZm9Ecm9wQmFua1VzZXIobGlzdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzZXREYXRhSXRlbShpdGVtLCBkYXRhKSB7XG4gICAgICAgIGl0ZW0ub3BhY2l0eSA9IGRhdGFbJ3JhbmsnXSA+PSAxID8gMjU1IDogMTUwO1xuICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKCdsYlN0dCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaXRlbVsnaXRlbUlEJ10gKyAxO1xuICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKCdsYk5hbWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGRhdGFbJ25hbWVhZ2VudCddO1xuICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKCdsYk5pY2tuYW1lJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBkYXRhWyduaWNrbmFtZSddO1xuICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKCdsYlJlZ2lvbicpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZGF0YVsnYWRkcmVzcyddO1xuICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKCdsYlNkdCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZGF0YVsncGhvbmUnXTtcbiAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZSgnYmcnKS5hY3RpdmUgPSBkYXRhWydpbmRleCddICUgMiA9PSAwO1xuICAgICAgICBpdGVtWydkYXRhJ10gPSBkYXRhO1xuICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICAgIHNldERhdGFJdGVtQmFuayhpdGVtLCBkYXRhKSB7XG4gICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoJ2xiU3R0JykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpdGVtWydpdGVtSUQnXSArIDE7XG4gICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoJ2xiQWdlbmN5Q29kZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZGF0YVsnYWdlbnRfY29kZSddO1xuICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKCdsYkJhbmtBY2NvdW50JykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBkYXRhWydiYW5rX2Fjb3VudCddO1xuICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKCdsYkJhbmtOYW1lJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBkYXRhWydiYW5rX25hbWUnXTtcbiAgICAgICAgaWYgKGRhdGFbJ2JhbmtfbmFtZSddLmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKCdsYkJhbmtOYW1lJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBkYXRhWydiYW5rX25hbWUnXS5zbGljZSgwLCAyNykgKyBcIi4uLlwiO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoJ2xiQnJhbmNoJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBkYXRhWydiYW5rX2JyYW5jaCddO1xuICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKCdsYkJhbmtOdW1iZXInKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGRhdGFbJ2JhbmtfbnVtYmVyJ107XG4gICAgICAgIGl0ZW1bJ2RhdGEnXSA9IGRhdGE7XG4gICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gICAgb25DbGlja0l0ZW1BZ2VuY3koZXZlbikge1xuICAgICAgICAvL2FwaT9jPTIwMzMmY29kZT0zNjc0NTcma2V5PSZubj1hJmF0PTImcGc9MSZtaT0xMFwiLFxuICAgICAgICBpZiAoZXZlbi50YXJnZXRbJ2RhdGEnXS5yYW5rIDwgMSkge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9hZ2VuY3lfbm90ZTEnKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZGF0YUFnZW5jeSA9IGV2ZW4udGFyZ2V0WydkYXRhJ107XG4gICAgICAgICAgICAvLyAgY2MubG9nKFwiZGF0YUFnZW5jeTpcIiwgZGF0YUFnZW5jeSk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRhRGFpbHkgPSBkYXRhQWdlbmN5O1xuICAgICAgICAgICAgdGhpcy5sYk5hbWVBZ2VuY3kuc3RyaW5nID0gZGF0YUFnZW5jeVsnbmFtZWFnZW50J107XG4gICAgICAgICAgICB0aGlzLmxiTmlja25hbWUuc3RyaW5nID0gZGF0YUFnZW5jeVsnbmlja25hbWUnXTtcbiAgICAgICAgICAgIGxldCBsaXN0QmFua0FnZW5jeSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QmFua0RhaWx5ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlRHJvcEJhbmtBZ2VuY3kuaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZURyb3BCYW5rQWdlbmN5Lm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKCdsYkN1cnJlbnRCYW5rJykuZ2V0Q29tcG9uZW50KCdNdWx0aUxhbmd1YWdlJykudXBkYXRlVGV4dCgpO1xuICAgICAgICAgICAgaWYgKGRhdGFBZ2VuY3lbJ2JhbmtzJ10gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxpc3RCYW5rQWdlbmN5ID0gSlNPTi5wYXJzZShkYXRhQWdlbmN5WydiYW5rcyddKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0SW5mb0Ryb3BCYW5rQWdlbmN5KGxpc3RCYW5rQWdlbmN5KTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIG9uQ2xpY2tJdGVtRGV0YWlsKGV2ZW4pIHtcbiAgICAgICAgbGV0IGlkQWdlbmN5ID0gZXZlbi50YXJnZXQucGFyZW50WydkYXRhJ11bJ2NvZGUnXTtcbiAgICAgICAgdGhpcy5saXN0QmFuayA9IFtdO1xuICAgICAgICB0aGlzLnNjckJhbmtMaXN0LnNjcm9sbFZpZXcuY29udGVudC5jaGlsZHJlbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEkyLCB7IFwiY1wiOiAyMDMzLCBcImNvZGVcIjogaWRBZ2VuY3ksIFwibm5cIjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgXCJhdFwiOiBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIC8vICBjYy5sb2cocmVzKTtcbiAgICAgICAgICAgIGlmIChlcnIgIT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKHJlc1tcInN1Y2Nlc3NcIl0gJiYgcmVzWydkYXRhJ10gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdEJhbmsgPSByZXNbJ2RhdGEnXTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjckJhbmtMaXN0LnNldERhdGFMaXN0KHRoaXMuc2V0RGF0YUl0ZW1CYW5rLCB0aGlzLmxpc3RCYW5rKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwQmFua0luZm8uc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25DbGlja1NlYXJjaCgpIHtcbiAgICAgICAgbGV0IGtleVNlYXJjaCA9IHRoaXMuZWRiU2VhcmNoLnN0cmluZy50cmltKCkudG9Mb3dlckNhc2UoKTs7XG4gICAgICAgIGlmIChrZXlTZWFyY2ggPT0gXCJcIikge1xuICAgICAgICAgICAgdGhpcy5zY3JBZ2VuY3kuc2V0RGF0YUxpc3QodGhpcy5zZXREYXRhSXRlbSwgdGhpcy5saXN0QWdlbmN5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFyYW1zU2VhcmNoID0gXCJcIjtcbiAgICAgICAgdGhpcy5saXN0U2VhcmNoQWdlbmN5ID0gW107XG4gICAgICAgIGlmICh0aGlzLnR5cGVTZWFyY2ggPT0gVFlQRV9TRUFSQ0guUkVHSU9OKSB7XG4gICAgICAgICAgICBwYXJhbXNTZWFyY2ggPSAnYWRkcmVzcyc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlU2VhcmNoID09IFRZUEVfU0VBUkNILk5JQ0tOQU1FKSB7XG4gICAgICAgICAgICBwYXJhbXNTZWFyY2ggPSBcIm5pY2tuYW1lXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJhbXNTZWFyY2ggPSBcInBob25lXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5saXN0QWdlbmN5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtW3BhcmFtc1NlYXJjaF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtW3BhcmFtc1NlYXJjaF0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhrZXlTZWFyY2gpKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RTZWFyY2hBZ2VuY3kucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zY3JBZ2VuY3kuc2V0RGF0YUxpc3QodGhpcy5zZXREYXRhSXRlbSwgdGhpcy5saXN0U2VhcmNoQWdlbmN5KTtcblxuICAgIH1cbiAgICBvbkNsaWNrVHlwZVNlYXJjaChldmVuLCBkYXRhKSB7XG4gICAgICAgIHRoaXMudHlwZVNlYXJjaCA9IHBhcnNlSW50KGRhdGEpO1xuXG4gICAgfVxuICAgIG9uRWRiQ2hhbmdlKCkge1xuICAgICAgICBpZiAodGhpcy5lZGJTZWFyY2guc3RyaW5nLnRyaW0oKSA9PSBcIlwiKSB7XG4gICAgICAgICAgICB0aGlzLnNjckFnZW5jeS5zZXREYXRhTGlzdCh0aGlzLnNldERhdGFJdGVtLCB0aGlzLmxpc3RBZ2VuY3kpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uQ2xpY2tGYWNlYm9vayhldmVuKSB7XG4gICAgICAgIGxldCBmYkxpbmsgPSBldmVuLnRhcmdldC5wYXJlbnRbJ2RhdGEnXVsnZmFjZWJvb2snXTtcbiAgICAgICAgY2Muc3lzLm9wZW5VUkwoZmJMaW5rKTtcbiAgICB9XG5cdG9uQ2xpY2tUZWxlZ3JhbShldmVuKSB7XG4gICAgICAgIGxldCB0bExpbmsgPSBldmVuLnRhcmdldC5wYXJlbnRbJ2RhdGEnXVsnc2l0ZSddO1xuICAgICAgICBjYy5zeXMub3BlblVSTCh0bExpbmspO1xuICAgIH1cbiAgICBlZGJDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLmxiQ2hpcFJlY2VpdmUuc3RyaW5nID0gdGhpcy5lZGJNb25leS5zdHJpbmcgKyBcIiBST0xcIjtcblxuICAgIH1cblx0XG5cdFxuXHRhY3RCYW5rVXBkYXRlKCkge1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNiID0gKHByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvcHVwUHJvZmlsZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYikuZ2V0Q29tcG9uZW50KFwiTG9iYnkuUG9wdXBQcm9maWxlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmNhbnZhcy5hZGRDaGlsZChwb3B1cFByb2ZpbGUubm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVwUHJvZmlsZSA9IHBvcHVwUHJvZmlsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXBQcm9maWxlLnNob3dUYWJCYW5rKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQnVuZGxlQ29udHJvbC5sb2FkUHJlZmFiUG9wdXAoXCJQcmVmYWJQb3B1cC9Qb3B1cFByb2ZpbGVcIiwgY2IpO1xuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBcblxuICAgICAgICB9XG5cdFxuXHRcblx0XG4gICAgb25DbGlja0NvbmZpcm0oKSB7XG4gICAgICAgIGxldCBhZ2VuY3lOYW1lID0gdGhpcy5sYk5hbWVBZ2VuY3kuc3RyaW5nLnRyaW0oKTtcbiAgICAgICAgbGV0IG5pY2tuYW1lID0gdGhpcy5sYk5pY2tuYW1lLnN0cmluZy50cmltKCk7XG4gICAgICAgIGxldCBhbW91bnQgPSBVdGlscy5Ub0ludCh0aGlzLmVkYk1vbmV5LnN0cmluZy50cmltKCkpO1xuICAgICAgICBsZXQgdHJhbnNhY3Rpb25JRCA9IHRoaXMuZ2VuZXJhdGVUcmFuc01zZygpO1xuICAgICAgICBpZiAodGhpcy50YWIgPT0gVEFCLkNBU0hJTikge1xuICAgICAgICAgICAgaWYgKGFnZW5jeU5hbWUgPT0gXCJcIiB8fCBuaWNrbmFtZSA9PSBcIlwiIHx8IGFtb3VudCA9PSAwIHx8IHRoaXMuY3VycmVudERhdGFEYWlseSA9PSBudWxsIHx8IHRoaXMuY3VycmVudERhdGFVc2VyID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2lucHV0X2FsbCcpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGF0YUNhc2hJbiA9IE9iamVjdC5jcmVhdGUoe30pO1xuICAgICAgICAgICAgZGF0YUNhc2hJblsnbmFtZWFnZW50J10gPSBhZ2VuY3lOYW1lO1xuICAgICAgICAgICAgZGF0YUNhc2hJblsnbmlja25hbWUnXSA9IG5pY2tuYW1lO1xuICAgICAgICAgICAgZGF0YUNhc2hJblsnYW1vdW50J10gPSBhbW91bnQ7XG4gICAgICAgICAgICBkYXRhQ2FzaEluWydjaWQnXSA9IHRyYW5zYWN0aW9uSUQ7XG4gICAgICAgICAgICBkYXRhQ2FzaEluWyd1c2VybmFtZWJhbmsnXSA9IHRoaXMuY3VycmVudERhdGFVc2VyWydiYW5rTmFtZSddO1xuICAgICAgICAgICAgZGF0YUNhc2hJblsnYWdlbmN5bmFtZWJhbmsnXSA9IHRoaXMuY3VycmVudEJhbmtEYWlseVsnYmFua19uYW1lJ107XG4gICAgICAgICAgICBkYXRhQ2FzaEluWydiYW5rX251bWJlciddID0gdGhpcy5jdXJyZW50QmFua0RhaWx5WydiYW5rX251bWJlciddO1xuICAgICAgICAgICAgZGF0YUNhc2hJblsnYWdlbmN5SUQnXSA9IHRoaXMuY3VycmVudERhdGFEYWlseVsnY29kZSddO1xuICAgICAgICAgICAgZGF0YUNhc2hJblsndXNlcmJhbmtudW1iZXInXSA9IHRoaXMuY3VycmVudERhdGFVc2VyW1wiYmFua051bWJlclwiXTtcbiAgICAgICAgICAgIHRoaXMucG9wdXBDb25maXJtLnNldEluZm9DYXNoSW4oZGF0YUNhc2hJbik7XG4gICAgICAgICAgICB0aGlzLnBvcHVwQ29uZmlybS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYWdlbmN5TmFtZSA9PSBcIlwiIHx8IG5pY2tuYW1lID09IFwiXCIgfHwgYW1vdW50ID09IDApIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2lucHV0X2FsbCcpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGF0YUNhc2hPdXQgPSBPYmplY3QuY3JlYXRlKHt9KTtcbiAgICAgICAgICAgIGRhdGFDYXNoT3V0WyduYW1lYWdlbnQnXSA9IGFnZW5jeU5hbWU7XG4gICAgICAgICAgICBkYXRhQ2FzaE91dFsnbmlja25hbWUnXSA9IG5pY2tuYW1lO1xuICAgICAgICAgICAgZGF0YUNhc2hPdXRbJ2Ftb3VudCddID0gYW1vdW50O1xuICAgICAgICAgICAgZGF0YUNhc2hPdXRbJ2FnZW5jeUlEJ10gPSB0aGlzLmN1cnJlbnREYXRhRGFpbHlbJ2NvZGUnXTtcbiAgICAgICAgICAgIGRhdGFDYXNoT3V0Wyd1c2VyYmFua25hbWUnXSA9IHRoaXMuY3VycmVudERhdGFVc2VyW1wiYmFua05hbWVcIl07XG4gICAgICAgICAgICBkYXRhQ2FzaE91dFsndXNlcmFjY291bnRuYW1lJ10gPSB0aGlzLmN1cnJlbnREYXRhVXNlcltcImN1c3RvbWVyTmFtZVwiXTtcbiAgICAgICAgICAgIGRhdGFDYXNoT3V0Wyd1c2VyYmFua251bWJlciddID0gdGhpcy5jdXJyZW50RGF0YVVzZXJbXCJiYW5rTnVtYmVyXCJdO1xuICAgICAgICAgICAgdGhpcy5wb3B1cENvbmZpcm0uc2V0SW5mb0Nhc2hPdXQoZGF0YUNhc2hPdXQpO1xuICAgICAgICAgICAgdGhpcy5wb3B1cENvbmZpcm0uc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldEluZm9Ecm9wQmFua1VzZXIoZGF0YSkge1xuICAgICAgICAvLyAgY2MubG9nKFwic2V0SW5mb0Ryb3BCYW5rVXNlcjpcIiwgZGF0YSk7XG4gICAgICAgIHRoaXMuZHJvcEJhbmtVc2VyLmNoaWxkcmVuLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtQmFuayA9IHRoaXMuZHJvcEJhbmtVc2VyLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKGl0ZW1CYW5rKSkge1xuICAgICAgICAgICAgICAgIGl0ZW1CYW5rID0gY2MuaW5zdGFudGlhdGUodGhpcy5kcm9wQmFua1VzZXIuY2hpbGRyZW5bMF0pXG4gICAgICAgICAgICAgICAgaXRlbUJhbmsucGFyZW50ID0gdGhpcy5kcm9wQmFua1VzZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpdGVtQmFuay5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgaXRlbUJhbmsuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nID0gZGF0YVtpXVsnYmFua05hbWUnXTtcbiAgICAgICAgICAgIGl0ZW1CYW5rWydkYXRhJ10gPSBkYXRhW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldEluZm9Ecm9wQmFua0FnZW5jeShkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZHJvcEJhbmtBZ2VuY3kuY2hpbGRyZW4uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gIGNjLmxvZyhcImRhdGE6XCIsIGRhdGEpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1CYW5rID0gdGhpcy5kcm9wQmFua0FnZW5jeS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBpZiAoIWNjLmlzVmFsaWQoaXRlbUJhbmspKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1CYW5rID0gY2MuaW5zdGFudGlhdGUodGhpcy5kcm9wQmFua0FnZW5jeS5jaGlsZHJlblswXSlcbiAgICAgICAgICAgICAgICAgICAgaXRlbUJhbmsucGFyZW50ID0gdGhpcy5kcm9wQmFua0FnZW5jeTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaXRlbUJhbmsuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpdGVtQmFuay5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5zdHJpbmcgPSBkYXRhW2ldWydiYW5rX25hbWUnXTtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbUJhbmsuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nLmxlbmd0aCA+IDIwKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1CYW5rLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyA9IGl0ZW1CYW5rLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZy5zbGljZSgwLCAyMCkgKyBcIi4uLlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpdGVtQmFua1snZGF0YSddID0gZGF0YVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkNsaWNrSXRlbUJhbmtVc2VyKGV2ZW4sIGRhdGEpIHtcbiAgICAgICAgdGhpcy50b2dnbGVEcm9wQmFua1VzZXIuaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICAgIC8vICBjYy5sb2coXCJvbkNsaWNrSXRlbUJhbmtVc2VyOlwiLCBldmVuLnRhcmdldFsnZGF0YSddKTtcbiAgICAgICAgaWYgKGV2ZW4udGFyZ2V0WydkYXRhJ10gIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVEcm9wQmFua1VzZXIubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoJ2xiQ3VycmVudEJhbmsnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGV2ZW4udGFyZ2V0WydkYXRhJ11bJ2JhbmtOYW1lJ107XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRhVXNlciA9IGV2ZW4udGFyZ2V0WydkYXRhJ107XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25DbGlja0l0ZW1CYW5rQWdlbmN5KGV2ZW4sIGRhdGEpIHtcbiAgICAgICAgdGhpcy50b2dnbGVEcm9wQmFua0FnZW5jeS5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGV2ZW4udGFyZ2V0WydkYXRhJ10gIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVEcm9wQmFua0FnZW5jeS5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZSgnbGJDdXJyZW50QmFuaycpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZXZlbi50YXJnZXRbJ2RhdGEnXVsnYmFua19uYW1lJ107XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRCYW5rRGFpbHkgPSBldmVuLnRhcmdldFsnZGF0YSddO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uQ2hhbmdlVGFiKGV2ZW4sIGRhdGEpIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcIm9uY2hhbmdldGFiXCIpO1xuICAgICAgICBzd2l0Y2ggKHBhcnNlSW50KGRhdGEpKSB7XG4gICAgICAgICAgICBjYXNlIFRBQi5DQVNISU46XG4gICAgICAgICAgICAgICAgdGhpcy50YWIgPSBwYXJzZUludChkYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVUcmFuc2Zlci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZUhpc3RvcnkuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGJUcmFuc0lELm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlQmFua1VzZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVCYW5rQWdlbmN5LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXhQYWdlID0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2UgPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUQUIuQ0FTSE9VVDpcbiAgICAgICAgICAgICAgICB0aGlzLnRhYiA9IHBhcnNlSW50KGRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZVRyYW5zZmVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlSGlzdG9yeS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmVkYlRyYW5zSUQubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVCYW5rQWdlbmN5LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMubWF4UGFnZSA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVEFCLkhJU1RPUlk6XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlVHJhbnNmZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlSGlzdG9yeS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZERhdGFIaXN0b3J5KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9hZERhdGFIaXN0b3J5KCkge1xuICAgICAgICBsZXQgcGFyYW1zO1xuICAgICAgICBpZiAodGhpcy50YWIgPT0gMCkgey8vY2FzaGluXG4gICAgICAgICAgICBwYXJhbXMgPSB7IFwiY1wiOiAyMDE2LCBcIm5uXCI6IENvbmZpZ3MuTG9naW4uTmlja25hbWUsIFwidHRcIjogMCwgXCJwXCI6IHRoaXMucGFnZSwgXCJtaVwiOiA1IH07XG4gICAgICAgIH0gZWxzZSB7Ly9jYXNob3V0XG4gICAgICAgICAgICBwYXJhbXMgPSB7IFwiY1wiOiAyMDE2LCBcIm5uXCI6IENvbmZpZ3MuTG9naW4uTmlja25hbWUsIFwidHRcIjogMSwgXCJwXCI6IHRoaXMucGFnZSwgXCJtaVwiOiA1IH07XG4gICAgICAgIH1cbiAgICAgICAgSHR0cC5nZXQoQ29uZmlncy5BcHAuQVBJMiwgcGFyYW1zLCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIC8vICBjYy5sb2cocmVzKTtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBpZiAoZXJyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzWydzdWNjZXNzJ10pIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzWyd0b3RhbFJlY29yZHMnXSA8PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF4UGFnZSA9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXhQYWdlID0gcmVzWyd0b3RhbFJlY29yZHMnXSAlIDUgPT0gMCA/IChyZXNbJ3RvdGFsUmVjb3JkcyddICUgNSkgOiBNYXRoLmZsb29yKHJlc1sndG90YWxSZWNvcmRzJ10gLyA1KSArIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubGJsUGFnZS5zdHJpbmcgPSB0aGlzLnBhZ2UgKyBcIi9cIiArIHRoaXMubWF4UGFnZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEhpc3RvcnkocmVzWydkYXRhJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2V0SGlzdG9yeShkYXRhKSB7XG4gICAgICAgIHRoaXMuaXRlbUhpc3RvcnlDb250YWluZXIuY2hpbGRyZW4uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbUhpc3RvcnlDb250YWluZXIuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAoIWNjLmlzVmFsaWQoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtSGlzdG9yeUNvbnRhaW5lci5jaGlsZHJlblswXSlcbiAgICAgICAgICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMuaXRlbUhpc3RvcnlDb250YWluZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKCdsYlRpbWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGRhdGFbaV1bJ0NyZWF0ZWRBdCddLnJlcGxhY2UoXCIgXCIsIFwiXFxuXCIpO1xuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZSgnbGJCYW5rJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBkYXRhW2ldWydCYW5rQ29kZSddO1xuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZSgnbGJBbW91bnQnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE1vbmV5KGRhdGFbaV1bJ0Ftb3VudCddKTtcbiAgICAgICAgICAgIHN3aXRjaCAoZGF0YVtpXVsnU3RhdHVzJ10pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJsYlN0YXR1c1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3BlbmRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImxiU3RhdHVzXCIpLmNvbG9yID0gY2MuQ29sb3IuWUVMTE9XO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJsYlN0YXR1c1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImxiU3RhdHVzXCIpLmNvbG9yID0gY2MuQ29sb3IuR1JFRU47XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImxiU3RhdHVzXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfZmFpbGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJsYlN0YXR1c1wiKS5jb2xvciA9IGNjLkNvbG9yLlJFRDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibGJTdGF0dXNcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9jb21wbGV0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImxiU3RhdHVzXCIpLmNvbG9yID0gY2MuQ29sb3IuR1JFRU47XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJsYlN0YXR1c1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3JlcXVlc3RfY2FzaG91dCcpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibGJTdGF0dXNcIikuY29sb3IgPSBjYy5Db2xvci5DWUFOO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibGJTdGF0dXNcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9yZWNlaXZlMicpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibGJTdGF0dXNcIikuY29sb3IgPSBjYy5Db2xvci5XSElURTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWN0TmV4dFBhZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhZ2UgPCB0aGlzLm1heFBhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucGFnZSsrO1xuICAgICAgICAgICAgdGhpcy5sYmxQYWdlLnN0cmluZyA9IHRoaXMucGFnZSArIFwiL1wiICsgdGhpcy5tYXhQYWdlO1xuICAgICAgICAgICAgdGhpcy5sb2FkRGF0YUhpc3RvcnkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFjdFByZXZQYWdlKCkge1xuICAgICAgICBpZiAodGhpcy5wYWdlID4gMSkge1xuICAgICAgICAgICAgdGhpcy5wYWdlLS07XG4gICAgICAgICAgICB0aGlzLmxibFBhZ2Uuc3RyaW5nID0gdGhpcy5wYWdlICsgXCIvXCIgKyB0aGlzLm1heFBhZ2U7XG4gICAgICAgICAgICB0aGlzLmxvYWREYXRhSGlzdG9yeSgpO1xuICAgICAgICB9XG4gICAgfVxuXHRnZW5lcmF0ZVRyYW5zTXNnKCkge1xuICAgICAgICByZXR1cm4gKENvbmZpZ3MuTG9naW4uTmlja25hbWUgKyBcIi1ST1k4OFwiKTtcbiAgICB9XG59XG4iXX0=