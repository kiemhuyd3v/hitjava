"use strict";
cc._RF.push(module, 'dbd49yYsz1BmZQ6ZieAMc2B', 'OanTuTi.PopupHonors');
// OanTuTi/OanTuTiScript/OanTuTi.PopupHonors.ts

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
var Configs_1 = require("../../Loading/src/Configs");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var Dialogz_1 = require("../../Lobby/LobbyScript/Script/common/Dialogz");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var ShootFishNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/ShootFishNetworkClient");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupHonors = /** @class */ (function (_super) {
    __extends(PopupHonors, _super);
    function PopupHonors() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lblPage = null;
        _this.itemTemplate = null;
        _this.page = 1;
        _this.maxPage = 1;
        _this.items = new Array();
        _this.data = null;
        return _this;
    }
    PopupHonors.prototype.show = function () {
        _super.prototype.show.call(this);
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
        this.page = 1;
        this.maxPage = 1;
        this.lblPage.string = this.page + "/" + this.maxPage;
        this.loadData();
    };
    PopupHonors.prototype.actNextPage = function () {
        if (this.page < this.maxPage) {
            this.page++;
            this.lblPage.string = this.page + "/" + this.maxPage;
            this.loadDataLocal();
        }
    };
    PopupHonors.prototype.actPrevPage = function () {
        if (this.page > 1) {
            this.page--;
            this.lblPage.string = this.page + "/" + this.maxPage;
            this.loadDataLocal();
        }
    };
    PopupHonors.prototype.loadData = function () {
        var _this = this;
        App_1.default.instance.showLoading(true);
        ShootFishNetworkClient_1.default.getInstance().request("OTT4", {
            "userId": Configs_1.default.Login.UserIdFish
        }, function (res) {
            //   console.log(res);
            App_1.default.instance.showLoading(false);
            if (res["code"] != 200)
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
            _this.data = res["data"];
            _this.maxPage = Math.ceil(_this.data.length / 10);
            _this.page = 1;
            _this.loadDataLocal();
        }, this);
    };
    PopupHonors.prototype.loadDataLocal = function () {
        if (this.data == null)
            return;
        this.lblPage.string = this.page + "/" + this.maxPage;
        var startIdx = (this.page - 1) * 10;
        var count = 10;
        if (startIdx + count > this.data.length)
            count = this.data.length - startIdx;
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            if (i < count) {
                var itemData = this.data[startIdx + i];
                item.getChildByName("bg").opacity = i % 2 == 0 ? 10 : 0;
                item.getChildByName("Time").getComponent(cc.Label).string = itemData["GameTime"];
                item.getChildByName("Bet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["Blind"]);
                item.getChildByName("Player").getComponent(cc.Label).string = itemData["Nickname1"];
                item.getChildByName("Choice").getComponent(cc.Label).string = this.getChoiceName(itemData["Choice1"]);
                item.getChildByName("OtherPlayer").getComponent(cc.Label).string = itemData["Nickname2"];
                item.getChildByName("OtherChoice").getComponent(cc.Label).string = this.getChoiceName(itemData["Choice2"]);
                item.getChildByName("Receive").getComponent(cc.Label).string = itemData["CashChange1"] > itemData["CashChange2"] ? Utils_1.default.formatNumber(itemData["CashChange1"]) : Utils_1.default.formatNumber(itemData["CashChange2"]);
                item.active = true;
            }
            else {
                item.active = false;
            }
        }
    };
    //selectValue: 0: kéo, 1: bao, 2: búa
    PopupHonors.prototype.getChoiceName = function (choice) {
        switch (choice) {
            case 0:
                return "Kéo";
            case 1:
                return "Bao";
            case 2:
                return "Búa";
        }
    };
    __decorate([
        property(cc.Label)
    ], PopupHonors.prototype, "lblPage", void 0);
    __decorate([
        property(cc.Node)
    ], PopupHonors.prototype, "itemTemplate", void 0);
    PopupHonors = __decorate([
        ccclass
    ], PopupHonors);
    return PopupHonors;
}(Dialogz_1.default));
exports.default = PopupHonors;

cc._RF.pop();