
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/BaseSlot25/ItemIconSlot25.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXEJhc2VTbG90MjVcXEl0ZW1JY29uU2xvdDI1LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBZ0RDO1FBN0NHLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRzdCLGVBQVMsR0FBZ0IsSUFBSSxDQUFDO1FBRzlCLGFBQU8sR0FBVyxJQUFJLENBQUM7UUFFaEIscUJBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIsWUFBTSxHQUFHLElBQUksQ0FBQztRQUNkLFdBQUssR0FBRyxJQUFJLENBQUM7O0lBbUN4QixDQUFDO0lBakNHLDZCQUFJLEdBQUosVUFBTSxNQUFNLEVBQUUsS0FBSyxFQUFFLGVBQWU7UUFDaEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkMsSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFDO1lBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN0QztRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFJRCxpREFBd0IsR0FBeEIsVUFBeUIsTUFBTTtRQUMzQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRUQsaURBQXdCLEdBQXhCLFVBQXlCLE1BQU07UUFDM0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVELHdDQUFlLEdBQWYsVUFBZ0IsTUFBTTtRQUNsQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFDO1lBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDM0U7SUFDTCxDQUFDO0lBNUNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ1M7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztxREFDUTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNLO0lBVE4sY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQWdEbEM7SUFBRCxxQkFBQztDQWhERCxBQWdEQyxDQWhEMkMsRUFBRSxDQUFDLFNBQVMsR0FnRHZEO2tCQWhEb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW1JY29uU2xvdDI1IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgc3ByaXRlSWNvbjogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcbiAgICBzcGluZUljb246IHNwLlNrZWxldG9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vZGVCb3g6Y2MuTm9kZSA9IG51bGw7XG5cbiAgICBwdWJsaWMgZ2FtZVBsYXlNYW5hZ2VyID0gbnVsbDtcbiAgICBwdWJsaWMgaXRlbUlkID0gbnVsbDtcbiAgICBwdWJsaWMgaW5kZXggPSBudWxsO1xuICAgXG4gICAgaW5pdCAoaXRlbUlkLCBpbmRleCwgZ2FtZVBsYXlNYW5hZ2VyKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc2VsZi5nYW1lUGxheU1hbmFnZXIgPSBnYW1lUGxheU1hbmFnZXI7XG4gICAgICAgIHNlbGYuaXRlbUlkID0gaXRlbUlkO1xuICAgICAgICBzZWxmLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIHNlbGYuc3ByaXRlSWNvbi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGlmKHNlbGYuc3BpbmVJY29uKXtcbiAgICAgICAgICAgIHNlbGYuc3BpbmVJY29uLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5zcHJpdGVJY29uLnNwcml0ZUZyYW1lID0gc2VsZi5nYW1lUGxheU1hbmFnZXIuZ2V0U3ByaXRlRnJhbWVJY29uKHNlbGYuaXRlbUlkKTtcbiAgICB9XG5cbiAgICBcblxuICAgIGNoYW5nZVNwcml0ZUJsdXJCeUl0ZW1JZChpdGVtSWQpe1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYuaXRlbUlkID0gaXRlbUlkO1xuICAgICAgICBzZWxmLnNwcml0ZUljb24uc3ByaXRlRnJhbWUgPSBzZWxmLmdhbWVQbGF5TWFuYWdlci5nZXRTcHJpdGVGcmFtZUljb25CbHVyKGl0ZW1JZCk7XG4gICAgfVxuXG4gICAgY2hhbmdlU3ByaXRlUmVhbEJ5SXRlbUlkKGl0ZW1JZCl7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc2VsZi5pdGVtSWQgPSBpdGVtSWQ7XG4gICAgICAgIHNlbGYuc3ByaXRlSWNvbi5zcHJpdGVGcmFtZSA9IHNlbGYuZ2FtZVBsYXlNYW5hZ2VyLmdldFNwcml0ZUZyYW1lSWNvbihpdGVtSWQpO1xuICAgIH1cblxuICAgIGNoYW5nZVNwaW5lSWNvbihpdGVtSWQpe1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYuaXRlbUlkID0gaXRlbUlkO1xuICAgICAgICBpZihzZWxmLnNwaW5lSWNvbil7XG4gICAgICAgICAgICBzZWxmLnNwaW5lSWNvbi5za2VsZXRvbkRhdGEgPSBzZWxmLmdhbWVQbGF5TWFuYWdlci5nZXRTcGluZUljb24oaXRlbUlkKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==