
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/PopupConfirmTransfer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bd358kl7C9GjJJLTr9+wzbE', 'PopupConfirmTransfer');
// Lobby/LobbyScript/PopupConfirmTransfer.ts

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
var Dialog_1 = require("./Script/common/Dialog");
var Utils_1 = require("./Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TYPE = {
    CASHIN: 0,
    CASHOUT: 1
};
var PopupConfirmTransfer = /** @class */ (function (_super) {
    __extends(PopupConfirmTransfer, _super);
    function PopupConfirmTransfer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lbNameAgency = null;
        _this.lbNickname = null;
        _this.lbUserBankName = null;
        _this.lbAgencyBankName = null;
        _this.lbUserAccountName = null;
        _this.lbBankNumber = null;
        _this.lbAmount = null;
        _this.lbContent = null;
        _this.titleContainer = null;
        // LIFE-CYCLE CALLBACKS:
        _this.type = 0;
        _this.dataCashIn = null;
        _this.dataCashOut = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    PopupConfirmTransfer.prototype.start = function () {
    };
    PopupConfirmTransfer.prototype.setInfoCashIn = function (data) {
        //  cc.log("setInfoCashIn:", data);
        this.lbUserBankName.node.active = true;
        this.lbContent.node.active = true;
        this.lbAgencyBankName.node.active = true;
        this.type = TYPE.CASHIN;
        this.dataCashIn = data;
        this.lbNameAgency.string = data['nameagent'];
        this.lbNickname.string = data['nickname'];
        this.lbUserBankName.string = data['usernamebank'];
        this.lbAgencyBankName.string = data['agencynamebank'];
        if (this.lbAgencyBankName.string.length > 20) {
            this.lbAgencyBankName.string = this.lbAgencyBankName.string.slice(0, 20) + "...";
        }
        this.lbBankNumber.string = data['bank_number'];
        this.lbAmount.string = Utils_1.default.formatNumber(data['amount']);
        this.lbContent.string = data['cid'];
        this.titleContainer.getChildByName('lbUserAccountName').active = false;
        this.titleContainer.getChildByName('lbAgencyBankName').active = true;
        this.titleContainer.getChildByName('lbBankNumber').active = true;
        this.titleContainer.getChildByName('Content').active = true;
        this.lbBankNumber.node.active = true;
    };
    PopupConfirmTransfer.prototype.setInfoCashOut = function (data) {
        this.type = TYPE.CASHOUT;
        this.dataCashOut = data;
        //  cc.log("setInfoCashOut:", data);
        this.titleContainer.getChildByName('lbUserAccountName').active = true;
        this.lbUserAccountName.node.active = true;
        this.lbNameAgency.string = data['nameagent'];
        this.lbNickname.string = data['nickname'];
        this.lbAmount.string = Utils_1.default.formatNumber(data['amount']);
        this.lbUserAccountName.string = data['useraccountname'];
        this.lbUserBankName.string = data['userbankname'];
        this.lbContent.node.active = false;
        this.lbAgencyBankName.node.active = false;
        this.titleContainer.getChildByName('lbAgencyBankName').active = false;
        this.titleContainer.getChildByName('lbBankNumber').active = false;
        this.titleContainer.getChildByName('Content').active = false;
        this.lbBankNumber.node.active = false;
    };
    PopupConfirmTransfer.prototype.onClickConfirm = function () {
        var _this = this;
        cc.log("TYPE TAB:" + this.type);
        if (this.type == TYPE.CASHIN) {
            cc.log("DataCassh IN=", this.dataCashIn);
            //api?c=2003&am=100000&code=367457&abn=2222&bc=TPB&cid=1122334455&nn=BigBird&at=123123&bn=1234",
            App_1.default.instance.showLoading(true);
            Http_1.default.get(Configs_1.default.App.API2, {
                "c": 2003,
                "am": this.dataCashIn['amount'],
                "nn": Configs_1.default.Login.Nickname,
                "at": Configs_1.default.Login.AccessToken,
                "code": this.dataCashIn['agencyID'],
                "cid": this.dataCashIn['cid'],
                "abn": this.dataCashIn['bank_number'],
                "bn": this.dataCashIn['userbanknumber'],
            }, function (err, res) {
                App_1.default.instance.showLoading(false);
                cc.log(res);
                if (res['success']) {
                    App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_request_cashin_success'));
                    _this.dismiss();
                }
                else {
                    App_1.default.instance.ShowAlertDialog(res['message']);
                    _this.dismiss();
                }
            });
        }
        else {
            cc.log("DataCassh=", this.dataCashOut);
            //api?c=2010&am=100000&code=367457&bc=TPB&nn=BigBird&at=123123&bn=1234",
            App_1.default.instance.showLoading(true);
            Http_1.default.get(Configs_1.default.App.API2, {
                "c": 2010,
                "am": this.dataCashOut['amount'],
                "nn": Configs_1.default.Login.Nickname,
                "at": Configs_1.default.Login.AccessToken,
                "code": this.dataCashOut['agencyID'],
                "bn": this.dataCashOut['userbanknumber'],
            }, function (err, res) {
                App_1.default.instance.showLoading(false);
                cc.log(res);
                if (res['success']) {
                    App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_request_cashin_success'));
                    _this.dismiss();
                }
                else {
                    App_1.default.instance.ShowAlertDialog(res['message']);
                    _this.dismiss();
                }
            });
        }
    };
    __decorate([
        property(cc.Label)
    ], PopupConfirmTransfer.prototype, "lbNameAgency", void 0);
    __decorate([
        property(cc.Label)
    ], PopupConfirmTransfer.prototype, "lbNickname", void 0);
    __decorate([
        property(cc.Label)
    ], PopupConfirmTransfer.prototype, "lbUserBankName", void 0);
    __decorate([
        property(cc.Label)
    ], PopupConfirmTransfer.prototype, "lbAgencyBankName", void 0);
    __decorate([
        property(cc.Label)
    ], PopupConfirmTransfer.prototype, "lbUserAccountName", void 0);
    __decorate([
        property(cc.Label)
    ], PopupConfirmTransfer.prototype, "lbBankNumber", void 0);
    __decorate([
        property(cc.Label)
    ], PopupConfirmTransfer.prototype, "lbAmount", void 0);
    __decorate([
        property(cc.Label)
    ], PopupConfirmTransfer.prototype, "lbContent", void 0);
    __decorate([
        property(cc.Node)
    ], PopupConfirmTransfer.prototype, "titleContainer", void 0);
    PopupConfirmTransfer = __decorate([
        ccclass
    ], PopupConfirmTransfer);
    return PopupConfirmTransfer;
}(Dialog_1.default));
exports.default = PopupConfirmTransfer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxQb3B1cENvbmZpcm1UcmFuc2Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxxREFBZ0Q7QUFDaEQsK0NBQTBDO0FBQzFDLDJDQUFzQztBQUN0QyxpREFBNEM7QUFDNUMsK0NBQTBDO0FBRXBDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLElBQUksSUFBSSxHQUFHO0lBQ1AsTUFBTSxFQUFFLENBQUM7SUFDVCxPQUFPLEVBQUUsQ0FBQztDQUNiLENBQUE7QUFFRDtJQUFrRCx3Q0FBTTtJQUF4RDtRQUFBLHFFQWtJQztRQS9IRyxrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5QixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixvQkFBYyxHQUFhLElBQUksQ0FBQztRQUVoQyxzQkFBZ0IsR0FBYSxJQUFJLENBQUM7UUFFbEMsdUJBQWlCLEdBQWEsSUFBSSxDQUFDO1FBRW5DLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRTlCLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUUvQix3QkFBd0I7UUFDeEIsVUFBSSxHQUFHLENBQUMsQ0FBQztRQUNELGdCQUFVLEdBQVEsSUFBSSxDQUFDO1FBQ3ZCLGlCQUFXLEdBQVEsSUFBSSxDQUFDOztRQXlHaEMsaUJBQWlCO0lBQ3JCLENBQUM7SUF6R0csZUFBZTtJQUVmLG9DQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0QsNENBQWEsR0FBYixVQUFjLElBQUk7UUFDZCxtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUks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QUUsQ0FBQyxJQUFJLENBQUM7Z0VBQ2E7SUFuQmQsb0JBQW9CO1FBRHhDLE9BQU87T0FDYSxvQkFBb0IsQ0FrSXhDO0lBQUQsMkJBQUM7Q0FsSUQsQUFrSUMsQ0FsSWlELGdCQUFNLEdBa0l2RDtrQkFsSW9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBIdHRwIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9IdHRwXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCIuL1NjcmlwdC9jb21tb24vRGlhbG9nXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xudmFyIFRZUEUgPSB7XG4gICAgQ0FTSElOOiAwLFxuICAgIENBU0hPVVQ6IDFcbn1cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cENvbmZpcm1UcmFuc2ZlciBleHRlbmRzIERpYWxvZyB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJOYW1lQWdlbmN5OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiTmlja25hbWU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJVc2VyQmFua05hbWU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJBZ2VuY3lCYW5rTmFtZTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYlVzZXJBY2NvdW50TmFtZTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkJhbmtOdW1iZXI6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJBbW91bnQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJDb250ZW50OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGl0bGVDb250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgdHlwZSA9IDA7XG4gICAgcHJpdmF0ZSBkYXRhQ2FzaEluOiBhbnkgPSBudWxsO1xuICAgIHByaXZhdGUgZGF0YUNhc2hPdXQ6IGFueSA9IG51bGw7XG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cbiAgICBzZXRJbmZvQ2FzaEluKGRhdGEpIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcInNldEluZm9DYXNoSW46XCIsIGRhdGEpO1xuICAgICAgICB0aGlzLmxiVXNlckJhbmtOYW1lLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sYkNvbnRlbnQubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxiQWdlbmN5QmFua05hbWUubm9kZS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMudHlwZSA9IFRZUEUuQ0FTSElOO1xuICAgICAgICB0aGlzLmRhdGFDYXNoSW4gPSBkYXRhO1xuICAgICAgICB0aGlzLmxiTmFtZUFnZW5jeS5zdHJpbmcgPSBkYXRhWyduYW1lYWdlbnQnXTtcbiAgICAgICAgdGhpcy5sYk5pY2tuYW1lLnN0cmluZyA9IGRhdGFbJ25pY2tuYW1lJ107XG4gICAgICAgIHRoaXMubGJVc2VyQmFua05hbWUuc3RyaW5nID0gZGF0YVsndXNlcm5hbWViYW5rJ107XG4gICAgICAgIHRoaXMubGJBZ2VuY3lCYW5rTmFtZS5zdHJpbmcgPSBkYXRhWydhZ2VuY3luYW1lYmFuayddO1xuICAgICAgICBpZiAodGhpcy5sYkFnZW5jeUJhbmtOYW1lLnN0cmluZy5sZW5ndGggPiAyMCkge1xuICAgICAgICAgICAgdGhpcy5sYkFnZW5jeUJhbmtOYW1lLnN0cmluZyA9IHRoaXMubGJBZ2VuY3lCYW5rTmFtZS5zdHJpbmcuc2xpY2UoMCwgMjApICsgXCIuLi5cIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxiQmFua051bWJlci5zdHJpbmcgPSBkYXRhWydiYW5rX251bWJlciddO1xuICAgICAgICB0aGlzLmxiQW1vdW50LnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihkYXRhWydhbW91bnQnXSk7XG4gICAgICAgIHRoaXMubGJDb250ZW50LnN0cmluZyA9IGRhdGFbJ2NpZCddO1xuXG4gICAgICAgIHRoaXMudGl0bGVDb250YWluZXIuZ2V0Q2hpbGRCeU5hbWUoJ2xiVXNlckFjY291bnROYW1lJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGl0bGVDb250YWluZXIuZ2V0Q2hpbGRCeU5hbWUoJ2xiQWdlbmN5QmFua05hbWUnKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnRpdGxlQ29udGFpbmVyLmdldENoaWxkQnlOYW1lKCdsYkJhbmtOdW1iZXInKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnRpdGxlQ29udGFpbmVyLmdldENoaWxkQnlOYW1lKCdDb250ZW50JykuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sYkJhbmtOdW1iZXIubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICBzZXRJbmZvQ2FzaE91dChkYXRhKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IFRZUEUuQ0FTSE9VVDtcbiAgICAgICAgdGhpcy5kYXRhQ2FzaE91dCA9IGRhdGE7XG4gICAgICAgIC8vICBjYy5sb2coXCJzZXRJbmZvQ2FzaE91dDpcIiwgZGF0YSk7XG4gICAgICAgIHRoaXMudGl0bGVDb250YWluZXIuZ2V0Q2hpbGRCeU5hbWUoJ2xiVXNlckFjY291bnROYW1lJykuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sYlVzZXJBY2NvdW50TmFtZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5sYk5hbWVBZ2VuY3kuc3RyaW5nID0gZGF0YVsnbmFtZWFnZW50J107XG4gICAgICAgIHRoaXMubGJOaWNrbmFtZS5zdHJpbmcgPSBkYXRhWyduaWNrbmFtZSddO1xuICAgICAgICB0aGlzLmxiQW1vdW50LnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihkYXRhWydhbW91bnQnXSk7XG4gICAgICAgIHRoaXMubGJVc2VyQWNjb3VudE5hbWUuc3RyaW5nID0gZGF0YVsndXNlcmFjY291bnRuYW1lJ107XG4gICAgICAgIHRoaXMubGJVc2VyQmFua05hbWUuc3RyaW5nID0gZGF0YVsndXNlcmJhbmtuYW1lJ107XG5cbiAgICAgICAgdGhpcy5sYkNvbnRlbnQubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYkFnZW5jeUJhbmtOYW1lLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGl0bGVDb250YWluZXIuZ2V0Q2hpbGRCeU5hbWUoJ2xiQWdlbmN5QmFua05hbWUnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50aXRsZUNvbnRhaW5lci5nZXRDaGlsZEJ5TmFtZSgnbGJCYW5rTnVtYmVyJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGl0bGVDb250YWluZXIuZ2V0Q2hpbGRCeU5hbWUoJ0NvbnRlbnQnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYkJhbmtOdW1iZXIubm9kZS5hY3RpdmUgPSBmYWxzZTtcblxuXG4gICAgfVxuICAgIG9uQ2xpY2tDb25maXJtKCkge1xuICAgICAgICBjYy5sb2coXCJUWVBFIFRBQjpcIiArIHRoaXMudHlwZSk7XG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gVFlQRS5DQVNISU4pIHtcbiAgICAgICAgICAgIGNjLmxvZyhcIkRhdGFDYXNzaCBJTj1cIiwgdGhpcy5kYXRhQ2FzaEluKTtcbiAgICAgICAgICAgIC8vYXBpP2M9MjAwMyZhbT0xMDAwMDAmY29kZT0zNjc0NTcmYWJuPTIyMjImYmM9VFBCJmNpZD0xMTIyMzM0NDU1Jm5uPUJpZ0JpcmQmYXQ9MTIzMTIzJmJuPTEyMzRcIixcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgIEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSTIsIHtcbiAgICAgICAgICAgICAgICBcImNcIjogMjAwMyxcbiAgICAgICAgICAgICAgICBcImFtXCI6IHRoaXMuZGF0YUNhc2hJblsnYW1vdW50J10sXG4gICAgICAgICAgICAgICAgXCJublwiOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLFxuICAgICAgICAgICAgICAgIFwiYXRcIjogQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbixcbiAgICAgICAgICAgICAgICBcImNvZGVcIjogdGhpcy5kYXRhQ2FzaEluWydhZ2VuY3lJRCddLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IHRoaXMuZGF0YUNhc2hJblsnY2lkJ10sXG4gICAgICAgICAgICAgICAgXCJhYm5cIjogdGhpcy5kYXRhQ2FzaEluWydiYW5rX251bWJlciddLFxuICAgICAgICAgICAgICAgIFwiYm5cIjogdGhpcy5kYXRhQ2FzaEluWyd1c2VyYmFua251bWJlciddLFxuICAgICAgICAgICAgfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjYy5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzWydzdWNjZXNzJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9yZXF1ZXN0X2Nhc2hpbl9zdWNjZXNzJykpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc21pc3MoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKHJlc1snbWVzc2FnZSddKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5sb2coXCJEYXRhQ2Fzc2g9XCIsIHRoaXMuZGF0YUNhc2hPdXQpO1xuICAgICAgICAgICAgLy9hcGk/Yz0yMDEwJmFtPTEwMDAwMCZjb2RlPTM2NzQ1NyZiYz1UUEImbm49QmlnQmlyZCZhdD0xMjMxMjMmYm49MTIzNFwiLFxuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgSHR0cC5nZXQoQ29uZmlncy5BcHAuQVBJMiwge1xuICAgICAgICAgICAgICAgIFwiY1wiOiAyMDEwLFxuICAgICAgICAgICAgICAgIFwiYW1cIjogdGhpcy5kYXRhQ2FzaE91dFsnYW1vdW50J10sXG4gICAgICAgICAgICAgICAgXCJublwiOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLFxuICAgICAgICAgICAgICAgIFwiYXRcIjogQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbixcbiAgICAgICAgICAgICAgICBcImNvZGVcIjogdGhpcy5kYXRhQ2FzaE91dFsnYWdlbmN5SUQnXSxcbiAgICAgICAgICAgICAgICBcImJuXCI6IHRoaXMuZGF0YUNhc2hPdXRbJ3VzZXJiYW5rbnVtYmVyJ10sXG4gICAgICAgICAgICB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNjLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNbJ3N1Y2Nlc3MnXSkge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3JlcXVlc3RfY2FzaGluX3N1Y2Nlc3MnKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2cocmVzWydtZXNzYWdlJ10pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc21pc3MoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==