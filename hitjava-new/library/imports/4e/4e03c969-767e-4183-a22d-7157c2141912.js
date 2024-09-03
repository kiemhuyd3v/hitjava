"use strict";
cc._RF.push(module, '4e03clpdn5Bg6ItcVfCFBkS', 'Lobby.ItemTopHu');
// Lobby/LobbyScript/Lobby.ItemTopHu.ts

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
exports.Tophudata = void 0;
var Tween_1 = require("./Script/common/Tween");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.labelName = null;
        _this.label = null;
        _this.icon = null;
        _this.spriteFrames = [];
        _this.iconX = null;
        _this.spriteFramesX = [];
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        //this.icon.spriteFrame=SpriteFrame;
    };
    NewClass.prototype.start = function () {
        this.icon.spriteFrame = this.spriteFrames[0];
    };
    NewClass.prototype.SetData = function (data) {
        if (data.valueX == 1) {
            this.iconX.node.active = true;
        }
        else {
            this.iconX.node.active = false;
        }
        this.labelName.string = data.gamename;
        this.ChangeIcon(data.gameid);
        Tween_1.default.numberTo(this.label, data.value, 3.0);
    };
    NewClass.prototype.ChangeIcon = function (id) {
        switch (id) {
            case "audition":
                this.icon.spriteFrame = this.spriteFrames[0];
                break;
            case "captain":
                this.icon.spriteFrame = this.spriteFrames[1];
                break;
            case "spartans":
                this.icon.spriteFrame = this.spriteFrames[2];
                break;
            case "tamhung":
                this.icon.spriteFrame = this.spriteFrames[3];
                break;
            case "aztec":
                this.icon.spriteFrame = this.spriteFrames[4];
                break;
            case "zeus":
                this.icon.spriteFrame = this.spriteFrames[5];
                break;
            case "gainhay":
                this.icon.spriteFrame = this.spriteFrames[6];
                break;
            case "rollRoye":
                this.icon.spriteFrame = this.spriteFrames[7];
                break;
            case "chiemtinh":
                this.icon.spriteFrame = this.spriteFrames[8];
                break;
            case "bikini":
                this.icon.spriteFrame = this.spriteFrames[4];
                break;
            case "gem":
                this.icon.spriteFrame = this.spriteFrames[1];
                break;
            default:
                this.icon.spriteFrame = this.spriteFrames[0];
                break;
        }
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "labelName", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "icon", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], NewClass.prototype, "spriteFrames", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "iconX", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], NewClass.prototype, "spriteFramesX", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;
var Tophudata = /** @class */ (function () {
    function Tophudata(gameid, gamename, value100, value1000, value10000, valueX100, valueX1000, valueX10000) {
        if (value10000 === void 0) { value10000 = 0; }
        if (valueX100 === void 0) { valueX100 = 0; }
        if (valueX1000 === void 0) { valueX1000 = 0; }
        if (valueX10000 === void 0) { valueX10000 = 0; }
        this.value100 = 0;
        this.value1000 = 0;
        this.value10000 = 0;
        this.valueX100 = 0;
        this.valueX1000 = 0;
        this.valueX10000 = 0;
        this.gameid = gameid;
        this.gamename = gamename;
        this.value100 = value100;
        this.value1000 = value1000;
        this.value10000 = value10000;
        this.valueX100 = valueX100;
        this.valueX1000 = valueX1000;
        this.valueX10000 = valueX10000;
    }
    return Tophudata;
}());
exports.Tophudata = Tophudata;

cc._RF.pop();