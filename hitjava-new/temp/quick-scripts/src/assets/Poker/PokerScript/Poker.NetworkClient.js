"use strict";
cc._RF.push(module, 'dc696/vTfVLfYiNSjN3D0rT', 'Poker.NetworkClient');
// Poker/PokerScript/Poker.NetworkClient.ts

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
var Configs_1 = require("../../Loading/src/Configs");
var Network_NetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/Network.NetworkClient");
var Network_NetworkListener_1 = require("../../Lobby/LobbyScript/Script/networks/Network.NetworkListener");
var PokerNetworkClient = /** @class */ (function (_super) {
    __extends(PokerNetworkClient, _super);
    function PokerNetworkClient() {
        var _this = _super.call(this) || this;
        _this.listeners = new Array();
        _this.isUseWSS = Configs_1.default.App.USE_WSS;
        return _this;
    }
    PokerNetworkClient.getInstance = function () {
        if (this.instance == null) {
            this.instance = new PokerNetworkClient();
        }
        return this.instance;
    };
    PokerNetworkClient.prototype.connect = function () {
        _super.prototype.connect.call(this, Configs_1.default.App.HOST_POKER.host, Configs_1.default.App.HOST_POKER.port);
    };
    PokerNetworkClient.prototype.onOpen = function (ev) {
        _super.prototype.onOpen.call(this, ev);
    };
    PokerNetworkClient.prototype.onMessage = function (ev) {
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
    };
    PokerNetworkClient.prototype.addListener = function (callback, target) {
        this.listeners.push(new Network_NetworkListener_1.default(target, callback));
    };
    PokerNetworkClient.prototype.send = function (packet) {
        for (var b = new Int8Array(packet._length), c = 0; c < packet._length; c++)
            b[c] = packet._data[c];
        if (this.ws != null && this.isConnected())
            this.ws.send(b.buffer);
    };
    return PokerNetworkClient;
}(Network_NetworkClient_1.default));
exports.default = PokerNetworkClient;

cc._RF.pop();