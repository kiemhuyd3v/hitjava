"use strict";
cc._RF.push(module, 'e864aZj2fBCELbAAQvxYhIR', 'XocDia.Lobby');
// XocDia/XocDiaScript/XocDia.Lobby.ts

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
var XocDia_XocDiaNetworkClient_1 = require("./XocDia.XocDiaNetworkClient");
var XocDia_Cmd_1 = require("./XocDia.Cmd");
var XocDia_XocDiaController_1 = require("./XocDia.XocDiaController");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Lobby = /** @class */ (function (_super) {
    __extends(Lobby, _super);
    function Lobby() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemPrefab = null;
        _this.sprAvatar = null;
        _this.lblNickname = null;
        _this.lblCoin = null;
        _this.listItems = null;
        _this.scrRoom = null;
        _this.inited = false;
        _this.dataRoom = [];
        _this.isSortRoom = false;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    Lobby.prototype.start = function () {
    };
    Lobby.prototype.onBtnSortRoomId = function () {
        if (this.isSortRoom == false) {
            if (this.dataRoom) {
                this.dataRoom.sort(function (x, y) {
                    return x.id - y.id;
                });
            }
        }
        else {
            if (this.dataRoom) {
                this.dataRoom.sort(function (x, y) {
                    return y.id - x.id;
                });
            }
        }
        this.isSortRoom = !this.isSortRoom;
        this.scrRoom.content.removeAllChildren();
        for (var i = 0; i < this.dataRoom.length; i++) {
            var item = cc.instantiate(this.itemPrefab);
            item.active = true;
            this.scrRoom.content.addChild(item);
            item.getComponent("XocDia.Room").init(this.dataRoom[i]);
        }
    };
    Lobby.prototype.onBtnSortRoomMoney = function () {
        //  cc.log("onBtnSortRoomMoney");
        if (this.isSortMoney == false) {
            if (this.dataRoom) {
                this.dataRoom.sort(function (x, y) {
                    return x.requiredMoney - y.requiredMoney;
                });
            }
        }
        else {
            if (this.dataRoom) {
                this.dataRoom.sort(function (x, y) {
                    return y.requiredMoney - x.requiredMoney;
                });
            }
        }
        this.isSortMoney = !this.isSortMoney;
        this.scrRoom.content.removeAllChildren();
        for (var i = 0; i < this.dataRoom.length; i++) {
            var item = cc.instantiate(this.itemPrefab);
            item.active = true;
            this.scrRoom.content.addChild(item);
            item.getComponent("XocDia.Room").init(this.dataRoom[i]);
        }
    };
    Lobby.prototype.init = function () {
        var _this = this;
        if (this.inited)
            return;
        this.inited = true;
        this.sprAvatar.spriteFrame = App_1.default.instance.getAvatarSpriteFrame(Configs_1.default.Login.Avatar);
        this.lblNickname.string = Configs_1.default.Login.Nickname;
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function () {
            if (!_this.node.active)
                return;
            _this.lblCoin.string = Utils_1.default.formatNumber(Configs_1.default.Login.Coin);
        }, this);
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        XocDia_XocDiaNetworkClient_1.default.getInstance().addListener(function (data) {
            if (!_this.node.active)
                return;
            var inpacket = new Network_InPacket_1.default(data);
            switch (inpacket.getCmdId()) {
                case XocDia_Cmd_1.default.Code.LOGIN:
                    {
                        XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.SendReconnect());
                    }
                    break;
                case XocDia_Cmd_1.default.Code.GETLISTROOM:
                    {
                        var res = new XocDia_Cmd_1.default.ReceiveGetListRoom(data);
                        //  cc.log("GETLISTROOM:" + JSON.stringify(res));
                        //  cc.log(res);
                        _this.scrRoom.content.removeAllChildren();
                        _this.dataRoom = res.list;
                        _this.dataRoom.sort(function (x, y) {
                            return x.id - y.id;
                        });
                        for (var i = 0; i < _this.dataRoom.length; i++) {
                            var item = cc.instantiate(_this.itemPrefab);
                            item.active = true;
                            _this.scrRoom.content.addChild(item);
                            item.getComponent("XocDia.Room").init(_this.dataRoom[i]);
                        }
                        // let cb = (item, itemData) => {
                        //     item.getComponent("XocDia.Room").init(itemData);
                        //     item.active = true;
                        // }
                        // this.dataRoom = res.list;
                        // this.dataRoom.sort((x, y) => {
                        //     return x.moneyBet - y.moneyBet;
                        // })
                        // this.scrRoom.node.getComponent("ScrollViewControl").setDataList(cb, this.dataRoom);
                    }
                    break;
                case XocDia_Cmd_1.default.Code.JOIN_ROOM_FAIL:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new XocDia_Cmd_1.default.ReceiveJoinRoomFail(data);
                        //  cc.log(res);
                        var msg = "Lỗi " + res.getError() + ", không xác định.";
                        switch (res.getError()) {
                            case 1:
                                msg = App_1.default.instance.getTextLang("txt_room_err1");
                                break;
                            case 2:
                                msg = App_1.default.instance.getTextLang("txt_room_err2");
                                break;
                            case 3:
                                msg = App_1.default.instance.getTextLang("txt_room_err3");
                                break;
                            case 4:
                                msg = App_1.default.instance.getTextLang("txt_room_err2");
                                break;
                            case 5:
                                msg = App_1.default.instance.getTextLang("txt_room_err5");
                                break;
                            case 6:
                                msg = App_1.default.instance.getTextLang("txt_room_err6");
                                break;
                            case 7:
                                msg = App_1.default.instance.getTextLang("txt_room_err2");
                                break;
                            case 8:
                                msg = App_1.default.instance.getTextLang("txt_room_err11");
                                break;
                            case 9:
                                msg = App_1.default.instance.getTextLang("txt_room_err9");
                                break;
                            case 10:
                                msg = App_1.default.instance.getTextLang("txt_room_err10");
                        }
                        App_1.default.instance.alertDialog.showMsg(msg);
                    }
                    break;
                case XocDia_Cmd_1.default.Code.JOIN_ROOM_SUCCESS:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new XocDia_Cmd_1.default.ReceiveJoinRoomSuccess(data);
                        XocDia_XocDiaController_1.default.instance.showGamePlay(res);
                    }
                    break;
                default:
                    //  cc.log("--inpacket.getCmdId(): " + inpacket.getCmdId());
                    break;
            }
        }, this);
    };
    Lobby.prototype.show = function () {
        this.node.active = true;
        this.actRefesh();
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
    };
    Lobby.prototype.actQuickPlay = function () {
        XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.SendJoinRoomById(2));
    };
    Lobby.prototype.actRefesh = function () {
        // for (let i = 0; i < this.listItems.childrenCount; i++) {
        //     if (this.listItems.children[i] != this.itemTemplate) {
        //         this.listItems.children[i].destroy();
        //     }
        // }
        XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.SendGetListRoom());
    };
    Lobby.prototype.actBack = function () {
        XocDia_XocDiaNetworkClient_1.default.getInstance().close();
        App_1.default.instance.loadScene("Lobby");
    };
    Lobby.prototype.actCreateTable = function () {
        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_room_err12'));
    };
    __decorate([
        property(cc.Prefab)
    ], Lobby.prototype, "itemPrefab", void 0);
    __decorate([
        property(cc.Sprite)
    ], Lobby.prototype, "sprAvatar", void 0);
    __decorate([
        property(cc.Label)
    ], Lobby.prototype, "lblNickname", void 0);
    __decorate([
        property(cc.Label)
    ], Lobby.prototype, "lblCoin", void 0);
    __decorate([
        property(cc.Node)
    ], Lobby.prototype, "listItems", void 0);
    __decorate([
        property(cc.ScrollView)
    ], Lobby.prototype, "scrRoom", void 0);
    Lobby = __decorate([
        ccclass
    ], Lobby);
    return Lobby;
}(cc.Component));
exports.default = Lobby;

cc._RF.pop();