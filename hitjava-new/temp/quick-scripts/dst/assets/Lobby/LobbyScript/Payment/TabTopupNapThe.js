
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Payment/TabTopupNapThe.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ce50em84F1KY49MkXQhfHHH', 'TabTopupNapThe');
// Lobby/LobbyScript/Payment/TabTopupNapThe.ts

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
var TabTopupChuyenKhoan_1 = require("./TabTopupChuyenKhoan");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TabTopupNapThe = /** @class */ (function (_super) {
    __extends(TabTopupNapThe, _super);
    function TabTopupNapThe() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lbFree = null;
        _this.editName = null;
        _this.editMoney = null;
        _this.listCard = [{ value: 10000, str: "10.000 VNĐ" }, { value: 20000, str: "20.000 VNĐ" }, { value: 50000, str: "50.000 VNĐ" }, { value: 100000, str: "100.000 VNĐ" }, { value: 200000, str: "200.000 VNĐ" }, { value: 500000, str: "500.000 VNĐ" }];
        _this.listRateCard = [{ type: "VNM", fee: "26%" }, { type: "GATE", fee: "32%" }, { type: "VCOIN", fee: "32%" }, { type: "VMS", fee: "26%" }, { type: "VTT", fee: "24%" }, { type: "VNP", fee: "26%" }, { type: "ZING", fee: "32%" }];
        return _this;
    }
    TabTopupNapThe.prototype.show = function (data, providerName) {
        _super.prototype.show.call(this, data, providerName);
        this.loadCardList();
        this.lbFree.string = "- Mỗi loại thẻ có phí nạp khác nhau.";
    };
    TabTopupNapThe.prototype.onBtnXacNhan = function () {
        var cardPin = this.editName.string.trim();
        var seri = this.editMoney.string.trim();
        var money = Utils_1.default.formatEditBox(this.dropCard.labelCaption.string);
        if (seri == "" || cardPin == "" || this.dataBankChosing == null) {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_input_all"));
            return;
        }
        App_1.default.instance.showLoading(true, -1);
        var request = {
            "c": 2033,
            "p": cardPin,
            "sn": seri,
            "am": money,
            "tc": this.dataBankChosing['key'],
            "nn": Configs_1.default.Login.Nickname,
            "at": Configs_1.default.Login.AccessToken,
        };
        //  cc.log("request:", request);
        Http_1.default.get(Configs_1.default.App.API, request, function (err, res) {
            App_1.default.instance.showLoading(false);
            //  cc.log(res);
            if (res.success == true) {
                App_1.default.instance.ShowAlertDialog("Yêu cầu nạp thẻ đã được gửi thành công!\nQuý khách vui lòng chờ trong ít phút!");
            }
            else {
                App_1.default.instance.ShowAlertDialog("Thông tin thẻ không đúng.\nVui lòng kiểm tra lại!");
            }
        });
    };
    TabTopupNapThe.prototype.loadCardList = function () {
        var datas = new Array();
        for (var i = 0; i < this.listCard.length; i++) {
            datas.push({ optionString: this.listCard[i]['str'] });
        }
        this.dropCard.clearOptionDatas();
        this.dropCard.addOptionDatas(datas);
        this.dropCard.selectedIndex = 0;
    };
    TabTopupNapThe.prototype.onBtnChoseBank = function () {
        var _this = this;
        this.lobbyChoseBank.init(this.tabWell, this.data.banks, function (dataBankChosing) {
            _this.dataBankChosing = dataBankChosing;
            //  cc.log("data card=", this.dataBankChosing);
            for (var i = 0; i < _this.listRateCard.length; i++) {
                if (_this.dataBankChosing['key'] == _this.listRateCard[i]['type']) {
                    _this.lbFree.string = "- Phí nạp: " + _this.listRateCard[i]['fee'];
                }
            }
            _this.showBankChosing();
        });
        this.lobbyChoseBank.show();
    };
    __decorate([
        property(cc.Label)
    ], TabTopupNapThe.prototype, "lbFree", void 0);
    __decorate([
        property({
            type: cc.EditBox,
            displayName: "edbCardPin",
            override: true
        })
    ], TabTopupNapThe.prototype, "editName", void 0);
    __decorate([
        property({
            type: cc.EditBox,
            displayName: "edbCardSeri",
            override: true
        })
    ], TabTopupNapThe.prototype, "editMoney", void 0);
    TabTopupNapThe = __decorate([
        ccclass
    ], TabTopupNapThe);
    return TabTopupNapThe;
}(TabTopupChuyenKhoan_1.default));
exports.default = TabTopupNapThe;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxQYXltZW50XFxUYWJUb3B1cE5hcFRoZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBbUQ7QUFDbkQsa0RBQTZDO0FBQzdDLDRDQUF1QztBQUN2QyxnREFBMkM7QUFDM0MsNkRBQXdEO0FBRWxELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTRDLGtDQUFtQjtJQUEvRDtRQUFBLHFFQTRFQztRQXpFRyxZQUFNLEdBQWEsSUFBSSxDQUFDO1FBTXhCLGNBQVEsR0FBZSxJQUFJLENBQUM7UUFNNUIsZUFBUyxHQUFlLElBQUksQ0FBQztRQUVyQixjQUFRLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFBO1FBQy9PLGtCQUFZLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFB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MkI7SUFmWixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBNEVsQztJQUFELHFCQUFDO0NBNUVELEFBNEVDLENBNUUyQyw2QkFBbUIsR0E0RTlEO2tCQTVFb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgSHR0cCBmcm9tIFwiLi4vLi4vLi4vTG9hZGluZy9zcmMvSHR0cFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuaW1wb3J0IFRhYlRvcHVwQ2h1eWVuS2hvYW4gZnJvbSBcIi4vVGFiVG9wdXBDaHV5ZW5LaG9hblwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFiVG9wdXBOYXBUaGUgZXh0ZW5kcyBUYWJUb3B1cENodXllbktob2FuIHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkZyZWU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5FZGl0Qm94LFxuICAgICAgICBkaXNwbGF5TmFtZTogXCJlZGJDYXJkUGluXCIsXG4gICAgICAgIG92ZXJyaWRlOiB0cnVlXG4gICAgfSlcbiAgICBlZGl0TmFtZTogY2MuRWRpdEJveCA9IG51bGw7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuRWRpdEJveCxcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiZWRiQ2FyZFNlcmlcIixcbiAgICAgICAgb3ZlcnJpZGU6IHRydWVcbiAgICB9KVxuICAgIGVkaXRNb25leTogY2MuRWRpdEJveCA9IG51bGw7XG5cbiAgICBwcml2YXRlIGxpc3RDYXJkID0gW3sgdmFsdWU6IDEwMDAwLCBzdHI6IFwiMTAuMDAwIFZOxJBcIiB9LCB7IHZhbHVlOiAyMDAwMCwgc3RyOiBcIjIwLjAwMCBWTsSQXCIgfSwgeyB2YWx1ZTogNTAwMDAsIHN0cjogXCI1MC4wMDAgVk7EkFwiIH0sIHsgdmFsdWU6IDEwMDAwMCwgc3RyOiBcIjEwMC4wMDAgVk7EkFwiIH0sIHsgdmFsdWU6IDIwMDAwMCwgc3RyOiBcIjIwMC4wMDAgVk7EkFwiIH0sIHsgdmFsdWU6IDUwMDAwMCwgc3RyOiBcIjUwMC4wMDAgVk7EkFwiIH1dXG4gICAgcHJpdmF0ZSBsaXN0UmF0ZUNhcmQgPSBbeyB0eXBlOiBcIlZOTVwiLCBmZWU6IFwiMjYlXCIgfSwgeyB0eXBlOiBcIkdBVEVcIiwgZmVlOiBcIjMyJVwiIH0sIHsgdHlwZTogXCJWQ09JTlwiLCBmZWU6IFwiMzIlXCIgfSwgeyB0eXBlOiBcIlZNU1wiLCBmZWU6IFwiMjYlXCIgfSwgeyB0eXBlOiBcIlZUVFwiLCBmZWU6IFwiMjQlXCIgfSwgeyB0eXBlOiBcIlZOUFwiLCBmZWU6IFwiMjYlXCIgfSwgeyB0eXBlOiBcIlpJTkdcIiwgZmVlOiBcIjMyJVwiIH1dXG4gICAgc2hvdyhkYXRhLCBwcm92aWRlck5hbWUpIHtcbiAgICAgICAgc3VwZXIuc2hvdyhkYXRhLCBwcm92aWRlck5hbWUpO1xuICAgICAgICB0aGlzLmxvYWRDYXJkTGlzdCgpO1xuICAgICAgICB0aGlzLmxiRnJlZS5zdHJpbmcgPSBcIi0gTeG7l2kgbG/huqFpIHRo4bq7IGPDsyBwaMOtIG7huqFwIGtow6FjIG5oYXUuXCI7XG4gICAgfVxuICAgIG9uQnRuWGFjTmhhbigpIHtcbiAgICAgICAgbGV0IGNhcmRQaW4gPSB0aGlzLmVkaXROYW1lLnN0cmluZy50cmltKCk7XG4gICAgICAgIGxldCBzZXJpID0gdGhpcy5lZGl0TW9uZXkuc3RyaW5nLnRyaW0oKTtcbiAgICAgICAgdmFyIG1vbmV5ID0gVXRpbHMuZm9ybWF0RWRpdEJveCh0aGlzLmRyb3BDYXJkLmxhYmVsQ2FwdGlvbi5zdHJpbmcpO1xuICAgICAgICBpZiAoc2VyaSA9PSBcIlwiIHx8IGNhcmRQaW4gPT0gXCJcIiB8fCB0aGlzLmRhdGFCYW5rQ2hvc2luZyA9PSBudWxsKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9pbnB1dF9hbGxcIikpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlLCAtMSk7XG4gICAgICAgIGxldCByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgXCJjXCI6IDIwMzMsXG4gICAgICAgICAgICBcInBcIjogY2FyZFBpbixcbiAgICAgICAgICAgIFwic25cIjogc2VyaSxcbiAgICAgICAgICAgIFwiYW1cIjogbW9uZXksXG4gICAgICAgICAgICBcInRjXCI6IHRoaXMuZGF0YUJhbmtDaG9zaW5nWydrZXknXSxcbiAgICAgICAgICAgIFwibm5cIjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSxcbiAgICAgICAgICAgIFwiYXRcIjogQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbixcbiAgICAgICAgfTtcbiAgICAgICAgLy8gIGNjLmxvZyhcInJlcXVlc3Q6XCIsIHJlcXVlc3QpO1xuICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHJlcXVlc3QsIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIC8vICBjYy5sb2cocmVzKTtcbiAgICAgICAgICAgIGlmIChyZXMuc3VjY2VzcyA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhcIlnDqnUgY+G6p3UgbuG6oXAgdGjhursgxJHDoyDEkcaw4bujYyBn4butaSB0aMOgbmggY8O0bmchXFxuUXXDvSBraMOhY2ggdnVpIGzDsm5nIGNo4budIHRyb25nIMOtdCBwaMO6dCFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKFwiVGjDtG5nIHRpbiB0aOG6uyBraMO0bmcgxJHDum5nLlxcblZ1aSBsw7JuZyBraeG7g20gdHJhIGzhuqFpIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxvYWRDYXJkTGlzdCgpIHtcbiAgICAgICAgdmFyIGRhdGFzID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0Q2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGF0YXMucHVzaCh7IG9wdGlvblN0cmluZzogdGhpcy5saXN0Q2FyZFtpXVsnc3RyJ10gfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcm9wQ2FyZC5jbGVhck9wdGlvbkRhdGFzKCk7XG4gICAgICAgIHRoaXMuZHJvcENhcmQuYWRkT3B0aW9uRGF0YXMoZGF0YXMpO1xuICAgICAgICB0aGlzLmRyb3BDYXJkLnNlbGVjdGVkSW5kZXggPSAwO1xuICAgIH1cbiAgICBvbkJ0bkNob3NlQmFuaygpIHtcbiAgICAgICAgdGhpcy5sb2JieUNob3NlQmFuay5pbml0KHRoaXMudGFiV2VsbCwgdGhpcy5kYXRhLmJhbmtzLCAoZGF0YUJhbmtDaG9zaW5nKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRhdGFCYW5rQ2hvc2luZyA9IGRhdGFCYW5rQ2hvc2luZztcbiAgICAgICAgICAgIC8vICBjYy5sb2coXCJkYXRhIGNhcmQ9XCIsIHRoaXMuZGF0YUJhbmtDaG9zaW5nKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0UmF0ZUNhcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhQmFua0Nob3NpbmdbJ2tleSddID09IHRoaXMubGlzdFJhdGVDYXJkW2ldWyd0eXBlJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYkZyZWUuc3RyaW5nID0gXCItIFBow60gbuG6oXA6IFwiICsgdGhpcy5saXN0UmF0ZUNhcmRbaV1bJ2ZlZSddO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2hvd0JhbmtDaG9zaW5nKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxvYmJ5Q2hvc2VCYW5rLnNob3coKTtcbiAgICB9XG59XG4iXX0=