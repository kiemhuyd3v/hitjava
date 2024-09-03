
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/NumberUpdater.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '338ba7NX9RBIJA9NiD3bLyX', 'NumberUpdater');
// Lobby/LobbyScript/NumberUpdater.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NumberUpdater = /** @class */ (function (_super) {
    __extends(NumberUpdater, _super);
    function NumberUpdater() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.step = 0.01;
        _this._currentNumber = 0;
        /***
         * @type function(str: string)=> string
         */
        _this._formatFunc = _this.preprocessingMoney;
        return _this;
    }
    Object.defineProperty(NumberUpdater.prototype, "currentNumber", {
        get: function () {
            return this._currentNumber;
        },
        set: function (value) {
            this._currentNumber = value;
            this.updateLabel();
        },
        enumerable: false,
        configurable: true
    });
    NumberUpdater.prototype.preprocessingMoney = function (money1) {
        money1 = parseInt(money1 + '');
        var money = Math.abs(money1) + '';
        var string = this.preprocessingString(money);
        if (money1 < 0) {
            string = "-" + string;
        }
        return string;
    };
    NumberUpdater.prototype.preprocessingString = function (money) {
        if (money.length < 4) {
            return money + "";
        }
        var string = "";
        var count = 1;
        for (var i = 0; i < money.length; i++) {
            string = money[money.length - 1 - i] + string;
            if (count % 3 === 0 && count !== money.length) {
                string = "." + string;
            }
            count++;
        }
        return string;
    };
    Object.defineProperty(NumberUpdater.prototype, "formatFunc", {
        set: function (formatFunc) {
            this._formatFunc = formatFunc;
        },
        enumerable: false,
        configurable: true
    });
    NumberUpdater.prototype.onLoad = function () {
        this.formatFunc = this.preprocessingString;
    };
    NumberUpdater.prototype.start = function () {
        if (!this.label) {
            this.label = this.getComponent(cc.Label);
        }
        // this.setNumber(20, 0.25);
    };
    NumberUpdater.prototype.setNumber = function (number, time, stepTime) {
        if (time) {
            this.unscheduleAllCallbacks();
            if (this.currentNumber === number) {
                return;
            }
            if (stepTime) {
                this.step = stepTime;
            }
            var interval = this.step;
            var repeat = Math.floor(time / this.step);
            if (this.currentNumber > number) {
                this.currentNumber = 0;
            }
            var distNumber_1 = Math.ceil((number - this.currentNumber) / repeat);
            if (distNumber_1 <= 0) {
                distNumber_1 = 1;
            }
            this.schedule(function () {
                this.currentNumber += distNumber_1;
                if (this.currentNumber > number) {
                    this.currentNumber = number;
                    this.unscheduleAllCallbacks();
                }
            }.bind(this), interval, repeat, 0);
        }
        else {
            this.currentNumber = number;
        }
    };
    NumberUpdater.prototype.updateLabel = function () {
        if (cc.isValid(this.label)) {
            if (this._formatFunc) {
                this.label.string = '' + this._formatFunc(this.currentNumber + '');
            }
            else {
                this.label.string = '' + this.currentNumber;
            }
        }
        else {
            //    cc.warn('this.label is not valid or null or undefined');
        }
    };
    NumberUpdater.prototype.onDestroy = function () {
        this.unscheduleAllCallbacks();
    };
    __decorate([
        property(cc.Label)
    ], NumberUpdater.prototype, "label", void 0);
    __decorate([
        property(cc.Integer)
    ], NumberUpdater.prototype, "step", void 0);
    __decorate([
        property(cc.Integer)
    ], NumberUpdater.prototype, "_currentNumber", void 0);
    NumberUpdater = __decorate([
        ccclass
    ], NumberUpdater);
    return NumberUpdater;
}(cc.Component));
exports.default = NumberUpdater;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxOdW1iZXJVcGRhdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBMkdDO1FBeEdHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFFaEIsVUFBSSxHQUFHLElBQUksQ0FBQztRQUVYLG9CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBb0NuQzs7V0FFRztRQUNLLGlCQUFXLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUFDOztJQTZEbEQsQ0FBQztJQW5HRyxzQkFBVyx3Q0FBYTthQUF4QjtZQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMvQixDQUFDO2FBRUQsVUFBeUIsS0FBYTtZQUNsQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkIsQ0FBQzs7O09BTEE7SUFPTSwwQ0FBa0IsR0FBekIsVUFBMkIsTUFBc0I7UUFDN0MsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDL0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDbEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNaLE1BQU0sR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO1NBQ3pCO1FB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Q0FBQyxFQUFFO1lBQ3hCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsQ0FBQzthQUN0RTtpQkFBTTtnQkFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUMvQztTQUNKO2FBQU07WUFDUCw4REFBOEQ7U0FDN0Q7SUFDTCxDQUFDO0lBRVMsaUNBQVMsR0FBbkI7UUFDSSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBdkdEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ0k7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzsrQ0FDRjtJQUVuQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3lEQUNjO0lBUGxCLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0EyR2pDO0lBQUQsb0JBQUM7Q0EzR0QsQUEyR0MsQ0EzRzBDLEVBQUUsQ0FBQyxTQUFTLEdBMkd0RDtrQkEzR29CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOdW1iZXJVcGRhdGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICAgIHB1YmxpYyBzdGVwID0gMC4wMTtcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgICBwcml2YXRlIF9jdXJyZW50TnVtYmVyOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBnZXQgY3VycmVudE51bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnROdW1iZXI7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBjdXJyZW50TnVtYmVyKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fY3VycmVudE51bWJlciA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHByZXByb2Nlc3NpbmdNb25leSAobW9uZXkxOm51bWJlciB8IHN0cmluZykgOiBzdHJpbmcge1xuICAgICAgICBtb25leTEgPSBwYXJzZUludChtb25leTEgKyAnJyk7XG4gICAgICAgIGxldCBtb25leSA9IE1hdGguYWJzKG1vbmV5MSkgKyAnJztcbiAgICAgICAgbGV0IHN0cmluZyA9IHRoaXMucHJlcHJvY2Vzc2luZ1N0cmluZyhtb25leSk7XG4gICAgICAgIGlmIChtb25leTEgPCAwKSB7XG4gICAgICAgICAgICBzdHJpbmcgPSBcIi1cIiArIHN0cmluZztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH1cblxuICAgIHB1YmxpYyBwcmVwcm9jZXNzaW5nU3RyaW5nIChtb25leTogc3RyaW5nKSB7XG4gICAgICAgIGlmIChtb25leS5sZW5ndGggPCA0KSB7XG4gICAgICAgICAgICByZXR1cm4gbW9uZXkgKyBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBsZXQgY291bnQgPSAxO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vbmV5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzdHJpbmcgPSBtb25leVttb25leS5sZW5ndGggLSAxIC0gaV0gKyBzdHJpbmc7XG4gICAgICAgICAgICBpZiAoY291bnQgJSAzID09PSAwICYmIGNvdW50ICE9PSBtb25leS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgPSBcIi5cIiArIHN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9XG5cbiAgICAvKioqXG4gICAgICogQHR5cGUgZnVuY3Rpb24oc3RyOiBzdHJpbmcpPT4gc3RyaW5nXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZm9ybWF0RnVuYyA9IHRoaXMucHJlcHJvY2Vzc2luZ01vbmV5O1xuICAgIHNldCBmb3JtYXRGdW5jKGZvcm1hdEZ1bmM6IChzdHI6IHN0cmluZykgPT4gc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2Zvcm1hdEZ1bmMgPSBmb3JtYXRGdW5jO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZm9ybWF0RnVuYyA9IHRoaXMucHJlcHJvY2Vzc2luZ1N0cmluZztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5sYWJlbCkge1xuICAgICAgICAgICAgdGhpcy5sYWJlbCA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLnNldE51bWJlcigyMCwgMC4yNSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldE51bWJlcihudW1iZXI6IG51bWJlciwgdGltZTogbnVtYmVyLCBzdGVwVGltZT86IG51bWJlcikge1xuICAgICAgICBpZiAodGltZSkge1xuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TnVtYmVyID09PSBudW1iZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RlcFRpbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0ZXAgPSBzdGVwVGltZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9IHRoaXMuc3RlcDtcbiAgICAgICAgICAgIGxldCByZXBlYXQgPSBNYXRoLmZsb29yKHRpbWUgLyB0aGlzLnN0ZXApO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE51bWJlciA+IG51bWJlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE51bWJlciA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGlzdE51bWJlciA9IE1hdGguY2VpbCgobnVtYmVyIC0gdGhpcy5jdXJyZW50TnVtYmVyKSAvIHJlcGVhdCk7XG4gICAgICAgICAgICBpZiAoZGlzdE51bWJlciA8PSAwKSB7XG4gICAgICAgICAgICAgICAgZGlzdE51bWJlciA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnROdW1iZXIgKz0gZGlzdE51bWJlcjtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TnVtYmVyID4gbnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE51bWJlciA9IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLCBpbnRlcnZhbCwgcmVwZWF0LCAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE51bWJlciA9IG51bWJlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUxhYmVsKCkge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmxhYmVsKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Zvcm1hdEZ1bmMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICcnICsgdGhpcy5fZm9ybWF0RnVuYyh0aGlzLmN1cnJlbnROdW1iZXIgKyAnJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJycgKyB0aGlzLmN1cnJlbnROdW1iZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgIGNjLndhcm4oJ3RoaXMubGFiZWwgaXMgbm90IHZhbGlkIG9yIG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICB9XG59XG4iXX0=