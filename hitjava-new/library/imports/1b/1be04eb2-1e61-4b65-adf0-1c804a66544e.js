"use strict";
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