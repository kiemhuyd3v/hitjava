"use strict";
cc._RF.push(module, 'bb718MKBZ5MFrCvutTYb1Eh', 'CardGameNetworkClient');
// Lobby/LobbyScript/Script/networks/CardGameNetworkClient.ts

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
var Configs_1 = require("../../../../Loading/src/Configs");
var CardGameNetworkClient = /** @class */ (function (_super) {
    __extends(CardGameNetworkClient, _super);
    function CardGameNetworkClient() {
        var _this = _super.call(this) || this;
        _this.listeners = new Array();
        _this.isLogin = false;
        _this.onLogined = null;
        _this.isUseWSS = Configs_1.default.App.USE_WSS;
        return _this;
    }
    CardGameNetworkClient.getInstance = function () {
        if (this.instance == null) {
            this.instance = new CardGameNetworkClient();
        }
        return this.instance;
    };
    CardGameNetworkClient.prototype.checkConnect = function (onLogined) {
        this.onLogined = onLogined;
        if (this.ws != null && this.ws.readyState == WebSocket.CONNECTING)
            return;
        if (!this.isConnected()) {
            this._connect();
            return;
        }
        if (this.isLogin && this.onLogined != null)
            this.onLogined();
    };
    CardGameNetworkClient.prototype._connect = function () {
    };
    CardGameNetworkClient.prototype.onOpen = function (ev) {
        _super.prototype.onOpen.call(this, ev);
        this.send(new Network_Cmd_1.default.SendLogin(Configs_1.default.Login.Nickname, Configs_1.default.Login.AccessToken));
    };
    CardGameNetworkClient.prototype.onMessage = function (ev) {
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
                    this.onLogined();
                }
                break;
        }
    };
    CardGameNetworkClient.prototype.addListener = function (callback, target) {
        this.listeners.push(new Network_NetworkListener_1.default(target, callback));
    };
    CardGameNetworkClient.prototype.send = function (packet) {
        for (var b = new Int8Array(packet._length), c = 0; c < packet._length; c++)
            b[c] = packet._data[c];
        if (this.ws != null && this.isConnected())
            this.ws.send(b.buffer);
    };
    CardGameNetworkClient.prototype.sendCheck = function (packet) {
        var _this = this;
        this.checkConnect(function () {
            _this.send(packet);
        });
    };
    return CardGameNetworkClient;
}(Network_NetworkClient_1.default));
exports.default = CardGameNetworkClient;

cc._RF.pop();