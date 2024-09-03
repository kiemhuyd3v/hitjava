"use strict";
cc._RF.push(module, '3fe3e/9gF9ElZ/vmUvBqR4d', 'BaiCao.CardUtil');
// BaiCao/BaiCaoScript/BaiCao.CardUtil.ts

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
            // Bai cao thi J, Q, K = 10
            var score = Math.floor(a / 4) + 1;
            if (score == 11 || score == 12 || score == 13) {
                score = 10;
            }
            return score;
        };
        CardUtils.getChatById = function (a) {
            return a % 4;
        };
        CardUtils.getNormalId = function (a) {
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