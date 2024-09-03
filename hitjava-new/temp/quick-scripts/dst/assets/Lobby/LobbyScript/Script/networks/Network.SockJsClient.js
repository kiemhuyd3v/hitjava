
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/networks/Network.SockJsClient.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '84dc1GAhsBLUKjw1F3/6Rx5', 'Network.SockJsClient');
// Lobby/LobbyScript/Script/networks/Network.SockJsClient.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Configs_1 = require("../../../../Loading/src/Configs");
var SockJS = require("../../../../Loading/src/Sockjs.min");
// import * as SockJS from '../../../../Loading/src/sockjs114';
var Stomp = require("../../../../Loading/src/stomp2");
var Network_NetworkListener_1 = require("./Network.NetworkListener");
var App_1 = require("../common/App");
var SockJsClient = /** @class */ (function () {
    function SockJsClient() {
        this.ws = null;
        this.stompClient = null;
        this.host = "";
        this.apiSub = "";
        this.port = 0;
        this.isForceClose = false;
        this.isConnected = false;
        this.isLogin = false;
        this.isUseWSS = false;
        this.isAutoReconnect = true;
        this.retryCount = 0;
        this.retrySubCount = 0;
        this.token = "";
        this._onOpenes = [];
        this._onCloses = [];
        this.listSubChannel = [];
    }
    SockJsClient.prototype.connect = function (host, apiSub) {
        var _this_1 = this;
        this.token = Configs_1.default.Login.AccessTokenSockJs;
        this.isForceClose = false;
        this.host = host;
        this.apiSub = apiSub;
        if (this.ws == null) {
            if (cc.sys.isBrowser) {
                //Utils.Log("Start Connect Game SockJs:" + host);
                this.ws = new SockJS(host);
            }
            else {
                host = host.replace("https", "http");
                //Utils.Log("Start Connect Game SockJs:" + host);
                this.ws = new SockJS(host);
            }
            this.stompClient = Stomp.Stomp.over(this.ws);
            var headers = {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + Configs_1.default.Login.AccessTokenSockJs
            };
            var _this = this;
            this.stompClient.connect(headers, function () {
                //Utils.Log("STOMP CONNECTED & SUBSCRIBE");
                _this.isConnected = true;
                _this_1.onConnected();
                _this_1.subscribe(apiSub);
            });
            this.ws.onCustomMessage = this.onCustomMessage.bind(this);
        }
        else {
            if (this.ws.readyState !== WebSocket.OPEN) {
                this.ws.close();
                this.ws = null;
                this.isConnected = false;
                this.connect(host, apiSub);
            }
        }
    };
    SockJsClient.prototype.onConnected = function () {
        //Utils.Log("onConnected Stomp!");
    };
    SockJsClient.prototype.reconnect = function () {
        this.connect(this.host, this.apiSub);
    };
    SockJsClient.prototype.subscribe = function (destination) {
        var _this_1 = this;
        if (this.isConnected) {
            this.stompClient.subscribe(destination, function (data) {
                _this_1.onMessage(data);
            });
        }
    };
    SockJsClient.prototype.unSubscribe = function (idSub) {
        if (this.isConnected) {
            this.stompClient.unsubscribe(idSub);
        }
    };
    SockJsClient.prototype.addOnOpen = function (callback, target) {
        this._onOpenes.push(new Network_NetworkListener_1.default(target, callback));
    };
    SockJsClient.prototype.addOnClose = function (callback, target) {
        this._onCloses.push(new Network_NetworkListener_1.default(target, callback));
    };
    SockJsClient.prototype.onCustomMessage = function (msg, data) {
        if (data === void 0) { data = null; }
        //Utils.Log("onCustomMessage:" + msg);
    };
    SockJsClient.prototype.checkSubChannel = function (id) {
        var isSub = false;
        for (var i = 0; i < this.listSubChannel.length; i++) {
            if (this.listSubChannel[i].id == id) {
                isSub = true;
                break;
            }
        }
        return isSub;
    };
    SockJsClient.prototype.onOpen = function (ev) {
        this.isConnected = true;
        //Utils.Log("onOpen SOCKJS");
        for (var i = 0; i < this._onOpenes.length; i++) {
            var listener = this._onOpenes[i];
            if (listener.target && listener.target instanceof Object && listener.target.node) {
                listener.callback(null);
            }
            else {
                this._onOpenes.splice(i, 1);
                i--;
            }
        }
    };
    SockJsClient.prototype.onMessage = function (ev) {
        //Utils.Log("onmessage: " + ev.data);
    };
    SockJsClient.prototype.onError = function (ev) {
        //Utils.Log("onError SOCKJS:", JSON.stringify(ev));
    };
    SockJsClient.prototype.onClose = function (ev) {
        this.isConnected = false;
        App_1.default.instance.showToast(App_1.default.instance.getTextLang('txt_check_connect'));
        for (var i = 0; i < this._onCloses.length; i++) {
            var listener = this._onCloses[i];
            if (listener.target && listener.target instanceof Object && listener.target.node) {
                listener.callback(null);
            }
            else {
                this._onCloses.splice(i, 1);
                i--;
            }
        }
        //Utils.Log("onClose SOCKJS");
    };
    return SockJsClient;
}());
exports.default = SockJsClient;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXG5ldHdvcmtzXFxOZXR3b3JrLlNvY2tKc0NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDJEQUFzRDtBQUN0RCwyREFBNkQ7QUFDN0QsK0RBQStEO0FBQy9ELHNEQUF1RDtBQUd2RCxxRUFBd0Q7QUFDeEQscUNBQWdDO0FBSWhDO0lBQUE7UUFFSSxPQUFFLEdBQWMsSUFBSSxDQUFDO1FBQ3JCLGdCQUFXLEdBQVUsSUFBSSxDQUFDO1FBQzFCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLFNBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLG9CQUFlLEdBQVksSUFBSSxDQUFDO1FBQ2hDLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsY0FBUyxHQUEyQixFQUFFLENBQUM7UUFDdkMsY0FBUyxHQUEyQixFQUFFLENBQUM7UUFDdkMsbUJBQWMsR0FBRyxFQUFFLENBQUM7SUFpSHhCLENBQUM7SUEvR0csOEJBQU8sR0FBUCxVQUFRLElBQVksRUFBRSxNQUFNO1FBQTVCLG1CQXFDQztRQXBDRyxJQUFJLENBQUMsS0FBSyxHQUFHLGlCQUFPLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDO1FBQzdDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDakIsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRTtnQkFDakIsaURBQWlEO2dCQUNsRCxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzlCO2lCQUFNO2dCQUNILElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDcEMsaURBQWlEO2dCQUNsRCxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBRTlCO1lBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDN0MsSUFBSSxPQUFPLEdBQUc7Z0JBQ1YsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsZUFBZSxFQUFFLFNBQVMsR0FBRyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxpQkFBaUI7YUFDL0QsQ0FBQztZQUNGLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUU7Z0JBQzdCLDJDQUEyQztnQkFDNUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLE9BQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDbkIsT0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdEO2FBQU07WUFDSCxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO2dCQUVmLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQzthQUM5QjtTQUNKO0lBQ0wsQ0FBQztJQUNELGtDQUFXLEdBQVg7UUFDSyxrQ0FBa0M7SUFDdkMsQ0FBQztJQUNELGdDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRCxnQ0FBUyxHQUFULFVBQVUsV0FBVztRQUFyQixtQkFNQztRQUxHLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsVUFBQyxJQUFJO2dCQUN6QyxPQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ3hCLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBQ0Qsa0NBQVcsR0FBWCxVQUFZLEtBQUs7UUFDYixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkM7SUFDTCxDQUFDO0lBQ0QsZ0NBQVMsR0FBVCxVQUFVLFFBQW9CLEVBQUUsTUFBb0I7UUFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQ0FBZSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFDRCxpQ0FBVSxHQUFWLFVBQVcsUUFBb0IsRUFBRSxNQUFvQjtRQUNqRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLGlDQUFlLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUNELHNDQUFlLEdBQWYsVUFBZ0IsR0FBRyxFQUFFLElBQVc7UUFBWCxxQkFBQSxFQUFBLFdBQVc7UUFDM0Isc0NBQXNDO0lBQzNDLENBQUM7SUFDRCxzQ0FBZSxHQUFmLFVBQWdCLEVBQUU7UUFDZCxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pELElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFO2dCQUNqQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNiLE1BQU07YUFDVDtTQUNKO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNTLDZCQUFNLEdBQWhCLFVBQWlCLEVBQVM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDdkIsNkJBQTZCO1FBQzlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxZQUFZLE1BQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDOUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMzQjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLENBQUMsRUFBRSxDQUFDO2FBQ1A7U0FDSjtJQUNMLENBQUM7SUFDUyxnQ0FBUyxHQUFuQixVQUFvQixFQUFnQjtRQUMvQixxQ0FBcUM7SUFDMUMsQ0FBQztJQUVTLDhCQUFPLEdBQWpCLFVBQWtCLEVBQVM7UUFDdEIsbURBQW1EO0lBQ3hELENBQUM7SUFFUyw4QkFBTyxHQUFqQixVQUFrQixFQUFFO1FBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLGFBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUN0RSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sWUFBWSxNQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQzlFLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0I7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixDQUFDLEVBQUUsQ0FBQzthQUNQO1NBQ0o7UUFDQSw4QkFBOEI7SUFFbkMsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FsSUEsQUFrSUMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pbXBvcnQgQ29uZmlncyBmcm9tICcuLi8uLi8uLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzJztcbmltcG9ydCAqIGFzIFNvY2tKUyBmcm9tICcuLi8uLi8uLi8uLi9Mb2FkaW5nL3NyYy9Tb2NranMubWluJztcbi8vIGltcG9ydCAqIGFzIFNvY2tKUyBmcm9tICcuLi8uLi8uLi8uLi9Mb2FkaW5nL3NyYy9zb2NranMxMTQnO1xuaW1wb3J0ICogYXMgU3RvbXAgZnJvbSAnLi4vLi4vLi4vLi4vTG9hZGluZy9zcmMvc3RvbXAyJ1xuXG5cbmltcG9ydCBOZXR3b3JrTGlzdGVuZXIgZnJvbSAnLi9OZXR3b3JrLk5ldHdvcmtMaXN0ZW5lcic7XG5pbXBvcnQgQXBwIGZyb20gJy4uL2NvbW1vbi9BcHAnO1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uL2NvbW1vbi9VdGlscyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29ja0pzQ2xpZW50IHtcblxuICAgIHdzOiBXZWJTb2NrZXQgPSBudWxsO1xuICAgIHN0b21wQ2xpZW50OiBTdG9tcCA9IG51bGw7XG4gICAgaG9zdDogc3RyaW5nID0gXCJcIjtcbiAgICBhcGlTdWIgPSBcIlwiO1xuICAgIHBvcnQ6IG51bWJlciA9IDA7XG4gICAgaXNGb3JjZUNsb3NlID0gZmFsc2U7XG4gICAgaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICBpc0xvZ2luID0gZmFsc2U7XG4gICAgaXNVc2VXU1M6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0F1dG9SZWNvbm5lY3Q6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHJldHJ5Q291bnQgPSAwO1xuICAgIHJldHJ5U3ViQ291bnQgPSAwO1xuICAgIHRva2VuID0gXCJcIjtcbiAgICBfb25PcGVuZXM6IEFycmF5PE5ldHdvcmtMaXN0ZW5lcj4gPSBbXTtcbiAgICBfb25DbG9zZXM6IEFycmF5PE5ldHdvcmtMaXN0ZW5lcj4gPSBbXTtcbiAgICBsaXN0U3ViQ2hhbm5lbCA9IFtdO1xuXG4gICAgY29ubmVjdChob3N0OiBzdHJpbmcsIGFwaVN1Yikge1xuICAgICAgICB0aGlzLnRva2VuID0gQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlblNvY2tKcztcbiAgICAgICAgdGhpcy5pc0ZvcmNlQ2xvc2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ob3N0ID0gaG9zdDtcbiAgICAgICAgdGhpcy5hcGlTdWIgPSBhcGlTdWI7XG4gICAgICAgIGlmICh0aGlzLndzID09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChjYy5zeXMuaXNCcm93c2VyKSB7XG4gICAgICAgICAgICAgICAgIC8vVXRpbHMuTG9nKFwiU3RhcnQgQ29ubmVjdCBHYW1lIFNvY2tKczpcIiArIGhvc3QpO1xuICAgICAgICAgICAgICAgIHRoaXMud3MgPSBuZXcgU29ja0pTKGhvc3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBob3N0ID0gaG9zdC5yZXBsYWNlKFwiaHR0cHNcIiwgXCJodHRwXCIpO1xuICAgICAgICAgICAgICAgICAvL1V0aWxzLkxvZyhcIlN0YXJ0IENvbm5lY3QgR2FtZSBTb2NrSnM6XCIgKyBob3N0KTtcbiAgICAgICAgICAgICAgICB0aGlzLndzID0gbmV3IFNvY2tKUyhob3N0KTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdG9tcENsaWVudCA9IFN0b21wLlN0b21wLm92ZXIodGhpcy53cyk7XG4gICAgICAgICAgICB2YXIgaGVhZGVycyA9IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuU29ja0pzXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuc3RvbXBDbGllbnQuY29ubmVjdChoZWFkZXJzLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgIC8vVXRpbHMuTG9nKFwiU1RPTVAgQ09OTkVDVEVEICYgU1VCU0NSSUJFXCIpO1xuICAgICAgICAgICAgICAgIF90aGlzLmlzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ29ubmVjdGVkKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmUoYXBpU3ViKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy53cy5vbkN1c3RvbU1lc3NhZ2UgPSB0aGlzLm9uQ3VzdG9tTWVzc2FnZS5iaW5kKHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMud3MucmVhZHlTdGF0ZSAhPT0gV2ViU29ja2V0Lk9QRU4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLndzLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy53cyA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0KGhvc3QsIGFwaVN1Yik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25Db25uZWN0ZWQoKSB7XG4gICAgICAgICAvL1V0aWxzLkxvZyhcIm9uQ29ubmVjdGVkIFN0b21wIVwiKTtcbiAgICB9XG4gICAgcmVjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmNvbm5lY3QodGhpcy5ob3N0LCB0aGlzLmFwaVN1Yik7XG4gICAgfVxuICAgIHN1YnNjcmliZShkZXN0aW5hdGlvbikge1xuICAgICAgICBpZiAodGhpcy5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5zdG9tcENsaWVudC5zdWJzY3JpYmUoZGVzdGluYXRpb24sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbk1lc3NhZ2UoZGF0YSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVuU3Vic2NyaWJlKGlkU3ViKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnN0b21wQ2xpZW50LnVuc3Vic2NyaWJlKGlkU3ViKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRPbk9wZW4oY2FsbGJhY2s6ICgpID0+IHZvaWQsIHRhcmdldDogY2MuQ29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuX29uT3BlbmVzLnB1c2gobmV3IE5ldHdvcmtMaXN0ZW5lcih0YXJnZXQsIGNhbGxiYWNrKSk7XG4gICAgfVxuICAgIGFkZE9uQ2xvc2UoY2FsbGJhY2s6ICgpID0+IHZvaWQsIHRhcmdldDogY2MuQ29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuX29uQ2xvc2VzLnB1c2gobmV3IE5ldHdvcmtMaXN0ZW5lcih0YXJnZXQsIGNhbGxiYWNrKSk7XG4gICAgfVxuICAgIG9uQ3VzdG9tTWVzc2FnZShtc2csIGRhdGEgPSBudWxsKSB7XG4gICAgICAgICAvL1V0aWxzLkxvZyhcIm9uQ3VzdG9tTWVzc2FnZTpcIiArIG1zZyk7XG4gICAgfVxuICAgIGNoZWNrU3ViQ2hhbm5lbChpZCkge1xuICAgICAgICBsZXQgaXNTdWIgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RTdWJDaGFubmVsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5saXN0U3ViQ2hhbm5lbFtpXS5pZCA9PSBpZCkge1xuICAgICAgICAgICAgICAgIGlzU3ViID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNTdWI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbk9wZW4oZXY6IEV2ZW50KSB7XG4gICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgLy9VdGlscy5Mb2coXCJvbk9wZW4gU09DS0pTXCIpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX29uT3BlbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLl9vbk9wZW5lc1tpXTtcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lci50YXJnZXQgJiYgbGlzdGVuZXIudGFyZ2V0IGluc3RhbmNlb2YgT2JqZWN0ICYmIGxpc3RlbmVyLnRhcmdldC5ub2RlKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX29uT3BlbmVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uTWVzc2FnZShldjogTWVzc2FnZUV2ZW50KSB7XG4gICAgICAgICAvL1V0aWxzLkxvZyhcIm9ubWVzc2FnZTogXCIgKyBldi5kYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25FcnJvcihldjogRXZlbnQpIHtcbiAgICAgICAgIC8vVXRpbHMuTG9nKFwib25FcnJvciBTT0NLSlM6XCIsIEpTT04uc3RyaW5naWZ5KGV2KSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uQ2xvc2UoZXYpIHtcbiAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2NoZWNrX2Nvbm5lY3QnKSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fb25DbG9zZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuX29uQ2xvc2VzW2ldO1xuICAgICAgICAgICAgaWYgKGxpc3RlbmVyLnRhcmdldCAmJiBsaXN0ZW5lci50YXJnZXQgaW5zdGFuY2VvZiBPYmplY3QgJiYgbGlzdGVuZXIudGFyZ2V0Lm5vZGUpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb25DbG9zZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAgLy9VdGlscy5Mb2coXCJvbkNsb3NlIFNPQ0tKU1wiKTtcblxuICAgIH1cbn1cbiJdfQ==