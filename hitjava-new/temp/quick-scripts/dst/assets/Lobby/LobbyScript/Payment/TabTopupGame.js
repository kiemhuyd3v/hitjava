
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Payment/TabTopupGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7eeafyxdrBDqZSR2Dj7H+cU', 'TabTopupGame');
// Lobby/LobbyScript/Payment/TabTopupGame.ts

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
var BaseTabShop_1 = require("./BaseTabShop");
var TabTopupManualBank_1 = require("./TabTopupManualBank");
var TabTopupManualMomo_1 = require("./TabTopupManualMomo");
var TabTopupManualZalo_1 = require("./TabTopupManualZalo");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TabTopupGame = /** @class */ (function (_super) {
    __extends(TabTopupGame, _super);
    function TabTopupGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toggleChuyenKhoan = null;
        _this.toggleZalo = null;
        _this.toggleMomo = null;
        _this.lbContentBanking = null;
        _this.tabChuyenKhoan = null;
        _this.tabManualMomo = null;
        _this.tabManualZalo = null;
        _this.dataProvider = null;
        _this.data = null;
        _this.payTypesAlive = null;
        return _this;
    }
    TabTopupGame.prototype.show = function (data) {
        _super.prototype.show.call(this, data);
        this.dataProvider = data;
        this.data = data.providerConfig;
        this.showPayTypes();
    };
    TabTopupGame.prototype.hide = function () {
        _super.prototype.hide.call(this);
        this.tabChuyenKhoan.editName.tabIndex = -1;
        this.tabChuyenKhoan.editMoney.tabIndex = -1;
        this.tabChuyenKhoan.editBankNumber.tabIndex = -1;
    };
    TabTopupGame.prototype.showPayTypes = function () {
        this.toggleChuyenKhoan.node.active = false;
        this.toggleZalo.node.active = false;
        this.toggleMomo.node.active = false;
        var isFind = false;
        for (var i = 0; i < this.data.payType.length; i++) {
            if (this.data.payType[i].status == 1) {
                switch (this.data.payType[i].name) {
                    case "momo_recharge":
                        this.toggleMomo.node.active = true;
                        if (!isFind) {
                            this.onBtnChoseTab(null, this.data.payType[i].name);
                            this.toggleMomo.isChecked = true;
                            isFind = true;
                        }
                        break;
                }
            }
        }
    };
    TabTopupGame.prototype.showTab = function (payTypeKey) {
        if (payTypeKey == "momo_recharge") {
            this.tabChuyenKhoan.hide();
            this.tabManualZalo.hide();
            this.tabManualMomo.show(this.data, this.dataProvider.providerName);
            this.tabManualMomo.editMoney.tabIndex = 0;
            this.tabManualMomo.editBankNumber.tabIndex = 0;
            this.tabManualMomo.editName.tabIndex = 0;
        }
    };
    TabTopupGame.prototype.onBtnChoseTab = function (target, data) {
        var payTypeKey = data;
        this.showTab(payTypeKey);
    };
    TabTopupGame.prototype.onClickNap = function (even, data) {
    };
    __decorate([
        property(cc.Toggle)
    ], TabTopupGame.prototype, "toggleChuyenKhoan", void 0);
    __decorate([
        property(cc.Toggle)
    ], TabTopupGame.prototype, "toggleZalo", void 0);
    __decorate([
        property(cc.Toggle)
    ], TabTopupGame.prototype, "toggleMomo", void 0);
    __decorate([
        property(cc.Label)
    ], TabTopupGame.prototype, "lbContentBanking", void 0);
    __decorate([
        property(TabTopupManualBank_1.default)
    ], TabTopupGame.prototype, "tabChuyenKhoan", void 0);
    __decorate([
        property(TabTopupManualMomo_1.default)
    ], TabTopupGame.prototype, "tabManualMomo", void 0);
    __decorate([
        property(TabTopupManualZalo_1.default)
    ], TabTopupGame.prototype, "tabManualZalo", void 0);
    TabTopupGame = __decorate([
        ccclass
    ], TabTopupGame);
    return TabTopupGame;
}(BaseTabShop_1.default));
exports.default = TabTopupGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxQYXltZW50XFxUYWJUb3B1cEdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEYsNkNBQXdDO0FBRXhDLDJEQUFzRDtBQUN0RCwyREFBc0Q7QUFDdEQsMkRBQXNEO0FBSWhELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFXO0lBQXJEO1FBQUEscUVBK0VDO1FBNUVHLHVCQUFpQixHQUFjLElBQUksQ0FBQztRQUdwQyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixzQkFBZ0IsR0FBYSxJQUFJLENBQUM7UUFHbEMsb0JBQWMsR0FBdUIsSUFBSSxDQUFDO1FBRTFDLG1CQUFhLEdBQXVCLElBQUksQ0FBQztRQUV6QyxtQkFBYSxHQUF1QixJQUFJLENBQUM7UUFJakMsa0JBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsVUFBSSxHQUFHLElBQUksQ0FBQztRQUNaLG1CQUFhLEdBQUcsSUFBSSxDQUFDOztJQXNEakMsQ0FBQztJQXJERywyQkFBSSxHQUFKLFVBQUssSUFBSTtRQUNMLGlCQUFNLElBQUksWUFBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDaEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCwyQkFBSSxHQUFKO1FBQ0ksaUJBQU0sSUFBSSxXQUFFLENBQUM7UUFDYixJQUFJLENB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WTtJQUV6QztRQURDLFFBQVEsQ0FBQyw0QkFBa0IsQ0FBQzt1REFDWTtJQW5CeEIsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQStFaEM7SUFBRCxtQkFBQztDQS9FRCxBQStFQyxDQS9FeUMscUJBQVcsR0ErRXBEO2tCQS9Fb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IEh0dHAgZnJvbSBcIi4uLy4uLy4uL0xvYWRpbmcvc3JjL0h0dHBcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uL1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgQmFzZVRhYlNob3AgZnJvbSBcIi4vQmFzZVRhYlNob3BcIjtcbmltcG9ydCBUYWJUb3B1cENodXllbktob2FuIGZyb20gXCIuL1RhYlRvcHVwQ2h1eWVuS2hvYW5cIjtcbmltcG9ydCBUYWJUb3B1cE1hbnVhbEJhbmsgZnJvbSBcIi4vVGFiVG9wdXBNYW51YWxCYW5rXCI7XG5pbXBvcnQgVGFwVG9wdXBNYW51YWxNb21vIGZyb20gXCIuL1RhYlRvcHVwTWFudWFsTW9tb1wiO1xuaW1wb3J0IFRhcFRvcHVwTWFudWFsWmFsbyBmcm9tIFwiLi9UYWJUb3B1cE1hbnVhbFphbG9cIjtcbmltcG9ydCBUYWJUb3B1cE1vbW8gZnJvbSBcIi4vVGFiVG9wdXBNb21vXCI7XG5pbXBvcnQgVGFiVG9wdXBTaWV1VG9jIGZyb20gXCIuL1RhYlRvcHVwU2lldVRvY1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFiVG9wdXBHYW1lIGV4dGVuZHMgQmFzZVRhYlNob3Age1xuXG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZSlcbiAgICB0b2dnbGVDaHV5ZW5LaG9hbjogY2MuVG9nZ2xlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXG4gICAgdG9nZ2xlWmFsbzogY2MuVG9nZ2xlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXG4gICAgdG9nZ2xlTW9tbzogY2MuVG9nZ2xlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkNvbnRlbnRCYW5raW5nOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoVGFiVG9wdXBNYW51YWxCYW5rKVxuICAgIHRhYkNodXllbktob2FuOiBUYWJUb3B1cE1hbnVhbEJhbmsgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShUYXBUb3B1cE1hbnVhbE1vbW8pXG4gICAgdGFiTWFudWFsTW9tbzogVGFwVG9wdXBNYW51YWxNb21vID0gbnVsbDtcbiAgICBAcHJvcGVydHkoVGFwVG9wdXBNYW51YWxaYWxvKVxuICAgIHRhYk1hbnVhbFphbG86IFRhcFRvcHVwTWFudWFsWmFsbyA9IG51bGw7XG5cblxuXG4gICAgcHJpdmF0ZSBkYXRhUHJvdmlkZXIgPSBudWxsO1xuICAgIHByaXZhdGUgZGF0YSA9IG51bGw7XG4gICAgcHJpdmF0ZSBwYXlUeXBlc0FsaXZlID0gbnVsbDtcbiAgICBzaG93KGRhdGEpIHtcbiAgICAgICAgc3VwZXIuc2hvdyhkYXRhKTtcbiAgICAgICAgdGhpcy5kYXRhUHJvdmlkZXIgPSBkYXRhO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhLnByb3ZpZGVyQ29uZmlnO1xuICAgICAgICB0aGlzLnNob3dQYXlUeXBlcygpO1xuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHN1cGVyLmhpZGUoKTtcbiAgICAgICAgdGhpcy50YWJDaHV5ZW5LaG9hbi5lZGl0TmFtZS50YWJJbmRleCA9IC0xO1xuICAgICAgICB0aGlzLnRhYkNodXllbktob2FuLmVkaXRNb25leS50YWJJbmRleCA9IC0xO1xuICAgICAgICB0aGlzLnRhYkNodXllbktob2FuLmVkaXRCYW5rTnVtYmVyLnRhYkluZGV4ID0gLTE7XG4gICAgfVxuICAgIHNob3dQYXlUeXBlcygpIHtcbiAgICAgICAgdGhpcy50b2dnbGVDaHV5ZW5LaG9hbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRvZ2dsZVphbG8ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50b2dnbGVNb21vLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHZhciBpc0ZpbmQgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRhdGEucGF5VHlwZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5wYXlUeXBlW2ldLnN0YXR1cyA9PSAxKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmRhdGEucGF5VHlwZVtpXS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtb21vX3JlY2hhcmdlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU1vbW8ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0ZpbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQnRuQ2hvc2VUYWIobnVsbCx0aGlzLmRhdGEucGF5VHlwZVtpXS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU1vbW8uaXNDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZpbmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd1RhYihwYXlUeXBlS2V5KSB7XG4gICAgICAgIGVsc2UgaWYgKHBheVR5cGVLZXkgPT0gXCJtb21vX3JlY2hhcmdlXCIpIHtcbiAgICAgICAgICAgIHRoaXMudGFiQ2h1eWVuS2hvYW4uaGlkZSgpO1xuICAgICAgICAgICAgdGhpcy50YWJNYW51YWxaYWxvLmhpZGUoKTtcbiAgICAgICAgICAgIHRoaXMudGFiTWFudWFsTW9tby5zaG93KHRoaXMuZGF0YSwgdGhpcy5kYXRhUHJvdmlkZXIucHJvdmlkZXJOYW1lKTtcbiAgICAgICAgICAgIHRoaXMudGFiTWFudWFsTW9tby5lZGl0TW9uZXkudGFiSW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy50YWJNYW51YWxNb21vLmVkaXRCYW5rTnVtYmVyLnRhYkluZGV4PTA7XG4gICAgICAgICAgICB0aGlzLnRhYk1hbnVhbE1vbW8uZWRpdE5hbWUudGFiSW5kZXggPSAwO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgb25CdG5DaG9zZVRhYih0YXJnZXQsIGRhdGEpIHtcbiAgICAgICAgdmFyIHBheVR5cGVLZXkgPSBkYXRhO1xuICAgICAgICB0aGlzLnNob3dUYWIocGF5VHlwZUtleSk7XG4gICAgfVxuICAgIG9uQ2xpY2tOYXAoZXZlbiwgZGF0YSkge1xuXG4gICAgfVxuXG59XG4iXX0=