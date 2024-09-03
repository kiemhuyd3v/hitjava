"use strict";
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