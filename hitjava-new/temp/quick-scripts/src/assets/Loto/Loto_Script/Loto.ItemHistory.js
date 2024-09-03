"use strict";
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