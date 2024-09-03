"use strict";
cc._RF.push(module, '64e01WTFY9HWKELM3zTT4BQ', 'TienLen.CardGoup');
// Lobby/LobbyScript/TienLenScript/TienLen.CardGoup.ts

"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var TypeOfTurn = {
    MOT_LA: 1,
    MOT_DOI: 2,
    HAI_DOI_THONG: 12,
    SAM_CO: 3,
    SANH: 4,
    TU_QUY: 5,
    HAI_TU_QUY: 25,
    BA_DOI_THONG: 6,
    BON_DOI_THONG: 7,
    NAM_DOI_THONG: 8,
    SAU_DOI_THUONG: 9,
    SAU_DOI_THONG: 10,
    SANH_RONG: 11
};
var CardGroup = /** @class */ (function () {
    function CardGroup(cards) {
        this.cards = null;
        this.cardsBySuits = null;
        this.cards = CardGroup.sortCards(cards);
        this.cardsBySuits = new Map();
        var _cardsBySuits = this.cardsBySuits;
        cards.forEach(function (value, i) {
            if (_cardsBySuits.get(value.card) === undefined)
                _cardsBySuits.set(value.card, [value]);
            else {
                var currCards = _cardsBySuits.get(value.card);
                currCards.push(value);
            }
        });
    }
    CardGroup.prototype.getOrderedBySuit = function () {
        var e_1, _a, e_2, _b, e_3, _c, e_4, _d, e_5, _e;
        var newMap = new Map(this.cardsBySuits);
        var orderedCards = [];
        try {
            //tu quy
            for (var newMap_1 = __values(newMap), newMap_1_1 = newMap_1.next(); !newMap_1_1.done; newMap_1_1 = newMap_1.next()) {
                var _f = __read(newMap_1_1.value, 2), key = _f[0], value = _f[1];
                if (value.length == 4) {
                    orderedCards = orderedCards.concat(value);
                    newMap.delete(key);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (newMap_1_1 && !newMap_1_1.done && (_a = newMap_1.return)) _a.call(newMap_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            //3 doi thong
            for (var newMap_2 = __values(newMap), newMap_2_1 = newMap_2.next(); !newMap_2_1.done; newMap_2_1 = newMap_2.next()) {
                var _g = __read(newMap_2_1.value, 2), key = _g[0], value = _g[1];
                if (value.length >= 2) {
                    var _key = CardGroup.getNextKey(key);
                    if (newMap.get(_key) && newMap.get(_key).length >= 2) {
                        var __key = CardGroup.getNextKey(_key);
                        if (newMap.get(__key) && newMap.get(__key).length >= 2) {
                            orderedCards = orderedCards.concat([value.shift(), value.shift()]);
                            if (value.length <= 0)
                                newMap.delete(key);
                            var _value = newMap.get(_key);
                            orderedCards = orderedCards.concat([_value.shift(), _value.shift()]);
                            if (_value.length <= 0)
                                newMap.delete(_key);
                            var __value = newMap.get(__key);
                            orderedCards = orderedCards.concat([__value.shift(), __value.shift()]);
                            if (__value.length <= 0)
                                newMap.delete(__key);
                            var ___key = CardGroup.getNextKey(__key);
                            if (newMap.get(___key) && newMap.get(___key).length >= 2) {
                                // 4 doi thong
                                var ___value = newMap.get(___key);
                                orderedCards = orderedCards.concat([___value.shift(), ___value.shift()]);
                                if (___value.length <= 0)
                                    newMap.delete(___key);
                            }
                            break;
                        }
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (newMap_2_1 && !newMap_2_1.done && (_b = newMap_2.return)) _b.call(newMap_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        try {
            for (var newMap_3 = __values(newMap), newMap_3_1 = newMap_3.next(); !newMap_3_1.done; newMap_3_1 = newMap_3.next()) {
                var _h = __read(newMap_3_1.value, 2), key = _h[0], value = _h[1];
                if (value.length == 3) {
                    orderedCards = orderedCards.concat(value);
                    newMap.delete(key);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (newMap_3_1 && !newMap_3_1.done && (_c = newMap_3.return)) _c.call(newMap_3);
            }
            finally { if (e_3) throw e_3.error; }
        }
        do {
            var sequenceSuites = CardGroup.getFirstSequenceSuit(__spread(newMap.keys()), 3);
            if (sequenceSuites) {
                sequenceSuites.forEach(function (_value, i) {
                    orderedCards = orderedCards.concat([newMap.get(_value).shift()]);
                    if (newMap.get(_value).length <= 0)
                        newMap.delete(_value);
                });
            }
        } while (sequenceSuites);
        try {
            for (var newMap_4 = __values(newMap), newMap_4_1 = newMap_4.next(); !newMap_4_1.done; newMap_4_1 = newMap_4.next()) {
                var _j = __read(newMap_4_1.value, 2), key = _j[0], value = _j[1];
                if (value.length == 2) {
                    orderedCards = orderedCards.concat(value);
                    newMap.delete(key);
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (newMap_4_1 && !newMap_4_1.done && (_d = newMap_4.return)) _d.call(newMap_4);
            }
            finally { if (e_4) throw e_4.error; }
        }
        try {
            for (var newMap_5 = __values(newMap), newMap_5_1 = newMap_5.next(); !newMap_5_1.done; newMap_5_1 = newMap_5.next()) {
                var _k = __read(newMap_5_1.value, 2), key = _k[0], value = _k[1];
                orderedCards = orderedCards.concat(value);
                newMap.delete(key);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (newMap_5_1 && !newMap_5_1.done && (_e = newMap_5.return)) _e.call(newMap_5);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return orderedCards;
    };
    CardGroup.prototype.getCardType = function () {
        var newMap = new Map(this.cardsBySuits);
        var mapSize = newMap.size;
        var keys = __spread(newMap.keys());
        switch (mapSize) {
            case 1:
                if (newMap.get(keys[0]).length == 1)
                    return TypeOfTurn.MOT_LA;
                else if (newMap.get(keys[0]).length == 2)
                    return TypeOfTurn.MOT_DOI;
                else if (newMap.get(keys[0]).length == 3)
                    return TypeOfTurn.SAM_CO;
                else
                    return TypeOfTurn.TU_QUY;
            // break;
            case 2:
                return TypeOfTurn.HAI_TU_QUY;
            // break;
            case 3:
                if (newMap.get(keys[0]).length == 1)
                    return TypeOfTurn.SANH;
                else
                    return TypeOfTurn.BA_DOI_THONG;
            // break;
            case 4:
                if (newMap.get(keys[0]).length == 1)
                    return TypeOfTurn.SANH;
                else
                    return TypeOfTurn.BON_DOI_THONG;
            // break;
            default:
                return TypeOfTurn.SANH;
            // break;
        }
    };
    CardGroup.prototype.getSuitableCards = function (submitCards) {
        var e_6, _a, e_7, _b, e_8, _c, e_9, _d, e_10, _e, e_11, _f, e_12, _g;
        var submitCardGroup = new CardGroup(submitCards);
        var submitCardType = submitCardGroup.getCardType();
        var maxSubmitCard = CardGroup.getMaxCardOfCards(submitCards);
        var newMap = new Map(this.cardsBySuits);
        switch (submitCardType) {
            case TypeOfTurn.MOT_LA:
                for (var i = 0; i < this.cards.length; i++) {
                    if (CardGroup.point(this.cards[i]) > CardGroup.point(maxSubmitCard))
                        return [this.cards[i]];
                }
                break;
            case TypeOfTurn.MOT_DOI:
                try {
                    for (var newMap_6 = __values(newMap), newMap_6_1 = newMap_6.next(); !newMap_6_1.done; newMap_6_1 = newMap_6.next()) {
                        var _h = __read(newMap_6_1.value, 2), key = _h[0], value = _h[1];
                        if (value.length == 1)
                            continue;
                        if (value.length >= 2) {
                            for (var i = 0; i < value.length; i++) {
                                if (CardGroup.point(value[i]) > CardGroup.point(maxSubmitCard))
                                    return [value.shift(), value.shift()];
                            }
                        }
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (newMap_6_1 && !newMap_6_1.done && (_a = newMap_6.return)) _a.call(newMap_6);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
                break;
            case TypeOfTurn.SAM_CO:
                try {
                    for (var newMap_7 = __values(newMap), newMap_7_1 = newMap_7.next(); !newMap_7_1.done; newMap_7_1 = newMap_7.next()) {
                        var _j = __read(newMap_7_1.value, 2), key = _j[0], value = _j[1];
                        if (value.length < 3)
                            continue;
                        if (key > maxSubmitCard.card)
                            return [value.shift(), value.shift(), value.shift()];
                    }
                }
                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                finally {
                    try {
                        if (newMap_7_1 && !newMap_7_1.done && (_b = newMap_7.return)) _b.call(newMap_7);
                    }
                    finally { if (e_7) throw e_7.error; }
                }
                break;
            case TypeOfTurn.TU_QUY:
                try {
                    for (var newMap_8 = __values(newMap), newMap_8_1 = newMap_8.next(); !newMap_8_1.done; newMap_8_1 = newMap_8.next()) {
                        var _k = __read(newMap_8_1.value, 2), key = _k[0], value = _k[1];
                        if (value.length < 4)
                            continue;
                        if (key > maxSubmitCard.card)
                            return [value];
                    }
                }
                catch (e_8_1) { e_8 = { error: e_8_1 }; }
                finally {
                    try {
                        if (newMap_8_1 && !newMap_8_1.done && (_c = newMap_8.return)) _c.call(newMap_8);
                    }
                    finally { if (e_8) throw e_8.error; }
                }
                try {
                    for (var newMap_9 = __values(newMap), newMap_9_1 = newMap_9.next(); !newMap_9_1.done; newMap_9_1 = newMap_9.next()) {
                        var _l = __read(newMap_9_1.value, 2), key = _l[0], value = _l[1];
                        if (value.length >= 2) {
                            var _key = CardGroup.getNextKey(key);
                            if (newMap.get(_key) && newMap.get(_key).length >= 2) {
                                var __key = CardGroup.getNextKey(_key);
                                if (newMap.get(__key) && newMap.get(__key).length >= 2) {
                                    var ___key = CardGroup.getNextKey(__key);
                                    if (newMap.get(___key) && newMap.get(___key).length >= 2) {
                                        // 4 doi thong
                                        var orderedCards = [value.shift(), value.shift()];
                                        var _value = newMap.get(_key);
                                        orderedCards = orderedCards.concat([_value.shift(), _value.shift()]);
                                        var __value = newMap.get(__key);
                                        orderedCards = orderedCards.concat([__value.shift(), __value.shift()]);
                                        var ___value = newMap.get(___key);
                                        orderedCards = orderedCards.concat([___value.shift(), ___value.shift()]);
                                        return orderedCards;
                                    }
                                    break;
                                }
                            }
                        }
                    }
                }
                catch (e_9_1) { e_9 = { error: e_9_1 }; }
                finally {
                    try {
                        if (newMap_9_1 && !newMap_9_1.done && (_d = newMap_9.return)) _d.call(newMap_9);
                    }
                    finally { if (e_9) throw e_9.error; }
                }
                break;
            case TypeOfTurn.HAI_TU_QUY:
                break;
            case TypeOfTurn.BA_DOI_THONG:
                try {
                    for (var newMap_10 = __values(newMap), newMap_10_1 = newMap_10.next(); !newMap_10_1.done; newMap_10_1 = newMap_10.next()) {
                        var _m = __read(newMap_10_1.value, 2), key = _m[0], value = _m[1];
                        if (value.length < 4)
                            continue;
                        return [value];
                    }
                }
                catch (e_10_1) { e_10 = { error: e_10_1 }; }
                finally {
                    try {
                        if (newMap_10_1 && !newMap_10_1.done && (_e = newMap_10.return)) _e.call(newMap_10);
                    }
                    finally { if (e_10) throw e_10.error; }
                }
                try {
                    for (var newMap_11 = __values(newMap), newMap_11_1 = newMap_11.next(); !newMap_11_1.done; newMap_11_1 = newMap_11.next()) {
                        var _o = __read(newMap_11_1.value, 2), key = _o[0], value = _o[1];
                        if (value.length >= 2) {
                            var _key = CardGroup.getNextKey(key);
                            if (newMap.get(_key) && newMap.get(_key).length >= 2) {
                                var __key = CardGroup.getNextKey(_key);
                                if (newMap.get(__key) && newMap.get(__key).length >= 2) {
                                    var orderedCards = [value.shift(), value.shift()];
                                    var _value = newMap.get(_key);
                                    orderedCards = orderedCards.concat([_value.shift(), _value.shift()]);
                                    var __value = newMap.get(__key);
                                    orderedCards = orderedCards.concat([__value.shift(), __value.shift()]);
                                    var maxCard = CardGroup.getMaxCardOfCards(orderedCards);
                                    if (CardGroup.point(maxCard) > CardGroup.point(maxSubmitCard))
                                        return orderedCards;
                                    var ___key = CardGroup.getNextKey(__key);
                                    if (newMap.get(___key) && newMap.get(___key).length >= 2) {
                                        // 4 doi thong
                                        var ___value = newMap.get(___key);
                                        orderedCards = orderedCards.concat([___value.shift(), ___value.shift()]);
                                        return orderedCards;
                                    }
                                    break;
                                }
                            }
                        }
                    }
                }
                catch (e_11_1) { e_11 = { error: e_11_1 }; }
                finally {
                    try {
                        if (newMap_11_1 && !newMap_11_1.done && (_f = newMap_11.return)) _f.call(newMap_11);
                    }
                    finally { if (e_11) throw e_11.error; }
                }
                break;
            case TypeOfTurn.BON_DOI_THONG:
                try {
                    for (var newMap_12 = __values(newMap), newMap_12_1 = newMap_12.next(); !newMap_12_1.done; newMap_12_1 = newMap_12.next()) {
                        var _p = __read(newMap_12_1.value, 2), key = _p[0], value = _p[1];
                        if (value.length >= 2) {
                            var _key = CardGroup.getNextKey(key);
                            if (newMap.get(_key) && newMap.get(_key).length >= 2) {
                                var __key = CardGroup.getNextKey(_key);
                                if (newMap.get(__key) && newMap.get(__key).length >= 2) {
                                    var ___key = CardGroup.getNextKey(__key);
                                    if (newMap.get(___key) && newMap.get(___key).length >= 2) {
                                        // 4 doi thong
                                        var orderedCards = [value.shift(), value.shift()];
                                        var _value = newMap.get(_key);
                                        orderedCards = orderedCards.concat([_value.shift(), _value.shift()]);
                                        var __value = newMap.get(__key);
                                        orderedCards = orderedCards.concat([__value.shift(), __value.shift()]);
                                        var ___value = newMap.get(___key);
                                        orderedCards = orderedCards.concat([___value.shift(), ___value.shift()]);
                                        var maxCard = CardGroup.getMaxCardOfCards(orderedCards);
                                        if (CardGroup.point(maxCard) > CardGroup.point(maxSubmitCard))
                                            return orderedCards;
                                    }
                                    break;
                                }
                            }
                        }
                    }
                }
                catch (e_12_1) { e_12 = { error: e_12_1 }; }
                finally {
                    try {
                        if (newMap_12_1 && !newMap_12_1.done && (_g = newMap_12.return)) _g.call(newMap_12);
                    }
                    finally { if (e_12) throw e_12.error; }
                }
                break;
            case TypeOfTurn.SANH:
                var count = submitCards.length;
                return this.getSequenceSuitBySize(newMap, count, maxSubmitCard);
                break;
            default:
                break;
        }
        return null;
    };
    CardGroup.prototype.getSuggestionNoCards = function (listSelected, data, isCheck) {
        if (isCheck === void 0) { isCheck = false; }
        var listSuggestion;
        if (!isCheck) {
            listSuggestion = this.get_BON_DOI_THONG([], listSelected);
            if (listSuggestion.length > 0) {
                return listSuggestion;
            }
            listSuggestion = this.get_BA_DOI_THONG([], listSelected);
            if (listSuggestion.length > 0) {
                return listSuggestion;
            }
            listSuggestion = this.get_TU_QUY([], listSelected);
            if (listSuggestion.length > 0) {
                return listSuggestion;
            }
            listSuggestion = this.getSequenceSuitBySize([], data, listSelected);
            if (listSuggestion.length > 0) {
                return listSuggestion;
            }
            listSuggestion = this.get_SAM_CO([], listSelected);
            if (listSuggestion.length > 0) {
                return listSuggestion;
            }
        }
        else {
            listSuggestion = this.get_TU_QUY([], listSelected);
            if (listSuggestion.length > 0) {
                return listSuggestion;
            }
            listSuggestion = this.get_BON_DOI_THONG([], listSelected);
            if (listSuggestion.length > 0) {
                return listSuggestion;
            }
            listSuggestion = this.get_BA_DOI_THONG([], listSelected);
            if (listSuggestion.length > 0) {
                return listSuggestion;
            }
        }
        if (listSuggestion.length > 0) {
            return listSuggestion;
        }
        return null;
    };
    CardGroup.prototype.getSuggestionCards = function (submitCards, data, callback) {
        var e_13, _a, e_14, _b, e_15, _c;
        var submitCardGroup = new CardGroup(submitCards);
        var submitCardType = submitCardGroup.getCardType();
        //Utils.Log("submitCards=",submitCards);
        //Utils.Log("Submit card type=" + submitCardType);
        var maxSubmitCard = CardGroup.getMaxCardOfCards(submitCards);
        var newMap = new Map(this.cardsBySuits);
        var listSuggestion = new Array();
        switch (submitCardType) {
            case TypeOfTurn.MOT_LA:
                if (submitCards[0].card != 2) {
                    for (var i = 0; i < this.cards.length; i++) {
                        if (CardGroup.point(this.cards[i]) > CardGroup.point(maxSubmitCard))
                            listSuggestion.push([this.cards[i]]);
                    }
                }
                else {
                    return callback();
                }
                break;
            case TypeOfTurn.MOT_DOI:
                try {
                    for (var newMap_13 = __values(newMap), newMap_13_1 = newMap_13.next(); !newMap_13_1.done; newMap_13_1 = newMap_13.next()) {
                        var _d = __read(newMap_13_1.value, 2), key = _d[0], value = _d[1];
                        if (value.length == 1)
                            continue;
                        if (value.length >= 2) {
                            for (var i = 0; i < value.length; i++) {
                                if (CardGroup.point(value[i]) > CardGroup.point(maxSubmitCard))
                                    listSuggestion.push([value.shift(), value.shift()]);
                            }
                        }
                    }
                }
                catch (e_13_1) { e_13 = { error: e_13_1 }; }
                finally {
                    try {
                        if (newMap_13_1 && !newMap_13_1.done && (_a = newMap_13.return)) _a.call(newMap_13);
                    }
                    finally { if (e_13) throw e_13.error; }
                }
                break;
            case TypeOfTurn.SAM_CO:
                try {
                    for (var newMap_14 = __values(newMap), newMap_14_1 = newMap_14.next(); !newMap_14_1.done; newMap_14_1 = newMap_14.next()) {
                        var _e = __read(newMap_14_1.value, 2), key = _e[0], value = _e[1];
                        if (value.length < 3)
                            continue;
                        if (key > maxSubmitCard.card)
                            listSuggestion.push([value.shift(), value.shift(), value.shift()]);
                    }
                }
                catch (e_14_1) { e_14 = { error: e_14_1 }; }
                finally {
                    try {
                        if (newMap_14_1 && !newMap_14_1.done && (_b = newMap_14.return)) _b.call(newMap_14);
                    }
                    finally { if (e_14) throw e_14.error; }
                }
                break;
            case TypeOfTurn.TU_QUY:
                listSuggestion = this.get_BON_DOI_THONG(submitCards);
                if (listSuggestion.length > 0)
                    return listSuggestion;
                listSuggestion = this.get_TU_QUY(submitCards);
                break;
            case TypeOfTurn.HAI_TU_QUY:
                listSuggestion = this.get_TU_QUY(submitCards);
                break;
            case TypeOfTurn.BA_DOI_THONG:
                listSuggestion = this.get_BON_DOI_THONG(submitCards);
                if (listSuggestion.length > 0)
                    return listSuggestion;
                listSuggestion = this.get_TU_QUY(submitCards);
                if (listSuggestion.length > 0)
                    return listSuggestion;
                listSuggestion = this.get_BA_DOI_THONG(submitCards);
                break;
            case TypeOfTurn.BON_DOI_THONG:
                try {
                    for (var newMap_15 = __values(newMap), newMap_15_1 = newMap_15.next(); !newMap_15_1.done; newMap_15_1 = newMap_15.next()) {
                        var _f = __read(newMap_15_1.value, 2), key = _f[0], value = _f[1];
                        if (value.length >= 2) {
                            var _key = CardGroup.getNextKey(key);
                            if (newMap.get(_key) && newMap.get(_key).length >= 2) {
                                var __key = CardGroup.getNextKey(_key);
                                if (newMap.get(__key) && newMap.get(__key).length >= 2) {
                                    var ___key = CardGroup.getNextKey(__key);
                                    if (newMap.get(___key) && newMap.get(___key).length >= 2) {
                                        // 4 doi thong
                                        var orderedCards = [value.shift(), value.shift()];
                                        var _value = newMap.get(_key);
                                        orderedCards = orderedCards.concat([_value.shift(), _value.shift()]);
                                        var __value = newMap.get(__key);
                                        orderedCards = orderedCards.concat([__value.shift(), __value.shift()]);
                                        var ___value = newMap.get(___key);
                                        orderedCards = orderedCards.concat([___value.shift(), ___value.shift()]);
                                        var maxCard = CardGroup.getMaxCardOfCards(orderedCards);
                                        if (CardGroup.point(maxCard) > CardGroup.point(maxSubmitCard))
                                            listSuggestion.push(orderedCards);
                                    }
                                    break;
                                }
                            }
                        }
                    }
                }
                catch (e_15_1) { e_15 = { error: e_15_1 }; }
                finally {
                    try {
                        if (newMap_15_1 && !newMap_15_1.done && (_c = newMap_15.return)) _c.call(newMap_15);
                    }
                    finally { if (e_15) throw e_15.error; }
                }
                break;
            case TypeOfTurn.SANH:
                listSuggestion = this.getSequenceSuitBySize(submitCards, data);
                break;
            default:
                break;
        }
        if (listSuggestion.length > 0) {
            return listSuggestion;
        }
        else
            return null;
    };
    CardGroup.prototype.getSequenceSuitBySize = function (submitCards, data, listSelected) {
        var e_16, _a, e_17, _b;
        if (listSelected === void 0) { listSelected = null; }
        if (submitCards.length > 0) {
            var listCard = new Array();
            try {
                for (var _c = __values(new Map(this.cardsBySuits)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var _e = __read(_d.value, 2), key = _e[0], value = _e[1];
                    listCard.push({ card: key, value: value });
                }
            }
            catch (e_16_1) { e_16 = { error: e_16_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_16) throw e_16.error; }
            }
            var listTmp = new Array();
            var listSg = new Array();
            listCard.sort(function (a, b) { return (a.card == 1 ? 14 : a.card) - (b.card == 1 ? 14 : b.card); }); // sx tang dan;
            for (var i = 0; i < listCard.length; i++) {
                if ((listCard[i].card == 1 ? 14 : listCard[i].card) >= submitCards[0].card) {
                    if (i + 1 < listCard.length && (listCard[i].card == 1 ? 14 : listCard[i].card) == (listCard[i + 1].card == 1 ? 14 : listCard[i + 1].card) - 1)
                        listTmp.push(listCard[i]);
                    else {
                        listTmp.push(listCard[i]);
                        if (listTmp.length >= submitCards.length) {
                            var index = listTmp.findIndex(function (e) { return (e.value.findIndex(function (e2) { return (e2.card == data.card && e2.face == data.face); }) >= 0); });
                            if (index >= 0) {
                                for (var i_1 = 0; i_1 <= listTmp.length - submitCards.length; i_1++) {
                                    var tmp = new Array();
                                    for (var j = i_1; j < i_1 + submitCards.length; j++)
                                        if (listTmp[j].card == data.card)
                                            tmp.push(data);
                                        else
                                            tmp.push(listTmp[j].value[0]);
                                    listSg.push(tmp);
                                }
                                break;
                            }
                        }
                        listTmp = new Array();
                    }
                }
            }
            return listSg;
        }
        else if (listSelected != null) {
            if (listSelected.length >= 2) {
                var listCard = new Array();
                try {
                    for (var _f = __values(new Map(this.cardsBySuits)), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var _h = __read(_g.value, 2), key = _h[0], value = _h[1];
                        listCard.push({ card: key, value: value });
                    }
                }
                catch (e_17_1) { e_17 = { error: e_17_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                    }
                    finally { if (e_17) throw e_17.error; }
                }
                var listTmp_1 = new Array();
                var listSg = new Array();
                listCard.sort(function (a, b) { return (a.card == 1 ? 14 : a.card) - (b.card == 1 ? 14 : b.card); }); // sx tang dan;
                var _loop_1 = function (i) {
                    if ((listCard[i].card == 1 ? 14 : listCard[i].card) >= 3) {
                        if (i + 1 < listCard.length && (listCard[i].card == 1 ? 14 : listCard[i].card) == (listCard[i + 1].card == 1 ? 14 : listCard[i + 1].card) - 1)
                            listTmp_1.push(listCard[i]);
                        else {
                            listTmp_1.push(listCard[i]);
                            if (listTmp_1.length >= 3) {
                                var index = listTmp_1.findIndex(function (e) { return e.value.findIndex(function (e2) { return (e2.card == data.card && e2.face == data.face); }) >= 0; });
                                if (index >= 0) {
                                    var tmp_1 = new Array();
                                    var _loop_2 = function (j) {
                                        if (listTmp_1[j].card == data.card)
                                            tmp_1.push(data);
                                        else if (listSelected.findIndex(function (e) { return CardGroup.indexToCard(e.index).card == listTmp_1[j].card; }) >= 0) {
                                            _index = listSelected.findIndex(function (e) { return CardGroup.indexToCard(e.index).card == listTmp_1[j].card; });
                                            tmp_1.push(CardGroup.indexToCard(listSelected[_index].index));
                                        }
                                        else
                                            tmp_1.push(listTmp_1[j].value[0]);
                                    };
                                    for (var j = 0; j < listTmp_1.length; j++) {
                                        _loop_2(j);
                                    }
                                    if (listSelected.filter(function (e) { return tmp_1.findIndex(function (e2) { return (CardGroup.indexToCard(e.index).card == e2.card && CardGroup.indexToCard(e.index).face == e2.face); }) >= 0; }).length >= 2) {
                                        listSg.push(tmp_1);
                                        return { value: listSg };
                                    }
                                }
                            }
                            listTmp_1 = new Array();
                        }
                    }
                };
                var _index;
                for (var i = 0; i < listCard.length; i++) {
                    var state_1 = _loop_1(i);
                    if (typeof state_1 === "object")
                        return state_1.value;
                }
                return listSg;
            }
            else
                return [];
        }
        return [];
    };
    CardGroup.prototype.get_BA_DOI_THONG = function (submitCards, listSelected) {
        var e_18, _a, e_19, _b;
        if (listSelected === void 0) { listSelected = null; }
        if (submitCards.length > 0) {
            var listCard = new Array();
            var listTmp2 = new Array();
            var listTmp = new Array();
            var listSg = new Array();
            try {
                for (var _c = __values(new Map(this.cardsBySuits)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var _e = __read(_d.value, 2), key = _e[0], value = _e[1];
                    listCard.push({ card: key, value: value });
                }
            }
            catch (e_18_1) { e_18 = { error: e_18_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_18) throw e_18.error; }
            }
            for (var i = 0; i < listCard.length; i++) {
                if (i + 1 < listCard.length
                    && CardGroup.cardRank(listCard[i].card) == CardGroup.cardRank(listCard[i + 1].card) - 1
                    && listCard[i].value.length >= 2 && listCard[i + 1].value.length >= 2) {
                    listTmp.push(listCard[i]);
                }
                else {
                    if (listCard[i].value.length >= 2) {
                        listTmp.push(listCard[i]);
                    }
                    if (listTmp.length >= 3)
                        listTmp2.push(listTmp);
                    listTmp = new Array();
                }
            }
            for (var i = 0; i < listTmp2.length; i++) {
                for (var j = 0; j < listTmp2[i].length - 2; j++) {
                    var tmp = new Array();
                    for (var l = j; l < j + 3; l++) {
                        for (var k = 0; k < 2; k++)
                            tmp.push(listTmp2[i][l].value[k]);
                    }
                    listSg.push(tmp);
                }
            }
            return listSg;
        }
        else {
            var listSg = new Array();
            if (listSelected.length >= 2) {
                var listCard = new Array();
                var listTmp2 = new Array();
                var listTmp = new Array();
                try {
                    for (var _f = __values(new Map(this.cardsBySuits)), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var _h = __read(_g.value, 2), key = _h[0], value = _h[1];
                        listCard.push({ card: key, value: value });
                    }
                }
                catch (e_19_1) { e_19 = { error: e_19_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                    }
                    finally { if (e_19) throw e_19.error; }
                }
                for (var i = 0; i < listCard.length; i++) {
                    if (i + 1 < listCard.length
                        && CardGroup.cardRank(listCard[i].card) == CardGroup.cardRank(listCard[i + 1].card) - 1
                        && listCard[i].value.length >= 2 && listCard[i + 1].value.length >= 2) {
                        listTmp.push(listCard[i]);
                    }
                    else {
                        if (listCard[i].value.length >= 2) {
                            listTmp.push(listCard[i]);
                        }
                        if (listTmp.length >= 3)
                            listTmp2.push(listTmp);
                        listTmp = new Array();
                    }
                }
                for (var i = 0; i < listTmp2.length; i++) {
                    var _loop_3 = function (j) {
                        var tmp = new Array();
                        for (var l = j; l < j + 3; l++) {
                            for (var k = 0; k < 2; k++)
                                tmp.push(listTmp2[i][l].value[k]);
                        }
                        if (listSelected.filter(function (e) { return tmp.findIndex(function (e2) { return (CardGroup.indexToCard(e.index).card == e2.card && CardGroup.indexToCard(e.index).face == e2.face); }) >= 0; }).length >= 2) {
                            listSg.push(tmp);
                            return { value: listSg };
                        }
                    };
                    for (var j = 0; j < listTmp2[i].length - 2; j++) {
                        var state_2 = _loop_3(j);
                        if (typeof state_2 === "object")
                            return state_2.value;
                    }
                }
            }
            return listSg;
        }
    };
    CardGroup.prototype.get_BON_DOI_THONG = function (submitCards, listSelected) {
        var e_20, _a, e_21, _b;
        if (listSelected === void 0) { listSelected = null; }
        if (submitCards.length > 0) {
            var listCard = new Array();
            var listTmp2 = new Array();
            var listTmp = new Array();
            var listSg = new Array();
            try {
                for (var _c = __values(new Map(this.cardsBySuits)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var _e = __read(_d.value, 2), key = _e[0], value = _e[1];
                    listCard.push({ card: key, value: value });
                }
            }
            catch (e_20_1) { e_20 = { error: e_20_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_20) throw e_20.error; }
            }
            for (var i = 0; i < listCard.length; i++) {
                if (i + 1 < listCard.length
                    && CardGroup.cardRank(listCard[i].card) == CardGroup.cardRank(listCard[i + 1].card) - 1
                    && listCard[i].value.length >= 2 && listCard[i + 1].value.length >= 2) {
                    listTmp.push(listCard[i]);
                }
                else {
                    if (listCard[i].value.length >= 2) {
                        listTmp.push(listCard[i]);
                    }
                    if (listTmp.length >= 3)
                        listTmp2.push(listTmp);
                    listTmp = new Array();
                }
            }
            for (var i = 0; i < listTmp2.length; i++) {
                for (var j = 0; j < listTmp2[i].length - 3; j++) {
                    var tmp = new Array();
                    for (var l = j; l < j + 4; l++) {
                        for (var k = 0; k < 2; k++)
                            tmp.push(listTmp2[i][l].value[k]);
                    }
                    listSg.push(tmp);
                }
            }
            return listSg;
        }
        else {
            var listSg = new Array();
            if (listSelected.length >= 2) {
                var listCard = new Array();
                var listTmp2 = new Array();
                var listTmp = new Array();
                try {
                    for (var _f = __values(new Map(this.cardsBySuits)), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var _h = __read(_g.value, 2), key = _h[0], value = _h[1];
                        listCard.push({ card: key, value: value });
                    }
                }
                catch (e_21_1) { e_21 = { error: e_21_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                    }
                    finally { if (e_21) throw e_21.error; }
                }
                for (var i = 0; i < listCard.length; i++) {
                    if (i + 1 < listCard.length
                        && CardGroup.cardRank(listCard[i].card) == CardGroup.cardRank(listCard[i + 1].card) - 1
                        && listCard[i].value.length >= 2 && listCard[i + 1].value.length >= 2) {
                        listTmp.push(listCard[i]);
                    }
                    else {
                        if (listCard[i].value.length >= 2) {
                            listTmp.push(listCard[i]);
                        }
                        if (listTmp.length >= 3)
                            listTmp2.push(listTmp);
                        listTmp = new Array();
                    }
                }
                for (var i = 0; i < listTmp2.length; i++) {
                    var _loop_4 = function (j) {
                        var tmp = new Array();
                        for (var l = j; l < j + 4; l++) {
                            for (var k = 0; k < 2; k++)
                                tmp.push(listTmp2[i][l].value[k]);
                        }
                        if (listSelected.filter(function (e) { return tmp.findIndex(function (e2) { return (CardGroup.indexToCard(e.index).card == e2.card && CardGroup.indexToCard(e.index).face == e2.face); }) >= 0; }).length >= 2) {
                            listSg.push(tmp);
                            return { value: listSg };
                        }
                    };
                    for (var j = 0; j < listTmp2[i].length - 3; j++) {
                        var state_3 = _loop_4(j);
                        if (typeof state_3 === "object")
                            return state_3.value;
                    }
                }
            }
            return listSg;
        }
    };
    CardGroup.prototype.get_TU_QUY = function (submitCards, listSelected) {
        var e_22, _a, e_23, _b;
        if (listSelected === void 0) { listSelected = null; }
        if (submitCards.length > 0) {
            var listSg = new Array();
            try {
                for (var _c = __values(new Map(this.cardsBySuits)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var _e = __read(_d.value, 2), key = _e[0], value = _e[1];
                    if (value.length == 4) {
                        listSg.push(value);
                    }
                }
            }
            catch (e_22_1) { e_22 = { error: e_22_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_22) throw e_22.error; }
            }
            return listSg;
        }
        else {
            var listSg = new Array();
            if (listSelected.length >= 2) {
                try {
                    for (var _f = __values(new Map(this.cardsBySuits)), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var _h = __read(_g.value, 2), key = _h[0], value = _h[1];
                        if (value.length == 4 && listSelected.filter(function (e) { return value.findIndex(function (e2) { return (CardGroup.indexToCard(e.index).card == e2.card && CardGroup.indexToCard(e.index).face == e2.face); }) >= 0; }).length >= 2) {
                            listSg.push(value);
                            return listSg;
                        }
                    }
                }
                catch (e_23_1) { e_23 = { error: e_23_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                    }
                    finally { if (e_23) throw e_23.error; }
                }
            }
            return listSg;
        }
    };
    CardGroup.prototype.get_SAM_CO = function (submitCards, listSelected) {
        var e_24, _a;
        if (listSelected === void 0) { listSelected = null; }
        var listSg = new Array();
        if (listSelected.length >= 2) {
            var _loop_5 = function () {
                var tmp = new Array();
                if (value.length < 3)
                    return "continue";
                if (key > 2) {
                    tmp = [value.shift(), value.shift(), value.shift()];
                    if (listSelected.filter(function (e) { return tmp.findIndex(function (e2) { return (CardGroup.indexToCard(e.index).card == e2.card && CardGroup.indexToCard(e.index).face == e2.face); }) >= 0; }).length >= 2) {
                        listSg.push(tmp);
                    }
                    return { value: listSg };
                }
            };
            try {
                for (var _b = __values(new Map(this.cardsBySuits)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                    var state_4 = _loop_5();
                    if (typeof state_4 === "object")
                        return state_4.value;
                }
            }
            catch (e_24_1) { e_24 = { error: e_24_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_24) throw e_24.error; }
            }
        }
        return listSg;
    };
    CardGroup.getMaxCardOfCards = function (cards) {
        return CardGroup.sortCards(cards)[cards.length - 1];
    };
    CardGroup.getNextKey = function (key) {
        return key == 13 ? 1 : key + 1;
    };
    CardGroup.subCards = function (cards, subCards) {
        return cards.filter(function (value) {
            var found = false;
            subCards.forEach(function (_value, i) {
                if (value.card == _value.card
                    && value.face == _value.face) {
                    found = true;
                    return;
                }
            });
            return !found;
        });
    };
    CardGroup.sortSuits = function (suits) {
        suits.sort(function (a, b) {
            return (a + 10) % 13 - (b + 10) % 13;
        });
    };
    CardGroup.sortCards = function (cards) {
        return cards.sort(function (a, b) {
            return CardGroup.point(a) - CardGroup.point(b);
        });
    };
    CardGroup.point = function (card) {
        return (card.card + 10) % 13 * 4 + card.face;
    };
    CardGroup.getFirstSequenceSuit = function (suits, minCount) {
        if (!suits)
            return null;
        if (minCount <= 1 || minCount > suits.length)
            return null;
        var _suits = __spread(suits);
        CardGroup.sortSuits(_suits);
        var temp = [];
        do {
            var curr = _suits.shift();
            if (curr == 2)
                break;
            if (temp.length > 0
                && ((curr != 1 && (curr - temp[temp.length - 1] > 1))
                    || curr == 1 && temp[temp.length - 1] != 13)) {
                if (temp.length >= minCount)
                    return temp;
                temp = [];
            }
            temp.push(curr);
        } while (_suits.length != 0);
        if (temp.length >= minCount)
            return temp;
        return null;
    };
    CardGroup.getFirstSequenceSuitBySize = function (map, count, maxCard) {
        if (!map)
            return null;
        if (count <= 1 || count > map.length)
            return null;
        var _suits = __spread(map.keys());
        CardGroup.sortSuits(_suits);
        var temp = [];
        for (var i = 0; i < _suits.length - 1; i++) {
            var curr = _suits[i];
            var next = _suits[i + 1];
            if (curr == 1) {
                var listCards = map.get(curr);
                for (var j = 0; j < listCards.length; j++) {
                    if (CardGroup.point(listCards[j]) > CardGroup.point(maxCard)) {
                        temp.push(listCards[j]);
                        // return temp;
                    }
                }
            }
            if (curr < maxCard.card - count) {
                map.delete(curr);
                continue;
            }
            if (curr == 2 || next == 2)
                break;
            else if (temp.length == count - 1) {
                var listCards = map.get(curr);
                for (var j = 0; j < listCards.length; j++) {
                    if (CardGroup.point(listCards[j]) > CardGroup.point(maxCard)) {
                        temp.push(listCards[j]);
                        // return temp;
                    }
                }
                map.delete(_suits.shift());
                return CardGroup.getFirstSequenceSuitBySize(map, count, maxCard);
            }
            else if ((next - curr) == 1 || (next == 1 && curr == 13)) {
                var listCards = map.get(curr);
                temp.push(listCards[0]);
            }
            else {
                map.delete(_suits.shift());
                temp.push(CardGroup.getFirstSequenceSuitBySize(map, count, maxCard));
            }
            ;
        }
        if (temp.length == count)
            return temp;
        return null;
    };
    CardGroup.cardRank = function (card) {
        return (card + 10) % 13;
    };
    CardGroup.indexToCard = function (index) {
        var face = index + 1;
        while (face > 4)
            face -= 4;
        var card = (index + 1 - face) / 4 + 3;
        if (card > 13)
            card -= 13;
        return { card: card, face: face };
    };
    CardGroup.indexsToCards = function (indexs) {
        var cards = [];
        indexs.forEach(function (index) {
            cards.push(CardGroup.indexToCard(index));
        });
        return cards;
    };
    CardGroup.cardsToIndexs = function (cards) {
        var indexs = [];
        cards.forEach(function (card) {
            indexs.push(CardGroup.cardToIndex(card));
        });
        return indexs;
    };
    CardGroup.cardToIndex = function (card) {
        return (card.card + 10) % 13 * 4 + card.face - 1;
    };
    return CardGroup;
}());
exports.default = CardGroup;

cc._RF.pop();