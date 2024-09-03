
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/XocDia/XocDiaScript/XocDia.Play.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c930d7rTZRE4oeBVh3a3fLa', 'XocDia.Play');
// XocDia/XocDiaScript/XocDia.Play.ts

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
var XocDia_Cmd_1 = require("./XocDia.Cmd");
var XocDia_Player_1 = require("./XocDia.Player");
var Configs_1 = require("../../Loading/src/Configs");
var XocDia_XocDiaController_1 = require("./XocDia.XocDiaController");
var XocDia_BtnPayBet_1 = require("./XocDia.BtnPayBet");
var XocDia_XocDiaNetworkClient_1 = require("./XocDia.XocDiaNetworkClient");
var XocDia_BtnBet_1 = require("./XocDia.BtnBet");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var Random_1 = require("../../Lobby/LobbyScript/Script/common/Random");
var TimeUtils_1 = require("../../Lobby/LobbyScript/Script/common/TimeUtils");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
var SPUtils_1 = require("../../Lobby/LobbyScript/Script/common/SPUtils");
var XocDia_PopupHistory_1 = require("./XocDia.PopupHistory");
var audio_clip;
(function (audio_clip) {
    audio_clip[audio_clip["BG"] = 0] = "BG";
    audio_clip[audio_clip["LOSE"] = 1] = "LOSE";
    audio_clip[audio_clip["WIN"] = 2] = "WIN";
    audio_clip[audio_clip["START_GAME"] = 3] = "START_GAME";
    audio_clip[audio_clip["XOC_DIA"] = 4] = "XOC_DIA";
    audio_clip[audio_clip["CHIP"] = 5] = "CHIP";
    audio_clip[audio_clip["CLOCK"] = 6] = "CLOCK";
    audio_clip[audio_clip["JOIN"] = 7] = "JOIN";
})(audio_clip || (audio_clip = {}));
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TW = cc.tween;
var TYPE_RESULT;
(function (TYPE_RESULT) {
    TYPE_RESULT[TYPE_RESULT["FOUR_WHITE"] = 1] = "FOUR_WHITE";
    TYPE_RESULT[TYPE_RESULT["FOUR_RED"] = 2] = "FOUR_RED";
    TYPE_RESULT[TYPE_RESULT["THREE_RED"] = 3] = "THREE_RED";
    TYPE_RESULT[TYPE_RESULT["THREE_WHITE"] = 4] = "THREE_WHITE";
    TYPE_RESULT[TYPE_RESULT["TWO_RED_TWO_WHITE"] = 5] = "TWO_RED_TWO_WHITE";
})(TYPE_RESULT || (TYPE_RESULT = {}));
var STATE_DEALER;
(function (STATE_DEALER) {
    STATE_DEALER[STATE_DEALER["IDLE"] = 1] = "IDLE";
    STATE_DEALER[STATE_DEALER["MOI_CUOC"] = 2] = "MOI_CUOC";
    STATE_DEALER[STATE_DEALER["TRA_TIEN"] = 3] = "TRA_TIEN";
    STATE_DEALER[STATE_DEALER["XOC_LO"] = 4] = "XOC_LO";
    STATE_DEALER[STATE_DEALER["MO_DIA"] = 5] = "MO_DIA";
})(STATE_DEALER || (STATE_DEALER = {}));
var Play = /** @class */ (function (_super) {
    __extends(Play, _super);
    function Play() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.history = null;
        _this.nodeExit = null;
        _this.scrollChip = null;
        _this.contentChatNhanh = null;
        _this.bgChat = null;
        _this.UI_Chat = null;
        _this.toggleMusic = null;
        _this.toggleSound = null;
        _this.nodeSetting = null;
        _this.nodeTutorial = null;
        _this.lblToast = null;
        _this.boxSetting = null;
        _this.boxMusic = null;
        _this.mePlayer = null;
        _this.players = [];
        _this.btnBets = [];
        _this.btnPayBets = [];
        _this.dealer = null;
        _this.boxMsg = null;
        _this.labelMsg = null;
        _this.dealerHandPoint = null;
        _this.diceResult = null;
        _this.sprChipSmalls = [];
        _this.chips = null;
        _this.chipTemplate = null;
        _this.sprProgressTime = null;
        _this.lblProgressTime = null;
        _this.lblHistoryOdd = null;
        _this.lblHistoryEven = null;
        _this.sfOdd = null;
        _this.sfEven = null;
        _this.lblHistoryItems = null;
        _this.edtChatInput = null;
        _this.inited = false;
        _this.roomId = 0;
        _this.chipsInDoors = {};
        _this.lastBowlStateName = "";
        _this.curTime = 0;
        _this.gameState = 0;
        _this.listBets = [1000, 5000, 10000, 50000, 100000, 500000, 1000000, 5000000, 10000000, 50000000, 100000000];
        // 1k 5k 10k 50k 100k 500k 1m 5m 10m 50m 100m
        _this.betIdx = 0;
        _this.minBetIdx = 0;
        _this.isBanker = false;
        _this.banker = "";
        _this.historyChatData = [];
        _this.lastUpdateTime = TimeUtils_1.default.currentTimeMillis();
        _this.chipPool = null;
        _this.clockTimeSche = null;
        _this.percentScroll = 0;
        _this.arrTimeOut = [];
        _this.isClearOldData = false;
        _this.totalTimeState = 0;
        _this.listChip = [];
        return _this;
        // update (dt) {}
    }
    Play.prototype.onBtnSscrollLeft = function () {
        this.percentScroll -= 0.3;
        if (this.percentScroll <= 0)
            this.percentScroll = 0;
        this.scrollChip.scrollToPercentHorizontal(this.percentScroll, 0.4);
    };
    Play.prototype.onBtnScrollRight = function () {
        this.percentScroll += 0.3;
        if (this.percentScroll >= 1)
            this.percentScroll = 1;
        this.scrollChip.scrollToPercentHorizontal(this.percentScroll, 0.4);
    };
    Play.prototype.onBtnClickBgChat = function () {
        this.UI_Chat.opacity = 100;
        this.bgChat.active = false;
    };
    Play.prototype.onBtnClickBoxChat = function () {
        this.UI_Chat.opacity = 255;
        this.bgChat.active = true;
    };
    Play.prototype.showUIChat = function () {
        this.onBtnClickBoxChat();
        this.UI_Chat.active = true;
        cc.tween(this.UI_Chat).to(0.3, { x: cc.winSize.width / 2 - this.UI_Chat.width / 2 }, { easing: cc.easing.sineOut }).start();
    };
    Play.prototype.toggleUIChat = function () {
        if (this.UI_Chat.active == false) {
            this.showUIChat();
        }
        else {
            this.closeUIChat();
        }
    };
    Play.prototype.closeUIChat = function () {
        var _this = this;
        this.UI_Chat.active = false;
        cc.tween(this.UI_Chat).to(0.3, { x: cc.winSize.width / 2 + this.UI_Chat.width / 2 }, { easing: cc.easing.sineIn }).call(function () {
            _this.UI_Chat.active = false;
        }).start();
    };
    Play.prototype.playerChat = function (res) {
        var player = this.getPlayer(res.nickname);
        if (player) {
            var chair = res["chair"];
            var isIcon = res["isIcon"];
            var content = res["content"];
            var seatId = chair;
            if (isIcon) {
                // Chat Icon
                player.showChatEmotion(content);
            }
            else {
                // Chat Msg
                player.showChatMsg(content);
            }
        }
    };
    Play.prototype.chatEmotion = function (event, id) {
        XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.SendChatRoom(1, id));
        this.closeUIChat();
    };
    Play.prototype.chatMsg = function () {
        if (this.edtChatInput.string.trim().length > 0) {
            XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.SendChatRoom(0, this.edtChatInput.string));
            this.edtChatInput.string = "";
            this.closeUIChat();
        }
    };
    Play.prototype.chatNhanhMsg = function (msg) {
        if (msg.trim().length > 0) {
            XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.SendChatRoom(0, msg));
            this.closeUIChat();
        }
    };
    Play.prototype.start = function () {
        var _this = this;
        this.percentScroll = 0;
        this.scrollChip.scrollToPercentHorizontal(this.percentScroll, 0.4);
        var self = this;
        var _loop_1 = function () {
            var node = this_1.contentChatNhanh.children[i];
            node.on('click', function () {
                self.chatNhanhMsg(node.children[0].getComponent(cc.Label).string);
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.contentChatNhanh.childrenCount; i++) {
            _loop_1();
        }
        this.chipPool = new cc.NodePool("Chip");
        this.lblToast.node.parent.active = false;
        var _loop_2 = function (i_1) {
            var btn = this_2.btnPayBets[i_1];
            btn.node.on("click", function () {
                if (_this.gameState != 2) {
                    _this.showToast(App_1.default.instance.getTextLang('txt_bet_error3'));
                    return;
                }
                XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.SendPutMoney(i_1, _this.listBets[_this.betIdx]));
            });
        };
        var this_2 = this;
        for (var i_1 = 0; i_1 < this.btnPayBets.length; i_1++) {
            _loop_2(i_1);
        }
        var _loop_3 = function (i_2) {
            var btnBet = this_3.btnBets[i_2];
            btnBet.node.on("click", function () {
                _this.betIdx = i_2;
                for (var j = 0; j < _this.btnBets.length; j++) {
                    _this.btnBets[j].active.active = j == i_2;
                }
                //  cc.log("betIdx:" + this.betIdx);
            });
        };
        var this_3 = this;
        for (var i_2 = 0; i_2 < this.btnBets.length; i_2++) {
            _loop_3(i_2);
        }
        this.setupTimeRunInBg();
    };
    Play.prototype.onBtnHistory = function () {
        var _this = this;
        // this.actCoomingSoon();
        // return;
        if (this.history == null) {
            App_1.default.instance.showLoading(true);
            cc.assetManager.getBundle("XocDia").load("PopupHistory", cc.Prefab, function (finish, total, item) {
            }, function (err1, prefab) {
                App_1.default.instance.showLoading(false);
                if (err1 != null) {
                    //  cc.log("errr load game XocDia:", err1);
                }
                else {
                    //  cc.log("vao daycai chu");
                    _this.history = cc.instantiate(prefab).getComponent("XocDia.PopupHistory");
                    _this.history.node.parent = _this.node.parent;
                    _this.history.node.active = true;
                    _this.history.show();
                }
            });
        }
        else {
            this.history.node.parent = this.node.parent;
            this.history.node.active = true;
            this.history.show();
        }
        // App.instance.showLoading(true);
        // Http.get(Configs.App.API, { "c": 139, "p": this.page, "un": Configs.Login.Nickname, "gn": "Audition" }, (err, res) => {
        //     App.instance.showLoading(false);
        //     if (err != null) return;
        //     //  cc.log("");
        // });
    };
    Play.prototype.setupTimeRunInBg = function () {
        var _this = this;
        cc.game.on(cc.game.EVENT_SHOW, function () {
            // XocDiaNetworkClient.getInstance().send(new cmd.SendReconnect());
            // if(this.state == STATE_DEALER.MOI_CUOC && this.isClearOldData == false){
            //     if(this.nodeExit && this.nodeExit.active){
            //         this.node.active = false;
            //         XocDiaController.instance.lobby.show();
            //     }
            //     this.setStateDealer(STATE_DEALER.XOC_LO);
            //     this.btnPayBets.forEach(e => e.reset());
            //     this.clearChips();
            //     this.resetDiceResult();
            for (var i = 0; i < _this.players.length; i++) {
                _this.players[i].clearUI();
            }
            //     for(var i=0;i<this.arrTimeOut.length;i++){
            //         clearTimeout(this.arrTimeOut[i]);
            //     }
            //     this.arrTimeOut = [];
            //     this.isClearOldData = true;
            //     if(this.dataJoinRoom){
            //         this.show(this.dataJoinRoom);
            //     }
            // }
        });
    };
    ;
    Play.prototype.updateChipTotalBets = function () {
        for (var i = 0; i < this.btnPayBets.length; i++) {
            if (this.btnPayBets[i].lblTotalBet.string != "") {
            }
        }
    };
    Play.prototype.hideSetting = function () {
        this.nodeSetting.active = false;
    };
    Play.prototype.showSetting = function () {
        this.toggleMusic.isChecked = SPUtils_1.default.getMusicVolumn() > 0;
        this.toggleSound.isChecked = SPUtils_1.default.getSoundVolumn() > 0;
        this.nodeSetting.active = true;
    };
    Play.prototype.showTutorial = function () {
        this.nodeTutorial.active = true;
    };
    Play.prototype.hideTutorial = function () {
        this.nodeTutorial.active = false;
    };
    Play.prototype.onBtnToggleMusic = function () {
        SPUtils_1.default.setMusicVolumn(this.toggleMusic.isChecked ? 1 : 0);
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.ON_AUDIO_CHANGED);
    };
    Play.prototype.onBtnToggleSound = function () {
        SPUtils_1.default.setSoundVolumn(this.toggleSound.isChecked ? 1 : 0);
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.ON_AUDIO_CHANGED);
    };
    Play.prototype.showToast = function (msg) {
        var _this = this;
        this.lblToast.string = msg;
        this.lblToast.node.parent.opacity = 0;
        this.lblToast.node.parent.active = true;
        cc.Tween.stopAllByTarget(this.lblToast.node.parent);
        cc.tween(this.lblToast.node.parent)
            .to(0.3, { opacity: 255 }, { easing: "linear" })
            .delay(1)
            .to(0.3, { opacity: 0 }, { easing: "linear" })
            .call(function () {
            _this.lblToast.node.parent.active = false;
        })
            .start();
    };
    Play.prototype.update = function (dt) {
        if (this.curTime > 0) {
            var timeLeft = Math.max(0, this.curTime - TimeUtils_1.default.currentTimeMillis());
            this.sprProgressTime.fillRange = timeLeft / this.totalTimeState;
            if (timeLeft == 0) {
                this.curTime = 0;
                this.sprProgressTime.node.parent.active = false;
                this.unschedule(this.clockTimeSche);
            }
        }
        // let t = TimeUtils.currentTimeMillis();
        // if (t - this.lastUpdateTime > 2000) {
        //     this.node.stopAllActions();
        //     App.instance.showLoading(true);
        //     XocDiaNetworkClient.getInstance().send(new cmd.SendJoinRoomById(this.roomId));
        // }
        // this.lastUpdateTime = t;
    };
    Play.prototype.init = function () {
        var _this = this;
        if (this.inited)
            return;
        this.inited = true;
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function () {
            if (!_this.node.active)
                return;
            _this.mePlayer.setCoin(Configs_1.default.Login.Coin);
        }, this);
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        XocDia_XocDiaNetworkClient_1.default.getInstance().addListener(function (data) {
            var inpacket = new Network_InPacket_1.default(data);
            switch (inpacket.getCmdId()) {
                case XocDia_Cmd_1.default.Code.JOIN_ROOM_SUCCESS:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new XocDia_Cmd_1.default.ReceiveJoinRoomSuccess(data);
                        //  cc.log("SendJoinRoomById JOIN_ROOM_SUCCESS play");
                        XocDia_XocDiaController_1.default.instance.showGamePlay(res);
                    }
                    break;
                case XocDia_Cmd_1.default.Code.USER_JOIN_ROOM_SUCCESS:
                    {
                        var res = new XocDia_Cmd_1.default.ReceiveUserJoinRoom(data);
                        var player = _this.getRandomEmptyPlayer();
                        if (player != null) {
                            player.set(res.nickname, res.avatar, res.money, false);
                        }
                    }
                    break;
                case XocDia_Cmd_1.default.Code.USER_OUT_ROOM:
                    {
                        var res = new XocDia_Cmd_1.default.ReceiveUserOutRoom(data);
                        var player = _this.getPlayer(res.nickname);
                        if (player != null)
                            player.leave();
                    }
                    break;
                case XocDia_Cmd_1.default.Code.QUIT_ROOM:
                    {
                        var res = new XocDia_Cmd_1.default.ReceiveLeavedRoom(data);
                        _this.node.active = false;
                        XocDia_XocDiaController_1.default.instance.lobby.show();
                        switch (res.reason) {
                            case 1:
                                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_not_enough_money'));
                                break;
                            case 2:
                                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_reparing'));
                                break;
                            case 5:
                                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_room_err13'));
                                break;
                            case 6:
                                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_room_err10'));
                                break;
                        }
                    }
                    break;
                case XocDia_Cmd_1.default.Code.DANG_KY_THOAT_PHONG:
                    {
                        var res = new XocDia_Cmd_1.default.ReceiveLeaveRoom(data);
                        //  cc.log("DANG_KY_THOAT_PHONG:" + res.bRegis);
                        if (res.bRegis) {
                            if (_this.nodeExit) {
                                _this.nodeExit.active = true;
                            }
                            App_1.default.instance.showToast(App_1.default.instance.getTextLang('txt_room_leave'));
                        }
                        else {
                            if (_this.nodeExit) {
                                _this.nodeExit.active = false;
                            }
                            App_1.default.instance.showToast(App_1.default.instance.getTextLang('txt_room_cancel_leave'));
                        }
                    }
                    break;
                case XocDia_Cmd_1.default.Code.ACTION_IN_GAME:
                    {
                        var res = new XocDia_Cmd_1.default.ReceiveActionInGame(data);
                        var msg = "";
                        _this.gameState = res.action;
                        switch (res.action) {
                            case 1: //bat dau van moi
                                msg = "Bắt đầu ván mới";
                                _this.sprProgressTime.node.parent.active = false;
                                _this.unschedule(_this.clockTimeSche);
                                XocDia_XocDiaController_1.default.instance.playAudioEffect(audio_clip.START_GAME);
                                break;
                            case 2: //bat dau dat cua
                                msg = "Bắt đầu đặt cửa";
                                _this.sprProgressTime.node.parent.active = true;
                                _this.lblProgressTime.string = "Đang cược...";
                                _this.curTime = TimeUtils_1.default.currentTimeMillis() + (res.time + 10) * 1000;
                                _this.totalTimeState = (res.time + 10) * 1000;
                                _this.setStateDealer(STATE_DEALER.MOI_CUOC);
                                _this.schedule(_this.clockTimeSche = function () {
                                    if (_this.node.active) {
                                        XocDia_XocDiaController_1.default.instance.playAudioEffect(audio_clip.CLOCK);
                                    }
                                    else {
                                        _this.unschedule(_this.clockTimeSche);
                                    }
                                }, 1.0, res.time);
                                break;
                            case 3: //bat dau ban cua
                                msg = "Bắt đầu bán cửa";
                                _this.sprProgressTime.node.parent.active = true;
                                _this.lblProgressTime.string = "Đang bán cửa...";
                                _this.curTime = TimeUtils_1.default.currentTimeMillis() + res.time * 1000;
                                _this.totalTimeState = res.time * 1000;
                                break;
                            case 4: //nha cai can tien, hoan tien
                                msg = "Nhà cái cân tiền, hoàn tiền";
                                _this.sprProgressTime.node.parent.active = true;
                                _this.lblProgressTime.string = "Đang cân cửa...";
                                _this.curTime = TimeUtils_1.default.currentTimeMillis() + res.time * 1000;
                                _this.totalTimeState = res.time * 1000;
                                break;
                            case 5: //bat dau hoan tien
                                msg = "Bắt đầu hoàn tiền";
                                _this.sprProgressTime.node.parent.active = true;
                                _this.lblProgressTime.string = "Đang hoàn tiền...";
                                _this.curTime = TimeUtils_1.default.currentTimeMillis() + res.time * 1000;
                                _this.totalTimeState = res.time * 1000;
                                break;
                            case 6: //bat dau tra thuong
                                msg = "Bắt đầu trả thưởng";
                                _this.setStateDealer(STATE_DEALER.TRA_TIEN);
                                _this.sprProgressTime.node.parent.active = true;
                                _this.lblProgressTime.string = "Đang trả thưởng...";
                                _this.curTime = TimeUtils_1.default.currentTimeMillis() + res.time * 1000;
                                _this.totalTimeState = res.time * 1000;
                                break;
                        }
                        if (msg != "") {
                            _this.labelMsg.string = msg;
                            _this.boxMsg.active = false;
                            _this.scheduleOnce(function () {
                                _this.boxMsg.active = true;
                                _this.scheduleOnce(function () {
                                    _this.boxMsg.active = false;
                                }, 0.9);
                            }, 0.3);
                        }
                    }
                    break;
                case XocDia_Cmd_1.default.Code.START_GAME:
                    {
                        var res = new XocDia_Cmd_1.default.ReceiveStartGame(data);
                        if (res.banker != "" && res.banker != Configs_1.default.Login.Nickname && _this.isBanker) {
                            App_1.default.instance.alertDialog.showMsg("Bạn không đủ tiền để tiếp tục làm cái!");
                        }
                        _this.banker = res.banker;
                        _this.isBanker = _this.banker == Configs_1.default.Login.Nickname;
                        for (var i = 0; i < _this.players.length; i++) {
                            var player = _this.players[i];
                            player.banker.active = player.nickname != "" && player.nickname == _this.banker;
                        }
                        _this.btnPayBets.forEach(function (e) { return e.reset(); });
                        _this.clearChips();
                        _this.resetDiceResult();
                        _this.setStateDealer(STATE_DEALER.XOC_LO);
                    }
                    break;
                case XocDia_Cmd_1.default.Code.PUT_MONEY:
                    {
                        var res = new XocDia_Cmd_1.default.ReceivePutMoney(data);
                        var btnPayBet = _this.btnPayBets[res.potId];
                        btnPayBet.setTotalBet(res.potMoney);
                        if (res.nickname == Configs_1.default.Login.Nickname) {
                            //  cc.log("XOC DIA PUT_MONEY:" + res.error);
                            switch (res.error) {
                                case 0:
                                    break;
                                case 1:
                                    App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_not_enough'));
                                    return;
                                case 2:
                                    App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_bet_error1'));
                                    return;
                                default:
                                    App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_unknown_error"));
                                    return;
                            }
                            Configs_1.default.Login.Coin = res.currentMoney;
                            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                        }
                        var player = _this.getPlayer(res.nickname);
                        if (player != null) {
                            player.setCoin(res.currentMoney);
                            var listCoin = _this.convertMoneyToChipMoney(res.betMoney);
                            var _loop_4 = function (i) {
                                var chip = _this.getChip(listCoin[i]);
                                chip.name = player.nickname;
                                chip.position = player.node.position;
                                if (!_this.chipsInDoors.hasOwnProperty(res.potId)) {
                                    _this.chipsInDoors[res.potId] = [];
                                }
                                _this.chipsInDoors[res.potId].push(chip);
                                var position = btnPayBet.node.position.clone();
                                var target = new cc.Vec2(Random_1.default.rangeInt(-btnPayBet.node.width / 4 - 20, btnPayBet.node.width / 4 + 20), Random_1.default.rangeInt(-btnPayBet.node.height / 4 - 20, btnPayBet.node.height / 2 - 70));
                                position.x += target.x;
                                position.y += target.y;
                                cc.Tween.stopAllByTarget(chip);
                                TW(chip).then(cc.jumpTo(0.5, cc.v2(position.x, position.y), 50, 2).easing(cc.easeSineOut()))
                                    .call(function () {
                                    chip.position = position;
                                })
                                    .start();
                            };
                            for (var i = 0; i < listCoin.length; i++) {
                                _loop_4(i);
                            }
                            XocDia_XocDiaController_1.default.instance.playAudioEffect(audio_clip.CHIP);
                        }
                    }
                    break;
                case XocDia_Cmd_1.default.Code.REFUN_MONEY:
                    {
                        var res = new XocDia_Cmd_1.default.ReceiveRefunMoney(data);
                        for (var i = 0; i < res.playerInfosRefun.length; i++) {
                            var rfData = res.playerInfosRefun[i];
                            var player = _this.getPlayer(rfData["nickname"]);
                            if (player != null) {
                                player.showRefundCoin(rfData["moneyRefund"]);
                                player.setCoin(rfData["currentMoney"]);
                            }
                            if (rfData["nickname"] == Configs_1.default.Login.Nickname) {
                                Configs_1.default.Login.Coin = rfData["currentMoney"];
                                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                            }
                        }
                        for (var i = 0; i < res.potID.length; i++) {
                            var potData = res.potID[i];
                            _this.btnPayBets[i].setTotalBet(potData["totalMoney"]);
                        }
                    }
                    break;
                case XocDia_Cmd_1.default.Code.FINISH_GAME:
                    {
                        _this.isClearOldData = false;
                        var res_1 = new XocDia_Cmd_1.default.ReceiveFinishGame(data);
                        for (var i = 0; i < res_1.playerInfoWin.length; i++) {
                            var playerData = res_1.playerInfoWin[i];
                            if (playerData["nickname"] == Configs_1.default.Login.Nickname) {
                                Configs_1.default.Login.Coin = playerData["currentMoney"];
                                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                                break;
                            }
                        }
                        var countRed = 0;
                        var countWhite = 0;
                        for (var i = 0; i < res_1.diceIDs.length; i++) {
                            if (res_1.diceIDs[i] == 1)
                                countRed++;
                            else
                                countWhite++;
                        }
                        var isChan_1 = (res_1.diceIDs[0] + res_1.diceIDs[1] + res_1.diceIDs[2] + res_1.diceIDs[3]) % 2 == 0;
                        var isLe3do1trang_1 = res_1.infoAllPot[4].win;
                        var isLe3trang1do_1 = res_1.infoAllPot[5].win;
                        var isChan4do_1 = res_1.infoAllPot[3].win;
                        var isChan4trang_1 = res_1.infoAllPot[2].win;
                        var doorWins_1 = [];
                        _this.setStateDealer(STATE_DEALER.MO_DIA);
                        var cb = function () {
                            if (isChan_1) {
                                doorWins_1.push(0);
                                _this.btnPayBets[0].active.active = true;
                                if (isChan4do_1) {
                                    doorWins_1.push(3);
                                    _this.btnPayBets[3].active.active = true;
                                }
                                else if (isChan4trang_1) {
                                    doorWins_1.push(2);
                                    _this.btnPayBets[2].active.active = true;
                                }
                                else {
                                }
                            }
                            else {
                                doorWins_1.push(1);
                                _this.btnPayBets[1].active.active = true;
                                if (isLe3do1trang_1) {
                                    doorWins_1.push(4);
                                    _this.btnPayBets[4].active.active = true;
                                }
                                else if (isLe3trang1do_1) {
                                    doorWins_1.push(5);
                                    _this.btnPayBets[5].active.active = true;
                                }
                            }
                            var chipsWithNickname = {};
                            var _loop_5 = function (k) {
                                var doorId = parseInt(k);
                                var chips = _this.chipsInDoors[doorId];
                                if (doorWins_1.indexOf(doorId) == -1) {
                                    var btnPayBet = _this.btnPayBets[doorId];
                                    var position = btnPayBet.node.position.clone();
                                    position.y -= 10;
                                    var positionAdd = position.clone();
                                    _this.arrTimeOut.push(setTimeout(function () {
                                        var node = new cc.Node();
                                        node.parent = _this.chips;
                                        node.opacity = 0;
                                        for (var i = 0; i < chips.length; i++) {
                                            chips[i].parent = node;
                                            // chips[i].position = positionAdd;
                                            // positionAdd.y += 3;
                                        }
                                        cc.Tween.stopAllByTarget(node);
                                        TW(node).to(0.1, { opacity: 255 }, { easing: cc.easing.sineIn })
                                            .delay(0.3)
                                            .to(0.5, { scale: 0, x: _this.dealerHandPoint.x, y: _this.dealerHandPoint.y })
                                            .to(0.1, { opacity: 0 }, { easing: cc.easing.sineOut })
                                            .call(function () {
                                            for (var i = 0; i < chips.length; i++) {
                                                chips[i].parent = _this.chips;
                                                chips[i].opacity = 255;
                                                chips[i].active = false;
                                            }
                                            node.destroy();
                                        }).start();
                                    }, 800));
                                }
                                else {
                                    for (var i = 0; i < chips.length; i++) {
                                        var chip = chips[i];
                                        var nickname = chip.name;
                                        if (!chipsWithNickname.hasOwnProperty(nickname)) {
                                            chipsWithNickname[nickname] = [];
                                        }
                                        chipsWithNickname[nickname].push(chip);
                                    }
                                }
                            };
                            for (var k in _this.chipsInDoors) {
                                _loop_5(k);
                            }
                            _this.arrTimeOut.push(setTimeout(function () {
                                for (var k in chipsWithNickname) {
                                    var player = _this.getPlayer(k);
                                    if (player != null) {
                                        var chips = chipsWithNickname[k];
                                        var positionAdd = player.chipsPoint.clone();
                                        var positionAdd2 = player.chipsPoint2.clone();
                                        var count1 = 0;
                                        var count2 = 0;
                                        var _loop_6 = function (i) {
                                            var chip = chips[i];
                                            var opacity1 = count1 < 15 ? 255 : 0;
                                            cc.Tween.stopAllByTarget(chip);
                                            TW(chip).to(0.5, { x: positionAdd.x, y: positionAdd.y, opacity: opacity1 }, { easing: cc.easing.sineOut })
                                                .delay(1 + (chips.length * 0.03 - i * 0.03))
                                                .to(0.5, { position: player.node.position }, { easing: cc.easing.sineIn })
                                                .call(function () {
                                                chip.active = false;
                                            }).start();
                                            var dealerChip = _this.getChip(0);
                                            dealerChip.getComponent(cc.Sprite).spriteFrame = chip.getComponent(cc.Sprite).spriteFrame;
                                            dealerChip.opacity = 0;
                                            dealerChip.position = _this.dealerHandPoint.position;
                                            var opacity2 = count2 < 15 ? 255 : 0;
                                            cc.Tween.stopAllByTarget(dealerChip);
                                            TW(dealerChip).delay(0.5)
                                                .to(0.2, { opacity: opacity2 }, { easing: cc.easing.sineIn })
                                                .to(0.5, { x: positionAdd2.x, y: positionAdd2.y }, { easing: cc.easing.sineOut })
                                                .delay(0.3 + (chips.length * 0.03 - i * 0.03))
                                                .to(0.5, { position: player.node.position }, { easing: cc.easing.sineOut })
                                                .call(function () {
                                                dealerChip.active = false;
                                            }).start();
                                            if (count1 < 15) {
                                                count1++;
                                                positionAdd.y += 3;
                                            }
                                            if (count2 < 15) {
                                                count2++;
                                                positionAdd2.y += 3;
                                            }
                                        };
                                        for (var i = 0; i < chips.length; i++) {
                                            _loop_6(i);
                                        }
                                    }
                                }
                            }, 1500));
                        };
                        if (isChan_1) {
                            if (isChan4do_1) {
                                _this.setDiceResult(TYPE_RESULT.FOUR_RED, cb);
                            }
                            else if (isChan4trang_1) {
                                _this.setDiceResult(TYPE_RESULT.FOUR_WHITE, cb);
                            }
                            else {
                                _this.setDiceResult(TYPE_RESULT.TWO_RED_TWO_WHITE, cb);
                            }
                        }
                        else {
                            if (isLe3do1trang_1) {
                                _this.setDiceResult(TYPE_RESULT.THREE_RED, cb);
                            }
                            else if (isLe3trang1do_1) {
                                _this.setDiceResult(TYPE_RESULT.THREE_WHITE, cb);
                            }
                        }
                        _this.arrTimeOut.push(setTimeout(function () {
                            for (var i = 0; i < res_1.playerInfoWin.length; i++) {
                                var playerData = res_1.playerInfoWin[i];
                                var player = _this.getPlayer(playerData["nickname"]);
                                if (player != null) {
                                    var moneyWinPots = playerData["moneyWinPots"];
                                    moneyWinPots = moneyWinPots.split(',');
                                    var msgWin = "";
                                    for (var j = 0; j < moneyWinPots.length; j++) {
                                        msgWin += Utils_1.default.formatMoney(moneyWinPots[j]) + "\n\n";
                                    }
                                    player.showWinCoinString(msgWin);
                                    player.setCoin(playerData["currentMoney"]);
                                }
                            }
                            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                        }, 3000));
                        if (_this.isBanker) {
                            _this.mePlayer.showWinCoin(res_1.moneyBankerExchange);
                            _this.mePlayer.setCoin(res_1.moneyBankerAfter);
                            Configs_1.default.Login.Coin = res_1.moneyBankerAfter;
                            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                        }
                        XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.CmdSendGetCau());
                    }
                    break;
                case XocDia_Cmd_1.default.Code.SOI_CAU:
                    {
                        var res = new XocDia_Cmd_1.default.ReceiveGetCau(data);
                        _this.lblHistoryOdd.string = Utils_1.default.formatNumber(res.totalOdd);
                        _this.lblHistoryEven.string = Utils_1.default.formatNumber(res.totalEven);
                        for (var i = 0; i < _this.lblHistoryItems.childrenCount; i++) {
                            if (i < res.arrayCau.length) {
                                _this.lblHistoryItems.children[i].getComponent(cc.Sprite).spriteFrame = res.arrayCau[i] == 0 ? _this.sfOdd : _this.sfEven;
                                _this.lblHistoryItems.children[i].active = true;
                            }
                            else {
                                _this.lblHistoryItems.children[i].active = false;
                            }
                        }
                    }
                    break;
                case XocDia_Cmd_1.default.Code.ORDER_BANKER:
                    {
                        var res = new XocDia_Cmd_1.default.ReceiveOrderBanker(data);
                        switch (res.error) {
                            case 0:
                                break;
                            case 1:
                                App_1.default.instance.alertDialog.showMsg("Bạn cần " + Utils_1.default.formatNumber(res.moneyRequire) + " Xu để làm cái!");
                                break;
                            default:
                                App_1.default.instance.alertDialog.showMsg("Lỗi " + res.error + ", không xác định.");
                                break;
                        }
                    }
                    break;
                case XocDia_Cmd_1.default.Code.HUY_LAM_CAI:
                    {
                        var res = new XocDia_Cmd_1.default.ReceiveCancelBanker(data);
                        if (res.bDestroy && _this.isBanker) {
                            App_1.default.instance.alertDialog.showMsg("Đăng ký huỷ làm cái thành công.");
                        }
                    }
                    break;
                case XocDia_Cmd_1.default.Code.INFO_GATE_SELL:
                    {
                        var res = new XocDia_Cmd_1.default.ReceiveInfoGateSell(data);
                    }
                    break;
                case XocDia_Cmd_1.default.Code.INFO_MONEY_AFTER_BANKER_SELL:
                    {
                        var res = new XocDia_Cmd_1.default.ReceiveInfoMoneyAfterBankerSell(data);
                    }
                    break;
                case XocDia_Cmd_1.default.Code.CHAT_MS:
                    {
                        var res = new XocDia_Cmd_1.default.ReceivedChatRoom(data);
                        _this.playerChat(res);
                    }
                    break;
                default:
                    break;
            }
        }, this);
    };
    Play.prototype.showDiceResult = function (cb) {
        var _this = this;
        var bowl = this.diceResult.getChildByName("bat");
        var ranX1 = [Utils_1.default.randomRangeInt(-40, -30), Utils_1.default.randomRange(30, 40)][Utils_1.default.randomRangeInt(0, 2)];
        var ranY1 = [Utils_1.default.randomRangeInt(-40, -30), Utils_1.default.randomRangeInt(30, 40)][Utils_1.default.randomRangeInt(0, 2)];
        var ranX2 = [Utils_1.default.randomRangeInt(-120, -100), Utils_1.default.randomRangeInt(100, 120)][Utils_1.default.randomRangeInt(0, 2)];
        var ranY2 = [Utils_1.default.randomRangeInt(-120, -100), Utils_1.default.randomRangeInt(100, 120)][Utils_1.default.randomRangeInt(0, 2)];
        cc.Tween.stopAllByTarget(bowl);
        TW(bowl).set({ x: -5, y: 7, opacity: 255 }).to(1.0, { x: ranX1, y: ranY1 })
            .delay(0.5).call(function () {
            if (_this.state == STATE_DEALER.MO_DIA) {
                cb();
                XocDia_XocDiaController_1.default.instance.playAudioEffect(audio_clip.WIN);
            }
        })
            .to(0.6, { x: ranX2, y: ranY2, opacity: 0 }, { easing: cc.easing.sineOut }).start();
    };
    Play.prototype.xocDice = function () {
        this.resetDiceResult();
        this.diceResult.active = true;
        cc.Tween.stopAllByTarget(this.diceResult);
        TW(this.diceResult).set({ x: 7.755, y: 66.138, scale: 0 }).to(0.5, { scale: 1, x: 0, y: 66 }, { easing: cc.easing.sineIn }).start();
    };
    Play.prototype.setDiceResult = function (typeResult, cb) {
        var arrSprResult = [];
        switch (typeResult) {
            case TYPE_RESULT.FOUR_RED: {
                arrSprResult.push(this.sfOdd, this.sfOdd, this.sfOdd, this.sfOdd);
                break;
            }
            case TYPE_RESULT.FOUR_WHITE: {
                arrSprResult.push(this.sfEven, this.sfEven, this.sfEven, this.sfEven);
                break;
            }
            case TYPE_RESULT.THREE_RED: {
                arrSprResult.push(this.sfOdd, this.sfEven, this.sfOdd, this.sfOdd);
                break;
            }
            case TYPE_RESULT.THREE_WHITE: {
                arrSprResult.push(this.sfEven, this.sfEven, this.sfOdd, this.sfEven);
                break;
            }
            case TYPE_RESULT.TWO_RED_TWO_WHITE: {
                arrSprResult.push(this.sfEven, this.sfEven, this.sfOdd, this.sfOdd);
                break;
            }
        }
        for (var i = 1; i < 5; i++) {
            this.diceResult.getChildByName("ic_result_" + i).getComponent(cc.Sprite).spriteFrame = arrSprResult[i - 1];
        }
        this.showDiceResult(cb);
    };
    Play.prototype.resetDiceResult = function () {
        cc.Tween.stopAllByTarget(this.diceResult.getChildByName("bat"));
        this.diceResult.getChildByName("bat").setPosition(cc.v2(-6.81, 9.24));
        this.diceResult.getChildByName("bat").opacity = 255;
        // this.diceResult.active = false;
    };
    Play.prototype.resetView = function () {
        this.mePlayer.leave();
        this.players.forEach(function (e) { return e.leave(); });
        this.btnPayBets.forEach(function (e) { return e.reset(); });
        this.setStateDealer(STATE_DEALER.IDLE);
        this.boxMsg.active = false;
        this.resetDiceResult();
        for (var i = 0; i < this.players.length; i++) {
            this.players[i].clearUI();
        }
        for (var i = 0; i < this.arrTimeOut.length; i++) {
            clearTimeout(this.arrTimeOut[i]);
        }
        this.clearChips();
        this.sprProgressTime.node.parent.active = false;
        this.unschedule(this.clockTimeSche);
        this.curTime = 0;
    };
    Play.prototype.getRandomEmptyPlayer = function () {
        var emptyPlayers = new Array();
        for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].nickname == "")
                emptyPlayers.push(this.players[i]);
        }
        if (emptyPlayers.length > 0) {
            return emptyPlayers[Random_1.default.rangeInt(0, emptyPlayers.length)];
        }
        return null;
    };
    Play.prototype.getPlayer = function (nickname) {
        for (var i = 0; i < this.players.length; i++) {
            var player = this.players[i];
            if (player.nickname != "" && player.nickname == nickname)
                return player;
        }
        return null;
    };
    Play.prototype.getChip = function (coin) {
        var ret = null;
        if (this.chipPool.size() <= 0) {
            this.chipPool.put(cc.instantiate(this.chipTemplate));
        }
        ret = this.chipPool.get();
        this.listChip.push(ret);
        ret.parent = this.chips;
        var chipIdx = 0;
        for (var i = 0; i < this.listBets.length; i++) {
            if (this.listBets[i] == coin) {
                chipIdx = i;
                break;
            }
        }
        chipIdx -= 0;
        //  cc.log("getChip:" + chipIdx + ":" + this.minBetIdx);
        ret.getComponent(cc.Sprite).spriteFrame = this.sprChipSmalls[chipIdx];
        ret.opacity = 255;
        ret.active = true;
        ret.setSiblingIndex(this.chips.childrenCount - 1);
        return ret;
    };
    Play.prototype.clearChips = function () {
        this.chipTemplate.active = false;
        for (var i = 0; i < this.listChip.length; i++) {
            this.chipPool.put(this.listChip[i]);
        }
        this.listChip = [];
        this.chipsInDoors = {};
    };
    Play.prototype.convertMoneyToChipMoney = function (coin) {
        var ret = new Array();
        var _coin = coin;
        var minCoin = this.listBets[this.minBetIdx];
        var counter = 0;
        while (_coin >= minCoin || counter < 15) {
            for (var i = this.minBetIdx + this.btnBets.length; i >= this.minBetIdx; i--) {
                if (_coin >= this.listBets[i]) {
                    ret.push(this.listBets[i]);
                    _coin -= this.listBets[i];
                    break;
                }
            }
            counter++;
        }
        return ret;
    };
    Play.prototype.show = function (data) {
        var _this = this;
        //  cc.log("ReceiveJoinRoomSuccess show:" + JSON.stringify(data));
        this.dataJoinRoom = data;
        if (this.chipPool == null) {
            this.chipPool = new cc.NodePool("Chip");
        }
        this.node.active = true;
        this.resetView();
        if (this.nodeExit && this.nodeExit.active) {
            this.nodeExit.active = false;
        }
        this.roomId = data.roomId;
        this.lastUpdateTime = TimeUtils_1.default.currentTimeMillis();
        XocDia_XocDiaController_1.default.instance.playAudioEffect(audio_clip.JOIN);
        Configs_1.default.Login.Coin = data.money;
        this.isBanker = data.banker;
        this.banker = "";
        if (this.isBanker) {
            this.banker = Configs_1.default.Login.Nickname;
        }
        else {
        }
        this.mePlayer.set(Configs_1.default.Login.Nickname, Configs_1.default.Login.Avatar, Configs_1.default.Login.Coin, data.banker);
        for (var i = 0; i < data.playerInfos.length; i++) {
            var playerData = data.playerInfos[i];
            var player = this.getRandomEmptyPlayer();
            if (player != null) {
                player.set(playerData["nickname"], playerData["avatar"], playerData["money"], playerData["banker"]);
                if (playerData["banker"]) {
                    this.banker = playerData["nickname"];
                }
            }
            else {
                break;
            }
        }
        if (data.gameState == 1 || data.gameState == 2) {
            for (var i = 0; i < data.potID.length; i++) {
                var potData = data.potID[i];
                var btnPayBet = this.btnPayBets[i];
                btnPayBet.setTotalBet(potData["totalMoney"]);
                var listCoin = this.convertMoneyToChipMoney(potData["totalMoney"]);
                var _loop_7 = function (i_3) {
                    var chip = this_4.getChip(listCoin[i_3]);
                    var player = this_4.getPlayer(Configs_1.default.Login.Nickname);
                    chip.name = player.nickname;
                    chip.position = player.node.position;
                    if (!this_4.chipsInDoors.hasOwnProperty(potData.id)) {
                        this_4.chipsInDoors[potData.id] = [];
                    }
                    this_4.chipsInDoors[potData.id].push(chip);
                    var position = btnPayBet.node.position.clone();
                    var target = new cc.Vec2(Random_1.default.rangeInt(-btnPayBet.node.width / 4 - 20, btnPayBet.node.width / 4 + 20), Random_1.default.rangeInt(-btnPayBet.node.height / 4 - 20, btnPayBet.node.height / 2 - 70));
                    position.x += target.x;
                    position.y += target.y;
                    cc.Tween.stopAllByTarget(chip);
                    TW(chip).then(cc.jumpTo(0.5, cc.v2(position.x, position.y), 50, 2).easing(cc.easeSineOut()))
                        .call(function () {
                        chip.position = position;
                    })
                        .start();
                };
                var this_4 = this;
                for (var i_3 = 0; i_3 < listCoin.length; i_3++) {
                    _loop_7(i_3);
                }
                XocDia_XocDiaController_1.default.instance.playAudioEffect(audio_clip.CHIP);
            }
        }
        for (var i = 0; i < this.listBets.length; i++) {
            if (data.moneyBet <= this.listBets[i]) {
                this.betIdx = i;
                this.minBetIdx = this.betIdx;
                break;
            }
        }
        for (var i = 0; i < this.btnBets.length; i++) {
            var btnBet = this.btnBets[i];
            btnBet.active.active = i == this.minBetIdx;
            btnBet.node.active = i >= this.minBetIdx;
        }
        this.gameState = data.gameState;
        var msg = "";
        switch (this.gameState) {
            case 1: //bat dau van moi
                msg = "Bắt đầu ván mới";
                break;
            case 2: //bat dau dat cua
                {
                    msg = "Bắt đầu đặt cửa";
                    // if(this.nodeExit && this.nodeExit.active){
                    //     this.node.active = false;
                    //     this.actBack();
                    // }
                    this.sprProgressTime.node.parent.active = true;
                    this.curTime = TimeUtils_1.default.currentTimeMillis() + (data.countTime + 10) * 1000;
                    this.totalTimeState = 30000 + 10000;
                    this.lblProgressTime.string = "Đang cược...";
                    this.schedule(this.clockTimeSche = function () {
                        if (_this.node.active) {
                            XocDia_XocDiaController_1.default.instance.playAudioEffect(audio_clip.CLOCK);
                        }
                        else {
                            _this.unschedule(_this.clockTimeSche);
                        }
                    }, 1.0, data.countTime + 10);
                    this.setStateDealer(STATE_DEALER.MOI_CUOC);
                    this.diceResult.active = true;
                }
                break;
            case 4: //nha cai can tien, hoan tien
                msg = "Nhà cái cân tiền, hoàn tiền";
                break;
            case 5: //bat dau hoan tien
                msg = "Bắt đầu hoàn tiền";
                break;
            case 6: //bat dau tra thuong
                msg = "Vui lòng đợi ván sau!";
                this.sprProgressTime.node.parent.active = true;
                this.sprProgressTime.fillRange = 1;
                this.lblProgressTime.string = "Vui lòng đợi ván sau!";
                break;
        }
        if (msg != "") {
            this.setStateDealer(STATE_DEALER.IDLE);
            var label = this.dealer.getComponentInChildren(cc.Label);
            label.string = msg;
            this.scheduleOnce(function () {
                _this.boxMsg.active = true;
                _this.scheduleOnce(function () {
                    _this.boxMsg.active = false;
                }, 0.9);
            }, 0.3);
        }
        XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.CmdSendGetCau());
    };
    Play.prototype.setStateDealer = function (state) {
        var _this = this;
        this.state = state;
        switch (state) {
            case STATE_DEALER.IDLE: {
                this.dealer.timeScale = 1;
                this.dealer.setAnimation(0, "Idle", true);
                break;
            }
            case STATE_DEALER.MOI_CUOC: {
                this.dealer.timeScale = 1;
                this.dealer.setAnimation(0, "MoiDatCuoc1", false);
                this.dealer.setCompleteListener(function () {
                    _this.setStateDealer(STATE_DEALER.IDLE);
                });
                break;
            }
            case STATE_DEALER.TRA_TIEN: {
                this.dealer.timeScale = 1;
                this.dealer.setAnimation(0, "MoidDatCuoc2", false);
                this.dealer.setCompleteListener(function () {
                    _this.setStateDealer(STATE_DEALER.IDLE);
                });
                break;
            }
            case STATE_DEALER.XOC_LO: {
                cc.Tween.stopAllByTarget(this.diceResult);
                TW(this.diceResult).to(0.5, { scale: 0, y: 335 }, { easing: cc.easing.sineIn }).call(function () {
                    _this.diceResult.active = false;
                    _this.dealer.timeScale = 3;
                    _this.dealer.setAnimation(0, "LacDia", false);
                    XocDia_XocDiaController_1.default.instance.playAudioEffect(audio_clip.XOC_DIA);
                    _this.dealer.setCompleteListener(function () {
                        _this.setStateDealer(STATE_DEALER.MOI_CUOC);
                    });
                }).start();
                this.scheduleOnce(function () {
                    _this.xocDice();
                }, 3.2 / 2);
                break;
            }
            case STATE_DEALER.MO_DIA: {
                this.dealer.timeScale = 1;
                this.dealer.setAnimation(0, "MoiDatCuoc2", false);
                this.dealer.setCompleteListener(function () {
                    _this.setStateDealer(STATE_DEALER.IDLE);
                });
                break;
            }
        }
    };
    Play.prototype.actSetting = function () {
        this.boxSetting.active = !this.boxSetting.active;
    };
    Play.prototype.actBackz = function () {
        XocDia_XocDiaNetworkClient_1.default.getInstance().close();
        App_1.default.instance.loadScene("Lobby");
    };
    Play.prototype.actSendChat = function () {
        // App.instance.ShowAlertDialog(App.instance.getTextLang("txt_function_in_development"));
        var msg = this.edtChatInput.string.trim();
        if (msg != "") {
            XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.SendChatRoom(0, msg));
        }
        this.edtChatInput.string = "";
    };
    Play.prototype.actSendChatNhanh = function (msg) {
        // App.instance.ShowAlertDialog(App.instance.getTextLang("txt_function_in_development"));
        if (msg != "") {
            XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.SendChatRoom(0, msg));
        }
        this.edtChatInput.string = "";
    };
    Play.prototype.actTutorial = function () {
        this.showTutorial();
    };
    Play.prototype.actRank = function () {
        App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_function_in_development"));
    };
    Play.prototype.actHistory = function () {
        this.onBtnHistory();
    };
    Play.prototype.actOpenMusic = function () {
        App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_function_in_development"));
    };
    Play.prototype.actBack = function () {
        //  cc.log("XocDia actBack");
        XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.SendLeaveRoom());
    };
    Play.prototype.actOrderBanker = function () {
        XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.SendOrderBanker());
    };
    Play.prototype.actCancelBanker = function () {
        XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.SendCancelBanker());
    };
    __decorate([
        property(XocDia_PopupHistory_1.default)
    ], Play.prototype, "history", void 0);
    __decorate([
        property(cc.Node)
    ], Play.prototype, "nodeExit", void 0);
    __decorate([
        property(cc.ScrollView)
    ], Play.prototype, "scrollChip", void 0);
    __decorate([
        property(cc.Node)
    ], Play.prototype, "contentChatNhanh", void 0);
    __decorate([
        property(cc.Node)
    ], Play.prototype, "bgChat", void 0);
    __decorate([
        property(cc.Node)
    ], Play.prototype, "UI_Chat", void 0);
    __decorate([
        property(cc.Toggle)
    ], Play.prototype, "toggleMusic", void 0);
    __decorate([
        property(cc.Toggle)
    ], Play.prototype, "toggleSound", void 0);
    __decorate([
        property(cc.Node)
    ], Play.prototype, "nodeSetting", void 0);
    __decorate([
        property(cc.Node)
    ], Play.prototype, "nodeTutorial", void 0);
    __decorate([
        property(cc.Label)
    ], Play.prototype, "lblToast", void 0);
    __decorate([
        property(cc.Node)
    ], Play.prototype, "boxSetting", void 0);
    __decorate([
        property(cc.Node)
    ], Play.prototype, "boxMusic", void 0);
    __decorate([
        property(XocDia_Player_1.default)
    ], Play.prototype, "mePlayer", void 0);
    __decorate([
        property([XocDia_Player_1.default])
    ], Play.prototype, "players", void 0);
    __decorate([
        property([XocDia_BtnBet_1.default])
    ], Play.prototype, "btnBets", void 0);
    __decorate([
        property([XocDia_BtnPayBet_1.default])
    ], Play.prototype, "btnPayBets", void 0);
    __decorate([
        property(sp.Skeleton)
    ], Play.prototype, "dealer", void 0);
    __decorate([
        property(cc.Node)
    ], Play.prototype, "boxMsg", void 0);
    __decorate([
        property(cc.Label)
    ], Play.prototype, "labelMsg", void 0);
    __decorate([
        property(cc.Node)
    ], Play.prototype, "dealerHandPoint", void 0);
    __decorate([
        property(cc.Node)
    ], Play.prototype, "diceResult", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Play.prototype, "sprChipSmalls", void 0);
    __decorate([
        property(cc.Node)
    ], Play.prototype, "chips", void 0);
    __decorate([
        property(cc.Node)
    ], Play.prototype, "chipTemplate", void 0);
    __decorate([
        property(cc.Sprite)
    ], Play.prototype, "sprProgressTime", void 0);
    __decorate([
        property(cc.Label)
    ], Play.prototype, "lblProgressTime", void 0);
    __decorate([
        property(cc.Label)
    ], Play.prototype, "lblHistoryOdd", void 0);
    __decorate([
        property(cc.Label)
    ], Play.prototype, "lblHistoryEven", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Play.prototype, "sfOdd", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Play.prototype, "sfEven", void 0);
    __decorate([
        property(cc.Node)
    ], Play.prototype, "lblHistoryItems", void 0);
    __decorate([
        property(cc.EditBox)
    ], Play.prototype, "edtChatInput", void 0);
    Play = __decorate([
        ccclass
    ], Play);
    return Play;
}(cc.Component));
exports.default = Play;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWG9jRGlhXFxYb2NEaWFTY3JpcHRcXFhvY0RpYS5QbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUErQjtBQUMvQixpREFBcUM7QUFDckMscURBQWdEO0FBQ2hELHFFQUF5RDtBQUN6RCx1REFBMkM7QUFDM0MsMkVBQStEO0FBRS9ELGlEQUFxQztBQUVyQyxpRUFBNEQ7QUFDNUQsNkZBQXdGO0FBQ3hGLHVFQUFrRTtBQUNsRSw2RUFBd0U7QUFDeEUscUVBQWdFO0FBQ2hFLDZGQUFnRjtBQUNoRix5RUFBb0U7QUFDcEUsNkRBQTJDO0FBRTNDLElBQUssVUFTSjtBQVRELFdBQUssVUFBVTtJQUNYLHVDQUFNLENBQUE7SUFDTiwyQ0FBUSxDQUFBO0lBQ1IseUNBQU8sQ0FBQTtJQUNQLHVEQUFjLENBQUE7SUFDZCxpREFBVyxDQUFBO0lBQ1gsMkNBQVEsQ0FBQTtJQUNSLDZDQUFTLENBQUE7SUFDVCwyQ0FBUSxDQUFBO0FBQ1osQ0FBQyxFQVRJLFVBQVUsS0FBVixVQUFVLFFBU2Q7QUFDSyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO0FBQ2xCLElBQUssV0FNSjtBQU5ELFdBQUssV0FBVztJQUNaLHlEQUFjLENBQUE7SUFDZCxxREFBWSxDQUFBO0lBQ1osdURBQWEsQ0FBQTtJQUNiLDJEQUFlLENBQUE7SUFDZix1RUFBcUIsQ0FBQTtBQUN6QixDQUFDLEVBTkksV0FBVyxLQUFYLFdBQVcsUUFNZjtBQUNELElBQUssWUFNSjtBQU5ELFdBQUssWUFBWTtJQUNiLCtDQUFRLENBQUE7SUFDUix1REFBWSxDQUFBO0lBQ1osdURBQVksQ0FBQTtJQUNaLG1EQUFVLENBQUE7SUFDVixtREFBVSxDQUFBO0FBQ2QsQ0FBQyxFQU5J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QURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNXO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQ2M7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztpREFDYztJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNZO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ2E7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt1Q0FDSTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3dDQUNLO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ2M7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs4Q0FDVztJQWxFZixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBdXVDeEI7SUFBRCxXQUFDO0NBdnVDRCxBQXV1Q0MsQ0F2dUNpQyxFQUFFLENBQUMsU0FBUyxHQXV1QzdDO2tCQXZ1Q29CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY21kIGZyb20gXCIuL1hvY0RpYS5DbWRcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vWG9jRGlhLlBsYXllclwiO1xuaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBYb2NEaWFDb250cm9sbGVyIGZyb20gXCIuL1hvY0RpYS5Yb2NEaWFDb250cm9sbGVyXCI7XG5pbXBvcnQgQnRuUGF5QmV0IGZyb20gXCIuL1hvY0RpYS5CdG5QYXlCZXRcIjtcbmltcG9ydCBYb2NEaWFOZXR3b3JrQ2xpZW50IGZyb20gXCIuL1hvY0RpYS5Yb2NEaWFOZXR3b3JrQ2xpZW50XCI7XG5pbXBvcnQgUGFuZWxQYXlEb29yIGZyb20gXCIuL1hvY0RpYS5QYW5lbFBheURvb3JcIjtcbmltcG9ydCBCdG5CZXQgZnJvbSBcIi4vWG9jRGlhLkJ0bkJldFwiO1xuaW1wb3J0IEJhbmtlckNvbnRyb2wgZnJvbSBcIi4vWG9jRGlhLkJhbmtlckNvbnRyb2xcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgQnJvYWRjYXN0UmVjZWl2ZXIgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQnJvYWRjYXN0UmVjZWl2ZXJcIjtcbmltcG9ydCBSYW5kb20gZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vUmFuZG9tXCI7XG5pbXBvcnQgVGltZVV0aWxzIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1RpbWVVdGlsc1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgSW5QYWNrZXQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLkluUGFja2V0XCI7XG5pbXBvcnQgU1BVdGlscyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9TUFV0aWxzXCI7XG5pbXBvcnQgSGlzdG9yeSBmcm9tIFwiLi9Yb2NEaWEuUG9wdXBIaXN0b3J5XCJcblxuZW51bSBhdWRpb19jbGlwIHtcbiAgICBCRyA9IDAsXG4gICAgTE9TRSA9IDEsXG4gICAgV0lOID0gMixcbiAgICBTVEFSVF9HQU1FID0gMyxcbiAgICBYT0NfRElBID0gNCxcbiAgICBDSElQID0gNSxcbiAgICBDTE9DSyA9IDYsXG4gICAgSk9JTiA9IDdcbn1cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG52YXIgVFcgPSBjYy50d2VlbjtcbmVudW0gVFlQRV9SRVNVTFQge1xuICAgIEZPVVJfV0hJVEUgPSAxLFxuICAgIEZPVVJfUkVEID0gMixcbiAgICBUSFJFRV9SRUQgPSAzLFxuICAgIFRIUkVFX1dISVRFID0gNCxcbiAgICBUV09fUkVEX1RXT19XSElURSA9IDVcbn1cbmVudW0gU1RBVEVfREVBTEVSIHtcbiAgICBJRExFID0gMSxcbiAgICBNT0lfQ1VPQyA9IDIsXG4gICAgVFJBX1RJRU4gPSAzLFxuICAgIFhPQ19MTyA9IDQsXG4gICAgTU9fRElBID0gNVxufVxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShIaXN0b3J5KVxuICAgIGhpc3Rvcnk6IEhpc3RvcnkgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vZGVFeGl0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcbiAgICBzY3JvbGxDaGlwOiBjYy5TY3JvbGxWaWV3ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb250ZW50Q2hhdE5oYW5oOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBiZ0NoYXQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIFVJX0NoYXQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXG4gICAgdG9nZ2xlTXVzaWM6IGNjLlRvZ2dsZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZSlcbiAgICB0b2dnbGVTb3VuZDogY2MuVG9nZ2xlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlU2V0dGluZzogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZVR1dG9yaWFsOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsVG9hc3Q6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBib3hTZXR0aW5nOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBib3hNdXNpYzogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KFBsYXllcilcbiAgICBtZVBsYXllcjogUGxheWVyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoW1BsYXllcl0pXG4gICAgcGxheWVyczogUGxheWVyW10gPSBbXTtcbiAgICBAcHJvcGVydHkoW0J0bkJldF0pXG4gICAgYnRuQmV0czogQnRuQmV0W10gPSBbXTtcbiAgICBAcHJvcGVydHkoW0J0blBheUJldF0pXG4gICAgYnRuUGF5QmV0czogQnRuUGF5QmV0W10gPSBbXTtcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXG4gICAgZGVhbGVyOiBzcC5Ta2VsZXRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYm94TXNnOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxNc2c6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBkZWFsZXJIYW5kUG9pbnQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGRpY2VSZXN1bHQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxuICAgIHNwckNoaXBTbWFsbHM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjaGlwczogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2hpcFRlbXBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHNwclByb2dyZXNzVGltZTogY2MuU3ByaXRlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsUHJvZ3Jlc3NUaW1lOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibEhpc3RvcnlPZGQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsSGlzdG9yeUV2ZW46IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgc2ZPZGQ6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgc2ZFdmVuOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGJsSGlzdG9yeUl0ZW1zOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBlZHRDaGF0SW5wdXQ6IGNjLkVkaXRCb3ggPSBudWxsO1xuXG5cbiAgICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgcm9vbUlkID0gMDtcblxuICAgIHByaXZhdGUgY2hpcHNJbkRvb3JzOiBhbnkgPSB7fTtcbiAgICBwcml2YXRlIGxhc3RCb3dsU3RhdGVOYW1lID0gXCJcIjtcbiAgICBwcml2YXRlIGN1clRpbWUgPSAwO1xuICAgIHByaXZhdGUgZ2FtZVN0YXRlID0gMDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxpc3RCZXRzID0gWzEwMDAsIDUwMDAsIDEwMDAwLCA1MDAwMCwgMTAwMDAwLCA1MDAwMDAsIDEwMDAwMDAsIDUwMDAwMDAsIDEwMDAwMDAwLCA1MDAwMDAwMCwgMTAwMDAwMDAwXTtcbiAgICAvLyAxayA1ayAxMGsgNTBrIDEwMGsgNTAwayAxbSA1bSAxMG0gNTBtIDEwMG1cbiAgICBwcml2YXRlIGJldElkeCA9IDA7XG4gICAgcHJpdmF0ZSBtaW5CZXRJZHggPSAwO1xuICAgIHByaXZhdGUgaXNCYW5rZXIgPSBmYWxzZTtcbiAgICBwcml2YXRlIGJhbmtlciA9IFwiXCI7XG4gICAgcHJpdmF0ZSBoaXN0b3J5Q2hhdERhdGEgPSBbXTtcblxuICAgIHByaXZhdGUgbGFzdFVwZGF0ZVRpbWUgPSBUaW1lVXRpbHMuY3VycmVudFRpbWVNaWxsaXMoKTtcbiAgICBwcml2YXRlIGNoaXBQb29sID0gbnVsbFxuICAgIHByaXZhdGUgY2xvY2tUaW1lU2NoZSA9IG51bGw7XG5cblxuICAgIG9uQnRuU3Njcm9sbExlZnQoKSB7XG4gICAgICAgIHRoaXMucGVyY2VudFNjcm9sbCAtPSAwLjM7XG4gICAgICAgIGlmICh0aGlzLnBlcmNlbnRTY3JvbGwgPD0gMCkgdGhpcy5wZXJjZW50U2Nyb2xsID0gMDtcblxuICAgICAgICB0aGlzLnNjcm9sbENoaXAuc2Nyb2xsVG9QZXJjZW50SG9yaXpvbnRhbCh0aGlzLnBlcmNlbnRTY3JvbGwsIDAuNCk7XG4gICAgfVxuXG4gICAgb25CdG5TY3JvbGxSaWdodCgpIHtcbiAgICAgICAgdGhpcy5wZXJjZW50U2Nyb2xsICs9IDAuMztcbiAgICAgICAgaWYgKHRoaXMucGVyY2VudFNjcm9sbCA+PSAxKSB0aGlzLnBlcmNlbnRTY3JvbGwgPSAxO1xuICAgICAgICB0aGlzLnNjcm9sbENoaXAuc2Nyb2xsVG9QZXJjZW50SG9yaXpvbnRhbCh0aGlzLnBlcmNlbnRTY3JvbGwsIDAuNCk7XG4gICAgfVxuXG5cbiAgICBvbkJ0bkNsaWNrQmdDaGF0KCkge1xuICAgICAgICB0aGlzLlVJX0NoYXQub3BhY2l0eSA9IDEwMDtcbiAgICAgICAgdGhpcy5iZ0NoYXQuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25CdG5DbGlja0JveENoYXQoKSB7XG4gICAgICAgIHRoaXMuVUlfQ2hhdC5vcGFjaXR5ID0gMjU1O1xuICAgICAgICB0aGlzLmJnQ2hhdC5hY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICBzaG93VUlDaGF0KCkge1xuICAgICAgICB0aGlzLm9uQnRuQ2xpY2tCb3hDaGF0KCk7XG4gICAgICAgIHRoaXMuVUlfQ2hhdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBjYy50d2Vlbih0aGlzLlVJX0NoYXQpLnRvKDAuMywgeyB4OiBjYy53aW5TaXplLndpZHRoIC8gMiAtIHRoaXMuVUlfQ2hhdC53aWR0aCAvIDIgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0IH0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlVUlDaGF0KCkge1xuICAgICAgICBpZiAodGhpcy5VSV9DaGF0LmFjdGl2ZSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5zaG93VUlDaGF0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlVUlDaGF0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZVVJQ2hhdCgpIHtcbiAgICAgICAgdGhpcy5VSV9DaGF0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBjYy50d2Vlbih0aGlzLlVJX0NoYXQpLnRvKDAuMywgeyB4OiBjYy53aW5TaXplLndpZHRoIC8gMiArIHRoaXMuVUlfQ2hhdC53aWR0aCAvIDIgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lSW4gfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLlVJX0NoYXQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcGxheWVyQ2hhdChyZXMpIHtcbiAgICAgICAgbGV0IHBsYXllciA9IHRoaXMuZ2V0UGxheWVyKHJlcy5uaWNrbmFtZSk7XG4gICAgICAgIGlmIChwbGF5ZXIpIHtcbiAgICAgICAgICAgIGxldCBjaGFpciA9IHJlc1tcImNoYWlyXCJdO1xuICAgICAgICAgICAgbGV0IGlzSWNvbiA9IHJlc1tcImlzSWNvblwiXTtcbiAgICAgICAgICAgIGxldCBjb250ZW50ID0gcmVzW1wiY29udGVudFwiXTtcbiAgICAgICAgICAgIGxldCBzZWF0SWQgPSBjaGFpcjtcbiAgICAgICAgICAgIGlmIChpc0ljb24pIHtcbiAgICAgICAgICAgICAgICAvLyBDaGF0IEljb25cbiAgICAgICAgICAgICAgICBwbGF5ZXIuc2hvd0NoYXRFbW90aW9uKGNvbnRlbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBDaGF0IE1zZ1xuICAgICAgICAgICAgICAgIHBsYXllci5zaG93Q2hhdE1zZyhjb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYXRFbW90aW9uKGV2ZW50LCBpZCkge1xuICAgICAgICBYb2NEaWFOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRDaGF0Um9vbSgxLCBpZCkpO1xuICAgICAgICB0aGlzLmNsb3NlVUlDaGF0KCk7XG4gICAgfVxuXG4gICAgY2hhdE1zZygpIHtcbiAgICAgICAgaWYgKHRoaXMuZWR0Q2hhdElucHV0LnN0cmluZy50cmltKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgWG9jRGlhTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kQ2hhdFJvb20oMCwgdGhpcy5lZHRDaGF0SW5wdXQuc3RyaW5nKSk7XG4gICAgICAgICAgICB0aGlzLmVkdENoYXRJbnB1dC5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgdGhpcy5jbG9zZVVJQ2hhdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhdE5oYW5oTXNnKG1zZykge1xuICAgICAgICBpZiAobXNnLnRyaW0oKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBYb2NEaWFOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRDaGF0Um9vbSgwLCBtc2cpKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VVSUNoYXQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHBlcmNlbnRTY3JvbGwgPSAwO1xuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnBlcmNlbnRTY3JvbGwgPSAwO1xuICAgICAgICB0aGlzLnNjcm9sbENoaXAuc2Nyb2xsVG9QZXJjZW50SG9yaXpvbnRhbCh0aGlzLnBlcmNlbnRTY3JvbGwsIDAuNCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbnRlbnRDaGF0TmhhbmguY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuY29udGVudENoYXROaGFuaC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIG5vZGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgc2VsZi5jaGF0TmhhbmhNc2cobm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGlwUG9vbCA9IG5ldyBjYy5Ob2RlUG9vbChcIkNoaXBcIik7XG4gICAgICAgIHRoaXMubGJsVG9hc3Qubm9kZS5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idG5QYXlCZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYnRuID0gdGhpcy5idG5QYXlCZXRzW2ldO1xuICAgICAgICAgICAgYnRuLm5vZGUub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlICE9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfYmV0X2Vycm9yMycpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBYb2NEaWFOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRQdXRNb25leShpLCB0aGlzLmxpc3RCZXRzW3RoaXMuYmV0SWR4XSkpO1xuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnRuQmV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJ0bkJldCA9IHRoaXMuYnRuQmV0c1tpXTtcbiAgICAgICAgICAgIGJ0bkJldC5ub2RlLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYmV0SWR4ID0gaTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuYnRuQmV0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkJldHNbal0uYWN0aXZlLmFjdGl2ZSA9IGogPT0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcImJldElkeDpcIiArIHRoaXMuYmV0SWR4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXR1cFRpbWVSdW5JbkJnKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkJ0bkhpc3RvcnkoKSB7XG5cbiAgICAgICAgLy8gdGhpcy5hY3RDb29taW5nU29vbigpO1xuICAgICAgICAvLyByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLmhpc3RvcnkgPT0gbnVsbCkge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmdldEJ1bmRsZShcIlhvY0RpYVwiKS5sb2FkKFwiUG9wdXBIaXN0b3J5XCIsIGNjLlByZWZhYiwgZnVuY3Rpb24gKGZpbmlzaCwgdG90YWwsIGl0ZW0pIHtcbiAgICAgICAgICAgIH0sIChlcnIxLCBwcmVmYWI6IGNjLlByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWYgKGVycjEgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiZXJyciBsb2FkIGdhbWUgWG9jRGlhOlwiLCBlcnIxKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwidmFvIGRheWNhaSBjaHVcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yeSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYikuZ2V0Q29tcG9uZW50KFwiWG9jRGlhLlBvcHVwSGlzdG9yeVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5Lm5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5LnNob3coKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhpc3Rvcnkubm9kZS5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xuICAgICAgICAgICAgdGhpcy5oaXN0b3J5Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaGlzdG9yeS5zaG93KClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgLy8gSHR0cC5nZXQoQ29uZmlncy5BcHAuQVBJLCB7IFwiY1wiOiAxMzksIFwicFwiOiB0aGlzLnBhZ2UsIFwidW5cIjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgXCJnblwiOiBcIkF1ZGl0aW9uXCIgfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgIC8vICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAvLyAgICAgaWYgKGVyciAhPSBudWxsKSByZXR1cm47XG4gICAgICAgIC8vICAgICAvLyAgY2MubG9nKFwiXCIpO1xuXG5cbiAgICAgICAgLy8gfSk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGFyclRpbWVPdXQgPSBbXTtcbiAgICBwcml2YXRlIGlzQ2xlYXJPbGREYXRhID0gZmFsc2U7XG4gICAgc2V0dXBUaW1lUnVuSW5CZygpIHtcbiAgICAgICAgY2MuZ2FtZS5vbihjYy5nYW1lLkVWRU5UX1NIT1csICgpID0+IHtcbiAgICAgICAgICAgIC8vIFhvY0RpYU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZFJlY29ubmVjdCgpKTtcbiAgICAgICAgICAgIC8vIGlmKHRoaXMuc3RhdGUgPT0gU1RBVEVfREVBTEVSLk1PSV9DVU9DICYmIHRoaXMuaXNDbGVhck9sZERhdGEgPT0gZmFsc2Upe1xuICAgICAgICAgICAgLy8gICAgIGlmKHRoaXMubm9kZUV4aXQgJiYgdGhpcy5ub2RlRXhpdC5hY3RpdmUpe1xuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyAgICAgICAgIFhvY0RpYUNvbnRyb2xsZXIuaW5zdGFuY2UubG9iYnkuc2hvdygpO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlRGVhbGVyKFNUQVRFX0RFQUxFUi5YT0NfTE8pO1xuICAgICAgICAgICAgLy8gICAgIHRoaXMuYnRuUGF5QmV0cy5mb3JFYWNoKGUgPT4gZS5yZXNldCgpKTtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmNsZWFyQ2hpcHMoKTtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnJlc2V0RGljZVJlc3VsdCgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBsYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbaV0uY2xlYXJVSSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgIGZvcih2YXIgaT0wO2k8dGhpcy5hcnJUaW1lT3V0Lmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgLy8gICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hcnJUaW1lT3V0W2ldKTtcbiAgICAgICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgICAgIC8vICAgICB0aGlzLmFyclRpbWVPdXQgPSBbXTtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmlzQ2xlYXJPbGREYXRhID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gICAgIGlmKHRoaXMuZGF0YUpvaW5Sb29tKXtcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5zaG93KHRoaXMuZGF0YUpvaW5Sb29tKTtcbiAgICAgICAgICAgIC8vICAgICB9XG5cblxuICAgICAgICAgICAgLy8gfVxuXG5cblxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICB1cGRhdGVDaGlwVG90YWxCZXRzKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYnRuUGF5QmV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYnRuUGF5QmV0c1tpXS5sYmxUb3RhbEJldC5zdHJpbmcgIT0gXCJcIikge1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlU2V0dGluZygpIHtcbiAgICAgICAgdGhpcy5ub2RlU2V0dGluZy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzaG93U2V0dGluZygpIHtcbiAgICAgICAgdGhpcy50b2dnbGVNdXNpYy5pc0NoZWNrZWQgPSBTUFV0aWxzLmdldE11c2ljVm9sdW1uKCkgPiAwO1xuICAgICAgICB0aGlzLnRvZ2dsZVNvdW5kLmlzQ2hlY2tlZCA9IFNQVXRpbHMuZ2V0U291bmRWb2x1bW4oKSA+IDA7XG4gICAgICAgIHRoaXMubm9kZVNldHRpbmcuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzaG93VHV0b3JpYWwoKSB7XG4gICAgICAgIHRoaXMubm9kZVR1dG9yaWFsLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaGlkZVR1dG9yaWFsKCkge1xuICAgICAgICB0aGlzLm5vZGVUdXRvcmlhbC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkJ0blRvZ2dsZU11c2ljKCkge1xuICAgICAgICBTUFV0aWxzLnNldE11c2ljVm9sdW1uKHRoaXMudG9nZ2xlTXVzaWMuaXNDaGVja2VkID8gMSA6IDApO1xuICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLk9OX0FVRElPX0NIQU5HRUQpO1xuICAgIH1cblxuICAgIG9uQnRuVG9nZ2xlU291bmQoKSB7XG4gICAgICAgIFNQVXRpbHMuc2V0U291bmRWb2x1bW4odGhpcy50b2dnbGVTb3VuZC5pc0NoZWNrZWQgPyAxIDogMCk7XG4gICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuT05fQVVESU9fQ0hBTkdFRCk7XG4gICAgfVxuXG4gICAgc2hvd1RvYXN0KG1zZykge1xuICAgICAgICB0aGlzLmxibFRvYXN0LnN0cmluZyA9IG1zZztcbiAgICAgICAgdGhpcy5sYmxUb2FzdC5ub2RlLnBhcmVudC5vcGFjaXR5ID0gMDtcbiAgICAgICAgdGhpcy5sYmxUb2FzdC5ub2RlLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5sYmxUb2FzdC5ub2RlLnBhcmVudCk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubGJsVG9hc3Qubm9kZS5wYXJlbnQpXG4gICAgICAgICAgICAudG8oMC4zLCB7IG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJsaW5lYXJcIiB9KVxuICAgICAgICAgICAgLmRlbGF5KDEpXG4gICAgICAgICAgICAudG8oMC4zLCB7IG9wYWNpdHk6IDAgfSwgeyBlYXNpbmc6IFwibGluZWFyXCIgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxibFRvYXN0Lm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdG90YWxUaW1lU3RhdGUgPSAwO1xuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAodGhpcy5jdXJUaW1lID4gMCkge1xuICAgICAgICAgICAgbGV0IHRpbWVMZWZ0ID0gTWF0aC5tYXgoMCwgdGhpcy5jdXJUaW1lIC0gVGltZVV0aWxzLmN1cnJlbnRUaW1lTWlsbGlzKCkpO1xuICAgICAgICAgICAgdGhpcy5zcHJQcm9ncmVzc1RpbWUuZmlsbFJhbmdlID0gdGltZUxlZnQgLyB0aGlzLnRvdGFsVGltZVN0YXRlO1xuICAgICAgICAgICAgaWYgKHRpbWVMZWZ0ID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1clRpbWUgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByUHJvZ3Jlc3NUaW1lLm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNsb2NrVGltZVNjaGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbGV0IHQgPSBUaW1lVXRpbHMuY3VycmVudFRpbWVNaWxsaXMoKTtcbiAgICAgICAgLy8gaWYgKHQgLSB0aGlzLmxhc3RVcGRhdGVUaW1lID4gMjAwMCkge1xuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIC8vICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgIC8vICAgICBYb2NEaWFOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRKb2luUm9vbUJ5SWQodGhpcy5yb29tSWQpKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB0aGlzLmxhc3RVcGRhdGVUaW1lID0gdDtcbiAgICB9XG5cblxuXG4gICAgcHVibGljIGluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmluaXRlZCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmluaXRlZCA9IHRydWU7XG5cbiAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIucmVnaXN0ZXIoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm5vZGUuYWN0aXZlKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLm1lUGxheWVyLnNldENvaW4oQ29uZmlncy5Mb2dpbi5Db2luKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG5cbiAgICAgICAgWG9jRGlhTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmFkZExpc3RlbmVyKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBsZXQgaW5wYWNrZXQgPSBuZXcgSW5QYWNrZXQoZGF0YSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGlucGFja2V0LmdldENtZElkKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkpPSU5fUk9PTV9TVUNDRVNTOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZUpvaW5Sb29tU3VjY2VzcyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJTZW5kSm9pblJvb21CeUlkIEpPSU5fUk9PTV9TVUNDRVNTIHBsYXlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBYb2NEaWFDb250cm9sbGVyLmluc3RhbmNlLnNob3dHYW1lUGxheShyZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuVVNFUl9KT0lOX1JPT01fU1VDQ0VTUzpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZVVzZXJKb2luUm9vbShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldFJhbmRvbUVtcHR5UGxheWVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuc2V0KHJlcy5uaWNrbmFtZSwgcmVzLmF2YXRhciwgcmVzLm1vbmV5LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5VU0VSX09VVF9ST09NOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlVXNlck91dFJvb20oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXIocmVzLm5pY2tuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIgIT0gbnVsbCkgcGxheWVyLmxlYXZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5RVUlUX1JPT006XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVMZWF2ZWRSb29tKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgWG9jRGlhQ29udHJvbGxlci5pbnN0YW5jZS5sb2JieS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlcy5yZWFzb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25vdF9lbm91Z2hfbW9uZXknKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfcmVwYXJpbmcnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfcm9vbV9lcnIxMycpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9yb29tX2VycjEwJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkRBTkdfS1lfVEhPQVRfUEhPTkc6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVMZWF2ZVJvb20oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiREFOR19LWV9USE9BVF9QSE9ORzpcIiArIHJlcy5iUmVnaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5iUmVnaXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlRXhpdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGVFeGl0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfcm9vbV9sZWF2ZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZUV4aXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlRXhpdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9yb29tX2NhbmNlbF9sZWF2ZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkFDVElPTl9JTl9HQU1FOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlQWN0aW9uSW5HYW1lKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1zZyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IHJlcy5hY3Rpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlcy5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6Ly9iYXQgZGF1IHZhbiBtb2lcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnID0gXCJC4bqvdCDEkeG6p3UgdsOhbiBt4bubaVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwclByb2dyZXNzVGltZS5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuY2xvY2tUaW1lU2NoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhvY0RpYUNvbnRyb2xsZXIuaW5zdGFuY2UucGxheUF1ZGlvRWZmZWN0KGF1ZGlvX2NsaXAuU1RBUlRfR0FNRSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOi8vYmF0IGRhdSBkYXQgY3VhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyA9IFwiQuG6r3QgxJHhuqd1IMSR4bq3dCBj4butYVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwclByb2dyZXNzVGltZS5ub2RlLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFByb2dyZXNzVGltZS5zdHJpbmcgPSBcIsSQYW5nIGPGsOG7o2MuLi5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJUaW1lID0gVGltZVV0aWxzLmN1cnJlbnRUaW1lTWlsbGlzKCkgKyAocmVzLnRpbWUgKyAxMCkgKiAxMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsVGltZVN0YXRlID0gKHJlcy50aW1lICsgMTApICogMTAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZURlYWxlcihTVEFURV9ERUFMRVIuTU9JX0NVT0MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuY2xvY2tUaW1lU2NoZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGUuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWG9jRGlhQ29udHJvbGxlci5pbnN0YW5jZS5wbGF5QXVkaW9FZmZlY3QoYXVkaW9fY2xpcC5DTE9DSylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuY2xvY2tUaW1lU2NoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMS4wLCByZXMudGltZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzovL2JhdCBkYXUgYmFuIGN1YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgPSBcIkLhuq90IMSR4bqndSBiw6FuIGPhu61hXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByUHJvZ3Jlc3NUaW1lLm5vZGUucGFyZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsUHJvZ3Jlc3NUaW1lLnN0cmluZyA9IFwixJBhbmcgYsOhbiBj4butYS4uLlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1clRpbWUgPSBUaW1lVXRpbHMuY3VycmVudFRpbWVNaWxsaXMoKSArIHJlcy50aW1lICogMTAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbFRpbWVTdGF0ZSA9IHJlcy50aW1lICogMTAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0Oi8vbmhhIGNhaSBjYW4gdGllbiwgaG9hbiB0aWVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyA9IFwiTmjDoCBjw6FpIGPDom4gdGnhu4FuLCBob8OgbiB0aeG7gW5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJQcm9ncmVzc1RpbWUubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxQcm9ncmVzc1RpbWUuc3RyaW5nID0gXCLEkGFuZyBjw6JuIGPhu61hLi4uXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VyVGltZSA9IFRpbWVVdGlscy5jdXJyZW50VGltZU1pbGxpcygpICsgcmVzLnRpbWUgKiAxMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsVGltZVN0YXRlID0gcmVzLnRpbWUgKiAxMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6Ly9iYXQgZGF1IGhvYW4gdGllblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgPSBcIkLhuq90IMSR4bqndSBob8OgbiB0aeG7gW5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJQcm9ncmVzc1RpbWUubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxQcm9ncmVzc1RpbWUuc3RyaW5nID0gXCLEkGFuZyBob8OgbiB0aeG7gW4uLi5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJUaW1lID0gVGltZVV0aWxzLmN1cnJlbnRUaW1lTWlsbGlzKCkgKyByZXMudGltZSAqIDEwMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxUaW1lU3RhdGUgPSByZXMudGltZSAqIDEwMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjovL2JhdCBkYXUgdHJhIHRodW9uZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgPSBcIkLhuq90IMSR4bqndSB0cuG6oyB0aMaw4bufbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZURlYWxlcihTVEFURV9ERUFMRVIuVFJBX1RJRU4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwclByb2dyZXNzVGltZS5ub2RlLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFByb2dyZXNzVGltZS5zdHJpbmcgPSBcIsSQYW5nIHRy4bqjIHRoxrDhu59uZy4uLlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1clRpbWUgPSBUaW1lVXRpbHMuY3VycmVudFRpbWVNaWxsaXMoKSArIHJlcy50aW1lICogMTAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbFRpbWVTdGF0ZSA9IHJlcy50aW1lICogMTAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobXNnICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsTXNnLnN0cmluZyA9IG1zZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJveE1zZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm94TXNnLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm94TXNnLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAwLjkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5TVEFSVF9HQU1FOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlU3RhcnRHYW1lKGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmJhbmtlciAhPSBcIlwiICYmIHJlcy5iYW5rZXIgIT0gQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSAmJiB0aGlzLmlzQmFua2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJC4bqhbiBraMO0bmcgxJHhu6cgdGnhu4FuIMSR4buDIHRp4bq/cCB04bulYyBsw6BtIGPDoWkhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbmtlciA9IHJlcy5iYW5rZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQmFua2VyID0gdGhpcy5iYW5rZXIgPT0gQ29uZmlncy5Mb2dpbi5OaWNrbmFtZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGxheWVyID0gdGhpcy5wbGF5ZXJzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5iYW5rZXIuYWN0aXZlID0gcGxheWVyLm5pY2tuYW1lICE9IFwiXCIgJiYgcGxheWVyLm5pY2tuYW1lID09IHRoaXMuYmFua2VyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0blBheUJldHMuZm9yRWFjaChlID0+IGUucmVzZXQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyQ2hpcHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXREaWNlUmVzdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlRGVhbGVyKFNUQVRFX0RFQUxFUi5YT0NfTE8pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuUFVUX01PTkVZOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlUHV0TW9uZXkoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYnRuUGF5QmV0ID0gdGhpcy5idG5QYXlCZXRzW3Jlcy5wb3RJZF07XG4gICAgICAgICAgICAgICAgICAgICAgICBidG5QYXlCZXQuc2V0VG90YWxCZXQocmVzLnBvdE1vbmV5KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5uaWNrbmFtZSA9PSBDb25maWdzLkxvZ2luLk5pY2tuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlhPQyBESUEgUFVUX01PTkVZOlwiICsgcmVzLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlcy5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbm90X2Vub3VnaCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfYmV0X2Vycm9yMScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF91bmtub3duX2Vycm9yXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luID0gcmVzLmN1cnJlbnRNb25leTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXIocmVzLm5pY2tuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5zZXRDb2luKHJlcy5jdXJyZW50TW9uZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaXN0Q29pbiA9IHRoaXMuY29udmVydE1vbmV5VG9DaGlwTW9uZXkocmVzLmJldE1vbmV5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RDb2luLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGlwID0gdGhpcy5nZXRDaGlwKGxpc3RDb2luW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpcC5uYW1lID0gcGxheWVyLm5pY2tuYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlwLnBvc2l0aW9uID0gcGxheWVyLm5vZGUucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jaGlwc0luRG9vcnMuaGFzT3duUHJvcGVydHkocmVzLnBvdElkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlwc0luRG9vcnNbcmVzLnBvdElkXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hpcHNJbkRvb3JzW3Jlcy5wb3RJZF0ucHVzaChjaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gYnRuUGF5QmV0Lm5vZGUucG9zaXRpb24uY2xvbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IG5ldyBjYy5WZWMyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmFuZG9tLnJhbmdlSW50KC1idG5QYXlCZXQubm9kZS53aWR0aCAvIDQgLSAyMCwgYnRuUGF5QmV0Lm5vZGUud2lkdGggLyA0ICsgMjApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmFuZG9tLnJhbmdlSW50KC1idG5QYXlCZXQubm9kZS5oZWlnaHQgLyA0IC0gMjAsIGJ0blBheUJldC5ub2RlLmhlaWdodCAvIDIgLSA3MCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi54ICs9IHRhcmdldC54O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi55ICs9IHRhcmdldC55O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoY2hpcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRXKGNoaXApLnRoZW4oY2MuanVtcFRvKDAuNSwgY2MudjIocG9zaXRpb24ueCwgcG9zaXRpb24ueSksIDUwLCAyKS5lYXNpbmcoY2MuZWFzZVNpbmVPdXQoKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpcC5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBYb2NEaWFDb250cm9sbGVyLmluc3RhbmNlLnBsYXlBdWRpb0VmZmVjdChhdWRpb19jbGlwLkNISVApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG5cbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlJFRlVOX01PTkVZOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlUmVmdW5Nb25leShkYXRhKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcy5wbGF5ZXJJbmZvc1JlZnVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJmRGF0YSA9IHJlcy5wbGF5ZXJJbmZvc1JlZnVuW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldFBsYXllcihyZkRhdGFbXCJuaWNrbmFtZVwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5zaG93UmVmdW5kQ29pbihyZkRhdGFbXCJtb25leVJlZnVuZFwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5zZXRDb2luKHJmRGF0YVtcImN1cnJlbnRNb25leVwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZkRhdGFbXCJuaWNrbmFtZVwiXSA9PSBDb25maWdzLkxvZ2luLk5pY2tuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQ29pbiA9IHJmRGF0YVtcImN1cnJlbnRNb25leVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzLnBvdElELmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvdERhdGEgPSByZXMucG90SURbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5QYXlCZXRzW2ldLnNldFRvdGFsQmV0KHBvdERhdGFbXCJ0b3RhbE1vbmV5XCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkZJTklTSF9HQU1FOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ2xlYXJPbGREYXRhID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlRmluaXNoR2FtZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzLnBsYXllckluZm9XaW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGxheWVyRGF0YSA9IHJlcy5wbGF5ZXJJbmZvV2luW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJEYXRhW1wibmlja25hbWVcIl0gPT0gQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW4gPSBwbGF5ZXJEYXRhW1wiY3VycmVudE1vbmV5XCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb3VudFJlZCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY291bnRXaGl0ZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcy5kaWNlSURzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kaWNlSURzW2ldID09IDEpIGNvdW50UmVkKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBjb3VudFdoaXRlKys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNDaGFuID0gKHJlcy5kaWNlSURzWzBdICsgcmVzLmRpY2VJRHNbMV0gKyByZXMuZGljZUlEc1syXSArIHJlcy5kaWNlSURzWzNdKSAlIDIgPT0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc0xlM2RvMXRyYW5nID0gcmVzLmluZm9BbGxQb3RbNF0ud2luO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzTGUzdHJhbmcxZG8gPSByZXMuaW5mb0FsbFBvdFs1XS53aW47XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNDaGFuNGRvID0gcmVzLmluZm9BbGxQb3RbM10ud2luO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzQ2hhbjR0cmFuZyA9IHJlcy5pbmZvQWxsUG90WzJdLndpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkb29yV2lucyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZURlYWxlcihTVEFURV9ERUFMRVIuTU9fRElBKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYiA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDaGFuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvb3JXaW5zLnB1c2goMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuUGF5QmV0c1swXS5hY3RpdmUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ2hhbjRkbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9vcldpbnMucHVzaCgzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuUGF5QmV0c1szXS5hY3RpdmUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc0NoYW40dHJhbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvb3JXaW5zLnB1c2goMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0blBheUJldHNbMl0uYWN0aXZlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb29yV2lucy5wdXNoKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0blBheUJldHNbMV0uYWN0aXZlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0xlM2RvMXRyYW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb29yV2lucy5wdXNoKDQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5QYXlCZXRzWzRdLmFjdGl2ZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzTGUzdHJhbmcxZG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvb3JXaW5zLnB1c2goNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0blBheUJldHNbNV0uYWN0aXZlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hpcHNXaXRoTmlja25hbWU6IGFueSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgaW4gdGhpcy5jaGlwc0luRG9vcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRvb3JJZCA9IHBhcnNlSW50KGspO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hpcHM6IEFycmF5PGNjLk5vZGU+ID0gdGhpcy5jaGlwc0luRG9vcnNbZG9vcklkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvb3JXaW5zLmluZGV4T2YoZG9vcklkKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ0blBheUJldCA9IHRoaXMuYnRuUGF5QmV0c1tkb29ySWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gYnRuUGF5QmV0Lm5vZGUucG9zaXRpb24uY2xvbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnkgLT0gMTA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb25BZGQgPSBwb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJUaW1lT3V0LnB1c2goc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5jaGlwcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpcHNbaV0ucGFyZW50ID0gbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hpcHNbaV0ucG9zaXRpb24gPSBwb3NpdGlvbkFkZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcG9zaXRpb25BZGQueSArPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVFcobm9kZSkudG8oMC4xLCB7IG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVJbiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMC4zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLCB4OiB0aGlzLmRlYWxlckhhbmRQb2ludC54LCB5OiB0aGlzLmRlYWxlckhhbmRQb2ludC55IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgb3BhY2l0eTogMCB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXQgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaXBzW2ldLnBhcmVudCA9IHRoaXMuY2hpcHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpcHNbaV0ub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlwc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgODAwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoaXAgPSBjaGlwc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmlja25hbWUgPSBjaGlwLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjaGlwc1dpdGhOaWNrbmFtZS5oYXNPd25Qcm9wZXJ0eShuaWNrbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpcHNXaXRoTmlja25hbWVbbmlja25hbWVdID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaXBzV2l0aE5pY2tuYW1lW25pY2tuYW1lXS5wdXNoKGNoaXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJUaW1lT3V0LnB1c2goc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgaW4gY2hpcHNXaXRoTmlja25hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldFBsYXllcihrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGlwcyA9IGNoaXBzV2l0aE5pY2tuYW1lW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbkFkZCA9IHBsYXllci5jaGlwc1BvaW50LmNsb25lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uQWRkMiA9IHBsYXllci5jaGlwc1BvaW50Mi5jbG9uZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb3VudDEgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb3VudDIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoaXA6IGNjLk5vZGUgPSBjaGlwc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9wYWNpdHkxID0gY291bnQxIDwgMTUgPyAyNTUgOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoY2hpcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRXKGNoaXApLnRvKDAuNSwgeyB4OiBwb3NpdGlvbkFkZC54LCB5OiBwb3NpdGlvbkFkZC55LCBvcGFjaXR5OiBvcGFjaXR5MSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXQgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheSgxICsgKGNoaXBzLmxlbmd0aCAqIDAuMDMgLSBpICogMC4wMykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHBvc2l0aW9uOiBwbGF5ZXIubm9kZS5wb3NpdGlvbiB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVJbiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaXAuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZWFsZXJDaGlwID0gdGhpcy5nZXRDaGlwKDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWFsZXJDaGlwLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gY2hpcC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVhbGVyQ2hpcC5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVhbGVyQ2hpcC5wb3NpdGlvbiA9IHRoaXMuZGVhbGVySGFuZFBvaW50LnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3BhY2l0eTIgPSBjb3VudDIgPCAxNSA/IDI1NSA6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChkZWFsZXJDaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVFcoZGVhbGVyQ2hpcCkuZGVsYXkoMC41KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiwgeyBvcGFjaXR5OiBvcGFjaXR5MiB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVJbiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyB4OiBwb3NpdGlvbkFkZDIueCwgeTogcG9zaXRpb25BZGQyLnkgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMC4zICsgKGNoaXBzLmxlbmd0aCAqIDAuMDMgLSBpICogMC4wMykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHBvc2l0aW9uOiBwbGF5ZXIubm9kZS5wb3NpdGlvbiB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXQgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWFsZXJDaGlwLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50MSA8IDE1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDErKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uQWRkLnkgKz0gMztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3VudDIgPCAxNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQyKytcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uQWRkMi55ICs9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTUwMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ2hhbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0NoYW40ZG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREaWNlUmVzdWx0KFRZUEVfUkVTVUxULkZPVVJfUkVELCBjYik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc0NoYW40dHJhbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREaWNlUmVzdWx0KFRZUEVfUkVTVUxULkZPVVJfV0hJVEUsIGNiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERpY2VSZXN1bHQoVFlQRV9SRVNVTFQuVFdPX1JFRF9UV09fV0hJVEUsIGNiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0xlM2RvMXRyYW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGljZVJlc3VsdChUWVBFX1JFU1VMVC5USFJFRV9SRUQsIGNiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzTGUzdHJhbmcxZG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREaWNlUmVzdWx0KFRZUEVfUkVTVUxULlRIUkVFX1dISVRFLCBjYik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyVGltZU91dC5wdXNoKHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzLnBsYXllckluZm9XaW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBsYXllckRhdGEgPSByZXMucGxheWVySW5mb1dpbltpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBsYXllciA9IHRoaXMuZ2V0UGxheWVyKHBsYXllckRhdGFbXCJuaWNrbmFtZVwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vbmV5V2luUG90cyA9IHBsYXllckRhdGFbXCJtb25leVdpblBvdHNcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb25leVdpblBvdHMgPSBtb25leVdpblBvdHMuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtc2dXaW4gPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBtb25leVdpblBvdHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dXaW4gKz0gVXRpbHMuZm9ybWF0TW9uZXkobW9uZXlXaW5Qb3RzW2pdKSArIFwiXFxuXFxuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuc2hvd1dpbkNvaW5TdHJpbmcobXNnV2luKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5zZXRDb2luKHBsYXllckRhdGFbXCJjdXJyZW50TW9uZXlcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMDApKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNCYW5rZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lUGxheWVyLnNob3dXaW5Db2luKHJlcy5tb25leUJhbmtlckV4Y2hhbmdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lUGxheWVyLnNldENvaW4ocmVzLm1vbmV5QmFua2VyQWZ0ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQ29pbiA9IHJlcy5tb25leUJhbmtlckFmdGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFhvY0RpYU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuQ21kU2VuZEdldENhdSgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlNPSV9DQVU6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVHZXRDYXUoZGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsSGlzdG9yeU9kZC5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIocmVzLnRvdGFsT2RkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsSGlzdG9yeUV2ZW4uc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKHJlcy50b3RhbEV2ZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxibEhpc3RvcnlJdGVtcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IHJlcy5hcnJheUNhdS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxIaXN0b3J5SXRlbXMuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSByZXMuYXJyYXlDYXVbaV0gPT0gMCA/IHRoaXMuc2ZPZGQgOiB0aGlzLnNmRXZlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxIaXN0b3J5SXRlbXMuY2hpbGRyZW5baV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibEhpc3RvcnlJdGVtcy5jaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5PUkRFUl9CQU5LRVI6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVPcmRlckJhbmtlcihkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiQuG6oW4gY+G6p24gXCIgKyBVdGlscy5mb3JtYXROdW1iZXIocmVzLm1vbmV5UmVxdWlyZSkgKyBcIiBYdSDEkeG7gyBsw6BtIGPDoWkhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIkzhu5dpIFwiICsgcmVzLmVycm9yICsgXCIsIGtow7RuZyB4w6FjIMSR4buLbmguXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkhVWV9MQU1fQ0FJOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlQ2FuY2VsQmFua2VyKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5iRGVzdHJveSAmJiB0aGlzLmlzQmFua2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCLEkMSDbmcga8O9IGh14bu3IGzDoG0gY8OhaSB0aMOgbmggY8O0bmcuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuSU5GT19HQVRFX1NFTEw6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVJbmZvR2F0ZVNlbGwoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5JTkZPX01PTkVZX0FGVEVSX0JBTktFUl9TRUxMOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlSW5mb01vbmV5QWZ0ZXJCYW5rZXJTZWxsKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuQ0hBVF9NUzpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRDaGF0Um9vbShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyQ2hhdChyZXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cbiAgICBwcml2YXRlIHNob3dEaWNlUmVzdWx0KGNiKSB7XG4gICAgICAgIGxldCBib3dsID0gdGhpcy5kaWNlUmVzdWx0LmdldENoaWxkQnlOYW1lKFwiYmF0XCIpO1xuICAgICAgICBsZXQgcmFuWDEgPSBbVXRpbHMucmFuZG9tUmFuZ2VJbnQoLTQwLCAtMzApLCBVdGlscy5yYW5kb21SYW5nZSgzMCwgNDApXVtVdGlscy5yYW5kb21SYW5nZUludCgwLCAyKV07XG4gICAgICAgIGxldCByYW5ZMSA9IFtVdGlscy5yYW5kb21SYW5nZUludCgtNDAsIC0zMCksIFV0aWxzLnJhbmRvbVJhbmdlSW50KDMwLCA0MCldW1V0aWxzLnJhbmRvbVJhbmdlSW50KDAsIDIpXTtcbiAgICAgICAgbGV0IHJhblgyID0gW1V0aWxzLnJhbmRvbVJhbmdlSW50KC0xMjAsIC0xMDApLCBVdGlscy5yYW5kb21SYW5nZUludCgxMDAsIDEyMCldW1V0aWxzLnJhbmRvbVJhbmdlSW50KDAsIDIpXTtcbiAgICAgICAgbGV0IHJhblkyID0gW1V0aWxzLnJhbmRvbVJhbmdlSW50KC0xMjAsIC0xMDApLCBVdGlscy5yYW5kb21SYW5nZUludCgxMDAsIDEyMCldW1V0aWxzLnJhbmRvbVJhbmdlSW50KDAsIDIpXTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGJvd2wpO1xuICAgICAgICBUVyhib3dsKS5zZXQoeyB4OiAtNSwgeTogNywgb3BhY2l0eTogMjU1IH0pLnRvKDEuMCwgeyB4OiByYW5YMSwgeTogcmFuWTEgfSlcbiAgICAgICAgICAgIC5kZWxheSgwLjUpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09IFNUQVRFX0RFQUxFUi5NT19ESUEpIHtcbiAgICAgICAgICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgICAgICAgICAgICAgWG9jRGlhQ29udHJvbGxlci5pbnN0YW5jZS5wbGF5QXVkaW9FZmZlY3QoYXVkaW9fY2xpcC5XSU4pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50bygwLjYsIHsgeDogcmFuWDIsIHk6IHJhblkyLCBvcGFjaXR5OiAwIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dCB9KS5zdGFydCgpO1xuICAgIH1cbiAgICBwcml2YXRlIHhvY0RpY2UoKSB7XG4gICAgICAgIHRoaXMucmVzZXREaWNlUmVzdWx0KCk7XG4gICAgICAgIHRoaXMuZGljZVJlc3VsdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5kaWNlUmVzdWx0KTtcbiAgICAgICAgVFcodGhpcy5kaWNlUmVzdWx0KS5zZXQoeyB4OiA3Ljc1NSwgeTogNjYuMTM4LCBzY2FsZTogMCB9KS50bygwLjUsIHsgc2NhbGU6IDEsIHg6IDAsIHk6IDY2IH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZUluIH0pLnN0YXJ0KCk7XG4gICAgfVxuICAgIHByaXZhdGUgc2V0RGljZVJlc3VsdCh0eXBlUmVzdWx0LCBjYikge1xuICAgICAgICBsZXQgYXJyU3ByUmVzdWx0ID0gW107XG4gICAgICAgIHN3aXRjaCAodHlwZVJlc3VsdCkge1xuICAgICAgICAgICAgY2FzZSBUWVBFX1JFU1VMVC5GT1VSX1JFRDoge1xuICAgICAgICAgICAgICAgIGFyclNwclJlc3VsdC5wdXNoKHRoaXMuc2ZPZGQsIHRoaXMuc2ZPZGQsIHRoaXMuc2ZPZGQsIHRoaXMuc2ZPZGQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBUWVBFX1JFU1VMVC5GT1VSX1dISVRFOiB7XG4gICAgICAgICAgICAgICAgYXJyU3ByUmVzdWx0LnB1c2godGhpcy5zZkV2ZW4sIHRoaXMuc2ZFdmVuLCB0aGlzLnNmRXZlbiwgdGhpcy5zZkV2ZW4pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBUWVBFX1JFU1VMVC5USFJFRV9SRUQ6IHtcbiAgICAgICAgICAgICAgICBhcnJTcHJSZXN1bHQucHVzaCh0aGlzLnNmT2RkLCB0aGlzLnNmRXZlbiwgdGhpcy5zZk9kZCwgdGhpcy5zZk9kZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFRZUEVfUkVTVUxULlRIUkVFX1dISVRFOiB7XG4gICAgICAgICAgICAgICAgYXJyU3ByUmVzdWx0LnB1c2godGhpcy5zZkV2ZW4sIHRoaXMuc2ZFdmVuLCB0aGlzLnNmT2RkLCB0aGlzLnNmRXZlbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFRZUEVfUkVTVUxULlRXT19SRURfVFdPX1dISVRFOiB7XG4gICAgICAgICAgICAgICAgYXJyU3ByUmVzdWx0LnB1c2godGhpcy5zZkV2ZW4sIHRoaXMuc2ZFdmVuLCB0aGlzLnNmT2RkLCB0aGlzLnNmT2RkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5kaWNlUmVzdWx0LmdldENoaWxkQnlOYW1lKFwiaWNfcmVzdWx0X1wiICsgaSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBhcnJTcHJSZXN1bHRbaSAtIDFdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvd0RpY2VSZXN1bHQoY2IpO1xuICAgIH1cbiAgICBwcml2YXRlIHJlc2V0RGljZVJlc3VsdCgpIHtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuZGljZVJlc3VsdC5nZXRDaGlsZEJ5TmFtZShcImJhdFwiKSk7XG4gICAgICAgIHRoaXMuZGljZVJlc3VsdC5nZXRDaGlsZEJ5TmFtZShcImJhdFwiKS5zZXRQb3NpdGlvbihjYy52MigtNi44MSwgOS4yNCkpO1xuICAgICAgICB0aGlzLmRpY2VSZXN1bHQuZ2V0Q2hpbGRCeU5hbWUoXCJiYXRcIikub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgLy8gdGhpcy5kaWNlUmVzdWx0LmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBwcml2YXRlIHJlc2V0VmlldygpIHtcbiAgICAgICAgdGhpcy5tZVBsYXllci5sZWF2ZSgpO1xuICAgICAgICB0aGlzLnBsYXllcnMuZm9yRWFjaChlID0+IGUubGVhdmUoKSk7XG4gICAgICAgIHRoaXMuYnRuUGF5QmV0cy5mb3JFYWNoKGUgPT4gZS5yZXNldCgpKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZURlYWxlcihTVEFURV9ERUFMRVIuSURMRSk7XG4gICAgICAgIHRoaXMuYm94TXNnLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlc2V0RGljZVJlc3VsdCgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2ldLmNsZWFyVUkoKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYXJyVGltZU91dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYXJyVGltZU91dFtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGVhckNoaXBzKCk7XG4gICAgICAgIHRoaXMuc3ByUHJvZ3Jlc3NUaW1lLm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jbG9ja1RpbWVTY2hlKTtcbiAgICAgICAgdGhpcy5jdXJUaW1lID0gMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFJhbmRvbUVtcHR5UGxheWVyKCk6IFBsYXllciB7XG4gICAgICAgIGxldCBlbXB0eVBsYXllcnMgPSBuZXcgQXJyYXk8UGxheWVyPigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyc1tpXS5uaWNrbmFtZSA9PSBcIlwiKSBlbXB0eVBsYXllcnMucHVzaCh0aGlzLnBsYXllcnNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbXB0eVBsYXllcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGVtcHR5UGxheWVyc1tSYW5kb20ucmFuZ2VJbnQoMCwgZW1wdHlQbGF5ZXJzLmxlbmd0aCldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UGxheWVyKG5pY2tuYW1lOiBzdHJpbmcpOiBQbGF5ZXIge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBsYXllciA9IHRoaXMucGxheWVyc1tpXTtcbiAgICAgICAgICAgIGlmIChwbGF5ZXIubmlja25hbWUgIT0gXCJcIiAmJiBwbGF5ZXIubmlja25hbWUgPT0gbmlja25hbWUpIHJldHVybiBwbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsaXN0Q2hpcDogY2MuTm9kZVtdID0gW107XG4gICAgcHJpdmF0ZSBnZXRDaGlwKGNvaW46IG51bWJlcik6IGNjLk5vZGUge1xuICAgICAgICBsZXQgcmV0OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgICAgICBpZiAodGhpcy5jaGlwUG9vbC5zaXplKCkgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5jaGlwUG9vbC5wdXQoY2MuaW5zdGFudGlhdGUodGhpcy5jaGlwVGVtcGxhdGUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXQgPSB0aGlzLmNoaXBQb29sLmdldCgpO1xuICAgICAgICB0aGlzLmxpc3RDaGlwLnB1c2gocmV0KTtcbiAgICAgICAgcmV0LnBhcmVudCA9IHRoaXMuY2hpcHM7XG4gICAgICAgIGxldCBjaGlwSWR4ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RCZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5saXN0QmV0c1tpXSA9PSBjb2luKSB7XG4gICAgICAgICAgICAgICAgY2hpcElkeCA9IGk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2hpcElkeCAtPSAwO1xuICAgICAgICAvLyAgY2MubG9nKFwiZ2V0Q2hpcDpcIiArIGNoaXBJZHggKyBcIjpcIiArIHRoaXMubWluQmV0SWR4KTtcbiAgICAgICAgcmV0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJDaGlwU21hbGxzW2NoaXBJZHhdO1xuICAgICAgICByZXQub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgcmV0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHJldC5zZXRTaWJsaW5nSW5kZXgodGhpcy5jaGlwcy5jaGlsZHJlbkNvdW50IC0gMSk7XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNsZWFyQ2hpcHMoKSB7XG4gICAgICAgIHRoaXMuY2hpcFRlbXBsYXRlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdENoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuY2hpcFBvb2wucHV0KHRoaXMubGlzdENoaXBbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGlzdENoaXAgPSBbXTtcbiAgICAgICAgdGhpcy5jaGlwc0luRG9vcnMgPSB7fTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbnZlcnRNb25leVRvQ2hpcE1vbmV5KGNvaW46IG51bWJlcik6IEFycmF5PG51bWJlcj4ge1xuICAgICAgICBsZXQgcmV0ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgICAgICAgbGV0IF9jb2luID0gY29pbjtcbiAgICAgICAgbGV0IG1pbkNvaW4gPSB0aGlzLmxpc3RCZXRzW3RoaXMubWluQmV0SWR4XTtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICB3aGlsZSAoX2NvaW4gPj0gbWluQ29pbiB8fCBjb3VudGVyIDwgMTUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLm1pbkJldElkeCArIHRoaXMuYnRuQmV0cy5sZW5ndGg7IGkgPj0gdGhpcy5taW5CZXRJZHg7IGktLSkge1xuICAgICAgICAgICAgICAgIGlmIChfY29pbiA+PSB0aGlzLmxpc3RCZXRzW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldC5wdXNoKHRoaXMubGlzdEJldHNbaV0pO1xuICAgICAgICAgICAgICAgICAgICBfY29pbiAtPSB0aGlzLmxpc3RCZXRzW2ldO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgcHJpdmF0ZSBkYXRhSm9pblJvb207XG4gICAgcHVibGljIHNob3coZGF0YTogY21kLlJlY2VpdmVKb2luUm9vbVN1Y2Nlc3MpIHtcblxuICAgICAgICAvLyAgY2MubG9nKFwiUmVjZWl2ZUpvaW5Sb29tU3VjY2VzcyBzaG93OlwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICB0aGlzLmRhdGFKb2luUm9vbSA9IGRhdGE7XG4gICAgICAgIGlmICh0aGlzLmNoaXBQb29sID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpcFBvb2wgPSBuZXcgY2MuTm9kZVBvb2woXCJDaGlwXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlc2V0VmlldygpO1xuICAgICAgICBpZiAodGhpcy5ub2RlRXhpdCAmJiB0aGlzLm5vZGVFeGl0LmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlRXhpdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvb21JZCA9IGRhdGEucm9vbUlkO1xuICAgICAgICB0aGlzLmxhc3RVcGRhdGVUaW1lID0gVGltZVV0aWxzLmN1cnJlbnRUaW1lTWlsbGlzKCk7XG4gICAgICAgIFhvY0RpYUNvbnRyb2xsZXIuaW5zdGFuY2UucGxheUF1ZGlvRWZmZWN0KGF1ZGlvX2NsaXAuSk9JTik7XG4gICAgICAgIENvbmZpZ3MuTG9naW4uQ29pbiA9IGRhdGEubW9uZXk7XG4gICAgICAgIHRoaXMuaXNCYW5rZXIgPSBkYXRhLmJhbmtlcjtcbiAgICAgICAgdGhpcy5iYW5rZXIgPSBcIlwiO1xuICAgICAgICBpZiAodGhpcy5pc0Jhbmtlcikge1xuICAgICAgICAgICAgdGhpcy5iYW5rZXIgPSBDb25maWdzLkxvZ2luLk5pY2tuYW1lO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tZVBsYXllci5zZXQoQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgQ29uZmlncy5Mb2dpbi5BdmF0YXIsIENvbmZpZ3MuTG9naW4uQ29pbiwgZGF0YS5iYW5rZXIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEucGxheWVySW5mb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwbGF5ZXJEYXRhID0gZGF0YS5wbGF5ZXJJbmZvc1tpXTtcbiAgICAgICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldFJhbmRvbUVtcHR5UGxheWVyKCk7XG4gICAgICAgICAgICBpZiAocGxheWVyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIuc2V0KHBsYXllckRhdGFbXCJuaWNrbmFtZVwiXSwgcGxheWVyRGF0YVtcImF2YXRhclwiXSwgcGxheWVyRGF0YVtcIm1vbmV5XCJdLCBwbGF5ZXJEYXRhW1wiYmFua2VyXCJdKTtcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyRGF0YVtcImJhbmtlclwiXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbmtlciA9IHBsYXllckRhdGFbXCJuaWNrbmFtZVwiXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEuZ2FtZVN0YXRlID09IDEgfHwgZGF0YS5nYW1lU3RhdGUgPT0gMikge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLnBvdElELmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBvdERhdGEgPSBkYXRhLnBvdElEW2ldO1xuICAgICAgICAgICAgICAgIGxldCBidG5QYXlCZXQgPSB0aGlzLmJ0blBheUJldHNbaV07XG4gICAgICAgICAgICAgICAgYnRuUGF5QmV0LnNldFRvdGFsQmV0KHBvdERhdGFbXCJ0b3RhbE1vbmV5XCJdKTtcbiAgICAgICAgICAgICAgICBsZXQgbGlzdENvaW4gPSB0aGlzLmNvbnZlcnRNb25leVRvQ2hpcE1vbmV5KHBvdERhdGFbXCJ0b3RhbE1vbmV5XCJdKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RDb2luLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGlwID0gdGhpcy5nZXRDaGlwKGxpc3RDb2luW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBsYXllciA9IHRoaXMuZ2V0UGxheWVyKENvbmZpZ3MuTG9naW4uTmlja25hbWUpO1xuICAgICAgICAgICAgICAgICAgICBjaGlwLm5hbWUgPSBwbGF5ZXIubmlja25hbWU7XG4gICAgICAgICAgICAgICAgICAgIGNoaXAucG9zaXRpb24gPSBwbGF5ZXIubm9kZS5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNoaXBzSW5Eb29ycy5oYXNPd25Qcm9wZXJ0eShwb3REYXRhLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlwc0luRG9vcnNbcG90RGF0YS5pZF0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaXBzSW5Eb29yc1twb3REYXRhLmlkXS5wdXNoKGNoaXApO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb24gPSBidG5QYXlCZXQubm9kZS5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0ID0gbmV3IGNjLlZlYzIoXG4gICAgICAgICAgICAgICAgICAgICAgICBSYW5kb20ucmFuZ2VJbnQoLWJ0blBheUJldC5ub2RlLndpZHRoIC8gNCAtIDIwLCBidG5QYXlCZXQubm9kZS53aWR0aCAvIDQgKyAyMCksXG4gICAgICAgICAgICAgICAgICAgICAgICBSYW5kb20ucmFuZ2VJbnQoLWJ0blBheUJldC5ub2RlLmhlaWdodCAvIDQgLSAyMCwgYnRuUGF5QmV0Lm5vZGUuaGVpZ2h0IC8gMiAtIDcwKSk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnggKz0gdGFyZ2V0Lng7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnkgKz0gdGFyZ2V0Lnk7XG4gICAgICAgICAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChjaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgVFcoY2hpcCkudGhlbihjYy5qdW1wVG8oMC41LCBjYy52Mihwb3NpdGlvbi54LCBwb3NpdGlvbi55KSwgNTAsIDIpLmVhc2luZyhjYy5lYXNlU2luZU91dCgpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlwLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFhvY0RpYUNvbnRyb2xsZXIuaW5zdGFuY2UucGxheUF1ZGlvRWZmZWN0KGF1ZGlvX2NsaXAuQ0hJUCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEJldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChkYXRhLm1vbmV5QmV0IDw9IHRoaXMubGlzdEJldHNbaV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJldElkeCA9IGk7XG4gICAgICAgICAgICAgICAgdGhpcy5taW5CZXRJZHggPSB0aGlzLmJldElkeDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnRuQmV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJ0bkJldCA9IHRoaXMuYnRuQmV0c1tpXTtcbiAgICAgICAgICAgIGJ0bkJldC5hY3RpdmUuYWN0aXZlID0gaSA9PSB0aGlzLm1pbkJldElkeDtcbiAgICAgICAgICAgIGJ0bkJldC5ub2RlLmFjdGl2ZSA9IGkgPj0gdGhpcy5taW5CZXRJZHg7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IGRhdGEuZ2FtZVN0YXRlO1xuICAgICAgICBsZXQgbXNnID0gXCJcIjtcbiAgICAgICAgc3dpdGNoICh0aGlzLmdhbWVTdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAxOi8vYmF0IGRhdSB2YW4gbW9pXG4gICAgICAgICAgICAgICAgbXNnID0gXCJC4bqvdCDEkeG6p3UgdsOhbiBt4bubaVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOi8vYmF0IGRhdSBkYXQgY3VhXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBtc2cgPSBcIkLhuq90IMSR4bqndSDEkeG6t3QgY+G7rWFcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYodGhpcy5ub2RlRXhpdCAmJiB0aGlzLm5vZGVFeGl0LmFjdGl2ZSl7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmFjdEJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwclByb2dyZXNzVGltZS5ub2RlLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1clRpbWUgPSBUaW1lVXRpbHMuY3VycmVudFRpbWVNaWxsaXMoKSArIChkYXRhLmNvdW50VGltZSArIDEwKSAqIDEwMDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxUaW1lU3RhdGUgPSAzMDAwMCArIDEwMDAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFByb2dyZXNzVGltZS5zdHJpbmcgPSBcIsSQYW5nIGPGsOG7o2MuLi5cIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmNsb2NrVGltZVNjaGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhvY0RpYUNvbnRyb2xsZXIuaW5zdGFuY2UucGxheUF1ZGlvRWZmZWN0KGF1ZGlvX2NsaXAuQ0xPQ0spXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNsb2NrVGltZVNjaGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0sIDEuMCwgZGF0YS5jb3VudFRpbWUgKyAxMCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGVEZWFsZXIoU1RBVEVfREVBTEVSLk1PSV9DVU9DKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWNlUmVzdWx0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQ6Ly9uaGEgY2FpIGNhbiB0aWVuLCBob2FuIHRpZW5cbiAgICAgICAgICAgICAgICBtc2cgPSBcIk5ow6AgY8OhaSBjw6JuIHRp4buBbiwgaG/DoG4gdGnhu4FuXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6Ly9iYXQgZGF1IGhvYW4gdGllblxuICAgICAgICAgICAgICAgIG1zZyA9IFwiQuG6r3QgxJHhuqd1IGhvw6BuIHRp4buBblwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2Oi8vYmF0IGRhdSB0cmEgdGh1b25nXG4gICAgICAgICAgICAgICAgbXNnID0gXCJWdWkgbMOybmcgxJHhu6NpIHbDoW4gc2F1IVwiO1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByUHJvZ3Jlc3NUaW1lLm5vZGUucGFyZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJQcm9ncmVzc1RpbWUuZmlsbFJhbmdlID0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLmxibFByb2dyZXNzVGltZS5zdHJpbmcgPSBcIlZ1aSBsw7JuZyDEkeG7o2kgdsOhbiBzYXUhXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1zZyAhPSBcIlwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlRGVhbGVyKFNUQVRFX0RFQUxFUi5JRExFKTtcbiAgICAgICAgICAgIGxldCBsYWJlbCA9IHRoaXMuZGVhbGVyLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpO1xuICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gbXNnO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYm94TXNnLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJveE1zZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9LCAwLjkpO1xuICAgICAgICAgICAgfSwgMC4zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFhvY0RpYU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuQ21kU2VuZEdldENhdSgpKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzdGF0ZTtcbiAgICBwcml2YXRlIHNldFN0YXRlRGVhbGVyKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSBTVEFURV9ERUFMRVIuSURMRToge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVhbGVyLnRpbWVTY2FsZSA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWFsZXIuc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgU1RBVEVfREVBTEVSLk1PSV9DVU9DOiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWFsZXIudGltZVNjYWxlID0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYWxlci5zZXRBbmltYXRpb24oMCwgXCJNb2lEYXRDdW9jMVwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWFsZXIuc2V0Q29tcGxldGVMaXN0ZW5lcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGVEZWFsZXIoU1RBVEVfREVBTEVSLklETEUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBTVEFURV9ERUFMRVIuVFJBX1RJRU46IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYWxlci50aW1lU2NhbGUgPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVhbGVyLnNldEFuaW1hdGlvbigwLCBcIk1vaWREYXRDdW9jMlwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWFsZXIuc2V0Q29tcGxldGVMaXN0ZW5lcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGVEZWFsZXIoU1RBVEVfREVBTEVSLklETEUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBTVEFURV9ERUFMRVIuWE9DX0xPOiB7XG4gICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuZGljZVJlc3VsdCk7XG4gICAgICAgICAgICAgICAgVFcodGhpcy5kaWNlUmVzdWx0KS50bygwLjUsIHsgc2NhbGU6IDAsIHk6IDMzNSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVJbiB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWNlUmVzdWx0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYWxlci50aW1lU2NhbGUgPSAzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYWxlci5zZXRBbmltYXRpb24oMCwgXCJMYWNEaWFcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBYb2NEaWFDb250cm9sbGVyLmluc3RhbmNlLnBsYXlBdWRpb0VmZmVjdChhdWRpb19jbGlwLlhPQ19ESUEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYWxlci5zZXRDb21wbGV0ZUxpc3RlbmVyKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGVEZWFsZXIoU1RBVEVfREVBTEVSLk1PSV9DVU9DKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueG9jRGljZSgpO1xuICAgICAgICAgICAgICAgIH0sIDMuMiAvIDIpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFNUQVRFX0RFQUxFUi5NT19ESUE6IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYWxlci50aW1lU2NhbGUgPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVhbGVyLnNldEFuaW1hdGlvbigwLCBcIk1vaURhdEN1b2MyXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYWxlci5zZXRDb21wbGV0ZUxpc3RlbmVyKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZURlYWxlcihTVEFURV9ERUFMRVIuSURMRSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgYWN0U2V0dGluZygpIHtcbiAgICAgICAgdGhpcy5ib3hTZXR0aW5nLmFjdGl2ZSA9ICF0aGlzLmJveFNldHRpbmcuYWN0aXZlO1xuICAgIH1cblx0XG5cdHB1YmxpYyBhY3RCYWNreigpIHtcbiAgICAgICAgWG9jRGlhTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmNsb3NlKCk7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5sb2FkU2NlbmUoXCJMb2JieVwiKTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBhY3RTZW5kQ2hhdCgpIHtcbiAgICAgICAgLy8gQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfZnVuY3Rpb25faW5fZGV2ZWxvcG1lbnRcIikpO1xuICAgICAgICBsZXQgbXNnID0gdGhpcy5lZHRDaGF0SW5wdXQuc3RyaW5nLnRyaW0oKTtcbiAgICAgICAgaWYgKG1zZyAhPSBcIlwiKSB7XG4gICAgICAgICAgICBYb2NEaWFOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRDaGF0Um9vbSgwLCBtc2cpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVkdENoYXRJbnB1dC5zdHJpbmcgPSBcIlwiO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY3RTZW5kQ2hhdE5oYW5oKG1zZykge1xuICAgICAgICAvLyBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9mdW5jdGlvbl9pbl9kZXZlbG9wbWVudFwiKSk7XG4gICAgICAgIGlmIChtc2cgIT0gXCJcIikge1xuICAgICAgICAgICAgWG9jRGlhTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kQ2hhdFJvb20oMCwgbXNnKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lZHRDaGF0SW5wdXQuc3RyaW5nID0gXCJcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWN0VHV0b3JpYWwoKSB7XG4gICAgICAgIHRoaXMuc2hvd1R1dG9yaWFsKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFjdFJhbmsoKSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X2Z1bmN0aW9uX2luX2RldmVsb3BtZW50XCIpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWN0SGlzdG9yeSgpIHtcbiAgICAgICAgdGhpcy5vbkJ0bkhpc3RvcnkoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWN0T3Blbk11c2ljKCkge1xuICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9mdW5jdGlvbl9pbl9kZXZlbG9wbWVudFwiKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFjdEJhY2soKSB7XG4gICAgICAgIC8vICBjYy5sb2coXCJYb2NEaWEgYWN0QmFja1wiKTtcbiAgICAgICAgWG9jRGlhTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kTGVhdmVSb29tKCkpO1xuICAgIH1cblxuXG4gICAgcHVibGljIGFjdE9yZGVyQmFua2VyKCkge1xuICAgICAgICBYb2NEaWFOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRPcmRlckJhbmtlcigpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWN0Q2FuY2VsQmFua2VyKCkge1xuICAgICAgICBYb2NEaWFOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRDYW5jZWxCYW5rZXIoKSk7XG4gICAgfVxuXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19