"use strict";
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