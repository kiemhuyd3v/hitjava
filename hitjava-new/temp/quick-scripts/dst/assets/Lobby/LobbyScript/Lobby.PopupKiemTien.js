
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.PopupKiemTien.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5Qb3B1cEtpZW1UaWVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUNoRCwrQ0FBMEM7QUFDMUMsNkRBQXdEO0FBQ3hELDJDQUFzQztBQUN0QyxpREFBNEM7QUFDNUMsK0NBQTBDO0FBRXBDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLElBQUksU0FBUyxHQUFHO0lBQ1osSUFBSSxFQUFFLENBQUM7SUFDUCxJQUFJLEVBQUUsQ0FBQztJQUNQLE9BQU8sRUFBRSxDQUFDO0lBQ1YsTUFBTSxFQUFFLENBQUM7Q0FDWixDQUFBO0FBRUQ7SUFBMkMsaUNBQU07SUFBakQ7UUFFSSx3QkFBd0I7UUFGNUIscUVBc1ZDO1FBbFZHLGVBQWU7UUFFZixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixtQkFBYSxHQUFlLElBQUksQ0FBQztRQUVqQyxrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5QixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5QixtQkFBYSxHQUFhLElBQUksQ0FBQztRQUUvQixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRTdCLHlCQUFtQixHQUFhLElBQUksQ0FBQztRQUVyQyw0QkFBc0IsR0FBYSxJQUFJLENBQUM7UUFFeEMsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3Qixz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Q1k7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDTztJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNVO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OERBQ2tCO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aUVBQ3FCO0lBRXhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDVztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNTO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkRBQ2U7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQztzREFDVTtJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDO3lEQUNhO0lBeENwQixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBc1ZqQztJQUFELG9CQUFDO0NBdFZELEFBc1ZDLENBdFYwQyxnQkFBTSxHQXNWaEQ7a0JBdFZvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBIdHRwIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9IdHRwXCI7XG5pbXBvcnQgVXRpbHNOYXRpdmUgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL1V0aWxzTmF0aXZlXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCIuL1NjcmlwdC9jb21tb24vRGlhbG9nXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xudmFyIFRBQl9QT1BVUCA9IHtcbiAgICBJTkZPOiAwLFxuICAgIExJU1Q6IDEsXG4gICAgSElTVE9SWTogMixcbiAgICBQT0xJQ1k6IDNcbn1cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cEtpZW1UaWVuIGV4dGVuZHMgRGlhbG9nIHtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG5Db25maXJtOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIGVkYkludml0ZUNvZGU6IGNjLkVkaXRCb3ggPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkludml0ZUNvZGU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJUb3RhbFVzZXIxOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiVGl0bGVJbnZpdGU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJCb251czE6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJVcmxJbnZpdGU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJUb3RhbFBhZ2VfdGFiTGlzdDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYlRvdGFsUGFnZV90YWJIaXN0b3J5OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgTm9kZUluZm86IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIE5vZGVMaXN0VXNlcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgTm9kZUhpc3Rvcnk6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIE5vZGVQb2xpY3k6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0blJlY2VpdmU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXG4gICAgdG9nZ2xlSW5mbzogY2MuVG9nZ2xlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlVGFiQ29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcbiAgICBzY3JMaXN0VXNlcjogY2MuU2Nyb2xsVmlldyA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNjcm9sbFZpZXcpXG4gICAgc2NyTGlzdEhpc3Rvcnk6IGNjLlNjcm9sbFZpZXcgPSBudWxsO1xuICAgIHBhZ2UgPSAxO1xuICAgIHRvdGFsUGFnZSA9IDE7XG4gICAgdGFiX3BvcHVwID0gMDtcbiAgICBzdGF0dXNfaGlzdG9yeSA9IDA7XG4gICAgaGlzdG9yeURhdGEgPSBbXTtcblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuICAgIHNob3coKSB7XG4gICAgICAgIHN1cGVyLnNob3coKTtcbiAgICAgICAgdGhpcy50b2dnbGVJbmZvLnVuY2hlY2soKTtcbiAgICAgICAgdGhpcy50b2dnbGVJbmZvLmNoZWNrKCk7XG4gICAgICAgIHRoaXMubGJVcmxJbnZpdGUuc3RyaW5nID0gY2MuanMuZm9ybWF0U3RyKFwiaHR0cHM6Ly9wbGF5LkZBTlZJTi53SU4vP2FmZj0lc1wiLCBDb25maWdzLkxvZ2luLk5pY2tuYW1lKTtcbiAgICAgICAgdGhpcy5sYkludml0ZUNvZGUuc3RyaW5nID0gQ29uZmlncy5Mb2dpbi5OaWNrbmFtZTtcbiAgICAgICAgdGhpcy5lZGJJbnZpdGVDb2RlLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmVkYkludml0ZUNvZGUuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgdGhpcy5sYlRpdGxlSW52aXRlLnN0cmluZyA9IFwiTmjhuq1wIG3DoyBnaeG7m2kgdGhp4buHdTpcIjtcbiAgICAgICAgdGhpcy5idG5Db25maXJtLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgSHR0cC5nZXQoQ29uZmlncy5BcHAuQVBJLCB7IGM6IFwiMjA0MFwiLCBubjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgXCJhdFwiOiBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuLCBcImFjXCI6IFwiZ2V0XCIgfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyAgY2MubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzWydzdWNjZXNzJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc1snZGF0YSddICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWRiSW52aXRlQ29kZS5zdHJpbmcgPSByZXNbJ2RhdGEnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWRiSW52aXRlQ29kZS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxiVGl0bGVJbnZpdGUuc3RyaW5nID0gXCJC4bqhbiBsw6AgdGjDoG5oIHZpw6puIGPhu6dhIFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Db25maXJtLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKHJlc1snbWVzc2FnZSddKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY2Muc3lzLmlzQnJvd3Nlcikge1xuICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlVSTCBHYW1lPT1cIiArIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgICAgIC8vIGxldCB1cmwgPSBcImh0dHBzOi8vcGxheS5GQU5WSU4ud0lOLz9hZmY9Tmh1bmdOZ2FvNFwiO1xuICAgICAgICAgICAgaWYgKHVybC5pbmNsdWRlcyhcImFmZj1cIikpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXhPZkVxdWFsID0gdXJsLmluZGV4T2YoXCI9XCIpO1xuICAgICAgICAgICAgICAgIGxldCBpbnZpdGVDb2RlID0gdXJsLnN1YnN0cmluZyhpbmRleE9mRXF1YWwgKyAxLCB1cmwubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVkYkludml0ZUNvZGUuc3RyaW5nID0gaW52aXRlQ29kZTtcbiAgICAgICAgICAgICAgICB0aGlzLmVkYkludml0ZUNvZGUuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldEluZm9BbGwoKSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgSHR0cC5nZXQoQ29uZmlncy5BcHAuQVBJLCB7IGM6IFwiMjAzOVwiLCBubjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgXCJhdFwiOiBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuLCBcInBnXCI6IDEsIFwibWlcIjogNiwgfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyAgY2MubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzWydzdWNjZXNzJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYkJvbnVzMS5zdHJpbmcgPSBVdGlscy5mb3JtYXRNb25leShyZXNbJ2RhdGEnXVsndG90YWxCb251cyddKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYlRvdGFsVXNlcjEuc3RyaW5nID0gcmVzWyd0b3RhbFJlY29yZHMnXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvbkNoYW5nZVRhYihldmVuOiBjYy5Ub2dnbGUpIHtcbiAgICAgICAgaWYgKGV2ZW4ubm9kZS5uYW1lID09IFwidGFiSW5mb1wiKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVUYWJDb250YWluZXIuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlRvZ2dsZSkuY2hlY2soKTtcbiAgICAgICAgICAgIHRoaXMudGFiX3BvcHVwID0gVEFCX1BPUFVQLklORk87XG4gICAgICAgICAgICB0aGlzLmdldEluZm9BbGwoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChldmVuLm5vZGUubmFtZSA9PSBcInRhYkxpc3RcIikge1xuICAgICAgICAgICAgdGhpcy5ub2RlVGFiQ29udGFpbmVyLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5Ub2dnbGUpLmNoZWNrKCk7XG4gICAgICAgICAgICB0aGlzLnJlc2V0VGFiKCk7XG4gICAgICAgICAgICB0aGlzLm9uR2V0TGlzdFVzZXIoKTtcbiAgICAgICAgICAgIHRoaXMudGFiX3BvcHVwID0gVEFCX1BPUFVQLkxJU1RcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChldmVuLm5vZGUubmFtZSA9PSBcInRhYkhpc3RvcnlcIikge1xuICAgICAgICAgICAgdGhpcy5ub2RlVGFiQ29udGFpbmVyLmNoaWxkcmVuWzJdLmdldENvbXBvbmVudChjYy5Ub2dnbGUpLmNoZWNrKCk7XG4gICAgICAgICAgICB0aGlzLnJlc2V0VGFiKCk7XG4gICAgICAgICAgICB0aGlzLm9uR2V0SGlzdG9yeSgpO1xuICAgICAgICAgICAgdGhpcy50YWJfcG9wdXAgPSBUQUJfUE9QVVAuSElTVE9SWVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2ZW4ubm9kZS5uYW1lID09IFwidGFiUG9saWN5XCIpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZVRhYkNvbnRhaW5lci5jaGlsZHJlblszXS5nZXRDb21wb25lbnQoY2MuVG9nZ2xlKS5jaGVjaygpO1xuICAgICAgICAgICAgdGhpcy50YWJfcG9wdXAgPSBUQUJfUE9QVVAuUE9MSUNZO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc2V0VGFiKCkge1xuICAgICAgICB0aGlzLnBhZ2UgPSAxO1xuICAgICAgICB0aGlzLnRvdGFsUGFnZSA9IDE7XG4gICAgfVxuICAgIG9uVG9nZ2xlQ2hhbmdlVGFiU3VtYXJ5KGV2ZW4sIGRhdGEpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IGRheSA9IGN1cnJlbnRUaW1lLmdldERhdGUoKTtcbiAgICAgICAgbGV0IG1vbnRoID0gY3VycmVudFRpbWUuZ2V0TW9udGgoKSArIDFcbiAgICAgICAgbGV0IHllYXIgPSBjdXJyZW50VGltZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBsZXQgZnJvbVRpbWUgPSBcIlwiO1xuICAgICAgICBsZXQgZW5kVGltZSA9IFwiXCI7XG4gICAgICAgIHN3aXRjaCAoZGF0YSkge1xuICAgICAgICAgICAgY2FzZSBcIjFcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmdldEluZm9BbGwoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIyXCI6Ly90b2RheVxuICAgICAgICAgICAgICAgIGZyb21UaW1lID0geWVhciArIFwiLVwiICsgbW9udGggKyBcIi1cIiArIGRheTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uR2V0U3VtYXJ5KGZyb21UaW1lLCBmcm9tVGltZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiM1wiOi8veWVzdGVyZGF5XG4gICAgICAgICAgICAgICAgZGF5ID0gZGF5IC0gMTtcbiAgICAgICAgICAgICAgICBpZiAoZGF5ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFsxLCAzLCA1LCA3LCA4LCAxMCwgMTJdLmluY2x1ZGVzKG1vbnRoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF5ID0gMzFcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheSA9IDMwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG1vbnRoID0gbW9udGggLSAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAobW9udGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9udGggPSAxMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmcm9tVGltZSA9IHllYXIgKyBcIi1cIiArIG1vbnRoICsgXCItXCIgKyBkYXk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkdldFN1bWFyeShmcm9tVGltZSwgZnJvbVRpbWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjRcIjovL3RoaXMgbW9udGhcbiAgICAgICAgICAgICAgICBmcm9tVGltZSA9IHllYXIgKyBcIi1cIiArIG1vbnRoICsgXCItXCIgKyAxO1xuICAgICAgICAgICAgICAgIGVuZFRpbWUgPSB5ZWFyICsgXCItXCIgKyBtb250aCArIFwiLVwiICsgZGF5O1xuICAgICAgICAgICAgICAgIHRoaXMub25HZXRTdW1hcnkoZnJvbVRpbWUsIGVuZFRpbWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uR2V0U3VtYXJ5KGZyb21UaW1lLCBlbmRUaW1lKSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgLy9odHRwOi8vbG9jYWxob3N0OjgwODEvYXBpP2M9MjAzOCZubj1icmlnaHRjJmF0PTc4OTg5ODkmZnQ9MjAyMS0xMS0wMiZldD0yMDIxLTExLTMwJnN0PTAmcGc9MSZtaT0xMFxuICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHsgYzogXCIyMDM5XCIsIG5uOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBcImF0XCI6IENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4sIFwicGdcIjogMSwgXCJtaVwiOiAxMCwgXCJmdFwiOiBmcm9tVGltZSwgXCJldFwiOiBlbmRUaW1lIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc1snc3VjY2VzcyddKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJCb251czEuc3RyaW5nID0gVXRpbHMuZm9ybWF0TW9uZXkocmVzWydkYXRhJ11bJ3RvdGFsQm9udXMnXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJUb3RhbFVzZXIxLnN0cmluZyA9IHJlc1sndG90YWxSZWNvcmRzJ107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25HZXRMaXN0VXNlcigpIHtcbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICAvL2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MS9hcGk/Yz0yMDM5Jm5uPWJyaWdodGMmYXQ9Nzg5ODk4OSZmdD0yMDIxLTExLTAyJmV0PTIwMjEtMTEtMzAmcGc9MSZtaT0xMFwiLFxuICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHsgYzogXCIyMDM5XCIsIG5uOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBcImF0XCI6IENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4sIFwicGdcIjogdGhpcy5wYWdlLCBcIm1pXCI6IDYsIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkxpc3QgdXNlcjpcXG5cIiwgcmVzKTtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNbJ3N1Y2Nlc3MnXSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdFVzZXIgPSByZXNbJ2RhdGEnXVsndXNlckxldmVscyddO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxpc3RVc2VyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLnNjckxpc3RVc2VyLmNvbnRlbnQuY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YVVzZXIgPSBsaXN0VXNlcltpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2MuaXNWYWxpZChpdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNjckxpc3RVc2VyLmNvbnRlbnQuY2hpbGRyZW5bMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50ID0gdGhpcy5zY3JMaXN0VXNlci5jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZSgnbGJOaWNrbmFtZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZGF0YVVzZXJbJ25pY2tfbmFtZSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZSgnbGJEYXlDcmVhdGVkJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBkYXRhVXNlclsnY3JlYXRlZF9hdCddLnN1YnN0cmluZygwLCAxOSkucmVwbGFjZShcIiBcIiwgXCJcXG5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKCdsYkJvbnVzJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoZGF0YVVzZXJbJ3RvdGFsQm9udXMnXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc1sndG90YWxSZWNvcmRzJ10gPD0gNikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbFBhZ2UgPSAxO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbFBhZ2UgPSByZXNbJ3RvdGFsUmVjb3JkcyddICUgNiA9PSAwID8gKHJlc1sndG90YWxSZWNvcmRzJ10gLyA2KSA6IE1hdGguZmxvb3IocmVzWyd0b3RhbFJlY29yZHMnXSAvIDYpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxiVG90YWxQYWdlX3RhYkxpc3Quc3RyaW5nID0gdGhpcy5wYWdlICsgXCIvXCIgKyB0aGlzLnRvdGFsUGFnZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGxpc3RVc2VyLmxlbmd0aDsgaSA8IHRoaXMuc2NyTGlzdFVzZXIuY29udGVudC5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NyTGlzdFVzZXIuY29udGVudC5jaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgb25HZXRIaXN0b3J5KCkge1xuICAgICAgICBhd2FpdCBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHsgYzogXCIyMDM4XCIsIG5uOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBcImF0XCI6IENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4sIFwic3RcIjogdGhpcy5zdGF0dXNfaGlzdG9yeSwgXCJwZ1wiOiB0aGlzLnBhZ2UsIFwibWlcIjogNiB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJoaXN0b3J5OlxcblwiLCByZXMpO1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc1snc3VjY2VzcyddKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsaXN0SGlzdG9yeSA9IHJlc1snZGF0YSddWyd1c2VyV2FnZXMnXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5SZWNlaXZlLmFjdGl2ZSA9IGxpc3RIaXN0b3J5Lmxlbmd0aCA+IDAgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGlzdEhpc3RvcnkubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuc2NyTGlzdEhpc3RvcnkuY29udGVudC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhSGlzdG9yeSA9IGxpc3RIaXN0b3J5W2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2NyTGlzdEhpc3RvcnkuY29udGVudC5jaGlsZHJlblswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wYXJlbnQgPSB0aGlzLnNjckxpc3RIaXN0b3J5LmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKCdsYkJvbnVzJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoZGF0YUhpc3RvcnlbJ2JvbnVzJ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZSgnbGJOaWNrbmFtZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZGF0YUhpc3RvcnlbJ25pY2tfbmFtZSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZSgnYnRuUmVjZWl2ZScpLmFjdGl2ZSA9IGRhdGFIaXN0b3J5WydzdGF0dXMnXSA9PSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZSgnYnRuUmVjZWl2ZScpLm9mZihcImNsaWNrXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZSgnYnRuUmVjZWl2ZScpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaHR0cDovL2xvY2FsaG9zdDo4MDgxL2FwaT9jPTIwMzcmbm49YnJpZ2h0YyZhdD03ODk4OTg5JmlkPTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHsgYzogXCIyMDM3XCIsIG5uOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBcImF0XCI6IENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4sIFwiaWRcIjogZGF0YUhpc3RvcnlbJ2lkJ10gfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNbJ3N1Y2Nlc3MnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dUb2FzdChcIk5o4bqtbiBob2EgaOG7k25nIHRow6BuaCBjw7RuZzogK1wiICsgVXRpbHMuZm9ybWF0TW9uZXkoZGF0YUhpc3RvcnlbJ2JvbnVzJ10pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25HZXRIaXN0b3J5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd1RvYXN0KFwiQ8OzIGzhu5dpIHjhuqN5IHJhLCBWdWkgbMOybmcgdGjhu60gbOG6oWkgc2F1IVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoJ2xiVGltZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZGF0YUhpc3RvcnlbJ2NyZWF0ZWRfYXQnXS5zdWJzdHJpbmcoMCwgMTkpLnJlcGxhY2UoXCIgXCIsIFwiXFxuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVsnZGF0YSddID0gZGF0YUhpc3Rvcnk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc1sndG90YWxSZWNvcmRzJ10gPD0gNikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbFBhZ2UgPSAxO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbFBhZ2UgPSByZXNbJ3RvdGFsUmVjb3JkcyddICUgNiA9PSAwID8gKHJlc1sndG90YWxSZWNvcmRzJ10gLyA2KSA6IE1hdGguZmxvb3IocmVzWyd0b3RhbFJlY29yZHMnXSAvIDYpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxiVG90YWxQYWdlX3RhYkhpc3Rvcnkuc3RyaW5nID0gdGhpcy5wYWdlICsgXCIvXCIgKyB0aGlzLnRvdGFsUGFnZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGxpc3RIaXN0b3J5Lmxlbmd0aDsgaSA8IHRoaXMuc2NyTGlzdEhpc3RvcnkuY29udGVudC5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NyTGlzdEhpc3RvcnkuY29udGVudC5jaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uQ2hhbmdlU3RhdHVzSGlzdG9yeSgpIHtcbiAgICAgICAgdGhpcy5yZXNldFRhYigpO1xuICAgICAgICB0aGlzLnN0YXR1c19oaXN0b3J5ID0gdGhpcy5zdGF0dXNfaGlzdG9yeSA9PSAwID8gMSA6IDA7XG4gICAgICAgIHRoaXMuYnRuUmVjZWl2ZS5hY3RpdmUgPSB0aGlzLnN0YXR1c19oaXN0b3J5ID09IDA7XG4gICAgICAgIHRoaXMub25HZXRIaXN0b3J5KCk7XG4gICAgfVxuICAgIG9uQ2xpY2tOZXh0KCkge1xuICAgICAgICBpZiAodGhpcy5wYWdlID09IHRoaXMudG90YWxQYWdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYWdlKys7XG4gICAgICAgIGlmICh0aGlzLnRhYl9wb3B1cCA9PSBUQUJfUE9QVVAuTElTVCkge1xuICAgICAgICAgICAgdGhpcy5vbkdldExpc3RVc2VyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uR2V0SGlzdG9yeSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uQ2xpY2tQcmV2aW91cygpIHtcbiAgICAgICAgaWYgKHRoaXMucGFnZSA9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYWdlLS07XG4gICAgICAgIGlmICh0aGlzLnRhYl9wb3B1cCA9PSBUQUJfUE9QVVAuTElTVCkge1xuICAgICAgICAgICAgdGhpcy5vbkdldExpc3RVc2VyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uR2V0SGlzdG9yeSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uQ2xpY2tSZWNlaXZlQWxsKCkge1xuICAgICAgICAvL2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MS9hcGk/Yz0yMDM3Jm5uPWJyaWdodGMmYXQ9Nzg5ODk4OSZpZD0xXCIsXG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgSHR0cC5nZXQoQ29uZmlncy5BcHAuQVBJLCB7IGM6IFwiMjAzN1wiLCBubjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgXCJhdFwiOiBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuLCBcImFjXCI6IFwiYWxsXCIgfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyAgY2MubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzWydzdWNjZXNzJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkdldEhpc3RvcnkoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKHJlc1snbWVzc2FnZSddKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvbkNsaWNrQ29weUludml0ZUxpbmsoKSB7XG4gICAgICAgIC8vIGlmIChuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLmNsaXBib2FyZCkge1xuICAgICAgICAvLyAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGhpcy5sYlVybEludml0ZS5zdHJpbmcpO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJLaG9uZyBDb3MgTmF2aWdhdG9yIHRyw6puIG5hdGl2ZSDEkcOidVwiKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBVdGlscy5jb3B5KHRoaXMubGJVcmxJbnZpdGUuc3RyaW5nKTtcbiAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUykge1xuICAgICAgICAgICAgVXRpbHNOYXRpdmUuY29weUNsaXBib2FyZCh0aGlzLmxiVXJsSW52aXRlLnN0cmluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBVdGlscy5jb3B5KHRoaXMubGJVcmxJbnZpdGUuc3RyaW5nKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIG9uQ2xpY2tVcGRhdGVJbnZpdGVDb2RlKCkge1xuICAgICAgICBsZXQgaW52aXRlQ29kZSA9IHRoaXMuZWRiSW52aXRlQ29kZS5zdHJpbmcudHJpbSgpO1xuICAgICAgICBpZiAoaW52aXRlQ29kZSA9PSBcIlwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHsgYzogXCIyMDQwXCIsIG5uOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBcImF0XCI6IENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4sIFwiYWNcIjogXCJ1cGRhdGVcIiwgXCJpbnZcIjogaW52aXRlQ29kZSB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vICBjYy5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNbJ3N1Y2Nlc3MnXSkge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKFwiQ2jDumMgbeG7q25nIVxcbkLhuqFuIMSRw6MgY+G6rXAgbmjhuq10IG3DoyBnaeG7m2kgdGhp4buHdSB0aMOgbmggY8O0bmchXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkNvbmZpcm0ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGJJbnZpdGVDb2RlLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYlRpdGxlSW52aXRlLnN0cmluZyA9IFwiQuG6oW4gbMOgIHRow6BuaCB2acOqbiBj4bunYVwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2cocmVzWydtZXNzYWdlJ10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==