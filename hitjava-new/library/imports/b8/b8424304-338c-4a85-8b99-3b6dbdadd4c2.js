"use strict";
cc._RF.push(module, 'b8424MEM4xKhYuZO229rdTC', 'Lobby.BannerList');
// Lobby/LobbyScript/Lobby.BannerList.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var Global_1 = require("../../Loading/src/Global");
var Http_1 = require("../../Loading/src/Http");
var App_1 = require("./Script/common/App");
var Utils_1 = require("./Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BannerList = /** @class */ (function (_super) {
    __extends(BannerList, _super);
    function BannerList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pageView = null;
        _this.itemPage = null;
        // LIFE-CYCLE CALLBACKS:
        _this.intervalBanner = null;
        _this.dataPage = null;
        _this.indexPage = 0;
        return _this;
        // update (dt) {}
    }
    BannerList.prototype.onLoad = function () {
    };
    BannerList.prototype.start = function () {
        this.getBanner();
    };
    BannerList.prototype.getBanner = function () {
        var _this = this;
        var data = {};
        data["c"] = 2020;
        Http_1.default.get(Configs_1.default.App.API, data, function (err, res) {
            if (res.success) {
                _this.loadListBanner(res.data);
            }
            else {
                App_1.default.instance.alertDialog.showMsg(res.message);
            }
        });
    };
    BannerList.prototype.loadListBanner = function (data) {
        var self = this;
        var dataBanner = [];
        data.forEach(function (element) {
            if (element.status == 1) {
                dataBanner.push(element);
            }
        });
        if (data.length != 0) {
            this.dataPage = data;
            for (var i = 0; i < dataBanner.length; i++) {
                var item = this.pageView.content.children[i];
                if (!item) {
                    item = cc.instantiate(this.itemPage);
                    this.pageView.addPage(item);
                }
                var url = dataBanner[i].image_path;
                Utils_1.default.loadImgFromUrl(item.getComponent(cc.Sprite), url);
            }
            this.intervalBanner = setInterval(function () {
                self.pageView.scrollToPage(self.indexPage, 0.5);
                self.indexPage++;
                if (self.indexPage >= self.dataPage.length) {
                    self.indexPage = 0;
                }
            }, 2000);
            Global_1.Global.LobbyController.updateSizeListGame(true);
        }
        else {
            Global_1.Global.LobbyController.updateSizeListGame(false);
        }
    };
    BannerList.prototype.onDestroy = function () {
        if (this.intervalBanner != null) {
            clearInterval(this.intervalBanner);
            this.intervalBanner = null;
        }
    };
    __decorate([
        property(cc.PageView)
    ], BannerList.prototype, "pageView", void 0);
    __decorate([
        property(cc.Node)
    ], BannerList.prototype, "itemPage", void 0);
    BannerList = __decorate([
        ccclass
    ], BannerList);
    return BannerList;
}(cc.Component));
exports.default = BannerList;

cc._RF.pop();