"use strict";
cc._RF.push(module, 'f9b67tXcw5LPJl58XvdhaB8', 'MauBinh.DetectGroupCards');
// MauBinh/MauBinhScript/MauBinh.DetectGroupCards.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maubinh = void 0;
var MauBinh_Cmd_1 = require("./MauBinh.Cmd");
var maubinh;
(function (maubinh) {
    var DetectGroupCards = /** @class */ (function () {
        function DetectGroupCards() {
            this.groupKind = -1;
            this.cardList = [];
            this.valueList = [];
        }
        DetectGroupCards.prototype.getGroupCardsInfo = function () {
            this.groupKind = this.getGroupKind();
            return this.groupKind;
        };
        DetectGroupCards.prototype.getGroupKind = function () {
            if (1 == this.cardList.length)
                return MauBinh_Cmd_1.default.Code.GROUP_MAU_THAU;
            if (3 == this.cardList.length) {
                if (this.isSamCo())
                    return MauBinh_Cmd_1.default.Code.GROUP_SAM_CO;
                if (this.isMotDoi())
                    return MauBinh_Cmd_1.default.Code.GROUP_MOT_DOI;
            }
            if (5 == this.cardList.length) {
                if (this.isThungPhaSanh())
                    return MauBinh_Cmd_1.default.Code.GROUP_THUNG_PHA_SANH;
                if (this.isTuQuy())
                    return MauBinh_Cmd_1.default.Code.GROUP_TU_QUY;
                if (this.isCuLu())
                    return MauBinh_Cmd_1.default.Code.GROUP_CU_LU;
                if (this.isThung())
                    return MauBinh_Cmd_1.default.Code.GROUP_THUNG;
                if (this.isSanh())
                    return MauBinh_Cmd_1.default.Code.GROUP_SANH;
                if (this.isSamCo())
                    return MauBinh_Cmd_1.default.Code.GROUP_SAM_CO;
                if (this.isThu())
                    return MauBinh_Cmd_1.default.Code.GROUP_THU;
                if (this.isMotDoi())
                    return MauBinh_Cmd_1.default.Code.GROUP_MOT_DOI;
            }
            this.valueList = [];
            for (var a = this.getSortedCardList(), b = this.cardList.length - 1; 0 <= b; b--)
                this.valueList.push(a[b].getNumber());
            return MauBinh_Cmd_1.default.Code.GROUP_MAU_THAU;
        };
        DetectGroupCards.prototype.getGroupKindLevel = function (a) {
            var b = MauBinh_Cmd_1.default.Code.LV_BINH_THUONG;
            !a || this.groupKind != MauBinh_Cmd_1.default.Code.GROUP_THUNG_PHA_SANH && this.groupKind != MauBinh_Cmd_1.default.Code.GROUP_SANH || (10 == this.valueList[0] ? b = MauBinh_Cmd_1.default.Code.LV_THUONG : 1 == this.valueList[0] && (b = MauBinh_Cmd_1.default.Code.LV_HA));
            return b;
        };
        DetectGroupCards.prototype.getSortedCardList = function () {
            var a = [];
            for (var b = 0; b < this.cardList.length; b++) {
                a.push(this.cardList[b]);
            }
            // return a.sort(function (a, c) { return c.getId() - a.getId(); });
            return a.sort(function (a, c) { return a.getId() - c.getId(); });
        };
        DetectGroupCards.prototype.sortCardList = function (isIncrease) {
            if (isIncrease) {
                this.cardList.sort(function (a, c) { return c - a; });
            }
            else {
                this.cardList.sort(function (a, c) { return a - c; });
            }
        };
        // Kinds
        DetectGroupCards.prototype.isThungPhaSanh = function () {
            if (5 != this.cardList.length)
                return !1;
            for (var a = this.getSortedCardList(), b = 1, c = 1; c < this.cardList.length; c++)
                a[c].getSuit() == a[c - 1].getSuit() && (a[c].getNumber() == a[c - 1].getNumber() + 1 || 2 == a[0].getNumber() && 14 == a[c].getNumber()) && b++;
            b == this.cardList.length && (this.valueList = [], 2 == a[0].getNumber() && 14 == a[a.length - 1].getNumber() ? this.valueList.push(1) : this.valueList.push(a[0].getNumber()));
            return b == this.cardList.length;
        };
        DetectGroupCards.prototype.isTuQuy = function () {
            if (5 != this.cardList.length)
                return !1;
            for (var a = 0; a < this.cardList.length; a++)
                for (var b = 1, c = 0; c < this.cardList.length; c++)
                    if (a != c && this.cardList[a].getNumber() == this.cardList[c].getNumber() && b++, 4 == b)
                        return this.valueList = [], this.valueList.push(this.cardList[a].getNumber()), !0;
            return !1;
        };
        DetectGroupCards.prototype.isCuLu = function () {
            if (5 != this.cardList.length)
                return !1;
            var a = this.getSortedCardList(), b = !1;
            a[0].getNumber() == a[1].getNumber() && (a[1].getNumber() == a[2].getNumber() && a[3].getNumber() == a[4].getNumber() && (b = !0, this.valueList = [], this.valueList.push(a[0].getNumber()), this.valueList.push(a[3].getNumber())), a[2].getNumber() ==
                a[3].getNumber() && a[3].getNumber() == a[4].getNumber() && (b = !0, this.valueList = [], this.valueList.push(a[2].getNumber()), this.valueList.push(a[0].getNumber())));
            return b;
        };
        DetectGroupCards.prototype.isThung = function () {
            var a = this.getSortedCardList();
            if (5 != this.cardList.length)
                return !1;
            for (var b = 1; b < this.cardList.length; b++)
                if (a[b].getSuit() != a[0].getSuit())
                    return !1;
            this.valueList = [];
            for (b = this.cardList.length - 1; 0 <= b; b--)
                this.valueList.push(a[b].getNumber());
            return !0;
        };
        DetectGroupCards.prototype.isSanh = function () {
            if (5 != this.cardList.length)
                return !1;
            for (var a = this.getSortedCardList(), b = 1, c = 1; c < this.cardList.length; c++)
                (a[c].getNumber() == a[c - 1].getNumber() + 1 || 2 == a[0].getNumber() && 14 == a[c].getNumber()) && b++;
            b == this.cardList.length && (this.valueList = [], 2 == a[0].getNumber() && 14 == a[a.length - 1].getNumber()
                ? this.valueList.push(1) : this.valueList.push(a[0].getNumber()));
            return b == this.cardList.length;
        };
        DetectGroupCards.prototype.isSamCo = function () {
            for (var a = 0; a < this.cardList.length; a++) {
                for (var b = 1, c = 0; c < this.cardList.length; c++)
                    a != c && this.cardList[a].getNumber() ==
                        this.cardList[c].getNumber() && b++;
                if (3 == b)
                    return this.valueList = [], this.valueList.push(this.cardList[a].getNumber()), !0;
            }
            return !1;
        };
        DetectGroupCards.prototype.isThu = function () {
            if (5 != this.cardList.length)
                return !1;
            for (var a = [], b = 0; b < this.cardList.length - 1; b++)
                if (-1 == a.indexOf(this.cardList[b].getNumber()))
                    for (var c = b + 1; c < this.cardList.length; c++)
                        if (this.cardList[b].getNumber() == this.cardList[c].getNumber()) {
                            a.push(this.cardList[b].getNumber());
                            break;
                        }
            if (2 == a.length) {
                this.valueList = [];
                this.valueList.push(Math.max(a[0], a[1]));
                this.valueList.push(Math.min(a[0], a[1]));
                for (b = 0; b < this.cardList.length; b++)
                    -1 == a.indexOf(this.cardList[b].getNumber()) && this.valueList.push(this.cardList[b].getNumber());
                return !0;
            }
            return !1;
        };
        DetectGroupCards.prototype.isMotDoi = function () {
            for (var a = [], b = 0; b < this.cardList.length - 1; b++)
                for (var c = b + 1; c < this.cardList.length; c++)
                    this.cardList[b].getNumber() == this.cardList[c].getNumber() && a.push(this.cardList[b].getNumber());
            if (1 == a.length) {
                this.valueList = [];
                this.valueList.push(a[0]);
                var d = this.getSortedCardList();
                for (b = this.cardList.length - 1; 0 <= b; b--)
                    d[b].getNumber() != a[0] && this.valueList.push(d[b].getNumber());
                return !0;
            }
            return !1;
        };
        DetectGroupCards.prototype.addCard = function (a) {
            this.cardList.push(a);
        };
        DetectGroupCards.prototype.removeCard = function (id) {
            for (var b = 0; b < this.cardList.length; b++)
                if (this.cardList[b] == id) {
                    this.cardList.splice(b, 1);
                    break;
                }
        };
        return DetectGroupCards;
    }());
    maubinh.DetectGroupCards = DetectGroupCards;
})(maubinh = exports.maubinh || (exports.maubinh = {}));
exports.default = maubinh.DetectGroupCards;

cc._RF.pop();