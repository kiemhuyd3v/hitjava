
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BaiCao/BaiCaoScript/BaiCao.CardUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQmFpQ2FvXFxCYWlDYW9TY3JpcHRcXEJhaUNhby5DYXJkVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFpQixNQUFNLENBdUN0QjtBQXZDRCxXQUFpQixNQUFNO0lBQ25CO1FBQUE7UUFxQ0EsQ0FBQztRQS9CVSxxQkFBVyxHQUFsQixVQUFtQixDQUFTO1lBQ3hCLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ1osSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbkMsQ0FBQztRQUVNLG1CQUFTLEdBQWhCLFVBQWlCLENBQVM7WUFDdEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUM1QixDQUFDO1FBRU0scUJBQVcsR0FBbEIsVUFBbUIsQ0FBUztZQUN4QiwyQkFBMkI7WUFDM0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLElBQUksS0FBSyxJQUFJLEVBQUUsSUFBSSxLQUFLLElBQUksRUFBRSxJQUFJLEtBQUssSUFBSSxFQUFFLEVBQUU7Z0JBQzNDLEtBQUssR0FBRyxFQUFFLENBQUM7YUFDZDtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFTSxxQkFBVyxHQUFsQixVQUFtQixDQUFTO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNoQixDQUFDO1FBRU0scUJBQVcsR0FBbEIsVUFBbUIsQ0FBUztZQUN4QixJQUFJLENBQUMsR0FBVyxDQUFDLENBQUMsQ0FBQztZQUNuQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwRCxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdEIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3BCLENBQUM7UUFDTCxnQkFBQztJQUFELENBckNBLEFBcUNDLElBQUE7SUFyQ1ksZ0JBQVMsWUFxQ3JCLENBQUE7QUFDTCxDQUFDLEVBdkNnQixNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUF1Q3RCO0FBQ0Qsa0JBQWUsTUFBTSxDQUFDLFNBQVMsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmV4cG9ydCBuYW1lc3BhY2UgY29tbW9uIHtcbiAgICBleHBvcnQgY2xhc3MgQ2FyZFV0aWxzIHtcbiAgICAgICAgc3RhdGljIGlkOiBudW1iZXI7XG4gICAgICAgIHN0YXRpYyBzbzogbnVtYmVyO1xuICAgICAgICBzdGF0aWMgY2hhdDogbnVtYmVyO1xuICAgICAgICBzdGF0aWMgZGllbTogbnVtYmVyO1xuXG4gICAgICAgIHN0YXRpYyBnZXRDYXJkSW5mbyhhOiBudW1iZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSBhO1xuICAgICAgICAgICAgdGhpcy5zbyA9IHRoaXMuZ2V0U29CeUlkKGEpO1xuICAgICAgICAgICAgdGhpcy5jaGF0ID0gdGhpcy5nZXRDaGF0QnlJZChhKTtcbiAgICAgICAgICAgIHRoaXMuZGllbSA9IHRoaXMuZ2V0RGllbUJ5SWQoYSlcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyBnZXRTb0J5SWQoYTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKGEgLyA0KVxuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIGdldERpZW1CeUlkKGE6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgICAgICAvLyBCYWkgY2FvIHRoaSBKLCBRLCBLID0gMTBcbiAgICAgICAgICAgIGxldCBzY29yZSA9IE1hdGguZmxvb3IoYSAvIDQpICsgMTtcbiAgICAgICAgICAgIGlmIChzY29yZSA9PSAxMSB8fCBzY29yZSA9PSAxMiB8fCBzY29yZSA9PSAxMykge1xuICAgICAgICAgICAgICAgIHNjb3JlID0gMTA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc2NvcmU7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0aWMgZ2V0Q2hhdEJ5SWQoYTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgICAgIHJldHVybiBhICUgNFxuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIGdldE5vcm1hbElkKGE6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgICAgICB2YXIgYjogbnVtYmVyID0gLTE7XG4gICAgICAgICAgICBiID0gNCA+IGEgPyAxMSA6IDggPiBhID8gMTIgOiBNYXRoLmZsb29yKGEgLyA0KSAtIDI7XG4gICAgICAgICAgICBhID0gTWF0aC5mbG9vcihhICUgNCk7XG4gICAgICAgICAgICAzID09IGEgPyBhID0gMiA6IDIgPT0gYSAmJiAoYSA9IDMpO1xuICAgICAgICAgICAgcmV0dXJuIDQgKiBiICsgYVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29tbW9uLkNhcmRVdGlsczsiXX0=