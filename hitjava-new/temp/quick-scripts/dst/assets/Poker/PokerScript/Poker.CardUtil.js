
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Poker/PokerScript/Poker.CardUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9e845jpkItM3qUvol2ZR5Tu', 'Poker.CardUtil');
// Poker/PokerScript/Poker.CardUtil.ts

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
            return Math.floor(a / 4) + 1;
        };
        CardUtils.getChatById = function (a) {
            return a % 4;
        };
        CardUtils.getNormalId = function (a) {
            // var b: number = -1;
            // b = 4 > a ? 11 : 8 > a ? 12 : Math.floor(a / 4) - 2;
            // a = Math.floor(a % 4);
            // 3 == a ? a = 2 : 2 == a && (a = 3);
            // return 4 * b + a
            return a;
        };
        return CardUtils;
    }());
    common.CardUtils = CardUtils;
})(common = exports.common || (exports.common = {}));
exports.default = common.CardUtils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUG9rZXJcXFBva2VyU2NyaXB0XFxQb2tlci5DYXJkVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFpQixNQUFNLENBb0N0QjtBQXBDRCxXQUFpQixNQUFNO0lBQ25CO1FBQUE7UUFrQ0EsQ0FBQztRQTVCVSxxQkFBVyxHQUFsQixVQUFtQixDQUFTO1lBQ3hCLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ1osSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbkMsQ0FBQztRQUVNLG1CQUFTLEdBQWhCLFVBQWlCLENBQVM7WUFDdEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUM1QixDQUFDO1FBRU0scUJBQVcsR0FBbEIsVUFBbUIsQ0FBUztZQUN4QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNoQyxDQUFDO1FBRU0scUJBQVcsR0FBbEIsVUFBbUIsQ0FBUztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDaEIsQ0FBQztRQUVNLHFCQUFXLEdBQWxCLFVBQW1CLENBQVM7WUFDeEIsc0JBQXNCO1lBQ3RCLHVEQUF1RDtZQUN2RCx5QkFBeUI7WUFDekIsc0NBQXNDO1lBQ3RDLG1CQUFtQjtZQUVuQixPQUFPLENBQUMsQ0FBQztRQUNiLENBQUM7UUFDTCxnQkFBQztJQUFELENBbENBLEFBa0NDLElBQUE7SUFsQ1ksZ0JBQVMsWUFrQ3JCLENBQUE7QUFDTCxDQUFDLEVBcENnQixNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUFvQ3RCO0FBQ0Qsa0JBQWUsTUFBTSxDQUFDLFNBQVMsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmV4cG9ydCBuYW1lc3BhY2UgY29tbW9uIHtcbiAgICBleHBvcnQgY2xhc3MgQ2FyZFV0aWxzIHtcbiAgICAgICAgc3RhdGljIGlkOiBudW1iZXI7XG4gICAgICAgIHN0YXRpYyBzbzogbnVtYmVyO1xuICAgICAgICBzdGF0aWMgY2hhdDogbnVtYmVyO1xuICAgICAgICBzdGF0aWMgZGllbTogbnVtYmVyO1xuXG4gICAgICAgIHN0YXRpYyBnZXRDYXJkSW5mbyhhOiBudW1iZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSBhO1xuICAgICAgICAgICAgdGhpcy5zbyA9IHRoaXMuZ2V0U29CeUlkKGEpO1xuICAgICAgICAgICAgdGhpcy5jaGF0ID0gdGhpcy5nZXRDaGF0QnlJZChhKTtcbiAgICAgICAgICAgIHRoaXMuZGllbSA9IHRoaXMuZ2V0RGllbUJ5SWQoYSlcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyBnZXRTb0J5SWQoYTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKGEgLyA0KVxuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIGdldERpZW1CeUlkKGE6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihhIC8gNCkgKyAxXG4gICAgICAgIH1cblxuICAgICAgICBzdGF0aWMgZ2V0Q2hhdEJ5SWQoYTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgICAgIHJldHVybiBhICUgNFxuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIGdldE5vcm1hbElkKGE6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgICAgICAvLyB2YXIgYjogbnVtYmVyID0gLTE7XG4gICAgICAgICAgICAvLyBiID0gNCA+IGEgPyAxMSA6IDggPiBhID8gMTIgOiBNYXRoLmZsb29yKGEgLyA0KSAtIDI7XG4gICAgICAgICAgICAvLyBhID0gTWF0aC5mbG9vcihhICUgNCk7XG4gICAgICAgICAgICAvLyAzID09IGEgPyBhID0gMiA6IDIgPT0gYSAmJiAoYSA9IDMpO1xuICAgICAgICAgICAgLy8gcmV0dXJuIDQgKiBiICsgYVxuXG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbW1vbi5DYXJkVXRpbHM7Il19