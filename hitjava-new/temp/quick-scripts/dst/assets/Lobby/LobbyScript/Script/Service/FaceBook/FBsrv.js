
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/Service/FaceBook/FBsrv.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2cf04i4wGlJoKSjJUvDs8ta', 'FBsrv');
// Lobby/LobbyScript/Script/Service/FaceBook/FBsrv.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Configs_1 = require("../../../../../Loading/src/Configs");
var App_1 = require("../../common/App");
var SPUtils_1 = require("../../common/SPUtils");
var Facebook_1 = require("./Facebook");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FBsrv = /** @class */ (function (_super) {
    __extends(FBsrv, _super);
    function FBsrv() {
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        _this_1.isLogined = false;
        _this_1.statusResponse = null;
        _this_1.accessToken = null;
        return _this_1;
    }
    FBsrv_1 = FBsrv;
    FBsrv.prototype.start = function () {
        this.init();
    };
    FBsrv.getInst = function () {
        if (!this.inst) {
            this.inst = new cc.Node().addComponent(FBsrv_1);
        }
        return this.inst;
    };
    ;
    FBsrv.prototype.init = function () {
        if (cc.sys.isBrowser) {
            this._initWeb();
        }
        else if (cc.sys.os == cc.sys.OS_ANDROID) {
            this._initAndroid();
        }
        else if (cc.sys.os == cc.sys.OS_IOS) {
            this._initIOS();
        }
    };
    ;
    FBsrv.prototype._initWeb = function () {
        var params = {
            appId: Configs_1.default.App.FB_APPID,
            version: FBsrv_1.webVersion,
            status: true,
            cookie: true,
            xfbml: true,
            autoLogAppEvents: false
        };
        FB.init(params);
    };
    ;
    FBsrv.prototype.isUseSDK = function () {
        if (cc.sys.os == cc.sys.OS_ANDROID)
            return true;
        if (cc.sys.os == cc.sys.OS_IOS)
            return true;
        return false;
    };
    ;
    FBsrv.prototype.callLoginToFB = function (callback) {
        cc.sys.localStorage.setItem("isLoginFB", 1);
        App_1.default.instance.showLoading(true, -1);
        var self = this;
        if (self.isUseSDK()) {
            if (sdkbox.PluginFacebook.isLoggedIn()) {
                Configs_1.default.Login.AccessToken = sdkbox.PluginFacebook.getAccessToken();
                callback();
            }
            else {
                //Utils.Log("FB to Login");
                sdkbox.PluginFacebook.login(['public_profile', 'email']);
            }
        }
        else {
            var Appid = Configs_1.default.App.FB_APPID;
            var scope = 'email,public_profile';
            if (self.sdk != null) {
                try {
                    FB.getLoginStatus(function (data) {
                        if (data.status === 'connected') {
                            Configs_1.default.Login.AccessToken = data.authResponse.accessToken;
                            callback();
                        }
                        else if (data.status === 'not_authorized') {
                            App_1.default.instance.showErrLoading("Lỗi đăng nhập status: " + data.status);
                        }
                        else {
                            FB.login(self.fbRespone, { scope: Scope });
                        }
                    });
                }
                catch (e) {
                    App_1.default.instance.showLoading(false);
                    App_1.default.instance.showErrLoading("Lỗi đăng nhập status: " + e.message);
                }
            }
            else {
                self.sdk = new Facebook_1.default(Appid, scope, self.fbRespone);
            }
        }
    };
    FBsrv.prototype.fbRespone = function (response) {
        var self = this;
        if (response.status != "200") {
            if (response.response != "wait") {
                //Utils.Log(JSON.stringify(response));
                App_1.default.instance.showLoading(false);
                App_1.default.instance.showErrLoading("Lỗi đăng nhập status: " + response.status);
            }
        }
        else {
            Configs_1.default.Login.AccessToken = response.response.authResponse.accessToken;
            self.loginFB();
        }
    };
    FBsrv.prototype._initAndroid = function () {
    };
    ;
    FBsrv.prototype._initIOS = function () {
    };
    ;
    FBsrv.prototype.login = function (callBack) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!cc.sys.isBrowser) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._loginWeb(callBack)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        if (cc.sys.os == cc.sys.OS_ANDROID) {
                            this._loginAndroid(callBack);
                        }
                        else if (cc.sys.os == cc.sys.OS_IOS) {
                            this._loginIOS(callBack);
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, this.isLogined];
                }
            });
        });
    };
    ;
    FBsrv.prototype._loginWeb = function (callBack) {
        return __awaiter(this, void 0, void 0, function () {
            var _this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _this = this;
                        return [4 /*yield*/, new Promise((function (resolve) {
                                FB.login(function (response) {
                                    callBack(response);
                                    if (response.status === 'connected') {
                                        _this.isLogined = true;
                                    }
                                    else {
                                        _this.isLogined = false;
                                    }
                                    resolve('success');
                                }, { auth_type: "reauthorize" });
                            }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    FBsrv.prototype._loginAndroid = function (callBack) {
    };
    ;
    FBsrv.prototype._loginIOS = function (callBack) {
    };
    ;
    FBsrv.prototype.logout = function (callBack) {
        if (cc.sys.isBrowser) {
            this._logoutWeb(callBack);
        }
        else if (cc.sys.os == cc.sys.OS_ANDROID) {
            this._logoutAndroid(callBack);
        }
        else if (cc.sys.os == cc.sys.OS_IOS) {
            this._logoutIOS(callBack);
        }
    };
    ;
    FBsrv.prototype._logoutWeb = function (callBack) {
        FB.logout(function (response) {
            callBack(response);
        });
    };
    ;
    FBsrv.prototype._logoutAndroid = function (callBack) {
    };
    ;
    FBsrv.prototype._logoutIOS = function (callBack) {
    };
    ;
    FBsrv.prototype.checkLoginStatus = function (callBack) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!cc.sys.isBrowser) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._checkLoginStatusWeb(callBack)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        if (cc.sys.os == cc.sys.OS_ANDROID) {
                            this._checkLoginStatusAndroid(callBack);
                        }
                        else if (cc.sys.os == cc.sys.OS_IOS) {
                            this._checkLoginStatusIOS(callBack);
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, this.isLogined];
                }
            });
        });
    };
    ;
    FBsrv.prototype._checkLoginStatusWeb = function (callBack) {
        return __awaiter(this, void 0, void 0, function () {
            var _this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _this = this;
                        return [4 /*yield*/, new Promise((function (resolve) {
                                FB.getLoginStatus(function (response) {
                                    callBack(response);
                                    if (response.status === 'connected') {
                                        _this.isLogined = true;
                                        SPUtils_1.default.setUserAccessTokenFB(response.authResponse.accessToken);
                                    }
                                    else {
                                        _this.isLogined = false;
                                    }
                                    resolve('success');
                                });
                            }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FBsrv.prototype._checkLoginStatusAndroid = function (callBack) {
    };
    FBsrv.prototype._checkLoginStatusIOS = function (callBack) {
    };
    FBsrv.prototype.getAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkLoginStatus(function () { })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, SPUtils_1.default.getUserAccessTokenFB()];
                }
            });
        });
    };
    var FBsrv_1;
    FBsrv.inst = null;
    FBsrv.appID = '439607153788936';
    FBsrv.webVersion = '{api-version}';
    FBsrv = FBsrv_1 = __decorate([
        ccclass
    ], FBsrv);
    return FBsrv;
}(cc.Component));
exports.default = FBsrv;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXFNlcnZpY2VcXEZhY2VCb29rXFxGQnNydi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4REFBeUQ7QUFDekQsd0NBQW1DO0FBQ25DLGdEQUEyQztBQUUzQyx1Q0FBcUM7QUFFL0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSx1RUFvT0M7UUFqT0csaUJBQVMsR0FBWSxLQUFLLENBQUM7UUFDbkIsc0JBQWMsR0FBc0IsSUFBSSxDQUFDO1FBR2pELG1CQUFXLEdBQVcsSUFBSSxDQUFDOztJQTZOL0IsQ0FBQztjQXBPb0IsS0FBSztJQVN0QixxQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxhQUFPLEdBQWQ7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQUssQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFBQSxDQUFDO0lBRUYsb0JBQUksR0FBSjtRQUNJLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ25CO2FBQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRTtZQUN2QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkI7YUFBTSxJ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cyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vY29tbW9uL0FwcFwiO1xuaW1wb3J0IFNQVXRpbHMgZnJvbSBcIi4uLy4uL2NvbW1vbi9TUFV0aWxzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL2NvbW1vbi9VdGlsc1wiO1xuaW1wb3J0IGZhY2Vib29rU2RrIGZyb20gXCIuL0ZhY2Vib29rXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGQnNydiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgaW5zdDogRkJzcnYgPSBudWxsO1xuICAgIGlzTG9naW5lZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgc3RhdHVzUmVzcG9uc2U6IGZiLlN0YXR1c1Jlc3BvbnNlID0gbnVsbDtcbiAgICBzdGF0aWMgYXBwSUQgPSAnNDM5NjA3MTUzNzg4OTM2JztcbiAgICBzdGF0aWMgd2ViVmVyc2lvbiA9ICd7YXBpLXZlcnNpb259JztcbiAgICBhY2Nlc3NUb2tlbjogc3RyaW5nID0gbnVsbDtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0SW5zdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmluc3QpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdCA9IG5ldyBjYy5Ob2RlKCkuYWRkQ29tcG9uZW50KEZCc3J2KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0O1xuICAgIH07XG5cbiAgICBpbml0KCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzQnJvd3Nlcikge1xuICAgICAgICAgICAgdGhpcy5faW5pdFdlYigpO1xuICAgICAgICB9IGVsc2UgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCkge1xuICAgICAgICAgICAgdGhpcy5faW5pdEFuZHJvaWQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUykge1xuICAgICAgICAgICAgdGhpcy5faW5pdElPUygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIF9pbml0V2ViKCkge1xuICAgICAgICBsZXQgcGFyYW1zOiBmYi5Jbml0UGFyYW1zID0ge1xuICAgICAgICAgICAgYXBwSWQ6IENvbmZpZ3MuQXBwLkZCX0FQUElELFxuICAgICAgICAgICAgdmVyc2lvbjogRkJzcnYud2ViVmVyc2lvbixcbiAgICAgICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgICAgIGNvb2tpZTogdHJ1ZSxcbiAgICAgICAgICAgIHhmYm1sOiB0cnVlLFxuICAgICAgICAgICAgYXV0b0xvZ0FwcEV2ZW50czogZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBGQi5pbml0KHBhcmFtcyk7XG4gICAgfTtcblxuICAgIGlzVXNlU0RLKClcbiAgICB7XG4gICAgICAgIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQpIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIGNhbGxMb2dpblRvRkIoY2FsbGJhY2spXG4gICAge1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpc0xvZ2luRkJcIiwxKTtcbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUsLTEpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmKHNlbGYuaXNVc2VTREsoKSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHNka2JveC5QbHVnaW5GYWNlYm9vay5pc0xvZ2dlZEluKCkpIHtcbiAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuID0gc2RrYm94LlBsdWdpbkZhY2Vib29rLmdldEFjY2Vzc1Rva2VuKCk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgIC8vVXRpbHMuTG9nKFwiRkIgdG8gTG9naW5cIik7XG4gICAgICAgICAgICAgICAgc2RrYm94LlBsdWdpbkZhY2Vib29rLmxvZ2luKFsncHVibGljX3Byb2ZpbGUnLCAnZW1haWwnXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgQXBwaWQgPSBDb25maWdzLkFwcC5GQl9BUFBJRDtcbiAgICAgICAgICAgIGxldCBzY29wZSA9ICdlbWFpbCxwdWJsaWNfcHJvZmlsZSc7XG4gICAgICAgICAgICBpZihzZWxmLnNkayAhPSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAgICAgRkIuZ2V0TG9naW5TdGF0dXMoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gJ2Nvbm5lY3RlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuID0gZGF0YS5hdXRoUmVzcG9uc2UuYWNjZXNzVG9rZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnN0YXR1cyA9PT0gJ25vdF9hdXRob3JpemVkJykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dFcnJMb2FkaW5nKFwiTOG7l2kgxJHEg25nIG5o4bqtcCBzdGF0dXM6IFwiICsgZGF0YS5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGQi5sb2dpbihzZWxmLmZiUmVzcG9uZSwgeyBzY29wZTogU2NvcGUgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93RXJyTG9hZGluZyhcIkzhu5dpIMSRxINuZyBuaOG6rXAgc3RhdHVzOiBcIiArIGUubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGYuc2RrID0gbmV3IGZhY2Vib29rU2RrKEFwcGlkLCBzY29wZSwgc2VsZi5mYlJlc3BvbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZiUmVzcG9uZShyZXNwb25zZSlcbiAgICB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzICE9IFwiMjAwXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLnJlc3BvbnNlICE9IFwid2FpdFwiKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAvL1V0aWxzLkxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpO1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dFcnJMb2FkaW5nKFwiTOG7l2kgxJHEg25nIG5o4bqtcCBzdGF0dXM6IFwiICsgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9ZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuID0gcmVzcG9uc2UucmVzcG9uc2UuYXV0aFJlc3BvbnNlLmFjY2Vzc1Rva2VuO1xuICAgICAgICAgICAgc2VsZi5sb2dpbkZCKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX2luaXRBbmRyb2lkKCkge1xuXG4gICAgfTtcblxuICAgIF9pbml0SU9TKCkge1xuXG4gICAgfTtcblxuICAgIGFzeW5jIGxvZ2luKGNhbGxCYWNrOiBGdW5jdGlvbikge1xuICAgICAgICBpZiAoY2Muc3lzLmlzQnJvd3Nlcikge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5fbG9naW5XZWIoY2FsbEJhY2spO1xuICAgICAgICB9IGVsc2UgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCkge1xuICAgICAgICAgICAgdGhpcy5fbG9naW5BbmRyb2lkKGNhbGxCYWNrKTtcbiAgICAgICAgfSBlbHNlIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUykge1xuICAgICAgICAgICAgdGhpcy5fbG9naW5JT1MoY2FsbEJhY2spO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmlzTG9naW5lZDtcbiAgICB9O1xuXG4gICAgYXN5bmMgX2xvZ2luV2ViKGNhbGxCYWNrOiBGdW5jdGlvbikge1xuICAgICAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBGQi5sb2dpbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBjYWxsQmFjayhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ2Nvbm5lY3RlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuaXNMb2dpbmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuaXNMb2dpbmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUoJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgIH0sIHsgYXV0aF90eXBlOiBcInJlYXV0aG9yaXplXCJ9KTtcbiAgICAgICAgfSkpO1xuICAgIH07XG5cbiAgICBfbG9naW5BbmRyb2lkKGNhbGxCYWNrOiBGdW5jdGlvbikge1xuXG4gICAgfTtcblxuICAgIF9sb2dpbklPUyhjYWxsQmFjazogRnVuY3Rpb24pIHtcblxuICAgIH07XG5cbiAgICBsb2dvdXQoY2FsbEJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGlmIChjYy5zeXMuaXNCcm93c2VyKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2dvdXRXZWIoY2FsbEJhY2spO1xuICAgICAgICB9IGVsc2UgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCkge1xuICAgICAgICAgICAgdGhpcy5fbG9nb3V0QW5kcm9pZChjYWxsQmFjayk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MpIHtcbiAgICAgICAgICAgIHRoaXMuX2xvZ291dElPUyhjYWxsQmFjayk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgX2xvZ291dFdlYihjYWxsQmFjazogRnVuY3Rpb24pIHtcbiAgICAgICAgRkIubG9nb3V0KGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgY2FsbEJhY2socmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgX2xvZ291dEFuZHJvaWQoY2FsbEJhY2s6IEZ1bmN0aW9uKSB7XG5cbiAgICB9O1xuXG4gICAgX2xvZ291dElPUyhjYWxsQmFjazogRnVuY3Rpb24pIHtcblxuICAgIH07XG5cbiAgICBhc3luYyBjaGVja0xvZ2luU3RhdHVzKGNhbGxCYWNrOiBGdW5jdGlvbikge1xuICAgICAgICBpZiAoY2Muc3lzLmlzQnJvd3Nlcikge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5fY2hlY2tMb2dpblN0YXR1c1dlYihjYWxsQmFjayk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19BTkRST0lEKSB7XG4gICAgICAgICAgICB0aGlzLl9jaGVja0xvZ2luU3RhdHVzQW5kcm9pZChjYWxsQmFjayk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MpIHtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrTG9naW5TdGF0dXNJT1MoY2FsbEJhY2spXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaXNMb2dpbmVkO1xuICAgIH07XG5cbiAgICBhc3luYyBfY2hlY2tMb2dpblN0YXR1c1dlYihjYWxsQmFjazogRnVuY3Rpb24pIHtcbiAgICAgICAgbGV0IF90aGlzID0gdGhpcztcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgRkIuZ2V0TG9naW5TdGF0dXMoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgY2FsbEJhY2socmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09ICdjb25uZWN0ZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmlzTG9naW5lZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIFNQVXRpbHMuc2V0VXNlckFjY2Vzc1Rva2VuRkIocmVzcG9uc2UuYXV0aFJlc3BvbnNlLmFjY2Vzc1Rva2VuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuaXNMb2dpbmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUoJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgX2NoZWNrTG9naW5TdGF0dXNBbmRyb2lkKGNhbGxCYWNrOiBGdW5jdGlvbikge1xuXG4gICAgfVxuXG4gICAgX2NoZWNrTG9naW5TdGF0dXNJT1MoY2FsbEJhY2s6IEZ1bmN0aW9uKSB7XG5cbiAgICB9XG5cbiAgICBhc3luYyBnZXRBY2Nlc3NUb2tlbigpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5jaGVja0xvZ2luU3RhdHVzKCgpPT57fSk7XG4gICAgICAgIHJldHVybiBTUFV0aWxzLmdldFVzZXJBY2Nlc3NUb2tlbkZCKCk7XG4gICAgfVxuXG59XG4iXX0=