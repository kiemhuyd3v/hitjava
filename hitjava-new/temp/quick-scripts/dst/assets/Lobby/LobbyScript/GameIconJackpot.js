
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/GameIconJackpot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxHYW1lSWNvbkphY2twb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYscURBQWdEO0FBQ2hELGlEQUE0QztBQUV0QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQTREQztRQXpERyxnQkFBVSxHQUFlLEVBQUUsQ0FBQztRQUd4QixrQkFBWSxHQUFhO1lBQ3pCLE1BQU07WUFDTixRQUFRO1lBQ1IsUUFBUTtTQUNYLENBQUM7UUFFSyxrQkFBWSxHQUFvQixFQUFFLENBQUM7O0lBZ0Q5QyxDQUFDO0lBN0NHLGdDQUFNLEdBQU47UUFBQSxpQkFRQztRQVBHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBZSxFQUFFLENBQUM7Z0JBQ3ZDLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHVCQUFhLENBQUMsQ0FBQztnQkFDckQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwQyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVELHVDQUFhLEdBQWIsVUFBYyxDQUFDO1FBQ1gsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLGtDQUFrQztRQUNqRSxpQ0FBaUM7UUFDakMsSUFBSSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ3BDLElBQUcsQ0FBQyxPQUFPLEVBQUM7WUFDUixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUssRUFBRSxDQUFDO2dCQUMvQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ2QsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLEdBQUcsRUFBRTtvQkFDNUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztpQkFDeEI7Z0JBQ0QsSUFBSSxLQUFLLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFFRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUNuQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxHQUFHLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsQ0FBQztnQkFDakMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNkLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDbEIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ3RDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksd0JBQXdCO1FBQ3hCLDhCQUE4QjtRQUM5QixxQ0FBcUM7SUFDekMsQ0FBQztJQUVELG1DQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBeEREO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO3VEQUNPO0lBR3hCO1FBREgsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3lEQUtyQjtJQVZlLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0E0RG5DO0lBQUQsc0JBQUM7Q0E1REQsQUE0REMsQ0E1RDRDLEVBQUUsQ0FBQyxTQUFTLEdBNER4RDtrQkE1RG9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBOdW1iZXJVcGRhdGVyIGZyb20gXCIuL051bWJlclVwZGF0ZXJcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lSWNvbkphY2twb3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KFtjYy5MYWJlbF0pXG4gICAgYXJyYXlMYWJlbDogY2MuTGFiZWxbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KFtjYy5JbnRlZ2VyXSlcbiAgICAgICAgaW5pdEphY2twb3RzOiBudW1iZXJbXSA9IFtcbiAgICAgICAgNTAwMDAwLFxuICAgICAgICAxMDAwMDAwMCxcbiAgICAgICAgNTAwMDAwMDBcbiAgICBdO1xuXG4gICAgcHVibGljIGFycmF5VXBkYXRlcjogTnVtYmVyVXBkYXRlcltdID0gW107XG5cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXJyYXlMYWJlbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmFycmF5TGFiZWwuZm9yRWFjaCgobGFiZWw6IGNjLkxhYmVsLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHVwZGF0ZXIgPSBsYWJlbC5ub2RlLmFkZENvbXBvbmVudChOdW1iZXJVcGRhdGVyKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVyLnNldE51bWJlcih0aGlzLmluaXRKYWNrcG90c1tpXSwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcnJheVVwZGF0ZXIucHVzaCh1cGRhdGVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlSmFja3BvdCh0KSB7XG4gICAgICAgIGxldCBhcnJheSA9IHRoaXMuaW5pdEphY2twb3RzOyAvL3RvZG8gZ2FuIGxhaSBnaWEgdHJpIGphY2twb3QgdmFvXG4gICAgICAgIC8vIGxldCBhcnJheSA9IGphY2twb3RTbG90QmVubGV5O1xuICAgICAgICBsZXQgaXNMb2dpbiA9IENvbmZpZ3MuTG9naW4uSXNMb2dpbjtcbiAgICAgICAgaWYoIWlzTG9naW4pe1xuICAgICAgICAgICAgdGhpcy5pbml0SmFja3BvdHMuZm9yRWFjaCgodmFsdWUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIGlmIChhcnJheVtpbmRleF0gPiB2YWx1ZSAqIDEuNSkge1xuICAgICAgICAgICAgICAgICAgICBhcnJheVtpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGRlbHRhID0gdmFsdWUgLyAyNTAgKiAoTWF0aC5yYW5kb20oKSAqIDIgKyAxKTtcbiAgICAgICAgICAgICAgICBhcnJheVtpbmRleF0gKz0gTWF0aC5mbG9vcihkZWx0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsZW4gPSB0aGlzLmFycmF5VXBkYXRlci5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4gPiAwICYmIGFycmF5Lmxlbmd0aCA+PSBsZW4pIHtcbiAgICAgICAgICAgIHRoaXMuYXJyYXlVcGRhdGVyLmZvckVhY2goKHVwZGF0ZXIsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIGlmIChhcnJheVtpbmRleF0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZXIuc2V0TnVtYmVyKGFycmF5W2luZGV4XSwgdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLnVwZGF0ZUphY2twb3QoMS41KVxuICAgICAgICAvLyB9LCAzLCBjYy5tYWNyby5SRVBFQVRfRk9SRVZFUiwgMCk7XG4gICAgfVxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICB9XG59XG4iXX0=