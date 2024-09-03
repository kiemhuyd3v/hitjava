"use strict";
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