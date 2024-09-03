
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Loading/src/LogEvent/LogEvent.Facebook.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9hZGluZ1xcc3JjXFxMb2dFdmVudFxcTG9nRXZlbnQuRmFjZWJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBaUM7QUFJakM7SUFBQTtJQXdGQSxDQUFDO0lBdEZpQix5QkFBVyxHQUF6QjtRQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO2dCQUM5RCxPQUFPLElBQUksQ0FBQzthQUNmO1NBQ0o7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQUEsQ0FBQztJQUVGLCtDQUF1QixHQUF2QixVQUF3QixTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQWlCO1FBQWpCLDJCQUFBLEVBQUEsaUJBQWlCO1FBQ3hELE9BQU87UUFDUCxJQUFJLE1BQU0sS0FBSyxTQUFTO1lBQUUsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUN0QyxJQUFJLFVBQVUsS0FBSyxTQUFTLElBQUksVUFBVSxJQUFJLElBQUk7WUFBRSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRW5FLElBQUksU0FBUyxHQUFRLEVBQUUsQ0FBQztRQUN4QixTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUNoQyxTQUFTLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUNsQyxTQUFTLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUMxQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNqQix3Q0FBd0M7WUFDeEMsMkNBQTJDO1lBQzNDLDJDQUEyQztZQUMzQywrRkFBK0Y7WUFDL0YsSUFBSTtZQUNKLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUN6RDtJQUVMLENBQUM7SUFDRCx3Q0FBZ0IsR0FBaEIsVUFBaUIsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFXO1FBQVgscUJBQUEsRUFBQSxXQUFXO1FBQ3BDLElBQUksSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUFJLElBQUksSUFBSTtZQUFFLElBQUksR0FBRyxpQkFBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDeEUsT0FBTztZQUNILEdBQUcsRUFBRSxHQUFHO1lBQ1IsS0FBSyxFQUFFLEtBQUs7WUFDWixTQUFTLEVBQUUsSUFBSTtTQUNsQixDQUFDO0lBQ04sQ0FBQztJQUNELG9DQUFZLEdBQVosVUFBYSxHQUFHO1FBQ1osSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBTyxDQUFDLGFBQWEsQ0FBQyw2QkFBNkIsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBQ0QsNkNBQXFCLEdBQXJCLFVBQXNCLE1BQWM7UUFDaEMseUJBQXlCO1FBQ3pCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBTyxDQUFDLGNBQWMsQ0FBQywrQkFBK0IsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ25HLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBTyxDQUFDLGFBQWEsQ0FBQyxpQ0FBaUMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNsRyxDQUFDO0lBQ0Qsc0NBQWMsR0FBZCxVQUFlLE1BQWM7UUFDekIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFPLENBQUMsY0FBYyxDQUFDLHdCQUF3QixFQUFFLE1BQU0sRUFBRSxpQkFBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3RILElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBTyxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBQ0Qsd0NBQWdCLEdBQWhCO1FBQ0ksd0RBQXdEO1FBQ3hELG9CQUFvQjtRQUNwQix3RkFBd0Y7UUFDeEYsaUVBQWlFO1FBQ2pFLHdGQUF3RjtJQUM1RixDQUFDO0lBQ0QseUNBQWlCLEdBQWpCLFVBQWtCLFFBQVEsRUFBRSxLQUFLO1FBQzdCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBTyxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsaUJBQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNwSCxJQUFJLENBQUMsdUJBQXVCLENBQUMsaUJBQU8sQ0FBQyxhQUFhLENBQUMsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUFDRCw0Q0FBb0IsR0FBcEIsVUFBcUIsUUFBZ0IsRUFBRSxRQUFnQixFQUFFLEtBQWE7UUFDbEUsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFPLENBQUMsY0FBYyxDQUFDLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxpQkFBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ25ILE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFPLENBQUMsY0FBYyxDQUFDLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxpQkFBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3BILElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBTyxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEcsQ0FBQztJQUNELHdDQUFnQixHQUFoQixVQUFpQixZQUFZLEVBQUUsS0FBSztRQUNoQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQU8sQ0FBQyxjQUFjLENBQUMsb0JBQW9CLEVBQUUsWUFBWSxFQUFFLGlCQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDeEgsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGlCQUFPLENBQUMsYUFBYSxDQUFDLGdDQUFnQyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4RyxDQUFDO0lBQ0QsMENBQWtCLEdBQWxCLFVBQW1CLFlBQVksRUFBRSxLQUFLO1FBQ2xDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBTyxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsRUFBRSxZQUFZLEVBQUUsaUJBQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN4SCxJQUFJLENBQUMsdUJBQXVCLENBQUMsaUJBQU8sQ0FBQyxhQUFhLENBQUMsNkJBQTZCLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUF0RmMsc0JBQVEsR0FBa0IsSUFBSSxDQUFDO0lBdUZsRCxvQkFBQztDQXhGRCxBQXdGQyxJQUFBO2tCQXhGb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWdzIGZyb20gXCIuLi9Db25maWdzXCI7XG5pbXBvcnQgVXRpbHNOYXRpdmUgZnJvbSBcIi4uL1V0aWxzTmF0aXZlXCI7XG5pbXBvcnQgTG9nRXZlbnQgZnJvbSBcIi4vTG9nRXZlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZWJvb2tFdmVudCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEZhY2Vib29rRXZlbnQgPSBudWxsO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogRmFjZWJvb2tFdmVudCB7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRmFjZWJvb2tFdmVudCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cbiAgICBpc1VzZVNESygpIHtcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgZmFjZWJvb2tDdXN0b21Mb2dzRXZlbnQoZXZlbnROYW1lLCBwYXJhbXMsIHZhbHVlVG9TdW0gPSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHBhcmFtcyA9PT0gdW5kZWZpbmVkKSBwYXJhbXMgPSBbXTtcbiAgICAgICAgaWYgKHZhbHVlVG9TdW0gPT09IHVuZGVmaW5lZCB8fCB2YWx1ZVRvU3VtID09IG51bGwpIHZhbHVlVG9TdW0gPSAwO1xuXG4gICAgICAgIHZhciBkYXRhRXZlbnQ6IGFueSA9IHt9O1xuICAgICAgICBkYXRhRXZlbnQuZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgICAgICBkYXRhRXZlbnQudmFsdWVUb1N1bSA9IHZhbHVlVG9TdW07XG4gICAgICAgIGRhdGFFdmVudC5wYXJhbXMgPSBwYXJhbXM7XG4gICAgICAgIGlmICh0aGlzLmlzVXNlU0RLKCkpIHtcbiAgICAgICAgICAgIC8vIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQpIHtcbiAgICAgICAgICAgIC8vICAgICBVdGlsc05hdGl2ZS5zZW5kTG9nRXZlbnQoZGF0YUV2ZW50KTtcbiAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MpIHtcbiAgICAgICAgICAgIC8vICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiQXBwQ29udHJvbGxlclwiLCBcImZhY2Vib29rQ3VzdG9tTG9nc0V2ZW50OlwiLCBkYXRhRXZlbnQpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgc2RrYm94LlBsdWdpbkZhY2Vib29rLmxvZ0V2ZW50KGV2ZW50TmFtZSwgdmFsdWVUb1N1bSk7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBjcmVhdGVFdmVudFBhcmFtKGtleSwgdmFsdWUsIHR5cGUgPSBudWxsKSB7XG4gICAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZSA9PSBudWxsKSB0eXBlID0gQ29uZmlncy5QYXJhbVR5cGUuU1RSSU5HO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICB0eXBlVmFsdWU6IHR5cGVcbiAgICAgICAgfTtcbiAgICB9XG4gICAgc2VuZEV2ZW50U2R0KHNkdCkge1xuICAgICAgICB2YXIgcGFyYW1zID0gW107XG4gICAgICAgIHBhcmFtcy5wdXNoKHRoaXMuY3JlYXRlRXZlbnRQYXJhbShcInBob25lXCIsIHNkdCkpO1xuICAgICAgICB0aGlzLmZhY2Vib29rQ3VzdG9tTG9nc0V2ZW50KENvbmZpZ3MuRXZlbnRGYWNlYm9vay5FVkVOVF9OQU1FX0FEREVEX1BBWU1FTlRfSU5GTywgcGFyYW1zKTtcbiAgICB9XG4gICAgc2VuZEV2ZW50U2lndXBTdWNjZXNzKG1ldGhvZDogc3RyaW5nKSB7XG4gICAgICAgIC8vbWV0aG9kPWZhY2Vib29rL25vcm1hbDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xuICAgICAgICBwYXJhbXMucHVzaCh0aGlzLmNyZWF0ZUV2ZW50UGFyYW0oQ29uZmlncy5QYXJhbXNGYWNlYm9vay5FVkVOVF9QQVJBTV9SRUdJU1RSQVRJT05fTUVUSE9ELCBtZXRob2QpKTtcbiAgICAgICAgdGhpcy5mYWNlYm9va0N1c3RvbUxvZ3NFdmVudChDb25maWdzLkV2ZW50RmFjZWJvb2suRVZFTlRfTkFNRV9DT01QTEVURURfUkVHSVNUUkFUSU9OLCBwYXJhbXMpO1xuICAgIH1cbiAgICBzZW5kRXZlbnRMb2dpbihtZXRob2Q6IHN0cmluZykge1xuICAgICAgICB2YXIgcGFyYW1zID0gW107XG4gICAgICAgIHBhcmFtcy5wdXNoKHRoaXMuY3JlYXRlRXZlbnRQYXJhbShDb25maWdzLlBhcmFtc0ZhY2Vib29rLkVWRU5UX1BBUkFNX0xPR0lOX01FVEhPRCwgbWV0aG9kLCBDb25maWdzLlBhcmFtVHlwZS5TVFJJTkcpKTtcbiAgICAgICAgdGhpcy5mYWNlYm9va0N1c3RvbUxvZ3NFdmVudChDb25maWdzLkV2ZW50RmFjZWJvb2suRVZFTlRfTkFNRV9DT01QTEVURURfTE9HSU4sIHBhcmFtcyk7XG4gICAgfVxuICAgIHNlbmRFdmVudE9wZW5BcHAoKSB7XG4gICAgICAgIC8vZG9hbiBuYXkgY2FuIGNoZWNrIGxhaSAudHJvbmcgZG9jIGtvIGNvIGd1aSBwYXJhbXMgZ2kuXG4gICAgICAgIC8vICB2YXIgcGFyYW1zID0gW107XG4gICAgICAgIC8vICBwYXJhbXMucHVzaCh0aGlzLmNyZWF0ZUV2ZW50UGFyYW0oQ29uZmlncy5QYXJhbXNGYWNlYm9vay5FVkVOVF9OQU1FX0FDVElWQVRFRF9BUFAsKSlcbiAgICAgICAgLy8gcGFyYW1zW0NvbmZpZ3MuUGFyYW1zRmFjZWJvb2suRVZFTlRfUEFSQU1fTE9HSU5fTUVUSE9EXSA9IFwiMVwiO1xuICAgICAgICAvLyB0aGlzLmZhY2Vib29rQ3VzdG9tTG9nc0V2ZW50KENvbmZpZ3MuRXZlbnRGYWNlYm9vay5FVkVOVF9OQU1FX0FDVElWQVRFRF9BUFAsIHBhcmFtcyk7XG4gICAgfVxuICAgIHNlbmRFdmVudFB1cmNoYXNlKGN1cnJlbmN5LCB2YWx1ZSkgey8vbuG6oXAgdGnhu4FuIHRoYW5oIGNvbmdcbiAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xuICAgICAgICBwYXJhbXMucHVzaCh0aGlzLmNyZWF0ZUV2ZW50UGFyYW0oQ29uZmlncy5QYXJhbXNGYWNlYm9vay5FVkVOVF9QQVJBTV9DVVJSRU5DWSwgY3VycmVuY3ksIENvbmZpZ3MuUGFyYW1UeXBlLlNUUklORykpO1xuICAgICAgICB0aGlzLmZhY2Vib29rQ3VzdG9tTG9nc0V2ZW50KENvbmZpZ3MuRXZlbnRGYWNlYm9vay5FVkVOVF9OQU1FX1BVUkNIQVNFRCwgcGFyYW1zLCB2YWx1ZSk7XG4gICAgfVxuICAgIHNlbmRFdmVudE1vbmV5Q2hhbmdlKGdhbWVOYW1lOiBzdHJpbmcsIGN1cnJlbmN5OiBzdHJpbmcsIHZhbHVlOiBOdW1iZXIpIHtcbiAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xuICAgICAgICBwYXJhbXMucHVzaCh0aGlzLmNyZWF0ZUV2ZW50UGFyYW0oQ29uZmlncy5QYXJhbXNGYWNlYm9vay5FVkVOVF9QQVJBTV9DT05URU5ULCBnYW1lTmFtZSwgQ29uZmlncy5QYXJhbVR5cGUuU1RSSU5HKSk7XG4gICAgICAgIHBhcmFtcy5wdXNoKHRoaXMuY3JlYXRlRXZlbnRQYXJhbShDb25maWdzLlBhcmFtc0ZhY2Vib29rLkVWRU5UX1BBUkFNX0NVUlJFTkNZLCBjdXJyZW5jeSwgQ29uZmlncy5QYXJhbVR5cGUuU1RSSU5HKSk7XG4gICAgICAgIHRoaXMuZmFjZWJvb2tDdXN0b21Mb2dzRXZlbnQoQ29uZmlncy5FdmVudEZhY2Vib29rLkVWRU5UX05BTUVfU1BFTlRfQ1JFRElUUywgcGFyYW1zLCB2YWx1ZSk7XG4gICAgfVxuICAgIHNlbmRFdmVudENhc2hvdXQoY3VycmVuY3lOYW1lLCB2YWx1ZSkgeyAvL8SQ4buVaSB0aMaw4bufbmcgdGjDoG5oIGPDtG5nLlxuICAgICAgICB2YXIgcGFyYW1zID0gW107XG4gICAgICAgIHBhcmFtcy5wdXNoKHRoaXMuY3JlYXRlRXZlbnRQYXJhbShDb25maWdzLlBhcmFtc0ZhY2Vib29rLkVWRU5UX1BBUkFNX0NVUlJFTkNZLCBjdXJyZW5jeU5hbWUsIENvbmZpZ3MuUGFyYW1UeXBlLlNUUklORykpO1xuICAgICAgICB0aGlzLmZhY2Vib29rQ3VzdG9tTG9nc0V2ZW50KENvbmZpZ3MuRXZlbnRGYWNlYm9vay5FVkVOVF9OQU1FX0VBUk5fVklSVFVBTF9DVVJSRU5DWSwgcGFyYW1zLCB2YWx1ZSk7XG4gICAgfVxuICAgIHNlbmRFdmVudENsaWNrU2hvcChjdXJyZW5jeU5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcbiAgICAgICAgcGFyYW1zLnB1c2godGhpcy5jcmVhdGVFdmVudFBhcmFtKENvbmZpZ3MuUGFyYW1zRmFjZWJvb2suRVZFTlRfUEFSQU1fQ1VSUkVOQ1ksIGN1cnJlbmN5TmFtZSwgQ29uZmlncy5QYXJhbVR5cGUuU1RSSU5HKSk7XG4gICAgICAgIHRoaXMuZmFjZWJvb2tDdXN0b21Mb2dzRXZlbnQoQ29uZmlncy5FdmVudEZhY2Vib29rLkVWRU5UX05BTUVfSU5JVElBVEVEX0NIRUNLT1VULCBwYXJhbXMsIHZhbHVlKTtcbiAgICB9XG59XG4iXX0=