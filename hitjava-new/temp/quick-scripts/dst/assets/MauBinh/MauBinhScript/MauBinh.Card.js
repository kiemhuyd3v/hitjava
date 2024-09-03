
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/MauBinh/MauBinhScript/MauBinh.Card.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a2d4bIJJopJlrCYY5D9/4Rr', 'MauBinh.Card');
// MauBinh/MauBinhScript/MauBinh.Card.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maubinh = void 0;
var MauBinh_Cmd_1 = require("./MauBinh.Cmd");
var maubinh;
(function (maubinh) {
    var MauBinhCard = /** @class */ (function () {
        function MauBinhCard(a, b) {
            this.id = a;
            this.display = b;
        }
        MauBinhCard.prototype.setCard = function (a, b) {
            this.id = 4 * (a - 2) + b;
        };
        MauBinhCard.prototype.getNumber = function () {
            return Math.floor(this.id / 4) + 2;
        };
        MauBinhCard.prototype.getSuit = function () {
            return this.id % 4;
        };
        MauBinhCard.prototype.getId = function () {
            return this.id;
        };
        MauBinhCard.prototype.getColor = function () {
            var a = this.getSuit();
            if (a == MauBinh_Cmd_1.default.Code.SPADE || a == MauBinh_Cmd_1.default.Code.CLUB)
                return MauBinh_Cmd_1.default.Code.BLACK;
            if (a == MauBinh_Cmd_1.default.Code.DIAMOND || a == MauBinh_Cmd_1.default.Code.HEART)
                return MauBinh_Cmd_1.default.Code.RED;
            //  cc.log("Not consistent card color with suit \x3d " + a);
            return null;
        };
        return MauBinhCard;
    }());
    maubinh.MauBinhCard = MauBinhCard;
})(maubinh = exports.maubinh || (exports.maubinh = {}));
exports.default = maubinh.MauBinhCard;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTWF1QmluaFxcTWF1QmluaFNjcmlwdFxcTWF1QmluaC5DYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUFnQztBQUVoQyxJQUFpQixPQUFPLENBa0N2QjtBQWxDRCxXQUFpQixPQUFPO0lBQ3BCO1FBSUkscUJBQVksQ0FBQyxFQUFFLENBQUM7WUFDWixJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFFRCw2QkFBTyxHQUFQLFVBQVEsQ0FBQyxFQUFFLENBQUM7WUFDUixJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDN0IsQ0FBQztRQUVELCtCQUFTLEdBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDdEMsQ0FBQztRQUVELDZCQUFPLEdBQVA7WUFDSSxPQUFPLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ3RCLENBQUM7UUFFRCwyQkFBSyxHQUFMO1lBQ0ksT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFBO1FBQ2xCLENBQUM7UUFFRCw4QkFBUSxHQUFSO1lBQ0ksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLHFCQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUkscUJBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtnQkFBRSxPQUFPLHFCQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNyRSxJQUFJLENBQUMsSUFBSSxxQkFBRyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLHFCQUFHLENBQUMsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsT0FBTyxxQkFBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDdEUsNERBQTREO1lBQzVELE9BQU8sSUFBSSxDQUFBO1FBQ2YsQ0FBQztRQUNMLGtCQUFDO0lBQUQsQ0FoQ0EsQUFnQ0MsSUFBQTtJQWhDWSxtQkFBVyxjQWdDdkIsQ0FBQTtBQUNMLENBQUMsRUFsQ2dCLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQWtDdkI7QUFDRCxrQkFBZSxPQUFPLENBQUMsV0FBVyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENtZCBmcm9tICcuL01hdUJpbmguQ21kJztcblxuZXhwb3J0IG5hbWVzcGFjZSBtYXViaW5oIHtcbiAgICBleHBvcnQgY2xhc3MgTWF1QmluaENhcmQge1xuICAgICAgICBpZDogLTE7XG4gICAgICAgIGRpc3BsYXk6IG51bGw7XG5cbiAgICAgICAgY29uc3RydWN0b3IoYSwgYikge1xuICAgICAgICAgICAgdGhpcy5pZCA9IGE7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkgPSBiO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0Q2FyZChhLCBiKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gNCAqIChhIC0gMikgKyBiXG4gICAgICAgIH1cblxuICAgICAgICBnZXROdW1iZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLmlkIC8gNCkgKyAyXG4gICAgICAgIH1cblxuICAgICAgICBnZXRTdWl0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWQgJSA0XG4gICAgICAgIH1cblxuICAgICAgICBnZXRJZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlkXG4gICAgICAgIH1cblxuICAgICAgICBnZXRDb2xvcigpIHtcbiAgICAgICAgICAgIHZhciBhID0gdGhpcy5nZXRTdWl0KCk7XG4gICAgICAgICAgICBpZiAoYSA9PSBDbWQuQ29kZS5TUEFERSB8fCBhID09IENtZC5Db2RlLkNMVUIpIHJldHVybiBDbWQuQ29kZS5CTEFDSztcbiAgICAgICAgICAgIGlmIChhID09IENtZC5Db2RlLkRJQU1PTkQgfHwgYSA9PSBDbWQuQ29kZS5IRUFSVCkgcmV0dXJuIENtZC5Db2RlLlJFRDtcbiAgICAgICAgICAgIC8vICBjYy5sb2coXCJOb3QgY29uc2lzdGVudCBjYXJkIGNvbG9yIHdpdGggc3VpdCBcXHgzZCBcIiArIGEpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG1hdWJpbmguTWF1QmluaENhcmQ7XG4iXX0=