"use strict";
cc._RF.push(module, '8d9374ANWNGP41ccl1WU02b', 'TaiXiuSieuToc.NetworkClient');
// Lobby/LobbyScript/Script/networks/TaiXiuSieuToc.NetworkClient.ts

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
var Configs_1 = require("../../../../Loading/src/Configs");
var App_1 = require("../common/App");
var Network_NetworkListener_1 = require("./Network.NetworkListener");
var Network_SockJsClient_1 = require("./Network.SockJsClient");
var TaiXiuSTNetworkClient = /** @class */ (function (_super) {
    __extends(TaiXiuSTNetworkClient, _super);
    function TaiXiuSTNetworkClient() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.token = "";
        _this.isOpenGame = false;
        _this.listeners = new Array();
        return _this;
    }
    TaiXiuSTNetworkClient.getInstance = function () {
        if (this.instance == null) {
            this.instance = new TaiXiuSTNetworkClient();
        }
        return this.instance;
    };
    TaiXiuSTNetworkClient.prototype.connect = function () {
        _super.prototype.connect.call(this, Configs_1.default.App.HOST_SOCKJS + Configs_1.default.App.SOCKJS_LOGIN + "?access_token=" + Configs_1.default.Login.AccessTokenSockJs, Configs_1.default.App.TXST_SUB_TOPIC);
    };
    TaiXiuSTNetworkClient.prototype.addListener = function (callback, target) {
        this.listeners.push(new Network_NetworkListener_1.default(target, callback));
    };
    TaiXiuSTNetworkClient.prototype.onMessage = function (data) {
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
    TaiXiuSTNetworkClient.prototype.onCustomMessage = function (msg, data) {
        if (data === void 0) { data = null; }
        _super.prototype.onCustomMessage.call(this, msg, data);
        switch (msg) {
            case "SUBSCRIBE":
                //Utils.Log(data);
                this.listSubChannel.push(data); // add sub-id to list to check later in game;
                if (data.destination == "/user/queue/tx") {
                    TaiXiuSTNetworkClient.TaiXiuSieuTocController.gameSubscribeId = data.id;
                }
                break;
            case "UNSUBSCRIBE": //event unsubscribe delete sub-id to check subscribed channel in game  before send data
                //Utils.Log(data);
                for (var i = 0; i < this.listSubChannel.length; i++) {
                    if (this.listSubChannel[i].id == data.id) {
                        this.subscribe(this.listSubChannel[i].destination);
                        this.listSubChannel.splice(i, 1);
                        break;
                    }
                }
                break;
            case "ONCLOSE":
                this.onClose("ONCLOSE");
                break;
        }
    };
    TaiXiuSTNetworkClient.prototype.onConnected = function () {
        _super.prototype.onConnected.call(this);
        if (this.isOpenGame) {
            App_1.default.instance.openMiniGameTaiXiuSieuToc("TaiXiuSieuToc", "TaiXiuSieuToc");
            this.isOpenGame = false;
        }
    };
    TaiXiuSTNetworkClient.prototype.sendBet = function (data) {
        //Utils.Log("data Bet==", data);
        this.send("/topic/bet", JSON.stringify(data));
    };
    TaiXiuSTNetworkClient.prototype.sendChat = function (data) {
        this.send("/topic/chats", JSON.stringify(data));
    };
    TaiXiuSTNetworkClient.prototype.getChatHistory = function () {
        var data = {};
        this.send("/topic/public", JSON.stringify(data));
    };
    TaiXiuSTNetworkClient.prototype.getHistorySession = function () {
        //Utils.Log("getHistorySession");
        var data = {};
        this.send("/topic/lichsuphien", JSON.stringify(data));
    };
    TaiXiuSTNetworkClient.prototype.checkConnect = function (cb) {
        if (this.isConnected && this.isLogin) {
            cb();
        }
        else {
            this.reconnect();
        }
    };
    TaiXiuSTNetworkClient.prototype.send = function (destination, data) {
        var headers = {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + this.token
        };
        //Utils.Log("Bearer " + this.token);
        this.stompClient.send(destination, headers, data);
    };
    TaiXiuSTNetworkClient.prototype.onClose = function (event) {
        _super.prototype.onClose.call(this, event);
        if (TaiXiuSTNetworkClient.TaiXiuSieuTocController != null) {
            TaiXiuSTNetworkClient.TaiXiuSieuTocController.dismiss();
        }
    };
    TaiXiuSTNetworkClient.prototype.getHistory = function (page, size, onFinished) {
        var url = Configs_1.default.App.HOST_SOCKJS + "api/tx/lichsucuoc?page=%d&size=%d&sort=id%2Cdesc";
        url = cc.js.formatStr(url, page, size);
        this.requestAPI(url, onFinished);
    };
    TaiXiuSTNetworkClient.prototype.getHistorySessionId = function (sessionid, onFinished) {
        var url = Configs_1.default.App.HOST_SOCKJS + "api/tx/thongkephien/" + sessionid;
        this.requestAPI(url, onFinished);
    };
    TaiXiuSTNetworkClient.prototype.getTopHonor = function () {
        // let url = Configs.App.HOST_SOCKJS + "api/tx-ranks";
        // this.requestAPI(url, onFinished, "GET");
        var data = {};
        this.send("/topic/ranktx", JSON.stringify(data));
    };
    TaiXiuSTNetworkClient.prototype.requestAPI = function (url, onFinished, method) {
        if (method === void 0) { method = "POST"; }
        var xhr = new XMLHttpRequest();
        //Utils.Log("url==" + url);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var data = null;
                    var e = null;
                    try {
                        data = JSON.parse(xhr.responseText);
                    }
                    catch (ex) {
                        e = ex;
                    }
                    onFinished(e, data);
                }
                else {
                    onFinished(xhr.status, null);
                }
            }
        };
        //Utils.Log("Method==" + method);
        xhr.open(method, url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Authorization", "Bearer " + this.token);
        xhr.send();
    };
    TaiXiuSTNetworkClient.TaiXiuSieuTocController = null;
    return TaiXiuSTNetworkClient;
}(Network_SockJsClient_1.default));
exports.default = TaiXiuSTNetworkClient;

cc._RF.pop();