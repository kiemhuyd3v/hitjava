"use strict";
cc._RF.push(module, 'af49eQFqGVKnpFUqosHPApz', 'TienLen.ItemPlayerResult');
// Lobby/LobbyScript/TienLenScript/TienLen.ItemPlayerResult.ts

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
var Utils_1 = require("../Script/common/Utils");
var TienLen_Res_1 = require("./TienLen.Res");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TienLen_ItemPlayerResult = /** @class */ (function (_super) {
    __extends(TienLen_ItemPlayerResult, _super);
    function TienLen_ItemPlayerResult() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.labelRank = null;
        _this.labelUserName = null;
        _this.labelMoneyChange = null;
        _this.listCards = null;
        _this.resultWin = null;
        _this.resultLose = null;
        _this.fxResult = null;
        _this.labelFx = null;
        _this.fontFx = [];
        _this.sprCups = [];
        _this.fontNumber = [];
        _this.prefabCard = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    TienLen_ItemPlayerResult.prototype.start = function () {
    };
    TienLen_ItemPlayerResult.prototype.initItem = function (data) {
        //Utils.Log("TTTTTTTTTT ItemPlayerResult data : ", data);
        this.labelRank.string = data.countId;
        this.labelRank.font = this.fontFx[data.winTypes < 10 ? 0 : 1];
        this.labelUserName.string = data.userName;
        this.labelMoneyChange.string = data.goldChange > 0 ? "+" + Utils_1.default.formatNumber(data.goldChange) : Utils_1.default.formatNumber(data.goldChange);
        this.labelMoneyChange.font = data.goldChange > 0 ? this.fontNumber[0] : this.fontNumber[1];
        if (data.goldChange > 0) {
            this.labelMoneyChange.font = this.fontNumber[0];
            this.labelMoneyChange.node.position = cc.v3(-207, 3, 0);
        }
        else {
            this.labelMoneyChange.font = this.fontNumber[1];
            this.labelMoneyChange.node.position = cc.v3(-207, -8, 0);
        }
        for (var index = 0; index < data.cards.length; index++) {
            var item = cc.instantiate(this.prefabCard);
            item.getComponent(cc.Sprite).spriteFrame = TienLen_Res_1.default.getInstance().getCardFace(data.cards[index]);
            this.listCards.addChild(item);
        }
        this.resultWin.active = data.winTypes < 11 ? true : false;
        if (data.countId <= 3) {
            this.node.getChildByName("ic_cup").active = true;
            this.node.getChildByName("ic_cup").getComponent(cc.Sprite).spriteFrame = this.sprCups[data.countId - 1];
        }
        else {
            this.node.getChildByName("ic_cup").active = false;
        }
        this.resultLose.active = !this.resultWin.active;
        if (data.isTLMN) {
            switch (data.winTypes) {
                case 2:
                    break;
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    if (data.winTypes == 3) {
                        //Utils.Log("TTTTTTTTTT ItemPlayerResult Thắng Bắt Treo data.winTypes : ", data.winTypes);
                        this.fxResult.active = true;
                        this.labelFx.font = this.fontFx[0];
                        this.labelFx.string = "Thắng Bắt Treo";
                        //Utils.Log("TTTTTTTTTT ItemPlayerResult Thắng Bắt Treo");
                    }
                    else {
                        //Utils.Log("TTTTTTTTTT ItemPlayerResult Tới Trắng data.winTypes : ", data.winTypes);
                        this.fxResult.active = true;
                        this.labelFx.font = this.fontFx[0];
                        this.labelFx.string = "Tới Trắng";
                        //Utils.Log("TTTTTTTTTT ItemPlayerResult Tới Trắng");
                    }
                    break;
                case 11:
                    // Thoi Tu Quy | 2
                    if (this.kiemtraThoiTuQuy(data.cards)) {
                        this.fxResult.active = true;
                        this.labelFx.font = this.fontFx[1];
                        this.labelFx.string = "Thối Tứ Quý";
                        //Utils.Log("TTTTTTTTTT ItemPlayerResult Thối Tứ Quý");
                    }
                    if (this.kiemtraThoiHeo(data.cards)) {
                        this.fxResult.active = true;
                        this.labelFx.font = this.fontFx[1];
                        this.labelFx.string = "Thối 2";
                        //Utils.Log("TTTTTTTTTT ItemPlayerResult Thối 2");
                    }
                    break;
                case 12:
                    // Cong
                    this.fxResult.active = true;
                    this.labelFx.font = this.fontFx[1];
                    this.labelFx.string = "Cóng";
                    //Utils.Log("TTTTTTTTTT ItemPlayerResult Cóng");
                    break;
                case 13:
                    // Thua Toi Trang
                    this.fxResult.active = true;
                    this.labelFx.font = this.fontFx[1];
                    this.labelFx.string = "Thua Tới Trắng";
                    //Utils.Log("TTTTTTTTTT ItemPlayerResult Thua Tới Trắng");
                    break;
                default:
                    break;
            }
        }
        else {
            switch (data.winTypes) {
                case 2:
                case 5:
                case 10:
                    break;
                case 3:
                case 4:
                case 6:
                case 7:
                case 8:
                case 9:
                    if (data.winTypes == 3) {
                        this.fxResult.active = true;
                        this.labelFx.font = this.fontFx[0];
                        this.labelFx.string = "Thắng Sâm";
                    }
                    else if (data.winTypes == 4) {
                        this.fxResult.active = true;
                        this.labelFx.font = this.fontFx[0];
                        this.labelFx.string = "Chặn Sâm";
                    }
                    else {
                        this.fxResult.active = true;
                        this.labelFx.font = this.fontFx[0];
                        this.labelFx.string = "Tới Trắng";
                    }
                    break;
                case 11:
                case 12:
                    break;
                case 13:
                    // Thoi Tu Quy | 2
                    if (this.kiemtraThoiTuQuy(data.cards)) {
                        this.fxResult.active = true;
                        this.labelFx.font = this.fontFx[1];
                        this.labelFx.string = "Thối Tứ Quý";
                        //Utils.Log("TTTTTTTTTT ItemPlayerResult Thối Tứ Quý");
                    }
                    if (this.kiemtraThoiHeo(data.cards)) {
                        this.fxResult.active = true;
                        this.labelFx.font = this.fontFx[1];
                        this.labelFx.string = "Thối 2";
                        //Utils.Log("TTTTTTTTTT ItemPlayerResult Thối 2");
                    }
                    break;
                case 14:
                    // Cong
                    this.fxResult.active = true;
                    this.labelFx.font = this.fontFx[1];
                    this.labelFx.string = "Cóng";
                    break;
                case 15:
                    break;
                case 16:
                    // Bi chan sam
                    this.fxResult.active = true;
                    this.labelFx.font = this.fontFx[1];
                    this.labelFx.string = "Bị Chặn Sâm";
                    break;
                default:
                    break;
            }
        }
    };
    TienLen_ItemPlayerResult.prototype.kiemtraThoiHeo = function (a) {
        for (var b = 0, c = 0; c < a.length; c++)
            Math.floor(a[c] / 4) == 12 && b++;
        return 0 < b ? !0 : !1;
    };
    TienLen_ItemPlayerResult.prototype.kiemtraThoiTuQuy = function (a) {
        a.sort(function (a, b) {
            return a - b;
        });
        if (4 <= a.length)
            for (var b = a.length - 1, c = 0; 0 < b;) {
                if (Math.floor(a[b] / 4) == Math.floor(a[b - 1] / 4)) {
                    if (c++, 3 == c)
                        return !0;
                }
                else
                    c = 0;
                b--;
            }
        return !1;
    };
    ;
    __decorate([
        property(cc.Label)
    ], TienLen_ItemPlayerResult.prototype, "labelRank", void 0);
    __decorate([
        property(cc.Label)
    ], TienLen_ItemPlayerResult.prototype, "labelUserName", void 0);
    __decorate([
        property(cc.Label)
    ], TienLen_ItemPlayerResult.prototype, "labelMoneyChange", void 0);
    __decorate([
        property(cc.Node)
    ], TienLen_ItemPlayerResult.prototype, "listCards", void 0);
    __decorate([
        property(cc.Node)
    ], TienLen_ItemPlayerResult.prototype, "resultWin", void 0);
    __decorate([
        property(cc.Node)
    ], TienLen_ItemPlayerResult.prototype, "resultLose", void 0);
    __decorate([
        property(cc.Node)
    ], TienLen_ItemPlayerResult.prototype, "fxResult", void 0);
    __decorate([
        property(cc.Label)
    ], TienLen_ItemPlayerResult.prototype, "labelFx", void 0);
    __decorate([
        property(cc.Font)
    ], TienLen_ItemPlayerResult.prototype, "fontFx", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], TienLen_ItemPlayerResult.prototype, "sprCups", void 0);
    __decorate([
        property(cc.BitmapFont)
    ], TienLen_ItemPlayerResult.prototype, "fontNumber", void 0);
    __decorate([
        property(cc.Prefab)
    ], TienLen_ItemPlayerResult.prototype, "prefabCard", void 0);
    TienLen_ItemPlayerResult = __decorate([
        ccclass
    ], TienLen_ItemPlayerResult);
    return TienLen_ItemPlayerResult;
}(cc.Component));
exports.default = TienLen_ItemPlayerResult;

cc._RF.pop();