"use strict";
cc._RF.push(module, 'e9faai+amlFoomviI3remSB', 'TaiXiuMD5.PopupSoiCau');
// TaiXiuMD5/TaiXiuScript/TaiXiu1/TaiXiuMD5.PopupSoiCau.ts

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
var TaiXiuMD5_TaiXiuMiniController_1 = require("./TaiXiuMD5.TaiXiuMiniController");
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
            console.log("show soi cau");
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
            var data = TaiXiuMD5_TaiXiuMiniController_1.default.instance.histories.slice();
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
                iconXX1.position = startPosXX1;
                var iconXX2 = cc.instantiate(this.iconXX2Template);
                iconXX2.parent = this.xx2Draw;
                iconXX2.position = startPosXX2;
                var iconXX3 = cc.instantiate(this.iconXX3Template);
                iconXX3.parent = this.xx3Draw;
                iconXX3.position = startPosXX3;
                var iconXX123 = cc.instantiate(score >= 11 ? this.iconTaiTemplate : this.iconXiuTemplate);
                iconXX123.parent = this.xx123Draw;
                iconXX123.position = startPosXX123;
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
                    line.position = startPosXX1;
                    line.angle = Utils_1.default.v2Degrees(startPosXX1, endPosXX1);
                    line.color = cc.Color.BLACK.fromHEX("#ff1800");
                    line.zIndex = 0;
                    line = cc.instantiate(this.lineTemplate);
                    line.parent = this.xx2Draw;
                    line.width = Utils_1.default.v2Distance(startPosXX2, endPosXX2);
                    line.position = startPosXX2;
                    line.angle = Utils_1.default.v2Degrees(startPosXX2, endPosXX2);
                    line.color = cc.Color.BLACK.fromHEX("#ffea00");
                    line.zIndex = 0;
                    line = cc.instantiate(this.lineTemplate);
                    line.parent = this.xx3Draw;
                    line.width = Utils_1.default.v2Distance(startPosXX3, endPosXX3);
                    line.position = startPosXX3;
                    line.angle = Utils_1.default.v2Degrees(startPosXX3, endPosXX3);
                    line.color = cc.Color.BLACK.fromHEX("#35e100");
                    line.zIndex = 0;
                    line = cc.instantiate(this.lineTemplate);
                    line.parent = this.xx123Draw;
                    line.width = Utils_1.default.v2Distance(startPosXX123, endPosXX123);
                    line.position = startPosXX123;
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
            var count = TaiXiuMD5_TaiXiuMiniController_1.default.instance.histories.length;
            var countTai = 0;
            var countXiu = 0;
            if (count > 1) {
                var dices = TaiXiuMD5_TaiXiuMiniController_1.default.instance.histories[0].dices;
                var score = dices[0] + dices[1] + dices[2];
                var isTai = score >= 11;
                var maxItem = 5;
                for (var i = 0; i < count; i++) {
                    dices = TaiXiuMD5_TaiXiuMiniController_1.default.instance.histories[i].dices;
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
            // console.log(data);
            this.lblTai1.string = "TÀI: " + countTai;
            this.lblXiu1.string = "XỈU: " + countXiu;
            for (var i_1 = 0; i_1 < data.length; i_1++) {
                for (var j = 0; j < data[i_1].length; j++) {
                    var score_1 = data[i_1][j];
                    var icon = cc.instantiate(this.iconNumberTemplate);
                    icon.parent = this.contentDraw;
                    icon.position = cc.v2(startPosX + spacingX * i_1, startPosY - spacingY * j);
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
            var data = TaiXiuMD5_TaiXiuMiniController_1.default.instance.histories.slice();
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
                iconXX123.position = cc.v2(startPosX + spacingX * column, startPosY - spacingY * row);
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
    taixiumini.PopupSoiCau = PopupSoiCau;
})(taixiumini || (taixiumini = {}));
exports.default = taixiumini.PopupSoiCau;

cc._RF.pop();