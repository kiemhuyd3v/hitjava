"use strict";
cc._RF.push(module, '40acaWMSXxNdpYc3oXMk4fs', 'ItemIconSlot25');
// Lobby/LobbyScript/Script/BaseSlot25/ItemIconSlot25.ts

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
var ItemIconSlot25 = /** @class */ (function (_super) {
    __extends(ItemIconSlot25, _super);
    function ItemIconSlot25() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spriteIcon = null;
        _this.spineIcon = null;
        _this.nodeBox = null;
        _this.gamePlayManager = null;
        _this.itemId = null;
        _this.index = null;
        return _this;
    }
    ItemIconSlot25.prototype.init = function (itemId, index, gamePlayManager) {
        var self = this;
        self.gamePlayManager = gamePlayManager;
        self.itemId = itemId;
        self.index = index;
        self.spriteIcon.node.active = true;
        if (self.spineIcon) {
            self.spineIcon.node.active = false;
        }
        self.spriteIcon.spriteFrame = self.gamePlayManager.getSpriteFrameIcon(self.itemId);
    };
    ItemIconSlot25.prototype.changeSpriteBlurByItemId = function (itemId) {
        var self = this;
        self.itemId = itemId;
        self.spriteIcon.spriteFrame = self.gamePlayManager.getSpriteFrameIconBlur(itemId);
    };
    ItemIconSlot25.prototype.changeSpriteRealByItemId = function (itemId) {
        var self = this;
        self.itemId = itemId;
        self.spriteIcon.spriteFrame = self.gamePlayManager.getSpriteFrameIcon(itemId);
    };
    ItemIconSlot25.prototype.changeSpineIcon = function (itemId) {
        var self = this;
        self.itemId = itemId;
        if (self.spineIcon) {
            self.spineIcon.skeletonData = self.gamePlayManager.getSpineIcon(itemId);
        }
    };
    __decorate([
        property(cc.Sprite)
    ], ItemIconSlot25.prototype, "spriteIcon", void 0);
    __decorate([
        property(sp.Skeleton)
    ], ItemIconSlot25.prototype, "spineIcon", void 0);
    __decorate([
        property(cc.Node)
    ], ItemIconSlot25.prototype, "nodeBox", void 0);
    ItemIconSlot25 = __decorate([
        ccclass
    ], ItemIconSlot25);
    return ItemIconSlot25;
}(cc.Component));
exports.default = ItemIconSlot25;

cc._RF.pop();