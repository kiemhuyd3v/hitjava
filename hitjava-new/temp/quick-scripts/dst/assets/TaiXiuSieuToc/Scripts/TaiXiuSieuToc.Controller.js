
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TaiXiuSieuToc/Scripts/TaiXiuSieuToc.Controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGFpWGl1U2lldVRvY1xcU2NyaXB0c1xcVGFpWGl1U2lldVRvYy5Db250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUVoRCw2REFBd0Q7QUFDeEQsaUVBQTREO0FBQzVELDZGQUF3RjtBQUN4RixxRUFBZ0U7QUFDaEUscUVBQWdFO0FBQ2hFLG1IQUF3RztBQUN4Ryx5REFBc0M7QUFNaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztBQUNsQixJQUFJLFVBQVUsR0FBRztJQUNiLEdBQUcsRUFBRSxDQUFDO0lBQ04sS0FBSyxFQUFFLENBQUM7SUFDUixNQUFNLEVBQUUsQ0FBQztJQUNULGNBQWMsRUFBRSxDQUFDO0NBQ3BCLENBQUE7QUFDRCxJQUFJLFVBQVUsR0FBRztJQUNiLGFBQWEsRUFBRSx1QkFBdUI7SUFDdEMsY0FBYyxFQUFFLCtCQUErQjtJQUMvQyxjQUFjLEVBQUUsMEJBQTBCO0lBQzFDLFlBQVksRUFBRSx3QkFBd0I7Q0FDekMsQ0FBQTtBQUVEO0lBQXFELDJDQUFRO0lBQTdEO1FBQUEscUVBbS9CQztRQTkrQkcsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFHakMsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFHL0IsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFHL0IsY0FBUSxHQUFhLElBQUksQ0FBQztRQUcxQixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRzFCLHFCQUFlLEdBQWEsSUFBSSxDQUFDO1FB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LDhCQUFDO0NBbi9CRCxBQW0vQkMsQ0FuL0JvRCxrQkFBUSxHQW0vQjVEO2tCQW4vQm9CLHVCQUF1QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvR2xvYmFsXCI7XG5pbXBvcnQgTWluaUdhbWUgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L01pbmlHYW1lXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IEJyb2FkY2FzdFJlY2VpdmVyIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0Jyb2FkY2FzdFJlY2VpdmVyXCI7XG5pbXBvcnQgVHdlZW4gZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vVHdlZW5cIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuaW1wb3J0IFRhaVhpdVNUTmV0d29ya0NsaWVudCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL1RhaVhpdVNpZXVUb2MuTmV0d29ya0NsaWVudFwiO1xuaW1wb3J0IGNtZCBmcm9tIFwiLi9UYWlYaXVTaWV1VG9jLkNtZFwiO1xuaW1wb3J0IFBvcHVwRGV0YWlsSGlzdG9yeSBmcm9tIFwiLi9UYWlYaXVTVC5Qb3B1cERldGFpbEhpc3RvcnlcIjtcbmltcG9ydCBUYWlYaXVTVFBvcHVwSGlzdG9yeSBmcm9tIFwiLi9UYWlYaXVTVC5Qb3B1cEhpc3RvcnlcIjtcbmltcG9ydCBUYWlYaXVTVFBvcHVwSG9ub3JzIGZyb20gXCIuL1RhaVhpdVNULlBvcHVwSG9ub3JzXCI7XG5pbXBvcnQgVGFpWGl1U1RQb3B1cFNvaUNhdSBmcm9tIFwiLi9UYWlYaXVTVC5Qb3B1cFNvaUNhdVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xudmFyIFRXID0gY2MudHdlZW47XG52YXIgU1RBVEVfR0FNRSA9IHtcbiAgICBCRVQ6IDEsXG4gICAgU0hBS0U6IDIsXG4gICAgUkVTVUxUOiAzLFxuICAgIFBSRVBBUkVfUkVTVUxUOiA0XG59XG52YXIgQU5JTV9TVEFURSA9IHtcbiAgICBEUkFHT05fTk9STUFMOiBcImFuaW1hdGlvbl9kcmFnb25fb25seVwiLFxuICAgIERSQUdPTl9YMlNQRUVEOiBcImFuaW1hdGlvbl9kcmFnb25fb25seV94MnNwZWVkXCIsXG4gICAgVEFCTEVfTk9EUkFHT046IFwiYW5pbWF0aW9uX3RhYmxlX25vZHJhZ29uXCIsXG4gICAgVEFCTEVfRFJBR09OOiBcImFuaW1hdGlvbl90YWJsZV9kcmFnb25cIixcbn1cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWlYaXVTaWV1VG9jQ29udHJvbGxlciBleHRlbmRzIE1pbmlHYW1lIHtcblxuXG4gICAgc3RhdGljIGluc3RhbmNlOiBUYWlYaXVTaWV1VG9jQ29udHJvbGxlciA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc2Nyb2xsQ2hhdDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2hhdE5oYW5oOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb250ZW50Q2hhdE5oYW5oOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYlRvdGFsVGFpOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJUb3RhbFhpdTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiVG90YWxCZXRUYWk6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYlRvdGFsQmV0WGl1OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJCZXRYaXU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkJldFRhaTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiVGltZUNvdW50RG93bjogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiU2Vzc2lvbjogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiVG90YWxVc2VyVGFpOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJUb3RhbFVzZXJYaXU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYldpbjogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiU2NvcmU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShbY2MuRm9udF0pXG4gICAgbGlzdEZvbnQ6IGNjLkZvbnRbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZUJ0bkJldDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlQ2hhdDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlVHh0VGFpOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vZGVUeHRYaXU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc3ByQnRuQmV0WGl1OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHNwckJ0bkJldFRhaTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBiZ0dhbWU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYWxlcnRUb2FzdDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlSGlzdG9yeVNob3J0OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBvcHVwQ29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJnX1Njb3JlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJnTGlnaHQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZUJhdDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBiZ0xpZ2h0aW5nOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJnVGltZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBlZGJDaGF0OiBjYy5FZGl0Qm94ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TY3JvbGxWaWV3KVxuICAgIHNjckNoYXQ6IGNjLlNjcm9sbFZpZXcgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIGRpY2UxOiBzcC5Ta2VsZXRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIGRpY2UyOiBzcC5Ta2VsZXRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIGRpY2UzOiBzcC5Ta2VsZXRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIGRyYWdvbjogc3AuU2tlbGV0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcbiAgICB0YWJsZTogc3AuU2tlbGV0b24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgc3ByRG90czogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG5cbiAgICB0aW1lSW5CZyA9IDA7XG4gICAgY3VycmVudEdhdGUgPSAtMTtcbiAgICB0b3RhbEJldCA9IDA7XG4gICAgY3VycmVudEJldCA9IDA7XG4gICAgcmVzdWx0ID0gW107XG4gICAgdG90YWxSZXN1bHQgPSAwO1xuICAgIHNlc3Npb24gPSAwO1xuICAgIHN0YXRlR2FtZSA9IDA7XG4gICAgaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICBsaXN0Q2hhdEhpc3RvcnkgPSBbXTtcbiAgICBsaXN0VGltZXIgPSBbXTtcbiAgICBoaXN0b3J5U2Vzc2lvbiA9IFtdO1xuICAgIGhpc3RvcnlTb2lDYXUgPSBbXTtcbiAgICBoaXN0b3J5U2hvcnQgPSBbXTtcbiAgICBwb3B1cHMgPSBbXTtcbiAgICBnYW1lU3Vic2NyaWJlSWQgPSBcIlwiO1xuICAgIGN1cnJlbnRCdG5CZXQgPSBudWxsO1xuICAgIHRpbWVDb25maXJtQmV0ID0gMTtcbiAgICBsYXN0QmV0QW1vdW50ID0gMDtcbiAgICBwcml2YXRlIHBvcHVwSG9ub3I6IFRhaVhpdVNUUG9wdXBIb25vcnMgPSBudWxsO1xuICAgIHByaXZhdGUgcG9wdXBIaXN0b3J5OiBUYWlYaXVTVFBvcHVwSGlzdG9yeSA9IG51bGw7XG4gICAgcHJpdmF0ZSBwb3B1cEd1aWRlID0gbnVsbDtcbiAgICBwcml2YXRlIHBvcHVwU29pQ2F1OiBUYWlYaXVTVFBvcHVwU29pQ2F1ID0gbnVsbDtcbiAgICBwcml2YXRlIHBvcHVwRGV0YWlsU2Vzc2lvbjogUG9wdXBEZXRhaWxIaXN0b3J5ID0gbnVsbDtcblxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHN1cGVyLm9uTG9hZCgpO1xuICAgICAgICAvLyB0aGlzLmJnR2FtZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCAodG91Y2gpID0+IHtcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXMubm9kZS5wb3NpdGlvbi5hZGQodG91Y2guZ2V0RGVsdGEoKSk7XG4gICAgICAgIC8vIH0pXG4gICAgICAgIHRoaXMubm9kZUNoYXQueCA9IGNjLndpblNpemUud2lkdGg7XG4gICAgICAgIHRoaXMubm9kZUNoYXQuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgVGFpWGl1U2lldVRvY0NvbnRyb2xsZXIuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICBUYWlYaXVTVE5ldHdvcmtDbGllbnQuVGFpWGl1U2lldVRvY0NvbnRyb2xsZXIgPSB0aGlzO1xuICAgICAgICBUVyh0aGlzLmJnTGlnaHRpbmcpLnJlcGVhdEZvcmV2ZXIoVFcoKS5zZXF1ZW5jZShUVygpLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0pLCBUVygpLnRvKDAuNSwgeyBvcGFjaXR5OiAyNTUgfSkpKS5zdGFydCgpO1xuICAgICAgICB0aGlzLm5vZGVCdG5CZXQuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBmb3IodmFyIGk9MDtpPHRoaXMuY29udGVudENoYXROaGFuaC5jaGlsZHJlbkNvdW50O2krKyl7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuY29udGVudENoYXROaGFuaC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIG5vZGUub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHNlbGYub25DbGlja1NlbmRDaGF0Tmhhbmgobm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyk7XG4gICAgICAgICAgICAgICAgc2VsZi5zY3JvbGxDaGF0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2VsZi5jaGF0TmhhbmguYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICB0b2dnbGVDaGF0TmhhbmgoKXtcbiAgICAgICAgaWYodGhpcy5jaGF0TmhhbmguYWN0aXZlID09IGZhbHNlKXtcbiAgICAgICAgICAgIHRoaXMuY2hhdE5oYW5oLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbENoYXQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRoaXMuY2hhdE5oYW5oLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxDaGF0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICB0aGlzLnJlc2V0VmlldygpO1xuICAgICAgICB0aGlzLnN0YXRlR2FtZSA9IDA7XG4gICAgICAgIGlmICh0aGlzLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICBUYWlYaXVTVE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5nZXRDaGF0SGlzdG9yeSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnNldHVwVGltZVJ1bkluQmcoKTtcbiAgICAgICAgLy8gdGhpcy5sb2dpbkdhbWUoKTtcbiAgICAgICAgaWYgKFRhaVhpdVNUTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmlzQ29ubmVjdGVkID09IGZhbHNlKSB7XG4gICAgICAgICAgICBUYWlYaXVTVE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5jb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgVGFpWGl1U1ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuYWRkTGlzdGVuZXIoKGRhdGE6IE9iamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5hY3RpdmUgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pc0Nvbm5lY3RlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIFRhaVhpdVNUTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnN1YnNjcmliZShjbWQuQVBJLlVTRVIpO1xuICAgICAgICAgICAgICAgIFRhaVhpdVNUTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnN1YnNjcmliZShjbWQuQVBJLkRJU0NPTk5FQ1QpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBUYWlYaXVTVE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5nZXRDaGF0SGlzdG9yeSgpO1xuICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICAgICAgVGFpWGl1U1ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuZ2V0SGlzdG9yeVNlc3Npb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCByZXMgPSBKU09OLnBhcnNlKGRhdGFbJ2JvZHknXSk7XG4gICAgICAgICAgXG4gICAgICAgICAgICBzd2l0Y2ggKHJlc1snY21kJ10pIHtcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkNNRF81MFM6IHsvL3RpbWUgY3VvYyx0aW1lIG5heSBjaGF5IHR1IDQ3LT4zM1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb24gPSByZXMuaWQ7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxiVGltZUNvdW50RG93bi5ub2RlLmFjdGl2ZSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYlRpbWVDb3VudERvd24ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYlNlc3Npb24uc3RyaW5nID0gXCIjXCIgKyB0aGlzLnNlc3Npb247XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGVCYXQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZUJhdC55ID0gMjAuMTkzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCB0aW1lQ2QgPSByZXMuY2Q7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b3RhbEJldFRhaSA9IHJlcy5hdDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvdGFsQmV0WGl1ID0gcmVzLmF4O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxiVG90YWxUYWksIHRvdGFsQmV0VGFpLCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxiVG90YWxYaXUsIHRvdGFsQmV0WGl1LCAwLjMpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJUaW1lQ291bnREb3duLnN0cmluZyA9ICh0aW1lQ2QgLSAzMykgPj0gMTAgPyAodGltZUNkIC0gMzMpLnRvU3RyaW5nKCkgOiBcIjBcIiArICh0aW1lQ2QgLSAzMyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJUb3RhbFVzZXJUYWkuc3RyaW5nID0gcmVzLnV0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxiVG90YWxVc2VyWGl1LnN0cmluZyA9IHJlcy51eDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVHYW1lID09IDAgfHwgdGhpcy5zdGF0ZUdhbWUgPT0gU1RBVEVfR0FNRS5SRVNVTFQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJjaGF5IHZhbyBkYXkhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYlRpbWVDb3VudERvd24ubm9kZS5zY2FsZSA9IDEuMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJUaW1lQ291bnREb3duLm5vZGUuc2V0UG9zaXRpb24oY2MudjIoLTE3LjA1MywgMzcuNjU2KSk7IC8vdG9hIGRvIGN1YSB0aW1lIGN1b2NcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW1lQ2QgLSAzMyA8PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmFnb24ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhZ29uLnNldEFuaW1hdGlvbigwLCBBTklNX1NUQVRFLkRSQUdPTl9YMlNQRUVELCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxiVGltZUNvdW50RG93bi5ub2RlLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiNGRjZBNkFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhZ29uLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZS5zZXRBbmltYXRpb24oMCwgQU5JTV9TVEFURS5UQUJMRV9EUkFHT04sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJUaW1lQ291bnREb3duLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGltZUNkID09IDQ3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9iZXRfaW52aXRlJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aW1lQ2QgPT0gMzMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3RhaXhpdV9maW5pc2gnKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWVDZCA9PSAzOCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmFnb24ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmFnb24uc2V0QW5pbWF0aW9uKDAsIEFOSU1fU1RBVEUuRFJBR09OX1gyU1BFRUQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZS5zZXRBbmltYXRpb24oMCwgQU5JTV9TVEFURS5UQUJMRV9OT0RSQUdPTiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWVDZCA8IDM2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlR2FtZSA9IFNUQVRFX0dBTUUuUFJFUEFSRV9SRVNVTFQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYlRpbWVDb3VudERvd24ubm9kZS5zY2FsZSAhPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubGJUaW1lQ291bnREb3duLm5vZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYlRpbWVDb3VudERvd24ubm9kZS5zY2FsZSA9IDEuMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxiVGltZUNvdW50RG93bi5ub2RlLnNldFBvc2l0aW9uKGNjLnYyKC0yLjc0NSwgNDcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVHYW1lID0gU1RBVEVfR0FNRS5CRVQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWVDZCA8IDM5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxiVGltZUNvdW50RG93bi5ub2RlLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiNGRjZBNkFcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxiVGltZUNvdW50RG93bi5ub2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWNlMS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY2UyLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGljZTMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuQ01EXzUxUzogeyAvL3RpbWUgeGVtIGtldCBxdeG6oyx0cmEgdmUgMSBsYW4gdHJvbmcgMSBwaGllblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYWdvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlLnNldEFuaW1hdGlvbigwLCBBTklNX1NUQVRFLlRBQkxFX05PRFJBR09OLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uID0gcmVzLmlkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxiU2Vzc2lvbi5zdHJpbmcgPSBcIiNcIiArIHRoaXMuc2Vzc2lvbjtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpbWVDZCA9IHJlcy5jZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYlRpbWVDb3VudERvd24uc3RyaW5nID0gdGltZUNkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdCA9IHJlcy5ycztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5U2hvcnQudW5zaGlmdChyZXMucnMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpc3RvcnlTb2lDYXUudW5zaGlmdCh7IHNlc3Npb246IHRoaXMuc2Vzc2lvbiwgZGljZXM6IHJlcy5ycyB9KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRMaXN0SGlzdG9yeVNob3J0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxSZXN1bHQgPSB0aGlzLnJlc3VsdFswXSArIHRoaXMucmVzdWx0WzFdICsgdGhpcy5yZXN1bHRbMl07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Jlc3VsdFdpbih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVHYW1lID09IFNUQVRFX0dBTUUuQkVUIHx8IHRoaXMuc3RhdGVHYW1lID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVHYW1lID0gU1RBVEVfR0FNRS5SRVNVTFQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJnVGltZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5sYlRpbWVDb3VudERvd24ubm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIFRXKHRoaXMubGJUaW1lQ291bnREb3duLm5vZGUpLnRvKDAuNSwgeyBzY2FsZTogMC4yNSwgeDogdGhpcy5iZ1RpbWUueCwgeTogdGhpcy5iZ1RpbWUueSArIDggfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lSW4gfSkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgVFcodGhpcy5sYlRpbWVDb3VudERvd24ubm9kZSkudGFnKDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5DTURfMTRTOiB7IC8vIChjZCA8PTUtLS0tLXRpbWUgeGVtIGtxLGNkPD0yMy0tLXRpbWUgdHVuZyB4dWMgeGFjKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb24gPSByZXMuaWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJTZXNzaW9uLnN0cmluZyA9IFwiI1wiICsgdGhpcy5zZXNzaW9uO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmNkID09IDIzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoYWtlRGljZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gcmVzLnJzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsUmVzdWx0ID0gdGhpcy5yZXN1bHRbMF0gKyB0aGlzLnJlc3VsdFsxXSArIHRoaXMucmVzdWx0WzJdO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmNkIDw9IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJUaW1lQ291bnREb3duLm5vZGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiI0ZGNkE2QVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZ1RpbWUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJUaW1lQ291bnREb3duLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJUaW1lQ291bnREb3duLm5vZGUuc2NhbGUgPSAwLjI1O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYlRpbWVDb3VudERvd24ubm9kZS5zZXRQb3NpdGlvbihjYy52Mih0aGlzLmJnVGltZS54LCB0aGlzLmJnVGltZS55ICsgOCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYlRpbWVDb3VudERvd24uc3RyaW5nID0gXCIwXCIgKyByZXMuY2Q7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlR2FtZSA9IFNUQVRFX0dBTUUuUkVTVUxUO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYWdvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZS5zZXRBbmltYXRpb24oMCwgQU5JTV9TVEFURS5UQUJMRV9OT0RSQUdPTiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGVCYXQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jZCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0VmlldygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJUb3RhbFVzZXJUYWkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKHJlcy51dCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJUb3RhbFVzZXJYaXUuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKHJlcy51eCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJUb3RhbFRhaS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIocmVzLmF0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYlRvdGFsWGl1LnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihyZXMuYXgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5DTURfQkVUOiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJDTURfQkVUOlwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhICE9IG51bGwgJiYgcmVzLnN0YXR1cyA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9iZXRfc3VjY2VzcycpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdEJldEFtb3VudCA9IHJlcy5kYXRhLmJldGFtb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxCZXQgKz0gcmVzLmRhdGEuYmV0YW1vdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QmV0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRHYXRlID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxiVG90YWxCZXRUYWksIHRoaXMudG90YWxCZXQsIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJUb3RhbEJldFhpdSwgdGhpcy50b3RhbEJldCwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByQnRuQmV0VGFpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwckJ0bkJldFhpdS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYkJldFRhaS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYkJldFhpdS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luIC09IHJlcy5kYXRhLmJldGFtb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9iZXRfZXJyb3IyJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuQ01EX0NIQVRfQUxMOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RDaGF0SGlzdG9yeSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdENoYXRIaXN0b3J5Lmxlbmd0aCA+IDE1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0Q2hhdEhpc3Rvcnkuc3BsaWNlKDAsIDE1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdExpc3RDaGF0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuQ01EX0NIQVQ6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0Q2hhdEhpc3RvcnkucHVzaChyZXMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0Q2hhdEhpc3RvcnkubGVuZ3RoID4gMTUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdENoYXRIaXN0b3J5LnNwbGljZSgwLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENoYXQocmVzLnUsIHJlcy5tLCB0aGlzLmxpc3RDaGF0SGlzdG9yeS5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuQ01EX0hJU1RPUlk6IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkNNRF9ISVNUT1JZOlwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yeVNlc3Npb24gPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yeVNlc3Npb24uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yeVNob3J0LnB1c2goaXRlbS5yZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YTogYW55ID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuc2Vzc2lvbiA9IGl0ZW0uaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZGljZXMgPSBKU09OLnBhcnNlKGl0ZW0ucmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5U29pQ2F1LnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIk51bGwgUmVzdWx0OlwiLCBpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZExpc3RIaXN0b3J5U2hvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5DTURfVFhSRUNPUkRfSElTVE9SWToge1xuICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiQ01EX1RYUkVDT1JEX0hJU1RPUlk6XCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5DTURfUkVGVU5EX1VTRVI6IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkNNRF9SRUZVTkRfVVNFUjpcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkNNRF9XSU5fVVNFUjoge1xuICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiQ01EX1dJTl9VU0VSIDpcIik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhbW91bnQgPSByZXMuYW1vdW50O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxiV2luLnN0cmluZyA9IFwiK1wiICsgVXRpbHMuZm9ybWF0TnVtYmVyKGFtb3VudCk7XG4gICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQ29pbiArPSBhbW91bnQ7XG4gICAgICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJXaW4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBUVyh0aGlzLmxiV2luLm5vZGUpLnNldCh7IHk6IDMwMCwgc2NhbGU6IDMsIG9wYWNpdHk6IDAsIGFuZ2xlOiAtNzIwIH0pLnRvKDEuMCwgeyB5OiAyNSwgc2NhbGU6IDEuMCwgb3BhY2l0eTogMjU1LCBhbmdsZTogMCB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVJbiB9KS5kZWxheSgxLjUpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYldpbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5DTURfVEhPTkdLRV9QSElFTjoge1xuICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiQ01EX1RIT05HS0VfUEhJRU46XCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiVFhTVDpcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkNNRF9VU0VSX0JFVDoge1xuICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiQ01EX1VTRVJfQkVUOlwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuQ01EX1RPUF9IT05PUjoge1xuICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiQ01EX1RPUF9IT05PUjpcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvcHVwSG9ub3IgIT0gbnVsbCAmJiB0aGlzLnBvcHVwSG9ub3Iubm9kZS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09IDAgJiYgcmVzLmRhdGEgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVwSG9ub3IuaW5pdERhdGEocmVzLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkNNRF9ESVNfVFg6IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkNNRF9ESVNfVFhTVFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnJlZ2lzdGVyKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfTE9HT1VULCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgIH1cbiAgICBzZXR1cFRpbWVSdW5JbkJnKCkge1xuICAgICAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfSElERSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50aW1lSW5CZyA9IGNjLnN5cy5ub3coKVxuICAgICAgICB9KVxuXG4gICAgICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9TSE9XLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGltZU5vdyA9IGNjLnN5cy5ub3coKVxuICAgICAgICAgICAgbGV0IHRpbWVIaWRlID0gdGhpcy50aW1lSW5CZztcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmdldEFjdGlvbk1hbmFnZXIoKS51cGRhdGUoKHRpbWVOb3cgLSB0aW1lSGlkZSkgLyAxMDAwKTtcbiAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhZygxKTtcbiAgICAgICAgICAgIGlmICgodGltZU5vdyAtIHRpbWVIaWRlKSAvIDEwMDAgPiA1MCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfTtcblxuICAgIHNob3coKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUuYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLnJlT3JkZXIoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0JnTWluaUdhbWUoXCJUYWlYaXVTaWV1VG9jXCIpO1xuICAgICAgICBzdXBlci5zaG93KCk7XG4gICAgfVxuICAgIGRpc21pc3MoKSB7XG4gICAgICAgIHN1cGVyLmRpc21pc3MoKTtcbiAgICAgICAgdGhpcy5zaG93Tm9kZUNoYXQoZmFsc2UpO1xuICAgIH1cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIC8vICBjYy5sb2coXCJEZXN0cm95IFRYU1RcIik7XG4gICAgfVxuICAgIHJlc2V0VmlldygpIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcInJlc2V0IHZpZXdcIik7XG4gICAgICAgIHRoaXMuc2hvd1Jlc3VsdFdpbihmYWxzZSk7XG4gICAgICAgIHRoaXMuYmdMaWdodC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub2RlQmF0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vZGVCYXQuc2NhbGUgPSAxO1xuICAgICAgICB0aGlzLmxiVGltZUNvdW50RG93bi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLm5vZGVCdG5CZXQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZHJhZ29uLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGFibGUuc2V0QW5pbWF0aW9uKDAsIEFOSU1fU1RBVEUuVEFCTEVfTk9EUkFHT04sIHRydWUpO1xuICAgICAgICB0aGlzLmxiVG90YWxCZXRYaXUuc3RyaW5nID1cbiAgICAgICAgICAgIHRoaXMubGJUb3RhbEJldFRhaS5zdHJpbmcgPVxuICAgICAgICAgICAgdGhpcy5sYlRvdGFsQmV0WGl1LnN0cmluZyA9XG4gICAgICAgICAgICB0aGlzLmxiVG90YWxYaXUuc3RyaW5nID1cbiAgICAgICAgICAgIHRoaXMubGJUb3RhbFRhaS5zdHJpbmcgPVxuICAgICAgICAgICAgdGhpcy5sYlRvdGFsVXNlclRhaS5zdHJpbmcgPVxuICAgICAgICAgICAgdGhpcy5sYlRvdGFsVXNlclhpdS5zdHJpbmcgPVxuICAgICAgICAgICAgdGhpcy5sYkJldFRhaS5zdHJpbmcgPVxuICAgICAgICAgICAgdGhpcy5sYkJldFhpdS5zdHJpbmcgPSBcIjBcIjtcbiAgICAgICAgdGhpcy5zcHJCdG5CZXRUYWkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zcHJCdG5CZXRYaXUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sYkJldFRhaS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxiQmV0WGl1Lm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGJTY29yZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJnX1Njb3JlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNwckJ0bkJldFRhaS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJib3hCZXRcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3ByQnRuQmV0WGl1LnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImJveEJldFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50b3RhbEJldCA9IDA7XG4gICAgICAgIHRoaXMuY3VycmVudEdhdGUgPSAtMTtcbiAgICAgICAgdGhpcy5ub2RlVHh0VGFpLnNjYWxlID0gMS4wO1xuICAgICAgICB0aGlzLm5vZGVUeHRYaXUuc2NhbGUgPSAxLjA7XG4gICAgICAgIHRoaXMubm9kZVR4dFRhaS5hbmdsZSA9IDA7XG4gICAgICAgIHRoaXMubm9kZVR4dFhpdS5hbmdsZSA9IDA7XG4gICAgICAgIHRoaXMubGFzdEJldEFtb3VudCA9IDA7XG4gICAgICAgIHRoaXMucmVzdWx0ID0gW107XG4gICAgICAgIHRoaXMubGJUaW1lQ291bnREb3duLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgdGhpcy5sYlRpbWVDb3VudERvd24ubm9kZS5zY2FsZSA9IDE7XG4gICAgICAgIHRoaXMubGJUaW1lQ291bnREb3duLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGJUaW1lQ291bnREb3duLm5vZGUuc2V0UG9zaXRpb24oY2MudjIoLTIuNzQ1LCA0NykpO1xuICAgICAgICB0aGlzLmJnVGltZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEJ0bkJldCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRCdG5CZXQuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgfVxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYWcoMSk7XG4gICAgfVxuXG4gICAgc2hha2VEaWNlKCkge1xuICAgICAgICB0aGlzLmRpY2UxLm5vZGUuYWN0aXZlID0gdGhpcy5kaWNlMi5ub2RlLmFjdGl2ZSA9IHRoaXMuZGljZTMubm9kZS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuZGljZTEuc2V0QW5pbWF0aW9uKDAsIHRoaXMuZ2V0QW5pbWF0aW9uRGljZVN0YXJ0KFV0aWxzLnJhbmRvbVJhbmdlSW50KDEsIDYpKSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmRpY2UyLnNldEFuaW1hdGlvbigwLCB0aGlzLmdldEFuaW1hdGlvbkRpY2VTdGFydChVdGlscy5yYW5kb21SYW5nZUludCgxLCA2KSksIGZhbHNlKTtcbiAgICAgICAgdGhpcy5kaWNlMy5zZXRBbmltYXRpb24oMCwgdGhpcy5nZXRBbmltYXRpb25EaWNlU3RhcnQoVXRpbHMucmFuZG9tUmFuZ2VJbnQoMSwgNikpLCBmYWxzZSk7XG4gICAgICAgIC8vIHRoaXMubGlzdFRpbWVyLnB1c2godGltZU91dDEsIHRpbWVPdXQyLCB0aW1lT3V0Myk7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLmRpY2UxLm5vZGUpO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5kaWNlMi5ub2RlKTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuZGljZTMubm9kZSk7XG4gICAgICAgIFRXKHRoaXMuZGljZTEubm9kZSkuZGVsYXkoMS41KS50bygwLjUsIHsgb3BhY2l0eTogMCB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVJbiB9KS5zdGFydCgpO1xuICAgICAgICBUVyh0aGlzLmRpY2UyLm5vZGUpLmRlbGF5KDEuNSkudG8oMC41LCB7IG9wYWNpdHk6IDAgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lSW4gfSkuc3RhcnQoKTtcbiAgICAgICAgVFcodGhpcy5kaWNlMy5ub2RlKS5kZWxheSgxLjUpLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZUluIH0pLnN0YXJ0KCk7XG5cbiAgICAgICAgdGhpcy5ub2RlQmF0LnkgPSAxNTA7XG4gICAgICAgIHRoaXMubm9kZUJhdC5vcGFjaXR5ID0gMDtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubm9kZUJhdCk7XG4gICAgICAgIHRoaXMubm9kZUJhdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBUVyh0aGlzLm5vZGVCYXQpLmRlbGF5KDEuNSlcbiAgICAgICAgICAgIC50bygwLjc1LCB7IHk6IDIwLjE5Mywgb3BhY2l0eTogMjU1LCBzY2FsZTogMS4wIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dCB9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudGFibGUuc2V0QW5pbWF0aW9uKDAsIEFOSU1fU1RBVEUuVEFCTEVfRFJBR09OLCB0cnVlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcblxuICAgICAgICBUVyh0aGlzLm5vZGVCYXQpLnRhZygxKTtcbiAgICAgICAgVFcodGhpcy5kaWNlMy5ub2RlKS50YWcoMSk7XG4gICAgICAgIFRXKHRoaXMuZGljZTIubm9kZSkudGFnKDEpO1xuICAgICAgICBUVyh0aGlzLmRpY2UxLm5vZGUpLnRhZygxKTtcbiAgICB9XG4gICAgc2V0RGljZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpY2UxLm5vZGUuYWN0aXZlIHx8IHRoaXMuZGljZTEubm9kZS5vcGFjaXR5ICE9IDI1NSkge1xuICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubm9kZUJhdCk7XG4gICAgICAgICAgICBUVyh0aGlzLm5vZGVCYXQpLnRvKDAuNSwgeyB5OiAxMDAsIG9wYWNpdHk6IDAsIHNjYWxlOiAxLjIgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0IH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICBUVyh0aGlzLmRpY2UxLm5vZGUpLnRvKDAuNSwgeyBvcGFjaXR5OiAyNTUgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0IH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICBUVyh0aGlzLmRpY2UyLm5vZGUpLnRvKDAuNSwgeyBvcGFjaXR5OiAyNTUgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0IH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICBUVyh0aGlzLmRpY2UzLm5vZGUpLnRvKDAuNSwgeyBvcGFjaXR5OiAyNTUgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0IH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICBUVyh0aGlzLmRpY2UxLm5vZGUpLnRhZygxKTtcbiAgICAgICAgICAgIFRXKHRoaXMuZGljZTMubm9kZSkudGFnKDEpO1xuICAgICAgICAgICAgVFcodGhpcy5kaWNlMi5ub2RlKS50YWcoMSk7XG4gICAgICAgICAgICB0aGlzLmRpY2UxLm5vZGUuYWN0aXZlID0gdGhpcy5kaWNlMi5ub2RlLmFjdGl2ZSA9IHRoaXMuZGljZTMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5kaWNlMS5zZXRBbmltYXRpb24oMCwgdGhpcy5nZXRBbmltYXRpb25EaWNlRW5kKHRoaXMucmVzdWx0WzBdKSwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5kaWNlMi5zZXRBbmltYXRpb24oMCwgdGhpcy5nZXRBbmltYXRpb25EaWNlRW5kKHRoaXMucmVzdWx0WzFdKSwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5kaWNlMy5zZXRBbmltYXRpb24oMCwgdGhpcy5nZXRBbmltYXRpb25EaWNlRW5kKHRoaXMucmVzdWx0WzJdKSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldEFuaW1hdGlvbkRpY2VFbmQoZGljZSkge1xuICAgICAgICB2YXIgYW5pbSA9IFwiXCI7XG4gICAgICAgIGlmIChkaWNlID09IDEpIGFuaW0gPSBcIiMxIEVORF9GMVwiO1xuICAgICAgICBlbHNlIGlmIChkaWNlID09IDIpIGFuaW0gPSBcIiMxIEVORF9GMlwiO1xuICAgICAgICBlbHNlIGlmIChkaWNlID09IDMpIGFuaW0gPSBcIiMxIEVORF9GM1wiO1xuICAgICAgICBlbHNlIGlmIChkaWNlID09IDQpIGFuaW0gPSBcIiMxIEVORF9GNFwiO1xuICAgICAgICBlbHNlIGlmIChkaWNlID09IDUpIGFuaW0gPSBcIiMxIEVORF9GNVwiO1xuICAgICAgICBlbHNlIGlmIChkaWNlID09IDYpIGFuaW0gPSBcIiMxIEVORF9GNlwiO1xuICAgICAgICByZXR1cm4gYW5pbTtcbiAgICB9XG4gICAgZ2V0QW5pbWF0aW9uRGljZVN0YXJ0KGRpY2UpIHtcbiAgICAgICAgdmFyIGFuaW0gPSBcIlwiO1xuICAgICAgICBsZXQgbGlzdFByZWZpeCA9IFtcIiMxXCIsIFwiIzJcIiwgXCIjM1wiXTtcbiAgICAgICAgbGV0IHJhblByZSA9IGxpc3RQcmVmaXhbMF07XG4gICAgICAgIGlmIChkaWNlID09IDEpIGFuaW0gPSByYW5QcmUgKyBcIiBXSElURV9GMVwiO1xuICAgICAgICBlbHNlIGlmIChkaWNlID09IDIpIGFuaW0gPSByYW5QcmUgKyBcIiBXSElURV9GMlwiO1xuICAgICAgICBlbHNlIGlmIChkaWNlID09IDMpIGFuaW0gPSByYW5QcmUgKyBcIiBXSElURV9GM1wiO1xuICAgICAgICBlbHNlIGlmIChkaWNlID09IDQpIGFuaW0gPSByYW5QcmUgKyBcIiBXSElURV9GNFwiO1xuICAgICAgICBlbHNlIGlmIChkaWNlID09IDUpIGFuaW0gPSByYW5QcmUgKyBcIiBXSElURV9GNVwiO1xuICAgICAgICBlbHNlIGlmIChkaWNlID09IDYpIGFuaW0gPSByYW5QcmUgKyBcIiBXSElURV9GNlwiO1xuICAgICAgICByZXR1cm4gYW5pbTtcbiAgICB9XG4gICAgb25DbGljaygpIHtcbiAgICAgICAgdGhpcy5sb2dpbkdhbWUoKTtcbiAgICB9XG4gICAgbG9naW5HYW1lKCkge1xuXG4gICAgfVxuICAgIHN1YmNyaWJlV1MoKSB7XG4gICAgICAgIFRhaVhpdVNUTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmNvbm5lY3QoKTtcbiAgICB9XG4gICAgb25DbGlja0hvbm9yKCkge1xuICAgICAgICBpZiAodGhpcy5wb3B1cEhvbm9yID09IG51bGwpIHtcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoXCJUYWlYaXVTaWV1VG9jXCIpLmxvYWQoXCJQcmVmYWJzL1BvcHVwSG9ub3JzXCIsIGNjLlByZWZhYiwgZnVuY3Rpb24gKGZpbmlzaCwgdG90YWwsIGl0ZW0pIHtcblxuICAgICAgICAgICAgfSwgKGVycjEsIHByZWZhYjogY2MuUHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEhvbm9yID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKS5nZXRDb21wb25lbnQoXCJUYWlYaXVTVC5Qb3B1cEhvbm9yc1wiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwSG9ub3Iubm9kZS5wYXJlbnQgPSB0aGlzLnBvcHVwQ29udGFpbmVyO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBIb25vci5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEhvbm9yLnNob3coKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwcy5wdXNoKHRoaXMucG9wdXBIb25vci5ub2RlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwSG9ub3Iuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uQ2xpY2tIaXN0b3J5KCkge1xuICAgICAgICBpZiAodGhpcy5wb3B1cEhpc3RvcnkgPT0gbnVsbCkge1xuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmdldEJ1bmRsZShcIlRhaVhpdVNpZXVUb2NcIikubG9hZChcIlByZWZhYnMvUG9wdXBIaXN0b3J5XCIsIGNjLlByZWZhYiwgZnVuY3Rpb24gKGZpbmlzaCwgdG90YWwsIGl0ZW0pIHtcblxuICAgICAgICAgICAgfSwgKGVycjEsIHByZWZhYjogY2MuUHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEhpc3RvcnkgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChcIlRhaVhpdVNULlBvcHVwSGlzdG9yeVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwSGlzdG9yeS5ub2RlLnBhcmVudCA9IHRoaXMucG9wdXBDb250YWluZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEhpc3Rvcnkubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBIaXN0b3J5LnNob3coKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwcy5wdXNoKHRoaXMucG9wdXBIaXN0b3J5Lm5vZGUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBIaXN0b3J5LnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkNsaWNrSGlzdG9yeVNlc3Npb24oKSB7XG5cbiAgICAgICAgaWYgKHRoaXMucG9wdXBEZXRhaWxTZXNzaW9uID09IG51bGwpIHtcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoXCJUYWlYaXVTaWV1VG9jXCIpLmxvYWQoXCJQcmVmYWJzL1BvcHVwRGV0YWlsSGlzdG9yeVwiLCBjYy5QcmVmYWIsIGZ1bmN0aW9uIChmaW5pc2gsIHRvdGFsLCBpdGVtKSB7XG5cbiAgICAgICAgICAgIH0sIChlcnIxLCBwcmVmYWI6IGNjLlByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBEZXRhaWxTZXNzaW9uID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKS5nZXRDb21wb25lbnQoXCJUYWlYaXVTVC5Qb3B1cERldGFpbEhpc3RvcnlcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cERldGFpbFNlc3Npb24ubm9kZS5wYXJlbnQgPSB0aGlzLnBvcHVwQ29udGFpbmVyO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBEZXRhaWxTZXNzaW9uLnNob3dEZXRhaWwodGhpcy5zZXNzaW9uIC0gMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cHMucHVzaCh0aGlzLnBvcHVwRGV0YWlsU2Vzc2lvbi5ub2RlKTtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBEZXRhaWxTZXNzaW9uLnNob3dEZXRhaWwodGhpcy5zZXNzaW9uIC0gMSk7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBvbkNsaWNrU29pQ2F1KCkge1xuICAgICAgICBpZiAodGhpcy5wb3B1cFNvaUNhdSA9PSBudWxsKSB7XG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKFwiVGFpWGl1U2lldVRvY1wiKS5sb2FkKFwiUHJlZmFicy9Qb3B1cFNvaUNhdVwiLCBjYy5QcmVmYWIsIGZ1bmN0aW9uIChmaW5pc2gsIHRvdGFsLCBpdGVtKSB7XG4gICAgICAgICAgICB9LCAoZXJyMSwgcHJlZmFiOiBjYy5QcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwU29pQ2F1ID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKS5nZXRDb21wb25lbnQoXCJUYWlYaXVTVC5Qb3B1cFNvaUNhdVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwU29pQ2F1Lm5vZGUucGFyZW50ID0gdGhpcy5wb3B1cENvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwU29pQ2F1LnNob3coKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwcy5wdXNoKHRoaXMucG9wdXBTb2lDYXUubm9kZSk7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwU29pQ2F1LnNob3coKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIG9uQ2xpY2tHdWlkZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucG9wdXBHdWlkZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKFwiVGFpWGl1U2lldVRvY1wiKS5sb2FkKFwiUHJlZmFicy9Qb3B1cEd1aWRlXCIsIGNjLlByZWZhYiwgZnVuY3Rpb24gKGZpbmlzaCwgdG90YWwsIGl0ZW0pIHtcblxuICAgICAgICAgICAgfSwgKGVycjEsIHByZWZhYjogY2MuUHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEd1aWRlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKS5nZXRDb21wb25lbnQoXCJEaWFsb2dcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEd1aWRlLm5vZGUucGFyZW50ID0gdGhpcy5wb3B1cENvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwR3VpZGUuc2hvdygpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBzLnB1c2godGhpcy5wb3B1cEd1aWRlLm5vZGUpO1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3B1cEd1aWRlLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgcmVPcmRlcigpIHtcbiAgICAgICAgc3VwZXIucmVPcmRlcigpO1xuICAgIH1cblxuXG4gICAgb25DbGlja0Nsb3NlKCkge1xuICAgICAgICB0aGlzLmRpc21pc3MoKTtcbiAgICAgICAgQXBwLmluc3RhbmNlLmhpZGVHYW1lTWluaShcIlRhaVhpdVNpZXVUb2NcIik7XG4gICAgfVxuICAgIG9uQ2xpY2tDaGF0KCkge1xuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0JnTWluaUdhbWUoXCJUYWlYaXVTaWV1VG9jXCIpO1xuICAgICAgICB0aGlzLnNob3dOb2RlQ2hhdCghdGhpcy5ub2RlQ2hhdC5hY3RpdmUpO1xuICAgIH1cbiAgICBvbkNsaWNrU2VuZENoYXQoKSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93QmdNaW5pR2FtZShcIlRhaVhpdVNpZXVUb2NcIik7XG4gICAgICAgIGxldCBkYXRhOiBhbnkgPSB7fVxuICAgICAgICBkYXRhLnUgPSBDb25maWdzLkxvZ2luLk5pY2tuYW1lO1xuICAgICAgICBkYXRhLm0gPSB0aGlzLmVkYkNoYXQuc3RyaW5nLnRyaW0oKTtcbiAgICAgICAgdGhpcy5lZGJDaGF0LnN0cmluZyA9IFwiXCI7XG4gICAgICAgIFRhaVhpdVNUTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmRDaGF0KGRhdGEpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tTZW5kQ2hhdE5oYW5oKG1zZykge1xuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0JnTWluaUdhbWUoXCJUYWlYaXVTaWV1VG9jXCIpO1xuICAgICAgICBsZXQgZGF0YTogYW55ID0ge31cbiAgICAgICAgZGF0YS51ID0gQ29uZmlncy5Mb2dpbi5OaWNrbmFtZTtcbiAgICAgICAgZGF0YS5tID0gICAgbXNnO1xuICAgICAgICBUYWlYaXVTVE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kQ2hhdChkYXRhKTtcbiAgICB9XG4gICAgb25DbGlja0JldChldmVuLCBkYXRhKSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93QmdNaW5pR2FtZShcIlRhaVhpdVNpZXVUb2NcIik7XG4gICAgICAgIGlmKHRoaXMuY3VycmVudEdhdGU8MCl7XG4gICAgICAgICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF90YWl4aXVfY2hvb3NlX2dhdGUnKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKENvbmZpZ3MuTG9naW4uQ29pbiA8IHBhcnNlSW50KGRhdGEpKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9ub3RfZW5vdWdoJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXRlR2FtZSA9PSBTVEFURV9HQU1FLkJFVCkge1xuICAgICAgICAgICAgbGV0IGFtb3VudCA9IHBhcnNlSW50KGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QmV0ICs9IGFtb3VudDtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRHYXRlID09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxiQmV0VGFpLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwckJ0bkJldFRhaS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxiQmV0VGFpLCB0aGlzLmN1cnJlbnRCZXQsIDAuMyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudEdhdGUgPT0gMikge1xuICAgICAgICAgICAgICAgIHRoaXMubGJCZXRYaXUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByQnRuQmV0WGl1LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJCZXRYaXUsIHRoaXMuY3VycmVudEJldCwgMC4zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRCdG5CZXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEJ0bkJldC5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QnRuQmV0ID0gZXZlbi50YXJnZXQ7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRCdG5CZXQuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiI0ZGRTAwMFwiKTtcbiAgICAgICAgICAgIFRXKHRoaXMuY3VycmVudEJ0bkJldCkudG8oMC4xLCB7IHNjYWxlOiAxLjIgfSkudG8oMC4xLCB7IHNjYWxlOiAxLjAgfSkuc3RhcnQoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlR2FtZSA9PSBTVEFURV9HQU1FLlBSRVBBUkVfUkVTVUxUKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9iZXRfZXJyb3I4JykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfYmV0X2Vycm9yMycpKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIG9uQ2xpY2tBbGxJbigpIHtcbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dCZ01pbmlHYW1lKFwiVGFpWGl1U2lldVRvY1wiKTtcbiAgICAgICAgaWYgKENvbmZpZ3MuTG9naW4uQ29pbiA8IDEwMDApIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2JldF9lcnJvcjcnKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gbGV0IGRhdGFCZXQ6IGFueSA9IHt9O1xuICAgICAgICAvLyBkYXRhQmV0LnRhaXhpdUlkID0gdGhpcy5zZXNzaW9uO1xuICAgICAgICAvLyBkYXRhQmV0LmxvZ2lubmFtZSA9IENvbmZpZ3MuTG9naW4uTmlja25hbWU7XG4gICAgICAgIC8vIGRhdGFCZXQuYmV0YW1vdW50ID0gQ29uZmlncy5Mb2dpbi5Db2luO1xuICAgICAgICAvLyBkYXRhQmV0LnR5cGVkID0gdGhpcy5jdXJyZW50R2F0ZTtcbiAgICAgICAgLy8gbGV0IGJldEZyb20gPSAwO1xuICAgICAgICAvLyBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgIC8vICAgICBiZXRGcm9tID0gY2Muc3lzLm9zID09IGNjLnN5cy5PU19BTkRST0lEID8gMiA6IDE7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZGF0YUJldC5iZXRmcm9tID0gYmV0RnJvbTtcbiAgICAgICAgLy8gVGFpWGl1U1ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZEJldChkYXRhQmV0KVxuICAgICAgICB0aGlzLm9uQ2xpY2tCZXQobnVsbCwgQ29uZmlncy5Mb2dpbi5Db2luKTtcbiAgICB9XG4gICAgb25DbGlja0NvbmZpcm1CZXQoKSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93QmdNaW5pR2FtZShcIlRhaVhpdVNpZXVUb2NcIik7XG4gICAgICAgIGlmICh0aGlzLnRpbWVDb25maXJtQmV0ID09IDApIHtcbiAgICAgICAgICAgIGxldCBtc2cgPSBBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfbm90aWZ5X2Zhc3RfYWN0aW9uXCIpO1xuICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QobXNnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyAgY2MubG9nKFwibGFzdCBiZXQgYW1vdW50PT1cIiArIHRoaXMubGFzdEJldEFtb3VudCk7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRHYXRlIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfdGFpeGl1X2Nob29zZV9nYXRlJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRCZXQgPD0gMCAmJiB0aGlzLmxhc3RCZXRBbW91bnQgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfYmV0X2Vycm9yOScpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZUdhbWUgPT0gU1RBVEVfR0FNRS5QUkVQQVJFX1JFU1VMVCkge1xuICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfYmV0X2Vycm9yOCcpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVRhaVhpdVNUTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmNoZWNrU3ViQ2hhbm5lbCh0aGlzLmdhbWVTdWJzY3JpYmVJZCkpIHtcbiAgICAgICAgICAgIFRhaVhpdVNUTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnN1YnNjcmliZShjbWQuQVBJLlVTRVIpO1xuICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfYmV0X2Vycm9yMicpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpbWVDb25maXJtQmV0ID0gMDtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50aW1lQ29uZmlybUJldCA9IDE7XG4gICAgICAgIH0sIDEuMClcbiAgICAgICAgbGV0IGRhdGFCZXQ6IGFueSA9IHt9O1xuICAgICAgICBkYXRhQmV0LnRhaXhpdUlkID0gdGhpcy5zZXNzaW9uO1xuICAgICAgICBkYXRhQmV0LmxvZ2lubmFtZSA9IENvbmZpZ3MuTG9naW4uTmlja25hbWU7XG4gICAgICAgIGRhdGFCZXQuYmV0YW1vdW50ID0gdGhpcy5jdXJyZW50QmV0O1xuICAgICAgICAvLyAgY2MubG9nKFwibGFzdCBiZXQgYW1vdW50PT1cIiArIHRoaXMubGFzdEJldEFtb3VudCk7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRCZXQgPT0gMCAmJiB0aGlzLmxhc3RCZXRBbW91bnQgPiAwKSB7XG4gICAgICAgICAgICBkYXRhQmV0LmJldGFtb3VudCA9IHRoaXMubGFzdEJldEFtb3VudDtcbiAgICAgICAgfVxuICAgICAgICBkYXRhQmV0LnR5cGVkID0gdGhpcy5jdXJyZW50R2F0ZTtcbiAgICAgICAgbGV0IGJldEZyb20gPSAwO1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBiZXRGcm9tID0gY2Muc3lzLm9zID09IGNjLnN5cy5PU19BTkRST0lEID8gMiA6IDE7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YUJldC5iZXRmcm9tID0gYmV0RnJvbTtcbiAgICAgICAgVGFpWGl1U1ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZEJldChkYXRhQmV0KVxuICAgIH1cbiAgICBnZXRIaXN0b3J5U2Vzc2lvbigpIHtcbiAgICAgICAgVGFpWGl1U1ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuZ2V0SGlzdG9yeVNlc3Npb24oKVxuICAgIH1cbiAgICBvbkNsaWNrQ2FuY2VsQmV0KCkge1xuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0JnTWluaUdhbWUoXCJUYWlYaXVTaWV1VG9jXCIpO1xuICAgICAgICAvLyB0aGlzLnNob3dOb2RlQnRuQmV0KGZhbHNlKTtcbiAgICAgICAgdGhpcy5zcHJCdG5CZXRUYWkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zcHJCdG5CZXRYaXUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sYkJldFhpdS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxiQmV0VGFpLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3VycmVudEJldCA9IDA7XG4gICAgfVxuICAgIHNldFRpbWVDb3VudERvd24oZGF0YSkge1xuXG4gICAgfVxuICAgIG9uQ2xpY2tDaG9vc2VHYXRlKGV2ZW4sIGRhdGEpIHtcbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dCZ01pbmlHYW1lKFwiVGFpWGl1U2lldVRvY1wiKTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEdhdGUgIT0gLTEgJiYgdGhpcy50b3RhbEJldCkge1xuICAgICAgICAgICAgaWYgKChkYXRhID09IFwiVEFJXCIgJiYgdGhpcy5jdXJyZW50R2F0ZSA9PSAyKSB8fCAoZGF0YSA9PSBcIlhJVVwiICYmIHRoaXMuY3VycmVudEdhdGUgPT0gMSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF90YWl4aXVfY2hhdF9lcnJvcjQnKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXRlR2FtZSA9PSBTVEFURV9HQU1FLlJFU1VMVCkge1xuICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfYmV0X2Vycm9yMycpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlR2FtZSA9PSBTVEFURV9HQU1FLlBSRVBBUkVfUkVTVUxUKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9iZXRfZXJyb3I4JykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoZGF0YSkge1xuICAgICAgICAgICAgY2FzZSBcIlRBSVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEdhdGUgPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEJldCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5sYkJldFRhaS5zdHJpbmcgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmxiQmV0WGl1Lm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5sYkJldFRhaS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJCdG5CZXRUYWkucGFyZW50LmdldENoaWxkQnlOYW1lKFwiYm94QmV0XCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJCdG5CZXRYaXUucGFyZW50LmdldENoaWxkQnlOYW1lKFwiYm94QmV0XCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByQnRuQmV0VGFpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByQnRuQmV0WGl1LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiWElVXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50R2F0ZSA9IDI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QmV0ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmxiQmV0WGl1LnN0cmluZyA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIHRoaXMubGJCZXRUYWkubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxiQmV0WGl1Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwckJ0bkJldFRhaS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByQnRuQmV0WGl1LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByQnRuQmV0VGFpLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImJveEJldFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwckJ0bkJldFhpdS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJib3hCZXRcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3dOb2RlQnRuQmV0KHRydWUpO1xuICAgIH1cbiAgICBzaG93Tm9kZUJ0bkJldChzdGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5ub2RlQnRuQmV0LmFjdGl2ZSA9PSBmYWxzZSAmJiBzdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlQnRuQmV0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBidG5CZXQgPSB0aGlzLm5vZGVCdG5CZXQuY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgbGV0IHRpbWVEZWxheSA9IDAuMDUgKiBpO1xuICAgICAgICAgICAgICAgIGJ0bkJldC5zY2FsZSA9IDA7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4oYnRuQmV0KS5zZXF1ZW5jZShjYy50d2VlbigpLmRlbGF5KHRpbWVEZWxheSksIGNjLnR3ZWVuKCkudG8oMC4xLCB7IHNjYWxlOiAxLjAgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5iYWNrT3V0IH0pKS5zdGFydCgpO1xuICAgICAgICAgICAgICAgIC8vIGJ0bkJldC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKHRpbWVEZWxheSksIGNjLnNjYWxlVG8oMC4xLCAxKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlQnRuQmV0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNob3dOb2RlQ2hhdChzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZUNoYXQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIFRXKHRoaXMubm9kZUNoYXQpLnNldCh7IHg6IGNjLndpblNpemUud2lkdGgsIG9wYWNpdHk6IDAgfSkudG8oMC4zLCB7IHg6IDU1OC4wMywgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dCB9KS5zdGFydCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVFcodGhpcy5ub2RlQ2hhdCkudG8oMC4zLCB7IHg6IGNjLndpblNpemUud2lkdGgsIG9wYWNpdHk6IDAgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lSW4gfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlQ2hhdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBzaG93UmVzdWx0V2luKHN0YXRlKSB7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgbGV0IGFjU2NhbGUxID0gVFcoKS50bygwLjI1LCB7IHNjYWxlOiAxLjIgfSk7XG4gICAgICAgICAgICBsZXQgYWNSb3RhdGUxID0gVFcoKS50bygwLjEyNSwgeyBhbmdsZTogMTAgfSk7XG4gICAgICAgICAgICBsZXQgYWNSb3RhdGUyID0gVFcoKS50bygwLjEyNSwgeyBhbmdsZTogMCB9KTtcbiAgICAgICAgICAgIGxldCBhY1JvdGF0ZTMgPSBUVygpLnRvKDAuMTI1LCB7IGFuZ2xlOiAtMTAgfSk7XG4gICAgICAgICAgICBsZXQgYWNSb3RhdGU0ID0gVFcoKS50bygwLjEyNSwgeyBhbmdsZTogMCB9KTtcbiAgICAgICAgICAgIGxldCBhY1NjYWxlMiA9IFRXKCkudG8oMC4yNSwgeyBzY2FsZTogMS4wIH0pO1xuICAgICAgICAgICAgbGV0IGFjU2VxUm8xID0gVFcoKS5zZXF1ZW5jZShhY1JvdGF0ZTEsIGFjUm90YXRlMiwgYWNSb3RhdGUzLCBhY1JvdGF0ZTQsIGFjU2NhbGUyKTtcbiAgICAgICAgICAgIHRoaXMubGJTY29yZS5zdHJpbmcgPSB0aGlzLnRvdGFsUmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmxiU2NvcmUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5iZ19TY29yZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5iZ0xpZ2h0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy50b3RhbFJlc3VsdCA+IDEwKSB7XG4gICAgICAgICAgICAgICAgVFcodGhpcy5ub2RlVHh0VGFpKS5yZXBlYXQoNSwgVFcoKS5zZXF1ZW5jZShUVygpLmRlbGF5KDAuNSksIFRXKCkucGFyYWxsZWwoYWNTY2FsZTEsIGFjU2VxUm8xKSkpLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5iZ0xpZ2h0LnggPSB0aGlzLm5vZGVUeHRUYWkueDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iZ0xpZ2h0LnggPSB0aGlzLm5vZGVUeHRYaXUueDtcbiAgICAgICAgICAgICAgICBUVyh0aGlzLm5vZGVUeHRYaXUpLnJlcGVhdCg1LCBUVygpLnNlcXVlbmNlKFRXKCkuZGVsYXkoMC41KSwgVFcoKS5wYXJhbGxlbChhY1NjYWxlMSwgYWNTZXFSbzEpKSkuc3RhcnQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubm9kZVR4dFRhaSk7XG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5ub2RlVHh0WGl1KTtcbiAgICAgICAgICAgIHRoaXMubm9kZVR4dFRhaS5zY2FsZSA9IDEuMDtcbiAgICAgICAgICAgIHRoaXMubm9kZVR4dFhpdS5zY2FsZSA9IDEuMDtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGxvYWRMaXN0SGlzdG9yeVNob3J0KCkge1xuICAgICAgICBsZXQgZGF0YUhpcyA9IHRoaXMuaGlzdG9yeVNob3J0LnNsaWNlKDAsIDE4KS5yZXZlcnNlKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YUhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLm5vZGVIaXN0b3J5U2hvcnQuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5ub2RlSGlzdG9yeVNob3J0LmNoaWxkcmVuWzBdKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVIaXN0b3J5U2hvcnQuYWRkQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHR5cGVvZiBkYXRhSGlzW2ldID09IFwic3RyaW5nXCIgPyBKU09OLnBhcnNlKGRhdGFIaXNbaV0pIDogZGF0YUhpc1tpXTtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBkYXRhWzBdICsgZGF0YVsxXSArIGRhdGFbMl07XG4gICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gcmVzdWx0ID4gMTAgPyB0aGlzLnNwckRvdHNbMF0gOiB0aGlzLnNwckRvdHNbMV07XG4gICAgICAgICAgICBpZiAocmVzdWx0ID4gMTApIHtcbiAgICAgICAgICAgICAgICBpdGVtLnNldENvbnRlbnRTaXplKGNjLnNpemUoMjMsIDIzKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW0uc2V0Q29udGVudFNpemUoY2Muc2l6ZSgyNiwgMjYpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGl0ZW0ueSA9IDA7XG4gICAgICAgICAgICBUVyhpdGVtKS5zZXQoeyBzY2FsZTogMCB9KS5kZWxheSgwLjAxICogaSkudG8oMC4zLCB7IHNjYWxlOiAxLjAgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5iYWNrT3V0IH0pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlSGlzdG9yeVNob3J0LmNoaWxkcmVuLmluZGV4T2YoaXRlbSkgPT0gMTcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFRXKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoVFcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2VxdWVuY2UoVFcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyB5OiAxMCB9KSwgVFcoKS50bygwLjUsIHsgeTogMCB9KSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2hvd1RvYXN0KG1zZykge1xuICAgICAgICB0aGlzLmFsZXJ0VG9hc3QuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nID0gbXNnO1xuICAgICAgICB0aGlzLmFsZXJ0VG9hc3QuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuYWxlcnRUb2FzdCk7XG4gICAgICAgIC8vIFRXKHRoaXMuYWxlcnRUb2FzdCkuc2V0KHsgeTogLTI1IH0pLnRvKDEuNSwgeyB5OiAyNSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgLy8gICAgIHRoaXMuYWxlcnRUb2FzdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gfSkuc3RhcnQoKTtcbiAgICAgICAgVFcodGhpcy5hbGVydFRvYXN0KS5zZXQoeyB4OiAtMzAwLCBvcGFjaXR5OiAwIH0pXG4gICAgICAgICAgICAudG8oMC4zLCB7IHg6IDAsIG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXQgfSlcbiAgICAgICAgICAgIC5kZWxheSgxLjQpXG4gICAgICAgICAgICAudG8oMC4zLCB7IHg6IDMwMCwgb3BhY2l0eTogMCB9LCB7IGVhc2luZzogY2MuZWFzaW5nLmJhY2tJbiB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0VG9hc3QuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICBUVyh0aGlzLmFsZXJ0VG9hc3QpLnRhZygxKTtcblxuICAgIH1cbiAgICBpbml0TGlzdENoYXQoKSB7XG4gICAgICAgIHRoaXMuc2NyQ2hhdC5jb250ZW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLkNISUxEX0FEREVELCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBpZiAodGhpcy5zY3JDaGF0LmNvbnRlbnQueSA+IDApIHtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnNjckNoYXQuc2Nyb2xsVG9Cb3R0b20oMC4zKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIHRoaXMub25TY3JvbGxDaGF0RXZlbnQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLnNjckNoYXQuY29udGVudC5jaGlsZHJlbkNvdW50ID09IDEpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTU7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NyQ2hhdC5jb250ZW50LmFkZENoaWxkKGNjLmluc3RhbnRpYXRlKHRoaXMuc2NyQ2hhdC5jb250ZW50LmNoaWxkcmVuWzBdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RDaGF0SGlzdG9yeS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmxpc3RDaGF0SGlzdG9yeVtpXTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hhdChkYXRhLnUsIGRhdGEubSwgaSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93Tm9kZUNoYXQodHJ1ZSk7XG5cbiAgICB9XG4gICAgcmVsb2FkTGlzdENoYXQoKSB7XG5cbiAgICB9XG4gICAgYWRkQ2hhdCh1LCBtLCBpbmRleCkge1xuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuc2NyQ2hhdC5jb250ZW50LmNoaWxkcmVuW2luZGV4XTtcbiAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5zY3JDaGF0LmNvbnRlbnQuY2hpbGRyZW5bMF0pO1xuICAgICAgICAgICAgdGhpcy5zY3JDaGF0LmNvbnRlbnQuYWRkQ2hpbGQoaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBpdGVtLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgIGxldCBuYW1lID0gdTtcbiAgICAgICAgaWYgKG5hbWUubGVuZ3RoID4gMTApXG4gICAgICAgICAgICBuYW1lID0gbmFtZS5zdWJzdHJpbmcoMCwgNykgKyBcIi4uXCI7XG4gICAgICAgIG0gPSBtLnJlcGxhY2UoLyhbXFx1RTAwMC1cXHVGOEZGXXxcXHVEODNDW1xcdURGMDAtXFx1REZGRl18XFx1RDgzRFtcXHVEQzAwLVxcdURERkZdKS9nLCAnJyk7XG4gICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBuYW1lICsgXCIgOiBcIiArIG07XG4gICAgICAgIGl0ZW0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBuYW1lICsgXCIgOiBcIjtcbiAgICAgICAgLy8gdGhpcy5vblNjcm9sbENoYXRFdmVudCgpO1xuICAgICAgICBpZiAodGhpcy5zY3JDaGF0LmNvbnRlbnQuY2hpbGRyZW5Db3VudCA+PSAxNSkge1xuICAgICAgICAgICAgdGhpcy5zY3JDaGF0LmNvbnRlbnQuY2hpbGRyZW5bMF0uZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uU2Nyb2xsQ2hhdEV2ZW50KCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2NyQ2hhdC5jb250ZW50LmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLnNjckNoYXQuY29udGVudC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxldCB2aWV3ID0gdGhpcy5zY3JDaGF0Lm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWV3XCIpO1xuICAgICAgICAgICAgbGV0IHBvc1dvcmxkID0gdGhpcy5zY3JDaGF0LmNvbnRlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGl0ZW0uZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgICAgICBsZXQgcG9zSW5WaWV3ID0gdmlldy5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3NXb3JsZCk7XG4gICAgICAgICAgICBpZiAocG9zSW5WaWV3LnkgPiB2aWV3LmhlaWdodCArIGl0ZW0uaGVpZ2h0ICogMiB8fCBwb3NJblZpZXcueSA8IC1pdGVtLmhlaWdodCkge1xuICAgICAgICAgICAgICAgIGl0ZW0ub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW0ub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19