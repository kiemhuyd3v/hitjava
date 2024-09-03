
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/cardGameRoom/CardGame_ItemRoom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '40208gO36VJZpQQjiD6Vrko', 'CardGame_ItemRoom');
// Lobby/LobbyScript/Script/cardGameRoom/CardGame_ItemRoom.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CardGame_ItemRoom = /** @class */ (function (_super) {
    __extends(CardGame_ItemRoom, _super);
    function CardGame_ItemRoom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.labelBet = null;
        _this.labelPlayers = null;
        _this.labelState = null;
        _this.itemInfo = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    // start() {}
    // update (dt) {}
    CardGame_ItemRoom.prototype.initItems = function (data) {
        this.itemInfo = data;
        this.labelBet.string = this.formatGold(data.bet);
        this.labelPlayers.string = this.formatGold(data.players);
        this.labelState.string = data.maxUser == 2 ? "Solo" : data.maxUser + " Người";
    };
    CardGame_ItemRoom.prototype.chooseRoom = function () {
        var controller = null;
        switch (this.itemInfo.gameId) {
            case 0:
            case 1:
                controller = this.node.parent.parent.parent.parent.getComponent("TienLen.Room");
                controller.handleJoinRoom(this.itemInfo);
                break;
            default:
                break;
        }
        //  //Utils.Log("CardGame_ItemRoom chooseRoom : ", this.node.parent.parent);
        //  //Utils.Log("CardGame_ItemRoom chooseRoom : ", this.node.parent.parent.parent);
        //  //Utils.Log("CardGame_ItemRoom chooseRoom : ", this.node.parent.parent.parent.parent);
    };
    CardGame_ItemRoom.prototype.formatGold = function (price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    __decorate([
        property(cc.Label)
    ], CardGame_ItemRoom.prototype, "labelBet", void 0);
    __decorate([
        property(cc.Label)
    ], CardGame_ItemRoom.prototype, "labelPlayers", void 0);
    __decorate([
        property(cc.Label)
    ], CardGame_ItemRoom.prototype, "labelState", void 0);
    CardGame_ItemRoom = __decorate([
        ccclass
    ], CardGame_ItemRoom);
    return CardGame_ItemRoom;
}(cc.Component));
exports.default = CardGame_ItemRoom;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXGNhcmRHYW1lUm9vbVxcQ2FyZEdhbWVfSXRlbVJvb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUFpREM7UUE5Q0csY0FBUSxHQUFXLElBQUksQ0FBQztRQUd4QixrQkFBWSxHQUFXLElBQUksQ0FBQztRQUc1QixnQkFBVSxHQUFXLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQUcsSUFBSSxDQUFDOztJQXNDcEIsQ0FBQztJQXBDRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLGFBQWE7SUFFYixpQkFBaUI7SUFFakIscUNBQVMsR0FBVCxVQUFVLElBQUk7UUFDVixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztJQUNsRixDQUFDO0lBRUQsc0NBQVUsR0FBVjtRQUNJLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQztRQUN0QixRQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQzFCLEtBQUssQ0FBQyxDQUFDO1lBQ1AsS0FBSyxDQUFDO2dCQUNGLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQ2hGLFVBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN6QyxNQUFNO1lBRVY7Z0JBQ0ksTUFBTTtTQUNiO1FBQ0QsNEVBQTRFO1FBQzVFLG1GQUFtRjtRQUNuRiwwRkFBMEY7SUFDOUYsQ0FBQztJQUVELHNDQUFVLEdBQVYsVUFBVyxLQUFLO1FBQ1osT0FBTyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUE1Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt1REFDSztJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJEQUNTO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eURBQ087SUFUVCxpQkFBaUI7UUFEckMsT0FBTztPQUNhLGlCQUFpQixDQWlEckM7SUFBRCx3QkFBQztDQWpERCxBQWlEQyxDQWpEOEMsRUFBRSxDQUFDLFNBQVMsR0FpRDFEO2tCQWpEb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmRHYW1lX0l0ZW1Sb29tIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbEJldDogY2MuTGFiZWw9bnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbFBsYXllcnM6IGNjLkxhYmVsPW51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxTdGF0ZTogY2MuTGFiZWw9bnVsbDtcblxuICAgIGl0ZW1JbmZvID0gbnVsbDtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICAvLyBzdGFydCgpIHt9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxuXG4gICAgaW5pdEl0ZW1zKGRhdGEpIHtcbiAgICAgICAgdGhpcy5pdGVtSW5mbyA9IGRhdGE7XG4gICAgICAgIHRoaXMubGFiZWxCZXQuc3RyaW5nID0gdGhpcy5mb3JtYXRHb2xkKGRhdGEuYmV0KTtcbiAgICAgICAgdGhpcy5sYWJlbFBsYXllcnMuc3RyaW5nID0gdGhpcy5mb3JtYXRHb2xkKGRhdGEucGxheWVycyk7XG4gICAgICAgIHRoaXMubGFiZWxTdGF0ZS5zdHJpbmcgPSBkYXRhLm1heFVzZXIgPT0gMiA/IFwiU29sb1wiIDogZGF0YS5tYXhVc2VyICsgXCIgTmfGsOG7nWlcIjtcbiAgICB9XG5cbiAgICBjaG9vc2VSb29tKCkge1xuICAgICAgICBsZXQgY29udHJvbGxlciA9IG51bGw7XG4gICAgICAgIHN3aXRjaCAodGhpcy5pdGVtSW5mby5nYW1lSWQpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyID0gdGhpcy5ub2RlLnBhcmVudC5wYXJlbnQucGFyZW50LnBhcmVudC5nZXRDb21wb25lbnQoXCJUaWVuTGVuLlJvb21cIik7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5oYW5kbGVKb2luUm9vbSh0aGlzLml0ZW1JbmZvKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvLyAgLy9VdGlscy5Mb2coXCJDYXJkR2FtZV9JdGVtUm9vbSBjaG9vc2VSb29tIDogXCIsIHRoaXMubm9kZS5wYXJlbnQucGFyZW50KTtcbiAgICAgICAgLy8gIC8vVXRpbHMuTG9nKFwiQ2FyZEdhbWVfSXRlbVJvb20gY2hvb3NlUm9vbSA6IFwiLCB0aGlzLm5vZGUucGFyZW50LnBhcmVudC5wYXJlbnQpO1xuICAgICAgICAvLyAgLy9VdGlscy5Mb2coXCJDYXJkR2FtZV9JdGVtUm9vbSBjaG9vc2VSb29tIDogXCIsIHRoaXMubm9kZS5wYXJlbnQucGFyZW50LnBhcmVudC5wYXJlbnQpO1xuICAgIH1cblxuICAgIGZvcm1hdEdvbGQocHJpY2UpIHtcbiAgICAgICAgcmV0dXJuIHByaWNlLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIuXCIpO1xuICAgIH1cblxufSJdfQ==