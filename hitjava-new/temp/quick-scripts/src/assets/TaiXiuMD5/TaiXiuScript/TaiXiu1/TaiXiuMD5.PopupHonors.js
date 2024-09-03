"use strict";
cc._RF.push(module, '9cfee6LNFFGQbgMsj9+Dkqn', 'TaiXiuMD5.PopupHonors');
// TaiXiuMD5/TaiXiuScript/TaiXiu1/TaiXiuMD5.PopupHonors.ts

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
    var PopupHonors = /** @class */ (function (_super) {
        __extends(PopupHonors, _super);
        function PopupHonors() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.itemTemplate = null;
            _this.items = new Array();
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
            this.loadData();
        };
        PopupHonors.prototype.loadData = function () {
            var _this = this;
            App_1.default.instance.showLoading(true);
            Http_1.default.get(Configs_1.default.App.API, { "c": 101, "mt": Configs_1.default.App.MONEY_TYPE, "txType": 1, "md5": 1 }, function (err, res) {
                App_1.default.instance.showLoading(false);
                if (err != null)
                    return;
                if (res["success"]) {
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
                        if (i_1 < res["topTX"].length) {
                            var itemData = res["topTX"][i_1];
                            item.getChildByName("bg").opacity = i_1 % 2 == 0 ? 10 : 0;
                            item.getChildByName("lblRank").getComponent(cc.Label).string = (i_1 + 1).toString();
                            item.getChildByName("lblAccount").getComponent(cc.Label).string = itemData["username"];
                            item.getChildByName("lblWin").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["money"]);
                            item.active = true;
                        }
                        else {
                            item.active = false;
                        }
                    }
                }
            });
        };
        __decorate([
            property(cc.Node)
        ], PopupHonors.prototype, "itemTemplate", void 0);
        PopupHonors = __decorate([
            ccclass
        ], PopupHonors);
        return PopupHonors;
    }(Dialog_1.default));
    taixiumini.PopupHonors = PopupHonors;
})(taixiumini || (taixiumini = {}));
exports.default = taixiumini.PopupHonors;

cc._RF.pop();