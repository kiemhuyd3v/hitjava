
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/common/SPUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXGNvbW1vblxcU1BVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQVUsTUFBTSxDQXVJZjtBQXZJRCxXQUFVLE1BQU07SUFDWjtRQUFBO1FBcUlBLENBQUM7UUFwSWtCLGNBQU0sR0FBckIsVUFBc0IsQ0FBUyxFQUFFLENBQVM7WUFDdEMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ2IsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ2IsaUNBQWlDO1lBQ2pDLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQy9CLGVBQWU7Z0JBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsY0FBYztnQkFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNkLEdBQUcsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN0QztZQUNELE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQztRQUVNLFdBQUcsR0FBVixVQUFXLEdBQVcsRUFBRSxZQUF5QjtZQUF6Qiw2QkFBQSxFQUFBLGlCQUF5QjtZQUM3QyxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN4RCxJQUFJLE9BQU8sWUFBWSxLQUFLLFdBQVc7Z0JBQUUsWUFBWSxJQUFJLElBQUksQ0FBQztZQUM5RCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDbEQsSUFBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQztnQkFDaEIsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ2pEO1lBQ0QsSUFBSSxDQUFDLEVBQUU7Z0JBQ0gsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN2QyxPQUFPLENBQUMsQ0FBQzthQUNaO1lBQ0QsT0FBTyxZQUFZLENBQUM7UUFDeEIsQ0FBQztRQUVNLFdBQUcsR0FBVixVQUFXLEdBQVcsRUFBRSxLQUFhO1lBQ2pDLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDekIsSUFBSSxZQUFZLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2xELElBQUksY0FBYyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztZQUN0RCxJQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDO2dCQUNoQixNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDLENBQUM7YUFDN0Q7aUJBQ0c7Z0JBQ0EsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQzthQUM3RDtRQUNMLENBQUM7UUFFTSx3QkFBZ0IsR0FBdkIsVUFBd0IsS0FBYTtZQUNqQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3QixDQUFDO1FBRU0sd0JBQWdCLEdBQXZCO1lBQ0ksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLENBQUM7UUFJQSx1QkFBZSxHQUF0QixVQUF1QixPQUFPO1lBQ3BCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksR0FBRyxFQUFFO29CQUNMLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDakMsT0FBTyxJQUFJLENBQUM7aUJBQ2Y7cUJBQU07b0JBQ0gsT0FBTyxLQUFLLENBQUM7aUJBQ2hCO2FBQ0o7aUJBQU07Z0JBQ0gsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDNUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7Z0JBQ3RCLEtBQUssQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDO2dCQUNyQixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNmLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzdCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQyxPQUFPLElBQUksQ0FBQzthQUNmO1FBQ0wsQ0FBQztRQUFBLENBQUM7UUFRSyxzQkFBYyxHQUFyQixVQUFzQixLQUFhO1lBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUM7UUFFTSxtQkFBVyxHQUFsQixVQUFtQixLQUFhO1lBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFFTSxhQUFLLEdBQVosVUFBYSxLQUFhO1lBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLENBQUM7UUFFTSxhQUFLLEdBQVo7WUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekIsQ0FBQztRQUVNLG1CQUFXLEdBQWxCO1lBQ0ksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFFTSxzQkFBYyxHQUFyQjtZQUNJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixDQUFDO1FBRU0sbUJBQVcsR0FBbEIsVUFBbUIsS0FBYTtZQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBRU0sbUJBQVcsR0FBbEI7WUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUVNLDRCQUFvQixHQUEzQixVQUE0QixLQUFhO1lBQ3JDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFFTSw0QkFBb0IsR0FBM0I7WUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUVNLHNCQUFjLEdBQXJCO1lBQ0ksT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBRU0sc0JBQWMsR0FBckIsVUFBc0IsTUFBYztZQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNoRCxDQUFDO1FBRU0sc0JBQWMsR0FBckI7WUFDSSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFFTSxzQkFBYyxHQUFyQixVQUFzQixNQUFjO1lBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELENBQUM7UUFDTCxjQUFDO0lBQUQsQ0FySUEsQUFxSUMsSUFBQTtJQXJJWSxjQUFPLFVBcUluQixDQUFBO0FBQ0wsQ0FBQyxFQXZJUyxNQUFNLEtBQU4sTUFBTSxRQXVJZjtBQUNELGtCQUFlLE1BQU0sQ0FBQyxPQUFPLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgY29tbW9uIHtcbiAgICBleHBvcnQgY2xhc3MgU1BVdGlscyB7XG4gICAgICAgIHByaXZhdGUgc3RhdGljIGVuY29kZShzOiBzdHJpbmcsIGs6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgICAgICB2YXIgZW5jID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBzdHIgPSBcIlwiO1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHRoYXQgaW5wdXQgaXMgc3RyaW5nXG4gICAgICAgICAgICBzdHIgPSBzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYmxvY2tcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICAgICAgICAgICAgICAvLyBiaXR3aXNlIFhPUlxuICAgICAgICAgICAgICAgIHZhciBiID0gYSBeIGs7XG4gICAgICAgICAgICAgICAgZW5jID0gZW5jICsgU3RyaW5nLmZyb21DaGFyQ29kZShiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbmM7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0aWMgZ2V0KGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IHN0cmluZyA9IFwiXCIpOiBzdHJpbmcge1xuICAgICAgICAgICAgdmFyIGtleUVuY3J5cHRlZCA9IHRoaXMuZW5jb2RlKGtleSwgMzI2NTgxMikudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGVmYXVsdFZhbHVlID09PSBcInVuZGVmaW5lZFwiKSBkZWZhdWx0VmFsdWUgfHwgbnVsbDtcbiAgICAgICAgICAgIHZhciByID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleUVuY3J5cHRlZCk7XG4gICAgICAgICAgICBpZihjYy5zeXMuaXNCcm93c2VyKXtcbiAgICAgICAgICAgICAgICByID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleUVuY3J5cHRlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgICAgIHIgPSB0aGlzLmVuY29kZShyLCAzMjY1ODEyKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHZhciBrZXlFbmNyeXB0ZWQgPSBcIlwiICsgdGhpcy5lbmNvZGUoa2V5LCAzMjY1ODEyKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZUVuY3J5cHRlZCA9IFwiXCIgKyB0aGlzLmVuY29kZSh2YWx1ZSwgMzI2NTgxMik7XG4gICAgICAgICAgICBpZihjYy5zeXMuaXNCcm93c2VyKXtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5RW5jcnlwdGVkLCB2YWx1ZUVuY3J5cHRlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXlFbmNyeXB0ZWQsIHZhbHVlRW5jcnlwdGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyBzZXRBY2Nlc3NUb2tlbkZCKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KFwiYXRfZmJcIiwgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIGdldEFjY2Vzc1Rva2VuRkIoKTogc3RyaW5nIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldChcImF0X2ZiXCIpO1xuICAgICAgICB9XG5cdFx0XG5cdFx0XG5cdFx0XG5cdFx0c3RhdGljIGNvcHlUb0NsaXBib2FyZChjb250ZW50KSB7XG4gICAgICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGpzYikge1xuICAgICAgICAgICAgICAgICAgICBqc2IuY29weVRleHRUb0NsaXBib2FyZChjb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgaW5wdXQuaWQgPSAnaW5wdXRJRCc7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgICAgICAgICAgaW5wdXQuc2VsZWN0KCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGlucHV0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblx0XHRcblx0XHRcblx0XHRcblx0XHRcblx0XHRcblx0XHRcblxuICAgICAgICBzdGF0aWMgc2V0QWNjZXNzVG9rZW4odmFsdWU6IHN0cmluZykge1xuICAgICAgICAgICAgdGhpcy5zZXQoXCJhdFwiLCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0aWMgc2V0VXNlck5hbWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICAgICAgdGhpcy5zZXQoXCJ1c2VybmFtZVwiLCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0aWMgc2V0Tk4odmFsdWU6IHN0cmluZykge1xuICAgICAgICAgICAgdGhpcy5zZXQoXCJ1XCIsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyBnZXROTigpOiBzdHJpbmcge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KFwidVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyBnZXRVc2VyTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KFwidXNlcm5hbWVcIik7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0aWMgZ2V0QWNjZXNzVG9rZW4oKTogc3RyaW5nIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldChcImF0XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIHNldFVzZXJQYXNzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KFwidXNlcnBhc3NcIiwgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIGdldFVzZXJQYXNzKCk6IHN0cmluZyB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXQoXCJ1c2VycGFzc1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyBzZXRVc2VyQWNjZXNzVG9rZW5GQih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnNldChcImZiQWNjZXNzVG9rZW5cIiwgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIGdldFVzZXJBY2Nlc3NUb2tlbkZCKCk6IHN0cmluZyB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXQoXCJmYkFjY2Vzc1Rva2VuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIGdldE11c2ljVm9sdW1uKCk6IG51bWJlciB7XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKHRoaXMuZ2V0KFwibXVzaWNfdm9sdW1uXCIsIFwiMVwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0aWMgc2V0TXVzaWNWb2x1bW4odm9sdW1uOiBudW1iZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KFwibXVzaWNfdm9sdW1uXCIsIHZvbHVtbi50b1N0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyBnZXRTb3VuZFZvbHVtbigpOiBudW1iZXIge1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlcih0aGlzLmdldChcInNvdW5kX3ZvbHVtblwiLCBcIjFcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIHNldFNvdW5kVm9sdW1uKHZvbHVtbjogbnVtYmVyKSB7XG4gICAgICAgICAgICB0aGlzLnNldChcInNvdW5kX3ZvbHVtblwiLCB2b2x1bW4udG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb21tb24uU1BVdGlsczsiXX0=