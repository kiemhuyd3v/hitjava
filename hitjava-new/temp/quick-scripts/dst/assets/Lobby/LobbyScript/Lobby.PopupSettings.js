
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.PopupSettings.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '95d62Y8ZFJHj74CchyA0Zq7', 'Lobby.PopupSettings');
// Lobby/LobbyScript/Lobby.PopupSettings.ts

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
var App_1 = require("./Script/common/App");
var Dialog_1 = require("./Script/common/Dialog");
var Language_LanguageManager_1 = require("./Script/common/Language.LanguageManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dropDownBox = null;
        _this.lbCurrentLang = null;
        _this.languageCode = "";
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        if (Language_LanguageManager_1.default.instance.languageCode == "vn") {
            this.lbCurrentLang.string = "Tiếng Việt";
        }
        else if (Language_LanguageManager_1.default.instance.languageCode == "en") {
            this.lbCurrentLang.string = "English";
        }
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.showDropDown = function (status) {
        var _this = this;
        if (status) {
            this.dropDownBox.scaleY = 0;
            this.dropDownBox.active = true;
            cc.Tween.stopAllByTarget(this.dropDownBox);
            cc.tween(this.dropDownBox).to(0.1, { scaleY: 1 }).start();
        }
        else {
            cc.tween(this.dropDownBox).to(0.1, { scaleY: 0 }).call(function () {
                _this.dropDownBox.active = false;
            }).start();
        }
    };
    NewClass.prototype.onClickChangeLanguage = function (even, data) {
        this.languageCode = Language_LanguageManager_1.default.instance.languageCode;
        switch (data) {
            case "1":
                this.showDropDown(!this.dropDownBox.active);
                break;
            case "2": //vn
                this.lbCurrentLang.string = "Tiếng Việt";
                if (this.languageCode != "vi") {
                    Language_LanguageManager_1.default.instance.setLanguage("vi");
                    var msg = Language_LanguageManager_1.default.instance.getString("txt_notify_change_language");
                    App_1.default.instance.ShowAlertDialog(msg);
                }
                this.showDropDown(false);
                break;
            case "3": //en
                this.lbCurrentLang.string = "English";
                if (this.languageCode != "en") {
                    Language_LanguageManager_1.default.instance.setLanguage("en");
                    var msg = Language_LanguageManager_1.default.instance.getString("txt_notify_change_language");
                    App_1.default.instance.ShowAlertDialog(msg);
                }
                this.showDropDown(false);
                break;
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "dropDownBox", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbCurrentLang", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(Dialog_1.default));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5Qb3B1cFNldHRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFzQztBQUN0QyxpREFBNEM7QUFDNUMscUZBQStFO0FBR3pFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFNO0lBQTVDO1FBQUEscUVBNkRDO1FBMURHLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLG1CQUFhLEdBQWEsSUFBSSxDQUFDO1FBQy9CLGtCQUFZLEdBQUcsRUFBRSxDQUFBOztRQXFEakIsaUJBQWlCO0lBQ3JCLENBQUM7SUFyREcsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDSSxJQUFJLGtDQUF1QixDQUFDLFFBQVEsQ0FBQyxZQUFZLElBQUksSUFBSSxFQUFFO1lBQ3ZELElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztTQUM1QzthQUFNLElBQUksa0NBQXVCLENBQUMsUUFBUSxDQUFDLFlBQVksSUFBSSxJQUFJLEVBQUU7WUFDOUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1NBQ3pDO0lBQ0wsQ0FBQztJQUVELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0QsK0JBQVksR0FBWixVQUFhLE1BQU07UUFBbkIsaUJBV0M7UUFWRyxJQUFJLE1BQU0sRUFBRTtZQUNSLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDL0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzNDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM3RDthQUFNO1lBQ0gsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDbkQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7SUFDTCxDQUFDO0lBQ0Qsd0NBQXFCLEdBQXJCLFVBQXNCLElBQUksRUFBRSxJQUFJO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsa0NBQXVCLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUNsRSxRQUFRLElBQUksRUFBRTtZQUNWLEtBQUssR0FBRztnQkFDSixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDNUMsTUFBTTtZQUNWLEtBQUssR0FBRyxFQUFDLElBQUk7Z0JBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO2dCQUN6QyxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxFQUFFO29CQUMzQixrQ0FBdUIsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNuRCxJQUFJLEdBQUcsR0FBRyxrQ0FBdUIsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLDRCQUE0QixDQUFDLENBQUM7b0JBQ25GLGFBQUcsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNyQztnQkFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN6QixNQUFNO1lBQ1YsS0FBSyxHQUFHLEVBQUMsSUFBSTtnQkFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7Z0JBQ3RDLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLEVBQUU7b0JBQzNCLGtDQUF1QixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ25ELElBQUksR0FBRyxHQUFHLGtDQUF1QixDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsNEJBQTRCLENBQUMsQ0FBQztvQkFDbkYsYUFBRyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3JDO2dCQUNELElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3pCLE1BQU07U0FDYjtJQUNMLENBQUM7SUF2REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDVTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNZO0lBTmQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTZENUI7SUFBRCxlQUFDO0NBN0RELEFBNkRDLENBN0RxQyxnQkFBTSxHQTZEM0M7a0JBN0RvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL0RpYWxvZ1wiO1xuaW1wb3J0IExhbmd1YWdlTGFuZ3VhZ2VNYW5hZ2VyIGZyb20gXCIuL1NjcmlwdC9jb21tb24vTGFuZ3VhZ2UuTGFuZ3VhZ2VNYW5hZ2VyXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgRGlhbG9nIHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGRyb3BEb3duQm94OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkN1cnJlbnRMYW5nOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgbGFuZ3VhZ2VDb2RlID0gXCJcIlxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBpZiAoTGFuZ3VhZ2VMYW5ndWFnZU1hbmFnZXIuaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID09IFwidm5cIikge1xuICAgICAgICAgICAgdGhpcy5sYkN1cnJlbnRMYW5nLnN0cmluZyA9IFwiVGnhur9uZyBWaeG7h3RcIjtcbiAgICAgICAgfSBlbHNlIGlmIChMYW5ndWFnZUxhbmd1YWdlTWFuYWdlci5pbnN0YW5jZS5sYW5ndWFnZUNvZGUgPT0gXCJlblwiKSB7XG4gICAgICAgICAgICB0aGlzLmxiQ3VycmVudExhbmcuc3RyaW5nID0gXCJFbmdsaXNoXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cbiAgICBzaG93RHJvcERvd24oc3RhdHVzKSB7XG4gICAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgICAgIHRoaXMuZHJvcERvd25Cb3guc2NhbGVZID0gMDtcbiAgICAgICAgICAgIHRoaXMuZHJvcERvd25Cb3guYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLmRyb3BEb3duQm94KTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZHJvcERvd25Cb3gpLnRvKDAuMSwgeyBzY2FsZVk6IDEgfSkuc3RhcnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZHJvcERvd25Cb3gpLnRvKDAuMSwgeyBzY2FsZVk6IDAgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wRG93bkJveC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25DbGlja0NoYW5nZUxhbmd1YWdlKGV2ZW4sIGRhdGEpIHtcbiAgICAgICAgdGhpcy5sYW5ndWFnZUNvZGUgPSBMYW5ndWFnZUxhbmd1YWdlTWFuYWdlci5pbnN0YW5jZS5sYW5ndWFnZUNvZGU7XG4gICAgICAgIHN3aXRjaCAoZGF0YSkge1xuICAgICAgICAgICAgY2FzZSBcIjFcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dEcm9wRG93bighdGhpcy5kcm9wRG93bkJveC5hY3RpdmUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjJcIjovL3ZuXG4gICAgICAgICAgICAgICAgdGhpcy5sYkN1cnJlbnRMYW5nLnN0cmluZyA9IFwiVGnhur9uZyBWaeG7h3RcIjtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sYW5ndWFnZUNvZGUgIT0gXCJ2aVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIExhbmd1YWdlTGFuZ3VhZ2VNYW5hZ2VyLmluc3RhbmNlLnNldExhbmd1YWdlKFwidmlcIik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtc2cgPSBMYW5ndWFnZUxhbmd1YWdlTWFuYWdlci5pbnN0YW5jZS5nZXRTdHJpbmcoXCJ0eHRfbm90aWZ5X2NoYW5nZV9sYW5ndWFnZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhtc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dEcm9wRG93bihmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiM1wiOi8vZW5cbiAgICAgICAgICAgICAgICB0aGlzLmxiQ3VycmVudExhbmcuc3RyaW5nID0gXCJFbmdsaXNoXCI7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGFuZ3VhZ2VDb2RlICE9IFwiZW5cIikge1xuICAgICAgICAgICAgICAgICAgICBMYW5ndWFnZUxhbmd1YWdlTWFuYWdlci5pbnN0YW5jZS5zZXRMYW5ndWFnZShcImVuXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbXNnID0gTGFuZ3VhZ2VMYW5ndWFnZU1hbmFnZXIuaW5zdGFuY2UuZ2V0U3RyaW5nKFwidHh0X25vdGlmeV9jaGFuZ2VfbGFuZ3VhZ2VcIik7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2cobXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RHJvcERvd24oZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==