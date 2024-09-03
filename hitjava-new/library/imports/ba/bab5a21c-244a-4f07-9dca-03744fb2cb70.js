"use strict";
cc._RF.push(module, 'bab5aIcJEpPB53KA3RPsstw', 'ShootFish.PopupGuide');
// ShootFish/ShootFishScript/ShootFish.PopupGuide.ts

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
var Dialog_1 = require("../../Lobby/LobbyScript/Script/common/Dialog");
var ShootFish_Play_1 = require("./ShootFish.Play");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupGuide = /** @class */ (function (_super) {
    __extends(PopupGuide, _super);
    function PopupGuide() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.grid = null;
        _this.itemTemplate = null;
        _this.items = [];
        _this.mapFishType = {
            0: ["Cuttle", 1],
            1: ['GoldFish', 1],
            2: ['LightenFish', 1],
            3: ['Mermaid', 1],
            4: ['Octopus', 1],
            5: ['PufferFish', 1],
            6: ['SeaFish', 1],
            7: ['Shark', 1],
            8: ['Stringray', 1],
            9: ['Turtle', 1],
            10: ['CaThanTai', 1],
            11: ['FlyingFish', 1],
            12: ['GoldenFrog', 0.2],
            13: ['SeaTurtle', 1],
            14: ['MerMan', 1],
            15: ['Phoenix', 0.7],
            16: ['MermaidBig', 0.6],
            17: ['MermaidSmall', 0.6],
            18: ['BombFish', 0.6],
            19: ['Fish19', 0.6],
            20: ['Fish20', 0.6],
            21: ['Fish21', 0.4],
            22: ['Fish22', 0.3],
            23: ['Fish23', 0.3],
            24: ['Fish24', 0.3],
        };
        return _this;
    }
    PopupGuide.prototype.show = function () {
        _super.prototype.show.call(this);
        this.itemTemplate.active = false;
    };
    PopupGuide.prototype._onShowed = function () {
        _super.prototype._onShowed.call(this);
        if (ShootFish_Play_1.default.SERVER_CONFIG == null)
            return;
        for (var fishId in this.mapFishType) {
            var fishName = this.mapFishType[fishId][0];
            var scale = this.mapFishType[fishId][1];
            var dataConfig = ShootFish_Play_1.default.SERVER_CONFIG["FishPhysicalData"][fishName];
            var node = cc.instantiate(this.itemTemplate);
            node.parent = this.grid;
            node.active = true;
            var fish = cc.instantiate(ShootFish_Play_1.default.instance.getFishAnimByType(Number(fishId)));
            fish.parent = node.getChildByName("fishParent");
            fish.scale = scale;
            fish.angle = 35;
            node.getChildByName("lblFactor").getComponent(cc.Label).string = (dataConfig["Health"] / 100).toString();
            this.items.push(node);
        }
    };
    PopupGuide.prototype.dismiss = function () {
        this.items.forEach(function (x) {
            x.removeFromParent();
        });
        _super.prototype.dismiss.call(this);
    };
    __decorate([
        property(cc.Node)
    ], PopupGuide.prototype, "grid", void 0);
    __decorate([
        property(cc.Node)
    ], PopupGuide.prototype, "itemTemplate", void 0);
    PopupGuide = __decorate([
        ccclass
    ], PopupGuide);
    return PopupGuide;
}(Dialog_1.default));
exports.default = PopupGuide;

cc._RF.pop();