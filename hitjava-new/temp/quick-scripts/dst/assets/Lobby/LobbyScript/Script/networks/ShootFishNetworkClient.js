
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/networks/ShootFishNetworkClient.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXG5ldHdvcmtzXFxTaG9vdEZpc2hOZXR3b3JrQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXNEO0FBQ3RELHFDQUFnQztBQUcxQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUlJLHdCQUFZLE1BQW9CLEVBQUUsUUFBK0M7UUFDN0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFFRDtJQUlJLHlCQUFZLE1BQW9CLEVBQUUsUUFBK0I7UUFDN0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFFRDtJQUlJLHlCQUFZLE1BQW9CLEVBQUUsUUFBb0I7UUFDbEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFHRDtJQTZGSTtRQTFFTyxhQUFRLEdBQVksaUJBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQ3hDLG9CQUFlLEdBQVksSUFBSSxDQUFDO1FBRS9CLE9BQUUsR0FBYyxJQUFJLENBQUM7UUFDckIsU0FBSSxHQUFXLGlCQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7UUFDaEQsU0FBSSxHQUFXLGlCQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJ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SUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQU5qRCxzQkFBc0I7UUFEMUMsT0FBTztPQUNhLHNCQUFzQixDQTBRMUM7SUFBRCw2QkFBQztDQTFRRCxBQTBRQyxJQUFBO2tCQTFRb0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uLy4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uL2NvbW1vbi9BcHBcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vY29tbW9uL1V0aWxzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cblxuY2xhc3MgTm90aWZ5TGlzdGVuZXIge1xuICAgIHRhcmdldDogY2MuQ29tcG9uZW50O1xuICAgIGNhbGxiYWNrOiAocm91dGU6IHN0cmluZywgZGF0YTogT2JqZWN0KSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3IodGFyZ2V0OiBjYy5Db21wb25lbnQsIGNhbGxiYWNrOiAocm91dGU6IHN0cmluZywgZGF0YTogT2JqZWN0KSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxufVxuXG5jbGFzcyBSZXF1ZXN0TGlzdGVuZXIge1xuICAgIHRhcmdldDogY2MuQ29tcG9uZW50O1xuICAgIGNhbGxiYWNrOiAocmVzOiBPYmplY3QpID0+IHZvaWQ7XG5cbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQ6IGNjLkNvbXBvbmVudCwgY2FsbGJhY2s6IChyZXM6IE9iamVjdCkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cbn1cblxuY2xhc3MgTmV0d29ya0xpc3RlbmVyIHtcbiAgICB0YXJnZXQ6IGNjLkNvbXBvbmVudDtcbiAgICBjYWxsYmFjazogKCkgPT4gdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKHRhcmdldDogY2MuQ29tcG9uZW50LCBjYWxsYmFjazogKCkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob290RmlzaE5ldHdvcmtDbGllbnQge1xuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBTaG9vdEZpc2hOZXR3b3JrQ2xpZW50O1xuICAgIHByaXZhdGUgc3RhdGljIHJlcUlkID0gMDtcbiAgICBwdWJsaWMgc3RhdGljIE1JTl9QSU5HID0gLTE7XG4gICAgcHVibGljIHN0YXRpYyBQSU5HID0gMDtcbiAgICBwdWJsaWMgc3RhdGljIFRJTUVfRElTVEFOQ0UgPSAwO1xuICAgIHByaXZhdGUgc3RhdGljIE5PREVfRklYRUQgPSBuZXcgY2MuTm9kZSgpLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgIHB1YmxpYyBzdGF0aWMgc2VydmVyQ3VycmVudFRpbWVNaWxsaXMoKTogbnVtYmVyIHtcbiAgICAgICAgLy9jIC0gcyA9IGRcbiAgICAgICAgLy8tcyA9IGQtY1xuICAgICAgICAvL3MgPSAtKGQtYylcbiAgICAgICAgLy9zID0gLWQgKyBjXG4gICAgICAgIC8vcyA9IGMgLSBkXG4gICAgICAgIHJldHVybiBEYXRlLm5vdygpIC0gdGhpcy5USU1FX0RJU1RBTkNFICsgTWF0aC5yb3VuZChTaG9vdEZpc2hOZXR3b3JrQ2xpZW50Lk1JTl9QSU5HIC8gMik7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgc3lzdGVtQ3VycmVudFRpbWVNaWxsaXMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzVXNlV1NTOiBib29sZWFuID0gQ29uZmlncy5BcHAuVVNFX1dTUztcbiAgICBwdWJsaWMgaXNBdXRvUmVjb25uZWN0OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIHByaXZhdGUgd3M6IFdlYlNvY2tldCA9IG51bGw7XG4gICAgcHJpdmF0ZSBob3N0OiBzdHJpbmcgPSBDb25maWdzLkFwcC5IT1NUX1NIT09UX0ZJU0guaG9zdDtcbiAgICBwcml2YXRlIHBvcnQ6IG51bWJlciA9IENvbmZpZ3MuQXBwLkhPU1RfU0hPT1RfRklTSC5wb3J0O1xuICAgIC8vIHByaXZhdGUgaG9zdDogc3RyaW5nID0gXCJnYW1lYmFpeW95by5jb21cIjtcbiAgICAvLyBwcml2YXRlIHBvcnQ6IG51bWJlciA9IDIwODM7XG4gICAgcHJpdmF0ZSBpc0ZvcmNlQ2xvc2UgPSBmYWxzZTtcbiAgICBwcml2YXRlIG9uT3BlbmVzOiBBcnJheTxOZXR3b3JrTGlzdGVuZXI+ID0gW107XG4gICAgcHJpdmF0ZSBvbkNsb3NlczogQXJyYXk8TmV0d29ya0xpc3RlbmVyPiA9IFtdO1xuICAgIHByaXZhdGUgeG9yS2V5ID0gXCJkbVZ5ZVNCelpXTnlaWFFcIjtcbiAgICBwcml2YXRlIHJlcXVlc3RzOiBPYmplY3QgPSBuZXcgT2JqZWN0KCk7XG4gICAgcHJpdmF0ZSBpbnRlcnZhbFBpbmc6IG51bWJlciA9IC0xO1xuXG4gICAgcHJpdmF0ZSBsaXN0ZW5lcnM6IEFycmF5PE5vdGlmeUxpc3RlbmVyPiA9IG5ldyBBcnJheTxOb3RpZnlMaXN0ZW5lcj4oKTtcblxuICAgIHByaXZhdGUgaXNMb2dpbmluZyA9IGZhbHNlO1xuICAgIHByaXZhdGUgaXNMb2dpbmVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBvbkxvZ2luZWQ6IChsb2dpbmVkKSA9PiB2b2lkID0gbnVsbDtcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogU2hvb3RGaXNoTmV0d29ya0NsaWVudCB7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU2hvb3RGaXNoTmV0d29ya0NsaWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGVja0Nvbm5lY3Qob25Mb2dpbmVkOiAoaXNMb2dpbmVkKSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMub25Mb2dpbmVkID0gb25Mb2dpbmVkO1xuICAgICAgICBpZiAoIXRoaXMuaXNDb25uZWN0ZWQoKSkge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dFcnJMb2FkaW5nKFwixJBhbmcga+G6v3QgbuG7kWkgdOG7m2kgc2VydmVyLi4uXCIpO1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNMb2dpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2luKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uTG9naW5lZCh0aGlzLmlzTG9naW5lZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGxvZ2luKCkge1xuICAgICAgICBpZiAodGhpcy5pc0xvZ2luaW5nKSByZXR1cm47XG4gICAgICAgIHRoaXMuaXNMb2dpbmluZyA9IHRydWU7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93RXJyTG9hZGluZyhcIsSQYW5nIMSRxINuZyBuaOG6rXAuLi5cIik7XG4gICAgICAgIC8vIHRoaXMucmVxdWVzdChcInF1aWNrTG9naW5cIiwge1xuICAgICAgICAvLyAgICAgXCJkZXZpY2VJZFwiOiBcInNob290MTIzNDU2NjU0XCIgKyBDb25maWdzLkxvZ2luLk5pY2tuYW1lLFxuICAgICAgICAvLyAgICAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgICAgICAgLy8gICAgIFwibGFuZ3VhZ2VcIjogXCJ2aVwiXG4gICAgICAgIC8vIH0sIChyZXMpID0+IHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0KFwieHhlbmdsb2dpblwiLCB7XG4gICAgICAgICAgICBcInVzZXJuYW1lXCI6IENvbmZpZ3MuTG9naW4uVXNlcm5hbWUsXG4gICAgICAgICAgICBcInBhc3N3b3JkXCI6IG1kNShDb25maWdzLkxvZ2luLlBhc3N3b3JkKSxcbiAgICAgICAgICAgIFwicGxhdGZvcm1cIjogQ29uZmlncy5BcHAuZ2V0UGxhdGZvcm1OYW1lKCksXG4gICAgICAgIH0sIChyZXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNMb2dpbmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgLy8gICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgIGlmICghcmVzW1wib2tcIl0pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vbkxvZ2luZWQgIT0gbnVsbCkgdGhpcy5vbkxvZ2luZWQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJsb2dpbiBva2VcIik7XG5cbiAgICAgICAgICAgIHRoaXMuaXNMb2dpbmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQ29pbkZpc2ggPSByZXNbXCJjYXNoXCJdO1xuICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Vc2VybmFtZUZpc2ggPSByZXNbXCJ1c2VybmFtZVwiXTtcbiAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uUGFzc3dvcmRGaXNoID0gcmVzW1wicGFzc3dvcmRcIl07XG4gICAgICAgICAgICBDb25maWdzLkxvZ2luLlVzZXJJZEZpc2ggPSByZXNbXCJ1c2VySWRcIl07XG4gICAgICAgICAgICBDb25maWdzLkxvZ2luLkZpc2hDb25maWdzID0gcmVzW1wiY29uZmlnXCJdO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5vbkxvZ2luZWQgIT0gbnVsbCkgdGhpcy5vbkxvZ2luZWQodHJ1ZSk7XG4gICAgICAgIH0sIFNob290RmlzaE5ldHdvcmtDbGllbnQuTk9ERV9GSVhFRCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uT3BlbihldjogRXZlbnQpIHtcbiAgICAgLy8gICBjb25zb2xlLmxvZyhcIm9uT3BlblwiKTtcbiAgICAgICAgdGhpcy5pbnRlcnZhbFBpbmcgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnBpbmcoKSwgMzAwMCk7XG4gICAgICAgIHRoaXMucGluZygpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vbk9wZW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGxpc3RlbmVyID0gdGhpcy5vbk9wZW5lc1tpXTtcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lci50YXJnZXQgJiYgbGlzdGVuZXIudGFyZ2V0IGluc3RhbmNlb2YgT2JqZWN0ICYmIGxpc3RlbmVyLnRhcmdldC5ub2RlKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbk9wZW5lcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub25Mb2dpbmVkICE9IG51bGwpIHRoaXMubG9naW4oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uTWVzc2FnZShldjogTWVzc2FnZUV2ZW50KSB7XG4gICAgICAgIGxldCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoZXYuZGF0YSk7XG4gICAgICAgIGRhdGEgPSB0aGlzLmRvWE9SKGRhdGEsIDAsIGRhdGEubGVuZ3RoKTtcbiAgICAgICAgbGV0IHBhY2s6IE9iamVjdCA9IG1zZ3BhY2suZGVjb2RlKGRhdGEpO1xuICAgICAgICBpZiAocGFjay5oYXNPd25Qcm9wZXJ0eShcIm1zZ0lkXCIpKSB7XG4gICAgICAgICAgICBpZiAocGFja1tcIm1zZ0lkXCJdID09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwYWNrKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsaXN0ZW5lciA9IHRoaXMubGlzdGVuZXJzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXIudGFyZ2V0ICYmIGxpc3RlbmVyLnRhcmdldCBpbnN0YW5jZW9mIE9iamVjdCAmJiBsaXN0ZW5lci50YXJnZXQubm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2socGFja1tcInJvdXRlXCJdLCBwYWNrW1wiZGF0YVwiXSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBhY2spO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlcXVlc3RzLmhhc093blByb3BlcnR5KHBhY2tbXCJtc2dJZFwiXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3RlbmVyOiBSZXF1ZXN0TGlzdGVuZXIgPSB0aGlzLnJlcXVlc3RzW3BhY2tbXCJtc2dJZFwiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lci50YXJnZXQgJiYgbGlzdGVuZXIudGFyZ2V0IGluc3RhbmNlb2YgT2JqZWN0ICYmIGxpc3RlbmVyLnRhcmdldC5ub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsYmFjayhwYWNrW1wiZGF0YVwiXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucmVxdWVzdHNbcGFja1tcIm1zZ0lkXCJdXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRXJyb3IoZXY6IEV2ZW50KSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAvLyAgICAgY29uc29sZS5sb2coXCJvbkVycm9yXCIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25DbG9zZShldjogRXZlbnQpIHtcbiAgICAgIC8vICBjb25zb2xlLmxvZyhcIm9uQ2xvc2VcIik7XG4gICAgICAgIGlmICh0aGlzLmludGVydmFsUGluZyA+IDApIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbFBpbmcpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub25DbG9zZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMub25DbG9zZXNbaV07XG4gICAgICAgICAgICBpZiAobGlzdGVuZXIudGFyZ2V0ICYmIGxpc3RlbmVyLnRhcmdldCBpbnN0YW5jZW9mIE9iamVjdCAmJiBsaXN0ZW5lci50YXJnZXQubm9kZSkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMub25DbG9zZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0F1dG9SZWNvbm5lY3QgJiYgIXRoaXMuaXNGb3JjZUNsb3NlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNGb3JjZUNsb3NlKSB0aGlzLmNvbm5lY3QoKTtcbiAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZW5kKG1zZzogYW55KSB7XG4gICAgICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZCgpKSByZXR1cm47XG4gICAgICAgIGxldCBzb3VyY2UgPSBtc2dwYWNrLmVuY29kZShtc2cpO1xuICAgICAgICBzb3VyY2UgPSB0aGlzLmRvWE9SKHNvdXJjZSwgMCwgc291cmNlLmxlbmd0aCk7XG4gICAgICAgIHRoaXMud3Muc2VuZChzb3VyY2UpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZG9YT1Ioc291cmNlOiBVaW50OEFycmF5LCBzdGFydDogbnVtYmVyLCBjb3VudDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGxldCBlbmQgPSBzdGFydCArIGNvdW50O1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgICAgICAgc291cmNlW2ldID0gKHNvdXJjZVtpXSBeIE51bWJlcih0aGlzLnhvcktleS5jaGFyQXQoaW5kZXggJSB0aGlzLnhvcktleS5sZW5ndGgpKSk7XG4gICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbm5lY3QoKSB7XG4gICAgLy8gICAgY29uc29sZS5sb2coXCJzdGFydCBjb25uZWN0OiBcIiArIHRoaXMuaG9zdCArIFwiOlwiICsgdGhpcy5wb3J0KTtcbiAgICAgICAgdGhpcy5pc0ZvcmNlQ2xvc2UgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMud3MgPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gdGhpcy53cyA9IG5ldyBXZWJTb2NrZXQoXCJ3c3M6Ly9cIiArIGhvc3QgKyBcIjpcIiArIHBvcnQgKyBcIi93ZWJzb2NrZXRcIik7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1VzZVdTUykge1xuICAgICAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUgJiYgY2Muc3lzLm9zID09IGNjLnN5cy5PU19BTkRST0lEKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud3MgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KFdlYlNvY2tldCwgW251bGwsIFwid3NzOi8vXCIgKyB0aGlzLmhvc3QgKyBcIjpcIiArIHRoaXMucG9ydCwgW10sIGNjLnVybC5yYXcoXCJyZXNvdXJjZXMvcmF3L2NhY2VydC5wZW1cIildKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53cyA9IG5ldyBXZWJTb2NrZXQoXCJ3c3M6Ly9cIiArIHRoaXMuaG9zdCArIFwiOlwiICsgdGhpcy5wb3J0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMud3MgPSBuZXcgV2ViU29ja2V0KFwid3M6Ly9cIiArIHRoaXMuaG9zdCArIFwiOlwiICsgdGhpcy5wb3J0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMud3MuYmluYXJ5VHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcbiAgICAgICAgICAgIHRoaXMud3Mub25vcGVuID0gdGhpcy5vbk9wZW4uYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMud3Mub25tZXNzYWdlID0gdGhpcy5vbk1lc3NhZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMud3Mub25lcnJvciA9IHRoaXMub25FcnJvci5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy53cy5vbmNsb3NlID0gdGhpcy5vbkNsb3NlLmJpbmQodGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy53cy5yZWFkeVN0YXRlICE9PSBXZWJTb2NrZXQuT1BFTikge1xuICAgICAgICAgICAgICAgIHRoaXMud3MuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLndzID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhZGRPbk9wZW4oY2FsbGJhY2s6ICgpID0+IHZvaWQsIHRhcmdldDogY2MuQ29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMub25PcGVuZXMucHVzaChuZXcgTmV0d29ya0xpc3RlbmVyKHRhcmdldCwgY2FsbGJhY2spKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkT25DbG9zZShjYWxsYmFjazogKCkgPT4gdm9pZCwgdGFyZ2V0OiBjYy5Db21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5vbkNsb3Nlcy5wdXNoKG5ldyBOZXR3b3JrTGlzdGVuZXIodGFyZ2V0LCBjYWxsYmFjaykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5pc0ZvcmNlQ2xvc2UgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy53cykge1xuICAgICAgICAgICAgdGhpcy53cy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGlzQ29ubmVjdGVkKCkge1xuICAgICAgICBpZiAodGhpcy53cykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud3MucmVhZHlTdGF0ZSA9PSBXZWJTb2NrZXQuT1BFTjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZExpc3RlbmVyKGNhbGxiYWNrOiAocm91dGU6IHN0cmluZywgZGF0YTogT2JqZWN0KSA9PiB2b2lkLCB0YXJnZXQ6IGNjLkNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKG5ldyBOb3RpZnlMaXN0ZW5lcih0YXJnZXQsIGNhbGxiYWNrKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlcXVlc3Qocm91dGU6IHN0cmluZywgZGF0YTogYW55LCBjYWxsYmFjazogKHJlczogT2JqZWN0KSA9PiB2b2lkLCB0YXJnZXQ6IGNjLkNvbXBvbmVudCkge1xuICAgICAgICBTaG9vdEZpc2hOZXR3b3JrQ2xpZW50LnJlcUlkKys7XG4gICAgICAgIGlmIChTaG9vdEZpc2hOZXR3b3JrQ2xpZW50LnJlcUlkID4gNjQ5OTkpIHtcbiAgICAgICAgICAgIFNob290RmlzaE5ldHdvcmtDbGllbnQucmVxSWQgPSAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVxdWVzdHNbU2hvb3RGaXNoTmV0d29ya0NsaWVudC5yZXFJZF0gPSBuZXcgUmVxdWVzdExpc3RlbmVyKHRhcmdldCwgY2FsbGJhY2spO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh7IGRhdGE6IHR5cGVvZiBkYXRhICE9IFwib2JqZWN0XCIgfHwgZGF0YSA9PSBudWxsIHx8ICFkYXRhID8ge30gOiBkYXRhLCBtc2dJZDogU2hvb3RGaXNoTmV0d29ya0NsaWVudC5yZXFJZCwgcm91dGU6IHJvdXRlIH0pO1xuICAgICAgICB0aGlzLnNlbmQoeyBkYXRhOiB0eXBlb2YgZGF0YSAhPSBcIm9iamVjdFwiIHx8IGRhdGEgPT0gbnVsbCB8fCAhZGF0YSA/IHt9IDogZGF0YSwgbXNnSWQ6IFNob290RmlzaE5ldHdvcmtDbGllbnQucmVxSWQsIHJvdXRlOiByb3V0ZSB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbm90aWZ5KHJvdXRlOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh7IGRhdGE6IHR5cGVvZiBkYXRhICE9IFwib2JqZWN0XCIgfHwgZGF0YSA9PSBudWxsIHx8ICFkYXRhID8ge30gOiBkYXRhLCBtc2dJZDogMCwgcm91dGU6IHJvdXRlIH0pKTtcbiAgICAgICAgdGhpcy5zZW5kKHsgZGF0YTogdHlwZW9mIGRhdGEgIT0gXCJvYmplY3RcIiB8fCBkYXRhID09IG51bGwgfHwgIWRhdGEgPyB7fSA6IGRhdGEsIG1zZ0lkOiAwLCByb3V0ZTogcm91dGUgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHBpbmcoY2FsbGJhY2s6ICgpID0+IHZvaWQgPSBudWxsLCB0YXJnZXQ6IGNjLkNvbXBvbmVudCA9IG51bGwpIHtcbiAgICAgICAgbGV0IHQgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLnJlcXVlc3QoXCJwaW5nXCIsIG51bGwsIChyZXMpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICBTaG9vdEZpc2hOZXR3b3JrQ2xpZW50LlBJTkcgPSBEYXRlLm5vdygpIC0gdDtcbiAgICAgICAgICAgIGlmIChTaG9vdEZpc2hOZXR3b3JrQ2xpZW50Lk1JTl9QSU5HIDwgMCB8fCBTaG9vdEZpc2hOZXR3b3JrQ2xpZW50LlBJTkcgPCBTaG9vdEZpc2hOZXR3b3JrQ2xpZW50Lk1JTl9QSU5HKSB7XG4gICAgICAgICAgICAgICAgU2hvb3RGaXNoTmV0d29ya0NsaWVudC5NSU5fUElORyA9IFNob290RmlzaE5ldHdvcmtDbGllbnQuUElORztcbiAgICAgICAgICAgICAgICBTaG9vdEZpc2hOZXR3b3JrQ2xpZW50LlRJTUVfRElTVEFOQ0UgPSBEYXRlLm5vdygpIC0gcmVzW1widGltZVwiXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAhPSBudWxsKSBjYWxsYmFjaygpO1xuICAgICAgICB9LCB0YXJnZXQgIT0gbnVsbCA/IHRhcmdldCA6IFNob290RmlzaE5ldHdvcmtDbGllbnQuTk9ERV9GSVhFRCk7XG4gICAgfVxufVxuIl19