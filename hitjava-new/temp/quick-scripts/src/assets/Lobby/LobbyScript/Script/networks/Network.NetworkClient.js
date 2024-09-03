"use strict";
cc._RF.push(module, 'd02d3/cUfVJtbLRo2vAnsLe', 'Network.NetworkClient');
// Lobby/LobbyScript/Script/networks/Network.NetworkClient.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Network_NetworkListener_1 = require("./Network.NetworkListener");
var NetworkClient = /** @class */ (function () {
    function NetworkClient() {
        this.ws = null;
        this.host = "";
        this.port = 0;
        this.isForceClose = false;
        this.isUseWSS = false;
        this.isAutoReconnect = true;
        this.retryCount = 0;
        this._onOpenes = [];
        this._onCloses = [];
    }
    NetworkClient.prototype.connect = function (host, port) {
        //  //Utils.Log("start connect: " + host + ":" + port + " =>" + cc.url.raw("resources/raw/cacert.pem"));
        this.isForceClose = false;
        this.host = host;
        this.port = port;
        if (this.ws == null) {
            if (cc.sys.isBrowser) {
                this.ws = new WebSocket("wss://" + host + ":" + port + "/websocket");
            }
            else {
                if (cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID) {
                    this.ws = new WebSocket("wss://" + host + ":" + port + "/websocket", [], cc.url.raw("resources/raw/cacert.pem"));
                    this.ws.binaryType = "arraybuffer";
                }
                else {
                    this.ws = new WebSocket("wss://" + host + ":" + port + "/websocket");
                }
            }
            this.ws.binaryType = "arraybuffer";
            this.ws.onopen = this.onOpen.bind(this);
            this.ws.onmessage = this.onMessage.bind(this);
            this.ws.onerror = this.onError.bind(this);
            this.ws.onclose = this.onClose.bind(this);
        }
        else {
            if (this.ws.readyState !== WebSocket.OPEN) {
                this.ws.close();
                this.ws = null;
                this.connect(host, port);
            }
        }
    };
    NetworkClient.prototype.onOpen = function (ev) {
        //Utils.Log("onOpen");
        this.retryCount = 0;
        for (var i = 0; i < this._onOpenes.length; i++) {
            var listener = this._onOpenes[i];
            if (listener.target && listener.target instanceof Object && listener.target.node) {
                listener.callback(null);
            }
            else {
                this._onOpenes.splice(i, 1);
                i--;
            }
        }
    };
    NetworkClient.prototype.onMessage = function (ev) {
        //  //Utils.Log("onmessage: " + ev.data);
    };
    NetworkClient.prototype.onError = function (ev) {
        //Utils.Log("onError");
    };
    NetworkClient.prototype.onClose = function (ev) {
        var _this = this;
        //Utils.Log("onClose");
        for (var i = 0; i < this._onCloses.length; i++) {
            var listener = this._onCloses[i];
            if (listener.target && listener.target instanceof Object && listener.target.node) {
                listener.callback(null);
            }
            else {
                this._onCloses.splice(i, 1);
                i--;
            }
        }
        if (this.isAutoReconnect && !this.isForceClose) {
            setTimeout(function () {
                if (!_this.isForceClose)
                    _this.connect(_this.host, _this.port);
            }, 2000);
        }
    };
    NetworkClient.prototype.addOnOpen = function (callback, target) {
        this._onOpenes.push(new Network_NetworkListener_1.default(target, callback));
    };
    NetworkClient.prototype.addOnClose = function (callback, target) {
        this._onCloses.push(new Network_NetworkListener_1.default(target, callback));
    };
    NetworkClient.prototype.close = function () {
        this.isForceClose = true;
        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }
    };
    NetworkClient.prototype.isConnected = function () {
        if (this.ws) {
            return this.ws.readyState == WebSocket.OPEN;
        }
        return false;
    };
    return NetworkClient;
}());
exports.default = NetworkClient;

cc._RF.pop();