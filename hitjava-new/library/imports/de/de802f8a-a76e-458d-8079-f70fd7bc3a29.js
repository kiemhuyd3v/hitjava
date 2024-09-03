"use strict";
cc._RF.push(module, 'de802+Kp25FjYB59w/XvDop', 'TaiXiuMD5.Controller');
// TaiXiuMD5/TaiXiuScript/src/TaiXiuMD5.Controller.ts

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
var MiniGame_1 = require("../../../Lobby/LobbyScript/MiniGame");
var TaiXiuMD5_TaiXiuMiniController_1 = require("../TaiXiu1/TaiXiuMD5.TaiXiuMiniController");
var TX2NetworkClient_1 = require("../../../Lobby/LobbyScript/Script/networks/TX2NetworkClient");
var App_1 = require("../../../Lobby/LobbyScript/Script/common/App");
var BroadcastReceiver_1 = require("../../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var MiniGameNetworkClient_1 = require("../../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient");
var VersionConfig_1 = require("../../../Loading/src/VersionConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TaiXiuMD5Controller = /** @class */ (function (_super) {
    __extends(TaiXiuMD5Controller, _super);
    function TaiXiuMD5Controller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.taiXiu1Node = null;
        _this.btnSwitch = null;
        _this.taiXiu1 = null;
        _this.isShowTX1 = true;
        return _this;
    }
    TaiXiuMD5Controller_1 = TaiXiuMD5Controller;
    TaiXiuMD5Controller.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.taiXiu1 = this.taiXiu1Node.getComponent(TaiXiuMD5_TaiXiuMiniController_1.default);
        TaiXiuMD5Controller_1.instance = this;
        switch (VersionConfig_1.default.CPName) {
            case VersionConfig_1.default.CP_NAME_F69:
                this.btnSwitch.active = false;
                break;
            default:
                // this.btnSwitch.active = true;
                //  this.taiXiu2.node.active = true;
                break;
        }
    };
    TaiXiuMD5Controller.prototype.start = function () {
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
    TaiXiuMD5Controller.prototype.show = function () {
        var _this = this;
        _super.prototype.show.call(this);
        this.isShowTX1 = true;
        switch (VersionConfig_1.default.CPName) {
            case VersionConfig_1.default.CP_NAME_F69:
                //nothing
                break;
            default:
                TX2NetworkClient_1.default.getInstance().checkConnect(function () {
                    //this.taiXiu2.show();
                    //  this.checkShow();
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
    TaiXiuMD5Controller.prototype.dismiss = function () {
        _super.prototype.dismiss.call(this);
        App_1.default.instance.buttonMiniGame.showTimeTaiXiu(true);
        this.taiXiu1.dismiss();
        switch (VersionConfig_1.default.CPName) {
            case VersionConfig_1.default.CP_NAME_F69:
                //nothing
                break;
            default:
                //this.taiXiu2.dismiss();
                break;
        }
    };
    TaiXiuMD5Controller.prototype.checkShow = function () {
        if (this.isShowTX1) {
            this.taiXiu1.gamePlay.scale = 1;
            this.taiXiu1.gamePlay.position = cc.Vec2.ZERO;
            this.taiXiu1.nodePanelChat.active = true;
            this.taiXiu1.node.setSiblingIndex(1);
            // this.taiXiu2.gamePlay.scale = 0.5;
            // this.taiXiu2.gamePlay.position = cc.v2(-405, 234);
            //  this.taiXiu2.nodePanelChat.active = false;
            // this.taiXiu2.layoutBet.active = false;
        }
        else {
            //    this.taiXiu2.gamePlay.scale = 1;
            //     this.taiXiu2.gamePlay.position = cc.Vec2.ZERO;
            //    this.taiXiu2.nodePanelChat.active = true;
            //    this.taiXiu2.node.setSiblingIndex(1);
            this.taiXiu1.gamePlay.scale = 0.5;
            this.taiXiu1.gamePlay.position = cc.v2(-405, 234);
            this.taiXiu1.nodePanelChat.active = false;
            this.taiXiu1.layoutBet.active = false;
        }
    };
    TaiXiuMD5Controller.prototype.actSwitch = function () {
        this.isShowTX1 = !this.isShowTX1;
        this.checkShow();
    };
    var TaiXiuMD5Controller_1;
    TaiXiuMD5Controller.instance = null;
    __decorate([
        property(cc.Node)
    ], TaiXiuMD5Controller.prototype, "taiXiu1Node", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuMD5Controller.prototype, "btnSwitch", void 0);
    TaiXiuMD5Controller = TaiXiuMD5Controller_1 = __decorate([
        ccclass
    ], TaiXiuMD5Controller);
    return TaiXiuMD5Controller;
}(MiniGame_1.default));
exports.default = TaiXiuMD5Controller;

cc._RF.pop();