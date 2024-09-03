"use strict";
cc._RF.push(module, '8582fS1gU1D1Lp+gCCJai7n', 'LogEvent');
// Loading/src/LogEvent/LogEvent.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Configs_1 = require("../Configs");
var LogEvent_Facebook_1 = require("./LogEvent.Facebook");
var LogEvent_FireBase_1 = require("./LogEvent.FireBase");
var LogEvent = /** @class */ (function () {
    function LogEvent() {
    }
    LogEvent.getInstance = function () {
        if (this.instance == null) {
            this.instance = new LogEvent();
        }
        return this.instance;
    };
    LogEvent.prototype.createEventParam = function (key, value, type) {
        if (type === void 0) { type = null; }
        if (type === undefined || type == null)
            type = Configs_1.default.ParamType.STRING;
        return {
            key: key,
            value: value,
            typeValue: type
        };
    };
    LogEvent.prototype.sendEventSdt = function (sdt) {
        LogEvent_Facebook_1.default.getInstance().sendEventSdt(sdt);
        LogEvent_FireBase_1.default.getInstance().sendEventSdt(sdt);
    };
    LogEvent.prototype.sendEventSigupSuccess = function (method) {
        LogEvent_Facebook_1.default.getInstance().sendEventSigupSuccess(method);
        LogEvent_FireBase_1.default.getInstance().sendEventSigupSuccess(method);
    };
    LogEvent.prototype.sendEventLogin = function (method) {
        LogEvent_Facebook_1.default.getInstance().sendEventLogin(method);
        LogEvent_FireBase_1.default.getInstance().sendEventLogin(method);
    };
    LogEvent.prototype.sendEventOpenApp = function () {
        LogEvent_FireBase_1.default.getInstance().sendEventOpenApp();
        // FacebookEvent.getInstance().sendEventLogin(method);
    };
    LogEvent.prototype.sendEventPurchase = function (currency, value) {
        LogEvent_Facebook_1.default.getInstance().sendEventPurchase(currency, value);
        LogEvent_FireBase_1.default.getInstance().sendEventPurchase(currency, value);
    };
    LogEvent.prototype.sendEventMoneyChange = function (gameName, currency, value) {
        LogEvent_Facebook_1.default.getInstance().sendEventMoneyChange(gameName, currency, value);
        LogEvent_FireBase_1.default.getInstance().sendEventMoneyChange(gameName, currency, value);
    };
    LogEvent.prototype.sendEventCashout = function (currencyName, value) {
        LogEvent_Facebook_1.default.getInstance().sendEventCashout(currencyName, value);
        LogEvent_FireBase_1.default.getInstance().sendEventCashout(currencyName, value);
    };
    LogEvent.prototype.sendEventClickShop = function (currencyName, value) {
        LogEvent_Facebook_1.default.getInstance().sendEventClickShop(currencyName, value);
        LogEvent_FireBase_1.default.getInstance().sendEventClickShop(currencyName, value);
    };
    LogEvent.instance = null;
    return LogEvent;
}());
exports.default = LogEvent;

cc._RF.pop();