
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BaiCao/BaiCaoScript/BaiCao.NetworkClient.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49497VFSR9CKbNn0Zli/4Jo', 'BaiCao.NetworkClient');
// BaiCao/BaiCaoScript/BaiCao.NetworkClient.ts

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
var BaiCaoNetworkClient = /** @class */ (function (_super) {
    __extends(BaiCaoNetworkClient, _super);
    function BaiCaoNetworkClient() {
        var _this = _super.call(this) || this;
        _this.listeners = new Array();
        _this.isUseWSS = Configs_1.default.App.USE_WSS;
        return _this;
    }
    BaiCaoNetworkClient.getInstance = function () {
        if (this.instance == null) {
            this.instance = new BaiCaoNetworkClient();
        }
        return this.instance;
    };
    BaiCaoNetworkClient.prototype.connect = function () {
        _super.prototype.connect.call(this, Configs_1.default.App.HOST_BAICAO.host, Configs_1.default.App.HOST_BAICAO.port);
    };
    BaiCaoNetworkClient.prototype.onOpen = function (ev) {
        _super.prototype.onOpen.call(this, ev);
    };
    BaiCaoNetworkClient.prototype.onMessage = function (ev) {
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
    BaiCaoNetworkClient.prototype.addListener = function (callback, target) {
        this.listeners.push(new Network_NetworkListener_1.default(target, callback));
    };
    BaiCaoNetworkClient.prototype.send = function (packet) {
        for (var b = new Int8Array(packet._length), c = 0; c < packet._length; c++)
            b[c] = packet._data[c];
        if (this.ws != null && this.isConnected())
            this.ws.send(b.buffer);
    };
    return BaiCaoNetworkClient;
}(Network_NetworkClient_1.default));
exports.default = BaiCaoNetworkClient;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQmFpQ2FvXFxCYWlDYW9TY3JpcHRcXEJhaUNhby5OZXR3b3JrQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUVoRCx1R0FBMEY7QUFDMUYsMkdBQThGO0FBRzlGO0lBQWlELHVDQUFhO0lBWTFEO1FBQUEsWUFDSSxpQkFBTyxTQUVWO1FBWk8sZUFBUyxHQUEyQixJQUFJLEtBQUssRUFBbUIsQ0FBQztRQVdyRSxLQUFJLENBQUMsUUFBUSxHQUFHLGlCQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQzs7SUFDeEMsQ0FBQztJQVZhLCtCQUFXLEdBQXpCO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztTQUM3QztRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBT00scUNBQU8sR0FBZDtRQUNJLGlCQUFNLE9BQU8sWUFBQyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLGlCQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRVMsb0NBQU0sR0FBaEIsVUFBaUIsRUFBUztRQUN0QixpQkFBTSxNQUFNLFlBQUMsRUFBRSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVTLHVDQUFTLEdBQW5CLFVBQW9CLEVBQWdCO1FBQ2hDLElBQUksSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sWUFBWSxNQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQzlFLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0I7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixDQUFDLEVBQUUsQ0FBQzthQUNQO1NBQ0o7SUFDTCxDQUFDO0lBRU0seUNBQVcsR0FBbEIsVUFBbUIsUUFBb0MsRUFBRSxNQUFvQjtRQUN6RSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLGlDQUFlLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVNLGtDQUFJLEdBQVgsVUFBWSxNQUFpQjtRQUN6QixLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRTtZQUN0RSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDTCwwQkFBQztBQUFELENBaERBLEFBZ0RDLENBaERnRCwrQkFBYSxHQWdEN0QiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBOZXR3b3JrQ2xpZW50IGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5OZXR3b3JrQ2xpZW50XCI7XG5pbXBvcnQgTmV0d29ya0xpc3RlbmVyIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5OZXR3b3JrTGlzdGVuZXJcIjtcbmltcG9ydCBPdXRQYWNrZXQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLk91dFBhY2tldFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWlDYW9OZXR3b3JrQ2xpZW50IGV4dGVuZHMgTmV0d29ya0NsaWVudCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEJhaUNhb05ldHdvcmtDbGllbnQ7XG5cbiAgICBwcml2YXRlIGxpc3RlbmVyczogQXJyYXk8TmV0d29ya0xpc3RlbmVyPiA9IG5ldyBBcnJheTxOZXR3b3JrTGlzdGVuZXI+KCk7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IEJhaUNhb05ldHdvcmtDbGllbnQge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IEJhaUNhb05ldHdvcmtDbGllbnQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pc1VzZVdTUyA9IENvbmZpZ3MuQXBwLlVTRV9XU1M7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbm5lY3QoKSB7XG4gICAgICAgIHN1cGVyLmNvbm5lY3QoQ29uZmlncy5BcHAuSE9TVF9CQUlDQU8uaG9zdCwgQ29uZmlncy5BcHAuSE9TVF9CQUlDQU8ucG9ydCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uT3BlbihldjogRXZlbnQpIHtcbiAgICAgICAgc3VwZXIub25PcGVuKGV2KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25NZXNzYWdlKGV2OiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBuZXcgVWludDhBcnJheShldi5kYXRhKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5saXN0ZW5lcnNbaV07XG4gICAgICAgICAgICBpZiAobGlzdGVuZXIudGFyZ2V0ICYmIGxpc3RlbmVyLnRhcmdldCBpbnN0YW5jZW9mIE9iamVjdCAmJiBsaXN0ZW5lci50YXJnZXQubm9kZSkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFkZExpc3RlbmVyKGNhbGxiYWNrOiAoZGF0YTogVWludDhBcnJheSkgPT4gdm9pZCwgdGFyZ2V0OiBjYy5Db21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChuZXcgTmV0d29ya0xpc3RlbmVyKHRhcmdldCwgY2FsbGJhY2spKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VuZChwYWNrZXQ6IE91dFBhY2tldCkge1xuICAgICAgICBmb3IgKHZhciBiID0gbmV3IEludDhBcnJheShwYWNrZXQuX2xlbmd0aCksIGMgPSAwOyBjIDwgcGFja2V0Ll9sZW5ndGg7IGMrKylcbiAgICAgICAgICAgIGJbY10gPSBwYWNrZXQuX2RhdGFbY107XG4gICAgICAgIGlmICh0aGlzLndzICE9IG51bGwgJiYgdGhpcy5pc0Nvbm5lY3RlZCgpKVxuICAgICAgICAgICAgdGhpcy53cy5zZW5kKGIuYnVmZmVyKTtcbiAgICB9XG59XG4iXX0=