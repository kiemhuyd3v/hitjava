
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/TienLenScript/TienLen.Res.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '58801ZFBQ5OS4/DxLCGB5/q', 'TienLen.Res');
// Lobby/LobbyScript/TienLenScript/TienLen.Res.ts

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
var Res = /** @class */ (function (_super) {
    __extends(Res, _super);
    function Res() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // cards = [];
        // cardItem = null;
        _this.cardItem = null;
        _this.cards = [];
        return _this;
    }
    Res_1 = Res;
    Res.getInstance = function () {
        return this.instance;
    };
    Res.prototype.onLoad = function () {
        Res_1.instance = this;
        cc.game.addPersistRootNode(Res_1.instance.node);
    };
    // constructor() {
    //     cc.loader.loadResDir("sprites/LaBai", cc.SpriteFrame, (err, sprs, urls) => {
    //         this.cards = sprs;
    //     });
    //     cc.loader.loadRes("prefabs/card/card", cc.Prefab, (err, prefab) => {
    //         this.cardItem = prefab;
    //     });
    // }
    Res.prototype.getCardFace = function (index) {
        if (index < 10)
            index = "0" + index;
        return this.cards.filter(function (card) { return card.name == ("labai_" + index); })[0];
    };
    Res.prototype.getCardItem = function () {
        return this.cardItem;
    };
    var Res_1;
    __decorate([
        property(cc.Prefab)
    ], Res.prototype, "cardItem", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Res.prototype, "cards", void 0);
    Res = Res_1 = __decorate([
        ccclass
    ], Res);
    return Res;
}(cc.Component));
exports.default = Res;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxUaWVuTGVuU2NyaXB0XFxUaWVuTGVuLlJlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFpQyx1QkFBWTtJQUE3QztRQUFBLHFFQWtDQztRQWhDRyxjQUFjO1FBQ2QsbUJBQW1CO1FBRW5CLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsV0FBSyxHQUFxQixFQUFFLENBQUM7O0lBMkJqQyxDQUFDO1lBbENvQixHQUFHO0lBUU4sZUFBVyxHQUF6QjtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUQsb0JBQU0sR0FBTjtRQUNJLEtBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0lBRUQsa0JBQWtCO0lBQ2xCLG1GQUFtRjtJQUNuRiw2QkFBNkI7SUFDN0IsVUFBVTtJQUNWLDJFQUEyRTtJQUMzRSxrQ0FBa0M7SUFDbEMsVUFBVTtJQUNWLElBQUk7SUFFSix5QkFBVyxHQUFYLFVBQVksS0FBSztRQUNiLElBQUksS0FBSyxHQUFHLEVBQUU7WUFBRSxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNwQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCx5QkFBVyxHQUFYO1FBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7O0lBNUJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ087SUFFM0I7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7c0NBQ0U7SUFQWixHQUFHO1FBRHZCLE9BQU87T0FDYSxHQUFHLENBa0N2QjtJQUFELFVBQUM7Q0FsQ0QsQUFrQ0MsQ0FsQ2dDLEVBQUUsQ0FBQyxTQUFTLEdBa0M1QztrQkFsQ29CLEdBQUciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGluc3RhbmNlOiBSZXM7XG4gICAgLy8gY2FyZHMgPSBbXTtcbiAgICAvLyBjYXJkSXRlbSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBjYXJkSXRlbTogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBjYXJkczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogUmVzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgb25Mb2FkKCl7XG4gICAgICAgIFJlcy5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKFJlcy5pbnN0YW5jZS5ub2RlKVxuICAgIH1cblxuICAgIC8vIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vICAgICBjYy5sb2FkZXIubG9hZFJlc0RpcihcInNwcml0ZXMvTGFCYWlcIiwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHNwcnMsIHVybHMpID0+IHtcbiAgICAvLyAgICAgICAgIHRoaXMuY2FyZHMgPSBzcHJzO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJwcmVmYWJzL2NhcmQvY2FyZFwiLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xuICAgIC8vICAgICAgICAgdGhpcy5jYXJkSXRlbSA9IHByZWZhYjtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuXG4gICAgZ2V0Q2FyZEZhY2UoaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4IDwgMTApIGluZGV4ID0gXCIwXCIgKyBpbmRleDtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FyZHMuZmlsdGVyKGNhcmQgPT4gY2FyZC5uYW1lID09IChcImxhYmFpX1wiICsgaW5kZXgpKVswXTtcbiAgICB9XG5cbiAgICBnZXRDYXJkSXRlbSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FyZEl0ZW07XG4gICAgfVxufVxuIl19