"use strict";
cc._RF.push(module, '6fab78Wrn1BQo1sU67+m3Wp', 'TaiXiuDouble.Controller');
// TaiXiuDouble/TaiXiuScript/src/TaiXiuDouble.Controller.ts

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
var VersionConfig_1 = require("../../../Loading/src/VersionConfig");
var MiniGame_1 = require("../../../Lobby/LobbyScript/MiniGame");
var App_1 = require("../../../Lobby/LobbyScript/Script/common/App");
var BroadcastReceiver_1 = require("../../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var MiniGameNetworkClient_1 = require("../../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient");
var TX2NetworkClient_1 = require("../../../Lobby/LobbyScript/Script/networks/TX2NetworkClient");
var TaiXiuMini_TaiXiuMiniController_1 = require("../TaiXiu1/TaiXiuMini.TaiXiuMiniController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TaiXiuDoubleController = /** @class */ (function (_super) {
    __extends(TaiXiuDoubleController, _super);
    function TaiXiuDoubleController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.taiXiu1Node = null;
        _this.btnSwitch = null;
        _this.taiXiu1 = null;
        _this.isShowTX1 = true;
        return _this;
    }
    TaiXiuDoubleController_1 = TaiXiuDoubleController;
    TaiXiuDoubleController.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.taiXiu1 = this.taiXiu1Node.getComponent(TaiXiuMini_TaiXiuMiniController_1.default);
        TaiXiuDoubleController_1.instance = this;
        switch (VersionConfig_1.default.CPName) {
        }
    };
    TaiXiuDoubleController.prototype.reOrder = function () {
        _super.prototype.reOrder.call(this);
        // App.instance.showBgMiniGame("TaiXiu");
    };
    TaiXiuDoubleController.prototype.start = function () {
        var _this = this;
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_LOGOUT, function () {
            if (!_this.node.active)
                return;
            _this.dismiss();
        }, this);
        MiniGameNetworkClient_1.default.getInstance().addOnClose(function () {
            if (!_this.node.active)
                return;
            _this.dismiss();
        }, this);
        TX2NetworkClient_1.default.getInstance().addOnClose(function () {
            if (!_this.node.active)
                return;
            _this.dismiss();
        }, this);
    };
    TaiXiuDoubleController.prototype.show = function () {
        var _this = this;
        _super.prototype.show.call(this);
        App_1.default.instance.showBgMiniGame("TaiXiu");
        this.isShowTX1 = true;
        switch (VersionConfig_1.default.CPName) {
            case VersionConfig_1.default.CP_NAME_HT68:
            case VersionConfig_1.default.CP_NAME_F69:
            case VersionConfig_1.default.CP_NAME_R99_2:
            case VersionConfig_1.default.CP_NAME_MARBLES99:
            case VersionConfig_1.default.CP_NAME_SIN99:
            case VersionConfig_1.default.CP_NAME_ZINGVIP:
                //nothing
                break;
            default:
                TX2NetworkClient_1.default.getInstance().checkConnect(function () {
                    _this.checkShow();
                });
                break;
        }
        MiniGameNetworkClient_1.default.getInstance().checkConnect(function () {
            _this.taiXiu1.show();
            _this.checkShow();
        });
        App_1.default.instance.buttonMiniGame.showTimeTaiXiu(false);
        this.checkShow();
    };
    TaiXiuDoubleController.prototype.dismiss = function () {
        _super.prototype.dismiss.call(this);
        App_1.default.instance.buttonMiniGame.showTimeTaiXiu(true);
        this.taiXiu1.dismiss();
        App_1.default.instance.hideGameMini("TaiXiu");
    };
    TaiXiuDoubleController.prototype.checkShow = function () {
        if (this.isShowTX1) {
            this.taiXiu1.gamePlay.scale = 1;
            this.taiXiu1.gamePlay.position = cc.Vec3.ZERO;
            this.taiXiu1.nodePanelChat.active = true;
            this.taiXiu1.node.setSiblingIndex(1);
        }
        else {
            this.taiXiu1.gamePlay.scale = 0.5;
            this.taiXiu1.gamePlay.position = cc.v3(-405, 234, 0);
            this.taiXiu1.nodePanelChat.active = false;
            this.taiXiu1.layoutBet.active = false;
        }
    };
    TaiXiuDoubleController.prototype.actSwitch = function () {
        this.isShowTX1 = !this.isShowTX1;
        this.checkShow();
    };
    var TaiXiuDoubleController_1;
    TaiXiuDoubleController.instance = null;
    __decorate([
        property(cc.Node)
    ], TaiXiuDoubleController.prototype, "taiXiu1Node", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuDoubleController.prototype, "btnSwitch", void 0);
    TaiXiuDoubleController = TaiXiuDoubleController_1 = __decorate([
        ccclass
    ], TaiXiuDoubleController);
    return TaiXiuDoubleController;
}(MiniGame_1.default));
exports.default = TaiXiuDoubleController;

cc._RF.pop();