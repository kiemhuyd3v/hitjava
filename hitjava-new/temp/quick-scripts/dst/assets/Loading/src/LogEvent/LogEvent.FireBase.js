
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Loading/src/LogEvent/LogEvent.FireBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9hZGluZ1xcc3JjXFxMb2dFdmVudFxcTG9nRXZlbnQuRmlyZUJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBaUM7QUFDakM7SUFBQTtJQW1GQSxDQUFDO0lBakZpQix5QkFBVyxHQUF6QjtRQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO2dCQUM5RCxPQUFPLElBQUksQ0FBQzthQUNmO1NBQ0o7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQUEsQ0FBQztJQUNGLDJDQUFtQixHQUFuQjtRQUNJLE9BQU87UUFDUCxJQUFNLEdBQUcsR0FBRyxFQUFFLENBQUE7UUFDZCxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLEdBQUcsVUFBVSxDQUFDO1FBQ3RFLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsR0FBRyxZQUFZLENBQUM7UUFDMUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO1FBQ2xGLEdBQUcsQ0FBQyxNQUFNLENBQUMs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LGlCQUFPLENBQUMsYUFBYSxDQUFDLHNCQUFzQixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFDRCx3Q0FBZ0IsR0FBaEIsVUFBaUIsWUFBb0IsRUFBRSxLQUFhO1FBQ2hELElBQUksTUFBTSxHQUFRLEVBQUUsQ0FBQztRQUNyQixNQUFNLENBQUMsaUJBQU8sQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsR0FBRyxZQUFZLENBQUM7UUFDcEUsTUFBTSxDQUFDLGlCQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUM3QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsaUJBQU8sQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUNELDBDQUFrQixHQUFsQixVQUFtQixZQUFvQixFQUFFLEtBQWE7UUFDbEQsSUFBSSxNQUFNLEdBQVEsRUFBRSxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxpQkFBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxZQUFZLENBQUM7UUFDdkQsTUFBTSxDQUFDLGlCQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUM3QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsaUJBQU8sQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFoRmMsc0JBQVEsR0FBa0IsSUFBSSxDQUFDO0lBa0ZsRCxvQkFBQztDQW5GRCxBQW1GQyxJQUFBO2tCQW5Gb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWdzIGZyb20gXCIuLi9Db25maWdzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaXJlYmFzZUV2ZW50IHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogRmlyZWJhc2VFdmVudCA9IG51bGw7XG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBGaXJlYmFzZUV2ZW50IHtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBGaXJlYmFzZUV2ZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfVxuICAgIGlzVXNlU0RLKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19BTkRST0lEIHx8IGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgb25DbGlja1NlbmRMb2dFdmVudCgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBldnQgPSB7fVxuICAgICAgICBldnRbc2RrYm94LmZpcmViYXNlLkFuYWx5dGljcy5QYXJhbS5rRklSUGFyYW1ldGVySXRlbUlEXSA9ICdpZDEyMzQ1Nic7XG4gICAgICAgIGV2dFtzZGtib3guZmlyZWJhc2UuQW5hbHl0aWNzLlBhcmFtLmtGSVJQYXJhbWV0ZXJJdGVtTmFtZV0gPSAnbmFtZTEyMzQ1Nic7XG4gICAgICAgIGV2dFtzZGtib3guZmlyZWJhc2UuQW5hbHl0aWNzLlBhcmFtLmtGSVJQYXJhbWV0ZXJJdGVtQ2F0ZWdvcnldID0gJ2NhdGVnb3J5MTIzNDU2JztcbiAgICAgICAgZXZ0W3Nka2JveC5maXJlYmFzZS5BbmFseXRpY3MuUGFyYW0ua0ZJUlBhcmFtZXRlclByaWNlXSA9ICcxMjMuNCc7XG4gICAgICAgIHNka2JveC5maXJlYmFzZS5BbmFseXRpY3MubG9nRXZlbnQoc2RrYm94LmZpcmViYXNlLkFuYWx5dGljcy5FdmVudC5rRklSRXZlbnRWaWV3SXRlbSwgZXZ0KTtcbiAgICAgICAgLy8gbG9nIGN1c3RvbSBldmVudFxuICAgICAgICAvLyBldnRbJ2N1c3RvbUtleSddID0gJ2N1c3RvbSB2YWx1ZSc7XG4gICAgICAgIC8vIHNka2JveC5maXJlYmFzZS5BbmFseXRpY3MubG9nRXZlbnQoXCJjdXN0b21FdmVudFwiLCBldnQpO1xuICAgICAgICAvLyAgY2MubG9nKCdPbmNsaWNrIGxvZyBldmVudDonLCBKU09OLnN0cmluZ2lmeShldnQpKTtcbiAgICB9XG4gICAgZmlyZWJhc2VTZW5kTG9nRXZlbnQoZXZlbnROYW1lLCBwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoIXRoaXMuaXNVc2VTREsoKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgc2RrYm94LmZpcmViYXNlLkFuYWx5dGljcy5sb2dFdmVudChldmVudE5hbWUsIHBhcmFtcyk7XG4gICAgICAgIC8vICBjYy5sb2coXCJmaXJlYmFzZVNlbmRMb2dFdmVudDpFdmVudE5hbWU9XCIgKyBldmVudE5hbWUgKyBcIiBQYXJhbXM6XCIsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xuICAgIH1cbiAgICBzZW5kRXZlbnRTZHQoc2R0KSB7XG4gICAgICAgIHZhciBwYXJhbXM6IGFueSA9IHt9O1xuICAgICAgICBwYXJhbXMucGhvbmUgPSBzZHQ7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZW5kTG9nRXZlbnQoQ29uZmlncy5FdmVudEZpcmViYXNlLkFERF9QQVlNRU5UX0lORk8sIHBhcmFtcyk7XG4gICAgfVxuICAgIHNlbmRFdmVudFNpZ3VwU3VjY2VzcyhtZXRob2Q6IHN0cmluZykge1xuICAgICAgICAvL21ldGhvZD1mYWNlYm9vay9ub3JtYWw7XG4gICAgICAgIHZhciBwYXJhbXM6IGFueSA9IHt9O1xuICAgICAgICBwYXJhbXNbQ29uZmlncy5QYXJhbXNGaXJlQmFzZS5NRVRIT0RdID0gbWV0aG9kO1xuICAgICAgICB0aGlzLmZpcmViYXNlU2VuZExvZ0V2ZW50KENvbmZpZ3MuRXZlbnRGaXJlYmFzZS5TSUdOX1VQLCBwYXJhbXMpO1xuICAgIH1cbiAgICBzZW5kRXZlbnRMb2dpbihtZXRob2Q6IHN0cmluZykge1xuICAgICAgICB2YXIgcGFyYW1zOiBhbnkgPSB7fTtcbiAgICAgICAgcGFyYW1zW0NvbmZpZ3MuUGFyYW1zRmlyZUJhc2UuTUVUSE9EXSA9IG1ldGhvZDtcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlbmRMb2dFdmVudChDb25maWdzLkV2ZW50RmlyZWJhc2UuTE9HSU4sIHBhcmFtcyk7XG4gICAgfVxuICAgIHNlbmRFdmVudE9wZW5BcHAoKSB7XG4gICAgICAgIHZhciBwYXJhbXM6IGFueSA9IHt9O1xuICAgICAgICBwYXJhbXNbQ29uZmlncy5QYXJhbXNGaXJlQmFzZS5DT05URU5UXSA9IFwiMVwiO1xuICAgICAgICB0aGlzLmZpcmViYXNlU2VuZExvZ0V2ZW50KENvbmZpZ3MuRXZlbnRGaXJlYmFzZS5BUFBfT1BFTiwgcGFyYW1zKTtcbiAgICB9XG4gICAgc2VuZEV2ZW50UHVyY2hhc2UoY3VycmVuY3k6IHN0cmluZywgdmFsdWU6IG51bWJlcikge1xuICAgICAgICB2YXIgcGFyYW1zOiBhbnkgPSB7fTtcbiAgICAgICAgcGFyYW1zW0NvbmZpZ3MuUGFyYW1zRmlyZUJhc2UuQ1VSUkVOQ1ldID0gY3VycmVuY3k7XG4gICAgICAgIHBhcmFtc1tDb25maWdzLlBhcmFtc0ZpcmVCYXNlLlZBTFVFXSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmZpcmViYXNlU2VuZExvZ0V2ZW50KENvbmZpZ3MuRXZlbnRGaXJlYmFzZS5FQ09NTUVSQ0VfUFVSQ0hBU0UsIHBhcmFtcyk7XG4gICAgfVxuICAgIHNlbmRFdmVudE1vbmV5Q2hhbmdlKGdhbWVOYW1lOiBzdHJpbmcsIGN1cnJlbmN5OiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIHBhcmFtczogYW55ID0ge307XG4gICAgICAgIHBhcmFtc1tDb25maWdzLlBhcmFtc0ZpcmVCYXNlLklURU1fTkFNRV0gPSBnYW1lTmFtZTtcbiAgICAgICAgcGFyYW1zW0NvbmZpZ3MuUGFyYW1zRmlyZUJhc2UuVklSVFVBTF9DVVJSRU5DWV9OQU1FXSA9IGN1cnJlbmN5O1xuICAgICAgICBwYXJhbXNbQ29uZmlncy5QYXJhbXNGaXJlQmFzZS5WQUxVRV0gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlbmRMb2dFdmVudChDb25maWdzLkV2ZW50RmlyZWJhc2UuU1BFTkRfVklSVFVBTF9DVVJSRU5DWSwgcGFyYW1zKTtcbiAgICB9XG4gICAgc2VuZEV2ZW50Q2FzaG91dChjdXJyZW5jeU5hbWU6IHN0cmluZywgdmFsdWU6IG51bWJlcikge1xuICAgICAgICB2YXIgcGFyYW1zOiBhbnkgPSB7fTtcbiAgICAgICAgcGFyYW1zW0NvbmZpZ3MuUGFyYW1zRmlyZUJhc2UuVklSVFVBTF9DVVJSRU5DWV9OQU1FXSA9IGN1cnJlbmN5TmFtZTtcbiAgICAgICAgcGFyYW1zW0NvbmZpZ3MuUGFyYW1zRmlyZUJhc2UuVkFMVUVdID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZW5kTG9nRXZlbnQoQ29uZmlncy5FdmVudEZpcmViYXNlLkVBUk5fVklSVFVBTF9DVVJSRU5DWSwgcGFyYW1zKTtcbiAgICB9XG4gICAgc2VuZEV2ZW50Q2xpY2tTaG9wKGN1cnJlbmN5TmFtZTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHZhciBwYXJhbXM6IGFueSA9IHt9O1xuICAgICAgICBwYXJhbXNbQ29uZmlncy5QYXJhbXNGaXJlQmFzZS5DVVJSRU5DWV0gPSBjdXJyZW5jeU5hbWU7XG4gICAgICAgIHBhcmFtc1tDb25maWdzLlBhcmFtc0ZpcmVCYXNlLlZBTFVFXSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmZpcmViYXNlU2VuZExvZ0V2ZW50KENvbmZpZ3MuRXZlbnRGaXJlYmFzZS5CRUdJTl9DSEVDS09VVCwgcGFyYW1zKTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==