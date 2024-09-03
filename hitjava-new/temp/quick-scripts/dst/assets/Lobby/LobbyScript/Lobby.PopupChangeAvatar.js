
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.PopupChangeAvatar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5Qb3B1cENoYW5nZUF2YXRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBZ0Q7QUFDaEQsK0NBQTBDO0FBQzFDLDJDQUFzQztBQUN0Qyx1RUFBa0U7QUFDbEUsaURBQTRDO0FBSXRDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQStDLHFDQUFNO0lBQXJEO1FBQUEscUVBOERDO1FBNURHLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFckIsaUJBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQzs7SUF3RDdCLENBQUM7SUF0REcsaUNBQUssR0FBTDtRQUFBLGlCQWVDO2dDQWRZLENBQUM7WUFDTixJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQUssWUFBWSxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFLLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLGFBQUcsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BHLElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBRyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBRWpELElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO2dCQUNiLEtBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO2dCQUNyQixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFLLFdBQVcs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QU87T0FDYSxpQkFBaUIsQ0E4RHJDO0lBQUQsd0JBQUM7Q0E5REQsQUE4REMsQ0E5RDhDLGdCQUFNLEdBOERwRDtrQkE5RG9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgSHR0cCBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvSHR0cFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IEJyb2FkY2FzdFJlY2VpdmVyIGZyb20gXCIuL1NjcmlwdC9jb21tb24vQnJvYWRjYXN0UmVjZWl2ZXJcIjtcbmltcG9ydCBEaWFsb2cgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9EaWFsb2dcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwQ2hhbmdlQXZhdGFyIGV4dGVuZHMgRGlhbG9nIHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpdGVtczogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaXRlbVRlbXBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgc2VsZWN0ZWRJZHggPSAtMTtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEFwcC5pbnN0YW5jZS5zcHJGcmFtZUF2YXRhcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtVGVtcGxhdGUpO1xuICAgICAgICAgICAgaXRlbS5wYXJlbnQgPSB0aGlzLml0ZW1zO1xuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcInNwcml0ZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IEFwcC5pbnN0YW5jZS5zcHJGcmFtZUF2YXRhcnNbaV07XG4gICAgICAgICAgICBpdGVtLm5hbWUgPSBBcHAuaW5zdGFuY2Uuc3ByRnJhbWVBdmF0YXJzW2ldLm5hbWU7XG5cbiAgICAgICAgICAgIGl0ZW0ub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZElkeCA9IGk7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RTdWJtaXQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZElkeCA9IGk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5pdGVtVGVtcGxhdGUucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICAvLyB0aGlzLml0ZW1UZW1wbGF0ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgIC8vLy9VdGlscy5Mb2coXCJ2YW8gZGF5IGhhIGFhYWE6XCIgKyB0aGlzLm5hbWUpO1xuICAgICAgICBzdXBlci5zaG93KCk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJZHggPSAtMTtcbiAgICAgICAgaWYgKHRoaXMuaXRlbVRlbXBsYXRlID09IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbXMuY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZSA9PSBDb25maWdzLkxvZ2luLkF2YXRhcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSWR4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcInNlbGVjdGVkXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcInNlbGVjdGVkXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFjdFN1Ym1pdCgpIHtcbiAgICAgICAgSHR0cC5nZXQoQ29uZmlncy5BcHAuQVBJLCB7IFwiY1wiOiAxMjUsIFwibm5cIjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgXCJhdmF0YXJcIjogQXBwLmluc3RhbmNlLnNwckZyYW1lQXZhdGFyc1t0aGlzLnNlbGVjdGVkSWR4XS5uYW1lIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKGVyciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfZXJyb3InKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFyZXNbXCJzdWNjZXNzXCJdKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChyZXNbXCJlcnJvckNvZGVcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF91bmtub3duX2Vycm9yXCIpICsgXCJcXG5cIiArIHJlc1tcImVycm9yQ29kZVwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgICAgICAgICBDb25maWdzLkxvZ2luLkF2YXRhciA9IEFwcC5pbnN0YW5jZS5zcHJGcmFtZUF2YXRhcnNbdGhpcy5zZWxlY3RlZElkeF0ubmFtZTtcbiAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9JTkZPX1VQREFURUQpO1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfYWN0aW9uX3N1Y2Nlc3MnKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==