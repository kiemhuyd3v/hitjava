"use strict";
cc._RF.push(module, '4ca09lb5WpN1qyZP0SX7eS4', 'LogEvent.Facebook');
// Loading/src/LogEvent/LogEvent.Facebook.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Configs_1 = require("../Configs");
var FacebookEvent = /** @class */ (function () {
    function FacebookEvent() {
    }
    FacebookEvent.getInstance = function () {
        if (this.instance == null) {
            this.instance = new FacebookEvent();
        }
        return this.instance;
    };
    FacebookEvent.prototype.isUseSDK = function () {
        if (cc.sys.isNative) {
            if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.OS_IOS) {
                return true;
            }
        }
        return false;
    };
    ;
    FacebookEvent.prototype.facebookCustomLogsEvent = function (eventName, params, valueToSum) {
        if (valueToSum === void 0) { valueToSum = null; }
        return;
        if (params === undefined)
            params = [];
        if (valueToSum === undefined || valueToSum == null)
            valueToSum = 0;
        var dataEvent = {};
        dataEvent.eventName = eventName;
        dataEvent.valueToSum = valueToSum;
        dataEvent.params = params;
        if (this.isUseSDK()) {
            // if (cc.sys.os == cc.sys.OS_ANDROID) {
            //     UtilsNative.sendLogEvent(dataEvent);
            // } else if (cc.sys.os == cc.sys.OS_IOS) {
            //     jsb.reflection.callStaticMethod("AppController", "facebookCustomLogsEvent:", dataEvent);
            // }
            sdkbox.PluginFacebook.logEvent(eventName, valueToSum);
        }
    };
    FacebookEvent.prototype.createEventParam = function (key, value, type) {
        if (type === void 0) { type = null; }
        if (type === undefined || type == null)
            type = Configs_1.default.ParamType.STRING;
        return {
            key: key,
            value: value,
            typeValue: type
        };
    };
    FacebookEvent.prototype.sendEventSdt = function (sdt) {
        var params = [];
        params.push(this.createEventParam("phone", sdt));
        this.facebookCustomLogsEvent(Configs_1.default.EventFacebook.EVENT_NAME_ADDED_PAYMENT_INFO, params);
    };
    FacebookEvent.prototype.sendEventSigupSuccess = function (method) {
        //method=facebook/normal;
        var params = [];
        params.push(this.createEventParam(Configs_1.default.ParamsFacebook.EVENT_PARAM_REGISTRATION_METHOD, method));
        this.facebookCustomLogsEvent(Configs_1.default.EventFacebook.EVENT_NAME_COMPLETED_REGISTRATION, params);
    };
    FacebookEvent.prototype.sendEventLogin = function (method) {
        var params = [];
        params.push(this.createEventParam(Configs_1.default.ParamsFacebook.EVENT_PARAM_LOGIN_METHOD, method, Configs_1.default.ParamType.STRING));
        this.facebookCustomLogsEvent(Configs_1.default.EventFacebook.EVENT_NAME_COMPLETED_LOGIN, params);
    };
    FacebookEvent.prototype.sendEventOpenApp = function () {
        //doan nay can check lai .trong doc ko co gui params gi.
        //  var params = [];
        //  params.push(this.createEventParam(Configs.ParamsFacebook.EVENT_NAME_ACTIVATED_APP,))
        // params[Configs.ParamsFacebook.EVENT_PARAM_LOGIN_METHOD] = "1";
        // this.facebookCustomLogsEvent(Configs.EventFacebook.EVENT_NAME_ACTIVATED_APP, params);
    };
    FacebookEvent.prototype.sendEventPurchase = function (currency, value) {
        var params = [];
        params.push(this.createEventParam(Configs_1.default.ParamsFacebook.EVENT_PARAM_CURRENCY, currency, Configs_1.default.ParamType.STRING));
        this.facebookCustomLogsEvent(Configs_1.default.EventFacebook.EVENT_NAME_PURCHASED, params, value);
    };
    FacebookEvent.prototype.sendEventMoneyChange = function (gameName, currency, value) {
        var params = [];
        params.push(this.createEventParam(Configs_1.default.ParamsFacebook.EVENT_PARAM_CONTENT, gameName, Configs_1.default.ParamType.STRING));
        params.push(this.createEventParam(Configs_1.default.ParamsFacebook.EVENT_PARAM_CURRENCY, currency, Configs_1.default.ParamType.STRING));
        this.facebookCustomLogsEvent(Configs_1.default.EventFacebook.EVENT_NAME_SPENT_CREDITS, params, value);
    };
    FacebookEvent.prototype.sendEventCashout = function (currencyName, value) {
        var params = [];
        params.push(this.createEventParam(Configs_1.default.ParamsFacebook.EVENT_PARAM_CURRENCY, currencyName, Configs_1.default.ParamType.STRING));
        this.facebookCustomLogsEvent(Configs_1.default.EventFacebook.EVENT_NAME_EARN_VIRTUAL_CURRENCY, params, value);
    };
    FacebookEvent.prototype.sendEventClickShop = function (currencyName, value) {
        var params = [];
        params.push(this.createEventParam(Configs_1.default.ParamsFacebook.EVENT_PARAM_CURRENCY, currencyName, Configs_1.default.ParamType.STRING));
        this.facebookCustomLogsEvent(Configs_1.default.EventFacebook.EVENT_NAME_INITIATED_CHECKOUT, params, value);
    };
    FacebookEvent.instance = null;
    return FacebookEvent;
}());
exports.default = FacebookEvent;

cc._RF.pop();