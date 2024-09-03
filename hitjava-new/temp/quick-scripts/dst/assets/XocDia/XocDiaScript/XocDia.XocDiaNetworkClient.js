
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/XocDia/XocDiaScript/XocDia.XocDiaNetworkClient.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '559afJVJ/VI9oOTOdKdpXFq', 'XocDia.XocDiaNetworkClient');
// XocDia/XocDiaScript/XocDia.XocDiaNetworkClient.ts

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
var XocDiaNetworkClient = /** @class */ (function (_super) {
    __extends(XocDiaNetworkClient, _super);
    function XocDiaNetworkClient() {
        var _this = _super.call(this) || this;
        _this.listeners = new Array();
        _this.isUseWSS = Configs_1.default.App.USE_WSS;
        return _this;
    }
    XocDiaNetworkClient.getInstance = function () {
        if (this.instance == null) {
            this.instance = new XocDiaNetworkClient();
        }
        return this.instance;
    };
    XocDiaNetworkClient.prototype.connect = function () {
        _super.prototype.connect.call(this, Configs_1.default.App.HOST_XOCDIA.host, Configs_1.default.App.HOST_XOCDIA.port);
    };
    XocDiaNetworkClient.prototype.onOpen = function (ev) {
        //  cc.log("onOpen XocDia");
        _super.prototype.onOpen.call(this, ev);
    };
    XocDiaNetworkClient.prototype.onMessage = function (ev) {
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
    XocDiaNetworkClient.prototype.addListener = function (callback, target) {
        this.listeners.push(new Network_NetworkListener_1.default(target, callback));
    };
    XocDiaNetworkClient.prototype.send = function (packet) {
        for (var b = new Int8Array(packet._length), c = 0; c < packet._length; c++)
            b[c] = packet._data[c];
        if (this.ws != null && this.isConnected())
            this.ws.send(b.buffer);
    };
    return XocDiaNetworkClient;
}(Network_NetworkClient_1.default));
exports.default = XocDiaNetworkClient;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWG9jRGlhXFxYb2NEaWFTY3JpcHRcXFhvY0RpYS5Yb2NEaWFOZXR3b3JrQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUNoRCx1R0FBMEY7QUFDMUYsMkdBQThGO0FBSTlGO0lBQWlELHVDQUFhO0lBWTFEO1FBQUEsWUFDSSxpQkFBTyxTQUVWO1FBWk8sZUFBUyxHQUEyQixJQUFJLEtBQUssRUFBbUIsQ0FBQztRQVdyRSxLQUFJLENBQUMsUUFBUSxHQUFHLGlCQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQzs7SUFDeEMsQ0FBQztJQVZhLCtCQUFXLEdBQXpCO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztTQUM3QztRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBT00scUNBQU8sR0FBZDtRQUNJLGlCQUFNLE9BQU8sWUFBQyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLGlCQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRVMsb0NBQU0sR0FBaEIsVUFBaUIsRUFBUztRQUN0Qiw0QkFBNEI7UUFDNUIsaUJBQU0sTUFBTSxZQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFUyx1Q0FBUyxHQUFuQixVQUFvQixFQUFnQjtRQUNoQyxJQUFJLElBQUksR0FBRyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLFlBQVksTUFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUM5RSxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzNCO2lCQUFNO2dCQUNILElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDNUIsQ0FBQyxFQUFFLENBQUM7YUFDUDtTQUNKO0lBQ0wsQ0FBQztJQUVNLHlDQUFXLEdBQWxCLFVBQW1CLFFBQW9DLEVBQUUsTUFBb0I7UUFDekUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQ0FBZSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFTSxrQ0FBSSxHQUFYLFVBQVksTUFBaUI7UUFDekIsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUU7WUFDdEUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQWpEQSxBQWlEQyxDQWpEZ0QsK0JBQWEsR0FpRDdEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBOZXR3b3JrQ2xpZW50IGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5OZXR3b3JrQ2xpZW50XCI7XG5pbXBvcnQgTmV0d29ya0xpc3RlbmVyIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5OZXR3b3JrTGlzdGVuZXJcIjtcbmltcG9ydCBPdXRQYWNrZXQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLk91dFBhY2tldFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFhvY0RpYU5ldHdvcmtDbGllbnQgZXh0ZW5kcyBOZXR3b3JrQ2xpZW50IHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogWG9jRGlhTmV0d29ya0NsaWVudDtcblxuICAgIHByaXZhdGUgbGlzdGVuZXJzOiBBcnJheTxOZXR3b3JrTGlzdGVuZXI+ID0gbmV3IEFycmF5PE5ldHdvcmtMaXN0ZW5lcj4oKTtcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogWG9jRGlhTmV0d29ya0NsaWVudCB7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgWG9jRGlhTmV0d29ya0NsaWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlzVXNlV1NTID0gQ29uZmlncy5BcHAuVVNFX1dTUztcbiAgICB9XG5cbiAgICBwdWJsaWMgY29ubmVjdCgpIHtcbiAgICAgICAgc3VwZXIuY29ubmVjdChDb25maWdzLkFwcC5IT1NUX1hPQ0RJQS5ob3N0LCBDb25maWdzLkFwcC5IT1NUX1hPQ0RJQS5wb3J0KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25PcGVuKGV2OiBFdmVudCkge1xuICAgICAgICAvLyAgY2MubG9nKFwib25PcGVuIFhvY0RpYVwiKTtcbiAgICAgICAgc3VwZXIub25PcGVuKGV2KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25NZXNzYWdlKGV2OiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBuZXcgVWludDhBcnJheShldi5kYXRhKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5saXN0ZW5lcnNbaV07XG4gICAgICAgICAgICBpZiAobGlzdGVuZXIudGFyZ2V0ICYmIGxpc3RlbmVyLnRhcmdldCBpbnN0YW5jZW9mIE9iamVjdCAmJiBsaXN0ZW5lci50YXJnZXQubm9kZSkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFkZExpc3RlbmVyKGNhbGxiYWNrOiAoZGF0YTogVWludDhBcnJheSkgPT4gdm9pZCwgdGFyZ2V0OiBjYy5Db21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChuZXcgTmV0d29ya0xpc3RlbmVyKHRhcmdldCwgY2FsbGJhY2spKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VuZChwYWNrZXQ6IE91dFBhY2tldCkge1xuICAgICAgICBmb3IgKHZhciBiID0gbmV3IEludDhBcnJheShwYWNrZXQuX2xlbmd0aCksIGMgPSAwOyBjIDwgcGFja2V0Ll9sZW5ndGg7IGMrKylcbiAgICAgICAgICAgIGJbY10gPSBwYWNrZXQuX2RhdGFbY107XG4gICAgICAgIGlmICh0aGlzLndzICE9IG51bGwgJiYgdGhpcy5pc0Nvbm5lY3RlZCgpKVxuICAgICAgICAgICAgdGhpcy53cy5zZW5kKGIuYnVmZmVyKTtcbiAgICB9XG59XG4iXX0=