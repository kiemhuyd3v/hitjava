"use strict";
cc._RF.push(module, '41847MyakdFB7qsHvp++3gg', 'Sam.InGame');
// Lobby/LobbyScript/SamScript/Sam.InGame.ts

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
var Sam_Player_1 = require("./Sam.Player");
var SamNetworkClient_1 = require("../Script/networks/SamNetworkClient");
var Sam_Cmd_1 = require("./Sam.Cmd");
var Sam_Room_1 = require("./Sam.Room");
var TienLenz_InGame_1 = require("../TienLenScript/TienLenz.InGame");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SamInGame = /** @class */ (function (_super) {
    __extends(SamInGame, _super);
    function SamInGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.players = [];
        return _this;
    }
    SamInGame_1 = SamInGame;
    SamInGame.prototype.onLoad = function () {
        SamInGame_1.instance = this;
        this.initRes();
    };
    SamInGame.prototype.actLeaveRoom = function () {
        SamNetworkClient_1.default.getInstance().send(new Sam_Cmd_1.default.SendRequestLeaveGame());
    };
    SamInGame.prototype.userLeaveRoom = function (data) {
        var chair = this.convertChair(data.chair);
        this.players[chair].setLeaveRoom();
        if (chair == 0) {
            this.show(false);
            Sam_Room_1.default.instance.show(true);
            Sam_Room_1.default.instance.refreshRoom();
        }
    };
    SamInGame.prototype.chiaBai = function (data) {
        _super.prototype.chiaBai.call(this, data);
        this.setActiveButtons(["bt_sam", "bt_huy_sam"], [true, true]);
        this.players.forEach(function (p) {
            if (p.active)
                p.setTimeRemain(data.timeBaoSam);
        });
    };
    SamInGame.prototype.sendSubmitTurn = function (cardSelected) {
        SamNetworkClient_1.default.getInstance().send(new Sam_Cmd_1.default.SendDanhBai(!1, cardSelected));
    };
    SamInGame.prototype.sendPassTurn = function () {
        SamNetworkClient_1.default.getInstance().send(new Sam_Cmd_1.default.SendBoLuot(!0));
    };
    SamInGame.prototype.actBaoSam = function () {
        SamNetworkClient_1.default.getInstance().send(new Sam_Cmd_1.default.SendBaoSam());
    };
    SamInGame.prototype.actHuyBaoSam = function () {
        SamNetworkClient_1.default.getInstance().send(new Sam_Cmd_1.default.SendHuyBaoSam());
    };
    SamInGame.prototype.onBaoSam = function (data) {
        var chair = this.convertChair(data.chair);
        var p = this.players[chair];
        p.setTimeRemain(0);
        p.setStatus("BÁO SÂM");
        if (data.chair == this.myChair)
            this.setActiveButtons(["bt_sam", "bt_huy_sam"], [false, false]);
    };
    SamInGame.prototype.onHuyBaoSam = function (data) {
        var chair = this.convertChair(data.chair);
        var p = this.players[chair];
        p.setTimeRemain(0);
        p.setStatus("HUỶ SÂM");
        if (data.chair == this.myChair)
            this.setActiveButtons(["bt_sam", "bt_huy_sam"], [false, false]);
    };
    SamInGame.prototype.onQuyetDinhSam = function (data) {
        this.setActiveButtons(["bt_sam", "bt_huy_sam"], [false, false]);
        if (data.isSam) {
            var chair = this.convertChair(data.chair);
            var p = this.players[chair];
            if (p.active)
                this.showToast(p.info.nickName + " được quyền báo sâm");
        }
    };
    SamInGame.prototype.notifyUserRegOutRoom = function (res) {
        var outChair = res["outChair"];
        var isOutRoom = res["isOutRoom"];
        var chair = this.convertChair(outChair);
        if (chair == 0) {
            if (isOutRoom) {
                this.players[chair].setNotify("Sắp rời bàn !");
            }
            else {
                this.players[chair].setNotify("Khô Máu !");
            }
        }
    };
    SamInGame.prototype.playerChat = function (res) {
        var chair = res["chair"];
        var isIcon = res["isIcon"];
        var content = res["content"];
        var seatId = this.convertChair(chair);
        if (isIcon) {
            // Chat Icon
            this.players[seatId].showChatEmotion(content);
        }
        else {
            // Chat Msg
            this.players[seatId].showChatMsg(content);
        }
    };
    SamInGame.prototype.playerChatChong = function (res) {
        var _this = this;
        var winChair = res["winChair"];
        var lostChair = res["lostChair"];
        var winMoney = res["winMoney"];
        var lostMoney = res["lostMoney"];
        var winCurrentMoney = res["winCurrentMoney"];
        var lostCurrentMoney = res["lostCurrentMoney"];
        setTimeout(function () {
            var seatIdWin = _this.convertChair(winChair);
            var seatIdLost = _this.convertChair(lostChair);
            _this.players[seatIdWin].setCoinChange(winMoney);
            _this.players[seatIdLost].setCoinChange(lostMoney);
            _this.players[seatIdWin].setCoin(winCurrentMoney);
            _this.players[seatIdLost].setCoin(lostCurrentMoney);
            setTimeout(function () {
                _this.players[seatIdWin].setStatus("");
                _this.players[seatIdLost].setStatus("");
            }, 2000);
        }, 1000);
    };
    SamInGame.prototype.showPopupGuide = function () {
        this.popupGuide.active = true;
    };
    SamInGame.prototype.closePopupGuide = function () {
        this.popupGuide.active = false;
    };
    // Chat
    SamInGame.prototype.showUIChat = function () {
        this.UI_Chat.active = true;
        this.UI_Chat.runAction(cc.moveTo(0.5, 546, 0));
    };
    SamInGame.prototype.closeUIChat = function () {
        this.UI_Chat.runAction(cc.moveTo(0.5, 1000, 0));
    };
    SamInGame.prototype.chatEmotion = function (event, id) {
        //  cc.log("BaCay chatEmotion id : ", id);
        SamNetworkClient_1.default.getInstance().send(new Sam_Cmd_1.default.SendChatRoom(1, id));
        this.closeUIChat();
    };
    SamInGame.prototype.chatMsg = function () {
        if (this.edtChatInput.string.trim().length > 0) {
            SamNetworkClient_1.default.getInstance().send(new Sam_Cmd_1.default.SendChatRoom(0, this.edtChatInput.string));
            this.edtChatInput.string = "";
            this.closeUIChat();
        }
    };
    var SamInGame_1;
    SamInGame.instance = null;
    __decorate([
        property({
            type: Sam_Player_1.default,
            override: true
        })
    ], SamInGame.prototype, "players", void 0);
    SamInGame = SamInGame_1 = __decorate([
        ccclass
    ], SamInGame);
    return SamInGame;
}(TienLenz_InGame_1.default));
exports.default = SamInGame;

cc._RF.pop();