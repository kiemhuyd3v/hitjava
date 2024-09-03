"use strict";
cc._RF.push(module, '37607GaL/dJNIUv0VweSBLU', 'Lobby.PopupKiemTien');
// Lobby/LobbyScript/Lobby.PopupKiemTien.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Configs_1 = require("../../Loading/src/Configs");
var Http_1 = require("../../Loading/src/Http");
var UtilsNative_1 = require("../../Loading/src/UtilsNative");
var App_1 = require("./Script/common/App");
var Dialog_1 = require("./Script/common/Dialog");
var Utils_1 = require("./Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TAB_POPUP = {
    INFO: 0,
    LIST: 1,
    HISTORY: 2,
    POLICY: 3
};
var PopupKiemTien = /** @class */ (function (_super) {
    __extends(PopupKiemTien, _super);
    function PopupKiemTien() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.btnConfirm = null;
        _this.edbInviteCode = null;
        _this.lbInviteCode = null;
        _this.lbTotalUser1 = null;
        _this.lbTitleInvite = null;
        _this.lbBonus1 = null;
        _this.lbUrlInvite = null;
        _this.lbTotalPage_tabList = null;
        _this.lbTotalPage_tabHistory = null;
        _this.NodeInfo = null;
        _this.NodeListUser = null;
        _this.NodeHistory = null;
        _this.NodePolicy = null;
        _this.btnReceive = null;
        _this.toggleInfo = null;
        _this.nodeTabContainer = null;
        _this.scrListUser = null;
        _this.scrListHistory = null;
        _this.page = 1;
        _this.totalPage = 1;
        _this.tab_popup = 0;
        _this.status_history = 0;
        _this.historyData = [];
        return _this;
        // update (dt) {}
    }
    PopupKiemTien.prototype.start = function () {
    };
    PopupKiemTien.prototype.show = function () {
        var _this = this;
        _super.prototype.show.call(this);
        this.toggleInfo.uncheck();
        this.toggleInfo.check();
        this.lbUrlInvite.string = cc.js.formatStr("https://play.FANVIN.wIN/?aff=%s", Configs_1.default.Login.Nickname);
        this.lbInviteCode.string = Configs_1.default.Login.Nickname;
        this.edbInviteCode.enabled = true;
        this.edbInviteCode.string = "";
        this.lbTitleInvite.string = "Nhập mã giới thiệu:";
        this.btnConfirm.node.active = true;
        Http_1.default.get(Configs_1.default.App.API, { c: "2040", nn: Configs_1.default.Login.Nickname, "at": Configs_1.default.Login.AccessToken, "ac": "get" }, function (err, res) {
            if (res != null) {
                //  cc.log(res);
                App_1.default.instance.showLoading(false);
                if (res['success']) {
                    if (res['data'] != "") {
                        _this.edbInviteCode.string = res['data'];
                        _this.edbInviteCode.enabled = false;
                        _this.lbTitleInvite.string = "Bạn là thành viên của ";
                        _this.btnConfirm.node.active = false;
                    }
                }
                else {
                    // App.instance.ShowAlertDialog(res['message']);
                }
            }
        });
        if (cc.sys.isBrowser) {
            //  cc.log("URL Game==" + window.location.href);
            var url = window.location.href;
            // let url = "https://play.FANVIN.wIN/?aff=NhungNgao4";
            if (url.includes("aff=")) {
                var indexOfEqual = url.indexOf("=");
                var inviteCode = url.substring(indexOfEqual + 1, url.length);
                this.edbInviteCode.string = inviteCode;
                this.edbInviteCode.enabled = false;
            }
        }
    };
    PopupKiemTien.prototype.getInfoAll = function () {
        var _this = this;
        App_1.default.instance.showLoading(true);
        Http_1.default.get(Configs_1.default.App.API, { c: "2039", nn: Configs_1.default.Login.Nickname, "at": Configs_1.default.Login.AccessToken, "pg": 1, "mi": 6, }, function (err, res) {
            if (res != null) {
                //  cc.log(res);
                App_1.default.instance.showLoading(false);
                if (res['success']) {
                    _this.lbBonus1.string = Utils_1.default.formatMoney(res['data']['totalBonus']);
                    _this.lbTotalUser1.string = res['totalRecords'];
                }
            }
        });
    };
    PopupKiemTien.prototype.onChangeTab = function (even) {
        if (even.node.name == "tabInfo") {
            this.nodeTabContainer.children[0].getComponent(cc.Toggle).check();
            this.tab_popup = TAB_POPUP.INFO;
            this.getInfoAll();
        }
        else if (even.node.name == "tabList") {
            this.nodeTabContainer.children[1].getComponent(cc.Toggle).check();
            this.resetTab();
            this.onGetListUser();
            this.tab_popup = TAB_POPUP.LIST;
        }
        else if (even.node.name == "tabHistory") {
            this.nodeTabContainer.children[2].getComponent(cc.Toggle).check();
            this.resetTab();
            this.onGetHistory();
            this.tab_popup = TAB_POPUP.HISTORY;
        }
        else if (even.node.name == "tabPolicy") {
            this.nodeTabContainer.children[3].getComponent(cc.Toggle).check();
            this.tab_popup = TAB_POPUP.POLICY;
        }
    };
    PopupKiemTien.prototype.resetTab = function () {
        this.page = 1;
        this.totalPage = 1;
    };
    PopupKiemTien.prototype.onToggleChangeTabSumary = function (even, data) {
        var currentTime = new Date();
        var day = currentTime.getDate();
        var month = currentTime.getMonth() + 1;
        var year = currentTime.getFullYear();
        var fromTime = "";
        var endTime = "";
        switch (data) {
            case "1":
                this.getInfoAll();
                break;
            case "2": //today
                fromTime = year + "-" + month + "-" + day;
                this.onGetSumary(fromTime, fromTime);
                break;
            case "3": //yesterday
                day = day - 1;
                if (day == 0) {
                    if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
                        day = 31;
                    }
                    else {
                        day = 30;
                    }
                    month = month - 1;
                    if (month == 0) {
                        month = 12;
                    }
                }
                fromTime = year + "-" + month + "-" + day;
                this.onGetSumary(fromTime, fromTime);
                break;
            case "4": //this month
                fromTime = year + "-" + month + "-" + 1;
                endTime = year + "-" + month + "-" + day;
                this.onGetSumary(fromTime, endTime);
                break;
        }
    };
    PopupKiemTien.prototype.onGetSumary = function (fromTime, endTime) {
        var _this = this;
        App_1.default.instance.showLoading(true);
        //http://localhost:8081/api?c=2038&nn=brightc&at=7898989&ft=2021-11-02&et=2021-11-30&st=0&pg=1&mi=10
        Http_1.default.get(Configs_1.default.App.API, { c: "2039", nn: Configs_1.default.Login.Nickname, "at": Configs_1.default.Login.AccessToken, "pg": 1, "mi": 10, "ft": fromTime, "et": endTime }, function (err, res) {
            if (res != null) {
                //  cc.log(res);
                App_1.default.instance.showLoading(false);
                if (res['success']) {
                    _this.lbBonus1.string = Utils_1.default.formatMoney(res['data']['totalBonus']);
                    _this.lbTotalUser1.string = res['totalRecords'];
                }
            }
        });
    };
    PopupKiemTien.prototype.onGetListUser = function () {
        var _this = this;
        App_1.default.instance.showLoading(true);
        //http://localhost:8081/api?c=2039&nn=brightc&at=7898989&ft=2021-11-02&et=2021-11-30&pg=1&mi=10",
        Http_1.default.get(Configs_1.default.App.API, { c: "2039", nn: Configs_1.default.Login.Nickname, "at": Configs_1.default.Login.AccessToken, "pg": this.page, "mi": 6, }, function (err, res) {
            if (res != null) {
                //  cc.log("List user:\n", res);
                App_1.default.instance.showLoading(false);
                if (res['success']) {
                    var listUser = res['data']['userLevels'];
                    for (var i = 0, l = listUser.length; i < l; i++) {
                        var item = _this.scrListUser.content.children[i];
                        var dataUser = listUser[i];
                        if (!cc.isValid(item)) {
                            item = cc.instantiate(_this.scrListUser.content.children[0]);
                            item.parent = _this.scrListUser.content;
                        }
                        item.active = true;
                        item.getChildByName('lbNickname').getComponent(cc.Label).string = dataUser['nick_name'];
                        item.getChildByName('lbDayCreated').getComponent(cc.Label).string = dataUser['created_at'].substring(0, 19).replace(" ", "\n");
                        item.getChildByName('lbBonus').getComponent(cc.Label).string = Utils_1.default.formatNumber(dataUser['totalBonus']);
                    }
                    if (res['totalRecords'] <= 6) {
                        _this.totalPage = 1;
                    }
                    else {
                        _this.totalPage = res['totalRecords'] % 6 == 0 ? (res['totalRecords'] / 6) : Math.floor(res['totalRecords'] / 6) + 1;
                    }
                    _this.lbTotalPage_tabList.string = _this.page + "/" + _this.totalPage;
                    for (var i = listUser.length; i < _this.scrListUser.content.childrenCount; i++) {
                        _this.scrListUser.content.children[i].active = false;
                    }
                }
            }
        });
    };
    PopupKiemTien.prototype.onGetHistory = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Http_1.default.get(Configs_1.default.App.API, { c: "2038", nn: Configs_1.default.Login.Nickname, "at": Configs_1.default.Login.AccessToken, "st": this.status_history, "pg": this.page, "mi": 6 }, function (err, res) {
                            if (res != null) {
                                //  cc.log("history:\n", res);
                                App_1.default.instance.showLoading(false);
                                if (res['success']) {
                                    var listHistory = res['data']['userWages'];
                                    _this.btnReceive.active = listHistory.length > 0 ? true : false;
                                    var _loop_1 = function (i, l) {
                                        var item = _this.scrListHistory.content.children[i];
                                        var dataHistory = listHistory[i];
                                        if (!cc.isValid(item)) {
                                            item = cc.instantiate(_this.scrListHistory.content.children[0]);
                                            item.parent = _this.scrListHistory.content;
                                        }
                                        item.active = true;
                                        item.getChildByName('lbBonus').getComponent(cc.Label).string = Utils_1.default.formatNumber(dataHistory['bonus']);
                                        item.getChildByName('lbNickname').getComponent(cc.Label).string = dataHistory['nick_name'];
                                        item.getChildByName('btnReceive').active = dataHistory['status'] == 0;
                                        item.getChildByName('btnReceive').off("click");
                                        item.getChildByName('btnReceive').on("click", function () {
                                            //http://localhost:8081/api?c=2037&nn=brightc&at=7898989&id=1
                                            Http_1.default.get(Configs_1.default.App.API, { c: "2037", nn: Configs_1.default.Login.Nickname, "at": Configs_1.default.Login.AccessToken, "id": dataHistory['id'] }, function (err, res) {
                                                if (res['success']) {
                                                    App_1.default.instance.showToast("Nhận hoa hồng thành công: +" + Utils_1.default.formatMoney(dataHistory['bonus']));
                                                    _this.onGetHistory();
                                                }
                                                else {
                                                    App_1.default.instance.showToast("Có lỗi xảy ra, Vui lòng thử lại sau!");
                                                }
                                            });
                                        });
                                        item.getChildByName('lbTime').getComponent(cc.Label).string = dataHistory['created_at'].substring(0, 19).replace(" ", "\n");
                                        item['data'] = dataHistory;
                                    };
                                    for (var i = 0, l = listHistory.length; i < l; i++) {
                                        _loop_1(i, l);
                                    }
                                    if (res['totalRecords'] <= 6) {
                                        _this.totalPage = 1;
                                    }
                                    else {
                                        _this.totalPage = res['totalRecords'] % 6 == 0 ? (res['totalRecords'] / 6) : Math.floor(res['totalRecords'] / 6) + 1;
                                    }
                                    _this.lbTotalPage_tabHistory.string = _this.page + "/" + _this.totalPage;
                                    for (var i = listHistory.length; i < _this.scrListHistory.content.childrenCount; i++) {
                                        _this.scrListHistory.content.children[i].active = false;
                                    }
                                }
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PopupKiemTien.prototype.onChangeStatusHistory = function () {
        this.resetTab();
        this.status_history = this.status_history == 0 ? 1 : 0;
        this.btnReceive.active = this.status_history == 0;
        this.onGetHistory();
    };
    PopupKiemTien.prototype.onClickNext = function () {
        if (this.page == this.totalPage) {
            return;
        }
        this.page++;
        if (this.tab_popup == TAB_POPUP.LIST) {
            this.onGetListUser();
        }
        else {
            this.onGetHistory();
        }
    };
    PopupKiemTien.prototype.onClickPrevious = function () {
        if (this.page == 1) {
            return;
        }
        this.page--;
        if (this.tab_popup == TAB_POPUP.LIST) {
            this.onGetListUser();
        }
        else {
            this.onGetHistory();
        }
    };
    PopupKiemTien.prototype.onClickReceiveAll = function () {
        var _this = this;
        //http://localhost:8081/api?c=2037&nn=brightc&at=7898989&id=1",
        App_1.default.instance.showLoading(true);
        Http_1.default.get(Configs_1.default.App.API, { c: "2037", nn: Configs_1.default.Login.Nickname, "at": Configs_1.default.Login.AccessToken, "ac": "all" }, function (err, res) {
            if (res != null) {
                //  cc.log(res);
                App_1.default.instance.showLoading(false);
                if (res['success']) {
                    _this.onGetHistory();
                }
                else {
                    App_1.default.instance.ShowAlertDialog(res['message']);
                }
            }
        });
    };
    PopupKiemTien.prototype.onClickCopyInviteLink = function () {
        // if (navigator && navigator.clipboard) {
        //     navigator.clipboard.writeText(this.lbUrlInvite.string);
        // } else {
        //     console.log("Khong Cos Navigator trên native đâu");
        // }
        // Utils.copy(this.lbUrlInvite.string);
        if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.OS_IOS) {
            UtilsNative_1.default.copyClipboard(this.lbUrlInvite.string);
        }
        else {
            Utils_1.default.copy(this.lbUrlInvite.string);
        }
    };
    PopupKiemTien.prototype.onClickUpdateInviteCode = function () {
        var _this = this;
        var inviteCode = this.edbInviteCode.string.trim();
        if (inviteCode == "") {
            return;
        }
        App_1.default.instance.showLoading(true);
        Http_1.default.get(Configs_1.default.App.API, { c: "2040", nn: Configs_1.default.Login.Nickname, "at": Configs_1.default.Login.AccessToken, "ac": "update", "inv": inviteCode }, function (err, res) {
            if (res != null) {
                //  cc.log(res);
                App_1.default.instance.showLoading(false);
                if (res['success']) {
                    App_1.default.instance.ShowAlertDialog("Chúc mừng!\nBạn đã cập nhật mã giới thiệu thành công!");
                    _this.btnConfirm.node.active = false;
                    _this.edbInviteCode.enabled = false;
                    _this.lbTitleInvite.string = "Bạn là thành viên của";
                }
                else {
                    App_1.default.instance.ShowAlertDialog(res['message']);
                }
            }
        });
    };
    __decorate([
        property(cc.Button)
    ], PopupKiemTien.prototype, "btnConfirm", void 0);
    __decorate([
        property(cc.EditBox)
    ], PopupKiemTien.prototype, "edbInviteCode", void 0);
    __decorate([
        property(cc.Label)
    ], PopupKiemTien.prototype, "lbInviteCode", void 0);
    __decorate([
        property(cc.Label)
    ], PopupKiemTien.prototype, "lbTotalUser1", void 0);
    __decorate([
        property(cc.Label)
    ], PopupKiemTien.prototype, "lbTitleInvite", void 0);
    __decorate([
        property(cc.Label)
    ], PopupKiemTien.prototype, "lbBonus1", void 0);
    __decorate([
        property(cc.Label)
    ], PopupKiemTien.prototype, "lbUrlInvite", void 0);
    __decorate([
        property(cc.Label)
    ], PopupKiemTien.prototype, "lbTotalPage_tabList", void 0);
    __decorate([
        property(cc.Label)
    ], PopupKiemTien.prototype, "lbTotalPage_tabHistory", void 0);
    __decorate([
        property(cc.Node)
    ], PopupKiemTien.prototype, "NodeInfo", void 0);
    __decorate([
        property(cc.Node)
    ], PopupKiemTien.prototype, "NodeListUser", void 0);
    __decorate([
        property(cc.Node)
    ], PopupKiemTien.prototype, "NodeHistory", void 0);
    __decorate([
        property(cc.Node)
    ], PopupKiemTien.prototype, "NodePolicy", void 0);
    __decorate([
        property(cc.Node)
    ], PopupKiemTien.prototype, "btnReceive", void 0);
    __decorate([
        property(cc.Toggle)
    ], PopupKiemTien.prototype, "toggleInfo", void 0);
    __decorate([
        property(cc.Node)
    ], PopupKiemTien.prototype, "nodeTabContainer", void 0);
    __decorate([
        property(cc.ScrollView)
    ], PopupKiemTien.prototype, "scrListUser", void 0);
    __decorate([
        property(cc.ScrollView)
    ], PopupKiemTien.prototype, "scrListHistory", void 0);
    PopupKiemTien = __decorate([
        ccclass
    ], PopupKiemTien);
    return PopupKiemTien;
}(Dialog_1.default));
exports.default = PopupKiemTien;

cc._RF.pop();