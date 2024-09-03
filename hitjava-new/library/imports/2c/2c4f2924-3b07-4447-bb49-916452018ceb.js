"use strict";
cc._RF.push(module, '2c4f2kkOwdER7tJkWRSAYzr', 'LogEvent.FireBase');
// Loading/src/LogEvent/LogEvent.FireBase.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Configs_1 = require("../Configs");
var FirebaseEvent = /** @class */ (function () {
    function FirebaseEvent() {
    }
    FirebaseEvent.getInstance = function () {
        if (this.instance == null) {
            this.instance = new FirebaseEvent();
        }
        return this.instance;
    };
    FirebaseEvent.prototype.isUseSDK = function () {
        if (cc.sys.isNative) {
            if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.OS_IOS) {
                return true;
            }
        }
        return false;
    };
    ;
    FirebaseEvent.prototype.onClickSendLogEvent = function () {
        return;
        var evt = {};
        evt[sdkbox.firebase.Analytics.Param.kFIRParameterItemID] = 'id123456';
        evt[sdkbox.firebase.Analytics.Param.kFIRParameterItemName] = 'name123456';
        evt[sdkbox.firebase.Analytics.Param.kFIRParameterItemCategory] = 'category123456';
        evt[sdkbox.firebase.Analytics.Param.kFIRParameterPrice] = '123.4';
        sdkbox.firebase.Analytics.logEvent(sdkbox.firebase.Analytics.Event.kFIREventViewItem, evt);
        // log custom event
        // evt['customKey'] = 'custom value';
        // sdkbox.firebase.Analytics.logEvent("customEvent", evt);
        //  cc.log('Onclick log event:', JSON.stringify(evt));
    };
    FirebaseEvent.prototype.firebaseSendLogEvent = function (eventName, params) {
        return;
        if (!this.isUseSDK())
            return;
        sdkbox.firebase.Analytics.logEvent(eventName, params);
        //  cc.log("firebaseSendLogEvent:EventName=" + eventName + " Params:", JSON.stringify(params));
    };
    FirebaseEvent.prototype.sendEventSdt = function (sdt) {
        var params = {};
        params.phone = sdt;
        this.firebaseSendLogEvent(Configs_1.default.EventFirebase.ADD_PAYMENT_INFO, params);
    };
    FirebaseEvent.prototype.sendEventSigupSuccess = function (method) {
        //method=facebook/normal;
        var params = {};
        params[Configs_1.default.ParamsFireBase.METHOD] = method;
        this.firebaseSendLogEvent(Configs_1.default.EventFirebase.SIGN_UP, params);
    };
    FirebaseEvent.prototype.sendEventLogin = function (method) {
        var params = {};
        params[Configs_1.default.ParamsFireBase.METHOD] = method;
        this.firebaseSendLogEvent(Configs_1.default.EventFirebase.LOGIN, params);
    };
    FirebaseEvent.prototype.sendEventOpenApp = function () {
        var params = {};
        params[Configs_1.default.ParamsFireBase.CONTENT] = "1";
        this.firebaseSendLogEvent(Configs_1.default.EventFirebase.APP_OPEN, params);
    };
    FirebaseEvent.prototype.sendEventPurchase = function (currency, value) {
        var params = {};
        params[Configs_1.default.ParamsFireBase.CURRENCY] = currency;
        params[Configs_1.default.ParamsFireBase.VALUE] = value;
        this.firebaseSendLogEvent(Configs_1.default.EventFirebase.ECOMMERCE_PURCHASE, params);
    };
    FirebaseEvent.prototype.sendEventMoneyChange = function (gameName, currency, value) {
        var params = {};
        params[Configs_1.default.ParamsFireBase.ITEM_NAME] = gameName;
        params[Configs_1.default.ParamsFireBase.VIRTUAL_CURRENCY_NAME] = currency;
        params[Configs_1.default.ParamsFireBase.VALUE] = value;
        this.firebaseSendLogEvent(Configs_1.default.EventFirebase.SPEND_VIRTUAL_CURRENCY, params);
    };
    FirebaseEvent.prototype.sendEventCashout = function (currencyName, value) {
        var params = {};
        params[Configs_1.default.ParamsFireBase.VIRTUAL_CURRENCY_NAME] = currencyName;
        params[Configs_1.default.ParamsFireBase.VALUE] = value;
        this.firebaseSendLogEvent(Configs_1.default.EventFirebase.EARN_VIRTUAL_CURRENCY, params);
    };
    FirebaseEvent.prototype.sendEventClickShop = function (currencyName, value) {
        var params = {};
        params[Configs_1.default.ParamsFireBase.CURRENCY] = currencyName;
        params[Configs_1.default.ParamsFireBase.VALUE] = value;
        this.firebaseSendLogEvent(Configs_1.default.EventFirebase.BEGIN_CHECKOUT, params);
    };
    FirebaseEvent.instance = null;
    return FirebaseEvent;
}());
exports.default = FirebaseEvent;

cc._RF.pop();