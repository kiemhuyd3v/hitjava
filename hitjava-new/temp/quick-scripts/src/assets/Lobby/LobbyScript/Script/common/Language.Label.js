"use strict";
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