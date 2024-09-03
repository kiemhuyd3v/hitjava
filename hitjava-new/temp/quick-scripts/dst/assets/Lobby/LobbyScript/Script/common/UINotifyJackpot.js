
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/common/UINotifyJackpot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3ed18QYxYBC/bof19cpXykT', 'UINotifyJackpot');
// Lobby/LobbyScript/Script/common/UINotifyJackpot.ts

"use strict";
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
var App_1 = require("./App");
var Utils_1 = require("./Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeBox = null;
        _this.labelUser = null;
        _this.labelGame = null;
        _this.labelGold = null;
        _this.labelTypeWin = null;
        _this.lbNotify = null;
        _this.nodeJackpot = null;
        _this.nodeNotify = null;
        _this.listContent = [];
        _this.index = 0;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
    };
    NewClass.prototype.ctor = function () {
        var self = this;
        self.listContent = [];
        this.index = 0;
    };
    NewClass.prototype.test = function () {
        var data = {};
        data["username"] = "user" + this.index;
        data["totalPrizes"] = 100000 + this.index;
        data["type"] = 0;
        data["gameName"] = "Chim Điên";
        //Utils.Log("data:" + JSON.stringify(data));
        this.addJackpot(data);
        this.index++;
    };
    NewClass.prototype.addJackpot = function (data) {
        if (this.listContent == null) {
            return;
        }
        //Utils.Log("addJackpot:" + JSON.stringify(data));
        this.listContent.push(data);
        if (this.listContent.length == 1) {
            //run now
            this.show(data);
        }
        else {
            // running, add list
            this.listContent.push(data);
        }
    };
    NewClass.prototype.addNotify = function (data) {
        if (this.listContent == null) {
            return;
        }
        //  cc.log("addNotify:" + JSON.stringify(data));
        this.listContent.push(data);
        if (this.listContent.length == 1) {
            //run now
            this.showNoti(data);
        }
        else {
            // running, add list
            this.listContent.push(data);
        }
    };
    NewClass.prototype.show = function (data) {
        var _this = this;
        this.nodeJackpot.active = true;
        this.nodeNotify.active = false;
        if (data == null || data.totalPrizes === undefined) {
            this.hide();
            return;
        }
        if (App_1.default.instance.isShowNotifyJackpot == false) {
            this.node.active = false;
            return;
        }
        this.labelUser.string = data.username;
        this.labelGold.string = Utils_1.default.formatNumber(data.totalPrizes);
        this.labelGame.string = data.gameName;
        this.labelTypeWin.string = data.type;
        cc.Tween.stopAllByTarget(this.node);
        this.node.active = true;
        cc.tween(this.node).delay(5.0).set({ x: cc.winSize.width / 2 + 500 }).to(0.6, { x: cc.winSize.width / 2 - 170 }, { easing: cc.easing.backOut }).delay(4.0)
            .call(function () {
            _this.hide();
        }).start();
    };
    NewClass.prototype.showNoti = function (data) {
        var _this = this;
        this.nodeJackpot.active = false;
        this.nodeNotify.active = true;
        this.lbNotify.string = data['message'];
        cc.Tween.stopAllByTarget(this.node);
        this.node.active = true;
        cc.tween(this.node).delay(5.0).set({ x: cc.winSize.width / 2 + 500 }).to(0.6, { x: cc.winSize.width / 2 - 170 }, { easing: cc.easing.backOut }).delay(4.0)
            .call(function () {
            _this.hide();
        }).start();
    };
    NewClass.prototype.hide = function () {
        var _this = this;
        cc.Tween.stopAllByTarget(this.node);
        cc.tween(this.node).to(0.3, { x: cc.winSize.width / 2 + 200 }, { easing: cc.easing.backIn }).call(function () {
            _this.node.active = false;
            _this.listContent.splice(0, 1);
            if (_this.listContent.length >= 1) {
                var data = _this.listContent[0];
                if (data.hasOwnProperty("message")) {
                    _this.showNoti(data);
                }
                else {
                    _this.show(data);
                }
            }
        }).start();
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "nodeBox", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "labelUser", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "labelGame", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "labelGold", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "labelTypeWin", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbNotify", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "nodeJackpot", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "nodeNotify", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXGNvbW1vblxcVUlOb3RpZnlKYWNrcG90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDZCQUF3QjtBQUN4QixpQ0FBNEI7QUFFdEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEwSEM7UUF4SEcsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5QixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQ25CLGlCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLFdBQUssR0FBRyxDQUFDLENBQUM7O0lBd0d0QixDQUFDO0lBdEdHLHlCQUFNLEdBQU47SUFDQSxDQUFDO0lBRUQsdUJBQUksR0FBSjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRUQsdUJBQUksR0FBSjtRQUVJLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0s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QUssQ0FBQztrREFDVztJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNPO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQWhCVixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMEg1QjtJQUFELGVBQUM7Q0ExSEQsQUEwSEMsQ0ExSHFDLEVBQUUsQ0FBQyxTQUFTLEdBMEhqRDtrQkExSG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlQm94OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxVc2VyOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsR2FtZTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbEdvbGQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxUeXBlV2luOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiTm90aWZ5OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZUphY2twb3Q6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vZGVOb3RpZnk6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgbGlzdENvbnRlbnQgPSBbXTtcbiAgICBwcml2YXRlIGluZGV4ID0gMDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG5cbiAgICBjdG9yKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYubGlzdENvbnRlbnQgPSBbXTtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgfVxuXG4gICAgdGVzdCgpIHtcblxuICAgICAgICB2YXIgZGF0YSA9IHt9O1xuICAgICAgICBkYXRhW1widXNlcm5hbWVcIl0gPSBcInVzZXJcIiArIHRoaXMuaW5kZXg7XG4gICAgICAgIGRhdGFbXCJ0b3RhbFByaXplc1wiXSA9IDEwMDAwMCArIHRoaXMuaW5kZXg7XG4gICAgICAgIGRhdGFbXCJ0eXBlXCJdID0gMDtcbiAgICAgICAgZGF0YVtcImdhbWVOYW1lXCJdID0gXCJDaGltIMSQacOqblwiXG4gICAgICAgIC8vVXRpbHMuTG9nKFwiZGF0YTpcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgdGhpcy5hZGRKYWNrcG90KGRhdGEpO1xuICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgfVxuXG4gICAgYWRkSmFja3BvdChkYXRhKSB7XG5cbiAgICAgICAgaWYgKHRoaXMubGlzdENvbnRlbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vVXRpbHMuTG9nKFwiYWRkSmFja3BvdDpcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgdGhpcy5saXN0Q29udGVudC5wdXNoKGRhdGEpO1xuICAgICAgICBpZiAodGhpcy5saXN0Q29udGVudC5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgLy9ydW4gbm93XG4gICAgICAgICAgICB0aGlzLnNob3coZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBydW5uaW5nLCBhZGQgbGlzdFxuICAgICAgICAgICAgdGhpcy5saXN0Q29udGVudC5wdXNoKGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFkZE5vdGlmeShkYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLmxpc3RDb250ZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyAgY2MubG9nKFwiYWRkTm90aWZ5OlwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICB0aGlzLmxpc3RDb250ZW50LnB1c2goZGF0YSk7XG4gICAgICAgIGlmICh0aGlzLmxpc3RDb250ZW50Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAvL3J1biBub3dcbiAgICAgICAgICAgIHRoaXMuc2hvd05vdGkoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBydW5uaW5nLCBhZGQgbGlzdFxuICAgICAgICAgICAgdGhpcy5saXN0Q29udGVudC5wdXNoKGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdyhkYXRhKSB7XG4gICAgICAgIHRoaXMubm9kZUphY2twb3QuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ub2RlTm90aWZ5LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoZGF0YSA9PSBudWxsIHx8IGRhdGEudG90YWxQcml6ZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFwcC5pbnN0YW5jZS5pc1Nob3dOb3RpZnlKYWNrcG90ID09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYWJlbFVzZXIuc3RyaW5nID0gZGF0YS51c2VybmFtZTtcbiAgICAgICAgdGhpcy5sYWJlbEdvbGQuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGRhdGEudG90YWxQcml6ZXMpO1xuICAgICAgICB0aGlzLmxhYmVsR2FtZS5zdHJpbmcgPSBkYXRhLmdhbWVOYW1lO1xuICAgICAgICB0aGlzLmxhYmVsVHlwZVdpbi5zdHJpbmcgPSBkYXRhLnR5cGU7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLm5vZGUpO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS5kZWxheSg1LjApLnNldCh7IHg6IGNjLndpblNpemUud2lkdGggLyAyICsgNTAwIH0pLnRvKDAuNiwgeyB4OiBjYy53aW5TaXplLndpZHRoIC8gMiAtIDE3MCB9LCB7IGVhc2luZzogY2MuZWFzaW5nLmJhY2tPdXQgfSkuZGVsYXkoNC4wKVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG4gICAgc2hvd05vdGkoZGF0YSkge1xuICAgICAgICB0aGlzLm5vZGVKYWNrcG90LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vZGVOb3RpZnkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sYk5vdGlmeS5zdHJpbmcgPSBkYXRhWydtZXNzYWdlJ107XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLm5vZGUpO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS5kZWxheSg1LjApLnNldCh7IHg6IGNjLndpblNpemUud2lkdGggLyAyICsgNTAwIH0pLnRvKDAuNiwgeyB4OiBjYy53aW5TaXplLndpZHRoIC8gMiAtIDE3MCB9LCB7IGVhc2luZzogY2MuZWFzaW5nLmJhY2tPdXQgfSkuZGVsYXkoNC4wKVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG4gICAgaGlkZSgpIHtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubm9kZSk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMC4zLCB7IHg6IGNjLndpblNpemUud2lkdGggLyAyICsgMjAwIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuYmFja0luIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5saXN0Q29udGVudC5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICBpZiAodGhpcy5saXN0Q29udGVudC5sZW5ndGggPj0gMSkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5saXN0Q29udGVudFswXTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcIm1lc3NhZ2VcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Tm90aShkYXRhKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvdyhkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnN0YXJ0KCk7XG5cbiAgICB9XG59XG4iXX0=