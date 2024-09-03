"use strict";
cc._RF.push(module, '565af9rmjtPBJKuHmINlkn1', 'Lobby.PopupCardInfo');
// Lobby/LobbyScript/Lobby.PopupCardInfo.ts

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
var Dialog_1 = require("./Script/common/Dialog");
var Utils_1 = require("./Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupCardInfo = /** @class */ (function (_super) {
    __extends(PopupCardInfo, _super);
    function PopupCardInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemFactorTemplate = null;
        _this.contentItem = null;
        _this._nodeTemplate = null;
        _this.tabSelectedIdx = 0;
        return _this;
    }
    PopupCardInfo.prototype.start = function () {
    };
    PopupCardInfo.prototype.setListItem = function (listItem) {
        var itemArray = JSON.parse(listItem);
        //let content = cc.instantiate(this.itemFactorTemplate).parent;
        if (this._nodeTemplate == null) {
            this._nodeTemplate = cc.instantiate(this.itemFactorTemplate);
            //this._nodeTemplate.parent =  this.itemFactorTemplate.parent
        }
        this.contentItem.removeAllChildren();
        for (var i = 0; i < itemArray.length; i++) {
            var node = cc.instantiate(this._nodeTemplate);
            node.parent = this.contentItem;
            node.active = true;
            node.getChildByName("stt").getComponent(cc.Label).string = (i + 1).toString();
            node.getChildByName("telcoName").getComponent(cc.Label).string = itemArray[i].Telco;
            node.getChildByName("amount").getComponent(cc.Label).string = Utils_1.default.formatNumber(Number(itemArray[i].Amount));
            node.getChildByName("pincode").getComponent(cc.Label).string = itemArray[i].PinCode;
            node.getChildByName("serial").getComponent(cc.Label).string = itemArray[i].Serial;
        }
        this.show();
    };
    PopupCardInfo.prototype.show = function () {
        _super.prototype.show.call(this);
    };
    __decorate([
        property(cc.Node)
    ], PopupCardInfo.prototype, "itemFactorTemplate", void 0);
    __decorate([
        property(cc.Node)
    ], PopupCardInfo.prototype, "contentItem", void 0);
    PopupCardInfo = __decorate([
        ccclass
    ], PopupCardInfo);
    return PopupCardInfo;
}(Dialog_1.default));
exports.default = PopupCardInfo;

cc._RF.pop();