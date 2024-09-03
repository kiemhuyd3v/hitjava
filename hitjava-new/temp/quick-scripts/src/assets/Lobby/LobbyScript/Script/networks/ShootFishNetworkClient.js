"use strict";
cc._RF.push(module, '67b32TSLuBDyITpP+LjS3tz', 'ShootFishNetworkClient');
// Lobby/LobbyScript/Script/networks/ShootFishNetworkClient.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Configs_1 = require("../../../../Loading/src/Configs");
var App_1 = require("../common/App");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NotifyListener = /** @class */ (function () {
    function NotifyListener(target, callback) {
        this.target = target;
        this.callback = callback;
    }
    return NotifyListener;
}());
var RequestListener = /** @class */ (function () {
    function RequestListener(target, callback) {
        this.target = target;
        this.callback = callback;
    }
    return RequestListener;
}());
var NetworkListener = /** @class */ (function () {
    function NetworkListener(target, callback) {
        this.target = target;
        this.callback = callback;
    }
    return NetworkListener;
}());
var ShootFishNetworkClient = /** @class */ (function () {
    function ShootFishNetworkClient() {
        this.isUseWSS = Configs_1.default.App.USE_WSS;
        this.isAutoReconnect = true;
        this.ws = null;
        this.host = Configs_1.default.App.HOST_SHOOT_FISH.host;
        this.port = Configs_1.default.App.HOST_SHOOT_FISH.port;
        // private host: string = "gamebaiyoyo.com";
        // private port: number = 2083;
        this.isForceClose = false;
        this.onOpenes = [];
        this.onCloses = [];
        this.xorKey = "dmVyeSBzZWNyZXQ";
        this.requests = new Object();
        this.intervalPing = -1;
        this.listeners = new Array();
        this.isLogining = false;
        this.isLogined = false;
        this.onLogined = null;
    }
    ShootFishNetworkClient_1 = ShootFishNetworkClient;
    ShootFishNetworkClient.serverCurrentTimeMillis = function () {
        //c - s = d
        //-s = d-c
        //s = -(d-c)
        //s = -d + c
        //s = c - d
        return Date.now() - this.TIME_DISTANCE + Math.round(ShootFishNetworkClient_1.MIN_PING / 2);
    };
    ShootFishNetworkClient.systemCurrentTimeMillis = function () {
        return Date.now();
    };
    ShootFishNetworkClient.getInstance = function () {
        if (this.instance == null) {
            this.instance = new ShootFishNetworkClient_1();
        }
        return this.instance;
    };
    ShootFishNetworkClient.prototype.checkConnect = function (onLogined) {
        this.onLogined = onLogined;
        if (!this.isConnected()) {
            App_1.default.instance.showErrLoading("Đang kết nối tới server...");
            this.connect();
        }
        else if (!this.isLogined) {
            this.login();
        }
        else {
            this.onLogined(this.isLogined);
        }
    };
    ShootFishNetworkClient.prototype.login = function () {
        var _this = this;
        if (this.isLogining)
            return;
        this.isLogining = true;
        App_1.default.instance.showErrLoading("Đang đăng nhập...");
        // this.request("quickLogin", {
        //     "deviceId": "shoot123456654" + Configs.Login.Nickname,
        //     "platform": "android",
        //     "language": "vi"
        // }, (res) => {
        this.request("xxenglogin", {
            "username": Configs_1.default.Login.Username,
            "password": md5(Configs_1.default.Login.Password),
            "platform": Configs_1.default.App.getPlatformName(),
        }, function (res) {
            _this.isLogining = false;
            App_1.default.instance.showLoading(false);
            //    console.log(res);
            if (!res["ok"]) {
                if (_this.onLogined != null)
                    _this.onLogined(false);
                return;
            }
            //    console.log("login oke");
            _this.isLogined = true;
            Configs_1.default.Login.CoinFish = res["cash"];
            Configs_1.default.Login.UsernameFish = res["username"];
            Configs_1.default.Login.PasswordFish = res["password"];
            Configs_1.default.Login.UserIdFish = res["userId"];
            Configs_1.default.Login.FishConfigs = res["config"];
            if (_this.onLogined != null)
                _this.onLogined(true);
        }, ShootFishNetworkClient_1.NODE_FIXED);
    };
    ShootFishNetworkClient.prototype.onOpen = function (ev) {
        var _this = this;
        //   console.log("onOpen");
        this.intervalPing = setInterval(function () { return _this.ping(); }, 3000);
        this.ping();
        for (var i = 0; i < this.onOpenes.length; i++) {
            var listener = this.onOpenes[i];
            if (listener.target && listener.target instanceof Object && listener.target.node) {
                listener.callback();
            }
            else {
                this.onOpenes.splice(i, 1);
                i--;
            }
        }
        if (this.onLogined != null)
            this.login();
    };
    ShootFishNetworkClient.prototype.onMessage = function (ev) {
        var data = new Uint8Array(ev.data);
        data = this.doXOR(data, 0, data.length);
        var pack = msgpack.decode(data);
        if (pack.hasOwnProperty("msgId")) {
            if (pack["msgId"] == 0) {
                // console.log(pack);
                for (var i = 0; i < this.listeners.length; i++) {
                    var listener = this.listeners[i];
                    if (listener.target && listener.target instanceof Object && listener.target.node) {
                        listener.callback(pack["route"], pack["data"]);
                    }
                    else {
                        this.listeners.splice(i, 1);
                        i--;
                    }
                }
            }
            else {
                // console.log(pack);
                if (this.requests.hasOwnProperty(pack["msgId"])) {
                    var listener = this.requests[pack["msgId"]];
                    if (listener.target && listener.target instanceof Object && listener.target.node) {
                        listener.callback(pack["data"]);
                    }
                    delete this.requests[pack["msgId"]];
                }
            }
        }
    };
    ShootFishNetworkClient.prototype.onError = function (ev) {
        App_1.default.instance.showLoading(false);
        //     console.log("onError");
    };
    ShootFishNetworkClient.prototype.onClose = function (ev) {
        var _this = this;
        //  console.log("onClose");
        if (this.intervalPing > 0)
            clearInterval(this.intervalPing);
        for (var i = 0; i < this.onCloses.length; i++) {
            var listener = this.onCloses[i];
            if (listener.target && listener.target instanceof Object && listener.target.node) {
                listener.callback();
            }
            else {
                this.onCloses.splice(i, 1);
                i--;
            }
        }
        if (this.isAutoReconnect && !this.isForceClose) {
            setTimeout(function () {
                if (!_this.isForceClose)
                    _this.connect();
            }, 2000);
        }
    };
    ShootFishNetworkClient.prototype.send = function (msg) {
        if (!this.isConnected())
            return;
        var source = msgpack.encode(msg);
        source = this.doXOR(source, 0, source.length);
        this.ws.send(source);
    };
    ShootFishNetworkClient.prototype.doXOR = function (source, start, count) {
        var index = 0;
        var end = start + count;
        for (var i = start; i < end; i++) {
            source[i] = (source[i] ^ Number(this.xorKey.charAt(index % this.xorKey.length)));
            index++;
        }
        return source;
    };
    ShootFishNetworkClient.prototype.connect = function () {
        //    console.log("start connect: " + this.host + ":" + this.port);
        this.isForceClose = false;
        if (this.ws == null) {
            // this.ws = new WebSocket("wss://" + host + ":" + port + "/websocket");
            if (this.isUseWSS) {
                if (cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID) {
                    this.ws = new (Function.prototype.bind.apply(WebSocket, [null, "wss://" + this.host + ":" + this.port, [], cc.url.raw("resources/raw/cacert.pem")]));
                }
                else {
                    this.ws = new WebSocket("wss://" + this.host + ":" + this.port);
                }
            }
            else {
                this.ws = new WebSocket("ws://" + this.host + ":" + this.port);
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
                this.connect();
            }
        }
    };
    ShootFishNetworkClient.prototype.addOnOpen = function (callback, target) {
        this.onOpenes.push(new NetworkListener(target, callback));
    };
    ShootFishNetworkClient.prototype.addOnClose = function (callback, target) {
        this.onCloses.push(new NetworkListener(target, callback));
    };
    ShootFishNetworkClient.prototype.close = function () {
        this.isForceClose = true;
        if (this.ws) {
            this.ws.close();
        }
    };
    ShootFishNetworkClient.prototype.isConnected = function () {
        if (this.ws) {
            return this.ws.readyState == WebSocket.OPEN;
        }
        return false;
    };
    ShootFishNetworkClient.prototype.addListener = function (callback, target) {
        this.listeners.push(new NotifyListener(target, callback));
    };
    ShootFishNetworkClient.prototype.request = function (route, data, callback, target) {
        ShootFishNetworkClient_1.reqId++;
        if (ShootFishNetworkClient_1.reqId > 64999) {
            ShootFishNetworkClient_1.reqId = 1;
        }
        this.requests[ShootFishNetworkClient_1.reqId] = new RequestListener(target, callback);
        // console.log({ data: typeof data != "object" || data == null || !data ? {} : data, msgId: ShootFishNetworkClient.reqId, route: route });
        this.send({ data: typeof data != "object" || data == null || !data ? {} : data, msgId: ShootFishNetworkClient_1.reqId, route: route });
    };
    ShootFishNetworkClient.prototype.notify = function (route, data) {
        // console.log(JSON.stringify({ data: typeof data != "object" || data == null || !data ? {} : data, msgId: 0, route: route }));
        this.send({ data: typeof data != "object" || data == null || !data ? {} : data, msgId: 0, route: route });
    };
    ShootFishNetworkClient.prototype.ping = function (callback, target) {
        if (callback === void 0) { callback = null; }
        if (target === void 0) { target = null; }
        var t = Date.now();
        this.request("ping", null, function (res) {
            // console.log(res);
            ShootFishNetworkClient_1.PING = Date.now() - t;
            if (ShootFishNetworkClient_1.MIN_PING < 0 || ShootFishNetworkClient_1.PING < ShootFishNetworkClient_1.MIN_PING) {
                ShootFishNetworkClient_1.MIN_PING = ShootFishNetworkClient_1.PING;
                ShootFishNetworkClient_1.TIME_DISTANCE = Date.now() - res["time"];
            }
            if (callback != null)
                callback();
        }, target != null ? target : ShootFishNetworkClient_1.NODE_FIXED);
    };
    var ShootFishNetworkClient_1;
    ShootFishNetworkClient.reqId = 0;
    ShootFishNetworkClient.MIN_PING = -1;
    ShootFishNetworkClient.PING = 0;
    ShootFishNetworkClient.TIME_DISTANCE = 0;
    ShootFishNetworkClient.NODE_FIXED = new cc.Node().addComponent(cc.Sprite);
    ShootFishNetworkClient = ShootFishNetworkClient_1 = __decorate([
        ccclass
    ], ShootFishNetworkClient);
    return ShootFishNetworkClient;
}());
exports.default = ShootFishNetworkClient;

cc._RF.pop();