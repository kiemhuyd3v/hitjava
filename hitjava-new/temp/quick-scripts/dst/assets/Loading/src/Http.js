
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Loading/src/Http.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2cd84ecMG9CWL/aifwSEhhY', 'Http');
// Loading/src/Http.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Configs_1 = require("../../Loading/src/Configs");
var VersionConfig_1 = require("./VersionConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Http = /** @class */ (function () {
    function Http() {
    }
    Http.post = function (url, params, onFinished, isSendNormalParams) {
        if (isSendNormalParams === void 0) { isSendNormalParams = false; }
        // cc.log("url Post==" + url);
        var xhr = new XMLHttpRequest();
        var _params = "";
        if (params !== null) {
            var count = 0;
            var paramsLength = Object.keys(params).length;
            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    _params += key + "=" + params[key];
                    if (count < paramsLength - 1) {
                        _params += "&";
                    }
                }
                count++;
            }
        }
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
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/json");
        if (isSendNormalParams) {
            // cc.log("Params Post==", params)
            xhr.send(JSON.stringify(params));
        }
        else {
            xhr.send(_params);
        }
    };
    Http.get = function (url, params, onFinished) {
        var xhr = new XMLHttpRequest();
        var _params = "";
        params = params || {};
        switch (VersionConfig_1.default.CPName) {
            default:
                if (!params.hasOwnProperty("cp")) {
                    params["cp"] = "R";
                }
                params["cl"] = "R";
                break;
        }
        if (cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID) {
            params["pf"] = "ad";
        }
        else if (cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS) {
            params["pf"] = "ios";
        }
        else if (!cc.sys.isNative) {
            params["pf"] = "web";
        }
        else {
            params["pf"] = "other";
        }
        params["at"] = Configs_1.default.Login.AccessToken;
        if (params !== null) {
            var count = 0;
            var paramsLength = Object.keys(params).length;
            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    _params += key + "=" + params[key];
                    if (count++ < paramsLength - 1) {
                        _params += "&";
                    }
                }
            }
        }
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
        var link = url + "?" + _params;
        //  cc.log("GET LINK:" + link);
        xhr.open("GET", link, true);
        xhr.send();
    };
    Http = __decorate([
        ccclass
    ], Http);
    return Http;
}());
exports.default = Http;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9hZGluZ1xcc3JjXFxIdHRwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQWdEO0FBQ2hELGlEQUE0QztBQUV0QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFBO0lBc0dBLENBQUM7SUFyR1UsU0FBSSxHQUFYLFVBQVksR0FBVyxFQUFFLE1BQWMsRUFBRSxVQUF5QyxFQUFFLGtCQUEwQjtRQUExQixtQ0FBQSxFQUFBLDBCQUEwQjtRQUMxRyw4QkFBOEI7UUFDOUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUMvQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ2pCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNkLElBQUksWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQzlDLEtBQUssSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFO2dCQUNwQixJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQzVCLE9BQU8sSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbkMsSUFBSSxLQUFLLEdBQUcsWUFBWSxHQUFHLENBQUMsRUFBRTt3QkFDMUIsT0FBTyxJQUFJLEdBQUcsQ0FBQztxQkFDbEI7aUJBQ0o7Z0JBQ0QsS0FBSyxFQUFFLENBQUM7YUFDWDtTQUNKO1FBRUQsR0FBRyxDQUFDLGtCQUFrQixHQUFHO1lBQ3JCLElBQUksR0FBRyxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUU7Z0JBQ3RCLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7b0JBQ3BCLElBQUksSUFBSSxH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O2FBQ0o7U0FDSjtRQUVELEdBQUcsQ0FBQyxrQkFBa0IsR0FBRztZQUNyQixJQUFJLEdBQUcsQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFO2dCQUN0QixJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO29CQUNwQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDYixJQUFJO3dCQUNBLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztxQkFDdkM7b0JBQUMsT0FBTyxFQUFFLEVBQUU7d0JBQ1QsQ0FBQyxHQUFHLEVBQUUsQ0FBQztxQkFDVjtvQkFDRCxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUN2QjtxQkFBTTtvQkFDSCxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDaEM7YUFDSjtRQUNMLENBQUMsQ0FBQztRQUNGLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDO1FBQy9CLCtCQUErQjtRQUMvQixHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUIsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQXJHZ0IsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQXNHeEI7SUFBRCxXQUFDO0NBdEdELEFBc0dDLElBQUE7a0JBdEdvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBWZXJzaW9uQ29uZmlnIGZyb20gXCIuL1ZlcnNpb25Db25maWdcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh0dHAge1xuICAgIHN0YXRpYyBwb3N0KHVybDogc3RyaW5nLCBwYXJhbXM6IG9iamVjdCwgb25GaW5pc2hlZDogKGVycjogYW55LCBqc29uOiBhbnkpID0+IHZvaWQsIGlzU2VuZE5vcm1hbFBhcmFtcyA9IGZhbHNlKSB7XG4gICAgICAgIC8vIGNjLmxvZyhcInVybCBQb3N0PT1cIiArIHVybCk7XG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgdmFyIF9wYXJhbXMgPSBcIlwiO1xuICAgICAgICBpZiAocGFyYW1zICE9PSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgICAgICAgdmFyIHBhcmFtc0xlbmd0aCA9IE9iamVjdC5rZXlzKHBhcmFtcykubGVuZ3RoO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHBhcmFtcykge1xuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBfcGFyYW1zICs9IGtleSArIFwiPVwiICsgcGFyYW1zW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA8IHBhcmFtc0xlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9wYXJhbXMgKz0gXCImXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlID0gZXg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb25GaW5pc2hlZChlLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvbkZpbmlzaGVkKHhoci5zdGF0dXMsIG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAgICAgaWYgKGlzU2VuZE5vcm1hbFBhcmFtcykge1xuICAgICAgICAgICAgLy8gY2MubG9nKFwiUGFyYW1zIFBvc3Q9PVwiLCBwYXJhbXMpXG4gICAgICAgICAgICB4aHIuc2VuZChKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHhoci5zZW5kKF9wYXJhbXMpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0KHVybDogc3RyaW5nLCBwYXJhbXM6IG9iamVjdCwgb25GaW5pc2hlZDogKGVycjogYW55LCBqc29uOiBhbnkpID0+IHZvaWQpIHtcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB2YXIgX3BhcmFtcyA9IFwiXCI7XG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcbiAgICAgICAgc3dpdGNoIChWZXJzaW9uQ29uZmlnLkNQTmFtZSkge1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpZiAoIXBhcmFtcy5oYXNPd25Qcm9wZXJ0eShcImNwXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc1tcImNwXCJdID0gXCJSXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhcmFtc1tcImNsXCJdID0gXCJSXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSAmJiBjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQpIHtcbiAgICAgICAgICAgIHBhcmFtc1tcInBmXCJdID0gXCJhZFwiO1xuICAgICAgICB9IGVsc2UgaWYgKGNjLnN5cy5pc05hdGl2ZSAmJiBjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUykge1xuICAgICAgICAgICAgcGFyYW1zW1wicGZcIl0gPSBcImlvc1wiO1xuICAgICAgICB9IGVsc2UgaWYgKCFjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIHBhcmFtc1tcInBmXCJdID0gXCJ3ZWJcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmFtc1tcInBmXCJdID0gXCJvdGhlclwiO1xuICAgICAgICB9XG4gICAgICAgIHBhcmFtc1tcImF0XCJdID0gQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbjtcbiAgICAgICAgaWYgKHBhcmFtcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgICAgICAgIHZhciBwYXJhbXNMZW5ndGggPSBPYmplY3Qua2V5cyhwYXJhbXMpLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgX3BhcmFtcyArPSBrZXkgKyBcIj1cIiArIHBhcmFtc1trZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQrKyA8IHBhcmFtc0xlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9wYXJhbXMgKz0gXCImXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZSA9IGV4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9uRmluaXNoZWQoZSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb25GaW5pc2hlZCh4aHIuc3RhdHVzLCBudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBsaW5rID0gdXJsICsgXCI/XCIgKyBfcGFyYW1zO1xuICAgICAgICAvLyAgY2MubG9nKFwiR0VUIExJTks6XCIgKyBsaW5rKTtcbiAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgbGluaywgdHJ1ZSk7XG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgfVxufVxuIl19