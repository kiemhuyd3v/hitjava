
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TaiXiuSieuToc/Scripts/TaiXiuST.PopupHistory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGFpWGl1U2lldVRvY1xcU2NyaXB0c1xcVGFpWGl1U1QuUG9wdXBIaXN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLGlFQUE0RDtBQUM1RCx1RUFBa0U7QUFFbEUscUVBQWdFO0FBQ2hFLG1IQUF3RztBQUlsRyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFVLGFBQWEsQ0F1SHRCO0FBdkhELFdBQVUsYUFBYTtJQUVuQjtRQUFrQyxnQ0FBTTtRQUF4QztZQUFBLHFFQW1IQztZQWhIRyxhQUFPLEdBQWEsSUFBSSxDQUFDO1lBR3pCLFlBQU0sR0FBWSxJQUFJLENBQUM7WUFFdkIsWUFBTSxHQUFrQixJQUFJLENBQUM7WUFFN0IsNkJBQTZCO1lBQzdCLG9DQUFvQztZQUU1QixVQUFJLEdBQVcsQ0FBQyxDQUFDO1lBQ2pCLGFBQU8sR0FBVyxDQUFDLENBQUM7WUFDcEIsV0FBSyxHQUFHLElBQUksS0FBSyxFQUFXLENBQUM7WUFDN0IsaUJBQVcsR0FBRyxFQUFFLENBQUM7WUFDakIscUJBQWUsR0FBRyxDQUFDLENBQUM7O1FBa0doQyxDQUFDO1FBaEdHLDZCQUFNLEdBQU47UUFFQSxDQUFDO1FBRUQsMkJBQUksR0FBSjtZQUNJLGlCQUFNLElBQUksV0FBRSxDQUFDO1lBQ2IsYUFBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7WUFDekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN4QyxJQUFJLENBQUMsS0FB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QUFtSEMsQ0FuSGlDLGdCQUFNLEdBbUh2QztJQW5IWSwwQkFBWSxlQW1IeEIsQ0FBQTtBQUVMLENBQUMsRUF2SFMsYUFBYSxLQUFiLGFBQWEsUUF1SHRCO0FBQ0Qsa0JBQWUsYUFBYSxDQUFDLFlBQVksQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgSHR0cCBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvSHR0cFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBEaWFsb2cgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vRGlhbG9nXCI7XG5pbXBvcnQgU2Nyb2xsVmlld0NvbnRyb2wgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vU2Nyb2xsVmlld0NvbnRyb2xcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuaW1wb3J0IFRhaVhpdVNUTmV0d29ya0NsaWVudCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL1RhaVhpdVNpZXVUb2MuTmV0d29ya0NsaWVudFwiO1xuaW1wb3J0IGNtZCBmcm9tIFwiLi9UYWlYaXVTaWV1VG9jLkNtZFwiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbm5hbWVzcGFjZSBUYWlYaXVTaWV1VG9jIHtcbiAgICBAY2NjbGFzc1xuICAgIGV4cG9ydCBjbGFzcyBQb3B1cEhpc3RvcnkgZXh0ZW5kcyBEaWFsb2cge1xuXG4gICAgICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICAgICAgbGJsUGFnZTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgICAgICBwcmVmYWI6IGNjLk5vZGUgPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcbiAgICAgICAgc2Nyb2xsOiBjYy5TY3JvbGxWaWV3ID0gbnVsbDtcblxuICAgICAgICAvLyBAcHJvcGVydHkoW2NjLkJpdG1hcEZvbnRdKVxuICAgICAgICAvLyBmb250TnVtYmVyOiBjYy5CaXRtYXBGb250W10gPSBbXTtcblxuICAgICAgICBwcml2YXRlIHBhZ2U6IG51bWJlciA9IDE7XG4gICAgICAgIHByaXZhdGUgbWF4UGFnZTogbnVtYmVyID0gMTtcbiAgICAgICAgcHJpdmF0ZSBpdGVtcyA9IG5ldyBBcnJheTxjYy5Ob2RlPigpO1xuICAgICAgICBwcml2YXRlIGhpc3RvcnlEYXRhID0gW107XG4gICAgICAgIHByaXZhdGUgdG90YWxQYWdlTG9hZGVkID0gMDtcblxuICAgICAgICBvbkxvYWQoKSB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHNob3coKSB7XG4gICAgICAgICAgICBzdXBlci5zaG93KCk7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0JnTWluaUdhbWUoXCJUYWlYaXVTaWV1VG9jXCIpO1xuICAgICAgICAgICAgdGhpcy5oaXN0b3J5RGF0YSA9IFtdO1xuICAgICAgICAgICAgdGhpcy50b3RhbFBhZ2VMb2FkZWQgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRpc21pc3MoKSB7XG4gICAgICAgICAgICBzdXBlci5kaXNtaXNzKCk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbC5jb250ZW50LnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgX29uU2hvd2VkKCkge1xuICAgICAgICAgICAgc3VwZXIuX29uU2hvd2VkKCk7XG5cbiAgICAgICAgICAgIHRoaXMucGFnZSA9IDE7XG4gICAgICAgICAgICB0aGlzLm1heFBhZ2UgPSAxO1xuICAgICAgICAgICAgdGhpcy5sYmxQYWdlLnN0cmluZyA9IHRoaXMucGFnZSArIFwiL1wiICsgdGhpcy5tYXhQYWdlO1xuICAgICAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYWN0TmV4dFBhZ2UoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYWdlIDwgdGhpcy5tYXhQYWdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlKys7XG4gICAgICAgICAgICAgICAgdGhpcy5sYmxQYWdlLnN0cmluZyA9IHRoaXMucGFnZSArIFwiL1wiICsgdGhpcy5tYXhQYWdlO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGFjdFByZXZQYWdlKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFnZSA+IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2UtLTtcbiAgICAgICAgICAgICAgICB0aGlzLmxibFBhZ2Uuc3RyaW5nID0gdGhpcy5wYWdlICsgXCIvXCIgKyB0aGlzLm1heFBhZ2U7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcHJpdmF0ZSBsb2FkRGF0YShpc1JlbG9hZFNjciA9IHRydWUpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgIFRhaVhpdVNUTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmdldEhpc3RvcnkodGhpcy5wYWdlIC0gMSwgMTAsIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWYgKGVyciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJlcnI6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChyZXNbXCJtZXNzYWdlXCJdICE9IFwiU1VDQ0VTXCIpIHJldHVybjtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnRvdGFsUGFnZUxvYWRlZCsrO1xuICAgICAgICAgICAgICAgIHRoaXMubWF4UGFnZSA9IHJlc1tcInRvdGFsUGFnZXNcIl07XG4gICAgICAgICAgICAgICAgdGhpcy5sYmxQYWdlLnN0cmluZyA9IHRoaXMucGFnZSArIFwiL1wiICsgdGhpcy5tYXhQYWdlO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZEhpc3RvcnkocmVzW1wiY29udGVudFwiXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkSGlzdG9yeShkYXRhaGlzdG9yeSkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGwuY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhaGlzdG9yeS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWIpO1xuICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5zY3JvbGwuY29udGVudDtcbiAgICAgICAgICAgICAgICBkYXRhaGlzdG9yeVtpXS5pbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJdGVtRGF0YShub2RlLCBkYXRhaGlzdG9yeVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNjcm9sbC5zY3JvbGxUb1RvcCgwLjMpO1xuICAgICAgICB9XG4gICAgICAgIHNldEl0ZW1EYXRhKGl0ZW0sIGl0ZW1EYXRhKSB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBpdGVtRGF0YVsnaW5kZXgnXVxuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLm9wYWNpdHkgPSBpbmRleCAlIDIgPT0gMCA/IDI1NSA6IDA7XG4gICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibGJsU2Vzc2lvblwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiI1wiICsgaXRlbURhdGFbXCJ0YWl4aXVJZFwiXTtcbiAgICAgICAgICAgIGxldCB0aW1lID0gaXRlbURhdGFbXCJiZXR0aW1lXCJdO1xuICAgICAgICAgICAgdGltZSA9IHRpbWUuc3Vic3RyKDAsIHRpbWUuaW5kZXhPZihcIi5cIikpO1xuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImxibFRpbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aW1lLnJlcGxhY2UoXCJUXCIsIFwiXFxuXCIpO1xuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImxibEJldERvb3JcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpdGVtRGF0YVtcInR5cGVkXCJdID09IDEgPyBcIlTDgElcIiA6IFwiWOG7iFVcIjtcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJsYmxSZXN1bHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpdGVtRGF0YVtcImRlc2NyaXB0aW9uXCJdID09IG51bGwgPyBcIkNoxrBhIGPDsyBr4bq/dCBxdeG6o1wiIDogaXRlbURhdGFbXCJkZXNjcmlwdGlvblwiXTtcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJsYmxCZXRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoaXRlbURhdGFbXCJiZXRhbW91bnRcIl0pO1xuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImxibFJlZnVuZFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcInJlZnVuZGFtb3VudFwiXSk7XG4gICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibGJsUmVmdW5kXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkubm9kZS5jb2xvciA9IGl0ZW1EYXRhWydyZWZ1bmRhbW91bnQnXSA+IDAgPyBuZXcgY2MuQ29sb3IoMjQwLCAxOTEsIDExKSA6IG5ldyBjYy5Db2xvcigyNDAsIDQ4LCAxMSk7XG4gICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibGJsV2luXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGl0ZW1EYXRhW1wid2luYW1vdW50XCJdKTtcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJsYmxXaW5cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5ub2RlLmNvbG9yID0gaXRlbURhdGFbJ3dpbmFtb3VudCddID4gMCA/IG5ldyBjYy5Db2xvcigyNDAsIDE5MSwgMTEpIDogbmV3IGNjLkNvbG9yKDI0MCwgNDgsIDExKTtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBvblNjcm9sbEV2ZW50KHNjcm9sbHZpZXcsIGV2ZW50VHlwZSwgY3VzdG9tRXZlbnREYXRhKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnRUeXBlID09IGNjLlNjcm9sbFZpZXcuRXZlbnRUeXBlLlNDUk9MTF9UT19CT1RUT00pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYWdlIDwgdGhpcy5tYXhQYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZSsrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWREYXRhKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFRhaVhpdVNpZXVUb2MuUG9wdXBIaXN0b3J5OyJdfQ==