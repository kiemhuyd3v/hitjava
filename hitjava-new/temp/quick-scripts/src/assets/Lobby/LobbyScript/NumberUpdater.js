"use strict";
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