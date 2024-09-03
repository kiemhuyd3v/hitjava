"use strict";
cc._RF.push(module, '38940TLa9dJ/pYJhfgQ/lSZ', 'Lobby.PopupEventLogin');
// Lobby/LobbyScript/Lobby.PopupEventLogin.ts

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
var App_1 = require("./Script/common/App");
var Dialog_1 = require("./Script/common/Dialog");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupEventLogin = /** @class */ (function (_super) {
    __extends(PopupEventLogin, _super);
    function PopupEventLogin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemTemplate = null;
        return _this;
    }
    PopupEventLogin.prototype.show = function () {
        _super.prototype.show.call(this);
        // for (let i = 0; i < this.itemTemplate.parent.childrenCount; i++) {
        //     this.itemTemplate.parent.children[i].active = false;
        // }
    };
    PopupEventLogin.prototype.dismiss = function () {
        _super.prototype.dismiss.call(this);
        // for (let i = 0; i < this.itemTemplate.parent.childrenCount; i++) {
        //     this.itemTemplate.parent.children[i].active = false;
        // }
    };
    PopupEventLogin.prototype._onShowed = function () {
        _super.prototype._onShowed.call(this);
        // this.loadData();
    };
    PopupEventLogin.prototype.getItem = function () {
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
    // sau sẽ load sựu kiện từ s
    PopupEventLogin.prototype.loadData = function () {
        // App.instance.showLoading(true);
        // Http.get(Configs.App.API, { "c": 401 }, (err, res) => {
        //     App.instance.showLoading(false);
        //     if (err != null) return;
        //     if (res["success"]) {
        //         for (let i = 0; i < res["transactions"].length; i++) {
        //             let itemData = res["transactions"][i];
        //             let nickname = itemData["nickName"];
        //             let item = this.getItem();
        //             item.getChildByName("bg").opacity = i % 2 == 0 ? 10 : 0;
        //             item.getChildByName("No.").getComponent(cc.Label).string = (i + 1).toString();
        //             item.getChildByName("Fullname").getComponent(cc.Label).string = itemData["fullName"];
        //             item.getChildByName("Nickname").getComponent(cc.Label).string = nickname;
        //             item.getChildByName("Phone").getComponent(cc.Label).string = itemData["mobile"];
        //             item.getChildByName("Phone").color = cc.Color.WHITE;
        //             item.getChildByName("Phone").off("click");
        //             if (itemData["mobile"] && itemData["mobile"].trim().length > 0 && itemData["mobile"].trim()[0] != "0") {
        //                 item.getChildByName("Phone").color = cc.Color.CYAN;
        //                 item.getChildByName("Phone").on("click", () => {
        //                     App.instance.openTelegram(itemData["mobile"]);
        //                 });
        //             }
        //             item.getChildByName("Address").getComponent(cc.Label).string = itemData["address"];
        //             item.getChildByName("BtnFacebook").off("click");
        //             item.getChildByName("BtnFacebook").on("click", () => {
        //                 cc.sys.openURL(itemData["facebook"]);
        //             });
        //             item.getChildByName("BtnTransfer").off("click");
        //             item.getChildByName("BtnTransfer").on("click", () => {
        //                 //App.instance.ShowAlertDialog("Tính năng đang tạm khóa");
        //                 App.instance.popupShop.showAndOpenTransfer(nickname);
        //             });
        //         }
        //     }
        // });
    };
    PopupEventLogin.prototype.actOpen = function () {
        App_1.default.instance.openTelegram(Configs_1.default.App.getLinkTelegram());
    };
    __decorate([
        property(cc.Node)
    ], PopupEventLogin.prototype, "itemTemplate", void 0);
    PopupEventLogin = __decorate([
        ccclass
    ], PopupEventLogin);
    return PopupEventLogin;
}(Dialog_1.default));
exports.default = PopupEventLogin;

cc._RF.pop();