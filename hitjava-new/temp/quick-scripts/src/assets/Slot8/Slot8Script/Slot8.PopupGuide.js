"use strict";
cc._RF.push(module, '7d3c39F/xBO95FWPBMqKT58', 'Slot8.PopupGuide');
// Slot8/Slot8Script/Slot8.PopupGuide.ts

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
exports.PopupGuide = void 0;
var Dialog_1 = require("../../Lobby/LobbyScript/Script/common/Dialog");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupGuide = /** @class */ (function (_super) {
    __extends(PopupGuide, _super);
    function PopupGuide() {
        // @property([cc.Node])
        // pages: cc.Node[] = [];
        // @property(cc.Node)
        // btnNext: cc.Node = null;
        // @property(cc.Node)
        // btnPrev: cc.Node = null;
        // @property({ type: cc.AudioClip })
        // soundClick: cc.AudioClip = null;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.page = 0;
        _this.soundSlotState = null;
        return _this;
    }
    PopupGuide.prototype.start = function () {
    };
    PopupGuide.prototype.show = function () {
        // if (this.canPlaySound()) {
        //     cc.audioEngine.play(this.soundClick, false, 1);
        // }
        _super.prototype.show.call(this);
        //this.page = 0;
        //this.btnPrev.active = true;
        // this.reloadData();
    };
    PopupGuide.prototype.dismiss = function () {
        _super.prototype.dismiss.call(this);
    };
    PopupGuide.prototype.canPlaySound = function () {
    };
    PopupGuide = __decorate([
        ccclass
    ], PopupGuide);
    return PopupGuide;
}(Dialog_1.default));
exports.PopupGuide = PopupGuide;
exports.default = PopupGuide;

cc._RF.pop();