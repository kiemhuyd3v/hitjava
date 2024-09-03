
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.PopupCardInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '565af9rmjtPBJKuHmINlkn1', 'Lobby.PopupCardInfo');
// Lobby/LobbyScript/Lobby.PopupCardInfo.ts

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
var Dialog_1 = require("./Script/common/Dialog");
var Utils_1 = require("./Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupCardInfo = /** @class */ (function (_super) {
    __extends(PopupCardInfo, _super);
    function PopupCardInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemFactorTemplate = null;
        _this.contentItem = null;
        _this._nodeTemplate = null;
        _this.tabSelectedIdx = 0;
        return _this;
    }
    PopupCardInfo.prototype.start = function () {
    };
    PopupCardInfo.prototype.setListItem = function (listItem) {
        var itemArray = JSON.parse(listItem);
        //let content = cc.instantiate(this.itemFactorTemplate).parent;
        if (this._nodeTemplate == null) {
            this._nodeTemplate = cc.instantiate(this.itemFactorTemplate);
            //this._nodeTemplate.parent =  this.itemFactorTemplate.parent
        }
        this.contentItem.removeAllChildren();
        for (var i = 0; i < itemArray.length; i++) {
            var node = cc.instantiate(this._nodeTemplate);
            node.parent = this.contentItem;
            node.active = true;
            node.getChildByName("stt").getComponent(cc.Label).string = (i + 1).toString();
            node.getChildByName("telcoName").getComponent(cc.Label).string = itemArray[i].Telco;
            node.getChildByName("amount").getComponent(cc.Label).string = Utils_1.default.formatNumber(Number(itemArray[i].Amount));
            node.getChildByName("pincode").getComponent(cc.Label).string = itemArray[i].PinCode;
            node.getChildByName("serial").getComponent(cc.Label).string = itemArray[i].Serial;
        }
        this.show();
    };
    PopupCardInfo.prototype.show = function () {
        _super.prototype.show.call(this);
    };
    __decorate([
        property(cc.Node)
    ], PopupCardInfo.prototype, "itemFactorTemplate", void 0);
    __decorate([
        property(cc.Node)
    ], PopupCardInfo.prototype, "contentItem", void 0);
    PopupCardInfo = __decorate([
        ccclass
    ], PopupCardInfo);
    return PopupCardInfo;
}(Dialog_1.default));
exports.default = PopupCardInfo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5Qb3B1cENhcmRJbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE0QztBQUM1QywrQ0FBMEM7QUFHcEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFPNUM7SUFBMkMsaUNBQU07SUFBakQ7UUFBQSxxRUFxREM7UUFsREcsd0JBQWtCLEdBQVksSUFBSSxDQUFDO1FBR25DLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBR3BCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLG9CQUFjLEdBQUcsQ0FBQyxDQUFDOztJQTBDL0IsQ0FBQztJQXhDRyw2QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUNELG1DQUFXLEdBQVgsVUFBWSxRQUFnQjtRQUN4QixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLCtEQUErRDtRQUMvRCxJQUFHLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxFQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUM3RCw2REFBNkQ7U0FDaEU7UUFHRCxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDckMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBR25CLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDOUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3BGLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsZUFBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDOUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ3BGLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztTQUNyRjtRQUNELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBR0QsNEJBQUksR0FBSjtRQUNJLGlCQUFNLElBQUksV0FBRSxDQUFDO0lBR2pCLENBQUM7SUEzQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2REFDaUI7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDVTtJQU5YLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0FxRGpDO0lBQUQsb0JBQUM7Q0FyREQsQUFxREMsQ0FyRDBDLGdCQUFNLEdBcURoRDtrQkFyRG9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlhbG9nIGZyb20gXCIuL1NjcmlwdC9jb21tb24vRGlhbG9nXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cblxuXG5cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwQ2FyZEluZm8gZXh0ZW5kcyBEaWFsb2cge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaXRlbUZhY3RvclRlbXBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvbnRlbnRJdGVtOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIFxuICAgIHByaXZhdGUgX25vZGVUZW1wbGF0ZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIHRhYlNlbGVjdGVkSWR4ID0gMDtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBcbiAgICB9XG4gICAgc2V0TGlzdEl0ZW0obGlzdEl0ZW06IHN0cmluZyl7XG4gICAgICAgIGxldCBpdGVtQXJyYXkgPSBKU09OLnBhcnNlKGxpc3RJdGVtKTtcbiAgICAgICAgLy9sZXQgY29udGVudCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbUZhY3RvclRlbXBsYXRlKS5wYXJlbnQ7XG4gICAgICAgIGlmKHRoaXMuX25vZGVUZW1wbGF0ZSA9PSBudWxsKXtcbiAgICAgICAgICAgIHRoaXMuX25vZGVUZW1wbGF0ZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbUZhY3RvclRlbXBsYXRlKTtcbiAgICAgICAgICAgIC8vdGhpcy5fbm9kZVRlbXBsYXRlLnBhcmVudCA9ICB0aGlzLml0ZW1GYWN0b3JUZW1wbGF0ZS5wYXJlbnRcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICB0aGlzLmNvbnRlbnRJdGVtLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuX25vZGVUZW1wbGF0ZSk7XG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMuY29udGVudEl0ZW07XG4gICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IChpICsgMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZWxjb05hbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpdGVtQXJyYXlbaV0uVGVsY287XG4gICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwiYW1vdW50XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKE51bWJlcihpdGVtQXJyYXlbaV0uQW1vdW50KSk7XG4gICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwicGluY29kZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGl0ZW1BcnJheVtpXS5QaW5Db2RlO1xuICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcInNlcmlhbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGl0ZW1BcnJheVtpXS5TZXJpYWw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICAgIFxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgc3VwZXIuc2hvdygpO1xuICAgICAgIFxuICAgICAgIFxuICAgIH1cblxuICAgIFxuXG4gICAgXG5cbiAgICBcbn1cbiJdfQ==