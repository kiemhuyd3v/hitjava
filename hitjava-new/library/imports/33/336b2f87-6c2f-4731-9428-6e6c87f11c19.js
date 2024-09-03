"use strict";
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