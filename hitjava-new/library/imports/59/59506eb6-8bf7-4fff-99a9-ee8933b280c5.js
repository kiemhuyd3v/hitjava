"use strict";
cc._RF.push(module, '5950662i/dP/5mp7okzsoDF', 'ItemChoseBank');
// Lobby/LobbyScript/Payment/ItemChoseBank.ts

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
var ItemChoseBank = /** @class */ (function (_super) {
    __extends(ItemChoseBank, _super);
    function ItemChoseBank() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spriteBank = null;
        _this.sfBankArray = [];
        _this.callback = null;
        _this.data = null;
        return _this;
    }
    ItemChoseBank.prototype.init = function (tabWell, data, callback) {
        this.data = data;
        this.callback = callback;
        var self = this;
        this.spriteBank.spriteFrame = null;
        if (tabWell == "clickpay") {
            try {
                cc.loader.load(data.bank_logo, function (err, texture) {
                    var newSpriteFrame = new cc.SpriteFrame(texture);
                    self.spriteBank.spriteFrame = newSpriteFrame;
                });
            }
            catch (e) {
            }
        }
        else {
            cc.loader.load(data.imageUrl, function (err, texture) {
                var newSpriteFrame = new cc.SpriteFrame(texture);
                self.spriteBank.spriteFrame = newSpriteFrame;
            });
        }
    };
    ItemChoseBank.prototype.onBtnClick = function () {
        if (this.callback != null) {
            this.callback(this.data);
        }
    };
    __decorate([
        property(cc.Sprite)
    ], ItemChoseBank.prototype, "spriteBank", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], ItemChoseBank.prototype, "sfBankArray", void 0);
    ItemChoseBank = __decorate([
        ccclass
    ], ItemChoseBank);
    return ItemChoseBank;
}(cc.Component));
exports.default = ItemChoseBank;

cc._RF.pop();