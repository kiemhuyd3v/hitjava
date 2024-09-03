"use strict";
cc._RF.push(module, '8d521L9urFJc4VOfBC2Su3w', 'TaiXiuMD5.PopupHistory');
// TaiXiuMD5/TaiXiuScript/TaiXiu1/TaiXiuMD5.PopupHistory.ts

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
    var PopupHistory = /** @class */ (function (_super) {
        __extends(PopupHistory, _super);
        function PopupHistory() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.lblPage = null;
            _this.itemTemplate = null;
            _this.page = 1;
            _this.maxPage = 1;
            _this.items = new Array();
            return _this;
        }
        PopupHistory.prototype.show = function () {
            _super.prototype.show.call(this);
            for (var i = 0; i < this.items.length; i++) {
                this.items[i].active = false;
            }
            if (this.itemTemplate != null)
                this.itemTemplate.active = false;
        };
        PopupHistory.prototype.dismiss = function () {
            _super.prototype.dismiss.call(this);
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
        PopupHistory.prototype.loadData = function () {
            var _this = this;
            App_1.default.instance.showLoading(true);
            Http_1.default.get(Configs_1.default.App.API, { "c": 100, "p": this.page, "un": Configs_1.default.Login.Nickname, "mt": Configs_1.default.App.MONEY_TYPE, "txType": 1 }, function (err, res) {
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
                _this.maxPage = res["totalPages"];
                _this.lblPage.string = _this.page + "/" + _this.maxPage;
                for (var i_1 = 0; i_1 < _this.items.length; i_1++) {
                    var item = _this.items[i_1];
                    if (i_1 < res["transactions"].length) {
                        var itemData = res["transactions"][i_1];
                        item.getChildByName("bg").opacity = i_1 % 2 == 0 ? 10 : 0;
                        item.getChildByName("lblSession").getComponent(cc.Label).string = "#" + itemData["referenceId"];
                        item.getChildByName("lblTime").getComponent(cc.Label).string = itemData["timestamp"];
                        item.getChildByName("lblBetDoor").getComponent(cc.Label).string = itemData["betSide"] == 1 ? "TÀI" : "XỈU";
                        item.getChildByName("lblResult").getComponent(cc.Label).string = itemData["resultPhien"];
                        item.getChildByName("lblBet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["betValue"]);
                        item.getChildByName("lblRefund").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["totalRefund"]);
                        item.getChildByName("lblWin").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["totalPrize"]);
                        item.active = true;
                    }
                    else {
                        item.active = false;
                    }
                }
            });
        };
        __decorate([
            property(cc.Label)
        ], PopupHistory.prototype, "lblPage", void 0);
        __decorate([
            property(cc.Node)
        ], PopupHistory.prototype, "itemTemplate", void 0);
        PopupHistory = __decorate([
            ccclass
        ], PopupHistory);
        return PopupHistory;
    }(Dialog_1.default));
    taixiumini.PopupHistory = PopupHistory;
})(taixiumini || (taixiumini = {}));
exports.default = taixiumini.PopupHistory;

cc._RF.pop();