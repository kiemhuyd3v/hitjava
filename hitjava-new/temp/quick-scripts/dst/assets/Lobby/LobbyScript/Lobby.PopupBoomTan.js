
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.PopupBoomTan.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c21d3ctX0pEYa4OPIMXy1vq', 'Lobby.PopupBoomTan');
// Lobby/LobbyScript/Lobby.PopupBoomTan.ts

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
var Http_1 = require("../../Loading/src/Http");
var Configs_1 = require("../../Loading/src/Configs");
var App_1 = require("./Script/common/App");
var Dialog_1 = require("./Script/common/Dialog");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupBoomTan = /** @class */ (function (_super) {
    __extends(PopupBoomTan, _super);
    function PopupBoomTan() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemTemplate = null;
        _this.sfRanks = [];
        _this.sfGifts = [];
        return _this;
    }
    PopupBoomTan.prototype.show = function () {
        _super.prototype.show.call(this);
        for (var i = 0; i < this.itemTemplate.parent.childrenCount; i++) {
            this.itemTemplate.parent.children[i].active = false;
        }
    };
    PopupBoomTan.prototype.dismiss = function () {
        _super.prototype.dismiss.call(this);
        for (var i = 0; i < this.itemTemplate.parent.childrenCount; i++) {
            this.itemTemplate.parent.children[i].active = false;
        }
    };
    PopupBoomTan.prototype._onShowed = function () {
        _super.prototype._onShowed.call(this);
        this.loadData();
    };
    PopupBoomTan.prototype.getItem = function () {
        var item = null;
        for (var i = 0; i < this.itemTemplate.parent.childrenCount; i++) {
            var node = this.itemTemplate.parent.children[i];
            if (node != this.itemTemplate && !node.active) {
                item = node;
                break;
            }
        }
        if (item == null) {
            item = cc.instantiate(this.itemTemplate);
            item.parent = this.itemTemplate.parent;
        }
        item.active = true;
        return item;
    };
    PopupBoomTan.prototype.loadData = function () {
        var _this = this;
        App_1.default.instance.showLoading(true);
        var url = Configs_1.default.App.DOMAIN + "boom_tan.json";
        Http_1.default.get(url, null, function (err, res) {
            App_1.default.instance.showLoading(false);
            if (err != null)
                return;
            for (var i = 0; i < res.length; i++) {
                var itemData = res[i];
                var item = _this.getItem();
                var sfGift = _this.getGiftSpriteFrame(itemData["gift"]);
                if (sfGift != null) {
                    item.getChildByName("SprGift").active = true;
                    item.getChildByName("SprGift").getComponent(cc.Sprite).spriteFrame = sfGift;
                    item.getChildByName("Gift").active = false;
                }
                else {
                    item.getChildByName("Gift").active = true;
                    item.getChildByName("Gift").getComponent(cc.Label).string = itemData["gift"];
                    item.getChildByName("SprGift").active = false;
                }
                if (i < _this.sfRanks.length) {
                    item.getChildByName("SprRank").active = true;
                    item.getChildByName("SprRank").getComponent(cc.Sprite).spriteFrame = _this.sfRanks[i];
                    item.getChildByName("Rank").active = false;
                }
                else {
                    item.getChildByName("Rank").active = true;
                    item.getChildByName("Rank").getComponent(cc.Label).string = itemData["rank"];
                    item.getChildByName("SprRank").active = false;
                }
                var lblNickname = item.getChildByName("Nickname").getComponent(cc.Label);
                var lblScore = item.getChildByName("Score").getComponent(cc.Label);
                lblNickname.string = itemData["nickname"];
                lblScore.string = itemData["score"];
                if (i == 0) {
                    lblNickname.node.color = cc.Color.BLACK.fromHEX("#ff7e00");
                    lblScore.node.color = cc.Color.BLACK.fromHEX("#ff7e00");
                }
                else if (i == 1) {
                    lblNickname.node.color = cc.Color.BLACK.fromHEX("#004eff");
                    lblScore.node.color = cc.Color.BLACK.fromHEX("#004eff");
                }
                else if (i == 2) {
                    lblNickname.node.color = cc.Color.BLACK.fromHEX("#06ff00");
                    lblScore.node.color = cc.Color.BLACK.fromHEX("#06ff00");
                }
                else {
                    lblNickname.node.color = cc.Color.BLACK.fromHEX("#feca85");
                    lblScore.node.color = cc.Color.BLACK.fromHEX("#feca85");
                }
                item.getChildByName("Divider").active = i < res.length - 1;
            }
        });
    };
    PopupBoomTan.prototype.actTheLe = function () {
        var url = Configs_1.default.App.DOMAIN + "the_le_boom_tan.html";
        cc.sys.openURL(url);
    };
    PopupBoomTan.prototype.getGiftSpriteFrame = function (name) {
        for (var i = 0; i < this.sfGifts.length; i++) {
            if (this.sfGifts[i].name == name)
                return this.sfGifts[i];
        }
        return null;
    };
    __decorate([
        property(cc.Node)
    ], PopupBoomTan.prototype, "itemTemplate", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], PopupBoomTan.prototype, "sfRanks", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], PopupBoomTan.prototype, "sfGifts", void 0);
    PopupBoomTan = __decorate([
        ccclass
    ], PopupBoomTan);
    return PopupBoomTan;
}(Dialog_1.default));
exports.default = PopupBoomTan;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5Qb3B1cEJvb21UYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0NBQTBDO0FBQzFDLHFEQUFnRDtBQUNoRCwyQ0FBc0M7QUFDdEMsaURBQTRDO0FBRXRDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFNO0lBQWhEO1FBQUEscUVBMEdDO1FBdkdHLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLGFBQU8sR0FBcUIsRUFBRSxDQUFDO1FBRS9CLGFBQU8sR0FBcUIsRUFBRSxDQUFDOztJQW1HbkMsQ0FBQztJQWpHRywyQkFBSSxHQUFKO1FBQ0ksaUJBQU0sSUFBSSxXQUFFLENBQUM7UUFDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzdELElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3ZEO0lBQ0wsQ0FBQztJQUVELDhCQUFPLEdBQVA7UUFDSSxpQkFBTSxPQUFPLFdBQUUsQ0FBQztRQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzdELElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3ZEO0lBQ0wsQ0FBQztJQUVELGdDQUFTLEdBQVQ7UUFDSSxpQkFBTSxTQUFTLFdB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R0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVPLHlDQUFrQixHQUExQixVQUEyQixJQUFZO1FBQ25DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUk7Z0JBQUUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzVEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQXRHRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNXO0lBRTdCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lEQUNJO0lBRS9CO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lEQUNJO0lBUGQsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQTBHaEM7SUFBRCxtQkFBQztDQTFHRCxBQTBHQyxDQTFHeUMsZ0JBQU0sR0EwRy9DO2tCQTFHb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEh0dHAgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0h0dHBcIjtcbmltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCIuL1NjcmlwdC9jb21tb24vRGlhbG9nXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cEJvb21UYW4gZXh0ZW5kcyBEaWFsb2cge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaXRlbVRlbXBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBzZlJhbmtzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgc2ZHaWZ0czogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4gICAgc2hvdygpIHtcbiAgICAgICAgc3VwZXIuc2hvdygpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbVRlbXBsYXRlLnBhcmVudC5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlLnBhcmVudC5jaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc21pc3MoKSB7XG4gICAgICAgIHN1cGVyLmRpc21pc3MoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1UZW1wbGF0ZS5wYXJlbnQuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZS5wYXJlbnQuY2hpbGRyZW5baV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25TaG93ZWQoKSB7XG4gICAgICAgIHN1cGVyLl9vblNob3dlZCgpO1xuICAgICAgICB0aGlzLmxvYWREYXRhKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRJdGVtKCk6IGNjLk5vZGUge1xuICAgICAgICBsZXQgaXRlbSA9IG51bGw7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtVGVtcGxhdGUucGFyZW50LmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLml0ZW1UZW1wbGF0ZS5wYXJlbnQuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAobm9kZSAhPSB0aGlzLml0ZW1UZW1wbGF0ZSAmJiAhbm9kZS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gbm9kZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlbSA9PSBudWxsKSB7XG4gICAgICAgICAgICBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtVGVtcGxhdGUpO1xuICAgICAgICAgICAgaXRlbS5wYXJlbnQgPSB0aGlzLml0ZW1UZW1wbGF0ZS5wYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWREYXRhKCkge1xuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgIGxldCB1cmwgPSBDb25maWdzLkFwcC5ET01BSU4gKyBcImJvb21fdGFuLmpzb25cIjtcbiAgICAgICAgSHR0cC5nZXQodXJsLCBudWxsLCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBpZiAoZXJyICE9IG51bGwpIHJldHVybjtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1EYXRhID0gcmVzW2ldO1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5nZXRJdGVtKCk7XG4gICAgICAgICAgICAgICAgbGV0IHNmR2lmdCA9IHRoaXMuZ2V0R2lmdFNwcml0ZUZyYW1lKGl0ZW1EYXRhW1wiZ2lmdFwiXSk7XG4gICAgICAgICAgICAgICAgaWYgKHNmR2lmdCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJTcHJHaWZ0XCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJTcHJHaWZ0XCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc2ZHaWZ0O1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiR2lmdFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiR2lmdFwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiR2lmdFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGl0ZW1EYXRhW1wiZ2lmdFwiXTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlNwckdpZnRcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpIDwgdGhpcy5zZlJhbmtzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiU3ByUmFua1wiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiU3ByUmFua1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZSYW5rc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlJhbmtcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlJhbmtcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlJhbmtcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpdGVtRGF0YVtcInJhbmtcIl07XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJTcHJSYW5rXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgbGJsTmlja25hbWU6IGNjLkxhYmVsID0gaXRlbS5nZXRDaGlsZEJ5TmFtZShcIk5pY2tuYW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAgICAgbGV0IGxibFNjb3JlOiBjYy5MYWJlbCA9IGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJTY29yZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgICAgIGxibE5pY2tuYW1lLnN0cmluZyA9IGl0ZW1EYXRhW1wibmlja25hbWVcIl07XG4gICAgICAgICAgICAgICAgbGJsU2NvcmUuc3RyaW5nID0gaXRlbURhdGFbXCJzY29yZVwiXTtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxibE5pY2tuYW1lLm5vZGUuY29sb3IgPSBjYy5Db2xvci5CTEFDSy5mcm9tSEVYKFwiI2ZmN2UwMFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGJsU2NvcmUubm9kZS5jb2xvciA9IGNjLkNvbG9yLkJMQUNLLmZyb21IRVgoXCIjZmY3ZTAwXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGxibE5pY2tuYW1lLm5vZGUuY29sb3IgPSBjYy5Db2xvci5CTEFDSy5mcm9tSEVYKFwiIzAwNGVmZlwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGJsU2NvcmUubm9kZS5jb2xvciA9IGNjLkNvbG9yLkJMQUNLLmZyb21IRVgoXCIjMDA0ZWZmXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGxibE5pY2tuYW1lLm5vZGUuY29sb3IgPSBjYy5Db2xvci5CTEFDSy5mcm9tSEVYKFwiIzA2ZmYwMFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGJsU2NvcmUubm9kZS5jb2xvciA9IGNjLkNvbG9yLkJMQUNLLmZyb21IRVgoXCIjMDZmZjAwXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxibE5pY2tuYW1lLm5vZGUuY29sb3IgPSBjYy5Db2xvci5CTEFDSy5mcm9tSEVYKFwiI2ZlY2E4NVwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGJsU2NvcmUubm9kZS5jb2xvciA9IGNjLkNvbG9yLkJMQUNLLmZyb21IRVgoXCIjZmVjYTg1XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiRGl2aWRlclwiKS5hY3RpdmUgPSBpIDwgcmVzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY3RUaGVMZSgpIHtcbiAgICAgICAgbGV0IHVybCA9IENvbmZpZ3MuQXBwLkRPTUFJTiArIFwidGhlX2xlX2Jvb21fdGFuLmh0bWxcIjtcbiAgICAgICAgY2Muc3lzLm9wZW5VUkwodXJsKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEdpZnRTcHJpdGVGcmFtZShuYW1lOiBzdHJpbmcpOiBjYy5TcHJpdGVGcmFtZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZkdpZnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZkdpZnRzW2ldLm5hbWUgPT0gbmFtZSkgcmV0dXJuIHRoaXMuc2ZHaWZ0c1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iXX0=