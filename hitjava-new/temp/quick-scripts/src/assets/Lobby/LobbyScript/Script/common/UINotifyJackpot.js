"use strict";
cc._RF.push(module, '3ed18QYxYBC/bof19cpXykT', 'UINotifyJackpot');
// Lobby/LobbyScript/Script/common/UINotifyJackpot.ts

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
var App_1 = require("./App");
var Utils_1 = require("./Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeBox = null;
        _this.labelUser = null;
        _this.labelGame = null;
        _this.labelGold = null;
        _this.labelTypeWin = null;
        _this.lbNotify = null;
        _this.nodeJackpot = null;
        _this.nodeNotify = null;
        _this.listContent = [];
        _this.index = 0;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
    };
    NewClass.prototype.ctor = function () {
        var self = this;
        self.listContent = [];
        this.index = 0;
    };
    NewClass.prototype.test = function () {
        var data = {};
        data["username"] = "user" + this.index;
        data["totalPrizes"] = 100000 + this.index;
        data["type"] = 0;
        data["gameName"] = "Chim Điên";
        //Utils.Log("data:" + JSON.stringify(data));
        this.addJackpot(data);
        this.index++;
    };
    NewClass.prototype.addJackpot = function (data) {
        if (this.listContent == null) {
            return;
        }
        //Utils.Log("addJackpot:" + JSON.stringify(data));
        this.listContent.push(data);
        if (this.listContent.length == 1) {
            //run now
            this.show(data);
        }
        else {
            // running, add list
            this.listContent.push(data);
        }
    };
    NewClass.prototype.addNotify = function (data) {
        if (this.listContent == null) {
            return;
        }
        //  cc.log("addNotify:" + JSON.stringify(data));
        this.listContent.push(data);
        if (this.listContent.length == 1) {
            //run now
            this.showNoti(data);
        }
        else {
            // running, add list
            this.listContent.push(data);
        }
    };
    NewClass.prototype.show = function (data) {
        var _this = this;
        this.nodeJackpot.active = true;
        this.nodeNotify.active = false;
        if (data == null || data.totalPrizes === undefined) {
            this.hide();
            return;
        }
        if (App_1.default.instance.isShowNotifyJackpot == false) {
            this.node.active = false;
            return;
        }
        this.labelUser.string = data.username;
        this.labelGold.string = Utils_1.default.formatNumber(data.totalPrizes);
        this.labelGame.string = data.gameName;
        this.labelTypeWin.string = data.type;
        cc.Tween.stopAllByTarget(this.node);
        this.node.active = true;
        cc.tween(this.node).delay(5.0).set({ x: cc.winSize.width / 2 + 500 }).to(0.6, { x: cc.winSize.width / 2 - 170 }, { easing: cc.easing.backOut }).delay(4.0)
            .call(function () {
            _this.hide();
        }).start();
    };
    NewClass.prototype.showNoti = function (data) {
        var _this = this;
        this.nodeJackpot.active = false;
        this.nodeNotify.active = true;
        this.lbNotify.string = data['message'];
        cc.Tween.stopAllByTarget(this.node);
        this.node.active = true;
        cc.tween(this.node).delay(5.0).set({ x: cc.winSize.width / 2 + 500 }).to(0.6, { x: cc.winSize.width / 2 - 170 }, { easing: cc.easing.backOut }).delay(4.0)
            .call(function () {
            _this.hide();
        }).start();
    };
    NewClass.prototype.hide = function () {
        var _this = this;
        cc.Tween.stopAllByTarget(this.node);
        cc.tween(this.node).to(0.3, { x: cc.winSize.width / 2 + 200 }, { easing: cc.easing.backIn }).call(function () {
            _this.node.active = false;
            _this.listContent.splice(0, 1);
            if (_this.listContent.length >= 1) {
                var data = _this.listContent[0];
                if (data.hasOwnProperty("message")) {
                    _this.showNoti(data);
                }
                else {
                    _this.show(data);
                }
            }
        }).start();
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "nodeBox", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "labelUser", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "labelGame", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "labelGold", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "labelTypeWin", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbNotify", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "nodeJackpot", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "nodeNotify", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();