
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/MauBinh/MauBinhScript/MauBinh.NetworkClient.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef5e6R1nFhHvZngIpEqlvkV', 'MauBinh.NetworkClient');
// MauBinh/MauBinhScript/MauBinh.NetworkClient.ts

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
var MauBinhNetworkClient = /** @class */ (function (_super) {
    __extends(MauBinhNetworkClient, _super);
    function MauBinhNetworkClient() {
        var _this = _super.call(this) || this;
        _this.listeners = new Array();
        _this.isUseWSS = Configs_1.default.App.USE_WSS;
        return _this;
    }
    MauBinhNetworkClient.getInstance = function () {
        if (this.instance == null) {
            this.instance = new MauBinhNetworkClient();
        }
        return this.instance;
    };
    MauBinhNetworkClient.prototype.connect = function () {
        _super.prototype.connect.call(this, Configs_1.default.App.HOST_BINH.host, Configs_1.default.App.HOST_BINH.port);
    };
    MauBinhNetworkClient.prototype.onOpen = function (ev) {
        _super.prototype.onOpen.call(this, ev);
    };
    MauBinhNetworkClient.prototype.onMessage = function (ev) {
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
    MauBinhNetworkClient.prototype.addListener = function (callback, target) {
        this.listeners.push(new Network_NetworkListener_1.default(target, callback));
    };
    MauBinhNetworkClient.prototype.send = function (packet) {
        for (var b = new Int8Array(packet._length), c = 0; c < packet._length; c++)
            b[c] = packet._data[c];
        if (this.ws != null && this.isConnected())
            this.ws.send(b.buffer);
    };
    return MauBinhNetworkClient;
}(Network_NetworkClient_1.default));
exports.default = MauBinhNetworkClient;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTWF1QmluaFxcTWF1QmluaFNjcmlwdFxcTWF1QmluaC5OZXR3b3JrQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUNoRCx1R0FBMEY7QUFDMUYsMkdBQThGO0FBSTlGO0lBQWtELHdDQUFhO0lBWTNEO1FBQUEsWUFDSSxpQkFBTyxTQUVWO1FBWk8sZUFBUyxHQUEyQixJQUFJLEtBQUssRUFBbUIsQ0FBQztRQVdyRSxLQUFJLENBQUMsUUFBUSxHQUFHLGlCQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQzs7SUFDeEMsQ0FBQztJQVZhLGdDQUFXLEdBQXpCO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksb0JBQW9CLEVBQUUsQ0FBQztTQUM5QztRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBT00sc0NBQU8sR0FBZDtRQUNJLGlCQUFNLE9BQU8sWUFBQyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLGlCQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRVMscUNBQU0sR0FBaEIsVUFBaUIsRUFBUztRQUN0QixpQkFBTSxNQUFNLFlBQUMsRUFBRSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVTLHdDQUFTLEdBQW5CLFVBQW9CLEVBQWdCO1FBQ2hDLElBQUksSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sWUFBWSxNQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQzlFLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0I7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixDQUFDLEVBQUUsQ0FBQzthQUNQO1NBQ0o7SUFDTCxDQUFDO0lBRU0sMENBQVcsR0FBbEIsVUFBbUIsUUFBb0MsRUFBRSxNQUFvQjtRQUN6RSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLGlDQUFlLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVNLG1DQUFJLEdBQVgsVUFBWSxNQUFpQjtRQUN6QixLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRTtZQUN0RSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDTCwyQkFBQztBQUFELENBaERBLEFBZ0RDLENBaERpRCwrQkFBYSxHQWdEOUQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IE5ldHdvcmtDbGllbnQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLk5ldHdvcmtDbGllbnRcIjtcbmltcG9ydCBOZXR3b3JrTGlzdGVuZXIgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLk5ldHdvcmtMaXN0ZW5lclwiO1xuaW1wb3J0IE91dFBhY2tldCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL05ldHdvcmsuT3V0UGFja2V0XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF1QmluaE5ldHdvcmtDbGllbnQgZXh0ZW5kcyBOZXR3b3JrQ2xpZW50IHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogTWF1QmluaE5ldHdvcmtDbGllbnQ7XG5cbiAgICBwcml2YXRlIGxpc3RlbmVyczogQXJyYXk8TmV0d29ya0xpc3RlbmVyPiA9IG5ldyBBcnJheTxOZXR3b3JrTGlzdGVuZXI+KCk7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IE1hdUJpbmhOZXR3b3JrQ2xpZW50IHtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBNYXVCaW5oTmV0d29ya0NsaWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlzVXNlV1NTID0gQ29uZmlncy5BcHAuVVNFX1dTUztcbiAgICB9XG5cbiAgICBwdWJsaWMgY29ubmVjdCgpIHtcbiAgICAgICAgc3VwZXIuY29ubmVjdChDb25maWdzLkFwcC5IT1NUX0JJTkguaG9zdCwgQ29uZmlncy5BcHAuSE9TVF9CSU5ILnBvcnQpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbk9wZW4oZXY6IEV2ZW50KSB7XG4gICAgICAgIHN1cGVyLm9uT3Blbihldik7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uTWVzc2FnZShldjogTWVzc2FnZUV2ZW50KSB7XG4gICAgICAgIHZhciBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoZXYuZGF0YSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMubGlzdGVuZXJzW2ldO1xuICAgICAgICAgICAgaWYgKGxpc3RlbmVyLnRhcmdldCAmJiBsaXN0ZW5lci50YXJnZXQgaW5zdGFuY2VvZiBPYmplY3QgJiYgbGlzdGVuZXIudGFyZ2V0Lm5vZGUpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhZGRMaXN0ZW5lcihjYWxsYmFjazogKGRhdGE6IFVpbnQ4QXJyYXkpID0+IHZvaWQsIHRhcmdldDogY2MuQ29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobmV3IE5ldHdvcmtMaXN0ZW5lcih0YXJnZXQsIGNhbGxiYWNrKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbmQocGFja2V0OiBPdXRQYWNrZXQpIHtcbiAgICAgICAgZm9yICh2YXIgYiA9IG5ldyBJbnQ4QXJyYXkocGFja2V0Ll9sZW5ndGgpLCBjID0gMDsgYyA8IHBhY2tldC5fbGVuZ3RoOyBjKyspXG4gICAgICAgICAgICBiW2NdID0gcGFja2V0Ll9kYXRhW2NdO1xuICAgICAgICBpZiAodGhpcy53cyAhPSBudWxsICYmIHRoaXMuaXNDb25uZWN0ZWQoKSlcbiAgICAgICAgICAgIHRoaXMud3Muc2VuZChiLmJ1ZmZlcik7XG4gICAgfVxufVxuIl19