"use strict";
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