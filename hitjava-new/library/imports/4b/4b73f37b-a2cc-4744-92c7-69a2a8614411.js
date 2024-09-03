"use strict";
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