"use strict";
cc._RF.push(module, 'f4cbaZlzz5C24Im4AdHMjCb', 'TaiXiuMini.PopupThanhDu');
// TaiXiuDouble/TaiXiuScript/TaiXiu1/TaiXiuMini.PopupThanhDu.ts

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
var Configs_1 = require("../../../Loading/src/Configs");
var Http_1 = require("../../../Loading/src/Http");
var App_1 = require("../../../Lobby/LobbyScript/Script/common/App");
var Dialog_1 = require("../../../Lobby/LobbyScript/Script/common/Dialog");
var Utils_1 = require("../../../Lobby/LobbyScript/Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var taixiumini;
(function (taixiumini) {
    var PopupThanhDu = /** @class */ (function (_super) {
        __extends(PopupThanhDu, _super);
        function PopupThanhDu() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.sprTabNormal = null;
            _this.sprTabActive = null;
            _this.tabs = null;
            _this.childTabs = null;
            _this.itemTemplate = null;
            _this.lblDate = null;
            _this.selectedTab = 0;
            _this.selectedChildTab = 0;
            _this.date = new Date();
            _this.items = new Array();
            return _this;
        }
        PopupThanhDu.prototype.start = function () {
            var _this = this;
            var _loop_1 = function (i) {
                var tab = this_1.tabs.children[i];
                tab.on("click", function () {
                    _this.selectedTab = i;
                    _this.selectedChildTab = 0;
                    _this.date = new Date();
                    _this.updateTabSpriteFrame();
                    _this.loadData();
                });
            };
            var this_1 = this;
            for (var i = 0; i < this.tabs.childrenCount; i++) {
                _loop_1(i);
            }
            var _loop_2 = function (i) {
                var tab = this_2.childTabs.children[i];
                tab.on("click", function () {
                    _this.selectedChildTab = i;
                    _this.updateTabSpriteFrame();
                    _this.loadData();
                });
            };
            var this_2 = this;
            for (var i = 0; i < this.childTabs.childrenCount; i++) {
                _loop_2(i);
            }
        };
        PopupThanhDu.prototype.dismiss = function () {
            _super.prototype.dismiss.call(this);
            for (var i = 0; i < this.items.length; i++) {
                this.items[i].active = false;
            }
        };
        PopupThanhDu.prototype.show = function () {
            _super.prototype.show.call(this);
            App_1.default.instance.showBgMiniGame("TaiXiu");
            for (var i = 0; i < this.items.length; i++) {
                this.items[i].active = false;
            }
            if (this.itemTemplate != null)
                this.itemTemplate.active = false;
        };
        PopupThanhDu.prototype._onShowed = function () {
            _super.prototype._onShowed.call(this);
            this.selectedTab = 0;
            this.selectedChildTab = 0;
            this.updateTabSpriteFrame();
            this.loadData();
        };
        PopupThanhDu.prototype.actNext = function () {
            if (this.selectedTab === 0) {
                this.date.setDate(this.date.getDate() + 1);
            }
            else {
                this.date.setMonth(this.date.getMonth() + 1);
            }
            this.loadData();
        };
        PopupThanhDu.prototype.actPrev = function () {
            if (this.selectedTab === 0) {
                this.date.setDate(this.date.getDate() - 1);
            }
            else {
                this.date.setMonth(this.date.getMonth() - 1);
            }
            this.loadData();
        };
        PopupThanhDu.prototype.updateTabSpriteFrame = function () {
            for (var i = 0; i < this.tabs.childrenCount; i++) {
                var tab = this.tabs.children[i];
                tab.getComponent(cc.Sprite).spriteFrame = this.selectedTab == i ? this.sprTabActive : this.sprTabNormal;
            }
            for (var i = 0; i < this.childTabs.childrenCount; i++) {
                var tab = this.childTabs.children[i];
                tab.getComponent(cc.Sprite).spriteFrame = this.selectedChildTab == i ? this.sprTabActive : this.sprTabNormal;
            }
        };
        PopupThanhDu.prototype.loadData = function () {
            var _this = this;
            App_1.default.instance.showLoading(true);
            var typeTop = this.selectedChildTab === 0 ? 1 : 0;
            var date = this.selectedTab === 0 ? Utils_1.default.dateToYYYYMMdd(this.date) : Utils_1.default.dateToYYYYMM(this.date);
            this.lblDate.string = date;
            var params = this.selectedTab === 0 ? { "c": 103, "date": date, "type": typeTop, "txType": 1 } : { "c": 103, "month": date, "type": typeTop, "txType": 1 };
            Http_1.default.get(Configs_1.default.App.API, params, function (err, res) {
                App_1.default.instance.showLoading(false);
                if (err != null)
                    return;
                if (!res["success"])
                    return;
                if (_this.items.length == 0) {
                    for (var i = 0; i < 10; i++) {
                        var item = cc.instantiate(_this.itemTemplate);
                        item.parent = _this.itemTemplate.parent;
                        _this.items.push(item);
                    }
                    _this.itemTemplate.destroy();
                    _this.itemTemplate = null;
                }
                for (var i_1 = 0; i_1 < _this.items.length; i_1++) {
                    var item = _this.items[i_1];
                    if (i_1 < res["results"].length) {
                        var itemData = res["results"][i_1];
                        item.getChildByName("bg").opacity = i_1 % 2 == 0 ? 10 : 0;
                        item.getChildByName("no").getComponent(cc.Label).string = (i_1 + 1).toString();
                        item.getChildByName("account").getComponent(cc.Label).string = itemData["username"];
                        item.getChildByName("count").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["number"]);
                        item.getChildByName("winlose").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["totalMoney"]);
                        item.getChildByName("session").getComponent(cc.Label).string = "#" + itemData["referenceId"];
                        item.getChildByName("award").getComponent(cc.Label).string = itemData["prize"];
                        item.active = true;
                    }
                    else {
                        item.active = false;
                    }
                }
            });
        };
        __decorate([
            property(cc.SpriteFrame)
        ], PopupThanhDu.prototype, "sprTabNormal", void 0);
        __decorate([
            property(cc.SpriteFrame)
        ], PopupThanhDu.prototype, "sprTabActive", void 0);
        __decorate([
            property(cc.Node)
        ], PopupThanhDu.prototype, "tabs", void 0);
        __decorate([
            property(cc.Node)
        ], PopupThanhDu.prototype, "childTabs", void 0);
        __decorate([
            property(cc.Node)
        ], PopupThanhDu.prototype, "itemTemplate", void 0);
        __decorate([
            property(cc.Label)
        ], PopupThanhDu.prototype, "lblDate", void 0);
        PopupThanhDu = __decorate([
            ccclass
        ], PopupThanhDu);
        return PopupThanhDu;
    }(Dialog_1.default));
    taixiumini.PopupThanhDu = PopupThanhDu;
})(taixiumini || (taixiumini = {}));
exports.default = taixiumini.PopupThanhDu;

cc._RF.pop();