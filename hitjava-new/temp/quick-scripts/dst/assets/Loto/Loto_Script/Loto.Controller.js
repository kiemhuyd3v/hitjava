
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Loto/Loto_Script/Loto.Controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1be046yHmFLZa3wHIBKZlRO', 'Loto.Controller');
// Loto/Loto_Script/Loto.Controller.ts

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
var ShootFishNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/ShootFishNetworkClient");
var Configs_1 = require("../../Loading/src/Configs");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var Loto_Cmd_1 = require("./Loto.Cmd");
var Http_1 = require("../../Loading/src/Http");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MiniGameNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient");
var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
var SPUtils_1 = require("../../Lobby/LobbyScript/Script/common/SPUtils");
var LotoController = /** @class */ (function (_super) {
    __extends(LotoController, _super);
    function LotoController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.labelUserGold = null;
        // Mode
        _this.currentMode = null;
        _this.listModes = null;
        _this.contentMode = null;
        _this.labelGameGuide = null;
        // Location
        _this.listLocation = [];
        // Flex
        _this.listTabs = [];
        _this.contentTabs = null;
        _this.edtChatInput = null;
        _this.contentChat = null;
        _this.prefabItemChat = null;
        _this.scrollChat = null;
        _this.contentNewBet = null;
        _this.prefabItemNewBet = null;
        _this.scrollNewBet = null;
        _this.labelTabResult = [];
        // Choose Channel
        _this.betDate = null;
        _this.currentBetChannel = null;
        _this.btnBetChannel = null;
        _this.betChannel = null;
        _this.contentBetChannel = null;
        _this.prefabItemChannel = null;
        _this.scrollBetChannel = null;
        _this.btnTabResultChannel = null;
        _this.tabResultDate = null;
        _this.currentTabResultChannel = null;
        _this.btnPopupResultChannel = null;
        _this.popupResultDate = null;
        _this.currentPopupResultChannel = null;
        _this.btnCancelChangeChannel = null;
        // Number Selector
        _this.numberSelector = null;
        _this.contentNumSelector = null;
        _this.prefabItemNumber = null;
        _this.scrollNumSelector = null;
        _this.btnOpenNumberSelector = null;
        _this.contentDescMode = null;
        // Number Picked
        _this.contentNumPicked = null;
        _this.prefabItemNumberPicked = null;
        _this.scrollNumPicked = null;
        _this.edtBet = null;
        _this.labelTotalBet = null;
        _this.labelWinValue = null;
        // Popup
        _this.popupHistory = null;
        _this.contentHistory = null;
        _this.prefabItemHistory = null;
        _this.popupResult = null;
        _this.labelResult = [];
        _this.contentTime = null;
        _this.popupNotify = null;
        _this.labelMsg = null;
        // Music
        _this.musicBackground = null;
        _this.sessionDate = "";
        _this.today = "";
        // Constant
        _this.GAME_MODE = 1;
        _this.GAME_LOCATION = 0;
        _this.GAME_CHANNEL = 1;
        _this.currentNumPicked = [];
        _this.currentBetValue = 0; //K
        _this.currentWinValue = 0; //K
        _this.numRequest = 0;
        _this.numRequestCompleted = 0;
        _this.numRequired = 0;
        _this.musicSlotState = null;
        _this.remoteMusicBackground = null;
        _this.helpCenter = [];
        _this.currentGameHelp = "";
        _this.channelsOpen = [];
        _this.modesOpen = [];
        _this.arrDates = null;
        _this.popupResultCurrentChannelId = null;
        return _this;
        // update (dt) {}
    }
    LotoController_1 = LotoController;
    // LIFE-CYCLE CALLBACKS:
    LotoController.prototype.onLoad = function () {
        var _this = this;
        LotoController_1.instance = this;
        this.sessionDate = "";
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        this.sessionDate += "" + year;
        this.sessionDate += month < 10 ? "0" + month : month;
        this.sessionDate += day < 10 ? "0" + day : day;
        this.today = (day < 10 ? "0" + day : day) + "/" + (month < 10 ? "0" + month : month) + "/" + year;
        //    cc.log(this.sessionDate);
        //   cc.log("UserId : ", Configs.Login.UserId);
        //   cc.log("SessionKey : ", Configs.Login.SessionKey);
        //   cc.log("UserIdFish : ", Configs.Login.UserIdFish);
        //   cc.log("CoinFish : ", Configs.Login.CoinFish);
        // setup arrDates
        var today = new Date();
        this.arrDates = [today];
        for (var index = 1; index < 7; index++) {
            var yesterday = new Date(today);
            yesterday.setDate(yesterday.getDate() - index);
            this.arrDates.push(yesterday);
        }
        ShootFishNetworkClient_1.default.getInstance().checkConnect(function (isLogined) {
            if (!isLogined) {
                App_1.default.instance.alertDialog.showMsgWithOnDismissed("Đăng nhập thất bại, vui lòng thử lại.", function () {
                    _this.actBack();
                });
                return;
            }
            //    Play.SERVER_CONFIG = Configs.Login.FishConfigs;
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
            if (Configs_1.default.Login.CoinFish <= 0) {
                App_1.default.instance.confirmDialog.show3("Tiền trong Lô Đề của bạn đã hết, bạn có muốn chuyển tiền vào không?", "Có", function (isConfirm) {
                    if (isConfirm) {
                        _this.popupCoinTransfer.show();
                    }
                });
            }
        });
        ShootFishNetworkClient_1.default.getInstance().addOnClose(function () {
            App_1.default.instance.showErrLoading("Mất kết nối, đang thử kết nối lại...");
        }, this);
        MiniGameNetworkClient_1.default.getInstance().addListener(function (data) {
            var inPacket = new Network_InPacket_1.default(data);
            switch (inPacket.getCmdId()) {
                case Loto_Cmd_1.default.Code.GET_MONEY_USE: {
                    var res = new Loto_Cmd_1.default.ResGetMoneyUse(data);
                    Configs_1.default.Login.Coin = res.moneyUse;
                    BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                    break;
                }
            }
        }, this);
    };
    LotoController.prototype.start = function () {
        var _this = this;
        // musicSave :   0 == OFF , 1 == ON
        var musicSave = cc.sys.localStorage.getItem("musicLoto");
        if (musicSave != null) {
            this.musicSlotState = parseInt(musicSave);
        }
        else {
            this.musicSlotState = 1;
            cc.sys.localStorage.setItem("musicLoto", "1");
        }
        if (this.musicSlotState == 1) {
            this.remoteMusicBackground = cc.audioEngine.playMusic(this.musicBackground, true);
        }
        this.initNumSelector(1000);
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function () {
            _this.labelUserGold.string = Utils_1.default.formatNumber(Configs_1.default.Login.CoinFish);
        }, this);
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        ShootFishNetworkClient_1.default.getInstance().addListener(function (route, push) {
            //    cc.log("LOTO route : ", route);
            //   cc.log("LOTO push : ", push);
            switch (route) {
                case "onLOTO1":
                    //     cc.log("Loto LOTO1 push : ", push);
                    var itemNewBet = cc.instantiate(_this.prefabItemNewBet);
                    itemNewBet.getComponent('Loto.ItemNewBet').initItem({
                        nickname: push["nickname"],
                        channel: push["channel"],
                        mode: push["mode"],
                        bet: push["cost"],
                        nums: push["number"]
                    });
                    _this.contentNewBet.addChild(itemNewBet);
                    _this.scrollNewBet.scrollToBottom(0.2);
                    break;
                case "LOTO2":
                    //     cc.log("Loto LOTO2 push : ", push);
                    break;
                case "LOTO3":
                    //    cc.log("Loto LOTO3 push : ", push);
                    break;
                case "LOTO4":
                    //    cc.log("Loto LOTO4 push : ", push);
                    break;
                case "LOTO5":
                    //    cc.log("Loto LOTO5 push : ", push);
                    break;
                case "LOTO6":
                    //   cc.log("Loto LOTO6 push : ", push);
                    break;
                case "onLOTO7":
                    //    cc.log("Loto LOTO7 push : ", push);
                    var itemNewChat = cc.instantiate(_this.prefabItemChat);
                    itemNewChat.getComponent('Loto.ItemChat').initItem({
                        nickname: push["nickname"],
                        msg: push["msg"],
                    });
                    _this.contentChat.addChild(itemNewChat);
                    _this.scrollChat.scrollToBottom(0.2);
                    break;
                case "LOTO8":
                    //    cc.log("Loto LOTO8 push : ", push);
                    break;
                case "LOTO9":
                    //   cc.log("Loto LOTO9 push : ", push);
                    break;
                default:
                    break;
            }
        }, this);
        // ShootFishNetworkClient.getInstance().checkConnect((isLogined) => {
        //     if (!isLogined) {
        //         // this.dismiss();
        //         return;
        //     }
        //     BroadcastReceiver.send(BroadcastReceiver.USER_UPDATE_COIN);
        //     if (Configs.Login.CoinFish <= 0) {
        //         App.instance.confirmDialog.show3("Tiền trong Bắn Cá của bạn đã hết, bạn có muốn chuyển tiền vào không?", "Có", (isConfirm) => {
        //             if (isConfirm) {
        //                 // this.popupCoinTransfer.show();
        //             }
        //         });
        //     }
        // });
        // Chat
        this.listTabs[0].isChecked = true;
        this.contentTabs.children[0].active = true;
        this.requestGetChatHistory();
        this.requestGetNewBetHistory();
        // Mode
        App_1.default.instance.showLoading(true);
        this.requestGetGameAvailable();
        this.betDate.string = this.today;
        // Lay ket qua cac lan danh truoc xem hom nay co an dc gi k
        this.requestGetCalculateResult();
        this.onBetChannelSelected(0, 1);
        this.changeMode(null, 1);
    };
    // action
    LotoController.prototype.showListMode = function () {
        this.listModes.active = !this.listModes.active;
        this.listModes.parent.children[2].angle = this.listModes.active ? 0 : 180;
    };
    LotoController.prototype.changeMode = function (event, groupId) {
        var groupMode = parseInt(groupId);
        //   cc.log("Loto changeMode groupMode : ", groupMode);
        this.listModes.active = false;
        this.listModes.parent.children[2].angle = 180;
        var modeName = this.listModes.children[groupMode - 1].children[0].getComponent(cc.Label).string;
        this.currentMode.children[1].getComponent(cc.Label).string = modeName;
        this.resetContentModeState();
        this.contentMode.children[groupMode - 1].active = true;
        this.contentMode.children[groupMode - 1].children[0].getComponent(cc.Toggle).isChecked = true;
        var arrModesInGroup = [];
        switch (groupMode) {
            case 1:
                arrModesInGroup = [1, 2];
                break;
            case 2:
                arrModesInGroup = [3, 4, 5];
                break;
            case 3:
                arrModesInGroup = [6, 7];
                break;
            case 4:
                arrModesInGroup = [8, 9, 10];
                break;
            case 5:
                arrModesInGroup = [11, 12, 13, 14];
                break;
            case 6:
                arrModesInGroup = [17, 24, 25];
                break;
            case 7:
                arrModesInGroup = [18, 19, 20];
                break;
            case 8:
                arrModesInGroup = [21, 22, 23];
                break;
            default:
                break;
        }
        var arrModeAvailableInLocation = [];
        switch (this.GAME_LOCATION) {
            case Loto_Cmd_1.default.Code.LOTO_LOCATION.MienBac:
                arrModeAvailableInLocation = Loto_Cmd_1.default.Code.LOTO_MODE_BAC;
                break;
            case Loto_Cmd_1.default.Code.LOTO_LOCATION.MienTrung:
                arrModeAvailableInLocation = Loto_Cmd_1.default.Code.LOTO_MODE_TRUNG;
                break;
            case Loto_Cmd_1.default.Code.LOTO_LOCATION.MienNam:
                arrModeAvailableInLocation = Loto_Cmd_1.default.Code.LOTO_MODE_NAM;
                break;
            default:
                break;
        }
        // setup Mode in Group
        var nodeMode = this.contentMode.children[groupMode - 1];
        var firstActive = 0;
        var count = -1;
        for (var index = 0; index < arrModesInGroup.length; index++) {
            var findId = arrModeAvailableInLocation.indexOf(arrModesInGroup[index]);
            if (findId != -1) {
                if (count == -1) {
                    firstActive = index;
                }
                count++;
                nodeMode.children[index].active = true;
                // Open
            }
            else {
                // Block
                nodeMode.children[index].active = false;
            }
        }
        var firstModeInGroup = arrModesInGroup[firstActive];
        if (this.GAME_LOCATION == Loto_Cmd_1.default.Code.LOTO_LOCATION.MienTrung && firstModeInGroup == 11) {
            firstModeInGroup = arrModesInGroup[1];
            this.contentMode.children[groupMode - 1].children[1].getComponent(cc.Toggle).isChecked = true;
        }
        this.chooseMode(null, firstModeInGroup);
    };
    LotoController.prototype.chooseMode = function (event, modeId) {
        //   cc.log("Loto chooseMode : ", modeId);
        this.GAME_MODE = parseInt(modeId);
        var numCount = -1;
        switch (this.GAME_MODE) {
            // 1 chu so
            case 6:
            case 7:
                numCount = 10;
                break;
            // 2 chu so
            case 1:
            case 3:
            case 4:
            case 5:
            case 8:
            case 9:
            case 10:
            case 15:
            case 16:
            case 17:
            case 21:
            case 22:
            case 23:
            case 24:
            case 25:
                numCount = 100;
                break;
            // 3 chu so
            case 2:
            case 11:
            case 12:
            case 13:
            case 14:
            case 18:
            case 19:
            case 20:
                numCount = 1000;
                break;
            default:
                break;
        }
        this.numRequired = Loto_Cmd_1.default.Code.LOTO_GAME_MODE_NUM_REQUIRE[this.GAME_MODE];
        //   cc.log("Loto chooseMode numRequired : ", this.numRequired);
        this.changeGameGuide();
        this.currentNumPicked = [];
        this.labelTotalBet.string = "0";
        this.edtBet.string = "1";
        //   cc.log("Loto chooseMode numCount : ", numCount);
        this.updateNumSelector(numCount);
        this.requestGetPayWinRate();
    };
    LotoController.prototype.chooseLocation = function (toggle) {
        var index = this.listLocation.indexOf(toggle);
        //   cc.log("Loto chooseLocation locationId : ", index);
        this.GAME_LOCATION = index;
        var firstChannelInLocation = 0;
        switch (this.GAME_LOCATION) {
            case Loto_Cmd_1.default.Code.LOTO_LOCATION.MienBac:
                this.setupGroup(Loto_Cmd_1.default.Code.LOTO_GROUP_BAC);
                firstChannelInLocation = 1;
                break;
            case Loto_Cmd_1.default.Code.LOTO_LOCATION.MienTrung:
                this.setupGroup(Loto_Cmd_1.default.Code.LOTO_GROUP_TRUNG);
                firstChannelInLocation = 2;
                break;
            case Loto_Cmd_1.default.Code.LOTO_LOCATION.MienNam:
                this.setupGroup(Loto_Cmd_1.default.Code.LOTO_GROUP_NAM);
                firstChannelInLocation = 16;
                break;
            default:
                break;
        }
        this.changeMode(null, 1);
        this.onBetChannelSelected("0", firstChannelInLocation);
    };
    LotoController.prototype.setupGroup = function (arrGroupAvailable) {
        for (var index = 0; index < this.listModes.childrenCount; index++) {
            var findId = arrGroupAvailable.indexOf(index + 1);
            if (findId != -1) {
                // Open
                this.listModes.children[index].active = true;
            }
            else {
                // Block
                this.listModes.children[index].active = false;
            }
        }
    };
    LotoController.prototype.actionCancelBet = function () {
        this.currentNumPicked = [];
        this.labelTotalBet.string = "0";
        this.labelWinValue.string = "" + this.currentWinValue;
        this.edtBet.string = "1";
        this.resetContentNumberPicked();
        this.chooseMode(null, this.GAME_MODE);
    };
    LotoController.prototype.actionSubmitBet = function () {
        var hourOfDay = new Date().getHours();
        var minOfDay = new Date().getMinutes();
        if ((hourOfDay == 18 && minOfDay > 5) || hourOfDay >= 19) {
            var msg_1 = "Hết thời gian đặt cược.\nThời gian đặt cược từ 0h tới 18h05.";
            this.showPopupNotify(msg_1);
            return;
        }
        // kiem tra so luong so can danh cua mode do
        if (this.numRequired == 1) {
            if (this.currentNumPicked.length < 1) {
                var msg_3 = "Bạn cần chọn ít nhất 1 số !";
                this.showPopupNotify(msg_3);
                return;
            }
        }
        else {
            if (this.currentNumPicked.length !== this.numRequired) {
                var msg_3 = "Bạn cần chọn " + this.numRequired + " số !";
                this.showPopupNotify(msg_3);
                return;
            }
        }
        if (this.currentBetValue == 0) {
            this.showPopupNotify("Vui Lòng Chọn Lại Đài Miền Bắc");
            return;
        }
        var totalBet = 0;
        var betOneTurn = parseInt(this.edtBet.string) * 1000;
        if (this.numRequired == 1) {
            totalBet = betOneTurn * this.currentBetValue * this.currentNumPicked.length;
        }
        else {
            totalBet = betOneTurn * this.currentBetValue;
        }
        //    cc.log("Loto actionSubmitBet totalBet : ", totalBet);
        if (Configs_1.default.Login.CoinFish >= totalBet) {
            //      cc.log("Loto actionSubmitBet Du tien");
            App_1.default.instance.showLoading(true);
            switch (this.numRequired) {
                case 1:
                    this.numRequest = 0;
                    this.numRequestCompleted = this.currentNumPicked.length;
                    for (var index = 0; index < this.currentNumPicked.length; index++) {
                        this.requestPlay(this.currentNumPicked[index], betOneTurn);
                    }
                    break;
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 12:
                case 14:
                    this.numRequest = 0;
                    this.numRequestCompleted = 1;
                    this.requestPlay(this.currentNumPicked, betOneTurn);
                    break;
                default:
                    break;
            }
        }
        else {
            // Khong du tien
            //    cc.log("Loto actionSubmitBet Khong du tien");
            this.showPopupNotify("Bạn không có đủ tiền !");
        }
    };
    // Feature Flex
    LotoController.prototype.changeFlexFeatures = function (toggle) {
        var index = this.listTabs.indexOf(toggle);
        //    cc.log("Loto changeFlexFeatures tabId : ", index);
        this.resetContentTabsState();
        this.contentTabs.children[index].active = true;
        switch (index) {
            case 0: // Chat
                this.scrollChat.scrollToBottom(0.2);
                break;
            case 1: // New Bet
                this.scrollNewBet.scrollToBottom(0.2);
                break;
            case 2: // Result
                this.tabResultDate.string = this.today;
                this.onBetChannelSelected("1", Loto_Cmd_1.default.Code.LOTO_CHANNEL.MIEN_BAC);
                break;
            default:
                break;
        }
    };
    LotoController.prototype.actionSendChat = function () {
        //   cc.log("Chat msg : ", this.edtChatInput.string);
        var msg = this.edtChatInput.string.trim();
        //   cc.log("Chat msg trim : ", msg);
        if (msg.length > 0) {
            this.requestChat(msg);
            this.edtChatInput.string = "";
        }
    };
    // Choose Bet Channel
    LotoController.prototype.showBetChannel = function (event, type) {
        this.btnBetChannel.children[0].angle = 180;
        this.btnTabResultChannel.children[0].angle = 180;
        this.btnPopupResultChannel.children[0].angle = 180;
        this.btnCancelChangeChannel.active = true;
        this.betChannel.active = !this.betChannel.active;
        if (type == "0") { // o phan chon cuoc
            this.btnBetChannel.children[0].angle = this.betChannel.active ? 0 : 180;
            this.betChannel.position = cc.v2(-385, -75);
        }
        else if (type == "1") { // o phan tab ket qua nho
            this.btnTabResultChannel.children[0].angle = this.betChannel.active ? 0 : 180;
            this.betChannel.position = cc.v2(485, -15);
        }
        else if (type == "2") { // o phan Tab ket qua To
            this.btnPopupResultChannel.children[0].angle = this.betChannel.active ? 0 : 180;
            this.betChannel.position = cc.v2(60, 35);
        }
        //    console.log("showBetChannel: " + this.contentBetChannel.childrenCount);
        // for (let index = 0; index < this.contentBetChannel.childrenCount; index++) {
        if (this.contentBetChannel.childrenCount == 0) {
            for (var index = 1; index < 2; index++) { // 0 = NONE
                var info = {
                    name: Loto_Cmd_1.default.Code.LOTO_CHANNEL_NAME[index],
                    id: index,
                    from: type
                };
                var item = cc.instantiate(this.prefabItemChannel);
                item.getComponent("Loto.ItemChannel").initItem(info);
                this.contentBetChannel.addChild(item);
            }
        }
        else {
            // update field From
            for (var index = 0; index < this.contentBetChannel.childrenCount; index++) {
                this.contentBetChannel.children[index].getComponent("Loto.ItemChannel").updateInfo(type);
            }
        }
        this.contentBetChannel.children[0].active = true;
        // }
        if (type == "0") {
            var arrChannelAvailableInLocation = [];
            switch (this.GAME_LOCATION) {
                case Loto_Cmd_1.default.Code.LOTO_LOCATION.MienBac:
                    arrChannelAvailableInLocation = Loto_Cmd_1.default.Code.LOTO_CHANNEL_BAC;
                    break;
                case Loto_Cmd_1.default.Code.LOTO_LOCATION.MienTrung:
                    arrChannelAvailableInLocation = Loto_Cmd_1.default.Code.LOTO_CHANNEL_TRUNG;
                    break;
                case Loto_Cmd_1.default.Code.LOTO_LOCATION.MienNam:
                    arrChannelAvailableInLocation = Loto_Cmd_1.default.Code.LOTO_CHANNEL_NAM;
                    break;
                default:
                    break;
            }
            for (var index = 0; index < this.contentBetChannel.childrenCount; index++) {
                var findId = arrChannelAvailableInLocation.indexOf(index + 1);
                if (findId != -1) {
                    // Open
                    this.contentBetChannel.children[index].active = true;
                }
                else {
                    // Block
                    this.contentBetChannel.children[index].active = false;
                }
            }
        }
        this.scrollBetChannel.scrollToOffset(cc.v2(0, 0), 0.2);
    };
    LotoController.prototype.onBetChannelSelected = function (type, channelId) {
        //    cc.log("LotoController onBetChannelSelected type : ", type);
        //    cc.log("LotoController onBetChannelSelected channelId : ", channelId);
        this.btnCancelChangeChannel.active = false;
        this.betChannel.active = false;
        if (type == "0") { // o phan chon cuoc
            this.btnBetChannel.children[0].angle = 180;
            this.currentBetChannel.string = Loto_Cmd_1.default.Code.LOTO_CHANNEL_NAME[channelId];
            this.GAME_CHANNEL = channelId;
            this.actionCancelBet();
        }
        else if (type == "1") { // o phan tab ket qua nho
            this.btnTabResultChannel.children[0].angle = 180;
            this.currentTabResultChannel.string = Loto_Cmd_1.default.Code.LOTO_CHANNEL_NAME[channelId];
            this.requestGetLotoResult(this.sessionDate, channelId);
        }
        else if (type == "2") { // o phan Tab ket qua To
            this.btnPopupResultChannel.children[0].angle = 180;
            this.currentPopupResultChannel.string = Loto_Cmd_1.default.Code.LOTO_CHANNEL_NAME[channelId];
            this.popupResultCurrentChannelId = channelId;
            this.chooseTime(null, 0);
            // this.requestGetLotoResult(this.sessionDate, channelId);
        }
    };
    LotoController.prototype.cancelChangeChannel = function () {
        this.btnCancelChangeChannel.active = false;
        this.btnBetChannel.children[0].angle = 180;
        this.btnTabResultChannel.children[0].angle = 180;
        this.btnPopupResultChannel.children[0].angle = 180;
        this.betChannel.active = false;
    };
    // Number Selector
    LotoController.prototype.initNumSelector = function (numCount) {
        if (numCount > 0) {
            for (var index = 0; index < numCount; index++) {
                var item = cc.instantiate(this.prefabItemNumber);
                item.getComponent("Loto.ItemNumber").initItem(numCount, index);
                this.contentNumSelector.addChild(item);
            }
            this.scrollNumSelector.scrollToOffset(cc.v2(0, 0), 0.2);
        }
    };
    LotoController.prototype.updateNumSelector = function (numCount) {
        for (var index = 0; index < 1000; index++) {
            if (index < numCount) {
                this.contentNumSelector.children[index].active = true;
                this.contentNumSelector.children[index].getComponent(cc.Toggle).isChecked = false;
                this.contentNumSelector.children[index].getComponent("Loto.ItemNumber").formatName(numCount);
            }
            else {
                this.contentNumSelector.children[index].active = false;
            }
        }
        this.scrollNumSelector.scrollToOffset(cc.v2(0, 0), 0.2);
    };
    LotoController.prototype.openNumSelector = function () {
        var heightOpen = 460;
        var heightClose = 345; // 0.75
        var current = this.numberSelector.children[0].height;
        this.numberSelector.children[0].height = current == 480 ? 365 : 480;
        this.contentNumSelector.height = current == 480 ? heightClose : heightOpen;
        this.contentNumSelector.parent.height = current == 480 ? heightClose : heightOpen;
        this.scrollNumSelector.node.height = current == 480 ? heightClose : heightOpen;
        this.btnOpenNumberSelector.y = current == 480 ? -375 : -490;
        this.contentDescMode.active = current == 480 ? true : false;
    };
    // Number Picked
    LotoController.prototype.addNumberPicked = function (number) {
        this.currentNumPicked.push(number);
        //     cc.log("LOTO addNumberPicked number : ", number);
        var item = cc.instantiate(this.prefabItemNumberPicked);
        item.getComponent("Loto.ItemNumSelected").initItem(number);
        this.contentNumPicked.addChild(item);
        this.scrollNumPicked.scrollToRight(0.5);
        if (this.numRequired == 1) {
            this.labelTotalBet.string = "" + (this.currentBetValue * parseInt(this.edtBet.string) * this.currentNumPicked.length);
        }
        else {
            this.labelTotalBet.string = "" + (this.currentBetValue * parseInt(this.edtBet.string));
        }
        this.labelWinValue.string = "" + (this.currentWinValue * parseInt(this.edtBet.string));
    };
    LotoController.prototype.removeNumberPicked = function (number) {
        // cc.log("LOTO removeNumberPicked number : ", number);
        this.resetContentNumberPicked();
        var temp = __spread(this.currentNumPicked);
        this.currentNumPicked = [];
        for (var index = 0; index < temp.length; index++) {
            if (temp[index] != number) {
                this.currentNumPicked.push(temp[index]);
                var item = cc.instantiate(this.prefabItemNumberPicked);
                item.getComponent("Loto.ItemNumSelected").initItem(temp[index]);
                this.contentNumPicked.addChild(item);
            }
        }
        this.scrollNumPicked.scrollToRight(0.5);
        if (this.numRequired == 1) {
            this.labelTotalBet.string = "" + (this.currentBetValue * parseInt(this.edtBet.string) * this.currentNumPicked.length);
        }
        else {
            this.labelTotalBet.string = "" + (this.currentBetValue * parseInt(this.edtBet.string));
        }
        this.labelWinValue.string = "" + (this.currentWinValue * parseInt(this.edtBet.string));
        //  cc.log("Loto removeNumberPicked currentNumPicked : ", this.currentNumPicked);
    };
    // Game guide
    LotoController.prototype.changeGameGuide = function () {
        //  cc.log("LOTO changeGameGuide GAME_MODE : ", this.GAME_MODE);
        //  cc.log("LOTO changeGameGuide GAME_LOCATION : ", this.GAME_LOCATION);
        //  cc.log("LOTO changeGameGuide GAME_CHANNEL : ", this.GAME_CHANNEL);
        this.currentGameHelp = "";
        for (var index = 0; index < this.helpCenter.length; index++) {
            var data = this.helpCenter[index];
            if (data.gameMode == this.GAME_MODE && data.location == this.GAME_LOCATION) {
                this.currentGameHelp = data.help;
            }
        }
        //    cc.log(this.currentGameHelp);
        this.labelGameGuide.string = this.currentGameHelp;
    };
    // State
    LotoController.prototype.resetContentModeState = function () {
        for (var index = 0; index < this.contentMode.childrenCount; index++) {
            this.contentMode.children[index].active = false;
        }
    };
    LotoController.prototype.resetContentTabsState = function () {
        for (var index = 0; index < this.contentTabs.childrenCount; index++) {
            this.contentTabs.children[index].active = false;
        }
    };
    LotoController.prototype.resetContentNumberPicked = function () {
        this.contentNumPicked.removeAllChildren();
    };
    LotoController.prototype.resetContentNumSelector = function () {
        this.contentNumSelector.removeAllChildren();
    };
    // Popup
    LotoController.prototype.showPopupResult = function () {
        this.popupResult.active = true;
        this.popupResultDate.string = this.formatDate(this.arrDates[0]);
        for (var index = 0; index < this.arrDates.length; index++) {
            var time = this.arrDates[index];
            this.contentTime.children[1].children[index].children[0].getComponent(cc.Label).string = this.formatDate(time);
        }
        //   cc.log("LOTO showPopupResult sessionDate : ", this.sessionDate);
        this.onBetChannelSelected("2", Loto_Cmd_1.default.Code.LOTO_CHANNEL.MIEN_BAC);
    };
    LotoController.prototype.showContentTime = function () {
        //   cc.log("LOTO showContentTime");
        var scaleNow = this.contentTime.scaleY;
        this.contentTime.stopAllActions();
        if (scaleNow < 0.5) {
            this.contentTime.scaleY = 0;
            this.contentTime.runAction(cc.scaleTo(0.2, 1, 1));
        }
        else {
            this.contentTime.scaleY = 1;
            this.contentTime.runAction(cc.scaleTo(0.2, 1, 0));
        }
    };
    LotoController.prototype.chooseTime = function (event, id) {
        //   cc.log("LOTO chooseTime id : ", id);
        //   cc.log("LOTO chooseTime arrDates : ", this.arrDates[parseInt(id)]);
        this.contentTime.scaleY = 0;
        var time = this.arrDates[parseInt(id)];
        this.popupResultDate.string = this.formatDate(time);
        var session = this.getSession(time);
        //  cc.log("LOTO chooseTime session : ", session);
        this.requestGetLotoResult(session, this.popupResultCurrentChannelId);
    };
    LotoController.prototype.formatDate = function (date) {
        var month = '' + (date.getMonth() + 1);
        var day = '' + date.getDate();
        var year = date.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [day, month, year].join('/');
    };
    LotoController.prototype.getSession = function (date) {
        var month = '' + (date.getMonth() + 1);
        var day = '' + date.getDate();
        var year = date.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('');
    };
    LotoController.prototype.closePopupResult = function () {
        this.popupResult.active = false;
    };
    LotoController.prototype.showPopupHistory = function () {
        this.requestGetPlayerRequest();
    };
    LotoController.prototype.closePopupHistory = function () {
        this.popupHistory.active = false;
    };
    LotoController.prototype.showPopupNotify = function (msg) {
        this.popupNotify.active = true;
        this.labelMsg.string = msg;
    };
    LotoController.prototype.closePopupNotify = function () {
        this.popupNotify.active = false;
    };
    LotoController.prototype.onTextChangeBet = function (event) {
        //   cc.log("LOTO onTextChangeBet event: ", event);
        if (event.length > 0) {
            if (/^[0-9]*$/.test(event) == false) {
                App_1.default.instance.alertDialog.showMsg("Tiền cược phải là số dương");
                this.edtBet.string = "1";
                event = "1";
            }
            var raw = parseInt(event);
            if (raw == 0) {
                this.edtBet.string = "1";
                event = "1";
            }
            this.edtBet.string = "" + parseInt(event);
        }
        else {
            this.edtBet.string = "1";
            event = "1";
        }
        var delta = parseInt(event);
        if (this.numRequired == 1) {
            this.labelTotalBet.string = "" + (this.currentBetValue * delta * this.currentNumPicked.length);
        }
        else {
            this.labelTotalBet.string = "" + (this.currentBetValue * delta);
        }
        this.labelWinValue.string = "" + (this.currentWinValue * delta);
    };
    // Request
    LotoController.prototype.requestPlay = function (num, betOneTurn) {
        var _this = this;
        //   cc.log("Loto requestPlay number : ", num);
        //   cc.log("Loto requestPlay betOneTurn : ", betOneTurn);
        ShootFishNetworkClient_1.default.getInstance().request("LOTO1", {
            "appId": "xxeng",
            "userId": Configs_1.default.Login.UserIdFish,
            "number": num,
            "session": this.sessionDate,
            "mode": this.GAME_MODE,
            "channel": this.GAME_CHANNEL,
            "pay": betOneTurn
        }, function (res) {
            //   cc.log("LOTO1 : ", res);
            if (res["code"] != 200) {
                App_1.default.instance.showLoading(false);
                App_1.default.instance.alertDialog.showMsg("Lỗi " + res["code"] + ", " + res["msg"]);
                return;
            }
            _this.numRequest += 1;
            //   cc.log("LOTO1 numRequest : ", this.numRequest);
            if (_this.numRequest == _this.numRequestCompleted) {
                _this.showPopupNotify("Đặt thành công !");
                // Bet Success -> Can reset
                _this.numRequest = 0;
                _this.numRequestCompleted = 0;
                _this.actionCancelBet();
                App_1.default.instance.showLoading(false);
            }
            // Tru tien
            //   cc.log("Loto Bet Success cost : ", res["cost"]);
            Configs_1.default.Login.CoinFish = res["cash"];
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
            // do something
        }, this);
    };
    LotoController.prototype.requestGetPayWinRate = function () {
        var _this = this;
        //   cc.log("Loto requestGetPayWinRate GAME_MODE : ", this.GAME_MODE);
        //   cc.log("Loto requestGetPayWinRate GAME_CHANNEL : ", this.GAME_CHANNEL);
        ShootFishNetworkClient_1.default.getInstance().request("LOTO2", {
            "mode": this.GAME_MODE,
            "channel": this.GAME_CHANNEL
        }, function (res) {
            //   cc.log("LOTO2 : ", res);
            if (res["code"] != 200) {
                //App.instance.alertDialog.showMsg("Lỗi " + res["code"] + ", không xác định.");
                return;
            }
            // do something
            _this.currentNumPicked = [];
            _this.resetContentNumberPicked();
            _this.currentBetValue = res["payRate"];
            _this.currentWinValue = res["winRate"];
            //   cc.log("LOTO2 this.currentBetValue : ", this.currentBetValue);
            _this.edtBet.string = "1";
            _this.labelTotalBet.string = "0";
            _this.labelWinValue.string = res["winRate"];
        }, this);
    };
    // Lay theo Session
    LotoController.prototype.requestGetCalculateResult = function () {
        ShootFishNetworkClient_1.default.getInstance().request("LOTO3", {
            "session": this.sessionDate,
        }, function (res) {
            //    cc.log("LOTO3 : ", res);
            if (res["code"] != 200) {
                //App.instance.alertDialog.showMsg("Lỗi " + res["code"] + ", không xác định.");
                return;
            }
            // do something
        }, this);
    };
    // Lay tat ca
    LotoController.prototype.requestGetPlayerRequest = function () {
        var _this = this;
        ShootFishNetworkClient_1.default.getInstance().request("LOTO4", null, function (res) {
            //    cc.log("LOTO4 : ", res);
            if (res["code"] != 200) {
                //App.instance.alertDialog.showMsg("Lỗi " + res["code"] + ", không xác định.");
                return;
            }
            // do something
            _this.popupHistory.active = true;
            _this.contentHistory.removeAllChildren(true);
            var data = res["data"];
            for (var index = 0; index < data.length; index++) {
                var item = cc.instantiate(_this.prefabItemHistory);
                item.getComponent("Loto.ItemHistory").initItem(index, data[index]);
                _this.contentHistory.addChild(item);
            }
        }, this);
    };
    LotoController.prototype.requestGetLotoResult = function (sessionId, channelId) {
        var _this = this;
        //   cc.log("Loto requestGetLotoResult sessionId : ", sessionId);
        //   cc.log("Loto requestGetLotoResult channelId : ", channelId);
        ShootFishNetworkClient_1.default.getInstance().request("LOTO5", {
            "session": sessionId,
            "channel": channelId
        }, function (res) {
            //  cc.log("LOTO5 : ", res);
            if (res["code"] != 200) {
                //App.instance.alertDialog.showMsg("Lỗi " + res["code"] + ", không xác định.");
                return;
            }
            // do something
            if (_this.popupResult.active) {
                // Popup Result
                for (var index = 0; index < 9; index++) {
                    _this.labelResult[index].string = "......";
                }
            }
            else {
                // Tab Result
                for (var index = 0; index < 9; index++) {
                    _this.labelTabResult[index].string = "......";
                }
            }
            var resData = res["data"];
            if (resData["channel"] == 0 || resData["session"] == 0) {
                // Chua co ket qua
            }
            else {
                resData = res["data"];
                var result = resData["results"];
                if (resData["result8"] == "[]") { // k co giai 8
                    if (_this.popupResult.active) {
                        // Popup Result
                        _this.labelResult[8].string = "";
                    }
                    else {
                        // Tab Result
                        _this.labelTabResult[8].string = "";
                    }
                }
                var deltaSpaces = _this.popupResult.active ? "    " : "  ";
                for (var index = 0; index < 8; index++) {
                    var strJson = resData["result" + index];
                    if (index == 0) {
                        strJson = resData["resultSp"];
                    }
                    var rowInfo = JSON.parse(strJson);
                    var text = "";
                    for (var i = 0; i < rowInfo.length; i++) {
                        if (i < rowInfo.length - 1) {
                            if (i == 2 && (index == 3 || index == 5)) {
                                text = text + rowInfo[i].toString() + "\n";
                            }
                            else {
                                text = text + rowInfo[i].toString() + deltaSpaces;
                            }
                        }
                        else {
                            text = text + rowInfo[i].toString();
                        }
                    }
                    // if (index == 0) {
                    //     rowInfo=resData["resultSp"];
                    //     text = rowInfo[0];
                    // }else if (index == 1) {
                    //     text = resData["resultSp"][0];
                    // } else if (index == 2) {
                    //     text = rowInfo[0] + deltaSpaces + rowInfo[1];
                    // } else if (index == 3 || index == 5) {
                    //     text = rowInfo[0] + deltaSpaces + rowInfo[1] + deltaSpaces + rowInfo[2] + "\n" + rowInfo[3] + deltaSpaces + rowInfo[4] + deltaSpaces + rowInfo[5];
                    // } else if (index == 4) {
                    //     text = rowInfo[0] + deltaSpaces + rowInfo[1] + deltaSpaces + rowInfo[2] + deltaSpaces + rowInfo[3];
                    // } else if (index == 6) {
                    //     text = rowInfo[0] + deltaSpaces + rowInfo[1] + deltaSpaces + rowInfo[2];
                    // } else if (index == 7 || index == 8) {
                    //     text = rowInfo[0] + deltaSpaces + rowInfo[1] + deltaSpaces + rowInfo[2] + deltaSpaces + rowInfo[3];
                    // }
                    if (_this.popupResult.active) {
                        // Popup Result
                        _this.labelResult[index].string = text;
                    }
                    else {
                        // Tab Result
                        _this.labelTabResult[index].string = text;
                    }
                }
            }
        }, this);
    };
    LotoController.prototype.requestGetHelp = function () {
        var _this = this;
        ShootFishNetworkClient_1.default.getInstance().request("LOTO6", null, function (res) {
            //   cc.log("LOTO6 : ", res);
            if (res["code"] != 200) {
                //App.instance.alertDialog.showMsg("Lỗi " + res["code"] + ", không xác định.");
                return;
            }
            // do something
            //  cc.log("LOTO6 : ", res['data']);
            _this.helpCenter = res["data"];
            _this.changeGameGuide();
        }, this);
    };
    LotoController.prototype.requestChat = function (msg) {
        //  cc.log("Loto requestChat msg : ", msg);
        ShootFishNetworkClient_1.default.getInstance().request("LOTO7", {
            "msg": msg,
        }, function (res) {
            //    cc.log("LOTO7 : ", res);
            if (res["code"] != 200) {
                //App.instance.alertDialog.showMsg("Lỗi " + res["code"] + ", không xác định.");
                return;
            }
            // do something
        }, this);
    };
    LotoController.prototype.requestGetChatHistory = function () {
        var _this = this;
        ShootFishNetworkClient_1.default.getInstance().request("LOTO8", null, function (res) {
            //  cc.log("LOTO8 :", res);
            if (res["code"] != 200) {
                //App.instance.alertDialog.showMsg("Lỗi " + res["code"] + ", không xác định.");
                return;
            }
            // do something
            _this.contentChat.removeAllChildren(true);
            var arrChat = res["data"];
            for (var index = 0; index < arrChat.length; index++) {
                var item = cc.instantiate(_this.prefabItemChat);
                item.getComponent('Loto.ItemChat').initItem({
                    nickname: arrChat[index].nickname,
                    msg: arrChat[index].msg,
                });
                _this.contentChat.addChild(item);
            }
            _this.scrollChat.scrollToBottom(0.2);
        }, this);
    };
    LotoController.prototype.requestGetGameAvailable = function () {
        var _this = this;
        ShootFishNetworkClient_1.default.getInstance().request("LOTO9", null, function (res) {
            //  cc.log("LOTO9 :", res);
            if (res["code"] != 200) {
                //App.instance.alertDialog.showMsg("Lỗi " + res["code"] + ", không xác định.");
                return;
            }
            // do something
            App_1.default.instance.showLoading(false);
            // Neu mode va channel la [] nghia la cho choi Full game
            _this.channelsOpen = res["channels"];
            _this.modesOpen = res["modes"];
            if (_this.modesOpen.length == 0) {
                for (var index = 0; index < 24; index++) {
                    _this.modesOpen.push(index);
                }
            }
            if (_this.channelsOpen.length == 0) {
                for (var index = 0; index < 37; index++) {
                    _this.channelsOpen.push(index);
                }
            }
            //   cc.log("Mode Open : ", this.modesOpen);
            //  cc.log("Channel Open : ", this.channelsOpen);
            // Init Game
            _this.chooseLocation(_this.listLocation[0]);
            _this.listLocation[0].isChecked = true;
            _this.GAME_LOCATION = Loto_Cmd_1.default.Code.LOTO_LOCATION.MienBac;
            _this.onBetChannelSelected("0", Loto_Cmd_1.default.Code.LOTO_CHANNEL.MIEN_BAC); // param 1 la 0 nghia la chon o phan Bet
            _this.requestGetHelp();
            _this.requestGetPayWinRate();
        }, this);
    };
    // lay danh sach bet cua cac nguoi cho khac cho tab new bet
    LotoController.prototype.requestGetNewBetHistory = function () {
        var _this = this;
        ShootFishNetworkClient_1.default.getInstance().request("LOTO10", null, function (res) {
            //   cc.log("LOTO10 :", res);
            if (res["code"] != 200) {
                //App.instance.alertDialog.showMsg("Lỗi " + res["code"] + ", không xác định.");
                return;
            }
            // do something
            _this.contentNewBet.removeAllChildren(true);
            var arrBet = res["data"];
            for (var index = 0; index < arrBet.length; index++) {
                var push = arrBet[index];
                var item = cc.instantiate(_this.prefabItemNewBet);
                item.getComponent('Loto.ItemNewBet').initItem({
                    nickname: push["nickname"],
                    channel: push["channel"],
                    mode: push["mode"],
                    bet: push["cost"],
                    nums: push["number"]
                });
                _this.contentNewBet.addChild(item);
            }
            _this.scrollNewBet.scrollToBottom(0.2);
        }, this);
    };
    LotoController.prototype.actLogin = function () {
        var _this = this;
        var username = Configs_1.default.Login.Username;
        var password = Configs_1.default.Login.Password;
        App_1.default.instance.showLoading(true);
        Http_1.default.get(Configs_1.default.App.API, { c: 3, un: username, pw: md5(password) }, function (err, res) {
            App_1.default.instance.showLoading(false);
            if (err != null) {
                App_1.default.instance.alertDialog.showMsg("Đăng nhập không thành công, vui lòng kiểm tra lại kết nối.");
                return;
            }
            // console.log(res);
            switch (parseInt(res["errorCode"])) {
                case 0:
                    //   console.log("Đăng nhập thành công.");
                    Configs_1.default.Login.AccessToken = res["accessToken"];
                    Configs_1.default.Login.SessionKey = res["sessionKey"];
                    Configs_1.default.Login.Username = username;
                    Configs_1.default.Login.Password = password;
                    Configs_1.default.Login.IsLogin = true;
                    var userInfo = JSON.parse(base64.decode(Configs_1.default.Login.SessionKey));
                    Configs_1.default.Login.Nickname = userInfo["nickname"];
                    Configs_1.default.Login.Avatar = userInfo["avatar"];
                    Configs_1.default.Login.Coin = userInfo["vinTotal"];
                    Configs_1.default.Login.LuckyWheel = userInfo["luckyRotate"];
                    Configs_1.default.Login.IpAddress = userInfo["ipAddress"];
                    Configs_1.default.Login.CreateTime = userInfo["createTime"];
                    Configs_1.default.Login.Birthday = userInfo["birthday"];
                    Configs_1.default.Login.Birthday = userInfo["birthday"];
                    Configs_1.default.Login.VipPoint = userInfo["vippoint"];
                    Configs_1.default.Login.VipPointSave = userInfo["vippointSave"];
                    // MiniGameNetworkClient.getInstance().checkConnect();
                    //    MiniGameNetworkClient.getInstance().sendCheck(new cmd.ReqSubcribeJackpots());
                    //    SlotNetworkClient.getInstance().sendCheck(new cmd.ReqSubcribeHallSlot());
                    //    ShootFishNetworkClient.getInstance().checkConnect(() => {
                    //        BroadcastReceiver.send(BroadcastReceiver.USER_UPDATE_COIN);
                    //    });
                    //     this.panelNotLogin.active = false;
                    //    this.panelLogined.active = true;
                    SPUtils_1.default.setUserName(Configs_1.default.Login.Username);
                    SPUtils_1.default.setUserPass(Configs_1.default.Login.Password);
                    App_1.default.instance.buttonMiniGame.show();
                    //     this.getMailNotRead();
                    BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_INFO_UPDATED);
                    /* switch (VersionConfig.CPName) {
                        default:
                            this.popupBoomTan.show();
                            break;
                    } */
                    break;
                case 1007:
                    App_1.default.instance.alertDialog.showMsg("Thông tin đăng nhập không hợp lệ.");
                    break;
                case 2001:
                    _this.popupUpdateNickname.show2(username, password);
                    break;
                default:
                    App_1.default.instance.alertDialog.showMsg("Đăng nhập không thành công vui lòng thử lại sau.");
                    break;
            }
        });
    };
    LotoController.prototype.actBack = function () {
        cc.audioEngine.stopAll();
        App_1.default.instance.loadScene("Lobby");
    };
    var LotoController_1;
    LotoController.instance = null;
    __decorate([
        property(cc.Label)
    ], LotoController.prototype, "labelUserGold", void 0);
    __decorate([
        property(cc.Node)
    ], LotoController.prototype, "currentMode", void 0);
    __decorate([
        property(cc.Node)
    ], LotoController.prototype, "listModes", void 0);
    __decorate([
        property(cc.Node)
    ], LotoController.prototype, "contentMode", void 0);
    __decorate([
        property(cc.Label)
    ], LotoController.prototype, "labelGameGuide", void 0);
    __decorate([
        property(cc.Toggle)
    ], LotoController.prototype, "listLocation", void 0);
    __decorate([
        property(cc.Toggle)
    ], LotoController.prototype, "listTabs", void 0);
    __decorate([
        property(cc.Node)
    ], LotoController.prototype, "contentTabs", void 0);
    __decorate([
        property(cc.EditBox)
    ], LotoController.prototype, "edtChatInput", void 0);
    __decorate([
        property(cc.Node)
    ], LotoController.prototype, "contentChat", void 0);
    __decorate([
        property(cc.Prefab)
    ], LotoController.prototype, "prefabItemChat", void 0);
    __decorate([
        property(cc.ScrollView)
    ], LotoController.prototype, "scrollChat", void 0);
    __decorate([
        property(cc.Node)
    ], LotoController.prototype, "contentNewBet", void 0);
    __decorate([
        property(cc.Prefab)
    ], LotoController.prototype, "prefabItemNewBet", void 0);
    __decorate([
        property(cc.ScrollView)
    ], LotoController.prototype, "scrollNewBet", void 0);
    __decorate([
        property([cc.Label])
    ], LotoController.prototype, "labelTabResult", void 0);
    __decorate([
        property(cc.Label)
    ], LotoController.prototype, "betDate", void 0);
    __decorate([
        property(cc.Label)
    ], LotoController.prototype, "currentBetChannel", void 0);
    __decorate([
        property(cc.Node)
    ], LotoController.prototype, "btnBetChannel", void 0);
    __decorate([
        property(cc.Node)
    ], LotoController.prototype, "betChannel", void 0);
    __decorate([
        property(cc.Node)
    ], LotoController.prototype, "contentBetChannel", void 0);
    __decorate([
        property(cc.Prefab)
    ], LotoController.prototype, "prefabItemChannel", void 0);
    __decorate([
        property(cc.ScrollView)
    ], LotoController.prototype, "scrollBetChannel", void 0);
    __decorate([
        property(cc.Node)
    ], LotoController.prototype, "btnTabResultChannel", void 0);
    __decorate([
        property(cc.Label)
    ], LotoController.prototype, "tabResultDate", void 0);
    __decorate([
        property(cc.Label)
    ], LotoController.prototype, "currentTabResultChannel", void 0);
    __decorate([
        property(cc.Node)
    ], LotoController.prototype, "btnPopupResultChannel", void 0);
    __decorate([
        property(cc.Label)
    ], LotoController.prototype, "popupResultDate", void 0);
    __decorate([
        property(cc.Label)
    ], LotoController.prototype, "currentPopupResultChannel", void 0);
    __decorate([
        property(cc.Node)
    ], LotoController.prototype, "btnCancelChangeChannel", void 0);
    __decorate([
        property(cc.Node)
    ], LotoController.prototype, "numberSelector", void 0);
    __decorate([
        property(cc.Node)
    ], LotoController.prototype, "contentNumSelector", void 0);
    __decorate([
        property(cc.Prefab)
    ], LotoController.prototype, "prefabItemNumber", void 0);
    __decorate([
        property(cc.ScrollView)
    ], LotoController.prototype, "scrollNumSelector", void 0);
    __decorate([
        property(cc.Node)
    ], LotoController.prototype, "btnOpenNumberSelector", void 0);
    __decorate([
        property(cc.Node)
    ], LotoController.prototype, "contentDescMode", void 0);
    __decorate([
        property(cc.Node)
    ], LotoController.prototype, "contentNumPicked", void 0);
    __decorate([
        property(cc.Prefab)
    ], LotoController.prototype, "prefabItemNumberPicked", void 0);
    __decorate([
        property(cc.ScrollView)
    ], LotoController.prototype, "scrollNumPicked", void 0);
    __decorate([
        property(cc.EditBox)
    ], LotoController.prototype, "edtBet", void 0);
    __decorate([
        property(cc.Label)
    ], LotoController.prototype, "labelTotalBet", void 0);
    __decorate([
        property(cc.Label)
    ], LotoController.prototype, "labelWinValue", void 0);
    __decorate([
        property(cc.Node)
    ], LotoController.prototype, "popupHistory", void 0);
    __decorate([
        property(cc.Node)
    ], LotoController.prototype, "contentHistory", void 0);
    __decorate([
        property(cc.Prefab)
    ], LotoController.prototype, "prefabItemHistory", void 0);
    __decorate([
        property(cc.Node)
    ], LotoController.prototype, "popupResult", void 0);
    __decorate([
        property([cc.Label])
    ], LotoController.prototype, "labelResult", void 0);
    __decorate([
        property(cc.Node)
    ], LotoController.prototype, "contentTime", void 0);
    __decorate([
        property(cc.Node)
    ], LotoController.prototype, "popupNotify", void 0);
    __decorate([
        property(cc.Label)
    ], LotoController.prototype, "labelMsg", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], LotoController.prototype, "musicBackground", void 0);
    LotoController = LotoController_1 = __decorate([
        ccclass
    ], LotoController);
    return LotoController;
}(cc.Component));
exports.default = LotoController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG90b1xcTG90b19TY3JpcHRcXExvdG8uQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlHQUFvRztBQUNwRyxxREFBZ0Q7QUFDaEQsaUVBQTREO0FBQzVELHFFQUFnRTtBQUNoRSw2RkFBd0Y7QUFDeEYsdUNBQTZCO0FBQzdCLCtDQUEwQztBQUNwQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUMxQyx1R0FBa0c7QUFDbEcsNkZBQWdGO0FBQ2hGLHlFQUFvRTtBQUVwRTtJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQW8xQ0M7UUEvMENHLG1CQUFhLEdBQWEsSUFBSSxDQUFDO1FBRS9CLE9BQU87UUFFUCxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLG9CQUFjLEdBQWEsSUFBSSxDQUFDO1FBRWhDLFdBQVc7UUFFWCxrQkFBWSxHQUFnQixFQUFFLENBQUM7UUFFL0IsT0FBTztRQUVQLGNBQVEsR0FBZ0IsRUFBRSxDQUFDO1FBRTNCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGtCQUFZLEdBQWUsSUFBSSxDQUFDO1FBRWhDLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLG9CQUFjLEdBQWMsSUFBSSxDQUFDO1FBRWpDLGdCQUFVLEdBQWtCLElBQUksQ0FBQztRQUdqQyxtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixzQkFBZ0IsR0FBYyxJQUFJLENBQUM7UUFFbkMsa0JBQVksR0FBa0IsSUFBSSxDQUFDO1FBR25DLG9CQUFjLEdBQWUsRUFBRSxDQUFDO1FBRWhDLGlCQUFpQjtRQUVqQixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLHVC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R3BDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7dURBQ1E7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDVTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0RBQ1M7SUFJNUI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBQyxDQUFDOzJEQUNNO0lBaklwQixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBbzFDbEM7SUFBRCxxQkFBQztDQXAxQ0QsQUFvMUNDLENBcDFDMkMsRUFBRSxDQUFDLFNBQVMsR0FvMUN2RDtrQkFwMUNvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNob290RmlzaE5ldHdvcmtDbGllbnQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9TaG9vdEZpc2hOZXR3b3JrQ2xpZW50XCI7XHJcbmltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQXBwXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xyXG5pbXBvcnQgQnJvYWRjYXN0UmVjZWl2ZXIgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQnJvYWRjYXN0UmVjZWl2ZXJcIjtcclxuaW1wb3J0IGNtZCBmcm9tIFwiLi9Mb3RvLkNtZFwiO1xyXG5pbXBvcnQgSHR0cCBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvSHR0cFwiO1xyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IE1pbmlHYW1lTmV0d29ya0NsaWVudCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL01pbmlHYW1lTmV0d29ya0NsaWVudFwiO1xyXG5pbXBvcnQgSW5QYWNrZXQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLkluUGFja2V0XCI7XHJcbmltcG9ydCBTUFV0aWxzIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1NQVXRpbHNcIjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG90b0NvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IExvdG9Db250cm9sbGVyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbFVzZXJHb2xkOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgLy8gTW9kZVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjdXJyZW50TW9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RNb2RlczogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvbnRlbnRNb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsR2FtZUd1aWRlOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgLy8gTG9jYXRpb25cclxuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXHJcbiAgICBsaXN0TG9jYXRpb246IGNjLlRvZ2dsZVtdID0gW107XHJcblxyXG4gICAgLy8gRmxleFxyXG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZSlcclxuICAgIGxpc3RUYWJzOiBjYy5Ub2dnbGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjb250ZW50VGFiczogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcclxuXHJcbiAgICBlZHRDaGF0SW5wdXQ6IGNjLkVkaXRCb3ggPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjb250ZW50Q2hhdDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlZmFiSXRlbUNoYXQ6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcclxuICAgIHNjcm9sbENoYXQ6IGNjLlNjcm9sbFZpZXcgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY29udGVudE5ld0JldDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlZmFiSXRlbU5ld0JldDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TY3JvbGxWaWV3KVxyXG4gICAgc2Nyb2xsTmV3QmV0OiBjYy5TY3JvbGxWaWV3ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLkxhYmVsXSlcclxuICAgIGxhYmVsVGFiUmVzdWx0OiBjYy5MYWJlbFtdID0gW107XHJcblxyXG4gICAgLy8gQ2hvb3NlIENoYW5uZWxcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGJldERhdGU6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGN1cnJlbnRCZXRDaGFubmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bkJldENoYW5uZWw6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiZXRDaGFubmVsOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY29udGVudEJldENoYW5uZWw6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZWZhYkl0ZW1DaGFubmVsOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNjcm9sbFZpZXcpXHJcbiAgICBzY3JvbGxCZXRDaGFubmVsOiBjYy5TY3JvbGxWaWV3ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0blRhYlJlc3VsdENoYW5uZWw6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdGFiUmVzdWx0RGF0ZTogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgY3VycmVudFRhYlJlc3VsdENoYW5uZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0blBvcHVwUmVzdWx0Q2hhbm5lbDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwb3B1cFJlc3VsdERhdGU6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGN1cnJlbnRQb3B1cFJlc3VsdENoYW5uZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bkNhbmNlbENoYW5nZUNoYW5uZWw6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIE51bWJlciBTZWxlY3RvclxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBudW1iZXJTZWxlY3RvcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvbnRlbnROdW1TZWxlY3RvcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlZmFiSXRlbU51bWJlcjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TY3JvbGxWaWV3KVxyXG4gICAgc2Nyb2xsTnVtU2VsZWN0b3I6IGNjLlNjcm9sbFZpZXcgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5PcGVuTnVtYmVyU2VsZWN0b3I6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjb250ZW50RGVzY01vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIE51bWJlciBQaWNrZWRcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY29udGVudE51bVBpY2tlZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlZmFiSXRlbU51bWJlclBpY2tlZDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TY3JvbGxWaWV3KVxyXG4gICAgc2Nyb2xsTnVtUGlja2VkOiBjYy5TY3JvbGxWaWV3ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxyXG4gICAgZWR0QmV0OiBjYy5FZGl0Qm94ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsVG90YWxCZXQ6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsV2luVmFsdWU6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICAvLyBQb3B1cFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwb3B1cEhpc3Rvcnk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjb250ZW50SGlzdG9yeTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlZmFiSXRlbUhpc3Rvcnk6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwb3B1cFJlc3VsdDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoW2NjLkxhYmVsXSlcclxuICAgIGxhYmVsUmVzdWx0OiBjYy5MYWJlbFtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvbnRlbnRUaW1lOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBvcHVwTm90aWZ5OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsTXNnOiAoY2MuTGFiZWwpID0gbnVsbDtcclxuXHJcbiAgICAvLyBNdXNpY1xyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5BdWRpb0NsaXB9KVxyXG4gICAgbXVzaWNCYWNrZ3JvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIHNlc3Npb25EYXRlID0gXCJcIjtcclxuICAgIHByaXZhdGUgdG9kYXkgPSBcIlwiO1xyXG5cclxuICAgIC8vIENvbnN0YW50XHJcbiAgICBwcml2YXRlIEdBTUVfTU9ERSA9IDE7XHJcbiAgICBwcml2YXRlIEdBTUVfTE9DQVRJT04gPSAwO1xyXG4gICAgcHJpdmF0ZSBHQU1FX0NIQU5ORUwgPSAxO1xyXG5cclxuICAgIHByaXZhdGUgY3VycmVudE51bVBpY2tlZCA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50QmV0VmFsdWUgPSAwOyAvL0tcclxuICAgIHByaXZhdGUgY3VycmVudFdpblZhbHVlID0gMDsgLy9LXHJcblxyXG4gICAgcHJpdmF0ZSBudW1SZXF1ZXN0ID0gMDtcclxuICAgIHByaXZhdGUgbnVtUmVxdWVzdENvbXBsZXRlZCA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBudW1SZXF1aXJlZCA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBtdXNpY1Nsb3RTdGF0ZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHJlbW90ZU11c2ljQmFja2dyb3VuZCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBoZWxwQ2VudGVyID0gW107XHJcbiAgICBwcml2YXRlIGN1cnJlbnRHYW1lSGVscCA9IFwiXCI7XHJcblxyXG4gICAgcHJpdmF0ZSBjaGFubmVsc09wZW4gPSBbXTtcclxuICAgIHByaXZhdGUgbW9kZXNPcGVuID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBhcnJEYXRlcyA9IG51bGw7XHJcbiAgICBwcml2YXRlIHBvcHVwUmVzdWx0Q3VycmVudENoYW5uZWxJZCA9IG51bGw7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIExvdG9Db250cm9sbGVyLmluc3RhbmNlID0gdGhpcztcclxuICAgICAgICB0aGlzLnNlc3Npb25EYXRlID0gXCJcIjtcclxuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2Vzc2lvbkRhdGUgKz0gXCJcIiArIHllYXI7XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uRGF0ZSArPSBtb250aCA8IDEwID8gXCIwXCIgKyBtb250aCA6IG1vbnRoO1xyXG4gICAgICAgIHRoaXMuc2Vzc2lvbkRhdGUgKz0gZGF5IDwgMTAgPyBcIjBcIiArIGRheSA6IGRheTtcclxuXHJcbiAgICAgICAgdGhpcy50b2RheSA9IChkYXkgPCAxMCA/IFwiMFwiICsgZGF5IDogZGF5KSArIFwiL1wiICsgKG1vbnRoIDwgMTAgPyBcIjBcIiArIG1vbnRoIDogbW9udGgpICsgXCIvXCIgKyB5ZWFyO1xyXG4gICAgLy8gICAgY2MubG9nKHRoaXMuc2Vzc2lvbkRhdGUpO1xyXG5cclxuICAgICAvLyAgIGNjLmxvZyhcIlVzZXJJZCA6IFwiLCBDb25maWdzLkxvZ2luLlVzZXJJZCk7XHJcbiAgICAgLy8gICBjYy5sb2coXCJTZXNzaW9uS2V5IDogXCIsIENvbmZpZ3MuTG9naW4uU2Vzc2lvbktleSk7XHJcbiAgICAgLy8gICBjYy5sb2coXCJVc2VySWRGaXNoIDogXCIsIENvbmZpZ3MuTG9naW4uVXNlcklkRmlzaCk7XHJcbiAgICAgLy8gICBjYy5sb2coXCJDb2luRmlzaCA6IFwiLCBDb25maWdzLkxvZ2luLkNvaW5GaXNoKTtcclxuXHJcbiAgICAgICAgLy8gc2V0dXAgYXJyRGF0ZXNcclxuICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuYXJyRGF0ZXMgPSBbdG9kYXldO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCA3OyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCB5ZXN0ZXJkYXkgPSBuZXcgRGF0ZSh0b2RheSk7XHJcbiAgICAgICAgICAgIHllc3RlcmRheS5zZXREYXRlKHllc3RlcmRheS5nZXREYXRlKCkgLSBpbmRleCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyRGF0ZXMucHVzaCh5ZXN0ZXJkYXkpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIFNob290RmlzaE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5jaGVja0Nvbm5lY3QoKGlzTG9naW5lZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWlzTG9naW5lZCkge1xyXG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2dXaXRoT25EaXNtaXNzZWQoXCLEkMSDbmcgbmjhuq1wIHRo4bqldCBi4bqhaSwgdnVpIGzDsm5nIHRo4butIGzhuqFpLlwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RCYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgIFBsYXkuU0VSVkVSX0NPTkZJRyA9IENvbmZpZ3MuTG9naW4uRmlzaENvbmZpZ3M7XHJcbiAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XHJcbiAgICAgICAgICAgIGlmIChDb25maWdzLkxvZ2luLkNvaW5GaXNoIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5jb25maXJtRGlhbG9nLnNob3czKFwiVGnhu4FuIHRyb25nIEzDtCDEkOG7gSBj4bunYSBi4bqhbiDEkcOjIGjhur90LCBi4bqhbiBjw7MgbXXhu5FuIGNodXnhu4NuIHRp4buBbiB2w6BvIGtow7RuZz9cIiwgXCJDw7NcIiwgKGlzQ29uZmlybSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0NvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cENvaW5UcmFuc2Zlci5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgU2hvb3RGaXNoTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmFkZE9uQ2xvc2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoXCJN4bqldCBr4bq/dCBu4buRaSwgxJFhbmcgdGjhu60ga+G6v3QgbuG7kWkgbOG6oWkuLi5cIik7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmFkZExpc3RlbmVyKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpblBhY2tldCA9IG5ldyBJblBhY2tldChkYXRhKTtcclxuICAgICAgICAgICAgc3dpdGNoIChpblBhY2tldC5nZXRDbWRJZCgpKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkdFVF9NT05FWV9VU0U6IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZXNHZXRNb25leVVzZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW4gPSByZXMubW9uZXlVc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpO1x0XHRcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyBtdXNpY1NhdmUgOiAgIDAgPT0gT0ZGICwgMSA9PSBPTlxyXG4gICAgICAgIHZhciBtdXNpY1NhdmUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtdXNpY0xvdG9cIik7XHJcbiAgICAgICAgaWYgKG11c2ljU2F2ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubXVzaWNTbG90U3RhdGUgPSBwYXJzZUludChtdXNpY1NhdmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubXVzaWNTbG90U3RhdGUgPSAxO1xyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtdXNpY0xvdG9cIiwgXCIxXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubXVzaWNTbG90U3RhdGUgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW90ZU11c2ljQmFja2dyb3VuZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLm11c2ljQmFja2dyb3VuZCwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmluaXROdW1TZWxlY3RvcigxMDAwKTtcclxuXHJcbiAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIucmVnaXN0ZXIoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsVXNlckdvbGQuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKENvbmZpZ3MuTG9naW4uQ29pbkZpc2gpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XHJcblxyXG4gICAgICAgIFNob290RmlzaE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5hZGRMaXN0ZW5lcigocm91dGUsIHB1c2gpID0+IHtcclxuICAgICAgICAvLyAgICBjYy5sb2coXCJMT1RPIHJvdXRlIDogXCIsIHJvdXRlKTtcclxuICAgICAgICAgLy8gICBjYy5sb2coXCJMT1RPIHB1c2ggOiBcIiwgcHVzaCk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAocm91dGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJvbkxPVE8xXCI6XHJcbiAgICAgICAgICAgICAgIC8vICAgICBjYy5sb2coXCJMb3RvIExPVE8xIHB1c2ggOiBcIiwgcHVzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1OZXdCZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYkl0ZW1OZXdCZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1OZXdCZXQuZ2V0Q29tcG9uZW50KCdMb3RvLkl0ZW1OZXdCZXQnKS5pbml0SXRlbSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBwdXNoW1wibmlja25hbWVcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWw6IHB1c2hbXCJjaGFubmVsXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBwdXNoW1wibW9kZVwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmV0OiBwdXNoW1wiY29zdFwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtczogcHVzaFtcIm51bWJlclwiXVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudE5ld0JldC5hZGRDaGlsZChpdGVtTmV3QmV0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbE5ld0JldC5zY3JvbGxUb0JvdHRvbSgwLjIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkxPVE8yXCI6XHJcbiAgICAgICAgICAgICAgIC8vICAgICBjYy5sb2coXCJMb3RvIExPVE8yIHB1c2ggOiBcIiwgcHVzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiTE9UTzNcIjpcclxuICAgICAgICAgICAgICAgIC8vICAgIGNjLmxvZyhcIkxvdG8gTE9UTzMgcHVzaCA6IFwiLCBwdXNoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJMT1RPNFwiOlxyXG4gICAgICAgICAgICAgICAgLy8gICAgY2MubG9nKFwiTG90byBMT1RPNCBwdXNoIDogXCIsIHB1c2gpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkxPVE81XCI6XHJcbiAgICAgICAgICAgICAgICAvLyAgICBjYy5sb2coXCJMb3RvIExPVE81IHB1c2ggOiBcIiwgcHVzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiTE9UTzZcIjpcclxuICAgICAgICAgICAgICAgICAvLyAgIGNjLmxvZyhcIkxvdG8gTE9UTzYgcHVzaCA6IFwiLCBwdXNoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJvbkxPVE83XCI6XHJcbiAgICAgICAgICAgICAgICAvLyAgICBjYy5sb2coXCJMb3RvIExPVE83IHB1c2ggOiBcIiwgcHVzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1OZXdDaGF0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWJJdGVtQ2hhdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbU5ld0NoYXQuZ2V0Q29tcG9uZW50KCdMb3RvLkl0ZW1DaGF0JykuaW5pdEl0ZW0oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogcHVzaFtcIm5pY2tuYW1lXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtc2c6IHB1c2hbXCJtc2dcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50Q2hhdC5hZGRDaGlsZChpdGVtTmV3Q2hhdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxDaGF0LnNjcm9sbFRvQm90dG9tKDAuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiTE9UTzhcIjpcclxuICAgICAgICAgICAgICAgIC8vICAgIGNjLmxvZyhcIkxvdG8gTE9UTzggcHVzaCA6IFwiLCBwdXNoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJMT1RPOVwiOlxyXG4gICAgICAgICAgICAgICAgIC8vICAgY2MubG9nKFwiTG90byBMT1RPOSBwdXNoIDogXCIsIHB1c2gpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyBTaG9vdEZpc2hOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuY2hlY2tDb25uZWN0KChpc0xvZ2luZWQpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKCFpc0xvZ2luZWQpIHtcclxuICAgICAgICAvLyAgICAgICAgIC8vIHRoaXMuZGlzbWlzcygpO1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XHJcblxyXG4gICAgICAgIC8vICAgICBpZiAoQ29uZmlncy5Mb2dpbi5Db2luRmlzaCA8PSAwKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBBcHAuaW5zdGFuY2UuY29uZmlybURpYWxvZy5zaG93MyhcIlRp4buBbiB0cm9uZyBC4bqvbiBDw6EgY+G7p2EgYuG6oW4gxJHDoyBo4bq/dCwgYuG6oW4gY8OzIG114buRbiBjaHV54buDbiB0aeG7gW4gdsOgbyBraMO0bmc/XCIsIFwiQ8OzXCIsIChpc0NvbmZpcm0pID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAoaXNDb25maXJtKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIHRoaXMucG9wdXBDb2luVHJhbnNmZXIuc2hvdygpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIC8vIENoYXRcclxuICAgICAgICB0aGlzLmxpc3RUYWJzWzBdLmlzQ2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jb250ZW50VGFicy5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucmVxdWVzdEdldENoYXRIaXN0b3J5KCk7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0R2V0TmV3QmV0SGlzdG9yeSgpO1xyXG5cclxuICAgICAgICAvLyBNb2RlXHJcbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHRoaXMucmVxdWVzdEdldEdhbWVBdmFpbGFibGUoKTtcclxuICAgICAgICB0aGlzLmJldERhdGUuc3RyaW5nID0gdGhpcy50b2RheTtcclxuXHJcbiAgICAgICAgLy8gTGF5IGtldCBxdWEgY2FjIGxhbiBkYW5oIHRydW9jIHhlbSBob20gbmF5IGNvIGFuIGRjIGdpIGtcclxuICAgICAgICB0aGlzLnJlcXVlc3RHZXRDYWxjdWxhdGVSZXN1bHQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5vbkJldENoYW5uZWxTZWxlY3RlZCgwLCAxKTtcclxuICAgICAgICB0aGlzLmNoYW5nZU1vZGUobnVsbCwgMSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIGFjdGlvblxyXG4gICAgc2hvd0xpc3RNb2RlKCkge1xyXG4gICAgICAgIHRoaXMubGlzdE1vZGVzLmFjdGl2ZSA9ICF0aGlzLmxpc3RNb2Rlcy5hY3RpdmU7XHJcbiAgICAgICAgdGhpcy5saXN0TW9kZXMucGFyZW50LmNoaWxkcmVuWzJdLmFuZ2xlID0gdGhpcy5saXN0TW9kZXMuYWN0aXZlID8gMCA6IDE4MDtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VNb2RlKGV2ZW50LCBncm91cElkKSB7XHJcbiAgICAgICAgdmFyIGdyb3VwTW9kZSA9IHBhcnNlSW50KGdyb3VwSWQpO1xyXG4gICAgIC8vICAgY2MubG9nKFwiTG90byBjaGFuZ2VNb2RlIGdyb3VwTW9kZSA6IFwiLCBncm91cE1vZGUpO1xyXG4gICAgICAgIHRoaXMubGlzdE1vZGVzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGlzdE1vZGVzLnBhcmVudC5jaGlsZHJlblsyXS5hbmdsZSA9IDE4MDtcclxuXHJcbiAgICAgICAgbGV0IG1vZGVOYW1lID0gdGhpcy5saXN0TW9kZXMuY2hpbGRyZW5bZ3JvdXBNb2RlIC0gMV0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TW9kZS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IG1vZGVOYW1lO1xyXG5cclxuICAgICAgICB0aGlzLnJlc2V0Q29udGVudE1vZGVTdGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuY29udGVudE1vZGUuY2hpbGRyZW5bZ3JvdXBNb2RlIC0gMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRNb2RlLmNoaWxkcmVuW2dyb3VwTW9kZSAtIDFdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5Ub2dnbGUpLmlzQ2hlY2tlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCBhcnJNb2Rlc0luR3JvdXAgPSBbXTtcclxuICAgICAgICBzd2l0Y2ggKGdyb3VwTW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBhcnJNb2Rlc0luR3JvdXAgPSBbMSwgMl07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgYXJyTW9kZXNJbkdyb3VwID0gWzMsIDQsIDVdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGFyck1vZGVzSW5Hcm91cCA9IFs2LCA3XTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICBhcnJNb2Rlc0luR3JvdXAgPSBbOCwgOSwgMTBdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIGFyck1vZGVzSW5Hcm91cCA9IFsxMSwgMTIsIDEzLCAxNF07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgYXJyTW9kZXNJbkdyb3VwID0gWzE3LCAyNCwgMjVdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgIGFyck1vZGVzSW5Hcm91cCA9IFsxOCwgMTksIDIwXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICBhcnJNb2Rlc0luR3JvdXAgPSBbMjEsIDIyLCAyM107XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGFyck1vZGVBdmFpbGFibGVJbkxvY2F0aW9uID0gW107XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLkdBTUVfTE9DQVRJT04pIHtcclxuICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5MT1RPX0xPQ0FUSU9OLk1pZW5CYWM6XHJcbiAgICAgICAgICAgICAgICBhcnJNb2RlQXZhaWxhYmxlSW5Mb2NhdGlvbiA9IGNtZC5Db2RlLkxPVE9fTU9ERV9CQUM7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5MT1RPX0xPQ0FUSU9OLk1pZW5UcnVuZzpcclxuICAgICAgICAgICAgICAgIGFyck1vZGVBdmFpbGFibGVJbkxvY2F0aW9uID0gY21kLkNvZGUuTE9UT19NT0RFX1RSVU5HO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuTE9UT19MT0NBVElPTi5NaWVuTmFtOlxyXG4gICAgICAgICAgICAgICAgYXJyTW9kZUF2YWlsYWJsZUluTG9jYXRpb24gPSBjbWQuQ29kZS5MT1RPX01PREVfTkFNO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNldHVwIE1vZGUgaW4gR3JvdXBcclxuICAgICAgICBsZXQgbm9kZU1vZGUgPSB0aGlzLmNvbnRlbnRNb2RlLmNoaWxkcmVuW2dyb3VwTW9kZSAtIDFdO1xyXG4gICAgICAgIGxldCBmaXJzdEFjdGl2ZSA9IDA7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gLTE7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFyck1vZGVzSW5Hcm91cC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IGZpbmRJZCA9IGFyck1vZGVBdmFpbGFibGVJbkxvY2F0aW9uLmluZGV4T2YoYXJyTW9kZXNJbkdyb3VwW2luZGV4XSk7XHJcbiAgICAgICAgICAgIGlmIChmaW5kSWQgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0QWN0aXZlID0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgbm9kZU1vZGUuY2hpbGRyZW5baW5kZXhdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyBPcGVuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBCbG9ja1xyXG4gICAgICAgICAgICAgICAgbm9kZU1vZGUuY2hpbGRyZW5baW5kZXhdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBmaXJzdE1vZGVJbkdyb3VwID0gYXJyTW9kZXNJbkdyb3VwW2ZpcnN0QWN0aXZlXTtcclxuICAgICAgICBpZiAodGhpcy5HQU1FX0xPQ0FUSU9OID09IGNtZC5Db2RlLkxPVE9fTE9DQVRJT04uTWllblRydW5nICYmIGZpcnN0TW9kZUluR3JvdXAgPT0gMTEpIHtcclxuICAgICAgICAgICAgZmlyc3RNb2RlSW5Hcm91cCA9IGFyck1vZGVzSW5Hcm91cFsxXTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50TW9kZS5jaGlsZHJlbltncm91cE1vZGUgLSAxXS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuVG9nZ2xlKS5pc0NoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNob29zZU1vZGUobnVsbCwgZmlyc3RNb2RlSW5Hcm91cCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hvb3NlTW9kZShldmVudCwgbW9kZUlkKSB7XHJcbiAgICAgLy8gICBjYy5sb2coXCJMb3RvIGNob29zZU1vZGUgOiBcIiwgbW9kZUlkKTtcclxuICAgICAgICB0aGlzLkdBTUVfTU9ERSA9IHBhcnNlSW50KG1vZGVJZCk7XHJcbiAgICAgICAgbGV0IG51bUNvdW50ID0gLTE7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLkdBTUVfTU9ERSkge1xyXG4gICAgICAgICAgICAvLyAxIGNodSBzb1xyXG4gICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgIG51bUNvdW50ID0gMTA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gMiBjaHUgc29cclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgY2FzZSAxMDpcclxuICAgICAgICAgICAgY2FzZSAxNTpcclxuICAgICAgICAgICAgY2FzZSAxNjpcclxuICAgICAgICAgICAgY2FzZSAxNzpcclxuICAgICAgICAgICAgY2FzZSAyMTpcclxuICAgICAgICAgICAgY2FzZSAyMjpcclxuICAgICAgICAgICAgY2FzZSAyMzpcclxuICAgICAgICAgICAgY2FzZSAyNDpcclxuICAgICAgICAgICAgY2FzZSAyNTpcclxuICAgICAgICAgICAgICAgIG51bUNvdW50ID0gMTAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vIDMgY2h1IHNvXHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgY2FzZSAxMTpcclxuICAgICAgICAgICAgY2FzZSAxMjpcclxuICAgICAgICAgICAgY2FzZSAxMzpcclxuICAgICAgICAgICAgY2FzZSAxNDpcclxuICAgICAgICAgICAgY2FzZSAxODpcclxuICAgICAgICAgICAgY2FzZSAxOTpcclxuICAgICAgICAgICAgY2FzZSAyMDpcclxuICAgICAgICAgICAgICAgIG51bUNvdW50ID0gMTAwMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm51bVJlcXVpcmVkID0gY21kLkNvZGUuTE9UT19HQU1FX01PREVfTlVNX1JFUVVJUkVbdGhpcy5HQU1FX01PREVdO1xyXG4gICAgIC8vICAgY2MubG9nKFwiTG90byBjaG9vc2VNb2RlIG51bVJlcXVpcmVkIDogXCIsIHRoaXMubnVtUmVxdWlyZWQpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlR2FtZUd1aWRlKCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TnVtUGlja2VkID0gW107XHJcbiAgICAgICAgdGhpcy5sYWJlbFRvdGFsQmV0LnN0cmluZyA9IFwiMFwiO1xyXG4gICAgICAgIHRoaXMuZWR0QmV0LnN0cmluZyA9IFwiMVwiO1xyXG4gICAgIC8vICAgY2MubG9nKFwiTG90byBjaG9vc2VNb2RlIG51bUNvdW50IDogXCIsIG51bUNvdW50KTtcclxuICAgICAgICB0aGlzLnVwZGF0ZU51bVNlbGVjdG9yKG51bUNvdW50KTtcclxuICAgICAgICB0aGlzLnJlcXVlc3RHZXRQYXlXaW5SYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hvb3NlTG9jYXRpb24odG9nZ2xlKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5saXN0TG9jYXRpb24uaW5kZXhPZih0b2dnbGUpO1xyXG4gICAgIC8vICAgY2MubG9nKFwiTG90byBjaG9vc2VMb2NhdGlvbiBsb2NhdGlvbklkIDogXCIsIGluZGV4KTtcclxuICAgICAgICB0aGlzLkdBTUVfTE9DQVRJT04gPSBpbmRleDtcclxuXHJcbiAgICAgICAgbGV0IGZpcnN0Q2hhbm5lbEluTG9jYXRpb24gPSAwO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5HQU1FX0xPQ0FUSU9OKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuTE9UT19MT0NBVElPTi5NaWVuQmFjOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR1cEdyb3VwKGNtZC5Db2RlLkxPVE9fR1JPVVBfQkFDKTtcclxuICAgICAgICAgICAgICAgIGZpcnN0Q2hhbm5lbEluTG9jYXRpb24gPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuTE9UT19MT0NBVElPTi5NaWVuVHJ1bmc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHVwR3JvdXAoY21kLkNvZGUuTE9UT19HUk9VUF9UUlVORyk7XHJcbiAgICAgICAgICAgICAgICBmaXJzdENoYW5uZWxJbkxvY2F0aW9uID0gMjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkxPVE9fTE9DQVRJT04uTWllbk5hbTpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBHcm91cChjbWQuQ29kZS5MT1RPX0dST1VQX05BTSk7XHJcbiAgICAgICAgICAgICAgICBmaXJzdENoYW5uZWxJbkxvY2F0aW9uID0gMTY7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jaGFuZ2VNb2RlKG51bGwsIDEpO1xyXG4gICAgICAgIHRoaXMub25CZXRDaGFubmVsU2VsZWN0ZWQoXCIwXCIsIGZpcnN0Q2hhbm5lbEluTG9jYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldHVwR3JvdXAoYXJyR3JvdXBBdmFpbGFibGUpIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5saXN0TW9kZXMuY2hpbGRyZW5Db3VudDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgZmluZElkID0gYXJyR3JvdXBBdmFpbGFibGUuaW5kZXhPZihpbmRleCArIDEpO1xyXG4gICAgICAgICAgICBpZiAoZmluZElkICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBPcGVuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RNb2Rlcy5jaGlsZHJlbltpbmRleF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIEJsb2NrXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RNb2Rlcy5jaGlsZHJlbltpbmRleF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aW9uQ2FuY2VsQmV0KCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudE51bVBpY2tlZCA9IFtdO1xyXG4gICAgICAgIHRoaXMubGFiZWxUb3RhbEJldC5zdHJpbmcgPSBcIjBcIjtcclxuICAgICAgICB0aGlzLmxhYmVsV2luVmFsdWUuc3RyaW5nID0gXCJcIiArIHRoaXMuY3VycmVudFdpblZhbHVlO1xyXG4gICAgICAgIHRoaXMuZWR0QmV0LnN0cmluZyA9IFwiMVwiO1xyXG4gICAgICAgIHRoaXMucmVzZXRDb250ZW50TnVtYmVyUGlja2VkKCk7XHJcbiAgICAgICAgdGhpcy5jaG9vc2VNb2RlKG51bGwsIHRoaXMuR0FNRV9NT0RFKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgYWN0aW9uU3VibWl0QmV0KCkge1xyXG4gICAgICBcclxuXHJcbiAgICAgICAgbGV0IGhvdXJPZkRheSA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtcclxuICAgICAgICBsZXQgbWluT2ZEYXkgPSBuZXcgRGF0ZSgpLmdldE1pbnV0ZXMoKTtcclxuICAgICAgICBpZiAoKGhvdXJPZkRheSA9PSAxOCAmJiBtaW5PZkRheSA+IDUpIHx8IGhvdXJPZkRheSA+PSAxOSkge1xyXG4gICAgICAgICAgICBsZXQgbXNnXzEgPSBcIkjhur90IHRo4budaSBnaWFuIMSR4bq3dCBjxrDhu6NjLlxcblRo4budaSBnaWFuIMSR4bq3dCBjxrDhu6NjIHThu6sgMGggdOG7m2kgMThoMDUuXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1BvcHVwTm90aWZ5KG1zZ18xKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIFxyXG5cclxuICAgICAgIC8vIGtpZW0gdHJhIHNvIGx1b25nIHNvIGNhbiBkYW5oIGN1YSBtb2RlIGRvXHJcbiAgICAgICAgaWYgKHRoaXMubnVtUmVxdWlyZWQgPT0gMSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TnVtUGlja2VkLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgICAgIGxldCBtc2dfMyA9IFwiQuG6oW4gY+G6p24gY2jhu41uIMOtdCBuaOG6pXQgMSBz4buRICFcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BvcHVwTm90aWZ5KG1zZ18zKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnROdW1QaWNrZWQubGVuZ3RoICE9PSB0aGlzLm51bVJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbXNnXzMgPSBcIkLhuqFuIGPhuqduIGNo4buNbiBcIiArIHRoaXMubnVtUmVxdWlyZWQgKyBcIiBz4buRICFcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BvcHVwTm90aWZ5KG1zZ18zKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50QmV0VmFsdWUgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dQb3B1cE5vdGlmeShcIlZ1aSBMw7JuZyBDaOG7jW4gTOG6oWkgxJDDoGkgTWnhu4FuIELhuq9jXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdG90YWxCZXQgPSAwO1xyXG4gICAgICAgIGxldCBiZXRPbmVUdXJuID0gcGFyc2VJbnQodGhpcy5lZHRCZXQuc3RyaW5nKSAqIDEwMDA7XHJcbiAgICAgICAgaWYgKHRoaXMubnVtUmVxdWlyZWQgPT0gMSkge1xyXG4gICAgICAgICAgICB0b3RhbEJldCA9IGJldE9uZVR1cm4gKiB0aGlzLmN1cnJlbnRCZXRWYWx1ZSAqIHRoaXMuY3VycmVudE51bVBpY2tlZC5sZW5ndGg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdG90YWxCZXQgPSBiZXRPbmVUdXJuICogdGhpcy5jdXJyZW50QmV0VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgLy8gICAgY2MubG9nKFwiTG90byBhY3Rpb25TdWJtaXRCZXQgdG90YWxCZXQgOiBcIiwgdG90YWxCZXQpO1xyXG4gICAgICAgIGlmIChDb25maWdzLkxvZ2luLkNvaW5GaXNoID49IHRvdGFsQmV0KSB7XHJcbiAgICAgIC8vICAgICAgY2MubG9nKFwiTG90byBhY3Rpb25TdWJtaXRCZXQgRHUgdGllblwiKTtcclxuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMubnVtUmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm51bVJlcXVlc3QgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubnVtUmVxdWVzdENvbXBsZXRlZCA9IHRoaXMuY3VycmVudE51bVBpY2tlZC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY3VycmVudE51bVBpY2tlZC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0UGxheSh0aGlzLmN1cnJlbnROdW1QaWNrZWRbaW5kZXhdLCBiZXRPbmVUdXJuKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAxMjpcclxuICAgICAgICAgICAgICAgIGNhc2UgMTQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5udW1SZXF1ZXN0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm51bVJlcXVlc3RDb21wbGV0ZWQgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdFBsYXkodGhpcy5jdXJyZW50TnVtUGlja2VkLCBiZXRPbmVUdXJuKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBLaG9uZyBkdSB0aWVuXHJcbiAgICAgICAgLy8gICAgY2MubG9nKFwiTG90byBhY3Rpb25TdWJtaXRCZXQgS2hvbmcgZHUgdGllblwiKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93UG9wdXBOb3RpZnkoXCJC4bqhbiBraMO0bmcgY8OzIMSR4bunIHRp4buBbiAhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBGZWF0dXJlIEZsZXhcclxuICAgIGNoYW5nZUZsZXhGZWF0dXJlcyh0b2dnbGUpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmxpc3RUYWJzLmluZGV4T2YodG9nZ2xlKTtcclxuICAgIC8vICAgIGNjLmxvZyhcIkxvdG8gY2hhbmdlRmxleEZlYXR1cmVzIHRhYklkIDogXCIsIGluZGV4KTtcclxuICAgICAgICB0aGlzLnJlc2V0Q29udGVudFRhYnNTdGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuY29udGVudFRhYnMuY2hpbGRyZW5baW5kZXhdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgc3dpdGNoIChpbmRleCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IC8vIENoYXRcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsQ2hhdC5zY3JvbGxUb0JvdHRvbSgwLjIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTogIC8vIE5ldyBCZXRcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsTmV3QmV0LnNjcm9sbFRvQm90dG9tKDAuMik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOiAvLyBSZXN1bHRcclxuICAgICAgICAgICAgICAgIHRoaXMudGFiUmVzdWx0RGF0ZS5zdHJpbmcgPSB0aGlzLnRvZGF5O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkJldENoYW5uZWxTZWxlY3RlZChcIjFcIiwgY21kLkNvZGUuTE9UT19DSEFOTkVMLk1JRU5fQkFDKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFjdGlvblNlbmRDaGF0KCkge1xyXG4gICAgIC8vICAgY2MubG9nKFwiQ2hhdCBtc2cgOiBcIiwgdGhpcy5lZHRDaGF0SW5wdXQuc3RyaW5nKTtcclxuXHJcbiAgICAgICAgbGV0IG1zZyA9IHRoaXMuZWR0Q2hhdElucHV0LnN0cmluZy50cmltKCk7XHJcbiAgICAgLy8gICBjYy5sb2coXCJDaGF0IG1zZyB0cmltIDogXCIsIG1zZyk7XHJcbiAgICAgICAgaWYgKG1zZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdENoYXQobXNnKTtcclxuICAgICAgICAgICAgdGhpcy5lZHRDaGF0SW5wdXQuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hvb3NlIEJldCBDaGFubmVsXHJcbiAgICBzaG93QmV0Q2hhbm5lbChldmVudCwgdHlwZSkge1xyXG4gICAgICAgIHRoaXMuYnRuQmV0Q2hhbm5lbC5jaGlsZHJlblswXS5hbmdsZSA9IDE4MDtcclxuICAgICAgICB0aGlzLmJ0blRhYlJlc3VsdENoYW5uZWwuY2hpbGRyZW5bMF0uYW5nbGUgPSAxODA7XHJcbiAgICAgICAgdGhpcy5idG5Qb3B1cFJlc3VsdENoYW5uZWwuY2hpbGRyZW5bMF0uYW5nbGUgPSAxODA7XHJcblxyXG4gICAgICAgIHRoaXMuYnRuQ2FuY2VsQ2hhbmdlQ2hhbm5lbC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLmJldENoYW5uZWwuYWN0aXZlID0gIXRoaXMuYmV0Q2hhbm5lbC5hY3RpdmU7XHJcbiAgICAgICAgaWYgKHR5cGUgPT0gXCIwXCIpIHsvLyBvIHBoYW4gY2hvbiBjdW9jXHJcbiAgICAgICAgICAgIHRoaXMuYnRuQmV0Q2hhbm5lbC5jaGlsZHJlblswXS5hbmdsZSA9IHRoaXMuYmV0Q2hhbm5lbC5hY3RpdmUgPyAwIDogMTgwO1xyXG4gICAgICAgICAgICB0aGlzLmJldENoYW5uZWwucG9zaXRpb24gPSBjYy52MigtMzg1LCAtNzUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcIjFcIikgeyAvLyBvIHBoYW4gdGFiIGtldCBxdWEgbmhvXHJcbiAgICAgICAgICAgIHRoaXMuYnRuVGFiUmVzdWx0Q2hhbm5lbC5jaGlsZHJlblswXS5hbmdsZSA9IHRoaXMuYmV0Q2hhbm5lbC5hY3RpdmUgPyAwIDogMTgwO1xyXG4gICAgICAgICAgICB0aGlzLmJldENoYW5uZWwucG9zaXRpb24gPSBjYy52Mig0ODUsIC0xNSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09IFwiMlwiKSB7IC8vIG8gcGhhbiBUYWIga2V0IHF1YSBUb1xyXG4gICAgICAgICAgICB0aGlzLmJ0blBvcHVwUmVzdWx0Q2hhbm5lbC5jaGlsZHJlblswXS5hbmdsZSA9IHRoaXMuYmV0Q2hhbm5lbC5hY3RpdmUgPyAwIDogMTgwO1xyXG4gICAgICAgICAgICB0aGlzLmJldENoYW5uZWwucG9zaXRpb24gPSBjYy52Mig2MCwgMzUpO1xyXG4gICAgICAgIH0gXHJcbiAgICAvLyAgICBjb25zb2xlLmxvZyhcInNob3dCZXRDaGFubmVsOiBcIiArIHRoaXMuY29udGVudEJldENoYW5uZWwuY2hpbGRyZW5Db3VudCk7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY29udGVudEJldENoYW5uZWwuY2hpbGRyZW5Db3VudDsgaW5kZXgrKykge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb250ZW50QmV0Q2hhbm5lbC5jaGlsZHJlbkNvdW50ID09IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IDI7IGluZGV4KyspIHsgLy8gMCA9IE5PTkVcclxuICAgICAgICAgICAgICAgIGxldCBpbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGNtZC5Db2RlLkxPVE9fQ0hBTk5FTF9OQU1FW2luZGV4XSxcclxuICAgICAgICAgICAgICAgICAgICBpZDogaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogdHlwZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWJJdGVtQ2hhbm5lbCk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChcIkxvdG8uSXRlbUNoYW5uZWxcIikuaW5pdEl0ZW0oaW5mbyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRCZXRDaGFubmVsLmFkZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gdXBkYXRlIGZpZWxkIEZyb21cclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY29udGVudEJldENoYW5uZWwuY2hpbGRyZW5Db3VudDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50QmV0Q2hhbm5lbC5jaGlsZHJlbltpbmRleF0uZ2V0Q29tcG9uZW50KFwiTG90by5JdGVtQ2hhbm5lbFwiKS51cGRhdGVJbmZvKHR5cGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29udGVudEJldENoYW5uZWwuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlID09IFwiMFwiKSB7XHJcbiAgICAgICAgICAgIGxldCBhcnJDaGFubmVsQXZhaWxhYmxlSW5Mb2NhdGlvbiA9IFtdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuR0FNRV9MT0NBVElPTikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5MT1RPX0xPQ0FUSU9OLk1pZW5CYWM6XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyQ2hhbm5lbEF2YWlsYWJsZUluTG9jYXRpb24gPSBjbWQuQ29kZS5MT1RPX0NIQU5ORUxfQkFDO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5MT1RPX0xPQ0FUSU9OLk1pZW5UcnVuZzpcclxuICAgICAgICAgICAgICAgICAgICBhcnJDaGFubmVsQXZhaWxhYmxlSW5Mb2NhdGlvbiA9IGNtZC5Db2RlLkxPVE9fQ0hBTk5FTF9UUlVORztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuTE9UT19MT0NBVElPTi5NaWVuTmFtOlxyXG4gICAgICAgICAgICAgICAgICAgIGFyckNoYW5uZWxBdmFpbGFibGVJbkxvY2F0aW9uID0gY21kLkNvZGUuTE9UT19DSEFOTkVMX05BTTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmNvbnRlbnRCZXRDaGFubmVsLmNoaWxkcmVuQ291bnQ7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBmaW5kSWQgPSBhcnJDaGFubmVsQXZhaWxhYmxlSW5Mb2NhdGlvbi5pbmRleE9mKGluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmluZElkICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gT3BlblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudEJldENoYW5uZWwuY2hpbGRyZW5baW5kZXhdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEJsb2NrXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50QmV0Q2hhbm5lbC5jaGlsZHJlbltpbmRleF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY3JvbGxCZXRDaGFubmVsLnNjcm9sbFRvT2Zmc2V0KGNjLnYyKDAsIDApLCAwLjIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmV0Q2hhbm5lbFNlbGVjdGVkKHR5cGUsIGNoYW5uZWxJZCkge1xyXG4gICAgLy8gICAgY2MubG9nKFwiTG90b0NvbnRyb2xsZXIgb25CZXRDaGFubmVsU2VsZWN0ZWQgdHlwZSA6IFwiLCB0eXBlKTtcclxuICAgIC8vICAgIGNjLmxvZyhcIkxvdG9Db250cm9sbGVyIG9uQmV0Q2hhbm5lbFNlbGVjdGVkIGNoYW5uZWxJZCA6IFwiLCBjaGFubmVsSWQpO1xyXG4gICAgICAgIHRoaXMuYnRuQ2FuY2VsQ2hhbmdlQ2hhbm5lbC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJldENoYW5uZWwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHR5cGUgPT0gXCIwXCIpIHsvLyBvIHBoYW4gY2hvbiBjdW9jXHJcbiAgICAgICAgICAgIHRoaXMuYnRuQmV0Q2hhbm5lbC5jaGlsZHJlblswXS5hbmdsZSA9IDE4MDtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QmV0Q2hhbm5lbC5zdHJpbmcgPSBjbWQuQ29kZS5MT1RPX0NIQU5ORUxfTkFNRVtjaGFubmVsSWRdO1xyXG4gICAgICAgICAgICB0aGlzLkdBTUVfQ0hBTk5FTCA9IGNoYW5uZWxJZDtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb25DYW5jZWxCZXQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCIxXCIpIHsgLy8gbyBwaGFuIHRhYiBrZXQgcXVhIG5ob1xyXG4gICAgICAgICAgICB0aGlzLmJ0blRhYlJlc3VsdENoYW5uZWwuY2hpbGRyZW5bMF0uYW5nbGUgPSAxODA7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRhYlJlc3VsdENoYW5uZWwuc3RyaW5nID0gY21kLkNvZGUuTE9UT19DSEFOTkVMX05BTUVbY2hhbm5lbElkXTtcclxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0R2V0TG90b1Jlc3VsdCh0aGlzLnNlc3Npb25EYXRlLCBjaGFubmVsSWQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcIjJcIikgeyAvLyBvIHBoYW4gVGFiIGtldCBxdWEgVG9cclxuICAgICAgICAgICAgdGhpcy5idG5Qb3B1cFJlc3VsdENoYW5uZWwuY2hpbGRyZW5bMF0uYW5nbGUgPSAxODA7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBvcHVwUmVzdWx0Q2hhbm5lbC5zdHJpbmcgPSBjbWQuQ29kZS5MT1RPX0NIQU5ORUxfTkFNRVtjaGFubmVsSWRdO1xyXG4gICAgICAgICAgICB0aGlzLnBvcHVwUmVzdWx0Q3VycmVudENoYW5uZWxJZCA9IGNoYW5uZWxJZDtcclxuICAgICAgICAgICAgdGhpcy5jaG9vc2VUaW1lKG51bGwsIDApO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnJlcXVlc3RHZXRMb3RvUmVzdWx0KHRoaXMuc2Vzc2lvbkRhdGUsIGNoYW5uZWxJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbENoYW5nZUNoYW5uZWwoKSB7XHJcbiAgICAgICAgdGhpcy5idG5DYW5jZWxDaGFuZ2VDaGFubmVsLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnRuQmV0Q2hhbm5lbC5jaGlsZHJlblswXS5hbmdsZSA9IDE4MDtcclxuICAgICAgICB0aGlzLmJ0blRhYlJlc3VsdENoYW5uZWwuY2hpbGRyZW5bMF0uYW5nbGUgPSAxODA7XHJcbiAgICAgICAgdGhpcy5idG5Qb3B1cFJlc3VsdENoYW5uZWwuY2hpbGRyZW5bMF0uYW5nbGUgPSAxODA7XHJcbiAgICAgICAgdGhpcy5iZXRDaGFubmVsLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE51bWJlciBTZWxlY3RvclxyXG4gICAgaW5pdE51bVNlbGVjdG9yKG51bUNvdW50KSB7XHJcbiAgICAgICAgaWYgKG51bUNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbnVtQ291bnQ7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWJJdGVtTnVtYmVyKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KFwiTG90by5JdGVtTnVtYmVyXCIpLmluaXRJdGVtKG51bUNvdW50LCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnROdW1TZWxlY3Rvci5hZGRDaGlsZChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbE51bVNlbGVjdG9yLnNjcm9sbFRvT2Zmc2V0KGNjLnYyKDAsIDApLCAwLjIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVOdW1TZWxlY3RvcihudW1Db3VudCkge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxMDAwOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA8IG51bUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnROdW1TZWxlY3Rvci5jaGlsZHJlbltpbmRleF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudE51bVNlbGVjdG9yLmNoaWxkcmVuW2luZGV4XS5nZXRDb21wb25lbnQoY2MuVG9nZ2xlKS5pc0NoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudE51bVNlbGVjdG9yLmNoaWxkcmVuW2luZGV4XS5nZXRDb21wb25lbnQoXCJMb3RvLkl0ZW1OdW1iZXJcIikuZm9ybWF0TmFtZShudW1Db3VudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnROdW1TZWxlY3Rvci5jaGlsZHJlbltpbmRleF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY3JvbGxOdW1TZWxlY3Rvci5zY3JvbGxUb09mZnNldChjYy52MigwLCAwKSwgMC4yKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuTnVtU2VsZWN0b3IoKSB7XHJcbiAgICAgICAgbGV0IGhlaWdodE9wZW4gPSA0NjA7XHJcbiAgICAgICAgbGV0IGhlaWdodENsb3NlID0gMzQ1OyAvLyAwLjc1XHJcblxyXG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5udW1iZXJTZWxlY3Rvci5jaGlsZHJlblswXS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5udW1iZXJTZWxlY3Rvci5jaGlsZHJlblswXS5oZWlnaHQgPSBjdXJyZW50ID09IDQ4MCA/IDM2NSA6IDQ4MDtcclxuICAgICAgICB0aGlzLmNvbnRlbnROdW1TZWxlY3Rvci5oZWlnaHQgPSBjdXJyZW50ID09IDQ4MCA/IGhlaWdodENsb3NlIDogaGVpZ2h0T3BlbjtcclxuICAgICAgICB0aGlzLmNvbnRlbnROdW1TZWxlY3Rvci5wYXJlbnQuaGVpZ2h0ID0gY3VycmVudCA9PSA0ODAgPyBoZWlnaHRDbG9zZSA6IGhlaWdodE9wZW47XHJcbiAgICAgICAgdGhpcy5zY3JvbGxOdW1TZWxlY3Rvci5ub2RlLmhlaWdodCA9IGN1cnJlbnQgPT0gNDgwID8gaGVpZ2h0Q2xvc2UgOiBoZWlnaHRPcGVuO1xyXG4gICAgICAgIHRoaXMuYnRuT3Blbk51bWJlclNlbGVjdG9yLnkgPSBjdXJyZW50ID09IDQ4MCA/IC0zNzUgOiAtNDkwO1xyXG4gICAgICAgIHRoaXMuY29udGVudERlc2NNb2RlLmFjdGl2ZSA9IGN1cnJlbnQgPT0gNDgwID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE51bWJlciBQaWNrZWRcclxuICAgIGFkZE51bWJlclBpY2tlZChudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnROdW1QaWNrZWQucHVzaChudW1iZXIpO1xyXG4gICAvLyAgICAgY2MubG9nKFwiTE9UTyBhZGROdW1iZXJQaWNrZWQgbnVtYmVyIDogXCIsIG51bWJlcik7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYkl0ZW1OdW1iZXJQaWNrZWQpO1xyXG4gICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KFwiTG90by5JdGVtTnVtU2VsZWN0ZWRcIikuaW5pdEl0ZW0obnVtYmVyKTtcclxuICAgICAgICB0aGlzLmNvbnRlbnROdW1QaWNrZWQuYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxOdW1QaWNrZWQuc2Nyb2xsVG9SaWdodCgwLjUpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5udW1SZXF1aXJlZCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWxUb3RhbEJldC5zdHJpbmcgPSBcIlwiICsgKHRoaXMuY3VycmVudEJldFZhbHVlICogcGFyc2VJbnQodGhpcy5lZHRCZXQuc3RyaW5nKSAqIHRoaXMuY3VycmVudE51bVBpY2tlZC5sZW5ndGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWxUb3RhbEJldC5zdHJpbmcgPSBcIlwiICsgKHRoaXMuY3VycmVudEJldFZhbHVlICogcGFyc2VJbnQodGhpcy5lZHRCZXQuc3RyaW5nKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGFiZWxXaW5WYWx1ZS5zdHJpbmcgPSBcIlwiICsgKHRoaXMuY3VycmVudFdpblZhbHVlICogcGFyc2VJbnQodGhpcy5lZHRCZXQuc3RyaW5nKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlTnVtYmVyUGlja2VkKG51bWJlcikge1xyXG4gICAgICAgLy8gY2MubG9nKFwiTE9UTyByZW1vdmVOdW1iZXJQaWNrZWQgbnVtYmVyIDogXCIsIG51bWJlcik7XHJcbiAgICAgICAgdGhpcy5yZXNldENvbnRlbnROdW1iZXJQaWNrZWQoKTtcclxuICAgICAgICB2YXIgdGVtcCA9IFsuLi50aGlzLmN1cnJlbnROdW1QaWNrZWRdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudE51bVBpY2tlZCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0ZW1wLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBpZiAodGVtcFtpbmRleF0gIT0gbnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnROdW1QaWNrZWQucHVzaCh0ZW1wW2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiSXRlbU51bWJlclBpY2tlZCk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChcIkxvdG8uSXRlbU51bVNlbGVjdGVkXCIpLmluaXRJdGVtKHRlbXBbaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudE51bVBpY2tlZC5hZGRDaGlsZChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjcm9sbE51bVBpY2tlZC5zY3JvbGxUb1JpZ2h0KDAuNSk7XHJcbiAgICAgICAgaWYgKHRoaXMubnVtUmVxdWlyZWQgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsVG90YWxCZXQuc3RyaW5nID0gXCJcIiArICh0aGlzLmN1cnJlbnRCZXRWYWx1ZSAqIHBhcnNlSW50KHRoaXMuZWR0QmV0LnN0cmluZykgKiB0aGlzLmN1cnJlbnROdW1QaWNrZWQubGVuZ3RoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsVG90YWxCZXQuc3RyaW5nID0gXCJcIiArICh0aGlzLmN1cnJlbnRCZXRWYWx1ZSAqIHBhcnNlSW50KHRoaXMuZWR0QmV0LnN0cmluZykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxhYmVsV2luVmFsdWUuc3RyaW5nID0gXCJcIiArICh0aGlzLmN1cnJlbnRXaW5WYWx1ZSAqIHBhcnNlSW50KHRoaXMuZWR0QmV0LnN0cmluZykpO1xyXG4gICAgICAvLyAgY2MubG9nKFwiTG90byByZW1vdmVOdW1iZXJQaWNrZWQgY3VycmVudE51bVBpY2tlZCA6IFwiLCB0aGlzLmN1cnJlbnROdW1QaWNrZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdhbWUgZ3VpZGVcclxuICAgIGNoYW5nZUdhbWVHdWlkZSgpIHtcclxuICAgICAgLy8gIGNjLmxvZyhcIkxPVE8gY2hhbmdlR2FtZUd1aWRlIEdBTUVfTU9ERSA6IFwiLCB0aGlzLkdBTUVfTU9ERSk7XHJcbiAgICAgIC8vICBjYy5sb2coXCJMT1RPIGNoYW5nZUdhbWVHdWlkZSBHQU1FX0xPQ0FUSU9OIDogXCIsIHRoaXMuR0FNRV9MT0NBVElPTik7XHJcbiAgICAgIC8vICBjYy5sb2coXCJMT1RPIGNoYW5nZUdhbWVHdWlkZSBHQU1FX0NIQU5ORUwgOiBcIiwgdGhpcy5HQU1FX0NIQU5ORUwpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEdhbWVIZWxwID0gXCJcIjtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5oZWxwQ2VudGVyLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuaGVscENlbnRlcltpbmRleF07XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmdhbWVNb2RlID09IHRoaXMuR0FNRV9NT0RFICYmIGRhdGEubG9jYXRpb24gPT0gdGhpcy5HQU1FX0xPQ0FUSU9OKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRHYW1lSGVscCA9IGRhdGEuaGVscDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIC8vICAgIGNjLmxvZyh0aGlzLmN1cnJlbnRHYW1lSGVscCk7XHJcbiAgICAgICAgdGhpcy5sYWJlbEdhbWVHdWlkZS5zdHJpbmcgPSB0aGlzLmN1cnJlbnRHYW1lSGVscDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gU3RhdGVcclxuICAgIHJlc2V0Q29udGVudE1vZGVTdGF0ZSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5jb250ZW50TW9kZS5jaGlsZHJlbkNvdW50OyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudE1vZGUuY2hpbGRyZW5baW5kZXhdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNldENvbnRlbnRUYWJzU3RhdGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY29udGVudFRhYnMuY2hpbGRyZW5Db3VudDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRUYWJzLmNoaWxkcmVuW2luZGV4XS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRDb250ZW50TnVtYmVyUGlja2VkKCkge1xyXG4gICAgICAgIHRoaXMuY29udGVudE51bVBpY2tlZC5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0Q29udGVudE51bVNlbGVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29udGVudE51bVNlbGVjdG9yLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUG9wdXBcclxuICAgIHNob3dQb3B1cFJlc3VsdCgpIHtcclxuICAgICAgICB0aGlzLnBvcHVwUmVzdWx0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wb3B1cFJlc3VsdERhdGUuc3RyaW5nID0gdGhpcy5mb3JtYXREYXRlKHRoaXMuYXJyRGF0ZXNbMF0pO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmFyckRhdGVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgdGltZSA9IHRoaXMuYXJyRGF0ZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRUaW1lLmNoaWxkcmVuWzFdLmNoaWxkcmVuW2luZGV4XS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuZm9ybWF0RGF0ZSh0aW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgLy8gICBjYy5sb2coXCJMT1RPIHNob3dQb3B1cFJlc3VsdCBzZXNzaW9uRGF0ZSA6IFwiLCB0aGlzLnNlc3Npb25EYXRlKTtcclxuICAgICAgICB0aGlzLm9uQmV0Q2hhbm5lbFNlbGVjdGVkKFwiMlwiLCBjbWQuQ29kZS5MT1RPX0NIQU5ORUwuTUlFTl9CQUMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dDb250ZW50VGltZSgpIHtcclxuICAgICAvLyAgIGNjLmxvZyhcIkxPVE8gc2hvd0NvbnRlbnRUaW1lXCIpO1xyXG4gICAgICAgIGxldCBzY2FsZU5vdyA9IHRoaXMuY29udGVudFRpbWUuc2NhbGVZO1xyXG4gICAgICAgIHRoaXMuY29udGVudFRpbWUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICBpZiAoc2NhbGVOb3cgPCAwLjUpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50VGltZS5zY2FsZVkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRUaW1lLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4yLCAxLCAxKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudFRpbWUuc2NhbGVZID0gMTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50VGltZS5ydW5BY3Rpb24oXHJcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMiwgMSwgMClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hvb3NlVGltZShldmVudCwgaWQpIHtcclxuICAgICAvLyAgIGNjLmxvZyhcIkxPVE8gY2hvb3NlVGltZSBpZCA6IFwiLCBpZCk7XHJcbiAgICAgLy8gICBjYy5sb2coXCJMT1RPIGNob29zZVRpbWUgYXJyRGF0ZXMgOiBcIiwgdGhpcy5hcnJEYXRlc1twYXJzZUludChpZCldKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250ZW50VGltZS5zY2FsZVkgPSAwO1xyXG5cclxuICAgICAgICBsZXQgdGltZSA9IHRoaXMuYXJyRGF0ZXNbcGFyc2VJbnQoaWQpXTtcclxuICAgICAgICB0aGlzLnBvcHVwUmVzdWx0RGF0ZS5zdHJpbmcgPSB0aGlzLmZvcm1hdERhdGUodGltZSk7XHJcbiAgICAgICAgbGV0IHNlc3Npb24gPSB0aGlzLmdldFNlc3Npb24odGltZSk7XHJcbiAgICAgIC8vICBjYy5sb2coXCJMT1RPIGNob29zZVRpbWUgc2Vzc2lvbiA6IFwiLCBzZXNzaW9uKTtcclxuICAgICAgICB0aGlzLnJlcXVlc3RHZXRMb3RvUmVzdWx0KHNlc3Npb24sIHRoaXMucG9wdXBSZXN1bHRDdXJyZW50Q2hhbm5lbElkKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtYXREYXRlKGRhdGUpIHtcclxuICAgICAgICB2YXIgbW9udGggPSAnJyArIChkYXRlLmdldE1vbnRoKCkgKyAxKTtcclxuICAgICAgICB2YXIgZGF5ID0gJycgKyBkYXRlLmdldERhdGUoKTtcclxuICAgICAgICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICAgICAgaWYgKG1vbnRoLmxlbmd0aCA8IDIpXHJcbiAgICAgICAgICAgIG1vbnRoID0gJzAnICsgbW9udGg7XHJcbiAgICAgICAgaWYgKGRheS5sZW5ndGggPCAyKVxyXG4gICAgICAgICAgICBkYXkgPSAnMCcgKyBkYXk7XHJcblxyXG4gICAgICAgIHJldHVybiBbZGF5LCBtb250aCwgeWVhcl0uam9pbignLycpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNlc3Npb24oZGF0ZSkge1xyXG4gICAgICAgIHZhciBtb250aCA9ICcnICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpO1xyXG4gICAgICAgIHZhciBkYXkgPSAnJyArIGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgICAgICBpZiAobW9udGgubGVuZ3RoIDwgMilcclxuICAgICAgICAgICAgbW9udGggPSAnMCcgKyBtb250aDtcclxuICAgICAgICBpZiAoZGF5Lmxlbmd0aCA8IDIpXHJcbiAgICAgICAgICAgIGRheSA9ICcwJyArIGRheTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFt5ZWFyLCBtb250aCwgZGF5XS5qb2luKCcnKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVBvcHVwUmVzdWx0KCkge1xyXG4gICAgICAgIHRoaXMucG9wdXBSZXN1bHQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1BvcHVwSGlzdG9yeSgpIHtcclxuICAgICAgICB0aGlzLnJlcXVlc3RHZXRQbGF5ZXJSZXF1ZXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VQb3B1cEhpc3RvcnkoKSB7XHJcbiAgICAgICAgdGhpcy5wb3B1cEhpc3RvcnkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1BvcHVwTm90aWZ5KG1zZykge1xyXG4gICAgICAgIHRoaXMucG9wdXBOb3RpZnkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxhYmVsTXNnLnN0cmluZyA9IG1zZztcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVBvcHVwTm90aWZ5KCkge1xyXG4gICAgICAgIHRoaXMucG9wdXBOb3RpZnkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb25UZXh0Q2hhbmdlQmV0KGV2ZW50KSB7XHJcbiAgICAgLy8gICBjYy5sb2coXCJMT1RPIG9uVGV4dENoYW5nZUJldCBldmVudDogXCIsIGV2ZW50KTtcclxuICAgICAgICBpZiAoZXZlbnQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZiAoL15bMC05XSokLy50ZXN0KGV2ZW50KSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJUaeG7gW4gY8aw4bujYyBwaOG6o2kgbMOgIHPhu5EgZMawxqFuZ1wiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWR0QmV0LnN0cmluZyA9IFwiMVwiO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQgPSBcIjFcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcmF3ID0gcGFyc2VJbnQoZXZlbnQpO1xyXG4gICAgICAgICAgICBpZiAocmF3ID09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWR0QmV0LnN0cmluZyA9IFwiMVwiO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQgPSBcIjFcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmVkdEJldC5zdHJpbmcgPSBcIlwiICsgcGFyc2VJbnQoZXZlbnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWR0QmV0LnN0cmluZyA9IFwiMVwiO1xyXG4gICAgICAgICAgICBldmVudCA9IFwiMVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZGVsdGEgPSBwYXJzZUludChldmVudCk7XHJcbiAgICAgICAgaWYgKHRoaXMubnVtUmVxdWlyZWQgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsVG90YWxCZXQuc3RyaW5nID0gXCJcIiArICh0aGlzLmN1cnJlbnRCZXRWYWx1ZSAqIGRlbHRhICogdGhpcy5jdXJyZW50TnVtUGlja2VkLmxlbmd0aCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbFRvdGFsQmV0LnN0cmluZyA9IFwiXCIgKyAodGhpcy5jdXJyZW50QmV0VmFsdWUgKiBkZWx0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGFiZWxXaW5WYWx1ZS5zdHJpbmcgPSBcIlwiICsgKHRoaXMuY3VycmVudFdpblZhbHVlICogZGVsdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlcXVlc3RcclxuICAgIHJlcXVlc3RQbGF5KG51bSwgYmV0T25lVHVybikge1xyXG4gICAgIC8vICAgY2MubG9nKFwiTG90byByZXF1ZXN0UGxheSBudW1iZXIgOiBcIiwgbnVtKTtcclxuICAgICAvLyAgIGNjLmxvZyhcIkxvdG8gcmVxdWVzdFBsYXkgYmV0T25lVHVybiA6IFwiLCBiZXRPbmVUdXJuKTtcclxuICAgICAgICBTaG9vdEZpc2hOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkucmVxdWVzdChcIkxPVE8xXCIsIHtcclxuICAgICAgICAgICAgXCJhcHBJZFwiOiBcInh4ZW5nXCIsXHJcbiAgICAgICAgICAgIFwidXNlcklkXCI6IENvbmZpZ3MuTG9naW4uVXNlcklkRmlzaCxcclxuICAgICAgICAgICAgXCJudW1iZXJcIjogbnVtLCAgLy8gc+G7kSBuZ8aw4budaSBjaMahaSBjaOG7jW4sIGPDsyB0aOG7gyBsw6Agc+G7kSBob+G6t2MgbeG6o25nIHPhu5EsIHTDuXkgbW9kZVxyXG4gICAgICAgICAgICBcInNlc3Npb25cIjogdGhpcy5zZXNzaW9uRGF0ZSxcclxuICAgICAgICAgICAgXCJtb2RlXCI6IHRoaXMuR0FNRV9NT0RFLFxyXG4gICAgICAgICAgICBcImNoYW5uZWxcIjogdGhpcy5HQU1FX0NIQU5ORUwsXHJcbiAgICAgICAgICAgIFwicGF5XCI6IGJldE9uZVR1cm5cclxuICAgICAgICB9LCAocmVzKSA9PiB7XHJcbiAgICAgICAgIC8vICAgY2MubG9nKFwiTE9UTzEgOiBcIiwgcmVzKTtcclxuICAgICAgICAgICAgaWYgKHJlc1tcImNvZGVcIl0gIT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJM4buXaSBcIiArIHJlc1tcImNvZGVcIl0gKyBcIiwgXCIgKyByZXNbXCJtc2dcIl0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLm51bVJlcXVlc3QgKz0gMTtcclxuICAgICAgICAgLy8gICBjYy5sb2coXCJMT1RPMSBudW1SZXF1ZXN0IDogXCIsIHRoaXMubnVtUmVxdWVzdCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm51bVJlcXVlc3QgPT0gdGhpcy5udW1SZXF1ZXN0Q29tcGxldGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQb3B1cE5vdGlmeShcIsSQ4bq3dCB0aMOgbmggY8O0bmcgIVwiKTtcclxuICAgICAgICAgICAgICAgIC8vIEJldCBTdWNjZXNzIC0+IENhbiByZXNldFxyXG4gICAgICAgICAgICAgICAgdGhpcy5udW1SZXF1ZXN0ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMubnVtUmVxdWVzdENvbXBsZXRlZCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbkNhbmNlbEJldCgpO1xyXG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVHJ1IHRpZW5cclxuICAgICAgICAgLy8gICBjYy5sb2coXCJMb3RvIEJldCBTdWNjZXNzIGNvc3QgOiBcIiwgcmVzW1wiY29zdFwiXSk7XHJcblxyXG4gICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW5GaXNoID0gcmVzW1wiY2FzaFwiXTtcclxuICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRvIHNvbWV0aGluZ1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3RHZXRQYXlXaW5SYXRlKCkge1xyXG4gICAgIC8vICAgY2MubG9nKFwiTG90byByZXF1ZXN0R2V0UGF5V2luUmF0ZSBHQU1FX01PREUgOiBcIiwgdGhpcy5HQU1FX01PREUpO1xyXG4gICAgIC8vICAgY2MubG9nKFwiTG90byByZXF1ZXN0R2V0UGF5V2luUmF0ZSBHQU1FX0NIQU5ORUwgOiBcIiwgdGhpcy5HQU1FX0NIQU5ORUwpO1xyXG4gICAgICAgIFNob290RmlzaE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5yZXF1ZXN0KFwiTE9UTzJcIiwge1xyXG4gICAgICAgICAgICBcIm1vZGVcIjogdGhpcy5HQU1FX01PREUsXHJcbiAgICAgICAgICAgIFwiY2hhbm5lbFwiOiB0aGlzLkdBTUVfQ0hBTk5FTFxyXG4gICAgICAgIH0sIChyZXMpID0+IHtcclxuICAgICAgICAgLy8gICBjYy5sb2coXCJMT1RPMiA6IFwiLCByZXMpO1xyXG4gICAgICAgICAgICBpZiAocmVzW1wiY29kZVwiXSAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgIC8vQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJM4buXaSBcIiArIHJlc1tcImNvZGVcIl0gKyBcIiwga2jDtG5nIHjDoWMgxJHhu4tuaC5cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gZG8gc29tZXRoaW5nXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE51bVBpY2tlZCA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0Q29udGVudE51bWJlclBpY2tlZCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QmV0VmFsdWUgPSByZXNbXCJwYXlSYXRlXCJdO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRXaW5WYWx1ZSA9IHJlc1tcIndpblJhdGVcIl07XHJcbiAgICAgICAgIC8vICAgY2MubG9nKFwiTE9UTzIgdGhpcy5jdXJyZW50QmV0VmFsdWUgOiBcIiwgdGhpcy5jdXJyZW50QmV0VmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLmVkdEJldC5zdHJpbmcgPSBcIjFcIjtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbFRvdGFsQmV0LnN0cmluZyA9IFwiMFwiO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsV2luVmFsdWUuc3RyaW5nID0gcmVzW1wid2luUmF0ZVwiXTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBMYXkgdGhlbyBTZXNzaW9uXHJcbiAgICByZXF1ZXN0R2V0Q2FsY3VsYXRlUmVzdWx0KCkge1xyXG4gICAgICAgIFNob290RmlzaE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5yZXF1ZXN0KFwiTE9UTzNcIiwge1xyXG4gICAgICAgICAgICBcInNlc3Npb25cIjogdGhpcy5zZXNzaW9uRGF0ZSxcclxuICAgICAgICB9LCAocmVzKSA9PiB7XHJcbiAgICAgICAgLy8gICAgY2MubG9nKFwiTE9UTzMgOiBcIiwgcmVzKTtcclxuICAgICAgICAgICAgaWYgKHJlc1tcImNvZGVcIl0gIT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAvL0FwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiTOG7l2kgXCIgKyByZXNbXCJjb2RlXCJdICsgXCIsIGtow7RuZyB4w6FjIMSR4buLbmguXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGRvIHNvbWV0aGluZ1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExheSB0YXQgY2FcclxuICAgIHJlcXVlc3RHZXRQbGF5ZXJSZXF1ZXN0KCkge1xyXG4gICAgICAgIFNob290RmlzaE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5yZXF1ZXN0KFwiTE9UTzRcIiwgbnVsbCwgKHJlcykgPT4ge1xyXG4gICAgICAgIC8vICAgIGNjLmxvZyhcIkxPVE80IDogXCIsIHJlcyk7XHJcbiAgICAgICAgICAgIGlmIChyZXNbXCJjb2RlXCJdICE9IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgLy9BcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIkzhu5dpIFwiICsgcmVzW1wiY29kZVwiXSArIFwiLCBraMO0bmcgeMOhYyDEkeG7i25oLlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBkbyBzb21ldGhpbmdcclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9wdXBIaXN0b3J5LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudEhpc3RvcnkucmVtb3ZlQWxsQ2hpbGRyZW4odHJ1ZSk7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gcmVzW1wiZGF0YVwiXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRhdGEubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiSXRlbUhpc3RvcnkpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoXCJMb3RvLkl0ZW1IaXN0b3J5XCIpLmluaXRJdGVtKGluZGV4LCBkYXRhW2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRIaXN0b3J5LmFkZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlcXVlc3RHZXRMb3RvUmVzdWx0KHNlc3Npb25JZCwgY2hhbm5lbElkKSB7XHJcbiAgICAgLy8gICBjYy5sb2coXCJMb3RvIHJlcXVlc3RHZXRMb3RvUmVzdWx0IHNlc3Npb25JZCA6IFwiLCBzZXNzaW9uSWQpO1xyXG4gICAgIC8vICAgY2MubG9nKFwiTG90byByZXF1ZXN0R2V0TG90b1Jlc3VsdCBjaGFubmVsSWQgOiBcIiwgY2hhbm5lbElkKTtcclxuICAgICAgICBTaG9vdEZpc2hOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkucmVxdWVzdChcIkxPVE81XCIsIHtcclxuICAgICAgICAgICAgXCJzZXNzaW9uXCI6IHNlc3Npb25JZCxcclxuICAgICAgICAgICAgXCJjaGFubmVsXCI6IGNoYW5uZWxJZFxyXG4gICAgICAgIH0sIChyZXMpID0+IHtcclxuICAgICAgICAgIC8vICBjYy5sb2coXCJMT1RPNSA6IFwiLCByZXMpO1xyXG4gICAgICAgICAgICBpZiAocmVzW1wiY29kZVwiXSAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgIC8vQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJM4buXaSBcIiArIHJlc1tcImNvZGVcIl0gKyBcIiwga2jDtG5nIHjDoWMgxJHhu4tuaC5cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gZG8gc29tZXRoaW5nXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvcHVwUmVzdWx0LmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gUG9wdXAgUmVzdWx0XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgOTsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWxSZXN1bHRbaW5kZXhdLnN0cmluZyA9IFwiLi4uLi4uXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUYWIgUmVzdWx0XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgOTsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWxUYWJSZXN1bHRbaW5kZXhdLnN0cmluZyA9IFwiLi4uLi4uXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCByZXNEYXRhID0gcmVzW1wiZGF0YVwiXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNEYXRhW1wiY2hhbm5lbFwiXSA9PSAwIHx8IHJlc0RhdGFbXCJzZXNzaW9uXCJdID09IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIENodWEgY28ga2V0IHF1YVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc0RhdGEgPSByZXNbXCJkYXRhXCJdO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSByZXNEYXRhW1wicmVzdWx0c1wiXTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNEYXRhW1wicmVzdWx0OFwiXSA9PSBcIltdXCIpIHsgLy8gayBjbyBnaWFpIDhcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3B1cFJlc3VsdC5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUG9wdXAgUmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWxSZXN1bHRbOF0uc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUYWIgUmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWxUYWJSZXN1bHRbOF0uc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGRlbHRhU3BhY2VzID0gdGhpcy5wb3B1cFJlc3VsdC5hY3RpdmUgPyBcIiAgICBcIiA6IFwiICBcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgODsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdHJKc29uID0gcmVzRGF0YVtcInJlc3VsdFwiICsgaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ckpzb24gPSByZXNEYXRhW1wicmVzdWx0U3BcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCByb3dJbmZvID0gSlNPTi5wYXJzZShzdHJKc29uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93SW5mby5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IHJvd0luZm8ubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMiAmJiAoaW5kZXggPT0gMyB8fCBpbmRleCA9PSA1KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSB0ZXh0ICsgcm93SW5mb1tpXS50b1N0cmluZygpICsgXCJcXG5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IHRleHQgKyByb3dJbmZvW2ldLnRvU3RyaW5nKCkgKyBkZWx0YVNwYWNlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSB0ZXh0ICsgcm93SW5mb1tpXS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChpbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJvd0luZm89cmVzRGF0YVtcInJlc3VsdFNwXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0ZXh0ID0gcm93SW5mb1swXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9ZWxzZSBpZiAoaW5kZXggPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0ZXh0ID0gcmVzRGF0YVtcInJlc3VsdFNwXCJdWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAoaW5kZXggPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0ZXh0ID0gcm93SW5mb1swXSArIGRlbHRhU3BhY2VzICsgcm93SW5mb1sxXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2UgaWYgKGluZGV4ID09IDMgfHwgaW5kZXggPT0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0ZXh0ID0gcm93SW5mb1swXSArIGRlbHRhU3BhY2VzICsgcm93SW5mb1sxXSArIGRlbHRhU3BhY2VzICsgcm93SW5mb1syXSArIFwiXFxuXCIgKyByb3dJbmZvWzNdICsgZGVsdGFTcGFjZXMgKyByb3dJbmZvWzRdICsgZGVsdGFTcGFjZXMgKyByb3dJbmZvWzVdO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAoaW5kZXggPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0ZXh0ID0gcm93SW5mb1swXSArIGRlbHRhU3BhY2VzICsgcm93SW5mb1sxXSArIGRlbHRhU3BhY2VzICsgcm93SW5mb1syXSArIGRlbHRhU3BhY2VzICsgcm93SW5mb1szXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2UgaWYgKGluZGV4ID09IDYpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGV4dCA9IHJvd0luZm9bMF0gKyBkZWx0YVNwYWNlcyArIHJvd0luZm9bMV0gKyBkZWx0YVNwYWNlcyArIHJvd0luZm9bMl07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSBlbHNlIGlmIChpbmRleCA9PSA3IHx8IGluZGV4ID09IDgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGV4dCA9IHJvd0luZm9bMF0gKyBkZWx0YVNwYWNlcyArIHJvd0luZm9bMV0gKyBkZWx0YVNwYWNlcyArIHJvd0luZm9bMl0gKyBkZWx0YVNwYWNlcyArIHJvd0luZm9bM107XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3B1cFJlc3VsdC5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUG9wdXAgUmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWxSZXN1bHRbaW5kZXhdLnN0cmluZyA9IHRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGFiIFJlc3VsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsVGFiUmVzdWx0W2luZGV4XS5zdHJpbmcgPSB0ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3RHZXRIZWxwKCkge1xyXG4gICAgICAgIFNob290RmlzaE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5yZXF1ZXN0KFwiTE9UTzZcIiwgbnVsbCwgKHJlcykgPT4ge1xyXG4gICAgICAgICAvLyAgIGNjLmxvZyhcIkxPVE82IDogXCIsIHJlcyk7XHJcbiAgICAgICAgICAgIGlmIChyZXNbXCJjb2RlXCJdICE9IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgLy9BcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIkzhu5dpIFwiICsgcmVzW1wiY29kZVwiXSArIFwiLCBraMO0bmcgeMOhYyDEkeG7i25oLlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gZG8gc29tZXRoaW5nXHJcbiAgICAgICAgICAvLyAgY2MubG9nKFwiTE9UTzYgOiBcIiwgcmVzWydkYXRhJ10pO1xyXG4gICAgICAgICAgICB0aGlzLmhlbHBDZW50ZXIgPSByZXNbXCJkYXRhXCJdO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUdhbWVHdWlkZSgpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3RDaGF0KG1zZykge1xyXG4gICAgICAvLyAgY2MubG9nKFwiTG90byByZXF1ZXN0Q2hhdCBtc2cgOiBcIiwgbXNnKTtcclxuICAgICAgICBTaG9vdEZpc2hOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkucmVxdWVzdChcIkxPVE83XCIsIHtcclxuICAgICAgICAgICAgXCJtc2dcIjogbXNnLFxyXG4gICAgICAgIH0sIChyZXMpID0+IHtcclxuICAgICAgICAvLyAgICBjYy5sb2coXCJMT1RPNyA6IFwiLCByZXMpO1xyXG4gICAgICAgICAgICBpZiAocmVzW1wiY29kZVwiXSAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgIC8vQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJM4buXaSBcIiArIHJlc1tcImNvZGVcIl0gKyBcIiwga2jDtG5nIHjDoWMgxJHhu4tuaC5cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gZG8gc29tZXRoaW5nXHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWVzdEdldENoYXRIaXN0b3J5KCkge1xyXG4gICAgICAgIFNob290RmlzaE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5yZXF1ZXN0KFwiTE9UTzhcIiwgbnVsbCwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgLy8gIGNjLmxvZyhcIkxPVE84IDpcIiwgcmVzKTtcclxuICAgICAgICAgICAgaWYgKHJlc1tcImNvZGVcIl0gIT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAvL0FwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiTOG7l2kgXCIgKyByZXNbXCJjb2RlXCJdICsgXCIsIGtow7RuZyB4w6FjIMSR4buLbmguXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGRvIHNvbWV0aGluZ1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRDaGF0LnJlbW92ZUFsbENoaWxkcmVuKHRydWUpO1xyXG4gICAgICAgICAgICBsZXQgYXJyQ2hhdCA9IHJlc1tcImRhdGFcIl07XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJDaGF0Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYkl0ZW1DaGF0KTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KCdMb3RvLkl0ZW1DaGF0JykuaW5pdEl0ZW0oe1xyXG4gICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBhcnJDaGF0W2luZGV4XS5uaWNrbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBtc2c6IGFyckNoYXRbaW5kZXhdLm1zZyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50Q2hhdC5hZGRDaGlsZChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbENoYXQuc2Nyb2xsVG9Cb3R0b20oMC4yKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXF1ZXN0R2V0R2FtZUF2YWlsYWJsZSgpIHtcclxuICAgICAgICBTaG9vdEZpc2hOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkucmVxdWVzdChcIkxPVE85XCIsIG51bGwsIChyZXMpID0+IHtcclxuICAgICAgICAgIC8vICBjYy5sb2coXCJMT1RPOSA6XCIsIHJlcyk7XHJcbiAgICAgICAgICAgIGlmIChyZXNbXCJjb2RlXCJdICE9IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgLy9BcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIkzhu5dpIFwiICsgcmVzW1wiY29kZVwiXSArIFwiLCBraMO0bmcgeMOhYyDEkeG7i25oLlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBkbyBzb21ldGhpbmdcclxuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgLy8gTmV1IG1vZGUgdmEgY2hhbm5lbCBsYSBbXSBuZ2hpYSBsYSBjaG8gY2hvaSBGdWxsIGdhbWVcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNPcGVuID0gcmVzW1wiY2hhbm5lbHNcIl07XHJcbiAgICAgICAgICAgIHRoaXMubW9kZXNPcGVuID0gcmVzW1wibW9kZXNcIl07XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5tb2Rlc09wZW4ubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAyNDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZXNPcGVuLnB1c2goaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGFubmVsc09wZW4ubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAzNzsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNPcGVuLnB1c2goaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyAgIGNjLmxvZyhcIk1vZGUgT3BlbiA6IFwiLCB0aGlzLm1vZGVzT3Blbik7XHJcbiAgICAgICAgICAvLyAgY2MubG9nKFwiQ2hhbm5lbCBPcGVuIDogXCIsIHRoaXMuY2hhbm5lbHNPcGVuKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEluaXQgR2FtZVxyXG4gICAgICAgICAgICB0aGlzLmNob29zZUxvY2F0aW9uKHRoaXMubGlzdExvY2F0aW9uWzBdKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGlzdExvY2F0aW9uWzBdLmlzQ2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuR0FNRV9MT0NBVElPTiA9IGNtZC5Db2RlLkxPVE9fTE9DQVRJT04uTWllbkJhYztcclxuICAgICAgICAgICAgdGhpcy5vbkJldENoYW5uZWxTZWxlY3RlZChcIjBcIiwgY21kLkNvZGUuTE9UT19DSEFOTkVMLk1JRU5fQkFDKTsgLy8gcGFyYW0gMSBsYSAwIG5naGlhIGxhIGNob24gbyBwaGFuIEJldFxyXG5cclxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0R2V0SGVscCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RHZXRQYXlXaW5SYXRlKCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbGF5IGRhbmggc2FjaCBiZXQgY3VhIGNhYyBuZ3VvaSBjaG8ga2hhYyBjaG8gdGFiIG5ldyBiZXRcclxuICAgIHJlcXVlc3RHZXROZXdCZXRIaXN0b3J5KCkge1xyXG4gICAgICAgIFNob290RmlzaE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5yZXF1ZXN0KFwiTE9UTzEwXCIsIG51bGwsIChyZXMpID0+IHtcclxuICAgICAgICAgLy8gICBjYy5sb2coXCJMT1RPMTAgOlwiLCByZXMpO1xyXG4gICAgICAgICAgICBpZiAocmVzW1wiY29kZVwiXSAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgIC8vQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJM4buXaSBcIiArIHJlc1tcImNvZGVcIl0gKyBcIiwga2jDtG5nIHjDoWMgxJHhu4tuaC5cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gZG8gc29tZXRoaW5nXHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudE5ld0JldC5yZW1vdmVBbGxDaGlsZHJlbih0cnVlKTtcclxuICAgICAgICAgICAgbGV0IGFyckJldCA9IHJlc1tcImRhdGFcIl07XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJCZXQubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHVzaCA9IGFyckJldFtpbmRleF07XHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiSXRlbU5ld0JldCk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudCgnTG90by5JdGVtTmV3QmV0JykuaW5pdEl0ZW0oe1xyXG4gICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBwdXNoW1wibmlja25hbWVcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbDogcHVzaFtcImNoYW5uZWxcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogcHVzaFtcIm1vZGVcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgYmV0OiBwdXNoW1wiY29zdFwiXSxcclxuICAgICAgICAgICAgICAgICAgICBudW1zOiBwdXNoW1wibnVtYmVyXCJdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudE5ld0JldC5hZGRDaGlsZChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbE5ld0JldC5zY3JvbGxUb0JvdHRvbSgwLjIpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG5hY3RMb2dpbigpOiB2b2lkIHtcclxuICAgICAgICAgICBsZXQgdXNlcm5hbWUgPSBDb25maWdzLkxvZ2luLlVzZXJuYW1lO1xyXG4gICAgICAgICAgICBsZXQgcGFzc3dvcmQgPSBDb25maWdzLkxvZ2luLlBhc3N3b3JkO1xyXG5cclxuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHsgYzogMywgdW46IHVzZXJuYW1lLCBwdzogbWQ1KHBhc3N3b3JkKSB9LCAoZXJyLCByZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIsSQxINuZyBuaOG6rXAga2jDtG5nIHRow6BuaCBjw7RuZywgdnVpIGzDsm5nIGtp4buDbSB0cmEgbOG6oWkga+G6v3QgbuG7kWkuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhcnNlSW50KHJlc1tcImVycm9yQ29kZVwiXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwixJDEg25nIG5o4bqtcCB0aMOgbmggY8O0bmcuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuID0gcmVzW1wiYWNjZXNzVG9rZW5cIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uU2Vzc2lvbktleSA9IHJlc1tcInNlc3Npb25LZXlcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uVXNlcm5hbWUgPSB1c2VybmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5QYXNzd29yZCA9IHBhc3N3b3JkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLklzTG9naW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXNlckluZm8gPSBKU09OLnBhcnNlKGJhc2U2NC5kZWNvZGUoQ29uZmlncy5Mb2dpbi5TZXNzaW9uS2V5KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uTmlja25hbWUgPSB1c2VySW5mb1tcIm5pY2tuYW1lXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkF2YXRhciA9IHVzZXJJbmZvW1wiYXZhdGFyXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW4gPSB1c2VySW5mb1tcInZpblRvdGFsXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkx1Y2t5V2hlZWwgPSB1c2VySW5mb1tcImx1Y2t5Um90YXRlXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLklwQWRkcmVzcyA9IHVzZXJJbmZvW1wiaXBBZGRyZXNzXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkNyZWF0ZVRpbWUgPSB1c2VySW5mb1tcImNyZWF0ZVRpbWVcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQmlydGhkYXkgPSB1c2VySW5mb1tcImJpcnRoZGF5XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkJpcnRoZGF5ID0gdXNlckluZm9bXCJiaXJ0aGRheVwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5WaXBQb2ludCA9IHVzZXJJbmZvW1widmlwcG9pbnRcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uVmlwUG9pbnRTYXZlID0gdXNlckluZm9bXCJ2aXBwb2ludFNhdmVcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5jaGVja0Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kQ2hlY2sobmV3IGNtZC5SZXFTdWJjcmliZUphY2twb3RzKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZENoZWNrKG5ldyBjbWQuUmVxU3ViY3JpYmVIYWxsU2xvdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICBTaG9vdEZpc2hOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuY2hlY2tDb25uZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5wYW5lbE5vdExvZ2luLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgIHRoaXMucGFuZWxMb2dpbmVkLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTUFV0aWxzLnNldFVzZXJOYW1lKENvbmZpZ3MuTG9naW4uVXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTUFV0aWxzLnNldFVzZXJQYXNzKENvbmZpZ3MuTG9naW4uUGFzc3dvcmQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmJ1dHRvbk1pbmlHYW1lLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmdldE1haWxOb3RSZWFkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfSU5GT19VUERBVEVEKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIHN3aXRjaCAoVmVyc2lvbkNvbmZpZy5DUE5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cEJvb21UYW4uc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTAwNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJUaMO0bmcgdGluIMSRxINuZyBuaOG6rXAga2jDtG5nIGjhu6NwIGzhu4cuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDIwMDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXBVcGRhdGVOaWNrbmFtZS5zaG93Mih1c2VybmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIsSQxINuZyBuaOG6rXAga2jDtG5nIHRow6BuaCBjw7RuZyB2dWkgbMOybmcgdGjhu60gbOG6oWkgc2F1LlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICBhY3RCYWNrKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgICAgICBBcHAuaW5zdGFuY2UubG9hZFNjZW5lKFwiTG9iYnlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=