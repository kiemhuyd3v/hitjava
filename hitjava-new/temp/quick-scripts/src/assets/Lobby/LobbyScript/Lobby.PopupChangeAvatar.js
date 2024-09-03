"use strict";
cc._RF.push(module, '1e068IDVrtHA7QukHeOfngS', 'Lobby.PopupChangeAvatar');
// Lobby/LobbyScript/Lobby.PopupChangeAvatar.ts

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
var Http_1 = require("../../Loading/src/Http");
var App_1 = require("./Script/common/App");
var BroadcastReceiver_1 = require("./Script/common/BroadcastReceiver");
var Dialog_1 = require("./Script/common/Dialog");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupChangeAvatar = /** @class */ (function (_super) {
    __extends(PopupChangeAvatar, _super);
    function PopupChangeAvatar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.items = null;
        _this.itemTemplate = null;
        _this.selectedIdx = -1;
        return _this;
    }
    PopupChangeAvatar.prototype.start = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var item = cc.instantiate(this_1.itemTemplate);
            item.parent = this_1.items;
            item.getChildByName("sprite").getComponent(cc.Sprite).spriteFrame = App_1.default.instance.sprFrameAvatars[i];
            item.name = App_1.default.instance.sprFrameAvatars[i].name;
            item.on("click", function () {
                _this.selectedIdx = i;
                _this.actSubmit();
            });
            this_1.selectedIdx = i;
        };
        var this_1 = this;
        for (var i = 0; i < App_1.default.instance.sprFrameAvatars.length; i++) {
            _loop_1(i);
        }
        // this.itemTemplate.removeFromParent();
        // this.itemTemplate = null;
    };
    PopupChangeAvatar.prototype.show = function () {
        ////Utils.Log("vao day ha aaaa:" + this.name);
        _super.prototype.show.call(this);
        this.selectedIdx = -1;
        if (this.itemTemplate == null) {
            for (var i = 0; i < this.items.childrenCount; i++) {
                var item = this.items.children[i];
                if (item.name == Configs_1.default.Login.Avatar) {
                    this.selectedIdx = i;
                    item.getChildByName("selected").active = true;
                }
                else {
                    item.getChildByName("selected").active = false;
                }
            }
        }
    };
    PopupChangeAvatar.prototype.actSubmit = function () {
        var _this = this;
        Http_1.default.get(Configs_1.default.App.API, { "c": 125, "nn": Configs_1.default.Login.Nickname, "avatar": App_1.default.instance.sprFrameAvatars[this.selectedIdx].name }, function (err, res) {
            if (err != null) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_error'));
                return;
            }
            if (!res["success"]) {
                switch (res["errorCode"]) {
                    default:
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_unknown_error") + "\n" + res["errorCode"]);
                        break;
                }
                return;
            }
            _this.dismiss();
            Configs_1.default.Login.Avatar = App_1.default.instance.sprFrameAvatars[_this.selectedIdx].name;
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_INFO_UPDATED);
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_action_success'));
        });
    };
    __decorate([
        property(cc.Node)
    ], PopupChangeAvatar.prototype, "items", void 0);
    __decorate([
        property(cc.Node)
    ], PopupChangeAvatar.prototype, "itemTemplate", void 0);
    PopupChangeAvatar = __decorate([
        ccclass
    ], PopupChangeAvatar);
    return PopupChangeAvatar;
}(Dialog_1.default));
exports.default = PopupChangeAvatar;

cc._RF.pop();