"use strict";
cc._RF.push(module, '88274qB3oZHSY+dnR3Z96A7', 'PopupEventTT');
// Lobby/LobbyScript/PopupEventTT.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupEventTT = /** @class */ (function (_super) {
    __extends(PopupEventTT, _super);
    function PopupEventTT() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // LIFE-CYCLE CALLBACKS:
        _this.listBtn = [];
        // onLoad () {}
        _this.dataEvent = null;
        _this.listPackage = [];
        return _this;
        // update (dt) {}
    }
    PopupEventTT.prototype.start = function () {
        this.node.zIndex = cc.macro.MAX_ZINDEX;
    };
    PopupEventTT.prototype.showpPopup = function (data) {
        _super.prototype.show.call(this);
        this.listPackage = [];
        this.dataEvent = data;
        for (var i = 0; i < this.dataEvent['lstMoonEvents'].length; i++) {
            this.listPackage.push(this.dataEvent['lstMoonEvents'][i]);
            if (this.listBtn[i]) {
                this.listBtn[i].clickEvents[0].customEventData = this.dataEvent['lstMoonEvents'][i]['idEvent'];
            }
        }
    };
    PopupEventTT.prototype.onClick = function (even, data) {
        var _this = this;
        data = JSON.parse(data);
        var nameCake = "";
        if (data == 11) {
            nameCake = "Bạch Kim";
        }
        else if (data == 12) {
            nameCake = "Hoàng Kim";
        }
        else if (data == 13) {
            nameCake = "Kim Cương";
        }
        this.node.zIndex = 0;
        App_1.default.instance.confirmDialog.show2("Bạn chắc chắn muốn mua\ngói quà " + nameCake + " chứ?", function (isConfirm) {
            if (isConfirm) {
                App_1.default.instance.showLoading(true);
                Http_1.default.get(Configs_1.default.App.API, { "c": 21, "nn": Configs_1.default.Login.Nickname, "at": Configs_1.default.Login.AccessToken, "id": data }, function (err, res) {
                    //  //Utils.Log("On Buy Moon:", res);
                    App_1.default.instance.showLoading(false);
                    if (err) {
                        App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_unknown_error1"));
                        return;
                    }
                    else {
                        // //Utils.Log("succes ko dkm:", res.success);
                        if (res.success) {
                            switch (res.errorCode) {
                                case "0":
                                    App_1.default.instance.ShowAlertDialog("Chúc mừng bạn đã mua thành công gói quà:" + nameCake);
                                    Configs_1.default.Login.Coin = res.money;
                                    BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                                    _this.dismiss();
                                    break;
                                case "1":
                                    App_1.default.instance.ShowAlertDialog("Bạn đã mua gói quà này,\nVui lòng chọn gói quà khác nhé!");
                                    break;
                                case "2":
                                    App_1.default.instance.ShowAlertDialog("Bạn không đủ tiền để mua gói quà này!\nVui lòng liên hệ CSKH để được hướng dẫn.");
                                    break;
                                default:
                                    App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_unknown_error1" + res.errorCode));
                                    break;
                            }
                        }
                        else {
                            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_unknown_error1"));
                        }
                    }
                });
            }
        });
    };
    __decorate([
        property([cc.Button])
    ], PopupEventTT.prototype, "listBtn", void 0);
    PopupEventTT = __decorate([
        ccclass
    ], PopupEventTT);
    return PopupEventTT;
}(Dialog_1.default));
exports.default = PopupEventTT;

cc._RF.pop();