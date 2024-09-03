
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.PopupDiemDanh.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3e752maTLBJ4p4daXBndgKD', 'Lobby.PopupDiemDanh');
// Lobby/LobbyScript/Lobby.PopupDiemDanh.ts

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
var Configs_1 = require("../../Loading/src/Configs");
var Http_1 = require("../../Loading/src/Http");
var App_1 = require("./Script/common/App");
var BroadcastReceiver_1 = require("./Script/common/BroadcastReceiver");
var Dialog_1 = require("./Script/common/Dialog");
var Utils_1 = require("./Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TW = cc.tween;
var PopupDiemDanh1 = /** @class */ (function (_super) {
    __extends(PopupDiemDanh1, _super);
    function PopupDiemDanh1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animBox = null;
        _this.animChip = null;
        _this.animGlow = [];
        _this.listDot = [];
        _this.listBgConsecutive = [];
        _this.listLbBonus = [];
        _this.animDice1 = null;
        _this.animDice2 = null;
        _this.animDice3 = null;
        _this.sprDice1 = null;
        _this.sprDice2 = null;
        _this.sprDice3 = null;
        _this.sprProgress = null;
        _this.lbRewardNormal = null;
        _this.lbBonusDiemDanh = null;
        _this.lbBonusVip = null;
        _this.lbTotal = null;
        _this.lbResultDice = null;
        _this.btnSpin = null;
        _this.PopupGuide = null;
        _this.listSprDice = [];
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}
        _this.listFillRange = [0.1, 0.21, 0.365, 0.53, 0.68, 0.85, 1.0];
        _this.listPosChip = [-253, -164, -83, 0, 83, 164, 253];
        _this.currentProgress = 0;
        return _this;
        // update (dt) {}
    }
    PopupDiemDanh1.prototype.start = function () {
        var _this = this;
        this.animChip.setCompleteListener(function () {
            _this.animChip.node.active = false;
        });
    };
    PopupDiemDanh1.prototype.onEnable = function () {
        this.setInfo();
    };
    PopupDiemDanh1.prototype.loadData = function () {
        var _this = this;
        //  cc.log("loadData");
        Http_1.default.get(Configs_1.default.App.API, { c: "2031", nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken, ac: "get" }, function (err, res) {
            //  cc.log("DIEMDANH:", res);
            if (res["success"] == true) {
                _this.btnSpin.interactable = true;
                _this.btnSpin.node.children[0].color = cc.Color.WHITE;
                _this.container.getChildByName('resultContainer').active = true;
                _this.container.getChildByName('lbInfo').active = false;
            }
            else {
                _this.btnSpin.interactable = false;
                _this.btnSpin.node.children[0].color = cc.Color.GRAY;
                _this.container.getChildByName('resultContainer').active = false;
                _this.container.getChildByName('lbInfo').active = true;
            }
            if (res['data'] != null) {
                _this.currentProgress = parseInt(res['data']);
                if (_this.currentProgress == 0) {
                    // this.sprChipToday.node.active = false;
                    _this.sprProgress.fillRange = 0;
                }
                else {
                    _this.sprProgress.fillRange = _this.listFillRange[_this.currentProgress - 1];
                    // this.sprChipToday.node.x = this.listPosChip[this.currentProgress - 1];
                }
            }
        });
    };
    PopupDiemDanh1.prototype.setHistory = function () {
        var _this = this;
        App_1.default.instance.showLoading(true);
        Http_1.default.get(Configs_1.default.App.API, { c: "2031", nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken, ac: "history" }, function (err, res) {
            // res = JSON.parse('{"success":true,"errorCode":"0","message":null,"statistic":null,"totalRecords":0,"data":[{"date":"2021-10-27","ratioBonus":0,"consecutive":0},{"date":"2021-10-28","ratioBonus":0,"consecutive":1},{"date":"2021-10-29","ratioBonus":10,"consecutive":2},{"date":"2021-10-30","ratioBonus":0,"consecutive":0},{"date":"2021-10-31","ratioBonus":0,"consecutive":1},{"date":"2021-11-01","ratioBonus":10,"consecutive":2},{"date":"2021-11-02","ratioBonus":20,"consecutive":3}]}');
            App_1.default.instance.showLoading(false);
            if (res["success"] == true) {
                var dataHis = res['data'];
                //  cc.log(dataHis.length);
                for (var i = 0; i < dataHis.length; i++) {
                    if (dataHis[i]['consecutive'] != 0) {
                        _this.listDot[i].active = true;
                        _this.listLbBonus[i].node.active = true;
                        _this.listLbBonus[i].string = "+" + dataHis[i]['ratioBonus'] + "%";
                        if (i < dataHis.length - 1 && dataHis[i + 1]['consecutive'] > 1) {
                            _this.listBgConsecutive[i].active = true;
                        }
                    }
                    else {
                        _this.listDot[i].active = false;
                        _this.listLbBonus[i].node.active = false;
                    }
                }
            }
        });
    };
    PopupDiemDanh1.prototype.setInfo = function () {
        this.lbResultDice.node.active = false;
        this.lbRewardNormal.node.active = false;
        this.lbBonusDiemDanh.node.active = false;
        this.lbBonusVip.node.active = false;
        this.lbTotal.node.active = false;
        this.animDice1.node.active = false;
        this.animDice2.node.active = false;
        this.animDice3.node.active = false;
        this.animBox.setAnimation(0, 'normal', true);
        this.lbBonusVip.node.active = this.lbBonusDiemDanh.node.active = this.lbResultDice.node.active = this.lbRewardNormal.node.active = this.lbTotal.node.active = false;
        this.animChip.node.active = false;
        this.loadData();
        this.setHistory();
        for (var i = 0; i < 7; i++) {
            this.listLbBonus[i].node.active = false;
            this.listDot[i].active = false;
        }
    };
    PopupDiemDanh1.prototype.onClickReceive = function () {
        //
        var _this = this;
        this.btnSpin.getComponentInChildren(sp.Skeleton).node.color = cc.Color.GRAY;
        this.btnSpin.interactable = false;
        // let res = JSON.parse('{"success":true,"errorCode":"0","message":null,"statistic":null,"totalRecords":0,"data":{"id":0,"attend_id":1,"nick_name":"ChiLynDay","date_attend":"2021-09-23 12:25:26","consecutive":1,"bonus_basic":8400,"bonus_consecutive":840,"bonus_vip":0,"spin":"2-2-3","result":"2-2-3"}}');
        Http_1.default.get(Configs_1.default.App.API, { c: "2031", nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken, ac: "receive" }, function (err, res) {
            //  cc.log("Daily:" + JSON.stringify(res));
            if (res["success"] && res['data'] != null) {
                _this.setResult(res['data']['result'].split("-"));
                _this.lbRewardNormal.string = Utils_1.default.formatNumber(res['data']['bonus_basic']);
                _this.lbBonusDiemDanh.string = Utils_1.default.formatNumber(res['data']['bonus_consecutive']);
                _this.lbBonusVip.string = Utils_1.default.formatNumber(res['data']['bonus_vip']);
                _this.lbTotal.string = Utils_1.default.formatNumber(res['data']['bonus_vip'] + res['data']['bonus_basic'] + res['data']['bonus_consecutive']);
                Configs_1.default.Login.Coin += (res['data']['bonus_vip'] + res['data']['bonus_basic'] + res['data']['bonus_consecutive']);
                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                _this.currentProgress++;
                _this.setHistory();
            }
            else {
                App_1.default.instance.showToast(App_1.default.instance.getTextLang('txt_unknown_error1'));
            }
        });
    };
    PopupDiemDanh1.prototype.setResult = function (listDice) {
        var _this = this;
        this.animBox.setAnimation(0, "ban", true);
        this.animDice1.node.active = true;
        this.animDice2.node.active = true;
        this.animDice3.node.active = true;
        this.animDice1.setAnimation(0, "1_" + listDice[0], false);
        this.animDice2.setAnimation(0, "2_" + listDice[1], false);
        this.animDice3.setAnimation(0, "3_" + listDice[2], false);
        this.animDice3.setCompleteListener(function () {
            _this.animBox.setAnimation(0, "ban", true);
            _this.animBox.paused = true;
            _this.sprDice1.node.getComponent(cc.Animation).stop();
            _this.sprDice2.node.getComponent(cc.Animation).stop();
            _this.sprDice3.node.getComponent(cc.Animation).stop();
            _this.sprDice1.spriteFrame = _this.listSprDice[listDice[0] - 1];
            _this.sprDice2.spriteFrame = _this.listSprDice[listDice[1] - 1];
            _this.sprDice3.spriteFrame = _this.listSprDice[listDice[2] - 1];
            _this.lbResultDice.node.active = true;
            _this.lbResultDice.string = (parseInt(listDice[0]) + parseInt(listDice[1]) + parseInt(listDice[2])) + "";
            _this.effLabelResult();
        });
        this.sprDice1.node.getComponent(cc.Animation).play();
        this.sprDice2.node.getComponent(cc.Animation).play();
        this.sprDice3.node.getComponent(cc.Animation).play();
    };
    PopupDiemDanh1.prototype.effLabelResult = function () {
        var _this = this;
        var timeEff = 0.75;
        var effLb = TW().set({ scale: 5.0, opacity: 0 })
            .to(timeEff, { scale: 1.0, opacity: 255 }, { easing: cc.easing.sineIn });
        TW(this.node)
            .call(function () {
            _this.lbRewardNormal.node.active = true;
            effLb.clone(_this.lbRewardNormal.node).start();
            _this.animGlow[0].node.active = true;
            _this.animGlow[0].setAnimation(0, "animation", false);
            _this.animGlow[0].node.x = _this.lbRewardNormal.node.x;
            _this.animGlow[0].setCompleteListener(function () {
                _this.animGlow[0].node.active = false;
            });
        })
            .delay(timeEff - 0.25)
            .call(function () {
            _this.lbBonusDiemDanh.node.active = true;
            effLb.clone(_this.lbBonusDiemDanh.node).start();
            _this.animGlow[1].node.active = true;
            _this.animGlow[1].setAnimation(0, "animation", false);
            _this.animGlow[1].node.x = _this.lbBonusDiemDanh.node.x;
            _this.animGlow[1].setCompleteListener(function () {
                _this.animGlow[0].node.active = false;
            });
        })
            .delay(timeEff - 0.25)
            .call(function () {
            _this.lbBonusVip.node.active = true;
            effLb.clone(_this.lbBonusVip.node).start();
            _this.animGlow[2].node.active = true;
            _this.animGlow[2].setAnimation(0, "animation", false);
            _this.animGlow[2].node.x = _this.lbBonusVip.node.x;
            _this.animGlow[2].setCompleteListener(function () {
                _this.animGlow[2].node.active = false;
            });
        })
            .delay(timeEff - 0.25)
            .call(function () {
            _this.lbTotal.node.active = true;
            effLb.clone(_this.lbTotal.node).start();
            _this.animGlow[3].node.active = true;
            _this.animGlow[3].setAnimation(0, "animation", false);
            _this.animGlow[3].node.x = _this.lbTotal.node.x;
            _this.animGlow[3].setCompleteListener(function () {
                _this.animGlow[3].node.active = false;
            });
        })
            .delay(timeEff)
            .call(function () {
            _this.animChip.node.active = true;
            _this.animChip.setAnimation(0, "animation", false);
        })
            .start();
    };
    PopupDiemDanh1.prototype.onClickGuide = function () {
        this.PopupGuide.show();
    };
    __decorate([
        property(sp.Skeleton)
    ], PopupDiemDanh1.prototype, "animBox", void 0);
    __decorate([
        property(sp.Skeleton)
    ], PopupDiemDanh1.prototype, "animChip", void 0);
    __decorate([
        property([sp.Skeleton])
    ], PopupDiemDanh1.prototype, "animGlow", void 0);
    __decorate([
        property([cc.Node])
    ], PopupDiemDanh1.prototype, "listDot", void 0);
    __decorate([
        property([cc.Node])
    ], PopupDiemDanh1.prototype, "listBgConsecutive", void 0);
    __decorate([
        property([cc.Label])
    ], PopupDiemDanh1.prototype, "listLbBonus", void 0);
    __decorate([
        property(sp.Skeleton)
    ], PopupDiemDanh1.prototype, "animDice1", void 0);
    __decorate([
        property(sp.Skeleton)
    ], PopupDiemDanh1.prototype, "animDice2", void 0);
    __decorate([
        property(sp.Skeleton)
    ], PopupDiemDanh1.prototype, "animDice3", void 0);
    __decorate([
        property(cc.Sprite)
    ], PopupDiemDanh1.prototype, "sprDice1", void 0);
    __decorate([
        property(cc.Sprite)
    ], PopupDiemDanh1.prototype, "sprDice2", void 0);
    __decorate([
        property(cc.Sprite)
    ], PopupDiemDanh1.prototype, "sprDice3", void 0);
    __decorate([
        property(cc.Sprite)
    ], PopupDiemDanh1.prototype, "sprProgress", void 0);
    __decorate([
        property(cc.Label)
    ], PopupDiemDanh1.prototype, "lbRewardNormal", void 0);
    __decorate([
        property(cc.Label)
    ], PopupDiemDanh1.prototype, "lbBonusDiemDanh", void 0);
    __decorate([
        property(cc.Label)
    ], PopupDiemDanh1.prototype, "lbBonusVip", void 0);
    __decorate([
        property(cc.Label)
    ], PopupDiemDanh1.prototype, "lbTotal", void 0);
    __decorate([
        property(cc.Label)
    ], PopupDiemDanh1.prototype, "lbResultDice", void 0);
    __decorate([
        property(cc.Button)
    ], PopupDiemDanh1.prototype, "btnSpin", void 0);
    __decorate([
        property(Dialog_1.default)
    ], PopupDiemDanh1.prototype, "PopupGuide", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], PopupDiemDanh1.prototype, "listSprDice", void 0);
    PopupDiemDanh1 = __decorate([
        ccclass
    ], PopupDiemDanh1);
    return PopupDiemDanh1;
}(Dialog_1.default));
exports.default = PopupDiemDanh1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5Qb3B1cERpZW1EYW5oLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUNoRCwrQ0FBMEM7QUFDMUMsMkNBQXNDO0FBQ3RDLHVFQUFrRTtBQUNsRSxpREFBNEM7QUFDNUMsK0NBQTBDO0FBRXBDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7QUFFbEI7SUFBNEMsa0NBQU07SUFBbEQ7UUFBQSxxRUE0UEM7UUF6UEcsYUFBTyxHQUFnQixJQUFJLENBQUM7UUFFNUIsY0FBUSxHQUFnQixJQUFJLENBQUM7UUFFN0IsY0FBUSxHQUFrQixFQUFFLENBQUM7UUFFN0IsYUFBTyxHQUFjLEVBQUUsQ0FBQztRQUV4Qix1QkFBaUIsR0FBYyxFQUFFLENBQUM7UUFFbEMsaUJBQVcsR0FBZSxFQUFFLENBQUM7UUFHN0IsZUFBUyxHQUFnQixJQUFJLENBQUM7UUFHOUIsZUFBUyxHQUFnQixJQUFJLENBQUM7UUFHOUIsZUFBUyxHQUFnQixJQUFJLENBQUM7UUFHOUIsY0FBUSxHQUFjLElBQUksQ0FBQztRQUczQixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRzNCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFHM0IsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFJOUIsb0JBQWMsR0FBYSxJQUFJLENBQUM7UUFHaEMscUJBQWUsR0FBYSxJQUFJLENBQUM7UUFFakMsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRzFCLGdCQUFVLEdBQVcsSUFBSSxDQUFDO1FBRzFC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SUFBSSxDQUFDLENBQUM7WUFDMUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzNCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDckQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNyRCxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3JELEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzlELEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzlELEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzlELEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDckMsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN4RyxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFMUIsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJ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RzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7cURBQ1E7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztxREFDUTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29EQUNPO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQ087SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFDTztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3VEQUNVO0lBSTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MERBQ2E7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyREFDYztJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNTO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ007SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt3REFDVztJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO21EQUNNO0lBRzFCO1FBREMsUUFBUSxDQUFDLGdCQUFNLENBQUM7c0RBQ1M7SUFHMUI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7dURBQ1E7SUF2RGxCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0E0UGxDO0lBQUQscUJBQUM7Q0E1UEQsQUE0UEMsQ0E1UDJDLGdCQUFNLEdBNFBqRDtrQkE1UG9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IEh0dHAgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0h0dHBcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBCcm9hZGNhc3RSZWNlaXZlciBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL0Jyb2FkY2FzdFJlY2VpdmVyXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCIuL1NjcmlwdC9jb21tb24vRGlhbG9nXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xudmFyIFRXID0gY2MudHdlZW47XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBEaWVtRGFuaDEgZXh0ZW5kcyBEaWFsb2cge1xuXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIGFuaW1Cb3g6IHNwLlNrZWxldG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXG4gICAgYW5pbUNoaXA6IHNwLlNrZWxldG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoW3NwLlNrZWxldG9uXSlcbiAgICBhbmltR2xvdzogc3AuU2tlbGV0b25bXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXG4gICAgbGlzdERvdDogY2MuTm9kZVtdID0gW107XG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcbiAgICBsaXN0QmdDb25zZWN1dGl2ZTogY2MuTm9kZVtdID0gW107XG4gICAgQHByb3BlcnR5KFtjYy5MYWJlbF0pXG4gICAgbGlzdExiQm9udXM6IGNjLkxhYmVsW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcbiAgICBhbmltRGljZTE6IHNwLlNrZWxldG9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcbiAgICBhbmltRGljZTI6IHNwLlNrZWxldG9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcbiAgICBhbmltRGljZTM6IHNwLlNrZWxldG9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgc3ByRGljZTE6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHNwckRpY2UyOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBzcHJEaWNlMzogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgc3ByUHJvZ3Jlc3M6IGNjLlNwcml0ZSA9IG51bGw7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYlJld2FyZE5vcm1hbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiQm9udXNEaWVtRGFuaDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkJvbnVzVmlwOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiVG90YWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJSZXN1bHREaWNlOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG5TcGluOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KERpYWxvZylcbiAgICBQb3B1cEd1aWRlOiBEaWFsb2cgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgbGlzdFNwckRpY2U6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICAvLyBvbkxvYWQgKCkge31cbiAgICBsaXN0RmlsbFJhbmdlID0gWzAuMSwgMC4yMSwgMC4zNjUsIDAuNTMsIDAuNjgsIDAuODUsIDEuMF07XG4gICAgbGlzdFBvc0NoaXAgPSBbLTI1MywgLTE2NCwgLTgzLCAwLCA4MywgMTY0LCAyNTNdO1xuICAgIGN1cnJlbnRQcm9ncmVzcyA9IDA7XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuYW5pbUNoaXAuc2V0Q29tcGxldGVMaXN0ZW5lcigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFuaW1DaGlwLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICB0aGlzLnNldEluZm8oKTtcbiAgICB9XG4gICAgbG9hZERhdGEoKSB7XG4gICAgICAgIC8vICBjYy5sb2coXCJsb2FkRGF0YVwiKTtcbiAgICAgICAgSHR0cC5nZXQoQ29uZmlncy5BcHAuQVBJLCB7IGM6IFwiMjAzMVwiLCBubjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgYXQ6IENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4sIGFjOiBcImdldFwiIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkRJRU1EQU5IOlwiLCByZXMpO1xuICAgICAgICAgICAgaWYgKHJlc1tcInN1Y2Nlc3NcIl0gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuU3Bpbi5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuU3Bpbi5ub2RlLmNoaWxkcmVuWzBdLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuZ2V0Q2hpbGRCeU5hbWUoJ3Jlc3VsdENvbnRhaW5lcicpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuZ2V0Q2hpbGRCeU5hbWUoJ2xiSW5mbycpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5TcGluLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuU3Bpbi5ub2RlLmNoaWxkcmVuWzBdLmNvbG9yID0gY2MuQ29sb3IuR1JBWTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5nZXRDaGlsZEJ5TmFtZSgncmVzdWx0Q29udGFpbmVyJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuZ2V0Q2hpbGRCeU5hbWUoJ2xiSW5mbycpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzWydkYXRhJ10gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFByb2dyZXNzID0gcGFyc2VJbnQocmVzWydkYXRhJ10pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRQcm9ncmVzcyA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc3ByQ2hpcFRvZGF5Lm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByUHJvZ3Jlc3MuZmlsbFJhbmdlID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwclByb2dyZXNzLmZpbGxSYW5nZSA9IHRoaXMubGlzdEZpbGxSYW5nZVt0aGlzLmN1cnJlbnRQcm9ncmVzcyAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNwckNoaXBUb2RheS5ub2RlLnggPSB0aGlzLmxpc3RQb3NDaGlwW3RoaXMuY3VycmVudFByb2dyZXNzIC0gMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2V0SGlzdG9yeSgpIHtcbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHsgYzogXCIyMDMxXCIsIG5uOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBhdDogQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbiwgYWM6IFwiaGlzdG9yeVwiIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgLy8gcmVzID0gSlNPTi5wYXJzZSgne1wic3VjY2Vzc1wiOnRydWUsXCJlcnJvckNvZGVcIjpcIjBcIixcIm1lc3NhZ2VcIjpudWxsLFwic3RhdGlzdGljXCI6bnVsbCxcInRvdGFsUmVjb3Jkc1wiOjAsXCJkYXRhXCI6W3tcImRhdGVcIjpcIjIwMjEtMTAtMjdcIixcInJhdGlvQm9udXNcIjowLFwiY29uc2VjdXRpdmVcIjowfSx7XCJkYXRlXCI6XCIyMDIxLTEwLTI4XCIsXCJyYXRpb0JvbnVzXCI6MCxcImNvbnNlY3V0aXZlXCI6MX0se1wiZGF0ZVwiOlwiMjAyMS0xMC0yOVwiLFwicmF0aW9Cb251c1wiOjEwLFwiY29uc2VjdXRpdmVcIjoyfSx7XCJkYXRlXCI6XCIyMDIxLTEwLTMwXCIsXCJyYXRpb0JvbnVzXCI6MCxcImNvbnNlY3V0aXZlXCI6MH0se1wiZGF0ZVwiOlwiMjAyMS0xMC0zMVwiLFwicmF0aW9Cb251c1wiOjAsXCJjb25zZWN1dGl2ZVwiOjF9LHtcImRhdGVcIjpcIjIwMjEtMTEtMDFcIixcInJhdGlvQm9udXNcIjoxMCxcImNvbnNlY3V0aXZlXCI6Mn0se1wiZGF0ZVwiOlwiMjAyMS0xMS0wMlwiLFwicmF0aW9Cb251c1wiOjIwLFwiY29uc2VjdXRpdmVcIjozfV19Jyk7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgaWYgKHJlc1tcInN1Y2Nlc3NcIl0gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhSGlzID0gcmVzWydkYXRhJ107XG4gICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhkYXRhSGlzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhSGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhSGlzW2ldWydjb25zZWN1dGl2ZSddICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERvdFtpXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0TGJCb251c1tpXS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RMYkJvbnVzW2ldLnN0cmluZyA9IFwiK1wiICsgZGF0YUhpc1tpXVsncmF0aW9Cb251cyddICsgXCIlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IGRhdGFIaXMubGVuZ3RoIC0gMSAmJiBkYXRhSGlzW2kgKyAxXVsnY29uc2VjdXRpdmUnXSA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RCZ0NvbnNlY3V0aXZlW2ldLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3REb3RbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RMYkJvbnVzW2ldLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzZXRJbmZvKCkge1xuICAgICAgICB0aGlzLmxiUmVzdWx0RGljZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxiUmV3YXJkTm9ybWFsLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGJCb251c0RpZW1EYW5oLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGJCb251c1ZpcC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxiVG90YWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hbmltRGljZTEubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hbmltRGljZTIubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hbmltRGljZTMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hbmltQm94LnNldEFuaW1hdGlvbigwLCAnbm9ybWFsJywgdHJ1ZSk7XG4gICAgICAgIHRoaXMubGJCb251c1ZpcC5ub2RlLmFjdGl2ZSA9IHRoaXMubGJCb251c0RpZW1EYW5oLm5vZGUuYWN0aXZlID0gdGhpcy5sYlJlc3VsdERpY2Uubm9kZS5hY3RpdmUgPSB0aGlzLmxiUmV3YXJkTm9ybWFsLm5vZGUuYWN0aXZlID0gdGhpcy5sYlRvdGFsLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYW5pbUNoaXAubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgICAgICB0aGlzLnNldEhpc3RvcnkoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubGlzdExiQm9udXNbaV0ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubGlzdERvdFtpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkNsaWNrUmVjZWl2ZSgpIHtcbiAgICAgICAgLy9cblxuICAgICAgICB0aGlzLmJ0blNwaW4uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihzcC5Ta2VsZXRvbikubm9kZS5jb2xvciA9IGNjLkNvbG9yLkdSQVk7XG4gICAgICAgIHRoaXMuYnRuU3Bpbi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgLy8gbGV0IHJlcyA9IEpTT04ucGFyc2UoJ3tcInN1Y2Nlc3NcIjp0cnVlLFwiZXJyb3JDb2RlXCI6XCIwXCIsXCJtZXNzYWdlXCI6bnVsbCxcInN0YXRpc3RpY1wiOm51bGwsXCJ0b3RhbFJlY29yZHNcIjowLFwiZGF0YVwiOntcImlkXCI6MCxcImF0dGVuZF9pZFwiOjEsXCJuaWNrX25hbWVcIjpcIkNoaUx5bkRheVwiLFwiZGF0ZV9hdHRlbmRcIjpcIjIwMjEtMDktMjMgMTI6MjU6MjZcIixcImNvbnNlY3V0aXZlXCI6MSxcImJvbnVzX2Jhc2ljXCI6ODQwMCxcImJvbnVzX2NvbnNlY3V0aXZlXCI6ODQwLFwiYm9udXNfdmlwXCI6MCxcInNwaW5cIjpcIjItMi0zXCIsXCJyZXN1bHRcIjpcIjItMi0zXCJ9fScpO1xuICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHsgYzogXCIyMDMxXCIsIG5uOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBhdDogQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbiwgYWM6IFwicmVjZWl2ZVwiIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkRhaWx5OlwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICBpZiAocmVzW1wic3VjY2Vzc1wiXSAmJiByZXNbJ2RhdGEnXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRSZXN1bHQocmVzWydkYXRhJ11bJ3Jlc3VsdCddLnNwbGl0KFwiLVwiKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sYlJld2FyZE5vcm1hbC5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIocmVzWydkYXRhJ11bJ2JvbnVzX2Jhc2ljJ10pO1xuICAgICAgICAgICAgICAgIHRoaXMubGJCb251c0RpZW1EYW5oLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihyZXNbJ2RhdGEnXVsnYm9udXNfY29uc2VjdXRpdmUnXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sYkJvbnVzVmlwLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihyZXNbJ2RhdGEnXVsnYm9udXNfdmlwJ10pO1xuICAgICAgICAgICAgICAgIHRoaXMubGJUb3RhbC5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIocmVzWydkYXRhJ11bJ2JvbnVzX3ZpcCddICsgcmVzWydkYXRhJ11bJ2JvbnVzX2Jhc2ljJ10gKyByZXNbJ2RhdGEnXVsnYm9udXNfY29uc2VjdXRpdmUnXSk7XG4gICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luICs9IChyZXNbJ2RhdGEnXVsnYm9udXNfdmlwJ10gKyByZXNbJ2RhdGEnXVsnYm9udXNfYmFzaWMnXSArIHJlc1snZGF0YSddWydib251c19jb25zZWN1dGl2ZSddKTtcbiAgICAgICAgICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFByb2dyZXNzKys7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRIaXN0b3J5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Vua25vd25fZXJyb3IxJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2V0UmVzdWx0KGxpc3REaWNlKSB7XG4gICAgICAgIHRoaXMuYW5pbUJveC5zZXRBbmltYXRpb24oMCwgXCJiYW5cIiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuYW5pbURpY2UxLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbmltRGljZTIubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmFuaW1EaWNlMy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYW5pbURpY2UxLnNldEFuaW1hdGlvbigwLCBcIjFfXCIgKyBsaXN0RGljZVswXSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmFuaW1EaWNlMi5zZXRBbmltYXRpb24oMCwgXCIyX1wiICsgbGlzdERpY2VbMV0sIGZhbHNlKTtcbiAgICAgICAgdGhpcy5hbmltRGljZTMuc2V0QW5pbWF0aW9uKDAsIFwiM19cIiArIGxpc3REaWNlWzJdLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuYW5pbURpY2UzLnNldENvbXBsZXRlTGlzdGVuZXIoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmltQm94LnNldEFuaW1hdGlvbigwLCBcImJhblwiLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuYW5pbUJveC5wYXVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zcHJEaWNlMS5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMuc3ByRGljZTIubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5zdG9wKCk7XG4gICAgICAgICAgICB0aGlzLnNwckRpY2UzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikuc3RvcCgpO1xuICAgICAgICAgICAgdGhpcy5zcHJEaWNlMS5zcHJpdGVGcmFtZSA9IHRoaXMubGlzdFNwckRpY2VbbGlzdERpY2VbMF0gLSAxXTtcbiAgICAgICAgICAgIHRoaXMuc3ByRGljZTIuc3ByaXRlRnJhbWUgPSB0aGlzLmxpc3RTcHJEaWNlW2xpc3REaWNlWzFdIC0gMV07XG4gICAgICAgICAgICB0aGlzLnNwckRpY2UzLnNwcml0ZUZyYW1lID0gdGhpcy5saXN0U3ByRGljZVtsaXN0RGljZVsyXSAtIDFdO1xuICAgICAgICAgICAgdGhpcy5sYlJlc3VsdERpY2Uubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sYlJlc3VsdERpY2Uuc3RyaW5nID0gKHBhcnNlSW50KGxpc3REaWNlWzBdKSArIHBhcnNlSW50KGxpc3REaWNlWzFdKSArIHBhcnNlSW50KGxpc3REaWNlWzJdKSkgKyBcIlwiO1xuICAgICAgICAgICAgdGhpcy5lZmZMYWJlbFJlc3VsdCgpO1xuXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc3ByRGljZTEubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XG4gICAgICAgIHRoaXMuc3ByRGljZTIubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XG4gICAgICAgIHRoaXMuc3ByRGljZTMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XG4gICAgfVxuXG4gICAgZWZmTGFiZWxSZXN1bHQoKSB7XG4gICAgICAgIGxldCB0aW1lRWZmID0gMC43NTtcbiAgICAgICAgbGV0IGVmZkxiID0gVFcoKS5zZXQoeyBzY2FsZTogNS4wLCBvcGFjaXR5OiAwIH0pXG4gICAgICAgICAgICAudG8odGltZUVmZiwgeyBzY2FsZTogMS4wLCBvcGFjaXR5OiAyNTUgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lSW4gfSk7XG4gICAgICAgIFRXKHRoaXMubm9kZSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxiUmV3YXJkTm9ybWFsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBlZmZMYi5jbG9uZSh0aGlzLmxiUmV3YXJkTm9ybWFsLm5vZGUpLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltR2xvd1swXS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltR2xvd1swXS5zZXRBbmltYXRpb24oMCwgXCJhbmltYXRpb25cIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbUdsb3dbMF0ubm9kZS54ID0gdGhpcy5sYlJld2FyZE5vcm1hbC5ub2RlLng7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltR2xvd1swXS5zZXRDb21wbGV0ZUxpc3RlbmVyKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltR2xvd1swXS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZGVsYXkodGltZUVmZiAtIDAuMjUpXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYkJvbnVzRGllbURhbmgubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGVmZkxiLmNsb25lKHRoaXMubGJCb251c0RpZW1EYW5oLm5vZGUpLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltR2xvd1sxXS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltR2xvd1sxXS5zZXRBbmltYXRpb24oMCwgXCJhbmltYXRpb25cIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbUdsb3dbMV0ubm9kZS54ID0gdGhpcy5sYkJvbnVzRGllbURhbmgubm9kZS54O1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbUdsb3dbMV0uc2V0Q29tcGxldGVMaXN0ZW5lcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbUdsb3dbMF0ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5kZWxheSh0aW1lRWZmIC0gMC4yNSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxiQm9udXNWaXAubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGVmZkxiLmNsb25lKHRoaXMubGJCb251c1ZpcC5ub2RlKS5zdGFydCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbUdsb3dbMl0ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbUdsb3dbMl0uc2V0QW5pbWF0aW9uKDAsIFwiYW5pbWF0aW9uXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1HbG93WzJdLm5vZGUueCA9IHRoaXMubGJCb251c1ZpcC5ub2RlLng7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltR2xvd1syXS5zZXRDb21wbGV0ZUxpc3RlbmVyKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltR2xvd1syXS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmRlbGF5KHRpbWVFZmYgLSAwLjI1KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubGJUb3RhbC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZWZmTGIuY2xvbmUodGhpcy5sYlRvdGFsLm5vZGUpLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltR2xvd1szXS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltR2xvd1szXS5zZXRBbmltYXRpb24oMCwgXCJhbmltYXRpb25cIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbUdsb3dbM10ubm9kZS54ID0gdGhpcy5sYlRvdGFsLm5vZGUueDtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1HbG93WzNdLnNldENvbXBsZXRlTGlzdGVuZXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1HbG93WzNdLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZGVsYXkodGltZUVmZilcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1DaGlwLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1DaGlwLnNldEFuaW1hdGlvbigwLCBcImFuaW1hdGlvblwiLCBmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuICAgIG9uQ2xpY2tHdWlkZSgpIHtcbiAgICAgICAgdGhpcy5Qb3B1cEd1aWRlLnNob3coKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19