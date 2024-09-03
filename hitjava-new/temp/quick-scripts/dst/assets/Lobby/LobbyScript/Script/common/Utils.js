
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/common/Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e86efcy15xCqJ8SuQDPKLzT', 'Utils');
// Lobby/LobbyScript/Script/common/Utils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.common = void 0;
var Configs_1 = require("../../../../Loading/src/Configs");
var IS_SHOW_LOG = true;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var common;
(function (common) {
    var Utils = /** @class */ (function () {
        function Utils() {
        }
        Utils.loadImgFromUrl = function (_sprite, url, parentScale) {
            if (_sprite === void 0) { _sprite = null; }
            if (url === void 0) { url = ''; }
            if (parentScale === void 0) { parentScale = null; }
            if (_sprite === null || url === '')
                return;
            cc.assetManager.loadRemote(url, function (err, tex) {
                if (err != null)
                    return;
                _sprite.spriteFrame = new cc.SpriteFrame(tex);
                if (parentScale) {
                    if (parentScale.width < _sprite.node.width) {
                        var sc = (parentScale.width / _sprite.node.width) - .1;
                        //Utils.Log('---> SCALE W ' + sc);
                        if (sc > .5)
                            _sprite.node.scale = sc;
                    }
                    else if (parentScale.height < _sprite.node.height) {
                        var sc = (parentScale.height / _sprite.node.height) - .1;
                        //Utils.Log('---> SCALE H ' + sc);
                        if (sc > .5)
                            _sprite.node.scale = sc;
                    }
                }
            });
        };
        Utils.copy = function (text) {
            try {
                if (cc.sys.os == cc.sys.OS_ANDROID) {
                    // jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "JavaCopy", "(Ljava/lang/String;)V", text);
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "JavaCopy", "(Ljava/lang/String;Ljava/lang/String;)V", text);
                }
                else if (cc.sys.os == cc.sys.OS_IOS) {
                    jsb.reflection.callStaticMethod("AppController", "JavaCopy:", text);
                }
                else {
                    var el = document.createElement('textarea');
                    el.value = text;
                    document.body.appendChild(el);
                    el.select();
                    document.execCommand('copy');
                    document.body.removeChild(el);
                }
            }
            catch (message) {
                //  cc.log("Error Copy:", message);
            }
        };
        Utils.degreesToVec2 = function (degrees) {
            return Utils.radianToVec2(degrees * Utils.Deg2Rad);
        };
        Utils.radianToVec2 = function (radian) {
            return cc.v2(Math.cos(radian), Math.sin(radian));
        };
        Utils.numberToEnum = function (value, typeEnum) {
            return typeEnum[typeEnum[value]];
        };
        Utils.ToVND = function (number) {
            var result = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            if (result == null || result == "NaN")
                result = 0;
            return result;
        };
        Utils.ToInt = function (vnd) {
            // var vndtmp = vnd.replaceAll('.','');
            if (vnd == "")
                return 0;
            var vndtmp = vnd.split('.').join('');
            return parseInt(vndtmp);
        };
        Utils.IsJsonString = function (text) {
            if (/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').
                replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
                replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
                //the json is ok
                return true;
            }
            else {
                //the json is not ok
                return false;
            }
        };
        Utils.loadSpriteFrameFromBase64 = function (base64, callback) {
            //create DOM element
            var img = new Image();
            //define img.onload before assigning src
            img.onload = function () {
                var texture = new cc.Texture2D();
                texture.initWithElement(img);
                texture.handleLoadedTexture();
                var sp = new cc.SpriteFrame(texture);
                //  //Utils.Log(sp);
                //assign the spriteframe to you sprite
                callback(sp);
            }.bind(this);
            img.src = "data:image/png;base64," + base64;
        };
        Utils.formatNameBank = function (n) {
            var name = n.toLowerCase();
            var arr = {
                "àáảãạăắằẳẵặâấầẩẫậ": "a",
                "óòỏõọơớờởỡợôốồổỗộ": "o",
                "éèẻẽẹêếềểễệ": "e",
                "úùủũụưứừửữự": "u",
                "íìỉĩị": "i",
                "ýỳỷỹỵ": "y",
                "đ": "d",
                "~!@#$%^&*()_+`[]\{}|;':*-+\",./<>?0123456789": "_"
            };
            for (var i = 0; i < name.length; i++) {
                for (var key in arr) {
                    for (var j = 0; j < key.length; j++) {
                        if (name[i] == key[j]) {
                            name = name.replace(name[i], arr[key]);
                        }
                    }
                }
            }
            name = name.replace(/_/g, '');
            // name = name.replace(/[^a-zA-Z ]/g, "");
            name = name.toUpperCase();
            return name;
        };
        Utils.formatName = function (n) {
            var name = n;
            var arr = {
                "àáảãạăắằẳẵặâấầẩẫậ": "a",
                "óòỏõọơớờởỡợôốồổỗộ": "o",
                "éèẻẽẹêếềểễệ": "e",
                "úùủũụưứừửữự": "u",
                "íìỉĩị": "i",
                "ýỳỷỹỵ": "y",
                "đ": "d",
            };
            for (var i = 0; i < name.length; i++) {
                for (var key in arr) {
                    for (var j = 0; j < key.length; j++) {
                        if (name[i] == key[j]) {
                            name = name.replace(name[i], arr[key]);
                        }
                    }
                }
            }
            name = name.trim();
            return name;
        };
        Utils.formatNumberBank = function (n) {
            var name = n;
            name = name.replace(/[^0-9]/g, "");
            return name;
        };
        Utils.formatEditBox = function (n) {
            if (n == "")
                return 0;
            var vndtmp = n.split('.').join('');
            return parseInt(vndtmp);
        };
        Utils.formatNumber = function (n) {
            var result = n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            return result;
            // return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        };
        Utils.formatMoney = function (money, isForMatK) {
            if (isForMatK === void 0) { isForMatK = false; }
            var format = "";
            var mo = Math.abs(money);
            if (mo >= 1000000000) {
                mo /= 1000000000;
                format = "B";
            }
            else if (mo >= 1000000) {
                mo /= 1000000;
                format = "M";
            }
            else if (mo >= 1000 && isForMatK) {
                mo /= 1000;
                format = "K";
            }
            else {
                return this.formatNumber(money);
            }
            var str = Math.abs(money).toString();
            var str1 = Math.floor(mo).toString();
            var strResult = str[str1.length] + str[str1.length + 1];
            if (strResult === '00') {
                return (money < 0 ? "-" : "") + Math.floor(mo) + format;
            }
            else {
                if (strResult[1] === '0') {
                    return (money < 0 ? "-" : "") + Math.floor(mo) + "." + strResult[0] + format;
                }
                else
                    return (money < 0 ? "-" : "") + Math.floor(mo) + "." + strResult + format;
            }
        };
        Utils.formatNumberMin = function (value) {
            var newValue = value;
            if (value >= 1000) {
                var suffixes = ["", "K", "M", "B", "T"];
                var suffixNum = Math.floor(("" + value).length / 3);
                var shortValue = 0;
                for (var precision = 2; precision >= 1; precision--) {
                    shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(precision));
                    var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');
                    if (dotLessShortValue.length <= 2) {
                        break;
                    }
                }
                if (shortValue % 1 != 0)
                    shortValue = parseFloat(shortValue.toFixed(1));
                newValue = shortValue + suffixes[suffixNum];
            }
            return newValue;
        };
        Utils.stringToInt = function (s) {
            var n = parseInt(s.replace(/\./g, '').replace(/,/g, ''));
            if (isNaN(n))
                n = 0;
            return n;
        };
        Utils.randomRangeInt = function (min, max) {
            //Returns a random number between min (inclusive) and max (inclusive)
            //Math.floor(Math.random() * (max - min + 1)) + min;
            //Returns a random number between min (inclusive) and max (exclusive)
            return Math.floor(Math.random() * (max - min)) + min;
        };
        Utils.randomRange = function (min, max) {
            //Returns a random number between min (inclusive) and max (exclusive)
            return Math.random() * (max - min) + min;
        };
        Utils.v2Distance = function (v1, v2) {
            return Math.sqrt(Math.pow(v2.x - v1.x, 2) + Math.pow(v2.y - v1.y, 2));
        };
        Utils.v2Degrees = function (v1, v2) {
            return Math.atan2(v2.y - v1.y, v2.x - v1.x) * 180 / Math.PI;
        };
        Utils.dateToYYYYMMdd = function (date) {
            var mm = date.getMonth() + 1; // getMonth() is zero-based
            var dd = date.getDate();
            return [
                date.getFullYear(),
                (mm > 9 ? '' : '0') + mm,
                (dd > 9 ? '' : '0') + dd
            ].join('-');
        };
        Utils.dateToYYYYMM = function (date) {
            var mm = date.getMonth() + 1; // getMonth() is zero-based
            var dd = date.getDate();
            return [
                date.getFullYear(),
                (mm > 9 ? '' : '0') + mm
            ].join('-');
        };
        Utils.removeDups = function (array) {
            var unique = {};
            array.forEach(function (i) {
                if (!unique[i]) {
                    unique[i] = true;
                }
            });
            return Object.keys(unique);
        };
        Utils.Log = function (str, params1) {
            if (params1 === void 0) { params1 = null; }
            if (IS_SHOW_LOG) {
                if (Configs_1.default.App.IS_PRO) {
                    //     console.log(str + ":", (params1 != null ? params1 : ""));
                }
                else {
                    //    cc.log(str + ":", (params1 != null ? params1 : ""));
                }
            }
        };
        Utils.Rad2Deg = 57.2957795;
        Utils.Deg2Rad = 0.0174532925;
        return Utils;
    }());
    common.Utils = Utils;
})(common = exports.common || (exports.common = {}));
exports.default = common.Utils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXGNvbW1vblxcVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXNEO0FBRXRELElBQUksV0FBVyxHQUFHLElBQUksQ0FBQztBQUVqQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFpQixNQUFNLENBb1N0QjtBQXBTRCxXQUFpQixNQUFNO0lBQ25CO1FBQUE7UUFrU0EsQ0FBQztRQS9SVSxvQkFBYyxHQUFyQixVQUFzQixPQUF5QixFQUFFLEdBQWdCLEVBQUUsV0FBMkI7WUFBeEUsd0JBQUEsRUFBQSxjQUF5QjtZQUFFLG9CQUFBLEVBQUEsUUFBZ0I7WUFBRSw0QkFBQSxFQUFBLGtCQUEyQjtZQUMxRixJQUFJLE9BQU8sS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLEVBQUU7Z0JBQUUsT0FBTztZQUMzQyxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBaUI7Z0JBQ25ELElBQUksR0FBRyxJQUFJLElBQUk7b0JBQUUsT0FBTztnQkFDeEIsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzlDLElBQUksV0FBVyxFQUFFO29CQUNiLElBQUksV0FBVyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTt3QkFDeEMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFBO3dCQUN0RCxrQ0FBa0M7d0JBQ2xDLElBQUksRUFBRSxHQUFHLEVBQUU7NEJBQ1AsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFB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S0FBTixjQUFNLFFBb1N0QjtBQUNELGtCQUFlLE1BQU0sQ0FBQyxLQUFLLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuXG52YXIgSVNfU0hPV19MT0cgPSB0cnVlO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5leHBvcnQgbmFtZXNwYWNlIGNvbW1vbiB7XG4gICAgZXhwb3J0IGNsYXNzIFV0aWxzIHtcbiAgICAgICAgc3RhdGljIFJhZDJEZWc6IG51bWJlciA9IDU3LjI5NTc3OTU7XG4gICAgICAgIHN0YXRpYyBEZWcyUmFkOiBudW1iZXIgPSAwLjAxNzQ1MzI5MjU7XG4gICAgICAgIHN0YXRpYyBsb2FkSW1nRnJvbVVybChfc3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsLCB1cmw6IHN0cmluZyA9ICcnLCBwYXJlbnRTY2FsZTogY2MuTm9kZSA9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChfc3ByaXRlID09PSBudWxsIHx8IHVybCA9PT0gJycpIHJldHVybjtcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKHVybCwgKGVyciwgdGV4OiBjYy5UZXh0dXJlMkQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyICE9IG51bGwpIHJldHVybjtcbiAgICAgICAgICAgICAgICBfc3ByaXRlLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleCk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudFNjYWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRTY2FsZS53aWR0aCA8IF9zcHJpdGUubm9kZS53aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNjID0gKHBhcmVudFNjYWxlLndpZHRoIC8gX3Nwcml0ZS5ub2RlLndpZHRoKSAtIC4xXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1V0aWxzLkxvZygnLS0tPiBTQ0FMRSBXICcgKyBzYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2MgPiAuNSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc3ByaXRlLm5vZGUuc2NhbGUgPSBzY1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcmVudFNjYWxlLmhlaWdodCA8IF9zcHJpdGUubm9kZS5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzYyA9IChwYXJlbnRTY2FsZS5oZWlnaHQgLyBfc3ByaXRlLm5vZGUuaGVpZ2h0KSAtIC4xXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vVXRpbHMuTG9nKCctLS0+IFNDQUxFIEggJyArIHNjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzYyA+IC41KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zcHJpdGUubm9kZS5zY2FsZSA9IHNjXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyBjb3B5KHRleHQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJKYXZhQ29weVwiLCBcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLCB0ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwiSmF2YUNvcHlcIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgdGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TKSB7XG4gICAgICAgICAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJBcHBDb250cm9sbGVyXCIsIFwiSmF2YUNvcHk6XCIsIHRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICAgICAgICAgICAgICBlbC52YWx1ZSA9IHRleHQ7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICAgICAgICAgICAgICBlbC5zZWxlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiRXJyb3IgQ29weTpcIiwgbWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0aWMgZGVncmVlc1RvVmVjMihkZWdyZWVzOiBudW1iZXIpOiBjYy5WZWMyIHtcbiAgICAgICAgICAgIHJldHVybiBVdGlscy5yYWRpYW5Ub1ZlYzIoZGVncmVlcyAqIFV0aWxzLkRlZzJSYWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIHJhZGlhblRvVmVjMihyYWRpYW46IG51bWJlcik6IGNjLlZlYzIge1xuICAgICAgICAgICAgcmV0dXJuIGNjLnYyKE1hdGguY29zKHJhZGlhbiksIE1hdGguc2luKHJhZGlhbikpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIG51bWJlclRvRW51bTxUPih2YWx1ZTogbnVtYmVyLCB0eXBlRW51bTogVCk6IFRba2V5b2YgVF0gfCB1bmRlZmluZWQge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVFbnVtW3R5cGVFbnVtW3ZhbHVlXV07XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0aWMgVG9WTkQobnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gbnVtYmVyLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIuXCIpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PSBudWxsIHx8IHJlc3VsdCA9PSBcIk5hTlwiKSByZXN1bHQgPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBzdGF0aWMgVG9JbnQodm5kKSB7XG4gICAgICAgICAgICAvLyB2YXIgdm5kdG1wID0gdm5kLnJlcGxhY2VBbGwoJy4nLCcnKTtcbiAgICAgICAgICAgIGlmICh2bmQgPT0gXCJcIikgcmV0dXJuIDA7XG4gICAgICAgICAgICB2YXIgdm5kdG1wID0gdm5kLnNwbGl0KCcuJykuam9pbignJyk7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodm5kdG1wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyBJc0pzb25TdHJpbmcodGV4dCkge1xuICAgICAgICAgICAgaWYgKC9eW1xcXSw6e31cXHNdKiQvLnRlc3QodGV4dC5yZXBsYWNlKC9cXFxcW1wiXFxcXFxcL2JmbnJ0dV0vZywgJ0AnKS5cbiAgICAgICAgICAgICAgICByZXBsYWNlKC9cIlteXCJcXFxcXFxuXFxyXSpcInx0cnVlfGZhbHNlfG51bGx8LT9cXGQrKD86XFwuXFxkKik/KD86W2VFXVsrXFwtXT9cXGQrKT8vZywgJ10nKS5cbiAgICAgICAgICAgICAgICByZXBsYWNlKC8oPzpefDp8LCkoPzpcXHMqXFxbKSsvZywgJycpKSkge1xuXG4gICAgICAgICAgICAgICAgLy90aGUganNvbiBpcyBva1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIC8vdGhlIGpzb24gaXMgbm90IG9rXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuXG4gICAgICAgIHN0YXRpYyBsb2FkU3ByaXRlRnJhbWVGcm9tQmFzZTY0KGJhc2U2NDogc3RyaW5nLCBjYWxsYmFjazogKHNwckZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4gdm9pZCkge1xuICAgICAgICAgICAgLy9jcmVhdGUgRE9NIGVsZW1lbnRcbiAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIC8vZGVmaW5lIGltZy5vbmxvYWQgYmVmb3JlIGFzc2lnbmluZyBzcmNcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRleHR1cmUgPSBuZXcgY2MuVGV4dHVyZTJEKCk7XG4gICAgICAgICAgICAgICAgdGV4dHVyZS5pbml0V2l0aEVsZW1lbnQoaW1nKTtcbiAgICAgICAgICAgICAgICB0ZXh0dXJlLmhhbmRsZUxvYWRlZFRleHR1cmUoKTtcbiAgICAgICAgICAgICAgICBsZXQgc3AgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XG4gICAgICAgICAgICAgICAgLy8gIC8vVXRpbHMuTG9nKHNwKTtcbiAgICAgICAgICAgICAgICAvL2Fzc2lnbiB0aGUgc3ByaXRlZnJhbWUgdG8geW91IHNwcml0ZVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHNwKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKTtcbiAgICAgICAgICAgIGltZy5zcmMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxcIiArIGJhc2U2NDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyBmb3JtYXROYW1lQmFuayhuOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBuLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB2YXIgYXJyID0ge1xuICAgICAgICAgICAgICAgIFwiw6DDoeG6o8Oj4bqhxIPhuq/hurHhurPhurXhurfDouG6peG6p+G6qeG6q+G6rVwiOiBcImFcIixcbiAgICAgICAgICAgICAgICBcIsOzw7Lhu4/DteG7jcah4bub4bud4buf4buh4bujw7Thu5Hhu5Phu5Xhu5fhu5lcIjogXCJvXCIsXG4gICAgICAgICAgICAgICAgXCLDqcOo4bq74bq94bq5w6rhur/hu4Hhu4Phu4Xhu4dcIjogXCJlXCIsXG4gICAgICAgICAgICAgICAgXCLDusO54bunxanhu6XGsOG7qeG7q+G7reG7r+G7sVwiOiBcInVcIixcbiAgICAgICAgICAgICAgICBcIsOtw6zhu4nEqeG7i1wiOiBcImlcIixcbiAgICAgICAgICAgICAgICBcIsO94buz4bu34bu54bu1XCI6IFwieVwiLFxuICAgICAgICAgICAgICAgIFwixJFcIjogXCJkXCIsXG4gICAgICAgICAgICAgICAgXCJ+IUAjJCVeJiooKV8rYFtdXFx7fXw7JzoqLStcXFwiLC4vPD4/MDEyMzQ1Njc4OVwiOiBcIl9cIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmFtZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBhcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBrZXkubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lW2ldID09IGtleVtqXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UobmFtZVtpXSwgYXJyW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvXy9nLCAnJyk7XG4gICAgICAgICAgICAvLyBuYW1lID0gbmFtZS5yZXBsYWNlKC9bXmEtekEtWiBdL2csIFwiXCIpO1xuICAgICAgICAgICAgbmFtZSA9IG5hbWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIGZvcm1hdE5hbWUobjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gbjtcbiAgICAgICAgICAgIHZhciBhcnIgPSB7XG4gICAgICAgICAgICAgICAgXCLDoMOh4bqjw6PhuqHEg+G6r+G6seG6s+G6teG6t8Oi4bql4bqn4bqp4bqr4bqtXCI6IFwiYVwiLFxuICAgICAgICAgICAgICAgIFwiw7PDsuG7j8O14buNxqHhu5vhu53hu5/hu6Hhu6PDtOG7keG7k+G7leG7l+G7mVwiOiBcIm9cIixcbiAgICAgICAgICAgICAgICBcIsOpw6jhurvhur3hurnDquG6v+G7geG7g+G7heG7h1wiOiBcImVcIixcbiAgICAgICAgICAgICAgICBcIsO6w7nhu6fFqeG7pcaw4bup4bur4but4buv4buxXCI6IFwidVwiLFxuICAgICAgICAgICAgICAgIFwiw63DrOG7icSp4buLXCI6IFwiaVwiLFxuICAgICAgICAgICAgICAgIFwiw73hu7Phu7fhu7nhu7VcIjogXCJ5XCIsXG4gICAgICAgICAgICAgICAgXCLEkVwiOiBcImRcIixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5hbWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gYXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwga2V5Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZVtpXSA9PSBrZXlbal0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKG5hbWVbaV0sIGFycltrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLnRyaW0oKTtcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIGZvcm1hdE51bWJlckJhbmsobjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gbjtcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1teMC05XS9nLCBcIlwiKVxuICAgICAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHN0YXRpYyBmb3JtYXRFZGl0Qm94KG46IHN0cmluZyk6IG51bWJlciB7XG4gICAgICAgICAgICBpZiAobiA9PSBcIlwiKSByZXR1cm4gMDtcbiAgICAgICAgICAgIHZhciB2bmR0bXAgPSBuLnNwbGl0KCcuJykuam9pbignJyk7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodm5kdG1wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyBmb3JtYXROdW1iZXIobjogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBuLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIC8vIHJldHVybiBuLnRvU3RyaW5nKCkucmVwbGFjZSgvKFxcZCkoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnJDEuJyk7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGljIGZvcm1hdE1vbmV5KG1vbmV5OiBudW1iZXIsIGlzRm9yTWF0SyA9IGZhbHNlKSB7XG4gICAgICAgICAgICBsZXQgZm9ybWF0ID0gXCJcIjtcbiAgICAgICAgICAgIGxldCBtbyA9IE1hdGguYWJzKG1vbmV5KTtcbiAgICAgICAgICAgIGlmIChtbyA+PSAxMDAwMDAwMDAwKSB7XG4gICAgICAgICAgICAgICAgbW8gLz0gMTAwMDAwMDAwMDtcbiAgICAgICAgICAgICAgICBmb3JtYXQgPSBcIkJcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobW8gPj0gMTAwMDAwMCkge1xuICAgICAgICAgICAgICAgIG1vIC89IDEwMDAwMDA7XG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gXCJNXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1vID49IDEwMDAgJiYgaXNGb3JNYXRLKSB7XG4gICAgICAgICAgICAgICAgbW8gLz0gMTAwMDtcbiAgICAgICAgICAgICAgICBmb3JtYXQgPSBcIktcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0TnVtYmVyKG1vbmV5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHN0ciA9IE1hdGguYWJzKG1vbmV5KS50b1N0cmluZygpO1xuICAgICAgICAgICAgbGV0IHN0cjEgPSBNYXRoLmZsb29yKG1vKS50b1N0cmluZygpO1xuXG4gICAgICAgICAgICBsZXQgc3RyUmVzdWx0ID0gc3RyW3N0cjEubGVuZ3RoXSArIHN0cltzdHIxLmxlbmd0aCArIDFdXG4gICAgICAgICAgICBpZiAoc3RyUmVzdWx0ID09PSAnMDAnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChtb25leSA8IDAgPyBcIi1cIiA6IFwiXCIpICsgTWF0aC5mbG9vcihtbykgKyBmb3JtYXQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzdHJSZXN1bHRbMV0gPT09ICcwJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG1vbmV5IDwgMCA/IFwiLVwiIDogXCJcIikgKyBNYXRoLmZsb29yKG1vKSArIFwiLlwiICsgc3RyUmVzdWx0WzBdICsgZm9ybWF0O1xuICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG1vbmV5IDwgMCA/IFwiLVwiIDogXCJcIikgKyBNYXRoLmZsb29yKG1vKSArIFwiLlwiICsgc3RyUmVzdWx0ICsgZm9ybWF0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyBmb3JtYXROdW1iZXJNaW4odmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBuZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgaWYgKHZhbHVlID49IDEwMDApIHtcbiAgICAgICAgICAgICAgICB2YXIgc3VmZml4ZXMgPSBbXCJcIiwgXCJLXCIsIFwiTVwiLCBcIkJcIiwgXCJUXCJdO1xuICAgICAgICAgICAgICAgIHZhciBzdWZmaXhOdW0gPSBNYXRoLmZsb29yKChcIlwiICsgdmFsdWUpLmxlbmd0aCAvIDMpO1xuICAgICAgICAgICAgICAgIHZhciBzaG9ydFZhbHVlID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwcmVjaXNpb24gPSAyOyBwcmVjaXNpb24gPj0gMTsgcHJlY2lzaW9uLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvcnRWYWx1ZSA9IHBhcnNlRmxvYXQoKHN1ZmZpeE51bSAhPSAwID8gKHZhbHVlIC8gTWF0aC5wb3coMTAwMCwgc3VmZml4TnVtKSkgOiB2YWx1ZSkudG9QcmVjaXNpb24ocHJlY2lzaW9uKSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkb3RMZXNzU2hvcnRWYWx1ZSA9IChzaG9ydFZhbHVlICsgJycpLnJlcGxhY2UoL1teYS16QS1aIDAtOV0rL2csICcnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvdExlc3NTaG9ydFZhbHVlLmxlbmd0aCA8PSAyKSB7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzaG9ydFZhbHVlICUgMSAhPSAwKSBzaG9ydFZhbHVlID0gcGFyc2VGbG9hdChzaG9ydFZhbHVlLnRvRml4ZWQoMSkpO1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gc2hvcnRWYWx1ZSArIHN1ZmZpeGVzW3N1ZmZpeE51bV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0aWMgc3RyaW5nVG9JbnQoczogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgICAgIHZhciBuID0gcGFyc2VJbnQocy5yZXBsYWNlKC9cXC4vZywgJycpLnJlcGxhY2UoLywvZywgJycpKTtcbiAgICAgICAgICAgIGlmIChpc05hTihuKSkgbiA9IDA7XG4gICAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyByYW5kb21SYW5nZUludChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICAgICAgLy9SZXR1cm5zIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIG1pbiAoaW5jbHVzaXZlKSBhbmQgbWF4IChpbmNsdXNpdmUpXG4gICAgICAgICAgICAvL01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG5cbiAgICAgICAgICAgIC8vUmV0dXJucyBhIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBtaW4gKGluY2x1c2l2ZSkgYW5kIG1heCAoZXhjbHVzaXZlKVxuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyByYW5kb21SYW5nZShtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICAgICAgLy9SZXR1cm5zIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIG1pbiAoaW5jbHVzaXZlKSBhbmQgbWF4IChleGNsdXNpdmUpXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIHYyRGlzdGFuY2UodjE6IGNjLlZlYzIsIHYyOiBjYy5WZWMyKTogbnVtYmVyIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3codjIueCAtIHYxLngsIDIpICsgTWF0aC5wb3codjIueSAtIHYxLnksIDIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyB2MkRlZ3JlZXModjE6IGNjLlZlYzIsIHYyOiBjYy5WZWMyKTogbnVtYmVyIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHYyLnkgLSB2MS55LCB2Mi54IC0gdjEueCkgKiAxODAgLyBNYXRoLlBJO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIGRhdGVUb1lZWVlNTWRkKGRhdGU6IERhdGUpIHtcbiAgICAgICAgICAgIHZhciBtbSA9IGRhdGUuZ2V0TW9udGgoKSArIDE7IC8vIGdldE1vbnRoKCkgaXMgemVyby1iYXNlZFxuICAgICAgICAgICAgdmFyIGRkID0gZGF0ZS5nZXREYXRlKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgICAgIChtbSA+IDkgPyAnJyA6ICcwJykgKyBtbSxcbiAgICAgICAgICAgICAgICAoZGQgPiA5ID8gJycgOiAnMCcpICsgZGRcbiAgICAgICAgICAgIF0uam9pbignLScpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIGRhdGVUb1lZWVlNTShkYXRlOiBEYXRlKSB7XG4gICAgICAgICAgICB2YXIgbW0gPSBkYXRlLmdldE1vbnRoKCkgKyAxOyAvLyBnZXRNb250aCgpIGlzIHplcm8tYmFzZWRcbiAgICAgICAgICAgIHZhciBkZCA9IGRhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgICAgICAobW0gPiA5ID8gJycgOiAnMCcpICsgbW1cbiAgICAgICAgICAgIF0uam9pbignLScpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIHJlbW92ZUR1cHMoYXJyYXk6IEFycmF5PGFueT4pIHtcbiAgICAgICAgICAgIHZhciB1bmlxdWUgPSB7fTtcbiAgICAgICAgICAgIGFycmF5LmZvckVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXVuaXF1ZVtpXSkge1xuICAgICAgICAgICAgICAgICAgICB1bmlxdWVbaV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHVuaXF1ZSk7XG4gICAgICAgIH1cblx0XHRcblx0XHQgXG5cdFx0XG5cdFx0XG5cdFx0XG4gICAgICAgIHN0YXRpYyBMb2coc3RyLCBwYXJhbXMxID0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKElTX1NIT1dfTE9HKSB7XG4gICAgICAgICAgICAgICAgaWYgKENvbmZpZ3MuQXBwLklTX1BSTykge1xuICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHN0ciArIFwiOlwiLCAocGFyYW1zMSAhPSBudWxsID8gcGFyYW1zMSA6IFwiXCIpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgIGNjLmxvZyhzdHIgKyBcIjpcIiwgKHBhcmFtczEgIT0gbnVsbCA/IHBhcmFtczEgOiBcIlwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29tbW9uLlV0aWxzOyJdfQ==