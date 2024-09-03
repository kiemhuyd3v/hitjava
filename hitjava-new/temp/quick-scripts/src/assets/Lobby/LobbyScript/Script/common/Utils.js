"use strict";
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