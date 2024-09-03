"use strict";
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