
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/PopupEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '33ad9X2X05EAZJgXDlysNWL', 'PopupEvent');
// Lobby/LobbyScript/PopupEvent.ts

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
var Configs_1 = require("../../Loading/src/Configs");
var Http_1 = require("../../Loading/src/Http");
var App_1 = require("./Script/common/App");
var BroadcastReceiver_1 = require("./Script/common/BroadcastReceiver");
var Dialog_1 = require("./Script/common/Dialog");
var Utils_1 = require("./Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupEvent = /** @class */ (function (_super) {
    __extends(PopupEvent, _super);
    function PopupEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // LIFE-CYCLE CALLBACKS:
        _this.animLixi = null;
        _this.dataEvent = null;
        _this.listItem = [];
        _this.nodeResult = null;
        _this.nodeRule = null;
        _this.nodeItemContainer = null;
        _this.lbMoney = null;
        _this.animResult = null;
        _this.type = 0;
        return _this;
        // update (dt) {}
    }
    PopupEvent.prototype.start = function () {
        var _this = this;
        this.node.zIndex = cc.macro.MAX_ZINDEX;
        this.bg.on(cc.Node.EventType.TOUCH_END, function () {
            _this.onClick();
        });
    };
    PopupEvent.prototype.showpPopup = function () {
        //  cc.log('type=' + this.type)
        _super.prototype.show.call(this);
        this.animLixi.node.active = false;
        this.animLixi.node.opacity = 255;
        this.nodeResult.active = false;
        this.container.active = false;
        this.nodeRule.active = false;
        if (this.type == 0) {
            this.container.active = true;
            this.nodeItemContainer.active = false;
            this.nodeRule.active = true;
        }
        else {
            this.container.active = false;
            this.animLixi.node.active = true;
        }
    };
    PopupEvent.prototype.onClick = function () {
        var _this = this;
        App_1.default.instance.showLoading(true);
        cc.tween(this.animLixi.node).to(2.0, { opacity: 0 }).call(function () {
            _this.animLixi.node.active = false;
        }).start();
        this.bg.off(cc.Node.EventType.TOUCH_END);
        //http://43.128.27.35:8081/api?c=2036&nn=BigBird&at=9350306a24c780af46509750ba4b50ab&ac=get
        Http_1.default.get(Configs_1.default.App.API, { "c": 2036, "nn": Configs_1.default.Login.Nickname, "at": Configs_1.default.Login.AccessToken, "ac": "receive" }, function (err, res) {
            App_1.default.instance.showLoading(false);
            if (err) {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_unknown_error1"));
                _this.dismiss();
                return;
            }
            else {
                if (res.success) {
                    _this.container.active = true;
                    _this.nodeItemContainer.active = true;
                    _this.nodeRule.active = false;
                    _this.setInfo(res);
                }
                else {
                    _this.animLixi.node.active = false;
                    App_1.default.instance.ShowAlertDialog(res['message']);
                    _this.dismiss();
                }
            }
        });
    };
    PopupEvent.prototype.setInfo = function (data) {
        var _this = this;
        var indexItem = Utils_1.default.randomRangeInt(0, 3);
        var itemReceive = this.listItem[indexItem];
        for (var i = 0; i < 3; i++) {
            var item = this.listItem[i];
            if (item != itemReceive) {
                item.getChildByName("bgTien").active = false;
                item.getChildByName("icon").color = cc.Color.GRAY;
                item.getChildByName("btn_received").active = false;
                item.color = cc.Color.GRAY;
            }
        }
        itemReceive.getChildByName("bgTien").getComponentInChildren(cc.Label).string = Utils_1.default.formatNumber(data['data']);
        itemReceive.getChildByName("bgTien").active = false;
        itemReceive.getChildByName("btn_received").on('click', function () {
            _this.lbMoney.string = Utils_1.default.formatNumber(data['data']);
            Configs_1.default.Login.Coin += data['data'];
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
            _this.nodeResult.active = true;
            _this.animResult.setAnimation(0, "start", false);
            _this.animResult.setCompleteListener(function () {
                _this.animResult.setAnimation(0, "idle", true);
            });
            _this.container.active = false;
            _this.scheduleOnce(function () {
                _this.dismiss();
            }, 3.0);
        });
    };
    __decorate([
        property(sp.Skeleton)
    ], PopupEvent.prototype, "animLixi", void 0);
    __decorate([
        property([cc.Node])
    ], PopupEvent.prototype, "listItem", void 0);
    __decorate([
        property(cc.Node)
    ], PopupEvent.prototype, "nodeResult", void 0);
    __decorate([
        property(cc.Node)
    ], PopupEvent.prototype, "nodeRule", void 0);
    __decorate([
        property(cc.Node)
    ], PopupEvent.prototype, "nodeItemContainer", void 0);
    __decorate([
        property(cc.Label)
    ], PopupEvent.prototype, "lbMoney", void 0);
    __decorate([
        property(sp.Skeleton)
    ], PopupEvent.prototype, "animResult", void 0);
    PopupEvent = __decorate([
        ccclass
    ], PopupEvent);
    return PopupEvent;
}(Dialog_1.default));
exports.default = PopupEvent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxQb3B1cEV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUVoRCwrQ0FBMEM7QUFDMUMsMkNBQXNDO0FBQ3RDLHVFQUFrRTtBQUNsRSxpREFBNEM7QUFDNUMsK0NBQTBDO0FBR3BDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFNO0lBQTlDO1FBQUEscUVBdUdDO1FBckdHLHdCQUF3QjtRQUV4QixjQUFRLEdBQWdCLElBQUksQ0FBQTtRQUM1QixlQUFTLEdBQVEsSUFBSSxDQUFDO1FBRXRCLGNBQVEsR0FBYyxFQUFFLENBQUM7UUFFekIsZ0JBQVUsR0FBWSxJQUFJLENBQUE7UUFFMUIsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUV4Qix1QkFBaUIsR0FBWSxJQUFJLENBQUE7UUFFakMsYUFBTyxHQUFhLElBQUksQ0FBQTtRQUV4QixnQkFBVSxHQUFnQixJQUFJLENBQUE7UUFFOUIsVUFBSSxHQUFXLENBQUMsQ0FBQzs7UUFtRmpCLGlCQUFpQjtJQUNyQixDQUFDO0lBbEZHLDBCQUFLLEdBQUw7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUNwQyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0QsK0JBQVUsR0FBVjtRQUNJLCtCQUErQjtRQUMvQixpQkFBTSxJQUFJLFdBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxRQUFRLENBQUMs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QUNhLFVBQVUsQ0F1RzlCO0lBQUQsaUJBQUM7Q0F2R0QsQUF1R0MsQ0F2R3VDLGdCQUFNLEdBdUc3QztrQkF2R29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0dsb2JhbFwiO1xuaW1wb3J0IEh0dHAgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0h0dHBcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBCcm9hZGNhc3RSZWNlaXZlciBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL0Jyb2FkY2FzdFJlY2VpdmVyXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCIuL1NjcmlwdC9jb21tb24vRGlhbG9nXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cEV2ZW50IGV4dGVuZHMgRGlhbG9nIHtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcbiAgICBhbmltTGl4aTogc3AuU2tlbGV0b24gPSBudWxsXG4gICAgZGF0YUV2ZW50OiBhbnkgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXG4gICAgbGlzdEl0ZW06IGNjLk5vZGVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vZGVSZXN1bHQ6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZVJ1bGU6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZUl0ZW1Db250YWluZXI6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiTW9uZXk6IGNjLkxhYmVsID0gbnVsbFxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcbiAgICBhbmltUmVzdWx0OiBzcC5Ta2VsZXRvbiA9IG51bGxcblxuICAgIHR5cGU6IG51bWJlciA9IDA7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVg7XG4gICAgICAgIHRoaXMuYmcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uQ2xpY2soKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgc2hvd3BQb3B1cCgpIHtcbiAgICAgICAgLy8gIGNjLmxvZygndHlwZT0nICsgdGhpcy50eXBlKVxuICAgICAgICBzdXBlci5zaG93KCk7XG4gICAgICAgIHRoaXMuYW5pbUxpeGkubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hbmltTGl4aS5ub2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgIHRoaXMubm9kZVJlc3VsdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm9kZVJ1bGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubm9kZUl0ZW1Db250YWluZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm5vZGVSdWxlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYW5pbUxpeGkubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5hbmltTGl4aS5ub2RlKS50bygyLjAsIHsgb3BhY2l0eTogMCB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYW5pbUxpeGkubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5iZy5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EKTtcbiAgICAgICAgLy9odHRwOi8vNDMuMTI4LjI3LjM1OjgwODEvYXBpP2M9MjAzNiZubj1CaWdCaXJkJmF0PTkzNTAzMDZhMjRjNzgwYWY0NjUwOTc1MGJhNGI1MGFiJmFjPWdldFxuICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHsgXCJjXCI6IDIwMzYsIFwibm5cIjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgXCJhdFwiOiBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuLCBcImFjXCI6IFwicmVjZWl2ZVwiIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF91bmtub3duX2Vycm9yMVwiKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlSXRlbUNvbnRhaW5lci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGVSdWxlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEluZm8ocmVzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1MaXhpLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2cocmVzWydtZXNzYWdlJ10pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc21pc3MoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzZXRJbmZvKGRhdGEpIHtcbiAgICAgICAgbGV0IGluZGV4SXRlbSA9IFV0aWxzLnJhbmRvbVJhbmdlSW50KDAsIDMpO1xuICAgICAgICBsZXQgaXRlbVJlY2VpdmUgPSB0aGlzLmxpc3RJdGVtW2luZGV4SXRlbV07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMubGlzdEl0ZW1baV07XG4gICAgICAgICAgICBpZiAoaXRlbSAhPSBpdGVtUmVjZWl2ZSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJiZ1RpZW5cIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuY29sb3IgPSBjYy5Db2xvci5HUkFZO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJidG5fcmVjZWl2ZWRcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaXRlbS5jb2xvciA9IGNjLkNvbG9yLkdSQVk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaXRlbVJlY2VpdmUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1RpZW5cIikuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGRhdGFbJ2RhdGEnXSk7XG4gICAgICAgIGl0ZW1SZWNlaXZlLmdldENoaWxkQnlOYW1lKFwiYmdUaWVuXCIpLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIGl0ZW1SZWNlaXZlLmdldENoaWxkQnlOYW1lKFwiYnRuX3JlY2VpdmVkXCIpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubGJNb25leS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoZGF0YVsnZGF0YSddKTtcbiAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQ29pbiArPSBkYXRhWydkYXRhJ107XG4gICAgICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuICAgICAgICAgICAgdGhpcy5ub2RlUmVzdWx0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmFuaW1SZXN1bHQuc2V0QW5pbWF0aW9uKDAsIFwic3RhcnRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5hbmltUmVzdWx0LnNldENvbXBsZXRlTGlzdGVuZXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbVJlc3VsdC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgICAgICAgICAgfSwgMy4wKTtcbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=