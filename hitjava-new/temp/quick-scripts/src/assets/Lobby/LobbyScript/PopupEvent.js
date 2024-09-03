"use strict";
cc._RF.push(module, '33ad9X2X05EAZJgXDlysNWL', 'PopupEvent');
// Lobby/LobbyScript/PopupEvent.ts

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
var Http_1 = require("../../Loading/src/Http");
var App_1 = require("./Script/common/App");
var BroadcastReceiver_1 = require("./Script/common/BroadcastReceiver");
var Dialog_1 = require("./Script/common/Dialog");
var Utils_1 = require("./Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupEvent = /** @class */ (function (_super) {
    __extends(PopupEvent, _super);
    function PopupEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // LIFE-CYCLE CALLBACKS:
        _this.animLixi = null;
        _this.dataEvent = null;
        _this.listItem = [];
        _this.nodeResult = null;
        _this.nodeRule = null;
        _this.nodeItemContainer = null;
        _this.lbMoney = null;
        _this.animResult = null;
        _this.type = 0;
        return _this;
        // update (dt) {}
    }
    PopupEvent.prototype.start = function () {
        var _this = this;
        this.node.zIndex = cc.macro.MAX_ZINDEX;
        this.bg.on(cc.Node.EventType.TOUCH_END, function () {
            _this.onClick();
        });
    };
    PopupEvent.prototype.showpPopup = function () {
        //  cc.log('type=' + this.type)
        _super.prototype.show.call(this);
        this.animLixi.node.active = false;
        this.animLixi.node.opacity = 255;
        this.nodeResult.active = false;
        this.container.active = false;
        this.nodeRule.active = false;
        if (this.type == 0) {
            this.container.active = true;
            this.nodeItemContainer.active = false;
            this.nodeRule.active = true;
        }
        else {
            this.container.active = false;
            this.animLixi.node.active = true;
        }
    };
    PopupEvent.prototype.onClick = function () {
        var _this = this;
        App_1.default.instance.showLoading(true);
        cc.tween(this.animLixi.node).to(2.0, { opacity: 0 }).call(function () {
            _this.animLixi.node.active = false;
        }).start();
        this.bg.off(cc.Node.EventType.TOUCH_END);
        //http://43.128.27.35:8081/api?c=2036&nn=BigBird&at=9350306a24c780af46509750ba4b50ab&ac=get
        Http_1.default.get(Configs_1.default.App.API, { "c": 2036, "nn": Configs_1.default.Login.Nickname, "at": Configs_1.default.Login.AccessToken, "ac": "receive" }, function (err, res) {
            App_1.default.instance.showLoading(false);
            if (err) {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_unknown_error1"));
                _this.dismiss();
                return;
            }
            else {
                if (res.success) {
                    _this.container.active = true;
                    _this.nodeItemContainer.active = true;
                    _this.nodeRule.active = false;
                    _this.setInfo(res);
                }
                else {
                    _this.animLixi.node.active = false;
                    App_1.default.instance.ShowAlertDialog(res['message']);
                    _this.dismiss();
                }
            }
        });
    };
    PopupEvent.prototype.setInfo = function (data) {
        var _this = this;
        var indexItem = Utils_1.default.randomRangeInt(0, 3);
        var itemReceive = this.listItem[indexItem];
        for (var i = 0; i < 3; i++) {
            var item = this.listItem[i];
            if (item != itemReceive) {
                item.getChildByName("bgTien").active = false;
                item.getChildByName("icon").color = cc.Color.GRAY;
                item.getChildByName("btn_received").active = false;
                item.color = cc.Color.GRAY;
            }
        }
        itemReceive.getChildByName("bgTien").getComponentInChildren(cc.Label).string = Utils_1.default.formatNumber(data['data']);
        itemReceive.getChildByName("bgTien").active = false;
        itemReceive.getChildByName("btn_received").on('click', function () {
            _this.lbMoney.string = Utils_1.default.formatNumber(data['data']);
            Configs_1.default.Login.Coin += data['data'];
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
            _this.nodeResult.active = true;
            _this.animResult.setAnimation(0, "start", false);
            _this.animResult.setCompleteListener(function () {
                _this.animResult.setAnimation(0, "idle", true);
            });
            _this.container.active = false;
            _this.scheduleOnce(function () {
                _this.dismiss();
            }, 3.0);
        });
    };
    __decorate([
        property(sp.Skeleton)
    ], PopupEvent.prototype, "animLixi", void 0);
    __decorate([
        property([cc.Node])
    ], PopupEvent.prototype, "listItem", void 0);
    __decorate([
        property(cc.Node)
    ], PopupEvent.prototype, "nodeResult", void 0);
    __decorate([
        property(cc.Node)
    ], PopupEvent.prototype, "nodeRule", void 0);
    __decorate([
        property(cc.Node)
    ], PopupEvent.prototype, "nodeItemContainer", void 0);
    __decorate([
        property(cc.Label)
    ], PopupEvent.prototype, "lbMoney", void 0);
    __decorate([
        property(sp.Skeleton)
    ], PopupEvent.prototype, "animResult", void 0);
    PopupEvent = __decorate([
        ccclass
    ], PopupEvent);
    return PopupEvent;
}(Dialog_1.default));
exports.default = PopupEvent;

cc._RF.pop();