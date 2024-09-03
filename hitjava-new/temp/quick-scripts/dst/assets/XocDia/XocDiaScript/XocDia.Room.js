
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/XocDia/XocDiaScript/XocDia.Room.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '51ffe0qf+FFWK0X275xS9fw', 'XocDia.Room');
// XocDia/XocDiaScript/XocDia.Room.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var XocDia_Cmd_1 = require("./XocDia.Cmd");
var XocDia_XocDiaNetworkClient_1 = require("./XocDia.XocDiaNetworkClient");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var XocDiaRoom = /** @class */ (function (_super) {
    __extends(XocDiaRoom, _super);
    function XocDiaRoom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lblBet = null;
        _this.lblMin = null;
        _this.lblPlayers = null;
        _this.sprPlayers = null;
        // LIFE-CYCLE CALLBACKS:
        _this.itemData = null;
        return _this;
    }
    XocDiaRoom.prototype.init = function (itemData) {
        this.itemData = itemData;
        this.lblBet.string = Utils_1.default.formatNumber(itemData["id"]);
        this.lblMin.string = Utils_1.default.formatNumber(itemData["requiredMoney"]);
        this.lblPlayers.string = itemData["userCount"] + "/" + itemData["maxUserPerRoom"];
        this.sprPlayers.fillRange = itemData["userCount"] / itemData["maxUserPerRoom"];
    };
    XocDiaRoom.prototype.onBtnClick = function () {
        if (Configs_1.default.Login.Coin >= this.itemData["requiredMoney"]) {
            App_1.default.instance.showLoading(true);
            XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.SendJoinRoomById(this.itemData["id"]));
        }
        else {
            App_1.default.instance.showToast("Số dư của bạn không đủ! Vui lòng nạp thêm.");
        }
    };
    __decorate([
        property(cc.Label)
    ], XocDiaRoom.prototype, "lblBet", void 0);
    __decorate([
        property(cc.Label)
    ], XocDiaRoom.prototype, "lblMin", void 0);
    __decorate([
        property(cc.Label)
    ], XocDiaRoom.prototype, "lblPlayers", void 0);
    __decorate([
        property(cc.Sprite)
    ], XocDiaRoom.prototype, "sprPlayers", void 0);
    XocDiaRoom = __decorate([
        ccclass
    ], XocDiaRoom);
    return XocDiaRoom;
}(cc.Component));
exports.default = XocDiaRoom;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWG9jRGlhXFxYb2NEaWFTY3JpcHRcXFhvY0RpYS5Sb29tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHFEQUFnRDtBQUNoRCxpRUFBNEQ7QUFDNUQscUVBQWdFO0FBQ2hFLDJDQUErQjtBQUMvQiwyRUFBK0Q7QUFFekQsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUE4QkM7UUEzQkcsWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBRXhCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLHdCQUF3QjtRQUNoQixjQUFRLEdBQUcsSUFBSSxDQUFDOztJQWlCNUIsQ0FBQztJQWhCRyx5QkFBSSxHQUFKLFVBQUssUUFBUTtRQUNULElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGVBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsZUFBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQsK0JBQVUsR0FBVjtRQUNJLElBQUksaUJBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDdEQsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0Isb0NBQW1CLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksb0JBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6RjthQUFNO1lBQ0gsYUFBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsNENBQTRDLENBQUMsQ0FBQTtTQUN2RTtJQUNMLENBQUM7SUExQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4Q0FDSztJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNLO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ1M7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDUztJQVZaLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0E4QjlCO0lBQUQsaUJBQUM7Q0E5QkQsQUE4QkMsQ0E5QnVDLEVBQUUsQ0FBQyxTQUFTLEdBOEJuRDtrQkE5Qm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vVXRpbHNcIjtcbmltcG9ydCBjbWQgZnJvbSBcIi4vWG9jRGlhLkNtZFwiO1xuaW1wb3J0IFhvY0RpYU5ldHdvcmtDbGllbnQgZnJvbSBcIi4vWG9jRGlhLlhvY0RpYU5ldHdvcmtDbGllbnRcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBYb2NEaWFSb29tIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxCZXQ6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxNaW46IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsUGxheWVyczogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgc3ByUGxheWVyczogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIHByaXZhdGUgaXRlbURhdGEgPSBudWxsO1xuICAgIGluaXQoaXRlbURhdGEpe1xuICAgICAgICB0aGlzLml0ZW1EYXRhID0gaXRlbURhdGE7XG4gICAgICAgIHRoaXMubGJsQmV0LnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcImlkXCJdKTtcbiAgICAgICAgdGhpcy5sYmxNaW4uc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGl0ZW1EYXRhW1wicmVxdWlyZWRNb25leVwiXSk7XG4gICAgICAgIHRoaXMubGJsUGxheWVycy5zdHJpbmcgPSBpdGVtRGF0YVtcInVzZXJDb3VudFwiXSArIFwiL1wiICsgaXRlbURhdGFbXCJtYXhVc2VyUGVyUm9vbVwiXTtcbiAgICAgICAgdGhpcy5zcHJQbGF5ZXJzLmZpbGxSYW5nZSA9IGl0ZW1EYXRhW1widXNlckNvdW50XCJdIC8gaXRlbURhdGFbXCJtYXhVc2VyUGVyUm9vbVwiXTtcbiAgICB9XG5cbiAgICBvbkJ0bkNsaWNrKCl7XG4gICAgICAgIGlmIChDb25maWdzLkxvZ2luLkNvaW4gPj0gdGhpcy5pdGVtRGF0YVtcInJlcXVpcmVkTW9uZXlcIl0pIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgIFhvY0RpYU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZEpvaW5Sb29tQnlJZCh0aGlzLml0ZW1EYXRhW1wiaWRcIl0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93VG9hc3QoXCJT4buRIGTGsCBj4bunYSBi4bqhbiBraMO0bmcgxJHhu6chIFZ1aSBsw7JuZyBu4bqhcCB0aMOqbS5cIilcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==