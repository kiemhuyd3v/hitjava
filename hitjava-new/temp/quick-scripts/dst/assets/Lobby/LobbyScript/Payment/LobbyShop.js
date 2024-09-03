
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Payment/LobbyShop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f078052/ltGi7kX7PieJrdH', 'LobbyShop');
// Lobby/LobbyScript/Payment/LobbyShop.ts

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
var Configs_1 = require("../../../Loading/src/Configs");
var Http_1 = require("../../../Loading/src/Http");
var App_1 = require("../Script/common/App");
var Dialog_1 = require("../Script/common/Dialog");
var BaseTabShop_1 = require("./BaseTabShop");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NAME_TABS = { "paywell": 0, "royalpay": 1, "princepay": 2, "bank": 8, "clickpay": 4, "payasec": 5, "chuyenkhoan": 6, "napthe": 7, "manualbank": 3, "gift": 9 };
var LobbyShop = /** @class */ (function (_super) {
    __extends(LobbyShop, _super);
    function LobbyShop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tabs = [];
        _this.btnTabs = [];
        _this.data = null;
        _this.indexTabCurrent = 0;
        return _this;
    }
    LobbyShop.prototype.show = function () {
        var _this = this;
        _super.prototype.show.call(this);
        App_1.default.instance.showLoading(true);
        if (Configs_1.default.Login.ListPayment == null) {
            Http_1.default.get(Configs_1.default.App.API, { "c": 2002, "nn": Configs_1.default.Login.Nickname, "at": Configs_1.default.Login.AccessToken, pt: 1 }, function (err, res) {
                App_1.default.instance.showLoading(false);
                if (err != null) {
                    return;
                }
                if (!res["success"]) {
                    App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_check_connect'));
                    _this.dismiss();
                    return;
                }
                App_1.default.instance.showLoading(false);
                Configs_1.default.Login.ListPayment = _this.data = res.data;
                //  cc.log("Paymen:",res.data);
                _this.node.active = true;
                _this.showTabsAlive();
            });
        }
        else {
            App_1.default.instance.showLoading(false);
            this.node.active = true;
            this.showTabsAlive();
        }
    };
    LobbyShop.prototype.showTabsAlive = function () {
        for (var i = 0; i < this.btnTabs.length; i++) {
            if (this.btnTabs[i] != null) {
                this.btnTabs[i].active = false;
                this.btnTabs[i].getComponent(cc.Toggle).isChecked = false;
            }
        }
        //  cc.log("showTabsAlive:" + JSON.stringify(Configs.Login.ListPayment));
        var isFind = false;
        for (var i = 0; i < Configs_1.default.Login.ListPayment.length; i++) {
            if (Configs_1.default.Login.ListPayment[i].providerConfig.status == 1) {
                if (NAME_TABS[Configs_1.default.Login.ListPayment[i].providerName] != null) {
                    if (this.btnTabs[NAME_TABS[Configs_1.default.Login.ListPayment[i].providerName]]) {
                        this.btnTabs[NAME_TABS[Configs_1.default.Login.ListPayment[i].providerName]].active = true;
                        if (isFind == false) {
                            this.onBtnChoseTab(null, Configs_1.default.Login.ListPayment[i].providerName);
                            isFind = true;
                        }
                        else if (Configs_1.default.Login.ListPayment[i].providerName == "princepay") {
                            this.onBtnChoseTab(null, Configs_1.default.Login.ListPayment[i].providerName);
                            isFind = true;
                        }
                    }
                }
            }
        }
    };
    LobbyShop.prototype.onBtnChoseTab = function (target, data) {
        this.tabs[this.indexTabCurrent].hide();
        var nameTab = data;
        var dataTab = null;
        this.indexTabCurrent = NAME_TABS[nameTab];
        for (var i = 0; i < Configs_1.default.Login.ListPayment.length; i++) {
            if (Configs_1.default.Login.ListPayment[i].providerName == nameTab) {
                dataTab = Configs_1.default.Login.ListPayment[i];
            }
        }
        this.tabs[this.indexTabCurrent].show(dataTab);
        this.btnTabs[this.indexTabCurrent].getComponent(cc.Toggle).isChecked = true;
    };
    __decorate([
        property([BaseTabShop_1.default])
    ], LobbyShop.prototype, "tabs", void 0);
    __decorate([
        property([cc.Node])
    ], LobbyShop.prototype, "btnTabs", void 0);
    LobbyShop = __decorate([
        ccclass
    ], LobbyShop);
    return LobbyShop;
}(Dialog_1.default));
exports.default = LobbyShop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxQYXltZW50XFxMb2JieVNob3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQW1EO0FBQ25ELGtEQUE2QztBQUM3Qyw0Q0FBdUM7QUFDdkMsa0RBQTZDO0FBRTdDLDZDQUF3QztBQUVsQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxJQUFNLFNBQVMsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLGFBQWEsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQztBQUlwSztJQUF1Qyw2QkFBTTtJQUE3QztRQUFBLHFFQXdGQztRQXBGRyxVQUFJLEdBQWtCLEVBQUUsQ0FBQztRQUV6QixhQUFPLEdBQWMsRUFBRSxDQUFDO1FBRWhCLFVBQUksR0FBRyxJQUFJLENBQUM7UUFDWixxQkFBZSxHQUFHLENBQUMsQ0FBQzs7SUErRWhDLENBQUM7SUE5RUcsd0JBQUksR0FBSjtRQUFBLGlCQTZCQztRQTVCRyxpQkFBTSxJQUFJLFdBQUUsQ0FBQztRQUNiLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksaUJBQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxJQUFJLElBQUksRUFBRTtZQUNuQyxjQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLGlCQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsaUJBQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO2dCQUNwSCxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO29CQUNiLE9BQU87aUJBQ1Y7Z0JBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRTtvQkFDakIsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztvQkFDaEYsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNmLE9BQU87aUJBQ1Y7Z0JBQ0QsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLGlCQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pELCtCQUErQjtnQkFFL0IsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUNJO1lBQ0QsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4QjtJQUdMLENBQUM7SUFFRCxpQ0FBYSxHQUFiO1FBRUksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDN0Q7U0FDSjtRQUNELHlFQUF5RTtRQUN6RSxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGlCQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkQsSUFBSSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQ3pELElBQUksU0FBUyxDQUFDLGlCQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLEVBQUU7b0JBQzlELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsaUJBQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUU7d0JBQ3BFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGlCQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7d0JBQ2pGLElBQUksTUFBTSxJQUFJLEtBQUssRUFBRTs0QkFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsaUJBQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDOzRCQUNwRSxNQUFNLEdBQUcsSUFBSSxDQUFDO3lCQUNqQjs2QkFDSSxJQUFJLGlCQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLElBQUksV0FBVyxFQUFFOzRCQUMvRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7NEJBQ3BFLE1BQU0sR0FBRyxJQUFJLENBQUM7eUJBQ2pCO3FCQUVKO2lCQUVKO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUFJRCxpQ0FBYSxHQUFiLFVBQWMsTUFBTSxFQUFFLElBQUk7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFdkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsaUJBQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN2RCxJQUFJLGlCQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLElBQUksT0FBTyxFQUFFO2dCQUN0RCxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFDO1NBQ0o7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ2hGLENBQUM7SUFuRkQ7UUFEQyxRQUFRLENBQUMsQ0FBQyxxQkFBVyxDQUFDLENBQUM7MkNBQ0M7SUFFekI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7OENBQ0k7SUFOUCxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBd0Y3QjtJQUFELGdCQUFDO0NBeEZELEFBd0ZDLENBeEZzQyxnQkFBTSxHQXdGNUM7a0JBeEZvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBIdHRwIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL3NyYy9IdHRwXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9EaWFsb2dcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuaW1wb3J0IEJhc2VUYWJTaG9wIGZyb20gXCIuL0Jhc2VUYWJTaG9wXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5jb25zdCBOQU1FX1RBQlMgPSB7IFwicGF5d2VsbFwiOiAwLCBcInJveWFscGF5XCI6IDEsIFwicHJpbmNlcGF5XCI6IDIsIFwiYmFua1wiOiA4LCBcImNsaWNrcGF5XCI6IDQsIFwicGF5YXNlY1wiOiA1LCBcImNodXllbmtob2FuXCI6IDYsIFwibmFwdGhlXCI6IDcsIFwibWFudWFsYmFua1wiOiAzLCBcImdpZnRcIjogOX07XG5cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYmJ5U2hvcCBleHRlbmRzIERpYWxvZyB7XG5cblxuICAgIEBwcm9wZXJ0eShbQmFzZVRhYlNob3BdKVxuICAgIHRhYnM6IEJhc2VUYWJTaG9wW10gPSBbXTtcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxuICAgIGJ0blRhYnM6IGNjLk5vZGVbXSA9IFtdO1xuXG4gICAgcHJpdmF0ZSBkYXRhID0gbnVsbDtcbiAgICBwcml2YXRlIGluZGV4VGFiQ3VycmVudCA9IDA7XG4gICAgc2hvdygpIHtcbiAgICAgICAgc3VwZXIuc2hvdygpO1xuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgIGlmIChDb25maWdzLkxvZ2luLkxpc3RQYXltZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgIEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSSwgeyBcImNcIjogMjAwMiwgXCJublwiOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBcImF0XCI6IENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4sIHB0OiAxIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWYgKGVyciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNbXCJzdWNjZXNzXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2NoZWNrX2Nvbm5lY3QnKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5MaXN0UGF5bWVudCA9IHRoaXMuZGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJQYXltZW46XCIscmVzLmRhdGEpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93VGFic0FsaXZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RhYnNBbGl2ZSgpO1xuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIHNob3dUYWJzQWxpdmUoKSB7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJ0blRhYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJ0blRhYnNbaV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuVGFic1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0blRhYnNbaV0uZ2V0Q29tcG9uZW50KGNjLlRvZ2dsZSkuaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gIGNjLmxvZyhcInNob3dUYWJzQWxpdmU6XCIgKyBKU09OLnN0cmluZ2lmeShDb25maWdzLkxvZ2luLkxpc3RQYXltZW50KSk7XG4gICAgICAgIHZhciBpc0ZpbmQgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBDb25maWdzLkxvZ2luLkxpc3RQYXltZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoQ29uZmlncy5Mb2dpbi5MaXN0UGF5bWVudFtpXS5wcm92aWRlckNvbmZpZy5zdGF0dXMgPT0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChOQU1FX1RBQlNbQ29uZmlncy5Mb2dpbi5MaXN0UGF5bWVudFtpXS5wcm92aWRlck5hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYnRuVGFic1tOQU1FX1RBQlNbQ29uZmlncy5Mb2dpbi5MaXN0UGF5bWVudFtpXS5wcm92aWRlck5hbWVdXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5UYWJzW05BTUVfVEFCU1tDb25maWdzLkxvZ2luLkxpc3RQYXltZW50W2ldLnByb3ZpZGVyTmFtZV1dLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNGaW5kID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkJ0bkNob3NlVGFiKG51bGwsIENvbmZpZ3MuTG9naW4uTGlzdFBheW1lbnRbaV0ucHJvdmlkZXJOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZpbmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoQ29uZmlncy5Mb2dpbi5MaXN0UGF5bWVudFtpXS5wcm92aWRlck5hbWUgPT0gXCJwcmluY2VwYXlcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25CdG5DaG9zZVRhYihudWxsLCBDb25maWdzLkxvZ2luLkxpc3RQYXltZW50W2ldLnByb3ZpZGVyTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGaW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgb25CdG5DaG9zZVRhYih0YXJnZXQsIGRhdGEpIHtcbiAgICAgICAgdGhpcy50YWJzW3RoaXMuaW5kZXhUYWJDdXJyZW50XS5oaWRlKCk7XG5cbiAgICAgICAgdmFyIG5hbWVUYWIgPSBkYXRhO1xuICAgICAgICB2YXIgZGF0YVRhYiA9IG51bGw7XG4gICAgICAgIHRoaXMuaW5kZXhUYWJDdXJyZW50ID0gTkFNRV9UQUJTW25hbWVUYWJdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IENvbmZpZ3MuTG9naW4uTGlzdFBheW1lbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChDb25maWdzLkxvZ2luLkxpc3RQYXltZW50W2ldLnByb3ZpZGVyTmFtZSA9PSBuYW1lVGFiKSB7XG4gICAgICAgICAgICAgICAgZGF0YVRhYiA9IENvbmZpZ3MuTG9naW4uTGlzdFBheW1lbnRbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50YWJzW3RoaXMuaW5kZXhUYWJDdXJyZW50XS5zaG93KGRhdGFUYWIpO1xuICAgICAgICB0aGlzLmJ0blRhYnNbdGhpcy5pbmRleFRhYkN1cnJlbnRdLmdldENvbXBvbmVudChjYy5Ub2dnbGUpLmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgfVxufVxuIl19