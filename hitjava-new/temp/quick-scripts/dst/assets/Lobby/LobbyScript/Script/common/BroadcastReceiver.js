
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/common/BroadcastReceiver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8831e6G+6NKPKJ3bcB/6OEn', 'BroadcastReceiver');
// Lobby/LobbyScript/Script/common/BroadcastReceiver.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common;
(function (common) {
    var BroadcastListener = /** @class */ (function () {
        function BroadcastListener(action, callback, target) {
            this.action = action;
            this.target = target;
            this.callback = callback;
        }
        return BroadcastListener;
    }());
    common.BroadcastListener = BroadcastListener;
    var BroadcastReceiver = /** @class */ (function () {
        function BroadcastReceiver() {
        }
        BroadcastReceiver.register = function (action, callback, target) {
            this.listeners.push(new BroadcastListener(action, callback, target));
        };
        BroadcastReceiver.unRegisterByAction = function (action) {
            for (var i = 0; i < this.listeners.length; i++) {
                if (this.listeners[i].action == action) {
                    this.listeners.splice(i--, 1);
                }
            }
        };
        BroadcastReceiver.unRegisterByTarget = function (target) {
            for (var i = 0; i < this.listeners.length; i++) {
                if (this.listeners[i].target == target) {
                    this.listeners.splice(i--, 1);
                }
            }
        };
        BroadcastReceiver.send = function (action, data) {
            if (data === void 0) { data = null; }
            for (var i = 0; i < this.listeners.length; i++) {
                var listener = this.listeners[i];
                if (listener.action == action) {
                    if (listener.target && listener.target instanceof Object && listener.target.node) {
                        listener.callback(data);
                    }
                    else {
                        this.listeners.splice(i--, 1);
                    }
                }
            }
        };
        BroadcastReceiver.UPDATE_NICKNAME_SUCCESS = "UPDATE_NICKNAME_SUCCESS";
        BroadcastReceiver.LOGINED = "LOGINED";
        BroadcastReceiver.USER_INFO_UPDATED = "USER_INFO_UPDATED";
        BroadcastReceiver.USER_LOGOUT = "USER_LOGOUT";
        BroadcastReceiver.USER_UPDATE_COIN = "USER_UPDATE_COIN";
        BroadcastReceiver.ON_AUDIO_CHANGED = "ON_AUDIO_CHANGED";
        BroadcastReceiver.ON_UPDATE_MAIL = "ON_UPDATE_MAIL";
        BroadcastReceiver.listeners = new Array();
        return BroadcastReceiver;
    }());
    common.BroadcastReceiver = BroadcastReceiver;
})(common || (common = {}));
exports.default = common.BroadcastReceiver;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXGNvbW1vblxcQnJvYWRjYXN0UmVjZWl2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFVLE1BQU0sQ0F5RGY7QUF6REQsV0FBVSxNQUFNO0lBQ1o7UUFLSSwyQkFBWSxNQUFjLEVBQUUsUUFBNkIsRUFBRSxNQUFvQjtZQUMzRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUM3QixDQUFDO1FBQ0wsd0JBQUM7SUFBRCxDQVZBLEFBVUMsSUFBQTtJQVZZLHdCQUFpQixvQkFVN0IsQ0FBQTtJQUVEO1FBQUE7UUEyQ0EsQ0FBQztRQWhDaUIsMEJBQVEsR0FBdEIsVUFBdUIsTUFBYyxFQUFFLFFBQTZCLEVBQUUsTUFBb0I7WUFDdEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDekUsQ0FBQztRQUVhLG9DQUFrQixHQUFoQyxVQUFpQyxNQUFjO1lBQzNDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQztnQkFDMUMsSUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxNQUFNLEVBQUM7b0JBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNqQzthQUNKO1FBQ0wsQ0FBQztRQUVhLG9DQUFrQixHQUFoQyxVQUFpQyxNQUFvQjtZQUNqRCxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUM7Z0JBQzFDLElBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksTUFBTSxFQUFDO29CQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDakM7YUFDSjtRQUNMLENBQUM7UUFFYSxzQkFBSSxHQUFsQixVQUFtQixNQUFjLEVBQUUsSUFBZ0I7WUFBaEIscUJBQUEsRUFBQSxXQUFnQjtZQUMvQyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUM7Z0JBQzFDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLElBQUcsUUFBUSxDQUFDLE1BQU0sSUFBSSxNQUFNLEVBQUM7b0JBQ3pCLElBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxZQUFZLE1BQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTt3QkFDOUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDM0I7eUJBQU07d0JBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQ2pDO2lCQUNKO2FBQ0o7UUFDTCxDQUFDO1FBekNhLHlDQUF1QixHQUFHLHlCQUF5QixDQUFDO1FBQ3BELHlCQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ3BCLG1DQUFpQixHQUFHLG1CQUFtQixDQUFDO1FBQ3hDLDZCQUFXLEdBQUcsYUFBYSxDQUFDO1FBQzVCLGtDQUFnQixHQUFHLGtCQUFrQixDQUFDO1FBQ3RDLGtDQUFnQixHQUFHLGtCQUFrQixDQUFDO1FBQ3RDLGdDQUFjLEdBQUcsZ0JBQWdCLENBQUM7UUFFakMsMkJBQVMsR0FBNkIsSUFBSSxLQUFLLEVBQXFCLENBQUM7UUFrQ3hGLHdCQUFDO0tBM0NELEFBMkNDLElBQUE7SUEzQ1ksd0JBQWlCLG9CQTJDN0IsQ0FBQTtBQUNMLENBQUMsRUF6RFMsTUFBTSxLQUFOLE1BQU0sUUF5RGY7QUFFRCxrQkFBZSxNQUFNLENBQUMsaUJBQWlCLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgY29tbW9uIHtcbiAgICBleHBvcnQgY2xhc3MgQnJvYWRjYXN0TGlzdGVuZXIge1xuICAgICAgICBhY3Rpb246IHN0cmluZztcbiAgICAgICAgdGFyZ2V0OiBjYy5Db21wb25lbnQ7XG4gICAgICAgIGNhbGxiYWNrOiAoZGF0YTogYW55KSA9PiB2b2lkO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGFjdGlvbjogc3RyaW5nLCBjYWxsYmFjazogKGRhdGE6IGFueSkgPT4gdm9pZCwgdGFyZ2V0OiBjYy5Db21wb25lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgQnJvYWRjYXN0UmVjZWl2ZXIge1xuICAgICAgICBwdWJsaWMgc3RhdGljIFVQREFURV9OSUNLTkFNRV9TVUNDRVNTID0gXCJVUERBVEVfTklDS05BTUVfU1VDQ0VTU1wiO1xuICAgICAgICBwdWJsaWMgc3RhdGljIExPR0lORUQgPSBcIkxPR0lORURcIjtcbiAgICAgICAgcHVibGljIHN0YXRpYyBVU0VSX0lORk9fVVBEQVRFRCA9IFwiVVNFUl9JTkZPX1VQREFURURcIjtcbiAgICAgICAgcHVibGljIHN0YXRpYyBVU0VSX0xPR09VVCA9IFwiVVNFUl9MT0dPVVRcIjtcbiAgICAgICAgcHVibGljIHN0YXRpYyBVU0VSX1VQREFURV9DT0lOID0gXCJVU0VSX1VQREFURV9DT0lOXCI7XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgT05fQVVESU9fQ0hBTkdFRCA9IFwiT05fQVVESU9fQ0hBTkdFRFwiO1xuICAgICAgICBwdWJsaWMgc3RhdGljIE9OX1VQREFURV9NQUlMID0gXCJPTl9VUERBVEVfTUFJTFwiO1xuXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGxpc3RlbmVyczogQXJyYXk8QnJvYWRjYXN0TGlzdGVuZXI+ID0gbmV3IEFycmF5PEJyb2FkY2FzdExpc3RlbmVyPigpO1xuXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXIoYWN0aW9uOiBzdHJpbmcsIGNhbGxiYWNrOiAoZGF0YTogYW55KSA9PiB2b2lkLCB0YXJnZXQ6IGNjLkNvbXBvbmVudCkge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChuZXcgQnJvYWRjYXN0TGlzdGVuZXIoYWN0aW9uLCBjYWxsYmFjaywgdGFyZ2V0KSk7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgc3RhdGljIHVuUmVnaXN0ZXJCeUFjdGlvbihhY3Rpb246IHN0cmluZyl7XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMubGlzdGVuZXJzW2ldLmFjdGlvbiA9PSBhY3Rpb24pe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoaS0tLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgc3RhdGljIHVuUmVnaXN0ZXJCeVRhcmdldCh0YXJnZXQ6IGNjLkNvbXBvbmVudCl7XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMubGlzdGVuZXJzW2ldLnRhcmdldCA9PSB0YXJnZXQpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoaS0tLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgc3RhdGljIHNlbmQoYWN0aW9uOiBzdHJpbmcsIGRhdGE6IGFueSA9IG51bGwpe1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLmxpc3RlbmVyc1tpXTtcbiAgICAgICAgICAgICAgICBpZihsaXN0ZW5lci5hY3Rpb24gPT0gYWN0aW9uKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVyLnRhcmdldCAmJiBsaXN0ZW5lci50YXJnZXQgaW5zdGFuY2VvZiBPYmplY3QgJiYgbGlzdGVuZXIudGFyZ2V0Lm5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGktLSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbW1vbi5Ccm9hZGNhc3RSZWNlaXZlcjsiXX0=