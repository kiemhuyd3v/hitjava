
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/common/Language.Label.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '47fcfrB4HZCEqoTqVimESy9', 'Language.Label');
// Lobby/LobbyScript/Script/common/Language.Label.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent;
var Language_LanguageManager_1 = require("./Language.LanguageManager");
var Language;
(function (Language) {
    var Label = /** @class */ (function (_super) {
        __extends(Label, _super);
        function Label() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.id = "";
            _this.isUpperCase = false;
            return _this;
        }
        Label.prototype.start = function () {
            var _this = this;
            Language_LanguageManager_1.default.instance.addListener(function () {
                _this.updateText();
            }, this);
            this.updateText();
        };
        Label.prototype.updateText = function () {
            var str = Language_LanguageManager_1.default.instance.getString(this.id);
            if (str != null && str.trim().length == 0) {
                return;
            }
            if (this.isUpperCase) {
                str = str.toUpperCase();
            }
            this.getComponent(cc.Label).string = str;
        };
        __decorate([
            property
        ], Label.prototype, "id", void 0);
        __decorate([
            property
        ], Label.prototype, "isUpperCase", void 0);
        Label = __decorate([
            ccclass,
            requireComponent(cc.Label)
        ], Label);
        return Label;
    }(cc.Component));
    Language.Label = Label;
})(Language || (Language = {}));
exports.default = Language.Label;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXGNvbW1vblxcTGFuZ3VhZ2UuTGFiZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUEwQyxFQUFFLENBQUMsVUFBVSxFQUFyRCxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxnQkFBZ0Isc0JBQWtCLENBQUM7QUFFOUQsdUVBQXlEO0FBRXpELElBQVUsUUFBUSxDQTZCakI7QUE3QkQsV0FBVSxRQUFRO0lBR2Q7UUFBMkIseUJBQVk7UUFBdkM7WUFBQSxxRUF3QkM7WUFyQkcsUUFBRSxHQUFXLEVBQUUsQ0FBQztZQUVoQixpQkFBVyxHQUFZLEtBQUssQ0FBQzs7UUFtQmpDLENBQUM7UUFqQkcscUJBQUssR0FBTDtZQUFBLGlCQUtDO1lBSkcsa0NBQWUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO2dCQUNqQyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDdEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ1QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RCLENBQUM7UUFFTywwQkFBVSxHQUFsQjtZQUNJLElBQUksR0FBRyxHQUFHLGtDQUFlLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdEQsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUN2QyxPQUFPO2FBQ1Y7WUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2xCLEdBQUcsR0FBRyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDM0I7WUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQzdDLENBQUM7UUFwQkQ7WUFEQyxRQUFRO3lDQUNPO1FBRWhCO1lBREMsUUFBUTtrREFDb0I7UUFMcEIsS0FBSztZQUZqQixPQUFPO1lBQ1AsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztXQUNkLEtBQUssQ0F3QmpCO1FBQUQsWUFBQztLQXhCRCxBQXdCQyxDQXhCMEIsRUFBRSxDQUFDLFNBQVMsR0F3QnRDO0lBeEJZLGNBQUssUUF3QmpCLENBQUE7QUFFTCxDQUFDLEVBN0JTLFFBQVEsS0FBUixRQUFRLFFBNkJqQjtBQUNELGtCQUFlLFFBQVEsQ0FBQyxLQUFLLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCByZXF1aXJlQ29tcG9uZW50IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5pbXBvcnQgTGFuZ3VhZ2VNYW5hZ2VyIGZyb20gXCIuL0xhbmd1YWdlLkxhbmd1YWdlTWFuYWdlclwiO1xuXG5uYW1lc3BhY2UgTGFuZ3VhZ2Uge1xuICAgIEBjY2NsYXNzXG4gICAgQHJlcXVpcmVDb21wb25lbnQoY2MuTGFiZWwpXG4gICAgZXhwb3J0IGNsYXNzIExhYmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgICAgICBAcHJvcGVydHlcbiAgICAgICAgaWQ6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgIEBwcm9wZXJ0eVxuICAgICAgICBpc1VwcGVyQ2FzZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgIHN0YXJ0KCkge1xuICAgICAgICAgICAgTGFuZ3VhZ2VNYW5hZ2VyLmluc3RhbmNlLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRleHQoKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUZXh0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIHVwZGF0ZVRleHQoKSB7XG4gICAgICAgICAgICBsZXQgc3RyID0gTGFuZ3VhZ2VNYW5hZ2VyLmluc3RhbmNlLmdldFN0cmluZyh0aGlzLmlkKTtcbiAgICAgICAgICAgIGlmIChzdHIgIT0gbnVsbCAmJiBzdHIudHJpbSgpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNVcHBlckNhc2UpIHtcbiAgICAgICAgICAgICAgICBzdHIgPSBzdHIudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBzdHI7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IExhbmd1YWdlLkxhYmVsOyJdfQ==