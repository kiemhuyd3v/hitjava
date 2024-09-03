
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BaiCao/BaiCaoScript/BaiCao.Res.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1b81bbcPQNAC4ICKZf7JrVh', 'BaiCao.Res');
// BaiCao/BaiCaoScript/BaiCao.Res.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQmFpQ2FvXFxCYWlDYW9TY3JpcHRcXEJhaUNhby5SZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQVdJO1FBQUEsaUJBT0M7UUFoQkQsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFTWixFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSTtZQUNsRSxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsTUFBTTtZQUMxRCxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFiYSxlQUFXLEdBQXpCO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUk7WUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzlCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBV0QseUJBQVcsR0FBWCxVQUFZLEtBQUs7UUFDYixJQUFJLEtBQUssR0FBRyxFQUFFO1lBQUUsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDcEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQseUJBQVcsR0FBWDtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBQ0wsVUFBQztBQUFELENBNUJBLEFBNEJDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzIHtcclxuICAgIHN0YXRpYyBpbnN0YW5jZTogUmVzO1xyXG4gICAgY2FyZHMgPSBbXTtcclxuICAgIGNhcmRJdGVtID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IFJlcyB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UgPT0gbnVsbClcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBSZXMoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlc0RpcihcInNwcml0ZXMvTGFCYWlcIiwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHNwcnMsIHVybHMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYXJkcyA9IHNwcnM7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJwcmVmYWJzL2NhcmQvY2FyZFwiLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNhcmRJdGVtID0gcHJlZmFiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENhcmRGYWNlKGluZGV4KSB7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgMTApIGluZGV4ID0gXCIwXCIgKyBpbmRleDtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYXJkcy5maWx0ZXIoY2FyZCA9PiBjYXJkLm5hbWUgPT0gKFwibGFiYWlfXCIgKyBpbmRleCkpWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENhcmRJdGVtKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhcmRJdGVtO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==