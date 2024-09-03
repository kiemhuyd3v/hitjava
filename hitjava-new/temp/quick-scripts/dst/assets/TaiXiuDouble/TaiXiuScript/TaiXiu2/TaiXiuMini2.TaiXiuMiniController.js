
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TaiXiuDouble/TaiXiuScript/TaiXiu2/TaiXiuMini2.TaiXiuMiniController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGFpWGl1RG91YmxlXFxUYWlYaXVTY3JpcHRcXFRhaVhpdTJcXFRhaVhpdU1pbmkyLlRhaVhpdU1pbmlDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUFtRDtBQUNuRCxnR0FBMkY7QUFDM0Ysd0VBQW1FO0FBQ25FLHdFQUFtRTtBQUNuRSxnR0FBbUY7QUFDbkYsZ0dBQTJGO0FBQzNGLDBFQUFvRTtBQUNwRSxxREFBb0M7QUFDcEMsaUVBQWdEO0FBRWhELG1GQUFrRTtBQUc1RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFLLE9BRUo7QUFGRCxXQUFLLE9BQU87SUFDUixxQ0FBSSxDQUFBO0lBQUUsbUNBQUcsQ0FBQTtJQUFFLG1DQUFHLENBQUE7QUFDbEIsQ0FBQyxFQUZJLE9BQU8sS0FBUCxPQUFPLFFBRVg7QUFHRDtJQUFtRCx5Q0FBWTtJQUEvRDtRQUFBLHVFQW1uQkM7UUE5bUJHLGdCQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGdCQUFRLEdBQTBCLElBQUksS0FBSyxFQUFrQixDQUFDO1FBRTlELG1CQUFXLEdBQW1CLElBQUksQ0FBQztRQUVuQyxtQkFBVyxHQUFtQixJQUFJLENBQUM7UUFFbkMsc0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLHVCQUFlLEdBQW1CLElBQUksQ0FBQztRQUV2QyxrQkFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixxQkFBYSxHQUFhLElBQUksQ0FBQztRQUUvQixzQkFBYyxHQUFhLElBQUksQ0FBQztRQUVoQyxnQkFBUSxHQUFhLElBQUksQ0FBQztRQUUxQixrQkFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixrQkFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixzQkFBYyxHQUFhLElBQUksQ0FBQztRQUVoQyxzQkFBYyxHQUFh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QURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQzs4REFDaUM7SUFFdkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyREFDTztJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZEQUNTO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eURBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMsd0NBQWtCLENBQUM7cUVBQ2lCO0lBRzlDO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO3lEQUNVO0lBL0ViLHFCQUFxQjtRQUR6QyxPQUFPO09BQ2EscUJBQXFCLENBbW5CekM7SUFBRCw0QkFBQztDQW5uQkQsQUFtbkJDLENBbm5Ca0QsRUFBRSxDQUFDLFNBQVMsR0FtbkI5RDtrQkFubkJvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IEJyb2FkY2FzdFJlY2VpdmVyIGZyb20gXCIuLi8uLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0Jyb2FkY2FzdFJlY2VpdmVyXCI7XG5pbXBvcnQgVHdlZW4gZnJvbSBcIi4uLy4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vVHdlZW5cIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuaW1wb3J0IEluUGFja2V0IGZyb20gXCIuLi8uLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5JblBhY2tldFwiO1xuaW1wb3J0IFRYMk5ldHdvcmtDbGllbnQgZnJvbSBcIi4uLy4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9UWDJOZXR3b3JrQ2xpZW50XCI7XG5pbXBvcnQgVGFpWGl1RG91YmxlQ29udHJvbGxlciBmcm9tIFwiLi4vc3JjL1RhaVhpdURvdWJsZS5Db250cm9sbGVyXCI7XG5pbXBvcnQgY21kIGZyb20gXCIuL1RhaVhpdU1pbmkyLkNtZFwiO1xuaW1wb3J0IFBhbmVsQ2hhdCBmcm9tIFwiLi9UYWlYaXVNaW5pMi5QYW5lbENoYXRcIjtcblxuaW1wb3J0IFBvcHVwRGV0YWlsSGlzdG9yeSBmcm9tIFwiLi9UYWlYaXVNaW5pMi5Qb3B1cERldGFpbEhpc3RvcnlcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5lbnVtIEJldERvb3Ige1xuICAgIE5vbmUsIFRhaSwgWGl1XG59XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWlYaXVNaW5pMkNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgc3RhdGljIGluc3RhbmNlOiBUYWlYaXVNaW5pMkNvbnRyb2xsZXIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZ2FtZVBsYXk6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxuICAgIHNwckRpY2VzOiBBcnJheTxjYy5TcHJpdGVGcmFtZT4gPSBuZXcgQXJyYXk8Y2MuU3ByaXRlRnJhbWU+KCk7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNwckZyYW1lVGFpOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNwckZyYW1lWGl1OiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNwckZyYW1lQnRuTmFuOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNwckZyYW1lQnRuTmFuMjogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxTZXNzaW9uOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFJlbWFpblRpbWU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsUmVtYWluVGltZTI6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsU2NvcmU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsVXNlclRhaTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxVc2VyWGl1OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFRvdGFsQmV0VGFpOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFRvdGFsQmV0WGl1OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibEJldFRhaTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxCZXRYaXU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsQmV0ZWRUYWk6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsQmV0ZWRYaXU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIGRpY2UxOiBjYy5TcHJpdGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgZGljZTI6IGNjLlNwcml0ZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBkaWNlMzogY2MuU3ByaXRlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBkaWNlQW5pbTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYm93bDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGFpOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB4aXU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0bkhpc3RvcmllczogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZVBhbmVsQ2hhdDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGF5b3V0QmV0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsYXlvdXRCZXQxOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsYXlvdXRCZXQyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoW2NjLkJ1dHRvbl0pXG4gICAgYnV0dG9uc0JldDE6IEFycmF5PGNjLkJ1dHRvbj4gPSBuZXcgQXJyYXk8Y2MuQnV0dG9uPigpO1xuICAgIEBwcm9wZXJ0eShbY2MuQnV0dG9uXSlcbiAgICBidXR0b25zQmV0MjogQXJyYXk8Y2MuQnV0dG9uPiA9IG5ldyBBcnJheTxjYy5CdXR0b24+KCk7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFRvYXN0OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFdpbkNhc2g6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidG5OYW46IGNjLk5vZGUgPSBudWxsO1xuICAgIFxuICAgIEBwcm9wZXJ0eShQb3B1cERldGFpbEhpc3RvcnkpXG4gICAgcG9wdXBEZXRhaWxIaXN0b3J5OiBQb3B1cERldGFpbEhpc3RvcnkgPSBudWxsO1xuICAgIFxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXG4gICAgcHVibGljIHBvcHVwczogY2MuTm9kZVtdID0gW107XG5cbiAgICBwcml2YXRlIGlzQmV0dGluZyA9IGZhbHNlO1xuICAgIHByaXZhdGUgcmVtYWluVGltZSA9IDA7XG4gICAgcHJpdmF0ZSBjYW5CZXQgPSB0cnVlO1xuICAgIHByaXZhdGUgYmV0ZWRUYWkgPSAwO1xuICAgIHByaXZhdGUgYmV0ZWRYaXUgPSAwO1xuICAgIHByaXZhdGUgcmVmZXJlbmNlSWQgPSAwO1xuICAgIHByaXZhdGUgYmV0aW5nVmFsdWUgPSAtMTtcbiAgICBwcml2YXRlIGJldGluZ0Rvb3IgPSBCZXREb29yLk5vbmU7XG4gICAgcHJpdmF0ZSBpc09wZW5Cb3dsID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBsYXN0V2luQ2FzaCA9IDA7XG4gICAgcHJpdmF0ZSBsYXN0U2NvcmUgPSAwO1xuICAgIHByaXZhdGUgaXNOYW4gPSBmYWxzZTtcbiAgICBoaXN0b3JpZXMgPSBbXTtcbiAgICBwcml2YXRlIGlzQ2FuQ2hhdCA9IHRydWU7XG4gICAgcHJpdmF0ZSBwYW5lbENoYXQ6IFBhbmVsQ2hhdCA9IG51bGw7XG4gICAgcHJpdmF0ZSByZWFkb25seSBtYXhCZXRWYWx1ZSA9IDk5OTk5OTk5OTtcbiAgICBwcml2YXRlIGxpc3RCZXRzID0gWzEwMDAsIDUwMDAsIDEwMDAwLCA1MDAwMCwgMTAwMDAwLCA1MDAwMDAsIDEwMDAwMDAsIDEwMDAwMDAwXTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGJvd2xTdGFydFBvcyA9IGNjLnYyKDAsIC0xNSk7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIFRhaVhpdU1pbmkyQ29udHJvbGxlci5pbnN0YW5jZSA9IHRoaXM7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnJlZ2lzdGVyKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfTE9HT1VULCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICBUWDJOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuYWRkT25DbG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICBUWDJOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuYWRkTGlzdGVuZXIoKGRhdGE6IFVpbnQ4QXJyYXkpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5ub2RlLmFjdGl2ZSkgcmV0dXJuO1xuICAgICAgICAgICAgbGV0IGlucGFja2V0ID0gbmV3IEluUGFja2V0KGRhdGEpO1xuICAgICAgICAgICAgc3dpdGNoIChpbnBhY2tldC5nZXRDbWRJZCgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5HQU1FX0lORk86IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZUdhbWVJbmZvKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BXaW4oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3dsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmJldHRpbmdTdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0JldHRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWNlMS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWNlMi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWNlMy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxSZW1haW5UaW1lLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsUmVtYWluVGltZS5zdHJpbmcgPSByZXMucmVtYWluVGltZSA8IDEwID8gXCIwXCIgKyByZXMucmVtYWluVGltZSA6IFwiXCIgKyByZXMucmVtYWluVGltZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsUmVtYWluVGltZTIubm9kZS5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFNjb3JlLm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0U2NvcmUgPSByZXMuZGljZTEgKyByZXMuZGljZTIgKyByZXMuZGljZTM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQmV0dGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWNlMS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY2UxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJEaWNlc1tyZXMuZGljZTFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWNlMi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY2UyLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJEaWNlc1tyZXMuZGljZTJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWNlMy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY2UzLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJEaWNlc1tyZXMuZGljZTNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxSZW1haW5UaW1lLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFJlbWFpblRpbWUyLm5vZGUucGFyZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFJlbWFpblRpbWUyLnN0cmluZyA9IFwiMDA6XCIgKyAocmVzLnJlbWFpblRpbWUgPCAxMCA/IFwiMFwiICsgcmVzLnJlbWFpblRpbWUgOiBcIlwiICsgcmVzLnJlbWFpblRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWNlQW5pbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxUb3RhbEJldFRhaSwgcmVzLnBvdFRhaSwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxUb3RhbEJldFhpdSwgcmVzLnBvdFhpdSwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZXRlZFRhaSA9IHJlcy5iZXRUYWk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsQmV0ZWRUYWkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKHRoaXMuYmV0ZWRUYWkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJldGVkWGl1ID0gcmVzLmJldFhpdTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxCZXRlZFhpdS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIodGhpcy5iZXRlZFhpdSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmZXJlbmNlSWQgPSByZXMucmVmZXJlbmNlSWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsU2Vzc2lvbi5zdHJpbmcgPSBcIiNcIiArIHJlcy5yZWZlcmVuY2VJZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1haW5UaW1lID0gcmVzLnJlbWFpblRpbWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlVQREFURV9USU1FOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVVcGRhdGVUaW1lKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmJldHRpbmdTdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0JldHRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxSZW1haW5UaW1lLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsUmVtYWluVGltZS5zdHJpbmcgPSByZXMucmVtYWluVGltZSA8IDEwID8gXCIwXCIgKyByZXMucmVtYWluVGltZSA6IFwiXCIgKyByZXMucmVtYWluVGltZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsUmVtYWluVGltZTIubm9kZS5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFNjb3JlLm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0JldHRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsUmVtYWluVGltZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxSZW1haW5UaW1lMi5ub2RlLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxSZW1haW5UaW1lMi5zdHJpbmcgPSBcIjAwOlwiICsgKHJlcy5yZW1haW5UaW1lIDwgMTAgPyBcIjBcIiArIHJlcy5yZW1haW5UaW1lIDogXCJcIiArIHJlcy5yZW1haW5UaW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGF5b3V0QmV0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxCZXRUYWkuc3RyaW5nID0gXCLEkOG6tlRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsQmV0WGl1LnN0cmluZyA9IFwixJDhurZUXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnJlbWFpblRpbWUgPCAxNSAmJiB0aGlzLmlzTmFuICYmICF0aGlzLmlzT3BlbkJvd2wpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvd2wuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93V2luQ2FzaCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNPcGVuQm93bCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxUb3RhbEJldFRhaSwgcmVzLnBvdFRhaSwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxUb3RhbEJldFhpdSwgcmVzLnBvdFhpdSwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxVc2VyVGFpLnN0cmluZyA9IFwiKFwiICsgVXRpbHMuZm9ybWF0TnVtYmVyKHJlcy5udW1CZXRUYWkpICsgXCIpXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsVXNlclhpdS5zdHJpbmcgPSBcIihcIiArIFV0aWxzLmZvcm1hdE51bWJlcihyZXMubnVtQmV0WGl1KSArIFwiKVwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5ESUNFU19SRVNVTFQ6IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZURpY2VzUmVzdWx0KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RTY29yZSA9IHJlcy5kaWNlMSArIHJlcy5kaWNlMiArIHJlcy5kaWNlMztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxSZW1haW5UaW1lLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGljZTEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwckRpY2VzW3Jlcy5kaWNlMV07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGljZTIuc3ByaXRlRnJhbWUgPSB0aGlzLnNwckRpY2VzW3Jlcy5kaWNlMl07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGljZTMuc3ByaXRlRnJhbWUgPSB0aGlzLnNwckRpY2VzW3Jlcy5kaWNlM107XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWNlQW5pbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY2VBbmltLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJzaGFrZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWNlQW5pbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljZTEubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWNlMi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY2UzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzTmFuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm93bC5zZXRQb3NpdGlvbih0aGlzLmJvd2xTdGFydFBvcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3dsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIDAuOTUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhpc3Rvcmllcy5sZW5ndGggPj0gMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpc3Rvcmllcy5zbGljZSgwLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpc3Rvcmllcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2Vzc2lvblwiOiB0aGlzLnJlZmVyZW5jZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaWNlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmRpY2UxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5kaWNlMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuZGljZTNcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlJFU1VMVDoge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlUmVzdWx0KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luID0gcmVzLmN1cnJlbnRNb25leTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0V2luQ2FzaCA9IHJlcy50b3RhbE1vbmV5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYm93bC5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMudG90YWxNb25leSA+IDApIHRoaXMuc2hvd1dpbkNhc2goKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5ORVdfR0FNRToge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlTmV3R2FtZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWNlQW5pbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWNlMS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY2UyLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGljZTMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxUb3RhbEJldFRhaS5zdHJpbmcgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxUb3RhbEJldFhpdS5zdHJpbmcgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxCZXRlZFRhaS5zdHJpbmcgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxCZXRlZFhpdS5zdHJpbmcgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxVc2VyVGFpLnN0cmluZyA9IFwiKDApXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsVXNlclhpdS5zdHJpbmcgPSBcIigwKVwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZmVyZW5jZUlkID0gcmVzLnJlZmVyZW5jZUlkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFNlc3Npb24uc3RyaW5nID0gXCIjXCIgKyByZXMucmVmZXJlbmNlSWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmV0aW5nVmFsdWUgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZXRpbmdEb29yID0gQmV0RG9vci5Ob25lO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJldGVkVGFpID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZXRlZFhpdSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNPcGVuQm93bCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RXaW5DYXNoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wV2luKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkhJU1RPUklFUzoge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlSGlzdG9yaWVzKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGlzID0gcmVzLmRhdGEuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaXN0b3JpZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXNzaW9uXCI6IHRoaXMucmVmZXJlbmNlSWQgLSBoaXMubGVuZ3RoIC8gMyArIHBhcnNlSW50KFwiXCIgKyAoKGkgKyAxKSAvIDMpKSArICh0aGlzLmlzQmV0dGluZyA/IDAgOiAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpY2VzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoaGlzW2ldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoaGlzWysraV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChoaXNbKytpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUJ0bkhpc3RvcmllcygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5MT0dfQ0hBVDoge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlTG9nQ2hhdChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtc2dzID0gSlNPTi5wYXJzZShyZXMubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbXNncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5lbENoYXQuYWRkTWVzc2FnZShtc2dzW2ldW1widVwiXSwgbXNnc1tpXVtcIm1cIl0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFuZWxDaGF0LnNjcm9sbFRvQm90dG9tKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlNFTkRfQ0hBVDoge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlU2VuZENoYXQoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5lbENoYXQuYWRkTWVzc2FnZShyZXMubmlja25hbWUsIHJlcy5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUb2FzdChcIkLhuqFuIGtow7RuZyBjw7MgcXV54buBbiBDaGF0IVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUb2FzdChcIlThuqFtIHRo4budaSBi4bqhbiBi4buLIGPhuqVtIENoYXQhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KFwiTuG7mWkgZHVuZyBjaGF0IHF1w6EgZMOgaS5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KFwiQuG6oW4ga2jDtG5nIHRo4buDIGNoYXQgdsOgbyBsw7pjIG7DoHkuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5CRVQ6IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZUJldChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZXMucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmJldGluZ0Rvb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBCZXREb29yLlRhaTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmV0ZWRUYWkgKz0gdGhpcy5iZXRpbmdWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsQmV0ZWRUYWkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKHRoaXMuYmV0ZWRUYWkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQmV0RG9vci5YaXU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJldGVkWGl1ICs9IHRoaXMuYmV0aW5nVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibEJldGVkWGl1LnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcih0aGlzLmJldGVkWGl1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW4gPSByZXMuY3VycmVudE1vbmV5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJldGluZ1ZhbHVlID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoXCLEkOG6t3QgY8aw4bujYyB0aMOgbmggY8O0bmcuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmV0aW5nVmFsdWUgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUb2FzdChcIkjhur90IHRo4budaSBnaWFuIGPGsOG7o2MuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmV0aW5nVmFsdWUgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUb2FzdChcIlPhu5EgZMawIGtow7RuZyDEkeG7pyB2dWkgbMOybmcgbuG6oXAgdGjDqm0uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmV0aW5nVmFsdWUgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUb2FzdChcIlPhu5EgdGnhu4FuIGPGsOG7o2Mga2jDtG5nIGjhu6NwIGzhu4cuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJldGluZ1ZhbHVlID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoXCLEkOG6t3QgY8aw4bujYyBraMO0bmcgdGjDoG5oIGPDtG5nLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKGlucGFja2V0LmdldENtZElkKCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idXR0b25zQmV0MS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJ0biA9IHRoaXMuYnV0dG9uc0JldDFbaV07XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmxpc3RCZXRzW2ldO1xuICAgICAgICAgICAgbGV0IHN0clZhbHVlID0gdmFsdWUgKyBcIlwiO1xuICAgICAgICAgICAgaWYgKHZhbHVlID49IDEwMDAwMDApIHtcbiAgICAgICAgICAgICAgICBzdHJWYWx1ZSA9ICh2YWx1ZSAvIDEwMDAwMDApICsgXCJNXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID49IDEwMDApIHtcbiAgICAgICAgICAgICAgICBzdHJWYWx1ZSA9ICh2YWx1ZSAvIDEwMDApICsgXCJLXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidG4uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nID0gc3RyVmFsdWU7XG4gICAgICAgICAgICBidG4ubm9kZS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iZXRpbmdEb29yID09PSBCZXREb29yLk5vbmUpIHJldHVybjtcbiAgICAgICAgICAgICAgICBsZXQgbGJsQmV0ID0gdGhpcy5iZXRpbmdEb29yID09PSBCZXREb29yLlRhaSA/IHRoaXMubGJsQmV0VGFpIDogdGhpcy5sYmxCZXRYaXU7XG4gICAgICAgICAgICAgICAgbGV0IG51bWJlciA9IFV0aWxzLnN0cmluZ1RvSW50KGxibEJldC5zdHJpbmcpICsgdmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKG51bWJlciA+IHRoaXMubWF4QmV0VmFsdWUpIG51bWJlciA9IHRoaXMubWF4QmV0VmFsdWU7XG4gICAgICAgICAgICAgICAgbGJsQmV0LnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihudW1iZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJ1dHRvbnNCZXQyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYnRuID0gdGhpcy5idXR0b25zQmV0MltpXTtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGJ0bi5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5zdHJpbmc7XG4gICAgICAgICAgICBidG4ubm9kZS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iZXRpbmdEb29yID09PSBCZXREb29yLk5vbmUpIHJldHVybjtcbiAgICAgICAgICAgICAgICBsZXQgbGJsQmV0ID0gdGhpcy5iZXRpbmdEb29yID09PSBCZXREb29yLlRhaSA/IHRoaXMubGJsQmV0VGFpIDogdGhpcy5sYmxCZXRYaXU7XG4gICAgICAgICAgICAgICAgbGV0IG51bWJlciA9IFV0aWxzLnN0cmluZ1RvSW50KGxibEJldC5zdHJpbmcgKyB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKG51bWJlciA+IHRoaXMubWF4QmV0VmFsdWUpIG51bWJlciA9IHRoaXMubWF4QmV0VmFsdWU7XG4gICAgICAgICAgICAgICAgbGJsQmV0LnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihudW1iZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJvd2wub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB7XG4gICAgICAgICAgICB2YXIgcG9zID0gdGhpcy5ib3dsLnBvc2l0aW9uO1xuICAgICAgICAgICAgcG9zLnggKz0gZXZlbnQuZ2V0RGVsdGFYKCk7XG4gICAgICAgICAgICBwb3MueSArPSBldmVudC5nZXREZWx0YVkoKTtcbiAgICAgICAgICAgIHRoaXMuYm93bC5wb3NpdGlvbiA9IHBvcztcblxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gVXRpbHMudjJEaXN0YW5jZShuZXcgY2MuVmVjMihwb3MueCxwb3MueSksIHRoaXMuYm93bFN0YXJ0UG9zKTtcbiAgICAgICAgICAgIC8vIGNjLmxvZyhkaXN0YW5jZSk7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGlzdGFuY2UpID4gMTAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3dsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNPcGVuQm93bCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93V2luQ2FzaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLmxheW91dEJldC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYmxUb2FzdC5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYmxXaW5DYXNoLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGF5b3V0QmV0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRpY2VBbmltLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJvd2wuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGljZTEubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaWNlMi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRpY2UzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIFRYMk5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZFNjcmliZSgpKTtcbiAgICAgICAgdGhpcy5zaG93Q2hhdCgpO1xuICAgIH1cblxuICAgIHNob3dDaGF0KCkge1xuICAgICAgICB0aGlzLnBhbmVsQ2hhdCA9IHRoaXMubm9kZVBhbmVsQ2hhdC5nZXRDb21wb25lbnQoUGFuZWxDaGF0KTtcbiAgICAgICAgdGhpcy5wYW5lbENoYXQuc2hvdyh0cnVlKTtcbiAgICB9XG5cbiAgICBkaXNtaXNzKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9wdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnBhbmVsQ2hhdCAhPSBudWxsKSB0aGlzLnBhbmVsQ2hhdC5zaG93KGZhbHNlKTtcbiAgICAgICAgVFgyTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kVW5TY3JpYmUoKSk7XG4gICAgfVxuXG4gICAgYWN0Q2xvc2UoKSB7XG4gICAgICAgIFRhaVhpdURvdWJsZUNvbnRyb2xsZXIuaW5zdGFuY2UuZGlzbWlzcygpO1xuICAgIH1cblxuICAgIGFjdENoYXQoKSB7XG4gICAgICAgIHRoaXMucGFuZWxDaGF0LnNob3coIXRoaXMucGFuZWxDaGF0Lm5vZGUuYWN0aXZlKTtcbiAgICB9XG5cbiAgICBhY3RCZXRUYWkoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0JldHRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KFwiQ2jGsGEgxJHhur9uIHRo4budaSBnaWFuIMSR4bq3dCBjxrDhu6NjLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5iZXRpbmdWYWx1ZSA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUb2FzdChcIkLhuqFuIHRoYW8gdMOhYyBxdcOhIG5oYW5oLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5iZXRlZFhpdSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KFwiQuG6oW4ga2jDtG5nIHRo4buDIMSR4bq3dCAyIGPhu61hLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJldGluZ0Rvb3IgPSBCZXREb29yLlRhaTtcbiAgICAgICAgdGhpcy5sYmxCZXRUYWkuc3RyaW5nID0gXCIwXCI7XG4gICAgICAgIHRoaXMubGJsQmV0WGl1LnN0cmluZyA9IFwixJDhurZUXCI7XG4gICAgICAgIHRoaXMubGF5b3V0QmV0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubGF5b3V0QmV0MS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxheW91dEJldDIuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYWN0QmV0WGl1KCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNCZXR0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUb2FzdChcIkNoxrBhIMSR4bq/biB0aOG7nWkgZ2lhbiDEkeG6t3QgY8aw4bujYy5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYmV0aW5nVmFsdWUgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoXCJC4bqhbiB0aGFvIHTDoWMgcXXDoSBuaGFuaC5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYmV0ZWRUYWkgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUb2FzdChcIkLhuqFuIGtow7RuZyB0aOG7gyDEkeG6t3QgMiBj4butYS5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iZXRpbmdEb29yID0gQmV0RG9vci5YaXU7XG4gICAgICAgIHRoaXMubGJsQmV0WGl1LnN0cmluZyA9IFwiMFwiO1xuICAgICAgICB0aGlzLmxibEJldFRhaS5zdHJpbmcgPSBcIsSQ4bq2VFwiO1xuICAgICAgICB0aGlzLmxheW91dEJldC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxheW91dEJldDEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sYXlvdXRCZXQyLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGFjdE90aGVyTnVtYmVyKCkge1xuICAgICAgICB0aGlzLmxheW91dEJldDEuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGF5b3V0QmV0Mi5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIGFjdEFncmVlKCkge1xuICAgICAgICBpZiAodGhpcy5iZXRpbmdWYWx1ZSA+PSAwIHx8ICF0aGlzLmNhbkJldCkge1xuICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoXCJC4bqhbiB0aGFvIHTDoWMgcXXDoSBuaGFuaC5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYmV0aW5nRG9vciA9PT0gQmV0RG9vci5Ob25lKSByZXR1cm47XG4gICAgICAgIHZhciBsYmxCZXQgPSB0aGlzLmJldGluZ0Rvb3IgPT09IEJldERvb3IuVGFpID8gdGhpcy5sYmxCZXRUYWkgOiB0aGlzLmxibEJldFhpdTtcbiAgICAgICAgdGhpcy5iZXRpbmdWYWx1ZSA9IFV0aWxzLnN0cmluZ1RvSW50KGxibEJldC5zdHJpbmcpO1xuICAgICAgICB0aGlzLmJldGluZ0Rvb3IgPSB0aGlzLmJldGluZ0Rvb3I7XG4gICAgICAgIFRYMk5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZEJldCh0aGlzLnJlZmVyZW5jZUlkLCB0aGlzLmJldGluZ1ZhbHVlLCB0aGlzLmJldGluZ0Rvb3IgPT0gQmV0RG9vci5UYWkgPyAxIDogMCwgdGhpcy5yZW1haW5UaW1lKSk7XG4gICAgICAgIGxibEJldC5zdHJpbmcgPSBcIjBcIjtcblxuICAgICAgICB0aGlzLmNhbkJldCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmNhbkJldCA9IHRydWU7XG4gICAgICAgIH0sIDEpO1xuICAgIH1cblxuICAgIGFjdENhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5sYmxCZXRYaXUuc3RyaW5nID0gXCLEkOG6tlRcIjtcbiAgICAgICAgdGhpcy5sYmxCZXRUYWkuc3RyaW5nID0gXCLEkOG6tlRcIjtcbiAgICAgICAgdGhpcy5iZXRpbmdEb29yID0gQmV0RG9vci5Ob25lO1xuICAgICAgICB0aGlzLmxheW91dEJldC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBhY3RCdG5HYXBEb2koKSB7XG4gICAgICAgIC8vICBjYy5sb2coXCJhY3RCdG5HYXBEb2k6XCIrQ29uZmlncy5Mb2dpbi5Db2luK1wiOlwiK3RoaXMuYmV0aW5nRG9vcik7XG4gICAgICAgIGlmICh0aGlzLmJldGluZ0Rvb3IgPT09IEJldERvb3IuTm9uZSkgcmV0dXJuO1xuICAgICAgICBsZXQgbGJsQmV0ID0gdGhpcy5iZXRpbmdEb29yID09PSBCZXREb29yLlRhaSA/IHRoaXMubGJsQmV0VGFpIDogdGhpcy5sYmxCZXRYaXU7XG4gICAgICAgXG4gICAgICAgIGxldCBudW1iZXIgPSBVdGlscy5zdHJpbmdUb0ludChsYmxCZXQuc3RyaW5nKSArIENvbmZpZ3MuTG9naW4uQ29pbjtcbiAgICAgICAgaWYgKG51bWJlciA+IHRoaXMubWF4QmV0VmFsdWUpIG51bWJlciA9IHRoaXMubWF4QmV0VmFsdWU7XG4gICAgICAgIGxibEJldC5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIobnVtYmVyKTtcblxuICAgIH1cblxuICAgIGFjdEJ0bkRlbGV0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYmV0aW5nRG9vciA9PT0gQmV0RG9vci5Ob25lKSByZXR1cm47XG4gICAgICAgIHZhciBsYmxCZXQgPSB0aGlzLmJldGluZ0Rvb3IgPT09IEJldERvb3IuVGFpID8gdGhpcy5sYmxCZXRUYWkgOiB0aGlzLmxibEJldFhpdTtcbiAgICAgICAgdmFyIG51bWJlciA9IFwiXCIgKyBVdGlscy5zdHJpbmdUb0ludChsYmxCZXQuc3RyaW5nKTtcbiAgICAgICAgbnVtYmVyID0gbnVtYmVyLnN1YnN0cmluZygwLCBudW1iZXIubGVuZ3RoIC0gMSk7XG4gICAgICAgIG51bWJlciA9IFV0aWxzLmZvcm1hdE51bWJlcihVdGlscy5zdHJpbmdUb0ludChudW1iZXIpKTtcbiAgICAgICAgbGJsQmV0LnN0cmluZyA9IG51bWJlcjtcbiAgICB9XG5cbiAgICBhY3RCdG4wMDAoKSB7XG4gICAgICAgIGlmICh0aGlzLmJldGluZ0Rvb3IgPT09IEJldERvb3IuTm9uZSkgcmV0dXJuO1xuICAgICAgICB2YXIgbGJsQmV0ID0gdGhpcy5iZXRpbmdEb29yID09PSBCZXREb29yLlRhaSA/IHRoaXMubGJsQmV0VGFpIDogdGhpcy5sYmxCZXRYaXU7XG4gICAgICAgIHZhciBudW1iZXIgPSBVdGlscy5zdHJpbmdUb0ludChsYmxCZXQuc3RyaW5nICsgXCIwMDBcIik7XG4gICAgICAgIGlmIChudW1iZXIgPiB0aGlzLm1heEJldFZhbHVlKSBudW1iZXIgPSB0aGlzLm1heEJldFZhbHVlO1xuICAgICAgICBsYmxCZXQuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKG51bWJlcik7XG4gICAgfVxuXG4gICAgYWN0TmFuKCkge1xuICAgICAgICB0aGlzLmlzTmFuID0gIXRoaXMuaXNOYW47XG4gICAgICAgIHRoaXMuYnRuTmFuLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5pc05hbiA/IHRoaXMuc3ByRnJhbWVCdG5OYW4yIDogdGhpcy5zcHJGcmFtZUJ0bk5hbjtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dSZXN1bHQoKSB7XG4gICAgICAgIHRoaXMubGJsU2NvcmUubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sYmxTY29yZS5zdHJpbmcgPSBcIlwiICsgdGhpcy5sYXN0U2NvcmU7XG4gICAgICAgIGlmICh0aGlzLmxhc3RTY29yZSA+PSAxMSkge1xuICAgICAgICAgICAgdGhpcy50YWkucnVuQWN0aW9uKGNjLnJlcGVhdEZvcmV2ZXIoY2Muc3Bhd24oXG4gICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoY2Muc2NhbGVUbygwLjMsIDEuMyksIGNjLnNjYWxlVG8oMC4zLCAxKSksXG4gICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoY2MudGludFRvKDAuMywgMjU1LCAyNTUsIDApLCBjYy50aW50VG8oMC4zLCAyNTUsIDI1NSwgMjU1KSlcbiAgICAgICAgICAgICkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMueGl1LnJ1bkFjdGlvbihjYy5yZXBlYXRGb3JldmVyKGNjLnNwYXduKFxuICAgICAgICAgICAgICAgIGNjLnNlcXVlbmNlKGNjLnNjYWxlVG8oMC4zLCAxLjMpLCBjYy5zY2FsZVRvKDAuMywgMSkpLFxuICAgICAgICAgICAgICAgIGNjLnNlcXVlbmNlKGNjLnRpbnRUbygwLjMsIDI1NSwgMjU1LCAwKSwgY2MudGludFRvKDAuMywgMjU1LCAyNTUsIDI1NSkpXG4gICAgICAgICAgICApKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVCdG5IaXN0b3JpZXMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0b3BXaW4oKSB7XG4gICAgICAgIHRoaXMudGFpLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMudGFpLnJ1bkFjdGlvbihjYy5zcGF3bihjYy5zY2FsZVRvKDAuMywgMSksIGNjLnRpbnRUbygwLjMsIDI1NSwgMjU1LCAyNTUpKSk7XG5cbiAgICAgICAgdGhpcy54aXUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy54aXUucnVuQWN0aW9uKGNjLnNwYXduKGNjLnNjYWxlVG8oMC4zLCAxKSwgY2MudGludFRvKDAuMywgMjU1LCAyNTUsIDI1NSkpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dUb2FzdChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5sYmxUb2FzdC5zdHJpbmcgPSBtZXNzYWdlO1xuICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy5sYmxUb2FzdC5ub2RlLnBhcmVudDtcbiAgICAgICAgcGFyZW50LnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHBhcmVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBwYXJlbnQub3BhY2l0eSA9IDA7XG4gICAgICAgIHBhcmVudC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZmFkZUluKDAuMSksIGNjLmRlbGF5VGltZSgyKSwgY2MuZmFkZU91dCgwLjIpLCBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICBwYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaG93V2luQ2FzaCgpIHtcbiAgICAgICAgaWYgKHRoaXMubGFzdFdpbkNhc2ggPD0gMCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmxibFdpbkNhc2gubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aGlzLmxibFdpbkNhc2gubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxibFdpbkNhc2gubm9kZS5zY2FsZSA9IDA7XG4gICAgICAgIHRoaXMubGJsV2luQ2FzaC5ub2RlLnNldFBvc2l0aW9uKGNjLlZlYzIuWkVSTyk7XG4gICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsV2luQ2FzaCwgdGhpcy5sYXN0V2luQ2FzaCwgMC41LCAobikgPT4geyByZXR1cm4gXCIrXCIgKyBuIH0pO1xuICAgICAgICB0aGlzLmxibFdpbkNhc2gubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5zY2FsZVRvKDAuNSwgMSksXG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoMiksXG4gICAgICAgICAgICBjYy5tb3ZlQnkoMSwgY2MudjIoMCwgNjApKSxcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxibFdpbkNhc2gubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICkpO1xuICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuICAgIH1cblxuICAgIHVwZGF0ZUJ0bkhpc3RvcmllcygpIHtcbiAgICAgICAgbGV0IGhpc3RvcmllcyA9IHRoaXMuaGlzdG9yaWVzLnNsaWNlKCk7XG4gICAgICAgIGlmIChoaXN0b3JpZXMubGVuZ3RoID4gdGhpcy5idG5IaXN0b3JpZXMuY2hpbGRyZW5Db3VudCkge1xuICAgICAgICAgICAgaGlzdG9yaWVzLnNwbGljZSgwLCBoaXN0b3JpZXMubGVuZ3RoIC0gdGhpcy5idG5IaXN0b3JpZXMuY2hpbGRyZW5Db3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGlkeCA9IGhpc3Rvcmllcy5sZW5ndGggLSAxO1xuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5idG5IaXN0b3JpZXMuY2hpbGRyZW5Db3VudCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgX2lkeCA9IGlkeDtcbiAgICAgICAgICAgICAgICB2YXIgc2NvcmUgPSBoaXN0b3JpZXNbaWR4XVtcImRpY2VzXCJdWzBdICsgaGlzdG9yaWVzW2lkeF1bXCJkaWNlc1wiXVsxXSArIGhpc3Rvcmllc1tpZHhdW1wiZGljZXNcIl1bMl07XG4gICAgICAgICAgICAgICAgdGhpcy5idG5IaXN0b3JpZXMuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzY29yZSA+PSAxMSA/IHRoaXMuc3ByRnJhbWVUYWkgOiB0aGlzLnNwckZyYW1lWGl1O1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuSGlzdG9yaWVzLmNoaWxkcmVuW2ldLm9mZihcImNsaWNrXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuSGlzdG9yaWVzLmNoaWxkcmVuW2ldLm9uKFwiY2xpY2tcIiwgKGUsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cERldGFpbEhpc3Rvcnkuc2hvd0RldGFpbChoaXN0b3JpZXNbX2lkeF1bXCJzZXNzaW9uXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyh0aGlzLmhpc3Rvcmllc1tfaWR4XSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5IaXN0b3JpZXMuY2hpbGRyZW5baV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5IaXN0b3JpZXMuY2hpbGRyZW5baV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZHgtLTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbmRDaGF0KG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIV90aGlzLmlzQ2FuQ2hhdCkge1xuICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoXCJC4bqhbiB0aGFvIHTDoWMgcXXDoSBuaGFuaC5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMuaXNDYW5DaGF0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmlzQ2FuQ2hhdCA9IHRydWU7XG4gICAgICAgIH0sIDEpO1xuICAgICAgICB2YXIgcmVxID0gbmV3IGNtZC5TZW5kQ2hhdCh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQobWVzc2FnZSkpKTtcbiAgICAgICAgVFgyTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQocmVxKTtcbiAgICB9XG59Il19