"use strict";
cc._RF.push(module, '6a549DsjfNDC7i9SCvuQIrh', 'TaiXiuST.PopupHonors');
// TaiXiuSieuToc/Scripts/TaiXiuST.PopupHonors.ts

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
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var Dialog_1 = require("../../Lobby/LobbyScript/Script/common/Dialog");
var ScrollViewControl_1 = require("../../Lobby/LobbyScript/Script/common/ScrollViewControl");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var TaiXiuSieuToc_NetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/TaiXiuSieuToc.NetworkClient");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TaiXiuSieuToc;
(function (TaiXiuSieuToc) {
    var PopupHonors = /** @class */ (function (_super) {
        __extends(PopupHonors, _super);
        function PopupHonors() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.itemTemplate = null;
            _this.sprRank = [];
            _this.items = new Array();
            _this.scrView = null;
            _this.dataList = [];
            return _this;
        }
        PopupHonors.prototype.show = function () {
            _super.prototype.show.call(this);
            App_1.default.instance.showBgMiniGame("TaiXiuSieuToc");
            for (var i = 0; i < this.items.length; i++) {
                this.items[i].active = false;
            }
            if (this.itemTemplate != null)
                this.itemTemplate.active = false;
        };
        PopupHonors.prototype.dismiss = function () {
            _super.prototype.dismiss.call(this);
            for (var i = 0; i < this.items.length; i++) {
                this.items[i].active = false;
            }
        };
        PopupHonors.prototype._onShowed = function () {
            _super.prototype._onShowed.call(this);
            this.loadData();
        };
        PopupHonors.prototype.loadData = function () {
            App_1.default.instance.showLoading(true);
            TaiXiuSieuToc_NetworkClient_1.default.getInstance().getTopHonor();
        };
        PopupHonors.prototype.initData = function (data) {
            var _this = this;
            this.dataList = data.slice();
            var cb = function (item, itemData) {
                item.getChildByName("bg").opacity = item['itemID'] % 2 == 0 ? 255 : 0;
                item.getChildByName("lblRank").getComponent(cc.Label).string = (item['itemID'] + 1).toString();
                item.getChildByName("lblAccount").getComponent(cc.Label).string = itemData["loginname"];
                item.getChildByName("lblWin").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["amount"]);
                if (item['itemID'] < 3) {
                    item.getChildByName("ic_rank").active = true;
                    item.getChildByName("lblRank").active = false;
                    item.getChildByName("ic_rank").getComponent(cc.Sprite).spriteFrame = _this.sprRank[itemData['index']];
                    if (itemData['index'] == 2) {
                        item.getChildByName("ic_rank").x = -235.622;
                    }
                    else {
                        item.getChildByName("ic_rank").x = -239.622;
                    }
                }
                else {
                    item.getChildByName("ic_rank").active = false;
                    item.getChildByName("lblRank").active = true;
                }
                item.active = true;
            };
            this.scrView.setDataList(cb, this.dataList);
        };
        __decorate([
            property(cc.Node)
        ], PopupHonors.prototype, "itemTemplate", void 0);
        __decorate([
            property([cc.SpriteFrame])
        ], PopupHonors.prototype, "sprRank", void 0);
        __decorate([
            property(ScrollViewControl_1.default)
        ], PopupHonors.prototype, "scrView", void 0);
        PopupHonors = __decorate([
            ccclass
        ], PopupHonors);
        return PopupHonors;
    }(Dialog_1.default));
    TaiXiuSieuToc.PopupHonors = PopupHonors;
})(TaiXiuSieuToc || (TaiXiuSieuToc = {}));
exports.default = TaiXiuSieuToc.PopupHonors;

cc._RF.pop();