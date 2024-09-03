
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/TienLenScript/TienLen.ItemPlayerResult.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxUaWVuTGVuU2NyaXB0XFxUaWVuTGVuLkl0ZW1QbGF5ZXJSZXN1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBQzNDLDZDQUFnQztBQUMxQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzRCw0Q0FBWTtJQUFsRTtRQUFBLHFFQW9OQztRQWpORyxlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLG1CQUFhLEdBQWEsSUFBSSxDQUFDO1FBRS9CLHNCQUFnQixHQUFhLElBQUksQ0FBQztRQUVsQyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLFlBQU0sR0FBYyxFQUFFLENBQUM7UUFFdkIsYUFBTyxHQUFxQixFQUFFLENBQUM7UUFFL0IsZ0JBQVUsR0FBb0IsRUFBRSxDQUFDO1FBRWpDLGdCQUFVLEdBQWMsSUFBSSxDQUFDOztRQTBMN0IsaUJBQWlCO0lBQ3JCLENBQUM7SUF6TEcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3Q0FBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDJDQUFRLEdBQVIsVUFBUyxJQUFJO1FBQ1IseURBQXlEO1FBRTFELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENB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RUFDZTtJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytEQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0RBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnRUFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhEQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkRBQ007SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0REFDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzZEQUNNO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0VBQ1M7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnRUFDUztJQXpCWix3QkFBd0I7UUFENUMsT0FBTztPQUNhLHdCQUF3QixDQW9ONUM7SUFBRCwrQkFBQztDQXBORCxBQW9OQyxDQXBOcUQsRUFBRSxDQUFDLFNBQVMsR0FvTmpFO2tCQXBOb0Isd0JBQXdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgUmVzIGZyb20gXCIuL1RpZW5MZW4uUmVzXCI7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGllbkxlbl9JdGVtUGxheWVyUmVzdWx0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbFJhbms6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxVc2VyTmFtZTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbE1vbmV5Q2hhbmdlOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdENhcmRzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICByZXN1bHRXaW46IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHJlc3VsdExvc2U6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGZ4UmVzdWx0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxGeDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Gb250KVxuICAgIGZvbnRGeDogY2MuRm9udFtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNwckN1cHM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuQml0bWFwRm9udClcbiAgICBmb250TnVtYmVyOiBjYy5CaXRtYXBGb250W10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZWZhYkNhcmQ6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICBpbml0SXRlbShkYXRhKSB7XG4gICAgICAgICAvL1V0aWxzLkxvZyhcIlRUVFRUVFRUVFQgSXRlbVBsYXllclJlc3VsdCBkYXRhIDogXCIsIGRhdGEpO1xuXG4gICAgICAgIHRoaXMubGFiZWxSYW5rLnN0cmluZyA9IGRhdGEuY291bnRJZDtcbiAgICAgICAgdGhpcy5sYWJlbFJhbmsuZm9udCA9IHRoaXMuZm9udEZ4W2RhdGEud2luVHlwZXMgPCAxMCA/IDAgOiAxXTtcbiAgICAgICAgdGhpcy5sYWJlbFVzZXJOYW1lLnN0cmluZyA9IGRhdGEudXNlck5hbWU7XG4gICAgICAgIHRoaXMubGFiZWxNb25leUNoYW5nZS5zdHJpbmcgPSBkYXRhLmdvbGRDaGFuZ2UgPiAwID8gXCIrXCIgKyBVdGlscy5mb3JtYXROdW1iZXIoZGF0YS5nb2xkQ2hhbmdlKSA6IFV0aWxzLmZvcm1hdE51bWJlcihkYXRhLmdvbGRDaGFuZ2UpO1xuICAgICAgICB0aGlzLmxhYmVsTW9uZXlDaGFuZ2UuZm9udCA9IGRhdGEuZ29sZENoYW5nZSA+IDAgPyB0aGlzLmZvbnROdW1iZXJbMF0gOiB0aGlzLmZvbnROdW1iZXJbMV07XG4gICAgICAgIGlmKGRhdGEuZ29sZENoYW5nZSA+IDApe1xuICAgICAgICAgICAgdGhpcy5sYWJlbE1vbmV5Q2hhbmdlLmZvbnQgPSB0aGlzLmZvbnROdW1iZXJbMF07XG4gICAgICAgICAgICB0aGlzLmxhYmVsTW9uZXlDaGFuZ2Uubm9kZS5wb3NpdGlvbiA9IGNjLnYzKC0yMDcsMywwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhpcy5sYWJlbE1vbmV5Q2hhbmdlLmZvbnQgPSB0aGlzLmZvbnROdW1iZXJbMV07XG4gICAgICAgICAgICB0aGlzLmxhYmVsTW9uZXlDaGFuZ2Uubm9kZS5wb3NpdGlvbiA9IGNjLnYzKC0yMDcsLTgsMCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRhdGEuY2FyZHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiQ2FyZCk7XG4gICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gUmVzLmdldEluc3RhbmNlKCkuZ2V0Q2FyZEZhY2UoZGF0YS5jYXJkc1tpbmRleF0pO1xuICAgICAgICAgICAgdGhpcy5saXN0Q2FyZHMuYWRkQ2hpbGQoaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN1bHRXaW4uYWN0aXZlID0gZGF0YS53aW5UeXBlcyA8IDExID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBpZihkYXRhLmNvdW50SWQgPD0gMyl7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpY19jdXBcIikuYWN0aXZlID0gdHJ1ZSA7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpY19jdXBcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwckN1cHNbZGF0YS5jb3VudElkIC0gMV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImljX2N1cFwiKS5hY3RpdmUgPSBmYWxzZSA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN1bHRMb3NlLmFjdGl2ZSA9ICF0aGlzLnJlc3VsdFdpbi5hY3RpdmU7XG5cbiAgICAgICAgaWYgKGRhdGEuaXNUTE1OKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGRhdGEud2luVHlwZXMpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS53aW5UeXBlcyA9PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgLy9VdGlscy5Mb2coXCJUVFRUVFRUVFRUIEl0ZW1QbGF5ZXJSZXN1bHQgVGjhuq9uZyBC4bqvdCBUcmVvIGRhdGEud2luVHlwZXMgOiBcIiwgZGF0YS53aW5UeXBlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZ4UmVzdWx0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsRnguZm9udCA9IHRoaXMuZm9udEZ4WzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYWJlbEZ4LnN0cmluZyA9IFwiVGjhuq9uZyBC4bqvdCBUcmVvXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgLy9VdGlscy5Mb2coXCJUVFRUVFRUVFRUIEl0ZW1QbGF5ZXJSZXN1bHQgVGjhuq9uZyBC4bqvdCBUcmVvXCIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgIC8vVXRpbHMuTG9nKFwiVFRUVFRUVFRUVCBJdGVtUGxheWVyUmVzdWx0IFThu5tpIFRy4bqvbmcgZGF0YS53aW5UeXBlcyA6IFwiLCBkYXRhLndpblR5cGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnhSZXN1bHQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWxGeC5mb250ID0gdGhpcy5mb250RnhbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsRnguc3RyaW5nID0gXCJU4bubaSBUcuG6r25nXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgLy9VdGlscy5Mb2coXCJUVFRUVFRUVFRUIEl0ZW1QbGF5ZXJSZXN1bHQgVOG7m2kgVHLhuq9uZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICAvLyBUaG9pIFR1IFF1eSB8IDJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMua2llbXRyYVRob2lUdVF1eShkYXRhLmNhcmRzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5meFJlc3VsdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYWJlbEZ4LmZvbnQgPSB0aGlzLmZvbnRGeFsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWxGeC5zdHJpbmcgPSBcIlRo4buRaSBU4bupIFF1w71cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAvL1V0aWxzLkxvZyhcIlRUVFRUVFRUVFQgSXRlbVBsYXllclJlc3VsdCBUaOG7kWkgVOG7qSBRdcO9XCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMua2llbXRyYVRob2lIZW8oZGF0YS5jYXJkcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnhSZXN1bHQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWxGeC5mb250ID0gdGhpcy5mb250RnhbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsRnguc3RyaW5nID0gXCJUaOG7kWkgMlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgIC8vVXRpbHMuTG9nKFwiVFRUVFRUVFRUVCBJdGVtUGxheWVyUmVzdWx0IFRo4buRaSAyXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbmdcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5meFJlc3VsdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsRnguZm9udCA9IHRoaXMuZm9udEZ4WzFdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsRnguc3RyaW5nID0gXCJDw7NuZ1wiO1xuICAgICAgICAgICAgICAgICAgICAgLy9VdGlscy5Mb2coXCJUVFRUVFRUVFRUIEl0ZW1QbGF5ZXJSZXN1bHQgQ8OzbmdcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgICAgIC8vIFRodWEgVG9pIFRyYW5nXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnhSZXN1bHQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYWJlbEZ4LmZvbnQgPSB0aGlzLmZvbnRGeFsxXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYWJlbEZ4LnN0cmluZyA9IFwiVGh1YSBU4bubaSBUcuG6r25nXCI7XG4gICAgICAgICAgICAgICAgICAgICAvL1V0aWxzLkxvZyhcIlRUVFRUVFRUVFQgSXRlbVBsYXllclJlc3VsdCBUaHVhIFThu5tpIFRy4bqvbmdcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3dpdGNoIChkYXRhLndpblR5cGVzKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEud2luVHlwZXMgPT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5meFJlc3VsdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYWJlbEZ4LmZvbnQgPSB0aGlzLmZvbnRGeFswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWxGeC5zdHJpbmcgPSBcIlRo4bqvbmcgU8OibVwiO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEud2luVHlwZXMgPT0gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5meFJlc3VsdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYWJlbEZ4LmZvbnQgPSB0aGlzLmZvbnRGeFswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWxGeC5zdHJpbmcgPSBcIkNo4bq3biBTw6JtXCI7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZ4UmVzdWx0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsRnguZm9udCA9IHRoaXMuZm9udEZ4WzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYWJlbEZ4LnN0cmluZyA9IFwiVOG7m2kgVHLhuq9uZ1wiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgY2FzZSAxMjpcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgICAgICAvLyBUaG9pIFR1IFF1eSB8IDJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMua2llbXRyYVRob2lUdVF1eShkYXRhLmNhcmRzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5meFJlc3VsdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYWJlbEZ4LmZvbnQgPSB0aGlzLmZvbnRGeFsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWxGeC5zdHJpbmcgPSBcIlRo4buRaSBU4bupIFF1w71cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAvL1V0aWxzLkxvZyhcIlRUVFRUVFRUVFQgSXRlbVBsYXllclJlc3VsdCBUaOG7kWkgVOG7qSBRdcO9XCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMua2llbXRyYVRob2lIZW8oZGF0YS5jYXJkcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnhSZXN1bHQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWxGeC5mb250ID0gdGhpcy5mb250RnhbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsRnguc3RyaW5nID0gXCJUaOG7kWkgMlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgIC8vVXRpbHMuTG9nKFwiVFRUVFRUVFRUVCBJdGVtUGxheWVyUmVzdWx0IFRo4buRaSAyXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbmdcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5meFJlc3VsdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsRnguZm9udCA9IHRoaXMuZm9udEZ4WzFdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsRnguc3RyaW5nID0gXCJDw7NuZ1wiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE1OlxuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICAgICAgICAgIC8vIEJpIGNoYW4gc2FtXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnhSZXN1bHQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYWJlbEZ4LmZvbnQgPSB0aGlzLmZvbnRGeFsxXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYWJlbEZ4LnN0cmluZyA9IFwiQuG7iyBDaOG6t24gU8OibVwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGtpZW10cmFUaG9pSGVvKGEpIHtcbiAgICAgICAgZm9yICh2YXIgYiA9IDAsIGMgPSAwOyBjIDwgYS5sZW5ndGg7IGMrKykgTWF0aC5mbG9vcihhW2NdIC8gNCkgPT0gMTIgJiYgYisrO1xuICAgICAgICByZXR1cm4gMCA8IGIgPyAhMCA6ICExXG4gICAgfVxuXG4gICAga2llbXRyYVRob2lUdVF1eShhKSB7XG4gICAgICAgIGEuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGEgLSBiXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoNCA8PSBhLmxlbmd0aClcbiAgICAgICAgICAgIGZvciAodmFyIGIgPSBhLmxlbmd0aCAtIDEsIGMgPSAwOyAwIDwgYjspIHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5mbG9vcihhW2JdIC8gNCkgPT0gTWF0aC5mbG9vcihhW2IgLSAxXSAvIDQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjKyssIDMgPT0gYykgcmV0dXJuICEwXG4gICAgICAgICAgICAgICAgfSBlbHNlIGMgPSAwO1xuICAgICAgICAgICAgICAgIGItLVxuICAgICAgICAgICAgfVxuICAgICAgICByZXR1cm4gITFcbiAgICB9O1xuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==