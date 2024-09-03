"use strict";
cc._RF.push(module, '2dbf49rsjtAV4iXpLmxTexl', 'TaiXiuMini2.PanelChat');
// TaiXiuDouble/TaiXiuScript/TaiXiu2/TaiXiuMini2.PanelChat.ts

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
var TaiXiuMini2_Cmd_1 = require("./TaiXiuMini2.Cmd");
var TaiXiuMini2_TaiXiuMiniController_1 = require("./TaiXiuMini2.TaiXiuMiniController");
var Configs_1 = require("../../../Loading/src/Configs");
var TX2NetworkClient_1 = require("../../../Lobby/LobbyScript/Script/networks/TX2NetworkClient");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var taixiumini;
(function (taixiumini) {
    var PanelChat = /** @class */ (function (_super) {
        __extends(PanelChat, _super);
        function PanelChat() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.itemChatTemplate = null;
            _this.scrMessage = null;
            _this.edbMessage = null;
            return _this;
        }
        PanelChat.prototype.start = function () {
            this.itemChatTemplate.active = false;
        };
        PanelChat.prototype.show = function (isShow) {
            this.node.active = isShow;
            if (isShow) {
                for (var i = 0; i < this.scrMessage.content.childrenCount; i++) {
                    var node = this.scrMessage.content.children[i];
                    node.active = false;
                }
                TX2NetworkClient_1.default.getInstance().send(new TaiXiuMini2_Cmd_1.default.SendScribeChat());
            }
            else {
                TX2NetworkClient_1.default.getInstance().send(new TaiXiuMini2_Cmd_1.default.SendUnScribeChat());
            }
        };
        PanelChat.prototype.addMessage = function (nickname, message) {
            var item = null;
            for (var i = 0; i < this.scrMessage.content.childrenCount; i++) {
                var node = this.scrMessage.content.children[i];
                if (!node.active) {
                    item = node;
                    break;
                }
            }
            if (item == null) {
                if (this.scrMessage.content.childrenCount >= 50) {
                    item = this.scrMessage.content.children[0];
                }
                else {
                    item = cc.instantiate(this.itemChatTemplate);
                }
            }
            var zIndex = 0;
            for (var i = 0; i < this.scrMessage.content.childrenCount; i++) {
                var node = this.scrMessage.content.children[i];
                if (node != item) {
                    node.zIndex = zIndex++;
                }
            }
            item.parent = this.scrMessage.content;
            var lblNickname = item.getChildByName("lblNickname").getComponent(cc.Label);
            lblNickname.string = nickname;
            lblNickname.node.color = nickname == Configs_1.default.Login.Nickname ? cc.Color.WHITE.fromHEX("#3DFF00") : cc.Color.WHITE.fromHEX("#FFC200");
            item.getChildByName("lblMessage").getComponent(cc.Label).string = message;
            item.active = true;
            item.zIndex = zIndex++;
            this.scrollToBottom();
        };
        PanelChat.prototype.sendChat = function () {
            var msg = this.edbMessage.string.trim();
            if (msg.length == 0) {
                return;
            }
            this.edbMessage.string = "";
            TaiXiuMini2_TaiXiuMiniController_1.default.instance.sendChat(msg);
        };
        PanelChat.prototype.scrollToBottom = function () {
            this.scrMessage.scrollToBottom(0.2);
        };
        __decorate([
            property(cc.Node)
        ], PanelChat.prototype, "itemChatTemplate", void 0);
        __decorate([
            property(cc.ScrollView)
        ], PanelChat.prototype, "scrMessage", void 0);
        __decorate([
            property(cc.EditBox)
        ], PanelChat.prototype, "edbMessage", void 0);
        PanelChat = __decorate([
            ccclass
        ], PanelChat);
        return PanelChat;
    }(cc.Component));
    taixiumini.PanelChat = PanelChat;
})(taixiumini || (taixiumini = {}));
exports.default = taixiumini.PanelChat;

cc._RF.pop();