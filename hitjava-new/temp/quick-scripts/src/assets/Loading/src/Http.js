"use strict";
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