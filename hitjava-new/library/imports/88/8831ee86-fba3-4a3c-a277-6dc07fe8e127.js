"use strict";
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