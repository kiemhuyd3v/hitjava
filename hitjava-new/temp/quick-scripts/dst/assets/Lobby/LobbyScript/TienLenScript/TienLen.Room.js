
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/TienLenScript/TienLen.Room.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxUaWVuTGVuU2NyaXB0XFxUaWVuTGVuLlJvb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHdEQUFtRDtBQUNuRCw0Q0FBdUM7QUFDdkMsd0VBQW1FO0FBQ25FLDRFQUFnRTtBQUNoRSxvREFBK0M7QUFDL0MsZ0RBQTJDO0FBQzNDLGdFQUEwRDtBQUMxRCx3RUFBMkQ7QUFDM0QsZ0ZBQTJFO0FBQzNFLDZDQUF1QztBQUN2Qyx5REFBbUQ7QUFFbkQsNkNBQWdDO0FBRWhDLElBQUssVUFZSjtBQVpELFdBQUssVUFBVTtJQUNYLHVDQUFNLENBQUE7SUFDTiwyQ0FBUSxDQUFBO0lBQ1IseUNBQU8sQ0FBQTtJQUNQLHFEQUFhLENBQUE7SUFDYiwyQ0FBUSxDQUFBO0lBQ1IsNkNBQVMsQ0FBQTtJQUNULHFEQUFhLENBQUE7SUFDYix1REFBYyxDQUFBO0lBQ2QsdURBQWMsQ0FBQTtJQUNkLG1EQUFZLENBQUE7SUFDWiw0Q0FBUyxDQUFBO0FBQ2IsQ0FBQyxFQVpJLFVBQVUsS0FBVixVQUFVLFFBWWQ7QUFDSyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFBO1FBRUksWUFBTyxHQUFtQixJQUFJLENBQUM7UUFHL0IsYUFBUSxHQUFtQixJQUFJLENBQUM7UUFHaEMsY0FBUyxHQUFtQixFQUFFLENBQUM7SUFjbkMsQ0FBQztJQWJHLGtDQUFXLEdBQVg7UUFDSSw2QkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFbEYsQ0FBQztJQUNELHNDQUFlLEdBQWYsVUFBZ0IsVUFBVTtRQUN0QixJQUFJLGlCQUFPLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FB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QUM7OENBQ1c7SUFyQmpCLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0EwVnhCO0lBQUQsV0FBQztDQTFWRCxBQTBWQyxDQTFWaUMsRUFBRSxDQUFDLFNBQVMsR0EwVjdDO2tCQTFWb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdW5kbGVDb250cm9sIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL3NyYy9CdW5kbGVDb250cm9sXCI7XG5pbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBCcm9hZGNhc3RSZWNlaXZlciBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9Ccm9hZGNhc3RSZWNlaXZlclwiO1xuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9Db21tb24uQXVkaW9NYW5hZ2VyXCI7XG5pbXBvcnQgU1BVdGlscyBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9TUFV0aWxzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL1NjcmlwdC9jb21tb24vVXRpbHNcIjtcbmltcG9ydCBDYXJkR2FtZUNtZCBmcm9tIFwiLi4vU2NyaXB0L25ldHdvcmtzL0NhcmRHYW1lLkNtZFwiO1xuaW1wb3J0IEluUGFja2V0IGZyb20gXCIuLi9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5JblBhY2tldFwiO1xuaW1wb3J0IFRpZW5MZW5OZXR3b3JrQ2xpZW50IGZyb20gXCIuLi9TY3JpcHQvbmV0d29ya3MvVGllbkxlbk5ldHdvcmtDbGllbnRcIjtcbmltcG9ydCBUaWVuTGVuQ21kIGZyb20gXCIuL1RpZW5MZW4uQ21kXCI7XG5pbXBvcnQgVGllbkxlbkdhbWVMb2dpYyBmcm9tIFwiLi9UaWVuTGVuLkdhbWVMb2dpY1wiO1xuaW1wb3J0IEluR2FtZSBmcm9tIFwiLi9UaWVuTGVuLkluR2FtZVwiO1xuaW1wb3J0IFJlcyBmcm9tIFwiLi9UaWVuTGVuLlJlc1wiO1xuXG5lbnVtIGF1ZGlvX2NsaXAge1xuICAgIEJHID0gMCxcbiAgICBMT1NFID0gMSxcbiAgICBXSU4gPSAyLFxuICAgIENIRVRNQVlORSA9IDMsXG4gICAgRE9ESSA9IDQsXG4gICAgSEFJTkUgPSA1LFxuICAgIE1BWUhBQlVPSSA9IDYsXG4gICAgVEhVQURJQ1VORyA9IDcsXG4gICAgU1RBUlRfR0FNRSA9IDgsXG4gICAgQ0hJQV9CQUkgPSA5LFxuICAgIERBTkggPSAxMFxufVxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzKFwiVGllbkxlbi5JbkdhbWUuU291bmRNYW5hZ2VyXCIpXG5leHBvcnQgY2xhc3MgU291bmRNYW5hZ2VyIHtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXG4gICAgYmdNdXNpYzogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxuICAgIGVmZlNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoW2NjLkF1ZGlvQ2xpcF0pXG4gICAgbGlzdEF1ZGlvOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuICAgIHBsYXlCZ011c2ljKCkge1xuICAgICAgICBBdWRpb01hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wbGF5QmFja2dyb3VuZE11c2ljKHRoaXMubGlzdEF1ZGlvW2F1ZGlvX2NsaXAuQkddKTtcblxuICAgIH1cbiAgICBwbGF5QXVkaW9FZmZlY3QoaW5kZXhBdWRpbykge1xuICAgICAgICBpZiAoU1BVdGlscy5nZXRTb3VuZFZvbHVtbigpID4gMCkge1xuICAgICAgICAgICAgdGhpcy5lZmZTb3VuZC5jbGlwID0gdGhpcy5saXN0QXVkaW9baW5kZXhBdWRpb107XG4gICAgICAgICAgICB0aGlzLmVmZlNvdW5kLnBsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdG9wQmdNdXNpYygpIHtcbiAgICAgICAgdGhpcy5iZ011c2ljLnN0b3AoKTtcbiAgICB9XG59XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9vbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHVibGljIHN0YXRpYyBJU19TT0xPID0gZmFsc2U7XG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogUm9vbSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBzcHJBdmF0YXI6IGNjLlNwcml0ZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcm9vbUNvbnRlbnQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcm9vbUl0ZW06IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGluZ2FtZU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgaW5nYW1lUHI6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiQ29pbjogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxOaWNrbmFtZTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVmYWJJdGVtUm9vbTogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoU291bmRNYW5hZ2VyKVxuICAgIHNvdW5kTWFuYWdlcjogU291bmRNYW5hZ2VyID0gbnVsbDtcbiAgICBidW5kbGVHYW1lID0gbnVsbDtcblxuICAgIHByaXZhdGUgaW5nYW1lOiBJbkdhbWUgPSBudWxsO1xuICAgIHByaXZhdGUgbGlzdFJvb20gPSBbXTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgUm9vbS5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIFJlcy5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLnNvdW5kTWFuYWdlci5wbGF5QmdNdXNpYygpO1xuICAgICAgICB0aGlzLnNwckF2YXRhci5zcHJpdGVGcmFtZSA9IEFwcC5pbnN0YW5jZS5nZXRBdmF0YXJTcHJpdGVGcmFtZShDb25maWdzLkxvZ2luLkF2YXRhcik7XG4gICAgICAgIHRoaXMubGJDb2luLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihDb25maWdzLkxvZ2luLkNvaW4pO1xuICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5yZWdpc3RlcihCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxiQ29pbi5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoQ29uZmlncy5Mb2dpbi5Db2luKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG5cbiAgICAgICAgVGllbkxlbk5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5hZGRPbkNsb3NlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWN0QmFjaygpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgdGhpcy5sYmxOaWNrbmFtZS5zdHJpbmcgPSBDb25maWdzLkxvZ2luLk5pY2tuYW1lO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBUaWVuTGVuTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmFkZExpc3RlbmVyKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBsZXQgaW5wYWNrZXQgPSBuZXcgSW5QYWNrZXQoZGF0YSk7XG4gICAgICAgICAgICBsZXQgY21kSWQgPSBpbnBhY2tldC5nZXRDbWRJZCgpO1xuICAgICAgICAgICAgIC8vVXRpbHMuTG9nKFwiVGllbkxlbiBjbWQ6IFwiLCBjbWRJZCk7XG4gICAgICAgICAgICBzd2l0Y2ggKGNtZElkKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBDYXJkR2FtZUNtZC5Db2RlLkxPR0lOOlxuICAgICAgICAgICAgICAgICAgICBUaWVuTGVuTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IFRpZW5MZW5DbWQuU2VuZFJlY29ubmVjdFJvb20oKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgQ2FyZEdhbWVDbWQuQ29kZS5NT05FWV9CRVRfQ09ORklHOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgQ2FyZEdhbWVDbWQuUmVzTW9uZXlCZXRDb25maWcoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAvL1V0aWxzLkxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RSb29tID0gcmVzLmxpc3Q7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdFJvb21zKHJlcy5saXN0KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgQ2FyZEdhbWVDbWQuQ29kZS5KT0lOX1JPT01fRkFJTDoge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IENhcmRHYW1lQ21kLlJlY2VpdmVkSm9pblJvb21GYWlsKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9IFwiTFxcdTFlZDdpIGtpXFx1MWVjM20gdHJhIHRoXFx1MDBmNG5nIHRpbiFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0gXCJLaFxcdTAwZjRuZyB0XFx1MDBlY20gXFx1MDExMVxcdTAxYjBcXHUxZWUzYyBwaFxcdTAwZjJuZyB0aFxcdTAwZWRjaCBoXFx1MWVlM3AuIFZ1aSBsXFx1MDBmMm5nIHRoXFx1MWVlZCBsXFx1MWVhMWkgc2F1IVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBcIkJcXHUxZWExbiBraFxcdTAwZjRuZyBcXHUwMTExXFx1MWVlNyB0aVxcdTFlYzFuIHZcXHUwMGUwbyBwaFxcdTAwZjJuZyBjaFxcdTAxYTFpIG5cXHUwMGUweSFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0gXCJLaFxcdTAwZjRuZyB0XFx1MDBlY20gXFx1MDExMVxcdTAxYjBcXHUxZWUzYyBwaFxcdTAwZjJuZyB0aFxcdTAwZWRjaCBoXFx1MWVlM3AuIFZ1aSBsXFx1MDBmMm5nIHRoXFx1MWVlZCBsXFx1MWVhMWkgc2F1IVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBcIk1cXHUxZWQ3aSBsXFx1MWVhN24gdlxcdTAwZTBvIHBoXFx1MDBmMm5nIHBoXFx1MWVhM2kgY1xcdTAwZTFjaCBuaGF1IDEwIGdpXFx1MDBlMnkhXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9IFwiSFxcdTFlYzcgdGhcXHUxZWQxbmcgYlxcdTFlYTNvIHRyXFx1MDBlYyFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0gXCJLaFxcdTAwZjRuZyB0XFx1MDBlY20gdGhcXHUxZWE1eSBwaFxcdTAwZjJuZyBjaFxcdTAxYTFpIVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBcIk1cXHUxZWFkdCBraFxcdTFlYTl1IHBoXFx1MDBmMm5nIGNoXFx1MDFhMWkga2hcXHUwMGY0bmcgXFx1MDExMVxcdTAwZmFuZyFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0gXCJQaFxcdTAwZjJuZyBjaFxcdTAxYTFpIFxcdTAxMTFcXHUwMGUzIFxcdTAxMTFcXHUxZWU3IG5nXFx1MDFiMFxcdTFlZGRpIVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0gXCJCXFx1MWVhMW4gYlxcdTFlY2IgY2hcXHUxZWU3IHBoXFx1MDBmMm5nIGtoXFx1MDBmNG5nIGNobyB2XFx1MDBlMG8gYlxcdTAwZTBuIVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFRpZW5MZW5DbWQuQ29kZS5KT0lOX1JPT01fU1VDQ0VTUzoge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IFRpZW5MZW5DbWQuUmVjZWl2ZWRKb2luUm9vbVN1Y2Nlc3MoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAvL1V0aWxzLkxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICBUaWVuTGVuR2FtZUxvZ2ljLmdldEluc3RhbmNlKCkuaW5pdFdpdGgocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmdhbWUuc2hvdyh0cnVlLCByZXMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBUaWVuTGVuQ21kLkNvZGUuVVBEQVRFX0dBTUVfSU5GTzoge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IFRpZW5MZW5DbWQuUmVjZWl2ZWRVcGRhdGVHYW1lSW5mbyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgIC8vVXRpbHMuTG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvdyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5nYW1lLnVwZGF0ZUdhbWVJbmZvKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFRpZW5MZW5DbWQuQ29kZS5BVVRPX1NUQVJUOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgVGllbkxlbkNtZC5SZWNlaXZlZEF1dG9TdGFydChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgIC8vVXRpbHMuTG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIFRpZW5MZW5HYW1lTG9naWMuZ2V0SW5zdGFuY2UoKS5hdXRvU3RhcnQocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmdhbWUuYXV0b1N0YXJ0KHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFRpZW5MZW5DbWQuQ29kZS5VU0VSX0pPSU5fUk9PTToge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IFRpZW5MZW5DbWQuUmVjZWl2ZVVzZXJKb2luUm9vbShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgIC8vVXRpbHMuTG9nKFwiVGllbkxlbkNtZC5Db2RlLlVTRVJfSk9JTl9ST09NOlxcblwiLCByZXMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZ2FtZS5vblVzZXJKb2luUm9vbShyZXMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBUaWVuTGVuQ21kLkNvZGUuRklSU1RfVFVSTjoge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IFRpZW5MZW5DbWQuUmVjZWl2ZWRGaXJzdFR1cm5EZWNpc2lvbihkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgIC8vVXRpbHMuTG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuaW5nYW1lLmZpcnN0VHVybihyZXMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZ2FtZS5kYXRhRmlyc3RUdXJuID0gcmVzO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBUaWVuTGVuQ21kLkNvZGUuQ0hJQV9CQUk6IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBUaWVuTGVuQ21kLlJlY2VpdmVkQ2hpYUJhaShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgIC8vVXRpbHMuTG9nKFwiIFRpZW5MZW5DbWQuQ29kZS5DSElBX0JBSTpcIiwgcmVzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmdhbWUuY2hpYUJhaShyZXMpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFRpZW5MZW5DbWQuQ29kZS5DSEFOR0VfVFVSTjoge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IFRpZW5MZW5DbWQuUmVjZWl2ZWRDaGFuZ2VUdXJuKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgLy9VdGlscy5Mb2cocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmdhbWUuY2hhbmdlVHVybihyZXMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBUaWVuTGVuQ21kLkNvZGUuREFOSF9CQUk6IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBUaWVuTGVuQ21kLlJlY2VpdmVkRGFuaEJhaShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgIC8vVXRpbHMuTG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5nYW1lLnN1Ym1pdFR1cm4ocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgVGllbkxlbkNtZC5Db2RlLkJPX0xVT1Q6IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBUaWVuTGVuQ21kLlJlY2VpdmVkQm9sdW90KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgLy9VdGlscy5Mb2cocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmdhbWUucGFzc1R1cm4ocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgVGllbkxlbkNtZC5Db2RlLkVORF9HQU1FOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgVGllbkxlbkNtZC5SZWNlaXZlZEVuZEdhbWUoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAvL1V0aWxzLkxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZ2FtZS5lbmRHYW1lKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFRpZW5MZW5DbWQuQ29kZS5VUERBVEVfTUFUQ0g6IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBUaWVuTGVuQ21kLlJlY2VpdmVkVXBkYXRlTWF0Y2goZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAvL1V0aWxzLkxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZ2FtZS51cGRhdGVNYXRjaChyZXMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBUaWVuTGVuQ21kLkNvZGUuVVNFUl9MRUFWRV9ST09NOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgVGllbkxlbkNtZC5Vc2VyTGVhdmVSb29tKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgLy9VdGlscy5Mb2cocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmdhbWUudXNlckxlYXZlUm9vbShyZXMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBUaWVuTGVuQ21kLkNvZGUuUkVRVUVTVF9MRUFWRV9ST09NOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgVGllbkxlbkNtZC5SZWNlaXZlZE5vdGlmeVJlZ091dFJvb20oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAvL1V0aWxzLkxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZ2FtZS5ub3RpZnlVc2VyUmVnT3V0Um9vbShyZXMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBUaWVuTGVuQ21kLkNvZGUuQ0hBVF9ST09NOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBUaWVuTGVuQ21kLlJlY2VpdmVkQ2hhdFJvb20oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgLy9VdGlscy5Mb2coXCJUTE1OIENIQVRfUk9PTSByZXMgOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluZ2FtZS5wbGF5ZXJDaGF0KHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBUaWVuTGVuQ21kLkNvZGUuQ0hBVF9DSE9ORzpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgVGllbkxlbkNtZC5SZWNlaXZlZENoYXRDaG9uZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAvL1V0aWxzLkxvZyhcIlRMTU4gQ0hBVF9DSE9ORyByZXMgOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluZ2FtZS5wbGF5ZXJDaGF0Q2hvbmcocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFRpZW5MZW5DbWQuQ29kZS5XQUlUXzRfRE9JX1RIT05HOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBUaWVuTGVuQ21kLlJlY2VpdmVkV2FpdEJvbkRvaVRob25nKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgIC8vVXRpbHMuTG9nKFwiVExNTiBXQUlUXzRfRE9JX1RIT05HIHJlcyA6IFwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5nYW1lLndhaXQ0ZG9pdGhvbmcocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAvL2dldCBsaXN0IHJvb21cbiAgICAgICAgdGhpcy5yZWZyZXNoUm9vbSgpO1xuICAgIH1cblxuICAgIGluaXRSb29tcyhyb29tcykge1xuICAgICAgICBsZXQgYXJyQmV0ID0gW107XG4gICAgICAgIHRoaXMucm9vbUNvbnRlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgbGV0IGlkID0gMDtcbiAgICAgICAgbGV0IG5hbWVzID0gW1wiU2FuIGLhurFuZyB04bqldCBj4bqjXCIsIFwiTmhp4buBdSB0aeG7gW4gdGjDrCB2w6BvXCIsIFwiRMOibiBjaMahaVwiLCBcIkLDoG4gY2hvIMSR4bqhaSBnaWFcIiwgXCJU4bupIHF1w71cIiwgXCJC4buRbiDEkcO0aSB0aMO0bmdcIiwgXCJU4bubaSB0cuG6r25nXCIsIFwiQ2jhurd0IGhlb1wiXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb29tcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvb20gPSByb29tc1tpXTtcbiAgICAgICAgICAgIGlmICgoUm9vbS5JU19TT0xPICYmIHJvb20ubWF4VXNlclBlclJvb20gPT0gMikgfHwgKCFSb29tLklTX1NPTE8gJiYgcm9vbS5tYXhVc2VyUGVyUm9vbSAhPSAyKSkge1xuICAgICAgICAgICAgICAgIGlkKys7XG5cbiAgICAgICAgICAgICAgICBsZXQgaXNFeGlzdGVkID0gYXJyQmV0LmluZGV4T2Yocm9vbS5tb25leUJldCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzRXhpc3RlZCA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBhcnJCZXQucHVzaChyb29tLm1vbmV5QmV0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXJyQmV0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBhIC0gYjtcbiAgICAgICAgfSk7XG4gICAgICAgICAvL1V0aWxzLkxvZyhcIkNhcmRHYW1lX0l0ZW1Sb29tIGFyckJldCBJbmNyZWFzZSA6IFwiLCBhcnJCZXQpO1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJCZXQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgcGxheWVyQ291bnQgPSAwO1xuICAgICAgICAgICAgbGV0IG1heFVzZXIgPSAwO1xuICAgICAgICAgICAgbGV0IG1vbmV5UmVxdWlyZSA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IHJvb21zLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJvb20gPSByb29tc1thXTtcblxuICAgICAgICAgICAgICAgIGlmICgoUm9vbS5JU19TT0xPICYmIHJvb20ubWF4VXNlclBlclJvb20gPT0gMikgfHwgKCFSb29tLklTX1NPTE8gJiYgcm9vbS5tYXhVc2VyUGVyUm9vbSAhPSAyKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocm9vbS5tb25leUJldCA9PSBhcnJCZXRbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJDb3VudCArPSByb29tLm5QZXJzaW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4VXNlciA9IHJvb20ubWF4VXNlclBlclJvb207XG4gICAgICAgICAgICAgICAgICAgICAgICBtb25leVJlcXVpcmUgPSByb29tLm1vbmV5UmVxdWlyZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWJJdGVtUm9vbSkuZ2V0Q29tcG9uZW50KFwiQ2FyZEdhbWVfSXRlbVJvb21cIik7XG4gICAgICAgICAgICBpdGVtLmluaXRJdGVtcyh7XG4gICAgICAgICAgICAgICAgYmV0OiBhcnJCZXRbaW5kZXhdLFxuICAgICAgICAgICAgICAgIHBsYXllcnM6IHBsYXllckNvdW50LFxuICAgICAgICAgICAgICAgIG1heFVzZXI6IG1heFVzZXIsXG4gICAgICAgICAgICAgICAgbW9uZXlSZXF1aXJlOiBtb25leVJlcXVpcmUsXG4gICAgICAgICAgICAgICAgZ2FtZUlkOiBSb29tLklTX1NPTE8gPyAxIDogMCAgLy8gMCA9IFRMTU4sIDEgPSBUTE1OIFNvbG8sIDIgPSBTYW0gTG9jLCAzID0gQmEgQ2F5LCA0ID0gQmFpIENhbywgNSA9IFBva2VyLCA2ID0gTWF1IEJpbmhcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5yb29tQ29udGVudC5hZGRDaGlsZChpdGVtLm5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yb29tQ29udGVudC5wYXJlbnQucGFyZW50LmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KS5zY3JvbGxUb0JvdHRvbSgwKTtcbiAgICAgICAgdGhpcy5yb29tQ29udGVudC5wYXJlbnQucGFyZW50LmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KS5zY3JvbGxUb1RvcCgyKTtcblxuICAgIH1cblxuICAgIGhhbmRsZUpvaW5Sb29tKGluZm8pIHtcbiAgICAgICAgIC8vVXRpbHMuTG9nKFwiQ2FyZEdhbWUgaGFuZGxlSm9pblJvb20gaW5mbyA6IFwiLCBpbmZvKTtcbiAgICAgICAgaWYgKENvbmZpZ3MuTG9naW4uQ29pbiA8IGluZm8ubW9uZXlSZXF1aXJlKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25vdF9lbm91Z2gnKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pbmdhbWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmdldEJ1bmRsZShcIlRpZW5MZW5cIikubG9hZChcIkluR2FtZVwiLCBjYy5QcmVmYWIsIGZ1bmN0aW9uIChmaW5pc2gsIHRvdGFsLCBpdGVtKSB7XG4gICAgICAgICAgICB9LCAoZXJyMSwgcHJlZmFiOiBjYy5QcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGlmIChlcnIxICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgIC8vVXRpbHMuTG9nKFwiZXJyciBsb2FkIGdhbWUgVElFTkxFTjpcIiwgZXJyMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmdhbWUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChcIlRpZW5MZW4uSW5HYW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZ2FtZS5ub2RlLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5nYW1lLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIFRpZW5MZW5OZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgQ2FyZEdhbWVDbWQuU2VuZEpvaW5Sb29tKENvbmZpZ3MuQXBwLk1PTkVZX1RZUEUsIGluZm8ubWF4VXNlciwgaW5mby5iZXQsIDApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbmdhbWUubm9kZS5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xuICAgICAgICAgICAgdGhpcy5pbmdhbWUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIFRpZW5MZW5OZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgQ2FyZEdhbWVDbWQuU2VuZEpvaW5Sb29tKENvbmZpZ3MuQXBwLk1PTkVZX1RZUEUsIGluZm8ubWF4VXNlciwgaW5mby5iZXQsIDApKTtcbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICBhY3RCYWNrKCkge1xuICAgICAgICBUaWVuTGVuTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmNsb3NlKCk7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5sb2FkU2NlbmUoXCJMb2JieVwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvdyhpc1Nob3c6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGlzU2hvdztcbiAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcbiAgICB9XG5cbiAgICByZWZyZXNoUm9vbSgpIHtcbiAgICAgICAgVGllbkxlbk5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBDYXJkR2FtZUNtZC5TZW5kTW9uZXlCZXRDb25maWcoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFjdFF1aWNrUGxheSgpIHtcbiAgICAgICAgaWYgKHRoaXMubGlzdFJvb20gPT0gbnVsbCkge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfcm9vbV9lcnIyJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vZmluZCBhbGwgcm9vbSBiZXQgPCBjb2luXG4gICAgICAgIGxldCBjYiA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBsaXN0Um9vbSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RSb29tLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdFJvb21baV0ubW9uZXlSZXF1aXJlIDw9IENvbmZpZ3MuTG9naW4uQ29pbikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcm9vbSA9IHRoaXMubGlzdFJvb21baV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoUm9vbS5JU19TT0xPICYmIHJvb20ubWF4VXNlclBlclJvb20gPT0gMikgfHwgKCFSb29tLklTX1NPTE8gJiYgcm9vbS5tYXhVc2VyUGVyUm9vbSAhPSAyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdFJvb20ucHVzaChyb29tKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsaXN0Um9vbS5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Jvb21fZXJyMicpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmFuZG9tSWR4ID0gVXRpbHMucmFuZG9tUmFuZ2VJbnQoMCwgbGlzdFJvb20ubGVuZ3RoKTtcbiAgICAgICAgICAgIGxldCByb29tID0gbGlzdFJvb21bcmFuZG9tSWR4XTtcbiAgICAgICAgICAgIFRpZW5MZW5OZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgQ2FyZEdhbWVDbWQuU2VuZEpvaW5Sb29tKENvbmZpZ3MuQXBwLk1PTkVZX1RZUEUsIHJvb20ubWF4VXNlclBlclJvb20sIHJvb20ubW9uZXlCZXQsIDApKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuaW5nYW1lID09IG51bGwpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoXCJUaWVuTGVuXCIpLmxvYWQoXCJJbkdhbWVcIiwgY2MuUHJlZmFiLCBmdW5jdGlvbiAoZmluaXNoLCB0b3RhbCwgaXRlbSkge1xuICAgICAgICAgICAgfSwgKGVycjEsIHByZWZhYjogY2MuUHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmdhbWUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChcIlRpZW5MZW4uSW5HYW1lXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5nYW1lLm5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcbiAgICAgICAgICAgICAgICB0aGlzLmluZ2FtZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmluZ2FtZS5ub2RlLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XG4gICAgICAgICAgICB0aGlzLmluZ2FtZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgfVxuXG4gICAgfVxufSJdfQ==