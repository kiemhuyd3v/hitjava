
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TaiXiuDouble/TaiXiuScript/TaiXiu2/TaiXiuMini2.PopupSoiCau.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '02f69S0t8JEFJkwkAFp8HGD', 'TaiXiuMini2.PopupSoiCau');
// TaiXiuDouble/TaiXiuScript/TaiXiu2/TaiXiuMini2.PopupSoiCau.ts

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
var Dialog_1 = require("../../../Lobby/LobbyScript/Script/common/Dialog");
var Utils_1 = require("../../../Lobby/LobbyScript/Script/common/Utils");
var TaiXiuMini2_TaiXiuMiniController_1 = require("./TaiXiuMini2.TaiXiuMiniController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupSoiCau = /** @class */ (function (_super) {
    __extends(PopupSoiCau, _super);
    function PopupSoiCau() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lineTemplate = null;
        _this.iconTaiTemplate = null;
        _this.iconXiuTemplate = null;
        _this.iconXX1Template = null;
        _this.iconXX2Template = null;
        _this.iconXX3Template = null;
        _this.iconNumberTemplate = null;
        _this.page1 = null;
        _this.lblLastSession = null;
        _this.xx1Draw = null;
        _this.xx2Draw = null;
        _this.xx3Draw = null;
        _this.xx123Draw = null;
        _this.page2 = null;
        _this.lblTai1 = null;
        _this.lblTai2 = null;
        _this.lblXiu1 = null;
        _this.lblXiu2 = null;
        _this.contentDraw = null;
        return _this;
    }
    PopupSoiCau.prototype.show = function () {
        _super.prototype.show.call(this);
        this.page1.active = false;
        this.page2.active = false;
        this.lineTemplate.parent.active = false;
    };
    PopupSoiCau.prototype.dismiss = function () {
        _super.prototype.dismiss.call(this);
        this.page1.active = false;
        this.page2.active = false;
    };
    PopupSoiCau.prototype._onShowed = function () {
        _super.prototype._onShowed.call(this);
        this.drawPage1();
        this.page1.active = true;
        this.page2.active = false;
    };
    PopupSoiCau.prototype.toggleXX1 = function (target) {
        this.xx1Draw.active = target.isChecked;
    };
    PopupSoiCau.prototype.toggleXX2 = function (target) {
        this.xx2Draw.active = target.isChecked;
    };
    PopupSoiCau.prototype.toggleXX3 = function (target) {
        this.xx3Draw.active = target.isChecked;
    };
    PopupSoiCau.prototype.togglePage = function () {
        this.page1.active = !this.page1.active;
        this.page2.active = !this.page1.active;
        if (this.page1.active) {
            this.drawPage1();
        }
        else {
            this.drawPage2();
        }
    };
    PopupSoiCau.prototype.drawPage1 = function () {
        var data = TaiXiuMini2_TaiXiuMiniController_1.default.instance.histories.slice();
        if (data.length > 22) {
            data.splice(0, data.length - 22);
        }
        var last = data[data.length - 1];
        var lastDices = last.dices;
        var lastScore = lastDices[0] + lastDices[1] + lastDices[2];
        this.lblLastSession.string = "Phiên gần nhất: (#" + last.session + ")  " + (lastScore >= 11 ? "TÀI" : "XỈU") + "  " + lastScore + "(" + lastDices[0] + "-" + lastDices[1] + "-" + lastDices[2] + ")";
        var endPosX = 311;
        var startPosY = -195.822;
        var startPosY123 = -4.234;
        this.xx1Draw.removeAllChildren();
        this.xx2Draw.removeAllChildren();
        this.xx3Draw.removeAllChildren();
        this.xx123Draw.removeAllChildren();
        var _i = 0;
        var spacingX = 28.3;
        var spacingY = 30.2;
        for (var i = data.length - 1; i >= 0; i--) {
            var dices = data[i].dices;
            var score = dices[0] + dices[1] + dices[2];
            var startPosXX1 = cc.v2(endPosX - _i * spacingX, startPosY + (dices[0] - 1) * spacingY);
            var startPosXX2 = cc.v2(endPosX - _i * spacingX, startPosY + (dices[1] - 1) * spacingY);
            var startPosXX3 = cc.v2(endPosX - _i * spacingX, startPosY + (dices[2] - 1) * spacingY);
            var startPosXX123 = cc.v2(endPosX - _i * spacingX, startPosY123 + (score - 3) * (spacingY / 3));
            var iconXX1 = cc.instantiate(this.iconXX1Template);
            iconXX1.parent = this.xx1Draw;
            iconXX1.setPosition(startPosXX1);
            var iconXX2 = cc.instantiate(this.iconXX2Template);
            iconXX2.parent = this.xx2Draw;
            iconXX2.setPosition(startPosXX2);
            var iconXX3 = cc.instantiate(this.iconXX3Template);
            iconXX3.parent = this.xx3Draw;
            iconXX3.setPosition(startPosXX3);
            var iconXX123 = cc.instantiate(score >= 11 ? this.iconTaiTemplate : this.iconXiuTemplate);
            iconXX123.parent = this.xx123Draw;
            iconXX123.setPosition(startPosXX123);
            if (_i > 0) {
                dices = data[i + 1].dices;
                score = dices[0] + dices[1] + dices[2];
                var endPosXX1 = cc.v2(endPosX - (_i - 1) * spacingX, startPosY + (dices[0] - 1) * spacingY);
                var endPosXX2 = cc.v2(endPosX - (_i - 1) * spacingX, startPosY + (dices[1] - 1) * spacingY);
                var endPosXX3 = cc.v2(endPosX - (_i - 1) * spacingX, startPosY + (dices[2] - 1) * spacingY);
                var endPosXX123 = cc.v2(endPosX - (_i - 1) * spacingX, startPosY123 + (score - 3) * (spacingY / 3));
                var line = cc.instantiate(this.lineTemplate);
                line.parent = this.xx1Draw;
                line.width = Utils_1.default.v2Distance(startPosXX1, endPosXX1);
                line.setPosition(startPosXX1);
                line.angle = Utils_1.default.v2Degrees(startPosXX1, endPosXX1);
                line.color = cc.Color.BLACK.fromHEX("#ff1800");
                line.zIndex = 0;
                line = cc.instantiate(this.lineTemplate);
                line.parent = this.xx2Draw;
                line.width = Utils_1.default.v2Distance(startPosXX2, endPosXX2);
                line.setPosition(startPosXX2);
                line.angle = Utils_1.default.v2Degrees(startPosXX2, endPosXX2);
                line.color = cc.Color.BLACK.fromHEX("#ffea00");
                line.zIndex = 0;
                line = cc.instantiate(this.lineTemplate);
                line.parent = this.xx3Draw;
                line.width = Utils_1.default.v2Distance(startPosXX3, endPosXX3);
                line.setPosition(startPosXX3);
                line.angle = Utils_1.default.v2Degrees(startPosXX3, endPosXX3);
                line.color = cc.Color.BLACK.fromHEX("#35e100");
                line.zIndex = 0;
                line = cc.instantiate(this.lineTemplate);
                line.parent = this.xx123Draw;
                line.width = Utils_1.default.v2Distance(startPosXX123, endPosXX123);
                line.setPosition(startPosXX123);
                line.angle = Utils_1.default.v2Degrees(startPosXX123, endPosXX123);
                line.color = cc.Color.BLACK.fromHEX("#ffea00");
                line.zIndex = -1;
            }
            _i++;
        }
    };
    PopupSoiCau.prototype.drawPage2 = function () {
        var startPosX = -283.773;
        var startPosY = 132.93;
        var spacingX = 28.3;
        var spacingY = 30.2;
        this.contentDraw.removeAllChildren();
        var data = [];
        var curData = [];
        var count = TaiXiuMini2_TaiXiuMiniController_1.default.instance.histories.length;
        var countTai = 0;
        var countXiu = 0;
        if (count > 1) {
            var dices = TaiXiuMini2_TaiXiuMiniController_1.default.instance.histories[0].dices;
            var score = dices[0] + dices[1] + dices[2];
            var isTai = score >= 11;
            var maxItem = 5;
            for (var i = 0; i < count; i++) {
                dices = TaiXiuMini2_TaiXiuMiniController_1.default.instance.histories[i].dices;
                score = dices[0] + dices[1] + dices[2];
                var _isTai = score >= 11;
                if (_isTai !== isTai) {
                    if (curData.length > maxItem) {
                        curData.splice(0, curData.length - maxItem);
                    }
                    data.push(curData);
                    if (isTai) {
                        countTai += curData.length;
                    }
                    else {
                        countXiu += curData.length;
                    }
                    isTai = _isTai;
                    curData = [];
                    curData.push(score);
                }
                else {
                    curData.push(score);
                }
                if (i === count - 1) {
                    if (curData.length > maxItem) {
                        curData.splice(0, curData.length - maxItem);
                    }
                    data.push(curData);
                    if (isTai) {
                        countTai += curData.length;
                    }
                    else {
                        countXiu += curData.length;
                    }
                }
            }
        }
        if (data.length > 21) {
            data.splice(0, data.length - 21);
        }
        // cc.log(data);
        this.lblTai1.string = "TÀI: " + countTai;
        this.lblXiu1.string = "XỈU: " + countXiu;
        for (var i_1 = 0; i_1 < data.length; i_1++) {
            for (var j = 0; j < data[i_1].length; j++) {
                var score_1 = data[i_1][j];
                var icon = cc.instantiate(this.iconNumberTemplate);
                icon.parent = this.contentDraw;
                icon.setPosition(startPosX + spacingX * i_1, startPosY - spacingY * j);
                icon.color = cc.Color.BLACK.fromHEX(score_1 >= 11 ? "#4192ff" : "#FFFFFF");
                icon.getComponent(cc.Label).string = "" + score_1;
            }
        }
        startPosX = -281.793;
        startPosY = -58.447;
        var column = 0;
        var row = 0;
        var countTai = 0;
        var countXiu = 0;
        var data = TaiXiuMini2_TaiXiuMiniController_1.default.instance.histories.slice();
        if (data.length > 105) {
            data.splice(0, data.length - 105);
        }
        for (var i = 0; i < data.length; i++) {
            var score = data[i].dices[0] + data[i].dices[1] + data[i].dices[2];
            if (score >= 11) {
                countTai++;
            }
            else {
                countXiu++;
            }
            var iconXX123 = cc.instantiate(score >= 11 ? this.iconTaiTemplate : this.iconXiuTemplate);
            iconXX123.parent = this.contentDraw;
            iconXX123.setPosition(startPosX + spacingX * column, startPosY - spacingY * row);
            row++;
            if (row >= 5) {
                row = 0;
                column++;
            }
        }
        this.lblTai2.string = "TÀI: " + countTai;
        this.lblXiu2.string = "XỈU: " + countXiu;
    };
    __decorate([
        property(cc.Node)
    ], PopupSoiCau.prototype, "lineTemplate", void 0);
    __decorate([
        property(cc.Node)
    ], PopupSoiCau.prototype, "iconTaiTemplate", void 0);
    __decorate([
        property(cc.Node)
    ], PopupSoiCau.prototype, "iconXiuTemplate", void 0);
    __decorate([
        property(cc.Node)
    ], PopupSoiCau.prototype, "iconXX1Template", void 0);
    __decorate([
        property(cc.Node)
    ], PopupSoiCau.prototype, "iconXX2Template", void 0);
    __decorate([
        property(cc.Node)
    ], PopupSoiCau.prototype, "iconXX3Template", void 0);
    __decorate([
        property(cc.Node)
    ], PopupSoiCau.prototype, "iconNumberTemplate", void 0);
    __decorate([
        property(cc.Node)
    ], PopupSoiCau.prototype, "page1", void 0);
    __decorate([
        property(cc.Label)
    ], PopupSoiCau.prototype, "lblLastSession", void 0);
    __decorate([
        property(cc.Node)
    ], PopupSoiCau.prototype, "xx1Draw", void 0);
    __decorate([
        property(cc.Node)
    ], PopupSoiCau.prototype, "xx2Draw", void 0);
    __decorate([
        property(cc.Node)
    ], PopupSoiCau.prototype, "xx3Draw", void 0);
    __decorate([
        property(cc.Node)
    ], PopupSoiCau.prototype, "xx123Draw", void 0);
    __decorate([
        property(cc.Node)
    ], PopupSoiCau.prototype, "page2", void 0);
    __decorate([
        property(cc.Label)
    ], PopupSoiCau.prototype, "lblTai1", void 0);
    __decorate([
        property(cc.Label)
    ], PopupSoiCau.prototype, "lblTai2", void 0);
    __decorate([
        property(cc.Label)
    ], PopupSoiCau.prototype, "lblXiu1", void 0);
    __decorate([
        property(cc.Label)
    ], PopupSoiCau.prototype, "lblXiu2", void 0);
    __decorate([
        property(cc.Node)
    ], PopupSoiCau.prototype, "contentDraw", void 0);
    PopupSoiCau = __decorate([
        ccclass
    ], PopupSoiCau);
    return PopupSoiCau;
}(Dialog_1.default));
exports.default = PopupSoiCau;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGFpWGl1RG91YmxlXFxUYWlYaXVTY3JpcHRcXFRhaVhpdTJcXFRhaVhpdU1pbmkyLlBvcHVwU29pQ2F1LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBFQUFxRTtBQUNyRSx3RUFBbUU7QUFDbkUsdUZBQXVFO0FBR2pFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFNO0lBQS9DO1FBQUEscUVBdVJDO1FBclJHLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBRWhDLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBR2hDLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBRWhDLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBRWhDLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBR2hDLHdCQUFrQixHQUFZLElBQUksQ0FBQztRQUduQyxXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLG9CQUFjLEdBQWEsSUFBSSxDQUFDO1FBRWhDLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFekIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGlCQUFXLEdBQVksSUFBSSxDQUFDOztJQTRPaEMsQ0FBQztJQTFPRywwQkFBSSxHQUFKO1FBQ0ksaUJBQU0sSUFBSSxXQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFL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QzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBSyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3JELElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFFaEIsSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBSyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3JELElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFFaEIsSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBSyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JB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LENBQUMsSUFBSSxDQUFDO29EQUNVO0lBM0NYLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0F1Ui9CO0lBQUQsa0JBQUM7Q0F2UkQsQUF1UkMsQ0F2UndDLGdCQUFNLEdBdVI5QztrQkF2Um9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlhbG9nIGZyb20gXCIuLi8uLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0RpYWxvZ1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgVGFpWGl1TWluaTJDb250cm9sbGVyIGZyb20gXCIuL1RhaVhpdU1pbmkyLlRhaVhpdU1pbmlDb250cm9sbGVyXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwU29pQ2F1IGV4dGVuZHMgRGlhbG9nIHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaW5lVGVtcGxhdGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaWNvblRhaVRlbXBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpY29uWGl1VGVtcGxhdGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaWNvblhYMVRlbXBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpY29uWFgyVGVtcGxhdGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGljb25YWDNUZW1wbGF0ZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpY29uTnVtYmVyVGVtcGxhdGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcGFnZTE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxMYXN0U2Vzc2lvbjogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHh4MURyYXc6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHh4MkRyYXc6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHh4M0RyYXc6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHh4MTIzRHJhdzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwYWdlMjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFRhaTE6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsVGFpMjogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxYaXUxOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFhpdTI6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb250ZW50RHJhdzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBzaG93KCkge1xuICAgICAgICBzdXBlci5zaG93KCk7XG4gICAgICAgIHRoaXMucGFnZTEuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGFnZTIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGluZVRlbXBsYXRlLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBkaXNtaXNzKCkge1xuICAgICAgICBzdXBlci5kaXNtaXNzKCk7XG4gICAgICAgIHRoaXMucGFnZTEuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGFnZTIuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgX29uU2hvd2VkKCkge1xuICAgICAgICBzdXBlci5fb25TaG93ZWQoKTtcblxuICAgICAgICB0aGlzLmRyYXdQYWdlMSgpO1xuICAgICAgICB0aGlzLnBhZ2UxLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucGFnZTIuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdG9nZ2xlWFgxKHRhcmdldDogY2MuVG9nZ2xlKSB7XG4gICAgICAgIHRoaXMueHgxRHJhdy5hY3RpdmUgPSB0YXJnZXQuaXNDaGVja2VkO1xuICAgIH1cblxuICAgIHRvZ2dsZVhYMih0YXJnZXQ6IGNjLlRvZ2dsZSkge1xuICAgICAgICB0aGlzLnh4MkRyYXcuYWN0aXZlID0gdGFyZ2V0LmlzQ2hlY2tlZDtcbiAgICB9XG5cbiAgICB0b2dnbGVYWDModGFyZ2V0OiBjYy5Ub2dnbGUpIHtcbiAgICAgICAgdGhpcy54eDNEcmF3LmFjdGl2ZSA9IHRhcmdldC5pc0NoZWNrZWQ7XG4gICAgfVxuXG4gICAgdG9nZ2xlUGFnZSgpIHtcbiAgICAgICAgdGhpcy5wYWdlMS5hY3RpdmUgPSAhdGhpcy5wYWdlMS5hY3RpdmU7XG4gICAgICAgIHRoaXMucGFnZTIuYWN0aXZlID0gIXRoaXMucGFnZTEuYWN0aXZlO1xuICAgICAgICBpZiAodGhpcy5wYWdlMS5hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd1BhZ2UxKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdQYWdlMigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcmF3UGFnZTEoKSB7XG4gICAgICAgIHZhciBkYXRhID0gVGFpWGl1TWluaTJDb250cm9sbGVyLmluc3RhbmNlLmhpc3Rvcmllcy5zbGljZSgpO1xuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAyMikge1xuICAgICAgICAgICAgZGF0YS5zcGxpY2UoMCwgZGF0YS5sZW5ndGggLSAyMik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxhc3QgPSBkYXRhW2RhdGEubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBsYXN0RGljZXMgPSBsYXN0LmRpY2VzO1xuICAgICAgICB2YXIgbGFzdFNjb3JlID0gbGFzdERpY2VzWzBdICsgbGFzdERpY2VzWzFdICsgbGFzdERpY2VzWzJdO1xuICAgICAgICB0aGlzLmxibExhc3RTZXNzaW9uLnN0cmluZyA9IFwiUGhpw6puIGfhuqduIG5o4bqldDogKCNcIiArIGxhc3Quc2Vzc2lvbiArIFwiKSAgXCIgKyAobGFzdFNjb3JlID49IDExID8gXCJUw4BJXCIgOiBcIljhu4hVXCIpICsgXCIgIFwiICsgbGFzdFNjb3JlICsgXCIoXCIgKyBsYXN0RGljZXNbMF0gKyBcIi1cIiArIGxhc3REaWNlc1sxXSArIFwiLVwiICsgbGFzdERpY2VzWzJdICsgXCIpXCI7XG5cbiAgICAgICAgbGV0IGVuZFBvc1ggPSAzMTE7XG4gICAgICAgIGxldCBzdGFydFBvc1kgPSAtMTk1LjgyMjtcbiAgICAgICAgbGV0IHN0YXJ0UG9zWTEyMyA9IC00LjIzNDtcbiAgICAgICAgdGhpcy54eDFEcmF3LnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMueHgyRHJhdy5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLnh4M0RyYXcucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy54eDEyM0RyYXcucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcblxuICAgICAgICBsZXQgX2kgPSAwO1xuICAgICAgICB2YXIgc3BhY2luZ1ggPSAyOC4zO1xuICAgICAgICB2YXIgc3BhY2luZ1kgPSAzMC4yO1xuICAgICAgICBmb3IgKHZhciBpID0gZGF0YS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFyIGRpY2VzID0gZGF0YVtpXS5kaWNlcztcbiAgICAgICAgICAgIHZhciBzY29yZSA9IGRpY2VzWzBdICsgZGljZXNbMV0gKyBkaWNlc1syXTtcblxuICAgICAgICAgICAgbGV0IHN0YXJ0UG9zWFgxID0gY2MudjIoZW5kUG9zWCAtIF9pICogc3BhY2luZ1gsIHN0YXJ0UG9zWSArIChkaWNlc1swXSAtIDEpICogc3BhY2luZ1kpO1xuICAgICAgICAgICAgbGV0IHN0YXJ0UG9zWFgyID0gY2MudjIoZW5kUG9zWCAtIF9pICogc3BhY2luZ1gsIHN0YXJ0UG9zWSArIChkaWNlc1sxXSAtIDEpICogc3BhY2luZ1kpO1xuICAgICAgICAgICAgbGV0IHN0YXJ0UG9zWFgzID0gY2MudjIoZW5kUG9zWCAtIF9pICogc3BhY2luZ1gsIHN0YXJ0UG9zWSArIChkaWNlc1syXSAtIDEpICogc3BhY2luZ1kpO1xuICAgICAgICAgICAgbGV0IHN0YXJ0UG9zWFgxMjMgPSBjYy52MihlbmRQb3NYIC0gX2kgKiBzcGFjaW5nWCwgc3RhcnRQb3NZMTIzICsgKHNjb3JlIC0gMykgKiAoc3BhY2luZ1kgLyAzKSk7XG5cbiAgICAgICAgICAgIGxldCBpY29uWFgxID0gY2MuaW5zdGFudGlhdGUodGhpcy5pY29uWFgxVGVtcGxhdGUpO1xuICAgICAgICAgICAgaWNvblhYMS5wYXJlbnQgPSB0aGlzLnh4MURyYXc7XG4gICAgICAgICAgICBpY29uWFgxLnNldFBvc2l0aW9uKHN0YXJ0UG9zWFgxKTtcblxuICAgICAgICAgICAgbGV0IGljb25YWDIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmljb25YWDJUZW1wbGF0ZSk7XG4gICAgICAgICAgICBpY29uWFgyLnBhcmVudCA9IHRoaXMueHgyRHJhdztcbiAgICAgICAgICAgIGljb25YWDIuc2V0UG9zaXRpb24oc3RhcnRQb3NYWDIpO1xuXG4gICAgICAgICAgICBsZXQgaWNvblhYMyA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaWNvblhYM1RlbXBsYXRlKTtcbiAgICAgICAgICAgIGljb25YWDMucGFyZW50ID0gdGhpcy54eDNEcmF3O1xuICAgICAgICAgICAgaWNvblhYMy5zZXRQb3NpdGlvbihzdGFydFBvc1hYMyk7XG5cbiAgICAgICAgICAgIGxldCBpY29uWFgxMjMgPSBjYy5pbnN0YW50aWF0ZShzY29yZSA+PSAxMSA/IHRoaXMuaWNvblRhaVRlbXBsYXRlIDogdGhpcy5pY29uWGl1VGVtcGxhdGUpO1xuICAgICAgICAgICAgaWNvblhYMTIzLnBhcmVudCA9IHRoaXMueHgxMjNEcmF3O1xuICAgICAgICAgICAgaWNvblhYMTIzLnNldFBvc2l0aW9uKHN0YXJ0UG9zWFgxMjMpO1xuXG4gICAgICAgICAgICBpZiAoX2kgPiAwKSB7XG4gICAgICAgICAgICAgICAgZGljZXMgPSBkYXRhW2kgKyAxXS5kaWNlcztcbiAgICAgICAgICAgICAgICBzY29yZSA9IGRpY2VzWzBdICsgZGljZXNbMV0gKyBkaWNlc1syXTtcblxuICAgICAgICAgICAgICAgIGxldCBlbmRQb3NYWDEgPSBjYy52MihlbmRQb3NYIC0gKF9pIC0gMSkgKiBzcGFjaW5nWCwgc3RhcnRQb3NZICsgKGRpY2VzWzBdIC0gMSkgKiBzcGFjaW5nWSk7XG4gICAgICAgICAgICAgICAgbGV0IGVuZFBvc1hYMiA9IGNjLnYyKGVuZFBvc1ggLSAoX2kgLSAxKSAqIHNwYWNpbmdYLCBzdGFydFBvc1kgKyAoZGljZXNbMV0gLSAxKSAqIHNwYWNpbmdZKTtcbiAgICAgICAgICAgICAgICBsZXQgZW5kUG9zWFgzID0gY2MudjIoZW5kUG9zWCAtIChfaSAtIDEpICogc3BhY2luZ1gsIHN0YXJ0UG9zWSArIChkaWNlc1syXSAtIDEpICogc3BhY2luZ1kpO1xuICAgICAgICAgICAgICAgIGxldCBlbmRQb3NYWDEyMyA9IGNjLnYyKGVuZFBvc1ggLSAoX2kgLSAxKSAqIHNwYWNpbmdYLCBzdGFydFBvc1kxMjMgKyAoc2NvcmUgLSAzKSAqIChzcGFjaW5nWSAvIDMpKTtcblxuICAgICAgICAgICAgICAgIGxldCBsaW5lID0gY2MuaW5zdGFudGlhdGUodGhpcy5saW5lVGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgIGxpbmUucGFyZW50ID0gdGhpcy54eDFEcmF3O1xuICAgICAgICAgICAgICAgIGxpbmUud2lkdGggPSBVdGlscy52MkRpc3RhbmNlKHN0YXJ0UG9zWFgxLCBlbmRQb3NYWDEpO1xuICAgICAgICAgICAgICAgIGxpbmUuc2V0UG9zaXRpb24oc3RhcnRQb3NYWDEpO1xuICAgICAgICAgICAgICAgIGxpbmUuYW5nbGUgPSBVdGlscy52MkRlZ3JlZXMoc3RhcnRQb3NYWDEsIGVuZFBvc1hYMSk7XG4gICAgICAgICAgICAgICAgbGluZS5jb2xvciA9IGNjLkNvbG9yLkJMQUNLLmZyb21IRVgoXCIjZmYxODAwXCIpO1xuICAgICAgICAgICAgICAgIGxpbmUuekluZGV4ID0gMDtcblxuICAgICAgICAgICAgICAgIGxpbmUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpbmVUZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgbGluZS5wYXJlbnQgPSB0aGlzLnh4MkRyYXc7XG4gICAgICAgICAgICAgICAgbGluZS53aWR0aCA9IFV0aWxzLnYyRGlzdGFuY2Uoc3RhcnRQb3NYWDIsIGVuZFBvc1hYMik7XG4gICAgICAgICAgICAgICAgbGluZS5zZXRQb3NpdGlvbihzdGFydFBvc1hYMik7XG4gICAgICAgICAgICAgICAgbGluZS5hbmdsZSA9IFV0aWxzLnYyRGVncmVlcyhzdGFydFBvc1hYMiwgZW5kUG9zWFgyKTtcbiAgICAgICAgICAgICAgICBsaW5lLmNvbG9yID0gY2MuQ29sb3IuQkxBQ0suZnJvbUhFWChcIiNmZmVhMDBcIik7XG4gICAgICAgICAgICAgICAgbGluZS56SW5kZXggPSAwO1xuXG4gICAgICAgICAgICAgICAgbGluZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGluZVRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICBsaW5lLnBhcmVudCA9IHRoaXMueHgzRHJhdztcbiAgICAgICAgICAgICAgICBsaW5lLndpZHRoID0gVXRpbHMudjJEaXN0YW5jZShzdGFydFBvc1hYMywgZW5kUG9zWFgzKTtcbiAgICAgICAgICAgICAgICBsaW5lLnNldFBvc2l0aW9uKHN0YXJ0UG9zWFgzKTtcbiAgICAgICAgICAgICAgICBsaW5lLmFuZ2xlID0gVXRpbHMudjJEZWdyZWVzKHN0YXJ0UG9zWFgzLCBlbmRQb3NYWDMpO1xuICAgICAgICAgICAgICAgIGxpbmUuY29sb3IgPSBjYy5Db2xvci5CTEFDSy5mcm9tSEVYKFwiIzM1ZTEwMFwiKTtcbiAgICAgICAgICAgICAgICBsaW5lLnpJbmRleCA9IDA7XG5cbiAgICAgICAgICAgICAgICBsaW5lID0gY2MuaW5zdGFudGlhdGUodGhpcy5saW5lVGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgIGxpbmUucGFyZW50ID0gdGhpcy54eDEyM0RyYXc7XG4gICAgICAgICAgICAgICAgbGluZS53aWR0aCA9IFV0aWxzLnYyRGlzdGFuY2Uoc3RhcnRQb3NYWDEyMywgZW5kUG9zWFgxMjMpO1xuICAgICAgICAgICAgICAgIGxpbmUuc2V0UG9zaXRpb24oc3RhcnRQb3NYWDEyMyk7XG4gICAgICAgICAgICAgICAgbGluZS5hbmdsZSA9IFV0aWxzLnYyRGVncmVlcyhzdGFydFBvc1hYMTIzLCBlbmRQb3NYWDEyMyk7XG4gICAgICAgICAgICAgICAgbGluZS5jb2xvciA9IGNjLkNvbG9yLkJMQUNLLmZyb21IRVgoXCIjZmZlYTAwXCIpO1xuICAgICAgICAgICAgICAgIGxpbmUuekluZGV4ID0gLTE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9pKys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGRyYXdQYWdlMigpIHtcbiAgICAgICAgdmFyIHN0YXJ0UG9zWCA9IC0yODMuNzczO1xuICAgICAgICB2YXIgc3RhcnRQb3NZID0gMTMyLjkzO1xuICAgICAgICB2YXIgc3BhY2luZ1ggPSAyOC4zO1xuICAgICAgICB2YXIgc3BhY2luZ1kgPSAzMC4yO1xuXG4gICAgICAgIHRoaXMuY29udGVudERyYXcucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdmFyIGRhdGEgPSBbXTtcbiAgICAgICAgdmFyIGN1ckRhdGEgPSBbXTtcbiAgICAgICAgdmFyIGNvdW50ID0gVGFpWGl1TWluaTJDb250cm9sbGVyLmluc3RhbmNlLmhpc3Rvcmllcy5sZW5ndGg7XG4gICAgICAgIHZhciBjb3VudFRhaSA9IDA7XG4gICAgICAgIHZhciBjb3VudFhpdSA9IDA7XG4gICAgICAgIGlmIChjb3VudCA+IDEpIHtcbiAgICAgICAgICAgIHZhciBkaWNlcyA9IFRhaVhpdU1pbmkyQ29udHJvbGxlci5pbnN0YW5jZS5oaXN0b3JpZXNbMF0uZGljZXM7XG4gICAgICAgICAgICB2YXIgc2NvcmUgPSBkaWNlc1swXSArIGRpY2VzWzFdICsgZGljZXNbMl07XG4gICAgICAgICAgICB2YXIgaXNUYWkgPSBzY29yZSA+PSAxMTtcbiAgICAgICAgICAgIHZhciBtYXhJdGVtID0gNTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGRpY2VzID0gVGFpWGl1TWluaTJDb250cm9sbGVyLmluc3RhbmNlLmhpc3Rvcmllc1tpXS5kaWNlcztcbiAgICAgICAgICAgICAgICBzY29yZSA9IGRpY2VzWzBdICsgZGljZXNbMV0gKyBkaWNlc1syXTtcbiAgICAgICAgICAgICAgICB2YXIgX2lzVGFpID0gc2NvcmUgPj0gMTE7XG4gICAgICAgICAgICAgICAgaWYgKF9pc1RhaSAhPT0gaXNUYWkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckRhdGEubGVuZ3RoID4gbWF4SXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyRGF0YS5zcGxpY2UoMCwgY3VyRGF0YS5sZW5ndGggLSBtYXhJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2goY3VyRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1RhaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRUYWkgKz0gY3VyRGF0YS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudFhpdSArPSBjdXJEYXRhLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlzVGFpID0gX2lzVGFpO1xuICAgICAgICAgICAgICAgICAgICBjdXJEYXRhID0gW107XG4gICAgICAgICAgICAgICAgICAgIGN1ckRhdGEucHVzaChzY29yZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VyRGF0YS5wdXNoKHNjb3JlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IGNvdW50IC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VyRGF0YS5sZW5ndGggPiBtYXhJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJEYXRhLnNwbGljZSgwLCBjdXJEYXRhLmxlbmd0aCAtIG1heEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaChjdXJEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVGFpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudFRhaSArPSBjdXJEYXRhLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50WGl1ICs9IGN1ckRhdGEubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDIxKSB7XG4gICAgICAgICAgICBkYXRhLnNwbGljZSgwLCBkYXRhLmxlbmd0aCAtIDIxKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjYy5sb2coZGF0YSk7XG4gICAgICAgIHRoaXMubGJsVGFpMS5zdHJpbmcgPSBcIlTDgEk6IFwiICsgY291bnRUYWk7XG4gICAgICAgIHRoaXMubGJsWGl1MS5zdHJpbmcgPSBcIljhu4hVOiBcIiArIGNvdW50WGl1O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGF0YVtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBzY29yZSA9IGRhdGFbaV1bal07XG4gICAgICAgICAgICAgICAgbGV0IGljb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmljb25OdW1iZXJUZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgaWNvbi5wYXJlbnQgPSB0aGlzLmNvbnRlbnREcmF3O1xuICAgICAgICAgICAgICAgIGljb24uc2V0UG9zaXRpb24oc3RhcnRQb3NYICsgc3BhY2luZ1ggKiBpLCBzdGFydFBvc1kgLSBzcGFjaW5nWSAqIGopO1xuICAgICAgICAgICAgICAgIGljb24uY29sb3IgPSBjYy5Db2xvci5CTEFDSy5mcm9tSEVYKHNjb3JlID49IDExID8gXCIjNDE5MmZmXCIgOiBcIiNGRkZGRkZcIik7XG4gICAgICAgICAgICAgICAgaWNvbi5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIgKyBzY29yZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXJ0UG9zWCA9IC0yODEuNzkzO1xuICAgICAgICBzdGFydFBvc1kgPSAtNTguNDQ3O1xuICAgICAgICB2YXIgY29sdW1uID0gMDtcbiAgICAgICAgdmFyIHJvdyA9IDA7XG4gICAgICAgIHZhciBjb3VudFRhaSA9IDA7XG4gICAgICAgIHZhciBjb3VudFhpdSA9IDA7XG4gICAgICAgIHZhciBkYXRhID0gVGFpWGl1TWluaTJDb250cm9sbGVyLmluc3RhbmNlLmhpc3Rvcmllcy5zbGljZSgpO1xuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAxMDUpIHtcbiAgICAgICAgICAgIGRhdGEuc3BsaWNlKDAsIGRhdGEubGVuZ3RoIC0gMTA1KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBzY29yZSA9IGRhdGFbaV0uZGljZXNbMF0gKyBkYXRhW2ldLmRpY2VzWzFdICsgZGF0YVtpXS5kaWNlc1syXTtcbiAgICAgICAgICAgIGlmIChzY29yZSA+PSAxMSkge1xuICAgICAgICAgICAgICAgIGNvdW50VGFpKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvdW50WGl1Kys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBpY29uWFgxMjMgPSBjYy5pbnN0YW50aWF0ZShzY29yZSA+PSAxMSA/IHRoaXMuaWNvblRhaVRlbXBsYXRlIDogdGhpcy5pY29uWGl1VGVtcGxhdGUpO1xuICAgICAgICAgICAgaWNvblhYMTIzLnBhcmVudCA9IHRoaXMuY29udGVudERyYXc7XG4gICAgICAgICAgICBpY29uWFgxMjMuc2V0UG9zaXRpb24oc3RhcnRQb3NYICsgc3BhY2luZ1ggKiBjb2x1bW4sIHN0YXJ0UG9zWSAtIHNwYWNpbmdZICogcm93KTtcblxuICAgICAgICAgICAgcm93Kys7XG4gICAgICAgICAgICBpZiAocm93ID49IDUpIHtcbiAgICAgICAgICAgICAgICByb3cgPSAwO1xuICAgICAgICAgICAgICAgIGNvbHVtbisrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubGJsVGFpMi5zdHJpbmcgPSBcIlTDgEk6IFwiICsgY291bnRUYWk7XG4gICAgICAgIHRoaXMubGJsWGl1Mi5zdHJpbmcgPSBcIljhu4hVOiBcIiArIGNvdW50WGl1O1xuICAgIH1cbn0iXX0=