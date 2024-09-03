
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/networks/SlotNetworkClient.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fa6a5HiidJFNohMYqtMHOjk', 'SlotNetworkClient');
// Lobby/LobbyScript/Script/networks/SlotNetworkClient.ts

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
var Network_Cmd_1 = require("./Network.Cmd");
var Network_InPacket_1 = require("./Network.InPacket");
var App_1 = require("../common/App");
var Configs_1 = require("../../../../Loading/src/Configs");
var SlotNetworkClient = /** @class */ (function (_super) {
    __extends(SlotNetworkClient, _super);
    function SlotNetworkClient() {
        var _this = _super.call(this) || this;
        _this.listeners = new Array();
        _this.isLogin = false;
        _this.onLogined = null; // callback, duoc goi khi login thanh cong
        _this.isUseWSS = Configs_1.default.App.USE_WSS;
        return _this;
    }
    SlotNetworkClient.getInstance = function () {
        if (this.instance == null) {
            this.instance = new SlotNetworkClient();
        }
        return this.instance;
    };
    SlotNetworkClient.prototype.checkConnect = function (onLogined) {
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
    SlotNetworkClient.prototype.connect = function () {
        _super.prototype.connect.call(this, Configs_1.default.App.HOST_SLOT.host, Configs_1.default.App.HOST_SLOT.port);
    };
    SlotNetworkClient.prototype.onError = function (ev) {
        App_1.default.instance.showLoading(false);
        //Utils.Log("onError:"+JSON.stringify(ev));
    };
    SlotNetworkClient.prototype.onOpen = function (ev) {
        _super.prototype.onOpen.call(this, ev);
        this.send(new Network_Cmd_1.default.SendLogin(Configs_1.default.Login.Nickname, Configs_1.default.Login.AccessToken));
        //Utils.Log("slot connected");
    };
    SlotNetworkClient.prototype.onMessage = function (ev) {
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
    SlotNetworkClient.prototype.addListener = function (callback, target) {
        this.listeners.push(new Network_NetworkListener_1.default(target, callback));
    };
    SlotNetworkClient.prototype.send = function (packet) {
        for (var b = new Int8Array(packet._length), c = 0; c < packet._length; c++)
            b[c] = packet._data[c];
        if (this.ws != null && this.isConnected())
            this.ws.send(b.buffer);
    };
    SlotNetworkClient.prototype.sendCheck = function (packet) {
        var _this = this;
        this.checkConnect(function () {
            _this.send(packet);
        });
    };
    return SlotNetworkClient;
}(Network_NetworkClient_1.default));
exports.default = SlotNetworkClient;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXG5ldHdvcmtzXFxTbG90TmV0d29ya0NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBb0Q7QUFFcEQscUVBQXdEO0FBQ3hELDZDQUFnQztBQUNoQyx1REFBMEM7QUFDMUMscUNBQWdDO0FBQ2hDLDJEQUFzRDtBQUd0RDtJQUErQyxxQ0FBYTtJQWN4RDtRQUFBLFlBQ0ksaUJBQU8sU0FFVjtRQWRPLGVBQVMsR0FBMkIsSUFBSSxLQUFLLEVBQW1CLENBQUM7UUFDakUsYUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixlQUFTLEdBQWUsSUFBSSxDQUFDLENBQUMsMENBQTBDO1FBVzVFLEtBQUksQ0FBQyxRQUFRLEdBQUcsaUJBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDOztJQUN4QyxDQUFDO0lBVmEsNkJBQVcsR0FBekI7UUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1NBQzNDO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFPTSx3Q0FBWSxHQUFuQixVQUFvQixTQUFxQjtRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxJQUFJLFNBQVMsQ0FBQyxVQUFVO1lBQUUsT0FBTztRQUMxRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLE9BQU87U0FDVjtRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUk7WUFBRSxJ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QUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FuRkEsQUFtRkMsQ0FuRjhDLCtCQUFhLEdBbUYzRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXR3b3JrQ2xpZW50IGZyb20gXCIuL05ldHdvcmsuTmV0d29ya0NsaWVudFwiO1xuaW1wb3J0IE91dFBhY2tldCBmcm9tIFwiLi9OZXR3b3JrLk91dFBhY2tldFwiO1xuaW1wb3J0IE5ldHdvcmtMaXN0ZW5lciBmcm9tIFwiLi9OZXR3b3JrLk5ldHdvcmtMaXN0ZW5lclwiO1xuaW1wb3J0IGNtZCBmcm9tIFwiLi9OZXR3b3JrLkNtZFwiO1xuaW1wb3J0IEluUGFja2V0IGZyb20gXCIuL05ldHdvcmsuSW5QYWNrZXRcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uL2NvbW1vbi9BcHBcIjtcbmltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi8uLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL2NvbW1vbi9VdGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbG90TmV0d29ya0NsaWVudCBleHRlbmRzIE5ldHdvcmtDbGllbnQge1xuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBTbG90TmV0d29ya0NsaWVudDtcblxuICAgIHByaXZhdGUgbGlzdGVuZXJzOiBBcnJheTxOZXR3b3JrTGlzdGVuZXI+ID0gbmV3IEFycmF5PE5ldHdvcmtMaXN0ZW5lcj4oKTtcbiAgICBwcml2YXRlIGlzTG9naW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIG9uTG9naW5lZDogKCkgPT4gdm9pZCA9IG51bGw7IC8vIGNhbGxiYWNrLCBkdW9jIGdvaSBraGkgbG9naW4gdGhhbmggY29uZ1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBTbG90TmV0d29ya0NsaWVudCB7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU2xvdE5ldHdvcmtDbGllbnQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pc1VzZVdTUyA9IENvbmZpZ3MuQXBwLlVTRV9XU1M7XG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrQ29ubmVjdChvbkxvZ2luZWQ6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5vbkxvZ2luZWQgPSBvbkxvZ2luZWQ7XG4gICAgICAgIGlmICh0aGlzLndzICE9IG51bGwgJiYgdGhpcy53cy5yZWFkeVN0YXRlID09IFdlYlNvY2tldC5DT05ORUNUSU5HKSByZXR1cm47XG4gICAgICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0xvZ2luICYmIHRoaXMub25Mb2dpbmVkICE9IG51bGwpIHRoaXMub25Mb2dpbmVkKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbm5lY3QoKSB7XG4gICAgICAgIHN1cGVyLmNvbm5lY3QoQ29uZmlncy5BcHAuSE9TVF9TTE9ULmhvc3QsIENvbmZpZ3MuQXBwLkhPU1RfU0xPVC5wb3J0KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25FcnJvcihldjogRXZlbnQpIHtcbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgIC8vVXRpbHMuTG9nKFwib25FcnJvcjpcIitKU09OLnN0cmluZ2lmeShldikpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbk9wZW4oZXY6IEV2ZW50KSB7XG4gICAgICAgIHN1cGVyLm9uT3Blbihldik7XG4gICAgICAgIHRoaXMuc2VuZChuZXcgY21kLlNlbmRMb2dpbihDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuKSk7XG4gICAgICAgICAvL1V0aWxzLkxvZyhcInNsb3QgY29ubmVjdGVkXCIpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbk1lc3NhZ2UoZXY6IE1lc3NhZ2VFdmVudCkge1xuICAgICAgICB2YXIgZGF0YSA9IG5ldyBVaW50OEFycmF5KGV2LmRhdGEpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmxpc3RlbmVyc1tpXTtcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lci50YXJnZXQgJiYgbGlzdGVuZXIudGFyZ2V0IGluc3RhbmNlb2YgT2JqZWN0ICYmIGxpc3RlbmVyLnRhcmdldC5ub2RlKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaW5wYWNrZXQgPSBuZXcgSW5QYWNrZXQoZGF0YSk7XG4gICAgICAgIHN3aXRjaCAoaW5wYWNrZXQuZ2V0Q21kSWQoKSkge1xuICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5MT0dJTjpcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9naW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9uTG9naW5lZCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Mb2dpbmVkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFkZExpc3RlbmVyKGNhbGxiYWNrOiAoZGF0YTogVWludDhBcnJheSkgPT4gdm9pZCwgdGFyZ2V0OiBjYy5Db21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChuZXcgTmV0d29ya0xpc3RlbmVyKHRhcmdldCwgY2FsbGJhY2spKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VuZChwYWNrZXQ6IE91dFBhY2tldCkge1xuICAgICAgICBmb3IgKHZhciBiID0gbmV3IEludDhBcnJheShwYWNrZXQuX2xlbmd0aCksIGMgPSAwOyBjIDwgcGFja2V0Ll9sZW5ndGg7IGMrKylcbiAgICAgICAgICAgIGJbY10gPSBwYWNrZXQuX2RhdGFbY107XG4gICAgICAgIGlmICh0aGlzLndzICE9IG51bGwgJiYgdGhpcy5pc0Nvbm5lY3RlZCgpKVxuICAgICAgICAgICAgdGhpcy53cy5zZW5kKGIuYnVmZmVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VuZENoZWNrKHBhY2tldDogT3V0UGFja2V0KSB7XG4gICAgICAgIHRoaXMuY2hlY2tDb25uZWN0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VuZChwYWNrZXQpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=