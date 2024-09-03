"use strict";
cc._RF.push(module, '9ac265kyMdCZ6G4GL5Q1zxj', 'TienLen.Room');
// Lobby/LobbyScript/TienLenScript/TienLen.Room.ts

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
exports.SoundManager = void 0;
var Configs_1 = require("../../../Loading/src/Configs");
var App_1 = require("../Script/common/App");
var BroadcastReceiver_1 = require("../Script/common/BroadcastReceiver");
var Common_AudioManager_1 = require("../Script/common/Common.AudioManager");
var SPUtils_1 = require("../Script/common/SPUtils");
var Utils_1 = require("../Script/common/Utils");
var CardGame_Cmd_1 = require("../Script/networks/CardGame.Cmd");
var Network_InPacket_1 = require("../Script/networks/Network.InPacket");
var TienLenNetworkClient_1 = require("../Script/networks/TienLenNetworkClient");
var TienLen_Cmd_1 = require("./TienLen.Cmd");
var TienLen_GameLogic_1 = require("./TienLen.GameLogic");
var TienLen_Res_1 = require("./TienLen.Res");
var audio_clip;
(function (audio_clip) {
    audio_clip[audio_clip["BG"] = 0] = "BG";
    audio_clip[audio_clip["LOSE"] = 1] = "LOSE";
    audio_clip[audio_clip["WIN"] = 2] = "WIN";
    audio_clip[audio_clip["CHETMAYNE"] = 3] = "CHETMAYNE";
    audio_clip[audio_clip["DODI"] = 4] = "DODI";
    audio_clip[audio_clip["HAINE"] = 5] = "HAINE";
    audio_clip[audio_clip["MAYHABUOI"] = 6] = "MAYHABUOI";
    audio_clip[audio_clip["THUADICUNG"] = 7] = "THUADICUNG";
    audio_clip[audio_clip["START_GAME"] = 8] = "START_GAME";
    audio_clip[audio_clip["CHIA_BAI"] = 9] = "CHIA_BAI";
    audio_clip[audio_clip["DANH"] = 10] = "DANH";
})(audio_clip || (audio_clip = {}));
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SoundManager = /** @class */ (function () {
    function SoundManager() {
        this.bgMusic = null;
        this.effSound = null;
        this.listAudio = [];
    }
    SoundManager.prototype.playBgMusic = function () {
        Common_AudioManager_1.default.getInstance().playBackgroundMusic(this.listAudio[audio_clip.BG]);
    };
    SoundManager.prototype.playAudioEffect = function (indexAudio) {
        if (SPUtils_1.default.getSoundVolumn() > 0) {
            this.effSound.clip = this.listAudio[indexAudio];
            this.effSound.play();
        }
    };
    SoundManager.prototype.stopBgMusic = function () {
        this.bgMusic.stop();
    };
    __decorate([
        property(cc.AudioSource)
    ], SoundManager.prototype, "bgMusic", void 0);
    __decorate([
        property(cc.AudioSource)
    ], SoundManager.prototype, "effSound", void 0);
    __decorate([
        property([cc.AudioClip])
    ], SoundManager.prototype, "listAudio", void 0);
    SoundManager = __decorate([
        ccclass("TienLen.InGame.SoundManager")
    ], SoundManager);
    return SoundManager;
}());
exports.SoundManager = SoundManager;
var Room = /** @class */ (function (_super) {
    __extends(Room, _super);
    function Room() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprAvatar = null;
        _this.roomContent = null;
        _this.roomItem = null;
        _this.ingameNode = null;
        _this.ingamePr = null;
        _this.lbCoin = null;
        _this.lblNickname = null;
        _this.prefabItemRoom = null;
        _this.soundManager = null;
        _this.bundleGame = null;
        _this.ingame = null;
        _this.listRoom = [];
        return _this;
    }
    Room_1 = Room;
    Room.prototype.onLoad = function () {
        var _this = this;
        Room_1.instance = this;
        TienLen_Res_1.default.getInstance();
        this.soundManager.playBgMusic();
        this.sprAvatar.spriteFrame = App_1.default.instance.getAvatarSpriteFrame(Configs_1.default.Login.Avatar);
        this.lbCoin.string = Utils_1.default.formatNumber(Configs_1.default.Login.Coin);
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function () {
            _this.lbCoin.string = Utils_1.default.formatNumber(Configs_1.default.Login.Coin);
        }, this);
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        TienLenNetworkClient_1.default.getInstance().addOnClose(function () {
            _this.actBack();
        }, this);
        this.lblNickname.string = Configs_1.default.Login.Nickname;
    };
    Room.prototype.start = function () {
        var _this = this;
        TienLenNetworkClient_1.default.getInstance().addListener(function (data) {
            var inpacket = new Network_InPacket_1.default(data);
            var cmdId = inpacket.getCmdId();
            //Utils.Log("TienLen cmd: ", cmdId);
            switch (cmdId) {
                case CardGame_Cmd_1.default.Code.LOGIN:
                    TienLenNetworkClient_1.default.getInstance().send(new TienLen_Cmd_1.default.SendReconnectRoom());
                    break;
                case CardGame_Cmd_1.default.Code.MONEY_BET_CONFIG: {
                    var res = new CardGame_Cmd_1.default.ResMoneyBetConfig(data);
                    //Utils.Log(res);
                    _this.listRoom = res.list;
                    _this.initRooms(res.list);
                    break;
                }
                case CardGame_Cmd_1.default.Code.JOIN_ROOM_FAIL: {
                    var res = new CardGame_Cmd_1.default.ReceivedJoinRoomFail(data);
                    var e = "";
                    switch (res.error) {
                        case 1:
                            e = "L\u1ed7i ki\u1ec3m tra th\u00f4ng tin!";
                            break;
                        case 2:
                            e = "Kh\u00f4ng t\u00ecm \u0111\u01b0\u1ee3c ph\u00f2ng th\u00edch h\u1ee3p. Vui l\u00f2ng th\u1eed l\u1ea1i sau!";
                            break;
                        case 3:
                            e = "B\u1ea1n kh\u00f4ng \u0111\u1ee7 ti\u1ec1n v\u00e0o ph\u00f2ng ch\u01a1i n\u00e0y!";
                            break;
                        case 4:
                            e = "Kh\u00f4ng t\u00ecm \u0111\u01b0\u1ee3c ph\u00f2ng th\u00edch h\u1ee3p. Vui l\u00f2ng th\u1eed l\u1ea1i sau!";
                            break;
                        case 5:
                            e = "M\u1ed7i l\u1ea7n v\u00e0o ph\u00f2ng ph\u1ea3i c\u00e1ch nhau 10 gi\u00e2y!";
                            break;
                        case 6:
                            e = "H\u1ec7 th\u1ed1ng b\u1ea3o tr\u00ec!";
                            break;
                        case 7:
                            e = "Kh\u00f4ng t\u00ecm th\u1ea5y ph\u00f2ng ch\u01a1i!";
                            break;
                        case 8:
                            e = "M\u1eadt kh\u1ea9u ph\u00f2ng ch\u01a1i kh\u00f4ng \u0111\u00fang!";
                            break;
                        case 9:
                            e = "Ph\u00f2ng ch\u01a1i \u0111\u00e3 \u0111\u1ee7 ng\u01b0\u1eddi!";
                            break;
                        case 10:
                            e = "B\u1ea1n b\u1ecb ch\u1ee7 ph\u00f2ng kh\u00f4ng cho v\u00e0o b\u00e0n!";
                    }
                    App_1.default.instance.alertDialog.showMsg(e);
                    break;
                }
                case TienLen_Cmd_1.default.Code.JOIN_ROOM_SUCCESS: {
                    var res = new TienLen_Cmd_1.default.ReceivedJoinRoomSuccess(data);
                    //Utils.Log(res);
                    TienLen_GameLogic_1.default.getInstance().initWith(res);
                    _this.show(false);
                    _this.ingame.show(true, res);
                    break;
                }
                case TienLen_Cmd_1.default.Code.UPDATE_GAME_INFO: {
                    var res = new TienLen_Cmd_1.default.ReceivedUpdateGameInfo(data);
                    //Utils.Log(res);
                    _this.show(false);
                    _this.ingame.updateGameInfo(res);
                    break;
                }
                case TienLen_Cmd_1.default.Code.AUTO_START: {
                    var res = new TienLen_Cmd_1.default.ReceivedAutoStart(data);
                    //Utils.Log(res);
                    TienLen_GameLogic_1.default.getInstance().autoStart(res);
                    _this.ingame.autoStart(res);
                    break;
                }
                case TienLen_Cmd_1.default.Code.USER_JOIN_ROOM: {
                    var res = new TienLen_Cmd_1.default.ReceiveUserJoinRoom(data);
                    //Utils.Log("TienLenCmd.Code.USER_JOIN_ROOM:\n", res);
                    _this.ingame.onUserJoinRoom(res);
                    break;
                }
                case TienLen_Cmd_1.default.Code.FIRST_TURN: {
                    var res = new TienLen_Cmd_1.default.ReceivedFirstTurnDecision(data);
                    //Utils.Log(res);
                    // this.ingame.firstTurn(res);
                    _this.ingame.dataFirstTurn = res;
                    break;
                }
                case TienLen_Cmd_1.default.Code.CHIA_BAI: {
                    var res = new TienLen_Cmd_1.default.ReceivedChiaBai(data);
                    //Utils.Log(" TienLenCmd.Code.CHIA_BAI:", res);
                    _this.ingame.chiaBai(res);
                    break;
                }
                case TienLen_Cmd_1.default.Code.CHANGE_TURN: {
                    var res = new TienLen_Cmd_1.default.ReceivedChangeTurn(data);
                    //Utils.Log(res);
                    _this.ingame.changeTurn(res);
                    break;
                }
                case TienLen_Cmd_1.default.Code.DANH_BAI: {
                    var res = new TienLen_Cmd_1.default.ReceivedDanhBai(data);
                    //Utils.Log(res);
                    _this.ingame.submitTurn(res);
                    break;
                }
                case TienLen_Cmd_1.default.Code.BO_LUOT: {
                    var res = new TienLen_Cmd_1.default.ReceivedBoluot(data);
                    //Utils.Log(res);
                    _this.ingame.passTurn(res);
                    break;
                }
                case TienLen_Cmd_1.default.Code.END_GAME: {
                    var res = new TienLen_Cmd_1.default.ReceivedEndGame(data);
                    //Utils.Log(res);
                    _this.ingame.endGame(res);
                    break;
                }
                case TienLen_Cmd_1.default.Code.UPDATE_MATCH: {
                    var res = new TienLen_Cmd_1.default.ReceivedUpdateMatch(data);
                    //Utils.Log(res);
                    _this.ingame.updateMatch(res);
                    break;
                }
                case TienLen_Cmd_1.default.Code.USER_LEAVE_ROOM: {
                    var res = new TienLen_Cmd_1.default.UserLeaveRoom(data);
                    //Utils.Log(res);
                    _this.ingame.userLeaveRoom(res);
                    break;
                }
                case TienLen_Cmd_1.default.Code.REQUEST_LEAVE_ROOM: {
                    var res = new TienLen_Cmd_1.default.ReceivedNotifyRegOutRoom(data);
                    //Utils.Log(res);
                    _this.ingame.notifyUserRegOutRoom(res);
                    break;
                }
                case TienLen_Cmd_1.default.Code.CHAT_ROOM:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new TienLen_Cmd_1.default.ReceivedChatRoom(data);
                        //Utils.Log("TLMN CHAT_ROOM res : ", JSON.stringify(res));
                        _this.ingame.playerChat(res);
                    }
                    break;
                case TienLen_Cmd_1.default.Code.CHAT_CHONG:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new TienLen_Cmd_1.default.ReceivedChatChong(data);
                        //Utils.Log("TLMN CHAT_CHONG res : ", JSON.stringify(res));
                        _this.ingame.playerChatChong(res);
                    }
                    break;
                case TienLen_Cmd_1.default.Code.WAIT_4_DOI_THONG:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new TienLen_Cmd_1.default.ReceivedWaitBonDoiThong(data);
                        //Utils.Log("TLMN WAIT_4_DOI_THONG res : ", JSON.stringify(res));
                        _this.ingame.wait4doithong(res);
                    }
            }
        }, this);
        //get list room
        this.refreshRoom();
    };
    Room.prototype.initRooms = function (rooms) {
        var arrBet = [];
        this.roomContent.removeAllChildren();
        var id = 0;
        var names = ["San bằng tất cả", "Nhiều tiền thì vào", "Dân chơi", "Bàn cho đại gia", "Tứ quý", "Bốn đôi thông", "Tới trắng", "Chặt heo"];
        for (var i = 0; i < rooms.length; i++) {
            var room = rooms[i];
            if ((Room_1.IS_SOLO && room.maxUserPerRoom == 2) || (!Room_1.IS_SOLO && room.maxUserPerRoom != 2)) {
                id++;
                var isExisted = arrBet.indexOf(room.moneyBet);
                if (isExisted == -1) {
                    arrBet.push(room.moneyBet);
                }
            }
        }
        arrBet.sort(function (a, b) {
            return a - b;
        });
        //Utils.Log("CardGame_ItemRoom arrBet Increase : ", arrBet);
        for (var index = 0; index < arrBet.length; index++) {
            var playerCount = 0;
            var maxUser = 0;
            var moneyRequire = 0;
            for (var a = 0; a < rooms.length; a++) {
                var room = rooms[a];
                if ((Room_1.IS_SOLO && room.maxUserPerRoom == 2) || (!Room_1.IS_SOLO && room.maxUserPerRoom != 2)) {
                    if (room.moneyBet == arrBet[index]) {
                        playerCount += room.nPersion;
                        maxUser = room.maxUserPerRoom;
                        moneyRequire = room.moneyRequire;
                    }
                }
            }
            var item = cc.instantiate(this.prefabItemRoom).getComponent("CardGame_ItemRoom");
            item.initItems({
                bet: arrBet[index],
                players: playerCount,
                maxUser: maxUser,
                moneyRequire: moneyRequire,
                gameId: Room_1.IS_SOLO ? 1 : 0 // 0 = TLMN, 1 = TLMN Solo, 2 = Sam Loc, 3 = Ba Cay, 4 = Bai Cao, 5 = Poker, 6 = Mau Binh
            });
            this.roomContent.addChild(item.node);
        }
        this.roomContent.parent.parent.getComponent(cc.ScrollView).scrollToBottom(0);
        this.roomContent.parent.parent.getComponent(cc.ScrollView).scrollToTop(2);
    };
    Room.prototype.handleJoinRoom = function (info) {
        var _this = this;
        //Utils.Log("CardGame handleJoinRoom info : ", info);
        if (Configs_1.default.Login.Coin < info.moneyRequire) {
            App_1.default.instance.showToast(App_1.default.instance.getTextLang('txt_not_enough'));
            return;
        }
        if (this.ingame == null) {
            App_1.default.instance.showLoading(true);
            cc.assetManager.getBundle("TienLen").load("InGame", cc.Prefab, function (finish, total, item) {
            }, function (err1, prefab) {
                App_1.default.instance.showLoading(false);
                if (err1 != null) {
                    //Utils.Log("errr load game TIENLEN:", err1);
                }
                else {
                    _this.ingame = cc.instantiate(prefab).getComponent("TienLen.InGame");
                    _this.ingame.node.parent = _this.node.parent;
                    _this.ingame.node.active = false;
                    TienLenNetworkClient_1.default.getInstance().send(new CardGame_Cmd_1.default.SendJoinRoom(Configs_1.default.App.MONEY_TYPE, info.maxUser, info.bet, 0));
                }
            });
        }
        else {
            this.ingame.node.parent = this.node.parent;
            this.ingame.node.active = false;
            TienLenNetworkClient_1.default.getInstance().send(new CardGame_Cmd_1.default.SendJoinRoom(Configs_1.default.App.MONEY_TYPE, info.maxUser, info.bet, 0));
        }
    };
    Room.prototype.actBack = function () {
        TienLenNetworkClient_1.default.getInstance().close();
        App_1.default.instance.loadScene("Lobby");
    };
    Room.prototype.show = function (isShow) {
        this.node.active = isShow;
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
    };
    Room.prototype.refreshRoom = function () {
        TienLenNetworkClient_1.default.getInstance().send(new CardGame_Cmd_1.default.SendMoneyBetConfig());
    };
    Room.prototype.actQuickPlay = function () {
        var _this = this;
        if (this.listRoom == null) {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_room_err2'));
            return;
        }
        //find all room bet < coin
        var cb = function () {
            var listRoom = [];
            for (var i = 0; i < _this.listRoom.length; i++) {
                if (_this.listRoom[i].moneyRequire <= Configs_1.default.Login.Coin) {
                    var room_1 = _this.listRoom[i];
                    if ((Room_1.IS_SOLO && room_1.maxUserPerRoom == 2) || (!Room_1.IS_SOLO && room_1.maxUserPerRoom != 2)) {
                        listRoom.push(room_1);
                    }
                }
            }
            if (listRoom.length <= 0) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_room_err2'));
                return;
            }
            var randomIdx = Utils_1.default.randomRangeInt(0, listRoom.length);
            var room = listRoom[randomIdx];
            TienLenNetworkClient_1.default.getInstance().send(new CardGame_Cmd_1.default.SendJoinRoom(Configs_1.default.App.MONEY_TYPE, room.maxUserPerRoom, room.moneyBet, 0));
        };
        if (this.ingame == null) {
            App_1.default.instance.showLoading(true);
            cc.assetManager.getBundle("TienLen").load("InGame", cc.Prefab, function (finish, total, item) {
            }, function (err1, prefab) {
                _this.ingame = cc.instantiate(prefab).getComponent("TienLen.InGame");
                _this.ingame.node.parent = _this.node.parent;
                _this.ingame.node.active = false;
                App_1.default.instance.showLoading(false);
                cb();
            });
        }
        else {
            this.ingame.node.parent = this.node.parent;
            this.ingame.node.active = false;
            cb();
        }
    };
    var Room_1;
    Room.IS_SOLO = false;
    Room.instance = null;
    __decorate([
        property(cc.Sprite)
    ], Room.prototype, "sprAvatar", void 0);
    __decorate([
        property(cc.Node)
    ], Room.prototype, "roomContent", void 0);
    __decorate([
        property(cc.Prefab)
    ], Room.prototype, "roomItem", void 0);
    __decorate([
        property(cc.Node)
    ], Room.prototype, "ingameNode", void 0);
    __decorate([
        property(cc.Prefab)
    ], Room.prototype, "ingamePr", void 0);
    __decorate([
        property(cc.Label)
    ], Room.prototype, "lbCoin", void 0);
    __decorate([
        property(cc.Label)
    ], Room.prototype, "lblNickname", void 0);
    __decorate([
        property(cc.Prefab)
    ], Room.prototype, "prefabItemRoom", void 0);
    __decorate([
        property(SoundManager)
    ], Room.prototype, "soundManager", void 0);
    Room = Room_1 = __decorate([
        ccclass
    ], Room);
    return Room;
}(cc.Component));
exports.default = Room;

cc._RF.pop();