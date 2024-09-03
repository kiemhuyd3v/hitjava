"use strict";
cc._RF.push(module, '59866usg1ZMxINvnUez2Ri1', 'SPUtils');
// Lobby/LobbyScript/Script/common/SPUtils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common;
(function (common) {
    var SPUtils = /** @class */ (function () {
        function SPUtils() {
        }
        SPUtils.encode = function (s, k) {
            var enc = "";
            var str = "";
            // make sure that input is string
            str = s.toString();
            for (var i = 0; i < s.length; i++) {
                // create block
                var a = s.charCodeAt(i);
                // bitwise XOR
                var b = a ^ k;
                enc = enc + String.fromCharCode(b);
            }
            return enc;
        };
        SPUtils.get = function (key, defaultValue) {
            if (defaultValue === void 0) { defaultValue = ""; }
            var keyEncrypted = this.encode(key, 3265812).toString();
            if (typeof defaultValue === "undefined")
                defaultValue || null;
            var r = cc.sys.localStorage.getItem(keyEncrypted);
            if (cc.sys.isBrowser) {
                r = window.localStorage.getItem(keyEncrypted);
            }
            if (r) {
                r = this.encode(r, 3265812).toString();
                return r;
            }
            return defaultValue;
        };
        SPUtils.set = function (key, value) {
            value = value.toString();
            var keyEncrypted = "" + this.encode(key, 3265812);
            var valueEncrypted = "" + this.encode(value, 3265812);
            if (cc.sys.isBrowser) {
                window.localStorage.setItem(keyEncrypted, valueEncrypted);
            }
            else {
                cc.sys.localStorage.setItem(keyEncrypted, valueEncrypted);
            }
        };
        SPUtils.setAccessTokenFB = function (value) {
            this.set("at_fb", value);
        };
        SPUtils.getAccessTokenFB = function () {
            return this.get("at_fb");
        };
        SPUtils.copyToClipboard = function (content) {
            if (cc.sys.isNative) {
                if (jsb) {
                    jsb.copyTextToClipboard(content);
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                var input = document.createElement('input');
                input.value = content;
                input.id = 'inputID';
                document.body.appendChild(input);
                input.select();
                document.execCommand('copy');
                document.body.removeChild(input);
                return true;
            }
        };
        ;
        SPUtils.setAccessToken = function (value) {
            this.set("at", value);
        };
        SPUtils.setUserName = function (value) {
            this.set("username", value);
        };
        SPUtils.setNN = function (value) {
            this.set("u", value);
        };
        SPUtils.getNN = function () {
            return this.get("u");
        };
        SPUtils.getUserName = function () {
            return this.get("username");
        };
        SPUtils.getAccessToken = function () {
            return this.get("at");
        };
        SPUtils.setUserPass = function (value) {
            this.set("userpass", value);
        };
        SPUtils.getUserPass = function () {
            return this.get("userpass");
        };
        SPUtils.setUserAccessTokenFB = function (value) {
            this.set("fbAccessToken", value);
        };
        SPUtils.getUserAccessTokenFB = function () {
            return this.get("fbAccessToken");
        };
        SPUtils.getMusicVolumn = function () {
            return Number(this.get("music_volumn", "1"));
        };
        SPUtils.setMusicVolumn = function (volumn) {
            this.set("music_volumn", volumn.toString());
        };
        SPUtils.getSoundVolumn = function () {
            return Number(this.get("sound_volumn", "1"));
        };
        SPUtils.setSoundVolumn = function (volumn) {
            this.set("sound_volumn", volumn.toString());
        };
        return SPUtils;
    }());
    common.SPUtils = SPUtils;
})(common || (common = {}));
exports.default = common.SPUtils;

cc._RF.pop();