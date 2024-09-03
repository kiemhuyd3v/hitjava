"use strict";
cc._RF.push(module, 'bf733DVwApAyKM9Ve18u8Kz', 'GameIconJackpot');
// Lobby/LobbyScript/GameIconJackpot.ts

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
var Configs_1 = require("../../Loading/src/Configs");
var NumberUpdater_1 = require("./NumberUpdater");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameIconJackpot = /** @class */ (function (_super) {
    __extends(GameIconJackpot, _super);
    function GameIconJackpot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.arrayLabel = [];
        _this.initJackpots = [
            500000,
            10000000,
            50000000
        ];
        _this.arrayUpdater = [];
        return _this;
    }
    GameIconJackpot.prototype.onLoad = function () {
        var _this = this;
        if (this.arrayLabel.length > 0) {
            this.arrayLabel.forEach(function (label, i) {
                var updater = label.node.addComponent(NumberUpdater_1.default);
                updater.setNumber(_this.initJackpots[i], 1);
                _this.arrayUpdater.push(updater);
            });
        }
    };
    GameIconJackpot.prototype.updateJackpot = function (t) {
        var array = this.initJackpots; //todo gan lai gia tri jackpot vao
        // let array = jackpotSlotBenley;
        var isLogin = Configs_1.default.Login.IsLogin;
        if (!isLogin) {
            this.initJackpots.forEach(function (value, i) {
                var index = i;
                if (array[index] > value * 1.5) {
                    array[index] = value;
                }
                var delta = value / 250 * (Math.random() * 2 + 1);
                array[index] += Math.floor(delta);
            });
        }
        var len = this.arrayUpdater.length;
        if (len > 0 && array.length >= len) {
            this.arrayUpdater.forEach(function (updater, i) {
                var index = i;
                if (array[index] > 0) {
                    updater.setNumber(array[index], t);
                }
            });
        }
    };
    GameIconJackpot.prototype.onEnable = function () {
        // this.schedule(() => {
        //     this.updateJackpot(1.5)
        // }, 3, cc.macro.REPEAT_FOREVER, 0);
    };
    GameIconJackpot.prototype.onDisable = function () {
        this.unscheduleAllCallbacks();
    };
    __decorate([
        property([cc.Label])
    ], GameIconJackpot.prototype, "arrayLabel", void 0);
    __decorate([
        property([cc.Integer])
    ], GameIconJackpot.prototype, "initJackpots", void 0);
    GameIconJackpot = __decorate([
        ccclass
    ], GameIconJackpot);
    return GameIconJackpot;
}(cc.Component));
exports.default = GameIconJackpot;

cc._RF.pop();