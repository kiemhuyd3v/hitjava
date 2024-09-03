
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Poker/PokerScript/Poker.NetworkClient.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUG9rZXJcXFBva2VyU2NyaXB0XFxQb2tlci5OZXR3b3JrQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUNoRCx1R0FBMEY7QUFDMUYsMkdBQThGO0FBRzlGO0lBQWdELHNDQUFhO0lBWXpEO1FBQUEsWUFDSSxpQkFBTyxTQUVWO1FBWk8sZUFBUyxHQUEyQixJQUFJLEtBQUssRUFBbUIsQ0FBQztRQVdyRSxLQUFJLENBQUMsUUFBUSxHQUFHLGlCQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQzs7SUFDeEMsQ0FBQztJQVZhLDhCQUFXLEdBQXpCO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztTQUM1QztRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBT00sb0NBQU8sR0FBZDtRQUNJLGlCQUFNLE9BQU8sWUFBQyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGlCQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRVMsbUNBQU0sR0FBaEIsVUFBaUIsRUFBUztRQUN0QixpQkFBTSxNQUFNLFlBQUMsRUFBRSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVTLHNDQUFTLEdBQW5CLFVBQW9CLEVBQWdCO1FBQ2hDLElBQUksSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sWUFBWSxNQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQzlFLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0I7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixDQUFDLEVBQUUsQ0FBQzthQUNQO1NBQ0o7SUFDTCxDQUFDO0lBRU0sd0NBQVcsR0FBbEIsVUFBbUIsUUFBb0MsRUFBRSxNQUFvQjtRQUN6RSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLGlDQUFlLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVNLGlDQUFJLEdBQVgsVUFBWSxNQUFpQjtRQUN6QixLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRTtZQUN0RSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDTCx5QkFBQztBQUFELENBaERBLEFBZ0RDLENBaEQrQywrQkFBYSxHQWdENUQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IE5ldHdvcmtDbGllbnQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLk5ldHdvcmtDbGllbnRcIjtcbmltcG9ydCBOZXR3b3JrTGlzdGVuZXIgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLk5ldHdvcmtMaXN0ZW5lclwiO1xuaW1wb3J0IE91dFBhY2tldCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL05ldHdvcmsuT3V0UGFja2V0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBva2VyTmV0d29ya0NsaWVudCBleHRlbmRzIE5ldHdvcmtDbGllbnQge1xuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBQb2tlck5ldHdvcmtDbGllbnQ7XG5cbiAgICBwcml2YXRlIGxpc3RlbmVyczogQXJyYXk8TmV0d29ya0xpc3RlbmVyPiA9IG5ldyBBcnJheTxOZXR3b3JrTGlzdGVuZXI+KCk7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IFBva2VyTmV0d29ya0NsaWVudCB7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgUG9rZXJOZXR3b3JrQ2xpZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaXNVc2VXU1MgPSBDb25maWdzLkFwcC5VU0VfV1NTO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb25uZWN0KCkge1xuICAgICAgICBzdXBlci5jb25uZWN0KENvbmZpZ3MuQXBwLkhPU1RfUE9LRVIuaG9zdCwgQ29uZmlncy5BcHAuSE9TVF9QT0tFUi5wb3J0KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25PcGVuKGV2OiBFdmVudCkge1xuICAgICAgICBzdXBlci5vbk9wZW4oZXYpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbk1lc3NhZ2UoZXY6IE1lc3NhZ2VFdmVudCkge1xuICAgICAgICB2YXIgZGF0YSA9IG5ldyBVaW50OEFycmF5KGV2LmRhdGEpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmxpc3RlbmVyc1tpXTtcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lci50YXJnZXQgJiYgbGlzdGVuZXIudGFyZ2V0IGluc3RhbmNlb2YgT2JqZWN0ICYmIGxpc3RlbmVyLnRhcmdldC5ub2RlKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkTGlzdGVuZXIoY2FsbGJhY2s6IChkYXRhOiBVaW50OEFycmF5KSA9PiB2b2lkLCB0YXJnZXQ6IGNjLkNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKG5ldyBOZXR3b3JrTGlzdGVuZXIodGFyZ2V0LCBjYWxsYmFjaykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZW5kKHBhY2tldDogT3V0UGFja2V0KSB7XG4gICAgICAgIGZvciAodmFyIGIgPSBuZXcgSW50OEFycmF5KHBhY2tldC5fbGVuZ3RoKSwgYyA9IDA7IGMgPCBwYWNrZXQuX2xlbmd0aDsgYysrKVxuICAgICAgICAgICAgYltjXSA9IHBhY2tldC5fZGF0YVtjXTtcbiAgICAgICAgaWYgKHRoaXMud3MgIT0gbnVsbCAmJiB0aGlzLmlzQ29ubmVjdGVkKCkpXG4gICAgICAgICAgICB0aGlzLndzLnNlbmQoYi5idWZmZXIpO1xuICAgIH1cbn1cbiJdfQ==