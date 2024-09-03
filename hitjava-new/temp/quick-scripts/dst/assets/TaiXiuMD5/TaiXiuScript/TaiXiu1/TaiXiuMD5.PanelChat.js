
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TaiXiuMD5/TaiXiuScript/TaiXiu1/TaiXiuMD5.PanelChat.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7f43fy2/chJiJwpjIe0JNpP', 'TaiXiuMD5.PanelChat');
// TaiXiuMD5/TaiXiuScript/TaiXiu1/TaiXiuMD5.PanelChat.ts

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
var TaiXiuMD5_Cmd_1 = require("./TaiXiuMD5.Cmd");
var TaiXiuMD5_TaiXiuMiniController_1 = require("./TaiXiuMD5.TaiXiuMiniController");
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
                MiniGameNetworkClient_1.default.getInstance().send(new TaiXiuMD5_Cmd_1.default.SendScribeChat());
            }
            else {
                MiniGameNetworkClient_1.default.getInstance().send(new TaiXiuMD5_Cmd_1.default.SendUnScribeChat());
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
            lblNickname.node.color = nickname == Configs_1.default.Login.Nickname ? cc.Color.WHITE.fromHEX("#3DFF00") : cc.Color.WHITE.fromHEX("#FFC200");
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
            TaiXiuMD5_TaiXiuMiniController_1.default.instance.sendChat(msg);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGFpWGl1TUQ1XFxUYWlYaXVTY3JpcHRcXFRhaVhpdTFcXFRhaVhpdU1ENS5QYW5lbENoYXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQWtDO0FBQ2xDLG1GQUFvRTtBQUNwRSx3REFBbUQ7QUFDbkQsMEdBQXFHO0FBRS9GLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQVUsVUFBVSxDQWdGbkI7QUFoRkQsV0FBVSxVQUFVO0lBRWhCO1FBQStCLDZCQUFZO1FBQTNDO1lBQUEscUVBNkVDO1lBMUVHLHNCQUFnQixHQUFZLElBQUksQ0FBQztZQUVqQyxnQkFBVSxHQUFrQixJQUFJLENBQUM7WUFFakMsZ0JBQVUsR0FBZSxJQUFJLENBQUM7O1FBc0VsQyxDQUFDO1FBcEVHLHlCQUFLLEdBQUw7WUFBQSxpQkFRQztZQVBHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDdEMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxDQUFDO1lBQ0gscURBQXFEO1lBQ3JELHVCQUF1QjtZQUN2QixNQUFNO1FBQ1YsQ0FBQztRQUVELHdCQUFJLEdBQUosVUFBSyxNQUFlO1lBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUMxQixJQUFJLE1BQU0sRUFBRTtnQkFDUixvRUFBb0U7Z0JBQ3BFLHNEQUFzRDtnQkFDdEQsMkJBQTJCO2dCQUMzQixJQUFJO2dCQUNKLCtCQUFxQixDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLHVCQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQzth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QUcsQ0FBQyxDQUFDO1FBQ2hELENBQUM7UUFFRCxrQ0FBYyxHQUFkO1lBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEMsQ0FBQztRQXpFRDtZQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJEQUNlO1FBRWpDO1lBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7cURBQ1M7UUFFakM7WUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztxREFDUztRQVByQixTQUFTO1lBRHJCLE9BQU87V0FDSyxTQUFTLENBNkVyQjtRQUFELGdCQUFDO0tBN0VELEFBNkVDLENBN0U4QixFQUFFLENBQUMsU0FBUyxHQTZFMUM7SUE3RVksb0JBQVMsWUE2RXJCLENBQUE7QUFDTCxDQUFDLEVBaEZTLFVBQVUsS0FBVixVQUFVLFFBZ0ZuQjtBQUNELGtCQUFlLFVBQVUsQ0FBQyxTQUFTLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY21kIGZyb20gXCIuL1RhaVhpdU1ENS5DbWRcIjtcbmltcG9ydCBUYWlYaXVNaW5pQ29udHJvbGxlciBmcm9tIFwiLi9UYWlYaXVNRDUuVGFpWGl1TWluaUNvbnRyb2xsZXJcIjtcbmltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgTWluaUdhbWVOZXR3b3JrQ2xpZW50IGZyb20gXCIuLi8uLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvTWluaUdhbWVOZXR3b3JrQ2xpZW50XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbm5hbWVzcGFjZSB0YWl4aXVtaW5pIHtcbiAgICBAY2NjbGFzc1xuICAgIGV4cG9ydCBjbGFzcyBQYW5lbENoYXQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgICAgICBpdGVtQ2hhdFRlbXBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgICAgQHByb3BlcnR5KGNjLlNjcm9sbFZpZXcpXG4gICAgICAgIHNjck1lc3NhZ2U6IGNjLlNjcm9sbFZpZXcgPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICAgICAgZWRiTWVzc2FnZTogY2MuRWRpdEJveCA9IG51bGw7XG5cbiAgICAgICAgc3RhcnQoKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1DaGF0VGVtcGxhdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmVkYk1lc3NhZ2Uubm9kZS5vbihcImVkaXRpbmctcmV0dXJuXCIsICgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kQ2hhdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyB0aGlzLmVkYk1lc3NhZ2Uubm9kZS5vbihcImVkaXRpbmctZGlkLWVuZGVkXCIsICgpPT57XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zZW5kQ2hhdCgpO1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgIH1cblxuICAgICAgICBzaG93KGlzU2hvdzogYm9vbGVhbikge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGlzU2hvdztcbiAgICAgICAgICAgIGlmIChpc1Nob3cpIHtcbiAgICAgICAgICAgICAgICAvLyBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2NyTWVzc2FnZS5jb250ZW50LmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgbm9kZSA9IHRoaXMuc2NyTWVzc2FnZS5jb250ZW50LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIC8vICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZFNjcmliZUNoYXQoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kVW5TY3JpYmVDaGF0KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYWRkTWVzc2FnZShuaWNrbmFtZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIGxldCBpdGVtOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zY3JNZXNzYWdlLmNvbnRlbnQuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnNjck1lc3NhZ2UuY29udGVudC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGUuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBub2RlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXRlbSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2NyTWVzc2FnZS5jb250ZW50LmNoaWxkcmVuQ291bnQgPj0gNTApIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMuc2NyTWVzc2FnZS5jb250ZW50LmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1DaGF0VGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB6SW5kZXggPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNjck1lc3NhZ2UuY29udGVudC5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuc2NyTWVzc2FnZS5jb250ZW50LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIGlmIChub2RlICE9IGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS56SW5kZXggPSB6SW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMuc2NyTWVzc2FnZS5jb250ZW50O1xuICAgICAgICAgICAgbGV0IGxibE5pY2tuYW1lOiBjYy5MYWJlbCA9IGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJsYmxOaWNrbmFtZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgbGJsTmlja25hbWUuc3RyaW5nID0gYCR7bmlja25hbWV9OmA7XG4gICAgICAgICAgICBsYmxOaWNrbmFtZS5ub2RlLmNvbG9yID0gbmlja25hbWUgPT0gQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSA/IGNjLkNvbG9yLldISVRFLmZyb21IRVgoXCIjM0RGRjAwXCIpIDogY2MuQ29sb3IuV0hJVEUuZnJvbUhFWChcIiNGRkMyMDBcIik7XG4gICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYCR7bmlja25hbWV9OiAke21lc3NhZ2V9YDtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGl0ZW0uekluZGV4ID0gekluZGV4Kys7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvQm90dG9tKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZW5kQ2hhdCgpIHtcbiAgICAgICAgICAgIGxldCBtc2cgPSB0aGlzLmVkYk1lc3NhZ2Uuc3RyaW5nLnRyaW0oKTtcbiAgICAgICAgICAgIGlmIChtc2cubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVkYk1lc3NhZ2Uuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgIFRhaVhpdU1pbmlDb250cm9sbGVyLmluc3RhbmNlLnNlbmRDaGF0KG1zZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzY3JvbGxUb0JvdHRvbSgpIHtcbiAgICAgICAgICAgIHRoaXMuc2NyTWVzc2FnZS5zY3JvbGxUb0JvdHRvbSgwLjIpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgdGFpeGl1bWluaS5QYW5lbENoYXQ7XG4iXX0=