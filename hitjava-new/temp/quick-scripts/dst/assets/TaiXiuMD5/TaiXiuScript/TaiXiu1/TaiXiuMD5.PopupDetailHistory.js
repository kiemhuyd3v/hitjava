
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TaiXiuMD5/TaiXiuScript/TaiXiu1/TaiXiuMD5.PopupDetailHistory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '39378q1n2RM/4+wiJCObtvd', 'TaiXiuMD5.PopupDetailHistory');
// TaiXiuMD5/TaiXiuScript/TaiXiu1/TaiXiuMD5.PopupDetailHistory.ts

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
var Http_1 = require("../../../Loading/src/Http");
var Configs_1 = require("../../../Loading/src/Configs");
var TaiXiuMD5_TaiXiuMiniController_1 = require("./TaiXiuMD5.TaiXiuMiniController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupDetailHistory = /** @class */ (function (_super) {
    __extends(PopupDetailHistory, _super);
    function PopupDetailHistory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lblSession = null;
        _this.lblTime = null;
        _this.lblPage = null;
        _this.lblTotalBetTai = null;
        _this.lblTotalBetXiu = null;
        _this.lblTotalRefundTai = null;
        _this.lblTotalRefundXiu = null;
        _this.sfDices = [];
        _this.sfTai = null;
        _this.sfXiu = null;
        _this.sprDice1 = null;
        _this.sprDice2 = null;
        _this.sprDice3 = null;
        _this.sprResult = null;
        _this.itemTemplate = null;
        _this.items = [];
        _this.inited = false;
        _this.session = 0;
        _this.page = 1;
        _this.totalPage = 1;
        _this.historiesTai = [];
        _this.historiesXiu = [];
        return _this;
    }
    PopupDetailHistory.prototype.showDetail = function () {
        this.session = TaiXiuMD5_TaiXiuMiniController_1.default.instance.histories[TaiXiuMD5_TaiXiuMiniController_1.default.instance.histories.length - 1].session;
        this.show();
    };
    PopupDetailHistory.prototype.show = function () {
        _super.prototype.show.call(this);
        this.sprDice1.node.active = false;
        this.sprDice2.node.active = false;
        this.sprDice3.node.active = false;
        this.sprResult.node.active = false;
        this.lblSession.string = "Phiên: #" + this.session;
        this.lblTime.string = "";
        if (this.inited) {
            for (var i = 0; i < this.items.length; i++) {
                this.items[i].active = false;
            }
            return;
        }
        this.itemTemplate.active = false;
        for (var i = 0; i < 10; i++) {
            var node = cc.instantiate(this.itemTemplate);
            node.parent = this.itemTemplate.parent;
            node.active = false;
            this.items.push(node);
        }
        this.inited = true;
    };
    PopupDetailHistory.prototype._onShowed = function () {
        _super.prototype._onShowed.call(this);
        this.loadData();
    };
    PopupDetailHistory.prototype.loadData = function () {
        var _this = this;
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].active = false;
        }
        this.sprDice1.node.active = false;
        this.sprDice2.node.active = false;
        this.sprDice3.node.active = false;
        this.sprResult.node.active = false;
        this.lblSession.string = "Phiên: #" + this.session;
        this.lblTime.string = "";
        Http_1.default.get(Configs_1.default.App.API, { "c": 102, "rid": this.session, "mt": Configs_1.default.App.MONEY_TYPE, "type": "md5" }, function (err, res) {
            if (err != null)
                return;
            _this.historiesTai = [];
            _this.historiesXiu = [];
            if (res.success && res["resultTX"] !== null) {
                for (var i = 0; i < res["transactions"].length; i++) {
                    var itemData = res["transactions"][i];
                    if (itemData["betSide"] === 1) {
                        _this.historiesTai.push(itemData);
                    }
                    else {
                        _this.historiesXiu.push(itemData);
                    }
                }
                for (var i = 0; i < _this.items.length; i++) {
                    _this.items[i].active = false;
                }
                _this.page = 1;
                _this.totalPage = _this.historiesXiu.length > _this.historiesTai.length ? _this.historiesXiu.length : _this.historiesTai.length;
                _this.totalPage = Math.ceil(_this.totalPage / _this.items.length);
                _this.lblPage.string = _this.page + "/" + _this.totalPage;
                _this.lblSession.string = "Phiên: #" + res["resultTX"]["referenceId"];
                _this.lblTime.string = res["resultTX"]["timestamp"];
                _this.lblTotalBetTai.string = Utils_1.default.formatNumber(res["resultTX"]["totalTai"]);
                _this.lblTotalBetXiu.string = Utils_1.default.formatNumber(res["resultTX"]["totalXiu"]);
                _this.lblTotalRefundTai.string = Utils_1.default.formatNumber(res["resultTX"]["totalRefundTai"]);
                _this.lblTotalRefundXiu.string = Utils_1.default.formatNumber(res["resultTX"]["totalRefundXiu"]);
                _this.sprDice1.spriteFrame = _this.sfDices[res["resultTX"]["dice1"]];
                _this.sprDice1.node.active = true;
                _this.sprDice2.spriteFrame = _this.sfDices[res["resultTX"]["dice2"]];
                _this.sprDice2.node.active = true;
                _this.sprDice3.spriteFrame = _this.sfDices[res["resultTX"]["dice3"]];
                _this.sprDice3.node.active = true;
                _this.sprResult.spriteFrame = res["resultTX"]["result"] == 1 ? _this.sfTai : _this.sfXiu;
                _this.sprResult.node.active = true;
                _this.loadDataPage();
            }
        });
    };
    PopupDetailHistory.prototype.loadDataPage = function () {
        for (var i = 0; i < this.items.length; i++) {
            var idx = (this.page - 1) * this.items.length + i;
            var item = this.items[i];
            item.active = true;
            if (idx < this.historiesTai.length) {
                var itemData = this.historiesTai[idx];
                item.getChildByName("Time").getComponent(cc.Label).string = (itemData["inputTime"] < 10 ? "00:0" : "00:") + itemData["inputTime"];
                item.getChildByName("Account").getComponent(cc.Label).string = itemData["username"];
                item.getChildByName("Refund").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["refund"]);
                item.getChildByName("Bet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["betValue"]);
            }
            else {
                item.getChildByName("Time").getComponent(cc.Label).string = "";
                item.getChildByName("Account").getComponent(cc.Label).string = "";
                item.getChildByName("Refund").getComponent(cc.Label).string = "";
                item.getChildByName("Bet").getComponent(cc.Label).string = "";
            }
            if (idx < this.historiesXiu.length) {
                var itemData = this.historiesXiu[idx];
                item.getChildByName("Time2").getComponent(cc.Label).string = (itemData["inputTime"] < 10 ? "00:0" : "00:") + itemData["inputTime"];
                item.getChildByName("Account2").getComponent(cc.Label).string = itemData["username"];
                item.getChildByName("Refund2").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["refund"]);
                item.getChildByName("Bet2").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["betValue"]);
            }
            else {
                item.getChildByName("Time2").getComponent(cc.Label).string = "";
                item.getChildByName("Account2").getComponent(cc.Label).string = "";
                item.getChildByName("Refund2").getComponent(cc.Label).string = "";
                item.getChildByName("Bet2").getComponent(cc.Label).string = "";
            }
        }
        this.lblPage.string = this.page + "/" + this.totalPage;
    };
    PopupDetailHistory.prototype.actNextPage = function () {
        this.page++;
        if (this.page > this.totalPage)
            this.page = this.totalPage;
        this.loadDataPage();
    };
    PopupDetailHistory.prototype.actPrevPage = function () {
        this.page--;
        if (this.page < 1)
            this.page = 1;
        this.loadDataPage();
    };
    PopupDetailHistory.prototype.actNextSession = function () {
        this.session++;
        if (this.session > TaiXiuMD5_TaiXiuMiniController_1.default.instance.histories[TaiXiuMD5_TaiXiuMiniController_1.default.instance.histories.length - 1].session) {
            this.session = TaiXiuMD5_TaiXiuMiniController_1.default.instance.histories[TaiXiuMD5_TaiXiuMiniController_1.default.instance.histories.length - 1].session;
            return;
        }
        this.loadData();
    };
    PopupDetailHistory.prototype.actPrevSession = function () {
        this.session--;
        this.loadData();
    };
    __decorate([
        property(cc.Label)
    ], PopupDetailHistory.prototype, "lblSession", void 0);
    __decorate([
        property(cc.Label)
    ], PopupDetailHistory.prototype, "lblTime", void 0);
    __decorate([
        property(cc.Label)
    ], PopupDetailHistory.prototype, "lblPage", void 0);
    __decorate([
        property(cc.Label)
    ], PopupDetailHistory.prototype, "lblTotalBetTai", void 0);
    __decorate([
        property(cc.Label)
    ], PopupDetailHistory.prototype, "lblTotalBetXiu", void 0);
    __decorate([
        property(cc.Label)
    ], PopupDetailHistory.prototype, "lblTotalRefundTai", void 0);
    __decorate([
        property(cc.Label)
    ], PopupDetailHistory.prototype, "lblTotalRefundXiu", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], PopupDetailHistory.prototype, "sfDices", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], PopupDetailHistory.prototype, "sfTai", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], PopupDetailHistory.prototype, "sfXiu", void 0);
    __decorate([
        property(cc.Sprite)
    ], PopupDetailHistory.prototype, "sprDice1", void 0);
    __decorate([
        property(cc.Sprite)
    ], PopupDetailHistory.prototype, "sprDice2", void 0);
    __decorate([
        property(cc.Sprite)
    ], PopupDetailHistory.prototype, "sprDice3", void 0);
    __decorate([
        property(cc.Sprite)
    ], PopupDetailHistory.prototype, "sprResult", void 0);
    __decorate([
        property(cc.Node)
    ], PopupDetailHistory.prototype, "itemTemplate", void 0);
    PopupDetailHistory = __decorate([
        ccclass
    ], PopupDetailHistory);
    return PopupDetailHistory;
}(Dialog_1.default));
exports.default = PopupDetailHistory;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGFpWGl1TUQ1XFxUYWlYaXVTY3JpcHRcXFRhaVhpdTFcXFRhaVhpdU1ENS5Qb3B1cERldGFpbEhpc3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQXFFO0FBQ3JFLHdFQUFtRTtBQUNuRSxrREFBNkM7QUFDN0Msd0RBQW1EO0FBQ25ELG1GQUFvRTtBQUU5RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFnRCxzQ0FBTTtJQUF0RDtRQUFBLHFFQW9NQztRQWxNRyxnQkFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFHekIsb0JBQWMsR0FBYSxJQUFJLENBQUM7UUFFaEMsb0JBQWMsR0FBYSxJQUFJLENBQUM7UUFHaEMsdUJBQWlCLEdBQWEsSUFBSSxDQUFDO1FBRW5DLHVCQUFpQixHQUFhLElBQUksQ0FBQztRQUduQyxhQUFPLEdBQXFCLEVBQUUsQ0FBQztRQUUvQixXQUFLLEdBQW1CLElBQUksQ0FBQztRQUU3QixXQUFLLEdBQW1CLElBQUksQ0FBQztRQUc3QixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFjLElBQUksQ0FBQztRQUUzQixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRzVCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRXJCLFdBQUssR0FBYyxFQUFFLENBQUM7UUFDdEIsWUFBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGFBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGtCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLGtCQUFZLEdB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QUFDLFdBQVcsQ0FBQyxDQUFDO3VEQUNJO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7cURBQ0k7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztxREFDSTtJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dEQUNPO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0RBQ087SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3REFDTztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lEQUNRO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NERBQ1c7SUFuQ1osa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0FvTXRDO0lBQUQseUJBQUM7Q0FwTUQsQUFvTUMsQ0FwTStDLGdCQUFNLEdBb01yRDtrQkFwTW9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWFsb2cgZnJvbSBcIi4uLy4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vRGlhbG9nXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vVXRpbHNcIjtcbmltcG9ydCBIdHRwIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL3NyYy9IdHRwXCI7XG5pbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IFRhaVhpdU1pbmlDb250cm9sbGVyIGZyb20gXCIuL1RhaVhpdU1ENS5UYWlYaXVNaW5pQ29udHJvbGxlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBEZXRhaWxIaXN0b3J5IGV4dGVuZHMgRGlhbG9nIHtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsU2Vzc2lvbjogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxUaW1lOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFBhZ2U6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxUb3RhbEJldFRhaTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxUb3RhbEJldFhpdTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFRvdGFsUmVmdW5kVGFpOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFRvdGFsUmVmdW5kWGl1OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBzZkRpY2VzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNmVGFpOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNmWGl1OiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHNwckRpY2UxOiBjYy5TcHJpdGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgc3ByRGljZTI6IGNjLlNwcml0ZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBzcHJEaWNlMzogY2MuU3ByaXRlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHNwclJlc3VsdDogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGl0ZW1UZW1wbGF0ZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIGl0ZW1zOiBjYy5Ob2RlW10gPSBbXTtcbiAgICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgc2Vzc2lvbjogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHBhZ2U6IG51bWJlciA9IDE7XG4gICAgcHJpdmF0ZSB0b3RhbFBhZ2U6IG51bWJlciA9IDE7XG4gICAgcHJpdmF0ZSBoaXN0b3JpZXNUYWkgPSBbXTtcbiAgICBwcml2YXRlIGhpc3Rvcmllc1hpdSA9IFtdO1xuXG4gICAgc2hvd0RldGFpbCgpIHtcbiAgICAgICAgdGhpcy5zZXNzaW9uID0gVGFpWGl1TWluaUNvbnRyb2xsZXIuaW5zdGFuY2UuaGlzdG9yaWVzW1RhaVhpdU1pbmlDb250cm9sbGVyLmluc3RhbmNlLmhpc3Rvcmllcy5sZW5ndGggLSAxXS5zZXNzaW9uO1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICBzdXBlci5zaG93KCk7XG5cbiAgICAgICAgdGhpcy5zcHJEaWNlMS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNwckRpY2UyLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3ByRGljZTMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zcHJSZXN1bHQubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYmxTZXNzaW9uLnN0cmluZyA9IFwiUGhpw6puOiAjXCIgKyB0aGlzLnNlc3Npb247XG4gICAgICAgIHRoaXMubGJsVGltZS5zdHJpbmcgPSBcIlwiO1xuXG4gICAgICAgIGlmICh0aGlzLmluaXRlZCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbVRlbXBsYXRlKTtcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5pdGVtVGVtcGxhdGUucGFyZW50O1xuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgX29uU2hvd2VkKCkge1xuICAgICAgICBzdXBlci5fb25TaG93ZWQoKTtcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZERhdGEoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5pdGVtc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNwckRpY2UxLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3ByRGljZTIubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zcHJEaWNlMy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNwclJlc3VsdC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxibFNlc3Npb24uc3RyaW5nID0gXCJQaGnDqm46ICNcIiArIHRoaXMuc2Vzc2lvbjtcbiAgICAgICAgdGhpcy5sYmxUaW1lLnN0cmluZyA9IFwiXCI7XG4gICAgICAgIEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSSwgeyBcImNcIjogMTAyLCBcInJpZFwiOiB0aGlzLnNlc3Npb24sIFwibXRcIjogQ29uZmlncy5BcHAuTU9ORVlfVFlQRSwgXCJ0eXBlXCI6XCJtZDVcIiB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIgIT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5oaXN0b3JpZXNUYWkgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuaGlzdG9yaWVzWGl1ID0gW107XG4gICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MgJiYgcmVzW1wicmVzdWx0VFhcIl0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc1tcInRyYW5zYWN0aW9uc1wiXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbURhdGEgPSByZXNbXCJ0cmFuc2FjdGlvbnNcIl1baV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtRGF0YVtcImJldFNpZGVcIl0gPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yaWVzVGFpLnB1c2goaXRlbURhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaXN0b3JpZXNYaXUucHVzaChpdGVtRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2UgPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMudG90YWxQYWdlID0gdGhpcy5oaXN0b3JpZXNYaXUubGVuZ3RoID4gdGhpcy5oaXN0b3JpZXNUYWkubGVuZ3RoID8gdGhpcy5oaXN0b3JpZXNYaXUubGVuZ3RoIDogdGhpcy5oaXN0b3JpZXNUYWkubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHRoaXMudG90YWxQYWdlID0gTWF0aC5jZWlsKHRoaXMudG90YWxQYWdlIC8gdGhpcy5pdGVtcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIHRoaXMubGJsUGFnZS5zdHJpbmcgPSB0aGlzLnBhZ2UgKyBcIi9cIiArIHRoaXMudG90YWxQYWdlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5sYmxTZXNzaW9uLnN0cmluZyA9IFwiUGhpw6puOiAjXCIgKyByZXNbXCJyZXN1bHRUWFwiXVtcInJlZmVyZW5jZUlkXCJdO1xuICAgICAgICAgICAgICAgIHRoaXMubGJsVGltZS5zdHJpbmcgPSByZXNbXCJyZXN1bHRUWFwiXVtcInRpbWVzdGFtcFwiXTtcbiAgICAgICAgICAgICAgICB0aGlzLmxibFRvdGFsQmV0VGFpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihyZXNbXCJyZXN1bHRUWFwiXVtcInRvdGFsVGFpXCJdKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxibFRvdGFsQmV0WGl1LnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihyZXNbXCJyZXN1bHRUWFwiXVtcInRvdGFsWGl1XCJdKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxibFRvdGFsUmVmdW5kVGFpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihyZXNbXCJyZXN1bHRUWFwiXVtcInRvdGFsUmVmdW5kVGFpXCJdKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxibFRvdGFsUmVmdW5kWGl1LnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihyZXNbXCJyZXN1bHRUWFwiXVtcInRvdGFsUmVmdW5kWGl1XCJdKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc3ByRGljZTEuc3ByaXRlRnJhbWUgPSB0aGlzLnNmRGljZXNbcmVzW1wicmVzdWx0VFhcIl1bXCJkaWNlMVwiXV07XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJEaWNlMS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJEaWNlMi5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZEaWNlc1tyZXNbXCJyZXN1bHRUWFwiXVtcImRpY2UyXCJdXTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwckRpY2UyLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwckRpY2UzLnNwcml0ZUZyYW1lID0gdGhpcy5zZkRpY2VzW3Jlc1tcInJlc3VsdFRYXCJdW1wiZGljZTNcIl1dO1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByRGljZTMubm9kZS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zcHJSZXN1bHQuc3ByaXRlRnJhbWUgPSByZXNbXCJyZXN1bHRUWFwiXVtcInJlc3VsdFwiXSA9PSAxID8gdGhpcy5zZlRhaSA6IHRoaXMuc2ZYaXU7XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJSZXN1bHQubm9kZS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkRGF0YVBhZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkRGF0YVBhZ2UoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGlkeCA9ICh0aGlzLnBhZ2UgLSAxKSAqIHRoaXMuaXRlbXMubGVuZ3RoICsgaTtcbiAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcy5pdGVtc1tpXTtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKGlkeCA8IHRoaXMuaGlzdG9yaWVzVGFpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtRGF0YSA9IHRoaXMuaGlzdG9yaWVzVGFpW2lkeF07XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlRpbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAoaXRlbURhdGFbXCJpbnB1dFRpbWVcIl0gPCAxMCA/IFwiMDA6MFwiIDogXCIwMDpcIikgKyBpdGVtRGF0YVtcImlucHV0VGltZVwiXTtcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiQWNjb3VudFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGl0ZW1EYXRhW1widXNlcm5hbWVcIl07XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlJlZnVuZFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcInJlZnVuZFwiXSk7XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkJldFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcImJldFZhbHVlXCJdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlRpbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJBY2NvdW50XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiUmVmdW5kXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiQmV0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlkeCA8IHRoaXMuaGlzdG9yaWVzWGl1Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtRGF0YSA9IHRoaXMuaGlzdG9yaWVzWGl1W2lkeF07XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlRpbWUyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKGl0ZW1EYXRhW1wiaW5wdXRUaW1lXCJdIDwgMTAgPyBcIjAwOjBcIiA6IFwiMDA6XCIpICsgaXRlbURhdGFbXCJpbnB1dFRpbWVcIl07XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkFjY291bnQyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaXRlbURhdGFbXCJ1c2VybmFtZVwiXTtcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiUmVmdW5kMlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcInJlZnVuZFwiXSk7XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkJldDJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoaXRlbURhdGFbXCJiZXRWYWx1ZVwiXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJUaW1lMlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkFjY291bnQyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiUmVmdW5kMlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkJldDJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubGJsUGFnZS5zdHJpbmcgPSB0aGlzLnBhZ2UgKyBcIi9cIiArIHRoaXMudG90YWxQYWdlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY3ROZXh0UGFnZSgpIHtcbiAgICAgICAgdGhpcy5wYWdlKys7XG4gICAgICAgIGlmICh0aGlzLnBhZ2UgPiB0aGlzLnRvdGFsUGFnZSkgdGhpcy5wYWdlID0gdGhpcy50b3RhbFBhZ2U7XG4gICAgICAgIHRoaXMubG9hZERhdGFQYWdlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFjdFByZXZQYWdlKCkge1xuICAgICAgICB0aGlzLnBhZ2UtLTtcbiAgICAgICAgaWYgKHRoaXMucGFnZSA8IDEpIHRoaXMucGFnZSA9IDE7XG4gICAgICAgIHRoaXMubG9hZERhdGFQYWdlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFjdE5leHRTZXNzaW9uKCkge1xuICAgICAgICB0aGlzLnNlc3Npb24rKztcbiAgICAgICAgaWYgKHRoaXMuc2Vzc2lvbiA+IFRhaVhpdU1pbmlDb250cm9sbGVyLmluc3RhbmNlLmhpc3Rvcmllc1tUYWlYaXVNaW5pQ29udHJvbGxlci5pbnN0YW5jZS5oaXN0b3JpZXMubGVuZ3RoIC0gMV0uc2Vzc2lvbikge1xuICAgICAgICAgICAgdGhpcy5zZXNzaW9uID0gVGFpWGl1TWluaUNvbnRyb2xsZXIuaW5zdGFuY2UuaGlzdG9yaWVzW1RhaVhpdU1pbmlDb250cm9sbGVyLmluc3RhbmNlLmhpc3Rvcmllcy5sZW5ndGggLSAxXS5zZXNzaW9uO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWN0UHJldlNlc3Npb24oKSB7XG4gICAgICAgIHRoaXMuc2Vzc2lvbi0tO1xuICAgICAgICB0aGlzLmxvYWREYXRhKCk7XG4gICAgfVxufVxuIl19