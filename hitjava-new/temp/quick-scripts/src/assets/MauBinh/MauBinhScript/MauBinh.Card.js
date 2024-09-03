"use strict";
cc._RF.push(module, 'a2d4bIJJopJlrCYY5D9/4Rr', 'MauBinh.Card');
// MauBinh/MauBinhScript/MauBinh.Card.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maubinh = void 0;
var MauBinh_Cmd_1 = require("./MauBinh.Cmd");
var maubinh;
(function (maubinh) {
    var MauBinhCard = /** @class */ (function () {
        function MauBinhCard(a, b) {
            this.id = a;
            this.display = b;
        }
        MauBinhCard.prototype.setCard = function (a, b) {
            this.id = 4 * (a - 2) + b;
        };
        MauBinhCard.prototype.getNumber = function () {
            return Math.floor(this.id / 4) + 2;
        };
        MauBinhCard.prototype.getSuit = function () {
            return this.id % 4;
        };
        MauBinhCard.prototype.getId = function () {
            return this.id;
        };
        MauBinhCard.prototype.getColor = function () {
            var a = this.getSuit();
            if (a == MauBinh_Cmd_1.default.Code.SPADE || a == MauBinh_Cmd_1.default.Code.CLUB)
                return MauBinh_Cmd_1.default.Code.BLACK;
            if (a == MauBinh_Cmd_1.default.Code.DIAMOND || a == MauBinh_Cmd_1.default.Code.HEART)
                return MauBinh_Cmd_1.default.Code.RED;
            //  cc.log("Not consistent card color with suit \x3d " + a);
            return null;
        };
        return MauBinhCard;
    }());
    maubinh.MauBinhCard = MauBinhCard;
})(maubinh = exports.maubinh || (exports.maubinh = {}));
exports.default = maubinh.MauBinhCard;

cc._RF.pop();