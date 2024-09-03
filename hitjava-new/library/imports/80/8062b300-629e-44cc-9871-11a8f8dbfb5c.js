"use strict";
cc._RF.push(module, '8062bMAYp5EzJhxEaj42/tc', 'Slot7.PopupJackpotHistory');
// Slot7/Slot7Script/Slot7.PopupJackpotHistory.ts

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
exports.PopupJackpotHistory = void 0;
var Configs_1 = require("../../Loading/src/Configs");
var Http_1 = require("../../Loading/src/Http");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var Dialog_1 = require("../../Lobby/LobbyScript/Script/common/Dialog");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupJackpotHistory = /** @class */ (function (_super) {
    __extends(PopupJackpotHistory, _super);
    function PopupJackpotHistory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lblPage = null;
        _this.itemTemplate = null;
        _this.soundClick = null;
        _this.soundSlotState = null;
        _this.page = 1;
        _this.maxPage = 1;
        _this.items = new Array();
        return _this;
    }
    PopupJackpotHistory.prototype.show = function () {
        if (this.canPlaySound()) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        _super.prototype.show.call(this);
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].active = false;
        }
        if (this.itemTemplate != null)
            this.itemTemplate.active = false;
    };
    PopupJackpotHistory.prototype.dismiss = function () {
        if (this.canPlaySound()) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        _super.prototype.dismiss.call(this);
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].active = false;
        }
    };
    PopupJackpotHistory.prototype._onShowed = function () {
        _super.prototype._onShowed.call(this);
        this.page = 1;
        this.maxPage = 1;
        this.lblPage.string = this.page + "/" + this.maxPage;
        this.loadData();
    };
    PopupJackpotHistory.prototype.actNextPage = function () {
        if (this.canPlaySound()) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        if (this.page < this.maxPage) {
            this.page++;
            this.lblPage.string = this.page + "/" + this.maxPage;
            this.loadData();
        }
    };
    PopupJackpotHistory.prototype.actPrevPage = function () {
        if (this.canPlaySound()) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        if (this.page > 1) {
            this.page--;
            this.lblPage.string = this.page + "/" + this.maxPage;
            this.loadData();
        }
    };
    PopupJackpotHistory.prototype.loadData = function () {
        var _this = this;
        App_1.default.instance.showLoading(true);
        Http_1.default.get(Configs_1.default.App.API, { "c": 138, "p": this.page, "gn": "BENLEY" }, function (err, res) {
            App_1.default.instance.showLoading(false);
            if (err != null)
                return;
            if (!res["success"])
                return;
            if (_this.items.length == 0) {
                for (var i = 0; i < 8; i++) {
                    var item = cc.instantiate(_this.itemTemplate);
                    item.parent = _this.itemTemplate.parent;
                    _this.items.push(item);
                }
                _this.itemTemplate.destroy();
                _this.itemTemplate = null;
            }
            _this.maxPage = res["totalPages"];
            _this.lblPage.string = _this.page + "/" + _this.maxPage;
            for (var i_1 = 0; i_1 < _this.items.length; i_1++) {
                var item = _this.items[i_1];
                if (i_1 < res["results"].length) {
                    var itemData = res["results"][i_1];
                    item.getChildByName("Time").getComponent(cc.Label).string = itemData["ts"];
                    item.getChildByName("Bet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["bv"]);
                    item.getChildByName("Type").getComponent(cc.Label).string = itemData["rs"] == 3 ? App_1.default.instance.getTextLang('txt_jackpot_win') : App_1.default.instance.getTextLang('txt_big_win');
                    item.getChildByName("Account").getComponent(cc.Label).string = itemData["un"];
                    item.getChildByName("Win").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["pz"]);
                    item.active = true;
                }
                else {
                    item.active = false;
                }
            }
        });
    };
    PopupJackpotHistory.prototype.canPlaySound = function () {
        if (this.soundClick == null)
            return false;
        var soundSave = cc.sys.localStorage.getItem("sound_Slot_1");
        if (soundSave != null) {
            this.soundSlotState = parseInt(soundSave);
        }
        else {
            this.soundSlotState = 1;
        }
        if (this.soundSlotState == 1) {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        property(cc.Label)
    ], PopupJackpotHistory.prototype, "lblPage", void 0);
    __decorate([
        property(cc.Node)
    ], PopupJackpotHistory.prototype, "itemTemplate", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], PopupJackpotHistory.prototype, "soundClick", void 0);
    PopupJackpotHistory = __decorate([
        ccclass
    ], PopupJackpotHistory);
    return PopupJackpotHistory;
}(Dialog_1.default));
exports.PopupJackpotHistory = PopupJackpotHistory;
exports.default = PopupJackpotHistory;

cc._RF.pop();