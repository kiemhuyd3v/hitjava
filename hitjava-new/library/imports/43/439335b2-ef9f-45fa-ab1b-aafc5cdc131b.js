"use strict";
cc._RF.push(module, '43933Wy759F+qsbqvxc3BMb', 'ButtonMiniGame');
// Lobby/LobbyScript/ButtonMiniGame.ts

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
var Lobby_Cmd_1 = require("./Lobby.Cmd");
var App_1 = require("./Script/common/App");
var BroadcastReceiver_1 = require("./Script/common/BroadcastReceiver");
var SPUtils_1 = require("./Script/common/SPUtils");
var MiniGameNetworkClient_1 = require("./Script/networks/MiniGameNetworkClient");
var Network_InPacket_1 = require("./Script/networks/Network.InPacket");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ButtonMiniGame = /** @class */ (function (_super) {
    __extends(ButtonMiniGame, _super);
    function ButtonMiniGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.labelTime = null;
        _this.labelTimePanel = null;
        _this.button = null;
        _this.buttonAG = null;
        _this.buttonTxSieuToc = null;
        _this.buttonIBC = null;
        _this.buttonWM = null;
        _this.panel = null;
        _this.container = null;
        _this.buttonClicked = true;
        _this.buttonMoved = cc.Vec2.ZERO;
        _this.buttonClickedAG = true;
        _this.buttonMovedAG = cc.Vec2.ZERO;
        _this.buttonClickedIBC = true;
        _this.buttonMovedIBC = cc.Vec2.ZERO;
        _this.buttonClickedWM = true;
        _this.buttonMovedWM = cc.Vec2.ZERO;
        return _this;
    }
    ButtonMiniGame.prototype.onLoad = function () {
        var _this = this;
        if (cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS) {
            this.buttonTxSieuToc.color = cc.Color.GRAY;
            this.buttonTxSieuToc.getComponent(cc.Button).interactable = false;
        }
        this.panel.active = false;
        this.button.active = false;
        this.labelTime.string = "00";
        this.labelTimePanel.string = "00";
        this.button.x = cc.winSize.width / 2 - 50;
        this.button.on(cc.Node.EventType.TOUCH_START, function (event) {
            _this.buttonClicked = true;
            _this.buttonMoved = cc.Vec2.ZERO;
        }, this);
        this.button.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            _this.buttonMoved = _this.buttonMoved.add(event.getDelta());
            if (_this.buttonClicked) {
                if (Math.abs(_this.buttonMoved.x) > 30 || Math.abs(_this.buttonMoved.y) > 30) {
                    var pos = _this.button.position;
                    pos.x += _this.buttonMoved.x;
                    pos.y += _this.buttonMoved.y;
                    _this.button.position = pos;
                    _this.buttonClicked = false;
                }
            }
            else {
                var pos = _this.button.position;
                pos.x += event.getDeltaX();
                pos.y += event.getDeltaY();
                _this.button.position = pos;
            }
        }, this);
        this.button.on(cc.Node.EventType.TOUCH_END, function (event) {
            if (_this.buttonClicked) {
                _this.actButton();
            }
            var posX = _this.button.x > 0 ? cc.winSize.width / 2 - 55 : -cc.winSize.width / 2 + 90;
            cc.tween(_this.button).to(0.3, { x: posX }, { easing: cc.easing.sineOut }).start();
        }, this);
        //AG
        this.buttonAG.on(cc.Node.EventType.TOUCH_START, function (event) {
            _this.buttonClickedAG = true;
            _this.buttonMovedAG = cc.Vec2.ZERO;
        }, this);
        this.buttonAG.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            _this.buttonMovedAG = _this.buttonMovedAG.add(event.getDelta());
            if (_this.buttonClickedAG) {
                if (Math.abs(_this.buttonMovedAG.x) > 30 || Math.abs(_this.buttonMovedAG.y) > 30) {
                    var pos = _this.buttonAG.position;
                    pos.x += _this.buttonMovedAG.x;
                    pos.y += _this.buttonMovedAG.y;
                    _this.buttonAG.position = pos;
                    _this.buttonClickedAG = false;
                }
            }
            else {
                var pos = _this.buttonAG.position;
                pos.x += event.getDeltaX();
                pos.y += event.getDeltaY();
                _this.buttonAG.position = pos;
            }
        }, this);
        this.buttonAG.on(cc.Node.EventType.TOUCH_END, function (event) {
            if (_this.buttonClickedAG) {
                _this.actButtonAG();
            }
        }, this);
        //IBC
        this.buttonIBC.on(cc.Node.EventType.TOUCH_START, function (event) {
            _this.buttonClickedIBC = true;
            _this.buttonMovedIBC = cc.Vec2.ZERO;
        }, this);
        this.buttonIBC.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            _this.buttonMovedIBC = _this.buttonMovedIBC.add(event.getDelta());
            if (_this.buttonClickedIBC) {
                if (Math.abs(_this.buttonMovedIBC.x) > 30 || Math.abs(_this.buttonMovedIBC.y) > 30) {
                    var pos = _this.buttonIBC.position;
                    pos.x += _this.buttonMovedIBC.x;
                    pos.y += _this.buttonMovedIBC.y;
                    _this.buttonIBC.position = pos;
                    _this.buttonClickedIBC = false;
                }
            }
            else {
                var pos = _this.buttonIBC.position;
                pos.x += event.getDeltaX();
                pos.y += event.getDeltaY();
                _this.buttonIBC.position = pos;
            }
        }, this);
        this.buttonIBC.on(cc.Node.EventType.TOUCH_END, function (event) {
            if (_this.buttonClickedIBC) {
                _this.actButtonIBC();
            }
        }, this);
        //WM
        this.buttonWM.on(cc.Node.EventType.TOUCH_START, function (event) {
            _this.buttonClickedWM = true;
            _this.buttonMovedWM = cc.Vec2.ZERO;
        }, this);
        this.buttonWM.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            _this.buttonMovedWM = _this.buttonMovedWM.add(event.getDelta());
            if (_this.buttonClickedWM) {
                if (Math.abs(_this.buttonMovedWM.x) > 30 || Math.abs(_this.buttonMovedWM.y) > 30) {
                    var pos = _this.buttonWM.position;
                    pos.x += _this.buttonMovedWM.x;
                    pos.y += _this.buttonMovedWM.y;
                    _this.buttonWM.position = pos;
                    _this.buttonClickedWM = false;
                }
            }
            else {
                var pos = _this.buttonWM.position;
                pos.x += event.getDeltaX();
                pos.y += event.getDeltaY();
                _this.buttonWM.position = pos;
            }
        }, this);
        this.buttonWM.on(cc.Node.EventType.TOUCH_END, function (event) {
            if (_this.buttonClickedWM) {
                _this.actButtonWM();
            }
        }, this);
        MiniGameNetworkClient_1.default.getInstance().addListener(function (data) {
            var inpacket = new Network_InPacket_1.default(data);
            switch (inpacket.getCmdId()) {
                case Lobby_Cmd_1.default.Code.UPDATE_TIME_BUTTON:
                    {
                        var res = new Lobby_Cmd_1.default.ReceiveUpdateTimeButton(data);
                        _this.labelTime.string = res.remainTime > 9 ? res.remainTime.toString() : "0" + res.remainTime;
                        _this.labelTimePanel.string = res.remainTime > 9 ? res.remainTime.toString() : "0" + res.remainTime;
                    }
                    break;
            }
        }, this);
    };
    ButtonMiniGame.prototype.actButtonIBC = function () {
        if (Configs_1.default.Login.CACHE_IBC) {
            SPUtils_1.default.setMusicVolumn(0);
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.ON_AUDIO_CHANGED);
            App_1.default.instance.cacheWebView["IBC"].position = cc.v3(0, 0, 0);
        }
        else {
            App_1.default.instance.actLoginIBC();
        }
    };
    ButtonMiniGame.prototype.actButtonAG = function () {
        if (Configs_1.default.Login.CACHE_AG) {
            SPUtils_1.default.setMusicVolumn(0);
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.ON_AUDIO_CHANGED);
            ////Utils.Log("actButtonAG:" + App.instance.cacheWebView["AG"]);
            App_1.default.instance.cacheWebView["AG"].position = cc.v3(0, 0, 0);
        }
        else {
            App_1.default.instance.actLoginAG();
        }
    };
    ButtonMiniGame.prototype.actButtonWM = function () {
        if (Configs_1.default.Login.CACHE_WM) {
            SPUtils_1.default.setMusicVolumn(0);
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.ON_AUDIO_CHANGED);
            App_1.default.instance.cacheWebView["WM"].position = cc.v3(0, 0, 0);
        }
        else {
            App_1.default.instance.actLoginWM();
        }
    };
    ButtonMiniGame.prototype.show = function () {
        this.panel.active = false;
        this.button.active = true;
        this.labelTime.string = "00";
        this.labelTimePanel.string = "00";
    };
    ButtonMiniGame.prototype.hidden = function () {
        this.panel.active = false;
        this.button.active = false;
    };
    ButtonMiniGame.prototype.showTimeTaiXiu = function (isShow) {
        this.labelTime.node.parent.active = isShow;
    };
    ButtonMiniGame.prototype.actButton = function () {
        this.panel.active = true;
        this.button.active = false;
        cc.tween(this.panel.getChildByName("Container")).set({ angle: -180, scale: 0 }).to(0.3, { scale: 1.0, angle: 0 }, { easing: cc.easing.sineOut }).start();
    };
    ButtonMiniGame.prototype.actHidden = function () {
        var _this = this;
        cc.tween(this.panel.getChildByName("Container")).to(0.3, { angle: -180, scale: 0 }, { easing: cc.easing.sineIn }).call(function () {
            _this.panel.active = false;
            _this.button.active = true;
        }).start();
    };
    ButtonMiniGame.prototype.actTaiXiu = function () {
        App_1.default.instance.openMiniGameTaiXiuDouble("TaiXiuDouble", "TaiXiuDouble");
        this.actHidden();
    };
    ButtonMiniGame.prototype.actTaiXiuMD5 = function () {
        App_1.default.instance.openMiniGameTaiXiuSieuToc("TaiXiuMD5", "TaiXiuMD5");
        this.actHidden();
    };
    ButtonMiniGame.prototype.actMiniPoker = function () {
        App_1.default.instance.openMiniGameMiniPoker("MiniPoker", "MiniPoker");
        this.actHidden();
    };
    ButtonMiniGame.prototype.actSlot3x3 = function () {
        App_1.default.instance.openMiniGameSlot3x3("Slot3x3", "Slot3x3");
        this.actHidden();
    };
    ButtonMiniGame.prototype.actSlot3x3Gem = function () {
        App_1.default.instance.openMiniGameSlot3x3Gem("Slot3x3Gem", "Slot3x3Gem");
        this.actHidden();
    };
    ButtonMiniGame.prototype.actCaoThap = function () {
        App_1.default.instance.openMiniGameCaoThap("CaoThap", "CaoThap");
        this.actHidden();
    };
    ButtonMiniGame.prototype.actBauCua = function () {
        App_1.default.instance.openMiniGameBauCua("BauCua", "BauCua");
        this.actHidden();
    };
    ButtonMiniGame.prototype.actChimDien = function () {
        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_coming_soon"));
        this.actHidden();
    };
    ButtonMiniGame.prototype.actMaintain = function () {
        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_reparing"));
        this.actHidden();
    };
    ButtonMiniGame.prototype.actOanTuTi = function () {
        App_1.default.instance.openMiniGameOneTuTi("OanTuTi", "OanTuTi");
        this.actHidden();
    };
    __decorate([
        property(cc.Label)
    ], ButtonMiniGame.prototype, "labelTime", void 0);
    __decorate([
        property(cc.Label)
    ], ButtonMiniGame.prototype, "labelTimePanel", void 0);
    __decorate([
        property(cc.Node)
    ], ButtonMiniGame.prototype, "button", void 0);
    __decorate([
        property(cc.Node)
    ], ButtonMiniGame.prototype, "buttonAG", void 0);
    __decorate([
        property(cc.Node)
    ], ButtonMiniGame.prototype, "buttonTxSieuToc", void 0);
    __decorate([
        property(cc.Node)
    ], ButtonMiniGame.prototype, "buttonIBC", void 0);
    __decorate([
        property(cc.Node)
    ], ButtonMiniGame.prototype, "buttonWM", void 0);
    __decorate([
        property(cc.Node)
    ], ButtonMiniGame.prototype, "panel", void 0);
    __decorate([
        property(cc.Node)
    ], ButtonMiniGame.prototype, "container", void 0);
    ButtonMiniGame = __decorate([
        ccclass
    ], ButtonMiniGame);
    return ButtonMiniGame;
}(cc.Component));
exports.default = ButtonMiniGame;

cc._RF.pop();