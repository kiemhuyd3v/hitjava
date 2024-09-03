
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/networks/MiniGameNetworkClient2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXG5ldHdvcmtzXFxNaW5pR2FtZU5ldHdvcmtDbGllbnQyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFvRDtBQUVwRCxxRUFBd0Q7QUFDeEQsdURBQTBDO0FBQzFDLDZDQUFnQztBQUNoQyxxQ0FBZ0M7QUFDaEMsMkRBQXNEO0FBR3REO0lBQW9ELDBDQUFhO0lBZ0I3RDtRQUFBLFlBQ0ksaUJBQU8sU0FFVjtRQWhCTyxlQUFTLEdBQTJCLElBQUksS0FBSyxFQUFtQixDQUFDO1FBQ2pFLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsZUFBUyxHQUFlLElBQUksQ0FBQztRQUU3QixrQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBVzlCLEtBQUksQ0FBQyxRQUFRLEdBQUcsaUJBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDOztJQUN4QyxDQUFDO0lBVmEsa0NBQVcsR0FBekI7UUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxzQkFBc0IsRUFBRSxDQUFDO1NBQ2hEO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFPTSw2Q0FBWSxHQUFuQixVQUFvQixTQUE0QjtRQUE1QiwwQkFBQSxFQUFBLGdCQUE0QjtRQUMzQyxxQ0FBcUM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsSUFBSSxTQUFTLENBQUMsVUFBVTtZQUFFLE9BQU87UUFDMUUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUNyQixtREFBbUQ7WUFDbkQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFD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LFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUU7WUFDdEUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU0sMENBQVMsR0FBaEIsVUFBaUIsTUFBaUI7UUFBbEMsaUJBSUM7UUFIRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTSxxQ0FBSSxHQUFYO1FBQ0ksSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQzFELCtEQUErRDtTQUNsRTtRQUFBLENBQUM7SUFDTixDQUFDO0lBQ0wsNkJBQUM7QUFBRCxDQXRHQSxBQXNHQyxDQXRHbUQsK0JBQWEsR0FzR2hFIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5ldHdvcmtDbGllbnQgZnJvbSBcIi4vTmV0d29yay5OZXR3b3JrQ2xpZW50XCI7XG5pbXBvcnQgT3V0UGFja2V0IGZyb20gXCIuL05ldHdvcmsuT3V0UGFja2V0XCI7XG5pbXBvcnQgTmV0d29ya0xpc3RlbmVyIGZyb20gXCIuL05ldHdvcmsuTmV0d29ya0xpc3RlbmVyXCI7XG5pbXBvcnQgSW5QYWNrZXQgZnJvbSBcIi4vTmV0d29yay5JblBhY2tldFwiO1xuaW1wb3J0IGNtZCBmcm9tIFwiLi9OZXR3b3JrLkNtZFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vY29tbW9uL0FwcFwiO1xuaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uLy4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vY29tbW9uL1V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbmlHYW1lTmV0d29ya0NsaWVudDIgZXh0ZW5kcyBOZXR3b3JrQ2xpZW50IHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogTWluaUdhbWVOZXR3b3JrQ2xpZW50MjtcblxuICAgIHByaXZhdGUgbGlzdGVuZXJzOiBBcnJheTxOZXR3b3JrTGlzdGVuZXI+ID0gbmV3IEFycmF5PE5ldHdvcmtMaXN0ZW5lcj4oKTtcbiAgICBwcml2YXRlIGlzTG9naW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIG9uTG9naW5lZDogKCkgPT4gdm9pZCA9IG51bGw7XG5cbiAgICBwcml2YXRlIGludGVydmFsUGluZzogbnVtYmVyID0gLTE7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IE1pbmlHYW1lTmV0d29ya0NsaWVudDIge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IE1pbmlHYW1lTmV0d29ya0NsaWVudDIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pc1VzZVdTUyA9IENvbmZpZ3MuQXBwLlVTRV9XU1M7XG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrQ29ubmVjdChvbkxvZ2luZWQ6ICgpID0+IHZvaWQgPSBudWxsKSB7XG4gICAgICAgICAvL1V0aWxzLkxvZyhcImNoZWNrQ29ubmVjdCBNaW5pR2FtZVwiKTtcbiAgICAgICAgdGhpcy5vbkxvZ2luZWQgPSBvbkxvZ2luZWQ7XG4gICAgICAgIGlmICh0aGlzLndzICE9IG51bGwgJiYgdGhpcy53cy5yZWFkeVN0YXRlID09IFdlYlNvY2tldC5DT05ORUNUSU5HKSByZXR1cm47XG4gICAgICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZCgpKSB7XG4gICAgICAgICAgICAvLyBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoXCLEkGFuZyB2w6BvIGdhbWUuLi5cIik7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0xvZ2luICYmIHRoaXMub25Mb2dpbmVkICE9IG51bGwpIHRoaXMub25Mb2dpbmVkKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRXJyb3IoZXY6IEV2ZW50KSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAvL1V0aWxzLkxvZyhcIm9uRXJyb3IgbWluaWdhbWU6XCIgKyBKU09OLnN0cmluZ2lmeShldikpO1xuICAgIH1cblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHN1cGVyLmNvbm5lY3QoQ29uZmlncy5BcHAuSE9TVF9NSU5JR0FNRTIuaG9zdCwgQ29uZmlncy5BcHAuSE9TVF9NSU5JR0FNRTIucG9ydCk7XG4gICAgICAgICAvL1V0aWxzLkxvZyhcIlBvcnQgTWluaSBHYW1lOlwiKyBDb25maWdzLkFwcC5IT1NUX01JTklHQU1FMi5wb3J0KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25PcGVuKGV2OiBFdmVudCkge1xuICAgICAgICBzdXBlci5vbk9wZW4oZXYpO1xuICAgICAgICB0aGlzLnNlbmQobmV3IGNtZC5TZW5kTG9naW4oQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbikpO1xuICAgICAgICAgLy9VdGlscy5Mb2coXCJtaW5pZ2FtZSBjb25uZWN0ZWQ6XCIrQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbik7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxQaW5nID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5waW5nKCksIDEpO1xuICAgICAgICB0aGlzLnBpbmcoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25NZXNzYWdlKGV2OiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBuZXcgVWludDhBcnJheShldi5kYXRhKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5saXN0ZW5lcnNbaV07XG4gICAgICAgICAgICBpZiAobGlzdGVuZXIudGFyZ2V0ICYmIGxpc3RlbmVyLnRhcmdldCBpbnN0YW5jZW9mIE9iamVjdCAmJiBsaXN0ZW5lci50YXJnZXQubm9kZSkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlucGFja2V0ID0gbmV3IEluUGFja2V0KGRhdGEpO1xuICAgICAgICBzd2l0Y2ggKGlucGFja2V0LmdldENtZElkKCkpIHtcbiAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuTE9HSU46XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvZ2luID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vbkxvZ2luZWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgLy9VdGlscy5Mb2coXCJMb2dpbmVkXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTG9naW5lZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhZGRMaXN0ZW5lcihjYWxsYmFjazogKGRhdGE6IFVpbnQ4QXJyYXkpID0+IHZvaWQsIHRhcmdldDogY2MuQ29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobmV3IE5ldHdvcmtMaXN0ZW5lcih0YXJnZXQsIGNhbGxiYWNrKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uQ2xvc2UoZXY6IEV2ZW50KSB7XG4gICAgICAgICAvL1V0aWxzLkxvZyhcIm9uY2xvc2UgbWluaWdhbWVcIik7XG4gICAgICAgIHN1cGVyLm9uQ2xvc2UoZXYpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZW5kKHBhY2tldDogT3V0UGFja2V0KSB7XG4gICAgICAgIGZvciAodmFyIGIgPSBuZXcgSW50OEFycmF5KHBhY2tldC5fbGVuZ3RoKSwgYyA9IDA7IGMgPCBwYWNrZXQuX2xlbmd0aDsgYysrKVxuICAgICAgICAgICAgYltjXSA9IHBhY2tldC5fZGF0YVtjXTtcbiAgICAgICAgaWYgKHRoaXMud3MgIT0gbnVsbCAmJiB0aGlzLmlzQ29ubmVjdGVkKCkpXG4gICAgICAgICAgICB0aGlzLndzLnNlbmQoYi5idWZmZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZW5kQ2hlY2socGFja2V0OiBPdXRQYWNrZXQpIHtcbiAgICAgICAgdGhpcy5jaGVja0Nvbm5lY3QoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZW5kKHBhY2tldCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgcGluZygpIHtcbiAgICAgICAgaWYgKHRoaXMud3MgIT0gbnVsbCAmJiB0aGlzLndzLnJlYWR5U3RhdGUgIT09IFdlYlNvY2tldC5PUEVOKSB7XG4gICAgICAgICAgICAvLyAgLy9VdGlscy5Mb2coXCJXZWJTb2NrZXQgbWluaWdhbWUgaW5zdGFuY2Ugd2Fzbid0IHJlYWR5Li4uXCIpO1xuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==