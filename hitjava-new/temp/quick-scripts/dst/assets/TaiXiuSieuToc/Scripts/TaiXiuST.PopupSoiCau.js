
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TaiXiuSieuToc/Scripts/TaiXiuST.PopupSoiCau.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1c719HC9iRIK7MShRm/IZah', 'TaiXiuST.PopupSoiCau');
// TaiXiuSieuToc/Scripts/TaiXiuST.PopupSoiCau.ts

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
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var Dialog_1 = require("../../Lobby/LobbyScript/Script/common/Dialog");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var TaiXiuSieuToc_Controller_1 = require("./TaiXiuSieuToc.Controller");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TaiXiuSieuToc;
(function (TaiXiuSieuToc) {
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
            _this.sprDot = [];
            _this.contentDraw = null;
            return _this;
        }
        PopupSoiCau.prototype.show = function () {
            _super.prototype.show.call(this);
            App_1.default.instance.showBgMiniGame("TaiXiuSieuToc");
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
            var data = TaiXiuSieuToc_Controller_1.default.instance.historySoiCau.slice();
            if (data.length > 21) {
                data = data.splice(0, 21);
            }
            var last = data[0];
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
            data = data.reverse();
            for (var i = data.length - 1; i >= 0; i--) {
                var dices = data[i].dices;
                var score = dices[0] + dices[1] + dices[2];
                var startPosXX1 = cc.v2(endPosX - _i * spacingX, startPosY + (dices[0] - 1) * spacingY);
                var startPosXX2 = cc.v2(endPosX - _i * spacingX, startPosY + (dices[1] - 1) * spacingY);
                var startPosXX3 = cc.v2(endPosX - _i * spacingX, startPosY + (dices[2] - 1) * spacingY);
                var startPosXX123 = cc.v2(endPosX - _i * spacingX, startPosY123 + (score - 3) * (spacingY / 3));
                var iconXX1 = cc.instantiate(this.iconXX1Template);
                iconXX1.parent = this.xx1Draw;
                iconXX1.zIndex = 5;
                iconXX1.setPosition(startPosXX1);
                var iconXX2 = cc.instantiate(this.iconXX2Template);
                iconXX2.parent = this.xx2Draw;
                iconXX2.zIndex = 5;
                iconXX2.setPosition(startPosXX2);
                var iconXX3 = cc.instantiate(this.iconXX3Template);
                iconXX3.parent = this.xx3Draw;
                iconXX3.zIndex = 5;
                iconXX3.setPosition(startPosXX3);
                var iconXX123 = cc.instantiate(score >= 11 ? this.iconTaiTemplate : this.iconXiuTemplate);
                var result = score >= 11 ? "tai" : "xiu";
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
            var startPosX = -295.979;
            var startPosY = 113.257;
            var spacingX = 32.5;
            var spacingY = 32;
            this.contentDraw.removeAllChildren();
            var data = [];
            var curData = [];
            var count = TaiXiuSieuToc_Controller_1.default.instance.historySoiCau.length;
            var countTai = 0;
            var countXiu = 0;
            if (count > 1) {
                var dices = TaiXiuSieuToc_Controller_1.default.instance.historySoiCau[0].dices;
                var score = dices[0] + dices[1] + dices[2];
                var isTai = score >= 11;
                var maxItem = 5;
                for (var i = 0; i < count; i++) {
                    dices = TaiXiuSieuToc_Controller_1.default.instance.historySoiCau[i].dices;
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
                data = data.splice(0, 20);
            }
            data = data.reverse();
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
            startPosX = -295.979;
            startPosY = -127.113;
            var column = 0;
            var row = 0;
            var countTai = 0;
            var countXiu = 0;
            var data = TaiXiuSieuToc_Controller_1.default.instance.historySoiCau.slice();
            if (data.length > 100) {
                data.splice(0, data.length - 100);
            }
            data = data.reverse();
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
            property([cc.SpriteFrame])
        ], PopupSoiCau.prototype, "sprDot", void 0);
        __decorate([
            property(cc.Node)
        ], PopupSoiCau.prototype, "contentDraw", void 0);
        PopupSoiCau = __decorate([
            ccclass
        ], PopupSoiCau);
        return PopupSoiCau;
    }(Dialog_1.default));
    TaiXiuSieuToc.PopupSoiCau = PopupSoiCau;
})(TaiXiuSieuToc || (TaiXiuSieuToc = {}));
exports.default = TaiXiuSieuToc.PopupSoiCau;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGFpWGl1U2lldVRvY1xcU2NyaXB0c1xcVGFpWGl1U1QuUG9wdXBTb2lDYXUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQTREO0FBQzVELHVFQUFrRTtBQUNsRSxxRUFBZ0U7QUFDaEUsdUVBQWlFO0FBRzNELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQVUsYUFBYSxDQTZTdEI7QUE3U0QsV0FBVSxhQUFhO0lBRW5CO1FBQWlDLCtCQUFNO1FBQXZDO1lBQUEscUVBMFNDO1lBeFNHLGtCQUFZLEdBQVksSUFBSSxDQUFDO1lBRzdCLHFCQUFlLEdBQVksSUFBSSxDQUFDO1lBRWhDLHFCQUFlLEdBQVksSUFBSSxDQUFDO1lBR2hDLHFCQUFlLEdBQVksSUFBSSxDQUFDO1lBRWhDLHFCQUFlLEdBQVksSUFBSSxDQUFDO1lBRWhDLHFCQUFlLEdBQVksSUFBSSxDQUFDO1lBR2hDLDJCQUFxQixHQUFZLElBQUksQ0FBQztZQUV0QywyQkFBcUIsR0FBWSxJQUFJLENBQUM7WUFHdEMsV0FBSyxHQUFZLElBQUksQ0FBQztZQUV0QixvQkFBYyxHQUFhLElBQUksQ0FBQztZQUVoQyxhQUFPLEdBQVksSUFBSSxDQUFDO1lBRXhCLGFBQU8sR0FBWSxJQUFJLENBQUM7WUFFeEIsYUFBTyxHQUFZLElBQUksQ0FBQztZQUV4QixlQUFTLEdBQVksSUFBSSxDQUFDO1lBRzFCLFdBQUssR0FBWSxJQUFJLENBQUM7WUFFdEIsYUFBTyxHQUFhLElBQUksQ0FBQztZQUV6QixhQUFPLEdBQWEsSUFBSSxDQUFDO1lBRXpCLGFBQU8sR0FBYSxJQUFJLENBQUM7WUFFekIsYUFBTyxHQUFhLElBQUksQ0FBQztZQUV6QixZQUFNLEdBQXFCLEVBQUUsQ0FBQztZQUU5QixpQkFBVyxHQUFZLElBQUksQ0FBQzs7UUEy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RSxDQUFDLElBQUksQ0FBQztrRUFDb0I7UUFHdEM7WUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDSTtRQUV0QjtZQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJEQUNhO1FBRWhDO1lBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ007UUFFeEI7WUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDTTtRQUV4QjtZQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNNO1FBRXhCO1lBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ1E7UUFHMUI7WUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDSTtRQUV0QjtZQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO29EQUNNO1FBRXpCO1lBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0RBQ007UUFFekI7WUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztvREFDTTtRQUV6QjtZQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO29EQUNNO1FBRXpCO1lBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO21EQUNHO1FBRTlCO1lBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ1U7UUEvQ25CLFdBQVc7WUFEdkIsT0FBTztXQUNLLFdBQVcsQ0EwU3ZCO1FBQUQsa0JBQUM7S0ExU0QsQUEwU0MsQ0ExU2dDLGdCQUFNLEdBMFN0QztJQTFTWSx5QkFBVyxjQTBTdkIsQ0FBQTtBQUNMLENBQUMsRUE3U1MsYUFBYSxLQUFiLGFBQWEsUUE2U3RCO0FBQ0Qsa0JBQWUsYUFBYSxDQUFDLFdBQVcsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0RpYWxvZ1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgVGFpWGl1U2lldVRvY0NvbnRyb2xsZXIgZnJvbSBcIi4vVGFpWGl1U2lldVRvYy5Db250cm9sbGVyXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxubmFtZXNwYWNlIFRhaVhpdVNpZXVUb2Mge1xuICAgIEBjY2NsYXNzXG4gICAgZXhwb3J0IGNsYXNzIFBvcHVwU29pQ2F1IGV4dGVuZHMgRGlhbG9nIHtcbiAgICAgICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgICAgIGxpbmVUZW1wbGF0ZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAgICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgICAgIGljb25UYWlUZW1wbGF0ZTogY2MuTm9kZSA9IG51bGw7XG4gICAgICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgICAgICBpY29uWGl1VGVtcGxhdGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgICAgICBpY29uWFgxVGVtcGxhdGU6IGNjLk5vZGUgPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAgICAgaWNvblhYMlRlbXBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgICAgIGljb25YWDNUZW1wbGF0ZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAgICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgICAgIGljb25OdW1iZXJUYWlUZW1wbGF0ZTogY2MuTm9kZSA9IG51bGw7XG4gICAgICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgICAgICBpY29uTnVtYmVyWGl1VGVtcGxhdGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgICAgICBwYWdlMTogY2MuTm9kZSA9IG51bGw7XG4gICAgICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICAgICAgbGJsTGFzdFNlc3Npb246IGNjLkxhYmVsID0gbnVsbDtcbiAgICAgICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgICAgIHh4MURyYXc6IGNjLk5vZGUgPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAgICAgeHgyRHJhdzogY2MuTm9kZSA9IG51bGw7XG4gICAgICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgICAgICB4eDNEcmF3OiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgICAgIHh4MTIzRHJhdzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAgICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgICAgIHBhZ2UyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgICAgICBsYmxUYWkxOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICAgICAgbGJsVGFpMjogY2MuTGFiZWwgPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgICAgIGxibFhpdTE6IGNjLkxhYmVsID0gbnVsbDtcbiAgICAgICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgICAgICBsYmxYaXUyOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxuICAgICAgICBzcHJEb3Q6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcbiAgICAgICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgICAgIGNvbnRlbnREcmF3OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgICAgICBzaG93KCkge1xuICAgICAgICAgICAgc3VwZXIuc2hvdygpO1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dCZ01pbmlHYW1lKFwiVGFpWGl1U2lldVRvY1wiKTtcbiAgICAgICAgICAgIHRoaXMucGFnZTEuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnBhZ2UyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5saW5lVGVtcGxhdGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGlzbWlzcygpIHtcbiAgICAgICAgICAgIHN1cGVyLmRpc21pc3MoKTtcbiAgICAgICAgICAgIHRoaXMucGFnZTEuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnBhZ2UyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgX29uU2hvd2VkKCkge1xuICAgICAgICAgICAgc3VwZXIuX29uU2hvd2VkKCk7XG5cbiAgICAgICAgICAgIHRoaXMuZHJhd1BhZ2UxKCk7XG4gICAgICAgICAgICB0aGlzLnBhZ2UxLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnBhZ2UyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9nZ2xlWFgxKHRhcmdldDogY2MuVG9nZ2xlKSB7XG4gICAgICAgICAgICB0aGlzLnh4MURyYXcuYWN0aXZlID0gdGFyZ2V0LmlzQ2hlY2tlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvZ2dsZVhYMih0YXJnZXQ6IGNjLlRvZ2dsZSkge1xuICAgICAgICAgICAgdGhpcy54eDJEcmF3LmFjdGl2ZSA9IHRhcmdldC5pc0NoZWNrZWQ7XG4gICAgICAgIH1cblxuICAgICAgICB0b2dnbGVYWDModGFyZ2V0OiBjYy5Ub2dnbGUpIHtcbiAgICAgICAgICAgIHRoaXMueHgzRHJhdy5hY3RpdmUgPSB0YXJnZXQuaXNDaGVja2VkO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9nZ2xlUGFnZSgpIHtcbiAgICAgICAgICAgIHRoaXMucGFnZTEuYWN0aXZlID0gIXRoaXMucGFnZTEuYWN0aXZlO1xuICAgICAgICAgICAgdGhpcy5wYWdlMi5hY3RpdmUgPSAhdGhpcy5wYWdlMS5hY3RpdmU7XG4gICAgICAgICAgICBpZiAodGhpcy5wYWdlMS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdQYWdlMSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdQYWdlMigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcHJpdmF0ZSBkcmF3UGFnZTEoKSB7XG5cbiAgICAgICAgICAgIHZhciBkYXRhID0gVGFpWGl1U2lldVRvY0NvbnRyb2xsZXIuaW5zdGFuY2UuaGlzdG9yeVNvaUNhdS5zbGljZSgpO1xuICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMjEpIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gZGF0YS5zcGxpY2UoMCwgMjEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbGFzdCA9IGRhdGFbMF07XG4gICAgICAgICAgICB2YXIgbGFzdERpY2VzID0gbGFzdC5kaWNlcztcbiAgICAgICAgICAgIHZhciBsYXN0U2NvcmUgPSBsYXN0RGljZXNbMF0gKyBsYXN0RGljZXNbMV0gKyBsYXN0RGljZXNbMl07XG4gICAgICAgICAgICB0aGlzLmxibExhc3RTZXNzaW9uLnN0cmluZyA9IFwiUGhpw6puIGfhuqduIG5o4bqldDogKCNcIiArIGxhc3Quc2Vzc2lvbiArIFwiKSAgXCIgKyAobGFzdFNjb3JlID49IDExID8gXCJUw4BJXCIgOiBcIljhu4hVXCIpICsgXCIgIFwiICsgbGFzdFNjb3JlICsgXCIoXCIgKyBsYXN0RGljZXNbMF0gKyBcIi1cIiArIGxhc3REaWNlc1sxXSArIFwiLVwiICsgbGFzdERpY2VzWzJdICsgXCIpXCI7XG5cbiAgICAgICAgICAgIGxldCBlbmRQb3NYID0gMzM3LjIxNTtcbiAgICAgICAgICAgIGxldCBzdGFydFBvc1kgPSAtMjc0LjEzNTtcbiAgICAgICAgICAgIGxldCBzdGFydFBvc1kxMjMgPSAtMTMuOTA3O1xuICAgICAgICAgICAgdGhpcy54eDFEcmF3LnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgICAgICB0aGlzLnh4MkRyYXcucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgIHRoaXMueHgzRHJhdy5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICAgICAgdGhpcy54eDEyM0RyYXcucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcblxuICAgICAgICAgICAgbGV0IF9pID0gMDtcbiAgICAgICAgICAgIHZhciBzcGFjaW5nWCA9IDMxLjgzO1xuICAgICAgICAgICAgdmFyIHNwYWNpbmdZID0gMzE7XG4gICAgICAgICAgICBkYXRhID0gZGF0YS5yZXZlcnNlKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gZGF0YS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIHZhciBkaWNlcyA9IGRhdGFbaV0uZGljZXM7XG4gICAgICAgICAgICAgICAgdmFyIHNjb3JlID0gZGljZXNbMF0gKyBkaWNlc1sxXSArIGRpY2VzWzJdO1xuXG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0UG9zWFgxID0gY2MudjIoZW5kUG9zWCAtIF9pICogc3BhY2luZ1gsIHN0YXJ0UG9zWSArIChkaWNlc1swXSAtIDEpICogc3BhY2luZ1kpO1xuICAgICAgICAgICAgICAgIGxldCBzdGFydFBvc1hYMiA9IGNjLnYyKGVuZFBvc1ggLSBfaSAqIHNwYWNpbmdYLCBzdGFydFBvc1kgKyAoZGljZXNbMV0gLSAxKSAqIHNwYWNpbmdZKTtcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnRQb3NYWDMgPSBjYy52MihlbmRQb3NYIC0gX2kgKiBzcGFjaW5nWCwgc3RhcnRQb3NZICsgKGRpY2VzWzJdIC0gMSkgKiBzcGFjaW5nWSk7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0UG9zWFgxMjMgPSBjYy52MihlbmRQb3NYIC0gX2kgKiBzcGFjaW5nWCwgc3RhcnRQb3NZMTIzICsgKHNjb3JlIC0gMykgKiAoc3BhY2luZ1kgLyAzKSk7XG5cbiAgICAgICAgICAgICAgICBsZXQgaWNvblhYMSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaWNvblhYMVRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICBpY29uWFgxLnBhcmVudCA9IHRoaXMueHgxRHJhdztcbiAgICAgICAgICAgICAgICBpY29uWFgxLnpJbmRleCA9IDU7XG4gICAgICAgICAgICAgICAgaWNvblhYMS5zZXRQb3NpdGlvbihzdGFydFBvc1hYMSk7XG5cbiAgICAgICAgICAgICAgICBsZXQgaWNvblhYMiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaWNvblhYMlRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICBpY29uWFgyLnBhcmVudCA9IHRoaXMueHgyRHJhdztcbiAgICAgICAgICAgICAgICBpY29uWFgyLnpJbmRleCA9IDU7XG4gICAgICAgICAgICAgICAgaWNvblhYMi5zZXRQb3NpdGlvbihzdGFydFBvc1hYMik7XG5cbiAgICAgICAgICAgICAgICBsZXQgaWNvblhYMyA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaWNvblhYM1RlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICBpY29uWFgzLnBhcmVudCA9IHRoaXMueHgzRHJhdztcbiAgICAgICAgICAgICAgICBpY29uWFgzLnpJbmRleCA9IDU7XG4gICAgICAgICAgICAgICAgaWNvblhYMy5zZXRQb3NpdGlvbihzdGFydFBvc1hYMyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgaWNvblhYMTIzID0gY2MuaW5zdGFudGlhdGUoc2NvcmUgPj0gMTEgPyB0aGlzLmljb25UYWlUZW1wbGF0ZSA6IHRoaXMuaWNvblhpdVRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gc2NvcmUgPj0gMTEgPyBcInRhaVwiIDogXCJ4aXVcIjtcbiAgICAgICAgICAgICAgICBpY29uWFgxMjMucGFyZW50ID0gdGhpcy54eDEyM0RyYXc7XG4gICAgICAgICAgICAgICAgaWNvblhYMTIzLnNldFBvc2l0aW9uKHN0YXJ0UG9zWFgxMjMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF9pID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBkaWNlcyA9IGRhdGFbaSArIDFdLmRpY2VzO1xuICAgICAgICAgICAgICAgICAgICBzY29yZSA9IGRpY2VzWzBdICsgZGljZXNbMV0gKyBkaWNlc1syXTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgZW5kUG9zWFgxID0gY2MudjIoZW5kUG9zWCAtIChfaSAtIDEpICogc3BhY2luZ1gsIHN0YXJ0UG9zWSArIChkaWNlc1swXSAtIDEpICogc3BhY2luZ1kpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZW5kUG9zWFgyID0gY2MudjIoZW5kUG9zWCAtIChfaSAtIDEpICogc3BhY2luZ1gsIHN0YXJ0UG9zWSArIChkaWNlc1sxXSAtIDEpICogc3BhY2luZ1kpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZW5kUG9zWFgzID0gY2MudjIoZW5kUG9zWCAtIChfaSAtIDEpICogc3BhY2luZ1gsIHN0YXJ0UG9zWSArIChkaWNlc1syXSAtIDEpICogc3BhY2luZ1kpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZW5kUG9zWFgxMjMgPSBjYy52MihlbmRQb3NYIC0gKF9pIC0gMSkgKiBzcGFjaW5nWCwgc3RhcnRQb3NZMTIzICsgKHNjb3JlIC0gMykgKiAoc3BhY2luZ1kgLyAzKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGxpbmUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpbmVUZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUucGFyZW50ID0gdGhpcy54eDFEcmF3O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLndpZHRoID0gVXRpbHMudjJEaXN0YW5jZShzdGFydFBvc1hYMSwgZW5kUG9zWFgxKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS5zZXRQb3NpdGlvbihzdGFydFBvc1hYMSk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUuYW5nbGUgPSBVdGlscy52MkRlZ3JlZXMoc3RhcnRQb3NYWDEsIGVuZFBvc1hYMSk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUuY29sb3IgPSBjYy5Db2xvci5CTEFDSy5mcm9tSEVYKFwiI2M3NDUyYlwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS56SW5kZXggPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGxpbmUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpbmVUZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUucGFyZW50ID0gdGhpcy54eDJEcmF3O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLndpZHRoID0gVXRpbHMudjJEaXN0YW5jZShzdGFydFBvc1hYMiwgZW5kUG9zWFgyKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS5zZXRQb3NpdGlvbihzdGFydFBvc1hYMik7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUuYW5nbGUgPSBVdGlscy52MkRlZ3JlZXMoc3RhcnRQb3NYWDIsIGVuZFBvc1hYMik7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUuY29sb3IgPSBjYy5Db2xvci5CTEFDSy5mcm9tSEVYKFwiIzlmZDEwMFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS56SW5kZXggPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGxpbmUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpbmVUZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUucGFyZW50ID0gdGhpcy54eDNEcmF3O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLndpZHRoID0gVXRpbHMudjJEaXN0YW5jZShzdGFydFBvc1hYMywgZW5kUG9zWFgzKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS5zZXRQb3NpdGlvbihzdGFydFBvc1hYMyk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUuYW5nbGUgPSBVdGlscy52MkRlZ3JlZXMoc3RhcnRQb3NYWDMsIGVuZFBvc1hYMyk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUuY29sb3IgPSBjYy5Db2xvci5CTEFDSy5mcm9tSEVYKFwiIzM5ODBkOFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS56SW5kZXggPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGxpbmUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpbmVUZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUucGFyZW50ID0gdGhpcy54eDEyM0RyYXc7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUud2lkdGggPSBVdGlscy52MkRpc3RhbmNlKHN0YXJ0UG9zWFgxMjMsIGVuZFBvc1hYMTIzKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS5zZXRQb3NpdGlvbihzdGFydFBvc1hYMTIzKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS5hbmdsZSA9IFV0aWxzLnYyRGVncmVlcyhzdGFydFBvc1hYMTIzLCBlbmRQb3NYWDEyMyk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUuY29sb3IgPSBjYy5Db2xvci5CTEFDSy5mcm9tSEVYKFwiI2ZkZmRmYlwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS56SW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcHJpdmF0ZSBkcmF3UGFnZTIoKSB7XG4gICAgICAgICAgICB2YXIgc3RhcnRQb3NYID0gLTI5NS45Nzk7XG4gICAgICAgICAgICB2YXIgc3RhcnRQb3NZID0gMTEzLjI1NztcbiAgICAgICAgICAgIHZhciBzcGFjaW5nWCA9IDMyLjU7XG4gICAgICAgICAgICB2YXIgc3BhY2luZ1kgPSAzMjtcblxuICAgICAgICAgICAgdGhpcy5jb250ZW50RHJhdy5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBbXTtcbiAgICAgICAgICAgIHZhciBjdXJEYXRhID0gW107XG4gICAgICAgICAgICB2YXIgY291bnQgPSBUYWlYaXVTaWV1VG9jQ29udHJvbGxlci5pbnN0YW5jZS5oaXN0b3J5U29pQ2F1Lmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBjb3VudFRhaSA9IDA7XG4gICAgICAgICAgICB2YXIgY291bnRYaXUgPSAwO1xuICAgICAgICAgICAgaWYgKGNvdW50ID4gMSkge1xuICAgICAgICAgICAgICAgIHZhciBkaWNlcyA9IFRhaVhpdVNpZXVUb2NDb250cm9sbGVyLmluc3RhbmNlLmhpc3RvcnlTb2lDYXVbMF0uZGljZXM7XG4gICAgICAgICAgICAgICAgdmFyIHNjb3JlID0gZGljZXNbMF0gKyBkaWNlc1sxXSArIGRpY2VzWzJdO1xuICAgICAgICAgICAgICAgIHZhciBpc1RhaSA9IHNjb3JlID49IDExO1xuICAgICAgICAgICAgICAgIHZhciBtYXhJdGVtID0gNTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZGljZXMgPSBUYWlYaXVTaWV1VG9jQ29udHJvbGxlci5pbnN0YW5jZS5oaXN0b3J5U29pQ2F1W2ldLmRpY2VzO1xuICAgICAgICAgICAgICAgICAgICBzY29yZSA9IGRpY2VzWzBdICsgZGljZXNbMV0gKyBkaWNlc1syXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9pc1RhaSA9IHNjb3JlID49IDExO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2lzVGFpICE9PSBpc1RhaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckRhdGEubGVuZ3RoID4gbWF4SXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1ckRhdGEuc3BsaWNlKDAsIGN1ckRhdGEubGVuZ3RoIC0gbWF4SXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2goY3VyRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNUYWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudFRhaSArPSBjdXJEYXRhLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRYaXUgKz0gY3VyRGF0YS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVGFpID0gX2lzVGFpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyRGF0YSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyRGF0YS5wdXNoKHNjb3JlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ckRhdGEucHVzaChzY29yZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IGNvdW50IC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckRhdGEubGVuZ3RoID4gbWF4SXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1ckRhdGEuc3BsaWNlKDAsIGN1ckRhdGEubGVuZ3RoIC0gbWF4SXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2goY3VyRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNUYWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudFRhaSArPSBjdXJEYXRhLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRYaXUgKz0gY3VyRGF0YS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDIwKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IGRhdGEuc3BsaWNlKDAsIDIwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGE9ZGF0YS5yZXZlcnNlKCk7XG4gICAgICAgICAgICB0aGlzLmxibFRhaTEuc3RyaW5nID0gY291bnRUYWkgKyBcIlwiO1xuICAgICAgICAgICAgdGhpcy5sYmxYaXUxLnN0cmluZyA9IGNvdW50WGl1ICsgXCJcIjtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGF0YVtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2NvcmUgPSBkYXRhW2ldW2pdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaWNvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzY29yZSA+PSAxMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaWNvbk51bWJlclRhaVRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmljb25OdW1iZXJYaXVUZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWNvbi5wYXJlbnQgPSB0aGlzLmNvbnRlbnREcmF3O1xuICAgICAgICAgICAgICAgICAgICBpY29uLnNldFBvc2l0aW9uKGNjLnYyKHN0YXJ0UG9zWCArIHNwYWNpbmdYICogaSwgc3RhcnRQb3NZIC0gc3BhY2luZ1kgKiBqKSk7XG4gICAgICAgICAgICAgICAgICAgIGljb24uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiICsgc2NvcmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdGFydFBvc1ggPSAtMjk1Ljk3OTtcbiAgICAgICAgICAgIHN0YXJ0UG9zWSA9IC0xMjcuMTEzO1xuICAgICAgICAgICAgdmFyIGNvbHVtbiA9IDA7XG4gICAgICAgICAgICB2YXIgcm93ID0gMDtcbiAgICAgICAgICAgIHZhciBjb3VudFRhaSA9IDA7XG4gICAgICAgICAgICB2YXIgY291bnRYaXUgPSAwO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBUYWlYaXVTaWV1VG9jQ29udHJvbGxlci5pbnN0YW5jZS5oaXN0b3J5U29pQ2F1LnNsaWNlKCk7XG4gICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAxMDApIHtcbiAgICAgICAgICAgICAgICBkYXRhLnNwbGljZSgwLCBkYXRhLmxlbmd0aCAtIDEwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhPWRhdGEucmV2ZXJzZSgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNjb3JlID0gZGF0YVtpXS5kaWNlc1swXSArIGRhdGFbaV0uZGljZXNbMV0gKyBkYXRhW2ldLmRpY2VzWzJdO1xuICAgICAgICAgICAgICAgIGlmIChzY29yZSA+PSAxMSkge1xuICAgICAgICAgICAgICAgICAgICBjb3VudFRhaSsrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50WGl1Kys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGljb25YWDEyMyA9IGNjLmluc3RhbnRpYXRlKHNjb3JlID49IDExID8gdGhpcy5pY29uVGFpVGVtcGxhdGUgOiB0aGlzLmljb25YaXVUZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgaWNvblhYMTIzLnBhcmVudCA9IHRoaXMuY29udGVudERyYXc7XG4gICAgICAgICAgICAgICAgaWNvblhYMTIzLnNldFBvc2l0aW9uKHN0YXJ0UG9zWCArIHNwYWNpbmdYICogY29sdW1uLCBzdGFydFBvc1kgLSBzcGFjaW5nWSAqIHJvdyAtIDIpO1xuXG4gICAgICAgICAgICAgICAgcm93Kys7XG4gICAgICAgICAgICAgICAgaWYgKHJvdyA+PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbisrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGJsVGFpMi5zdHJpbmcgPSBjb3VudFRhaSArIFwiXCI7XG4gICAgICAgICAgICB0aGlzLmxibFhpdTIuc3RyaW5nID0gY291bnRYaXUgKyBcIlwiO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVGFpWGl1U2lldVRvYy5Qb3B1cFNvaUNhdTsiXX0=