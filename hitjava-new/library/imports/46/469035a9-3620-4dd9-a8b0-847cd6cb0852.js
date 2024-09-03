"use strict";
cc._RF.push(module, '46903WpNiBN2aiwhHzWywhS', 'UIPopupDiemDanh');
// Lobby/LobbyScript/UIPopupDiemDanh.ts

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
var Global_1 = require("../../Loading/src/Global");
var Http_1 = require("../../Loading/src/Http");
var Lobby_Cmd_1 = require("./Lobby.Cmd");
var App_1 = require("./Script/common/App");
var BroadcastReceiver_1 = require("./Script/common/BroadcastReceiver");
var Dialog_1 = require("./Script/common/Dialog");
var MiniGameNetworkClient_1 = require("./Script/networks/MiniGameNetworkClient");
var Network_InPacket_1 = require("./Script/networks/Network.InPacket");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIPopupDiemDanh = /** @class */ (function (_super) {
    __extends(UIPopupDiemDanh, _super);
    function UIPopupDiemDanh() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.prefab = null;
        _this.itemDiemDanhNode = null;
        _this.itemDiemDanh = null;
        return _this;
    }
    UIPopupDiemDanh.prototype.start = function () {
        var _this = this;
        MiniGameNetworkClient_1.default.getInstance().addListener(function (data) {
            if (!_this.node.active)
                return;
            var inpacket = new Network_InPacket_1.default(data);
            //Utils.Log(inpacket.getCmdId());
            switch (inpacket.getCmdId()) {
                case Lobby_Cmd_1.default.Code.GET_LIST_QUEST:
                    {
                        _this.content.removeAllChildren();
                        _this.itemDiemDanh = null;
                        var res = new Lobby_Cmd_1.default.ResGetListQuest(data);
                        var list = JSON.parse(res.bf);
                        for (var i = 0; i < list.length; i++) {
                            var item = cc.instantiate(_this.prefab);
                            item.parent = _this.content;
                            item.setSiblingIndex(list[i].dailyQuestData.piority + 1);
                            //Utils.Log(list[i].dailyQuestData.piority + 1);
                            item.getComponent("UIItemDiemDanh").init(list[i]);
                        }
                    }
                    break;
                case Lobby_Cmd_1.default.Code.RECEIVE_LIST_QUEST:
                    {
                        var res = new Lobby_Cmd_1.default.ResReceiveListQuest(data);
                        //Utils.Log("ListQuest:" + JSON.stringify(res));
                        if (res.isSuccess) {
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_giftcode_success'));
                            MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqGetListQuest());
                            Configs_1.default.Login.Coin = res.currentMoney;
                            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                        }
                    }
                    break;
            }
        }, this);
    };
    UIPopupDiemDanh.prototype.onEnable = function () {
        this.checkDiemDanh();
    };
    UIPopupDiemDanh.prototype.checkDiemDanh = function () {
        var _this = this;
        Http_1.default.get(Configs_1.default.App.API, { c: "2031", nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken, ac: "history" }, function (err, res) {
            //Utils.Log("DIEMDANH:", res);
            if (res['data'] != null) {
                if (_this.itemDiemDanh == null) {
                    _this.itemDiemDanh = cc.instantiate(_this.itemDiemDanhNode);
                    _this.itemDiemDanh.parent = _this.content;
                    _this.itemDiemDanh.setSiblingIndex(0);
                    //  cc.log("init diem danh");
                }
                var progress = 0;
                var dataHis = res['data'];
                for (var i = 0; i < dataHis.length; i++) {
                    if (dataHis[i]['consecutive'] != 0) {
                        progress++;
                    }
                }
                cc.find('BgProgress/Progress', _this.itemDiemDanh).getComponent(cc.Sprite).fillRange = progress / 7;
                _this.itemDiemDanh.getChildByName('TxtProgress').getComponent(cc.Label).string = App_1.default.instance.getTextLang('txt_progress') + ": " + Math.floor((progress / 7) * 100) + "%";
            }
        });
    };
    UIPopupDiemDanh.prototype.onClickAttendance = function () {
        Global_1.Global.LobbyController.actDiemDanh1();
        this.dismiss();
    };
    UIPopupDiemDanh.prototype.show = function () {
        _super.prototype.show.call(this);
        // App.instance.showLoading(true);
        MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqGetListQuest());
    };
    __decorate([
        property(cc.Node)
    ], UIPopupDiemDanh.prototype, "content", void 0);
    __decorate([
        property(cc.Node)
    ], UIPopupDiemDanh.prototype, "prefab", void 0);
    __decorate([
        property(cc.Node)
    ], UIPopupDiemDanh.prototype, "itemDiemDanhNode", void 0);
    __decorate([
        property(cc.Node)
    ], UIPopupDiemDanh.prototype, "itemDiemDanh", void 0);
    UIPopupDiemDanh = __decorate([
        ccclass
    ], UIPopupDiemDanh);
    return UIPopupDiemDanh;
}(Dialog_1.default));
exports.default = UIPopupDiemDanh;

cc._RF.pop();