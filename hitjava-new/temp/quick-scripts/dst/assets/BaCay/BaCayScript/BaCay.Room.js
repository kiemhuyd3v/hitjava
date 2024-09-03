
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BaCay/BaCayScript/BaCay.Room.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQmFDYXlcXEJhQ2F5U2NyaXB0XFxCYUNheS5Sb29tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxxREFBZ0Q7QUFDaEQsaUVBQTREO0FBQzVELDZGQUF3RjtBQUN4Rix5RUFBb0U7QUFDcEUscUVBQWdFO0FBQ2hFLDZGQUFnRjtBQUNoRix5Q0FBOEI7QUFDOUIsNkRBQXVEO0FBQ3ZELG1GQUE2RTtBQUM3RSxpR0FBcUY7QUFFckYsSUFBSyxVQVFKO0FBUkQsV0FBSyxVQUFVO0lBQ1gsdUNBQU0sQ0FBQTtJQUNOLDJDQUFRLENBQUE7SUFDUix5Q0FBTyxDQUFBO0lBQ1AsbURBQVksQ0FBQTtJQUNaLDJDQUFRLENBQUE7SUFDUiw2Q0FBUyxDQUFBO0lBQ1QscURBQWEsQ0FBQTtBQUNqQixDQUFDLEVBUkksVUFBVSxLQUFWLFVBQVUsUUFRZDtBQUNLLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQUE7UUFFSSxZQUFPLEdBQW1CLElBQUksQ0FBQztRQUcvQixhQUFRLEdBQW1CLElBQUksQ0FBQztRQUdoQyxjQUFTLEdBQW1CLEVBQUUsQ0FBQztJQWtCbkMsQ0FBQztJQWpCRyxrQ0FBVyxHQUFYO1FBQ0ksNkJBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFDRCxzQ0FBZSxHQUFmLFVBQWdCLFVBQVU7UUFDdEIsbURBQW1EO1FBQ25ELHdCQUF3QjtRQUN4QixJQUFJLGlCQUFPLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQzlCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUUs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QUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1RSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN2QzthQUFNO1lBQ0gsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztTQUN0RjtJQUNMLENBQUM7SUFDRCwrQkFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7O0lBdlZhLGtCQUFRLEdBQWMsSUFBSSxDQUFDO0lBRXpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ2U7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztvREFDWTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNRO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7OENBQ007SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNTO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ2M7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztrREFDVTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxZQUFZLENBQUM7bURBQ1c7SUFuQmpCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0EwVjdCO0lBQUQsZ0JBQUM7Q0ExVkQsQUEwVkMsQ0ExVnNDLEVBQUUsQ0FBQyxTQUFTLEdBMFZsRDtrQkExVm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnVuZGxlQ29udHJvbCBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvQnVuZGxlQ29udHJvbFwiO1xuaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgQnJvYWRjYXN0UmVjZWl2ZXIgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQnJvYWRjYXN0UmVjZWl2ZXJcIjtcbmltcG9ydCBTUFV0aWxzIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1NQVXRpbHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuaW1wb3J0IEluUGFja2V0IGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5JblBhY2tldFwiO1xuaW1wb3J0IGNtZCBmcm9tIFwiLi9CYUNheS5DbWRcIjtcbmltcG9ydCBCYUNheU5ldHdvcmtDbGllbnQgZnJvbSBcIi4vQmFDYXkuTmV0d29ya0NsaWVudFwiO1xuaW1wb3J0IGNtZE5ldHdvcmsgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLkNtZFwiO1xuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9Db21tb24uQXVkaW9NYW5hZ2VyXCI7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvR2xvYmFsXCI7XG5lbnVtIGF1ZGlvX2NsaXAge1xuICAgIEJHID0gMCxcbiAgICBMT1NFID0gMSxcbiAgICBXSU4gPSAyLFxuICAgIENISUFfQkFJID0gMyxcbiAgICBDSElQID0gNCxcbiAgICBDTE9DSyA9IDUsXG4gICAgU1RBUlRfQkVUID0gNlxufVxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzKFwiQmFDYXkuUm9vbS5Tb3VuZE1hbmFnZXJcIilcbmV4cG9ydCBjbGFzcyBTb3VuZE1hbmFnZXIge1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcbiAgICBiZ011c2ljOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXG4gICAgZWZmU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShbY2MuQXVkaW9DbGlwXSlcbiAgICBsaXN0QXVkaW86IGNjLkF1ZGlvQ2xpcFtdID0gW107XG4gICAgcGxheUJnTXVzaWMoKSB7XG4gICAgICAgIEF1ZGlvTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBsYXlCYWNrZ3JvdW5kTXVzaWModGhpcy5saXN0QXVkaW9bYXVkaW9fY2xpcC5CR10pO1xuICAgIH1cbiAgICBwbGF5QXVkaW9FZmZlY3QoaW5kZXhBdWRpbykge1xuICAgICAgICAvLyB0aGlzLmVmZlNvdW5kLmNsaXAgPSB0aGlzLmxpc3RBdWRpb1tpbmRleEF1ZGlvXTtcbiAgICAgICAgLy8gdGhpcy5lZmZTb3VuZC5wbGF5KCk7XG4gICAgICAgIGlmIChTUFV0aWxzLmdldFNvdW5kVm9sdW1uKCkgPiAwKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMubGlzdEF1ZGlvW2luZGV4QXVkaW9dLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBzdG9wQXVkaW9FZmZlY3QoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcbiAgICB9XG4gICAgc3RvcEJnTXVzaWMoKSB7XG4gICAgICAgIHRoaXMuYmdNdXNpYy5zdG9wKCk7XG4gICAgfVxufVxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2F5Um9vbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogQmFjYXlSb29tID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb250ZW50TGlzdFJvb21zOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxOaWNrTmFtZTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbENvaW46IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcbiAgICBzY3JSb29tOiBjYy5TY3JvbGxWaWV3ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBVSV9QbGF5aW5nOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHVpSW5HYW1lUHI6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZSlcbiAgICBidG5IaWRlUm9vbUZ1bGw6IGNjLlRvZ2dsZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgZWR0RmluZFJvb206IGNjLkVkaXRCb3ggPSBudWxsO1xuICAgIEBwcm9wZXJ0eShTb3VuZE1hbmFnZXIpXG4gICAgc291bmRNYW5hZ2VyOiBTb3VuZE1hbmFnZXIgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBsaXN0RGF0YVJvb20gPSBbXTtcbiAgICBwcml2YXRlIGxpc3RGdWxsUm9vbSA9IFtdO1xuXG4gICAgcHVibGljIGlzSW5pdGVkVUlSb29tID0gZmFsc2U7XG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIEJhY2F5Um9vbS5pbnN0YW5jZSA9IHRoaXM7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuc2hvd1VJUm9vbXMoKTtcbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dFcnJMb2FkaW5nKFwixJBhbmcga+G6v3QgbuG7kWkgdOG7m2kgc2VydmVyLi4uXCIpO1xuICAgICAgICBCYUNheU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5hZGRPbk9wZW4oKCkgPT4ge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dFcnJMb2FkaW5nKFwixJBhbmcgxJHEg25nIG5o4bqtcC4uLlwiKTtcbiAgICAgICAgICAgIEJhQ2F5TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZE5ldHdvcmsuU2VuZExvZ2luKENvbmZpZ3MuTG9naW4uTmlja25hbWUsIENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4pKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIEJhQ2F5TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmFkZE9uQ2xvc2UoKCkgPT4ge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmxvYWRTY2VuZShcIkxvYmJ5XCIpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgQmFDYXlOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuY29ubmVjdCgpO1xuICAgICAgICB0aGlzLnNvdW5kTWFuYWdlci5wbGF5QmdNdXNpYygpO1xuICAgIH1cbiAgICBzaG93VUlSb29tcygpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNJbml0ZWRVSVJvb20pIHtcbiAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzSW5pdGVkVUlSb29tID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubGFiZWxOaWNrTmFtZS5zdHJpbmcgPSBDb25maWdzLkxvZ2luLk5pY2tuYW1lO1xuICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIucmVnaXN0ZXIoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubGFiZWxDb2luLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihDb25maWdzLkxvZ2luLkNvaW4pO1xuICAgICAgICAgICAgICAgIC8vIExvZ0V2ZW50LmdldEluc3RhbmNlKCkuc2VuZEV2ZW50TW9uZXlDaGFuZ2UoQ29uZmlncy5HYW1lSWQuZ2V0R2FtZU5hbWUoQ29uZmlncy5HYW1lSWQuQmFDYXkpLENvbmZpZ3MuTG9naW4uQ3VycmVuY3ksQ29uZmlncy5Mb2dpbi5Db2luKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcbiAgICAgICAgICAgIHRoaXMuc2V0dXBMaXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlZmVzaExpc3RSb29tKCkge1xuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgIEJhQ2F5TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kR2V0TGlzdFJvb20oKSk7XG4gICAgfVxuICAgIHNldHVwTGlzdGVuZXIoKSB7XG4gICAgICAgIEJhQ2F5TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmFkZExpc3RlbmVyKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBsZXQgaW5wYWNrZXQgPSBuZXcgSW5QYWNrZXQoZGF0YSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGlucGFja2V0LmdldENtZElkKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkxPR0lOOlxuICAgICAgICAgICAgICAgICAgICAvLyBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZmVzaExpc3RSb29tKCk7XG4gICAgICAgICAgICAgICAgICAgIEJhQ2F5TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5DbWRSZWNvbm5lY3RSb29tKCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlRPUFNFUlZFUjpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVkVG9wU2VydmVyKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmtUeXBlID0gcmVzW1wicmFua1R5cGVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9wRGF5X21vbmV5ID0gcmVzW1widG9wRGF5X21vbmV5XCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvcFdlZWtfbW9uZXkgPSByZXNbXCJ0b3BXZWVrX21vbmV5XCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvcE1vbnRoX21vbmV5ID0gcmVzW1widG9wTW9udGhfbW9uZXlcIl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5DTURfUElOR1BPTkc6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkNNRF9KT0lOX1JPT006XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBVdGlscy5Mb2coXCJCYUNheSBDTURfSk9JTl9ST09NXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuQ01EX1JFQ09OTkVDVF9ST09NOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwiQmFDYXkgQ01EX1JFQ09OTkVDVF9ST09NXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuTU9ORVlfQkVUX0NPTkZJRzpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcIkJhQ2F5IE1PTkVZX0JFVF9DT05GSUdcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5KT0lOX1JPT01fRkFJTDpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVkSm9pblJvb21GYWlsKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1zZyA9IFwiTOG7l2kgXCIgKyByZXMuZ2V0RXJyb3IoKSArIFwiLCBraMO0bmcgeMOhYyDEkeG7i25oLlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZXMuZ2V0RXJyb3IoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnID0gQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfcm9vbV9lcnIxJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnID0gQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfcm9vbV9lcnIzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyA9IEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Jvb21fZXJyMicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyA9IEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Jvb21fZXJyNScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyA9IEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Jvb21fZXJyNicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyA9IEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Jvb21fZXJyNycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyA9IEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Jvb21fZXJyOCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyA9IEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Jvb21fZXJyOScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgPSBBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9yb29tX2VycjEwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhtc2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkdFVF9MSVNUX1JPT006XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlZEdldExpc3RSb29tKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhUm9vbSA9IHJlcy5saXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVJvb20uc29ydCgoeCwgeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB4Lm1vbmV5QmV0IC0geS5tb25leUJldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbG9hZExpc3RSb29tKHRoaXMubGlzdERhdGFSb29tKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2NyUm9vbS5zY3JvbGxUb1RvcCgwLjIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuSk9JTl9HQU1FX1JPT01fQllfSUQ6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gR2FtZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICAgIFxuXG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5KT0lOX1JPT01fU1VDQ0VTUzpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwiQmFDYXkgSk9JTl9ST09NX1NVQ0NFU1NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRKb2luUm9vbVN1Y2NlZWQoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2IgPSAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5VSV9QbGF5aW5nLmdldENvbXBvbmVudChcIkJhQ2F5LkNvbnRyb2xsZXJcIikuc2V0dXBNYXRjaChyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VUlQbGF5aW5nKHJlcywgY2IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuVEhPTkdfVElOX0JBTl9DSE9JOiB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVkR2FtZUluZm8oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcIlRIT05HX1RJTl9CQU5fQ0hPSTpcIiwgcmVzKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNiID0gKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5VSV9QbGF5aW5nLmdldENvbXBvbmVudChcIkJhQ2F5LkNvbnRyb2xsZXJcIikuYWN0UmVKb2luUm9vbShyZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1VJUGxheWluZyhyZXMsIGNiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuTE9HT1VUOiB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcIsSQxINuZyBuaMOicCB04burIG5ndeG7k24ga2jDoWMhXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfVxuICAgIHNob3dVSVBsYXlpbmcocmVzLCBjYikge1xuXG4gICAgICAgIGlmICh0aGlzLlVJX1BsYXlpbmcgPT0gbnVsbCkge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmdldEJ1bmRsZShcIkJhQ2F5XCIpLmxvYWQoXCJwcmVmYWJzL1VJX1BsYXlcIiwgY2MuUHJlZmFiLCBmdW5jdGlvbiAoZmluaXNoLCB0b3RhbCwgaXRlbSkge1xuICAgICAgICAgICAgfSwgKGVycjEsIHByZWZhYjogY2MuUHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLlVJX1BsYXlpbmcgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgICAgIHRoaXMuVUlfUGxheWluZy5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xuICAgICAgICAgICAgICAgIHRoaXMuVUlfUGxheWluZy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjYihyZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSVJvb20oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5VSV9QbGF5aW5nLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBjYihyZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZVJvb20oKSB7XG4gICAgICAgIGNjLmxvZyhcIkJhQ2F5IGNyZWF0ZVJvb21cIik7XG4gICAgICAgIEJhQ2F5TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kQ3JlYXRlUm9vbSgxLCA4LCA1MDAsIDAsIDgsIFwiXCIsIFwiXCIsIDEwMDAwKSk7XG4gICAgfVxuICAgIGhpZGVSb29tRnVsbCgpIHtcbiAgICAgICAgY2MubG9nKFwiaGlkZSByb29tIGZ1bGxcIik7XG4gICAgICAgIHRoaXMubGlzdEZ1bGxSb29tID0gW107XG4gICAgICAgIGlmICh0aGlzLmJ0bkhpZGVSb29tRnVsbC5pc0NoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdERhdGFSb29tLmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5yb29tSW5mb1sndXNlckNvdW50J10gPT0gZGF0YS5yb29tSW5mb1tcIm1heFVzZXJQZXJSb29tXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdEZ1bGxSb29tLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnJlbG9hZExpc3RSb29tKHRoaXMubGlzdEZ1bGxSb29tKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVsb2FkTGlzdFJvb20odGhpcy5saXN0RGF0YVJvb20pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZpbmRSb29tSWQoKSB7XG4gICAgICAgIGxldCB0ZXh0ID0gdGhpcy5lZHRGaW5kUm9vbS5zdHJpbmcudHJpbSgpO1xuICAgICAgICBpZiAodGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgaWRGaW5kID0gcGFyc2VJbnQodGV4dCk7XG4gICAgICAgICAgICBsZXQgZGF0YVJvb20gPSBudWxsO1xuICAgICAgICAgICAgZGF0YVJvb20gPSB0aGlzLmxpc3REYXRhUm9vbS5maW5kKGRhdGEgPT4gZGF0YVtcImlkXCJdID09IGlkRmluZCk7XG4gICAgICAgICAgICB0aGlzLnJlbG9hZExpc3RSb29tKFtkYXRhUm9vbV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZWxvYWRMaXN0Um9vbSh0aGlzLmxpc3REYXRhUm9vbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYmFja1RvTG9iYnkoKSB7XG4gICAgICAgIEJhQ2F5TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmNsb3NlKCk7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5sb2FkU2NlbmUoXCJMb2JieVwiKTtcbiAgICB9XG4gICAgcmVsb2FkTGlzdFJvb20obGlzdERhdGFSb29tKSB7XG4gICAgICAgIHRoaXMubGlzdERhdGFSb29tID0gbGlzdERhdGFSb29tO1xuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICBsZXQgY2IgPSAoaXRlbSwgaXRlbURhdGEpID0+IHtcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KFwiQmFDYXkuSXRlbVJvb21cIikuaW5pdEl0ZW0oaXRlbURhdGEpO1xuICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NyUm9vbS5ub2RlLmdldENvbXBvbmVudChcIlNjcm9sbFZpZXdDb250cm9sXCIpLnNldERhdGFMaXN0KGNiLCBsaXN0RGF0YVJvb20pO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNTb3J0Um9vbSA9IGZhbHNlO1xuICAgIG9uQnRuU29ydFJvb21JZCgpe1xuICAgICAgICBpZih0aGlzLmlzU29ydFJvb20gPT0gZmFsc2Upe1xuICAgICAgICAgICAgaWYodGhpcy5saXN0RGF0YVJvb20pe1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFSb29tLnNvcnQoKHgsIHkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHguaWQgLSB5LmlkO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGlmKHRoaXMubGlzdERhdGFSb29tKXtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhUm9vbS5zb3J0KCh4LCB5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB5LmlkIC0geC5pZDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNTb3J0Um9vbSA9ICF0aGlzLmlzU29ydFJvb207XG4gICAgICAgIGxldCBjYiA9IChpdGVtLCBpdGVtRGF0YSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoXCJCYUNheS5JdGVtUm9vbVwiKS5pbml0SXRlbShpdGVtRGF0YSk7XG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY3JSb29tLm5vZGUuZ2V0Q29tcG9uZW50KFwiU2Nyb2xsVmlld0NvbnRyb2xcIikuc2V0RGF0YUxpc3QoY2IsIHRoaXMubGlzdERhdGFSb29tKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBpc1NvcnRNb25leTtcbiAgICBvbkJ0blNvcnRSb29tTW9uZXkoKXtcbiAgICAgICAgaWYodGhpcy5pc1NvcnRNb25leSA9PSBmYWxzZSl7XG4gICAgICAgICAgICBpZih0aGlzLmxpc3REYXRhUm9vbSl7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVJvb20uc29ydCgoeCwgeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geC5yZXF1aXJlZE1vbmV5IC0geS5yZXF1aXJlZE1vbmV5O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGlmKHRoaXMubGlzdERhdGFSb29tKXtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhUm9vbS5zb3J0KCh4LCB5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB5LnJlcXVpcmVkTW9uZXkgLSB4LnJlcXVpcmVkTW9uZXk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzU29ydE1vbmV5ID0gIXRoaXMuaXNTb3J0TW9uZXk7XG4gICAgICAgIGxldCBjYiA9IChpdGVtLCBpdGVtRGF0YSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoXCJCYUNheS5JdGVtUm9vbVwiKS5pbml0SXRlbShpdGVtRGF0YSk7XG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY3JSb29tLm5vZGUuZ2V0Q29tcG9uZW50KFwiU2Nyb2xsVmlld0NvbnRyb2xcIikuc2V0RGF0YUxpc3QoY2IsIHRoaXMubGlzdERhdGFSb29tKTtcbiAgICB9XG4gICAgam9pblJvb20oaW5mbykge1xuICAgICAgICBpZiAoQ29uZmlncy5Mb2dpbi5Db2luIDwgaW5mby5yZXF1aXJlZE1vbmV5KSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfbm90X2Vub3VnaF9tb25leVwiKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICBCYUNheU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZEpvaW5Sb29tQnlJZChpbmZvW1wiaWRcIl0pKTtcbiAgICB9XG4gICAgcGxheWluZ05vdygpIHtcbiAgICAgICAgbGV0IGFyclJvb21Pa01vbmV5ID0gW107XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmNvbnRlbnRMaXN0Um9vbXMuY2hpbGRyZW5Db3VudDsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IHJvb21JdGVtID0gdGhpcy5jb250ZW50TGlzdFJvb21zLmNoaWxkcmVuW2luZGV4XS5nZXRDb21wb25lbnQoXCJCYUNheS5JdGVtUm9vbVwiKTtcbiAgICAgICAgICAgIGlmIChyb29tSXRlbS5yb29tSW5mb1tcInJlcXVpcmVkTW9uZXlcIl0gPCBDb25maWdzLkxvZ2luLkNvaW4pIHtcbiAgICAgICAgICAgICAgICBhcnJSb29tT2tNb25leS5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNjLmxvZyhcIkJhQ2F5IHBsYXlpbmdOb3cgYXJyUm9vbU9rTW9uZXkgOiBcIiwgYXJyUm9vbU9rTW9uZXkpO1xuXG4gICAgICAgIGlmIChhcnJSb29tT2tNb25leS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgcm9vbUNyb3dlZCA9IGFyclJvb21Pa01vbmV5WzBdO1xuICAgICAgICAgICAgY2MubG9nKFwiQmFDYXkgcGxheWluZ05vdyByb29tQ3Jvd2VkIHN0YXJ0IDogXCIsIHJvb21Dcm93ZWQpO1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFyclJvb21Pa01vbmV5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGxldCByb29tSXRlbSA9IHRoaXMuY29udGVudExpc3RSb29tcy5jaGlsZHJlblthcnJSb29tT2tNb25leVtpbmRleF1dLmdldENvbXBvbmVudChcIkJhQ2F5Lkl0ZW1Sb29tXCIpO1xuICAgICAgICAgICAgICAgIGxldCByb29tSXRlbUNyb3dlZCA9IHRoaXMuY29udGVudExpc3RSb29tcy5jaGlsZHJlbltyb29tQ3Jvd2VkXS5nZXRDb21wb25lbnQoXCJCYUNheS5JdGVtUm9vbVwiKTtcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJCYUNheSBwbGF5aW5nTm93IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJCYUNheSBwbGF5aW5nTm93IHJvb21JdGVtIDogXCIsIHJvb21JdGVtLnJvb21JbmZvW1widXNlckNvdW50XCJdKTtcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJCYUNheSBwbGF5aW5nTm93IHJvb21JdGVtQ3Jvd2VkIDogXCIsIHJvb21JdGVtQ3Jvd2VkLnJvb21JbmZvW1widXNlckNvdW50XCJdKTtcbiAgICAgICAgICAgICAgICBpZiAocm9vbUl0ZW0ucm9vbUluZm9bXCJ1c2VyQ291bnRcIl0gPiByb29tSXRlbUNyb3dlZC5yb29tSW5mb1tcInVzZXJDb3VudFwiXSkge1xuICAgICAgICAgICAgICAgICAgICByb29tQ3Jvd2VkID0gYXJyUm9vbU9rTW9uZXlbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCJCYUNheSBwbGF5aW5nTm93IHJvb21Dcm93ZWQgdXBkYXRlIDogXCIsIHJvb21Dcm93ZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNjLmxvZyhcIkJhQ2F5IHBsYXlpbmdOb3cgcm9vbUNyb3dlZCBlbmQgOiBcIiwgcm9vbUNyb3dlZCk7XG4gICAgICAgICAgICBsZXQgcm9vbUNob29zZWQgPSB0aGlzLmNvbnRlbnRMaXN0Um9vbXMuY2hpbGRyZW5bcm9vbUNyb3dlZF0uZ2V0Q29tcG9uZW50KFwiQmFDYXkuSXRlbVJvb21cIik7XG4gICAgICAgICAgICBjYy5sb2coXCJCYUNheSBwbGF5aW5nTm93IHJvb21Dcm93ZWQgZW5kIHJvb21JbmZvIDogXCIsIHJvb21DaG9vc2VkLnJvb21JbmZvKTtcbiAgICAgICAgICAgIHRoaXMuam9pblJvb20ocm9vbUNob29zZWQucm9vbUluZm8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbm90X2Vub3VnaF9tb25leScpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbG9zZVVJUm9vbSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19