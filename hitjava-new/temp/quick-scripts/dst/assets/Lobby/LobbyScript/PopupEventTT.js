
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/PopupEventTT.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '88274qB3oZHSY+dnR3Z96A7', 'PopupEventTT');
// Lobby/LobbyScript/PopupEventTT.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupEventTT = /** @class */ (function (_super) {
    __extends(PopupEventTT, _super);
    function PopupEventTT() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // LIFE-CYCLE CALLBACKS:
        _this.listBtn = [];
        // onLoad () {}
        _this.dataEvent = null;
        _this.listPackage = [];
        return _this;
        // update (dt) {}
    }
    PopupEventTT.prototype.start = function () {
        this.node.zIndex = cc.macro.MAX_ZINDEX;
    };
    PopupEventTT.prototype.showpPopup = function (data) {
        _super.prototype.show.call(this);
        this.listPackage = [];
        this.dataEvent = data;
        for (var i = 0; i < this.dataEvent['lstMoonEvents'].length; i++) {
            this.listPackage.push(this.dataEvent['lstMoonEvents'][i]);
            if (this.listBtn[i]) {
                this.listBtn[i].clickEvents[0].customEventData = this.dataEvent['lstMoonEvents'][i]['idEvent'];
            }
        }
    };
    PopupEventTT.prototype.onClick = function (even, data) {
        var _this = this;
        data = JSON.parse(data);
        var nameCake = "";
        if (data == 11) {
            nameCake = "Bạch Kim";
        }
        else if (data == 12) {
            nameCake = "Hoàng Kim";
        }
        else if (data == 13) {
            nameCake = "Kim Cương";
        }
        this.node.zIndex = 0;
        App_1.default.instance.confirmDialog.show2("Bạn chắc chắn muốn mua\ngói quà " + nameCake + " chứ?", function (isConfirm) {
            if (isConfirm) {
                App_1.default.instance.showLoading(true);
                Http_1.default.get(Configs_1.default.App.API, { "c": 21, "nn": Configs_1.default.Login.Nickname, "at": Configs_1.default.Login.AccessToken, "id": data }, function (err, res) {
                    //  //Utils.Log("On Buy Moon:", res);
                    App_1.default.instance.showLoading(false);
                    if (err) {
                        App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_unknown_error1"));
                        return;
                    }
                    else {
                        // //Utils.Log("succes ko dkm:", res.success);
                        if (res.success) {
                            switch (res.errorCode) {
                                case "0":
                                    App_1.default.instance.ShowAlertDialog("Chúc mừng bạn đã mua thành công gói quà:" + nameCake);
                                    Configs_1.default.Login.Coin = res.money;
                                    BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                                    _this.dismiss();
                                    break;
                                case "1":
                                    App_1.default.instance.ShowAlertDialog("Bạn đã mua gói quà này,\nVui lòng chọn gói quà khác nhé!");
                                    break;
                                case "2":
                                    App_1.default.instance.ShowAlertDialog("Bạn không đủ tiền để mua gói quà này!\nVui lòng liên hệ CSKH để được hướng dẫn.");
                                    break;
                                default:
                                    App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_unknown_error1" + res.errorCode));
                                    break;
                            }
                        }
                        else {
                            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_unknown_error1"));
                        }
                    }
                });
            }
        });
    };
    __decorate([
        property([cc.Button])
    ], PopupEventTT.prototype, "listBtn", void 0);
    PopupEventTT = __decorate([
        ccclass
    ], PopupEventTT);
    return PopupEventTT;
}(Dialog_1.default));
exports.default = PopupEventTT;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxQb3B1cEV2ZW50VFQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQWdEO0FBRWhELCtDQUEwQztBQUMxQywyQ0FBc0M7QUFDdEMsdUVBQWtFO0FBQ2xFLGlEQUE0QztBQUl0QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBTTtJQUFoRDtRQUFBLHFFQTRFQztRQTFFRyx3QkFBd0I7UUFFeEIsYUFBTyxHQUFnQixFQUFFLENBQUM7UUFDMUIsZUFBZTtRQUNmLGVBQVMsR0FBUSxJQUFJLENBQUM7UUFDdEIsaUJBQVcsR0FBRyxFQUFFLENBQUM7O1FBb0VqQixpQkFBaUI7SUFDckIsQ0FBQztJQXBFRyw0QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7SUFDM0MsQ0FBQztJQUNELGlDQUFVLEdBQVYsVUFBVyxJQUFJO1FBQ1gsaUJBQU0sSUFBSSxXQUFFLENBQUM7UUFDYixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDakIsSUFBSSxD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QUNKO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2FBQ047UUFFTCxDQUFDLENBQUMsQ0FBQTtJQUVOLENBQUM7SUFyRUQ7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7aURBQ0k7SUFKVCxZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBNEVoQztJQUFELG1CQUFDO0NBNUVELEFBNEVDLENBNUV5QyxnQkFBTSxHQTRFL0M7a0JBNUVvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9HbG9iYWxcIjtcbmltcG9ydCBIdHRwIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9IdHRwXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgQnJvYWRjYXN0UmVjZWl2ZXIgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9Ccm9hZGNhc3RSZWNlaXZlclwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL0RpYWxvZ1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1NjcmlwdC9jb21tb24vVXRpbHNcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBFdmVudFRUIGV4dGVuZHMgRGlhbG9nIHtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIEBwcm9wZXJ0eShbY2MuQnV0dG9uXSlcbiAgICBsaXN0QnRuOiBjYy5CdXR0b25bXSA9IFtdO1xuICAgIC8vIG9uTG9hZCAoKSB7fVxuICAgIGRhdGFFdmVudDogYW55ID0gbnVsbDtcbiAgICBsaXN0UGFja2FnZSA9IFtdO1xuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gY2MubWFjcm8uTUFYX1pJTkRFWDtcbiAgICB9XG4gICAgc2hvd3BQb3B1cChkYXRhKSB7XG4gICAgICAgIHN1cGVyLnNob3coKTtcbiAgICAgICAgdGhpcy5saXN0UGFja2FnZSA9IFtdO1xuICAgICAgICB0aGlzLmRhdGFFdmVudCA9IGRhdGE7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhRXZlbnRbJ2xzdE1vb25FdmVudHMnXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5saXN0UGFja2FnZS5wdXNoKHRoaXMuZGF0YUV2ZW50Wydsc3RNb29uRXZlbnRzJ11baV0pO1xuICAgICAgICAgICAgaWYgKHRoaXMubGlzdEJ0bltpXSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdEJ0bltpXS5jbGlja0V2ZW50c1swXS5jdXN0b21FdmVudERhdGEgPSB0aGlzLmRhdGFFdmVudFsnbHN0TW9vbkV2ZW50cyddW2ldWydpZEV2ZW50J107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25DbGljayhldmVuLCBkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpXG4gICAgICAgIGxldCBuYW1lQ2FrZSA9IFwiXCI7XG4gICAgICAgIGlmIChkYXRhID09IDExKSB7XG4gICAgICAgICAgICBuYW1lQ2FrZSA9IFwiQuG6oWNoIEtpbVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEgPT0gMTIpIHtcbiAgICAgICAgICAgIG5hbWVDYWtlID0gXCJIb8OgbmcgS2ltXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGF0YSA9PSAxMykge1xuICAgICAgICAgICAgbmFtZUNha2UgPSBcIktpbSBDxrDGoW5nXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDA7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5jb25maXJtRGlhbG9nLnNob3cyKFwiQuG6oW4gY2jhuq9jIGNo4bqvbiBtdeG7kW4gbXVhXFxuZ8OzaSBxdcOgIFwiICsgbmFtZUNha2UgKyBcIiBjaOG7qT9cIiwgKGlzQ29uZmlybSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzQ29uZmlybSkge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHsgXCJjXCI6IDIxLCBcIm5uXCI6IENvbmZpZ3MuTG9naW4uTmlja25hbWUsIFwiYXRcIjogQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbiwgXCJpZFwiOiBkYXRhIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgIC8vICAvL1V0aWxzLkxvZyhcIk9uIEJ1eSBNb29uOlwiLCByZXMpO1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF91bmtub3duX2Vycm9yMVwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAvL1V0aWxzLkxvZyhcInN1Y2NlcyBrbyBka206XCIsIHJlcy5zdWNjZXNzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZXMuZXJyb3JDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIwXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKFwiQ2jDumMgbeG7q25nIGLhuqFuIMSRw6MgbXVhIHRow6BuaCBjw7RuZyBnw7NpIHF1w6A6XCIgKyBuYW1lQ2FrZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW4gPSByZXMubW9uZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIjFcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coXCJC4bqhbiDEkcOjIG11YSBnw7NpIHF1w6AgbsOgeSxcXG5WdWkgbMOybmcgY2jhu41uIGfDs2kgcXXDoCBraMOhYyBuaMOpIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiMlwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhcIkLhuqFuIGtow7RuZyDEkeG7pyB0aeG7gW4gxJHhu4MgbXVhIGfDs2kgcXXDoCBuw6B5IVxcblZ1aSBsw7JuZyBsacOqbiBo4buHIENTS0ggxJHhu4MgxJHGsOG7o2MgaMaw4bubbmcgZOG6q24uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF91bmtub3duX2Vycm9yMVwiICsgcmVzLmVycm9yQ29kZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF91bmtub3duX2Vycm9yMVwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==