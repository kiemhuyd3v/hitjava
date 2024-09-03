
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/common/MultiLanguage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a6fecdymRNHfrcONO7sKFUj', 'MultiLanguage');
// Lobby/LobbyScript/Script/common/MultiLanguage.ts

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
exports.TYPE_OBJECT = void 0;
var Language_LanguageManager_1 = require("./Language.LanguageManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TYPE_OBJECT;
(function (TYPE_OBJECT) {
    TYPE_OBJECT[TYPE_OBJECT["LABEL"] = 0] = "LABEL";
    TYPE_OBJECT[TYPE_OBJECT["SPRITE"] = 1] = "SPRITE";
    TYPE_OBJECT[TYPE_OBJECT["SKELETON"] = 2] = "SKELETON";
})(TYPE_OBJECT = exports.TYPE_OBJECT || (exports.TYPE_OBJECT = {}));
var MultiLanguage = /** @class */ (function (_super) {
    __extends(MultiLanguage, _super);
    function MultiLanguage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.TYPE = TYPE_OBJECT.LABEL;
        _this.id = '';
        _this.isAddColon = false;
        // @property({
        //     visible: function (this: MultiLanguage) { return this.TYPE == TYPE_OBJECT.SKELETON }
        // })
        // BundleName: string = '';
        _this.BundleName = '';
        _this.skeletonNode = null;
        _this.animationName = [];
        _this.spriteFrames = [];
        _this.sprite = null;
        _this.isUpperCase = false;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    MultiLanguage.prototype.onLoad = function () {
    };
    MultiLanguage.prototype.start = function () {
        var _this = this;
        Language_LanguageManager_1.default.instance.addListener(function () {
            _this.updateLanguage();
        }, this);
    };
    MultiLanguage.prototype.onEnable = function () {
        this.updateLanguage();
    };
    MultiLanguage.prototype.updateLanguage = function () {
        if (this.TYPE == TYPE_OBJECT.LABEL) {
            this.updateText();
        }
        else if (this.TYPE == TYPE_OBJECT.SPRITE) {
            this.updateSprite();
        }
        else if (this.TYPE == TYPE_OBJECT.SKELETON) {
            this.updateSkeleton();
        }
    };
    MultiLanguage.prototype.updateText = function () {
        var str = Language_LanguageManager_1.default.instance.getString(this.id);
        if (str != null && str.trim().length == 0) {
            return;
        }
        if (this.isUpperCase) {
            str = str.toUpperCase();
        }
        if (this.isAddColon)
            str = str + ":";
        this.getComponent(cc.Label).string = str;
    };
    MultiLanguage.prototype.updateSprite = function () {
        if (this.sprite == null) {
            this.sprite = this.getComponent(cc.Sprite);
        }
        switch (Language_LanguageManager_1.default.instance.languageCode) {
            case "vi":
                this.sprite.spriteFrame = this.spriteFrames[0];
                break;
            case "en":
                this.sprite.spriteFrame = this.spriteFrames[1];
                break;
        }
    };
    MultiLanguage.prototype.updateSkeleton = function () {
        switch (Language_LanguageManager_1.default.instance.languageCode) {
            case "vi":
                this.skeletonNode.setAnimation(0, this.animationName[0], true);
                break;
            case "en":
                this.skeletonNode.setAnimation(0, this.animationName[1], true);
                break;
        }
    };
    __decorate([
        property({ type: cc.Enum(TYPE_OBJECT) })
    ], MultiLanguage.prototype, "TYPE", void 0);
    __decorate([
        property({
            visible: function () { return this.TYPE == TYPE_OBJECT.LABEL; }
        })
    ], MultiLanguage.prototype, "id", void 0);
    __decorate([
        property({
            visible: function () { return this.TYPE == TYPE_OBJECT.LABEL; }
        })
    ], MultiLanguage.prototype, "isAddColon", void 0);
    __decorate([
        property({
            visible: function () { return this.TYPE == TYPE_OBJECT.SKELETON; }
        })
    ], MultiLanguage.prototype, "BundleName", void 0);
    __decorate([
        property({
            visible: function () { return this.TYPE == TYPE_OBJECT.SKELETON; },
            type: sp.Skeleton
        })
    ], MultiLanguage.prototype, "skeletonNode", void 0);
    __decorate([
        property({
            visible: function () { return this.TYPE == TYPE_OBJECT.SKELETON; },
            type: [cc.String]
        })
    ], MultiLanguage.prototype, "animationName", void 0);
    __decorate([
        property({
            visible: function () { return this.TYPE == TYPE_OBJECT.SPRITE; },
            type: [cc.SpriteFrame]
        })
    ], MultiLanguage.prototype, "spriteFrames", void 0);
    __decorate([
        property({
            visible: function () { return this.TYPE == TYPE_OBJECT.SPRITE; },
            type: cc.Sprite
        })
    ], MultiLanguage.prototype, "sprite", void 0);
    __decorate([
        property({
            visible: function () { return this.TYPE == TYPE_OBJECT.LABEL; },
        }),
        property({
            visible: function () { return this.TYPE == TYPE_OBJECT.LABEL; }
        })
    ], MultiLanguage.prototype, "isUpperCase", void 0);
    MultiLanguage = __decorate([
        ccclass
    ], MultiLanguage);
    return MultiLanguage;
}(cc.Component));
exports.default = MultiLanguage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXGNvbW1vblxcTXVsdGlMYW5ndWFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUVBQWlFO0FBRzNELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLElBQVksV0FJWDtBQUpELFdBQVksV0FBVztJQUNuQiwrQ0FBSyxDQUFBO0lBQ0wsaURBQU0sQ0FBQTtJQUNOLHFEQUFRLENBQUE7QUFDWixDQUFDLEVBSlcsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUFJdEI7QUFFRDtJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQWlIQztRQTlHRyxVQUFJLEdBQWdCLFdBQVcsQ0FBQyxLQUFLLENBQUM7UUFJdEMsUUFBRSxHQUFXLEVBQUUsQ0FBQztRQUloQixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUU1QixjQUFjO1FBQ2QsMkZBQTJGO1FBQzNGLEtBQUs7UUFDTCwyQkFBMkI7UUFJM0IsZ0JBQVUsR0FBVyxFQUFFLENBQUM7UUFNeEIsa0JBQVksR0FBZ0IsSUFBSSxDQUFBO1FBS2hDLG1CQUFhLEdBQWEsRUFBRSxDQUFDO1FBTTdCLGtCQUFZLEdBQXFCLEVBQUUsQ0FBQztRQU1wQyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBUXpCLGlCQUFXLEdBQVksS0FBSyxDQUFDOztRQTZEN0IsaUJBQWlCO0lBQ3JCLENBQUM7SUE1REcsd0JBQXdCO0lBRXhCLDhCQUFNLEdBQU47SUFDQSxDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUFBLGlCQUtDO1FBSkcsa0NBQXVCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztZQUN6QyxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRWIsQ0FBQztJQUNELGdD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WixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBaUhqQztJQUFELG9CQUFDO0NBakhELEFBaUhDLENBakgwQyxFQUFFLENBQUMsU0FBUyxHQWlIdEQ7a0JBakhvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExhbmd1YWdlTGFuZ3VhZ2VNYW5hZ2VyIGZyb20gXCIuL0xhbmd1YWdlLkxhbmd1YWdlTWFuYWdlclwiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5leHBvcnQgZW51bSBUWVBFX09CSkVDVCB7XG4gICAgTEFCRUwsXG4gICAgU1BSSVRFLFxuICAgIFNLRUxFVE9OXG59XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVsdGlMYW5ndWFnZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5FbnVtKFRZUEVfT0JKRUNUKSB9KVxuICAgIFRZUEU6IFRZUEVfT0JKRUNUID0gVFlQRV9PQkpFQ1QuTEFCRUw7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24gKHRoaXM6IE11bHRpTGFuZ3VhZ2UpIHsgcmV0dXJuIHRoaXMuVFlQRSA9PSBUWVBFX09CSkVDVC5MQUJFTCB9XG4gICAgfSlcbiAgICBpZDogc3RyaW5nID0gJyc7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24gKHRoaXM6IE11bHRpTGFuZ3VhZ2UpIHsgcmV0dXJuIHRoaXMuVFlQRSA9PSBUWVBFX09CSkVDVC5MQUJFTCB9XG4gICAgfSlcbiAgICBpc0FkZENvbG9uOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvLyBAcHJvcGVydHkoe1xuICAgIC8vICAgICB2aXNpYmxlOiBmdW5jdGlvbiAodGhpczogTXVsdGlMYW5ndWFnZSkgeyByZXR1cm4gdGhpcy5UWVBFID09IFRZUEVfT0JKRUNULlNLRUxFVE9OIH1cbiAgICAvLyB9KVxuICAgIC8vIEJ1bmRsZU5hbWU6IHN0cmluZyA9ICcnO1xuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICh0aGlzOiBNdWx0aUxhbmd1YWdlKSB7IHJldHVybiB0aGlzLlRZUEUgPT0gVFlQRV9PQkpFQ1QuU0tFTEVUT04gfVxuICAgIH0pXG4gICAgQnVuZGxlTmFtZTogc3RyaW5nID0gJyc7XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAodGhpczogTXVsdGlMYW5ndWFnZSkgeyByZXR1cm4gdGhpcy5UWVBFID09IFRZUEVfT0JKRUNULlNLRUxFVE9OIH0sXG4gICAgICAgIHR5cGU6IHNwLlNrZWxldG9uXG4gICAgfSlcbiAgICBza2VsZXRvbk5vZGU6IHNwLlNrZWxldG9uID0gbnVsbFxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICh0aGlzOiBNdWx0aUxhbmd1YWdlKSB7IHJldHVybiB0aGlzLlRZUEUgPT0gVFlQRV9PQkpFQ1QuU0tFTEVUT04gfSxcbiAgICAgICAgdHlwZTogW2NjLlN0cmluZ11cbiAgICB9KVxuICAgIGFuaW1hdGlvbk5hbWU6IHN0cmluZ1tdID0gW107XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAodGhpczogTXVsdGlMYW5ndWFnZSkgeyByZXR1cm4gdGhpcy5UWVBFID09IFRZUEVfT0JKRUNULlNQUklURSB9LFxuICAgICAgICB0eXBlOiBbY2MuU3ByaXRlRnJhbWVdXG4gICAgfSlcbiAgICBzcHJpdGVGcmFtZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICh0aGlzOiBNdWx0aUxhbmd1YWdlKSB7IHJldHVybiB0aGlzLlRZUEUgPT0gVFlQRV9PQkpFQ1QuU1BSSVRFIH0sXG4gICAgICAgIHR5cGU6IGNjLlNwcml0ZVxuICAgIH0pXG4gICAgc3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24gKHRoaXM6IE11bHRpTGFuZ3VhZ2UpIHsgcmV0dXJuIHRoaXMuVFlQRSA9PSBUWVBFX09CSkVDVC5MQUJFTCB9LFxuICAgIH0pXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24gKHRoaXM6IE11bHRpTGFuZ3VhZ2UpIHsgcmV0dXJuIHRoaXMuVFlQRSA9PSBUWVBFX09CSkVDVC5MQUJFTCB9XG4gICAgfSlcbiAgICBpc1VwcGVyQ2FzZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIExhbmd1YWdlTGFuZ3VhZ2VNYW5hZ2VyLmluc3RhbmNlLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGFuZ3VhZ2UoKTtcbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICB9XG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlTGFuZ3VhZ2UoKTtcbiAgICB9XG4gICAgdXBkYXRlTGFuZ3VhZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLlRZUEUgPT0gVFlQRV9PQkpFQ1QuTEFCRUwpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGV4dCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuVFlQRSA9PSBUWVBFX09CSkVDVC5TUFJJVEUpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3ByaXRlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5UWVBFID09IFRZUEVfT0JKRUNULlNLRUxFVE9OKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNrZWxldG9uKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSB1cGRhdGVUZXh0KCkge1xuICAgICAgICBsZXQgc3RyID0gTGFuZ3VhZ2VMYW5ndWFnZU1hbmFnZXIuaW5zdGFuY2UuZ2V0U3RyaW5nKHRoaXMuaWQpO1xuICAgICAgICBpZiAoc3RyICE9IG51bGwgJiYgc3RyLnRyaW0oKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzVXBwZXJDYXNlKSB7XG4gICAgICAgICAgICBzdHIgPSBzdHIudG9VcHBlckNhc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0FkZENvbG9uKVxuICAgICAgICAgICAgc3RyID0gc3RyICsgXCI6XCI7XG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBzdHI7XG4gICAgfVxuICAgIHVwZGF0ZVNwcml0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ByaXRlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlID0gdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKExhbmd1YWdlTGFuZ3VhZ2VNYW5hZ2VyLmluc3RhbmNlLmxhbmd1YWdlQ29kZSkge1xuICAgICAgICAgICAgY2FzZSBcInZpXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZUZyYW1lc1swXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJlblwiOlxuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVGcmFtZXNbMV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlU2tlbGV0b24oKSB7XG4gICAgICAgIHN3aXRjaCAoTGFuZ3VhZ2VMYW5ndWFnZU1hbmFnZXIuaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIFwidmlcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnNrZWxldG9uTm9kZS5zZXRBbmltYXRpb24oMCwgdGhpcy5hbmltYXRpb25OYW1lWzBdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJlblwiOlxuICAgICAgICAgICAgICAgIHRoaXMuc2tlbGV0b25Ob2RlLnNldEFuaW1hdGlvbigwLCB0aGlzLmFuaW1hdGlvbk5hbWVbMV0sIHRydWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==