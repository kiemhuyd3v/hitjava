
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/GameLive/GameLiveController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e97028rA1JGhKNbUNx5nwHj', 'GameLiveController');
// Lobby/LobbyScript/GameLive/GameLiveController.ts

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
var DropDown_1 = require("../../../Loading/Add-on/DropDown/Script/DropDown");
var Configs_1 = require("../../../Loading/src/Configs");
var Http_1 = require("../../../Loading/src/Http");
var App_1 = require("../Script/common/App");
var BroadcastReceiver_1 = require("../Script/common/BroadcastReceiver");
var Tween_1 = require("../Script/common/Tween");
var Utils_1 = require("../Script/common/Utils");
var ItemGameLive_1 = require("./ItemGameLive");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ListGame = ["Tài khoản chính", "Thể thao"];
var _this = null;
var GameLiveController = /** @class */ (function (_super) {
    __extends(GameLiveController, _super);
    function GameLiveController() {
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        _this_1.boxLeft = null;
        _this_1.boxRight = null;
        _this_1.arrItem = [];
        _this_1.dropFrom = null;
        _this_1.dropTo = null;
        _this_1.editMoney = null;
        _this_1.txtTotalMoney = null;
        _this_1.balanceEBET = 0;
        _this_1.totalMoney = 0;
        return _this_1;
    }
    GameLiveController.prototype.onLoad = function () {
        _this = this;
        ListGame = [App_1.default.instance.getTextLang("txt_main_account"), "Thể thao"];
    };
    GameLiveController.prototype.show = function () {
        this.node.setSiblingIndex(this.node.parent.childrenCount);
        this.editMoney.tabIndex = -1;
        this.boxLeft.opacity = 0;
        this.boxLeft.position = new cc.Vec3(0, 200, 0);
        cc.Tween.stopAllByTarget(this.boxLeft);
        cc.tween(this.boxLeft)
            .to(0.5, { position: cc.v3(0, 0, 0), opacity: 255 }, { easing: "backOut" })
            .start();
        this.boxRight.opacity = 0;
        this.boxRight.position = new cc.Vec3(0, -200, 0);
        cc.Tween.stopAllByTarget(this.boxRight);
        cc.tween(this.boxRight)
            .to(0.5, { position: cc.v3(0, 0, 0), opacity: 255 }, { easing: "backOut" })
            .start();
        // this.dropFrom = this.dropFrom.getComponent("DropDown");
        this.dropTo = this.dropTo.getComponent("DropDown");
        this.editMoney.string = "";
        this.initDropFrom();
        this.initDropTo();
        this.totalMoney = Configs_1.default.Login.Coin;
        this.updateTotalMoney();
        this.node.active = true;
        for (var i = 0; i < this.arrItem.length; i++) {
            this.arrItem[i].show();
        }
        this.arrItem[0].updateData(Configs_1.default.Login.Coin);
        this.updateInfoEBET(true);
    };
    GameLiveController.prototype.updateInfoEBET = function (isUpdateTotal) {
        var _this_1 = this;
        if (isUpdateTotal === void 0) { isUpdateTotal = false; }
        Http_1.default.postz("https://server.FANVIN.wIN/InfoEBET", { t: "CheckBalance", nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
            ////Utils.Log("updateInfo EBET:" + JSON.stringify(res));
            if (res["res"] == 0) {
                _this.arrItem[6].updateData(res["data"]["money"] * 100);
                _this.balanceEBET = res["data"]["money"] * 100;
                if (isUpdateTotal == true) {
                    _this.totalMoney += res["data"]["money"] * 100;
                    _this.updateTotalMoney();
                }
            }
            else {
                _this_1.arrItem[6].maintain();
            }
        });
    };
    GameLiveController.prototype.initDropFrom = function () {
        var datas = new Array();
        for (var i = 0; i < ListGame.length; i++) {
            datas.push({ optionString: ListGame[i] });
        }
        this.dropFrom.clearOptionDatas();
        this.dropFrom.addOptionDatas(datas);
        this.dropFrom.selectedIndex = 0;
    };
    GameLiveController.prototype.initDropTo = function () {
        var datas = new Array();
        for (var i = 0; i < ListGame.length; i++) {
            datas.push({ optionString: ListGame[i] });
        }
        this.dropTo.clearOptionDatas();
        this.dropTo.addOptionDatas(datas);
        this.dropTo.selectedIndex = 1;
    };
    GameLiveController.prototype.updateTotalMoney = function () {
        Tween_1.default.numberTo(this.txtTotalMoney, this.totalMoney, 1);
    };
    GameLiveController.prototype.hide = function () {
        this.node.active = false;
    };
    GameLiveController.prototype.onToggleDropTo = function () {
    };
    GameLiveController.prototype.onToggleDropFrom = function () {
    };
    GameLiveController.prototype.onBtnConfirm = function () {
        ////Utils.Log("vao day cai ne");
        //console.log(ListGame);
        var _this_1 = this;
        setTimeout(function () {
            if (_this_1.dropFrom.labelCaption.string == ListGame[0]) {
                //nap
                var money = Utils_1.default.formatEditBox(_this_1.editMoney.string) / 100;
                if (_this_1.editMoney.string == "") {
                    App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_input_all"));
                    return;
                }
                else if (_this_1.dropFrom.labelCaption.string == _this_1.dropTo.labelCaption.string) {
                    App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_input_error"));
                    return;
                }
                else if (_this_1.dropFrom.selectedIndex != 0 && _this_1.dropTo.selectedIndex != 0) {
                    App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_input_error"));
                }
                switch (_this_1.dropTo.labelCaption.string) {
                    case ListGame[1]:
                        if (money * 100 > Configs_1.default.Login.Coin) {
                            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_not_enough"));
                            return;
                        }
                        ////Utils.Log("Nap:" + _this.arrItem[0].money + " : " + _this.arrItem[1].money + " : " + money);
                        App_1.default.instance.showLoading(true);
                        Http_1.default.get(App_1.default.API_AG, { t: "Deposit", a: money, nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
                            App_1.default.instance.showLoading(false);
                            if (res["res"] == 0) {
                                ////Utils.Log("Nap AG res:" + JSON.stringify(res));
                                _this.updateInfoEBET();
                                _this.arrItem[0].updateData(_this.arrItem[0].money - money * 100);
                                Configs_1.default.Login.Coin -= money * 100;
                                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_note_transfer_8"));
                            }
                            else {
                                App_1.default.instance.ShowAlertDialog(res["msg"]);
                            }
                        });
                        break;
                }
            }
            else if (_this_1.dropTo.labelCaption.string == ListGame[0]) {
                //rut
                var money = Utils_1.default.formatEditBox(_this_1.editMoney.string) / 100;
                if (_this_1.editMoney.string == "") {
                    App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_input_all"));
                    return;
                }
                else if (_this_1.dropFrom.labelCaption.string == _this_1.dropTo.labelCaption.string) {
                    App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_input_error"));
                    return;
                }
                else if (_this_1.dropFrom.selectedIndex != 0 && _this_1.dropTo.selectedIndex != 0) {
                    App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_input_error"));
                }
                switch (_this_1.dropFrom.labelCaption.string) {
                    case ListGame[1]:
                        ////Utils.Log("Rut:" + this.balanceAG);
                        //ag
                        if (money * 100 > _this_1.balanceEBET) {
                            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_not_enough"));
                            return;
                        }
                        App_1.default.instance.showLoading(true);
                        Http_1.default.get(App_1.default.API_AG, { t: "Withdraw", a: money, nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
                            App_1.default.instance.showLoading(false);
                            if (res["res"] == 0) {
                                _this.updateInfoAG();
                                _this.arrItem[0].updateData(_this.arrItem[0].money + money * 100);
                                Configs_1.default.Login.Coin += money * 100;
                                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_note_transfer_9"));
                            }
                            else {
                                App_1.default.instance.ShowAlertDialog(res["msg"]);
                            }
                        });
                        break;
                }
            }
            else {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_input_error"));
                return;
            }
        }, 300);
    };
    __decorate([
        property(cc.Node)
    ], GameLiveController.prototype, "boxLeft", void 0);
    __decorate([
        property(cc.Node)
    ], GameLiveController.prototype, "boxRight", void 0);
    __decorate([
        property([ItemGameLive_1.default])
    ], GameLiveController.prototype, "arrItem", void 0);
    __decorate([
        property(DropDown_1.default)
    ], GameLiveController.prototype, "dropFrom", void 0);
    __decorate([
        property(DropDown_1.default)
    ], GameLiveController.prototype, "dropTo", void 0);
    __decorate([
        property(cc.EditBox)
    ], GameLiveController.prototype, "editMoney", void 0);
    __decorate([
        property(cc.Label)
    ], GameLiveController.prototype, "txtTotalMoney", void 0);
    GameLiveController = __decorate([
        ccclass
    ], GameLiveController);
    return GameLiveController;
}(cc.Component));
exports.default = GameLiveController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxHYW1lTGl2ZVxcR2FtZUxpdmVDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZFQUF3RTtBQUN4RSx3REFBbUQ7QUFDbkQsa0RBQTZDO0FBQzdDLDRDQUF1QztBQUN2Qyx3RUFBbUU7QUFDbkUsZ0RBQTJDO0FBQzNDLGdEQUEyQztBQUMzQywrQ0FBMEM7QUFFcEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUMvQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7QUFFakI7SUFBZ0Qsc0NBQVk7SUFBNUQ7UUFBQSx1RUFnTkM7UUE3TUcsZUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixnQkFBUSxHQUFZLElBQUksQ0FBQztRQUV6QixlQUFPLEdBQW1CLEVBQUUsQ0FBQztRQUU3QixnQkFBUSxHQUFhLElBQUksQ0FBQztRQUUxQixjQUFNLEdBQWEsSUFBSSxDQUFDO1FBRXhCLGlCQUFTLEdBQWUsSUFBSSxDQUFDO1FBRTdCLHFCQUFhLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLG1CQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGtCQUFVLEdBQUcsQ0FBQyxDQUFDOztJQTZMM0IsQ0FBQztJQTVMRyxtQ0FBTSxHQUFOO1FBQ0ksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNiLFFBQVEsR0FBRyxDQUFDLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUNELGlDQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0MsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNqQixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUM7YUFDMUUsS0FBSyxFQUFFLENBQUM7UUFFYixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqRCxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ2xCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQzthQUMxRSxLQUFLLEVBQUUsQ0FBQztRQUViLDBEQUEwRDtRQUMxRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsaUJBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUV4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMxQjtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLGlCQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUlELDJDQUFjLEdBQWQsVUFBZSxhQUFxQjtRQUFwQyxtQkFrQkM7UUFsQmMsOEJBQUEsRUFBQSxxQkFBcUI7UUFDaEMsY0FBSSxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsRUFBRSxFQUFFLENBQUMsRUFBRSxjQUFjLEVBQUUsRUFBRSxFQUFFLGlCQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsaUJBQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztZQUN2SSx3REFBd0Q7WUFDekQsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNqQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ3hELEtBQUssQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFFL0MsSUFBSSxhQUFhLElBQUksSUFBSSxFQUFFO29CQUN2QixLQUFLLENBQUMsVUFBVSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUM7b0JBQy9DLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2lCQUM1QjthQUNKO2lCQUNJO2dCQUNELE9BQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDOUI7UUFHTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx5Q0FBWSxHQUFaO1FBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDN0M7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCx1Q0FBVSxHQUFWO1FBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDN0M7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCw2Q0FBZ0IsR0FBaEI7UUFDSSxlQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsaUNBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsMkNBQWMsR0FBZDtJQUVBLENBQUM7SUFFRCw2Q0FBZ0IsR0FBaEI7SUFFQSxDQUFDO0lBQ0QseUNBQVksR0FBWjtRQUNLLGdDQUFnQztRQUN2Qyx3QkFBd0I7UUFGdEIsbUJBNEZDO1FBeEZHLFVBQVUsQ0FBQztZQUNQLElBQUksT0FBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbEQsS0FBSztnQkFDTCxJQUFJLEtBQUssR0FBRyxlQUFLLENBQUMsYUFBYSxDQUFDLE9BQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUM3RCxJQUFJLE9BQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRTtvQkFDN0IsYUFBRyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztvQkFDeEUsT0FBTztpQkFDVjtxQkFFSSxJQUFJLE9BQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxPQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7b0JBQzNFLGFBQUcsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztvQkFDMUUsT0FBTztpQkFDVjtxQkFDSSxJQUFJLE9BQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxJQUFJLENBQUMsSUFBSSxPQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsSUFBSSxDQUFDLEVBQUU7b0JBQ3pFLGFBQUcsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztpQkFDN0U7Z0JBQ0QsUUFBUSxPQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7b0JBQ3JDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDWixJQUFJLEtBQUssR0FBRyxHQUFHLEdBQUcsaUJBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFOzRCQUNsQyxhQUFHLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7NEJBQ3pFLE9BQU87eUJBQ1Y7d0JBQ0EsZ0dBQWdHO3dCQUNqRyxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDL0IsY0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLGlCQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7NEJBQ2pILGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUNoQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0NBQ2hCLG1EQUFtRDtnQ0FDcEQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dDQUN2QixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0NBQ2xFLGlCQUFPLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDO2dDQUNsQywyQkFBaUIsQ0FBQyxJQUFJLENBQUMsMkJBQWlCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQ0FDM0QsYUFBRyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDOzZCQUNqRjtpQ0FDSTtnQ0FDRCxhQUFHLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs2QkFDNUM7d0JBQ0wsQ0FBQyxDQUFDLENBQUM7d0JBQ0gsTUFBTTtpQkFFYjthQUNKO2lCQUNJLElBQUksT0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDckQsS0FBSztnQkFDTCxJQUFJLEtBQUssR0FBRyxlQUFLLENBQUMsYUFBYSxDQUFDLE9BQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUM3RCxJQUFJLE9BQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRTtvQkFDN0IsYUFBRyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztvQkFDeEUsT0FBTztpQkFDVjtxQkFFSSxJQUFJLE9BQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxPQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7b0JBQzNFLGFBQUcsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztvQkFDMUUsT0FBTztpQkFDVjtxQkFDSSxJQUFJLE9BQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxJQUFJLENBQUMsSUFBSSxPQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsSUFBSSxDQUFDLEVBQUU7b0JBQ3pFLGFBQUcsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztpQkFDN0U7Z0JBQ0QsUUFBUSxPQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7b0JBQ3ZDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDWCx1Q0FBdUM7d0JBQ3hDLElBQUk7d0JBQ0osSUFBSSxLQUFLLEdBQUcsR0FBRyxHQUFHLE9BQUksQ0FBQyxXQUFXLEVBQUU7NEJBQ2hDLGFBQUcsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQzs0QkFDekUsT0FBTzt5QkFDVjt3QkFDRCxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDL0IsY0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLGlCQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7NEJBQ2xILGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUNoQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0NBQ2pCLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQ0FDckIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dDQUNsRSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQztnQ0FDbEMsMkJBQWlCLENBQUMsSUFBSSxDQUFDLDJCQUFpQixDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0NBQzNELGFBQUcsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQzs2QkFDakY7aUNBQ0k7Z0NBQ0QsYUFBRyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7NkJBQzVDO3dCQUNMLENBQUMsQ0FBQyxDQUFDO3dCQUNILE1BQU07aUJBRWI7YUFDSjtpQkFDSTtnQkFDRCxhQUFHLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7Z0JBQzFFLE9BQU87YUFDVjtRQUNMLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUNYLENBQUM7SUEzTUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLENBQUMsc0JBQVksQ0FBQyxDQUFDO3VEQUNJO0lBRTdCO1FBREMsUUFBUSxDQUFDLGtCQUFRLENBQUM7d0RBQ087SUFFMUI7UUFEQyxRQUFRLENBQUMsa0JBQVEsQ0FBQztzREFDSztJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3lEQUNRO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkRBQ1k7SUFmZCxrQkFBa0I7UUFEdEMsT0FBTztPQUNhLGtCQUFrQixDQWdOdEM7SUFBRCx5QkFBQztDQWhORCxBQWdOQyxDQWhOK0MsRUFBRSxDQUFDLFNBQVMsR0FnTjNEO2tCQWhOb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERyb3BEb3duIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL0FkZC1vbi9Ecm9wRG93bi9TY3JpcHQvRHJvcERvd25cIjtcbmltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgSHR0cCBmcm9tIFwiLi4vLi4vLi4vTG9hZGluZy9zcmMvSHR0cFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBCcm9hZGNhc3RSZWNlaXZlciBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9Ccm9hZGNhc3RSZWNlaXZlclwiO1xuaW1wb3J0IFR3ZWVuIGZyb20gXCIuLi9TY3JpcHQvY29tbW9uL1R3ZWVuXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL1NjcmlwdC9jb21tb24vVXRpbHNcIjtcbmltcG9ydCBJdGVtR2FtZUxpdmUgZnJvbSBcIi4vSXRlbUdhbWVMaXZlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG52YXIgTGlzdEdhbWUgPSBbXCJUw6BpIGtob+G6o24gY2jDrW5oXCIsIFwiVGjhu4MgdGhhb1wiXTtcbnZhciBfdGhpcyA9IG51bGw7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUxpdmVDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJveExlZnQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJveFJpZ2h0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoW0l0ZW1HYW1lTGl2ZV0pXG4gICAgYXJySXRlbTogSXRlbUdhbWVMaXZlW10gPSBbXTtcbiAgICBAcHJvcGVydHkoRHJvcERvd24pXG4gICAgZHJvcEZyb206IERyb3BEb3duID0gbnVsbDtcbiAgICBAcHJvcGVydHkoRHJvcERvd24pXG4gICAgZHJvcFRvOiBEcm9wRG93biA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgZWRpdE1vbmV5OiBjYy5FZGl0Qm94ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdHh0VG90YWxNb25leTogY2MuTGFiZWwgPSBudWxsO1xuXG5cbiAgICBwcml2YXRlIGJhbGFuY2VFQkVUID0gMDtcbiAgICBwcml2YXRlIHRvdGFsTW9uZXkgPSAwO1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgX3RoaXMgPSB0aGlzO1xuICAgICAgICBMaXN0R2FtZSA9IFtBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfbWFpbl9hY2NvdW50XCIpLCBcIlRo4buDIHRoYW9cIl07XG4gICAgfVxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMubm9kZS5zZXRTaWJsaW5nSW5kZXgodGhpcy5ub2RlLnBhcmVudC5jaGlsZHJlbkNvdW50KTtcbiAgICAgICAgdGhpcy5lZGl0TW9uZXkudGFiSW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5ib3hMZWZ0Lm9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLmJveExlZnQucG9zaXRpb24gPSBuZXcgY2MuVmVjMygwLCAyMDAsIDApO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5ib3hMZWZ0KTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ib3hMZWZ0KVxuICAgICAgICAgICAgLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoMCwgMCwgMCksIG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJiYWNrT3V0XCIgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuXG4gICAgICAgIHRoaXMuYm94UmlnaHQub3BhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMuYm94UmlnaHQucG9zaXRpb24gPSBuZXcgY2MuVmVjMygwLCAtMjAwLCAwKTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuYm94UmlnaHQpO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmJveFJpZ2h0KVxuICAgICAgICAgICAgLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoMCwgMCwgMCksIG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJiYWNrT3V0XCIgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuXG4gICAgICAgIC8vIHRoaXMuZHJvcEZyb20gPSB0aGlzLmRyb3BGcm9tLmdldENvbXBvbmVudChcIkRyb3BEb3duXCIpO1xuICAgICAgICB0aGlzLmRyb3BUbyA9IHRoaXMuZHJvcFRvLmdldENvbXBvbmVudChcIkRyb3BEb3duXCIpO1xuICAgICAgICB0aGlzLmVkaXRNb25leS5zdHJpbmcgPSBcIlwiO1xuICAgICAgICB0aGlzLmluaXREcm9wRnJvbSgpO1xuICAgICAgICB0aGlzLmluaXREcm9wVG8oKTtcbiAgICAgICAgdGhpcy50b3RhbE1vbmV5ID0gQ29uZmlncy5Mb2dpbi5Db2luO1xuICAgICAgICB0aGlzLnVwZGF0ZVRvdGFsTW9uZXkoKTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFyckl0ZW0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYXJySXRlbVtpXS5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hcnJJdGVtWzBdLnVwZGF0ZURhdGEoQ29uZmlncy5Mb2dpbi5Db2luKTtcbiAgICAgICAgdGhpcy51cGRhdGVJbmZvRUJFVCh0cnVlKTtcbiAgICB9XG5cblxuXG4gICAgdXBkYXRlSW5mb0VCRVQoaXNVcGRhdGVUb3RhbCA9IGZhbHNlKSB7XG4gICAgICAgIEh0dHAucG9zdHooXCJodHRwczovL3NlcnZlci5GQU5WSU4ud0lOL0luZm9FQkVUXCIsIHsgdDogXCJDaGVja0JhbGFuY2VcIiwgbm46IENvbmZpZ3MuTG9naW4uTmlja25hbWUsIGF0OiBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgIC8vLy9VdGlscy5Mb2coXCJ1cGRhdGVJbmZvIEVCRVQ6XCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgIGlmIChyZXNbXCJyZXNcIl0gPT0gMCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFyckl0ZW1bNl0udXBkYXRlRGF0YShyZXNbXCJkYXRhXCJdW1wibW9uZXlcIl0gKiAxMDApO1xuICAgICAgICAgICAgICAgIF90aGlzLmJhbGFuY2VFQkVUID0gcmVzW1wiZGF0YVwiXVtcIm1vbmV5XCJdICogMTAwO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzVXBkYXRlVG90YWwgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy50b3RhbE1vbmV5ICs9IHJlc1tcImRhdGFcIl1bXCJtb25leVwiXSAqIDEwMDtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlVG90YWxNb25leSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYXJySXRlbVs2XS5tYWludGFpbigpO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGluaXREcm9wRnJvbSgpIHtcbiAgICAgICAgdmFyIGRhdGFzID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTGlzdEdhbWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRhdGFzLnB1c2goeyBvcHRpb25TdHJpbmc6IExpc3RHYW1lW2ldIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJvcEZyb20uY2xlYXJPcHRpb25EYXRhcygpO1xuICAgICAgICB0aGlzLmRyb3BGcm9tLmFkZE9wdGlvbkRhdGFzKGRhdGFzKTtcbiAgICAgICAgdGhpcy5kcm9wRnJvbS5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICB9XG5cbiAgICBpbml0RHJvcFRvKCkge1xuICAgICAgICB2YXIgZGF0YXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBMaXN0R2FtZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGF0YXMucHVzaCh7IG9wdGlvblN0cmluZzogTGlzdEdhbWVbaV0gfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcm9wVG8uY2xlYXJPcHRpb25EYXRhcygpO1xuICAgICAgICB0aGlzLmRyb3BUby5hZGRPcHRpb25EYXRhcyhkYXRhcyk7XG4gICAgICAgIHRoaXMuZHJvcFRvLnNlbGVjdGVkSW5kZXggPSAxO1xuICAgIH1cblxuICAgIHVwZGF0ZVRvdGFsTW9uZXkoKSB7XG4gICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMudHh0VG90YWxNb25leSwgdGhpcy50b3RhbE1vbmV5LCAxKTtcbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25Ub2dnbGVEcm9wVG8oKSB7XG5cbiAgICB9XG5cbiAgICBvblRvZ2dsZURyb3BGcm9tKCkge1xuXG4gICAgfVxuICAgIG9uQnRuQ29uZmlybSgpIHtcbiAgICAgICAgIC8vLy9VdGlscy5Mb2coXCJ2YW8gZGF5IGNhaSBuZVwiKTtcblx0XHQvL2NvbnNvbGUubG9nKExpc3RHYW1lKTtcblx0XHQgXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZHJvcEZyb20ubGFiZWxDYXB0aW9uLnN0cmluZyA9PSBMaXN0R2FtZVswXSkge1xuICAgICAgICAgICAgICAgIC8vbmFwXG4gICAgICAgICAgICAgICAgdmFyIG1vbmV5ID0gVXRpbHMuZm9ybWF0RWRpdEJveCh0aGlzLmVkaXRNb25leS5zdHJpbmcpIC8gMTAwO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVkaXRNb25leS5zdHJpbmcgPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9pbnB1dF9hbGxcIikpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5kcm9wRnJvbS5sYWJlbENhcHRpb24uc3RyaW5nID09IHRoaXMuZHJvcFRvLmxhYmVsQ2FwdGlvbi5zdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfaW5wdXRfZXJyb3JcIikpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZHJvcEZyb20uc2VsZWN0ZWRJbmRleCAhPSAwICYmIHRoaXMuZHJvcFRvLnNlbGVjdGVkSW5kZXggIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9pbnB1dF9lcnJvclwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5kcm9wVG8ubGFiZWxDYXB0aW9uLnN0cmluZykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIExpc3RHYW1lWzFdOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vbmV5ICogMTAwID4gQ29uZmlncy5Mb2dpbi5Db2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfbm90X2Vub3VnaFwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgIC8vLy9VdGlscy5Mb2coXCJOYXA6XCIgKyBfdGhpcy5hcnJJdGVtWzBdLm1vbmV5ICsgXCIgOiBcIiArIF90aGlzLmFyckl0ZW1bMV0ubW9uZXkgKyBcIiA6IFwiICsgbW9uZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgSHR0cC5nZXQoQXBwLkFQSV9BRywgeyB0OiBcIkRlcG9zaXRcIiwgYTogbW9uZXksIG5uOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBhdDogQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbiB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNbXCJyZXNcIl0gPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vL1V0aWxzLkxvZyhcIk5hcCBBRyByZXM6XCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlSW5mb0VCRVQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuYXJySXRlbVswXS51cGRhdGVEYXRhKF90aGlzLmFyckl0ZW1bMF0ubW9uZXkgLSBtb25leSAqIDEwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQ29pbiAtPSBtb25leSAqIDEwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfbm90ZV90cmFuc2Zlcl84XCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2cocmVzW1wibXNnXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmRyb3BUby5sYWJlbENhcHRpb24uc3RyaW5nID09IExpc3RHYW1lWzBdKSB7XG4gICAgICAgICAgICAgICAgLy9ydXRcbiAgICAgICAgICAgICAgICB2YXIgbW9uZXkgPSBVdGlscy5mb3JtYXRFZGl0Qm94KHRoaXMuZWRpdE1vbmV5LnN0cmluZykgLyAxMDA7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWRpdE1vbmV5LnN0cmluZyA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X2lucHV0X2FsbFwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmRyb3BGcm9tLmxhYmVsQ2FwdGlvbi5zdHJpbmcgPT0gdGhpcy5kcm9wVG8ubGFiZWxDYXB0aW9uLnN0cmluZykge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9pbnB1dF9lcnJvclwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5kcm9wRnJvbS5zZWxlY3RlZEluZGV4ICE9IDAgJiYgdGhpcy5kcm9wVG8uc2VsZWN0ZWRJbmRleCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X2lucHV0X2Vycm9yXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmRyb3BGcm9tLmxhYmVsQ2FwdGlvbi5zdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBMaXN0R2FtZVsxXTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vVXRpbHMuTG9nKFwiUnV0OlwiICsgdGhpcy5iYWxhbmNlQUcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9hZ1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vbmV5ICogMTAwID4gdGhpcy5iYWxhbmNlRUJFVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X25vdF9lbm91Z2hcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEh0dHAuZ2V0KEFwcC5BUElfQUcsIHsgdDogXCJXaXRoZHJhd1wiLCBhOiBtb25leSwgbm46IENvbmZpZ3MuTG9naW4uTmlja25hbWUsIGF0OiBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc1tcInJlc1wiXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZUluZm9BRygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5hcnJJdGVtWzBdLnVwZGF0ZURhdGEoX3RoaXMuYXJySXRlbVswXS5tb25leSArIG1vbmV5ICogMTAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luICs9IG1vbmV5ICogMTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9ub3RlX3RyYW5zZmVyXzlcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhyZXNbXCJtc2dcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfaW5wdXRfZXJyb3JcIikpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMzAwKVxuICAgIH1cblxufVxuIl19