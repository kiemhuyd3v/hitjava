
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TaiXiuDouble/TaiXiuScript/TaiXiu2/TaiXiuMini2.PanelChat.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGFpWGl1RG91YmxlXFxUYWlYaXVTY3JpcHRcXFRhaVhpdTJcXFRhaVhpdU1pbmkyLlBhbmVsQ2hhdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBb0M7QUFDcEMsdUZBQXVFO0FBQ3ZFLHdEQUFtRDtBQUNuRCxnR0FBMkY7QUFFckYsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBVSxVQUFVLENBMEVuQjtBQTFFRCxXQUFVLFVBQVU7SUFFaEI7UUFBK0IsNkJBQVk7UUFBM0M7WUFBQSxxRUF1RUM7WUFwRUcsc0JBQWdCLEdBQVksSUFBSSxDQUFDO1lBRWpDLGdCQUFVLEdBQWtCLElBQUksQ0FBQztZQUVqQyxnQkFBVSxHQUFlLElBQUksQ0FBQzs7UUFnRWxDLENBQUM7UUE5REcseUJBQUssR0FBTDtZQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pDLENBQUM7UUFFRCx3QkFBSSxHQUFKLFVBQUssTUFBZTtZQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDMUIsSUFBSSxNQUFNLEVBQUU7Z0JBQ1IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDNUQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztpQkFDdkI7Z0JBQ0QsMEJBQWdCLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUkseUJBQUcsQ0FBQyxjQUFj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Q0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFFRCxrQ0FBYyxHQUFkO1lBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEMsQ0FBQztRQW5FRDtZQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJEQUNlO1FBRWpDO1lBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7cURBQ1M7UUFFakM7WUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztxREFDUztRQVByQixTQUFTO1lBRHJCLE9BQU87V0FDSyxTQUFTLENBdUVyQjtRQUFELGdCQUFDO0tBdkVELEFBdUVDLENBdkU4QixFQUFFLENBQUMsU0FBUyxHQXVFMUM7SUF2RVksb0JBQVMsWUF1RXJCLENBQUE7QUFDTCxDQUFDLEVBMUVTLFVBQVUsS0FBVixVQUFVLFFBMEVuQjtBQUNELGtCQUFlLFVBQVUsQ0FBQyxTQUFTLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY21kIGZyb20gXCIuL1RhaVhpdU1pbmkyLkNtZFwiO1xuaW1wb3J0IFRhaVhpdU1pbmkyQ29udHJvbGxlciBmcm9tIFwiLi9UYWlYaXVNaW5pMi5UYWlYaXVNaW5pQ29udHJvbGxlclwiO1xuaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBUWDJOZXR3b3JrQ2xpZW50IGZyb20gXCIuLi8uLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvVFgyTmV0d29ya0NsaWVudFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5uYW1lc3BhY2UgdGFpeGl1bWluaSB7XG4gICAgQGNjY2xhc3NcbiAgICBleHBvcnQgY2xhc3MgUGFuZWxDaGF0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgICAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAgICAgaXRlbUNoYXRUZW1wbGF0ZTogY2MuTm9kZSA9IG51bGw7XG4gICAgICAgIEBwcm9wZXJ0eShjYy5TY3JvbGxWaWV3KVxuICAgICAgICBzY3JNZXNzYWdlOiBjYy5TY3JvbGxWaWV3ID0gbnVsbDtcbiAgICAgICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgICAgIGVkYk1lc3NhZ2U6IGNjLkVkaXRCb3ggPSBudWxsO1xuXG4gICAgICAgIHN0YXJ0KCkge1xuICAgICAgICAgICAgdGhpcy5pdGVtQ2hhdFRlbXBsYXRlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgc2hvdyhpc1Nob3c6IGJvb2xlYW4pIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBpc1Nob3c7XG4gICAgICAgICAgICBpZiAoaXNTaG93KSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNjck1lc3NhZ2UuY29udGVudC5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnNjck1lc3NhZ2UuY29udGVudC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgVFgyTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kU2NyaWJlQ2hhdCgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVFgyTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kVW5TY3JpYmVDaGF0KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYWRkTWVzc2FnZShuaWNrbmFtZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIGxldCBpdGVtOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zY3JNZXNzYWdlLmNvbnRlbnQuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnNjck1lc3NhZ2UuY29udGVudC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGUuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBub2RlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXRlbSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2NyTWVzc2FnZS5jb250ZW50LmNoaWxkcmVuQ291bnQgPj0gNTApIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMuc2NyTWVzc2FnZS5jb250ZW50LmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1DaGF0VGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB6SW5kZXggPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNjck1lc3NhZ2UuY29udGVudC5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuc2NyTWVzc2FnZS5jb250ZW50LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIGlmIChub2RlICE9IGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS56SW5kZXggPSB6SW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMuc2NyTWVzc2FnZS5jb250ZW50O1xuICAgICAgICAgICAgbGV0IGxibE5pY2tuYW1lOiBjYy5MYWJlbCA9IGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJsYmxOaWNrbmFtZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgbGJsTmlja25hbWUuc3RyaW5nID0gbmlja25hbWU7XG4gICAgICAgICAgICBsYmxOaWNrbmFtZS5ub2RlLmNvbG9yID0gbmlja25hbWUgPT0gQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSA/IGNjLkNvbG9yLldISVRFLmZyb21IRVgoXCIjM0RGRjAwXCIpIDogY2MuQ29sb3IuV0hJVEUuZnJvbUhFWChcIiNGRkMyMDBcIik7XG4gICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibGJsTWVzc2FnZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IG1lc3NhZ2U7XG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBpdGVtLnpJbmRleCA9IHpJbmRleCsrO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0JvdHRvbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VuZENoYXQoKSB7XG4gICAgICAgICAgICBsZXQgbXNnID0gdGhpcy5lZGJNZXNzYWdlLnN0cmluZy50cmltKCk7XG4gICAgICAgICAgICBpZiAobXNnLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lZGJNZXNzYWdlLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICBUYWlYaXVNaW5pMkNvbnRyb2xsZXIuaW5zdGFuY2Uuc2VuZENoYXQobXNnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNjcm9sbFRvQm90dG9tKCkge1xuICAgICAgICAgICAgdGhpcy5zY3JNZXNzYWdlLnNjcm9sbFRvQm90dG9tKDAuMik7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCB0YWl4aXVtaW5pLlBhbmVsQ2hhdDtcbiJdfQ==