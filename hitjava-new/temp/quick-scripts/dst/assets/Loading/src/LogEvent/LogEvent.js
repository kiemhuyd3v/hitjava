
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Loading/src/LogEvent/LogEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9hZGluZ1xcc3JjXFxMb2dFdmVudFxcTG9nRXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBaUM7QUFDakMseURBQWdEO0FBQ2hELHlEQUFnRDtBQUNoRDtJQUFBO0lBa0RBLENBQUM7SUFoRGlCLG9CQUFXLEdBQXpCO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7U0FDbEM7UUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVELG1DQUFnQixHQUFoQixVQUFpQixHQUFHLEVBQUUsS0FBSyxFQUFFLElBQVc7UUFBWCxxQkFBQSxFQUFBLFdBQVc7UUFDcEMsSUFBSSxJQUFJLEtBQUssU0FBUyxJQUFJLElBQUksSUFBSSxJQUFJO1lBQUUsSUFBSSxHQUFHLGlCQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUN4RSxPQUFPO1lBQ0gsR0FBRyxFQUFFLEdBQUc7WUFDUixLQUFLLEVBQUUsS0FBSztZQUNaLFNBQVMsRUFBRSxJQUFJO1NBQ2xCLENBQUM7SUFDTixDQUFDO0lBQ0QsK0JBQVksR0FBWixVQUFhLEdBQUc7UUFDWiwyQkFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QywyQkFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0Qsd0NBQXFCLEdBQXJCLFVBQXNCLE1BQWM7UUFDaEMsMkJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxRCwyQkFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFDRCxpQ0FBYyxHQUFkLFVBQWUsTUFBYztRQUN6QiwyQkFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRCwyQkFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsbUNBQWdCLEdBQWhCO1FBQ0ksMkJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQy9DLHNEQUFzRDtJQUMxRCxDQUFDO0lBQ0Qsb0NBQWlCLEdBQWpCLFVBQWtCLFFBQWdCLEVBQUUsS0FBYTtRQUM3QywyQkFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvRCwyQkFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBQ0QsdUNBQW9CLEdBQXBCLFVBQXFCLFFBQWdCLEVBQUUsUUFBZ0IsRUFBRSxLQUFhO1FBQ2xFLDJCQUFhLENBQUMsV0FBVyxFQUFFLENBQUMsb0JBQW9CLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1RSwyQkFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUNELG1DQUFnQixHQUFoQixVQUFpQixZQUFvQixFQUFFLEtBQWE7UUFDaEQsMkJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEUsMkJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUNELHFDQUFrQixHQUFsQixVQUFtQixZQUFvQixFQUFFLEtBQWE7UUFDbEQsMkJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEUsMkJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQS9DYyxpQkFBUSxHQUFhLElBQUksQ0FBQztJQWlEN0MsZUFBQztDQWxERCxBQWtEQyxJQUFBO2tCQWxEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWdzIGZyb20gXCIuLi9Db25maWdzXCI7XG5pbXBvcnQgRmFjZWJvb2tFdmVudCBmcm9tIFwiLi9Mb2dFdmVudC5GYWNlYm9va1wiO1xuaW1wb3J0IEZpcmViYXNlRXZlbnQgZnJvbSBcIi4vTG9nRXZlbnQuRmlyZUJhc2VcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ0V2ZW50IHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogTG9nRXZlbnQgPSBudWxsO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogTG9nRXZlbnQge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IExvZ0V2ZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY3JlYXRlRXZlbnRQYXJhbShrZXksIHZhbHVlLCB0eXBlID0gbnVsbCkge1xuICAgICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGUgPT0gbnVsbCkgdHlwZSA9IENvbmZpZ3MuUGFyYW1UeXBlLlNUUklORztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgdHlwZVZhbHVlOiB0eXBlXG4gICAgICAgIH07XG4gICAgfVxuICAgIHNlbmRFdmVudFNkdChzZHQpIHtcbiAgICAgICAgRmFjZWJvb2tFdmVudC5nZXRJbnN0YW5jZSgpLnNlbmRFdmVudFNkdChzZHQpO1xuICAgICAgICBGaXJlYmFzZUV2ZW50LmdldEluc3RhbmNlKCkuc2VuZEV2ZW50U2R0KHNkdCk7XG4gICAgfVxuICAgIHNlbmRFdmVudFNpZ3VwU3VjY2VzcyhtZXRob2Q6IHN0cmluZywpIHtcbiAgICAgICAgRmFjZWJvb2tFdmVudC5nZXRJbnN0YW5jZSgpLnNlbmRFdmVudFNpZ3VwU3VjY2VzcyhtZXRob2QpO1xuICAgICAgICBGaXJlYmFzZUV2ZW50LmdldEluc3RhbmNlKCkuc2VuZEV2ZW50U2lndXBTdWNjZXNzKG1ldGhvZCk7XG4gICAgfVxuICAgIHNlbmRFdmVudExvZ2luKG1ldGhvZDogc3RyaW5nKSB7XG4gICAgICAgIEZhY2Vib29rRXZlbnQuZ2V0SW5zdGFuY2UoKS5zZW5kRXZlbnRMb2dpbihtZXRob2QpO1xuICAgICAgICBGaXJlYmFzZUV2ZW50LmdldEluc3RhbmNlKCkuc2VuZEV2ZW50TG9naW4obWV0aG9kKTtcbiAgICB9XG4gICAgc2VuZEV2ZW50T3BlbkFwcCgpIHtcbiAgICAgICAgRmlyZWJhc2VFdmVudC5nZXRJbnN0YW5jZSgpLnNlbmRFdmVudE9wZW5BcHAoKTtcbiAgICAgICAgLy8gRmFjZWJvb2tFdmVudC5nZXRJbnN0YW5jZSgpLnNlbmRFdmVudExvZ2luKG1ldGhvZCk7XG4gICAgfVxuICAgIHNlbmRFdmVudFB1cmNoYXNlKGN1cnJlbmN5OiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgRmFjZWJvb2tFdmVudC5nZXRJbnN0YW5jZSgpLnNlbmRFdmVudFB1cmNoYXNlKGN1cnJlbmN5LCB2YWx1ZSk7XG4gICAgICAgIEZpcmViYXNlRXZlbnQuZ2V0SW5zdGFuY2UoKS5zZW5kRXZlbnRQdXJjaGFzZShjdXJyZW5jeSwgdmFsdWUpO1xuICAgIH1cbiAgICBzZW5kRXZlbnRNb25leUNoYW5nZShnYW1lTmFtZTogc3RyaW5nLCBjdXJyZW5jeTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIEZhY2Vib29rRXZlbnQuZ2V0SW5zdGFuY2UoKS5zZW5kRXZlbnRNb25leUNoYW5nZShnYW1lTmFtZSwgY3VycmVuY3ksIHZhbHVlKTtcbiAgICAgICAgRmlyZWJhc2VFdmVudC5nZXRJbnN0YW5jZSgpLnNlbmRFdmVudE1vbmV5Q2hhbmdlKGdhbWVOYW1lLCBjdXJyZW5jeSwgdmFsdWUpO1xuICAgIH1cbiAgICBzZW5kRXZlbnRDYXNob3V0KGN1cnJlbmN5TmFtZTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIEZhY2Vib29rRXZlbnQuZ2V0SW5zdGFuY2UoKS5zZW5kRXZlbnRDYXNob3V0KGN1cnJlbmN5TmFtZSwgdmFsdWUpO1xuICAgICAgICBGaXJlYmFzZUV2ZW50LmdldEluc3RhbmNlKCkuc2VuZEV2ZW50Q2FzaG91dChjdXJyZW5jeU5hbWUsIHZhbHVlKTtcbiAgICB9XG4gICAgc2VuZEV2ZW50Q2xpY2tTaG9wKGN1cnJlbmN5TmFtZTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIEZhY2Vib29rRXZlbnQuZ2V0SW5zdGFuY2UoKS5zZW5kRXZlbnRDbGlja1Nob3AoY3VycmVuY3lOYW1lLCB2YWx1ZSk7XG4gICAgICAgIEZpcmViYXNlRXZlbnQuZ2V0SW5zdGFuY2UoKS5zZW5kRXZlbnRDbGlja1Nob3AoY3VycmVuY3lOYW1lLCB2YWx1ZSk7XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=