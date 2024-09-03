
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/SamScript/Sam.InGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTYW1TY3JpcHRcXFNhbS5JbkdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW9DO0FBQ3BDLHdFQUFtRTtBQUNuRSxxQ0FBK0I7QUFDL0IsdUNBQThCO0FBQzlCLG9FQUFxRDtBQUUvQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBTTtJQUE3QztRQUFBLHFFQXdLQztRQWhLRyxhQUFPLEdBQWdCLEVBQUUsQ0FBQzs7SUFnSzlCLENBQUM7a0JBeEtvQixTQUFTO0lBVTFCLDBCQUFNLEdBQU47UUFDSSxXQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELGdDQUFZLEdBQVo7UUFDSSwwQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBTSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsaUNBQWEsR0FBYixVQUFjLElBQUk7UUFDZCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ25DLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakIsa0JBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pCLGtCQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQy9CO0lBQ0wsQ0FBQztJQUVELDJCQUFPLEdBQVAsVUFBUSxJQUFJO1FBQ1IsaUJBQU0sT0FBTyxZQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztZQUNsQixJQUFJLENBQUMsQ0FBQyxNQUFNO2dCQUNSLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGtDQUFjLEdBQWQsVUFBZSxZQUFZO1FBQ3ZCLDBCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVELGdDQUFZLEdBQVo7UUFDSSwwQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELDZCQUFTLEdBQVQ7UUFDSSwwQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELGdDQUFZLEdBQVo7UUFDSSwwQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELDRCQUFRLEdBQVIsVUFBUyxJQUFJO1FBQ1QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQzFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCwrQkFBVyxHQUFYLFVBQVksSUFBSTtRQUNaLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTztZQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsa0NBQWMsR0FBZCxVQUFlLElBQUk7UUFDZixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxDQUFDLE1BQU07Z0JBQ1IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQyxDQUFDO1NBQy9EO0lBQ0wsQ0FBQztJQUVELHdDQUFvQixHQUFwQixVQUFxQixHQUFHO1FBQ3BCLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQixJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDWixJQUFJLFNBQVMsRUFBRTtnQkFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUNsRDtpQkFBTTtnQkFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUM5QztTQUNKO0lBQ0wsQ0FBQztJQUVELDhCQUFVLEdBQVYsVUFBVyxHQUFHO1FBQ1YsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pCLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQixJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFN0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QyxJQUFJLE1BQU0sRUFBRTtZQUNSLFlBQVk7WUFDWixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqRDthQUFNO1lBQ0gsV0FBVztZQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzdDO0lBQ0wsQ0FBQztJQUdELG1DQUFlLEdBQWYsVUFBZ0IsR0FBRztRQUFuQixpQkFvQkM7UUFuQkcsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9CLElBQUksU0FBUyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqQyxJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0IsSUFBSSxTQUFTLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pDLElBQUksZUFBZSxHQUFHLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzdDLElBQUksZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFL0MsVUFBVSxDQUFDO1lBQ1AsSUFBSSxTQUFTLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1QyxJQUFJLFVBQVUsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzlDLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2xELEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ2pELEtBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDbkQsVUFBVSxDQUFDO2dCQUNQLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN0QyxLQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMzQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDYixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsa0NBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBRUQsbUNBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBRUQsT0FBTztJQUNQLDhCQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQ2xCLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FDekIsQ0FBQztJQUNOLENBQUM7SUFFRCwrQkFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQ2xCLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FDMUIsQ0FBQztJQUNOLENBQUM7SUFFRCwrQkFBVyxHQUFYLFVBQVksS0FBSyxFQUFFLEVBQUU7UUFDakIsMENBQTBDO1FBQzFDLDBCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsMkJBQU8sR0FBUDtRQUNJLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM1QywwQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzFGLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEI7SUFDTCxDQUFDOztJQXJLYSxrQkFBUSxHQUFjLElBQUksQ0FBQztJQU16QztRQUpDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxvQkFBUztZQUNmLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUM7OENBQ3dCO0lBUlQsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXdLN0I7SUFBRCxnQkFBQztDQXhLRCxBQXdLQyxDQXhLc0MseUJBQU0sR0F3SzVDO2tCQXhLb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTYW1QbGF5ZXIgZnJvbSBcIi4vU2FtLlBsYXllclwiXG5pbXBvcnQgU2FtTmV0d29ya0NsaWVudCBmcm9tIFwiLi4vU2NyaXB0L25ldHdvcmtzL1NhbU5ldHdvcmtDbGllbnRcIjtcbmltcG9ydCBTYW1DbWQgZnJvbSBcIi4vU2FtLkNtZFwiO1xuaW1wb3J0IFJvb20gZnJvbSBcIi4vU2FtLlJvb21cIjtcbmltcG9ydCBJbkdhbWUgZnJvbSBcIi4uL1RpZW5MZW5TY3JpcHQvVGllbkxlbnouSW5HYW1lXCJcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhbUluR2FtZSBleHRlbmRzIEluR2FtZSB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBTYW1JbkdhbWUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogU2FtUGxheWVyLFxuICAgICAgICBvdmVycmlkZTogdHJ1ZVxuICAgIH0pXG4gICAgcGxheWVyczogU2FtUGxheWVyW10gPSBbXTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgU2FtSW5HYW1lLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgdGhpcy5pbml0UmVzKCk7XG4gICAgfVxuXG4gICAgYWN0TGVhdmVSb29tKCkge1xuICAgICAgICBTYW1OZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgU2FtQ21kLlNlbmRSZXF1ZXN0TGVhdmVHYW1lKCkpO1xuICAgIH1cblxuICAgIHVzZXJMZWF2ZVJvb20oZGF0YSkge1xuICAgICAgICB2YXIgY2hhaXIgPSB0aGlzLmNvbnZlcnRDaGFpcihkYXRhLmNoYWlyKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJzW2NoYWlyXS5zZXRMZWF2ZVJvb20oKTtcbiAgICAgICAgaWYgKGNoYWlyID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdyhmYWxzZSk7XG4gICAgICAgICAgICBSb29tLmluc3RhbmNlLnNob3codHJ1ZSk7XG4gICAgICAgICAgICBSb29tLmluc3RhbmNlLnJlZnJlc2hSb29tKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGlhQmFpKGRhdGEpIHtcbiAgICAgICAgc3VwZXIuY2hpYUJhaShkYXRhKTtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVCdXR0b25zKFtcImJ0X3NhbVwiLCBcImJ0X2h1eV9zYW1cIl0sIFt0cnVlLCB0cnVlXSk7XG4gICAgICAgIHRoaXMucGxheWVycy5mb3JFYWNoKHAgPT4ge1xuICAgICAgICAgICAgaWYgKHAuYWN0aXZlKVxuICAgICAgICAgICAgICAgIHAuc2V0VGltZVJlbWFpbihkYXRhLnRpbWVCYW9TYW0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZW5kU3VibWl0VHVybihjYXJkU2VsZWN0ZWQpIHtcbiAgICAgICAgU2FtTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IFNhbUNtZC5TZW5kRGFuaEJhaSghMSwgY2FyZFNlbGVjdGVkKSk7XG4gICAgfVxuXG4gICAgc2VuZFBhc3NUdXJuKCkge1xuICAgICAgICBTYW1OZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgU2FtQ21kLlNlbmRCb0x1b3QoITApKTtcbiAgICB9XG5cbiAgICBhY3RCYW9TYW0oKSB7XG4gICAgICAgIFNhbU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBTYW1DbWQuU2VuZEJhb1NhbSgpKTtcbiAgICB9XG5cbiAgICBhY3RIdXlCYW9TYW0oKSB7XG4gICAgICAgIFNhbU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBTYW1DbWQuU2VuZEh1eUJhb1NhbSgpKTtcbiAgICB9XG5cbiAgICBvbkJhb1NhbShkYXRhKSB7XG4gICAgICAgIHZhciBjaGFpciA9IHRoaXMuY29udmVydENoYWlyKGRhdGEuY2hhaXIpO1xuICAgICAgICB2YXIgcCA9IHRoaXMucGxheWVyc1tjaGFpcl07XG4gICAgICAgIHAuc2V0VGltZVJlbWFpbigwKTtcbiAgICAgICAgcC5zZXRTdGF0dXMoXCJCw4FPIFPDgk1cIik7XG4gICAgICAgIGlmIChkYXRhLmNoYWlyID09IHRoaXMubXlDaGFpcilcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlQnV0dG9ucyhbXCJidF9zYW1cIiwgXCJidF9odXlfc2FtXCJdLCBbZmFsc2UsIGZhbHNlXSk7XG4gICAgfVxuXG4gICAgb25IdXlCYW9TYW0oZGF0YSkge1xuICAgICAgICB2YXIgY2hhaXIgPSB0aGlzLmNvbnZlcnRDaGFpcihkYXRhLmNoYWlyKTtcbiAgICAgICAgdmFyIHAgPSB0aGlzLnBsYXllcnNbY2hhaXJdO1xuICAgICAgICBwLnNldFRpbWVSZW1haW4oMCk7XG4gICAgICAgIHAuc2V0U3RhdHVzKFwiSFXhu7YgU8OCTVwiKTtcbiAgICAgICAgaWYgKGRhdGEuY2hhaXIgPT0gdGhpcy5teUNoYWlyKVxuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVCdXR0b25zKFtcImJ0X3NhbVwiLCBcImJ0X2h1eV9zYW1cIl0sIFtmYWxzZSwgZmFsc2VdKTtcbiAgICB9XG5cbiAgICBvblF1eWV0RGluaFNhbShkYXRhKSB7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlQnV0dG9ucyhbXCJidF9zYW1cIiwgXCJidF9odXlfc2FtXCJdLCBbZmFsc2UsIGZhbHNlXSk7XG4gICAgICAgIGlmIChkYXRhLmlzU2FtKSB7XG4gICAgICAgICAgICB2YXIgY2hhaXIgPSB0aGlzLmNvbnZlcnRDaGFpcihkYXRhLmNoYWlyKTtcbiAgICAgICAgICAgIHZhciBwID0gdGhpcy5wbGF5ZXJzW2NoYWlyXTtcbiAgICAgICAgICAgIGlmIChwLmFjdGl2ZSlcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUb2FzdChwLmluZm8ubmlja05hbWUgKyBcIiDEkcaw4bujYyBxdXnhu4FuIGLDoW8gc8OibVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5vdGlmeVVzZXJSZWdPdXRSb29tKHJlcykge1xuICAgICAgICBsZXQgb3V0Q2hhaXIgPSByZXNbXCJvdXRDaGFpclwiXTtcbiAgICAgICAgbGV0IGlzT3V0Um9vbSA9IHJlc1tcImlzT3V0Um9vbVwiXTtcbiAgICAgICAgbGV0IGNoYWlyID0gdGhpcy5jb252ZXJ0Q2hhaXIob3V0Q2hhaXIpO1xuICAgICAgICBpZiAoY2hhaXIgPT0gMCkge1xuICAgICAgICAgICAgaWYgKGlzT3V0Um9vbSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1tjaGFpcl0uc2V0Tm90aWZ5KFwiU+G6r3AgcuG7nWkgYsOgbiAhXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbY2hhaXJdLnNldE5vdGlmeShcIktow7QgTcOhdSAhXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGxheWVyQ2hhdChyZXMpIHtcbiAgICAgICAgbGV0IGNoYWlyID0gcmVzW1wiY2hhaXJcIl07XG4gICAgICAgIGxldCBpc0ljb24gPSByZXNbXCJpc0ljb25cIl07XG4gICAgICAgIGxldCBjb250ZW50ID0gcmVzW1wiY29udGVudFwiXTtcblxuICAgICAgICBsZXQgc2VhdElkID0gdGhpcy5jb252ZXJ0Q2hhaXIoY2hhaXIpO1xuICAgICAgICBpZiAoaXNJY29uKSB7XG4gICAgICAgICAgICAvLyBDaGF0IEljb25cbiAgICAgICAgICAgIHRoaXMucGxheWVyc1tzZWF0SWRdLnNob3dDaGF0RW1vdGlvbihjb250ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIENoYXQgTXNnXG4gICAgICAgICAgICB0aGlzLnBsYXllcnNbc2VhdElkXS5zaG93Q2hhdE1zZyhjb250ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcGxheWVyQ2hhdENob25nKHJlcykge1xuICAgICAgICBsZXQgd2luQ2hhaXIgPSByZXNbXCJ3aW5DaGFpclwiXTtcbiAgICAgICAgbGV0IGxvc3RDaGFpciA9IHJlc1tcImxvc3RDaGFpclwiXTtcbiAgICAgICAgbGV0IHdpbk1vbmV5ID0gcmVzW1wid2luTW9uZXlcIl07XG4gICAgICAgIGxldCBsb3N0TW9uZXkgPSByZXNbXCJsb3N0TW9uZXlcIl07XG4gICAgICAgIGxldCB3aW5DdXJyZW50TW9uZXkgPSByZXNbXCJ3aW5DdXJyZW50TW9uZXlcIl07XG4gICAgICAgIGxldCBsb3N0Q3VycmVudE1vbmV5ID0gcmVzW1wibG9zdEN1cnJlbnRNb25leVwiXTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGxldCBzZWF0SWRXaW4gPSB0aGlzLmNvbnZlcnRDaGFpcih3aW5DaGFpcik7XG4gICAgICAgICAgICBsZXQgc2VhdElkTG9zdCA9IHRoaXMuY29udmVydENoYWlyKGxvc3RDaGFpcik7XG4gICAgICAgICAgICB0aGlzLnBsYXllcnNbc2VhdElkV2luXS5zZXRDb2luQ2hhbmdlKHdpbk1vbmV5KTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyc1tzZWF0SWRMb3N0XS5zZXRDb2luQ2hhbmdlKGxvc3RNb25leSk7XG4gICAgICAgICAgICB0aGlzLnBsYXllcnNbc2VhdElkV2luXS5zZXRDb2luKHdpbkN1cnJlbnRNb25leSk7XG4gICAgICAgICAgICB0aGlzLnBsYXllcnNbc2VhdElkTG9zdF0uc2V0Q29pbihsb3N0Q3VycmVudE1vbmV5KTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1tzZWF0SWRXaW5dLnNldFN0YXR1cyhcIlwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbc2VhdElkTG9zdF0uc2V0U3RhdHVzKFwiXCIpO1xuICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuICAgIHNob3dQb3B1cEd1aWRlKCkge1xuICAgICAgICB0aGlzLnBvcHVwR3VpZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjbG9zZVBvcHVwR3VpZGUoKSB7XG4gICAgICAgIHRoaXMucG9wdXBHdWlkZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBDaGF0XG4gICAgc2hvd1VJQ2hhdCgpIHtcbiAgICAgICAgdGhpcy5VSV9DaGF0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuVUlfQ2hhdC5ydW5BY3Rpb24oXG4gICAgICAgICAgICBjYy5tb3ZlVG8oMC41LCA1NDYsIDApXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY2xvc2VVSUNoYXQoKSB7XG4gICAgICAgIHRoaXMuVUlfQ2hhdC5ydW5BY3Rpb24oXG4gICAgICAgICAgICBjYy5tb3ZlVG8oMC41LCAxMDAwLCAwKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNoYXRFbW90aW9uKGV2ZW50LCBpZCkge1xuICAgICAgICAvLyAgY2MubG9nKFwiQmFDYXkgY2hhdEVtb3Rpb24gaWQgOiBcIiwgaWQpO1xuICAgICAgICBTYW1OZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgU2FtQ21kLlNlbmRDaGF0Um9vbSgxLCBpZCkpO1xuICAgICAgICB0aGlzLmNsb3NlVUlDaGF0KCk7XG4gICAgfVxuXG4gICAgY2hhdE1zZygpIHtcbiAgICAgICAgaWYgKHRoaXMuZWR0Q2hhdElucHV0LnN0cmluZy50cmltKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgU2FtTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IFNhbUNtZC5TZW5kQ2hhdFJvb20oMCwgdGhpcy5lZHRDaGF0SW5wdXQuc3RyaW5nKSk7XG4gICAgICAgICAgICB0aGlzLmVkdENoYXRJbnB1dC5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgdGhpcy5jbG9zZVVJQ2hhdCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19