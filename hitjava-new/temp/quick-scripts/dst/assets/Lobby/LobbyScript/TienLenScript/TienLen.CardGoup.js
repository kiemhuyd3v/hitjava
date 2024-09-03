
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/TienLenScript/TienLen.CardGoup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxUaWVuTGVuU2NyaXB0XFxUaWVuTGVuLkNhcmRHb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sVUFBVSxHQUFHO0lBQ2xCLE1BQU0sRUFBRSxDQUFDO0lBQ1QsT0FBTyxFQUFFLENBQUM7SUFDVixhQUFhLEVBQUUsRUFBRTtJQUNqQixNQUFNLEVBQUUsQ0FBQztJQUNULElBQUksRUFBRSxDQUFDO0lBQ1AsTUFBTSxFQUFFLENBQUM7SUFDVCxVQUFVLEVBQUUsRUFBRTtJQUNkLFlBQVksRUFBRSxDQUFDO0lBQ2YsYUFBYSxFQUFFLENBQUM7SUFDaEIsYUFBYSxFQUFFLENBQUM7SUFDaEIsY0FBYyxFQUFFLENBQUM7SUFDakIsYUFBYSxFQUFFLEVBQUU7SUFDakIsU0FBUyxFQUFFLEVBQUU7Q0FDYixDQUFBO0FBQ0Q7SUFLQyxtQkFBWSxLQUFLO1FBSGpCLFVBQUssR0FBRyxJQUFJLENBQUM7UUFDYixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUduQixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEdBQUcsRUFBc0IsQ0FBQztRQUNsRCxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3RDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxLQUFLLEVBQUUsQ0FBQztZQUMvQixJQUFJLGFBQWEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVM7Z0JBQzlDLGFBQWEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQ25DO2dCQUNKLElBQUksU0FBUyxHQUFHLGFBQWEsQ0FBQyxHQUFH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LFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxlQUFlO1lBQzdHLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUU7b0JBQzNFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzt3QkFDNUksT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDdEI7d0JBQ0osT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFR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QUM7UUFDMUIsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFTSx1QkFBYSxHQUFwQixVQUFxQixNQUFNO1FBQzFCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNmLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO1lBQ25CLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDO0lBRU0sdUJBQWEsR0FBcEIsVUFBcUIsS0FBSztRQUN6QixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7WUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLE1BQU0sQ0FBQztJQUNmLENBQUM7SUFFTSxxQkFBVyxHQUFsQixVQUFtQixJQUFJO1FBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNGLGdCQUFDO0FBQUQsQ0E3eUJBLEFBNnlCQyxJQUFBO0FBQ0Qsa0JBQWUsU0FBUyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5cbmNvbnN0IFR5cGVPZlR1cm4gPSB7XG5cdE1PVF9MQTogMSxcblx0TU9UX0RPSTogMixcblx0SEFJX0RPSV9USE9ORzogMTIsXG5cdFNBTV9DTzogMyxcblx0U0FOSDogNCxcblx0VFVfUVVZOiA1LFxuXHRIQUlfVFVfUVVZOiAyNSxcblx0QkFfRE9JX1RIT05HOiA2LFxuXHRCT05fRE9JX1RIT05HOiA3LFxuXHROQU1fRE9JX1RIT05HOiA4LFxuXHRTQVVfRE9JX1RIVU9ORzogOSxcblx0U0FVX0RPSV9USE9ORzogMTAsXG5cdFNBTkhfUk9ORzogMTFcbn1cbmNsYXNzIENhcmRHcm91cCB7XG5cblx0Y2FyZHMgPSBudWxsO1xuXHRjYXJkc0J5U3VpdHMgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKGNhcmRzKSB7XG5cdFx0dGhpcy5jYXJkcyA9IENhcmRHcm91cC5zb3J0Q2FyZHMoY2FyZHMpO1xuXHRcdHRoaXMuY2FyZHNCeVN1aXRzID0gbmV3IE1hcDxudW1iZXIsIEFycmF5PGFueT4+KCk7XG5cdFx0dmFyIF9jYXJkc0J5U3VpdHMgPSB0aGlzLmNhcmRzQnlTdWl0cztcblx0XHRjYXJkcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaSkge1xuXHRcdFx0aWYgKF9jYXJkc0J5U3VpdHMuZ2V0KHZhbHVlLmNhcmQpID09PSB1bmRlZmluZWQpXG5cdFx0XHRcdF9jYXJkc0J5U3VpdHMuc2V0KHZhbHVlLmNhcmQsIFt2YWx1ZV0pO1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHZhciBjdXJyQ2FyZHMgPSBfY2FyZHNCeVN1aXRzLmdldCh2YWx1ZS5jYXJkKTtcblx0XHRcdFx0Y3VyckNhcmRzLnB1c2godmFsdWUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0Z2V0T3JkZXJlZEJ5U3VpdCgpIHtcblx0XHR2YXIgbmV3TWFwID0gbmV3IE1hcDxudW1iZXIsIEFycmF5PGFueT4+KHRoaXMuY2FyZHNCeVN1aXRzKTtcblx0XHR2YXIgb3JkZXJlZENhcmRzID0gW107XG5cdFx0Ly90dSBxdXlcblx0XHRmb3IgKHZhciBba2V5LCB2YWx1ZV0gb2YgbmV3TWFwKVxuXHRcdFx0aWYgKHZhbHVlLmxlbmd0aCA9PSA0KSB7XG5cdFx0XHRcdG9yZGVyZWRDYXJkcyA9IG9yZGVyZWRDYXJkcy5jb25jYXQodmFsdWUpO1xuXHRcdFx0XHRuZXdNYXAuZGVsZXRlKGtleSk7XG5cdFx0XHR9XG5cdFx0Ly8zIGRvaSB0aG9uZ1xuXHRcdGZvciAodmFyIFtrZXksIHZhbHVlXSBvZiBuZXdNYXApXG5cdFx0XHRpZiAodmFsdWUubGVuZ3RoID49IDIpIHtcblx0XHRcdFx0dmFyIF9rZXkgPSBDYXJkR3JvdXAuZ2V0TmV4dEtleShrZXkpO1xuXHRcdFx0XHRpZiAobmV3TWFwLmdldChfa2V5KSAmJiBuZXdNYXAuZ2V0KF9rZXkpLmxlbmd0aCA+PSAyKSB7XG5cdFx0XHRcdFx0dmFyIF9fa2V5ID0gQ2FyZEdyb3VwLmdldE5leHRLZXkoX2tleSk7XG5cdFx0XHRcdFx0aWYgKG5ld01hcC5nZXQoX19rZXkpICYmIG5ld01hcC5nZXQoX19rZXkpLmxlbmd0aCA+PSAyKSB7XG5cdFx0XHRcdFx0XHRvcmRlcmVkQ2FyZHMgPSBvcmRlcmVkQ2FyZHMuY29uY2F0KFt2YWx1ZS5zaGlmdCgpLCB2YWx1ZS5zaGlmdCgpXSk7XG5cdFx0XHRcdFx0XHRpZiAodmFsdWUubGVuZ3RoIDw9IDApXG5cdFx0XHRcdFx0XHRcdG5ld01hcC5kZWxldGUoa2V5KTtcblx0XHRcdFx0XHRcdHZhciBfdmFsdWUgPSBuZXdNYXAuZ2V0KF9rZXkpO1xuXHRcdFx0XHRcdFx0b3JkZXJlZENhcmRzID0gb3JkZXJlZENhcmRzLmNvbmNhdChbX3ZhbHVlLnNoaWZ0KCksIF92YWx1ZS5zaGlmdCgpXSk7XG5cdFx0XHRcdFx0XHRpZiAoX3ZhbHVlLmxlbmd0aCA8PSAwKVxuXHRcdFx0XHRcdFx0XHRuZXdNYXAuZGVsZXRlKF9rZXkpO1xuXHRcdFx0XHRcdFx0dmFyIF9fdmFsdWUgPSBuZXdNYXAuZ2V0KF9fa2V5KTtcblx0XHRcdFx0XHRcdG9yZGVyZWRDYXJkcyA9IG9yZGVyZWRDYXJkcy5jb25jYXQoW19fdmFsdWUuc2hpZnQoKSwgX192YWx1ZS5zaGlmdCgpXSk7XG5cdFx0XHRcdFx0XHRpZiAoX192YWx1ZS5sZW5ndGggPD0gMClcblx0XHRcdFx0XHRcdFx0bmV3TWFwLmRlbGV0ZShfX2tleSk7XG5cdFx0XHRcdFx0XHR2YXIgX19fa2V5ID0gQ2FyZEdyb3VwLmdldE5leHRLZXkoX19rZXkpO1xuXHRcdFx0XHRcdFx0aWYgKG5ld01hcC5nZXQoX19fa2V5KSAmJiBuZXdNYXAuZ2V0KF9fX2tleSkubGVuZ3RoID49IDIpIHtcblx0XHRcdFx0XHRcdFx0Ly8gNCBkb2kgdGhvbmdcblx0XHRcdFx0XHRcdFx0dmFyIF9fX3ZhbHVlID0gbmV3TWFwLmdldChfX19rZXkpO1xuXHRcdFx0XHRcdFx0XHRvcmRlcmVkQ2FyZHMgPSBvcmRlcmVkQ2FyZHMuY29uY2F0KFtfX192YWx1ZS5zaGlmdCgpLCBfX192YWx1ZS5zaGlmdCgpXSk7XG5cdFx0XHRcdFx0XHRcdGlmIChfX192YWx1ZS5sZW5ndGggPD0gMClcblx0XHRcdFx0XHRcdFx0XHRuZXdNYXAuZGVsZXRlKF9fX2tleSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdGZvciAodmFyIFtrZXksIHZhbHVlXSBvZiBuZXdNYXApXG5cdFx0XHRpZiAodmFsdWUubGVuZ3RoID09IDMpIHtcblx0XHRcdFx0b3JkZXJlZENhcmRzID0gb3JkZXJlZENhcmRzLmNvbmNhdCh2YWx1ZSk7XG5cdFx0XHRcdG5ld01hcC5kZWxldGUoa2V5KTtcblx0XHRcdH1cblx0XHRkbyB7XG5cdFx0XHR2YXIgc2VxdWVuY2VTdWl0ZXMgPSBDYXJkR3JvdXAuZ2V0Rmlyc3RTZXF1ZW5jZVN1aXQoWy4uLm5ld01hcC5rZXlzKCldLCAzKTtcblx0XHRcdGlmIChzZXF1ZW5jZVN1aXRlcykge1xuXHRcdFx0XHRzZXF1ZW5jZVN1aXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChfdmFsdWUsIGkpIHtcblx0XHRcdFx0XHRvcmRlcmVkQ2FyZHMgPSBvcmRlcmVkQ2FyZHMuY29uY2F0KFtuZXdNYXAuZ2V0KF92YWx1ZSkuc2hpZnQoKV0pO1xuXHRcdFx0XHRcdGlmIChuZXdNYXAuZ2V0KF92YWx1ZSkubGVuZ3RoIDw9IDApXG5cdFx0XHRcdFx0XHRuZXdNYXAuZGVsZXRlKF92YWx1ZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0gd2hpbGUgKHNlcXVlbmNlU3VpdGVzKVxuXHRcdGZvciAodmFyIFtrZXksIHZhbHVlXSBvZiBuZXdNYXApXG5cdFx0XHRpZiAodmFsdWUubGVuZ3RoID09IDIpIHtcblx0XHRcdFx0b3JkZXJlZENhcmRzID0gb3JkZXJlZENhcmRzLmNvbmNhdCh2YWx1ZSk7XG5cdFx0XHRcdG5ld01hcC5kZWxldGUoa2V5KTtcblx0XHRcdH1cblx0XHRmb3IgKHZhciBba2V5LCB2YWx1ZV0gb2YgbmV3TWFwKSB7XG5cdFx0XHRvcmRlcmVkQ2FyZHMgPSBvcmRlcmVkQ2FyZHMuY29uY2F0KHZhbHVlKTtcblx0XHRcdG5ld01hcC5kZWxldGUoa2V5KTtcblx0XHR9XG5cdFx0cmV0dXJuIG9yZGVyZWRDYXJkcztcblx0fVxuXG5cdGdldENhcmRUeXBlKCkge1xuXHRcdHZhciBuZXdNYXAgPSBuZXcgTWFwPG51bWJlciwgQXJyYXk8YW55Pj4odGhpcy5jYXJkc0J5U3VpdHMpO1xuXHRcdHZhciBtYXBTaXplID0gbmV3TWFwLnNpemU7XG5cdFx0dmFyIGtleXMgPSBbLi4ubmV3TWFwLmtleXMoKV07XG5cdFx0c3dpdGNoIChtYXBTaXplKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdGlmIChuZXdNYXAuZ2V0KGtleXNbMF0pLmxlbmd0aCA9PSAxKSByZXR1cm4gVHlwZU9mVHVybi5NT1RfTEE7XG5cdFx0XHRcdGVsc2UgaWYgKG5ld01hcC5nZXQoa2V5c1swXSkubGVuZ3RoID09IDIpIHJldHVybiBUeXBlT2ZUdXJuLk1PVF9ET0k7XG5cdFx0XHRcdGVsc2UgaWYgKG5ld01hcC5nZXQoa2V5c1swXSkubGVuZ3RoID09IDMpIHJldHVybiBUeXBlT2ZUdXJuLlNBTV9DTztcblx0XHRcdFx0ZWxzZSByZXR1cm4gVHlwZU9mVHVybi5UVV9RVVk7XG5cdFx0XHQvLyBicmVhaztcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0cmV0dXJuIFR5cGVPZlR1cm4uSEFJX1RVX1FVWTtcblx0XHRcdC8vIGJyZWFrO1xuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRpZiAobmV3TWFwLmdldChrZXlzWzBdKS5sZW5ndGggPT0gMSkgcmV0dXJuIFR5cGVPZlR1cm4uU0FOSDtcblx0XHRcdFx0ZWxzZSByZXR1cm4gVHlwZU9mVHVybi5CQV9ET0lfVEhPTkc7XG5cdFx0XHQvLyBicmVhaztcblx0XHRcdGNhc2UgNDpcblx0XHRcdFx0aWYgKG5ld01hcC5nZXQoa2V5c1swXSkubGVuZ3RoID09IDEpIHJldHVybiBUeXBlT2ZUdXJuLlNBTkg7XG5cdFx0XHRcdGVsc2UgcmV0dXJuIFR5cGVPZlR1cm4uQk9OX0RPSV9USE9ORztcblx0XHRcdC8vIGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIFR5cGVPZlR1cm4uU0FOSFxuXHRcdFx0Ly8gYnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0Z2V0U3VpdGFibGVDYXJkcyhzdWJtaXRDYXJkcykge1xuXHRcdHZhciBzdWJtaXRDYXJkR3JvdXAgPSBuZXcgQ2FyZEdyb3VwKHN1Ym1pdENhcmRzKTtcblx0XHR2YXIgc3VibWl0Q2FyZFR5cGUgPSBzdWJtaXRDYXJkR3JvdXAuZ2V0Q2FyZFR5cGUoKTtcblx0XHR2YXIgbWF4U3VibWl0Q2FyZCA9IENhcmRHcm91cC5nZXRNYXhDYXJkT2ZDYXJkcyhzdWJtaXRDYXJkcyk7XG5cdFx0dmFyIG5ld01hcCA9IG5ldyBNYXA8bnVtYmVyLCBBcnJheTxhbnk+Pih0aGlzLmNhcmRzQnlTdWl0cyk7XG5cdFx0c3dpdGNoIChzdWJtaXRDYXJkVHlwZSkge1xuXHRcdFx0Y2FzZSBUeXBlT2ZUdXJuLk1PVF9MQTpcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNhcmRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKENhcmRHcm91cC5wb2ludCh0aGlzLmNhcmRzW2ldKSA+IENhcmRHcm91cC5wb2ludChtYXhTdWJtaXRDYXJkKSlcblx0XHRcdFx0XHRcdHJldHVybiBbdGhpcy5jYXJkc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFR5cGVPZlR1cm4uTU9UX0RPSTpcblx0XHRcdFx0Zm9yICh2YXIgW2tleSwgdmFsdWVdIG9mIG5ld01hcCkge1xuXHRcdFx0XHRcdGlmICh2YWx1ZS5sZW5ndGggPT0gMSkgY29udGludWU7XG5cdFx0XHRcdFx0aWYgKHZhbHVlLmxlbmd0aCA+PSAyKSB7XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChDYXJkR3JvdXAucG9pbnQodmFsdWVbaV0pID4gQ2FyZEdyb3VwLnBvaW50KG1heFN1Ym1pdENhcmQpKVxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBbdmFsdWUuc2hpZnQoKSwgdmFsdWUuc2hpZnQoKV07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBUeXBlT2ZUdXJuLlNBTV9DTzpcblx0XHRcdFx0Zm9yICh2YXIgW2tleSwgdmFsdWVdIG9mIG5ld01hcCkge1xuXHRcdFx0XHRcdGlmICh2YWx1ZS5sZW5ndGggPCAzKSBjb250aW51ZTtcblx0XHRcdFx0XHRpZiAoa2V5ID4gbWF4U3VibWl0Q2FyZC5jYXJkKVxuXHRcdFx0XHRcdFx0cmV0dXJuIFt2YWx1ZS5zaGlmdCgpLCB2YWx1ZS5zaGlmdCgpLCB2YWx1ZS5zaGlmdCgpXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgVHlwZU9mVHVybi5UVV9RVVk6XG5cdFx0XHRcdGZvciAodmFyIFtrZXksIHZhbHVlXSBvZiBuZXdNYXApIHtcblx0XHRcdFx0XHRpZiAodmFsdWUubGVuZ3RoIDwgNCkgY29udGludWU7XG5cdFx0XHRcdFx0aWYgKGtleSA+IG1heFN1Ym1pdENhcmQuY2FyZClcblx0XHRcdFx0XHRcdHJldHVybiBbdmFsdWVdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAodmFyIFtrZXksIHZhbHVlXSBvZiBuZXdNYXApXG5cdFx0XHRcdFx0aWYgKHZhbHVlLmxlbmd0aCA+PSAyKSB7XG5cdFx0XHRcdFx0XHR2YXIgX2tleSA9IENhcmRHcm91cC5nZXROZXh0S2V5KGtleSk7XG5cdFx0XHRcdFx0XHRpZiAobmV3TWFwLmdldChfa2V5KSAmJiBuZXdNYXAuZ2V0KF9rZXkpLmxlbmd0aCA+PSAyKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBfX2tleSA9IENhcmRHcm91cC5nZXROZXh0S2V5KF9rZXkpO1xuXHRcdFx0XHRcdFx0XHRpZiAobmV3TWFwLmdldChfX2tleSkgJiYgbmV3TWFwLmdldChfX2tleSkubGVuZ3RoID49IDIpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgX19fa2V5ID0gQ2FyZEdyb3VwLmdldE5leHRLZXkoX19rZXkpO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChuZXdNYXAuZ2V0KF9fX2tleSkgJiYgbmV3TWFwLmdldChfX19rZXkpLmxlbmd0aCA+PSAyKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyA0IGRvaSB0aG9uZ1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIG9yZGVyZWRDYXJkcyA9IFt2YWx1ZS5zaGlmdCgpLCB2YWx1ZS5zaGlmdCgpXTtcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBfdmFsdWUgPSBuZXdNYXAuZ2V0KF9rZXkpO1xuXHRcdFx0XHRcdFx0XHRcdFx0b3JkZXJlZENhcmRzID0gb3JkZXJlZENhcmRzLmNvbmNhdChbX3ZhbHVlLnNoaWZ0KCksIF92YWx1ZS5zaGlmdCgpXSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgX192YWx1ZSA9IG5ld01hcC5nZXQoX19rZXkpO1xuXHRcdFx0XHRcdFx0XHRcdFx0b3JkZXJlZENhcmRzID0gb3JkZXJlZENhcmRzLmNvbmNhdChbX192YWx1ZS5zaGlmdCgpLCBfX3ZhbHVlLnNoaWZ0KCldKTtcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBfX192YWx1ZSA9IG5ld01hcC5nZXQoX19fa2V5KTtcblx0XHRcdFx0XHRcdFx0XHRcdG9yZGVyZWRDYXJkcyA9IG9yZGVyZWRDYXJkcy5jb25jYXQoW19fX3ZhbHVlLnNoaWZ0KCksIF9fX3ZhbHVlLnNoaWZ0KCldKTtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBvcmRlcmVkQ2FyZHM7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBUeXBlT2ZUdXJuLkhBSV9UVV9RVVk6XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFR5cGVPZlR1cm4uQkFfRE9JX1RIT05HOlxuXHRcdFx0XHRmb3IgKHZhciBba2V5LCB2YWx1ZV0gb2YgbmV3TWFwKSB7XG5cdFx0XHRcdFx0aWYgKHZhbHVlLmxlbmd0aCA8IDQpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdHJldHVybiBbdmFsdWVdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAodmFyIFtrZXksIHZhbHVlXSBvZiBuZXdNYXApXG5cdFx0XHRcdFx0aWYgKHZhbHVlLmxlbmd0aCA+PSAyKSB7XG5cdFx0XHRcdFx0XHR2YXIgX2tleSA9IENhcmRHcm91cC5nZXROZXh0S2V5KGtleSk7XG5cdFx0XHRcdFx0XHRpZiAobmV3TWFwLmdldChfa2V5KSAmJiBuZXdNYXAuZ2V0KF9rZXkpLmxlbmd0aCA+PSAyKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBfX2tleSA9IENhcmRHcm91cC5nZXROZXh0S2V5KF9rZXkpO1xuXHRcdFx0XHRcdFx0XHRpZiAobmV3TWFwLmdldChfX2tleSkgJiYgbmV3TWFwLmdldChfX2tleSkubGVuZ3RoID49IDIpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgb3JkZXJlZENhcmRzID0gW3ZhbHVlLnNoaWZ0KCksIHZhbHVlLnNoaWZ0KCldO1xuXHRcdFx0XHRcdFx0XHRcdHZhciBfdmFsdWUgPSBuZXdNYXAuZ2V0KF9rZXkpO1xuXHRcdFx0XHRcdFx0XHRcdG9yZGVyZWRDYXJkcyA9IG9yZGVyZWRDYXJkcy5jb25jYXQoW192YWx1ZS5zaGlmdCgpLCBfdmFsdWUuc2hpZnQoKV0pO1xuXHRcdFx0XHRcdFx0XHRcdHZhciBfX3ZhbHVlID0gbmV3TWFwLmdldChfX2tleSk7XG5cdFx0XHRcdFx0XHRcdFx0b3JkZXJlZENhcmRzID0gb3JkZXJlZENhcmRzLmNvbmNhdChbX192YWx1ZS5zaGlmdCgpLCBfX3ZhbHVlLnNoaWZ0KCldKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgbWF4Q2FyZCA9IENhcmRHcm91cC5nZXRNYXhDYXJkT2ZDYXJkcyhvcmRlcmVkQ2FyZHMpO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChDYXJkR3JvdXAucG9pbnQobWF4Q2FyZCkgPiBDYXJkR3JvdXAucG9pbnQobWF4U3VibWl0Q2FyZCkpXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gb3JkZXJlZENhcmRzO1xuXHRcdFx0XHRcdFx0XHRcdHZhciBfX19rZXkgPSBDYXJkR3JvdXAuZ2V0TmV4dEtleShfX2tleSk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5ld01hcC5nZXQoX19fa2V5KSAmJiBuZXdNYXAuZ2V0KF9fX2tleSkubGVuZ3RoID49IDIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIDQgZG9pIHRob25nXG5cblx0XHRcdFx0XHRcdFx0XHRcdHZhciBfX192YWx1ZSA9IG5ld01hcC5nZXQoX19fa2V5KTtcblx0XHRcdFx0XHRcdFx0XHRcdG9yZGVyZWRDYXJkcyA9IG9yZGVyZWRDYXJkcy5jb25jYXQoW19fX3ZhbHVlLnNoaWZ0KCksIF9fX3ZhbHVlLnNoaWZ0KCldKTtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBvcmRlcmVkQ2FyZHM7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgVHlwZU9mVHVybi5CT05fRE9JX1RIT05HOlxuXHRcdFx0XHRmb3IgKHZhciBba2V5LCB2YWx1ZV0gb2YgbmV3TWFwKVxuXHRcdFx0XHRcdGlmICh2YWx1ZS5sZW5ndGggPj0gMikge1xuXHRcdFx0XHRcdFx0dmFyIF9rZXkgPSBDYXJkR3JvdXAuZ2V0TmV4dEtleShrZXkpO1xuXHRcdFx0XHRcdFx0aWYgKG5ld01hcC5nZXQoX2tleSkgJiYgbmV3TWFwLmdldChfa2V5KS5sZW5ndGggPj0gMikge1xuXHRcdFx0XHRcdFx0XHR2YXIgX19rZXkgPSBDYXJkR3JvdXAuZ2V0TmV4dEtleShfa2V5KTtcblx0XHRcdFx0XHRcdFx0aWYgKG5ld01hcC5nZXQoX19rZXkpICYmIG5ld01hcC5nZXQoX19rZXkpLmxlbmd0aCA+PSAyKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIF9fX2tleSA9IENhcmRHcm91cC5nZXROZXh0S2V5KF9fa2V5KTtcblx0XHRcdFx0XHRcdFx0XHRpZiAobmV3TWFwLmdldChfX19rZXkpICYmIG5ld01hcC5nZXQoX19fa2V5KS5sZW5ndGggPj0gMikge1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gNCBkb2kgdGhvbmdcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBvcmRlcmVkQ2FyZHMgPSBbdmFsdWUuc2hpZnQoKSwgdmFsdWUuc2hpZnQoKV07XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgX3ZhbHVlID0gbmV3TWFwLmdldChfa2V5KTtcblx0XHRcdFx0XHRcdFx0XHRcdG9yZGVyZWRDYXJkcyA9IG9yZGVyZWRDYXJkcy5jb25jYXQoW192YWx1ZS5zaGlmdCgpLCBfdmFsdWUuc2hpZnQoKV0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIF9fdmFsdWUgPSBuZXdNYXAuZ2V0KF9fa2V5KTtcblx0XHRcdFx0XHRcdFx0XHRcdG9yZGVyZWRDYXJkcyA9IG9yZGVyZWRDYXJkcy5jb25jYXQoW19fdmFsdWUuc2hpZnQoKSwgX192YWx1ZS5zaGlmdCgpXSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgX19fdmFsdWUgPSBuZXdNYXAuZ2V0KF9fX2tleSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRvcmRlcmVkQ2FyZHMgPSBvcmRlcmVkQ2FyZHMuY29uY2F0KFtfX192YWx1ZS5zaGlmdCgpLCBfX192YWx1ZS5zaGlmdCgpXSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgbWF4Q2FyZCA9IENhcmRHcm91cC5nZXRNYXhDYXJkT2ZDYXJkcyhvcmRlcmVkQ2FyZHMpO1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKENhcmRHcm91cC5wb2ludChtYXhDYXJkKSA+IENhcmRHcm91cC5wb2ludChtYXhTdWJtaXRDYXJkKSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIG9yZGVyZWRDYXJkcztcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBUeXBlT2ZUdXJuLlNBTkg6XG5cdFx0XHRcdHZhciBjb3VudCA9IHN1Ym1pdENhcmRzLmxlbmd0aDtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0U2VxdWVuY2VTdWl0QnlTaXplKG5ld01hcCwgY291bnQsIG1heFN1Ym1pdENhcmQpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGdldFN1Z2dlc3Rpb25Ob0NhcmRzKGxpc3RTZWxlY3RlZCwgZGF0YSwgaXNDaGVjayA9IGZhbHNlKSB7XG5cdFx0bGV0IGxpc3RTdWdnZXN0aW9uO1xuXHRcdGlmICghaXNDaGVjaykge1xuXHRcdFx0bGlzdFN1Z2dlc3Rpb24gPSB0aGlzLmdldF9CT05fRE9JX1RIT05HKFtdLCBsaXN0U2VsZWN0ZWQpO1xuXHRcdFx0aWYgKGxpc3RTdWdnZXN0aW9uLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0cmV0dXJuIGxpc3RTdWdnZXN0aW9uO1xuXHRcdFx0fVxuXHRcdFx0bGlzdFN1Z2dlc3Rpb24gPSB0aGlzLmdldF9CQV9ET0lfVEhPTkcoW10sIGxpc3RTZWxlY3RlZCk7XG5cdFx0XHRpZiAobGlzdFN1Z2dlc3Rpb24ubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRyZXR1cm4gbGlzdFN1Z2dlc3Rpb247XG5cdFx0XHR9XG5cdFx0XHRsaXN0U3VnZ2VzdGlvbiA9IHRoaXMuZ2V0X1RVX1FVWShbXSwgbGlzdFNlbGVjdGVkKTtcblx0XHRcdGlmIChsaXN0U3VnZ2VzdGlvbi5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHJldHVybiBsaXN0U3VnZ2VzdGlvbjtcblx0XHRcdH1cblx0XHRcdGxpc3RTdWdnZXN0aW9uID0gdGhpcy5nZXRTZXF1ZW5jZVN1aXRCeVNpemUoW10sIGRhdGEsIGxpc3RTZWxlY3RlZCk7XG5cdFx0XHRpZiAobGlzdFN1Z2dlc3Rpb24ubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRyZXR1cm4gbGlzdFN1Z2dlc3Rpb247XG5cdFx0XHR9XG5cdFx0XHRsaXN0U3VnZ2VzdGlvbiA9IHRoaXMuZ2V0X1NBTV9DTyhbXSwgbGlzdFNlbGVjdGVkKTtcblx0XHRcdGlmIChsaXN0U3VnZ2VzdGlvbi5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHJldHVybiBsaXN0U3VnZ2VzdGlvbjtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRsaXN0U3VnZ2VzdGlvbiA9IHRoaXMuZ2V0X1RVX1FVWShbXSwgbGlzdFNlbGVjdGVkKTtcblx0XHRcdGlmIChsaXN0U3VnZ2VzdGlvbi5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHJldHVybiBsaXN0U3VnZ2VzdGlvbjtcblx0XHRcdH1cblx0XHRcdGxpc3RTdWdnZXN0aW9uID0gdGhpcy5nZXRfQk9OX0RPSV9USE9ORyhbXSwgbGlzdFNlbGVjdGVkKTtcblx0XHRcdGlmIChsaXN0U3VnZ2VzdGlvbi5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHJldHVybiBsaXN0U3VnZ2VzdGlvbjtcblx0XHRcdH1cblx0XHRcdGxpc3RTdWdnZXN0aW9uID0gdGhpcy5nZXRfQkFfRE9JX1RIT05HKFtdLCBsaXN0U2VsZWN0ZWQpO1xuXHRcdFx0aWYgKGxpc3RTdWdnZXN0aW9uLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0cmV0dXJuIGxpc3RTdWdnZXN0aW9uO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChsaXN0U3VnZ2VzdGlvbi5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm4gbGlzdFN1Z2dlc3Rpb247XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdGdldFN1Z2dlc3Rpb25DYXJkcyhzdWJtaXRDYXJkcywgZGF0YSwgY2FsbGJhY2spIHtcblx0XHR2YXIgc3VibWl0Q2FyZEdyb3VwID0gbmV3IENhcmRHcm91cChzdWJtaXRDYXJkcyk7XG5cdFx0dmFyIHN1Ym1pdENhcmRUeXBlID0gc3VibWl0Q2FyZEdyb3VwLmdldENhcmRUeXBlKCk7XG5cdFx0IC8vVXRpbHMuTG9nKFwic3VibWl0Q2FyZHM9XCIsc3VibWl0Q2FyZHMpO1xuXHRcdCAvL1V0aWxzLkxvZyhcIlN1Ym1pdCBjYXJkIHR5cGU9XCIgKyBzdWJtaXRDYXJkVHlwZSk7XG5cdFx0dmFyIG1heFN1Ym1pdENhcmQgPSBDYXJkR3JvdXAuZ2V0TWF4Q2FyZE9mQ2FyZHMoc3VibWl0Q2FyZHMpO1xuXHRcdHZhciBuZXdNYXAgPSBuZXcgTWFwPG51bWJlciwgQXJyYXk8YW55Pj4odGhpcy5jYXJkc0J5U3VpdHMpO1xuXHRcdGxldCBsaXN0U3VnZ2VzdGlvbiA9IG5ldyBBcnJheSgpO1xuXHRcdHN3aXRjaCAoc3VibWl0Q2FyZFR5cGUpIHtcblx0XHRcdGNhc2UgVHlwZU9mVHVybi5NT1RfTEE6XG5cdFx0XHRcdGlmIChzdWJtaXRDYXJkc1swXS5jYXJkICE9IDIpIHtcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2FyZHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdGlmIChDYXJkR3JvdXAucG9pbnQodGhpcy5jYXJkc1tpXSkgPiBDYXJkR3JvdXAucG9pbnQobWF4U3VibWl0Q2FyZCkpXG5cdFx0XHRcdFx0XHRcdGxpc3RTdWdnZXN0aW9uLnB1c2goW3RoaXMuY2FyZHNbaV1dKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFR5cGVPZlR1cm4uTU9UX0RPSTpcblx0XHRcdFx0Zm9yICh2YXIgW2tleSwgdmFsdWVdIG9mIG5ld01hcCkge1xuXHRcdFx0XHRcdGlmICh2YWx1ZS5sZW5ndGggPT0gMSkgY29udGludWU7XG5cdFx0XHRcdFx0aWYgKHZhbHVlLmxlbmd0aCA+PSAyKSB7XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChDYXJkR3JvdXAucG9pbnQodmFsdWVbaV0pID4gQ2FyZEdyb3VwLnBvaW50KG1heFN1Ym1pdENhcmQpKVxuXHRcdFx0XHRcdFx0XHRcdGxpc3RTdWdnZXN0aW9uLnB1c2goW3ZhbHVlLnNoaWZ0KCksIHZhbHVlLnNoaWZ0KCldKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFR5cGVPZlR1cm4uU0FNX0NPOlxuXHRcdFx0XHRmb3IgKHZhciBba2V5LCB2YWx1ZV0gb2YgbmV3TWFwKSB7XG5cdFx0XHRcdFx0aWYgKHZhbHVlLmxlbmd0aCA8IDMpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlmIChrZXkgPiBtYXhTdWJtaXRDYXJkLmNhcmQpXG5cdFx0XHRcdFx0XHRsaXN0U3VnZ2VzdGlvbi5wdXNoKFt2YWx1ZS5zaGlmdCgpLCB2YWx1ZS5zaGlmdCgpLCB2YWx1ZS5zaGlmdCgpXSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFR5cGVPZlR1cm4uVFVfUVVZOlxuXHRcdFx0XHRsaXN0U3VnZ2VzdGlvbiA9IHRoaXMuZ2V0X0JPTl9ET0lfVEhPTkcoc3VibWl0Q2FyZHMpO1xuXHRcdFx0XHRpZiAobGlzdFN1Z2dlc3Rpb24ubGVuZ3RoID4gMClcblx0XHRcdFx0XHRyZXR1cm4gbGlzdFN1Z2dlc3Rpb247XG5cdFx0XHRcdGxpc3RTdWdnZXN0aW9uID0gdGhpcy5nZXRfVFVfUVVZKHN1Ym1pdENhcmRzKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFR5cGVPZlR1cm4uSEFJX1RVX1FVWTpcblx0XHRcdFx0bGlzdFN1Z2dlc3Rpb24gPSB0aGlzLmdldF9UVV9RVVkoc3VibWl0Q2FyZHMpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgVHlwZU9mVHVybi5CQV9ET0lfVEhPTkc6XG5cdFx0XHRcdGxpc3RTdWdnZXN0aW9uID0gdGhpcy5nZXRfQk9OX0RPSV9USE9ORyhzdWJtaXRDYXJkcyk7XG5cdFx0XHRcdGlmIChsaXN0U3VnZ2VzdGlvbi5sZW5ndGggPiAwKVxuXHRcdFx0XHRcdHJldHVybiBsaXN0U3VnZ2VzdGlvbjtcblx0XHRcdFx0bGlzdFN1Z2dlc3Rpb24gPSB0aGlzLmdldF9UVV9RVVkoc3VibWl0Q2FyZHMpO1xuXHRcdFx0XHRpZiAobGlzdFN1Z2dlc3Rpb24ubGVuZ3RoID4gMClcblx0XHRcdFx0XHRyZXR1cm4gbGlzdFN1Z2dlc3Rpb247XG5cdFx0XHRcdGxpc3RTdWdnZXN0aW9uID0gdGhpcy5nZXRfQkFfRE9JX1RIT05HKHN1Ym1pdENhcmRzKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFR5cGVPZlR1cm4uQk9OX0RPSV9USE9ORzpcblx0XHRcdFx0Zm9yICh2YXIgW2tleSwgdmFsdWVdIG9mIG5ld01hcClcblx0XHRcdFx0XHRpZiAodmFsdWUubGVuZ3RoID49IDIpIHtcblx0XHRcdFx0XHRcdHZhciBfa2V5ID0gQ2FyZEdyb3VwLmdldE5leHRLZXkoa2V5KTtcblx0XHRcdFx0XHRcdGlmIChuZXdNYXAuZ2V0KF9rZXkpICYmIG5ld01hcC5nZXQoX2tleSkubGVuZ3RoID49IDIpIHtcblx0XHRcdFx0XHRcdFx0dmFyIF9fa2V5ID0gQ2FyZEdyb3VwLmdldE5leHRLZXkoX2tleSk7XG5cdFx0XHRcdFx0XHRcdGlmIChuZXdNYXAuZ2V0KF9fa2V5KSAmJiBuZXdNYXAuZ2V0KF9fa2V5KS5sZW5ndGggPj0gMikge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBfX19rZXkgPSBDYXJkR3JvdXAuZ2V0TmV4dEtleShfX2tleSk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5ld01hcC5nZXQoX19fa2V5KSAmJiBuZXdNYXAuZ2V0KF9fX2tleSkubGVuZ3RoID49IDIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIDQgZG9pIHRob25nXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgb3JkZXJlZENhcmRzID0gW3ZhbHVlLnNoaWZ0KCksIHZhbHVlLnNoaWZ0KCldO1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIF92YWx1ZSA9IG5ld01hcC5nZXQoX2tleSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRvcmRlcmVkQ2FyZHMgPSBvcmRlcmVkQ2FyZHMuY29uY2F0KFtfdmFsdWUuc2hpZnQoKSwgX3ZhbHVlLnNoaWZ0KCldKTtcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBfX3ZhbHVlID0gbmV3TWFwLmdldChfX2tleSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRvcmRlcmVkQ2FyZHMgPSBvcmRlcmVkQ2FyZHMuY29uY2F0KFtfX3ZhbHVlLnNoaWZ0KCksIF9fdmFsdWUuc2hpZnQoKV0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIF9fX3ZhbHVlID0gbmV3TWFwLmdldChfX19rZXkpO1xuXHRcdFx0XHRcdFx0XHRcdFx0b3JkZXJlZENhcmRzID0gb3JkZXJlZENhcmRzLmNvbmNhdChbX19fdmFsdWUuc2hpZnQoKSwgX19fdmFsdWUuc2hpZnQoKV0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIG1heENhcmQgPSBDYXJkR3JvdXAuZ2V0TWF4Q2FyZE9mQ2FyZHMob3JkZXJlZENhcmRzKTtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChDYXJkR3JvdXAucG9pbnQobWF4Q2FyZCkgPiBDYXJkR3JvdXAucG9pbnQobWF4U3VibWl0Q2FyZCkpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxpc3RTdWdnZXN0aW9uLnB1c2gob3JkZXJlZENhcmRzKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBUeXBlT2ZUdXJuLlNBTkg6XG5cdFx0XHRcdGxpc3RTdWdnZXN0aW9uID0gdGhpcy5nZXRTZXF1ZW5jZVN1aXRCeVNpemUoc3VibWl0Q2FyZHMsIGRhdGEpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRpZiAobGlzdFN1Z2dlc3Rpb24ubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIGxpc3RTdWdnZXN0aW9uO1xuXHRcdH1cblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGdldFNlcXVlbmNlU3VpdEJ5U2l6ZShzdWJtaXRDYXJkcywgZGF0YSwgbGlzdFNlbGVjdGVkID0gbnVsbCkge1xuXHRcdGlmIChzdWJtaXRDYXJkcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRsZXQgbGlzdENhcmQgPSBuZXcgQXJyYXkoKTtcblx0XHRcdGZvciAodmFyIFtrZXksIHZhbHVlXSBvZiBuZXcgTWFwKHRoaXMuY2FyZHNCeVN1aXRzKSkge1xuXHRcdFx0XHRsaXN0Q2FyZC5wdXNoKHsgY2FyZDoga2V5LCB2YWx1ZTogdmFsdWUgfSk7XG5cdFx0XHR9XG5cdFx0XHRsZXQgbGlzdFRtcCA9IG5ldyBBcnJheSgpO1xuXHRcdFx0bGV0IGxpc3RTZyA9IG5ldyBBcnJheSgpO1xuXHRcdFx0bGlzdENhcmQuc29ydCgoYSwgYikgPT4geyByZXR1cm4gKGEuY2FyZCA9PSAxID8gMTQgOiBhLmNhcmQpIC0gKGIuY2FyZCA9PSAxID8gMTQgOiBiLmNhcmQpIH0pOy8vIHN4IHRhbmcgZGFuO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Q2FyZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoKGxpc3RDYXJkW2ldLmNhcmQgPT0gMSA/IDE0IDogbGlzdENhcmRbaV0uY2FyZCkgPj0gc3VibWl0Q2FyZHNbMF0uY2FyZCkge1xuXHRcdFx0XHRcdGlmIChpICsgMSA8IGxpc3RDYXJkLmxlbmd0aCAmJiAobGlzdENhcmRbaV0uY2FyZCA9PSAxID8gMTQgOiBsaXN0Q2FyZFtpXS5jYXJkKSA9PSAobGlzdENhcmRbaSArIDFdLmNhcmQgPT0gMSA/IDE0IDogbGlzdENhcmRbaSArIDFdLmNhcmQpIC0gMSlcblx0XHRcdFx0XHRcdGxpc3RUbXAucHVzaChsaXN0Q2FyZFtpXSk7XG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRsaXN0VG1wLnB1c2gobGlzdENhcmRbaV0pO1xuXHRcdFx0XHRcdFx0aWYgKGxpc3RUbXAubGVuZ3RoID49IHN1Ym1pdENhcmRzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHRsZXQgaW5kZXggPSBsaXN0VG1wLmZpbmRJbmRleChlID0+IChlLnZhbHVlLmZpbmRJbmRleChlMiA9PiAoZTIuY2FyZCA9PSBkYXRhLmNhcmQgJiYgZTIuZmFjZSA9PSBkYXRhLmZhY2UpKSA+PSAwKSk7XG5cdFx0XHRcdFx0XHRcdGlmIChpbmRleCA+PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPD0gbGlzdFRtcC5sZW5ndGggLSBzdWJtaXRDYXJkcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IHRtcCA9IG5ldyBBcnJheSgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaiA9IGk7IGogPCBpICsgc3VibWl0Q2FyZHMubGVuZ3RoOyBqKyspXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChsaXN0VG1wW2pdLmNhcmQgPT0gZGF0YS5jYXJkKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRtcC5wdXNoKGRhdGEpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dG1wLnB1c2gobGlzdFRtcFtqXS52YWx1ZVswXSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRsaXN0U2cucHVzaCh0bXApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bGlzdFRtcCA9IG5ldyBBcnJheSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGxpc3RTZztcblx0XHR9XG5cdFx0ZWxzZSBpZiAobGlzdFNlbGVjdGVkICE9IG51bGwpIHtcblx0XHRcdGlmIChsaXN0U2VsZWN0ZWQubGVuZ3RoID49IDIpIHtcblx0XHRcdFx0bGV0IGxpc3RDYXJkID0gbmV3IEFycmF5KCk7XG5cdFx0XHRcdGZvciAodmFyIFtrZXksIHZhbHVlXSBvZiBuZXcgTWFwKHRoaXMuY2FyZHNCeVN1aXRzKSkge1xuXHRcdFx0XHRcdGxpc3RDYXJkLnB1c2goeyBjYXJkOiBrZXksIHZhbHVlOiB2YWx1ZSB9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgbGlzdFRtcCA9IG5ldyBBcnJheSgpO1xuXHRcdFx0XHRsZXQgbGlzdFNnID0gbmV3IEFycmF5KCk7XG5cdFx0XHRcdGxpc3RDYXJkLnNvcnQoKGEsIGIpID0+IHsgcmV0dXJuIChhLmNhcmQgPT0gMSA/IDE0IDogYS5jYXJkKSAtIChiLmNhcmQgPT0gMSA/IDE0IDogYi5jYXJkKSB9KTsvLyBzeCB0YW5nIGRhbjtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Q2FyZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmICgobGlzdENhcmRbaV0uY2FyZCA9PSAxID8gMTQgOiBsaXN0Q2FyZFtpXS5jYXJkKSA+PSAzKSB7XG5cdFx0XHRcdFx0XHRpZiAoaSArIDEgPCBsaXN0Q2FyZC5sZW5ndGggJiYgKGxpc3RDYXJkW2ldLmNhcmQgPT0gMSA/IDE0IDogbGlzdENhcmRbaV0uY2FyZCkgPT0gKGxpc3RDYXJkW2kgKyAxXS5jYXJkID09IDEgPyAxNCA6IGxpc3RDYXJkW2kgKyAxXS5jYXJkKSAtIDEpXG5cdFx0XHRcdFx0XHRcdGxpc3RUbXAucHVzaChsaXN0Q2FyZFtpXSk7XG5cdFx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdFx0bGlzdFRtcC5wdXNoKGxpc3RDYXJkW2ldKTtcblx0XHRcdFx0XHRcdFx0aWYgKGxpc3RUbXAubGVuZ3RoID49IDMpIHtcblx0XHRcdFx0XHRcdFx0XHRsZXQgaW5kZXggPSBsaXN0VG1wLmZpbmRJbmRleChlID0+IGUudmFsdWUuZmluZEluZGV4KGUyID0+IChlMi5jYXJkID09IGRhdGEuY2FyZCAmJiBlMi5mYWNlID09IGRhdGEuZmFjZSkpID49IDApO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChpbmRleCA+PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRsZXQgdG1wID0gbmV3IEFycmF5KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGxpc3RUbXAubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKGxpc3RUbXBbal0uY2FyZCA9PSBkYXRhLmNhcmQpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dG1wLnB1c2goZGF0YSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVsc2UgaWYgKGxpc3RTZWxlY3RlZC5maW5kSW5kZXgoZSA9PiBDYXJkR3JvdXAuaW5kZXhUb0NhcmQoZS5pbmRleCkuY2FyZCA9PSBsaXN0VG1wW2pdLmNhcmQpID49IDApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgX2luZGV4ID0gbGlzdFNlbGVjdGVkLmZpbmRJbmRleChlID0+IENhcmRHcm91cC5pbmRleFRvQ2FyZChlLmluZGV4KS5jYXJkID09IGxpc3RUbXBbal0uY2FyZCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dG1wLnB1c2goQ2FyZEdyb3VwLmluZGV4VG9DYXJkKGxpc3RTZWxlY3RlZFtfaW5kZXhdLmluZGV4KSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRtcC5wdXNoKGxpc3RUbXBbal0udmFsdWVbMF0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGxpc3RTZWxlY3RlZC5maWx0ZXIoZSA9PiB0bXAuZmluZEluZGV4KGUyID0+IChDYXJkR3JvdXAuaW5kZXhUb0NhcmQoZS5pbmRleCkuY2FyZCA9PSBlMi5jYXJkICYmIENhcmRHcm91cC5pbmRleFRvQ2FyZChlLmluZGV4KS5mYWNlID09IGUyLmZhY2UpKSA+PSAwKS5sZW5ndGggPj0gMikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRsaXN0U2cucHVzaCh0bXApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gbGlzdFNnO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRsaXN0VG1wID0gbmV3IEFycmF5KCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBsaXN0U2c7XG5cdFx0XHR9XG5cdFx0XHRlbHNlXG5cdFx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cdGdldF9CQV9ET0lfVEhPTkcoc3VibWl0Q2FyZHMsIGxpc3RTZWxlY3RlZCA9IG51bGwpIHtcblx0XHRpZiAoc3VibWl0Q2FyZHMubGVuZ3RoID4gMCkge1xuXHRcdFx0bGV0IGxpc3RDYXJkID0gbmV3IEFycmF5KCk7XG5cdFx0XHRsZXQgbGlzdFRtcDIgPSBuZXcgQXJyYXkoKTtcblx0XHRcdGxldCBsaXN0VG1wID0gbmV3IEFycmF5KCk7XG5cdFx0XHRsZXQgbGlzdFNnID0gbmV3IEFycmF5KCk7XG5cdFx0XHRmb3IgKHZhciBba2V5LCB2YWx1ZV0gb2YgbmV3IE1hcCh0aGlzLmNhcmRzQnlTdWl0cykpIHtcblx0XHRcdFx0bGlzdENhcmQucHVzaCh7IGNhcmQ6IGtleSwgdmFsdWU6IHZhbHVlIH0pO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Q2FyZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoaSArIDEgPCBsaXN0Q2FyZC5sZW5ndGhcblx0XHRcdFx0XHQmJiBDYXJkR3JvdXAuY2FyZFJhbmsobGlzdENhcmRbaV0uY2FyZCkgPT0gQ2FyZEdyb3VwLmNhcmRSYW5rKGxpc3RDYXJkW2kgKyAxXS5jYXJkKSAtIDFcblx0XHRcdFx0XHQmJiBsaXN0Q2FyZFtpXS52YWx1ZS5sZW5ndGggPj0gMiAmJiBsaXN0Q2FyZFtpICsgMV0udmFsdWUubGVuZ3RoID49IDIpIHtcblx0XHRcdFx0XHRsaXN0VG1wLnB1c2gobGlzdENhcmRbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGlmIChsaXN0Q2FyZFtpXS52YWx1ZS5sZW5ndGggPj0gMikge1xuXHRcdFx0XHRcdFx0bGlzdFRtcC5wdXNoKGxpc3RDYXJkW2ldKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGxpc3RUbXAubGVuZ3RoID49IDMpXG5cdFx0XHRcdFx0XHRsaXN0VG1wMi5wdXNoKGxpc3RUbXApO1xuXHRcdFx0XHRcdGxpc3RUbXAgPSBuZXcgQXJyYXkoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0VG1wMi5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGxpc3RUbXAyW2ldLmxlbmd0aCAtIDI7IGorKykge1xuXHRcdFx0XHRcdGxldCB0bXAgPSBuZXcgQXJyYXkoKTtcblx0XHRcdFx0XHRmb3IgKGxldCBsID0gajsgbCA8IGogKyAzOyBsKyspIHtcblx0XHRcdFx0XHRcdGZvciAobGV0IGsgPSAwOyBrIDwgMjsgaysrKVxuXHRcdFx0XHRcdFx0XHR0bXAucHVzaChsaXN0VG1wMltpXVtsXS52YWx1ZVtrXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGxpc3RTZy5wdXNoKHRtcCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBsaXN0U2c7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0bGV0IGxpc3RTZyA9IG5ldyBBcnJheSgpO1xuXHRcdFx0aWYgKGxpc3RTZWxlY3RlZC5sZW5ndGggPj0gMikge1xuXHRcdFx0XHRsZXQgbGlzdENhcmQgPSBuZXcgQXJyYXkoKTtcblx0XHRcdFx0bGV0IGxpc3RUbXAyID0gbmV3IEFycmF5KCk7XG5cdFx0XHRcdGxldCBsaXN0VG1wID0gbmV3IEFycmF5KCk7XG5cblx0XHRcdFx0Zm9yICh2YXIgW2tleSwgdmFsdWVdIG9mIG5ldyBNYXAodGhpcy5jYXJkc0J5U3VpdHMpKSB7XG5cdFx0XHRcdFx0bGlzdENhcmQucHVzaCh7IGNhcmQ6IGtleSwgdmFsdWU6IHZhbHVlIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdENhcmQubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSArIDEgPCBsaXN0Q2FyZC5sZW5ndGhcblx0XHRcdFx0XHRcdCYmIENhcmRHcm91cC5jYXJkUmFuayhsaXN0Q2FyZFtpXS5jYXJkKSA9PSBDYXJkR3JvdXAuY2FyZFJhbmsobGlzdENhcmRbaSArIDFdLmNhcmQpIC0gMVxuXHRcdFx0XHRcdFx0JiYgbGlzdENhcmRbaV0udmFsdWUubGVuZ3RoID49IDIgJiYgbGlzdENhcmRbaSArIDFdLnZhbHVlLmxlbmd0aCA+PSAyKSB7XG5cdFx0XHRcdFx0XHRsaXN0VG1wLnB1c2gobGlzdENhcmRbaV0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChsaXN0Q2FyZFtpXS52YWx1ZS5sZW5ndGggPj0gMikge1xuXHRcdFx0XHRcdFx0XHRsaXN0VG1wLnB1c2gobGlzdENhcmRbaV0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKGxpc3RUbXAubGVuZ3RoID49IDMpXG5cdFx0XHRcdFx0XHRcdGxpc3RUbXAyLnB1c2gobGlzdFRtcCk7XG5cdFx0XHRcdFx0XHRsaXN0VG1wID0gbmV3IEFycmF5KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdFRtcDIubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGxpc3RUbXAyW2ldLmxlbmd0aCAtIDI7IGorKykge1xuXHRcdFx0XHRcdFx0bGV0IHRtcCA9IG5ldyBBcnJheSgpO1xuXHRcdFx0XHRcdFx0Zm9yIChsZXQgbCA9IGo7IGwgPCBqICsgMzsgbCsrKSB7XG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGsgPSAwOyBrIDwgMjsgaysrKVxuXHRcdFx0XHRcdFx0XHRcdHRtcC5wdXNoKGxpc3RUbXAyW2ldW2xdLnZhbHVlW2tdKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChsaXN0U2VsZWN0ZWQuZmlsdGVyKGUgPT4gdG1wLmZpbmRJbmRleChlMiA9PiAoQ2FyZEdyb3VwLmluZGV4VG9DYXJkKGUuaW5kZXgpLmNhcmQgPT0gZTIuY2FyZCAmJiBDYXJkR3JvdXAuaW5kZXhUb0NhcmQoZS5pbmRleCkuZmFjZSA9PSBlMi5mYWNlKSkgPj0gMCkubGVuZ3RoID49IDIpIHtcblx0XHRcdFx0XHRcdFx0bGlzdFNnLnB1c2godG1wKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGxpc3RTZztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGxpc3RTZztcblx0XHR9XG5cdH1cblx0Z2V0X0JPTl9ET0lfVEhPTkcoc3VibWl0Q2FyZHMsIGxpc3RTZWxlY3RlZCA9IG51bGwpIHtcblx0XHRpZiAoc3VibWl0Q2FyZHMubGVuZ3RoID4gMCkge1xuXHRcdFx0bGV0IGxpc3RDYXJkID0gbmV3IEFycmF5KCk7XG5cdFx0XHRsZXQgbGlzdFRtcDIgPSBuZXcgQXJyYXkoKTtcblx0XHRcdGxldCBsaXN0VG1wID0gbmV3IEFycmF5KCk7XG5cdFx0XHRsZXQgbGlzdFNnID0gbmV3IEFycmF5KCk7XG5cdFx0XHRmb3IgKHZhciBba2V5LCB2YWx1ZV0gb2YgbmV3IE1hcCh0aGlzLmNhcmRzQnlTdWl0cykpIHtcblx0XHRcdFx0bGlzdENhcmQucHVzaCh7IGNhcmQ6IGtleSwgdmFsdWU6IHZhbHVlIH0pO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Q2FyZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoaSArIDEgPCBsaXN0Q2FyZC5sZW5ndGhcblx0XHRcdFx0XHQmJiBDYXJkR3JvdXAuY2FyZFJhbmsobGlzdENhcmRbaV0uY2FyZCkgPT0gQ2FyZEdyb3VwLmNhcmRSYW5rKGxpc3RDYXJkW2kgKyAxXS5jYXJkKSAtIDFcblx0XHRcdFx0XHQmJiBsaXN0Q2FyZFtpXS52YWx1ZS5sZW5ndGggPj0gMiAmJiBsaXN0Q2FyZFtpICsgMV0udmFsdWUubGVuZ3RoID49IDIpIHtcblx0XHRcdFx0XHRsaXN0VG1wLnB1c2gobGlzdENhcmRbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGlmIChsaXN0Q2FyZFtpXS52YWx1ZS5sZW5ndGggPj0gMikge1xuXHRcdFx0XHRcdFx0bGlzdFRtcC5wdXNoKGxpc3RDYXJkW2ldKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGxpc3RUbXAubGVuZ3RoID49IDMpXG5cdFx0XHRcdFx0XHRsaXN0VG1wMi5wdXNoKGxpc3RUbXApO1xuXHRcdFx0XHRcdGxpc3RUbXAgPSBuZXcgQXJyYXkoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0VG1wMi5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGxpc3RUbXAyW2ldLmxlbmd0aCAtIDM7IGorKykge1xuXHRcdFx0XHRcdGxldCB0bXAgPSBuZXcgQXJyYXkoKTtcblx0XHRcdFx0XHRmb3IgKGxldCBsID0gajsgbCA8IGogKyA0OyBsKyspIHtcblx0XHRcdFx0XHRcdGZvciAobGV0IGsgPSAwOyBrIDwgMjsgaysrKVxuXHRcdFx0XHRcdFx0XHR0bXAucHVzaChsaXN0VG1wMltpXVtsXS52YWx1ZVtrXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGxpc3RTZy5wdXNoKHRtcCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBsaXN0U2c7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0bGV0IGxpc3RTZyA9IG5ldyBBcnJheSgpO1xuXHRcdFx0aWYgKGxpc3RTZWxlY3RlZC5sZW5ndGggPj0gMikge1xuXHRcdFx0XHRsZXQgbGlzdENhcmQgPSBuZXcgQXJyYXkoKTtcblx0XHRcdFx0bGV0IGxpc3RUbXAyID0gbmV3IEFycmF5KCk7XG5cdFx0XHRcdGxldCBsaXN0VG1wID0gbmV3IEFycmF5KCk7XG5cdFx0XHRcdGZvciAodmFyIFtrZXksIHZhbHVlXSBvZiBuZXcgTWFwKHRoaXMuY2FyZHNCeVN1aXRzKSkge1xuXHRcdFx0XHRcdGxpc3RDYXJkLnB1c2goeyBjYXJkOiBrZXksIHZhbHVlOiB2YWx1ZSB9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RDYXJkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgKyAxIDwgbGlzdENhcmQubGVuZ3RoXG5cdFx0XHRcdFx0XHQmJiBDYXJkR3JvdXAuY2FyZFJhbmsobGlzdENhcmRbaV0uY2FyZCkgPT0gQ2FyZEdyb3VwLmNhcmRSYW5rKGxpc3RDYXJkW2kgKyAxXS5jYXJkKSAtIDFcblx0XHRcdFx0XHRcdCYmIGxpc3RDYXJkW2ldLnZhbHVlLmxlbmd0aCA+PSAyICYmIGxpc3RDYXJkW2kgKyAxXS52YWx1ZS5sZW5ndGggPj0gMikge1xuXHRcdFx0XHRcdFx0bGlzdFRtcC5wdXNoKGxpc3RDYXJkW2ldKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAobGlzdENhcmRbaV0udmFsdWUubGVuZ3RoID49IDIpIHtcblx0XHRcdFx0XHRcdFx0bGlzdFRtcC5wdXNoKGxpc3RDYXJkW2ldKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChsaXN0VG1wLmxlbmd0aCA+PSAzKVxuXHRcdFx0XHRcdFx0XHRsaXN0VG1wMi5wdXNoKGxpc3RUbXApO1xuXHRcdFx0XHRcdFx0bGlzdFRtcCA9IG5ldyBBcnJheSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RUbXAyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBsaXN0VG1wMltpXS5sZW5ndGggLSAzOyBqKyspIHtcblx0XHRcdFx0XHRcdGxldCB0bXAgPSBuZXcgQXJyYXkoKTtcblx0XHRcdFx0XHRcdGZvciAobGV0IGwgPSBqOyBsIDwgaiArIDQ7IGwrKykge1xuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBrID0gMDsgayA8IDI7IGsrKylcblx0XHRcdFx0XHRcdFx0XHR0bXAucHVzaChsaXN0VG1wMltpXVtsXS52YWx1ZVtrXSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAobGlzdFNlbGVjdGVkLmZpbHRlcihlID0+IHRtcC5maW5kSW5kZXgoZTIgPT4gKENhcmRHcm91cC5pbmRleFRvQ2FyZChlLmluZGV4KS5jYXJkID09IGUyLmNhcmQgJiYgQ2FyZEdyb3VwLmluZGV4VG9DYXJkKGUuaW5kZXgpLmZhY2UgPT0gZTIuZmFjZSkpID49IDApLmxlbmd0aCA+PSAyKSB7XG5cdFx0XHRcdFx0XHRcdGxpc3RTZy5wdXNoKHRtcCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBsaXN0U2c7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBsaXN0U2c7XG5cdFx0fVxuXHR9XG5cdGdldF9UVV9RVVkoc3VibWl0Q2FyZHMsIGxpc3RTZWxlY3RlZCA9IG51bGwpIHtcblx0XHRpZiAoc3VibWl0Q2FyZHMubGVuZ3RoID4gMCkge1xuXHRcdFx0bGV0IGxpc3RTZyA9IG5ldyBBcnJheSgpO1xuXHRcdFx0Zm9yICh2YXIgW2tleSwgdmFsdWVdIG9mIG5ldyBNYXA8bnVtYmVyLCBBcnJheTxhbnk+Pih0aGlzLmNhcmRzQnlTdWl0cykpIHtcblx0XHRcdFx0aWYgKHZhbHVlLmxlbmd0aCA9PSA0KSB7XG5cdFx0XHRcdFx0bGlzdFNnLnB1c2godmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbGlzdFNnO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGxldCBsaXN0U2cgPSBuZXcgQXJyYXkoKTtcblx0XHRcdGlmIChsaXN0U2VsZWN0ZWQubGVuZ3RoID49IDIpIHtcblx0XHRcdFx0Zm9yICh2YXIgW2tleSwgdmFsdWVdIG9mIG5ldyBNYXA8bnVtYmVyLCBBcnJheTxhbnk+Pih0aGlzLmNhcmRzQnlTdWl0cykpIHtcblx0XHRcdFx0XHRpZiAodmFsdWUubGVuZ3RoID09IDQgJiYgbGlzdFNlbGVjdGVkLmZpbHRlcihlID0+IHZhbHVlLmZpbmRJbmRleChlMiA9PiAoQ2FyZEdyb3VwLmluZGV4VG9DYXJkKGUuaW5kZXgpLmNhcmQgPT0gZTIuY2FyZCAmJiBDYXJkR3JvdXAuaW5kZXhUb0NhcmQoZS5pbmRleCkuZmFjZSA9PSBlMi5mYWNlKSkgPj0gMCkubGVuZ3RoID49IDIpIHtcblx0XHRcdFx0XHRcdGxpc3RTZy5wdXNoKHZhbHVlKTtcblx0XHRcdFx0XHRcdHJldHVybiBsaXN0U2c7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbGlzdFNnO1xuXHRcdH1cblx0fVxuXHRnZXRfU0FNX0NPKHN1Ym1pdENhcmRzLCBsaXN0U2VsZWN0ZWQgPSBudWxsKSB7XG5cdFx0bGV0IGxpc3RTZyA9IG5ldyBBcnJheSgpO1xuXHRcdGlmIChsaXN0U2VsZWN0ZWQubGVuZ3RoID49IDIpIHtcblxuXHRcdFx0Zm9yICh2YXIgW2tleSwgdmFsdWVdIG9mIG5ldyBNYXA8bnVtYmVyLCBBcnJheTxhbnk+Pih0aGlzLmNhcmRzQnlTdWl0cykpIHtcblx0XHRcdFx0bGV0IHRtcCA9IG5ldyBBcnJheSgpO1xuXHRcdFx0XHRpZiAodmFsdWUubGVuZ3RoIDwgMykgY29udGludWU7XG5cdFx0XHRcdGlmIChrZXkgPiAyKSB7XG5cdFx0XHRcdFx0dG1wID0gW3ZhbHVlLnNoaWZ0KCksIHZhbHVlLnNoaWZ0KCksIHZhbHVlLnNoaWZ0KCldO1xuXHRcdFx0XHRcdGlmIChsaXN0U2VsZWN0ZWQuZmlsdGVyKGUgPT4gdG1wLmZpbmRJbmRleChlMiA9PiAoQ2FyZEdyb3VwLmluZGV4VG9DYXJkKGUuaW5kZXgpLmNhcmQgPT0gZTIuY2FyZCAmJiBDYXJkR3JvdXAuaW5kZXhUb0NhcmQoZS5pbmRleCkuZmFjZSA9PSBlMi5mYWNlKSkgPj0gMCkubGVuZ3RoID49IDIpIHtcblx0XHRcdFx0XHRcdGxpc3RTZy5wdXNoKHRtcCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBsaXN0U2c7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbGlzdFNnO1xuXHR9XG5cblx0c3RhdGljIGdldE1heENhcmRPZkNhcmRzKGNhcmRzKSB7XG5cdFx0cmV0dXJuIENhcmRHcm91cC5zb3J0Q2FyZHMoY2FyZHMpW2NhcmRzLmxlbmd0aCAtIDFdO1xuXHR9XG5cblx0c3RhdGljIGdldE5leHRLZXkoa2V5KSB7XG5cdFx0cmV0dXJuIGtleSA9PSAxMyA/IDEgOiBrZXkgKyAxO1xuXHR9XG5cblx0c3RhdGljIHN1YkNhcmRzKGNhcmRzLCBzdWJDYXJkcykge1xuXHRcdHJldHVybiBjYXJkcy5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHR2YXIgZm91bmQgPSBmYWxzZTtcblx0XHRcdHN1YkNhcmRzLmZvckVhY2goZnVuY3Rpb24gKF92YWx1ZSwgaSkge1xuXHRcdFx0XHRpZiAodmFsdWUuY2FyZCA9PSBfdmFsdWUuY2FyZFxuXHRcdFx0XHRcdCYmIHZhbHVlLmZhY2UgPT0gX3ZhbHVlLmZhY2UpIHtcblx0XHRcdFx0XHRmb3VuZCA9IHRydWU7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiAhZm91bmQ7XG5cdFx0fSk7XG5cdH1cblx0c3RhdGljIHNvcnRTdWl0cyhzdWl0cykge1xuXHRcdHN1aXRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRcdHJldHVybiAoYSArIDEwKSAlIDEzIC0gKGIgKyAxMCkgJSAxMztcblx0XHR9KVxuXHR9XG5cdHN0YXRpYyBzb3J0Q2FyZHMoY2FyZHMpIHtcblx0XHRyZXR1cm4gY2FyZHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuXHRcdFx0cmV0dXJuIENhcmRHcm91cC5wb2ludChhKSAtIENhcmRHcm91cC5wb2ludChiKTtcblx0XHR9KVxuXHR9XG5cblx0c3RhdGljIHBvaW50KGNhcmQpIHtcblx0XHRyZXR1cm4gKGNhcmQuY2FyZCArIDEwKSAlIDEzICogNCArIGNhcmQuZmFjZTtcblx0fVxuXG5cdHN0YXRpYyBnZXRGaXJzdFNlcXVlbmNlU3VpdChzdWl0cywgbWluQ291bnQpIHtcblx0XHRpZiAoIXN1aXRzKVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0aWYgKG1pbkNvdW50IDw9IDEgfHwgbWluQ291bnQgPiBzdWl0cy5sZW5ndGgpXG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR2YXIgX3N1aXRzID0gWy4uLnN1aXRzXTtcblx0XHRDYXJkR3JvdXAuc29ydFN1aXRzKF9zdWl0cyk7XG5cdFx0dmFyIHRlbXAgPSBbXTtcblx0XHRkbyB7XG5cdFx0XHR2YXIgY3VyciA9IF9zdWl0cy5zaGlmdCgpXG5cdFx0XHRpZiAoY3VyciA9PSAyKVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGlmICh0ZW1wLmxlbmd0aCA+IDBcblx0XHRcdFx0JiYgKChjdXJyICE9IDEgJiYgKGN1cnIgLSB0ZW1wW3RlbXAubGVuZ3RoIC0gMV0gPiAxKSlcblx0XHRcdFx0XHR8fCBjdXJyID09IDEgJiYgdGVtcFt0ZW1wLmxlbmd0aCAtIDFdICE9IDEzKSkge1xuXHRcdFx0XHRpZiAodGVtcC5sZW5ndGggPj0gbWluQ291bnQpXG5cdFx0XHRcdFx0cmV0dXJuIHRlbXA7XG5cdFx0XHRcdHRlbXAgPSBbXTtcblx0XHRcdH1cblx0XHRcdHRlbXAucHVzaChjdXJyKTtcblx0XHR9XG5cdFx0d2hpbGUgKF9zdWl0cy5sZW5ndGggIT0gMCk7XG5cblx0XHRpZiAodGVtcC5sZW5ndGggPj0gbWluQ291bnQpXG5cdFx0XHRyZXR1cm4gdGVtcDtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHN0YXRpYyBnZXRGaXJzdFNlcXVlbmNlU3VpdEJ5U2l6ZShtYXAsIGNvdW50LCBtYXhDYXJkKSB7XG5cdFx0aWYgKCFtYXApXG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRpZiAoY291bnQgPD0gMSB8fCBjb3VudCA+IG1hcC5sZW5ndGgpXG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR2YXIgX3N1aXRzID0gWy4uLm1hcC5rZXlzKCldO1xuXHRcdENhcmRHcm91cC5zb3J0U3VpdHMoX3N1aXRzKTtcblx0XHR2YXIgdGVtcCA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgX3N1aXRzLmxlbmd0aCAtIDE7IGkrKykge1xuXHRcdFx0dmFyIGN1cnIgPSBfc3VpdHNbaV07XG5cdFx0XHR2YXIgbmV4dCA9IF9zdWl0c1tpICsgMV07XG5cdFx0XHRpZiAoY3VyciA9PSAxKSB7XG5cdFx0XHRcdHZhciBsaXN0Q2FyZHMgPSBtYXAuZ2V0KGN1cnIpO1xuXHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGxpc3RDYXJkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGlmIChDYXJkR3JvdXAucG9pbnQobGlzdENhcmRzW2pdKSA+IENhcmRHcm91cC5wb2ludChtYXhDYXJkKSkge1xuXHRcdFx0XHRcdFx0dGVtcC5wdXNoKGxpc3RDYXJkc1tqXSk7XG5cdFx0XHRcdFx0XHQvLyByZXR1cm4gdGVtcDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChjdXJyIDwgbWF4Q2FyZC5jYXJkIC0gY291bnQpIHtcblx0XHRcdFx0bWFwLmRlbGV0ZShjdXJyKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjdXJyID09IDIgfHwgbmV4dCA9PSAyKVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGVsc2UgaWYgKHRlbXAubGVuZ3RoID09IGNvdW50IC0gMSkge1xuXHRcdFx0XHR2YXIgbGlzdENhcmRzID0gbWFwLmdldChjdXJyKTtcblx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBsaXN0Q2FyZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRpZiAoQ2FyZEdyb3VwLnBvaW50KGxpc3RDYXJkc1tqXSkgPiBDYXJkR3JvdXAucG9pbnQobWF4Q2FyZCkpIHtcblx0XHRcdFx0XHRcdHRlbXAucHVzaChsaXN0Q2FyZHNbal0pO1xuXHRcdFx0XHRcdFx0Ly8gcmV0dXJuIHRlbXA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdG1hcC5kZWxldGUoX3N1aXRzLnNoaWZ0KCkpO1xuXHRcdFx0XHRyZXR1cm4gQ2FyZEdyb3VwLmdldEZpcnN0U2VxdWVuY2VTdWl0QnlTaXplKG1hcCwgY291bnQsIG1heENhcmQpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoKG5leHQgLSBjdXJyKSA9PSAxIHx8IChuZXh0ID09IDEgJiYgY3VyciA9PSAxMykpIHtcblx0XHRcdFx0dmFyIGxpc3RDYXJkcyA9IG1hcC5nZXQoY3Vycik7XG5cdFx0XHRcdHRlbXAucHVzaChsaXN0Q2FyZHNbMF0pO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdG1hcC5kZWxldGUoX3N1aXRzLnNoaWZ0KCkpO1xuXHRcdFx0XHR0ZW1wLnB1c2goQ2FyZEdyb3VwLmdldEZpcnN0U2VxdWVuY2VTdWl0QnlTaXplKG1hcCwgY291bnQsIG1heENhcmQpKTtcblx0XHRcdH07XG5cdFx0fVxuXHRcdGlmICh0ZW1wLmxlbmd0aCA9PSBjb3VudClcblx0XHRcdHJldHVybiB0ZW1wO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0c3RhdGljIGNhcmRSYW5rKGNhcmQpIHtcblx0XHRyZXR1cm4gKGNhcmQgKyAxMCkgJSAxMztcblx0fVxuXG5cdHN0YXRpYyBpbmRleFRvQ2FyZChpbmRleCkge1xuXHRcdHZhciBmYWNlID0gaW5kZXggKyAxO1xuXHRcdHdoaWxlIChmYWNlID4gNClcblx0XHRcdGZhY2UgLT0gNDtcblx0XHR2YXIgY2FyZCA9IChpbmRleCArIDEgLSBmYWNlKSAvIDQgKyAzO1xuXHRcdGlmIChjYXJkID4gMTMpIGNhcmQgLT0gMTM7XG5cdFx0cmV0dXJuIHsgY2FyZDogY2FyZCwgZmFjZTogZmFjZSB9O1xuXHR9XG5cblx0c3RhdGljIGluZGV4c1RvQ2FyZHMoaW5kZXhzKSB7XG5cdFx0dmFyIGNhcmRzID0gW107XG5cdFx0aW5kZXhzLmZvckVhY2goaW5kZXggPT4ge1xuXHRcdFx0Y2FyZHMucHVzaChDYXJkR3JvdXAuaW5kZXhUb0NhcmQoaW5kZXgpKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gY2FyZHM7XG5cdH1cblxuXHRzdGF0aWMgY2FyZHNUb0luZGV4cyhjYXJkcykge1xuXHRcdHZhciBpbmRleHMgPSBbXTtcblx0XHRjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuXHRcdFx0aW5kZXhzLnB1c2goQ2FyZEdyb3VwLmNhcmRUb0luZGV4KGNhcmQpKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gaW5kZXhzO1xuXHR9XG5cblx0c3RhdGljIGNhcmRUb0luZGV4KGNhcmQpIHtcblx0XHRyZXR1cm4gKGNhcmQuY2FyZCArIDEwKSAlIDEzICogNCArIGNhcmQuZmFjZSAtIDE7XG5cdH1cbn1cbmV4cG9ydCBkZWZhdWx0IENhcmRHcm91cDsiXX0=