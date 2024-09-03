
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ShootFish/ShootFishScript/ShootFish.PopupGuide.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hvb3RGaXNoXFxTaG9vdEZpc2hTY3JpcHRcXFNob290RmlzaC5Qb3B1cEd1aWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVFQUFrRTtBQUNsRSxtREFBb0M7QUFFOUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQU07SUFBOUM7UUFBQSxxRUFxRUM7UUFuRUcsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUVyQixXQUFLLEdBQW1CLEVBQUUsQ0FBQztRQUUzQixpQkFBVyxHQUFHO1lBQ2xCLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztZQUNsQixDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1lBQ3JCLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7WUFDakIsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUNqQixDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1lBQ3BCLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7WUFDakIsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7WUFDbkIsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUNoQixFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1lBQ3BCLEVBQUUsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7WUFDckIsRUFBRSxFQUFFLENBQUMsWUFBWSxFQUFFLEdBQUcs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QUMsSUFBSSxDQUFDO29EQUNXO0lBSlosVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQXFFOUI7SUFBRCxpQkFBQztDQXJFRCxBQXFFQyxDQXJFdUMsZ0JBQU0sR0FxRTdDO2tCQXJFb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWFsb2cgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vRGlhbG9nXCI7XG5pbXBvcnQgUGxheSBmcm9tIFwiLi9TaG9vdEZpc2guUGxheVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBHdWlkZSBleHRlbmRzIERpYWxvZyB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZ3JpZDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaXRlbVRlbXBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgaXRlbXM6IEFycmF5PGNjLk5vZGU+ID0gW107XG5cbiAgICBwcml2YXRlIG1hcEZpc2hUeXBlID0ge1xuICAgICAgICAwOiBbXCJDdXR0bGVcIiwgMV0sXG4gICAgICAgIDE6IFsnR29sZEZpc2gnLCAxXSxcbiAgICAgICAgMjogWydMaWdodGVuRmlzaCcsIDFdLFxuICAgICAgICAzOiBbJ01lcm1haWQnLCAxXSxcbiAgICAgICAgNDogWydPY3RvcHVzJywgMV0sXG4gICAgICAgIDU6IFsnUHVmZmVyRmlzaCcsIDFdLFxuICAgICAgICA2OiBbJ1NlYUZpc2gnLCAxXSxcbiAgICAgICAgNzogWydTaGFyaycsIDFdLFxuICAgICAgICA4OiBbJ1N0cmluZ3JheScsIDFdLFxuICAgICAgICA5OiBbJ1R1cnRsZScsIDFdLFxuICAgICAgICAxMDogWydDYVRoYW5UYWknLCAxXSxcbiAgICAgICAgMTE6IFsnRmx5aW5nRmlzaCcsIDFdLFxuICAgICAgICAxMjogWydHb2xkZW5Gcm9nJywgMC4yXSxcbiAgICAgICAgMTM6IFsnU2VhVHVydGxlJywgMV0sXG4gICAgICAgIDE0OiBbJ01lck1hbicsIDFdLFxuICAgICAgICAxNTogWydQaG9lbml4JywgMC43XSxcbiAgICAgICAgMTY6IFsnTWVybWFpZEJpZycsIDAuNl0sXG4gICAgICAgIDE3OiBbJ01lcm1haWRTbWFsbCcsIDAuNl0sXG4gICAgICAgIDE4OiBbJ0JvbWJGaXNoJywgMC42XSxcbiAgICAgICAgMTk6IFsnRmlzaDE5JywgMC42XSxcbiAgICAgICAgMjA6IFsnRmlzaDIwJywgMC42XSxcbiAgICAgICAgMjE6IFsnRmlzaDIxJywgMC40XSxcbiAgICAgICAgMjI6IFsnRmlzaDIyJywgMC4zXSxcbiAgICAgICAgMjM6IFsnRmlzaDIzJywgMC4zXSxcbiAgICAgICAgMjQ6IFsnRmlzaDI0JywgMC4zXSxcbiAgICB9XG5cbiAgICBzaG93KCl7XG4gICAgICAgIHN1cGVyLnNob3coKTtcbiAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgX29uU2hvd2VkKCkge1xuICAgICAgICBzdXBlci5fb25TaG93ZWQoKTtcbiAgICAgICAgaWYoUGxheS5TRVJWRVJfQ09ORklHID09IG51bGwpIHJldHVybjtcbiAgICAgICAgZm9yIChsZXQgZmlzaElkIGluIHRoaXMubWFwRmlzaFR5cGUpIHtcbiAgICAgICAgICAgIGxldCBmaXNoTmFtZSA9IHRoaXMubWFwRmlzaFR5cGVbZmlzaElkXVswXTtcbiAgICAgICAgICAgIGxldCBzY2FsZSA9IHRoaXMubWFwRmlzaFR5cGVbZmlzaElkXVsxXTtcbiAgICAgICAgICAgIGxldCBkYXRhQ29uZmlnID0gUGxheS5TRVJWRVJfQ09ORklHW1wiRmlzaFBoeXNpY2FsRGF0YVwiXVtmaXNoTmFtZV07XG5cbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtVGVtcGxhdGUpO1xuICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLmdyaWQ7XG4gICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIGxldCBmaXNoID0gY2MuaW5zdGFudGlhdGUoUGxheS5pbnN0YW5jZS5nZXRGaXNoQW5pbUJ5VHlwZShOdW1iZXIoZmlzaElkKSkpO1xuICAgICAgICAgICAgZmlzaC5wYXJlbnQgPSBub2RlLmdldENoaWxkQnlOYW1lKFwiZmlzaFBhcmVudFwiKTtcbiAgICAgICAgICAgIGZpc2guc2NhbGUgPSBzY2FsZTtcbiAgICAgICAgICAgIGZpc2guYW5nbGUgPSAzNTtcblxuICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImxibEZhY3RvclwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IChkYXRhQ29uZmlnW1wiSGVhbHRoXCJdIC8gMTAwKS50b1N0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKG5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzbWlzcygpIHtcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgICAgeC5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzdXBlci5kaXNtaXNzKCk7XG4gICAgfVxufVxuIl19