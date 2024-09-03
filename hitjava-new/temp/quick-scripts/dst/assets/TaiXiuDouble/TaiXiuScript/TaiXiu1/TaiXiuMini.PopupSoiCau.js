
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TaiXiuDouble/TaiXiuScript/TaiXiu1/TaiXiuMini.PopupSoiCau.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '62d139IuXBFBaudwuNL1Dq5', 'TaiXiuMini.PopupSoiCau');
// TaiXiuDouble/TaiXiuScript/TaiXiu1/TaiXiuMini.PopupSoiCau.ts

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
var App_1 = require("../../../Lobby/LobbyScript/Script/common/App");
var Dialog_1 = require("../../../Lobby/LobbyScript/Script/common/Dialog");
var Utils_1 = require("../../../Lobby/LobbyScript/Script/common/Utils");
var TaiXiuMini_TaiXiuMiniController_1 = require("./TaiXiuMini.TaiXiuMiniController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var taixiumini;
(function (taixiumini) {
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
            _this.iconNumberTaiTemplate = null;
            _this.iconNumberXiuTemplate = null;
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
            App_1.default.instance.showBgMiniGame("TaiXiu");
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
            var data = TaiXiuMini_TaiXiuMiniController_1.default.instance.histories.slice();
            if (data.length > 21) {
                data.splice(0, data.length - 21);
            }
            var last = data[data.length - 1];
            var lastDices = last.dices;
            var lastScore = lastDices[0] + lastDices[1] + lastDices[2];
            this.lblLastSession.string = "Phiên gần nhất: (#" + last.session + ")  " + (lastScore >= 11 ? "TÀI" : "XỈU") + "  " + lastScore + "(" + lastDices[0] + "-" + lastDices[1] + "-" + lastDices[2] + ")";
            var endPosX = 337.215;
            var startPosY = -274.135;
            var startPosY123 = -13.907;
            this.xx1Draw.removeAllChildren();
            this.xx2Draw.removeAllChildren();
            this.xx3Draw.removeAllChildren();
            this.xx123Draw.removeAllChildren();
            var _i = 0;
            var spacingX = 31.83;
            var spacingY = 31;
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
                    line.color = cc.Color.BLACK.fromHEX("#c7452b");
                    line.zIndex = 0;
                    line = cc.instantiate(this.lineTemplate);
                    line.parent = this.xx2Draw;
                    line.width = Utils_1.default.v2Distance(startPosXX2, endPosXX2);
                    line.setPosition(startPosXX2);
                    line.angle = Utils_1.default.v2Degrees(startPosXX2, endPosXX2);
                    line.color = cc.Color.BLACK.fromHEX("#9fd100");
                    line.zIndex = 0;
                    line = cc.instantiate(this.lineTemplate);
                    line.parent = this.xx3Draw;
                    line.width = Utils_1.default.v2Distance(startPosXX3, endPosXX3);
                    line.setPosition(startPosXX3);
                    line.angle = Utils_1.default.v2Degrees(startPosXX3, endPosXX3);
                    line.color = cc.Color.BLACK.fromHEX("#3980d8");
                    line.zIndex = 0;
                    line = cc.instantiate(this.lineTemplate);
                    line.parent = this.xx123Draw;
                    line.width = Utils_1.default.v2Distance(startPosXX123, endPosXX123);
                    line.setPosition(startPosXX123);
                    line.angle = Utils_1.default.v2Degrees(startPosXX123, endPosXX123);
                    line.color = cc.Color.BLACK.fromHEX("#fdfdfb");
                    line.zIndex = -1;
                }
                _i++;
            }
        };
        PopupSoiCau.prototype.drawPage2 = function () {
            var startPosX = -282.979;
            var startPosY = 113.257;
            var spacingX = 32.5;
            var spacingY = 32;
            this.contentDraw.removeAllChildren();
            var data = [];
            var curData = [];
            var count = TaiXiuMini_TaiXiuMiniController_1.default.instance.histories.length;
            var countTai = 0;
            var countXiu = 0;
            if (count > 1) {
                var dices = TaiXiuMini_TaiXiuMiniController_1.default.instance.histories[0].dices;
                var score = dices[0] + dices[1] + dices[2];
                var isTai = score >= 11;
                var maxItem = 5;
                for (var i = 0; i < count; i++) {
                    dices = TaiXiuMini_TaiXiuMiniController_1.default.instance.histories[i].dices;
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
            if (data.length > 20) {
                data.splice(0, data.length - 20);
            }
            // cc.log(data);
            this.lblTai1.string = countTai + "";
            this.lblXiu1.string = countXiu + "";
            for (var i_1 = 0; i_1 < data.length; i_1++) {
                for (var j = 0; j < data[i_1].length; j++) {
                    var score_1 = data[i_1][j];
                    var icon = null;
                    if (score_1 >= 11) {
                        icon = cc.instantiate(this.iconNumberTaiTemplate);
                    }
                    else {
                        icon = cc.instantiate(this.iconNumberXiuTemplate);
                    }
                    icon.parent = this.contentDraw;
                    icon.setPosition(cc.v2(startPosX + spacingX * i_1, startPosY - spacingY * j));
                    icon.children[0].getComponent(cc.Label).string = "" + score_1;
                }
            }
            startPosX = -282.979;
            startPosY = -127.113;
            var column = 0;
            var row = 0;
            var countTai = 0;
            var countXiu = 0;
            var data = TaiXiuMini_TaiXiuMiniController_1.default.instance.histories.slice();
            if (data.length > 100) {
                data.splice(0, data.length - 100);
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
                iconXX123.setPosition(startPosX + spacingX * column, startPosY - spacingY * row - 2);
                row++;
                if (row >= 5) {
                    row = 0;
                    column++;
                }
            }
            this.lblTai2.string = countTai + "";
            this.lblXiu2.string = countXiu + "";
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
        ], PopupSoiCau.prototype, "iconNumberTaiTemplate", void 0);
        __decorate([
            property(cc.Node)
        ], PopupSoiCau.prototype, "iconNumberXiuTemplate", void 0);
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
    taixiumini.PopupSoiCau = PopupSoiCau;
})(taixiumini || (taixiumini = {}));
exports.default = taixiumini.PopupSoiCau;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGFpWGl1RG91YmxlXFxUYWlYaXVTY3JpcHRcXFRhaVhpdTFcXFRhaVhpdU1pbmkuUG9wdXBTb2lDYXUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0VBQStEO0FBQy9ELDBFQUFxRTtBQUNyRSx3RUFBbUU7QUFDbkUscUZBQXFFO0FBRy9ELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQVUsVUFBVSxDQW1TbkI7QUFuU0QsV0FBVSxVQUFVO0lBRWhCO1FBQWlDLCtCQUFNO1FBQXZDO1lBQUEscUVBZ1NDO1lBOVJHLGtCQUFZLEdBQVksSUFBSSxDQUFDO1lBRzdCLHFCQUFlLEdBQVksSUFBSSxDQUFDO1lBRWhDLHFCQUFlLEdBQVksSUFBSSxDQUFDO1lBR2hDLHFCQUFlLEdBQVksSUFBSSxDQUFDO1lBRWhDLHFCQUFlLEdBQVksSUFBSSxDQUFDO1lBRWhDLHFCQUFlLEdBQVksSUFBSSxDQUFDO1lBR2hDLDJCQUFxQixHQUFZLElBQUksQ0FBQztZQUV0QywyQkFBcUIsR0FBWSxJQUFJLENBQUM7WUFHdEMsV0FBSyxHQUFZLElBQUksQ0FBQztZQUV0QixvQkFBYyxHQUFhLElBQUksQ0FBQztZQUVoQyxhQUFPLEdBQVksSUFBSSxDQUFDO1lBRXhCLGFBQU8sR0FBWSxJQUFJLENBQUM7WUFFeEIsYUFBTyxHQUFZLElBQUksQ0FBQztZQUV4QixlQUFTLEdBQVksSUFBSSxDQUFDO1lBRzFCLFdBQUssR0FBWSxJQUFJLENBQUM7WUFFdEIsYUFBTyxHQUFhLElBQUksQ0FBQztZQUV6QixhQUFPLEdBQWEsSUFBSSxDQUFDO1lBRXpCLGFBQU8sR0FBYSxJQUFJLENBQUM7WUFFekIsYUFBTyxHQUFhLElBQUksQ0FBQztZQUV6QixpQkFBVyxHQUFZLElBQUksQ0FBQzs7UUFtUGhDLENBQUM7UUFq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QUFDLENBQUM7Z0JBQzFGLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDbEMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFFckMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFO29CQUNSLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDMUIsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUV2QyxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsU0FBUyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO29CQUM1RixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsU0FBUyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO29CQUM1RixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsU0FBUyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO29CQUM1RixJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsWUFBWSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRXBHLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUM3QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBSyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ3RELElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ3JELElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztvQkFFaEIsSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBSyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ3RELElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ3JELElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztvQkFFaEIsSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFX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Q0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNRO1FBRzFCO1lBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ0k7UUFFdEI7WUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztvREFDTTtRQUV6QjtZQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO29EQUNNO1FBRXpCO1lBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0RBQ007UUFFekI7WUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztvREFDTTtRQUV6QjtZQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNVO1FBN0NuQixXQUFXO1lBRHZCLE9BQU87V0FDSyxXQUFXLENBZ1N2QjtRQUFELGtCQUFDO0tBaFNELEFBZ1NDLENBaFNnQyxnQkFBTSxHQWdTdEM7SUFoU1ksc0JBQVcsY0FnU3ZCLENBQUE7QUFDTCxDQUFDLEVBblNTLFVBQVUsS0FBVixVQUFVLFFBbVNuQjtBQUNELGtCQUFlLFVBQVUsQ0FBQyxXQUFXLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gXCIuLi8uLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi4vLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9EaWFsb2dcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuaW1wb3J0IFRhaVhpdU1pbmlDb250cm9sbGVyIGZyb20gXCIuL1RhaVhpdU1pbmkuVGFpWGl1TWluaUNvbnRyb2xsZXJcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5uYW1lc3BhY2UgdGFpeGl1bWluaSB7XG4gICAgQGNjY2xhc3NcbiAgICBleHBvcnQgY2xhc3MgUG9wdXBTb2lDYXUgZXh0ZW5kcyBEaWFsb2cge1xuICAgICAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAgICAgbGluZVRlbXBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgICAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAgICAgaWNvblRhaVRlbXBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgICAgIGljb25YaXVUZW1wbGF0ZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAgICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgICAgIGljb25YWDFUZW1wbGF0ZTogY2MuTm9kZSA9IG51bGw7XG4gICAgICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgICAgICBpY29uWFgyVGVtcGxhdGU6IGNjLk5vZGUgPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAgICAgaWNvblhYM1RlbXBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgICAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAgICAgaWNvbk51bWJlclRhaVRlbXBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgICAgIGljb25OdW1iZXJYaXVUZW1wbGF0ZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAgICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgICAgIHBhZ2UxOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgICAgICBsYmxMYXN0U2Vzc2lvbjogY2MuTGFiZWwgPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAgICAgeHgxRHJhdzogY2MuTm9kZSA9IG51bGw7XG4gICAgICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgICAgICB4eDJEcmF3OiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgICAgIHh4M0RyYXc6IGNjLk5vZGUgPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAgICAgeHgxMjNEcmF3OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgICAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAgICAgcGFnZTI6IGNjLk5vZGUgPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgICAgIGxibFRhaTE6IGNjLkxhYmVsID0gbnVsbDtcbiAgICAgICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgICAgICBsYmxUYWkyOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICAgICAgbGJsWGl1MTogY2MuTGFiZWwgPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgICAgIGxibFhpdTI6IGNjLkxhYmVsID0gbnVsbDtcbiAgICAgICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgICAgIGNvbnRlbnREcmF3OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgICAgICBzaG93KCkge1xuICAgICAgICAgICAgc3VwZXIuc2hvdygpO1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dCZ01pbmlHYW1lKFwiVGFpWGl1XCIpO1xuICAgICAgICAgICAgdGhpcy5wYWdlMS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucGFnZTIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxpbmVUZW1wbGF0ZS5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBkaXNtaXNzKCkge1xuICAgICAgICAgICAgc3VwZXIuZGlzbWlzcygpO1xuICAgICAgICAgICAgdGhpcy5wYWdlMS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucGFnZTIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfb25TaG93ZWQoKSB7XG4gICAgICAgICAgICBzdXBlci5fb25TaG93ZWQoKTtcblxuICAgICAgICAgICAgdGhpcy5kcmF3UGFnZTEoKTtcbiAgICAgICAgICAgIHRoaXMucGFnZTEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucGFnZTIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0b2dnbGVYWDEodGFyZ2V0OiBjYy5Ub2dnbGUpIHtcbiAgICAgICAgICAgIHRoaXMueHgxRHJhdy5hY3RpdmUgPSB0YXJnZXQuaXNDaGVja2VkO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9nZ2xlWFgyKHRhcmdldDogY2MuVG9nZ2xlKSB7XG4gICAgICAgICAgICB0aGlzLnh4MkRyYXcuYWN0aXZlID0gdGFyZ2V0LmlzQ2hlY2tlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvZ2dsZVhYMyh0YXJnZXQ6IGNjLlRvZ2dsZSkge1xuICAgICAgICAgICAgdGhpcy54eDNEcmF3LmFjdGl2ZSA9IHRhcmdldC5pc0NoZWNrZWQ7XG4gICAgICAgIH1cblxuICAgICAgICB0b2dnbGVQYWdlKCkge1xuICAgICAgICAgICAgdGhpcy5wYWdlMS5hY3RpdmUgPSAhdGhpcy5wYWdlMS5hY3RpdmU7XG4gICAgICAgICAgICB0aGlzLnBhZ2UyLmFjdGl2ZSA9ICF0aGlzLnBhZ2UxLmFjdGl2ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhZ2UxLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd1BhZ2UxKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd1BhZ2UyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIGRyYXdQYWdlMSgpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gVGFpWGl1TWluaUNvbnRyb2xsZXIuaW5zdGFuY2UuaGlzdG9yaWVzLnNsaWNlKCk7XG4gICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAyMSkge1xuICAgICAgICAgICAgICAgIGRhdGEuc3BsaWNlKDAsIGRhdGEubGVuZ3RoIC0gMjEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbGFzdCA9IGRhdGFbZGF0YS5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIHZhciBsYXN0RGljZXMgPSBsYXN0LmRpY2VzO1xuICAgICAgICAgICAgdmFyIGxhc3RTY29yZSA9IGxhc3REaWNlc1swXSArIGxhc3REaWNlc1sxXSArIGxhc3REaWNlc1syXTtcbiAgICAgICAgICAgIHRoaXMubGJsTGFzdFNlc3Npb24uc3RyaW5nID0gXCJQaGnDqm4gZ+G6p24gbmjhuqV0OiAoI1wiICsgbGFzdC5zZXNzaW9uICsgXCIpICBcIiArIChsYXN0U2NvcmUgPj0gMTEgPyBcIlTDgElcIiA6IFwiWOG7iFVcIikgKyBcIiAgXCIgKyBsYXN0U2NvcmUgKyBcIihcIiArIGxhc3REaWNlc1swXSArIFwiLVwiICsgbGFzdERpY2VzWzFdICsgXCItXCIgKyBsYXN0RGljZXNbMl0gKyBcIilcIjtcblxuICAgICAgICAgICAgbGV0IGVuZFBvc1ggPSAzMzcuMjE1O1xuICAgICAgICAgICAgbGV0IHN0YXJ0UG9zWSA9IC0yNzQuMTM1O1xuICAgICAgICAgICAgbGV0IHN0YXJ0UG9zWTEyMyA9IC0xMy45MDc7XG4gICAgICAgICAgICB0aGlzLnh4MURyYXcucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgIHRoaXMueHgyRHJhdy5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICAgICAgdGhpcy54eDNEcmF3LnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgICAgICB0aGlzLnh4MTIzRHJhdy5yZW1vdmVBbGxDaGlsZHJlbigpO1xuXG4gICAgICAgICAgICBsZXQgX2kgPSAwO1xuICAgICAgICAgICAgdmFyIHNwYWNpbmdYID0gMzEuODM7XG4gICAgICAgICAgICB2YXIgc3BhY2luZ1kgPSAzMTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBkYXRhLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpY2VzID0gZGF0YVtpXS5kaWNlcztcbiAgICAgICAgICAgICAgICB2YXIgc2NvcmUgPSBkaWNlc1swXSArIGRpY2VzWzFdICsgZGljZXNbMl07XG5cbiAgICAgICAgICAgICAgICBsZXQgc3RhcnRQb3NYWDEgPSBjYy52MihlbmRQb3NYIC0gX2kgKiBzcGFjaW5nWCwgc3RhcnRQb3NZICsgKGRpY2VzWzBdIC0gMSkgKiBzcGFjaW5nWSk7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0UG9zWFgyID0gY2MudjIoZW5kUG9zWCAtIF9pICogc3BhY2luZ1gsIHN0YXJ0UG9zWSArIChkaWNlc1sxXSAtIDEpICogc3BhY2luZ1kpO1xuICAgICAgICAgICAgICAgIGxldCBzdGFydFBvc1hYMyA9IGNjLnYyKGVuZFBvc1ggLSBfaSAqIHNwYWNpbmdYLCBzdGFydFBvc1kgKyAoZGljZXNbMl0gLSAxKSAqIHNwYWNpbmdZKTtcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnRQb3NYWDEyMyA9IGNjLnYyKGVuZFBvc1ggLSBfaSAqIHNwYWNpbmdYLCBzdGFydFBvc1kxMjMgKyAoc2NvcmUgLSAzKSAqIChzcGFjaW5nWSAvIDMpKTtcblxuICAgICAgICAgICAgICAgIGxldCBpY29uWFgxID0gY2MuaW5zdGFudGlhdGUodGhpcy5pY29uWFgxVGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgIGljb25YWDEucGFyZW50ID0gdGhpcy54eDFEcmF3O1xuICAgICAgICAgICAgICAgIGljb25YWDEuc2V0UG9zaXRpb24oc3RhcnRQb3NYWDEpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGljb25YWDIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmljb25YWDJUZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgaWNvblhYMi5wYXJlbnQgPSB0aGlzLnh4MkRyYXc7XG4gICAgICAgICAgICAgICAgaWNvblhYMi5zZXRQb3NpdGlvbihzdGFydFBvc1hYMik7XG5cbiAgICAgICAgICAgICAgICBsZXQgaWNvblhYMyA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaWNvblhYM1RlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICBpY29uWFgzLnBhcmVudCA9IHRoaXMueHgzRHJhdztcbiAgICAgICAgICAgICAgICBpY29uWFgzLnNldFBvc2l0aW9uKHN0YXJ0UG9zWFgzKTtcblxuICAgICAgICAgICAgICAgIGxldCBpY29uWFgxMjMgPSBjYy5pbnN0YW50aWF0ZShzY29yZSA+PSAxMSA/IHRoaXMuaWNvblRhaVRlbXBsYXRlIDogdGhpcy5pY29uWGl1VGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgIGljb25YWDEyMy5wYXJlbnQgPSB0aGlzLnh4MTIzRHJhdztcbiAgICAgICAgICAgICAgICBpY29uWFgxMjMuc2V0UG9zaXRpb24oc3RhcnRQb3NYWDEyMyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoX2kgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpY2VzID0gZGF0YVtpICsgMV0uZGljZXM7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlID0gZGljZXNbMF0gKyBkaWNlc1sxXSArIGRpY2VzWzJdO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmRQb3NYWDEgPSBjYy52MihlbmRQb3NYIC0gKF9pIC0gMSkgKiBzcGFjaW5nWCwgc3RhcnRQb3NZICsgKGRpY2VzWzBdIC0gMSkgKiBzcGFjaW5nWSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmRQb3NYWDIgPSBjYy52MihlbmRQb3NYIC0gKF9pIC0gMSkgKiBzcGFjaW5nWCwgc3RhcnRQb3NZICsgKGRpY2VzWzFdIC0gMSkgKiBzcGFjaW5nWSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmRQb3NYWDMgPSBjYy52MihlbmRQb3NYIC0gKF9pIC0gMSkgKiBzcGFjaW5nWCwgc3RhcnRQb3NZICsgKGRpY2VzWzJdIC0gMSkgKiBzcGFjaW5nWSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmRQb3NYWDEyMyA9IGNjLnYyKGVuZFBvc1ggLSAoX2kgLSAxKSAqIHNwYWNpbmdYLCBzdGFydFBvc1kxMjMgKyAoc2NvcmUgLSAzKSAqIChzcGFjaW5nWSAvIDMpKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbGluZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGluZVRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS5wYXJlbnQgPSB0aGlzLnh4MURyYXc7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUud2lkdGggPSBVdGlscy52MkRpc3RhbmNlKHN0YXJ0UG9zWFgxLCBlbmRQb3NYWDEpO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLnNldFBvc2l0aW9uKHN0YXJ0UG9zWFgxKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS5hbmdsZSA9IFV0aWxzLnYyRGVncmVlcyhzdGFydFBvc1hYMSwgZW5kUG9zWFgxKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS5jb2xvciA9IGNjLkNvbG9yLkJMQUNLLmZyb21IRVgoXCIjYzc0NTJiXCIpO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLnpJbmRleCA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgbGluZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGluZVRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS5wYXJlbnQgPSB0aGlzLnh4MkRyYXc7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUud2lkdGggPSBVdGlscy52MkRpc3RhbmNlKHN0YXJ0UG9zWFgyLCBlbmRQb3NYWDIpO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLnNldFBvc2l0aW9uKHN0YXJ0UG9zWFgyKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS5hbmdsZSA9IFV0aWxzLnYyRGVncmVlcyhzdGFydFBvc1hYMiwgZW5kUG9zWFgyKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS5jb2xvciA9IGNjLkNvbG9yLkJMQUNLLmZyb21IRVgoXCIjOWZkMTAwXCIpO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLnpJbmRleCA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgbGluZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGluZVRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS5wYXJlbnQgPSB0aGlzLnh4M0RyYXc7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUud2lkdGggPSBVdGlscy52MkRpc3RhbmNlKHN0YXJ0UG9zWFgzLCBlbmRQb3NYWDMpO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLnNldFBvc2l0aW9uKHN0YXJ0UG9zWFgzKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS5hbmdsZSA9IFV0aWxzLnYyRGVncmVlcyhzdGFydFBvc1hYMywgZW5kUG9zWFgzKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS5jb2xvciA9IGNjLkNvbG9yLkJMQUNLLmZyb21IRVgoXCIjMzk4MGQ4XCIpO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLnpJbmRleCA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgbGluZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGluZVRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS5wYXJlbnQgPSB0aGlzLnh4MTIzRHJhdztcbiAgICAgICAgICAgICAgICAgICAgbGluZS53aWR0aCA9IFV0aWxzLnYyRGlzdGFuY2Uoc3RhcnRQb3NYWDEyMywgZW5kUG9zWFgxMjMpO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLnNldFBvc2l0aW9uKHN0YXJ0UG9zWFgxMjMpO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLmFuZ2xlID0gVXRpbHMudjJEZWdyZWVzKHN0YXJ0UG9zWFgxMjMsIGVuZFBvc1hYMTIzKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS5jb2xvciA9IGNjLkNvbG9yLkJMQUNLLmZyb21IRVgoXCIjZmRmZGZiXCIpO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLnpJbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF9pKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIGRyYXdQYWdlMigpIHtcbiAgICAgICAgICAgIHZhciBzdGFydFBvc1ggPSAtMjgyLjk3OTtcbiAgICAgICAgICAgIHZhciBzdGFydFBvc1kgPSAxMTMuMjU3O1xuICAgICAgICAgICAgdmFyIHNwYWNpbmdYID0gMzIuNTtcbiAgICAgICAgICAgIHZhciBzcGFjaW5nWSA9IDMyO1xuXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnREcmF3LnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IFtdO1xuICAgICAgICAgICAgdmFyIGN1ckRhdGEgPSBbXTtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IFRhaVhpdU1pbmlDb250cm9sbGVyLmluc3RhbmNlLmhpc3Rvcmllcy5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgY291bnRUYWkgPSAwO1xuICAgICAgICAgICAgdmFyIGNvdW50WGl1ID0gMDtcbiAgICAgICAgICAgIGlmIChjb3VudCA+IDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGljZXMgPSBUYWlYaXVNaW5pQ29udHJvbGxlci5pbnN0YW5jZS5oaXN0b3JpZXNbMF0uZGljZXM7XG4gICAgICAgICAgICAgICAgdmFyIHNjb3JlID0gZGljZXNbMF0gKyBkaWNlc1sxXSArIGRpY2VzWzJdO1xuICAgICAgICAgICAgICAgIHZhciBpc1RhaSA9IHNjb3JlID49IDExO1xuICAgICAgICAgICAgICAgIHZhciBtYXhJdGVtID0gNTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZGljZXMgPSBUYWlYaXVNaW5pQ29udHJvbGxlci5pbnN0YW5jZS5oaXN0b3JpZXNbaV0uZGljZXM7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlID0gZGljZXNbMF0gKyBkaWNlc1sxXSArIGRpY2VzWzJdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2lzVGFpID0gc2NvcmUgPj0gMTE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfaXNUYWkgIT09IGlzVGFpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyRGF0YS5sZW5ndGggPiBtYXhJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyRGF0YS5zcGxpY2UoMCwgY3VyRGF0YS5sZW5ndGggLSBtYXhJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaChjdXJEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1RhaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50VGFpICs9IGN1ckRhdGEubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudFhpdSArPSBjdXJEYXRhLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaXNUYWkgPSBfaXNUYWk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJEYXRhID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJEYXRhLnB1c2goc2NvcmUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyRGF0YS5wdXNoKHNjb3JlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gY291bnQgLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyRGF0YS5sZW5ndGggPiBtYXhJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyRGF0YS5zcGxpY2UoMCwgY3VyRGF0YS5sZW5ndGggLSBtYXhJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaChjdXJEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1RhaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50VGFpICs9IGN1ckRhdGEubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudFhpdSArPSBjdXJEYXRhLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDIwKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5zcGxpY2UoMCwgZGF0YS5sZW5ndGggLSAyMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjYy5sb2coZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmxibFRhaTEuc3RyaW5nID0gY291bnRUYWkgKyBcIlwiO1xuICAgICAgICAgICAgdGhpcy5sYmxYaXUxLnN0cmluZyA9IGNvdW50WGl1ICsgXCJcIjtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGF0YVtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2NvcmUgPSBkYXRhW2ldW2pdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaWNvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzY29yZSA+PSAxMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaWNvbk51bWJlclRhaVRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmljb25OdW1iZXJYaXVUZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWNvbi5wYXJlbnQgPSB0aGlzLmNvbnRlbnREcmF3O1xuICAgICAgICAgICAgICAgICAgICBpY29uLnNldFBvc2l0aW9uKGNjLnYyKHN0YXJ0UG9zWCArIHNwYWNpbmdYICogaSwgc3RhcnRQb3NZIC0gc3BhY2luZ1kgKiBqKSk7XG4gICAgICAgICAgICAgICAgICAgIGljb24uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiICsgc2NvcmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdGFydFBvc1ggPSAtMjgyLjk3OTtcbiAgICAgICAgICAgIHN0YXJ0UG9zWSA9IC0xMjcuMTEzO1xuICAgICAgICAgICAgdmFyIGNvbHVtbiA9IDA7XG4gICAgICAgICAgICB2YXIgcm93ID0gMDtcbiAgICAgICAgICAgIHZhciBjb3VudFRhaSA9IDA7XG4gICAgICAgICAgICB2YXIgY291bnRYaXUgPSAwO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBUYWlYaXVNaW5pQ29udHJvbGxlci5pbnN0YW5jZS5oaXN0b3JpZXMuc2xpY2UoKTtcbiAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDEwMCkge1xuICAgICAgICAgICAgICAgIGRhdGEuc3BsaWNlKDAsIGRhdGEubGVuZ3RoIC0gMTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBzY29yZSA9IGRhdGFbaV0uZGljZXNbMF0gKyBkYXRhW2ldLmRpY2VzWzFdICsgZGF0YVtpXS5kaWNlc1syXTtcbiAgICAgICAgICAgICAgICBpZiAoc2NvcmUgPj0gMTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRUYWkrKztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb3VudFhpdSsrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBpY29uWFgxMjMgPSBjYy5pbnN0YW50aWF0ZShzY29yZSA+PSAxMSA/IHRoaXMuaWNvblRhaVRlbXBsYXRlIDogdGhpcy5pY29uWGl1VGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgIGljb25YWDEyMy5wYXJlbnQgPSB0aGlzLmNvbnRlbnREcmF3O1xuICAgICAgICAgICAgICAgIGljb25YWDEyMy5zZXRQb3NpdGlvbihzdGFydFBvc1ggKyBzcGFjaW5nWCAqIGNvbHVtbiwgc3RhcnRQb3NZIC0gc3BhY2luZ1kgKiByb3cgLSAyKTtcblxuICAgICAgICAgICAgICAgIHJvdysrO1xuICAgICAgICAgICAgICAgIGlmIChyb3cgPj0gNSkge1xuICAgICAgICAgICAgICAgICAgICByb3cgPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW4rKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxibFRhaTIuc3RyaW5nID0gY291bnRUYWkgKyBcIlwiO1xuICAgICAgICAgICAgdGhpcy5sYmxYaXUyLnN0cmluZyA9IGNvdW50WGl1ICsgXCJcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHRhaXhpdW1pbmkuUG9wdXBTb2lDYXU7Il19