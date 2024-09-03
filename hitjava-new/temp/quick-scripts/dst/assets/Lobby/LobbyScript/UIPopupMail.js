
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/UIPopupMail.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bd70fbCE2ZBTJzxBb6NCk2h', 'UIPopupMail');
// Lobby/LobbyScript/UIPopupMail.ts

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
var UIPopupMail = /** @class */ (function (_super) {
    __extends(UIPopupMail, _super);
    function UIPopupMail() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lblPage = null;
        _this.content = null;
        _this.prefab = null;
        _this.txtTitle = null;
        _this.txtContent = null;
        _this.txtTime = null;
        _this.txtSender = null;
        _this.boxInfo = null;
        _this.boxEmpty = null;
        _this.boxHave = null;
        _this.page = 1;
        _this.maxPage = 1;
        _this.items = new Array();
        _this.listMail = [];
        _this.dataMailReading = null;
        return _this;
    }
    UIPopupMail.prototype.start = function () {
    };
    UIPopupMail.prototype._onShowed = function () {
        _super.prototype._onShowed.call(this);
        this.page = 1;
        this.maxPage = 1;
        this.lblPage.string = this.page + "/" + this.maxPage;
        this.loadData();
    };
    UIPopupMail.prototype.actNextPage = function () {
        if (this.page < this.maxPage) {
            this.page++;
            this.lblPage.string = this.page + "/" + this.maxPage;
            this.loadData();
        }
    };
    UIPopupMail.prototype.actPrevPage = function () {
        if (this.page > 1) {
            this.page--;
            this.lblPage.string = this.page + "/" + this.maxPage;
            this.loadData();
        }
    };
    UIPopupMail.prototype.show = function () {
        _super.prototype.show.call(this);
        // this.loadData();
    };
    UIPopupMail.prototype.loadData = function () {
        var _this = this;
        App_1.default.instance.showLoading(true);
        Http_1.default.get(Configs_1.default.App.API, { c: "405", nn: Configs_1.default.Login.Nickname, p: this.page }, function (err, res) {
            App_1.default.instance.showLoading(false);
            if (err != null)
                return;
            //Utils.Log("UIPopupMail:" + JSON.stringify(res));
            if (res["success"]) {
                if (res["errorCode"] == "10001") {
                    _this.boxEmpty.active = true;
                    _this.boxHave.active = false;
                }
                else {
                    _this.boxEmpty.active = false;
                    _this.boxHave.active = true;
                    _this.boxInfo.active = false;
                    _this.content.removeAllChildren();
                    _this.maxPage = res["totalPages"];
                    _this.lblPage.string = _this.page + "/" + _this.maxPage;
                    Configs_1.default.Login.ListMail = res["transactions"];
                    res['transactions'].sort(function (x, y) {
                        return x['status'] - y['status'];
                    });
                    BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.ON_UPDATE_MAIL);
                    for (var i = 0; i < res["transactions"].length; i++) {
                        var dataItem = res["transactions"][i];
                        //Utils.Log("Status==" + dataItem['status']);
                        var item = cc.instantiate(_this.prefab);
                        item.parent = _this.content;
                        item.getComponent("UIItemMail").init(_this, dataItem);
                    }
                }
            }
        });
    };
    UIPopupMail.prototype.readMail = function (dataMail) {
        this.dataMailReading = dataMail;
        this.boxInfo.active = true;
        this.txtTitle.string = App_1.default.instance.getTextLang('txt_mail_title') + dataMail.title + " " + dataMail.title;
        this.txtContent.string = App_1.default.instance.getTextLang('txt_mail_content') + dataMail.content;
        this.txtTime.string = App_1.default.instance.getTextLang('txt_mail_time_send') + dataMail.createTime;
        this.txtSender.string = App_1.default.instance.getTextLang('txt_mail_from') + dataMail.author;
    };
    UIPopupMail.prototype.OpenURL = function () {
        cc.sys.openURL("https://google.com");
    };
    UIPopupMail.prototype.onBtnXoa = function () {
        var _this = this;
        if (this.dataMailReading != null) {
            App_1.default.instance.showLoading(true);
            Http_1.default.get(Configs_1.default.App.API, { c: "403", mid: this.dataMailReading.mail_id }, function (err, res) {
                App_1.default.instance.showLoading(false);
                if (err != null)
                    return;
                if (res.success) {
                    _this.loadData();
                }
            });
        }
    };
    __decorate([
        property(cc.Label)
    ], UIPopupMail.prototype, "lblPage", void 0);
    __decorate([
        property(cc.Node)
    ], UIPopupMail.prototype, "content", void 0);
    __decorate([
        property(cc.Node)
    ], UIPopupMail.prototype, "prefab", void 0);
    __decorate([
        property(cc.Label)
    ], UIPopupMail.prototype, "txtTitle", void 0);
    __decorate([
        property(cc.RichText)
    ], UIPopupMail.prototype, "txtContent", void 0);
    __decorate([
        property(cc.Label)
    ], UIPopupMail.prototype, "txtTime", void 0);
    __decorate([
        property(cc.Label)
    ], UIPopupMail.prototype, "txtSender", void 0);
    __decorate([
        property(cc.Node)
    ], UIPopupMail.prototype, "boxInfo", void 0);
    __decorate([
        property(cc.Node)
    ], UIPopupMail.prototype, "boxEmpty", void 0);
    __decorate([
        property(cc.Node)
    ], UIPopupMail.prototype, "boxHave", void 0);
    UIPopupMail = __decorate([
        ccclass
    ], UIPopupMail);
    return UIPopupMail;
}(Dialog_1.default));
exports.default = UIPopupMail;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxVSVBvcHVwTWFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBZ0Q7QUFDaEQsK0NBQTBDO0FBQzFDLDJDQUFzQztBQUN0Qyx1RUFBa0U7QUFDbEUsaURBQTRDO0FBR3RDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFNO0lBQS9DO1FBQUEscUVBaUlDO1FBL0hHLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFHekIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFHMUIsZ0JBQVUsR0FBZ0IsSUFBSSxDQUFDO1FBRy9CLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFHekIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUczQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUVoQixVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGFBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsV0FBSyxHQUFHLElBQUksS0FBSyxFQUFXLENBQUM7UUFDN0IsY0FBUSxHQUFHLEVBQUUsQ0FBQztRQXNFZCxxQkFBZSxHQUFHLElBQUksQ0FBQzs7SUEwQm5DLENBQUM7SUE5RkcsMkJBQUssR0FBTDtJQUVBLENBQUM7SUFDRCwrQkFBUyxHQUFUO1FBQ0ksaUJBQU0sU0FBUyxXQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMs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QUFJLENBQUM7Z0RBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNNO0lBNUJQLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FpSS9CO0lBQUQsa0JBQUM7Q0FqSUQsQUFpSUMsQ0FqSXdDLGdCQUFNLEdBaUk5QztrQkFqSW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IEh0dHAgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0h0dHBcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBCcm9hZGNhc3RSZWNlaXZlciBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL0Jyb2FkY2FzdFJlY2VpdmVyXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCIuL1NjcmlwdC9jb21tb24vRGlhbG9nXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlQb3B1cE1haWwgZXh0ZW5kcyBEaWFsb2cge1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxQYWdlOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb250ZW50OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcmVmYWI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHR4dFRpdGxlOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUmljaFRleHQpXG4gICAgdHh0Q29udGVudDogY2MuUmljaFRleHQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHR4dFRpbWU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB0eHRTZW5kZXI6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJveEluZm86IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYm94RW1wdHk6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYm94SGF2ZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIHBhZ2U6IG51bWJlciA9IDE7XG4gICAgcHJpdmF0ZSBtYXhQYWdlOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgaXRlbXMgPSBuZXcgQXJyYXk8Y2MuTm9kZT4oKTtcbiAgICBwcml2YXRlIGxpc3RNYWlsID0gW107XG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cbiAgICBfb25TaG93ZWQoKSB7XG4gICAgICAgIHN1cGVyLl9vblNob3dlZCgpO1xuICAgICAgICB0aGlzLnBhZ2UgPSAxO1xuICAgICAgICB0aGlzLm1heFBhZ2UgPSAxO1xuICAgICAgICB0aGlzLmxibFBhZ2Uuc3RyaW5nID0gdGhpcy5wYWdlICsgXCIvXCIgKyB0aGlzLm1heFBhZ2U7XG4gICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICB9XG5cbiAgICBhY3ROZXh0UGFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFnZSA8IHRoaXMubWF4UGFnZSkge1xuICAgICAgICAgICAgdGhpcy5wYWdlKys7XG4gICAgICAgICAgICB0aGlzLmxibFBhZ2Uuc3RyaW5nID0gdGhpcy5wYWdlICsgXCIvXCIgKyB0aGlzLm1heFBhZ2U7XG4gICAgICAgICAgICB0aGlzLmxvYWREYXRhKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhY3RQcmV2UGFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFnZSA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMucGFnZS0tO1xuICAgICAgICAgICAgdGhpcy5sYmxQYWdlLnN0cmluZyA9IHRoaXMucGFnZSArIFwiL1wiICsgdGhpcy5tYXhQYWdlO1xuICAgICAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgc3VwZXIuc2hvdygpO1xuICAgICAgICAvLyB0aGlzLmxvYWREYXRhKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkRGF0YSgpIHtcbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHsgYzogXCI0MDVcIiwgbm46IENvbmZpZ3MuTG9naW4uTmlja25hbWUsIHA6IHRoaXMucGFnZSB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBpZiAoZXJyICE9IG51bGwpIHJldHVybjtcbiAgICAgICAgICAgICAvL1V0aWxzLkxvZyhcIlVJUG9wdXBNYWlsOlwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICBpZiAocmVzW1wic3VjY2Vzc1wiXSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNbXCJlcnJvckNvZGVcIl0gPT0gXCIxMDAwMVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm94RW1wdHkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3hIYXZlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3hFbXB0eS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3hIYXZlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm94SW5mby5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnJlbW92ZUFsbENoaWxkcmVuKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXhQYWdlID0gcmVzW1widG90YWxQYWdlc1wiXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxQYWdlLnN0cmluZyA9IHRoaXMucGFnZSArIFwiL1wiICsgdGhpcy5tYXhQYWdlO1xuICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkxpc3RNYWlsID0gcmVzW1widHJhbnNhY3Rpb25zXCJdO1xuICAgICAgICAgICAgICAgICAgICByZXNbJ3RyYW5zYWN0aW9ucyddLnNvcnQoKHgsIHkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB4WydzdGF0dXMnXSAtIHlbJ3N0YXR1cyddO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5PTl9VUERBVEVfTUFJTCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzW1widHJhbnNhY3Rpb25zXCJdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YUl0ZW0gPSByZXNbXCJ0cmFuc2FjdGlvbnNcIl1baV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgLy9VdGlscy5Mb2coXCJTdGF0dXM9PVwiICsgZGF0YUl0ZW1bJ3N0YXR1cyddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wYXJlbnQgPSB0aGlzLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChcIlVJSXRlbU1haWxcIikuaW5pdCh0aGlzLCBkYXRhSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGF0YU1haWxSZWFkaW5nID0gbnVsbDtcbiAgICByZWFkTWFpbChkYXRhTWFpbCkge1xuXG4gICAgICAgIHRoaXMuZGF0YU1haWxSZWFkaW5nID0gZGF0YU1haWw7XG4gICAgICAgIHRoaXMuYm94SW5mby5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnR4dFRpdGxlLnN0cmluZyA9IEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X21haWxfdGl0bGUnKSArIGRhdGFNYWlsLnRpdGxlICsgXCIgXCIgKyBkYXRhTWFpbC50aXRsZTtcbiAgICAgICAgdGhpcy50eHRDb250ZW50LnN0cmluZyA9QXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbWFpbF9jb250ZW50JykrIGRhdGFNYWlsLmNvbnRlbnQ7XG4gICAgICAgIHRoaXMudHh0VGltZS5zdHJpbmcgPUFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X21haWxfdGltZV9zZW5kJykrIGRhdGFNYWlsLmNyZWF0ZVRpbWU7XG4gICAgICAgIHRoaXMudHh0U2VuZGVyLnN0cmluZyA9IEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X21haWxfZnJvbScpICsgZGF0YU1haWwuYXV0aG9yO1xuICAgIH1cblxuICAgIE9wZW5VUkwoKSB7XG4gICAgICAgIGNjLnN5cy5vcGVuVVJMKFwiaHR0cHM6Ly9nb29nbGUuY29tXCIpO1xuICAgIH1cbiAgICBvbkJ0blhvYSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YU1haWxSZWFkaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgIEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSSwgeyBjOiBcIjQwM1wiLCBtaWQ6IHRoaXMuZGF0YU1haWxSZWFkaW5nLm1haWxfaWQgfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyICE9IG51bGwpIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19