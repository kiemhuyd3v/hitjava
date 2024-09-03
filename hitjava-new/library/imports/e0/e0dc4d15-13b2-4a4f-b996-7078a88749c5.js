"use strict";
cc._RF.push(module, 'e0dc40VE7JKT7mWcHioh0nF', 'TaiXiuMini2.TaiXiuMiniController');
// TaiXiuDouble/TaiXiuScript/TaiXiu2/TaiXiuMini2.TaiXiuMiniController.ts

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
var Configs_1 = require("../../../Loading/src/Configs");
var BroadcastReceiver_1 = require("../../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var Tween_1 = require("../../../Lobby/LobbyScript/Script/common/Tween");
var Utils_1 = require("../../../Lobby/LobbyScript/Script/common/Utils");
var Network_InPacket_1 = require("../../../Lobby/LobbyScript/Script/networks/Network.InPacket");
var TX2NetworkClient_1 = require("../../../Lobby/LobbyScript/Script/networks/TX2NetworkClient");
var TaiXiuDouble_Controller_1 = require("../src/TaiXiuDouble.Controller");
var TaiXiuMini2_Cmd_1 = require("./TaiXiuMini2.Cmd");
var TaiXiuMini2_PanelChat_1 = require("./TaiXiuMini2.PanelChat");
var TaiXiuMini2_PopupDetailHistory_1 = require("./TaiXiuMini2.PopupDetailHistory");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BetDoor;
(function (BetDoor) {
    BetDoor[BetDoor["None"] = 0] = "None";
    BetDoor[BetDoor["Tai"] = 1] = "Tai";
    BetDoor[BetDoor["Xiu"] = 2] = "Xiu";
})(BetDoor || (BetDoor = {}));
var TaiXiuMini2Controller = /** @class */ (function (_super) {
    __extends(TaiXiuMini2Controller, _super);
    function TaiXiuMini2Controller() {
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        _this_1.gamePlay = null;
        _this_1.sprDices = new Array();
        _this_1.sprFrameTai = null;
        _this_1.sprFrameXiu = null;
        _this_1.sprFrameBtnNan = null;
        _this_1.sprFrameBtnNan2 = null;
        _this_1.lblSession = null;
        _this_1.lblRemainTime = null;
        _this_1.lblRemainTime2 = null;
        _this_1.lblScore = null;
        _this_1.lblUserTai = null;
        _this_1.lblUserXiu = null;
        _this_1.lblTotalBetTai = null;
        _this_1.lblTotalBetXiu = null;
        _this_1.lblBetTai = null;
        _this_1.lblBetXiu = null;
        _this_1.lblBetedTai = null;
        _this_1.lblBetedXiu = null;
        _this_1.dice1 = null;
        _this_1.dice2 = null;
        _this_1.dice3 = null;
        _this_1.diceAnim = null;
        _this_1.bowl = null;
        _this_1.tai = null;
        _this_1.xiu = null;
        _this_1.btnHistories = null;
        _this_1.nodePanelChat = null;
        _this_1.layoutBet = null;
        _this_1.layoutBet1 = null;
        _this_1.layoutBet2 = null;
        _this_1.buttonsBet1 = new Array();
        _this_1.buttonsBet2 = new Array();
        _this_1.lblToast = null;
        _this_1.lblWinCash = null;
        _this_1.btnNan = null;
        _this_1.popupDetailHistory = null;
        _this_1.popups = [];
        _this_1.isBetting = false;
        _this_1.remainTime = 0;
        _this_1.canBet = true;
        _this_1.betedTai = 0;
        _this_1.betedXiu = 0;
        _this_1.referenceId = 0;
        _this_1.betingValue = -1;
        _this_1.betingDoor = BetDoor.None;
        _this_1.isOpenBowl = false;
        _this_1.lastWinCash = 0;
        _this_1.lastScore = 0;
        _this_1.isNan = false;
        _this_1.histories = [];
        _this_1.isCanChat = true;
        _this_1.panelChat = null;
        _this_1.maxBetValue = 999999999;
        _this_1.listBets = [1000, 5000, 10000, 50000, 100000, 500000, 1000000, 10000000];
        _this_1.bowlStartPos = cc.v2(0, -15);
        return _this_1;
    }
    TaiXiuMini2Controller_1 = TaiXiuMini2Controller;
    TaiXiuMini2Controller.prototype.onLoad = function () {
        TaiXiuMini2Controller_1.instance = this;
    };
    TaiXiuMini2Controller.prototype.start = function () {
        var _this_1 = this;
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_LOGOUT, function () {
            if (!_this_1.node.active)
                return;
            _this_1.dismiss();
        }, this);
        TX2NetworkClient_1.default.getInstance().addOnClose(function () {
            if (!_this_1.node.active)
                return;
            _this_1.dismiss();
        }, this);
        TX2NetworkClient_1.default.getInstance().addListener(function (data) {
            if (!_this_1.node.active)
                return;
            var inpacket = new Network_InPacket_1.default(data);
            switch (inpacket.getCmdId()) {
                case TaiXiuMini2_Cmd_1.default.Code.GAME_INFO: {
                    var res = new TaiXiuMini2_Cmd_1.default.ReceiveGameInfo(data);
                    _this_1.stopWin();
                    _this_1.bowl.active = false;
                    if (res.bettingState) {
                        _this_1.isBetting = true;
                        _this_1.dice1.node.active = false;
                        _this_1.dice2.node.active = false;
                        _this_1.dice3.node.active = false;
                        _this_1.lblRemainTime.node.active = true;
                        _this_1.lblRemainTime.string = res.remainTime < 10 ? "0" + res.remainTime : "" + res.remainTime;
                        _this_1.lblRemainTime2.node.parent.active = false;
                        _this_1.lblScore.node.parent.active = false;
                    }
                    else {
                        _this_1.lastScore = res.dice1 + res.dice2 + res.dice3;
                        _this_1.isBetting = false;
                        _this_1.dice1.node.active = true;
                        _this_1.dice1.spriteFrame = _this_1.sprDices[res.dice1];
                        _this_1.dice2.node.active = true;
                        _this_1.dice2.spriteFrame = _this_1.sprDices[res.dice2];
                        _this_1.dice3.node.active = true;
                        _this_1.dice3.spriteFrame = _this_1.sprDices[res.dice3];
                        _this_1.lblRemainTime.node.active = false;
                        _this_1.lblRemainTime2.node.parent.active = true;
                        _this_1.lblRemainTime2.string = "00:" + (res.remainTime < 10 ? "0" + res.remainTime : "" + res.remainTime);
                        _this_1.showResult();
                    }
                    _this_1.diceAnim.active = false;
                    Tween_1.default.numberTo(_this_1.lblTotalBetTai, res.potTai, 0.3);
                    Tween_1.default.numberTo(_this_1.lblTotalBetXiu, res.potXiu, 0.3);
                    _this_1.betedTai = res.betTai;
                    _this_1.lblBetedTai.string = Utils_1.default.formatNumber(_this_1.betedTai);
                    _this_1.betedXiu = res.betXiu;
                    _this_1.lblBetedXiu.string = Utils_1.default.formatNumber(_this_1.betedXiu);
                    _this_1.referenceId = res.referenceId;
                    _this_1.lblSession.string = "#" + res.referenceId;
                    _this_1.remainTime = res.remainTime;
                    break;
                }
                case TaiXiuMini2_Cmd_1.default.Code.UPDATE_TIME: {
                    var res = new TaiXiuMini2_Cmd_1.default.ReceiveUpdateTime(data);
                    if (res.bettingState) {
                        _this_1.isBetting = true;
                        _this_1.lblRemainTime.node.active = true;
                        _this_1.lblRemainTime.string = res.remainTime < 10 ? "0" + res.remainTime : "" + res.remainTime;
                        _this_1.lblRemainTime2.node.parent.active = false;
                        _this_1.lblScore.node.parent.active = false;
                    }
                    else {
                        _this_1.isBetting = false;
                        _this_1.lblRemainTime.node.active = false;
                        _this_1.lblRemainTime2.node.parent.active = true;
                        _this_1.lblRemainTime2.string = "00:" + (res.remainTime < 10 ? "0" + res.remainTime : "" + res.remainTime);
                        _this_1.layoutBet.active = false;
                        _this_1.lblBetTai.string = "ĐẶT";
                        _this_1.lblBetXiu.string = "ĐẶT";
                        if (res.remainTime < 15 && _this_1.isNan && !_this_1.isOpenBowl) {
                            _this_1.bowl.active = false;
                            _this_1.showResult();
                            _this_1.showWinCash();
                            _this_1.isOpenBowl = true;
                        }
                    }
                    Tween_1.default.numberTo(_this_1.lblTotalBetTai, res.potTai, 0.3);
                    Tween_1.default.numberTo(_this_1.lblTotalBetXiu, res.potXiu, 0.3);
                    _this_1.lblUserTai.string = "(" + Utils_1.default.formatNumber(res.numBetTai) + ")";
                    _this_1.lblUserXiu.string = "(" + Utils_1.default.formatNumber(res.numBetXiu) + ")";
                    break;
                }
                case TaiXiuMini2_Cmd_1.default.Code.DICES_RESULT: {
                    var res = new TaiXiuMini2_Cmd_1.default.ReceiveDicesResult(data);
                    _this_1.lastScore = res.dice1 + res.dice2 + res.dice3;
                    _this_1.lblRemainTime.node.active = false;
                    _this_1.dice1.spriteFrame = _this_1.sprDices[res.dice1];
                    _this_1.dice2.spriteFrame = _this_1.sprDices[res.dice2];
                    _this_1.dice3.spriteFrame = _this_1.sprDices[res.dice3];
                    _this_1.diceAnim.active = true;
                    _this_1.diceAnim.getComponent(cc.Animation).play("shake");
                    _this_1.scheduleOnce(function () {
                        _this_1.diceAnim.active = false;
                        _this_1.dice1.node.active = true;
                        _this_1.dice2.node.active = true;
                        _this_1.dice3.node.active = true;
                        if (!_this_1.isNan) {
                            _this_1.showResult();
                        }
                        else {
                            _this_1.bowl.setPosition(_this_1.bowlStartPos);
                            _this_1.bowl.active = true;
                        }
                    }, 0.95);
                    if (_this_1.histories.length >= 100) {
                        _this_1.histories.slice(0, 1);
                    }
                    _this_1.histories.push({
                        "session": _this_1.referenceId,
                        "dices": [
                            res.dice1,
                            res.dice2,
                            res.dice3
                        ]
                    });
                    break;
                }
                case TaiXiuMini2_Cmd_1.default.Code.RESULT: {
                    var res = new TaiXiuMini2_Cmd_1.default.ReceiveResult(data);
                    // cc.log(res);
                    Configs_1.default.Login.Coin = res.currentMoney;
                    _this_1.lastWinCash = res.totalMoney;
                    if (!_this_1.bowl.active) {
                        if (res.totalMoney > 0)
                            _this_1.showWinCash();
                    }
                    break;
                }
                case TaiXiuMini2_Cmd_1.default.Code.NEW_GAME: {
                    var res = new TaiXiuMini2_Cmd_1.default.ReceiveNewGame(data);
                    _this_1.diceAnim.active = false;
                    _this_1.dice1.node.active = false;
                    _this_1.dice2.node.active = false;
                    _this_1.dice3.node.active = false;
                    _this_1.lblTotalBetTai.string = "0";
                    _this_1.lblTotalBetXiu.string = "0";
                    _this_1.lblBetedTai.string = "0";
                    _this_1.lblBetedXiu.string = "0";
                    _this_1.lblUserTai.string = "(0)";
                    _this_1.lblUserXiu.string = "(0)";
                    _this_1.referenceId = res.referenceId;
                    _this_1.lblSession.string = "#" + res.referenceId;
                    _this_1.betingValue = -1;
                    _this_1.betingDoor = BetDoor.None;
                    _this_1.betedTai = 0;
                    _this_1.betedXiu = 0;
                    _this_1.isOpenBowl = false;
                    _this_1.lastWinCash = 0;
                    _this_1.stopWin();
                    break;
                }
                case TaiXiuMini2_Cmd_1.default.Code.HISTORIES: {
                    var res = new TaiXiuMini2_Cmd_1.default.ReceiveHistories(data);
                    var his = res.data.split(",");
                    for (var i = 0; i < his.length; i++) {
                        _this_1.histories.push({
                            "session": _this_1.referenceId - his.length / 3 + parseInt("" + ((i + 1) / 3)) + (_this_1.isBetting ? 0 : 1),
                            "dices": [
                                parseInt(his[i]),
                                parseInt(his[++i]),
                                parseInt(his[++i])
                            ]
                        });
                    }
                    _this_1.updateBtnHistories();
                    break;
                }
                case TaiXiuMini2_Cmd_1.default.Code.LOG_CHAT: {
                    var res = new TaiXiuMini2_Cmd_1.default.ReceiveLogChat(data);
                    // cc.log(res);
                    var msgs = JSON.parse(res.message);
                    for (var i = 0; i < msgs.length; i++) {
                        _this_1.panelChat.addMessage(msgs[i]["u"], msgs[i]["m"]);
                    }
                    _this_1.panelChat.scrollToBottom();
                    break;
                }
                case TaiXiuMini2_Cmd_1.default.Code.SEND_CHAT: {
                    var res = new TaiXiuMini2_Cmd_1.default.ReceiveSendChat(data);
                    switch (res.error) {
                        case 0:
                            _this_1.panelChat.addMessage(res.nickname, res.message);
                            break;
                        case 2:
                            _this_1.showToast("Bạn không có quyền Chat!");
                            break;
                        case 3:
                            _this_1.showToast("Tạm thời bạn bị cấm Chat!");
                            break;
                        case 4:
                            _this_1.showToast("Nội dung chat quá dài.");
                            break;
                        default:
                            _this_1.showToast("Bạn không thể chat vào lúc này.");
                            break;
                    }
                    // cc.log(res);
                    break;
                }
                case TaiXiuMini2_Cmd_1.default.Code.BET: {
                    var res = new TaiXiuMini2_Cmd_1.default.ReceiveBet(data);
                    switch (res.result) {
                        case 0:
                            switch (_this_1.betingDoor) {
                                case BetDoor.Tai:
                                    _this_1.betedTai += _this_1.betingValue;
                                    _this_1.lblBetedTai.string = Utils_1.default.formatNumber(_this_1.betedTai);
                                    break;
                                case BetDoor.Xiu:
                                    _this_1.betedXiu += _this_1.betingValue;
                                    _this_1.lblBetedXiu.string = Utils_1.default.formatNumber(_this_1.betedXiu);
                                    break;
                            }
                            Configs_1.default.Login.Coin = res.currentMoney;
                            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                            _this_1.betingValue = -1;
                            _this_1.showToast("Đặt cược thành công.");
                            break;
                        case 2:
                            _this_1.betingValue = -1;
                            _this_1.showToast("Hết thời gian cược.");
                            break;
                        case 3:
                            _this_1.betingValue = -1;
                            _this_1.showToast("Số dư không đủ vui lòng nạp thêm.");
                            break;
                        case 4:
                            _this_1.betingValue = -1;
                            _this_1.showToast("Số tiền cược không hợp lệ.");
                            break;
                        default:
                            _this_1.betingValue = -1;
                            _this_1.showToast("Đặt cược không thành công.");
                            break;
                    }
                    break;
                }
                default:
                    // cc.log(inpacket.getCmdId());
                    break;
            }
        }, this);
        var _loop_1 = function (i) {
            var btn = this_1.buttonsBet1[i];
            var value = this_1.listBets[i];
            var strValue = value + "";
            if (value >= 1000000) {
                strValue = (value / 1000000) + "M";
            }
            else if (value >= 1000) {
                strValue = (value / 1000) + "K";
            }
            btn.getComponentInChildren(cc.Label).string = strValue;
            btn.node.on("click", function () {
                if (_this_1.betingDoor === BetDoor.None)
                    return;
                var lblBet = _this_1.betingDoor === BetDoor.Tai ? _this_1.lblBetTai : _this_1.lblBetXiu;
                var number = Utils_1.default.stringToInt(lblBet.string) + value;
                if (number > _this_1.maxBetValue)
                    number = _this_1.maxBetValue;
                lblBet.string = Utils_1.default.formatNumber(number);
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.buttonsBet1.length; i++) {
            _loop_1(i);
        }
        var _loop_2 = function (i) {
            var btn = this_2.buttonsBet2[i];
            var value = btn.getComponentInChildren(cc.Label).string;
            btn.node.on("click", function () {
                if (_this_1.betingDoor === BetDoor.None)
                    return;
                var lblBet = _this_1.betingDoor === BetDoor.Tai ? _this_1.lblBetTai : _this_1.lblBetXiu;
                var number = Utils_1.default.stringToInt(lblBet.string + value);
                if (number > _this_1.maxBetValue)
                    number = _this_1.maxBetValue;
                lblBet.string = Utils_1.default.formatNumber(number);
            });
        };
        var this_2 = this;
        for (var i = 0; i < this.buttonsBet2.length; i++) {
            _loop_2(i);
        }
        this.bowl.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var pos = _this_1.bowl.position;
            pos.x += event.getDeltaX();
            pos.y += event.getDeltaY();
            _this_1.bowl.position = pos;
            var distance = Utils_1.default.v2Distance(new cc.Vec2(pos.x, pos.y), _this_1.bowlStartPos);
            // cc.log(distance);
            if (Math.abs(distance) > 100) {
                _this_1.bowl.active = false;
                _this_1.isOpenBowl = true;
                _this_1.showResult();
                _this_1.showWinCash();
            }
        }, this);
    };
    TaiXiuMini2Controller.prototype.show = function () {
        this.layoutBet.active = false;
        this.lblToast.node.parent.active = false;
        this.lblWinCash.node.active = false;
        this.layoutBet.active = false;
        this.diceAnim.active = false;
        this.bowl.active = false;
        this.dice1.node.active = false;
        this.dice2.node.active = false;
        this.dice3.node.active = false;
        TX2NetworkClient_1.default.getInstance().send(new TaiXiuMini2_Cmd_1.default.SendScribe());
        this.showChat();
    };
    TaiXiuMini2Controller.prototype.showChat = function () {
        this.panelChat = this.nodePanelChat.getComponent(TaiXiuMini2_PanelChat_1.default);
        this.panelChat.show(true);
    };
    TaiXiuMini2Controller.prototype.dismiss = function () {
        for (var i = 0; i < this.popups.length; i++) {
            this.popups[i].active = false;
        }
        if (this.panelChat != null)
            this.panelChat.show(false);
        TX2NetworkClient_1.default.getInstance().send(new TaiXiuMini2_Cmd_1.default.SendUnScribe());
    };
    TaiXiuMini2Controller.prototype.actClose = function () {
        TaiXiuDouble_Controller_1.default.instance.dismiss();
    };
    TaiXiuMini2Controller.prototype.actChat = function () {
        this.panelChat.show(!this.panelChat.node.active);
    };
    TaiXiuMini2Controller.prototype.actBetTai = function () {
        if (!this.isBetting) {
            this.showToast("Chưa đến thời gian đặt cược.");
            return;
        }
        if (this.betingValue >= 0) {
            this.showToast("Bạn thao tác quá nhanh.");
            return;
        }
        if (this.betedXiu > 0) {
            this.showToast("Bạn không thể đặt 2 cửa.");
            return;
        }
        this.betingDoor = BetDoor.Tai;
        this.lblBetTai.string = "0";
        this.lblBetXiu.string = "ĐẶT";
        this.layoutBet.active = true;
        this.layoutBet1.active = true;
        this.layoutBet2.active = false;
    };
    TaiXiuMini2Controller.prototype.actBetXiu = function () {
        if (!this.isBetting) {
            this.showToast("Chưa đến thời gian đặt cược.");
            return;
        }
        if (this.betingValue >= 0) {
            this.showToast("Bạn thao tác quá nhanh.");
            return;
        }
        if (this.betedTai > 0) {
            this.showToast("Bạn không thể đặt 2 cửa.");
            return;
        }
        this.betingDoor = BetDoor.Xiu;
        this.lblBetXiu.string = "0";
        this.lblBetTai.string = "ĐẶT";
        this.layoutBet.active = true;
        this.layoutBet1.active = true;
        this.layoutBet2.active = false;
    };
    TaiXiuMini2Controller.prototype.actOtherNumber = function () {
        this.layoutBet1.active = false;
        this.layoutBet2.active = true;
    };
    TaiXiuMini2Controller.prototype.actAgree = function () {
        if (this.betingValue >= 0 || !this.canBet) {
            this.showToast("Bạn thao tác quá nhanh.");
            return;
        }
        if (this.betingDoor === BetDoor.None)
            return;
        var lblBet = this.betingDoor === BetDoor.Tai ? this.lblBetTai : this.lblBetXiu;
        this.betingValue = Utils_1.default.stringToInt(lblBet.string);
        this.betingDoor = this.betingDoor;
        TX2NetworkClient_1.default.getInstance().send(new TaiXiuMini2_Cmd_1.default.SendBet(this.referenceId, this.betingValue, this.betingDoor == BetDoor.Tai ? 1 : 0, this.remainTime));
        lblBet.string = "0";
        this.canBet = false;
        this.scheduleOnce(function () {
            this.canBet = true;
        }, 1);
    };
    TaiXiuMini2Controller.prototype.actCancel = function () {
        this.lblBetXiu.string = "ĐẶT";
        this.lblBetTai.string = "ĐẶT";
        this.betingDoor = BetDoor.None;
        this.layoutBet.active = false;
    };
    TaiXiuMini2Controller.prototype.actBtnGapDoi = function () {
        //  cc.log("actBtnGapDoi:"+Configs.Login.Coin+":"+this.betingDoor);
        if (this.betingDoor === BetDoor.None)
            return;
        var lblBet = this.betingDoor === BetDoor.Tai ? this.lblBetTai : this.lblBetXiu;
        var number = Utils_1.default.stringToInt(lblBet.string) + Configs_1.default.Login.Coin;
        if (number > this.maxBetValue)
            number = this.maxBetValue;
        lblBet.string = Utils_1.default.formatNumber(number);
    };
    TaiXiuMini2Controller.prototype.actBtnDelete = function () {
        if (this.betingDoor === BetDoor.None)
            return;
        var lblBet = this.betingDoor === BetDoor.Tai ? this.lblBetTai : this.lblBetXiu;
        var number = "" + Utils_1.default.stringToInt(lblBet.string);
        number = number.substring(0, number.length - 1);
        number = Utils_1.default.formatNumber(Utils_1.default.stringToInt(number));
        lblBet.string = number;
    };
    TaiXiuMini2Controller.prototype.actBtn000 = function () {
        if (this.betingDoor === BetDoor.None)
            return;
        var lblBet = this.betingDoor === BetDoor.Tai ? this.lblBetTai : this.lblBetXiu;
        var number = Utils_1.default.stringToInt(lblBet.string + "000");
        if (number > this.maxBetValue)
            number = this.maxBetValue;
        lblBet.string = Utils_1.default.formatNumber(number);
    };
    TaiXiuMini2Controller.prototype.actNan = function () {
        this.isNan = !this.isNan;
        this.btnNan.getComponent(cc.Sprite).spriteFrame = this.isNan ? this.sprFrameBtnNan2 : this.sprFrameBtnNan;
    };
    TaiXiuMini2Controller.prototype.showResult = function () {
        this.lblScore.node.parent.active = true;
        this.lblScore.string = "" + this.lastScore;
        if (this.lastScore >= 11) {
            this.tai.runAction(cc.repeatForever(cc.spawn(cc.sequence(cc.scaleTo(0.3, 1.3), cc.scaleTo(0.3, 1)), cc.sequence(cc.tintTo(0.3, 255, 255, 0), cc.tintTo(0.3, 255, 255, 255)))));
        }
        else {
            this.xiu.runAction(cc.repeatForever(cc.spawn(cc.sequence(cc.scaleTo(0.3, 1.3), cc.scaleTo(0.3, 1)), cc.sequence(cc.tintTo(0.3, 255, 255, 0), cc.tintTo(0.3, 255, 255, 255)))));
        }
        this.updateBtnHistories();
    };
    TaiXiuMini2Controller.prototype.stopWin = function () {
        this.tai.stopAllActions();
        this.tai.runAction(cc.spawn(cc.scaleTo(0.3, 1), cc.tintTo(0.3, 255, 255, 255)));
        this.xiu.stopAllActions();
        this.xiu.runAction(cc.spawn(cc.scaleTo(0.3, 1), cc.tintTo(0.3, 255, 255, 255)));
    };
    TaiXiuMini2Controller.prototype.showToast = function (message) {
        this.lblToast.string = message;
        var parent = this.lblToast.node.parent;
        parent.stopAllActions();
        parent.active = true;
        parent.opacity = 0;
        parent.runAction(cc.sequence(cc.fadeIn(0.1), cc.delayTime(2), cc.fadeOut(0.2), cc.callFunc(function () {
            parent.active = false;
        })));
    };
    TaiXiuMini2Controller.prototype.showWinCash = function () {
        var _this_1 = this;
        if (this.lastWinCash <= 0)
            return;
        this.lblWinCash.node.stopAllActions();
        this.lblWinCash.node.active = true;
        this.lblWinCash.node.scale = 0;
        this.lblWinCash.node.setPosition(cc.Vec2.ZERO);
        Tween_1.default.numberTo(this.lblWinCash, this.lastWinCash, 0.5, function (n) { return "+" + n; });
        this.lblWinCash.node.runAction(cc.sequence(cc.scaleTo(0.5, 1), cc.delayTime(2), cc.moveBy(1, cc.v2(0, 60)), cc.callFunc(function () {
            _this_1.lblWinCash.node.active = false;
        })));
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
    };
    TaiXiuMini2Controller.prototype.updateBtnHistories = function () {
        var _this_1 = this;
        var histories = this.histories.slice();
        if (histories.length > this.btnHistories.childrenCount) {
            histories.splice(0, histories.length - this.btnHistories.childrenCount);
        }
        var idx = histories.length - 1;
        var _loop_3 = function () {
            if (idx >= 0) {
                var _idx_1 = idx;
                score = histories[idx]["dices"][0] + histories[idx]["dices"][1] + histories[idx]["dices"][2];
                this_3.btnHistories.children[i].getComponent(cc.Sprite).spriteFrame = score >= 11 ? this_3.sprFrameTai : this_3.sprFrameXiu;
                this_3.btnHistories.children[i].off("click");
                this_3.btnHistories.children[i].on("click", function (e, b) {
                    _this_1.popupDetailHistory.showDetail(histories[_idx_1]["session"]);
                    //  cc.log(this.histories[_idx]);
                });
                this_3.btnHistories.children[i].active = true;
            }
            else {
                this_3.btnHistories.children[i].active = false;
            }
            idx--;
        };
        var this_3 = this, score;
        for (var i = this.btnHistories.childrenCount - 1; i >= 0; i--) {
            _loop_3();
        }
    };
    TaiXiuMini2Controller.prototype.sendChat = function (message) {
        var _this = this;
        if (!_this.isCanChat) {
            this.showToast("Bạn thao tác quá nhanh.");
            return;
        }
        _this.isCanChat = false;
        this.scheduleOnce(function () {
            _this.isCanChat = true;
        }, 1);
        var req = new TaiXiuMini2_Cmd_1.default.SendChat(unescape(encodeURIComponent(message)));
        TX2NetworkClient_1.default.getInstance().send(req);
    };
    var TaiXiuMini2Controller_1;
    TaiXiuMini2Controller.instance = null;
    __decorate([
        property(cc.Node)
    ], TaiXiuMini2Controller.prototype, "gamePlay", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], TaiXiuMini2Controller.prototype, "sprDices", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], TaiXiuMini2Controller.prototype, "sprFrameTai", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], TaiXiuMini2Controller.prototype, "sprFrameXiu", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], TaiXiuMini2Controller.prototype, "sprFrameBtnNan", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], TaiXiuMini2Controller.prototype, "sprFrameBtnNan2", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuMini2Controller.prototype, "lblSession", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuMini2Controller.prototype, "lblRemainTime", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuMini2Controller.prototype, "lblRemainTime2", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuMini2Controller.prototype, "lblScore", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuMini2Controller.prototype, "lblUserTai", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuMini2Controller.prototype, "lblUserXiu", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuMini2Controller.prototype, "lblTotalBetTai", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuMini2Controller.prototype, "lblTotalBetXiu", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuMini2Controller.prototype, "lblBetTai", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuMini2Controller.prototype, "lblBetXiu", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuMini2Controller.prototype, "lblBetedTai", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuMini2Controller.prototype, "lblBetedXiu", void 0);
    __decorate([
        property(cc.Sprite)
    ], TaiXiuMini2Controller.prototype, "dice1", void 0);
    __decorate([
        property(cc.Sprite)
    ], TaiXiuMini2Controller.prototype, "dice2", void 0);
    __decorate([
        property(cc.Sprite)
    ], TaiXiuMini2Controller.prototype, "dice3", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuMini2Controller.prototype, "diceAnim", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuMini2Controller.prototype, "bowl", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuMini2Controller.prototype, "tai", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuMini2Controller.prototype, "xiu", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuMini2Controller.prototype, "btnHistories", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuMini2Controller.prototype, "nodePanelChat", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuMini2Controller.prototype, "layoutBet", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuMini2Controller.prototype, "layoutBet1", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuMini2Controller.prototype, "layoutBet2", void 0);
    __decorate([
        property([cc.Button])
    ], TaiXiuMini2Controller.prototype, "buttonsBet1", void 0);
    __decorate([
        property([cc.Button])
    ], TaiXiuMini2Controller.prototype, "buttonsBet2", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuMini2Controller.prototype, "lblToast", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuMini2Controller.prototype, "lblWinCash", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuMini2Controller.prototype, "btnNan", void 0);
    __decorate([
        property(TaiXiuMini2_PopupDetailHistory_1.default)
    ], TaiXiuMini2Controller.prototype, "popupDetailHistory", void 0);
    __decorate([
        property([cc.Node])
    ], TaiXiuMini2Controller.prototype, "popups", void 0);
    TaiXiuMini2Controller = TaiXiuMini2Controller_1 = __decorate([
        ccclass
    ], TaiXiuMini2Controller);
    return TaiXiuMini2Controller;
}(cc.Component));
exports.default = TaiXiuMini2Controller;

cc._RF.pop();