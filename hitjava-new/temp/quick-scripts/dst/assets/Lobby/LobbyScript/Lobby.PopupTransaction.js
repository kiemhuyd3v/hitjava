
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.PopupTransaction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4b73fN7osxHRJLHaaKoYUQR', 'Lobby.PopupTransaction');
// Lobby/LobbyScript/Lobby.PopupTransaction.ts

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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Configs_1 = require("../../Loading/src/Configs");
var Http_1 = require("../../Loading/src/Http");
var App_1 = require("./Script/common/App");
var Dialog_1 = require("./Script/common/Dialog");
var Utils_1 = require("./Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupTransaction = /** @class */ (function (_super) {
    __extends(PopupTransaction, _super);
    function PopupTransaction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.contentNapRut = null;
        _this.prefab = null;
        _this.itemNapRut = null;
        _this.tabs = null;
        _this.lblPage = null;
        _this.tabPlay = null;
        _this.tabNapRut = null;
        _this.fontNumber = [];
        _this.page = 1;
        _this.maxPage = 1;
        _this.items = new Array();
        _this.tabSelectedIdx = 0;
        _this.data = null;
        _this.dataPlay = [];
        _this.dataCashout = [];
        _this.dataExchange = [];
        _this.currentData = [];
        _this.totalPageLoaded = 0;
        _this.GameName = {
            110: "Đua Xe",
            170: "Crypto",
            2: "Tài Xỉu",
            5: "Xèng",
            11: "Tiến Lên",
            160: "Chim Điên",
            120: "Thần Tài",
            150: "Thể Thao",
            1: "MiniPoker",
            3: "Bầu Cua",
            9: "Ba Cây",
            4: "Cao Thấp",
            191: "Chiêm Tinh",
            190: "Tài Xỉu Siêu Tốc",
            12: "Xóc Đĩa",
            180: "Thần Bài",
            197: "Bikini",
            198: "Gem",
        };
        return _this;
    }
    PopupTransaction.prototype.onLoad = function () {
        var scrollViewEventHandler = new cc.Component.EventHandler();
        scrollViewEventHandler.target = this.node; // This node is the node to which your event handler code component belongs
        scrollViewEventHandler.component = "Lobby.PopupTransaction"; // This is the code file name
        scrollViewEventHandler.handler = "onScrollEvent";
    };
    PopupTransaction.prototype.start = function () {
        var _this = this;
        var _loop_1 = function (i) {
            this_1.tabs.toggleItems[i].node.on("toggle", function () {
                _this.tabSelectedIdx = i;
                _this.updateTabsTitleColor();
                _this.page = 1;
                _this.resetDataLoaded();
                _this.loadData();
                _this.tabPlay.active = _this.tabSelectedIdx == 0 ? true : false;
                _this.tabNapRut.active = _this.tabSelectedIdx == 0 ? false : true;
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.tabs.toggleItems.length; i++) {
            _loop_1(i);
        }
    };
    PopupTransaction.prototype.onEnable = function () {
        this.tabSelectedIdx = 0;
        this.updateTabsTitleColor();
        this.tabs.toggleItems[0].isChecked = true;
    };
    PopupTransaction.prototype.updateTabsTitleColor = function () {
        for (var j = 0; j < this.tabs.toggleItems.length; j++) {
            this.tabs.toggleItems[j].node.getComponentInChildren(cc.Label).node.color = j == this.tabSelectedIdx ? cc.Color.YELLOW : cc.Color.WHITE;
        }
    };
    PopupTransaction.prototype.dismiss = function () {
        _super.prototype.dismiss.call(this);
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].active = false;
        }
    };
    PopupTransaction.prototype._onShowed = function () {
        _super.prototype._onShowed.call(this);
        this.page = 1;
        this.maxPage = 1;
        this.lblPage.string = this.page + "/" + this.maxPage;
        this.loadData();
    };
    PopupTransaction.prototype.show = function () {
        _super.prototype.show.call(this);
        this.resetDataLoaded();
        this.currentData = [];
        this.data;
        this.tabSelectedIdx = 0;
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].active = false;
        }
    };
    PopupTransaction.prototype.resetDataLoaded = function () {
        this.totalPageLoaded = 0;
        this.currentData = [];
        this.dataCashout = [];
        this.dataPlay = [];
        this.dataExchange = [];
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].active = false;
        }
    };
    PopupTransaction.prototype.actNextPage = function () {
        if (this.page < this.maxPage) {
            this.page++;
            this.lblPage.string = this.page + "/" + this.maxPage;
            this.loadData();
        }
    };
    PopupTransaction.prototype.actPrevPage = function () {
        if (this.page > 1) {
            this.page--;
            this.lblPage.string = this.page + "/" + this.maxPage;
            this.loadData();
        }
    };
    PopupTransaction.prototype.parseDescriptionJson = function (item, itemData) {
        var desJson = JSON.parse(itemData["description"]);
        item.getChildByName("Service").getComponent(cc.Label).string = this.GameName[desJson["gameID"]];
        var gameID = desJson["gameID"];
        switch (gameID) {
            case "110":
            case "170":
            case "5":
            case "160":
            case "120":
            case "150":
            case "191":
            case "180":
            case "197":
            case "198":
                //slot
                if (desJson["type"] == 0) {
                    //dat cuocf
                    item.getChildByName("Desc").getComponent(cc.RichText).string = "<color=#e12e0b>Đặt cược : " + Utils_1.default.formatNumber(itemData["moneyExchange"]) + "</color>";
                }
                else if (desJson["type"] == 1) {
                    item.getChildByName("Desc").getComponent(cc.RichText).string = "Thưởng nhân hũ " + this.GameName[desJson["gameID"]];
                }
                else {
                    switch (desJson["result"]) {
                        case 5:
                        case 1:
                            var msg = "<color=#e12e0b>Đặt cược : -" + Utils_1.default.formatNumber(desJson["totalbet"]) + "\n</color>";
                            msg += "<color=#f0bf0b>Trả thưởng : +" + Utils_1.default.formatNumber(desJson["totalPrizes"]) + "</color>";
                            item.getChildByName("Desc").getComponent(cc.RichText).string = msg;
                            break;
                        case 2:
                            var msg = "<color=#e12e0b>Đặt cược : -" + Utils_1.default.formatNumber(desJson["totalbet"]) + "\n</color>";
                            msg += "<color=#f0bf0b>Thắng lớn : +" + Utils_1.default.formatNumber(desJson["totalPrizes"]) + "</color>";
                            item.getChildByName("Desc").getComponent(cc.RichText).string = msg;
                            break;
                        case 3:
                            var msg = "<color=#e12e0b>Đặt cược : -" + Utils_1.default.formatNumber(desJson["totalbet"]) + "\n</color>";
                            msg += "<color=#f0bf0b>Nỗ hủ : +" + Utils_1.default.formatNumber(desJson["totalPrizes"]) + "</color>";
                            item.getChildByName("Desc").getComponent(cc.RichText).string = msg;
                            break;
                        case 4:
                            var msg = "<color=#e12e0b>Đặt cược : -" + Utils_1.default.formatNumber(desJson["totalbet"]) + "\n</color>";
                            msg += "<color=#f0bf0b>X2 Nỗ hủ : +" + Utils_1.default.formatNumber(desJson["totalPrizes"]) + "</color>";
                            item.getChildByName("Desc").getComponent(cc.RichText).string = msg;
                            break;
                    }
                }
                break;
            case "2":
                //tai xiu
                if (desJson["type"] == 6) {
                    var msg = "<color=#fbf2e1>Phiên : #" + desJson["referenceId"] + "\n</color>";
                    msg += "<color=e12e0b>\nCược : " + (desJson["betSide"] == 0 ? "Xỉu" : "Tài") + "</color>";
                    item.getChildByName("Desc").getComponent(cc.RichText).string = msg;
                }
                else if (desJson["type"] == 7) {
                    if (desJson["action"] == 0) {
                        var msg = "<color=#fbf2e1>Phiên : #" + desJson["referenceId"] + "\n</color>";
                        msg += "<color=#f0bf0b>Trả Cược : +" + Utils_1.default.formatNumber(itemData["moneyExchange"]) + "</color>";
                        item.getChildByName("Desc").getComponent(cc.RichText).string = msg;
                    }
                    else if (desJson["action"] == 1) {
                        var msg = "<color=#fbf2e1>Phiên : #" + desJson["referenceId"] + "\n</color>";
                        msg += "<color=#f0bf0b>Trả Thưởng : +" + Utils_1.default.formatNumber(itemData["moneyExchange"]) + "</color>";
                        item.getChildByName("Desc").getComponent(cc.RichText).string = msg;
                    }
                    else if (desJson["action"] == 2) {
                        var msg = "<color=#fbf2e1>Phiên : #" + desJson["referenceId"] + "\n</color>";
                        msg += "<color=#f0bf0b>Hoàn Tiền : +" + Utils_1.default.formatNumber(itemData["moneyExchange"]) + "</color>";
                        item.getChildByName("Desc").getComponent(cc.RichText).string = msg;
                    }
                    else if (desJson["action"] == 3) {
                        var msg = "<color=#fbf2e1>Phiên : #" + desJson["referenceId"] + "\n</color>";
                        msg += "<color=#f0bf0b>Nổ Hũ : +" + Utils_1.default.formatNumber(itemData["moneyExchange"]) + "</color>";
                        item.getChildByName("Desc").getComponent(cc.RichText).string = msg;
                    }
                }
                break;
            case "3":
                //bau cua
                if (desJson["action"] == 0) {
                    var msg = "<color=#fbf2e1>Phiên : #" + desJson["referenceId"] + "\n</color>";
                    msg += "<color=#e12e0b>Đặt Cược : " + Utils_1.default.formatNumber(itemData["moneyExchange"]) + "</color>";
                    item.getChildByName("Desc").getComponent(cc.RichText).string = msg;
                }
                else if (desJson["action"] == 1) {
                    var msg = "<color=#fbf2e1>Phiên : #" + desJson["referenceId"] + "\n</color>";
                    msg += "<color=#f0bf0b>Trả Cược : +" + Utils_1.default.formatNumber(itemData["moneyExchange"]) + "</color>";
                    item.getChildByName("Desc").getComponent(cc.RichText).string = msg;
                }
                else if (desJson["action"] == 2) {
                    var msg = "<color=#fbf2e1>Phiên : #" + desJson["referenceId"] + "\n</color>";
                    msg += "<color=#f0bf0b>Trả Thưởng : +" + Utils_1.default.formatNumber(itemData["moneyExchange"]) + "</color>";
                    item.getChildByName("Desc").getComponent(cc.RichText).string = msg;
                }
                break;
            case "4":
                //cao thap
                if (desJson["action"] == 0) {
                    var msg = "<color=#fbf2e1>Phiên : #" + desJson["referenceId"] + "  Số bước:" + desJson["step"] + "\n</color>";
                    msg += "<color=#e12e0b>Đặt Cược : " + Utils_1.default.formatNumber(itemData["moneyExchange"]) + "</color>";
                    item.getChildByName("Desc").getComponent(cc.RichText).string = msg;
                }
                else if (desJson["action"] == 1) {
                    var msg = "<color=#fbf2e1>Phiên : #" + desJson["referenceId"] + "  Số bước:" + desJson["step"] + "\n</color>";
                    msg += "<color=#f0bf0b>Thắng Thường : +" + Utils_1.default.formatNumber(itemData["moneyExchange"]) + "</color>";
                    item.getChildByName("Desc").getComponent(cc.RichText).string = msg;
                }
                else if (desJson["action"] == 2) {
                    var msg = "<color=#fbf2e1>Phiên : #" + desJson["referenceId"] + "  Số bước:" + desJson["step"] + "\n</color>";
                    msg += "<color=#f0bf0b>Nỗ Hũ : +" + Utils_1.default.formatNumber(itemData["moneyExchange"]) + "</color>";
                    item.getChildByName("Desc").getComponent(cc.RichText).string = msg;
                }
                break;
            case "11":
                var msg = "<color=#fbf2e1>Phiên : #" + desJson["matchID"] + "\n</color>";
                msg += "<color=#fbf2e1>Phòng : " + desJson["roomID"] + "</color>";
                item.getChildByName("Desc").getComponent(cc.RichText).string = msg;
                break;
            case "15":
                var msg = "<color=#fbf2e1>Phiên : #" + desJson["matchID"] + "\n</color>";
                msg += "<color=#fbf2e1>Phòng : " + desJson["roomID"] + "</color>";
                msg += "    <color=#e12e0b>\nCược : " + Utils_1.default.formatNumber(itemData["moneyExchange"]) + "</color>";
                item.getChildByName("Desc").getComponent(cc.RichText).string = msg;
                item.getChildByName("Service").getComponent(cc.Label).string = "Xóc Đĩa";
                break;
            case "9":
                var msg = "<color=#fbf2e1>Phiên : #" + desJson["matchID"] + "\n</color>";
                msg += "<color=#fbf2e1>Phòng : " + desJson["roomID"] + "</color>";
                item.getChildByName("Desc").getComponent(cc.RichText).string = msg;
                break;
            case "1":
                if (desJson["type"] == 0) {
                    //dat cuoc
                    item.getChildByName("Desc").getComponent(cc.RichText).string = "<color=#e12e0b>Đặt cược : " + Utils_1.default.formatNumber(itemData["moneyExchange"]) + "</color>";
                }
                else if (desJson["type"] == 1) {
                    item.getChildByName("Desc").getComponent(cc.RichText).string = "Thưởng nhân hũ " + this.GameName[desJson["gameID"]];
                }
                else {
                    switch (desJson["result"]) {
                        case 1:
                            var msg = "<color=#e12e0b>Đặt cược : -" + Utils_1.default.formatNumber(desJson["totalbet"]) + "\n</color>";
                            msg += "<color=#f0bf0b>Trả thưởng : +" + Utils_1.default.formatNumber(desJson["totalPrizes"]) + " - TPS Jackpot</color>";
                            item.getChildByName("Desc").getComponent(cc.RichText).string = msg;
                            break;
                        case 2:
                            var msg = "<color=#e12e0b>Đặt cược : -" + Utils_1.default.formatNumber(desJson["totalbet"]) + "\n</color>";
                            msg += "<color=#f0bf0b>Trả thưởng : +" + Utils_1.default.formatNumber(desJson["totalPrizes"]) + " - Jackpot</color>";
                            item.getChildByName("Desc").getComponent(cc.RichText).string = msg;
                            break;
                        case 3:
                            var msg = "<color=#e12e0b>Đặt cược : -" + Utils_1.default.formatNumber(desJson["totalbet"]) + "\n</color>";
                            msg += "<color=#f0bf0b>Trả thưởng : +" + Utils_1.default.formatNumber(desJson["totalPrizes"]) + " - Tứ Quý</color>";
                            item.getChildByName("Desc").getComponent(cc.RichText).string = msg;
                            break;
                        case 4:
                            var msg = "<color=#e12e0b>Đặt cược : -" + Utils_1.default.formatNumber(desJson["totalbet"]) + "\n</color>";
                            msg += "<color=#f0bf0b>Trả thưởng : +" + Utils_1.default.formatNumber(desJson["totalPrizes"]) + " - Cù Lũ</color>";
                            item.getChildByName("Desc").getComponent(cc.RichText).string = msg;
                            break;
                        case 5:
                            var msg = "<color=#e12e0b>Đặt cược : -" + Utils_1.default.formatNumber(desJson["totalbet"]) + "\n</color>";
                            msg += "<color=#f0bf0b>Trả thưởng : +" + Utils_1.default.formatNumber(desJson["totalPrizes"]) + " - Thùng</color>";
                            item.getChildByName("Desc").getComponent(cc.RichText).string = msg;
                            break;
                        case 6:
                            var msg = "<color=#e12e0b>Đặt cược : -" + Utils_1.default.formatNumber(desJson["totalbet"]) + "\n</color>";
                            msg += "<color=#f0bf0b>Trả thưởng : +" + Utils_1.default.formatNumber(desJson["totalPrizes"]) + " - Sảnh</color>";
                            item.getChildByName("Desc").getComponent(cc.RichText).string = msg;
                            break;
                        case 7:
                            var msg = "<color=#e12e0b>Đặt cược : -" + Utils_1.default.formatNumber(desJson["totalbet"]) + "\n</color>";
                            msg += "<color=#f0bf0b>Trả thưởng : +" + Utils_1.default.formatNumber(desJson["totalPrizes"]) + " - Sám Cô</color>";
                            item.getChildByName("Desc").getComponent(cc.RichText).string = msg;
                            break;
                        case 8:
                            var msg = "<color=#e12e0b>Đặt cược : -" + Utils_1.default.formatNumber(desJson["totalbet"]) + "\n</color>";
                            msg += "<color=#f0bf0b>Trả thưởng : +" + Utils_1.default.formatNumber(desJson["totalPrizes"]) + " - Hai Đôi</color>";
                            item.getChildByName("Desc").getComponent(cc.RichText).string = msg;
                            break;
                        case 9:
                            var msg = "<color=#e12e0b>Đặt cược : -" + Utils_1.default.formatNumber(desJson["totalbet"]) + "\n</color>";
                            msg += "<color=#f0bf0b>Trả thưởng : +" + Utils_1.default.formatNumber(desJson["totalPrizes"]) + " - Đôi J+</color>";
                            item.getChildByName("Desc").getComponent(cc.RichText).string = msg;
                            break;
                        case 10:
                            var msg = "<color=#e12e0b>Đặt cược : -" + Utils_1.default.formatNumber(desJson["totalbet"]) + "\n</color>";
                            msg += "<color=#f0bf0b>Trả thưởng : +" + Utils_1.default.formatNumber(desJson["totalPrizes"]) + " - Đôi J-</color>";
                            item.getChildByName("Desc").getComponent(cc.RichText).string = msg;
                            break;
                        case 11:
                            var msg = "<color=#e12e0b>Đặt cược : -" + Utils_1.default.formatNumber(desJson["totalbet"]) + "\n</color>";
                            msg += "<color=#f0bf0b>Trả thưởng : +" + Utils_1.default.formatNumber(desJson["totalPrizes"]) + " - Bài Cao</color>";
                            item.getChildByName("Desc").getComponent(cc.RichText).string = msg;
                            break;
                        case 12:
                            var msg = "<color=#e12e0b>Đặt cược : -" + Utils_1.default.formatNumber(desJson["totalbet"]) + "\n</color>";
                            msg += "<color=#f0bf0b>Trả thưởng : +" + Utils_1.default.formatNumber(desJson["totalPrizes"]) + " - X2 Jackpot</color>";
                            item.getChildByName("Desc").getComponent(cc.RichText).string = msg;
                            break;
                    }
                }
                break;
        }
        var serviceName = itemData["serviceName"];
        switch (serviceName) {
            case "182":
                item.getChildByName("Service").getComponent(cc.Label).string = "Giftcode";
                var msg1 = "Code : " + desJson["giftCode"] + "\n";
                msg1 += "<color=#f0bf0b>Thưởng : +" + Utils_1.default.formatNumber(itemData["moneyExchange"]) + "</color>";
                item.getChildByName("Desc").getComponent(cc.RichText).string = msg1;
                break;
            case "186":
                item.getChildByName("Service").getComponent(cc.Label).string = "Hoàn trả";
                var msg1 = "Ngày : " + desJson["day"] + "\n";
                msg1 += "<color=#f0bf0b>Hoàn trả : +" + Utils_1.default.formatNumber(itemData["moneyExchange"]) + "</color>";
                item.getChildByName("Desc").getComponent(cc.RichText).string = msg1;
                break;
            case "199":
                item.getChildByName("Service").getComponent(cc.Label).string = "Điểm Danh";
                var msg1 = "<color=#FFFFFF>Thưởng điểm danh hàng ngày</color>";
                item.getChildByName("Desc").getComponent(cc.RichText).string = msg1;
                break;
        }
        var type = desJson["type"];
        switch (type) {
            case 12:
                item.getChildByName("Service").getComponent(cc.Label).string = "Kích soạt SĐT";
                var msg1 = "<color=#f0bf0b>Thưởng : +" + Utils_1.default.formatNumber(itemData["moneyExchange"]) + "</color>";
                item.getChildByName("Desc").getComponent(cc.RichText).string = msg1;
                break;
        }
    };
    PopupTransaction.prototype.loadPage = function (res) {
        var _this = this;
        //Utils.Log("trans:", res);
        this.content.removeAllChildren();
        if (this.tabSelectedIdx == 0) {
            var _loop_2 = function (i) {
                indexData = i;
                if (indexData < res["transactions"].length) {
                    var item = cc.instantiate(this_2.prefab);
                    item.parent = this_2.content;
                    var itemData_1 = res["transactions"][indexData];
                    isJson = Utils_1.default.IsJsonString(itemData_1["description"]);
                    if (isJson) {
                        item.getChildByName("Trans").getComponent(cc.Label).string = itemData_1["transId"];
                        item.getChildByName("Time").getComponent(cc.Label).string = itemData_1["transactionTime"];
                        item.getChildByName("Coin").getComponent(cc.Label).string = (itemData_1["moneyExchange"] > 0 ? "+" : "") + Utils_1.default.formatNumber(itemData_1["moneyExchange"]);
                        item.getChildByName("Balance").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData_1["currentMoney"]);
                        if (itemData_1["actionName"] === undefined || itemData_1["actionName"] !== "CashOutByCard") {
                            item.getChildByName("BtnView").active = false;
                        }
                        else {
                            item.getChildByName("BtnView").active = true;
                            item.getChildByName("BtnView").off("click");
                            item.getChildByName("BtnView").on("click", function () {
                                _this.loadCard(itemData_1["transactionTime"]);
                            });
                        }
                        this_2.parseDescriptionJson(item, itemData_1);
                    }
                    else {
                        item.getChildByName("Trans").getComponent(cc.Label).string = itemData_1["transId"];
                        item.getChildByName("Time").getComponent(cc.Label).string = itemData_1["transactionTime"];
                        item.getChildByName("Service").getComponent(cc.Label).string = this_2.convertNameThirdParty(itemData_1["serviceName"]);
                        item.getChildByName("Coin").getComponent(cc.Label).string = (itemData_1["moneyExchange"] > 0 ? "+" : "") + Utils_1.default.formatNumber(itemData_1["moneyExchange"]);
                        item.getChildByName("Balance").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData_1["currentMoney"]);
                        item.getChildByName("Desc").getComponent(cc.RichText).string = itemData_1["description"];
                        if (itemData_1['serviceName'] == "201") {
                            item.getChildByName("Desc").getComponent(cc.RichText).string = "Thưởng Sự Kiện\nLì Xì Giờ Vàng";
                        }
                        if (itemData_1['serviceName'] == "202") {
                            item.getChildByName("Desc").getComponent(cc.RichText).string = "Thưởng hoa hồng giới thiệu";
                        }
                        if (itemData_1["actionName"] === undefined || itemData_1["actionName"] !== "CashOutByCard") {
                            item.getChildByName("BtnView").active = false;
                        }
                        else {
                            item.getChildByName("BtnView").active = true;
                            item.getChildByName("BtnView").off("click");
                            item.getChildByName("BtnView").on("click", function () {
                                _this.loadCard(itemData_1["transactionTime"]);
                            });
                        }
                    }
                }
            };
            var this_2 = this, indexData, isJson;
            for (var i = 0; i < 13; i++) {
                _loop_2(i);
            }
        }
        else {
            for (var i = 0; i < 13; i++) {
                var data = this.currentData[i];
                if (data != null) {
                    var item = this.contentNapRut.children[i];
                    if (!cc.isValid(item)) {
                        item = cc.instantiate(this.itemNapRut);
                        item.parent = this.contentNapRut;
                    }
                    item.active = true;
                    item.getChildByName('lbTime').getComponent(cc.Label).string = data['CreatedAt'].replace(" ", "\n");
                    item.getChildByName("lbBank").getComponent(cc.Label).string = data['BankCode'];
                    item.getChildByName("lbAmount").getComponent(cc.Label).string = Utils_1.default.formatNumber(data['Amount']);
                    switch (data['Status']) {
                        case 0:
                            item.getChildByName("lbStatus").getComponent(cc.Label).string = App_1.default.instance.getTextLang('txt_pending');
                            item.getChildByName("lbStatus").color = cc.Color.YELLOW;
                            break;
                        case 1:
                            item.getChildByName("lbStatus").getComponent(cc.Label).string = App_1.default.instance.getTextLang('txt_receive2');
                            item.getChildByName("lbStatus").color = cc.Color.YELLOW;
                            break;
                        case 4:
                        case 2:
                            item.getChildByName("lbStatus").getComponent(cc.Label).string = App_1.default.instance.getTextLang('txt_success');
                            item.getChildByName("lbStatus").color = cc.Color.GREEN;
                            break;
                        case 3:
                            item.getChildByName("lbStatus").getComponent(cc.Label).string = App_1.default.instance.getTextLang('txt_failed');
                            item.getChildByName("lbStatus").color = cc.Color.RED;
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
            }
            for (var i = this.currentData.length; i < this.contentNapRut.childrenCount; i++) {
                this.contentNapRut.children[i].active = false;
            }
        }
    };
    PopupTransaction.prototype.loadData = function (isReloadScr) {
        var _this = this;
        if (isReloadScr === void 0) { isReloadScr = true; }
        App_1.default.instance.showLoading(true);
        var params = null;
        switch (this.tabSelectedIdx) {
            case 0:
                params = { "c": 302, "nn": Configs_1.default.Login.Nickname, "mt": Configs_1.default.App.MONEY_TYPE, "p": this.page };
                break;
            case 1:
                // params = { "c": 302, "nn": Configs.Login.Nickname, "mt": 3, "p": this.page };
                params = { "c": 2016, "nn": Configs_1.default.Login.Nickname, "tt": 0, "p": this.page, "mi": 5 };
                break;
            case 2:
                params = { "c": 2016, "nn": Configs_1.default.Login.Nickname, "tt": 1, "p": this.page, "mi": 5 };
                break;
        }
        Http_1.default.get(Configs_1.default.App.API, params, function (err, res) {
            var _a;
            App_1.default.instance.showLoading(false);
            if (err != null) {
                return;
            }
            if (res["success"]) {
                if (_this.tabSelectedIdx == 0) {
                    _this.maxPage = res["totalPages"];
                }
                else {
                    if (res['totalRecords'] <= 5) {
                        _this.maxPage = 1;
                    }
                    else {
                        _this.maxPage = res['totalRecords'] % 5 == 0 ? (res['totalRecords'] / 5) : Math.floor(res['totalRecords'] / 5) + 1;
                    }
                }
                _this.totalPageLoaded++;
                _this.data = res;
                var transactionData = res['transactions'];
                if (_this.tabSelectedIdx == 0) {
                    (_a = _this.dataPlay).push.apply(_a, __spread(transactionData));
                    _this.currentData = _this.dataPlay;
                }
                else {
                    if (res['data'] != null)
                        _this.currentData = res['data'];
                }
                _this.lblPage.string = _this.page + "/" + _this.maxPage;
                _this.loadPage(res);
            }
            else {
                if (_this.tabSelectedIdx == 0) {
                    _this.content.removeAllChildren();
                }
                else {
                    _this.contentNapRut.children.forEach(function (item) {
                        item.active = false;
                    });
                }
            }
        });
    };
    PopupTransaction.prototype.loadCard = function (time) {
        App_1.default.instance.showLoading(true);
        var params = { "c": 2001, "nickname": Configs_1.default.Login.Nickname, "token": Configs_1.default.Login.AccessToken, "transTime": encodeURI(time) };
        Http_1.default.get(Configs_1.default.App.API, params, function (err, res) {
            App_1.default.instance.showLoading(false);
            if (err != null)
                return;
            if (res == "") {
                return;
            }
            App_1.default.instance.popupCardInfo.setListItem(JSON.stringify(res));
        });
    };
    PopupTransaction.prototype.setDataItem = function (item, itemData) {
        var _this = this;
        var isJson = Utils_1.default.IsJsonString(itemData["description"]);
        if (isJson) {
            item.getChildByName("Trans").getComponent(cc.Label).string = itemData["transId"];
            item.getChildByName("Time").getComponent(cc.Label).string = itemData["transactionTime"];
            item.getChildByName("Coin").getComponent(cc.Label).string = (itemData["moneyExchange"] > 0 ? "+" : "") + Utils_1.default.formatNumber(itemData["moneyExchange"]);
            item.getChildByName("Coin").getComponent(cc.Label).font = itemData["moneyExchange"] > 0 ? this.fontNumber[0] : this.fontNumber[1];
            item.getChildByName("Coin").getComponent(cc.Label).fontSize = itemData["moneyExchange"] > 0 ? 8 : 7;
            item.getChildByName("Balance").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["currentMoney"]);
            if (itemData["actionName"] === undefined || itemData["actionName"] !== "CashOutByCard") {
                item.getChildByName("BtnView").active = false;
            }
            else {
                item.getChildByName("BtnView").active = true;
                item.getChildByName("BtnView").off("click");
                item.getChildByName("BtnView").on("click", function () {
                    _this.loadCard(itemData["transactionTime"]);
                });
            }
            this.parseDescriptionJson(item, itemData);
        }
        else {
            item.getChildByName("Trans").getComponent(cc.Label).string = itemData["transId"];
            item.getChildByName("Time").getComponent(cc.Label).string = itemData["transactionTime"];
            item.getChildByName("Service").getComponent(cc.Label).string = this.convertNameThirdParty(itemData["serviceName"]);
            item.getChildByName("Coin").getComponent(cc.Label).string = (itemData["moneyExchange"] > 0 ? "+" : "") + Utils_1.default.formatNumber(itemData["moneyExchange"]);
            item.getChildByName("Coin").getComponent(cc.Label).font = itemData["moneyExchange"] > 0 ? this.fontNumber[0] : this.fontNumber[1];
            item.getChildByName("Coin").getComponent(cc.Label).fontSize = itemData["moneyExchange"] > 0 ? 8 : 7;
            item.getChildByName("Balance").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["currentMoney"]);
            item.getChildByName("Desc").getComponent(cc.RichText).string = itemData["description"];
            if (itemData["actionName"] === undefined || itemData["actionName"] !== "CashOutByCard") {
                item.getChildByName("BtnView").active = false;
            }
            else {
                item.getChildByName("BtnView").active = true;
                item.getChildByName("BtnView").off("click");
                item.getChildByName("BtnView").on("click", function () {
                    _this.loadCard(itemData["transactionTime"]);
                });
            }
        }
        item.active = true;
    };
    PopupTransaction.prototype.convertNameThirdParty = function (serviceName) {
        switch (serviceName) {
            case "WM_DEPOSIT":
            case "WM_WITHDRAW":
                return "Live casino WM";
            case "IBC2_DEPOSIT":
            case "IBC2_WITHDRAW":
                return "Thể Thao IBC";
            case "SBO_DEPOSIT":
            case "SBO_WITHDRAW":
                return "Thể Thao SBO";
            case "AG_DEPOSIT":
            case "AG_WITHDRAW":
                return "Live casino AG";
            case "CMD_DEPOSIT":
            case "CMD_WITHDRAW":
                return "Thể thao CMD368";
            case "FISH_DEPOSIT":
            case "FISH_WITHDRAW":
                return "Bắn Cá";
            case "EBET_DEPOSIT":
            case "EBET_WITHDRAW":
                return "Live EBET";
            case "Cashout":
                return "Rút tiền";
            case "190":
                return "Tài Xỉu Siêu Tốc";
            case "201":
                return "Lì Xì Giờ Vàng";
            case "202":
                return "Giới Thiệu Bạn Bè";
            default:
                return serviceName;
        }
    };
    PopupTransaction.prototype.onScrollEvent = function (scrollview, eventType, customEventData) {
        if (eventType == cc.ScrollView.EventType.SCROLL_TO_BOTTOM) {
            if (this.page < this.maxPage) {
                this.page++;
                this.loadData(false);
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], PopupTransaction.prototype, "content", void 0);
    __decorate([
        property(cc.Node)
    ], PopupTransaction.prototype, "contentNapRut", void 0);
    __decorate([
        property(cc.Node)
    ], PopupTransaction.prototype, "prefab", void 0);
    __decorate([
        property(cc.Node)
    ], PopupTransaction.prototype, "itemNapRut", void 0);
    __decorate([
        property(cc.ToggleContainer)
    ], PopupTransaction.prototype, "tabs", void 0);
    __decorate([
        property(cc.Label)
    ], PopupTransaction.prototype, "lblPage", void 0);
    __decorate([
        property(cc.Node)
    ], PopupTransaction.prototype, "tabPlay", void 0);
    __decorate([
        property(cc.Node)
    ], PopupTransaction.prototype, "tabNapRut", void 0);
    __decorate([
        property([cc.BitmapFont])
    ], PopupTransaction.prototype, "fontNumber", void 0);
    PopupTransaction = __decorate([
        ccclass
    ], PopupTransaction);
    return PopupTransaction;
}(Dialog_1.default));
exports.default = PopupTransaction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5Qb3B1cFRyYW5zYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQWdEO0FBQ2hELCtDQUEwQztBQUMxQywyQ0FBc0M7QUFDdEMsaURBQTRDO0FBQzVDLCtDQUEwQztBQUdwQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE4QyxvQ0FBTTtJQUFwRDtRQUFBLHFFQStuQkM7UUE3bkJHLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixVQUFJLEdBQXVCLElBQUksQ0FBQztRQUVoQyxhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQU0xQixnQkFBVSxHQUFvQixFQUFFLENBQUM7UUFFekIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLFdBQUssR0FBRyxJQUFJLEtBQUssRUFBVyxDQUFDO1FBQzdCLG9CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLFVBQUksR0FBRyxJQUFJLENBQUM7UUFDWixjQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsaUJBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsa0JBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsaUJBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIscUJBQWUsR0FBRyxDQUFDLENBQUM7UUFDcEIsY0FBUSxHQUFHO1lBQ2YsR0FBRyxFQUFFLFFBQVE7WUFDYixHQUFHLEVBQUUsUUFBUTtZ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Q0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQztrREFDRztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNNO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDUTtJQU0xQjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQzt3REFDTztJQXZCaEIsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0ErbkJwQztJQUFELHVCQUFDO0NBL25CRCxBQStuQkMsQ0EvbkI2QyxnQkFBTSxHQStuQm5EO2tCQS9uQm9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgSHR0cCBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvSHR0cFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL0RpYWxvZ1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1NjcmlwdC9jb21tb24vVXRpbHNcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBUcmFuc2FjdGlvbiBleHRlbmRzIERpYWxvZyB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29udGVudDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29udGVudE5hcFJ1dDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcmVmYWI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGl0ZW1OYXBSdXQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGVDb250YWluZXIpXG4gICAgdGFiczogY2MuVG9nZ2xlQ29udGFpbmVyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsUGFnZTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRhYlBsYXk6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRhYk5hcFJ1dDogY2MuTm9kZSA9IG51bGw7XG5cblxuXG5cbiAgICBAcHJvcGVydHkoW2NjLkJpdG1hcEZvbnRdKVxuICAgIGZvbnROdW1iZXI6IGNjLkJpdG1hcEZvbnRbXSA9IFtdO1xuXG4gICAgcHJpdmF0ZSBwYWdlOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgbWF4UGFnZTogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIGl0ZW1zID0gbmV3IEFycmF5PGNjLk5vZGU+KCk7XG4gICAgcHJpdmF0ZSB0YWJTZWxlY3RlZElkeCA9IDA7XG4gICAgcHJpdmF0ZSBkYXRhID0gbnVsbDtcbiAgICBwcml2YXRlIGRhdGFQbGF5ID0gW107XG4gICAgcHJpdmF0ZSBkYXRhQ2FzaG91dCA9IFtdO1xuICAgIHByaXZhdGUgZGF0YUV4Y2hhbmdlID0gW107XG4gICAgcHJpdmF0ZSBjdXJyZW50RGF0YSA9IFtdO1xuICAgIHByaXZhdGUgdG90YWxQYWdlTG9hZGVkID0gMDtcbiAgICBwcml2YXRlIEdhbWVOYW1lID0ge1xuICAgICAgICAxMTA6IFwixJB1YSBYZVwiLFxuICAgICAgICAxNzA6IFwiQ3J5cHRvXCIsXG4gICAgICAgIDI6IFwiVMOgaSBY4buJdVwiLFxuICAgICAgICA1OiBcIljDqG5nXCIsXG4gICAgICAgIDExOiBcIlRp4bq/biBMw6puXCIsXG4gICAgICAgIDE2MDogXCJDaGltIMSQacOqblwiLFxuICAgICAgICAxMjA6IFwiVGjhuqduIFTDoGlcIixcbiAgICAgICAgMTUwOiBcIlRo4buDIFRoYW9cIixcbiAgICAgICAgMTogXCJNaW5pUG9rZXJcIixcbiAgICAgICAgMzogXCJC4bqndSBDdWFcIixcbiAgICAgICAgOTogXCJCYSBDw6J5XCIsXG4gICAgICAgIDQ6IFwiQ2FvIFRo4bqlcFwiLFxuICAgICAgICAxOTE6IFwiQ2hpw6ptIFRpbmhcIixcbiAgICAgICAgMTkwOiBcIlTDoGkgWOG7iXUgU2nDqnUgVOG7kWNcIixcbiAgICAgICAgMTI6IFwiWMOzYyDEkMSpYVwiLFxuICAgICAgICAxODA6IFwiVGjhuqduIELDoGlcIixcbiAgICAgICAgMTk3OiBcIkJpa2luaVwiLFxuICAgICAgICAxOTg6IFwiR2VtXCIsXG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIHNjcm9sbFZpZXdFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBzY3JvbGxWaWV3RXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTsgLy8gVGhpcyBub2RlIGlzIHRoZSBub2RlIHRvIHdoaWNoIHlvdXIgZXZlbnQgaGFuZGxlciBjb2RlIGNvbXBvbmVudCBiZWxvbmdzXG4gICAgICAgIHNjcm9sbFZpZXdFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJMb2JieS5Qb3B1cFRyYW5zYWN0aW9uXCI7Ly8gVGhpcyBpcyB0aGUgY29kZSBmaWxlIG5hbWVcbiAgICAgICAgc2Nyb2xsVmlld0V2ZW50SGFuZGxlci5oYW5kbGVyID0gXCJvblNjcm9sbEV2ZW50XCI7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YWJzLnRvZ2dsZUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnRhYnMudG9nZ2xlSXRlbXNbaV0ubm9kZS5vbihcInRvZ2dsZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJTZWxlY3RlZElkeCA9IGk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUYWJzVGl0bGVDb2xvcigpO1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZSA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldERhdGFMb2FkZWQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWREYXRhKCk7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJQbGF5LmFjdGl2ZSA9IHRoaXMudGFiU2VsZWN0ZWRJZHggPT0gMCA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYk5hcFJ1dC5hY3RpdmUgPSB0aGlzLnRhYlNlbGVjdGVkSWR4ID09IDAgPyBmYWxzZSA6IHRydWU7XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJZHggPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZVRhYnNUaXRsZUNvbG9yKCk7XG4gICAgICAgIHRoaXMudGFicy50b2dnbGVJdGVtc1swXS5pc0NoZWNrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlVGFic1RpdGxlQ29sb3IoKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy50YWJzLnRvZ2dsZUl0ZW1zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICB0aGlzLnRhYnMudG9nZ2xlSXRlbXNbal0ubm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5ub2RlLmNvbG9yID0gaiA9PSB0aGlzLnRhYlNlbGVjdGVkSWR4ID8gY2MuQ29sb3IuWUVMTE9XIDogY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNtaXNzKCkge1xuICAgICAgICBzdXBlci5kaXNtaXNzKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5pdGVtc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vblNob3dlZCgpIHtcbiAgICAgICAgc3VwZXIuX29uU2hvd2VkKCk7XG4gICAgICAgIHRoaXMucGFnZSA9IDE7XG4gICAgICAgIHRoaXMubWF4UGFnZSA9IDE7XG4gICAgICAgIHRoaXMubGJsUGFnZS5zdHJpbmcgPSB0aGlzLnBhZ2UgKyBcIi9cIiArIHRoaXMubWF4UGFnZTtcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIHN1cGVyLnNob3coKTtcbiAgICAgICAgdGhpcy5yZXNldERhdGFMb2FkZWQoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50RGF0YSA9IFtdO1xuICAgICAgICB0aGlzLmRhdGFcbiAgICAgICAgdGhpcy50YWJTZWxlY3RlZElkeCA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc2V0RGF0YUxvYWRlZCgpIHtcbiAgICAgICAgdGhpcy50b3RhbFBhZ2VMb2FkZWQgPSAwO1xuICAgICAgICB0aGlzLmN1cnJlbnREYXRhID0gW107XG4gICAgICAgIHRoaXMuZGF0YUNhc2hvdXQgPSBbXTtcbiAgICAgICAgdGhpcy5kYXRhUGxheSA9IFtdO1xuICAgICAgICB0aGlzLmRhdGFFeGNoYW5nZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhY3ROZXh0UGFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFnZSA8IHRoaXMubWF4UGFnZSkge1xuICAgICAgICAgICAgdGhpcy5wYWdlKys7XG4gICAgICAgICAgICB0aGlzLmxibFBhZ2Uuc3RyaW5nID0gdGhpcy5wYWdlICsgXCIvXCIgKyB0aGlzLm1heFBhZ2U7XG4gICAgICAgICAgICB0aGlzLmxvYWREYXRhKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhY3RQcmV2UGFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFnZSA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMucGFnZS0tO1xuICAgICAgICAgICAgdGhpcy5sYmxQYWdlLnN0cmluZyA9IHRoaXMucGFnZSArIFwiL1wiICsgdGhpcy5tYXhQYWdlO1xuICAgICAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGFyc2VEZXNjcmlwdGlvbkpzb24oaXRlbSwgaXRlbURhdGEpIHtcblxuICAgICAgICB2YXIgZGVzSnNvbiA9IEpTT04ucGFyc2UoaXRlbURhdGFbXCJkZXNjcmlwdGlvblwiXSk7XG4gICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJTZXJ2aWNlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5HYW1lTmFtZVtkZXNKc29uW1wiZ2FtZUlEXCJdXTtcbiAgICAgICAgdmFyIGdhbWVJRCA9IGRlc0pzb25bXCJnYW1lSURcIl07XG4gICAgICAgIHN3aXRjaCAoZ2FtZUlEKSB7XG4gICAgICAgICAgICBjYXNlIFwiMTEwXCI6IGNhc2UgXCIxNzBcIjogY2FzZSBcIjVcIjogY2FzZSBcIjE2MFwiOiBjYXNlIFwiMTIwXCI6IGNhc2UgXCIxNTBcIjogY2FzZSBcIjE5MVwiOiBjYXNlIFwiMTgwXCI6IGNhc2UgXCIxOTdcIjogY2FzZSBcIjE5OFwiOlxuICAgICAgICAgICAgICAgIC8vc2xvdFxuICAgICAgICAgICAgICAgIGlmIChkZXNKc29uW1widHlwZVwiXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vZGF0IGN1b2NmXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJEZXNjXCIpLmdldENvbXBvbmVudChjYy5SaWNoVGV4dCkuc3RyaW5nID0gXCI8Y29sb3I9I2UxMmUwYj7EkOG6t3QgY8aw4bujYyA6IFwiICsgVXRpbHMuZm9ybWF0TnVtYmVyKGl0ZW1EYXRhW1wibW9uZXlFeGNoYW5nZVwiXSkgKyBcIjwvY29sb3I+XCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRlc0pzb25bXCJ0eXBlXCJdID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkRlc2NcIikuZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KS5zdHJpbmcgPSBcIlRoxrDhu59uZyBuaMOibiBoxakgXCIgKyB0aGlzLkdhbWVOYW1lW2Rlc0pzb25bXCJnYW1lSURcIl1dO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGRlc0pzb25bXCJyZXN1bHRcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTogY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtc2cgPSBcIjxjb2xvcj0jZTEyZTBiPsSQ4bq3dCBjxrDhu6NjIDogLVwiICsgVXRpbHMuZm9ybWF0TnVtYmVyKGRlc0pzb25bXCJ0b3RhbGJldFwiXSkgKyBcIlxcbjwvY29sb3I+XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnICs9IFwiPGNvbG9yPSNmMGJmMGI+VHLhuqMgdGjGsOG7n25nIDogK1wiICsgVXRpbHMuZm9ybWF0TnVtYmVyKGRlc0pzb25bXCJ0b3RhbFByaXplc1wiXSkgKyBcIjwvY29sb3I+XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkRlc2NcIikuZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KS5zdHJpbmcgPSBtc2c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1zZyA9IFwiPGNvbG9yPSNlMTJlMGI+xJDhurd0IGPGsOG7o2MgOiAtXCIgKyBVdGlscy5mb3JtYXROdW1iZXIoZGVzSnNvbltcInRvdGFsYmV0XCJdKSArIFwiXFxuPC9jb2xvcj5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgKz0gXCI8Y29sb3I9I2YwYmYwYj5UaOG6r25nIGzhu5tuIDogK1wiICsgVXRpbHMuZm9ybWF0TnVtYmVyKGRlc0pzb25bXCJ0b3RhbFByaXplc1wiXSkgKyBcIjwvY29sb3I+XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkRlc2NcIikuZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KS5zdHJpbmcgPSBtc2c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1zZyA9IFwiPGNvbG9yPSNlMTJlMGI+xJDhurd0IGPGsOG7o2MgOiAtXCIgKyBVdGlscy5mb3JtYXROdW1iZXIoZGVzSnNvbltcInRvdGFsYmV0XCJdKSArIFwiXFxuPC9jb2xvcj5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgKz0gXCI8Y29sb3I9I2YwYmYwYj5O4buXIGjhu6cgOiArXCIgKyBVdGlscy5mb3JtYXROdW1iZXIoZGVzSnNvbltcInRvdGFsUHJpemVzXCJdKSArIFwiPC9jb2xvcj5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiRGVzY1wiKS5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpLnN0cmluZyA9IG1zZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbXNnID0gXCI8Y29sb3I9I2UxMmUwYj7EkOG6t3QgY8aw4bujYyA6IC1cIiArIFV0aWxzLmZvcm1hdE51bWJlcihkZXNKc29uW1widG90YWxiZXRcIl0pICsgXCJcXG48L2NvbG9yPlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyArPSBcIjxjb2xvcj0jZjBiZjBiPlgyIE7hu5cgaOG7pyA6ICtcIiArIFV0aWxzLmZvcm1hdE51bWJlcihkZXNKc29uW1widG90YWxQcml6ZXNcIl0pICsgXCI8L2NvbG9yPlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJEZXNjXCIpLmdldENvbXBvbmVudChjYy5SaWNoVGV4dCkuc3RyaW5nID0gbXNnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIyXCI6XG4gICAgICAgICAgICAgICAgLy90YWkgeGl1XG4gICAgICAgICAgICAgICAgaWYgKGRlc0pzb25bXCJ0eXBlXCJdID09IDYpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1zZyA9IFwiPGNvbG9yPSNmYmYyZTE+UGhpw6puIDogI1wiICsgZGVzSnNvbltcInJlZmVyZW5jZUlkXCJdICsgXCJcXG48L2NvbG9yPlwiXG4gICAgICAgICAgICAgICAgICAgIG1zZyArPSBcIjxjb2xvcj1lMTJlMGI+XFxuQ8aw4bujYyA6IFwiICsgKGRlc0pzb25bXCJiZXRTaWRlXCJdID09IDAgPyBcIljhu4l1XCIgOiBcIlTDoGlcIikgKyBcIjwvY29sb3I+XCI7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJEZXNjXCIpLmdldENvbXBvbmVudChjYy5SaWNoVGV4dCkuc3RyaW5nID0gbXNnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkZXNKc29uW1widHlwZVwiXSA9PSA3KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXNKc29uW1wiYWN0aW9uXCJdID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtc2cgPSBcIjxjb2xvcj0jZmJmMmUxPlBoacOqbiA6ICNcIiArIGRlc0pzb25bXCJyZWZlcmVuY2VJZFwiXSArIFwiXFxuPC9jb2xvcj5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgbXNnICs9IFwiPGNvbG9yPSNmMGJmMGI+VHLhuqMgQ8aw4bujYyA6ICtcIiArIFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcIm1vbmV5RXhjaGFuZ2VcIl0pICsgXCI8L2NvbG9yPlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkRlc2NcIikuZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KS5zdHJpbmcgPSBtc2c7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZGVzSnNvbltcImFjdGlvblwiXSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbXNnID0gXCI8Y29sb3I9I2ZiZjJlMT5QaGnDqm4gOiAjXCIgKyBkZXNKc29uW1wicmVmZXJlbmNlSWRcIl0gKyBcIlxcbjwvY29sb3I+XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1zZyArPSBcIjxjb2xvcj0jZjBiZjBiPlRy4bqjIFRoxrDhu59uZyA6ICtcIiArIFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcIm1vbmV5RXhjaGFuZ2VcIl0pICsgXCI8L2NvbG9yPlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkRlc2NcIikuZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KS5zdHJpbmcgPSBtc2c7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZGVzSnNvbltcImFjdGlvblwiXSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbXNnID0gXCI8Y29sb3I9I2ZiZjJlMT5QaGnDqm4gOiAjXCIgKyBkZXNKc29uW1wicmVmZXJlbmNlSWRcIl0gKyBcIlxcbjwvY29sb3I+XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1zZyArPSBcIjxjb2xvcj0jZjBiZjBiPkhvw6BuIFRp4buBbiA6ICtcIiArIFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcIm1vbmV5RXhjaGFuZ2VcIl0pICsgXCI8L2NvbG9yPlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkRlc2NcIikuZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KS5zdHJpbmcgPSBtc2c7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZGVzSnNvbltcImFjdGlvblwiXSA9PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbXNnID0gXCI8Y29sb3I9I2ZiZjJlMT5QaGnDqm4gOiAjXCIgKyBkZXNKc29uW1wicmVmZXJlbmNlSWRcIl0gKyBcIlxcbjwvY29sb3I+XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1zZyArPSBcIjxjb2xvcj0jZjBiZjBiPk7hu5UgSMWpIDogK1wiICsgVXRpbHMuZm9ybWF0TnVtYmVyKGl0ZW1EYXRhW1wibW9uZXlFeGNoYW5nZVwiXSkgKyBcIjwvY29sb3I+XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiRGVzY1wiKS5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpLnN0cmluZyA9IG1zZztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjNcIjpcbiAgICAgICAgICAgICAgICAvL2JhdSBjdWFcbiAgICAgICAgICAgICAgICBpZiAoZGVzSnNvbltcImFjdGlvblwiXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtc2cgPSBcIjxjb2xvcj0jZmJmMmUxPlBoacOqbiA6ICNcIiArIGRlc0pzb25bXCJyZWZlcmVuY2VJZFwiXSArIFwiXFxuPC9jb2xvcj5cIlxuICAgICAgICAgICAgICAgICAgICBtc2cgKz0gXCI8Y29sb3I9I2UxMmUwYj7EkOG6t3QgQ8aw4bujYyA6IFwiICsgVXRpbHMuZm9ybWF0TnVtYmVyKGl0ZW1EYXRhW1wibW9uZXlFeGNoYW5nZVwiXSkgKyBcIjwvY29sb3I+XCI7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJEZXNjXCIpLmdldENvbXBvbmVudChjYy5SaWNoVGV4dCkuc3RyaW5nID0gbXNnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkZXNKc29uW1wiYWN0aW9uXCJdID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1zZyA9IFwiPGNvbG9yPSNmYmYyZTE+UGhpw6puIDogI1wiICsgZGVzSnNvbltcInJlZmVyZW5jZUlkXCJdICsgXCJcXG48L2NvbG9yPlwiXG4gICAgICAgICAgICAgICAgICAgIG1zZyArPSBcIjxjb2xvcj0jZjBiZjBiPlRy4bqjIEPGsOG7o2MgOiArXCIgKyBVdGlscy5mb3JtYXROdW1iZXIoaXRlbURhdGFbXCJtb25leUV4Y2hhbmdlXCJdKSArIFwiPC9jb2xvcj5cIjtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkRlc2NcIikuZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KS5zdHJpbmcgPSBtc2c7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRlc0pzb25bXCJhY3Rpb25cIl0gPT0gMikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbXNnID0gXCI8Y29sb3I9I2ZiZjJlMT5QaGnDqm4gOiAjXCIgKyBkZXNKc29uW1wicmVmZXJlbmNlSWRcIl0gKyBcIlxcbjwvY29sb3I+XCJcbiAgICAgICAgICAgICAgICAgICAgbXNnICs9IFwiPGNvbG9yPSNmMGJmMGI+VHLhuqMgVGjGsOG7n25nIDogK1wiICsgVXRpbHMuZm9ybWF0TnVtYmVyKGl0ZW1EYXRhW1wibW9uZXlFeGNoYW5nZVwiXSkgKyBcIjwvY29sb3I+XCI7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJEZXNjXCIpLmdldENvbXBvbmVudChjYy5SaWNoVGV4dCkuc3RyaW5nID0gbXNnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjRcIjpcbiAgICAgICAgICAgICAgICAvL2NhbyB0aGFwXG4gICAgICAgICAgICAgICAgaWYgKGRlc0pzb25bXCJhY3Rpb25cIl0gPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbXNnID0gXCI8Y29sb3I9I2ZiZjJlMT5QaGnDqm4gOiAjXCIgKyBkZXNKc29uW1wicmVmZXJlbmNlSWRcIl0gKyBcIiAgU+G7kSBixrDhu5tjOlwiICsgZGVzSnNvbltcInN0ZXBcIl0gKyBcIlxcbjwvY29sb3I+XCJcbiAgICAgICAgICAgICAgICAgICAgbXNnICs9IFwiPGNvbG9yPSNlMTJlMGI+xJDhurd0IEPGsOG7o2MgOiBcIiArIFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcIm1vbmV5RXhjaGFuZ2VcIl0pICsgXCI8L2NvbG9yPlwiO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiRGVzY1wiKS5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpLnN0cmluZyA9IG1zZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGVzSnNvbltcImFjdGlvblwiXSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtc2cgPSBcIjxjb2xvcj0jZmJmMmUxPlBoacOqbiA6ICNcIiArIGRlc0pzb25bXCJyZWZlcmVuY2VJZFwiXSArIFwiICBT4buRIGLGsOG7m2M6XCIgKyBkZXNKc29uW1wic3RlcFwiXSArIFwiXFxuPC9jb2xvcj5cIlxuICAgICAgICAgICAgICAgICAgICBtc2cgKz0gXCI8Y29sb3I9I2YwYmYwYj5UaOG6r25nIFRoxrDhu51uZyA6ICtcIiArIFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcIm1vbmV5RXhjaGFuZ2VcIl0pICsgXCI8L2NvbG9yPlwiO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiRGVzY1wiKS5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpLnN0cmluZyA9IG1zZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGVzSnNvbltcImFjdGlvblwiXSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtc2cgPSBcIjxjb2xvcj0jZmJmMmUxPlBoacOqbiA6ICNcIiArIGRlc0pzb25bXCJyZWZlcmVuY2VJZFwiXSArIFwiICBT4buRIGLGsOG7m2M6XCIgKyBkZXNKc29uW1wic3RlcFwiXSArIFwiXFxuPC9jb2xvcj5cIlxuICAgICAgICAgICAgICAgICAgICBtc2cgKz0gXCI8Y29sb3I9I2YwYmYwYj5O4buXIEjFqSA6ICtcIiArIFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcIm1vbmV5RXhjaGFuZ2VcIl0pICsgXCI8L2NvbG9yPlwiO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiRGVzY1wiKS5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpLnN0cmluZyA9IG1zZztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIxMVwiOlxuICAgICAgICAgICAgICAgIHZhciBtc2cgPSBcIjxjb2xvcj0jZmJmMmUxPlBoacOqbiA6ICNcIiArIGRlc0pzb25bXCJtYXRjaElEXCJdICsgXCJcXG48L2NvbG9yPlwiXG4gICAgICAgICAgICAgICAgbXNnICs9IFwiPGNvbG9yPSNmYmYyZTE+UGjDsm5nIDogXCIgKyBkZXNKc29uW1wicm9vbUlEXCJdICsgXCI8L2NvbG9yPlwiO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJEZXNjXCIpLmdldENvbXBvbmVudChjYy5SaWNoVGV4dCkuc3RyaW5nID0gbXNnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjE1XCI6XG4gICAgICAgICAgICAgICAgdmFyIG1zZyA9IFwiPGNvbG9yPSNmYmYyZTE+UGhpw6puIDogI1wiICsgZGVzSnNvbltcIm1hdGNoSURcIl0gKyBcIlxcbjwvY29sb3I+XCJcbiAgICAgICAgICAgICAgICBtc2cgKz0gXCI8Y29sb3I9I2ZiZjJlMT5QaMOybmcgOiBcIiArIGRlc0pzb25bXCJyb29tSURcIl0gKyBcIjwvY29sb3I+XCI7XG4gICAgICAgICAgICAgICAgbXNnICs9IFwiICAgIDxjb2xvcj0jZTEyZTBiPlxcbkPGsOG7o2MgOiBcIiArIFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcIm1vbmV5RXhjaGFuZ2VcIl0pICsgXCI8L2NvbG9yPlwiO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJEZXNjXCIpLmdldENvbXBvbmVudChjYy5SaWNoVGV4dCkuc3RyaW5nID0gbXNnO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJTZXJ2aWNlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJYw7NjIMSQxKlhXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiOVwiOlxuICAgICAgICAgICAgICAgIHZhciBtc2cgPSBcIjxjb2xvcj0jZmJmMmUxPlBoacOqbiA6ICNcIiArIGRlc0pzb25bXCJtYXRjaElEXCJdICsgXCJcXG48L2NvbG9yPlwiXG4gICAgICAgICAgICAgICAgbXNnICs9IFwiPGNvbG9yPSNmYmYyZTE+UGjDsm5nIDogXCIgKyBkZXNKc29uW1wicm9vbUlEXCJdICsgXCI8L2NvbG9yPlwiO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJEZXNjXCIpLmdldENvbXBvbmVudChjYy5SaWNoVGV4dCkuc3RyaW5nID0gbXNnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjFcIjpcbiAgICAgICAgICAgICAgICBpZiAoZGVzSnNvbltcInR5cGVcIl0gPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvL2RhdCBjdW9jXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJEZXNjXCIpLmdldENvbXBvbmVudChjYy5SaWNoVGV4dCkuc3RyaW5nID0gXCI8Y29sb3I9I2UxMmUwYj7EkOG6t3QgY8aw4bujYyA6IFwiICsgVXRpbHMuZm9ybWF0TnVtYmVyKGl0ZW1EYXRhW1wibW9uZXlFeGNoYW5nZVwiXSkgKyBcIjwvY29sb3I+XCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRlc0pzb25bXCJ0eXBlXCJdID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkRlc2NcIikuZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KS5zdHJpbmcgPSBcIlRoxrDhu59uZyBuaMOibiBoxakgXCIgKyB0aGlzLkdhbWVOYW1lW2Rlc0pzb25bXCJnYW1lSURcIl1dO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGRlc0pzb25bXCJyZXN1bHRcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbXNnID0gXCI8Y29sb3I9I2UxMmUwYj7EkOG6t3QgY8aw4bujYyA6IC1cIiArIFV0aWxzLmZvcm1hdE51bWJlcihkZXNKc29uW1widG90YWxiZXRcIl0pICsgXCJcXG48L2NvbG9yPlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyArPSBcIjxjb2xvcj0jZjBiZjBiPlRy4bqjIHRoxrDhu59uZyA6ICtcIiArIFV0aWxzLmZvcm1hdE51bWJlcihkZXNKc29uW1widG90YWxQcml6ZXNcIl0pICsgXCIgLSBUUFMgSmFja3BvdDwvY29sb3I+XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkRlc2NcIikuZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KS5zdHJpbmcgPSBtc2c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1zZyA9IFwiPGNvbG9yPSNlMTJlMGI+xJDhurd0IGPGsOG7o2MgOiAtXCIgKyBVdGlscy5mb3JtYXROdW1iZXIoZGVzSnNvbltcInRvdGFsYmV0XCJdKSArIFwiXFxuPC9jb2xvcj5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgKz0gXCI8Y29sb3I9I2YwYmYwYj5UcuG6oyB0aMaw4bufbmcgOiArXCIgKyBVdGlscy5mb3JtYXROdW1iZXIoZGVzSnNvbltcInRvdGFsUHJpemVzXCJdKSArIFwiIC0gSmFja3BvdDwvY29sb3I+XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkRlc2NcIikuZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KS5zdHJpbmcgPSBtc2c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1zZyA9IFwiPGNvbG9yPSNlMTJlMGI+xJDhurd0IGPGsOG7o2MgOiAtXCIgKyBVdGlscy5mb3JtYXROdW1iZXIoZGVzSnNvbltcInRvdGFsYmV0XCJdKSArIFwiXFxuPC9jb2xvcj5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgKz0gXCI8Y29sb3I9I2YwYmYwYj5UcuG6oyB0aMaw4bufbmcgOiArXCIgKyBVdGlscy5mb3JtYXROdW1iZXIoZGVzSnNvbltcInRvdGFsUHJpemVzXCJdKSArIFwiIC0gVOG7qSBRdcO9PC9jb2xvcj5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiRGVzY1wiKS5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpLnN0cmluZyA9IG1zZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbXNnID0gXCI8Y29sb3I9I2UxMmUwYj7EkOG6t3QgY8aw4bujYyA6IC1cIiArIFV0aWxzLmZvcm1hdE51bWJlcihkZXNKc29uW1widG90YWxiZXRcIl0pICsgXCJcXG48L2NvbG9yPlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyArPSBcIjxjb2xvcj0jZjBiZjBiPlRy4bqjIHRoxrDhu59uZyA6ICtcIiArIFV0aWxzLmZvcm1hdE51bWJlcihkZXNKc29uW1widG90YWxQcml6ZXNcIl0pICsgXCIgLSBDw7kgTMWpPC9jb2xvcj5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiRGVzY1wiKS5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpLnN0cmluZyA9IG1zZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbXNnID0gXCI8Y29sb3I9I2UxMmUwYj7EkOG6t3QgY8aw4bujYyA6IC1cIiArIFV0aWxzLmZvcm1hdE51bWJlcihkZXNKc29uW1widG90YWxiZXRcIl0pICsgXCJcXG48L2NvbG9yPlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyArPSBcIjxjb2xvcj0jZjBiZjBiPlRy4bqjIHRoxrDhu59uZyA6ICtcIiArIFV0aWxzLmZvcm1hdE51bWJlcihkZXNKc29uW1widG90YWxQcml6ZXNcIl0pICsgXCIgLSBUaMO5bmc8L2NvbG9yPlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJEZXNjXCIpLmdldENvbXBvbmVudChjYy5SaWNoVGV4dCkuc3RyaW5nID0gbXNnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtc2cgPSBcIjxjb2xvcj0jZTEyZTBiPsSQ4bq3dCBjxrDhu6NjIDogLVwiICsgVXRpbHMuZm9ybWF0TnVtYmVyKGRlc0pzb25bXCJ0b3RhbGJldFwiXSkgKyBcIlxcbjwvY29sb3I+XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnICs9IFwiPGNvbG9yPSNmMGJmMGI+VHLhuqMgdGjGsOG7n25nIDogK1wiICsgVXRpbHMuZm9ybWF0TnVtYmVyKGRlc0pzb25bXCJ0b3RhbFByaXplc1wiXSkgKyBcIiAtIFPhuqNuaDwvY29sb3I+XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkRlc2NcIikuZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KS5zdHJpbmcgPSBtc2c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1zZyA9IFwiPGNvbG9yPSNlMTJlMGI+xJDhurd0IGPGsOG7o2MgOiAtXCIgKyBVdGlscy5mb3JtYXROdW1iZXIoZGVzSnNvbltcInRvdGFsYmV0XCJdKSArIFwiXFxuPC9jb2xvcj5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgKz0gXCI8Y29sb3I9I2YwYmYwYj5UcuG6oyB0aMaw4bufbmcgOiArXCIgKyBVdGlscy5mb3JtYXROdW1iZXIoZGVzSnNvbltcInRvdGFsUHJpemVzXCJdKSArIFwiIC0gU8OhbSBDw7Q8L2NvbG9yPlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJEZXNjXCIpLmdldENvbXBvbmVudChjYy5SaWNoVGV4dCkuc3RyaW5nID0gbXNnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtc2cgPSBcIjxjb2xvcj0jZTEyZTBiPsSQ4bq3dCBjxrDhu6NjIDogLVwiICsgVXRpbHMuZm9ybWF0TnVtYmVyKGRlc0pzb25bXCJ0b3RhbGJldFwiXSkgKyBcIlxcbjwvY29sb3I+XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnICs9IFwiPGNvbG9yPSNmMGJmMGI+VHLhuqMgdGjGsOG7n25nIDogK1wiICsgVXRpbHMuZm9ybWF0TnVtYmVyKGRlc0pzb25bXCJ0b3RhbFByaXplc1wiXSkgKyBcIiAtIEhhaSDEkMO0aTwvY29sb3I+XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkRlc2NcIikuZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KS5zdHJpbmcgPSBtc2c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1zZyA9IFwiPGNvbG9yPSNlMTJlMGI+xJDhurd0IGPGsOG7o2MgOiAtXCIgKyBVdGlscy5mb3JtYXROdW1iZXIoZGVzSnNvbltcInRvdGFsYmV0XCJdKSArIFwiXFxuPC9jb2xvcj5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgKz0gXCI8Y29sb3I9I2YwYmYwYj5UcuG6oyB0aMaw4bufbmcgOiArXCIgKyBVdGlscy5mb3JtYXROdW1iZXIoZGVzSnNvbltcInRvdGFsUHJpemVzXCJdKSArIFwiIC0gxJDDtGkgSis8L2NvbG9yPlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJEZXNjXCIpLmdldENvbXBvbmVudChjYy5SaWNoVGV4dCkuc3RyaW5nID0gbXNnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbXNnID0gXCI8Y29sb3I9I2UxMmUwYj7EkOG6t3QgY8aw4bujYyA6IC1cIiArIFV0aWxzLmZvcm1hdE51bWJlcihkZXNKc29uW1widG90YWxiZXRcIl0pICsgXCJcXG48L2NvbG9yPlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyArPSBcIjxjb2xvcj0jZjBiZjBiPlRy4bqjIHRoxrDhu59uZyA6ICtcIiArIFV0aWxzLmZvcm1hdE51bWJlcihkZXNKc29uW1widG90YWxQcml6ZXNcIl0pICsgXCIgLSDEkMO0aSBKLTwvY29sb3I+XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkRlc2NcIikuZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KS5zdHJpbmcgPSBtc2c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtc2cgPSBcIjxjb2xvcj0jZTEyZTBiPsSQ4bq3dCBjxrDhu6NjIDogLVwiICsgVXRpbHMuZm9ybWF0TnVtYmVyKGRlc0pzb25bXCJ0b3RhbGJldFwiXSkgKyBcIlxcbjwvY29sb3I+XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnICs9IFwiPGNvbG9yPSNmMGJmMGI+VHLhuqMgdGjGsOG7n25nIDogK1wiICsgVXRpbHMuZm9ybWF0TnVtYmVyKGRlc0pzb25bXCJ0b3RhbFByaXplc1wiXSkgKyBcIiAtIELDoGkgQ2FvPC9jb2xvcj5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiRGVzY1wiKS5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpLnN0cmluZyA9IG1zZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1zZyA9IFwiPGNvbG9yPSNlMTJlMGI+xJDhurd0IGPGsOG7o2MgOiAtXCIgKyBVdGlscy5mb3JtYXROdW1iZXIoZGVzSnNvbltcInRvdGFsYmV0XCJdKSArIFwiXFxuPC9jb2xvcj5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgKz0gXCI8Y29sb3I9I2YwYmYwYj5UcuG6oyB0aMaw4bufbmcgOiArXCIgKyBVdGlscy5mb3JtYXROdW1iZXIoZGVzSnNvbltcInRvdGFsUHJpemVzXCJdKSArIFwiIC0gWDIgSmFja3BvdDwvY29sb3I+XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkRlc2NcIikuZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KS5zdHJpbmcgPSBtc2c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VydmljZU5hbWUgPSBpdGVtRGF0YVtcInNlcnZpY2VOYW1lXCJdO1xuICAgICAgICBzd2l0Y2ggKHNlcnZpY2VOYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiMTgyXCI6XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlNlcnZpY2VcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIkdpZnRjb2RlXCI7XG4gICAgICAgICAgICAgICAgdmFyIG1zZzEgPSBcIkNvZGUgOiBcIiArIGRlc0pzb25bXCJnaWZ0Q29kZVwiXSArIFwiXFxuXCI7XG4gICAgICAgICAgICAgICAgbXNnMSArPSBcIjxjb2xvcj0jZjBiZjBiPlRoxrDhu59uZyA6ICtcIiArIFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcIm1vbmV5RXhjaGFuZ2VcIl0pICsgXCI8L2NvbG9yPlwiO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJEZXNjXCIpLmdldENvbXBvbmVudChjYy5SaWNoVGV4dCkuc3RyaW5nID0gbXNnMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIxODZcIjpcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiU2VydmljZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiSG/DoG4gdHLhuqNcIjtcbiAgICAgICAgICAgICAgICB2YXIgbXNnMSA9IFwiTmfDoHkgOiBcIiArIGRlc0pzb25bXCJkYXlcIl0gKyBcIlxcblwiO1xuICAgICAgICAgICAgICAgIG1zZzEgKz0gXCI8Y29sb3I9I2YwYmYwYj5Ib8OgbiB0cuG6oyA6ICtcIiArIFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcIm1vbmV5RXhjaGFuZ2VcIl0pICsgXCI8L2NvbG9yPlwiO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJEZXNjXCIpLmdldENvbXBvbmVudChjYy5SaWNoVGV4dCkuc3RyaW5nID0gbXNnMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIxOTlcIjpcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiU2VydmljZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwixJBp4buDbSBEYW5oXCI7XG4gICAgICAgICAgICAgICAgdmFyIG1zZzEgPSBcIjxjb2xvcj0jRkZGRkZGPlRoxrDhu59uZyDEkWnhu4NtIGRhbmggaMOgbmcgbmfDoHk8L2NvbG9yPlwiO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJEZXNjXCIpLmdldENvbXBvbmVudChjYy5SaWNoVGV4dCkuc3RyaW5nID0gbXNnMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0eXBlID0gZGVzSnNvbltcInR5cGVcIl07XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiU2VydmljZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiS8OtY2ggc2/huqF0IFPEkFRcIjtcbiAgICAgICAgICAgICAgICB2YXIgbXNnMSA9IFwiPGNvbG9yPSNmMGJmMGI+VGjGsOG7n25nIDogK1wiICsgVXRpbHMuZm9ybWF0TnVtYmVyKGl0ZW1EYXRhW1wibW9uZXlFeGNoYW5nZVwiXSkgKyBcIjwvY29sb3I+XCI7XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkRlc2NcIikuZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KS5zdHJpbmcgPSBtc2cxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkUGFnZShyZXMpIHtcbiAgICAgICAgLy9VdGlscy5Mb2coXCJ0cmFuczpcIiwgcmVzKTtcbiAgICAgICAgdGhpcy5jb250ZW50LnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIGlmICh0aGlzLnRhYlNlbGVjdGVkSWR4ID09IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTM7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleERhdGEgPSBpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4RGF0YSA8IHJlc1tcInRyYW5zYWN0aW9uc1wiXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYik7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50ID0gdGhpcy5jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbURhdGEgPSByZXNbXCJ0cmFuc2FjdGlvbnNcIl1baW5kZXhEYXRhXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzSnNvbiA9IFV0aWxzLklzSnNvblN0cmluZyhpdGVtRGF0YVtcImRlc2NyaXB0aW9uXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzSnNvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlRyYW5zXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaXRlbURhdGFbXCJ0cmFuc0lkXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlRpbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpdGVtRGF0YVtcInRyYW5zYWN0aW9uVGltZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJDb2luXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKGl0ZW1EYXRhW1wibW9uZXlFeGNoYW5nZVwiXSA+IDAgPyBcIitcIiA6IFwiXCIpICsgVXRpbHMuZm9ybWF0TnVtYmVyKGl0ZW1EYXRhW1wibW9uZXlFeGNoYW5nZVwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiQmFsYW5jZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcImN1cnJlbnRNb25leVwiXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtRGF0YVtcImFjdGlvbk5hbWVcIl0gPT09IHVuZGVmaW5lZCB8fCBpdGVtRGF0YVtcImFjdGlvbk5hbWVcIl0gIT09IFwiQ2FzaE91dEJ5Q2FyZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkJ0blZpZXdcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJCdG5WaWV3XCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkJ0blZpZXdcIikub2ZmKFwiY2xpY2tcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkJ0blZpZXdcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZENhcmQoaXRlbURhdGFbXCJ0cmFuc2FjdGlvblRpbWVcIl0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlRGVzY3JpcHRpb25Kc29uKGl0ZW0sIGl0ZW1EYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlRyYW5zXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaXRlbURhdGFbXCJ0cmFuc0lkXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlRpbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpdGVtRGF0YVtcInRyYW5zYWN0aW9uVGltZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJTZXJ2aWNlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5jb252ZXJ0TmFtZVRoaXJkUGFydHkoaXRlbURhdGFbXCJzZXJ2aWNlTmFtZVwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiQ29pblwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IChpdGVtRGF0YVtcIm1vbmV5RXhjaGFuZ2VcIl0gPiAwID8gXCIrXCIgOiBcIlwiKSArIFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcIm1vbmV5RXhjaGFuZ2VcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkJhbGFuY2VcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoaXRlbURhdGFbXCJjdXJyZW50TW9uZXlcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkRlc2NcIikuZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KS5zdHJpbmcgPSBpdGVtRGF0YVtcImRlc2NyaXB0aW9uXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1EYXRhWydzZXJ2aWNlTmFtZSddID09IFwiMjAxXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiRGVzY1wiKS5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpLnN0cmluZyA9IFwiVGjGsOG7n25nIFPhu7EgS2nhu4duXFxuTMOsIFjDrCBHaeG7nSBWw6BuZ1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1EYXRhWydzZXJ2aWNlTmFtZSddID09IFwiMjAyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiRGVzY1wiKS5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpLnN0cmluZyA9IFwiVGjGsOG7n25nIGhvYSBo4buTbmcgZ2nhu5tpIHRoaeG7h3VcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtRGF0YVtcImFjdGlvbk5hbWVcIl0gPT09IHVuZGVmaW5lZCB8fCBpdGVtRGF0YVtcImFjdGlvbk5hbWVcIl0gIT09IFwiQ2FzaE91dEJ5Q2FyZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkJ0blZpZXdcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJCdG5WaWV3XCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkJ0blZpZXdcIikub2ZmKFwiY2xpY2tcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkJ0blZpZXdcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZENhcmQoaXRlbURhdGFbXCJ0cmFuc2FjdGlvblRpbWVcIl0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTM7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5jdXJyZW50RGF0YVtpXTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5jb250ZW50TmFwUnV0LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNjLmlzVmFsaWQoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1OYXBSdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wYXJlbnQgPSB0aGlzLmNvbnRlbnROYXBSdXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKCdsYlRpbWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGRhdGFbJ0NyZWF0ZWRBdCddLnJlcGxhY2UoXCIgXCIsIFwiXFxuXCIpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibGJCYW5rXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZGF0YVsnQmFua0NvZGUnXTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImxiQW1vdW50XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGRhdGFbJ0Ftb3VudCddKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChkYXRhWydTdGF0dXMnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJsYlN0YXR1c1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3BlbmRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibGJTdGF0dXNcIikuY29sb3IgPSBjYy5Db2xvci5ZRUxMT1c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImxiU3RhdHVzXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfcmVjZWl2ZTInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibGJTdGF0dXNcIikuY29sb3IgPSBjYy5Db2xvci5ZRUxMT1c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImxiU3RhdHVzXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJsYlN0YXR1c1wiKS5jb2xvciA9IGNjLkNvbG9yLkdSRUVOO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJsYlN0YXR1c1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2ZhaWxlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJsYlN0YXR1c1wiKS5jb2xvciA9IGNjLkNvbG9yLlJFRDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImxiU3RhdHVzXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfcmVxdWVzdF9jYXNob3V0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImxiU3RhdHVzXCIpLmNvbG9yID0gY2MuQ29sb3IuQ1lBTjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibGJTdGF0dXNcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9yZWNlaXZlMicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJsYlN0YXR1c1wiKS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5jdXJyZW50RGF0YS5sZW5ndGg7IGkgPCB0aGlzLmNvbnRlbnROYXBSdXQuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50TmFwUnV0LmNoaWxkcmVuW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIHByaXZhdGUgbG9hZERhdGEoaXNSZWxvYWRTY3IgPSB0cnVlKSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgbGV0IHBhcmFtcyA9IG51bGw7XG4gICAgICAgIHN3aXRjaCAodGhpcy50YWJTZWxlY3RlZElkeCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHBhcmFtcyA9IHsgXCJjXCI6IDMwMiwgXCJublwiOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBcIm10XCI6IENvbmZpZ3MuQXBwLk1PTkVZX1RZUEUsIFwicFwiOiB0aGlzLnBhZ2UgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAvLyBwYXJhbXMgPSB7IFwiY1wiOiAzMDIsIFwibm5cIjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgXCJtdFwiOiAzLCBcInBcIjogdGhpcy5wYWdlIH07XG4gICAgICAgICAgICAgICAgcGFyYW1zID0geyBcImNcIjogMjAxNiwgXCJublwiOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBcInR0XCI6IDAsIFwicFwiOiB0aGlzLnBhZ2UsIFwibWlcIjogNSB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHBhcmFtcyA9IHsgXCJjXCI6IDIwMTYsIFwibm5cIjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgXCJ0dFwiOiAxLCBcInBcIjogdGhpcy5wYWdlLCBcIm1pXCI6IDUgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHBhcmFtcywgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgaWYgKGVyciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc1tcInN1Y2Nlc3NcIl0pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YWJTZWxlY3RlZElkeCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF4UGFnZSA9IHJlc1tcInRvdGFsUGFnZXNcIl07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc1sndG90YWxSZWNvcmRzJ10gPD0gNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXhQYWdlID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF4UGFnZSA9IHJlc1sndG90YWxSZWNvcmRzJ10gJSA1ID09IDAgPyAocmVzWyd0b3RhbFJlY29yZHMnXSAvIDUpIDogTWF0aC5mbG9vcihyZXNbJ3RvdGFsUmVjb3JkcyddIC8gNSkgKyAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudG90YWxQYWdlTG9hZGVkKys7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gcmVzO1xuICAgICAgICAgICAgICAgIGxldCB0cmFuc2FjdGlvbkRhdGEgPSByZXNbJ3RyYW5zYWN0aW9ucyddO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhYlNlbGVjdGVkSWR4ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhUGxheS5wdXNoKC4uLnRyYW5zYWN0aW9uRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGEgPSB0aGlzLmRhdGFQbGF5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNbJ2RhdGEnXSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF0YSA9IHJlc1snZGF0YSddO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmxibFBhZ2Uuc3RyaW5nID0gdGhpcy5wYWdlICsgXCIvXCIgKyB0aGlzLm1heFBhZ2U7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkUGFnZShyZXMpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhYlNlbGVjdGVkSWR4ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50TmFwUnV0LmNoaWxkcmVuLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBsb2FkQ2FyZCh0aW1lOiBzdHJpbmcpIHtcbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICBsZXQgcGFyYW1zID0geyBcImNcIjogMjAwMSwgXCJuaWNrbmFtZVwiOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBcInRva2VuXCI6IENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4sIFwidHJhbnNUaW1lXCI6IGVuY29kZVVSSSh0aW1lKSB9O1xuICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHBhcmFtcywgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgaWYgKGVyciAhPSBudWxsKSByZXR1cm47XG5cbiAgICAgICAgICAgIGlmIChyZXMgPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5wb3B1cENhcmRJbmZvLnNldExpc3RJdGVtKEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBwcml2YXRlIHNldERhdGFJdGVtKGl0ZW0sIGl0ZW1EYXRhKSB7XG4gICAgICAgIHZhciBpc0pzb24gPSBVdGlscy5Jc0pzb25TdHJpbmcoaXRlbURhdGFbXCJkZXNjcmlwdGlvblwiXSk7XG4gICAgICAgIGlmIChpc0pzb24pIHtcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJUcmFuc1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGl0ZW1EYXRhW1widHJhbnNJZFwiXTtcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJUaW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaXRlbURhdGFbXCJ0cmFuc2FjdGlvblRpbWVcIl07XG4gICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiQ29pblwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IChpdGVtRGF0YVtcIm1vbmV5RXhjaGFuZ2VcIl0gPiAwID8gXCIrXCIgOiBcIlwiKSArIFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcIm1vbmV5RXhjaGFuZ2VcIl0pO1xuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkNvaW5cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gaXRlbURhdGFbXCJtb25leUV4Y2hhbmdlXCJdID4gMCA/IHRoaXMuZm9udE51bWJlclswXSA6IHRoaXMuZm9udE51bWJlclsxXTtcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJDb2luXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udFNpemUgPSBpdGVtRGF0YVtcIm1vbmV5RXhjaGFuZ2VcIl0gPiAwID8gOCA6IDc7XG4gICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiQmFsYW5jZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcImN1cnJlbnRNb25leVwiXSk7XG4gICAgICAgICAgICBpZiAoaXRlbURhdGFbXCJhY3Rpb25OYW1lXCJdID09PSB1bmRlZmluZWQgfHwgaXRlbURhdGFbXCJhY3Rpb25OYW1lXCJdICE9PSBcIkNhc2hPdXRCeUNhcmRcIikge1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJCdG5WaWV3XCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiQnRuVmlld1wiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJCdG5WaWV3XCIpLm9mZihcImNsaWNrXCIpO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJCdG5WaWV3XCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRDYXJkKGl0ZW1EYXRhW1widHJhbnNhY3Rpb25UaW1lXCJdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGFyc2VEZXNjcmlwdGlvbkpzb24oaXRlbSwgaXRlbURhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlRyYW5zXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaXRlbURhdGFbXCJ0cmFuc0lkXCJdO1xuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlRpbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpdGVtRGF0YVtcInRyYW5zYWN0aW9uVGltZVwiXTtcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJTZXJ2aWNlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5jb252ZXJ0TmFtZVRoaXJkUGFydHkoaXRlbURhdGFbXCJzZXJ2aWNlTmFtZVwiXSk7XG4gICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiQ29pblwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IChpdGVtRGF0YVtcIm1vbmV5RXhjaGFuZ2VcIl0gPiAwID8gXCIrXCIgOiBcIlwiKSArIFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcIm1vbmV5RXhjaGFuZ2VcIl0pO1xuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkNvaW5cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gaXRlbURhdGFbXCJtb25leUV4Y2hhbmdlXCJdID4gMCA/IHRoaXMuZm9udE51bWJlclswXSA6IHRoaXMuZm9udE51bWJlclsxXTtcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJDb2luXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udFNpemUgPSBpdGVtRGF0YVtcIm1vbmV5RXhjaGFuZ2VcIl0gPiAwID8gOCA6IDc7XG4gICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiQmFsYW5jZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcImN1cnJlbnRNb25leVwiXSk7XG4gICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiRGVzY1wiKS5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpLnN0cmluZyA9IGl0ZW1EYXRhW1wiZGVzY3JpcHRpb25cIl07XG4gICAgICAgICAgICBpZiAoaXRlbURhdGFbXCJhY3Rpb25OYW1lXCJdID09PSB1bmRlZmluZWQgfHwgaXRlbURhdGFbXCJhY3Rpb25OYW1lXCJdICE9PSBcIkNhc2hPdXRCeUNhcmRcIikge1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJCdG5WaWV3XCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiQnRuVmlld1wiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJCdG5WaWV3XCIpLm9mZihcImNsaWNrXCIpO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJCdG5WaWV3XCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRDYXJkKGl0ZW1EYXRhW1widHJhbnNhY3Rpb25UaW1lXCJdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICAgIGNvbnZlcnROYW1lVGhpcmRQYXJ0eShzZXJ2aWNlTmFtZSkge1xuICAgICAgICBzd2l0Y2ggKHNlcnZpY2VOYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiV01fREVQT1NJVFwiOlxuICAgICAgICAgICAgY2FzZSBcIldNX1dJVEhEUkFXXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGl2ZSBjYXNpbm8gV01cIjtcbiAgICAgICAgICAgIGNhc2UgXCJJQkMyX0RFUE9TSVRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJJQkMyX1dJVEhEUkFXXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVGjhu4MgVGhhbyBJQkNcIjtcbiAgICAgICAgICAgIGNhc2UgXCJTQk9fREVQT1NJVFwiOlxuICAgICAgICAgICAgY2FzZSBcIlNCT19XSVRIRFJBV1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRo4buDIFRoYW8gU0JPXCI7XG4gICAgICAgICAgICBjYXNlIFwiQUdfREVQT1NJVFwiOlxuICAgICAgICAgICAgY2FzZSBcIkFHX1dJVEhEUkFXXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGl2ZSBjYXNpbm8gQUdcIjtcbiAgICAgICAgICAgIGNhc2UgXCJDTURfREVQT1NJVFwiOlxuICAgICAgICAgICAgY2FzZSBcIkNNRF9XSVRIRFJBV1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRo4buDIHRoYW8gQ01EMzY4XCI7XG4gICAgICAgICAgICBjYXNlIFwiRklTSF9ERVBPU0lUXCI6XG4gICAgICAgICAgICBjYXNlIFwiRklTSF9XSVRIRFJBV1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkLhuq9uIEPDoVwiO1xuICAgICAgICAgICAgY2FzZSBcIkVCRVRfREVQT1NJVFwiOlxuICAgICAgICAgICAgY2FzZSBcIkVCRVRfV0lUSERSQVdcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMaXZlIEVCRVRcIjtcbiAgICAgICAgICAgIGNhc2UgXCJDYXNob3V0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUsO6dCB0aeG7gW5cIjtcbiAgICAgICAgICAgIGNhc2UgXCIxOTBcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUw6BpIFjhu4l1IFNpw6p1IFThu5FjXCI7XG4gICAgICAgICAgICBjYXNlIFwiMjAxXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTMOsIFjDrCBHaeG7nSBWw6BuZ1wiO1xuICAgICAgICAgICAgY2FzZSBcIjIwMlwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdp4bubaSBUaGnhu4d1IELhuqFuIELDqFwiO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VydmljZU5hbWVcbiAgICAgICAgfVxuICAgIH1cbiAgICBvblNjcm9sbEV2ZW50KHNjcm9sbHZpZXcsIGV2ZW50VHlwZSwgY3VzdG9tRXZlbnREYXRhKSB7XG4gICAgICAgIGlmIChldmVudFR5cGUgPT0gY2MuU2Nyb2xsVmlldy5FdmVudFR5cGUuU0NST0xMX1RPX0JPVFRPTSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFnZSA8IHRoaXMubWF4UGFnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZSsrO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZERhdGEoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19