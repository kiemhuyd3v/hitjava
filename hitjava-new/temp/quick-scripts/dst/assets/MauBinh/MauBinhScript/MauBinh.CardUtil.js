
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/MauBinh/MauBinhScript/MauBinh.CardUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5f92nEHMdNj4gHuhmCMctb', 'MauBinh.CardUtil');
// MauBinh/MauBinhScript/MauBinh.CardUtil.ts

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
        CardUtils.getNumber = function (id) {
            return Math.floor(id / 4) + 2;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTWF1QmluaFxcTWF1QmluaFNjcmlwdFxcTWF1QmluaC5DYXJkVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFpQixNQUFNLENBd0N0QjtBQXhDRCxXQUFpQixNQUFNO0lBQ25CO1FBQUE7UUFzQ0EsQ0FBQztRQWhDVSxxQkFBVyxHQUFsQixVQUFtQixDQUFTO1lBQ3hCLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ1osSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbkMsQ0FBQztRQUVNLG1CQUFTLEdBQWhCLFVBQWlCLENBQVM7WUFDdEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUM1QixDQUFDO1FBRU0scUJBQVcsR0FBbEIsVUFBbUIsQ0FBUztZQUN4QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNoQyxDQUFDO1FBRU0scUJBQVcsR0FBbEIsVUFBbUIsQ0FBUztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDaEIsQ0FBQztRQUVNLHFCQUFXLEdBQWxCLFVBQW1CLENBQVM7WUFDeEIsc0JBQXNCO1lBQ3RCLHVEQUF1RDtZQUN2RCx5QkFBeUI7WUFDekIsc0NBQXNDO1lBQ3RDLG1CQUFtQjtZQUVuQixPQUFPLENBQUMsQ0FBQztRQUNiLENBQUM7UUFFTSxtQkFBUyxHQUFoQixVQUFpQixFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDakMsQ0FBQztRQUNMLGdCQUFDO0lBQUQsQ0F0Q0EsQUFzQ0MsSUFBQTtJQXRDWSxnQkFBUyxZQXNDckIsQ0FBQTtBQUNMLENBQUMsRUF4Q2dCLE1BQU0sR0FBTixjQUFNLEtBQU4sY0FBTSxRQXdDdEI7QUFDRCxrQkFBZSxNQUFNLENBQUMsU0FBUyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuZXhwb3J0IG5hbWVzcGFjZSBjb21tb24ge1xuICAgIGV4cG9ydCBjbGFzcyBDYXJkVXRpbHMge1xuICAgICAgICBzdGF0aWMgaWQ6IG51bWJlcjtcbiAgICAgICAgc3RhdGljIHNvOiBudW1iZXI7XG4gICAgICAgIHN0YXRpYyBjaGF0OiBudW1iZXI7XG4gICAgICAgIHN0YXRpYyBkaWVtOiBudW1iZXI7XG5cbiAgICAgICAgc3RhdGljIGdldENhcmRJbmZvKGE6IG51bWJlcikge1xuICAgICAgICAgICAgdGhpcy5pZCA9IGE7XG4gICAgICAgICAgICB0aGlzLnNvID0gdGhpcy5nZXRTb0J5SWQoYSk7XG4gICAgICAgICAgICB0aGlzLmNoYXQgPSB0aGlzLmdldENoYXRCeUlkKGEpO1xuICAgICAgICAgICAgdGhpcy5kaWVtID0gdGhpcy5nZXREaWVtQnlJZChhKVxuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIGdldFNvQnlJZChhOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoYSAvIDQpXG4gICAgICAgIH1cblxuICAgICAgICBzdGF0aWMgZ2V0RGllbUJ5SWQoYTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKGEgLyA0KSArIDFcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyBnZXRDaGF0QnlJZChhOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICAgICAgcmV0dXJuIGEgJSA0XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0aWMgZ2V0Tm9ybWFsSWQoYTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgICAgIC8vIHZhciBiOiBudW1iZXIgPSAtMTtcbiAgICAgICAgICAgIC8vIGIgPSA0ID4gYSA/IDExIDogOCA+IGEgPyAxMiA6IE1hdGguZmxvb3IoYSAvIDQpIC0gMjtcbiAgICAgICAgICAgIC8vIGEgPSBNYXRoLmZsb29yKGEgJSA0KTtcbiAgICAgICAgICAgIC8vIDMgPT0gYSA/IGEgPSAyIDogMiA9PSBhICYmIChhID0gMyk7XG4gICAgICAgICAgICAvLyByZXR1cm4gNCAqIGIgKyBhXG5cbiAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIGdldE51bWJlcihpZCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoaWQgLyA0KSArIDJcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbW1vbi5DYXJkVXRpbHM7Il19