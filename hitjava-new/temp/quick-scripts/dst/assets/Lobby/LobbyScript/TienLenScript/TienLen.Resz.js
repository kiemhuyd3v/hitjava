
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/TienLenScript/TienLen.Resz.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e0ec18sMEtBqYxsxAxJAePQ', 'TienLen.Resz');
// Lobby/LobbyScript/TienLenScript/TienLen.Resz.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Res = /** @class */ (function () {
    function Res() {
        var _this = this;
        this.cards = [];
        this.cardItem = null;
        cc.loader.loadResDir("sprites/LaBai", cc.SpriteFrame, function (err, sprs, urls) {
            _this.cards = sprs;
        });
        cc.loader.loadRes("prefabs/card/card", cc.Prefab, function (err, prefab) {
            _this.cardItem = prefab;
        });
    }
    Res.getInstance = function () {
        if (this.instance == null)
            this.instance = new Res();
        return this.instance;
    };
    Res.prototype.getCardFace = function (index) {
        if (index < 10)
            index = "0" + index;
        return this.cards.filter(function (card) { return card.name == ("labai_" + index); })[0];
    };
    Res.prototype.getCardItem = function () {
        return this.cardItem;
    };
    return Res;
}());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxUaWVuTGVuU2NyaXB0XFxUaWVuTGVuLlJlc3oudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQVdJO1FBQUEsaUJBT0M7UUFoQkQsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFTWixFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSTtZQUNsRSxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsTUFBTTtZQUMxRCxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFiYSxlQUFXLEdBQXpCO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUk7WUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzlCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBV0QseUJBQVcsR0FBWCxVQUFZLEtBQUs7UUFDYixJQUFJLEtBQUssR0FBRyxFQUFFO1lBQUUsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDcEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQseUJBQVcsR0FBWDtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBQ0wsVUFBQztBQUFELENBNUJBLEFBNEJDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcyB7XG4gICAgc3RhdGljIGluc3RhbmNlOiBSZXM7XG4gICAgY2FyZHMgPSBbXTtcbiAgICBjYXJkSXRlbSA9IG51bGw7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IFJlcyB7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlID09IG51bGwpXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFJlcygpO1xuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXNEaXIoXCJzcHJpdGVzL0xhQmFpXCIsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCBzcHJzLCB1cmxzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNhcmRzID0gc3BycztcbiAgICAgICAgfSk7XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwicHJlZmFicy9jYXJkL2NhcmRcIiwgY2MuUHJlZmFiLCAoZXJyLCBwcmVmYWIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FyZEl0ZW0gPSBwcmVmYWI7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldENhcmRGYWNlKGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA8IDEwKSBpbmRleCA9IFwiMFwiICsgaW5kZXg7XG4gICAgICAgIHJldHVybiB0aGlzLmNhcmRzLmZpbHRlcihjYXJkID0+IGNhcmQubmFtZSA9PSAoXCJsYWJhaV9cIiArIGluZGV4KSlbMF07XG4gICAgfVxuXG4gICAgZ2V0Q2FyZEl0ZW0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhcmRJdGVtO1xuICAgIH1cbn1cbiJdfQ==