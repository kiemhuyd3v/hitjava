"use strict";
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