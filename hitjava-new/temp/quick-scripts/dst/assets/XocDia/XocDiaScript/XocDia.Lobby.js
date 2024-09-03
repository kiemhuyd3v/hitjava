
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/XocDia/XocDiaScript/XocDia.Lobby.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWG9jRGlhXFxYb2NEaWFTY3JpcHRcXFhvY0RpYS5Mb2JieS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBZ0Q7QUFDaEQsMkVBQStEO0FBQy9ELDJDQUErQjtBQUUvQixxRUFBeUQ7QUFDekQsaUVBQTREO0FBQzVELDZGQUF3RjtBQUN4RixxRUFBZ0U7QUFDaEUsNkZBQWdGO0FBRTFFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBK01DO1FBNU1HLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0IsYUFBTyxHQUFhLElBQUksQ0FBQztRQUd6QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGFBQU8sR0FBa0IsSUFBSSxDQUFDO1FBRXRCLFlBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixjQUFRLEdBQUcsRUFBRSxDQUFDO1FBTWQsZ0JBQVUsR0FBRyxLQUFLLENBQUM7O1FBc0wzQixpQkFBaUI7SUFDckIsQ0FBQztJQTVMRyxlQUFlO0lBRWYscUJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCwrQkFBZSxHQUFmO1FBQ0ksSUFBRyxJQUFJLENBQUMsVUFBVSxJQUFJLEtBQUssRUFBQztZQUN4QixJQUFHLElBQUksQ0FBQyxRQUFRLEVBQUM7Z0JBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztvQkFDcEIsT0FBTyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ3ZCLENBQUMsQ0FBQyxDQUFBO2FBQ0w7U0FDSjthQUNHO1lBQ0EsSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFDO2dCQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQ3BCLE9BQU8sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUN2QixDQUFDLENBQUMsQ0FBQTthQUNMO1NBQ0o7UUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pDLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQztZQUNuQyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNEO0lBQ0wsQ0FBQztJQUVELGtDQUFrQixHQUFsQjtRQUNJLGlDQUFpQztRQUNqQyxJQUFHLElBQUksQ0FBQyxXQUFXLElBQUksS0FBSyxFQUFDO1lBQ3pCLElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBQztnQkFDYixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO29CQUNwQixPQUFPLENBQUMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQztnQkFDN0MsQ0FBQyxDQUFDLENBQUE7YUFDTDtTQUNKO2FBQ0c7WUFDQSxJQUFHLElBQUksQ0FBQyxRQUFRLEVBQUM7Z0JBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztvQkFDcEIsT0FBTyxDQUFDLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUM7Z0JBQzdDLENBQUMsQ0FBQyxDQUFBO2FBQ0w7U0FDSjtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekMsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDO1lBQ25DLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0Q7SUFDTCxDQUFDO0lBQ00sb0JBQUksR0FBWDtRQUFBLGlCQXFHQztRQXBHRyxJQUFJLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxhQUFHLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLGlCQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLGlCQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUNqRCwyQkFBaUIsQ0FBQyxRQUFRLENBQUMsMkJBQWlCLENBQUMsZ0JBQWdCLEVBQUU7WUFDM0QsSUFBSSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtnQkFBRSxPQUFPO1lBQzlCLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLGVBQUssQ0FBQyxZQUFZLENBQUMsaUJBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsMkJBQWlCLENBQUMsSUFBSSxDQUFDLDJCQUFpQixDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFM0Qsb0NBQW1CLENBQUMsV0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQUMsSUFBSTtZQUMvQyxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNO2dCQUFFLE9BQU87WUFDOUIsSUFBSSxRQUFRLEdBQUcsSUFBSSwwQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLFFBQVEsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUN6QixLQUFLLG9CQUFHLENBQUMsSUFBSSxDQUFDLEtBQUs7b0JBQ2Y7d0JBQ0ksb0NBQW1CLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksb0JBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO3FCQUNuRTtvQkFDRCxNQUFNO2dCQUNWLEtBQUssb0JBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVztvQkFDckI7d0JBQ0ksSUFBSSxHQUFHLEdBQUcsSUFBSSxvQkFBRyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUMzQyxpREFBaUQ7d0JBQ2pELGdCQUFnQjt3QkFDaEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzt3QkFDekMsS0FBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO3dCQUN6QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDOzRCQUNwQixPQUFPLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQzt3QkFDdkIsQ0FBQyxDQUFDLENBQUE7d0JBQ0YsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDOzRCQUNuQyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzs0QkFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7NEJBQ25CLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUMzRDt3QkFDRCxpQ0FBaUM7d0JBQ2pDLHVEQUF1RDt3QkFDdkQsMEJBQTBCO3dCQUMxQixJQUFJO3dCQUNKLDRCQUE0Qjt3QkFDNUIsaUNBQWlDO3dCQUNqQyxzQ0FBc0M7d0JBQ3RDLEtBQUs7d0JBQ0wsc0ZBQXNGO3FCQUV6RjtvQkFDRCxNQUFNO2dCQUNWLEtBQUssb0JBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYztvQkFDeEI7d0JBQ0ksYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2hDLElBQUksR0FBRyxHQUFHLElBQUksb0JBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDNUMsZ0JBQWdCO3dCQUNoQixJQUFJLEdBQUcsR0FBRyxNQUFNLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLG1CQUFtQixDQUFDO3dCQUN4RCxRQUFRLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRTs0QkFDcEIsS0FBSyxDQUFDO2dDQUNGLEdBQUcsR0FBRyxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQTtnQ0FDL0MsTUFBTTs0QkFDVixLQUFLLENBQUM7Z0NBQ0YsR0FBRyxHQUFHLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFBO2dDQUMvQyxNQUFNOzRCQUNWLEtBQUssQ0FBQztnQ0FDRixHQUFHLEdBQUcsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUE7Z0NBQy9DLE1BQU07NEJBQ1YsS0FBSyxDQUFDO2dDQUNGLEdBQUcsR0FBRyxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQTtnQ0FDL0MsTUFBTTs0QkFDVixLQUFLLENBQUM7Z0NBQ0YsR0FBRyxHQUFHLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFBO2dDQUMvQyxNQUFNOzRCQUNWLEtBQUssQ0FBQztnQ0FDRixHQUFHLEdBQUcsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUE7Z0NBQy9DLE1BQU07NEJBQ1YsS0FBSyxDQUFDO2dDQUNGLEdBQUcsR0FBRyxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQTtnQ0FDL0MsTUFBTTs0QkFDVixLQUFLLENBQUM7Z0NBQ0YsR0FBRyxHQUFHLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUE7Z0NBQ2hELE1BQU07NEJBQ1YsS0FBSyxDQUFDO2dDQUNGLEdBQUcsR0FBRyxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQTtnQ0FDL0MsTUFBTTs0QkFDVixLQUFLLEVBQUU7Z0NBQ0gsR0FBRyxHQUFHLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUE7eUJBQ3ZEO3dCQUNELGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDekM7b0JBQ0QsTUFBTTtnQkFDVixLQUFLLG9CQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQjtvQkFDM0I7d0JBQ0ksYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2hDLElBQUksR0FBRyxHQUFHLElBQUksb0JBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDL0MsaUNBQWdCLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDL0M7b0JBQ0QsTUFBTTtnQkFDVjtvQkFDSSw0REFBNEQ7b0JBQzVELE1BQU07YUFDYjtRQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUViLENBQUM7SUFFTSxvQkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQiwyQkFBaUIsQ0FBQyxJQUFJLENBQUMsMkJBQWlCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRU0sNEJBQVksR0FBbkI7UUFDSSxvQ0FBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxvQkFBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7SUFDdkUsQ0FBQztJQUVNLHlCQUFTLEdBQWhCO1FBQ0ksMkRBQTJEO1FBQzNELDZEQUE2RDtRQUM3RCxnREFBZ0Q7UUFDaEQsUUFBUTtRQUNSLElBQUk7UUFDSixvQ0FBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxvQkFBRyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVNLHVCQUFPLEdBQWQ7UUFDSSxvQ0FBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQyxhQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU0sOEJBQWMsR0FBckI7UUFDSSxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUF6TUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDUztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNPO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ1U7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswQ0FDTTtJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7MENBQ007SUFmYixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBK016QjtJQUFELFlBQUM7Q0EvTUQsQUErTUMsQ0EvTWtDLEVBQUUsQ0FBQyxTQUFTLEdBK005QztrQkEvTW9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IFhvY0RpYU5ldHdvcmtDbGllbnQgZnJvbSBcIi4vWG9jRGlhLlhvY0RpYU5ldHdvcmtDbGllbnRcIjtcbmltcG9ydCBjbWQgZnJvbSBcIi4vWG9jRGlhLkNtZFwiO1xuXG5pbXBvcnQgWG9jRGlhQ29udHJvbGxlciBmcm9tIFwiLi9Yb2NEaWEuWG9jRGlhQ29udHJvbGxlclwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBCcm9hZGNhc3RSZWNlaXZlciBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9Ccm9hZGNhc3RSZWNlaXZlclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgSW5QYWNrZXQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLkluUGFja2V0XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2JieSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGl0ZW1QcmVmYWIgOmNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBzcHJBdmF0YXI6Y2MuU3ByaXRlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsTmlja25hbWU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsQ29pbjogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdEl0ZW1zOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBcbiAgICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcbiAgICBzY3JSb29tOiBjYy5TY3JvbGxWaWV3ID0gbnVsbDtcblxuICAgIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBkYXRhUm9vbSA9IFtdO1xuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG4gICAgcHJpdmF0ZSBpc1NvcnRSb29tID0gZmFsc2U7XG4gICAgb25CdG5Tb3J0Um9vbUlkKCl7XG4gICAgICAgIGlmKHRoaXMuaXNTb3J0Um9vbSA9PSBmYWxzZSl7XG4gICAgICAgICAgICBpZih0aGlzLmRhdGFSb29tKXtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFSb29tLnNvcnQoKHgsIHkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHguaWQgLSB5LmlkO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGlmKHRoaXMuZGF0YVJvb20pe1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVJvb20uc29ydCgoeCwgeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geS5pZCAtIHguaWQ7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzU29ydFJvb20gPSAhdGhpcy5pc1NvcnRSb29tO1xuICAgICAgICB0aGlzLnNjclJvb20uY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICBmb3IodmFyIGk9MDtpPHRoaXMuZGF0YVJvb20ubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbVByZWZhYik7XG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNjclJvb20uY29udGVudC5hZGRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KFwiWG9jRGlhLlJvb21cIikuaW5pdCh0aGlzLmRhdGFSb29tW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGlzU29ydE1vbmV5O1xuICAgIG9uQnRuU29ydFJvb21Nb25leSgpe1xuICAgICAgICAvLyAgY2MubG9nKFwib25CdG5Tb3J0Um9vbU1vbmV5XCIpO1xuICAgICAgICBpZih0aGlzLmlzU29ydE1vbmV5ID09IGZhbHNlKXtcbiAgICAgICAgICAgIGlmKHRoaXMuZGF0YVJvb20pe1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVJvb20uc29ydCgoeCwgeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geC5yZXF1aXJlZE1vbmV5IC0geS5yZXF1aXJlZE1vbmV5O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGlmKHRoaXMuZGF0YVJvb20pe1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVJvb20uc29ydCgoeCwgeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geS5yZXF1aXJlZE1vbmV5IC0geC5yZXF1aXJlZE1vbmV5O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1NvcnRNb25leSA9ICF0aGlzLmlzU29ydE1vbmV5O1xuICAgICAgICB0aGlzLnNjclJvb20uY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICBmb3IodmFyIGk9MDtpPHRoaXMuZGF0YVJvb20ubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbVByZWZhYik7XG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNjclJvb20uY29udGVudC5hZGRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KFwiWG9jRGlhLlJvb21cIikuaW5pdCh0aGlzLmRhdGFSb29tW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgaW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5pdGVkKSByZXR1cm47XG4gICAgICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zcHJBdmF0YXIuc3ByaXRlRnJhbWUgPSBBcHAuaW5zdGFuY2UuZ2V0QXZhdGFyU3ByaXRlRnJhbWUoQ29uZmlncy5Mb2dpbi5BdmF0YXIpO1xuICAgICAgICB0aGlzLmxibE5pY2tuYW1lLnN0cmluZyA9IENvbmZpZ3MuTG9naW4uTmlja25hbWU7XG4gICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnJlZ2lzdGVyKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4sICgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5ub2RlLmFjdGl2ZSkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5sYmxDb2luLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihDb25maWdzLkxvZ2luLkNvaW4pO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcblxuICAgICAgICBYb2NEaWFOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuYWRkTGlzdGVuZXIoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5ub2RlLmFjdGl2ZSkgcmV0dXJuO1xuICAgICAgICAgICAgbGV0IGlucGFja2V0ID0gbmV3IEluUGFja2V0KGRhdGEpO1xuICAgICAgICAgICAgc3dpdGNoIChpbnBhY2tldC5nZXRDbWRJZCgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5MT0dJTjpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgWG9jRGlhTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kUmVjb25uZWN0KCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuR0VUTElTVFJPT006XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVHZXRMaXN0Um9vbShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJHRVRMSVNUUk9PTTpcIiArIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JSb29tLmNvbnRlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVJvb20gPSByZXMubGlzdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVJvb20uc29ydCgoeCwgeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB4LmlkIC0geS5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGk9MDtpPHRoaXMuZGF0YVJvb20ubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1QcmVmYWIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjclJvb20uY29udGVudC5hZGRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChcIlhvY0RpYS5Sb29tXCIpLmluaXQodGhpcy5kYXRhUm9vbVtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsZXQgY2IgPSAoaXRlbSwgaXRlbURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBpdGVtLmdldENvbXBvbmVudChcIlhvY0RpYS5Sb29tXCIpLmluaXQoaXRlbURhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZGF0YVJvb20gPSByZXMubGlzdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZGF0YVJvb20uc29ydCgoeCwgeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiB4Lm1vbmV5QmV0IC0geS5tb25leUJldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNjclJvb20ubm9kZS5nZXRDb21wb25lbnQoXCJTY3JvbGxWaWV3Q29udHJvbFwiKS5zZXREYXRhTGlzdChjYiwgdGhpcy5kYXRhUm9vbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkpPSU5fUk9PTV9GQUlMOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZUpvaW5Sb29tRmFpbChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtc2cgPSBcIkzhu5dpIFwiICsgcmVzLmdldEVycm9yKCkgKyBcIiwga2jDtG5nIHjDoWMgxJHhu4tuaC5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzLmdldEVycm9yKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyA9IEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9yb29tX2VycjFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgPSBBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfcm9vbV9lcnIyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnID0gQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X3Jvb21fZXJyM1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyA9IEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9yb29tX2VycjJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgPSBBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfcm9vbV9lcnI1XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnID0gQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X3Jvb21fZXJyNlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyA9IEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9yb29tX2VycjJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgPSBBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfcm9vbV9lcnIxMVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyA9IEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9yb29tX2VycjlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnID0gQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X3Jvb21fZXJyMTBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKG1zZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5KT0lOX1JPT01fU1VDQ0VTUzpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVKb2luUm9vbVN1Y2Nlc3MoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBYb2NEaWFDb250cm9sbGVyLmluc3RhbmNlLnNob3dHYW1lUGxheShyZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCItLWlucGFja2V0LmdldENtZElkKCk6IFwiICsgaW5wYWNrZXQuZ2V0Q21kSWQoKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzaG93KCkge1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hY3RSZWZlc2goKTtcbiAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWN0UXVpY2tQbGF5KCkge1xuICAgICAgICBYb2NEaWFOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRKb2luUm9vbUJ5SWQoMik7XG4gICAgfVxuXG4gICAgcHVibGljIGFjdFJlZmVzaCgpIHtcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RJdGVtcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmxpc3RJdGVtcy5jaGlsZHJlbltpXSAhPSB0aGlzLml0ZW1UZW1wbGF0ZSkge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMubGlzdEl0ZW1zLmNoaWxkcmVuW2ldLmRlc3Ryb3koKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICBYb2NEaWFOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRHZXRMaXN0Um9vbSgpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWN0QmFjaygpIHtcbiAgICAgICAgWG9jRGlhTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmNsb3NlKCk7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5sb2FkU2NlbmUoXCJMb2JieVwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWN0Q3JlYXRlVGFibGUoKSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Jvb21fZXJyMTInKSk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==