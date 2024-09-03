
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lieng/LiengScript/Lieng.NetworkClient.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8b705mH0hlGZ5A6/fYB7Vwj', 'Lieng.NetworkClient');
// Lieng/LiengScript/Lieng.NetworkClient.ts

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
var LiengNetworkClient = /** @class */ (function (_super) {
    __extends(LiengNetworkClient, _super);
    function LiengNetworkClient() {
        var _this = _super.call(this) || this;
        _this.listeners = new Array();
        _this.isUseWSS = Configs_1.default.App.USE_WSS;
        return _this;
    }
    LiengNetworkClient.getInstance = function () {
        if (this.instance == null) {
            this.instance = new LiengNetworkClient();
        }
        return this.instance;
    };
    LiengNetworkClient.prototype.connect = function () {
        _super.prototype.connect.call(this, Configs_1.default.App.HOST_LIENG.host, Configs_1.default.App.HOST_LIENG.port);
    };
    LiengNetworkClient.prototype.onOpen = function (ev) {
        _super.prototype.onOpen.call(this, ev);
    };
    LiengNetworkClient.prototype.onMessage = function (ev) {
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
    LiengNetworkClient.prototype.addListener = function (callback, target) {
        this.listeners.push(new Network_NetworkListener_1.default(target, callback));
    };
    LiengNetworkClient.prototype.send = function (packet) {
        for (var b = new Int8Array(packet._length), c = 0; c < packet._length; c++)
            b[c] = packet._data[c];
        if (this.ws != null && this.isConnected())
            this.ws.send(b.buffer);
    };
    return LiengNetworkClient;
}(Network_NetworkClient_1.default));
exports.default = LiengNetworkClient;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTGllbmdcXExpZW5nU2NyaXB0XFxMaWVuZy5OZXR3b3JrQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUVoRCx1R0FBMEY7QUFDMUYsMkdBQThGO0FBRzlGO0lBQWdELHNDQUFhO0lBWXpEO1FBQUEsWUFDSSxpQkFBTyxTQUVWO1FBWk8sZUFBUyxHQUEyQixJQUFJLEtBQUssRUFBbUIsQ0FBQztRQVdyRSxLQUFJLENBQUMsUUFBUSxHQUFHLGlCQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQzs7SUFDeEMsQ0FBQztJQVZhLDhCQUFXLEdBQXpCO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztTQUM1QztRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBT00sb0NBQU8sR0FBZDtRQUNJLGlCQUFNLE9BQU8sWUFBQyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGlCQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRVMsbUNBQU0sR0FBaEIsVUFBaUIsRUFBUztRQUN0QixpQkFBTSxNQUFNLFlBQUMsRUFBRSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVTLHNDQUFTLEdBQW5CLFVBQW9CLEVBQWdCO1FBQ2hDLElBQUksSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sWUFBWSxNQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQzlFLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0I7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixDQUFDLEVBQUUsQ0FBQzthQUNQO1NBQ0o7SUFDTCxDQUFDO0lBRU0sd0NBQVcsR0FBbEIsVUFBbUIsUUFBb0MsRUFBRSxNQUFvQjtRQUN6RSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLGlDQUFlLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVNLGlDQUFJLEdBQVgsVUFBWSxNQUFpQjtRQUN6QixLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRTtZQUN0RSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDTCx5QkFBQztBQUFELENBaERBLEFBZ0RDLENBaEQrQywrQkFBYSxHQWdENUQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0FwcFwiO1xyXG5pbXBvcnQgTmV0d29ya0NsaWVudCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL05ldHdvcmsuTmV0d29ya0NsaWVudFwiO1xyXG5pbXBvcnQgTmV0d29ya0xpc3RlbmVyIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5OZXR3b3JrTGlzdGVuZXJcIjtcclxuaW1wb3J0IE91dFBhY2tldCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL05ldHdvcmsuT3V0UGFja2V0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaWVuZ05ldHdvcmtDbGllbnQgZXh0ZW5kcyBOZXR3b3JrQ2xpZW50IHtcclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBMaWVuZ05ldHdvcmtDbGllbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBsaXN0ZW5lcnM6IEFycmF5PE5ldHdvcmtMaXN0ZW5lcj4gPSBuZXcgQXJyYXk8TmV0d29ya0xpc3RlbmVyPigpO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogTGllbmdOZXR3b3JrQ2xpZW50IHtcclxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTGllbmdOZXR3b3JrQ2xpZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5pc1VzZVdTUyA9IENvbmZpZ3MuQXBwLlVTRV9XU1M7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgc3VwZXIuY29ubmVjdChDb25maWdzLkFwcC5IT1NUX0xJRU5HLmhvc3QsIENvbmZpZ3MuQXBwLkhPU1RfTElFTkcucG9ydCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uT3BlbihldjogRXZlbnQpIHtcclxuICAgICAgICBzdXBlci5vbk9wZW4oZXYpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbk1lc3NhZ2UoZXY6IE1lc3NhZ2VFdmVudCkge1xyXG4gICAgICAgIHZhciBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoZXYuZGF0YSk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmxpc3RlbmVyc1tpXTtcclxuICAgICAgICAgICAgaWYgKGxpc3RlbmVyLnRhcmdldCAmJiBsaXN0ZW5lci50YXJnZXQgaW5zdGFuY2VvZiBPYmplY3QgJiYgbGlzdGVuZXIudGFyZ2V0Lm5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRMaXN0ZW5lcihjYWxsYmFjazogKGRhdGE6IFVpbnQ4QXJyYXkpID0+IHZvaWQsIHRhcmdldDogY2MuQ29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChuZXcgTmV0d29ya0xpc3RlbmVyKHRhcmdldCwgY2FsbGJhY2spKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VuZChwYWNrZXQ6IE91dFBhY2tldCkge1xyXG4gICAgICAgIGZvciAodmFyIGIgPSBuZXcgSW50OEFycmF5KHBhY2tldC5fbGVuZ3RoKSwgYyA9IDA7IGMgPCBwYWNrZXQuX2xlbmd0aDsgYysrKVxyXG4gICAgICAgICAgICBiW2NdID0gcGFja2V0Ll9kYXRhW2NdO1xyXG4gICAgICAgIGlmICh0aGlzLndzICE9IG51bGwgJiYgdGhpcy5pc0Nvbm5lY3RlZCgpKVxyXG4gICAgICAgICAgICB0aGlzLndzLnNlbmQoYi5idWZmZXIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==