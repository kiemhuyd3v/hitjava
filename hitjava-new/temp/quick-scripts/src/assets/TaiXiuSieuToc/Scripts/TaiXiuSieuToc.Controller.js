"use strict";
cc._RF.push(module, '7a3a26zkstIOosxoiK6WsKN', 'TaiXiuSieuToc.Controller');
// TaiXiuSieuToc/Scripts/TaiXiuSieuToc.Controller.ts

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
var Configs_1 = require("../../Loading/src/Configs");
var MiniGame_1 = require("../../Lobby/LobbyScript/MiniGame");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var TaiXiuSieuToc_NetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/TaiXiuSieuToc.NetworkClient");
var TaiXiuSieuToc_Cmd_1 = require("./TaiXiuSieuToc.Cmd");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TW = cc.tween;
var STATE_GAME = {
    BET: 1,
    SHAKE: 2,
    RESULT: 3,
    PREPARE_RESULT: 4
};
var ANIM_STATE = {
    DRAGON_NORMAL: "animation_dragon_only",
    DRAGON_X2SPEED: "animation_dragon_only_x2speed",
    TABLE_NODRAGON: "animation_table_nodragon",
    TABLE_DRAGON: "animation_table_dragon",
};
var TaiXiuSieuTocController = /** @class */ (function (_super) {
    __extends(TaiXiuSieuTocController, _super);
    function TaiXiuSieuTocController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scrollChat = null;
        _this.chatNhanh = null;
        _this.contentChatNhanh = null;
        _this.lbTotalTai = null;
        _this.lbTotalXiu = null;
        _this.lbTotalBetTai = null;
        _this.lbTotalBetXiu = null;
        _this.lbBetXiu = null;
        _this.lbBetTai = null;
        _this.lbTimeCountDown = null;
        _this.lbSession = null;
        _this.lbTotalUserTai = null;
        _this.lbTotalUserXiu = null;
        _this.lbWin = null;
        _this.lbScore = null;
        _this.listFont = [];
        _this.nodeBtnBet = null;
        _this.nodeChat = null;
        _this.nodeTxtTai = null;
        _this.nodeTxtXiu = null;
        _this.sprBtnBetXiu = null;
        _this.sprBtnBetTai = null;
        _this.bgGame = null;
        _this.alertToast = null;
        _this.nodeHistoryShort = null;
        _this.popupContainer = null;
        _this.bg_Score = null;
        _this.bgLight = null;
        _this.nodeBat = null;
        _this.bgLighting = null;
        _this.bgTime = null;
        _this.edbChat = null;
        _this.scrChat = null;
        _this.dice1 = null;
        _this.dice2 = null;
        _this.dice3 = null;
        _this.dragon = null;
        _this.table = null;
        _this.sprDots = [];
        _this.timeInBg = 0;
        _this.currentGate = -1;
        _this.totalBet = 0;
        _this.currentBet = 0;
        _this.result = [];
        _this.totalResult = 0;
        _this.session = 0;
        _this.stateGame = 0;
        _this.isConnected = false;
        _this.listChatHistory = [];
        _this.listTimer = [];
        _this.historySession = [];
        _this.historySoiCau = [];
        _this.historyShort = [];
        _this.popups = [];
        _this.gameSubscribeId = "";
        _this.currentBtnBet = null;
        _this.timeConfirmBet = 1;
        _this.lastBetAmount = 0;
        _this.popupHonor = null;
        _this.popupHistory = null;
        _this.popupGuide = null;
        _this.popupSoiCau = null;
        _this.popupDetailSession = null;
        return _this;
        // update (dt) {}
    }
    TaiXiuSieuTocController_1 = TaiXiuSieuTocController;
    // LIFE-CYCLE CALLBACKS:
    TaiXiuSieuTocController.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        // this.bgGame.on(cc.Node.EventType.TOUCH_MOVE, (touch) => {
        //     this.node.position = this.node.position.add(touch.getDelta());
        // })
        this.nodeChat.x = cc.winSize.width;
        this.nodeChat.active = false;
        TaiXiuSieuTocController_1.instance = this;
        TaiXiuSieuToc_NetworkClient_1.default.TaiXiuSieuTocController = this;
        TW(this.bgLighting).repeatForever(TW().sequence(TW().to(0.5, { opacity: 0 }), TW().to(0.5, { opacity: 255 }))).start();
        this.nodeBtnBet.active = false;
        var self = this;
        var _loop_1 = function () {
            var node = this_1.contentChatNhanh.children[i];
            node.on('click', function () {
                self.onClickSendChatNhanh(node.children[0].getComponent(cc.Label).string);
                self.scrollChat.active = true;
                self.chatNhanh.active = false;
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.contentChatNhanh.childrenCount; i++) {
            _loop_1();
        }
    };
    TaiXiuSieuTocController.prototype.toggleChatNhanh = function () {
        if (this.chatNhanh.active == false) {
            this.chatNhanh.active = true;
            this.scrollChat.active = false;
        }
        else {
            this.chatNhanh.active = false;
            this.scrollChat.active = true;
        }
    };
    TaiXiuSieuTocController.prototype.onEnable = function () {
        this.resetView();
        this.stateGame = 0;
        if (this.isConnected) {
            TaiXiuSieuToc_NetworkClient_1.default.getInstance().getChatHistory();
        }
    };
    TaiXiuSieuTocController.prototype.start = function () {
        var _this = this;
        this.setupTimeRunInBg();
        // this.loginGame();
        if (TaiXiuSieuToc_NetworkClient_1.default.getInstance().isConnected == false) {
            TaiXiuSieuToc_NetworkClient_1.default.getInstance().connect();
        }
        TaiXiuSieuToc_NetworkClient_1.default.getInstance().addListener(function (data) {
            if (_this.node.active == false) {
                return;
            }
            if (_this.isConnected == false) {
                _this.isConnected = true;
                TaiXiuSieuToc_NetworkClient_1.default.getInstance().subscribe(TaiXiuSieuToc_Cmd_1.default.API.USER);
                TaiXiuSieuToc_NetworkClient_1.default.getInstance().subscribe(TaiXiuSieuToc_Cmd_1.default.API.DISCONNECT);
                setTimeout(function () {
                    TaiXiuSieuToc_NetworkClient_1.default.getInstance().getChatHistory();
                }, 500);
                TaiXiuSieuToc_NetworkClient_1.default.getInstance().getHistorySession();
            }
            var res = JSON.parse(data['body']);
            switch (res['cmd']) {
                case TaiXiuSieuToc_Cmd_1.default.Code.CMD_50S: { //time cuoc,time nay chay tu 47->33
                    _this.session = res.id;
                    if (_this.lbTimeCountDown.node.active == false) {
                        _this.lbTimeCountDown.node.active = true;
                        _this.lbSession.string = "#" + _this.session;
                        _this.nodeBat.active = true;
                        _this.nodeBat.y = 20.193;
                    }
                    var timeCd = res.cd;
                    var totalBetTai = res.at;
                    var totalBetXiu = res.ax;
                    _this.result = [];
                    Tween_1.default.numberTo(_this.lbTotalTai, totalBetTai, 0.3);
                    Tween_1.default.numberTo(_this.lbTotalXiu, totalBetXiu, 0.3);
                    _this.lbTimeCountDown.string = (timeCd - 33) >= 10 ? (timeCd - 33).toString() : "0" + (timeCd - 33);
                    _this.lbTotalUserTai.string = res.ut;
                    _this.lbTotalUserXiu.string = res.ux;
                    if (_this.stateGame == 0 || _this.stateGame == STATE_GAME.RESULT) {
                        //  cc.log("chay vao day!");
                        _this.lbTimeCountDown.node.scale = 1.0;
                        _this.lbTimeCountDown.node.setPosition(cc.v2(-17.053, 37.656)); //toa do cua time cuoc
                        if (timeCd - 33 <= 5) {
                            _this.dragon.node.active = true;
                            _this.dragon.setAnimation(0, ANIM_STATE.DRAGON_X2SPEED, true);
                            _this.lbTimeCountDown.node.color = new cc.Color().fromHEX("#FF6A6A");
                        }
                        else {
                            _this.dragon.node.active = false;
                            _this.table.setAnimation(0, ANIM_STATE.TABLE_DRAGON, true);
                            _this.lbTimeCountDown.node.color = cc.Color.WHITE;
                        }
                    }
                    if (timeCd == 47) {
                        _this.showToast(App_1.default.instance.getTextLang('txt_bet_invite'));
                    }
                    if (timeCd == 33) {
                        _this.showToast(App_1.default.instance.getTextLang('txt_taixiu_finish'));
                    }
                    if (timeCd == 38) {
                        _this.dragon.node.active = true;
                        _this.dragon.setAnimation(0, ANIM_STATE.DRAGON_X2SPEED, true);
                        _this.table.setAnimation(0, ANIM_STATE.TABLE_NODRAGON, true);
                    }
                    if (timeCd < 36) {
                        _this.stateGame = STATE_GAME.PREPARE_RESULT;
                        if (_this.lbTimeCountDown.node.scale != 1) {
                            cc.Tween.stopAllByTarget(_this.lbTimeCountDown.node);
                            _this.lbTimeCountDown.node.scale = 1.0;
                            _this.lbTimeCountDown.node.setPosition(cc.v2(-2.745, 47));
                        }
                    }
                    else {
                        _this.stateGame = STATE_GAME.BET;
                    }
                    if (timeCd < 39) {
                        _this.lbTimeCountDown.node.color = new cc.Color().fromHEX("#FF6A6A");
                    }
                    else {
                        _this.lbTimeCountDown.node.color = cc.Color.WHITE;
                    }
                    _this.dice1.node.active = false;
                    _this.dice2.node.active = false;
                    _this.dice3.node.active = false;
                    break;
                }
                case TaiXiuSieuToc_Cmd_1.default.Code.CMD_51S: { //time xem ket quả,tra ve 1 lan trong 1 phien
                    _this.dragon.node.active = false;
                    _this.table.setAnimation(0, ANIM_STATE.TABLE_NODRAGON, true);
                    _this.session = res.id;
                    _this.lbSession.string = "#" + _this.session;
                    var timeCd = res.cd;
                    _this.lbTimeCountDown.string = timeCd;
                    _this.result = res.rs;
                    _this.historyShort.unshift(res.rs);
                    _this.historySoiCau.unshift({ session: _this.session, dices: res.rs });
                    _this.loadListHistoryShort();
                    _this.totalResult = _this.result[0] + _this.result[1] + _this.result[2];
                    _this.showResultWin(true);
                    if (_this.stateGame == STATE_GAME.BET || _this.stateGame == 0) {
                        _this.stateGame = STATE_GAME.RESULT;
                    }
                    _this.bgTime.active = true;
                    cc.Tween.stopAllByTarget(_this.lbTimeCountDown.node);
                    TW(_this.lbTimeCountDown.node).to(0.5, { scale: 0.25, x: _this.bgTime.x, y: _this.bgTime.y + 8 }, { easing: cc.easing.sineIn }).start();
                    TW(_this.lbTimeCountDown.node).tag(1);
                    break;
                }
                case TaiXiuSieuToc_Cmd_1.default.Code.CMD_14S: { // (cd <=5-----time xem kq,cd<=23---time tung xuc xac)
                    _this.session = res.id;
                    _this.lbSession.string = "#" + _this.session;
                    if (res.cd == 23) {
                        _this.shakeDice();
                    }
                    _this.result = res.rs;
                    _this.totalResult = _this.result[0] + _this.result[1] + _this.result[2];
                    if (res.cd <= 5) {
                        _this.lbTimeCountDown.node.color = new cc.Color().fromHEX("#FF6A6A");
                        _this.bgTime.active = true;
                        _this.lbTimeCountDown.node.active = true;
                        _this.lbTimeCountDown.node.scale = 0.25;
                        _this.lbTimeCountDown.node.setPosition(cc.v2(_this.bgTime.x, _this.bgTime.y + 8));
                        _this.lbTimeCountDown.string = "0" + res.cd;
                        _this.stateGame = STATE_GAME.RESULT;
                        _this.setDice();
                        _this.dragon.node.active = false;
                        _this.table.setAnimation(0, ANIM_STATE.TABLE_NODRAGON, true);
                        _this.nodeBat.active = false;
                    }
                    if (res.cd == 0) {
                        _this.resetView();
                    }
                    _this.lbTotalUserTai.string = Utils_1.default.formatNumber(res.ut);
                    _this.lbTotalUserXiu.string = Utils_1.default.formatNumber(res.ux);
                    _this.lbTotalTai.string = Utils_1.default.formatNumber(res.at);
                    _this.lbTotalXiu.string = Utils_1.default.formatNumber(res.ax);
                    break;
                }
                case TaiXiuSieuToc_Cmd_1.default.Code.CMD_BET: {
                    //  cc.log("CMD_BET:");
                    if (res.data != null && res.status == 0) {
                        _this.showToast(App_1.default.instance.getTextLang('txt_bet_success'));
                        _this.lastBetAmount = res.data.betamount;
                        _this.totalBet += res.data.betamount;
                        _this.currentBet = 0;
                        if (_this.currentGate == 1) {
                            Tween_1.default.numberTo(_this.lbTotalBetTai, _this.totalBet, 0.3);
                        }
                        else {
                            Tween_1.default.numberTo(_this.lbTotalBetXiu, _this.totalBet, 0.3);
                        }
                        _this.sprBtnBetTai.active = true;
                        _this.sprBtnBetXiu.active = true;
                        _this.lbBetTai.node.active = false;
                        _this.lbBetXiu.node.active = false;
                        Configs_1.default.Login.Coin -= res.data.betamount;
                        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                    }
                    else {
                        _this.showToast(App_1.default.instance.getTextLang('txt_bet_error2'));
                    }
                    break;
                }
                case TaiXiuSieuToc_Cmd_1.default.Code.CMD_CHAT_ALL: {
                    if (res.data.length > 0) {
                        _this.listChatHistory = res.data;
                        if (_this.listChatHistory.length > 15) {
                            _this.listChatHistory.splice(0, 15);
                        }
                        _this.initListChat();
                    }
                    break;
                }
                case TaiXiuSieuToc_Cmd_1.default.Code.CMD_CHAT: {
                    _this.listChatHistory.push(res);
                    if (_this.listChatHistory.length > 15) {
                        _this.listChatHistory.splice(0, 1);
                    }
                    _this.addChat(res.u, res.m, _this.listChatHistory.length - 1);
                    break;
                }
                case TaiXiuSieuToc_Cmd_1.default.Code.CMD_HISTORY: {
                    //  cc.log("CMD_HISTORY:");
                    if (res.data.length > 0) {
                        _this.historySession = res.data;
                        _this.historySession.forEach(function (item) {
                            if (item.result != null) {
                                _this.historyShort.push(item.result);
                                var data_1 = {};
                                data_1.session = item.id;
                                data_1.dices = JSON.parse(item.result);
                                _this.historySoiCau.push(data_1);
                            }
                            else {
                                //  cc.log("Null Result:", item);
                            }
                        });
                        _this.loadListHistoryShort();
                    }
                    break;
                }
                case TaiXiuSieuToc_Cmd_1.default.Code.CMD_TXRECORD_HISTORY: {
                    //  cc.log("CMD_TXRECORD_HISTORY:");
                    break;
                }
                case TaiXiuSieuToc_Cmd_1.default.Code.CMD_REFUND_USER: {
                    //  cc.log("CMD_REFUND_USER:");
                    break;
                }
                case TaiXiuSieuToc_Cmd_1.default.Code.CMD_WIN_USER: {
                    //  cc.log("CMD_WIN_USER :");
                    var amount = res.amount;
                    _this.lbWin.string = "+" + Utils_1.default.formatNumber(amount);
                    Configs_1.default.Login.Coin += amount;
                    BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                    _this.lbWin.node.active = true;
                    TW(_this.lbWin.node).set({ y: 300, scale: 3, opacity: 0, angle: -720 }).to(1.0, { y: 25, scale: 1.0, opacity: 255, angle: 0 }, { easing: cc.easing.sineIn }).delay(1.5).call(function () {
                        _this.lbWin.node.active = false;
                    }).start();
                    break;
                }
                case TaiXiuSieuToc_Cmd_1.default.Code.CMD_THONGKE_PHIEN: {
                    //  cc.log("CMD_THONGKE_PHIEN:");
                    //  cc.log("TXST:", JSON.stringify(res));
                    break;
                }
                case TaiXiuSieuToc_Cmd_1.default.Code.CMD_USER_BET: {
                    //  cc.log("CMD_USER_BET:");
                    break;
                }
                case TaiXiuSieuToc_Cmd_1.default.Code.CMD_TOP_HONOR: {
                    //  cc.log("CMD_TOP_HONOR:");
                    if (_this.popupHonor != null && _this.popupHonor.node.active) {
                        if (res.status == 0 && res.data != null)
                            _this.popupHonor.initData(res.data);
                    }
                    App_1.default.instance.showLoading(false);
                    break;
                }
                case TaiXiuSieuToc_Cmd_1.default.Code.CMD_DIS_TX: {
                    //  cc.log("CMD_DIS_TXST");
                    _this.dismiss();
                    break;
                }
            }
        }, this);
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_LOGOUT, function () {
            if (!_this.node.active)
                return;
            _this.dismiss();
        }, this);
    };
    TaiXiuSieuTocController.prototype.setupTimeRunInBg = function () {
        var _this = this;
        cc.game.on(cc.game.EVENT_HIDE, function () {
            _this.timeInBg = cc.sys.now();
        });
        cc.game.on(cc.game.EVENT_SHOW, function () {
            var timeNow = cc.sys.now();
            var timeHide = _this.timeInBg;
            cc.director.getActionManager().update((timeNow - timeHide) / 1000);
            cc.Tween.stopAllByTag(1);
            if ((timeNow - timeHide) / 1000 > 50) {
                _this.dismiss();
            }
        });
    };
    ;
    TaiXiuSieuTocController.prototype.show = function () {
        if (this.node.active) {
            this.reOrder();
            return;
        }
        App_1.default.instance.showBgMiniGame("TaiXiuSieuToc");
        _super.prototype.show.call(this);
    };
    TaiXiuSieuTocController.prototype.dismiss = function () {
        _super.prototype.dismiss.call(this);
        this.showNodeChat(false);
    };
    TaiXiuSieuTocController.prototype.onDestroy = function () {
        //  cc.log("Destroy TXST");
    };
    TaiXiuSieuTocController.prototype.resetView = function () {
        //  cc.log("reset view");
        this.showResultWin(false);
        this.bgLight.active = false;
        this.nodeBat.active = false;
        this.nodeBat.scale = 1;
        this.lbTimeCountDown.node.active = false;
        // this.nodeBtnBet.active = false;
        this.dragon.node.active = false;
        this.table.setAnimation(0, ANIM_STATE.TABLE_NODRAGON, true);
        this.lbTotalBetXiu.string =
            this.lbTotalBetTai.string =
                this.lbTotalBetXiu.string =
                    this.lbTotalXiu.string =
                        this.lbTotalTai.string =
                            this.lbTotalUserTai.string =
                                this.lbTotalUserXiu.string =
                                    this.lbBetTai.string =
                                        this.lbBetXiu.string = "0";
        this.sprBtnBetTai.active = true;
        this.sprBtnBetXiu.active = true;
        this.lbBetTai.node.active = false;
        this.lbBetXiu.node.active = false;
        this.lbScore.node.active = false;
        this.bg_Score.active = false;
        this.sprBtnBetTai.parent.getChildByName("boxBet").active = false;
        this.sprBtnBetXiu.parent.getChildByName("boxBet").active = false;
        this.totalBet = 0;
        this.currentGate = -1;
        this.nodeTxtTai.scale = 1.0;
        this.nodeTxtXiu.scale = 1.0;
        this.nodeTxtTai.angle = 0;
        this.nodeTxtXiu.angle = 0;
        this.lastBetAmount = 0;
        this.result = [];
        this.lbTimeCountDown.node.color = cc.Color.WHITE;
        this.lbTimeCountDown.node.scale = 1;
        this.lbTimeCountDown.node.active = false;
        this.lbTimeCountDown.node.setPosition(cc.v2(-2.745, 47));
        this.bgTime.active = false;
        if (this.currentBtnBet != null) {
            this.currentBtnBet.color = cc.Color.WHITE;
        }
        cc.Tween.stopAllByTag(1);
    };
    TaiXiuSieuTocController.prototype.shakeDice = function () {
        var _this = this;
        this.dice1.node.active = this.dice2.node.active = this.dice3.node.active = true;
        this.dice1.setAnimation(0, this.getAnimationDiceStart(Utils_1.default.randomRangeInt(1, 6)), false);
        this.dice2.setAnimation(0, this.getAnimationDiceStart(Utils_1.default.randomRangeInt(1, 6)), false);
        this.dice3.setAnimation(0, this.getAnimationDiceStart(Utils_1.default.randomRangeInt(1, 6)), false);
        // this.listTimer.push(timeOut1, timeOut2, timeOut3);
        cc.Tween.stopAllByTarget(this.dice1.node);
        cc.Tween.stopAllByTarget(this.dice2.node);
        cc.Tween.stopAllByTarget(this.dice3.node);
        TW(this.dice1.node).delay(1.5).to(0.5, { opacity: 0 }, { easing: cc.easing.sineIn }).start();
        TW(this.dice2.node).delay(1.5).to(0.5, { opacity: 0 }, { easing: cc.easing.sineIn }).start();
        TW(this.dice3.node).delay(1.5).to(0.5, { opacity: 0 }, { easing: cc.easing.sineIn }).start();
        this.nodeBat.y = 150;
        this.nodeBat.opacity = 0;
        cc.Tween.stopAllByTarget(this.nodeBat);
        this.nodeBat.active = true;
        TW(this.nodeBat).delay(1.5)
            .to(0.75, { y: 20.193, opacity: 255, scale: 1.0 }, { easing: cc.easing.sineOut })
            .call(function () {
            _this.table.setAnimation(0, ANIM_STATE.TABLE_DRAGON, true);
        })
            .start();
        TW(this.nodeBat).tag(1);
        TW(this.dice3.node).tag(1);
        TW(this.dice2.node).tag(1);
        TW(this.dice1.node).tag(1);
    };
    TaiXiuSieuTocController.prototype.setDice = function () {
        if (!this.dice1.node.active || this.dice1.node.opacity != 255) {
            cc.Tween.stopAllByTarget(this.nodeBat);
            TW(this.nodeBat).to(0.5, { y: 100, opacity: 0, scale: 1.2 }, { easing: cc.easing.sineOut }).start();
            TW(this.dice1.node).to(0.5, { opacity: 255 }, { easing: cc.easing.sineOut }).start();
            TW(this.dice2.node).to(0.5, { opacity: 255 }, { easing: cc.easing.sineOut }).start();
            TW(this.dice3.node).to(0.5, { opacity: 255 }, { easing: cc.easing.sineOut }).start();
            TW(this.dice1.node).tag(1);
            TW(this.dice3.node).tag(1);
            TW(this.dice2.node).tag(1);
            this.dice1.node.active = this.dice2.node.active = this.dice3.node.active = true;
            this.dice1.setAnimation(0, this.getAnimationDiceEnd(this.result[0]), false);
            this.dice2.setAnimation(0, this.getAnimationDiceEnd(this.result[1]), false);
            this.dice3.setAnimation(0, this.getAnimationDiceEnd(this.result[2]), false);
        }
    };
    TaiXiuSieuTocController.prototype.getAnimationDiceEnd = function (dice) {
        var anim = "";
        if (dice == 1)
            anim = "#1 END_F1";
        else if (dice == 2)
            anim = "#1 END_F2";
        else if (dice == 3)
            anim = "#1 END_F3";
        else if (dice == 4)
            anim = "#1 END_F4";
        else if (dice == 5)
            anim = "#1 END_F5";
        else if (dice == 6)
            anim = "#1 END_F6";
        return anim;
    };
    TaiXiuSieuTocController.prototype.getAnimationDiceStart = function (dice) {
        var anim = "";
        var listPrefix = ["#1", "#2", "#3"];
        var ranPre = listPrefix[0];
        if (dice == 1)
            anim = ranPre + " WHITE_F1";
        else if (dice == 2)
            anim = ranPre + " WHITE_F2";
        else if (dice == 3)
            anim = ranPre + " WHITE_F3";
        else if (dice == 4)
            anim = ranPre + " WHITE_F4";
        else if (dice == 5)
            anim = ranPre + " WHITE_F5";
        else if (dice == 6)
            anim = ranPre + " WHITE_F6";
        return anim;
    };
    TaiXiuSieuTocController.prototype.onClick = function () {
        this.loginGame();
    };
    TaiXiuSieuTocController.prototype.loginGame = function () {
    };
    TaiXiuSieuTocController.prototype.subcribeWS = function () {
        TaiXiuSieuToc_NetworkClient_1.default.getInstance().connect();
    };
    TaiXiuSieuTocController.prototype.onClickHonor = function () {
        var _this = this;
        if (this.popupHonor == null) {
            cc.assetManager.getBundle("TaiXiuSieuToc").load("Prefabs/PopupHonors", cc.Prefab, function (finish, total, item) {
            }, function (err1, prefab) {
                _this.popupHonor = cc.instantiate(prefab).getComponent("TaiXiuST.PopupHonors");
                _this.popupHonor.node.parent = _this.popupContainer;
                _this.popupHonor.node.active = true;
                _this.popupHonor.show();
                _this.popups.push(_this.popupHonor.node);
            });
        }
        else {
            this.popupHonor.show();
        }
    };
    TaiXiuSieuTocController.prototype.onClickHistory = function () {
        var _this = this;
        if (this.popupHistory == null) {
            cc.assetManager.getBundle("TaiXiuSieuToc").load("Prefabs/PopupHistory", cc.Prefab, function (finish, total, item) {
            }, function (err1, prefab) {
                _this.popupHistory = cc.instantiate(prefab).getComponent("TaiXiuST.PopupHistory");
                _this.popupHistory.node.parent = _this.popupContainer;
                _this.popupHistory.node.active = true;
                _this.popupHistory.show();
                _this.popups.push(_this.popupHistory.node);
            });
        }
        else {
            this.popupHistory.show();
        }
    };
    TaiXiuSieuTocController.prototype.onClickHistorySession = function () {
        var _this = this;
        if (this.popupDetailSession == null) {
            cc.assetManager.getBundle("TaiXiuSieuToc").load("Prefabs/PopupDetailHistory", cc.Prefab, function (finish, total, item) {
            }, function (err1, prefab) {
                _this.popupDetailSession = cc.instantiate(prefab).getComponent("TaiXiuST.PopupDetailHistory");
                _this.popupDetailSession.node.parent = _this.popupContainer;
                _this.popupDetailSession.showDetail(_this.session - 1);
                _this.popups.push(_this.popupDetailSession.node);
                App_1.default.instance.showLoading(false);
            });
        }
        else {
            this.popupDetailSession.showDetail(this.session - 1);
        }
    };
    TaiXiuSieuTocController.prototype.onClickSoiCau = function () {
        var _this = this;
        if (this.popupSoiCau == null) {
            cc.assetManager.getBundle("TaiXiuSieuToc").load("Prefabs/PopupSoiCau", cc.Prefab, function (finish, total, item) {
            }, function (err1, prefab) {
                _this.popupSoiCau = cc.instantiate(prefab).getComponent("TaiXiuST.PopupSoiCau");
                _this.popupSoiCau.node.parent = _this.popupContainer;
                _this.popupSoiCau.show();
                _this.popups.push(_this.popupSoiCau.node);
                App_1.default.instance.showLoading(false);
            });
        }
        else {
            this.popupSoiCau.show();
        }
    };
    TaiXiuSieuTocController.prototype.onClickGuide = function () {
        var _this = this;
        if (this.popupGuide == null) {
            cc.assetManager.getBundle("TaiXiuSieuToc").load("Prefabs/PopupGuide", cc.Prefab, function (finish, total, item) {
            }, function (err1, prefab) {
                _this.popupGuide = cc.instantiate(prefab).getComponent("Dialog");
                _this.popupGuide.node.parent = _this.popupContainer;
                _this.popupGuide.show();
                _this.popups.push(_this.popupGuide.node);
                App_1.default.instance.showLoading(false);
            });
        }
        else {
            this.popupGuide.show();
        }
    };
    TaiXiuSieuTocController.prototype.reOrder = function () {
        _super.prototype.reOrder.call(this);
    };
    TaiXiuSieuTocController.prototype.onClickClose = function () {
        this.dismiss();
        App_1.default.instance.hideGameMini("TaiXiuSieuToc");
    };
    TaiXiuSieuTocController.prototype.onClickChat = function () {
        App_1.default.instance.showBgMiniGame("TaiXiuSieuToc");
        this.showNodeChat(!this.nodeChat.active);
    };
    TaiXiuSieuTocController.prototype.onClickSendChat = function () {
        App_1.default.instance.showBgMiniGame("TaiXiuSieuToc");
        var data = {};
        data.u = Configs_1.default.Login.Nickname;
        data.m = this.edbChat.string.trim();
        this.edbChat.string = "";
        TaiXiuSieuToc_NetworkClient_1.default.getInstance().sendChat(data);
    };
    TaiXiuSieuTocController.prototype.onClickSendChatNhanh = function (msg) {
        App_1.default.instance.showBgMiniGame("TaiXiuSieuToc");
        var data = {};
        data.u = Configs_1.default.Login.Nickname;
        data.m = msg;
        TaiXiuSieuToc_NetworkClient_1.default.getInstance().sendChat(data);
    };
    TaiXiuSieuTocController.prototype.onClickBet = function (even, data) {
        App_1.default.instance.showBgMiniGame("TaiXiuSieuToc");
        if (this.currentGate < 0) {
            this.showToast(App_1.default.instance.getTextLang('txt_taixiu_choose_gate'));
            return;
        }
        if (Configs_1.default.Login.Coin < parseInt(data)) {
            this.showToast(App_1.default.instance.getTextLang('txt_not_enough'));
            return;
        }
        if (this.stateGame == STATE_GAME.BET) {
            var amount = parseInt(data);
            this.currentBet += amount;
            if (this.currentGate == 1) {
                this.lbBetTai.node.active = true;
                this.sprBtnBetTai.active = false;
                Tween_1.default.numberTo(this.lbBetTai, this.currentBet, 0.3);
            }
            else if (this.currentGate == 2) {
                this.lbBetXiu.node.active = true;
                this.sprBtnBetXiu.active = false;
                Tween_1.default.numberTo(this.lbBetXiu, this.currentBet, 0.3);
            }
            if (this.currentBtnBet != null) {
                this.currentBtnBet.color = cc.Color.WHITE;
            }
            this.currentBtnBet = even.target;
            this.currentBtnBet.color = new cc.Color().fromHEX("#FFE000");
            TW(this.currentBtnBet).to(0.1, { scale: 1.2 }).to(0.1, { scale: 1.0 }).start();
        }
        else if (this.stateGame == STATE_GAME.PREPARE_RESULT) {
            this.showToast(App_1.default.instance.getTextLang('txt_bet_error8'));
        }
        else {
            this.showToast(App_1.default.instance.getTextLang('txt_bet_error3'));
        }
    };
    TaiXiuSieuTocController.prototype.onClickAllIn = function () {
        App_1.default.instance.showBgMiniGame("TaiXiuSieuToc");
        if (Configs_1.default.Login.Coin < 1000) {
            this.showToast(App_1.default.instance.getTextLang('txt_bet_error7'));
            return;
        }
        // let dataBet: any = {};
        // dataBet.taixiuId = this.session;
        // dataBet.loginname = Configs.Login.Nickname;
        // dataBet.betamount = Configs.Login.Coin;
        // dataBet.typed = this.currentGate;
        // let betFrom = 0;
        // if (cc.sys.isNative) {
        //     betFrom = cc.sys.os == cc.sys.OS_ANDROID ? 2 : 1;
        // }
        // dataBet.betfrom = betFrom;
        // TaiXiuSTNetworkClient.getInstance().sendBet(dataBet)
        this.onClickBet(null, Configs_1.default.Login.Coin);
    };
    TaiXiuSieuTocController.prototype.onClickConfirmBet = function () {
        var _this = this;
        App_1.default.instance.showBgMiniGame("TaiXiuSieuToc");
        if (this.timeConfirmBet == 0) {
            var msg = App_1.default.instance.getTextLang("txt_notify_fast_action");
            this.showToast(msg);
            return;
        }
        //  cc.log("last bet amount==" + this.lastBetAmount);
        if (this.currentGate < 0) {
            this.showToast(App_1.default.instance.getTextLang('txt_taixiu_choose_gate'));
            return;
        }
        if (this.currentBet <= 0 && this.lastBetAmount <= 0) {
            this.showToast(App_1.default.instance.getTextLang('txt_bet_error9'));
            return;
        }
        if (this.stateGame == STATE_GAME.PREPARE_RESULT) {
            this.showToast(App_1.default.instance.getTextLang('txt_bet_error8'));
            return;
        }
        if (!TaiXiuSieuToc_NetworkClient_1.default.getInstance().checkSubChannel(this.gameSubscribeId)) {
            TaiXiuSieuToc_NetworkClient_1.default.getInstance().subscribe(TaiXiuSieuToc_Cmd_1.default.API.USER);
            this.showToast(App_1.default.instance.getTextLang('txt_bet_error2'));
            return;
        }
        this.timeConfirmBet = 0;
        this.scheduleOnce(function () {
            _this.timeConfirmBet = 1;
        }, 1.0);
        var dataBet = {};
        dataBet.taixiuId = this.session;
        dataBet.loginname = Configs_1.default.Login.Nickname;
        dataBet.betamount = this.currentBet;
        //  cc.log("last bet amount==" + this.lastBetAmount);
        if (this.currentBet == 0 && this.lastBetAmount > 0) {
            dataBet.betamount = this.lastBetAmount;
        }
        dataBet.typed = this.currentGate;
        var betFrom = 0;
        if (cc.sys.isNative) {
            betFrom = cc.sys.os == cc.sys.OS_ANDROID ? 2 : 1;
        }
        dataBet.betfrom = betFrom;
        TaiXiuSieuToc_NetworkClient_1.default.getInstance().sendBet(dataBet);
    };
    TaiXiuSieuTocController.prototype.getHistorySession = function () {
        TaiXiuSieuToc_NetworkClient_1.default.getInstance().getHistorySession();
    };
    TaiXiuSieuTocController.prototype.onClickCancelBet = function () {
        App_1.default.instance.showBgMiniGame("TaiXiuSieuToc");
        // this.showNodeBtnBet(false);
        this.sprBtnBetTai.active = true;
        this.sprBtnBetXiu.active = true;
        this.lbBetXiu.node.active = false;
        this.lbBetTai.node.active = false;
        this.currentBet = 0;
    };
    TaiXiuSieuTocController.prototype.setTimeCountDown = function (data) {
    };
    TaiXiuSieuTocController.prototype.onClickChooseGate = function (even, data) {
        App_1.default.instance.showBgMiniGame("TaiXiuSieuToc");
        if (this.currentGate != -1 && this.totalBet) {
            if ((data == "TAI" && this.currentGate == 2) || (data == "XIU" && this.currentGate == 1)) {
                this.showToast(App_1.default.instance.getTextLang('txt_taixiu_chat_error4'));
                return;
            }
        }
        if (this.stateGame == STATE_GAME.RESULT) {
            this.showToast(App_1.default.instance.getTextLang('txt_bet_error3'));
            return;
        }
        else if (this.stateGame == STATE_GAME.PREPARE_RESULT) {
            this.showToast(App_1.default.instance.getTextLang('txt_bet_error8'));
            return;
        }
        switch (data) {
            case "TAI":
                this.currentGate = 1;
                this.currentBet = 0;
                this.lbBetTai.string = "0";
                this.lbBetXiu.node.active = false;
                this.lbBetTai.node.active = true;
                this.sprBtnBetTai.parent.getChildByName("boxBet").active = true;
                this.sprBtnBetXiu.parent.getChildByName("boxBet").active = false;
                this.sprBtnBetTai.active = false;
                this.sprBtnBetXiu.active = true;
                break;
            case "XIU":
                this.currentGate = 2;
                this.currentBet = 0;
                this.lbBetXiu.string = "0";
                this.lbBetTai.node.active = false;
                this.lbBetXiu.node.active = true;
                this.sprBtnBetTai.active = true;
                this.sprBtnBetXiu.active = false;
                this.sprBtnBetTai.parent.getChildByName("boxBet").active = false;
                this.sprBtnBetXiu.parent.getChildByName("boxBet").active = true;
                break;
        }
        this.showNodeBtnBet(true);
    };
    TaiXiuSieuTocController.prototype.showNodeBtnBet = function (state) {
        if (this.nodeBtnBet.active == false && state) {
            this.nodeBtnBet.active = true;
            for (var i = 0; i < 8; i++) {
                var btnBet = this.nodeBtnBet.children[i];
                var timeDelay = 0.05 * i;
                btnBet.scale = 0;
                cc.tween(btnBet).sequence(cc.tween().delay(timeDelay), cc.tween().to(0.1, { scale: 1.0 }, { easing: cc.easing.backOut })).start();
                // btnBet.runAction(cc.sequence(cc.delayTime(timeDelay), cc.scaleTo(0.1, 1)));
            }
        }
        else if (!state) {
            this.nodeBtnBet.active = false;
        }
    };
    TaiXiuSieuTocController.prototype.showNodeChat = function (state) {
        var _this = this;
        if (state) {
            this.nodeChat.active = true;
            TW(this.nodeChat).set({ x: cc.winSize.width, opacity: 0 }).to(0.3, { x: 558.03, opacity: 255 }, { easing: cc.easing.sineOut }).start();
        }
        else {
            TW(this.nodeChat).to(0.3, { x: cc.winSize.width, opacity: 0 }, { easing: cc.easing.sineIn }).call(function () {
                _this.nodeChat.active = false;
            }).start();
        }
    };
    TaiXiuSieuTocController.prototype.showResultWin = function (state) {
        if (state) {
            var acScale1 = TW().to(0.25, { scale: 1.2 });
            var acRotate1 = TW().to(0.125, { angle: 10 });
            var acRotate2 = TW().to(0.125, { angle: 0 });
            var acRotate3 = TW().to(0.125, { angle: -10 });
            var acRotate4 = TW().to(0.125, { angle: 0 });
            var acScale2 = TW().to(0.25, { scale: 1.0 });
            var acSeqRo1 = TW().sequence(acRotate1, acRotate2, acRotate3, acRotate4, acScale2);
            this.lbScore.string = this.totalResult.toString();
            this.lbScore.node.active = true;
            this.bg_Score.active = true;
            this.bgLight.active = true;
            if (this.totalResult > 10) {
                TW(this.nodeTxtTai).repeat(5, TW().sequence(TW().delay(0.5), TW().parallel(acScale1, acSeqRo1))).start();
                this.bgLight.x = this.nodeTxtTai.x;
            }
            else {
                this.bgLight.x = this.nodeTxtXiu.x;
                TW(this.nodeTxtXiu).repeat(5, TW().sequence(TW().delay(0.5), TW().parallel(acScale1, acSeqRo1))).start();
            }
        }
        else {
            cc.Tween.stopAllByTarget(this.nodeTxtTai);
            cc.Tween.stopAllByTarget(this.nodeTxtXiu);
            this.nodeTxtTai.scale = 1.0;
            this.nodeTxtXiu.scale = 1.0;
        }
    };
    TaiXiuSieuTocController.prototype.loadListHistoryShort = function () {
        var _this = this;
        var dataHis = this.historyShort.slice(0, 18).reverse();
        var _loop_2 = function (i) {
            var item = this_2.nodeHistoryShort.children[i];
            if (!item) {
                item = cc.instantiate(this_2.nodeHistoryShort.children[0]);
                this_2.nodeHistoryShort.addChild(item);
            }
            var data = typeof dataHis[i] == "string" ? JSON.parse(dataHis[i]) : dataHis[i];
            var result = data[0] + data[1] + data[2];
            item.getComponent(cc.Sprite).spriteFrame = result > 10 ? this_2.sprDots[0] : this_2.sprDots[1];
            if (result > 10) {
                item.setContentSize(cc.size(23, 23));
            }
            else {
                item.setContentSize(cc.size(26, 26));
            }
            item.active = true;
            item.y = 0;
            TW(item).set({ scale: 0 }).delay(0.01 * i).to(0.3, { scale: 1.0 }, { easing: cc.easing.backOut })
                .call(function () {
                if (_this.nodeHistoryShort.children.indexOf(item) == 17) {
                    TW(item)
                        .repeatForever(TW()
                        .sequence(TW()
                        .to(0.5, { y: 10 }), TW().to(0.5, { y: 0 })))
                        .start();
                }
            })
                .start();
        };
        var this_2 = this;
        for (var i = 0; i < dataHis.length; i++) {
            _loop_2(i);
        }
    };
    TaiXiuSieuTocController.prototype.showToast = function (msg) {
        var _this = this;
        this.alertToast.getComponentInChildren(cc.Label).string = msg;
        this.alertToast.active = true;
        cc.Tween.stopAllByTarget(this.alertToast);
        // TW(this.alertToast).set({ y: -25 }).to(1.5, { y: 25 }).call(() => {
        //     this.alertToast.active = false;
        // }).start();
        TW(this.alertToast).set({ x: -300, opacity: 0 })
            .to(0.3, { x: 0, opacity: 255 }, { easing: cc.easing.sineOut })
            .delay(1.4)
            .to(0.3, { x: 300, opacity: 0 }, { easing: cc.easing.backIn }).call(function () {
            _this.alertToast.active = false;
        }).start();
        TW(this.alertToast).tag(1);
    };
    TaiXiuSieuTocController.prototype.initListChat = function () {
        var _this = this;
        this.scrChat.content.on(cc.Node.EventType.CHILD_ADDED, function () {
            // if (this.scrChat.content.y > 0) {
            //     this.scrChat.scrollToBottom(0.3);
            // }
            _this.onScrollChatEvent();
        });
        if (this.scrChat.content.childrenCount == 1) {
            for (var i = 1; i < 15; i++) {
                this.scrChat.content.addChild(cc.instantiate(this.scrChat.content.children[0]));
            }
        }
        for (var i = 0; i < this.listChatHistory.length; i++) {
            var data = this.listChatHistory[i];
            this.addChat(data.u, data.m, i);
        }
        this.showNodeChat(true);
    };
    TaiXiuSieuTocController.prototype.reloadListChat = function () {
    };
    TaiXiuSieuTocController.prototype.addChat = function (u, m, index) {
        var item = this.scrChat.content.children[index];
        if (!item) {
            item = cc.instantiate(this.scrChat.content.children[0]);
            this.scrChat.content.addChild(item);
        }
        item.active = true;
        item.opacity = 255;
        var name = u;
        if (name.length > 10)
            name = name.substring(0, 7) + "..";
        m = m.replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g, '');
        item.getComponent(cc.Label).string = name + " : " + m;
        item.children[0].getComponent(cc.Label).string = name + " : ";
        // this.onScrollChatEvent();
        if (this.scrChat.content.childrenCount >= 15) {
            this.scrChat.content.children[0].destroy();
        }
    };
    TaiXiuSieuTocController.prototype.onScrollChatEvent = function () {
        for (var i = 0; i < this.scrChat.content.childrenCount; i++) {
            var item = this.scrChat.content.children[i];
            var view = this.scrChat.node.getChildByName("view");
            var posWorld = this.scrChat.content.convertToWorldSpaceAR(item.getPosition());
            var posInView = view.convertToNodeSpaceAR(posWorld);
            if (posInView.y > view.height + item.height * 2 || posInView.y < -item.height) {
                item.opacity = 0;
            }
            else {
                item.opacity = 255;
            }
        }
    };
    var TaiXiuSieuTocController_1;
    TaiXiuSieuTocController.instance = null;
    __decorate([
        property(cc.Node)
    ], TaiXiuSieuTocController.prototype, "scrollChat", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuSieuTocController.prototype, "chatNhanh", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuSieuTocController.prototype, "contentChatNhanh", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuSieuTocController.prototype, "lbTotalTai", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuSieuTocController.prototype, "lbTotalXiu", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuSieuTocController.prototype, "lbTotalBetTai", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuSieuTocController.prototype, "lbTotalBetXiu", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuSieuTocController.prototype, "lbBetXiu", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuSieuTocController.prototype, "lbBetTai", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuSieuTocController.prototype, "lbTimeCountDown", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuSieuTocController.prototype, "lbSession", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuSieuTocController.prototype, "lbTotalUserTai", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuSieuTocController.prototype, "lbTotalUserXiu", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuSieuTocController.prototype, "lbWin", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuSieuTocController.prototype, "lbScore", void 0);
    __decorate([
        property([cc.Font])
    ], TaiXiuSieuTocController.prototype, "listFont", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuSieuTocController.prototype, "nodeBtnBet", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuSieuTocController.prototype, "nodeChat", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuSieuTocController.prototype, "nodeTxtTai", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuSieuTocController.prototype, "nodeTxtXiu", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuSieuTocController.prototype, "sprBtnBetXiu", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuSieuTocController.prototype, "sprBtnBetTai", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuSieuTocController.prototype, "bgGame", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuSieuTocController.prototype, "alertToast", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuSieuTocController.prototype, "nodeHistoryShort", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuSieuTocController.prototype, "popupContainer", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuSieuTocController.prototype, "bg_Score", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuSieuTocController.prototype, "bgLight", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuSieuTocController.prototype, "nodeBat", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuSieuTocController.prototype, "bgLighting", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuSieuTocController.prototype, "bgTime", void 0);
    __decorate([
        property(cc.EditBox)
    ], TaiXiuSieuTocController.prototype, "edbChat", void 0);
    __decorate([
        property(cc.ScrollView)
    ], TaiXiuSieuTocController.prototype, "scrChat", void 0);
    __decorate([
        property(sp.Skeleton)
    ], TaiXiuSieuTocController.prototype, "dice1", void 0);
    __decorate([
        property(sp.Skeleton)
    ], TaiXiuSieuTocController.prototype, "dice2", void 0);
    __decorate([
        property(sp.Skeleton)
    ], TaiXiuSieuTocController.prototype, "dice3", void 0);
    __decorate([
        property(sp.Skeleton)
    ], TaiXiuSieuTocController.prototype, "dragon", void 0);
    __decorate([
        property(sp.Skeleton)
    ], TaiXiuSieuTocController.prototype, "table", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], TaiXiuSieuTocController.prototype, "sprDots", void 0);
    TaiXiuSieuTocController = TaiXiuSieuTocController_1 = __decorate([
        ccclass
    ], TaiXiuSieuTocController);
    return TaiXiuSieuTocController;
}(MiniGame_1.default));
exports.default = TaiXiuSieuTocController;

cc._RF.pop();