
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lieng/LiengScript/Lieng.CardUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTGllbmdcXExpZW5nU2NyaXB0XFxMaWVuZy5DYXJkVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFpQixNQUFNLENBbUN0QjtBQW5DRCxXQUFpQixNQUFNO0lBQ25CO1FBQUE7UUFpQ0EsQ0FBQztRQTNCVSxxQkFBVyxHQUFsQixVQUFtQixDQUFTO1lBQ3hCLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ1osSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbkMsQ0FBQztRQUVNLG1CQUFTLEdBQWhCLFVBQWlCLENBQVM7WUFDdEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUM1QixDQUFDO1FBRU0scUJBQVcsR0FBbEIsVUFBbUIsQ0FBUztZQUN4QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsQ0FBQztRQUVNLHFCQUFXLEdBQWxCLFVBQW1CLENBQVM7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2hCLENBQUM7UUFFTSxxQkFBVyxHQUFsQixVQUFtQixDQUFTO1lBQ3hCLCtCQUErQjtZQUMvQixJQUFJLENBQUMsR0FBVyxDQUFDLENBQUMsQ0FBQztZQUNuQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwRCxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdEIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3BCLENBQUM7UUFDTCxnQkFBQztJQUFELENBakNBLEFBaUNDLElBQUE7SUFqQ1ksZ0JBQVMsWUFpQ3JCLENBQUE7QUFDTCxDQUFDLEVBbkNnQixNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUFtQ3RCO0FBQ0Qsa0JBQWUsTUFBTSxDQUFDLFNBQVMsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIGNvbW1vbiB7XHJcbiAgICBleHBvcnQgY2xhc3MgQ2FyZFV0aWxzIHtcclxuICAgICAgICBzdGF0aWMgaWQ6IG51bWJlcjtcclxuICAgICAgICBzdGF0aWMgc286IG51bWJlcjtcclxuICAgICAgICBzdGF0aWMgY2hhdDogbnVtYmVyO1xyXG4gICAgICAgIHN0YXRpYyBkaWVtOiBudW1iZXI7XHJcblxyXG4gICAgICAgIHN0YXRpYyBnZXRDYXJkSW5mbyhhOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IGE7XHJcbiAgICAgICAgICAgIHRoaXMuc28gPSB0aGlzLmdldFNvQnlJZChhKTtcclxuICAgICAgICAgICAgdGhpcy5jaGF0ID0gdGhpcy5nZXRDaGF0QnlJZChhKTtcclxuICAgICAgICAgICAgdGhpcy5kaWVtID0gdGhpcy5nZXREaWVtQnlJZChhKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIGdldFNvQnlJZChhOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihhIC8gNClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyBnZXREaWVtQnlJZChhOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihhIC8gNCkgPD0gOCA/IE1hdGguZmxvb3IoYSAvIDQpICsgMSA6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgZ2V0Q2hhdEJ5SWQoYTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEgJSA0XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgZ2V0Tm9ybWFsSWQoYTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgLy9yZXR1cm4gNCA+IGEgPyBhICsgNDggOiBhIC00O1xyXG4gICAgICAgICAgICB2YXIgYjogbnVtYmVyID0gLTE7XHJcbiAgICAgICAgICAgIGIgPSA0ID4gYSA/IDExIDogOCA+IGEgPyAxMiA6IE1hdGguZmxvb3IoYSAvIDQpIC0gMjtcclxuICAgICAgICAgICAgYSA9IE1hdGguZmxvb3IoYSAlIDQpO1xyXG4gICAgICAgICAgICAzID09IGEgPyBhID0gMiA6IDIgPT0gYSAmJiAoYSA9IDMpO1xyXG4gICAgICAgICAgICByZXR1cm4gNCAqIGIgKyBhXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbW1vbi5DYXJkVXRpbHM7Il19