"use strict";
cc._RF.push(module, 'd2b0eiJAJZM8qs2U4tn2jai', 'MiniGameNetworkClient2');
// Lobby/LobbyScript/Script/networks/MiniGameNetworkClient2.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var Network_NetworkClient_1 = require("./Network.NetworkClient");
var Network_NetworkListener_1 = require("./Network.NetworkListener");
var Network_InPacket_1 = require("./Network.InPacket");
var Network_Cmd_1 = require("./Network.Cmd");
var App_1 = require("../common/App");
var Configs_1 = require("../../../../Loading/src/Configs");
var MiniGameNetworkClient2 = /** @class */ (function (_super) {
    __extends(MiniGameNetworkClient2, _super);
    function MiniGameNetworkClient2() {
        var _this = _super.call(this) || this;
        _this.listeners = new Array();
        _this.isLogin = false;
        _this.onLogined = null;
        _this.intervalPing = -1;
        _this.isUseWSS = Configs_1.default.App.USE_WSS;
        return _this;
    }
    MiniGameNetworkClient2.getInstance = function () {
        if (this.instance == null) {
            this.instance = new MiniGameNetworkClient2();
        }
        return this.instance;
    };
    MiniGameNetworkClient2.prototype.checkConnect = function (onLogined) {
        if (onLogined === void 0) { onLogined = null; }
        //Utils.Log("checkConnect MiniGame");
        this.onLogined = onLogined;
        if (this.ws != null && this.ws.readyState == WebSocket.CONNECTING)
            return;
        if (!this.isConnected()) {
            // App.instance.showErrLoading("Đang vào game...");
            this.connect();
            return;
        }
        if (this.isLogin && this.onLogined != null)
            this.onLogined();
    };
    MiniGameNetworkClient2.prototype.onError = function (ev) {
        App_1.default.instance.showLoading(false);
        //Utils.Log("onError minigame:" + JSON.stringify(ev));
    };
    MiniGameNetworkClient2.prototype.connect = function () {
        _super.prototype.connect.call(this, Configs_1.default.App.HOST_MINIGAME2.host, Configs_1.default.App.HOST_MINIGAME2.port);
        //Utils.Log("Port Mini Game:"+ Configs.App.HOST_MINIGAME2.port);
    };
    MiniGameNetworkClient2.prototype.onOpen = function (ev) {
        var _this = this;
        _super.prototype.onOpen.call(this, ev);
        this.send(new Network_Cmd_1.default.SendLogin(Configs_1.default.Login.Nickname, Configs_1.default.Login.AccessToken));
        //Utils.Log("minigame connected:"+Configs.Login.AccessToken);
        App_1.default.instance.showLoading(false);
        this.intervalPing = setInterval(function () { return _this.ping(); }, 1);
        this.ping();
    };
    MiniGameNetworkClient2.prototype.onMessage = function (ev) {
        var data = new Uint8Array(ev.data);
        for (var i = 0; i < this.listeners.length; i++) {
            var listener = this.listeners[i];
            if (listener.target && listener.target instanceof Object && listener.target.node) {
                listener.callback(data);
            }
            else {
                this.listeners.splice(i, 1);
                i--;
            }
        }
        var inpacket = new Network_InPacket_1.default(data);
        switch (inpacket.getCmdId()) {
            case Network_Cmd_1.default.Code.LOGIN:
                this.isLogin = true;
                if (this.onLogined != null) {
                    //Utils.Log("Logined");
                    this.onLogined();
                }
                break;
        }
    };
    MiniGameNetworkClient2.prototype.addListener = function (callback, target) {
        this.listeners.push(new Network_NetworkListener_1.default(target, callback));
    };
    MiniGameNetworkClient2.prototype.onClose = function (ev) {
        //Utils.Log("onclose minigame");
        _super.prototype.onClose.call(this, ev);
    };
    MiniGameNetworkClient2.prototype.send = function (packet) {
        for (var b = new Int8Array(packet._length), c = 0; c < packet._length; c++)
            b[c] = packet._data[c];
        if (this.ws != null && this.isConnected())
            this.ws.send(b.buffer);
    };
    MiniGameNetworkClient2.prototype.sendCheck = function (packet) {
        var _this = this;
        this.checkConnect(function () {
            _this.send(packet);
        });
    };
    MiniGameNetworkClient2.prototype.ping = function () {
        if (this.ws != null && this.ws.readyState !== WebSocket.OPEN) {
            //  //Utils.Log("WebSocket minigame instance wasn't ready...");
        }
        ;
    };
    return MiniGameNetworkClient2;
}(Network_NetworkClient_1.default));
exports.default = MiniGameNetworkClient2;

cc._RF.pop();