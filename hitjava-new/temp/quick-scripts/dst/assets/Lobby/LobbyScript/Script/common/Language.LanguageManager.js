
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/common/Language.LanguageManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ddbe6RIye1Hj7hO/+3ryW0/', 'Language.LanguageManager');
// Lobby/LobbyScript/Script/common/Language.LanguageManager.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Language;
(function (Language) {
    var LanguageMananger = /** @class */ (function (_super) {
        __extends(LanguageMananger, _super);
        function LanguageMananger() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.json = null;
            _this.languageCode = "vi";
            _this.texts = {};
            _this.listeners = [];
            return _this;
        }
        LanguageMananger_1 = LanguageMananger;
        LanguageMananger.prototype.onLoad = function () {
            LanguageMananger_1.instance = this;
            this.texts = JSON.parse(this.json.text);
            var langCode = cc.sys.localStorage.getItem("langCode");
            if (langCode != null) {
                this.languageCode = langCode;
            }
        };
        LanguageMananger.prototype.setLanguage = function (languageCode) {
            this.languageCode = languageCode;
            cc.sys.localStorage.setItem("langCode", languageCode);
            for (var i = 0; i < this.listeners.length; i++) {
                var listener = this.listeners[i];
                if (listener.target && listener.target instanceof Object && listener.target.node) {
                    listener.callback(languageCode);
                }
                else {
                    this.listeners.splice(i, 1);
                    i--;
                }
            }
        };
        LanguageMananger.prototype.addListener = function (callback, target) {
            this.listeners.push({
                callback: callback,
                target: target
            });
        };
        LanguageMananger.prototype.getString = function (id) {
            if (this.texts.hasOwnProperty(id)) {
                if (this.texts[id].hasOwnProperty(this.languageCode)) {
                    return this.texts[id][this.languageCode];
                }
            }
            return id;
        };
        var LanguageMananger_1;
        LanguageMananger.instance = null;
        __decorate([
            property(cc.TextAsset)
        ], LanguageMananger.prototype, "json", void 0);
        LanguageMananger = LanguageMananger_1 = __decorate([
            ccclass
        ], LanguageMananger);
        return LanguageMananger;
    }(cc.Component));
    Language.LanguageMananger = LanguageMananger;
})(Language || (Language = {}));
exports.default = Language.LanguageMananger;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXGNvbW1vblxcTGFuZ3VhZ2UuTGFuZ3VhZ2VNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQVUsUUFBUSxDQXNEakI7QUF0REQsV0FBVSxRQUFRO0lBRWQ7UUFBc0Msb0NBQVk7UUFBbEQ7WUFBQSxxRUFrREM7WUE3Q0csVUFBSSxHQUFpQixJQUFJLENBQUM7WUFHMUIsa0JBQVksR0FBRyxJQUFJLENBQUM7WUFDWixXQUFLLEdBQVcsRUFBRSxDQUFDO1lBQ25CLGVBQVMsR0FBZSxFQUFFLENBQUM7O1FBd0N2QyxDQUFDOzZCQWxEWSxnQkFBZ0I7UUFZekIsaUNBQU0sR0FBTjtZQUNJLGtCQUFnQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEMsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3ZELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7YUFDaEM7UUFDTCxDQUFDO1FBRU0sc0NBQVcsR0FBbEIsVUFBbUIsWUFBb0I7WUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7WUFDakMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUN0RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzVDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLElBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxZQUFZLE1BQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtvQkFDOUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDbkM7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUM1QixDQUFDLEVBQUUsQ0FBQztpQkFDUDthQUNKO1FBQ0wsQ0FBQztRQUVNLHNDQUFXLEdBQWxCLFVBQW1CLFFBQXdDLEVBQUUsTUFBb0I7WUFDN0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixNQUFNLEVBQUUsTUFBTTthQUNqQixDQUFDLENBQUM7UUFDUCxDQUFDO1FBRU0sb0NBQVMsR0FBaEIsVUFBaUIsRUFBVTtZQUN2QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUMvQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRTtvQkFDbEQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDNUM7YUFDSjtZQUNELE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQzs7UUEvQ00seUJBQVEsR0FBcUIsSUFBSSxDQUFDO1FBR3pDO1lBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7c0RBQ0c7UUFMakIsZ0JBQWdCO1lBRDVCLE9BQU87V0FDSyxnQkFBZ0IsQ0FrRDVCO1FBQUQsdUJBQUM7S0FsREQsQUFrREMsQ0FsRHFDLEVBQUUsQ0FBQyxTQUFTLEdBa0RqRDtJQWxEWSx5QkFBZ0IsbUJBa0Q1QixDQUFBO0FBRUwsQ0FBQyxFQXREUyxRQUFRLEtBQVIsUUFBUSxRQXNEakI7QUFDRCxrQkFBZSxRQUFRLENBQUMsZ0JBQWdCLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbm5hbWVzcGFjZSBMYW5ndWFnZSB7XG4gICAgQGNjY2xhc3NcbiAgICBleHBvcnQgY2xhc3MgTGFuZ3VhZ2VNYW5hbmdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICAgICAgc3RhdGljIGluc3RhbmNlOiBMYW5ndWFnZU1hbmFuZ2VyID0gbnVsbDtcblxuICAgICAgICBAcHJvcGVydHkoY2MuVGV4dEFzc2V0KVxuICAgICAgICBqc29uOiBjYy5UZXh0QXNzZXQgPSBudWxsO1xuXG5cbiAgICAgICAgbGFuZ3VhZ2VDb2RlID0gXCJ2aVwiO1xuICAgICAgICBwcml2YXRlIHRleHRzOiBPYmplY3QgPSB7fTtcbiAgICAgICAgcHJpdmF0ZSBsaXN0ZW5lcnM6IEFycmF5PGFueT4gPSBbXTtcblxuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgICAgICBMYW5ndWFnZU1hbmFuZ2VyLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMudGV4dHMgPSBKU09OLnBhcnNlKHRoaXMuanNvbi50ZXh0KTtcbiAgICAgICAgICAgIGxldCBsYW5nQ29kZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxhbmdDb2RlXCIpO1xuICAgICAgICAgICAgaWYgKGxhbmdDb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlQ29kZSA9IGxhbmdDb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIHNldExhbmd1YWdlKGxhbmd1YWdlQ29kZTogc3RyaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmxhbmd1YWdlQ29kZSA9IGxhbmd1YWdlQ29kZTtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxhbmdDb2RlXCIsIGxhbmd1YWdlQ29kZSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5saXN0ZW5lcnNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVyLnRhcmdldCAmJiBsaXN0ZW5lci50YXJnZXQgaW5zdGFuY2VvZiBPYmplY3QgJiYgbGlzdGVuZXIudGFyZ2V0Lm5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2sobGFuZ3VhZ2VDb2RlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgYWRkTGlzdGVuZXIoY2FsbGJhY2s6IChsYW5ndWFnZUNvZGU6IHN0cmluZykgPT4gdm9pZCwgdGFyZ2V0OiBjYy5Db21wb25lbnQpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgZ2V0U3RyaW5nKGlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICAgICAgaWYgKHRoaXMudGV4dHMuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGV4dHNbaWRdLmhhc093blByb3BlcnR5KHRoaXMubGFuZ3VhZ2VDb2RlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50ZXh0c1tpZF1bdGhpcy5sYW5ndWFnZUNvZGVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgfVxuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgTGFuZ3VhZ2UuTGFuZ3VhZ2VNYW5hbmdlcjsiXX0=