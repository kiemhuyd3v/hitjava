"use strict";
cc._RF.push(module, '4dcdfq0qsBP2I1r8cxuvjZn', 'TaiXiuST.PopupHistory');
// TaiXiuSieuToc/Scripts/TaiXiuST.PopupHistory.ts

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
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var TaiXiuSieuToc_NetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/TaiXiuSieuToc.NetworkClient");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TaiXiuSieuToc;
(function (TaiXiuSieuToc) {
    var PopupHistory = /** @class */ (function (_super) {
        __extends(PopupHistory, _super);
        function PopupHistory() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.lblPage = null;
            _this.prefab = null;
            _this.scroll = null;
            // @property([cc.BitmapFont])
            // fontNumber: cc.BitmapFont[] = [];
            _this.page = 1;
            _this.maxPage = 1;
            _this.items = new Array();
            _this.historyData = [];
            _this.totalPageLoaded = 0;
            return _this;
        }
        PopupHistory.prototype.onLoad = function () {
        };
        PopupHistory.prototype.show = function () {
            _super.prototype.show.call(this);
            App_1.default.instance.showBgMiniGame("TaiXiuSieuToc");
            this.historyData = [];
            this.totalPageLoaded = 0;
            for (var i = 0; i < this.items.length; i++) {
                this.items[i].active = false;
            }
        };
        PopupHistory.prototype.dismiss = function () {
            _super.prototype.dismiss.call(this);
            this.scroll.content.removeAllChildren();
            for (var i = 0; i < this.items.length; i++) {
                this.items[i].active = false;
            }
        };
        PopupHistory.prototype._onShowed = function () {
            _super.prototype._onShowed.call(this);
            this.page = 1;
            this.maxPage = 1;
            this.lblPage.string = this.page + "/" + this.maxPage;
            this.loadData();
        };
        PopupHistory.prototype.actNextPage = function () {
            if (this.page < this.maxPage) {
                this.page++;
                this.lblPage.string = this.page + "/" + this.maxPage;
                this.loadData();
            }
        };
        PopupHistory.prototype.actPrevPage = function () {
            if (this.page > 1) {
                this.page--;
                this.lblPage.string = this.page + "/" + this.maxPage;
                this.loadData();
            }
        };
        PopupHistory.prototype.loadData = function (isReloadScr) {
            var _this = this;
            if (isReloadScr === void 0) { isReloadScr = true; }
            App_1.default.instance.showLoading(true);
            TaiXiuSieuToc_NetworkClient_1.default.getInstance().getHistory(this.page - 1, 10, function (err, res) {
                App_1.default.instance.showLoading(false);
                if (err != null) {
                    //  cc.log("err:", err);
                    return;
                }
                ;
                if (res["message"] != "SUCCES")
                    return;
                // this.totalPageLoaded++;
                _this.maxPage = res["totalPages"];
                _this.lblPage.string = _this.page + "/" + _this.maxPage;
                _this.loadHistory(res["content"]);
            });
        };
        PopupHistory.prototype.loadHistory = function (datahistory) {
            this.scroll.content.removeAllChildren();
            for (var i = 0; i < datahistory.length; i++) {
                var node = cc.instantiate(this.prefab);
                node.parent = this.scroll.content;
                datahistory[i].index = i;
                this.setItemData(node, datahistory[i]);
            }
            this.scroll.scrollToTop(0.3);
        };
        PopupHistory.prototype.setItemData = function (item, itemData) {
            var index = itemData['index'];
            item.getChildByName("bg").opacity = index % 2 == 0 ? 255 : 0;
            item.getChildByName("lblSession").getComponent(cc.Label).string = "#" + itemData["taixiuId"];
            var time = itemData["bettime"];
            time = time.substr(0, time.indexOf("."));
            item.getChildByName("lblTime").getComponent(cc.Label).string = time.replace("T", "\n");
            item.getChildByName("lblBetDoor").getComponent(cc.Label).string = itemData["typed"] == 1 ? "TÀI" : "XỈU";
            item.getChildByName("lblResult").getComponent(cc.Label).string = itemData["description"] == null ? "Chưa có kết quả" : itemData["description"];
            item.getChildByName("lblBet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["betamount"]);
            item.getChildByName("lblRefund").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["refundamount"]);
            item.getChildByName("lblRefund").getComponent(cc.Label).node.color = itemData['refundamount'] > 0 ? new cc.Color(240, 191, 11) : new cc.Color(240, 48, 11);
            item.getChildByName("lblWin").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["winamount"]);
            item.getChildByName("lblWin").getComponent(cc.Label).node.color = itemData['winamount'] > 0 ? new cc.Color(240, 191, 11) : new cc.Color(240, 48, 11);
            item.active = true;
        };
        PopupHistory.prototype.onScrollEvent = function (scrollview, eventType, customEventData) {
            if (eventType == cc.ScrollView.EventType.SCROLL_TO_BOTTOM) {
                if (this.page < this.maxPage) {
                    this.page++;
                    this.loadData(false);
                }
            }
        };
        __decorate([
            property(cc.Label)
        ], PopupHistory.prototype, "lblPage", void 0);
        __decorate([
            property(cc.Node)
        ], PopupHistory.prototype, "prefab", void 0);
        __decorate([
            property(cc.ScrollView)
        ], PopupHistory.prototype, "scroll", void 0);
        PopupHistory = __decorate([
            ccclass
        ], PopupHistory);
        return PopupHistory;
    }(Dialog_1.default));
    TaiXiuSieuToc.PopupHistory = PopupHistory;
})(TaiXiuSieuToc || (TaiXiuSieuToc = {}));
exports.default = TaiXiuSieuToc.PopupHistory;

cc._RF.pop();