"use strict";
cc._RF.push(module, '4d0aeQnEUhIJ5JtrFeiMHsr', 'Slot3x3Gem.ItemSlot');
// Slot3x3Gem/Scripts/Slot3x3Gem.ItemSlot.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var ItemSlot = /** @class */ (function (_super) {
    __extends(ItemSlot, _super);
    function ItemSlot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprite = null;
        _this.spine = null;
        _this.sprAtlas = null;
        _this.id = 0;
        _this.animName = "";
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    ItemSlot.prototype.setId = function (id) {
        id = id + 1;
        this.id = id;
        this.sprite.spriteFrame = this.sprAtlas.getSpriteFrame("icon" + this.id);
        this.spine.node.active = true;
        this.sprite.node.active = false;
        switch (this.id) {
            case 1:
                this.animName = "wild";
                break;
            case 2:
                this.animName = 'do';
                break;
            case 3:
                this.animName = 'xanh luc';
                break;
            case 4:
                this.animName = 'la';
                break;
            case 5:
                this.animName = 'tim';
                break;
            case 6:
                this.animName = 'xanh duong';
                break;
        }
        this.spine.setAnimation(0, this.animName, true);
    };
    ItemSlot.prototype.setBlur = function () {
        this.sprite.spriteFrame = this.sprAtlas.getSpriteFrame("icon" + (this.id + 1) + "_blur");
        this.spine.node.active = false;
        this.sprite.node.active = true;
    };
    __decorate([
        property(cc.Sprite)
    ], ItemSlot.prototype, "sprite", void 0);
    __decorate([
        property(sp.Skeleton)
    ], ItemSlot.prototype, "spine", void 0);
    __decorate([
        property(cc.SpriteAtlas)
    ], ItemSlot.prototype, "sprAtlas", void 0);
    ItemSlot = __decorate([
        ccclass
    ], ItemSlot);
    return ItemSlot;
}(cc.Component));
exports.default = ItemSlot;

cc._RF.pop();