
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.PopupEventLogin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5Qb3B1cEV2ZW50TG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQWdEO0FBQ2hELDJDQUFzQztBQUN0QyxpREFBNEM7QUFHdEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNkMsbUNBQU07SUFBbkQ7UUFBQSxxRUFrRkM7UUFoRkcsa0JBQVksR0FBWSxJQUFJLENBQUM7O0lBZ0ZqQyxDQUFDO0lBOUVHLDhCQUFJLEdBQUo7UUFDSSxpQkFBTSxJQUFJLFdBQUUsQ0FBQztRQUNiLHFFQUFxRTtRQUNyRSwyREFBMkQ7UUFDM0QsSUFBSTtJQUNSLENBQUM7SUFFRCxpQ0FBTyxHQUFQO1FBQ0ksaUJBQU0sT0FBTyxXQUFFLENBQUM7UUFDaEIscUVBQXFFO1FBQ3JFLDJEQUEyRDtRQUMzRCxJQUFJO0lBQ1IsQ0FBQztJQUVELG1DQUFTLEdBQVQ7UUFDSSxpQkFBTSxTQUFTLFdBQUUsQ0FBQztRQUNuQixtQkFBbUI7SUFDdEIsQ0FBQztJQUVPLGlDQUFPLEdBQWY7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3RCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEQsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQzNDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ1osTUFBTTthQUNUO1NBQ0o7UUFDRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDZCxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztTQUMxQztRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCw0QkFBNEI7SUFDcEIsa0NBQVEsR0FBaEI7UUFDSSxrQ0FBa0M7UUFDbEMsMERBQTBEO1FBQzFELHVDQUF1QztRQUN2QywrQkFBK0I7UUFDL0IsNEJBQTRCO1FBQzVCLGlFQUFpRTtRQUNqRSxxREFBcUQ7UUFDckQsbURBQW1EO1FBQ25ELHlDQUF5QztRQUN6Qyx1RUFBdUU7UUFDdkUsNkZBQTZGO1FBQzdGLG9HQUFvRztRQUNwRyx3RkFBd0Y7UUFDeEYsK0ZBQStGO1FBQy9GLG1FQUFtRTtRQUNuRSx5REFBeUQ7UUFDekQsdUhBQXVIO1FBQ3ZILHNFQUFzRTtRQUN0RSxtRUFBbUU7UUFDbkUscUVBQXFFO1FBQ3JFLHNCQUFzQjtRQUN0QixnQkFBZ0I7UUFDaEIsa0dBQWtHO1FBQ2xHLCtEQUErRDtRQUMvRCxxRUFBcUU7UUFDckUsd0RBQXdEO1FBQ3hELGtCQUFrQjtRQUNsQiwrREFBK0Q7UUFDL0QscUVBQXFFO1FBQ3JFLDZFQUE2RTtRQUM3RSx3RUFBd0U7UUFDeEUsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixRQUFRO1FBQ1IsTUFBTTtJQUNWLENBQUM7SUFFTSxpQ0FBTyxHQUFkO1FBQ0ksYUFBRyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsaUJBQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBL0VEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eURBQ1c7SUFGWixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBa0ZuQztJQUFELHNCQUFDO0NBbEZELEFBa0ZDLENBbEY0QyxnQkFBTSxHQWtGbEQ7a0JBbEZvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBEaWFsb2cgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9EaWFsb2dcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBFdmVudExvZ2luIGV4dGVuZHMgRGlhbG9nIHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpdGVtVGVtcGxhdGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgc2hvdygpIHtcbiAgICAgICAgc3VwZXIuc2hvdygpO1xuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbVRlbXBsYXRlLnBhcmVudC5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgLy8gICAgIHRoaXMuaXRlbVRlbXBsYXRlLnBhcmVudC5jaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIGRpc21pc3MoKSB7XG4gICAgICAgIHN1cGVyLmRpc21pc3MoKTtcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1UZW1wbGF0ZS5wYXJlbnQuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgIC8vICAgICB0aGlzLml0ZW1UZW1wbGF0ZS5wYXJlbnQuY2hpbGRyZW5baV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBfb25TaG93ZWQoKSB7XG4gICAgICAgIHN1cGVyLl9vblNob3dlZCgpO1xuICAgICAgIC8vIHRoaXMubG9hZERhdGEoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEl0ZW0oKTogY2MuTm9kZSB7XG4gICAgICAgIGxldCBpdGVtID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1UZW1wbGF0ZS5wYXJlbnQuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuaXRlbVRlbXBsYXRlLnBhcmVudC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmIChub2RlICE9IHRoaXMuaXRlbVRlbXBsYXRlICYmICFub2RlLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSBub2RlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtID09IG51bGwpIHtcbiAgICAgICAgICAgIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1UZW1wbGF0ZSk7XG4gICAgICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMuaXRlbVRlbXBsYXRlLnBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cblxuICAgIC8vIHNhdSBz4bq9IGxvYWQgc+G7sXUga2nhu4duIHThu6sgc1xuICAgIHByaXZhdGUgbG9hZERhdGEoKSB7XG4gICAgICAgIC8vIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgLy8gSHR0cC5nZXQoQ29uZmlncy5BcHAuQVBJLCB7IFwiY1wiOiA0MDEgfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgIC8vICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAvLyAgICAgaWYgKGVyciAhPSBudWxsKSByZXR1cm47XG4gICAgICAgIC8vICAgICBpZiAocmVzW1wic3VjY2Vzc1wiXSkge1xuICAgICAgICAvLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzW1widHJhbnNhY3Rpb25zXCJdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCBpdGVtRGF0YSA9IHJlc1tcInRyYW5zYWN0aW9uc1wiXVtpXTtcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IG5pY2tuYW1lID0gaXRlbURhdGFbXCJuaWNrTmFtZVwiXTtcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmdldEl0ZW0oKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLm9wYWNpdHkgPSBpICUgMiA9PSAwID8gMTAgOiAwO1xuICAgICAgICAvLyAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiTm8uXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKGkgKyAxKS50b1N0cmluZygpO1xuICAgICAgICAvLyAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiRnVsbG5hbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpdGVtRGF0YVtcImZ1bGxOYW1lXCJdO1xuICAgICAgICAvLyAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiTmlja25hbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBuaWNrbmFtZTtcbiAgICAgICAgLy8gICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlBob25lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaXRlbURhdGFbXCJtb2JpbGVcIl07XG4gICAgICAgIC8vICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJQaG9uZVwiKS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgICAvLyAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiUGhvbmVcIikub2ZmKFwiY2xpY2tcIik7XG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChpdGVtRGF0YVtcIm1vYmlsZVwiXSAmJiBpdGVtRGF0YVtcIm1vYmlsZVwiXS50cmltKCkubGVuZ3RoID4gMCAmJiBpdGVtRGF0YVtcIm1vYmlsZVwiXS50cmltKClbMF0gIT0gXCIwXCIpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJQaG9uZVwiKS5jb2xvciA9IGNjLkNvbG9yLkNZQU47XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiUGhvbmVcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLm9wZW5UZWxlZ3JhbShpdGVtRGF0YVtcIm1vYmlsZVwiXSk7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiQWRkcmVzc1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGl0ZW1EYXRhW1wiYWRkcmVzc1wiXTtcbiAgICAgICAgLy8gICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkJ0bkZhY2Vib29rXCIpLm9mZihcImNsaWNrXCIpO1xuICAgICAgICAvLyAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiQnRuRmFjZWJvb2tcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjYy5zeXMub3BlblVSTChpdGVtRGF0YVtcImZhY2Vib29rXCJdKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgfSk7XG4gICAgICAgIC8vICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJCdG5UcmFuc2ZlclwiKS5vZmYoXCJjbGlja1wiKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkJ0blRyYW5zZmVyXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy9BcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKFwiVMOtbmggbsSDbmcgxJFhbmcgdOG6oW0ga2jDs2FcIik7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UucG9wdXBTaG9wLnNob3dBbmRPcGVuVHJhbnNmZXIobmlja25hbWUpO1xuICAgICAgICAvLyAgICAgICAgICAgICB9KTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY3RPcGVuKCkge1xuICAgICAgICBBcHAuaW5zdGFuY2Uub3BlblRlbGVncmFtKENvbmZpZ3MuQXBwLmdldExpbmtUZWxlZ3JhbSgpKTtcbiAgICB9XG59XG4iXX0=