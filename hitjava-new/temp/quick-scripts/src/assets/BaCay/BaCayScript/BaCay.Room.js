"use strict";
cc._RF.push(module, 'bef07HH7BlP/btnMHOsS2YX', 'BaCay.Room');
// BaCay/BaCayScript/BaCay.Room.ts

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
var Configs_1 = require("../../Loading/src/Configs");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var SPUtils_1 = require("../../Lobby/LobbyScript/Script/common/SPUtils");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
var BaCay_Cmd_1 = require("./BaCay.Cmd");
var BaCay_NetworkClient_1 = require("./BaCay.NetworkClient");
var Network_Cmd_1 = require("../../Lobby/LobbyScript/Script/networks/Network.Cmd");
var Common_AudioManager_1 = require("../../Lobby/LobbyScript/Script/common/Common.AudioManager");
var audio_clip;
(function (audio_clip) {
    audio_clip[audio_clip["BG"] = 0] = "BG";
    audio_clip[audio_clip["LOSE"] = 1] = "LOSE";
    audio_clip[audio_clip["WIN"] = 2] = "WIN";
    audio_clip[audio_clip["CHIA_BAI"] = 3] = "CHIA_BAI";
    audio_clip[audio_clip["CHIP"] = 4] = "CHIP";
    audio_clip[audio_clip["CLOCK"] = 5] = "CLOCK";
    audio_clip[audio_clip["START_BET"] = 6] = "START_BET";
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
        // this.effSound.clip = this.listAudio[indexAudio];
        // this.effSound.play();
        if (SPUtils_1.default.getSoundVolumn() > 0) {
            cc.audioEngine.play(this.listAudio[indexAudio], false, 1);
        }
    };
    SoundManager.prototype.stopAudioEffect = function () {
        cc.audioEngine.stopAll();
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
        ccclass("BaCay.Room.SoundManager")
    ], SoundManager);
    return SoundManager;
}());
exports.SoundManager = SoundManager;
var BacayRoom = /** @class */ (function (_super) {
    __extends(BacayRoom, _super);
    function BacayRoom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.contentListRooms = null;
        _this.labelNickName = null;
        _this.labelCoin = null;
        _this.scrRoom = null;
        _this.UI_Playing = null;
        _this.uiInGamePr = null;
        _this.btnHideRoomFull = null;
        _this.edtFindRoom = null;
        _this.soundManager = null;
        _this.listDataRoom = [];
        _this.listFullRoom = [];
        _this.isInitedUIRoom = false;
        _this.isSortRoom = false;
        return _this;
        // update (dt) {}
    }
    BacayRoom_1 = BacayRoom;
    // LIFE-CYCLE CALLBACKS:
    BacayRoom.prototype.onLoad = function () {
        BacayRoom_1.instance = this;
    };
    BacayRoom.prototype.start = function () {
        this.showUIRooms();
        App_1.default.instance.showErrLoading("Đang kết nối tới server...");
        BaCay_NetworkClient_1.default.getInstance().addOnOpen(function () {
            App_1.default.instance.showErrLoading("Đang đăng nhập...");
            BaCay_NetworkClient_1.default.getInstance().send(new Network_Cmd_1.default.SendLogin(Configs_1.default.Login.Nickname, Configs_1.default.Login.AccessToken));
        }, this);
        BaCay_NetworkClient_1.default.getInstance().addOnClose(function () {
            App_1.default.instance.loadScene("Lobby");
        }, this);
        BaCay_NetworkClient_1.default.getInstance().connect();
        this.soundManager.playBgMusic();
    };
    BacayRoom.prototype.showUIRooms = function () {
        var _this = this;
        if (this.isInitedUIRoom) {
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        }
        else {
            this.isInitedUIRoom = true;
            this.labelNickName.string = Configs_1.default.Login.Nickname;
            BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function () {
                _this.labelCoin.string = Utils_1.default.formatNumber(Configs_1.default.Login.Coin);
                // LogEvent.getInstance().sendEventMoneyChange(Configs.GameId.getGameName(Configs.GameId.BaCay),Configs.Login.Currency,Configs.Login.Coin);
            }, this);
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
            this.setupListener();
        }
    };
    BacayRoom.prototype.refeshListRoom = function () {
        App_1.default.instance.showLoading(true);
        BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.SendGetListRoom());
    };
    BacayRoom.prototype.setupListener = function () {
        var _this = this;
        BaCay_NetworkClient_1.default.getInstance().addListener(function (data) {
            var inpacket = new Network_InPacket_1.default(data);
            switch (inpacket.getCmdId()) {
                case BaCay_Cmd_1.default.Code.LOGIN:
                    // App.instance.showLoading(false);
                    _this.refeshListRoom();
                    BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.CmdReconnectRoom());
                    break;
                case BaCay_Cmd_1.default.Code.TOPSERVER:
                    {
                        // App.instance.showLoading(false);
                        var res = new BaCay_Cmd_1.default.ReceivedTopServer(data);
                        var rankType = res["rankType"];
                        var topDay_money = res["topDay_money"];
                        var topWeek_money = res["topWeek_money"];
                        var topMonth_money = res["topMonth_money"];
                    }
                    break;
                case BaCay_Cmd_1.default.Code.CMD_PINGPONG:
                    {
                    }
                    break;
                case BaCay_Cmd_1.default.Code.CMD_JOIN_ROOM:
                    {
                        // App.instance.showLoading(false);
                        Utils_1.default.Log("BaCay CMD_JOIN_ROOM");
                    }
                    break;
                case BaCay_Cmd_1.default.Code.CMD_RECONNECT_ROOM:
                    {
                        // App.instance.showLoading(false);
                        cc.log("BaCay CMD_RECONNECT_ROOM");
                    }
                    break;
                case BaCay_Cmd_1.default.Code.MONEY_BET_CONFIG:
                    {
                        // App.instance.showLoading(false);
                        cc.log("BaCay MONEY_BET_CONFIG");
                    }
                    break;
                case BaCay_Cmd_1.default.Code.JOIN_ROOM_FAIL:
                    {
                        // App.instance.showLoading(false);
                        var res = new BaCay_Cmd_1.default.ReceivedJoinRoomFail(data);
                        var msg = "Lỗi " + res.getError() + ", không xác định.";
                        switch (res.getError()) {
                            case 1:
                                msg = App_1.default.instance.getTextLang('txt_room_err1');
                                break;
                            case 3:
                                msg = App_1.default.instance.getTextLang('txt_room_err3');
                                break;
                            case 2:
                            case 4:
                                msg = App_1.default.instance.getTextLang('txt_room_err2');
                                break;
                            case 5:
                                msg = App_1.default.instance.getTextLang('txt_room_err5');
                                break;
                            case 6:
                                msg = App_1.default.instance.getTextLang('txt_room_err6');
                                break;
                            case 7:
                                msg = App_1.default.instance.getTextLang('txt_room_err7');
                                break;
                            case 8:
                                msg = App_1.default.instance.getTextLang('txt_room_err8');
                                break;
                            case 9:
                                msg = App_1.default.instance.getTextLang('txt_room_err9');
                                break;
                            case 10:
                                msg = App_1.default.instance.getTextLang('txt_room_err10');
                        }
                        App_1.default.instance.alertDialog.showMsg(msg);
                        App_1.default.instance.showLoading(false);
                    }
                    break;
                case BaCay_Cmd_1.default.Code.GET_LIST_ROOM:
                    {
                        // App.instance.showLoading(false);
                        var res = new BaCay_Cmd_1.default.ReceivedGetListRoom(data);
                        cc.log(res);
                        _this.listDataRoom = res.list;
                        _this.listDataRoom.sort(function (x, y) {
                            return x.moneyBet - y.moneyBet;
                        });
                        _this.reloadListRoom(_this.listDataRoom);
                        // this.scrRoom.scrollToTop(0.2);
                    }
                    break;
                case BaCay_Cmd_1.default.Code.JOIN_GAME_ROOM_BY_ID:
                    {
                        // App.instance.showLoading(false);
                    }
                    break;
                // ------------------------ Game ---------------------------     
                case BaCay_Cmd_1.default.Code.JOIN_ROOM_SUCCESS:
                    {
                        cc.log("BaCay JOIN_ROOM_SUCCESS");
                        // App.instance.showLoading(false);
                        var res = new BaCay_Cmd_1.default.ReceivedJoinRoomSucceed(data);
                        var cb = function (res) {
                            _this.UI_Playing.getComponent("BaCay.Controller").setupMatch(res);
                        };
                        _this.showUIPlaying(res, cb);
                    }
                    break;
                case BaCay_Cmd_1.default.Code.THONG_TIN_BAN_CHOI: {
                    App_1.default.instance.showLoading(false);
                    var res = new BaCay_Cmd_1.default.ReceivedGameInfo(data);
                    cc.log("THONG_TIN_BAN_CHOI:", res);
                    var cb = function (res) {
                        _this.UI_Playing.getComponent("BaCay.Controller").actReJoinRoom(res);
                    };
                    _this.showUIPlaying(res, cb);
                    break;
                }
                case BaCay_Cmd_1.default.Code.LOGOUT: {
                    cc.log("Đăng nhâp từ nguồn khác!");
                }
                default:
                    break;
            }
        }, this);
    };
    BacayRoom.prototype.showUIPlaying = function (res, cb) {
        var _this = this;
        if (this.UI_Playing == null) {
            App_1.default.instance.showLoading(true);
            cc.assetManager.getBundle("BaCay").load("prefabs/UI_Play", cc.Prefab, function (finish, total, item) {
            }, function (err1, prefab) {
                App_1.default.instance.showLoading(false);
                _this.UI_Playing = cc.instantiate(prefab);
                _this.UI_Playing.parent = _this.node.parent;
                _this.UI_Playing.active = true;
                _this.node.active = false;
                cb(res);
                _this.closeUIRoom();
            });
        }
        else {
            App_1.default.instance.showLoading(false);
            this.UI_Playing.active = true;
            this.node.active = false;
            cb(res);
        }
    };
    BacayRoom.prototype.createRoom = function () {
        cc.log("BaCay createRoom");
        BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.SendCreateRoom(1, 8, 500, 0, 8, "", "", 10000));
    };
    BacayRoom.prototype.hideRoomFull = function () {
        var _this = this;
        cc.log("hide room full");
        this.listFullRoom = [];
        if (this.btnHideRoomFull.isChecked) {
            this.listDataRoom.forEach(function (data) {
                if (data.roomInfo['userCount'] == data.roomInfo["maxUserPerRoom"]) {
                    _this.listFullRoom.push(data);
                }
            });
            this.reloadListRoom(this.listFullRoom);
        }
        else {
            this.reloadListRoom(this.listDataRoom);
        }
    };
    BacayRoom.prototype.findRoomId = function () {
        var text = this.edtFindRoom.string.trim();
        if (text.length > 0) {
            var idFind_1 = parseInt(text);
            var dataRoom = null;
            dataRoom = this.listDataRoom.find(function (data) { return data["id"] == idFind_1; });
            this.reloadListRoom([dataRoom]);
        }
        else {
            this.reloadListRoom(this.listDataRoom);
        }
    };
    BacayRoom.prototype.backToLobby = function () {
        BaCay_NetworkClient_1.default.getInstance().close();
        App_1.default.instance.loadScene("Lobby");
    };
    BacayRoom.prototype.reloadListRoom = function (listDataRoom) {
        this.listDataRoom = listDataRoom;
        App_1.default.instance.showLoading(false);
        var cb = function (item, itemData) {
            item.getComponent("BaCay.ItemRoom").initItem(itemData);
            item.active = true;
        };
        this.scrRoom.node.getComponent("ScrollViewControl").setDataList(cb, listDataRoom);
    };
    BacayRoom.prototype.onBtnSortRoomId = function () {
        if (this.isSortRoom == false) {
            if (this.listDataRoom) {
                this.listDataRoom.sort(function (x, y) {
                    return x.id - y.id;
                });
            }
        }
        else {
            if (this.listDataRoom) {
                this.listDataRoom.sort(function (x, y) {
                    return y.id - x.id;
                });
            }
        }
        this.isSortRoom = !this.isSortRoom;
        var cb = function (item, itemData) {
            item.getComponent("BaCay.ItemRoom").initItem(itemData);
            item.active = true;
        };
        this.scrRoom.node.getComponent("ScrollViewControl").setDataList(cb, this.listDataRoom);
    };
    BacayRoom.prototype.onBtnSortRoomMoney = function () {
        if (this.isSortMoney == false) {
            if (this.listDataRoom) {
                this.listDataRoom.sort(function (x, y) {
                    return x.requiredMoney - y.requiredMoney;
                });
            }
        }
        else {
            if (this.listDataRoom) {
                this.listDataRoom.sort(function (x, y) {
                    return y.requiredMoney - x.requiredMoney;
                });
            }
        }
        this.isSortMoney = !this.isSortMoney;
        var cb = function (item, itemData) {
            item.getComponent("BaCay.ItemRoom").initItem(itemData);
            item.active = true;
        };
        this.scrRoom.node.getComponent("ScrollViewControl").setDataList(cb, this.listDataRoom);
    };
    BacayRoom.prototype.joinRoom = function (info) {
        if (Configs_1.default.Login.Coin < info.requiredMoney) {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_not_enough_money"));
            return;
        }
        App_1.default.instance.showLoading(true);
        BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.SendJoinRoomById(info["id"]));
    };
    BacayRoom.prototype.playingNow = function () {
        var arrRoomOkMoney = [];
        for (var index = 0; index < this.contentListRooms.childrenCount; index++) {
            var roomItem = this.contentListRooms.children[index].getComponent("BaCay.ItemRoom");
            if (roomItem.roomInfo["requiredMoney"] < Configs_1.default.Login.Coin) {
                arrRoomOkMoney.push(index);
            }
        }
        cc.log("BaCay playingNow arrRoomOkMoney : ", arrRoomOkMoney);
        if (arrRoomOkMoney.length > 0) {
            var roomCrowed = arrRoomOkMoney[0];
            cc.log("BaCay playingNow roomCrowed start : ", roomCrowed);
            for (var index = 0; index < arrRoomOkMoney.length; index++) {
                var roomItem = this.contentListRooms.children[arrRoomOkMoney[index]].getComponent("BaCay.ItemRoom");
                var roomItemCrowed = this.contentListRooms.children[roomCrowed].getComponent("BaCay.ItemRoom");
                cc.log("BaCay playingNow ------------------------------------------");
                cc.log("BaCay playingNow roomItem : ", roomItem.roomInfo["userCount"]);
                cc.log("BaCay playingNow roomItemCrowed : ", roomItemCrowed.roomInfo["userCount"]);
                if (roomItem.roomInfo["userCount"] > roomItemCrowed.roomInfo["userCount"]) {
                    roomCrowed = arrRoomOkMoney[index];
                    cc.log("BaCay playingNow roomCrowed update : ", roomCrowed);
                }
            }
            cc.log("BaCay playingNow roomCrowed end : ", roomCrowed);
            var roomChoosed = this.contentListRooms.children[roomCrowed].getComponent("BaCay.ItemRoom");
            cc.log("BaCay playingNow roomCrowed end roomInfo : ", roomChoosed.roomInfo);
            this.joinRoom(roomChoosed.roomInfo);
        }
        else {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_not_enough_money'));
        }
    };
    BacayRoom.prototype.closeUIRoom = function () {
        this.node.active = false;
    };
    var BacayRoom_1;
    BacayRoom.instance = null;
    __decorate([
        property(cc.Node)
    ], BacayRoom.prototype, "contentListRooms", void 0);
    __decorate([
        property(cc.Label)
    ], BacayRoom.prototype, "labelNickName", void 0);
    __decorate([
        property(cc.Label)
    ], BacayRoom.prototype, "labelCoin", void 0);
    __decorate([
        property(cc.ScrollView)
    ], BacayRoom.prototype, "scrRoom", void 0);
    __decorate([
        property(cc.Node)
    ], BacayRoom.prototype, "UI_Playing", void 0);
    __decorate([
        property(cc.Prefab)
    ], BacayRoom.prototype, "uiInGamePr", void 0);
    __decorate([
        property(cc.Toggle)
    ], BacayRoom.prototype, "btnHideRoomFull", void 0);
    __decorate([
        property(cc.EditBox)
    ], BacayRoom.prototype, "edtFindRoom", void 0);
    __decorate([
        property(SoundManager)
    ], BacayRoom.prototype, "soundManager", void 0);
    BacayRoom = BacayRoom_1 = __decorate([
        ccclass
    ], BacayRoom);
    return BacayRoom;
}(cc.Component));
exports.default = BacayRoom;

cc._RF.pop();