
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/networks/CardGameNetworkClient.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXG5ldHdvcmtzXFxDYXJkR2FtZU5ldHdvcmtDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQW9EO0FBRXBELHFFQUF3RDtBQUN4RCx1REFBMEM7QUFDMUMsNkNBQWdDO0FBQ2hDLDJEQUFzRDtBQUV0RDtJQUFtRCx5Q0FBYTtJQWM1RDtRQUFBLFlBQ0ksaUJBQU8sU0FFVjtRQWRELGVBQVMsR0FBMkIsSUFBSSxLQUFLLEVBQW1CLENBQUM7UUFDakUsYUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixlQUFTLEdBQWUsSUFBSSxDQUFDO1FBV3pCLEtBQUksQ0FBQyxRQUFRLEdBQUcsaUJBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDOztJQUN4QyxDQUFDO0lBVmEsaUNBQVcsR0FBekI7UUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxxQkFBcUIsRUFBRSxDQUFDO1NBQy9DO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFPTSw0Q0FBWSxHQUFuQixVQUFvQixTQUFxQjtRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxJQUFJLFNBQVMsQ0FBQyxVQUFVO1lBQUUsT0FBTztRQUMxRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJO1lBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2pFLENBQUM7SUFFRCx3Q0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELHNDQUFNLEdBQU4sVUFBTyxFQUFTO1FBQ1osaUJBQU0sTUFBTSxZQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxxQkFBRyxDQUFDLFNBQVMsQ0FBQyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsaUJBQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQseUNBQVMsR0FBVCxVQUFVLEVBQWdCO1FBQ3RCLElBQUksSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sWUFBWSxNQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQzlFLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0I7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixDQUFDLEVBQUUsQ0FBQzthQUNQO1NBQ0o7UUFFRCxJQUFJLFFBQVEsR0FBRyxJQUFJLDBCQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsUUFBUSxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDekIsS0FBSyxxQkFBRyxDQUFDLElBQUksQ0FBQyxLQUFLO2dCQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO29CQUN4QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7aUJBQ3BCO2dCQUNELE1BQU07U0FDYjtJQUNMLENBQUM7SUFFTSwyQ0FBVyxHQUFsQixVQUFtQixRQUFvQyxFQUFFLE1BQW9CO1FBQ3pFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksaUNBQWUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRU0sb0NBQUksR0FBWCxVQUFZLE1BQWlCO1FBQ3pCLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFO1lBQ3RFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVNLHlDQUFTLEdBQWhCLFVBQWlCLE1BQWlCO1FBQWxDLGlCQUlDO1FBSEcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsNEJBQUM7QUFBRCxDQTVFQSxBQTRFQyxDQTVFa0QsK0JBQWEsR0E0RS9EIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5ldHdvcmtDbGllbnQgZnJvbSBcIi4vTmV0d29yay5OZXR3b3JrQ2xpZW50XCI7XG5pbXBvcnQgT3V0UGFja2V0IGZyb20gXCIuL05ldHdvcmsuT3V0UGFja2V0XCI7XG5pbXBvcnQgTmV0d29ya0xpc3RlbmVyIGZyb20gXCIuL05ldHdvcmsuTmV0d29ya0xpc3RlbmVyXCI7XG5pbXBvcnQgSW5QYWNrZXQgZnJvbSBcIi4vTmV0d29yay5JblBhY2tldFwiO1xuaW1wb3J0IGNtZCBmcm9tIFwiLi9OZXR3b3JrLkNtZFwiO1xuaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uLy4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZEdhbWVOZXR3b3JrQ2xpZW50IGV4dGVuZHMgTmV0d29ya0NsaWVudCB7XG4gICAgc3RhdGljIGluc3RhbmNlOiBDYXJkR2FtZU5ldHdvcmtDbGllbnQ7XG5cbiAgICBsaXN0ZW5lcnM6IEFycmF5PE5ldHdvcmtMaXN0ZW5lcj4gPSBuZXcgQXJyYXk8TmV0d29ya0xpc3RlbmVyPigpO1xuICAgIGlzTG9naW4gPSBmYWxzZTtcbiAgICBvbkxvZ2luZWQ6ICgpID0+IHZvaWQgPSBudWxsO1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBDYXJkR2FtZU5ldHdvcmtDbGllbnQge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IENhcmRHYW1lTmV0d29ya0NsaWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlzVXNlV1NTID0gQ29uZmlncy5BcHAuVVNFX1dTUztcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hlY2tDb25uZWN0KG9uTG9naW5lZDogKCkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLm9uTG9naW5lZCA9IG9uTG9naW5lZDtcbiAgICAgICAgaWYgKHRoaXMud3MgIT0gbnVsbCAmJiB0aGlzLndzLnJlYWR5U3RhdGUgPT0gV2ViU29ja2V0LkNPTk5FQ1RJTkcpIHJldHVybjtcbiAgICAgICAgaWYgKCF0aGlzLmlzQ29ubmVjdGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0xvZ2luICYmIHRoaXMub25Mb2dpbmVkICE9IG51bGwpIHRoaXMub25Mb2dpbmVkKCk7XG4gICAgfVxuXG4gICAgX2Nvbm5lY3QoKSB7XG4gICAgfVxuXG4gICAgb25PcGVuKGV2OiBFdmVudCkge1xuICAgICAgICBzdXBlci5vbk9wZW4oZXYpO1xuICAgICAgICB0aGlzLnNlbmQobmV3IGNtZC5TZW5kTG9naW4oQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbikpO1xuICAgIH1cblxuICAgIG9uTWVzc2FnZShldjogTWVzc2FnZUV2ZW50KSB7XG4gICAgICAgIHZhciBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoZXYuZGF0YSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMubGlzdGVuZXJzW2ldO1xuICAgICAgICAgICAgaWYgKGxpc3RlbmVyLnRhcmdldCAmJiBsaXN0ZW5lci50YXJnZXQgaW5zdGFuY2VvZiBPYmplY3QgJiYgbGlzdGVuZXIudGFyZ2V0Lm5vZGUpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbnBhY2tldCA9IG5ldyBJblBhY2tldChkYXRhKTtcbiAgICAgICAgc3dpdGNoIChpbnBhY2tldC5nZXRDbWRJZCgpKSB7XG4gICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkxPR0lOOlxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2dpbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub25Mb2dpbmVkICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkxvZ2luZWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkTGlzdGVuZXIoY2FsbGJhY2s6IChkYXRhOiBVaW50OEFycmF5KSA9PiB2b2lkLCB0YXJnZXQ6IGNjLkNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKG5ldyBOZXR3b3JrTGlzdGVuZXIodGFyZ2V0LCBjYWxsYmFjaykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZW5kKHBhY2tldDogT3V0UGFja2V0KSB7XG4gICAgICAgIGZvciAodmFyIGIgPSBuZXcgSW50OEFycmF5KHBhY2tldC5fbGVuZ3RoKSwgYyA9IDA7IGMgPCBwYWNrZXQuX2xlbmd0aDsgYysrKVxuICAgICAgICAgICAgYltjXSA9IHBhY2tldC5fZGF0YVtjXTtcbiAgICAgICAgaWYgKHRoaXMud3MgIT0gbnVsbCAmJiB0aGlzLmlzQ29ubmVjdGVkKCkpXG4gICAgICAgICAgICB0aGlzLndzLnNlbmQoYi5idWZmZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZW5kQ2hlY2socGFja2V0OiBPdXRQYWNrZXQpIHtcbiAgICAgICAgdGhpcy5jaGVja0Nvbm5lY3QoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZW5kKHBhY2tldCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=