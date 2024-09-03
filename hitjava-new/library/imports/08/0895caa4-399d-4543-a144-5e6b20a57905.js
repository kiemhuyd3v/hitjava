"use strict";
cc._RF.push(module, '0895cqkOZ1FQ6FEXmsgpXkF', 'MauBinh.DetectPlayerCards');
// MauBinh/MauBinhScript/MauBinh.DetectPlayerCards.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maubinh = void 0;
var MauBinh_Cmd_1 = require("./MauBinh.Cmd");
var MauBinh_Card_1 = require("./MauBinh.Card");
var MauBinh_DetectGroupCards_1 = require("./MauBinh.DetectGroupCards");
var maubinh;
(function (maubinh) {
    var DetectPlayerCards = /** @class */ (function () {
        function DetectPlayerCards() {
            this.maubinhType = MauBinh_Cmd_1.default.Code.TYPE_BINH_THUONG;
            this.chiDau = new MauBinh_DetectGroupCards_1.default;
            this.chiGiua = new MauBinh_DetectGroupCards_1.default;
            this.chiCuoi = new MauBinh_DetectGroupCards_1.default;
        }
        DetectPlayerCards.prototype.initCard = function (a) {
            //  cc.log("DetectPlayerCard initCard a : ", a);
            //  cc.log("DetectPlayerCard initCard chiDau : ", this.chiDau);
            //  cc.log("DetectPlayerCard initCard chiGiua : ", this.chiGiua);
            //  cc.log("DetectPlayerCard initCard chiCuoi : ", this.chiCuoi);
            for (var c = 10; c < 13; c++)
                this.chiCuoi.addCard(new MauBinh_Card_1.default(a[c - 10], null)); // 0, 1, 2
            for (c = 5; c < 10; c++)
                this.chiGiua.addCard(new MauBinh_Card_1.default(a[c - 2], null)); // 3, 4, 5, 6, 7
            for (c = 0; c < 5; c++)
                this.chiDau.addCard(new MauBinh_Card_1.default(a[c + 8], null)); // 8, 9, 10, 11, 12
        };
        DetectPlayerCards.prototype.getPlayerCardsInfo = function (isTinhAce) {
            var kind_01 = this.chiDau.getGroupCardsInfo();
            //  cc.log("DetectPlayerCard getPlayerCardsInfo chiDau : ", kind_01);
            var kind_02 = this.chiGiua.getGroupCardsInfo();
            //  cc.log("DetectPlayerCard getPlayerCardsInfo chiGiua : ", kind_02);
            var kind_03 = this.chiCuoi.getGroupCardsInfo();
            //  cc.log("DetectPlayerCard getPlayerCardsInfo chiCuoi : ", kind_03);
            this.isSanhRong() ? this.maubinhType = MauBinh_Cmd_1.default.Code.TYPE_SANH_RONG
                : isTinhAce && this.isMuoiBaCayDongMau() ? this.maubinhType = MauBinh_Cmd_1.default.Code.TYPE_MUOI_BA_CAY_DONG_MAU
                    : isTinhAce && this.isMuoiHaiCayDongMau() ? this.maubinhType = MauBinh_Cmd_1.default.Code.TYPE_MUOI_HAI_CAY_DONG_MAU
                        : this.isBaCaiThung() ? this.maubinhType = MauBinh_Cmd_1.default.Code.TYPE_BA_CAI_THUNG
                            : this.isBaCaiSanh() ? this.maubinhType = MauBinh_Cmd_1.default.Code.TYPE_BA_CAI_SANH
                                : this.isLucPheBon() ? this.maubinhType = MauBinh_Cmd_1.default.Code.TYPE_LUC_PHE_BON
                                    : this.isBinhLung(isTinhAce) ? this.maubinhType = MauBinh_Cmd_1.default.Code.TYPE_BINH_LUNG
                                        : this.maubinhType = MauBinh_Cmd_1.default.Code.TYPE_BINH_THUONG;
            return {
                cardType: this.maubinhType,
                chiDau: kind_01,
                chiGiua: kind_02,
                chiCuoi: kind_03
            };
        };
        DetectPlayerCards.prototype.addCardToChiDau = function (a) {
            this.chiDau.addCard(a);
        };
        DetectPlayerCards.prototype.addCardToChiGiua = function (a) {
            this.chiGiua.addCard(a);
        };
        DetectPlayerCards.prototype.addCardToChiCuoi = function (a) {
            this.chiCuoi.addCard(a);
        };
        DetectPlayerCards.prototype.getChi = function (a) {
            switch (a) {
                case 1:
                    return this.chiDau;
                case 2:
                    return this.chiGiua;
                case 3:
                    return this.chiCuoi;
            }
        };
        DetectPlayerCards.prototype.getGroupCardContainsIndex = function (a) {
            return 0 <= a && 5 > a ? this.chiDau : 10 > a ? this.chiGiua : 13 > a ? this.chiCuoi : null;
        };
        DetectPlayerCards.prototype.getAllCards = function () {
            var a = [], a = a.concat(this.chiDau.cardList), a = a.concat(this.chiGiua.cardList);
            return a = a.concat(this.chiCuoi.cardList);
        };
        DetectPlayerCards.prototype.swapCard = function (a, b) {
            var c = a.id;
            a.id = b.id;
            b.id = c;
        };
        // Types
        DetectPlayerCards.prototype.isSanhRong = function () {
            for (var a = this.getSortedCardListFromList(this.getAllCards()), b = 0, c = 1, d = 0; d < a.length; d++)
                c++, a[d].getNumber() == c && b++;
            return 13 == b;
        };
        DetectPlayerCards.prototype.isMuoiBaCayDongMau = function () {
            for (var a = this.getAllCards(), b = 0, c = 0, d = 0; d < a.length; d++)
                a[d].getColor() == MauBinh_Cmd_1.default.Code.BLACK ? b++ : c++;
            return 13 == b || 13 == c;
        };
        DetectPlayerCards.prototype.isMuoiHaiCayDongMau = function () {
            for (var a = this.getAllCards(), b = 0, c = 0, d = 0; d < a.length; d++)
                a[d].getColor() == MauBinh_Cmd_1.default.Code.BLACK ? b++ : c++;
            return 12 == b || 12 == c;
        };
        DetectPlayerCards.prototype.isBaCaiThung = function () {
            if (!(this.chiDau.groupKind != MauBinh_Cmd_1.default.Code.GROUP_THUNG_PHA_SANH && this.chiDau.groupKind != MauBinh_Cmd_1.default.Code.GROUP_THUNG || this.chiGiua.groupKind != MauBinh_Cmd_1.default.Code.GROUP_THUNG_PHA_SANH && this.chiGiua.groupKind != MauBinh_Cmd_1.default.Code.GROUP_THUNG)) {
                var a = this.chiCuoi.cardList;
                if (a[0].getSuit() == a[1].getSuit() && a[1].getSuit() == a[2].getSuit())
                    return !0;
            }
            return !1;
        };
        DetectPlayerCards.prototype.isBaCaiSanh = function () {
            if (!(this.chiDau.groupKind != MauBinh_Cmd_1.default.Code.GROUP_THUNG_PHA_SANH && this.chiDau.groupKind != MauBinh_Cmd_1.default.Code.GROUP_SANH || this.chiGiua.groupKind != MauBinh_Cmd_1.default.Code.GROUP_THUNG_PHA_SANH && this.chiGiua.groupKind != MauBinh_Cmd_1.default.Code.GROUP_SANH)) {
                var a = this.getSortedCardListFromList(this.chiCuoi.cardList);
                if (a[0].getNumber() + 1 == a[1].getNumber() && a[1].getNumber() + 1 == a[2].getNumber() || 2 == a[0].getNumber() &&
                    3 == a[1].getNumber() && 14 == a[2].getNumber())
                    return !0;
            }
            return !1;
        };
        DetectPlayerCards.prototype.haveSauDoi = function () {
            for (var a = this.getSortedCardListFromList(this.getAllCards()), b = 0, c = 0; c < a.length;)
                c + 1 < a.length && a[c + 1].getNumber() == a[c].getNumber() && (b++, c++), c++;
            return 6 == b;
        };
        DetectPlayerCards.prototype.isLucPheBon = function () {
            return this.haveSauDoi() && this.chiDau.groupKind == MauBinh_Cmd_1.default.Code.GROUP_THU && this.chiGiua.groupKind == MauBinh_Cmd_1.default.Code.GROUP_THU && this.chiCuoi.groupKind == MauBinh_Cmd_1.default.Code.GROUP_MOT_DOI ? !0 : !1;
        };
        DetectPlayerCards.prototype.isBinhLung = function (a) {
            return 0 > this.compareChi(this.chiDau, this.chiGiua, a) || 0 > this.compareChi(this.chiGiua, this.chiCuoi, a) ? !0 : !1;
        };
        DetectPlayerCards.prototype.getSortedCardListFromList = function (a) {
            for (var b = [], c = 0; c < a.length; c++)
                b.push(a[c]);
            for (c = 0; c < b.length - 1; c++)
                for (a = c + 1; a < b.length; a++)
                    if (b[c].getId() > b[a].getId()) {
                        var d = b[c];
                        b[c] = b[a];
                        b[a] = d;
                    }
            return b;
        };
        DetectPlayerCards.prototype.compareChi = function (a, b, c) {
            if (a.groupKind > b.groupKind)
                return -1;
            if (a.groupKind < b.groupKind)
                return 1;
            if (c) {
                var d = a.getGroupKindLevel(c);
                c = b.getGroupKindLevel(c);
                if (d > c)
                    return -1;
                if (d < c)
                    return 1;
            }
            for (d = 0; d < a.valueList.length; d++) {
                if (a.valueList[d] > b.valueList[d])
                    return 1;
                if (a.valueList[d] < b.valueList[d])
                    return -1;
            }
            return 0;
        };
        return DetectPlayerCards;
    }());
    maubinh.DetectPlayerCards = DetectPlayerCards;
})(maubinh = exports.maubinh || (exports.maubinh = {}));
exports.default = maubinh.DetectPlayerCards;

cc._RF.pop();