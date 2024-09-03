
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/networks/TaiXiuSieuToc.NetworkClient.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8d9374ANWNGP41ccl1WU02b', 'TaiXiuSieuToc.NetworkClient');
// Lobby/LobbyScript/Script/networks/TaiXiuSieuToc.NetworkClient.ts

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
var Configs_1 = require("../../../../Loading/src/Configs");
var App_1 = require("../common/App");
var Network_NetworkListener_1 = require("./Network.NetworkListener");
var Network_SockJsClient_1 = require("./Network.SockJsClient");
var TaiXiuSTNetworkClient = /** @class */ (function (_super) {
    __extends(TaiXiuSTNetworkClient, _super);
    function TaiXiuSTNetworkClient() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.token = "";
        _this.isOpenGame = false;
        _this.listeners = new Array();
        return _this;
    }
    TaiXiuSTNetworkClient.getInstance = function () {
        if (this.instance == null) {
            this.instance = new TaiXiuSTNetworkClient();
        }
        return this.instance;
    };
    TaiXiuSTNetworkClient.prototype.connect = function () {
        _super.prototype.connect.call(this, Configs_1.default.App.HOST_SOCKJS + Configs_1.default.App.SOCKJS_LOGIN + "?access_token=" + Configs_1.default.Login.AccessTokenSockJs, Configs_1.default.App.TXST_SUB_TOPIC);
    };
    TaiXiuSTNetworkClient.prototype.addListener = function (callback, target) {
        this.listeners.push(new Network_NetworkListener_1.default(target, callback));
    };
    TaiXiuSTNetworkClient.prototype.onMessage = function (data) {
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
    TaiXiuSTNetworkClient.prototype.onCustomMessage = function (msg, data) {
        if (data === void 0) { data = null; }
        _super.prototype.onCustomMessage.call(this, msg, data);
        switch (msg) {
            case "SUBSCRIBE":
                //Utils.Log(data);
                this.listSubChannel.push(data); // add sub-id to list to check later in game;
                if (data.destination == "/user/queue/tx") {
                    TaiXiuSTNetworkClient.TaiXiuSieuTocController.gameSubscribeId = data.id;
                }
                break;
            case "UNSUBSCRIBE": //event unsubscribe delete sub-id to check subscribed channel in game  before send data
                //Utils.Log(data);
                for (var i = 0; i < this.listSubChannel.length; i++) {
                    if (this.listSubChannel[i].id == data.id) {
                        this.subscribe(this.listSubChannel[i].destination);
                        this.listSubChannel.splice(i, 1);
                        break;
                    }
                }
                break;
            case "ONCLOSE":
                this.onClose("ONCLOSE");
                break;
        }
    };
    TaiXiuSTNetworkClient.prototype.onConnected = function () {
        _super.prototype.onConnected.call(this);
        if (this.isOpenGame) {
            App_1.default.instance.openMiniGameTaiXiuSieuToc("TaiXiuSieuToc", "TaiXiuSieuToc");
            this.isOpenGame = false;
        }
    };
    TaiXiuSTNetworkClient.prototype.sendBet = function (data) {
        //Utils.Log("data Bet==", data);
        this.send("/topic/bet", JSON.stringify(data));
    };
    TaiXiuSTNetworkClient.prototype.sendChat = function (data) {
        this.send("/topic/chats", JSON.stringify(data));
    };
    TaiXiuSTNetworkClient.prototype.getChatHistory = function () {
        var data = {};
        this.send("/topic/public", JSON.stringify(data));
    };
    TaiXiuSTNetworkClient.prototype.getHistorySession = function () {
        //Utils.Log("getHistorySession");
        var data = {};
        this.send("/topic/lichsuphien", JSON.stringify(data));
    };
    TaiXiuSTNetworkClient.prototype.checkConnect = function (cb) {
        if (this.isConnected && this.isLogin) {
            cb();
        }
        else {
            this.reconnect();
        }
    };
    TaiXiuSTNetworkClient.prototype.send = function (destination, data) {
        var headers = {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + this.token
        };
        //Utils.Log("Bearer " + this.token);
        this.stompClient.send(destination, headers, data);
    };
    TaiXiuSTNetworkClient.prototype.onClose = function (event) {
        _super.prototype.onClose.call(this, event);
        if (TaiXiuSTNetworkClient.TaiXiuSieuTocController != null) {
            TaiXiuSTNetworkClient.TaiXiuSieuTocController.dismiss();
        }
    };
    TaiXiuSTNetworkClient.prototype.getHistory = function (page, size, onFinished) {
        var url = Configs_1.default.App.HOST_SOCKJS + "api/tx/lichsucuoc?page=%d&size=%d&sort=id%2Cdesc";
        url = cc.js.formatStr(url, page, size);
        this.requestAPI(url, onFinished);
    };
    TaiXiuSTNetworkClient.prototype.getHistorySessionId = function (sessionid, onFinished) {
        var url = Configs_1.default.App.HOST_SOCKJS + "api/tx/thongkephien/" + sessionid;
        this.requestAPI(url, onFinished);
    };
    TaiXiuSTNetworkClient.prototype.getTopHonor = function () {
        // let url = Configs.App.HOST_SOCKJS + "api/tx-ranks";
        // this.requestAPI(url, onFinished, "GET");
        var data = {};
        this.send("/topic/ranktx", JSON.stringify(data));
    };
    TaiXiuSTNetworkClient.prototype.requestAPI = function (url, onFinished, method) {
        if (method === void 0) { method = "POST"; }
        var xhr = new XMLHttpRequest();
        //Utils.Log("url==" + url);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var data = null;
                    var e = null;
                    try {
                        data = JSON.parse(xhr.responseText);
                    }
                    catch (ex) {
                        e = ex;
                    }
                    onFinished(e, data);
                }
                else {
                    onFinished(xhr.status, null);
                }
            }
        };
        //Utils.Log("Method==" + method);
        xhr.open(method, url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Authorization", "Bearer " + this.token);
        xhr.send();
    };
    TaiXiuSTNetworkClient.TaiXiuSieuTocController = null;
    return TaiXiuSTNetworkClient;
}(Network_SockJsClient_1.default));
exports.default = TaiXiuSTNetworkClient;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXG5ldHdvcmtzXFxUYWlYaXVTaWV1VG9jLk5ldHdvcmtDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXNEO0FBQ3RELHFDQUFnQztBQUVoQyxxRUFBd0Q7QUFDeEQsK0RBQWtEO0FBQ2xEO0lBQW1ELHlDQUFZO0lBQS9EO1FBQUEscUVBNklDO1FBM0lHLFdBQUssR0FBRyxFQUFFLENBQUM7UUFFWCxnQkFBVSxHQUFHLEtBQUssQ0FBQztRQUNYLGVBQVMsR0FBMkIsSUFBSSxLQUFLLEVBQW1CLENBQUM7O0lBd0k3RSxDQUFDO0lBdklpQixpQ0FBVyxHQUF6QjtRQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLHFCQUFxQixFQUFFLENBQUM7U0FDL0M7UUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUNELHVDQUFPLEdBQVA7UUFDSSxpQkFBTSxPQUFPLFlBQUMsaUJBQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLGlCQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsR0FBRyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN2SixDQUFDO0lBQ00sMkNBQVcsR0FBbEIsVUFBbUIsUUFBb0MsRUFBRSxNQUFvQjtRQUN6RSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLGlDQUFlLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUNTLHlDQUFTLEdBQW5CLFVBQW9CLElBQUk7UUFDcEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElB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QU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUIsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3pELEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsWUFBVSxJQUFJLENBQUMsS0FBTyxDQUFDLENBQUM7UUFDOUQsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBRWYsQ0FBQztJQXpJYSw2Q0FBdUIsR0FBRyxJQUFJLENBQUM7SUEwSWpELDRCQUFDO0NBN0lELEFBNklDLENBN0lrRCw4QkFBWSxHQTZJOUQ7a0JBN0lvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vY29tbW9uL0FwcFwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9jb21tb24vVXRpbHNcIjtcbmltcG9ydCBOZXR3b3JrTGlzdGVuZXIgZnJvbSBcIi4vTmV0d29yay5OZXR3b3JrTGlzdGVuZXJcIjtcbmltcG9ydCBTb2NrSnNDbGllbnQgZnJvbSBcIi4vTmV0d29yay5Tb2NrSnNDbGllbnRcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhaVhpdVNUTmV0d29ya0NsaWVudCBleHRlbmRzIFNvY2tKc0NsaWVudCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFRhaVhpdVNUTmV0d29ya0NsaWVudDtcbiAgICB0b2tlbiA9IFwiXCI7XG4gICAgcHVibGljIHN0YXRpYyBUYWlYaXVTaWV1VG9jQ29udHJvbGxlciA9IG51bGw7XG4gICAgaXNPcGVuR2FtZSA9IGZhbHNlO1xuICAgIHByaXZhdGUgbGlzdGVuZXJzOiBBcnJheTxOZXR3b3JrTGlzdGVuZXI+ID0gbmV3IEFycmF5PE5ldHdvcmtMaXN0ZW5lcj4oKTtcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IFRhaVhpdVNUTmV0d29ya0NsaWVudCB7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVGFpWGl1U1ROZXR3b3JrQ2xpZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHN1cGVyLmNvbm5lY3QoQ29uZmlncy5BcHAuSE9TVF9TT0NLSlMgKyBDb25maWdzLkFwcC5TT0NLSlNfTE9HSU4gKyBcIj9hY2Nlc3NfdG9rZW49XCIgKyBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuU29ja0pzLCBDb25maWdzLkFwcC5UWFNUX1NVQl9UT1BJQyk7XG4gICAgfVxuICAgIHB1YmxpYyBhZGRMaXN0ZW5lcihjYWxsYmFjazogKGRhdGE6IFVpbnQ4QXJyYXkpID0+IHZvaWQsIHRhcmdldDogY2MuQ29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobmV3IE5ldHdvcmtMaXN0ZW5lcih0YXJnZXQsIGNhbGxiYWNrKSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbk1lc3NhZ2UoZGF0YSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmxpc3RlbmVyc1tpXTtcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lci50YXJnZXQgJiYgbGlzdGVuZXIudGFyZ2V0IGluc3RhbmNlb2YgT2JqZWN0ICYmIGxpc3RlbmVyLnRhcmdldC5ub2RlKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25DdXN0b21NZXNzYWdlKG1zZywgZGF0YSA9IG51bGwpIHtcbiAgICAgICAgc3VwZXIub25DdXN0b21NZXNzYWdlKG1zZywgZGF0YSk7XG4gICAgICAgIHN3aXRjaCAobXNnKSB7XG4gICAgICAgICAgICBjYXNlIFwiU1VCU0NSSUJFXCI6XG4gICAgICAgICAgICAgICAgIC8vVXRpbHMuTG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdFN1YkNoYW5uZWwucHVzaChkYXRhKTsgLy8gYWRkIHN1Yi1pZCB0byBsaXN0IHRvIGNoZWNrIGxhdGVyIGluIGdhbWU7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuZGVzdGluYXRpb24gPT0gXCIvdXNlci9xdWV1ZS90eFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIFRhaVhpdVNUTmV0d29ya0NsaWVudC5UYWlYaXVTaWV1VG9jQ29udHJvbGxlci5nYW1lU3Vic2NyaWJlSWQgPSBkYXRhLmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJVTlNVQlNDUklCRVwiOi8vZXZlbnQgdW5zdWJzY3JpYmUgZGVsZXRlIHN1Yi1pZCB0byBjaGVjayBzdWJzY3JpYmVkIGNoYW5uZWwgaW4gZ2FtZSAgYmVmb3JlIHNlbmQgZGF0YVxuICAgICAgICAgICAgICAgICAvL1V0aWxzLkxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdFN1YkNoYW5uZWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdFN1YkNoYW5uZWxbaV0uaWQgPT0gZGF0YS5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmUodGhpcy5saXN0U3ViQ2hhbm5lbFtpXS5kZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RTdWJDaGFubmVsLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIk9OQ0xPU0VcIjpcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2xvc2UoXCJPTkNMT1NFXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgb25Db25uZWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29ubmVjdGVkKCk7XG4gICAgICAgIGlmICh0aGlzLmlzT3BlbkdhbWUpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5vcGVuTWluaUdhbWVUYWlYaXVTaWV1VG9jKFwiVGFpWGl1U2lldVRvY1wiLCBcIlRhaVhpdVNpZXVUb2NcIik7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbkdhbWUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZW5kQmV0KGRhdGEpIHtcbiAgICAgICAgIC8vVXRpbHMuTG9nKFwiZGF0YSBCZXQ9PVwiLCBkYXRhKTtcbiAgICAgICAgdGhpcy5zZW5kKFwiL3RvcGljL2JldFwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgfVxuICAgIHNlbmRDaGF0KGRhdGEpIHtcbiAgICAgICAgdGhpcy5zZW5kKFwiL3RvcGljL2NoYXRzXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB9XG4gICAgZ2V0Q2hhdEhpc3RvcnkoKSB7XG4gICAgICAgIGxldCBkYXRhOiBhbnkgPSB7fTtcbiAgICAgICAgdGhpcy5zZW5kKFwiL3RvcGljL3B1YmxpY1wiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgfVxuICAgIGdldEhpc3RvcnlTZXNzaW9uKCkge1xuICAgICAgICAgLy9VdGlscy5Mb2coXCJnZXRIaXN0b3J5U2Vzc2lvblwiKTtcbiAgICAgICAgbGV0IGRhdGE6IGFueSA9IHt9O1xuICAgICAgICB0aGlzLnNlbmQoXCIvdG9waWMvbGljaHN1cGhpZW5cIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIH1cbiAgICBjaGVja0Nvbm5lY3QoY2IpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDb25uZWN0ZWQgJiYgdGhpcy5pc0xvZ2luKSB7XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZW5kKGRlc3RpbmF0aW9uLCBkYXRhKSB7XG4gICAgICAgIHZhciBoZWFkZXJzID0ge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyB0aGlzLnRva2VuXG4gICAgICAgIH07XG4gICAgICAgICAvL1V0aWxzLkxvZyhcIkJlYXJlciBcIiArIHRoaXMudG9rZW4pO1xuICAgICAgICB0aGlzLnN0b21wQ2xpZW50LnNlbmQoZGVzdGluYXRpb24sIGhlYWRlcnMsIGRhdGEpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25DbG9zZShldmVudCkge1xuICAgICAgICBzdXBlci5vbkNsb3NlKGV2ZW50KTtcbiAgICAgICAgaWYgKFRhaVhpdVNUTmV0d29ya0NsaWVudC5UYWlYaXVTaWV1VG9jQ29udHJvbGxlciAhPSBudWxsKSB7XG4gICAgICAgICAgICBUYWlYaXVTVE5ldHdvcmtDbGllbnQuVGFpWGl1U2lldVRvY0NvbnRyb2xsZXIuZGlzbWlzcygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldEhpc3RvcnkocGFnZSwgc2l6ZSwgb25GaW5pc2hlZCkge1xuICAgICAgICBsZXQgdXJsID0gQ29uZmlncy5BcHAuSE9TVF9TT0NLSlMgKyBcImFwaS90eC9saWNoc3VjdW9jP3BhZ2U9JWQmc2l6ZT0lZCZzb3J0PWlkJTJDZGVzY1wiO1xuICAgICAgICB1cmwgPSBjYy5qcy5mb3JtYXRTdHIodXJsLCBwYWdlLCBzaXplKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0QVBJKHVybCwgb25GaW5pc2hlZCk7XG4gICAgfVxuICAgIGdldEhpc3RvcnlTZXNzaW9uSWQoc2Vzc2lvbmlkLCBvbkZpbmlzaGVkKSB7XG4gICAgICAgIGxldCB1cmwgPSBDb25maWdzLkFwcC5IT1NUX1NPQ0tKUyArIFwiYXBpL3R4L3Rob25na2VwaGllbi9cIiArIHNlc3Npb25pZDtcbiAgICAgICAgdGhpcy5yZXF1ZXN0QVBJKHVybCwgb25GaW5pc2hlZCk7XG4gICAgfVxuICAgIGdldFRvcEhvbm9yKCkge1xuICAgICAgICAvLyBsZXQgdXJsID0gQ29uZmlncy5BcHAuSE9TVF9TT0NLSlMgKyBcImFwaS90eC1yYW5rc1wiO1xuICAgICAgICAvLyB0aGlzLnJlcXVlc3RBUEkodXJsLCBvbkZpbmlzaGVkLCBcIkdFVFwiKTtcbiAgICAgICAgbGV0IGRhdGE6IGFueSA9IHt9O1xuICAgICAgICB0aGlzLnNlbmQoXCIvdG9waWMvcmFua3R4XCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB9XG4gICAgcmVxdWVzdEFQSSh1cmw6IHN0cmluZywgb25GaW5pc2hlZDogKGVycjogYW55LCBqc29uOiBhbnkpID0+IHZvaWQsIG1ldGhvZCA9IFwiUE9TVFwiKSB7XG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgIC8vVXRpbHMuTG9nKFwidXJsPT1cIiArIHVybCk7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlID0gZXg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb25GaW5pc2hlZChlLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvbkZpbmlzaGVkKHhoci5zdGF0dXMsIG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgIC8vVXRpbHMuTG9nKFwiTWV0aG9kPT1cIiArIG1ldGhvZCk7XG4gICAgICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgYEJlYXJlciAke3RoaXMudG9rZW59YCk7XG4gICAgICAgIHhoci5zZW5kKCk7XG5cbiAgICB9XG59XG4iXX0=