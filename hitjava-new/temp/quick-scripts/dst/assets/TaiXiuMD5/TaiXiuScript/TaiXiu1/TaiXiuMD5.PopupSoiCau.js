
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TaiXiuMD5/TaiXiuScript/TaiXiu1/TaiXiuMD5.PopupSoiCau.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGFpWGl1TUQ1XFxUYWlYaXVTY3JpcHRcXFRhaVhpdTFcXFRhaVhpdU1ENS5Qb3B1cFNvaUNhdS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwwRUFBcUU7QUFDckUsd0VBQW1FO0FBQ25FLG1GQUFvRTtBQUU5RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFVLFVBQVUsQ0EyUm5CO0FBM1JELFdBQVUsVUFBVTtJQUVoQjtRQUFpQywrQkFBTTtRQUF2QztZQUFBLHFFQXdSQztZQXRSRyxrQkFBWSxHQUFZLElBQUksQ0FBQztZQUc3QixxQkFBZSxHQUFZLElBQUksQ0FBQztZQUVoQyxxQkFBZSxHQUFZLElBQUksQ0FBQztZQUdoQyxxQkFBZSxHQUFZLElBQUksQ0FBQztZQUVoQyxxQkFBZSxHQUFZLElBQUksQ0FBQztZQUVoQyxxQkFBZSxHQUFZLElBQUksQ0FBQztZQUdoQyx3QkFBa0IsR0FBWSxJQUFJLENBQUM7WUFHbkMsV0FBSyxHQUFZLElBQUksQ0FBQztZQUV0QixvQkFBYyxHQUFhLElBQUksQ0FBQztZQUVoQyxhQUFPLEdBQVksSUFBSSxDQUFDO1lBRXhCLGFBQU8sR0FBWSxJQUFJLENBQUM7WUFFeEIsYUFBTyxHQUFZLElBQUksQ0FBQztZQUV4QixlQUFTLEdBQVksSUFBSSxDQUFDO1lBRzFCLFdBQUssR0FBWSxJQUFJLENBQUM7WUFFdEIsYUFBTyxHQUFhLElBQUksQ0FBQztZQUV6QixhQUFPLEdBQWEsSUFBSSxDQUFDO1lBRXpCLGFBQU8sR0FBYSxJQUFJLENBQUM7WUFFekIsYUFBTyxHQUFhLElBQUksQ0FBQztZQUV6QixpQkFBVyxHQUFZLElBQUksQ0FBQzs7UUE2T2hDLENBQUM7UUEzT0csMEJBQUksR0FBSjtZQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxD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QUMsUUFBUSxHQUFHLGFBQWEsQ0FBQztnQkFFbkMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFO29CQUNSLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDMUIsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUV2QyxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsU0FBUyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO29CQUM1RixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsU0FBUyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO29CQUM1RixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsU0FBUyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO29CQUM1RixJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsWUFBWSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRXBHLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENB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O1FBRXpCO1lBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0RBQ007UUFFekI7WUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztvREFDTTtRQUV6QjtZQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNVO1FBM0NuQixXQUFXO1lBRHZCLE9BQU87V0FDSyxXQUFXLENBd1J2QjtRQUFELGtCQUFDO0tBeFJELEFBd1JDLENBeFJnQyxnQkFBTSxHQXdSdEM7SUF4Ulksc0JBQVcsY0F3UnZCLENBQUE7QUFDTCxDQUFDLEVBM1JTLFVBQVUsS0FBVixVQUFVLFFBMlJuQjtBQUNELGtCQUFlLFVBQVUsQ0FBQyxXQUFXLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gXCIuLi8uLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi4vLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9EaWFsb2dcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuaW1wb3J0IFRhaVhpdU1pbmlDb250cm9sbGVyIGZyb20gXCIuL1RhaVhpdU1ENS5UYWlYaXVNaW5pQ29udHJvbGxlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5uYW1lc3BhY2UgdGFpeGl1bWluaSB7XG4gICAgQGNjY2xhc3NcbiAgICBleHBvcnQgY2xhc3MgUG9wdXBTb2lDYXUgZXh0ZW5kcyBEaWFsb2cge1xuICAgICAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAgICAgbGluZVRlbXBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgICAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAgICAgaWNvblRhaVRlbXBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgICAgIGljb25YaXVUZW1wbGF0ZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAgICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgICAgIGljb25YWDFUZW1wbGF0ZTogY2MuTm9kZSA9IG51bGw7XG4gICAgICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgICAgICBpY29uWFgyVGVtcGxhdGU6IGNjLk5vZGUgPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAgICAgaWNvblhYM1RlbXBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgICAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAgICAgaWNvbk51bWJlclRlbXBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgICAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAgICAgcGFnZTE6IGNjLk5vZGUgPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgICAgIGxibExhc3RTZXNzaW9uOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgICAgICB4eDFEcmF3OiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgICAgIHh4MkRyYXc6IGNjLk5vZGUgPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAgICAgeHgzRHJhdzogY2MuTm9kZSA9IG51bGw7XG4gICAgICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgICAgICB4eDEyM0RyYXc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgICAgICBwYWdlMjogY2MuTm9kZSA9IG51bGw7XG4gICAgICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICAgICAgbGJsVGFpMTogY2MuTGFiZWwgPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgICAgIGxibFRhaTI6IGNjLkxhYmVsID0gbnVsbDtcbiAgICAgICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgICAgICBsYmxYaXUxOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICAgICAgbGJsWGl1MjogY2MuTGFiZWwgPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAgICAgY29udGVudERyYXc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgICAgIHNob3coKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNob3cgc29pIGNhdVwiKTtcbiAgICAgICAgICAgIHN1cGVyLnNob3coKTtcbiAgICAgICAgICAgIHRoaXMucGFnZTEuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnBhZ2UyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5saW5lVGVtcGxhdGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGlzbWlzcygpe1xuICAgICAgICAgICAgc3VwZXIuZGlzbWlzcygpO1xuICAgICAgICAgICAgdGhpcy5wYWdlMS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucGFnZTIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfb25TaG93ZWQoKXtcbiAgICAgICAgICAgIHN1cGVyLl9vblNob3dlZCgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmRyYXdQYWdlMSgpO1xuICAgICAgICAgICAgdGhpcy5wYWdlMS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wYWdlMi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvZ2dsZVhYMSh0YXJnZXQ6IGNjLlRvZ2dsZSkge1xuICAgICAgICAgICAgdGhpcy54eDFEcmF3LmFjdGl2ZSA9IHRhcmdldC5pc0NoZWNrZWQ7XG4gICAgICAgIH1cblxuICAgICAgICB0b2dnbGVYWDIodGFyZ2V0OiBjYy5Ub2dnbGUpIHtcbiAgICAgICAgICAgIHRoaXMueHgyRHJhdy5hY3RpdmUgPSB0YXJnZXQuaXNDaGVja2VkO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9nZ2xlWFgzKHRhcmdldDogY2MuVG9nZ2xlKSB7XG4gICAgICAgICAgICB0aGlzLnh4M0RyYXcuYWN0aXZlID0gdGFyZ2V0LmlzQ2hlY2tlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvZ2dsZVBhZ2UoKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2UxLmFjdGl2ZSA9ICF0aGlzLnBhZ2UxLmFjdGl2ZTtcbiAgICAgICAgICAgIHRoaXMucGFnZTIuYWN0aXZlID0gIXRoaXMucGFnZTEuYWN0aXZlO1xuICAgICAgICAgICAgaWYgKHRoaXMucGFnZTEuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3UGFnZTEoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3UGFnZTIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHByaXZhdGUgZHJhd1BhZ2UxKCkge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBUYWlYaXVNaW5pQ29udHJvbGxlci5pbnN0YW5jZS5oaXN0b3JpZXMuc2xpY2UoKTtcbiAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDIyKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5zcGxpY2UoMCwgZGF0YS5sZW5ndGggLSAyMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbGFzdCA9IGRhdGFbZGF0YS5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIHZhciBsYXN0RGljZXMgPSBsYXN0LmRpY2VzO1xuICAgICAgICAgICAgdmFyIGxhc3RTY29yZSA9IGxhc3REaWNlc1swXSArIGxhc3REaWNlc1sxXSArIGxhc3REaWNlc1syXTtcbiAgICAgICAgICAgIHRoaXMubGJsTGFzdFNlc3Npb24uc3RyaW5nID0gXCJQaGnDqm4gZ+G6p24gbmjhuqV0OiAoI1wiICsgbGFzdC5zZXNzaW9uICsgXCIpICBcIiArIChsYXN0U2NvcmUgPj0gMTEgPyBcIlTDgElcIiA6IFwiWOG7iFVcIikgKyBcIiAgXCIgKyBsYXN0U2NvcmUgKyBcIihcIiArIGxhc3REaWNlc1swXSArIFwiLVwiICsgbGFzdERpY2VzWzFdICsgXCItXCIgKyBsYXN0RGljZXNbMl0gKyBcIilcIjtcblxuICAgICAgICAgICAgbGV0IGVuZFBvc1ggPSAzMTE7XG4gICAgICAgICAgICBsZXQgc3RhcnRQb3NZID0gLTE5NS44MjI7XG4gICAgICAgICAgICBsZXQgc3RhcnRQb3NZMTIzID0gLTQuMjM0O1xuICAgICAgICAgICAgdGhpcy54eDFEcmF3LnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgICAgICB0aGlzLnh4MkRyYXcucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgIHRoaXMueHgzRHJhdy5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICAgICAgdGhpcy54eDEyM0RyYXcucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcblxuICAgICAgICAgICAgbGV0IF9pID0gMDtcbiAgICAgICAgICAgIHZhciBzcGFjaW5nWCA9IDI4LjM7XG4gICAgICAgICAgICB2YXIgc3BhY2luZ1kgPSAzMC4yO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGRhdGEubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICB2YXIgZGljZXMgPSBkYXRhW2ldLmRpY2VzO1xuICAgICAgICAgICAgICAgIHZhciBzY29yZSA9IGRpY2VzWzBdICsgZGljZXNbMV0gKyBkaWNlc1syXTtcblxuICAgICAgICAgICAgICAgIGxldCBzdGFydFBvc1hYMSA9IGNjLnYyKGVuZFBvc1ggLSBfaSAqIHNwYWNpbmdYLCBzdGFydFBvc1kgKyAoZGljZXNbMF0gLSAxKSAqIHNwYWNpbmdZKTtcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnRQb3NYWDIgPSBjYy52MihlbmRQb3NYIC0gX2kgKiBzcGFjaW5nWCwgc3RhcnRQb3NZICsgKGRpY2VzWzFdIC0gMSkgKiBzcGFjaW5nWSk7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0UG9zWFgzID0gY2MudjIoZW5kUG9zWCAtIF9pICogc3BhY2luZ1gsIHN0YXJ0UG9zWSArIChkaWNlc1syXSAtIDEpICogc3BhY2luZ1kpO1xuICAgICAgICAgICAgICAgIGxldCBzdGFydFBvc1hYMTIzID0gY2MudjIoZW5kUG9zWCAtIF9pICogc3BhY2luZ1gsIHN0YXJ0UG9zWTEyMyArIChzY29yZSAtIDMpICogKHNwYWNpbmdZIC8gMykpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGljb25YWDEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmljb25YWDFUZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgaWNvblhYMS5wYXJlbnQgPSB0aGlzLnh4MURyYXc7XG4gICAgICAgICAgICAgICAgaWNvblhYMS5wb3NpdGlvbiA9IHN0YXJ0UG9zWFgxO1xuXG4gICAgICAgICAgICAgICAgbGV0IGljb25YWDIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmljb25YWDJUZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgaWNvblhYMi5wYXJlbnQgPSB0aGlzLnh4MkRyYXc7XG4gICAgICAgICAgICAgICAgaWNvblhYMi5wb3NpdGlvbiA9IHN0YXJ0UG9zWFgyO1xuXG4gICAgICAgICAgICAgICAgbGV0IGljb25YWDMgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmljb25YWDNUZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgaWNvblhYMy5wYXJlbnQgPSB0aGlzLnh4M0RyYXc7XG4gICAgICAgICAgICAgICAgaWNvblhYMy5wb3NpdGlvbiA9IHN0YXJ0UG9zWFgzO1xuXG4gICAgICAgICAgICAgICAgbGV0IGljb25YWDEyMyA9IGNjLmluc3RhbnRpYXRlKHNjb3JlID49IDExID8gdGhpcy5pY29uVGFpVGVtcGxhdGUgOiB0aGlzLmljb25YaXVUZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgaWNvblhYMTIzLnBhcmVudCA9IHRoaXMueHgxMjNEcmF3O1xuICAgICAgICAgICAgICAgIGljb25YWDEyMy5wb3NpdGlvbiA9IHN0YXJ0UG9zWFgxMjM7XG5cbiAgICAgICAgICAgICAgICBpZiAoX2kgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpY2VzID0gZGF0YVtpICsgMV0uZGljZXM7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlID0gZGljZXNbMF0gKyBkaWNlc1sxXSArIGRpY2VzWzJdO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmRQb3NYWDEgPSBjYy52MihlbmRQb3NYIC0gKF9pIC0gMSkgKiBzcGFjaW5nWCwgc3RhcnRQb3NZICsgKGRpY2VzWzBdIC0gMSkgKiBzcGFjaW5nWSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmRQb3NYWDIgPSBjYy52MihlbmRQb3NYIC0gKF9pIC0gMSkgKiBzcGFjaW5nWCwgc3RhcnRQb3NZICsgKGRpY2VzWzFdIC0gMSkgKiBzcGFjaW5nWSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmRQb3NYWDMgPSBjYy52MihlbmRQb3NYIC0gKF9pIC0gMSkgKiBzcGFjaW5nWCwgc3RhcnRQb3NZICsgKGRpY2VzWzJdIC0gMSkgKiBzcGFjaW5nWSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmRQb3NYWDEyMyA9IGNjLnYyKGVuZFBvc1ggLSAoX2kgLSAxKSAqIHNwYWNpbmdYLCBzdGFydFBvc1kxMjMgKyAoc2NvcmUgLSAzKSAqIChzcGFjaW5nWSAvIDMpKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbGluZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGluZVRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS5wYXJlbnQgPSB0aGlzLnh4MURyYXc7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUud2lkdGggPSBVdGlscy52MkRpc3RhbmNlKHN0YXJ0UG9zWFgxLCBlbmRQb3NYWDEpO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLnBvc2l0aW9uID0gc3RhcnRQb3NYWDE7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUuYW5nbGUgPSBVdGlscy52MkRlZ3JlZXMoc3RhcnRQb3NYWDEsIGVuZFBvc1hYMSk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUuY29sb3IgPSBjYy5Db2xvci5CTEFDSy5mcm9tSEVYKFwiI2ZmMTgwMFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS56SW5kZXggPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGxpbmUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpbmVUZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUucGFyZW50ID0gdGhpcy54eDJEcmF3O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLndpZHRoID0gVXRpbHMudjJEaXN0YW5jZShzdGFydFBvc1hYMiwgZW5kUG9zWFgyKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS5wb3NpdGlvbiA9IHN0YXJ0UG9zWFgyO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLmFuZ2xlID0gVXRpbHMudjJEZWdyZWVzKHN0YXJ0UG9zWFgyLCBlbmRQb3NYWDIpO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLmNvbG9yID0gY2MuQ29sb3IuQkxBQ0suZnJvbUhFWChcIiNmZmVhMDBcIik7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUuekluZGV4ID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBsaW5lID0gY2MuaW5zdGFudGlhdGUodGhpcy5saW5lVGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLnBhcmVudCA9IHRoaXMueHgzRHJhdztcbiAgICAgICAgICAgICAgICAgICAgbGluZS53aWR0aCA9IFV0aWxzLnYyRGlzdGFuY2Uoc3RhcnRQb3NYWDMsIGVuZFBvc1hYMyk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUucG9zaXRpb24gPSBzdGFydFBvc1hYMztcbiAgICAgICAgICAgICAgICAgICAgbGluZS5hbmdsZSA9IFV0aWxzLnYyRGVncmVlcyhzdGFydFBvc1hYMywgZW5kUG9zWFgzKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS5jb2xvciA9IGNjLkNvbG9yLkJMQUNLLmZyb21IRVgoXCIjMzVlMTAwXCIpO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLnpJbmRleCA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgbGluZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGluZVRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS5wYXJlbnQgPSB0aGlzLnh4MTIzRHJhdztcbiAgICAgICAgICAgICAgICAgICAgbGluZS53aWR0aCA9IFV0aWxzLnYyRGlzdGFuY2Uoc3RhcnRQb3NYWDEyMywgZW5kUG9zWFgxMjMpO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLnBvc2l0aW9uID0gc3RhcnRQb3NYWDEyMztcbiAgICAgICAgICAgICAgICAgICAgbGluZS5hbmdsZSA9IFV0aWxzLnYyRGVncmVlcyhzdGFydFBvc1hYMTIzLCBlbmRQb3NYWDEyMyk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUuY29sb3IgPSBjYy5Db2xvci5CTEFDSy5mcm9tSEVYKFwiI2ZmZWEwMFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS56SW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcHJpdmF0ZSBkcmF3UGFnZTIoKSB7XG4gICAgICAgICAgICB2YXIgc3RhcnRQb3NYID0gLTI4My43NzM7XG4gICAgICAgICAgICB2YXIgc3RhcnRQb3NZID0gMTMyLjkzO1xuICAgICAgICAgICAgdmFyIHNwYWNpbmdYID0gMjguMztcbiAgICAgICAgICAgIHZhciBzcGFjaW5nWSA9IDMwLjI7XG5cbiAgICAgICAgICAgIHRoaXMuY29udGVudERyYXcucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgIHZhciBkYXRhID0gW107XG4gICAgICAgICAgICB2YXIgY3VyRGF0YSA9IFtdO1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gVGFpWGl1TWluaUNvbnRyb2xsZXIuaW5zdGFuY2UuaGlzdG9yaWVzLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBjb3VudFRhaSA9IDA7XG4gICAgICAgICAgICB2YXIgY291bnRYaXUgPSAwO1xuICAgICAgICAgICAgaWYgKGNvdW50ID4gMSkge1xuICAgICAgICAgICAgICAgIHZhciBkaWNlcyA9IFRhaVhpdU1pbmlDb250cm9sbGVyLmluc3RhbmNlLmhpc3Rvcmllc1swXS5kaWNlcztcbiAgICAgICAgICAgICAgICB2YXIgc2NvcmUgPSBkaWNlc1swXSArIGRpY2VzWzFdICsgZGljZXNbMl07XG4gICAgICAgICAgICAgICAgdmFyIGlzVGFpID0gc2NvcmUgPj0gMTE7XG4gICAgICAgICAgICAgICAgdmFyIG1heEl0ZW0gPSA1O1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBkaWNlcyA9IFRhaVhpdU1pbmlDb250cm9sbGVyLmluc3RhbmNlLmhpc3Rvcmllc1tpXS5kaWNlcztcbiAgICAgICAgICAgICAgICAgICAgc2NvcmUgPSBkaWNlc1swXSArIGRpY2VzWzFdICsgZGljZXNbMl07XG4gICAgICAgICAgICAgICAgICAgIHZhciBfaXNUYWkgPSBzY29yZSA+PSAxMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9pc1RhaSAhPT0gaXNUYWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJEYXRhLmxlbmd0aCA+IG1heEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJEYXRhLnNwbGljZSgwLCBjdXJEYXRhLmxlbmd0aCAtIG1heEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKGN1ckRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVGFpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRUYWkgKz0gY3VyRGF0YS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50WGl1ICs9IGN1ckRhdGEubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1RhaSA9IF9pc1RhaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ckRhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ckRhdGEucHVzaChzY29yZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJEYXRhLnB1c2goc2NvcmUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSBjb3VudCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJEYXRhLmxlbmd0aCA+IG1heEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJEYXRhLnNwbGljZSgwLCBjdXJEYXRhLmxlbmd0aCAtIG1heEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKGN1ckRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVGFpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRUYWkgKz0gY3VyRGF0YS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50WGl1ICs9IGN1ckRhdGEubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMjEpIHtcbiAgICAgICAgICAgICAgICBkYXRhLnNwbGljZSgwLCBkYXRhLmxlbmd0aCAtIDIxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5sYmxUYWkxLnN0cmluZyA9IFwiVMOASTogXCIgKyBjb3VudFRhaTtcbiAgICAgICAgICAgIHRoaXMubGJsWGl1MS5zdHJpbmcgPSBcIljhu4hVOiBcIiArIGNvdW50WGl1O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkYXRhW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY29yZSA9IGRhdGFbaV1bal07XG4gICAgICAgICAgICAgICAgICAgIGxldCBpY29uID0gY2MuaW5zdGFudGlhdGUodGhpcy5pY29uTnVtYmVyVGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgICAgICBpY29uLnBhcmVudCA9IHRoaXMuY29udGVudERyYXc7XG4gICAgICAgICAgICAgICAgICAgIGljb24ucG9zaXRpb24gPSBjYy52MihzdGFydFBvc1ggKyBzcGFjaW5nWCAqIGksIHN0YXJ0UG9zWSAtIHNwYWNpbmdZICogaik7XG4gICAgICAgICAgICAgICAgICAgIGljb24uY29sb3IgPSBjYy5Db2xvci5CTEFDSy5mcm9tSEVYKHNjb3JlID49IDExID8gXCIjNDE5MmZmXCIgOiBcIiNGRkZGRkZcIik7XG4gICAgICAgICAgICAgICAgICAgIGljb24uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiICsgc2NvcmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdGFydFBvc1ggPSAtMjgxLjc5MztcbiAgICAgICAgICAgIHN0YXJ0UG9zWSA9IC01OC40NDc7XG4gICAgICAgICAgICB2YXIgY29sdW1uID0gMDtcbiAgICAgICAgICAgIHZhciByb3cgPSAwO1xuICAgICAgICAgICAgdmFyIGNvdW50VGFpID0gMDtcbiAgICAgICAgICAgIHZhciBjb3VudFhpdSA9IDA7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IFRhaVhpdU1pbmlDb250cm9sbGVyLmluc3RhbmNlLmhpc3Rvcmllcy5zbGljZSgpO1xuICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMTA1KSB7XG4gICAgICAgICAgICAgICAgZGF0YS5zcGxpY2UoMCwgZGF0YS5sZW5ndGggLSAxMDUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNjb3JlID0gZGF0YVtpXS5kaWNlc1swXSArIGRhdGFbaV0uZGljZXNbMV0gKyBkYXRhW2ldLmRpY2VzWzJdO1xuICAgICAgICAgICAgICAgIGlmIChzY29yZSA+PSAxMSkge1xuICAgICAgICAgICAgICAgICAgICBjb3VudFRhaSsrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50WGl1Kys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGljb25YWDEyMyA9IGNjLmluc3RhbnRpYXRlKHNjb3JlID49IDExID8gdGhpcy5pY29uVGFpVGVtcGxhdGUgOiB0aGlzLmljb25YaXVUZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgaWNvblhYMTIzLnBhcmVudCA9IHRoaXMuY29udGVudERyYXc7XG4gICAgICAgICAgICAgICAgaWNvblhYMTIzLnBvc2l0aW9uID0gY2MudjIoc3RhcnRQb3NYICsgc3BhY2luZ1ggKiBjb2x1bW4sIHN0YXJ0UG9zWSAtIHNwYWNpbmdZICogcm93KTtcblxuICAgICAgICAgICAgICAgIHJvdysrO1xuICAgICAgICAgICAgICAgIGlmIChyb3cgPj0gNSkge1xuICAgICAgICAgICAgICAgICAgICByb3cgPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW4rKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxibFRhaTIuc3RyaW5nID0gXCJUw4BJOiBcIiArIGNvdW50VGFpO1xuICAgICAgICAgICAgdGhpcy5sYmxYaXUyLnN0cmluZyA9IFwiWOG7iFU6IFwiICsgY291bnRYaXU7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCB0YWl4aXVtaW5pLlBvcHVwU29pQ2F1OyJdfQ==