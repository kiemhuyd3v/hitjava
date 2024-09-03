
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/networks/MiniGameNetworkClient.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c72820K6yBNJaQ7FqwxoK9G', 'MiniGameNetworkClient');
// Lobby/LobbyScript/Script/networks/MiniGameNetworkClient.ts

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
var MiniGameNetworkClient = /** @class */ (function (_super) {
    __extends(MiniGameNetworkClient, _super);
    function MiniGameNetworkClient() {
        var _this = _super.call(this) || this;
        _this.listeners = new Array();
        _this.isLogin = false;
        _this.onLogined = null;
        _this.intervalPing = -1;
        _this.isUseWSS = Configs_1.default.App.USE_WSS;
        return _this;
    }
    MiniGameNetworkClient.getInstance = function () {
        if (this.instance == null) {
            this.instance = new MiniGameNetworkClient();
        }
        return this.instance;
    };
    MiniGameNetworkClient.prototype.checkConnect = function (onLogined) {
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
    MiniGameNetworkClient.prototype.onError = function (ev) {
        App_1.default.instance.showLoading(false);
        //Utils.Log("onError minigame:" + JSON.stringify(ev));
    };
    MiniGameNetworkClient.prototype.connect = function () {
        _super.prototype.connect.call(this, Configs_1.default.App.HOST_MINIGAME.host, Configs_1.default.App.HOST_MINIGAME.port);
        //Utils.Log("Port Mini Game:"+ Configs.App.HOST_MINIGAME.port);
    };
    MiniGameNetworkClient.prototype.onOpen = function (ev) {
        var _this = this;
        _super.prototype.onOpen.call(this, ev);
        this.send(new Network_Cmd_1.default.SendLogin(Configs_1.default.Login.Nickname, Configs_1.default.Login.AccessToken));
        //Utils.Log("minigame connected:"+Configs.Login.AccessToken);
        App_1.default.instance.showLoading(false);
        this.intervalPing = setInterval(function () { return _this.ping(); }, 1);
        this.ping();
    };
    MiniGameNetworkClient.prototype.onMessage = function (ev) {
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
    MiniGameNetworkClient.prototype.addListener = function (callback, target) {
        this.listeners.push(new Network_NetworkListener_1.default(target, callback));
    };
    MiniGameNetworkClient.prototype.onClose = function (ev) {
        //Utils.Log("onclose minigame");
        _super.prototype.onClose.call(this, ev);
    };
    MiniGameNetworkClient.prototype.send = function (packet) {
        for (var b = new Int8Array(packet._length), c = 0; c < packet._length; c++)
            b[c] = packet._data[c];
        if (this.ws != null && this.isConnected())
            this.ws.send(b.buffer);
    };
    MiniGameNetworkClient.prototype.sendCheck = function (packet) {
        var _this = this;
        this.checkConnect(function () {
            _this.send(packet);
        });
    };
    MiniGameNetworkClient.prototype.ping = function () {
        if (this.ws != null && this.ws.readyState !== WebSocket.OPEN) {
            //  //Utils.Log("WebSocket minigame instance wasn't ready...");
        }
        ;
    };
    return MiniGameNetworkClient;
}(Network_NetworkClient_1.default));
exports.default = MiniGameNetworkClient;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXG5ldHdvcmtzXFxNaW5pR2FtZU5ldHdvcmtDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQW9EO0FBRXBELHFFQUF3RDtBQUN4RCx1REFBMEM7QUFDMUMsNkNBQWdDO0FBQ2hDLHFDQUFnQztBQUNoQywyREFBc0Q7QUFHdEQ7SUFBbUQseUNBQWE7SUFnQjVEO1FBQUEsWUFDSSxpQkFBTyxTQUVWO1FBaEJPLGVBQVMsR0FBMkIsSUFBSSxLQUFLLEVBQW1CLENBQUM7UUFDakUsYUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixlQUFTLEdBQWUsSUFBSSxDQUFDO1FBRTdCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFXOUIsS0FBSSxDQUFDLFFBQVEsR0FBRyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7O0lBQ3hDLENBQUM7SUFWYSxpQ0FBVyxHQUF6QjtRQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLHFCQUFxQixFQUFFLENBQUM7U0FDL0M7UUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQU9NLDRDQUFZLEdBQW5CLFVBQW9CLFNBQTRCO1FBQTVCLDBCQUFBLEVBQUEsZ0JBQTRCO1FBQzNDLHFDQUFxQztRQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxJQUFJLFNBQVMsQ0FBQyxVQUFVO1lBQUUsT0FBTztRQUMxRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3JCLG1EQUFtRDtZQUNuRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7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U0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRTtZQUN0RSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTSx5Q0FBUyxHQUFoQixVQUFpQixNQUFpQjtRQUFsQyxpQkFJQztRQUhHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNNLG9DQUFJLEdBQVg7UUFDSSxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxJQUFJLEVBQUU7WUFDMUQsK0RBQStEO1NBQ2xFO1FBQUEsQ0FBQztJQUNOLENBQUM7SUFDTCw0QkFBQztBQUFELENBdEdBLEFBc0dDLENBdEdrRCwrQkFBYSxHQXNHL0QiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV0d29ya0NsaWVudCBmcm9tIFwiLi9OZXR3b3JrLk5ldHdvcmtDbGllbnRcIjtcbmltcG9ydCBPdXRQYWNrZXQgZnJvbSBcIi4vTmV0d29yay5PdXRQYWNrZXRcIjtcbmltcG9ydCBOZXR3b3JrTGlzdGVuZXIgZnJvbSBcIi4vTmV0d29yay5OZXR3b3JrTGlzdGVuZXJcIjtcbmltcG9ydCBJblBhY2tldCBmcm9tIFwiLi9OZXR3b3JrLkluUGFja2V0XCI7XG5pbXBvcnQgY21kIGZyb20gXCIuL05ldHdvcmsuQ21kXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi9jb21tb24vQXBwXCI7XG5pbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9jb21tb24vVXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWluaUdhbWVOZXR3b3JrQ2xpZW50IGV4dGVuZHMgTmV0d29ya0NsaWVudCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IE1pbmlHYW1lTmV0d29ya0NsaWVudDtcblxuICAgIHByaXZhdGUgbGlzdGVuZXJzOiBBcnJheTxOZXR3b3JrTGlzdGVuZXI+ID0gbmV3IEFycmF5PE5ldHdvcmtMaXN0ZW5lcj4oKTtcbiAgICBwcml2YXRlIGlzTG9naW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIG9uTG9naW5lZDogKCkgPT4gdm9pZCA9IG51bGw7XG5cbiAgICBwcml2YXRlIGludGVydmFsUGluZzogbnVtYmVyID0gLTE7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IE1pbmlHYW1lTmV0d29ya0NsaWVudCB7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTWluaUdhbWVOZXR3b3JrQ2xpZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaXNVc2VXU1MgPSBDb25maWdzLkFwcC5VU0VfV1NTO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGVja0Nvbm5lY3Qob25Mb2dpbmVkOiAoKSA9PiB2b2lkID0gbnVsbCkge1xuICAgICAgICAgLy9VdGlscy5Mb2coXCJjaGVja0Nvbm5lY3QgTWluaUdhbWVcIik7XG4gICAgICAgIHRoaXMub25Mb2dpbmVkID0gb25Mb2dpbmVkO1xuICAgICAgICBpZiAodGhpcy53cyAhPSBudWxsICYmIHRoaXMud3MucmVhZHlTdGF0ZSA9PSBXZWJTb2NrZXQuQ09OTkVDVElORykgcmV0dXJuO1xuICAgICAgICBpZiAoIXRoaXMuaXNDb25uZWN0ZWQoKSkge1xuICAgICAgICAgICAgLy8gQXBwLmluc3RhbmNlLnNob3dFcnJMb2FkaW5nKFwixJBhbmcgdsOgbyBnYW1lLi4uXCIpO1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNMb2dpbiAmJiB0aGlzLm9uTG9naW5lZCAhPSBudWxsKSB0aGlzLm9uTG9naW5lZCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkVycm9yKGV2OiBFdmVudCkge1xuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgLy9VdGlscy5Mb2coXCJvbkVycm9yIG1pbmlnYW1lOlwiICsgSlNPTi5zdHJpbmdpZnkoZXYpKTtcbiAgICB9XG5cbiAgICBjb25uZWN0KCkge1xuICAgICAgICBzdXBlci5jb25uZWN0KENvbmZpZ3MuQXBwLkhPU1RfTUlOSUdBTUUuaG9zdCwgQ29uZmlncy5BcHAuSE9TVF9NSU5JR0FNRS5wb3J0KTtcbiAgICAgICAgIC8vVXRpbHMuTG9nKFwiUG9ydCBNaW5pIEdhbWU6XCIrIENvbmZpZ3MuQXBwLkhPU1RfTUlOSUdBTUUucG9ydCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uT3BlbihldjogRXZlbnQpIHtcbiAgICAgICAgc3VwZXIub25PcGVuKGV2KTtcbiAgICAgICAgdGhpcy5zZW5kKG5ldyBjbWQuU2VuZExvZ2luKENvbmZpZ3MuTG9naW4uTmlja25hbWUsIENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4pKTtcbiAgICAgICAgIC8vVXRpbHMuTG9nKFwibWluaWdhbWUgY29ubmVjdGVkOlwiK0NvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4pO1xuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICB0aGlzLmludGVydmFsUGluZyA9IHNldEludGVydmFsKCgpID0+IHRoaXMucGluZygpLCAxKTtcbiAgICAgICAgdGhpcy5waW5nKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uTWVzc2FnZShldjogTWVzc2FnZUV2ZW50KSB7XG4gICAgICAgIHZhciBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoZXYuZGF0YSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMubGlzdGVuZXJzW2ldO1xuICAgICAgICAgICAgaWYgKGxpc3RlbmVyLnRhcmdldCAmJiBsaXN0ZW5lci50YXJnZXQgaW5zdGFuY2VvZiBPYmplY3QgJiYgbGlzdGVuZXIudGFyZ2V0Lm5vZGUpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbnBhY2tldCA9IG5ldyBJblBhY2tldChkYXRhKTtcbiAgICAgICAgc3dpdGNoIChpbnBhY2tldC5nZXRDbWRJZCgpKSB7XG4gICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkxPR0lOOlxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2dpbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub25Mb2dpbmVkICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgIC8vVXRpbHMuTG9nKFwiTG9naW5lZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkxvZ2luZWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkTGlzdGVuZXIoY2FsbGJhY2s6IChkYXRhOiBVaW50OEFycmF5KSA9PiB2b2lkLCB0YXJnZXQ6IGNjLkNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKG5ldyBOZXR3b3JrTGlzdGVuZXIodGFyZ2V0LCBjYWxsYmFjaykpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkNsb3NlKGV2OiBFdmVudCkge1xuICAgICAgICAgLy9VdGlscy5Mb2coXCJvbmNsb3NlIG1pbmlnYW1lXCIpO1xuICAgICAgICBzdXBlci5vbkNsb3NlKGV2KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VuZChwYWNrZXQ6IE91dFBhY2tldCkge1xuICAgICAgICBmb3IgKHZhciBiID0gbmV3IEludDhBcnJheShwYWNrZXQuX2xlbmd0aCksIGMgPSAwOyBjIDwgcGFja2V0Ll9sZW5ndGg7IGMrKylcbiAgICAgICAgICAgIGJbY10gPSBwYWNrZXQuX2RhdGFbY107XG4gICAgICAgIGlmICh0aGlzLndzICE9IG51bGwgJiYgdGhpcy5pc0Nvbm5lY3RlZCgpKVxuICAgICAgICAgICAgdGhpcy53cy5zZW5kKGIuYnVmZmVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VuZENoZWNrKHBhY2tldDogT3V0UGFja2V0KSB7XG4gICAgICAgIHRoaXMuY2hlY2tDb25uZWN0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VuZChwYWNrZXQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHVibGljIHBpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLndzICE9IG51bGwgJiYgdGhpcy53cy5yZWFkeVN0YXRlICE9PSBXZWJTb2NrZXQuT1BFTikge1xuICAgICAgICAgICAgLy8gIC8vVXRpbHMuTG9nKFwiV2ViU29ja2V0IG1pbmlnYW1lIGluc3RhbmNlIHdhc24ndCByZWFkeS4uLlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=