"use strict";
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