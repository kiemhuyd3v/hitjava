
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BaCay/BaCayScript/BaCay.CardUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2a9298AFAtMALw5rLYRifA2', 'BaCay.CardUtil');
// BaCay/BaCayScript/BaCay.CardUtil.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQmFDYXlcXEJhQ2F5U2NyaXB0XFxCYUNheS5DYXJkVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFpQixNQUFNLENBa0N0QjtBQWxDRCxXQUFpQixNQUFNO0lBQ25CO1FBQUE7UUFnQ0EsQ0FBQztRQTFCVSxxQkFBVyxHQUFsQixVQUFtQixDQUFTO1lBQ3hCLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ1osSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbkMsQ0FBQztRQUVNLG1CQUFTLEdBQWhCLFVBQWlCLENBQVM7WUFDdEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUM1QixDQUFDO1FBRU0scUJBQVcsR0FBbEIsVUFBbUIsQ0FBUztZQUN4QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNoQyxDQUFDO1FBRU0scUJBQVcsR0FBbEIsVUFBbUIsQ0FBUztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDaEIsQ0FBQztRQUVNLHFCQUFXLEdBQWxCLFVBQW1CLENBQVM7WUFDeEIsSUFBSSxDQUFDLEdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDbkIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDcEQsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNwQixDQUFDO1FBQ0wsZ0JBQUM7SUFBRCxDQWhDQSxBQWdDQyxJQUFBO0lBaENZLGdCQUFTLFlBZ0NyQixDQUFBO0FBQ0wsQ0FBQyxFQWxDZ0IsTUFBTSxHQUFOLGNBQU0sS0FBTixjQUFNLFFBa0N0QjtBQUNELGtCQUFlLE1BQU0sQ0FBQyxTQUFTLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5leHBvcnQgbmFtZXNwYWNlIGNvbW1vbiB7XG4gICAgZXhwb3J0IGNsYXNzIENhcmRVdGlscyB7XG4gICAgICAgIHN0YXRpYyBpZDogbnVtYmVyO1xuICAgICAgICBzdGF0aWMgc286IG51bWJlcjtcbiAgICAgICAgc3RhdGljIGNoYXQ6IG51bWJlcjtcbiAgICAgICAgc3RhdGljIGRpZW06IG51bWJlcjtcblxuICAgICAgICBzdGF0aWMgZ2V0Q2FyZEluZm8oYTogbnVtYmVyKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gYTtcbiAgICAgICAgICAgIHRoaXMuc28gPSB0aGlzLmdldFNvQnlJZChhKTtcbiAgICAgICAgICAgIHRoaXMuY2hhdCA9IHRoaXMuZ2V0Q2hhdEJ5SWQoYSk7XG4gICAgICAgICAgICB0aGlzLmRpZW0gPSB0aGlzLmdldERpZW1CeUlkKGEpXG4gICAgICAgIH1cblxuICAgICAgICBzdGF0aWMgZ2V0U29CeUlkKGE6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihhIC8gNClcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyBnZXREaWVtQnlJZChhOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoYSAvIDQpICsgMVxuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIGdldENoYXRCeUlkKGE6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgICAgICByZXR1cm4gYSAlIDRcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyBnZXROb3JtYWxJZChhOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICAgICAgdmFyIGI6IG51bWJlciA9IC0xO1xuICAgICAgICAgICAgYiA9IDQgPiBhID8gMTEgOiA4ID4gYSA/IDEyIDogTWF0aC5mbG9vcihhIC8gNCkgLSAyO1xuICAgICAgICAgICAgYSA9IE1hdGguZmxvb3IoYSAlIDQpO1xuICAgICAgICAgICAgMyA9PSBhID8gYSA9IDIgOiAyID09IGEgJiYgKGEgPSAzKTtcbiAgICAgICAgICAgIHJldHVybiA0ICogYiArIGFcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbW1vbi5DYXJkVXRpbHM7Il19