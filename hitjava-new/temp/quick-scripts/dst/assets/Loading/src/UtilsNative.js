
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Loading/src/UtilsNative.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '336b2+HbC9HMZQobmyH8RwZ', 'UtilsNative');
// Loading/src/UtilsNative.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Global_1 = require("./Global");
var SEND_LOG_EVENT = "1";
var GET_DEVICE_ID = "2";
var VERIFY_PHONE = "3";
var VERIFY_OTP = "4";
var COPY_CLIPBOARD = "5";
cc.NativeCallJS = function (evt, params, param2) {
    // if (evt !== UPDATE_INFO_TIME)
    switch (evt + '') {
        case SEND_LOG_EVENT: {
            //  cc.log("Send Log Event:");
            break;
        }
        case GET_DEVICE_ID: {
            //  cc.log("Device id:" + params);
            break;
        }
        case VERIFY_PHONE: {
            var token = params;
            Global_1.Global.PopupSecurity.actGetOtpServer(token);
            break;
        }
        case VERIFY_OTP: {
            var result = params;
            Global_1.Global.PopupSecurity.actGetVerifyCode(result);
            break;
        }
        default: {
            //  cc.log('-=-=-=-=-=->>>No CASE:' + evt);
            break;
        }
    }
};
var UtilsNative = /** @class */ (function () {
    function UtilsNative() {
    }
    UtilsNative.onCallNative = function (evt, params) {
        if (cc.sys.os === cc.sys.OS_ANDROID && cc.sys.isNative) {
            //  cc.log('Call Native-=-=-= EVT ' + evt + " PARAMS " + params)
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "onCallFromJavascript", "(Ljava/lang/String;Ljava/lang/String;)V", evt, params);
        }
        else if (cc.sys.os === cc.sys.OS_IOS && cc.sys.isNative) {
            //  cc.log('Call Native-=-=-= EVT ' + evt)
            jsb.reflection.callStaticMethod("AppController", "onCallFromJavaScript:andParams:", evt, params);
        }
    };
    UtilsNative.sendLogEvent = function (jsonData) {
        //  cc.log("sendLogEvent:", JSON.stringify(jsonData));
        this.onCallNative(SEND_LOG_EVENT, JSON.stringify(jsonData));
    };
    UtilsNative.getDeviceId = function () {
        // this.onCallNative(GET_DEVICE_ID,"");
        if (!CC_JSB)
            return;
        var deviceID;
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            deviceID = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getDeviceId", "()Ljava/lang/String;");
        }
        else if (cc.sys.os == cc.sys.OS_IOS) {
            deviceID = jsb.reflection.callStaticMethod("AppController", "getDeviceId:andParams:", "", "");
        }
        //  cc.log("Device ID=" + deviceID);
        return deviceID;
    };
    UtilsNative.verifyPhone = function (phoneNumber) {
        this.onCallNative(VERIFY_PHONE, phoneNumber);
    };
    UtilsNative.verifyOTP = function (otp) {
        this.onCallNative(VERIFY_OTP, otp);
    };
    UtilsNative.httpGet = function (url, onFinished) {
        var xhr = new XMLHttpRequest();
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
        xhr.open("GET", url, true);
        xhr.send();
    };
    UtilsNative.copyClipboard = function (text) {
        this.onCallNative(COPY_CLIPBOARD, text);
    };
    return UtilsNative;
}());
exports.default = UtilsNative;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9hZGluZ1xcc3JjXFxVdGlsc05hdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUFrQztBQUVsQyxJQUFJLGNBQWMsR0FBRyxHQUFHLENBQUM7QUFDekIsSUFBSSxhQUFhLEdBQUcsR0FBRyxDQUFDO0FBQ3hCLElBQUksWUFBWSxHQUFHLEdBQUcsQ0FBQztBQUN2QixJQUFJLFVBQVUsR0FBRyxHQUFHLENBQUM7QUFDckIsSUFBSSxjQUFjLEdBQUcsR0FBRyxDQUFDO0FBRXpCLEVBQUUsQ0FBQyxZQUFZLEdBQUcsVUFBVSxHQUFXLEVBQUUsTUFBYyxFQUFFLE1BQWM7SUFDbkUsZ0NBQWdDO0lBQ2hDLFFBQVEsR0FBRyxHQUFHLEVBQUUsRUFBRTtRQUNkLEtBQUssY0FBYyxDQUFDLENBQUM7WUFDakIsOEJBQThCO1lBQzlCLE1BQU07U0FDVDtRQUNELEtBQUssYUFBYSxDQUFDLENBQUM7WUFDaEIsa0NBQWtDO1lBQ2xDLE1BQU07U0FDVDtRQUNELEtBQUssWUFBWSxDQUFDLENBQUM7WUFDZixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUM7WUFDbkIsZUFBTSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUMsTUFBTTtTQUNUO1FBQ0QsS0FBSyxVQUFVLENBQUMsQ0FBQztZQUNiLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNwQixlQUFNLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlDLE1BQU07U0FDVDtRQUNELE9BQU8sQ0FBQyxDQUFDO1lBQ0wsMkNBQTJDO1lBQzNDLE1BQU07U0FDVDtLQUNKO0FBQ0wsQ0FBQyxDQUFBO0FBRUQ7SUFBQTtJQTJEQSxDQUFDO0lBMURVLHdCQUFZLEdBQW5CLFVBQW9CLEdBQVcsRUFBRSxNQUFjO1FBQzNDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxD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Q3JCLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTCxrQkFBQztBQUFELENBM0RBLEFBMkRDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi9HbG9iYWxcIjtcblxudmFyIFNFTkRfTE9HX0VWRU5UID0gXCIxXCI7XG52YXIgR0VUX0RFVklDRV9JRCA9IFwiMlwiO1xudmFyIFZFUklGWV9QSE9ORSA9IFwiM1wiO1xudmFyIFZFUklGWV9PVFAgPSBcIjRcIjtcbnZhciBDT1BZX0NMSVBCT0FSRCA9IFwiNVwiO1xuXG5jYy5OYXRpdmVDYWxsSlMgPSBmdW5jdGlvbiAoZXZ0OiBzdHJpbmcsIHBhcmFtczogc3RyaW5nLCBwYXJhbTI6IHN0cmluZykge1xuICAgIC8vIGlmIChldnQgIT09IFVQREFURV9JTkZPX1RJTUUpXG4gICAgc3dpdGNoIChldnQgKyAnJykge1xuICAgICAgICBjYXNlIFNFTkRfTE9HX0VWRU5UOiB7XG4gICAgICAgICAgICAvLyAgY2MubG9nKFwiU2VuZCBMb2cgRXZlbnQ6XCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBHRVRfREVWSUNFX0lEOiB7XG4gICAgICAgICAgICAvLyAgY2MubG9nKFwiRGV2aWNlIGlkOlwiICsgcGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgVkVSSUZZX1BIT05FOiB7XG4gICAgICAgICAgICBsZXQgdG9rZW4gPSBwYXJhbXM7XG4gICAgICAgICAgICBHbG9iYWwuUG9wdXBTZWN1cml0eS5hY3RHZXRPdHBTZXJ2ZXIodG9rZW4pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBWRVJJRllfT1RQOiB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gcGFyYW1zO1xuICAgICAgICAgICAgR2xvYmFsLlBvcHVwU2VjdXJpdHkuYWN0R2V0VmVyaWZ5Q29kZShyZXN1bHQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgLy8gIGNjLmxvZygnLT0tPS09LT0tPS0+Pj5ObyBDQVNFOicgKyBldnQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxzTmF0aXZlIHtcbiAgICBzdGF0aWMgb25DYWxsTmF0aXZlKGV2dDogc3RyaW5nLCBwYXJhbXM6IHN0cmluZykge1xuICAgICAgICBpZiAoY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfQU5EUk9JRCAmJiBjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIC8vICBjYy5sb2coJ0NhbGwgTmF0aXZlLT0tPS09IEVWVCAnICsgZXZ0ICsgXCIgUEFSQU1TIFwiICsgcGFyYW1zKVxuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwib25DYWxsRnJvbUphdmFzY3JpcHRcIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgZXZ0LCBwYXJhbXMpO1xuICAgICAgICB9IGVsc2UgaWYgKGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0lPUyAmJiBjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIC8vICBjYy5sb2coJ0NhbGwgTmF0aXZlLT0tPS09IEVWVCAnICsgZXZ0KVxuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIkFwcENvbnRyb2xsZXJcIiwgXCJvbkNhbGxGcm9tSmF2YVNjcmlwdDphbmRQYXJhbXM6XCIsIGV2dCwgcGFyYW1zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBzZW5kTG9nRXZlbnQoanNvbkRhdGEpIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcInNlbmRMb2dFdmVudDpcIiwgSlNPTi5zdHJpbmdpZnkoanNvbkRhdGEpKTtcbiAgICAgICAgdGhpcy5vbkNhbGxOYXRpdmUoU0VORF9MT0dfRVZFTlQsIEpTT04uc3RyaW5naWZ5KGpzb25EYXRhKSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXREZXZpY2VJZCgpIHtcbiAgICAgICAgLy8gdGhpcy5vbkNhbGxOYXRpdmUoR0VUX0RFVklDRV9JRCxcIlwiKTtcbiAgICAgICAgaWYgKCFDQ19KU0IpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCBkZXZpY2VJRDtcbiAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCkge1xuICAgICAgICAgICAgZGV2aWNlSUQgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJnZXREZXZpY2VJZFwiLCBcIigpTGphdmEvbGFuZy9TdHJpbmc7XCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TKSB7XG4gICAgICAgICAgICBkZXZpY2VJRCA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJBcHBDb250cm9sbGVyXCIsIFwiZ2V0RGV2aWNlSWQ6YW5kUGFyYW1zOlwiLCBcIlwiLCBcIlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyAgY2MubG9nKFwiRGV2aWNlIElEPVwiICsgZGV2aWNlSUQpO1xuICAgICAgICByZXR1cm4gZGV2aWNlSUQ7XG4gICAgfVxuICAgIHN0YXRpYyB2ZXJpZnlQaG9uZShwaG9uZU51bWJlcikge1xuICAgICAgICB0aGlzLm9uQ2FsbE5hdGl2ZShWRVJJRllfUEhPTkUsIHBob25lTnVtYmVyKTtcbiAgICB9XG4gICAgc3RhdGljIHZlcmlmeU9UUChvdHApIHtcbiAgICAgICAgdGhpcy5vbkNhbGxOYXRpdmUoVkVSSUZZX09UUCwgb3RwKTtcbiAgICB9XG4gICAgc3RhdGljIGh0dHBHZXQodXJsOiBzdHJpbmcsIG9uRmluaXNoZWQ6IChlcnI6IGFueSwganNvbjogYW55KSA9PiB2b2lkKSB7XG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBleDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvbkZpbmlzaGVkKGUsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9uRmluaXNoZWQoeGhyLnN0YXR1cywgbnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuICAgICAgICB4aHIuc2VuZCgpO1xuICAgIH1cbiAgICBzdGF0aWMgY29weUNsaXBib2FyZCh0ZXh0KSB7XG4gICAgICAgIHRoaXMub25DYWxsTmF0aXZlKENPUFlfQ0xJUEJPQVJELCB0ZXh0KTtcbiAgICB9XG5cbn0iXX0=