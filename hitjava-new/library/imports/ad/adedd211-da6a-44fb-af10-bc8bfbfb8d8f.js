"use strict";
cc._RF.push(module, 'adeddIR2mpE+68QvIv7+42P', 'Lieng.CardUtil');
// Lieng/LiengScript/Lieng.CardUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.common = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var common;
(function (common) {
    var CardUtils = /** @class */ (function () {
        function CardUtils() {
        }
        CardUtils.getCardInfo = function (a) {
            this.id = a;
            this.so = this.getSoById(a);
            this.chat = this.getChatById(a);
            this.diem = this.getDiemById(a);
        };
        CardUtils.getSoById = function (a) {
            return Math.floor(a / 4);
        };
        CardUtils.getDiemById = function (a) {
            return Math.floor(a / 4) <= 8 ? Math.floor(a / 4) + 1 : 0;
        };
        CardUtils.getChatById = function (a) {
            return a % 4;
        };
        CardUtils.getNormalId = function (a) {
            //return 4 > a ? a + 48 : a -4;
            var b = -1;
            b = 4 > a ? 11 : 8 > a ? 12 : Math.floor(a / 4) - 2;
            a = Math.floor(a % 4);
            3 == a ? a = 2 : 2 == a && (a = 3);
            return 4 * b + a;
        };
        return CardUtils;
    }());
    common.CardUtils = CardUtils;
})(common = exports.common || (exports.common = {}));
exports.default = common.CardUtils;

cc._RF.pop();