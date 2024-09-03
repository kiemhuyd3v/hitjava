
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/networks/TX2NetworkClient.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '69d0adPiFtOMqlmb32t610p', 'TX2NetworkClient');
// Lobby/LobbyScript/Script/networks/TX2NetworkClient.ts

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
var TX2NetworkClient = /** @class */ (function (_super) {
    __extends(TX2NetworkClient, _super);
    function TX2NetworkClient() {
        var _this = _super.call(this) || this;
        _this.listeners = new Array();
        _this.isLogin = false;
        _this.onLogined = null;
        _this.isUseWSS = Configs_1.default.App.USE_WSS;
        return _this;
    }
    TX2NetworkClient.getInstance = function () {
        if (this.instance == null) {
            this.instance = new TX2NetworkClient();
        }
        return this.instance;
    };
    TX2NetworkClient.prototype.checkConnect = function (onLogined) {
        if (onLogined === void 0) { onLogined = null; }
        this.onLogined = onLogined;
        if (this.ws != null && this.ws.readyState == WebSocket.CONNECTING)
            return;
        if (!this.isConnected()) {
            this.connect();
            return;
        }
        if (this.isLogin && this.onLogined != null)
            this.onLogined();
    };
    TX2NetworkClient.prototype.connect = function () {
        _super.prototype.connect.call(this, Configs_1.default.App.HOST_TAI_XIU_MINI2.host, Configs_1.default.App.HOST_TAI_XIU_MINI2.port);
    };
    TX2NetworkClient.prototype.onOpen = function (ev) {
        _super.prototype.onOpen.call(this, ev);
        this.send(new Network_Cmd_1.default.SendLogin(Configs_1.default.Login.Nickname, Configs_1.default.Login.AccessToken));
        //Utils.Log("tx2 connected");
    };
    TX2NetworkClient.prototype.onMessage = function (ev) {
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
    TX2NetworkClient.prototype.addListener = function (callback, target) {
        this.listeners.push(new Network_NetworkListener_1.default(target, callback));
    };
    TX2NetworkClient.prototype.send = function (packet) {
        for (var b = new Int8Array(packet._length), c = 0; c < packet._length; c++)
            b[c] = packet._data[c];
        if (this.ws != null && this.isConnected())
            this.ws.send(b.buffer);
    };
    TX2NetworkClient.prototype.sendCheck = function (packet) {
        var _this = this;
        this.checkConnect(function () {
            _this.send(packet);
        });
    };
    return TX2NetworkClient;
}(Network_NetworkClient_1.default));
exports.default = TX2NetworkClient;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXG5ldHdvcmtzXFxUWDJOZXR3b3JrQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFvRDtBQUNwRCxxRUFBd0Q7QUFDeEQsdURBQTBDO0FBQzFDLDZDQUFnQztBQUVoQywyREFBc0Q7QUFHdEQ7SUFBOEMsb0NBQWE7SUFjdkQ7UUFBQSxZQUNJLGlCQUFPLFNBRVY7UUFkTyxlQUFTLEdBQTJCLElBQUksS0FBSyxFQUFtQixDQUFDO1FBQ2pFLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsZUFBUyxHQUFlLElBQUksQ0FBQztRQVdqQyxLQUFJLENBQUMsUUFBUSxHQUFHLGlCQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQzs7SUFDeEMsQ0FBQztJQVZhLDRCQUFXLEdBQXpCO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztTQUMxQztRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBT00sdUNBQVksR0FBbkIsVUFBb0IsU0FBNEI7UUFBNUIsMEJBQUEsRUFBQSxnQkFBNEI7UUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsSUFBSSxTQUFTLENBQUMsVUFBVTtZQUFFLE9BQU87UUFDMUUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUNyQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDZixPQUFPO1NBQ1Y7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJO1lBQUUsSUFB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QUFhLEdBK0UxRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXR3b3JrQ2xpZW50IGZyb20gXCIuL05ldHdvcmsuTmV0d29ya0NsaWVudFwiO1xuaW1wb3J0IE5ldHdvcmtMaXN0ZW5lciBmcm9tIFwiLi9OZXR3b3JrLk5ldHdvcmtMaXN0ZW5lclwiO1xuaW1wb3J0IEluUGFja2V0IGZyb20gXCIuL05ldHdvcmsuSW5QYWNrZXRcIjtcbmltcG9ydCBjbWQgZnJvbSBcIi4vTmV0d29yay5DbWRcIjtcbmltcG9ydCBPdXRQYWNrZXQgZnJvbSBcIi4vTmV0d29yay5PdXRQYWNrZXRcIjtcbmltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi8uLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL2NvbW1vbi9VdGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUWDJOZXR3b3JrQ2xpZW50IGV4dGVuZHMgTmV0d29ya0NsaWVudCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFRYMk5ldHdvcmtDbGllbnQ7XG5cbiAgICBwcml2YXRlIGxpc3RlbmVyczogQXJyYXk8TmV0d29ya0xpc3RlbmVyPiA9IG5ldyBBcnJheTxOZXR3b3JrTGlzdGVuZXI+KCk7XG4gICAgcHJpdmF0ZSBpc0xvZ2luID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBvbkxvZ2luZWQ6ICgpID0+IHZvaWQgPSBudWxsO1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBUWDJOZXR3b3JrQ2xpZW50IHtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBUWDJOZXR3b3JrQ2xpZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaXNVc2VXU1MgPSBDb25maWdzLkFwcC5VU0VfV1NTO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGVja0Nvbm5lY3Qob25Mb2dpbmVkOiAoKSA9PiB2b2lkID0gbnVsbCkge1xuICAgICAgICB0aGlzLm9uTG9naW5lZCA9IG9uTG9naW5lZDtcbiAgICAgICAgaWYgKHRoaXMud3MgIT0gbnVsbCAmJiB0aGlzLndzLnJlYWR5U3RhdGUgPT0gV2ViU29ja2V0LkNPTk5FQ1RJTkcpIHJldHVybjtcbiAgICAgICAgaWYgKCF0aGlzLmlzQ29ubmVjdGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzTG9naW4gJiYgdGhpcy5vbkxvZ2luZWQgIT0gbnVsbCkgdGhpcy5vbkxvZ2luZWQoKTtcbiAgICB9XG5cbiAgICAgY29ubmVjdCgpIHtcbiAgICAgICAgc3VwZXIuY29ubmVjdChDb25maWdzLkFwcC5IT1NUX1RBSV9YSVVfTUlOSTIuaG9zdCwgQ29uZmlncy5BcHAuSE9TVF9UQUlfWElVX01JTkkyLnBvcnQpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbk9wZW4oZXY6IEV2ZW50KSB7XG4gICAgICAgIHN1cGVyLm9uT3Blbihldik7XG4gICAgICAgIHRoaXMuc2VuZChuZXcgY21kLlNlbmRMb2dpbihDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuKSk7XG4gICAgICAgICAvL1V0aWxzLkxvZyhcInR4MiBjb25uZWN0ZWRcIik7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uTWVzc2FnZShldjogTWVzc2FnZUV2ZW50KSB7XG4gICAgICAgIHZhciBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoZXYuZGF0YSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMubGlzdGVuZXJzW2ldO1xuICAgICAgICAgICAgaWYgKGxpc3RlbmVyLnRhcmdldCAmJiBsaXN0ZW5lci50YXJnZXQgaW5zdGFuY2VvZiBPYmplY3QgJiYgbGlzdGVuZXIudGFyZ2V0Lm5vZGUpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbnBhY2tldCA9IG5ldyBJblBhY2tldChkYXRhKTtcbiAgICAgICAgc3dpdGNoIChpbnBhY2tldC5nZXRDbWRJZCgpKSB7XG4gICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkxPR0lOOlxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2dpbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub25Mb2dpbmVkICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgIC8vVXRpbHMuTG9nKFwiTG9naW5lZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkxvZ2luZWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkTGlzdGVuZXIoY2FsbGJhY2s6IChkYXRhOiBVaW50OEFycmF5KSA9PiB2b2lkLCB0YXJnZXQ6IGNjLkNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKG5ldyBOZXR3b3JrTGlzdGVuZXIodGFyZ2V0LCBjYWxsYmFjaykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZW5kKHBhY2tldDogT3V0UGFja2V0KSB7XG4gICAgICAgIGZvciAodmFyIGIgPSBuZXcgSW50OEFycmF5KHBhY2tldC5fbGVuZ3RoKSwgYyA9IDA7IGMgPCBwYWNrZXQuX2xlbmd0aDsgYysrKVxuICAgICAgICAgICAgYltjXSA9IHBhY2tldC5fZGF0YVtjXTtcbiAgICAgICAgaWYgKHRoaXMud3MgIT0gbnVsbCAmJiB0aGlzLmlzQ29ubmVjdGVkKCkpXG4gICAgICAgICAgICB0aGlzLndzLnNlbmQoYi5idWZmZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZW5kQ2hlY2socGFja2V0OiBPdXRQYWNrZXQpIHtcbiAgICAgICAgdGhpcy5jaGVja0Nvbm5lY3QoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZW5kKHBhY2tldCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==