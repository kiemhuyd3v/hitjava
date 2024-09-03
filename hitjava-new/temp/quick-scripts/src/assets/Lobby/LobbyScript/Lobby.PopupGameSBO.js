"use strict";
cc._RF.push(module, '84d67q9v0pCMrh+xoewRWz/', 'Lobby.PopupGameSBO');
// Lobby/LobbyScript/Lobby.PopupGameSBO.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupGameSBO = /** @class */ (function (_super) {
    __extends(PopupGameSBO, _super);
    function PopupGameSBO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    PopupGameSBO.prototype.onLoad = function () {
        this.node.y = cc.winSize.height;
    };
    PopupGameSBO.prototype.start = function () {
    };
    PopupGameSBO.prototype.show = function () {
        this.node.active = true;
        cc.tween(this.node).to(0.3, { y: 0 }, { easing: cc.easing.sineIn }).call(function () {
        }).start();
    };
    PopupGameSBO.prototype.onClickGame = function (even, data) {
        var gameName = data;
        switch (data) {
            case "SportsBook":
                break;
            case "Casino":
                break;
            case "Games":
                break;
            case "VirtualSports":
                break;
            case "SeamlessGame":
                break;
            case "ThirdPartySportsBook":
                break;
        }
        Http_1.default.get(App_1.default.API_SBO, { t: "Login", nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken, gc: gameName }, function (err, res) {
            ////Utils.Log("updateInfoSBO:" + JSON.stringify(res));
            App_1.default.instance.showLoading(false);
            if (res["res"] == 0) {
                if (Configs_1.default.App.IS_PRO == true && Configs_1.default.Login.UserType != "2") {
                    var url = "https://mkt.l0030.ig128.com/deposit_processlogin.aspx?lang=vn&token=" + res["data"]["data"];
                    if (cc.sys.isMobile == true) {
                        url = "https://ismart.l0030.ig128.com/deposit_processlogin.aspx?lang=vn&token=" + res["data"]["data"];
                    }
                    cc.sys.openURL(url);
                }
                else {
                    var url = "https:" + res['data'] + "&lang=vi-vn&oddstyle=MY&theme=sbo&device=" + (cc.sys.isNative ? "m" : "d");
                    ////Utils.Log("url=" + url);
                    cc.sys.openURL(url);
                }
            }
            else {
                App_1.default.instance.ShowAlertDialog(res["message"]);
            }
        });
    };
    PopupGameSBO.prototype.onClickBack = function () {
        var _this = this;
        cc.tween(this.node).to(0.3, { y: cc.winSize.height }, { easing: cc.easing.backIn }).call(function () {
            _this.node.active = false;
        }).start();
    };
    __decorate([
        property(cc.Label)
    ], PopupGameSBO.prototype, "label", void 0);
    __decorate([
        property
    ], PopupGameSBO.prototype, "text", void 0);
    PopupGameSBO = __decorate([
        ccclass
    ], PopupGameSBO);
    return PopupGameSBO;
}(cc.Component));
exports.default = PopupGameSBO;

cc._RF.pop();