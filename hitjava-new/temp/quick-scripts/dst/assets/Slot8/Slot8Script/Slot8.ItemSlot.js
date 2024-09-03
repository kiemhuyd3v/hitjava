
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot8/Slot8Script/Slot8.ItemSlot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9c950pPr6hPEJ1AGixSOybu', 'Slot8.ItemSlot');
// Slot8/Slot8Script/Slot8.ItemSlot.ts

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
var Slot8ItemSlot = /** @class */ (function (_super) {
    __extends(Slot8ItemSlot, _super);
    function Slot8ItemSlot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spriteIcon = null;
        _this.spineIcon = null;
        _this.nodeBox = null;
        _this.itemAtlast = null;
        _this.itemBlur = null;
        _this.item4 = null;
        _this.gamePlayManager = null;
        _this.itemId = null;
        _this.index = null;
        _this.animName = null;
        return _this;
    }
    Slot8ItemSlot.prototype.onLoad = function () {
        this.spriteIcon = cc.find("Box/Sprite", this.node).getComponent(cc.Sprite);
        this.spineIcon = cc.find("Box/Spine", this.node).getComponent(sp.Skeleton);
        this.nodeBox = this.node.getChildByName("Box");
        this.node.setContentSize(cc.size(170, 170));
    };
    Slot8ItemSlot.prototype.init = function (itemId, index, gamePlayManager) {
        var self = this;
        self.gamePlayManager = gamePlayManager;
        self.itemId = itemId;
        self.index = index;
        self.spriteIcon.node.active = true;
        this.spineIcon.node.scale = 0.67;
        this.spineIcon.node.y = 5;
        this.spriteIcon.node.setContentSize(cc.size(this.spriteIcon.node.width / 1.7, this.spriteIcon.node.height / 1.7));
        self.spineIcon.node.active = false;
        this.setSpriteFrame(itemId);
    };
    Slot8ItemSlot.prototype.changeSpriteBlurByItemId = function (itemId) {
        var self = this;
        this.itemId = itemId;
        this.spineIcon.node.active = false;
        this.spriteIcon.node.active = true;
        this.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        this.setSpriteFrame(itemId, true);
        this.spriteIcon.node.setContentSize(cc.size(this.spriteIcon.node.width / 1, this.spriteIcon.node.height / 1));
    };
    Slot8ItemSlot.prototype.changeSpriteRealByItemId = function (itemId) {
        this.itemId = itemId;
        this.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        this.setSpriteFrame(itemId);
        this.spriteIcon.node.setContentSize(cc.size(this.spriteIcon.node.width / 1, this.spriteIcon.node.height / 1));
    };
    Slot8ItemSlot.prototype.changeSpineIcon = function (itemId) {
        var self = this;
        self.itemId = itemId;
        //  cc.log("itemid=" + itemId);
        this.spriteIcon.node.y = 0;
        this.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        itemId = parseInt(itemId);
        switch (itemId) {
            case 0:
                this.animName = "jackport";
                this.spriteIcon.node.y = 10;
                break;
            case 1:
                this.animName = "bonus";
                break;
            case 2:
                this.animName = "freespin";
                break;
        }
        this.setSpriteFrame(itemId);
        this.spriteIcon.node.setContentSize(cc.size(this.spriteIcon.node.width / 1, this.spriteIcon.node.height / 1));
        // this.spineIcon.setAnimation(0, animName, true);
    };
    Slot8ItemSlot.prototype.setSpriteFrame = function (itemId, isBlur) {
        if (isBlur === void 0) { isBlur = false; }
        var atlast = isBlur ? this.itemBlur : this.itemAtlast;
        switch (itemId) {
            case 0:
                this.spriteIcon.spriteFrame = atlast.getSpriteFrame("jackpot");
                break;
            case 1:
                this.spriteIcon.spriteFrame = atlast.getSpriteFrame("bonus");
                break;
            case 2:
                this.spriteIcon.spriteFrame = atlast.getSpriteFrame("freespin");
                break;
            case 3:
            case 4:
            case 5:
                this.spriteIcon.spriteFrame = atlast.getSpriteFrame("item_" + (itemId - 2));
                break;
            case 6:
                if (!isBlur)
                    this.spriteIcon.spriteFrame = this.item4;
                else
                    this.spriteIcon.spriteFrame = atlast.getSpriteFrame("item_" + (itemId - 2));
                break;
        }
    };
    Slot8ItemSlot.prototype.checkShowSpriteOrSpine = function () {
        var _this = this;
        cc.Tween.stopAllByTarget(this.spriteIcon.node);
        cc.Tween.stopAllByTarget(this.spineIcon.node);
        if (this.itemId > 2) {
            this.spineIcon.node.active = false;
            this.spriteIcon.node.active = true;
            this.spriteIcon.node.color = cc.Color.WHITE;
            cc.tween(this.spriteIcon.node)
                .repeatForever(cc.tween().sequence(cc.tween().to(0.25, { scale: 1.1 }, { easing: cc.easing.sineOut }), cc.tween().to(0.25, { scale: 1.0 }, { easing: cc.easing.sineOut })))
                .start();
            cc.tween(this.spriteIcon.node)
                .delay(0.9)
                .call(function () {
                _this.spriteIcon.node.color = cc.Color.GRAY;
                cc.Tween.stopAllByTarget(_this.spriteIcon.node);
                _this.spriteIcon.node.scale = 1.0;
            }).start();
        }
        else {
            this.spineIcon.node.active = true;
            this.spriteIcon.node.active = false;
            this.spineIcon.setAnimation(0, this.animName, true);
            this.spineIcon.node.color = cc.Color.WHITE;
            cc.tween(this.spineIcon.node)
                .delay(0.9).call(function () {
                _this.spineIcon.node.color = cc.Color.GRAY;
                _this.spriteIcon.node.active = true;
                _this.spineIcon.node.active = false;
            }).start();
        }
    };
    __decorate([
        property(cc.Sprite)
    ], Slot8ItemSlot.prototype, "spriteIcon", void 0);
    __decorate([
        property(sp.Skeleton)
    ], Slot8ItemSlot.prototype, "spineIcon", void 0);
    __decorate([
        property(cc.Node)
    ], Slot8ItemSlot.prototype, "nodeBox", void 0);
    __decorate([
        property(cc.SpriteAtlas)
    ], Slot8ItemSlot.prototype, "itemAtlast", void 0);
    __decorate([
        property(cc.SpriteAtlas)
    ], Slot8ItemSlot.prototype, "itemBlur", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Slot8ItemSlot.prototype, "item4", void 0);
    Slot8ItemSlot = __decorate([
        ccclass
    ], Slot8ItemSlot);
    return Slot8ItemSlot;
}(cc.Component));
exports.default = Slot8ItemSlot;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDhcXFNsb3Q4U2NyaXB0XFxTbG90OC5JdGVtU2xvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQStJQztRQTVJRyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixlQUFTLEdBQWdCLElBQUksQ0FBQztRQUc5QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGdCQUFVLEdBQW1CLElBQUksQ0FBQztRQUVsQyxjQUFRLEdBQW1CLElBQUksQ0FBQztRQUVoQyxXQUFLLEdBQW1CLElBQUksQ0FBQztRQUV0QixxQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixZQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsV0FBSyxHQUFHLElBQUksQ0FBQztRQUNiLGNBQVEsR0FBRyxJQUFJLENBQUM7O0lBMkgzQixDQUFDO0lBMUhHLDhCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxH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Y2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3Q4SXRlbVNsb3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBzcHJpdGVJY29uOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIHNwaW5lSWNvbjogc3AuU2tlbGV0b24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZUJveDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUF0bGFzKVxuICAgIGl0ZW1BdGxhc3Q6IGNjLlNwcml0ZUF0bGFzID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlQXRsYXMpXG4gICAgaXRlbUJsdXI6IGNjLlNwcml0ZUF0bGFzID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgaXRlbTQ6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuICAgIHB1YmxpYyBnYW1lUGxheU1hbmFnZXIgPSBudWxsO1xuICAgIHB1YmxpYyBpdGVtSWQgPSBudWxsO1xuICAgIHB1YmxpYyBpbmRleCA9IG51bGw7XG4gICAgcHVibGljIGFuaW1OYW1lID0gbnVsbDtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuc3ByaXRlSWNvbiA9IGNjLmZpbmQoXCJCb3gvU3ByaXRlXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIHRoaXMuc3BpbmVJY29uID0gY2MuZmluZChcIkJveC9TcGluZVwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgIHRoaXMubm9kZUJveCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJveFwiKTtcbiAgICAgICAgdGhpcy5ub2RlLnNldENvbnRlbnRTaXplKGNjLnNpemUoMTcwLCAxNzApKTtcblxuICAgIH1cbiAgICBpbml0KGl0ZW1JZCwgaW5kZXgsIGdhbWVQbGF5TWFuYWdlcikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYuZ2FtZVBsYXlNYW5hZ2VyID0gZ2FtZVBsYXlNYW5hZ2VyO1xuICAgICAgICBzZWxmLml0ZW1JZCA9IGl0ZW1JZDtcbiAgICAgICAgc2VsZi5pbmRleCA9IGluZGV4O1xuICAgICAgICBzZWxmLnNwcml0ZUljb24ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNwaW5lSWNvbi5ub2RlLnNjYWxlID0gMC42NztcbiAgICAgICAgdGhpcy5zcGluZUljb24ubm9kZS55ID0gNTtcbiAgICAgICAgdGhpcy5zcHJpdGVJY29uLm5vZGUuc2V0Q29udGVudFNpemUoY2Muc2l6ZSh0aGlzLnNwcml0ZUljb24ubm9kZS53aWR0aCAvIDEuNywgdGhpcy5zcHJpdGVJY29uLm5vZGUuaGVpZ2h0IC8gMS43KSk7XG4gICAgICAgIHNlbGYuc3BpbmVJY29uLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2V0U3ByaXRlRnJhbWUoaXRlbUlkKTtcbiAgICB9XG5cblxuXG4gICAgY2hhbmdlU3ByaXRlQmx1ckJ5SXRlbUlkKGl0ZW1JZCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuaXRlbUlkID0gaXRlbUlkO1xuICAgICAgICB0aGlzLnNwaW5lSWNvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNwcml0ZUljb24ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNwcml0ZUljb24uc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuVFJJTU1FRDtcbiAgICAgICAgdGhpcy5zZXRTcHJpdGVGcmFtZShpdGVtSWQsIHRydWUpO1xuICAgICAgICB0aGlzLnNwcml0ZUljb24ubm9kZS5zZXRDb250ZW50U2l6ZShjYy5zaXplKHRoaXMuc3ByaXRlSWNvbi5ub2RlLndpZHRoIC8gMSwgdGhpcy5zcHJpdGVJY29uLm5vZGUuaGVpZ2h0IC8gMSkpO1xuICAgIH1cblxuICAgIGNoYW5nZVNwcml0ZVJlYWxCeUl0ZW1JZChpdGVtSWQpIHtcbiAgICAgICAgdGhpcy5pdGVtSWQgPSBpdGVtSWQ7XG4gICAgICAgIHRoaXMuc3ByaXRlSWNvbi5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5UUklNTUVEO1xuICAgICAgICB0aGlzLnNldFNwcml0ZUZyYW1lKGl0ZW1JZCk7XG4gICAgICAgIHRoaXMuc3ByaXRlSWNvbi5ub2RlLnNldENvbnRlbnRTaXplKGNjLnNpemUodGhpcy5zcHJpdGVJY29uLm5vZGUud2lkdGggLyAxLCB0aGlzLnNwcml0ZUljb24ubm9kZS5oZWlnaHQgLyAxKSk7XG4gICAgfVxuXG4gICAgY2hhbmdlU3BpbmVJY29uKGl0ZW1JZCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYuaXRlbUlkID0gaXRlbUlkO1xuICAgICAgICAvLyAgY2MubG9nKFwiaXRlbWlkPVwiICsgaXRlbUlkKTtcbiAgICAgICAgdGhpcy5zcHJpdGVJY29uLm5vZGUueSA9IDA7XG4gICAgICAgIHRoaXMuc3ByaXRlSWNvbi5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5UUklNTUVEO1xuICAgICAgICBpdGVtSWQgPSBwYXJzZUludChpdGVtSWQpO1xuICAgICAgICBzd2l0Y2ggKGl0ZW1JZCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbU5hbWUgPSBcImphY2twb3J0XCJcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZUljb24ubm9kZS55ID0gMTA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltTmFtZSA9IFwiYm9udXNcIlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbU5hbWUgPSBcImZyZWVzcGluXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFNwcml0ZUZyYW1lKGl0ZW1JZCk7XG4gICAgICAgIHRoaXMuc3ByaXRlSWNvbi5ub2RlLnNldENvbnRlbnRTaXplKGNjLnNpemUodGhpcy5zcHJpdGVJY29uLm5vZGUud2lkdGggLyAxLCB0aGlzLnNwcml0ZUljb24ubm9kZS5oZWlnaHQgLyAxKSk7XG4gICAgICAgIC8vIHRoaXMuc3BpbmVJY29uLnNldEFuaW1hdGlvbigwLCBhbmltTmFtZSwgdHJ1ZSk7XG4gICAgfVxuICAgIHNldFNwcml0ZUZyYW1lKGl0ZW1JZCwgaXNCbHVyID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IGF0bGFzdCA9IGlzQmx1ciA/IHRoaXMuaXRlbUJsdXIgOiB0aGlzLml0ZW1BdGxhc3Q7XG4gICAgICAgIHN3aXRjaCAoaXRlbUlkKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVJY29uLnNwcml0ZUZyYW1lID0gYXRsYXN0LmdldFNwcml0ZUZyYW1lKFwiamFja3BvdFwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZUljb24uc3ByaXRlRnJhbWUgPSBhdGxhc3QuZ2V0U3ByaXRlRnJhbWUoXCJib251c1wiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZUljb24uc3ByaXRlRnJhbWUgPSBhdGxhc3QuZ2V0U3ByaXRlRnJhbWUoXCJmcmVlc3BpblwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNhc2UgNDpcblxuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlSWNvbi5zcHJpdGVGcmFtZSA9IGF0bGFzdC5nZXRTcHJpdGVGcmFtZShcIml0ZW1fXCIgKyAoaXRlbUlkIC0gMikpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIGlmICghaXNCbHVyKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZUljb24uc3ByaXRlRnJhbWUgPSB0aGlzLml0ZW00O1xuICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5zcHJpdGVJY29uLnNwcml0ZUZyYW1lID0gYXRsYXN0LmdldFNwcml0ZUZyYW1lKFwiaXRlbV9cIiArIChpdGVtSWQgLSAyKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hlY2tTaG93U3ByaXRlT3JTcGluZSgpIHtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuc3ByaXRlSWNvbi5ub2RlKTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuc3BpbmVJY29uLm5vZGUpO1xuICAgICAgICBpZiAodGhpcy5pdGVtSWQgPiAyKSB7XG4gICAgICAgICAgICB0aGlzLnNwaW5lSWNvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zcHJpdGVJY29uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlSWNvbi5ub2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnNwcml0ZUljb24ubm9kZSlcbiAgICAgICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC4yNSwgeyBzY2FsZTogMS4xIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dCB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC4yNSwgeyBzY2FsZTogMS4wIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dCB9KSkpXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnNwcml0ZUljb24ubm9kZSlcbiAgICAgICAgICAgICAgICAuZGVsYXkoMC45KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVJY29uLm5vZGUuY29sb3IgPSBjYy5Db2xvci5HUkFZO1xuICAgICAgICAgICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5zcHJpdGVJY29uLm5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZUljb24ubm9kZS5zY2FsZSA9IDEuMFxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNwaW5lSWNvbi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZUljb24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc3BpbmVJY29uLnNldEFuaW1hdGlvbigwLCB0aGlzLmFuaW1OYW1lLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuc3BpbmVJY29uLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcblxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5zcGluZUljb24ubm9kZSlcbiAgICAgICAgICAgICAgICAuZGVsYXkoMC45KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGluZUljb24ubm9kZS5jb2xvciA9IGNjLkNvbG9yLkdSQVk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlSWNvbi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BpbmVJY29uLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=