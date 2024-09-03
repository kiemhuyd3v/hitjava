
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.Popupnaprut.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a6692xgqI9L1JNb2b0x9ula', 'Lobby.Popupnaprut');
// Lobby/LobbyScript/Lobby.Popupnaprut.ts

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
var Global_1 = require("../../Loading/src/Global");
var Http_1 = require("../../Loading/src/Http");
var App_1 = require("./Script/common/App");
var Dialog_1 = require("./Script/common/Dialog");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Popupnaprut = /** @class */ (function (_super) {
    __extends(Popupnaprut, _super);
    function Popupnaprut() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Popupnaprut.prototype.show = function () {
        _super.prototype.show.call(this);
        // for (let i = 0; i < this.itemTemplate.parent.childrenCount; i++) {
        //     this.itemTemplate.parent.children[i].active = false;
        // }
        if (Configs_1.default.Login.ListBankRut == null) {
            App_1.default.instance.showLoading(true);
            var data = {};
            data["c"] = 2008;
            data["nn"] = Configs_1.default.Login.Nickname;
            data["pn"] = 1;
            data["l"] = 10;
            Http_1.default.get(Configs_1.default.App.API, data, function (err, res) {
                App_1.default.instance.showLoading(false);
                var list = JSON.parse(res.data).data;
                Configs_1.default.Login.ListBankRut = list;
            });
        }
    };
    Popupnaprut.prototype.dismiss = function () {
        _super.prototype.dismiss.call(this);
        // for (let i = 0; i < this.itemTemplate.parent.childrenCount; i++) {
        //     this.itemTemplate.parent.children[i].active = false;
        // }
    };
    Popupnaprut.prototype.onClickNap = function () {
        Global_1.Global.LobbyController.actAddCoin();
        this.dismiss();
    };
    Popupnaprut.prototype.onClickRut = function () {
        Global_1.Global.LobbyController.actCashout();
        this.dismiss();
    };
    Popupnaprut.prototype.onClickDL = function () {
        Global_1.Global.LobbyController.actDaiLy();
        this.dismiss();
    };
    Popupnaprut = __decorate([
        ccclass
    ], Popupnaprut);
    return Popupnaprut;
}(Dialog_1.default));
exports.default = Popupnaprut;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5Qb3B1cG5hcHJ1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBZ0Q7QUFDaEQsbURBQWtEO0FBQ2xELCtDQUEwQztBQUMxQywyQ0FBc0M7QUFDdEMsaURBQTRDO0FBR3RDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFNO0lBQS9DOztJQWtFQSxDQUFDO0lBOURHLDBCQUFJLEdBQUo7UUFDSSxpQkFBTSxJQUFJLFdBQUUsQ0FBQztRQUNiLHFFQUFxRTtRQUNyRSwyREFBMkQ7UUFDM0QsSUFBSTtRQUNBLElBQUcsaUJBQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxJQUFJLElBQUksRUFBQztZQUNqQyxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7WUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDZixjQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztnQkFDckMsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDckMsaUJBQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUNyQyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ1QsQ0FBQztJQUVELDZCQUFPLEdBQVA7UUFDSSxpQkFBTSxPQUFPLFdBQUUsQ0FBQztRQUNoQixxRUFBcUU7UUFDckUsMkRBQTJEO1FBQzNELElBQUk7SUFDUixDQUFDO0lBQ0QsZ0NBQVUsR0FBVjtRQUNJLGVBQU0sQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFDRCxnQ0FBVSxHQUFWO1FBQ0ksZUFBTSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUNKLCtCQUFTLEdBQVQ7UUFDTyxlQUFNLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBekNnQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBa0UvQjtJQUFELGtCQUFDO0NBbEVELEFBa0VDLENBbEV3QyxnQkFBTSxHQWtFOUM7a0JBbEVvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9HbG9iYWxcIjtcbmltcG9ydCBIdHRwIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9IdHRwXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCIuL1NjcmlwdC9jb21tb24vRGlhbG9nXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwbmFwcnV0IGV4dGVuZHMgRGlhbG9nIHtcblxuXG5cbiAgICBzaG93KCkge1xuICAgICAgICBzdXBlci5zaG93KCk7XG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtVGVtcGxhdGUucGFyZW50LmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAvLyAgICAgdGhpcy5pdGVtVGVtcGxhdGUucGFyZW50LmNoaWxkcmVuW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyB9XG4gICAgICAgICAgICBpZihDb25maWdzLkxvZ2luLkxpc3RCYW5rUnV0ID09IG51bGwpe1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHt9O1xuICAgICAgICAgICAgICAgIGRhdGFbXCJjXCJdID0gMjAwODtcbiAgICAgICAgICAgICAgICBkYXRhW1wibm5cIl0gPSBDb25maWdzLkxvZ2luLk5pY2tuYW1lO1xuICAgICAgICAgICAgICAgIGRhdGFbXCJwblwiXSA9IDE7XG4gICAgICAgICAgICAgICAgZGF0YVtcImxcIl0gPSAxMDtcbiAgICAgICAgICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIGRhdGEsIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGlzdCA9IEpTT04ucGFyc2UocmVzLmRhdGEpLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uTGlzdEJhbmtSdXQgPSBsaXN0O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc21pc3MoKSB7XG4gICAgICAgIHN1cGVyLmRpc21pc3MoKTtcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1UZW1wbGF0ZS5wYXJlbnQuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgIC8vICAgICB0aGlzLml0ZW1UZW1wbGF0ZS5wYXJlbnQuY2hpbGRyZW5baV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vIH1cbiAgICB9XG4gICAgb25DbGlja05hcCgpe1xuICAgICAgICBHbG9iYWwuTG9iYnlDb250cm9sbGVyLmFjdEFkZENvaW4oKTtcbiAgICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgfVxuICAgIG9uQ2xpY2tSdXQoKXtcbiAgICAgICAgR2xvYmFsLkxvYmJ5Q29udHJvbGxlci5hY3RDYXNob3V0KCk7XG4gICAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgIH1cblx0b25DbGlja0RMKCl7XG4gICAgICAgIEdsb2JhbC5Mb2JieUNvbnRyb2xsZXIuYWN0RGFpTHkoKTtcbiAgICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgfVxuXG5cbiAgICAvLyBwcml2YXRlIGdldEl0ZW0oKTogY2MuTm9kZSB7XG4gICAgLy8gICAgIGxldCBpdGVtID0gbnVsbDtcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1UZW1wbGF0ZS5wYXJlbnQuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgLy8gICAgICAgICBsZXQgbm9kZSA9IHRoaXMuaXRlbVRlbXBsYXRlLnBhcmVudC5jaGlsZHJlbltpXTtcbiAgICAvLyAgICAgICAgIGlmIChub2RlICE9IHRoaXMuaXRlbVRlbXBsYXRlICYmICFub2RlLmFjdGl2ZSkge1xuICAgIC8vICAgICAgICAgICAgIGl0ZW0gPSBub2RlO1xuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmIChpdGVtID09IG51bGwpIHtcbiAgICAvLyAgICAgICAgIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1UZW1wbGF0ZSk7XG4gICAgLy8gICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMuaXRlbVRlbXBsYXRlLnBhcmVudDtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgLy8gICAgIHJldHVybiBpdGVtO1xuICAgIC8vIH1cblxuXG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG59XG4iXX0=