
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Payment/TabTopupManualMomo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '68736QrMLJGeLalMFzRVruQ', 'TabTopupManualMomo');
// Lobby/LobbyScript/Payment/TabTopupManualMomo.ts

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
var Configs_1 = require("../../../Loading/src/Configs");
var Http_1 = require("../../../Loading/src/Http");
var App_1 = require("../Script/common/App");
var Utils_1 = require("../Script/common/Utils");
var SPUtils_1 = require("../Script/common/SPUtils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TapTopupManualMomo = /** @class */ (function (_super) {
    __extends(TapTopupManualMomo, _super);
    function TapTopupManualMomo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnChoseBank = null;
        _this.btnCopystk = null;
        _this.btnCopynoidung = null;
        _this.editName = null;
        _this.editMoney = null;
        _this.editBankNumber = null;
        _this.btnXacNhan = null;
        _this.nodeInput = null;
        _this.nodeQR = null;
        _this.nodeArrow = null;
        _this.lbTransMsg = null;
        _this.lbBankAccount = null;
        _this.lbBankNumber = null;
        _this.spriteBank = null;
        //	@property(cc.Label)
        //    lbBank: cc.Label = null;
        _this.providerName = null;
        _this.data = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    TapTopupManualMomo.prototype.start = function () {
    };
    TapTopupManualMomo.prototype.show = function (data, providerName) {
        this.providerName = providerName;
        this.data = data;
        this.node.active = true;
        this.btnChoseBank.node.active = false;
        this.nodeQR.active = false;
        this.nodeInput.active = true;
        this.nodeArrow.active = false;
        this.editName.string = this.editMoney.string = this.editBankNumber.string = "";
        this.editName.node.opacity = this.editBankNumber.node.opacity = this.editMoney.node.opacity = this.btnXacNhan.node.opacity = 255;
        this.editName.enabled = true;
        this.editMoney.enabled = true;
        this.editBankNumber.enabled = true;
        this.editBankNumber.placeholder = App_1.default.instance.getTextLang('txt_phone_number');
        this.btnXacNhan.interactable = true;
    };
    TapTopupManualMomo.prototype.hide = function () {
        this.node.active = false;
    };
    TapTopupManualMomo.prototype.onClickConfirm = function () {
        var _this = this;
        if (this.node.active) {
            var money = Utils_1.default.formatEditBox(this.editMoney.string);
            var bankNumber = this.editBankNumber.string.trim();
            if (this.editMoney.string == "" || bankNumber == "" || this.editName.string.trim() == "") {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_input_all"));
                return;
            }
            if (money < 10000) {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_cash_in_min") + " 10.000");
                return;
            }
            if (money > 300000000) {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_cash_in_max") + " 300.000.000");
                return;
            }
            var self = this;
            App_1.default.instance.showLoading(true, -1);
            var request = {
                "c": 2003,
                "fn": encodeURIComponent(this.editName.string.trim()),
                "am": money,
                "pt": 4,
                "nn": Configs_1.default.Login.Nickname,
                "at": Configs_1.default.Login.AccessToken,
                "pn": this.providerName,
                "bc": "",
                "ds": this.generateTransMsg(),
                "bn": bankNumber
            };
            Http_1.default.get(Configs_1.default.App.API, { "c": 130 }, function (err, res) {
                var momoConfig = res.momoConfig;
                _this._momoConfig = momoConfig;
                //    this.lbBank.string = listBank[0].bankName;
                _this.lbBankNumber.string = momoConfig.accountNumber;
                _this.lbBankAccount.string = momoConfig.accountName;
                cc.loader.load(momoConfig.image_path, function (err, texture) {
                    var newSpriteFrame = new cc.SpriteFrame(texture);
                    self.spriteBank.spriteFrame = newSpriteFrame;
                });
            });
            this.lbTransMsg.string = request['ds'];
            Http_1.default.get(Configs_1.default.App.API, request, function (err, res) {
                App_1.default.instance.showLoading(false);
                //  cc.log(res);
                if (res.success == true) {
                    _this.nodeInput.active = false;
                    _this.nodeQR.active = true;
                }
                else {
                    App_1.default.instance.ShowAlertDialog(res.message);
                }
            });
            this.btnCopystk.node.on("click", function () {
                if (_this.lbBankNumber.string.length > 0) {
                    SPUtils_1.default.copyToClipboard(_this.lbBankNumber.string);
                    App_1.default.instance.alertDialog.showMsg("Đã sao chép số tài khoản.");
                }
                else {
                    App_1.default.instance.alertDialog.showMsg("Chưa có số tài khoản.");
                }
            });
            this.btnCopynoidung.node.on("click", function () {
                if (_this.lbTransMsg.string.length > 0) {
                    SPUtils_1.default.copyToClipboard(_this.lbTransMsg.string);
                    App_1.default.instance.alertDialog.showMsg("Đã sao chép nội dung.");
                }
                else {
                    App_1.default.instance.alertDialog.showMsg("Chưa có nội dung.");
                }
            });
        }
    };
    TapTopupManualMomo.prototype.generateTransMsg = function () {
        return (Configs_1.default.Login.Nickname + "");
    };
    __decorate([
        property(cc.Sprite)
    ], TapTopupManualMomo.prototype, "btnChoseBank", void 0);
    __decorate([
        property(cc.Button)
    ], TapTopupManualMomo.prototype, "btnCopystk", void 0);
    __decorate([
        property(cc.Button)
    ], TapTopupManualMomo.prototype, "btnCopynoidung", void 0);
    __decorate([
        property(cc.EditBox)
    ], TapTopupManualMomo.prototype, "editName", void 0);
    __decorate([
        property(cc.EditBox)
    ], TapTopupManualMomo.prototype, "editMoney", void 0);
    __decorate([
        property(cc.EditBox)
    ], TapTopupManualMomo.prototype, "editBankNumber", void 0);
    __decorate([
        property(cc.Button)
    ], TapTopupManualMomo.prototype, "btnXacNhan", void 0);
    __decorate([
        property(cc.Node)
    ], TapTopupManualMomo.prototype, "nodeInput", void 0);
    __decorate([
        property(cc.Node)
    ], TapTopupManualMomo.prototype, "nodeQR", void 0);
    __decorate([
        property(cc.Node)
    ], TapTopupManualMomo.prototype, "nodeArrow", void 0);
    __decorate([
        property(cc.Label)
    ], TapTopupManualMomo.prototype, "lbTransMsg", void 0);
    __decorate([
        property(cc.Label)
    ], TapTopupManualMomo.prototype, "lbBankAccount", void 0);
    __decorate([
        property(cc.Label)
    ], TapTopupManualMomo.prototype, "lbBankNumber", void 0);
    __decorate([
        property(cc.Sprite)
    ], TapTopupManualMomo.prototype, "spriteBank", void 0);
    TapTopupManualMomo = __decorate([
        ccclass
    ], TapTopupManualMomo);
    return TapTopupManualMomo;
}(cc.Component));
exports.default = TapTopupManualMomo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxQYXltZW50XFxUYWJUb3B1cE1hbnVhbE1vbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQW1EO0FBQ25ELGtEQUE2QztBQUM3Qyw0Q0FBdUM7QUFDdkMsZ0RBQTJDO0FBRTNDLG9EQUErQztBQUN6QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQWlKQztRQS9JRyxrQkFBWSxHQUFjLElBQUksQ0FBQztRQUUvQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixvQkFBYyxHQUFjLElBQUksQ0FBQztRQUdqQyxjQUFRLEdBQWUsSUFBSSxDQUFDO1FBRzVCLGVBQVMsR0FBZSxJQUFJLENBQUM7UUFHN0Isb0JBQWMsR0FBZSxJQUFJLENBQUM7UUFHbEMsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFJN0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0Isa0JBQVksR0FBYSxJQUFJLENBQUM7UUFFOUIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFDakMsc0JBQXNCO1FBQ3RCLDhCQUE4QjtRQUVsQixrQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixVQUFJLEdBQUcsSUFBSSxDQUFDOztRQXVHcEIsaUJBQWlCO0lBQ3JCLENBQUM7SUF2R0csZUFBZTtJQUVmLGtDQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0QsaUNBQUksR0FBSixVQUFLLElBQUksRUFBRSxZQUFZO1FBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUMvRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ2pJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ25DLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxHQUFHLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQ3hDLENBQUM7SUFDRCxpQ0FBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFDRCwyQ0FBYyxHQUFkO1FBQUEsaUJBeUVDO1FBeEVHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDbEIsSUFBSSxLQUFLLEdBQUcsZUFBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ25ELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksRUFBRSxJQUFJLFVBQVUsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO2dCQUN0RixhQUFHLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO2dCQUN4RSxPQUFPO2FBQ1Y7WUFDRCxJQUFJLEtBQUssR0FBRyxLQUFLLEVBQUU7Z0JBQ2YsYUFBRyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQztnQkFDdEYsT0FBTzthQUNWO1lBQ0QsSUFBSSxLQUFLLEdBQUcsU0FBUyxFQUFFO2dCQUNuQixhQUFHLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxDQUFDO2dCQUMzRixPQUFPO2FBQ1Y7WUFDRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7WUFDaEIsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxPQUFPLEdBQUc7Z0JBQ1YsR0FBRyxFQUFFLElBQUk7Z0JBQ1QsSUFBSSxFQUFFLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNyRCxJQUFJLEVBQUUsS0FBSztnQkFDWCxJQUFJLEVBQUUsQ0FBQztnQkFDUCxJQUFJLEVBQUUsaUJBQU8sQ0FBQyxLQUFLLENBQUMsUUFBUTtnQkFDNUIsSUFBSSxFQUFFLGlCQUFPLENBQUMsS0FBSyxDQUFDLFdBQVc7Z0JBQy9CLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWTtnQkFDdkIsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDN0IsSUFBSSxFQUFFLFVBQVU7YUFDbkIsQ0FBQztZQUNGLGNBQUksQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7Z0JBQzdDLElBQUksVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUM7Z0JBQ2hDLEtBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO2dCQUMxQixnREFBZ0Q7Z0JBQzVDLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7Z0JBQ3BELEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUM7Z0JBQ3JFLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxHQUFHLEVBQUUsT0FBTztvQkFDOUMsSUFBSSxjQUFjLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNqRCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUM7Z0JBQ2pELENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7WUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0IsY0FBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7Z0JBQ3hDLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxnQkFBZ0I7Z0JBQ2hCLElBQUksR0FBRyxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUU7b0JBQ3JCLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDOUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2lCQUM3QjtxQkFDSTtvQkFDRCxhQUFHLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQzdDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO2dCQUN4QixJQUFJLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBRWpDLGlCQUFPLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ2pFLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO2lCQUV0RDtxQkFBTTtvQkFDSCxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztpQkFDN0Q7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUNULElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7Z0JBQzNCLElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDbkMsaUJBQU8sQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDM0QsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7aUJBRWxEO3FCQUFNO29CQUNILGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2lCQUN6RDtZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ0Y7SUFDTCxDQUFDO0lBQ0QsNkNBQWdCLEdBQWhCO1FBQ0ksT0FBTyxDQUFDLGlCQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBNUlEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NERBQ1c7SUFFL0I7UUFERixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswREFDWTtJQUU3QjtRQURGLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhEQUNnQjtJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3dEQUNPO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7eURBQ1E7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs4REFDYTtJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBEQUNTO0lBSTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eURBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MERBQ1M7SUFFNUI7UUFERixRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2REFDZTtJQUUvQjtRQURGLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzREQUNjO0lBRTlCO1FBREYsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MERBQ1k7SUFwQ1osa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0FpSnRDO0lBQUQseUJBQUM7Q0FqSkQsQUFpSkMsQ0FqSitDLEVBQUUsQ0FBQyxTQUFTLEdBaUozRDtrQkFqSm9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgSHR0cCBmcm9tIFwiLi4vLi4vLi4vTG9hZGluZy9zcmMvSHR0cFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4uLy4uLy4uL0xvYWRpbmcvc3JjL0dsb2JhbFwiO1xuaW1wb3J0IFNQVXRpbHMgZnJvbSBcIi4uL1NjcmlwdC9jb21tb24vU1BVdGlsc1wiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhcFRvcHVwTWFudWFsTW9tbyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBidG5DaG9zZUJhbms6IGNjLlNwcml0ZSA9IG51bGw7XG5cdEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgYnRuQ29weXN0azogY2MuQnV0dG9uID0gbnVsbDtcblx0QHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG5Db3B5bm9pZHVuZzogY2MuQnV0dG9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIGVkaXROYW1lOiBjYy5FZGl0Qm94ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIGVkaXRNb25leTogY2MuRWRpdEJveCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBlZGl0QmFua051bWJlcjogY2MuRWRpdEJveCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0blhhY05oYW46IGNjLkJ1dHRvbiA9IG51bGw7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vZGVJbnB1dDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlUVI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZUFycm93OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJUcmFuc01zZzogY2MuTGFiZWwgPSBudWxsO1xuXHRAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJCYW5rQWNjb3VudDogY2MuTGFiZWwgPSBudWxsO1xuXHRAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJCYW5rTnVtYmVyOiBjYy5MYWJlbCA9IG51bGw7XG5cdEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgc3ByaXRlQmFuazogY2MuU3ByaXRlID0gbnVsbDtcbi8vXHRAcHJvcGVydHkoY2MuTGFiZWwpXG4vLyAgICBsYkJhbms6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHByaXZhdGUgcHJvdmlkZXJOYW1lID0gbnVsbDtcbiAgICBwcml2YXRlIGRhdGEgPSBudWxsO1xuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG4gICAgc2hvdyhkYXRhLCBwcm92aWRlck5hbWUpIHtcbiAgICAgICAgdGhpcy5wcm92aWRlck5hbWUgPSBwcm92aWRlck5hbWU7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmJ0bkNob3NlQmFuay5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vZGVRUi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub2RlSW5wdXQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ub2RlQXJyb3cuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZWRpdE5hbWUuc3RyaW5nID0gdGhpcy5lZGl0TW9uZXkuc3RyaW5nID0gdGhpcy5lZGl0QmFua051bWJlci5zdHJpbmcgPSBcIlwiO1xuICAgICAgICB0aGlzLmVkaXROYW1lLm5vZGUub3BhY2l0eSA9IHRoaXMuZWRpdEJhbmtOdW1iZXIubm9kZS5vcGFjaXR5ID0gdGhpcy5lZGl0TW9uZXkubm9kZS5vcGFjaXR5ID0gdGhpcy5idG5YYWNOaGFuLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgdGhpcy5lZGl0TmFtZS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lZGl0TW9uZXkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZWRpdEJhbmtOdW1iZXIuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZWRpdEJhbmtOdW1iZXIucGxhY2Vob2xkZXIgPSBBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9waG9uZV9udW1iZXInKTtcbiAgICAgICAgdGhpcy5idG5YYWNOaGFuLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgfVxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gICAgb25DbGlja0NvbmZpcm0oKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUuYWN0aXZlKSB7XG4gICAgICAgICAgICB2YXIgbW9uZXkgPSBVdGlscy5mb3JtYXRFZGl0Qm94KHRoaXMuZWRpdE1vbmV5LnN0cmluZyk7XG4gICAgICAgICAgICB2YXIgYmFua051bWJlciA9IHRoaXMuZWRpdEJhbmtOdW1iZXIuc3RyaW5nLnRyaW0oKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmVkaXRNb25leS5zdHJpbmcgPT0gXCJcIiB8fCBiYW5rTnVtYmVyID09IFwiXCIgfHwgdGhpcy5lZGl0TmFtZS5zdHJpbmcudHJpbSgpID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9pbnB1dF9hbGxcIikpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtb25leSA8IDEwMDAwKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfY2FzaF9pbl9taW5cIikgKyBcIiAxMC4wMDBcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1vbmV5ID4gMzAwMDAwMDAwKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfY2FzaF9pbl9tYXhcIikgKyBcIiAzMDAuMDAwLjAwMFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSwgLTEpO1xuICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgICAgICAgICAgXCJjXCI6IDIwMDMsXG4gICAgICAgICAgICAgICAgXCJmblwiOiBlbmNvZGVVUklDb21wb25lbnQodGhpcy5lZGl0TmFtZS5zdHJpbmcudHJpbSgpKSxcbiAgICAgICAgICAgICAgICBcImFtXCI6IG1vbmV5LFxuICAgICAgICAgICAgICAgIFwicHRcIjogNCxcbiAgICAgICAgICAgICAgICBcIm5uXCI6IENvbmZpZ3MuTG9naW4uTmlja25hbWUsXG4gICAgICAgICAgICAgICAgXCJhdFwiOiBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuLFxuICAgICAgICAgICAgICAgIFwicG5cIjogdGhpcy5wcm92aWRlck5hbWUsXG4gICAgICAgICAgICAgICAgXCJiY1wiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiZHNcIjogdGhpcy5nZW5lcmF0ZVRyYW5zTXNnKCksXG4gICAgICAgICAgICAgICAgXCJiblwiOiBiYW5rTnVtYmVyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgSHR0cC5nZXQoQ29uZmlncy5BcHAuQVBJLCB7IFwiY1wiOiAxMzAgfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG1vbW9Db25maWcgPSByZXMubW9tb0NvbmZpZztcbiAgICAgICAgICAgICAgICB0aGlzLl9tb21vQ29uZmlnID0gbW9tb0NvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgdGhpcy5sYkJhbmsuc3RyaW5nID0gbGlzdEJhbmtbMF0uYmFua05hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxiQmFua051bWJlci5zdHJpbmcgPSBtb21vQ29uZmlnLmFjY291bnROdW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxiQmFua0FjY291bnQuc3RyaW5nID0gbW9tb0NvbmZpZy5hY2NvdW50TmFtZTtcblx0XHRcdFx0XHRcdGNjLmxvYWRlci5sb2FkKG1vbW9Db25maWcuaW1hZ2VfcGF0aCwgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3U3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc3ByaXRlQmFuay5zcHJpdGVGcmFtZSA9IG5ld1Nwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgIH0pO1x0XG4gICAgICAgICAgICB9KTtcblx0XHRcdHRoaXMubGJUcmFuc01zZy5zdHJpbmcgPXJlcXVlc3RbJ2RzJ107XG4gICAgICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHJlcXVlc3QsIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgIGlmIChyZXMuc3VjY2VzcyA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZUlucHV0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGVRUi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhyZXMubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cdFx0XHR0aGlzLmJ0bkNvcHlzdGsubm9kZS5vbihcImNsaWNrXCIsICgpPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMubGJCYW5rTnVtYmVyLnN0cmluZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFNQVXRpbHMuY29weVRvQ2xpcGJvYXJkKHRoaXMubGJCYW5rTnVtYmVyLnN0cmluZyk7XG5cdFx0XHRcdFx0QXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCLEkMOjIHNhbyBjaMOpcCBz4buRIHTDoGkga2hv4bqjbi5cIik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiQ2jGsGEgY8OzIHPhu5EgdMOgaSBraG/huqNuLlwiKTsgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblx0XHR0aGlzLmJ0bkNvcHlub2lkdW5nLm5vZGUub24oXCJjbGlja1wiLCAoKT0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxiVHJhbnNNc2cuc3RyaW5nLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBTUFV0aWxzLmNvcHlUb0NsaXBib2FyZCh0aGlzLmxiVHJhbnNNc2cuc3RyaW5nKTtcblx0XHRcdFx0XHRBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIsSQw6Mgc2FvIGNow6lwIG7hu5lpIGR1bmcuXCIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIkNoxrBhIGPDsyBu4buZaSBkdW5nLlwiKTsgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZW5lcmF0ZVRyYW5zTXNnKCkge1xuICAgICAgICByZXR1cm4gKENvbmZpZ3MuTG9naW4uTmlja25hbWUgKyBcIlwiKTtcbiAgICB9XG5cdFxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=