"use strict";
cc._RF.push(module, '84dc1GAhsBLUKjw1F3/6Rx5', 'Network.SockJsClient');
// Lobby/LobbyScript/Script/networks/Network.SockJsClient.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Configs_1 = require("../../../../Loading/src/Configs");
var SockJS = require("../../../../Loading/src/Sockjs.min");
// import * as SockJS from '../../../../Loading/src/sockjs114';
var Stomp = require("../../../../Loading/src/stomp2");
var Network_NetworkListener_1 = require("./Network.NetworkListener");
var App_1 = require("../common/App");
var SockJsClient = /** @class */ (function () {
    function SockJsClient() {
        this.ws = null;
        this.stompClient = null;
        this.host = "";
        this.apiSub = "";
        this.port = 0;
        this.isForceClose = false;
        this.isConnected = false;
        this.isLogin = false;
        this.isUseWSS = false;
        this.isAutoReconnect = true;
        this.retryCount = 0;
        this.retrySubCount = 0;
        this.token = "";
        this._onOpenes = [];
        this._onCloses = [];
        this.listSubChannel = [];
    }
    SockJsClient.prototype.connect = function (host, apiSub) {
        var _this_1 = this;
        this.token = Configs_1.default.Login.AccessTokenSockJs;
        this.isForceClose = false;
        this.host = host;
        this.apiSub = apiSub;
        if (this.ws == null) {
            if (cc.sys.isBrowser) {
                //Utils.Log("Start Connect Game SockJs:" + host);
                this.ws = new SockJS(host);
            }
            else {
                host = host.replace("https", "http");
                //Utils.Log("Start Connect Game SockJs:" + host);
                this.ws = new SockJS(host);
            }
            this.stompClient = Stomp.Stomp.over(this.ws);
            var headers = {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + Configs_1.default.Login.AccessTokenSockJs
            };
            var _this = this;
            this.stompClient.connect(headers, function () {
                //Utils.Log("STOMP CONNECTED & SUBSCRIBE");
                _this.isConnected = true;
                _this_1.onConnected();
                _this_1.subscribe(apiSub);
            });
            this.ws.onCustomMessage = this.onCustomMessage.bind(this);
        }
        else {
            if (this.ws.readyState !== WebSocket.OPEN) {
                this.ws.close();
                this.ws = null;
                this.isConnected = false;
                this.connect(host, apiSub);
            }
        }
    };
    SockJsClient.prototype.onConnected = function () {
        //Utils.Log("onConnected Stomp!");
    };
    SockJsClient.prototype.reconnect = function () {
        this.connect(this.host, this.apiSub);
    };
    SockJsClient.prototype.subscribe = function (destination) {
        var _this_1 = this;
        if (this.isConnected) {
            this.stompClient.subscribe(destination, function (data) {
                _this_1.onMessage(data);
            });
        }
    };
    SockJsClient.prototype.unSubscribe = function (idSub) {
        if (this.isConnected) {
            this.stompClient.unsubscribe(idSub);
        }
    };
    SockJsClient.prototype.addOnOpen = function (callback, target) {
        this._onOpenes.push(new Network_NetworkListener_1.default(target, callback));
    };
    SockJsClient.prototype.addOnClose = function (callback, target) {
        this._onCloses.push(new Network_NetworkListener_1.default(target, callback));
    };
    SockJsClient.prototype.onCustomMessage = function (msg, data) {
        if (data === void 0) { data = null; }
        //Utils.Log("onCustomMessage:" + msg);
    };
    SockJsClient.prototype.checkSubChannel = function (id) {
        var isSub = false;
        for (var i = 0; i < this.listSubChannel.length; i++) {
            if (this.listSubChannel[i].id == id) {
                isSub = true;
                break;
            }
        }
        return isSub;
    };
    SockJsClient.prototype.onOpen = function (ev) {
        this.isConnected = true;
        //Utils.Log("onOpen SOCKJS");
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
    SockJsClient.prototype.onMessage = function (ev) {
        //Utils.Log("onmessage: " + ev.data);
    };
    SockJsClient.prototype.onError = function (ev) {
        //Utils.Log("onError SOCKJS:", JSON.stringify(ev));
    };
    SockJsClient.prototype.onClose = function (ev) {
        this.isConnected = false;
        App_1.default.instance.showToast(App_1.default.instance.getTextLang('txt_check_connect'));
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
        //Utils.Log("onClose SOCKJS");
    };
    return SockJsClient;
}());
exports.default = SockJsClient;

cc._RF.pop();