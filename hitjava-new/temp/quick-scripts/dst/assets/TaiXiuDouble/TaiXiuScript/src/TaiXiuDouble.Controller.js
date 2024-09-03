
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TaiXiuDouble/TaiXiuScript/src/TaiXiuDouble.Controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6fab78Wrn1BQo1sU67+m3Wp', 'TaiXiuDouble.Controller');
// TaiXiuDouble/TaiXiuScript/src/TaiXiuDouble.Controller.ts

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
var VersionConfig_1 = require("../../../Loading/src/VersionConfig");
var MiniGame_1 = require("../../../Lobby/LobbyScript/MiniGame");
var App_1 = require("../../../Lobby/LobbyScript/Script/common/App");
var BroadcastReceiver_1 = require("../../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var MiniGameNetworkClient_1 = require("../../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient");
var TX2NetworkClient_1 = require("../../../Lobby/LobbyScript/Script/networks/TX2NetworkClient");
var TaiXiuMini_TaiXiuMiniController_1 = require("../TaiXiu1/TaiXiuMini.TaiXiuMiniController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TaiXiuDoubleController = /** @class */ (function (_super) {
    __extends(TaiXiuDoubleController, _super);
    function TaiXiuDoubleController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.taiXiu1Node = null;
        _this.btnSwitch = null;
        _this.taiXiu1 = null;
        _this.isShowTX1 = true;
        return _this;
    }
    TaiXiuDoubleController_1 = TaiXiuDoubleController;
    TaiXiuDoubleController.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.taiXiu1 = this.taiXiu1Node.getComponent(TaiXiuMini_TaiXiuMiniController_1.default);
        TaiXiuDoubleController_1.instance = this;
        switch (VersionConfig_1.default.CPName) {
        }
    };
    TaiXiuDoubleController.prototype.reOrder = function () {
        _super.prototype.reOrder.call(this);
        // App.instance.showBgMiniGame("TaiXiu");
    };
    TaiXiuDoubleController.prototype.start = function () {
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
    TaiXiuDoubleController.prototype.show = function () {
        var _this = this;
        _super.prototype.show.call(this);
        App_1.default.instance.showBgMiniGame("TaiXiu");
        this.isShowTX1 = true;
        switch (VersionConfig_1.default.CPName) {
            case VersionConfig_1.default.CP_NAME_HT68:
            case VersionConfig_1.default.CP_NAME_F69:
            case VersionConfig_1.default.CP_NAME_R99_2:
            case VersionConfig_1.default.CP_NAME_MARBLES99:
            case VersionConfig_1.default.CP_NAME_SIN99:
            case VersionConfig_1.default.CP_NAME_ZINGVIP:
                //nothing
                break;
            default:
                TX2NetworkClient_1.default.getInstance().checkConnect(function () {
                    _this.checkShow();
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
    TaiXiuDoubleController.prototype.dismiss = function () {
        _super.prototype.dismiss.call(this);
        App_1.default.instance.buttonMiniGame.showTimeTaiXiu(true);
        this.taiXiu1.dismiss();
        App_1.default.instance.hideGameMini("TaiXiu");
    };
    TaiXiuDoubleController.prototype.checkShow = function () {
        if (this.isShowTX1) {
            this.taiXiu1.gamePlay.scale = 1;
            this.taiXiu1.gamePlay.position = cc.Vec3.ZERO;
            this.taiXiu1.nodePanelChat.active = true;
            this.taiXiu1.node.setSiblingIndex(1);
        }
        else {
            this.taiXiu1.gamePlay.scale = 0.5;
            this.taiXiu1.gamePlay.position = cc.v3(-405, 234, 0);
            this.taiXiu1.nodePanelChat.active = false;
            this.taiXiu1.layoutBet.active = false;
        }
    };
    TaiXiuDoubleController.prototype.actSwitch = function () {
        this.isShowTX1 = !this.isShowTX1;
        this.checkShow();
    };
    var TaiXiuDoubleController_1;
    TaiXiuDoubleController.instance = null;
    __decorate([
        property(cc.Node)
    ], TaiXiuDoubleController.prototype, "taiXiu1Node", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuDoubleController.prototype, "btnSwitch", void 0);
    TaiXiuDoubleController = TaiXiuDoubleController_1 = __decorate([
        ccclass
    ], TaiXiuDoubleController);
    return TaiXiuDoubleController;
}(MiniGame_1.default));
exports.default = TaiXiuDoubleController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGFpWGl1RG91YmxlXFxUYWlYaXVTY3JpcHRcXHNyY1xcVGFpWGl1RG91YmxlLkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esb0VBQStEO0FBQy9ELGdFQUEyRDtBQUMzRCxvRUFBK0Q7QUFDL0QsZ0dBQTJGO0FBQzNGLDBHQUFxRztBQUNyRyxnR0FBMkY7QUFDM0YsOEZBQThFO0FBRXhFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9ELDBDQUFRO0lBQTVEO1FBQUEscUVBNEdDO1FBdkdHLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBSzVCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsYUFBTyxHQUF5QixJQUFJLENBQUM7UUFFN0IsZUFBUyxHQUFHLElBQUksQ0FBQzs7SUE4RjdCLENBQUM7K0JBNUdvQixzQkFBc0I7SUFnQmhDLHVDQUFNLEdBQWI7UUFDSSxpQkFBTSxNQUFNLFdBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMseUNBQW9CLENBQUMsQ0FBQztRQUNuRSx3QkFBc0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRXZDLFFBQVEsdUJBQWEsQ0FBQyxNQUFNLEVBQUU7U0FFN0I7SUFDTCxDQUFDO0lBRU0sd0NBQU8sR0FBZDtRQUNJLGlCQUFNLE9BQU8sV0FBRSxDQUFDO1FBQ2hCLHlDQUF5QztJQUM3QyxDQUFDO0lBRU0sc0NBQUssR0FBWjtRQUFBLGlCQWVDO1FBZEcsMkJBQWlCLENBQUMsUUFBUSxDQUFDLDJCQUFpQixDQUFDLFdBQVcsRUFBRTtZQUN0RCxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNO2dCQUFFLE9BQU87WUFDOUIsS0FBSSxDQUFDLE9BQU8s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QUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN6QztJQUNMLENBQUM7SUFFTSwwQ0FBUyxHQUFoQjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDOztJQXpHTSwrQkFBUSxHQUEyQixJQUFJLENBQUM7SUFHL0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrREFDVTtJQUs1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZEQUNRO0lBVlQsc0JBQXNCO1FBRDFDLE9BQU87T0FDYSxzQkFBc0IsQ0E0RzFDO0lBQUQsNkJBQUM7Q0E1R0QsQUE0R0MsQ0E1R21ELGtCQUFRLEdBNEczRDtrQkE1R29CLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFZlcnNpb25Db25maWcgZnJvbSBcIi4uLy4uLy4uL0xvYWRpbmcvc3JjL1ZlcnNpb25Db25maWdcIjtcbmltcG9ydCBNaW5pR2FtZSBmcm9tIFwiLi4vLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvTWluaUdhbWVcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgQnJvYWRjYXN0UmVjZWl2ZXIgZnJvbSBcIi4uLy4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQnJvYWRjYXN0UmVjZWl2ZXJcIjtcbmltcG9ydCBNaW5pR2FtZU5ldHdvcmtDbGllbnQgZnJvbSBcIi4uLy4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9NaW5pR2FtZU5ldHdvcmtDbGllbnRcIjtcbmltcG9ydCBUWDJOZXR3b3JrQ2xpZW50IGZyb20gXCIuLi8uLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvVFgyTmV0d29ya0NsaWVudFwiO1xuaW1wb3J0IFRhaVhpdU1pbmlDb250cm9sbGVyIGZyb20gXCIuLi9UYWlYaXUxL1RhaVhpdU1pbmkuVGFpWGl1TWluaUNvbnRyb2xsZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhaVhpdURvdWJsZUNvbnRyb2xsZXIgZXh0ZW5kcyBNaW5pR2FtZSB7XG5cbiAgICBzdGF0aWMgaW5zdGFuY2U6IFRhaVhpdURvdWJsZUNvbnRyb2xsZXIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGFpWGl1MU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgXG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidG5Td2l0Y2g6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgdGFpWGl1MTogVGFpWGl1TWluaUNvbnRyb2xsZXIgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBpc1Nob3dUWDEgPSB0cnVlO1xuXG4gICAgcHVibGljIG9uTG9hZCgpIHtcbiAgICAgICAgc3VwZXIub25Mb2FkKCk7XG4gICAgICAgIHRoaXMudGFpWGl1MSA9IHRoaXMudGFpWGl1MU5vZGUuZ2V0Q29tcG9uZW50KFRhaVhpdU1pbmlDb250cm9sbGVyKTtcbiAgICAgICAgVGFpWGl1RG91YmxlQ29udHJvbGxlci5pbnN0YW5jZSA9IHRoaXM7XG5cbiAgICAgICAgc3dpdGNoIChWZXJzaW9uQ29uZmlnLkNQTmFtZSkge1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVPcmRlcigpe1xuICAgICAgICBzdXBlci5yZU9yZGVyKCk7XG4gICAgICAgIC8vIEFwcC5pbnN0YW5jZS5zaG93QmdNaW5pR2FtZShcIlRhaVhpdVwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnQoKSB7XG4gICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnJlZ2lzdGVyKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfTE9HT1VULCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5hZGRPbkNsb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5ub2RlLmFjdGl2ZSkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIFRYMk5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5hZGRPbkNsb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5ub2RlLmFjdGl2ZSkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93KCkge1xuICAgICAgICBzdXBlci5zaG93KCk7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93QmdNaW5pR2FtZShcIlRhaVhpdVwiKTtcbiAgICAgICAgdGhpcy5pc1Nob3dUWDEgPSB0cnVlO1xuXG4gICAgICAgIHN3aXRjaCAoVmVyc2lvbkNvbmZpZy5DUE5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgVmVyc2lvbkNvbmZpZy5DUF9OQU1FX0hUNjg6XG4gICAgICAgICAgICBjYXNlIFZlcnNpb25Db25maWcuQ1BfTkFNRV9GNjk6XG4gICAgICAgICAgICBjYXNlIFZlcnNpb25Db25maWcuQ1BfTkFNRV9SOTlfMjpcbiAgICAgICAgICAgIGNhc2UgVmVyc2lvbkNvbmZpZy5DUF9OQU1FX01BUkJMRVM5OTpcbiAgICAgICAgICAgIGNhc2UgVmVyc2lvbkNvbmZpZy5DUF9OQU1FX1NJTjk5OlxuICAgICAgICAgICAgY2FzZSBWZXJzaW9uQ29uZmlnLkNQX05BTUVfWklOR1ZJUDpcbiAgICAgICAgICAgICAgICAvL25vdGhpbmdcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgVFgyTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmNoZWNrQ29ubmVjdCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tTaG93KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5jaGVja0Nvbm5lY3QoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50YWlYaXUxLnNob3coKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tTaG93KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBBcHAuaW5zdGFuY2UuYnV0dG9uTWluaUdhbWUuc2hvd1RpbWVUYWlYaXUoZmFsc2UpO1xuICAgICAgICB0aGlzLmNoZWNrU2hvdygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXNtaXNzKCkge1xuICAgICAgICBzdXBlci5kaXNtaXNzKCk7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5idXR0b25NaW5pR2FtZS5zaG93VGltZVRhaVhpdSh0cnVlKTtcbiAgICAgICAgdGhpcy50YWlYaXUxLmRpc21pc3MoKTtcbiAgICAgICAgQXBwLmluc3RhbmNlLmhpZGVHYW1lTWluaShcIlRhaVhpdVwiKTtcbiAgICB9XG5cblxuXG4gICAgcHJpdmF0ZSBjaGVja1Nob3coKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2hvd1RYMSkge1xuICAgICAgICAgICAgdGhpcy50YWlYaXUxLmdhbWVQbGF5LnNjYWxlID0gMTtcbiAgICAgICAgICAgIHRoaXMudGFpWGl1MS5nYW1lUGxheS5wb3NpdGlvbiA9IGNjLlZlYzMuWkVSTztcbiAgICAgICAgICAgIHRoaXMudGFpWGl1MS5ub2RlUGFuZWxDaGF0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRhaVhpdTEubm9kZS5zZXRTaWJsaW5nSW5kZXgoMSk7XG5cbiAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgXG5cbiAgICAgICAgICAgIHRoaXMudGFpWGl1MS5nYW1lUGxheS5zY2FsZSA9IDAuNTtcbiAgICAgICAgICAgIHRoaXMudGFpWGl1MS5nYW1lUGxheS5wb3NpdGlvbiA9IGNjLnYzKC00MDUsIDIzNCwwKTtcbiAgICAgICAgICAgIHRoaXMudGFpWGl1MS5ub2RlUGFuZWxDaGF0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy50YWlYaXUxLmxheW91dEJldC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhY3RTd2l0Y2goKSB7XG4gICAgICAgIHRoaXMuaXNTaG93VFgxID0gIXRoaXMuaXNTaG93VFgxO1xuICAgICAgICB0aGlzLmNoZWNrU2hvdygpO1xuICAgIH1cbn1cbiJdfQ==