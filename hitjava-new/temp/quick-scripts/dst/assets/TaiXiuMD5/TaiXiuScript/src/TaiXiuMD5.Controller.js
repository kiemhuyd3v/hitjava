
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TaiXiuMD5/TaiXiuScript/src/TaiXiuMD5.Controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'de802+Kp25FjYB59w/XvDop', 'TaiXiuMD5.Controller');
// TaiXiuMD5/TaiXiuScript/src/TaiXiuMD5.Controller.ts

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
var MiniGame_1 = require("../../../Lobby/LobbyScript/MiniGame");
var TaiXiuMD5_TaiXiuMiniController_1 = require("../TaiXiu1/TaiXiuMD5.TaiXiuMiniController");
var TX2NetworkClient_1 = require("../../../Lobby/LobbyScript/Script/networks/TX2NetworkClient");
var App_1 = require("../../../Lobby/LobbyScript/Script/common/App");
var BroadcastReceiver_1 = require("../../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var MiniGameNetworkClient_1 = require("../../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient");
var VersionConfig_1 = require("../../../Loading/src/VersionConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TaiXiuMD5Controller = /** @class */ (function (_super) {
    __extends(TaiXiuMD5Controller, _super);
    function TaiXiuMD5Controller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.taiXiu1Node = null;
        _this.btnSwitch = null;
        _this.taiXiu1 = null;
        _this.isShowTX1 = true;
        return _this;
    }
    TaiXiuMD5Controller_1 = TaiXiuMD5Controller;
    TaiXiuMD5Controller.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.taiXiu1 = this.taiXiu1Node.getComponent(TaiXiuMD5_TaiXiuMiniController_1.default);
        TaiXiuMD5Controller_1.instance = this;
        switch (VersionConfig_1.default.CPName) {
            case VersionConfig_1.default.CP_NAME_F69:
                this.btnSwitch.active = false;
                break;
            default:
                // this.btnSwitch.active = true;
                //  this.taiXiu2.node.active = true;
                break;
        }
    };
    TaiXiuMD5Controller.prototype.start = function () {
        var _this = this;
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_LOGOUT, function () {
            if (!_this.node.active)
                return;
            _this.dismiss();
        }, this);
        MiniGameNetworkClient_1.default.getInstance().addOnClose(function () {
            if (!_this.node.active)
                return;
            _this.dismiss();
        }, this);
        TX2NetworkClient_1.default.getInstance().addOnClose(function () {
            if (!_this.node.active)
                return;
            _this.dismiss();
        }, this);
    };
    TaiXiuMD5Controller.prototype.show = function () {
        var _this = this;
        _super.prototype.show.call(this);
        this.isShowTX1 = true;
        switch (VersionConfig_1.default.CPName) {
            case VersionConfig_1.default.CP_NAME_F69:
                //nothing
                break;
            default:
                TX2NetworkClient_1.default.getInstance().checkConnect(function () {
                    //this.taiXiu2.show();
                    //  this.checkShow();
                });
                break;
        }
        MiniGameNetworkClient_1.default.getInstance().checkConnect(function () {
            _this.taiXiu1.show();
            _this.checkShow();
        });
        App_1.default.instance.buttonMiniGame.showTimeTaiXiu(false);
        this.checkShow();
    };
    TaiXiuMD5Controller.prototype.dismiss = function () {
        _super.prototype.dismiss.call(this);
        App_1.default.instance.buttonMiniGame.showTimeTaiXiu(true);
        this.taiXiu1.dismiss();
        switch (VersionConfig_1.default.CPName) {
            case VersionConfig_1.default.CP_NAME_F69:
                //nothing
                break;
            default:
                //this.taiXiu2.dismiss();
                break;
        }
    };
    TaiXiuMD5Controller.prototype.checkShow = function () {
        if (this.isShowTX1) {
            this.taiXiu1.gamePlay.scale = 1;
            this.taiXiu1.gamePlay.position = cc.Vec2.ZERO;
            this.taiXiu1.nodePanelChat.active = true;
            this.taiXiu1.node.setSiblingIndex(1);
            // this.taiXiu2.gamePlay.scale = 0.5;
            // this.taiXiu2.gamePlay.position = cc.v2(-405, 234);
            //  this.taiXiu2.nodePanelChat.active = false;
            // this.taiXiu2.layoutBet.active = false;
        }
        else {
            //    this.taiXiu2.gamePlay.scale = 1;
            //     this.taiXiu2.gamePlay.position = cc.Vec2.ZERO;
            //    this.taiXiu2.nodePanelChat.active = true;
            //    this.taiXiu2.node.setSiblingIndex(1);
            this.taiXiu1.gamePlay.scale = 0.5;
            this.taiXiu1.gamePlay.position = cc.v2(-405, 234);
            this.taiXiu1.nodePanelChat.active = false;
            this.taiXiu1.layoutBet.active = false;
        }
    };
    TaiXiuMD5Controller.prototype.actSwitch = function () {
        this.isShowTX1 = !this.isShowTX1;
        this.checkShow();
    };
    var TaiXiuMD5Controller_1;
    TaiXiuMD5Controller.instance = null;
    __decorate([
        property(cc.Node)
    ], TaiXiuMD5Controller.prototype, "taiXiu1Node", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuMD5Controller.prototype, "btnSwitch", void 0);
    TaiXiuMD5Controller = TaiXiuMD5Controller_1 = __decorate([
        ccclass
    ], TaiXiuMD5Controller);
    return TaiXiuMD5Controller;
}(MiniGame_1.default));
exports.default = TaiXiuMD5Controller;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGFpWGl1TUQ1XFxUYWlYaXVTY3JpcHRcXHNyY1xcVGFpWGl1TUQ1LkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDRGQUE2RTtBQUM3RSxnR0FBMkY7QUFDM0Ysb0VBQStEO0FBQy9ELGdHQUEyRjtBQUMzRiwwR0FBcUc7QUFDckcsb0VBQStEO0FBRXpELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlELHVDQUFRO0lBQXpEO1FBQUEscUVBb0hDO1FBOUdHLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsYUFBTyxHQUF5QixJQUFJLENBQUM7UUFFN0IsZUFBUyxHQUFHLElBQUksQ0FBQzs7SUF1RzdCLENBQUM7NEJBcEhvQixtQkFBbUI7SUFlN0Isb0NBQU0sR0FBYjtRQUNJLGlCQUFNLE1BQU0sV0FBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyx3Q0FBb0IsQ0FBQyxDQUFDO1FBQ25FLHFCQUFtQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFFcEMsUUFBUSx1QkFBYSxDQUFDLE1BQU0sRUFBRTtZQUMxQixLQUFLLHVCQUFhLENBQUMsV0FBVztnQkFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUM5QixNQUFNO1lBQ1Y7Z0JBQ0UsZ0NBQWdDO2dCQUNoQyxvQ0FBb0M7Z0JBQ2xDLE1BQU07U0FDYjtJQUNMLENBQUM7SUFFTSxtQ0FBSyxHQUFaO1FBQUEsaUJBZUM7UUFkRywyQkFBaUIsQ0FBQyxRQUFRLENBQUMsMkJBQWlCLENBQUMsV0FBVyxFQUFFO1lBQ3RELElBQUksQ0FBQyxL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LGFBQWEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDekM7SUFDTCxDQUFDO0lBRU0sdUNBQVMsR0FBaEI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7SUFqSE0sNEJBQVEsR0FBd0IsSUFBSSxDQUFDO0lBSTVDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NERBQ1U7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswREFDUTtJQVRULG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBb0h2QztJQUFELDBCQUFDO0NBcEhELEFBb0hDLENBcEhnRCxrQkFBUSxHQW9IeEQ7a0JBcEhvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWluaUdhbWUgZnJvbSBcIi4uLy4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L01pbmlHYW1lXCI7XG5pbXBvcnQgVGFpWGl1TWluaUNvbnRyb2xsZXIgZnJvbSBcIi4uL1RhaVhpdTEvVGFpWGl1TUQ1LlRhaVhpdU1pbmlDb250cm9sbGVyXCI7XG5pbXBvcnQgVFgyTmV0d29ya0NsaWVudCBmcm9tIFwiLi4vLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL1RYMk5ldHdvcmtDbGllbnRcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgQnJvYWRjYXN0UmVjZWl2ZXIgZnJvbSBcIi4uLy4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQnJvYWRjYXN0UmVjZWl2ZXJcIjtcbmltcG9ydCBNaW5pR2FtZU5ldHdvcmtDbGllbnQgZnJvbSBcIi4uLy4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9NaW5pR2FtZU5ldHdvcmtDbGllbnRcIjtcbmltcG9ydCBWZXJzaW9uQ29uZmlnIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL3NyYy9WZXJzaW9uQ29uZmlnXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWlYaXVNRDVDb250cm9sbGVyIGV4dGVuZHMgTWluaUdhbWUge1xuXG4gICAgc3RhdGljIGluc3RhbmNlOiBUYWlYaXVNRDVDb250cm9sbGVyID0gbnVsbDtcblxuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGFpWGl1MU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnRuU3dpdGNoOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHRhaVhpdTE6IFRhaVhpdU1pbmlDb250cm9sbGVyID0gbnVsbDtcblxuICAgIHByaXZhdGUgaXNTaG93VFgxID0gdHJ1ZTtcblxuICAgIHB1YmxpYyBvbkxvYWQoKSB7XG4gICAgICAgIHN1cGVyLm9uTG9hZCgpO1xuICAgICAgICB0aGlzLnRhaVhpdTEgPSB0aGlzLnRhaVhpdTFOb2RlLmdldENvbXBvbmVudChUYWlYaXVNaW5pQ29udHJvbGxlcik7XG4gICAgICAgIFRhaVhpdU1ENUNvbnRyb2xsZXIuaW5zdGFuY2UgPSB0aGlzO1xuXG4gICAgICAgIHN3aXRjaCAoVmVyc2lvbkNvbmZpZy5DUE5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgVmVyc2lvbkNvbmZpZy5DUF9OQU1FX0Y2OTpcbiAgICAgICAgICAgICAgICB0aGlzLmJ0blN3aXRjaC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIC8vIHRoaXMuYnRuU3dpdGNoLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgIC8vICB0aGlzLnRhaVhpdTIubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0KCkge1xuICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5yZWdpc3RlcihCcm9hZGNhc3RSZWNlaXZlci5VU0VSX0xPR09VVCwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm5vZGUuYWN0aXZlKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLmRpc21pc3MoKTtcbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuYWRkT25DbG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICBUWDJOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuYWRkT25DbG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvdygpIHtcbiAgICAgICAgc3VwZXIuc2hvdygpO1xuXG4gICAgICAgIHRoaXMuaXNTaG93VFgxID0gdHJ1ZTtcblxuICAgICAgICBzd2l0Y2ggKFZlcnNpb25Db25maWcuQ1BOYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFZlcnNpb25Db25maWcuQ1BfTkFNRV9GNjk6XG4gICAgICAgICAgICAgICAgLy9ub3RoaW5nXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIFRYMk5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5jaGVja0Nvbm5lY3QoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvL3RoaXMudGFpWGl1Mi5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAvLyAgdGhpcy5jaGVja1Nob3coKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmNoZWNrQ29ubmVjdCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRhaVhpdTEuc2hvdygpO1xuICAgICAgICAgICAgdGhpcy5jaGVja1Nob3coKTtcbiAgICAgICAgfSk7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5idXR0b25NaW5pR2FtZS5zaG93VGltZVRhaVhpdShmYWxzZSk7XG4gICAgICAgIHRoaXMuY2hlY2tTaG93KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGRpc21pc3MoKSB7XG4gICAgICAgIHN1cGVyLmRpc21pc3MoKTtcbiAgICAgICAgQXBwLmluc3RhbmNlLmJ1dHRvbk1pbmlHYW1lLnNob3dUaW1lVGFpWGl1KHRydWUpO1xuICAgICAgICB0aGlzLnRhaVhpdTEuZGlzbWlzcygpO1xuXG4gICAgICAgIHN3aXRjaCAoVmVyc2lvbkNvbmZpZy5DUE5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgVmVyc2lvbkNvbmZpZy5DUF9OQU1FX0Y2OTpcbiAgICAgICAgICAgICAgICAvL25vdGhpbmdcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgLy90aGlzLnRhaVhpdTIuZGlzbWlzcygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja1Nob3coKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2hvd1RYMSkge1xuICAgICAgICAgICAgdGhpcy50YWlYaXUxLmdhbWVQbGF5LnNjYWxlID0gMTtcbiAgICAgICAgICAgIHRoaXMudGFpWGl1MS5nYW1lUGxheS5wb3NpdGlvbiA9IGNjLlZlYzIuWkVSTztcbiAgICAgICAgICAgIHRoaXMudGFpWGl1MS5ub2RlUGFuZWxDaGF0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRhaVhpdTEubm9kZS5zZXRTaWJsaW5nSW5kZXgoMSk7XG5cbiAgICAgICAgICAgLy8gdGhpcy50YWlYaXUyLmdhbWVQbGF5LnNjYWxlID0gMC41O1xuICAgICAgICAgICAvLyB0aGlzLnRhaVhpdTIuZ2FtZVBsYXkucG9zaXRpb24gPSBjYy52MigtNDA1LCAyMzQpO1xuICAgICAgICAgIC8vICB0aGlzLnRhaVhpdTIubm9kZVBhbmVsQ2hhdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgLy8gdGhpcy50YWlYaXUyLmxheW91dEJldC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgdGhpcy50YWlYaXUyLmdhbWVQbGF5LnNjYWxlID0gMTtcbiAgICAgICAvLyAgICAgdGhpcy50YWlYaXUyLmdhbWVQbGF5LnBvc2l0aW9uID0gY2MuVmVjMi5aRVJPO1xuICAgICAgICAvLyAgICB0aGlzLnRhaVhpdTIubm9kZVBhbmVsQ2hhdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyAgICB0aGlzLnRhaVhpdTIubm9kZS5zZXRTaWJsaW5nSW5kZXgoMSk7XG5cbiAgICAgICAgICAgIHRoaXMudGFpWGl1MS5nYW1lUGxheS5zY2FsZSA9IDAuNTtcbiAgICAgICAgICAgIHRoaXMudGFpWGl1MS5nYW1lUGxheS5wb3NpdGlvbiA9IGNjLnYyKC00MDUsIDIzNCk7XG4gICAgICAgICAgICB0aGlzLnRhaVhpdTEubm9kZVBhbmVsQ2hhdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudGFpWGl1MS5sYXlvdXRCZXQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYWN0U3dpdGNoKCkge1xuICAgICAgICB0aGlzLmlzU2hvd1RYMSA9ICF0aGlzLmlzU2hvd1RYMTtcbiAgICAgICAgdGhpcy5jaGVja1Nob3coKTtcbiAgICB9XG59XG4iXX0=