"use strict";
cc._RF.push(module, '061353hwd9MlqQac055EzDR', 'Facebook');
// Lobby/LobbyScript/Script/Service/FaceBook/Facebook.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var facebookSdk = /** @class */ (function () {
    function facebookSdk(AppId, Scope, Callback) {
        window.fbAsyncInit = function () {
            FB.init({
                appId: AppId,
                xfbml: true,
                version: 'v3.1'
            });
            function statusChangeCallback(data) {
                if (data.status === 'connected') {
                    Callback({ status: 200, response: data });
                }
                else if (data.status === 'not_authorized') {
                    Callback({ status: 404, response: "The person is logged into Facebook, but not your app." });
                }
                else {
                    Callback({ status: 500, response: "They are logged into this app or not" });
                }
            }
            FB.getLoginStatus(function (data) {
                Callback({ status: 301, response: "wait" });
                if (data.status === 'connected') {
                    Callback({ status: 200, response: data });
                }
                else if (data.status === 'not_authorized') {
                    FB.login(function (statusChangeCallback) {
                        Callback({ status: 200, response: statusChangeCallback });
                    }, { scope: Scope });
                }
                else {
                    FB.login(function (statusChangeCallback) {
                        Callback({ status: 200, response: statusChangeCallback });
                    }, { scope: Scope });
                }
            });
        };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.com/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
        ;
    }
    return facebookSdk;
}());
exports.default = facebookSdk;

cc._RF.pop();