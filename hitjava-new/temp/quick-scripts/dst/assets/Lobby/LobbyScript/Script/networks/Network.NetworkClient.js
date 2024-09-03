
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/networks/Network.NetworkClient.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd02d3/cUfVJtbLRo2vAnsLe', 'Network.NetworkClient');
// Lobby/LobbyScript/Script/networks/Network.NetworkClient.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Network_NetworkListener_1 = require("./Network.NetworkListener");
var NetworkClient = /** @class */ (function () {
    function NetworkClient() {
        this.ws = null;
        this.host = "";
        this.port = 0;
        this.isForceClose = false;
        this.isUseWSS = false;
        this.isAutoReconnect = true;
        this.retryCount = 0;
        this._onOpenes = [];
        this._onCloses = [];
    }
    NetworkClient.prototype.connect = function (host, port) {
        //  //Utils.Log("start connect: " + host + ":" + port + " =>" + cc.url.raw("resources/raw/cacert.pem"));
        this.isForceClose = false;
        this.host = host;
        this.port = port;
        if (this.ws == null) {
            if (cc.sys.isBrowser) {
                this.ws = new WebSocket("wss://" + host + ":" + port + "/websocket");
            }
            else {
                if (cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID) {
                    this.ws = new WebSocket("wss://" + host + ":" + port + "/websocket", [], cc.url.raw("resources/raw/cacert.pem"));
                    this.ws.binaryType = "arraybuffer";
                }
                else {
                    this.ws = new WebSocket("wss://" + host + ":" + port + "/websocket");
                }
            }
            this.ws.binaryType = "arraybuffer";
            this.ws.onopen = this.onOpen.bind(this);
            this.ws.onmessage = this.onMessage.bind(this);
            this.ws.onerror = this.onError.bind(this);
            this.ws.onclose = this.onClose.bind(this);
        }
        else {
            if (this.ws.readyState !== WebSocket.OPEN) {
                this.ws.close();
                this.ws = null;
                this.connect(host, port);
            }
        }
    };
    NetworkClient.prototype.onOpen = function (ev) {
        //Utils.Log("onOpen");
        this.retryCount = 0;
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
    NetworkClient.prototype.onMessage = function (ev) {
        //  //Utils.Log("onmessage: " + ev.data);
    };
    NetworkClient.prototype.onError = function (ev) {
        //Utils.Log("onError");
    };
    NetworkClient.prototype.onClose = function (ev) {
        var _this = this;
        //Utils.Log("onClose");
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
        if (this.isAutoReconnect && !this.isForceClose) {
            setTimeout(function () {
                if (!_this.isForceClose)
                    _this.connect(_this.host, _this.port);
            }, 2000);
        }
    };
    NetworkClient.prototype.addOnOpen = function (callback, target) {
        this._onOpenes.push(new Network_NetworkListener_1.default(target, callback));
    };
    NetworkClient.prototype.addOnClose = function (callback, target) {
        this._onCloses.push(new Network_NetworkListener_1.default(target, callback));
    };
    NetworkClient.prototype.close = function () {
        this.isForceClose = true;
        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }
    };
    NetworkClient.prototype.isConnected = function () {
        if (this.ws) {
            return this.ws.readyState == WebSocket.OPEN;
        }
        return false;
    };
    return NetworkClient;
}());
exports.default = NetworkClient;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXG5ldHdvcmtzXFxOZXR3b3JrLk5ldHdvcmtDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxxRUFBd0Q7QUFFeEQ7SUFBQTtRQUNJLE9BQUUsR0FBYyxJQUFJLENBQUM7UUFDckIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsb0JBQWUsR0FBWSxJQUFJLENBQUM7UUFDaEMsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUVmLGNBQVMsR0FBMkIsRUFBRSxDQUFDO1FBQ3ZDLGNBQVMsR0FBMkIsRUFBRSxDQUFDO0lBZ0czQyxDQUFDO0lBOUZHLCtCQUFPLEdBQVAsVUFBUSxJQUFZLEVBQUUsSUFBWTtRQUM5Qix3R0FBd0c7UUFDeEcsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksRUFBRTtZQUVqQixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFO2dCQUNsQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxZQUFZLENBQUMsQ0FBQzthQUN4RTtpQkFBTTtnQkFDSCxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFO29CQUNuRCxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksU0FBUyxDQUFD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LENBMUdBLEFBMEdDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXRpbHMgZnJvbSBcIi4uL2NvbW1vbi9VdGlsc1wiO1xuaW1wb3J0IE5ldHdvcmtMaXN0ZW5lciBmcm9tIFwiLi9OZXR3b3JrLk5ldHdvcmtMaXN0ZW5lclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXR3b3JrQ2xpZW50IHtcbiAgICB3czogV2ViU29ja2V0ID0gbnVsbDtcbiAgICBob3N0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHBvcnQ6IG51bWJlciA9IDA7XG4gICAgaXNGb3JjZUNsb3NlID0gZmFsc2U7XG4gICAgaXNVc2VXU1M6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0F1dG9SZWNvbm5lY3Q6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHJldHJ5Q291bnQgPSAwO1xuXG4gICAgX29uT3BlbmVzOiBBcnJheTxOZXR3b3JrTGlzdGVuZXI+ID0gW107XG4gICAgX29uQ2xvc2VzOiBBcnJheTxOZXR3b3JrTGlzdGVuZXI+ID0gW107XG5cbiAgICBjb25uZWN0KGhvc3Q6IHN0cmluZywgcG9ydDogbnVtYmVyKSB7XG4gICAgICAgIC8vICAvL1V0aWxzLkxvZyhcInN0YXJ0IGNvbm5lY3Q6IFwiICsgaG9zdCArIFwiOlwiICsgcG9ydCArIFwiID0+XCIgKyBjYy51cmwucmF3KFwicmVzb3VyY2VzL3Jhdy9jYWNlcnQucGVtXCIpKTtcbiAgICAgICAgdGhpcy5pc0ZvcmNlQ2xvc2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ob3N0ID0gaG9zdDtcbiAgICAgICAgdGhpcy5wb3J0ID0gcG9ydDtcbiAgICAgICAgaWYgKHRoaXMud3MgPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBpZiAoY2Muc3lzLmlzQnJvd3Nlcikge1xuICAgICAgICAgICAgICAgIHRoaXMud3MgPSBuZXcgV2ViU29ja2V0KFwid3NzOi8vXCIgKyBob3N0ICsgXCI6XCIgKyBwb3J0ICsgXCIvd2Vic29ja2V0XCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndzID0gbmV3IFdlYlNvY2tldChcIndzczovL1wiICsgaG9zdCArIFwiOlwiICsgcG9ydCArIFwiL3dlYnNvY2tldFwiLCBbXSwgY2MudXJsLnJhdyhcInJlc291cmNlcy9yYXcvY2FjZXJ0LnBlbVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud3MuYmluYXJ5VHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndzID0gbmV3IFdlYlNvY2tldChcIndzczovL1wiICsgaG9zdCArIFwiOlwiICsgcG9ydCArIFwiL3dlYnNvY2tldFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLndzLmJpbmFyeVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XG4gICAgICAgICAgICB0aGlzLndzLm9ub3BlbiA9IHRoaXMub25PcGVuLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLndzLm9ubWVzc2FnZSA9IHRoaXMub25NZXNzYWdlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLndzLm9uZXJyb3IgPSB0aGlzLm9uRXJyb3IuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMud3Mub25jbG9zZSA9IHRoaXMub25DbG9zZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy53cy5yZWFkeVN0YXRlICE9PSBXZWJTb2NrZXQuT1BFTikge1xuICAgICAgICAgICAgICAgIHRoaXMud3MuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLndzID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3QoaG9zdCwgcG9ydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25PcGVuKGV2OiBFdmVudCkge1xuICAgICAgICAgLy9VdGlscy5Mb2coXCJvbk9wZW5cIik7XG4gICAgICAgIHRoaXMucmV0cnlDb3VudCA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fb25PcGVuZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuX29uT3BlbmVzW2ldO1xuICAgICAgICAgICAgaWYgKGxpc3RlbmVyLnRhcmdldCAmJiBsaXN0ZW5lci50YXJnZXQgaW5zdGFuY2VvZiBPYmplY3QgJiYgbGlzdGVuZXIudGFyZ2V0Lm5vZGUpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb25PcGVuZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbk1lc3NhZ2UoZXY6IE1lc3NhZ2VFdmVudCkge1xuICAgICAgICAvLyAgLy9VdGlscy5Mb2coXCJvbm1lc3NhZ2U6IFwiICsgZXYuZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRXJyb3IoZXY6IEV2ZW50KSB7XG4gICAgICAgICAvL1V0aWxzLkxvZyhcIm9uRXJyb3JcIik7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uQ2xvc2UoZXY6IEV2ZW50KSB7XG4gICAgICAgICAvL1V0aWxzLkxvZyhcIm9uQ2xvc2VcIik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fb25DbG9zZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuX29uQ2xvc2VzW2ldO1xuICAgICAgICAgICAgaWYgKGxpc3RlbmVyLnRhcmdldCAmJiBsaXN0ZW5lci50YXJnZXQgaW5zdGFuY2VvZiBPYmplY3QgJiYgbGlzdGVuZXIudGFyZ2V0Lm5vZGUpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb25DbG9zZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0F1dG9SZWNvbm5lY3QgJiYgIXRoaXMuaXNGb3JjZUNsb3NlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNGb3JjZUNsb3NlKSB0aGlzLmNvbm5lY3QodGhpcy5ob3N0LCB0aGlzLnBvcnQpO1xuICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRPbk9wZW4oY2FsbGJhY2s6ICgpID0+IHZvaWQsIHRhcmdldDogY2MuQ29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuX29uT3BlbmVzLnB1c2gobmV3IE5ldHdvcmtMaXN0ZW5lcih0YXJnZXQsIGNhbGxiYWNrKSk7XG4gICAgfVxuXG4gICAgYWRkT25DbG9zZShjYWxsYmFjazogKCkgPT4gdm9pZCwgdGFyZ2V0OiBjYy5Db21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5fb25DbG9zZXMucHVzaChuZXcgTmV0d29ya0xpc3RlbmVyKHRhcmdldCwgY2FsbGJhY2spKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5pc0ZvcmNlQ2xvc2UgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy53cykge1xuICAgICAgICAgICAgdGhpcy53cy5jbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy53cyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0Nvbm5lY3RlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMud3MpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndzLnJlYWR5U3RhdGUgPT0gV2ViU29ja2V0Lk9QRU47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0iXX0=