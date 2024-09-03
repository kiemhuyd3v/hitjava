
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Loto/Loto_Script/Loto.ItemHistory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a8e98d9AThE4azoMBB563ic', 'Loto.ItemHistory');
// Loto/Loto_Script/Loto.ItemHistory.ts

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
var Loto_Cmd_1 = require("./Loto.Cmd");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.labelTime = null;
        _this.labelMode = null;
        _this.labelNums = null;
        _this.labelBet = null;
        _this.labelWin = null;
        _this.labelResult = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.initItem = function (index, data) {
        this.bg.active = index % 2 == 0 ? false : true;
        this.labelTime.string = data.timePlay.split(" ")[0];
        this.labelMode.string = Loto_Cmd_1.default.Code.LOTO_GAME_MODE_NAME[data.gameMode];
        // cc.log("Loto ItemHistory row : ", data);
        var a = data.number.toString();
        var b = a.indexOf(",");
        if (data.number.length > 0 && data.number.toString().indexOf(",") != -1) {
            for (var index_1 = 0; index_1 < data.number.length; index_1++) {
                if (index_1 == 0) {
                    this.labelNums.string += "";
                }
                else if (index_1 == 5) {
                    this.labelNums.string += "\n";
                }
                else {
                    this.labelNums.string += ", ";
                }
                this.labelNums.string += data.number[index_1];
            }
        }
        else {
            this.labelNums.string = data.number.toString();
        }
        this.labelBet.string = Utils_1.default.formatNumber(data.pay * data.payRate);
        this.labelWin.string = Utils_1.default.formatNumber(data.win);
        if (data.status == 0) {
            this.labelResult.string = "Chờ kết quả XS";
        }
        else if (data.status == 1) {
            this.labelResult.string = "Hoàn thành";
            // if (data.winNumber.length > 0) {
            //     for (let index = 0; index < data.winNumber.length; index++) {
            //         if (index == 0) {
            //             this.labelResult.string += "";
            //         } else if (index == 5) {
            //             this.labelResult.string += "\n";
            //         } else {
            //             this.labelResult.string += ", ";
            //         }
            //         this.labelResult.string += data.winNumber[index];
            //     }
            // } else {
            //     this.labelResult.string = data.winNumber;
            // }
        } /* else if (data.status == 1) {
            this.labelResult.string = "Hủy";
        }*/
        else {
            this.labelResult.string = "Lỗi";
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bg", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "labelTime", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "labelMode", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "labelNums", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "labelBet", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "labelWin", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "labelResult", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG90b1xcTG90b19TY3JpcHRcXExvdG8uSXRlbUhpc3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZCO0FBQzdCLHFFQUFnRTtBQUMxRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTRFQztRQXpFRyxRQUFFLEdBQVksSUFBSSxDQUFDO1FBRW5CLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFMUIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixpQkFBVyxHQUFhLElBQUksQ0FBQzs7UUE0RDdCLGlCQUFpQjtJQUNyQixDQUFDO0lBM0RHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCwyQkFBUSxHQUFSLFVBQVMsS0FBSyxFQUFFLElBQUk7UUFDaEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLGtCQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRSwyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1B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L0xvdG8uQ21kXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmc6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWxUaW1lOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbE1vZGU6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsTnVtczogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWxCZXQ6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsV2luOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbFJlc3VsdDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpbml0SXRlbShpbmRleCwgZGF0YSkge1xyXG4gICAgICAgIHRoaXMuYmcuYWN0aXZlID0gaW5kZXggJSAyID09IDAgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgdGhpcy5sYWJlbFRpbWUuc3RyaW5nID0gZGF0YS50aW1lUGxheS5zcGxpdChcIiBcIilbMF07XHJcbiAgICAgICAgdGhpcy5sYWJlbE1vZGUuc3RyaW5nID0gY21kLkNvZGUuTE9UT19HQU1FX01PREVfTkFNRVtkYXRhLmdhbWVNb2RlXTtcclxuICAgICAgICAvLyBjYy5sb2coXCJMb3RvIEl0ZW1IaXN0b3J5IHJvdyA6IFwiLCBkYXRhKTtcclxuICAgICAgICBsZXQgYSA9IGRhdGEubnVtYmVyLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgbGV0IGIgPSBhLmluZGV4T2YoXCIsXCIpO1xyXG4gICAgICAgIGlmIChkYXRhLm51bWJlci5sZW5ndGggPiAwICYmIGRhdGEubnVtYmVyLnRvU3RyaW5nKCkuaW5kZXhPZihcIixcIikhPS0xKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLm51bWJlci5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYWJlbE51bXMuc3RyaW5nICs9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsTnVtcy5zdHJpbmcgKz0gXCJcXG5cIjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYWJlbE51bXMuc3RyaW5nICs9IFwiLCBcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubGFiZWxOdW1zLnN0cmluZyArPSBkYXRhLm51bWJlcltpbmRleF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsTnVtcy5zdHJpbmcgPSBkYXRhLm51bWJlci50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sYWJlbEJldC5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoZGF0YS5wYXkgKiBkYXRhLnBheVJhdGUpO1xyXG4gICAgICAgIHRoaXMubGFiZWxXaW4uc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGRhdGEud2luKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbFJlc3VsdC5zdHJpbmcgPSBcIkNo4budIGvhur90IHF14bqjIFhTXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnN0YXR1cyA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWxSZXN1bHQuc3RyaW5nID0gXCJIb8OgbiB0aMOgbmhcIjtcclxuICAgICAgICAgICAgLy8gaWYgKGRhdGEud2luTnVtYmVyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgLy8gICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLndpbk51bWJlci5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAoaW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmxhYmVsUmVzdWx0LnN0cmluZyArPSBcIlwiO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT0gNSkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmxhYmVsUmVzdWx0LnN0cmluZyArPSBcIlxcblwiO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMubGFiZWxSZXN1bHQuc3RyaW5nICs9IFwiLCBcIjtcclxuICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5sYWJlbFJlc3VsdC5zdHJpbmcgKz0gZGF0YS53aW5OdW1iZXJbaW5kZXhdO1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5sYWJlbFJlc3VsdC5zdHJpbmcgPSBkYXRhLndpbk51bWJlcjtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0vKiBlbHNlIGlmIChkYXRhLnN0YXR1cyA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWxSZXN1bHQuc3RyaW5nID0gXCJI4buneVwiO1xyXG4gICAgICAgIH0qLyBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbFJlc3VsdC5zdHJpbmcgPSBcIkzhu5dpXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19