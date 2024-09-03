
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TaiXiuDouble/TaiXiuScript/TaiXiu1/TaiXiuMini.PanelChat.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '23cbfa2B/ZCQJ2RCPuC+7ry', 'TaiXiuMini.PanelChat');
// TaiXiuDouble/TaiXiuScript/TaiXiu1/TaiXiuMini.PanelChat.ts

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
var TaiXiuMini_Cmd_1 = require("./TaiXiuMini.Cmd");
var TaiXiuMini_TaiXiuMiniController_1 = require("./TaiXiuMini.TaiXiuMiniController");
var Configs_1 = require("../../../Loading/src/Configs");
var MiniGameNetworkClient_1 = require("../../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient");
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
            var _this = this;
            this.itemChatTemplate.active = false;
            this.edbMessage.node.on("editing-return", function () {
                _this.sendChat();
            });
            // this.edbMessage.node.on("editing-did-ended", ()=>{
            //     this.sendChat();
            // });
        };
        PanelChat.prototype.show = function (isShow) {
            this.node.active = isShow;
            if (isShow) {
                // for (var i = 0; i < this.scrMessage.content.childrenCount; i++) {
                //     let node = this.scrMessage.content.children[i];
                //     node.active = false;
                // }
                MiniGameNetworkClient_1.default.getInstance().send(new TaiXiuMini_Cmd_1.default.SendScribeChat());
            }
            else {
                MiniGameNetworkClient_1.default.getInstance().send(new TaiXiuMini_Cmd_1.default.SendUnScribeChat());
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
            lblNickname.string = nickname + ":";
            lblNickname.node.color = nickname == Configs_1.default.Login.Nickname ? cc.Color.WHITE.fromHEX("#3bff49") : cc.Color.WHITE.fromHEX("#f7da38");
            item.getComponent(cc.Label).string = nickname + ": " + message;
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
            TaiXiuMini_TaiXiuMiniController_1.default.instance.sendChat(msg);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGFpWGl1RG91YmxlXFxUYWlYaXVTY3JpcHRcXFRhaVhpdTFcXFRhaVhpdU1pbmkuUGFuZWxDaGF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFtQztBQUNuQyxxRkFBcUU7QUFDckUsd0RBQW1EO0FBQ25ELDBHQUFxRztBQUUvRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFVLFVBQVUsQ0FnRm5CO0FBaEZELFdBQVUsVUFBVTtJQUVoQjtRQUErQiw2QkFBWTtRQUEzQztZQUFBLHFFQTZFQztZQTFFRyxzQkFBZ0IsR0FBWSxJQUFJLENBQUM7WUFFakMsZ0JBQVUsR0FBa0IsSUFBSSxDQUFDO1lBRWpDLGdCQUFVLEdBQWUsSUFBSSxDQUFDOztRQXNFbEMsQ0FBQztRQXBFRyx5QkFBSyxHQUFMO1lBQUEsaUJBUUM7WUFQRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNyQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3RDLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNwQixDQUFDLENBQUMsQ0FBQztZQUNILHFEQUFxRDtZQUNyRCx1QkFBdUI7WUFDdkIsTUFBTTtRQUNWLENBQUM7UUFFRCx3QkFBSSxHQUFKLFVBQUssTUFBZTtZQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDMUIsSUFBSSxNQUFNLEVBQUU7Z0JBQ1Isb0VBQW9FO2dCQUNwRSxzREFBc0Q7Z0JBQ3RELDJCQUEyQjtnQkFDM0IsSUFBSTtnQkFDSiwrQkFBcUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSx3QkFBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLENB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QyxHQUFHLENBQUMsQ0FBQztRQUNoRCxDQUFDO1FBRUQsa0NBQWMsR0FBZDtZQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUF6RUQ7WUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyREFDZTtRQUVqQztZQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDO3FEQUNTO1FBRWpDO1lBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7cURBQ1M7UUFQckIsU0FBUztZQURyQixPQUFPO1dBQ0ssU0FBUyxDQTZFckI7UUFBRCxnQkFBQztLQTdFRCxBQTZFQyxDQTdFOEIsRUFBRSxDQUFDLFNBQVMsR0E2RTFDO0lBN0VZLG9CQUFTLFlBNkVyQixDQUFBO0FBQ0wsQ0FBQyxFQWhGUyxVQUFVLEtBQVYsVUFBVSxRQWdGbkI7QUFDRCxrQkFBZSxVQUFVLENBQUMsU0FBUyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNtZCBmcm9tIFwiLi9UYWlYaXVNaW5pLkNtZFwiO1xuaW1wb3J0IFRhaVhpdU1pbmlDb250cm9sbGVyIGZyb20gXCIuL1RhaVhpdU1pbmkuVGFpWGl1TWluaUNvbnRyb2xsZXJcIjtcbmltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgTWluaUdhbWVOZXR3b3JrQ2xpZW50IGZyb20gXCIuLi8uLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvTWluaUdhbWVOZXR3b3JrQ2xpZW50XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbm5hbWVzcGFjZSB0YWl4aXVtaW5pIHtcbiAgICBAY2NjbGFzc1xuICAgIGV4cG9ydCBjbGFzcyBQYW5lbENoYXQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgICAgICBpdGVtQ2hhdFRlbXBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgICAgQHByb3BlcnR5KGNjLlNjcm9sbFZpZXcpXG4gICAgICAgIHNjck1lc3NhZ2U6IGNjLlNjcm9sbFZpZXcgPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICAgICAgZWRiTWVzc2FnZTogY2MuRWRpdEJveCA9IG51bGw7XG5cbiAgICAgICAgc3RhcnQoKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1DaGF0VGVtcGxhdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmVkYk1lc3NhZ2Uubm9kZS5vbihcImVkaXRpbmctcmV0dXJuXCIsICgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kQ2hhdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyB0aGlzLmVkYk1lc3NhZ2Uubm9kZS5vbihcImVkaXRpbmctZGlkLWVuZGVkXCIsICgpPT57XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zZW5kQ2hhdCgpO1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgIH1cblxuICAgICAgICBzaG93KGlzU2hvdzogYm9vbGVhbikge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGlzU2hvdztcbiAgICAgICAgICAgIGlmIChpc1Nob3cpIHtcbiAgICAgICAgICAgICAgICAvLyBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2NyTWVzc2FnZS5jb250ZW50LmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgbm9kZSA9IHRoaXMuc2NyTWVzc2FnZS5jb250ZW50LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIC8vICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZFNjcmliZUNoYXQoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kVW5TY3JpYmVDaGF0KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYWRkTWVzc2FnZShuaWNrbmFtZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIGxldCBpdGVtOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zY3JNZXNzYWdlLmNvbnRlbnQuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnNjck1lc3NhZ2UuY29udGVudC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGUuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBub2RlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXRlbSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2NyTWVzc2FnZS5jb250ZW50LmNoaWxkcmVuQ291bnQgPj0gNTApIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMuc2NyTWVzc2FnZS5jb250ZW50LmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1DaGF0VGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB6SW5kZXggPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNjck1lc3NhZ2UuY29udGVudC5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuc2NyTWVzc2FnZS5jb250ZW50LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIGlmIChub2RlICE9IGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS56SW5kZXggPSB6SW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMuc2NyTWVzc2FnZS5jb250ZW50O1xuICAgICAgICAgICAgbGV0IGxibE5pY2tuYW1lOiBjYy5MYWJlbCA9IGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJsYmxOaWNrbmFtZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgbGJsTmlja25hbWUuc3RyaW5nID0gYCR7bmlja25hbWV9OmA7XG4gICAgICAgICAgICBsYmxOaWNrbmFtZS5ub2RlLmNvbG9yID0gbmlja25hbWUgPT0gQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSA/IGNjLkNvbG9yLldISVRFLmZyb21IRVgoXCIjM2JmZjQ5XCIpIDogY2MuQ29sb3IuV0hJVEUuZnJvbUhFWChcIiNmN2RhMzhcIik7XG4gICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYCR7bmlja25hbWV9OiAke21lc3NhZ2V9YDtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGl0ZW0uekluZGV4ID0gekluZGV4Kys7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvQm90dG9tKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZW5kQ2hhdCgpIHtcbiAgICAgICAgICAgIGxldCBtc2cgPSB0aGlzLmVkYk1lc3NhZ2Uuc3RyaW5nLnRyaW0oKTtcbiAgICAgICAgICAgIGlmIChtc2cubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVkYk1lc3NhZ2Uuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgIFRhaVhpdU1pbmlDb250cm9sbGVyLmluc3RhbmNlLnNlbmRDaGF0KG1zZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzY3JvbGxUb0JvdHRvbSgpIHtcbiAgICAgICAgICAgIHRoaXMuc2NyTWVzc2FnZS5zY3JvbGxUb0JvdHRvbSgwLjIpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgdGFpeGl1bWluaS5QYW5lbENoYXQ7XG4iXX0=