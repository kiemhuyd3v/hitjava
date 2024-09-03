
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/MiniGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c0443y5h9NOK63Ba/g4+JDh', 'MiniGame');
// Lobby/LobbyScript/MiniGame.ts

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
var App_1 = require("./Script/common/App");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var lobby;
(function (lobby) {
    var MiniGame = /** @class */ (function (_super) {
        __extends(MiniGame, _super);
        function MiniGame() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.gamePlay = null;
            _this.nameGame = "";
            return _this;
        }
        MiniGame.prototype.onLoad = function () {
            var _this = this;
            this.gamePlay.on(cc.Node.EventType.TOUCH_START, function (event) {
                App_1.default.instance.showBgMiniGame(_this.nameGame);
            }, this);
            this.gamePlay.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
                var pos = _this.gamePlay.position;
                pos.x += event.getDeltaX();
                pos.y += event.getDeltaY();
                _this.gamePlay.position = pos;
            }, this);
        };
        MiniGame.prototype.reOrder = function () {
            // var zIndex = 0;
            // for (var i = 0; i < this.node.parent.childrenCount; i++) {
            //     let node = this.node.parent.children[i];
            //     if (node != this.node) {
            //         node.zIndex = zIndex++;
            //     }
            // }
            // this.node.zIndex = zIndex++;
            // App.instance.showBgMiniGame(this.nameGame);
            this.node.setSiblingIndex(this.node.parent.childrenCount);
        };
        MiniGame.prototype.show = function () {
            var _this = this;
            this.reOrder();
            this.node.active = true;
            this.gamePlay.stopAllActions();
            this.gamePlay.scale = 0.8;
            // this.gamePlay.runAction(cc.sequence(
            //     cc.scaleTo(0.3, 1),
            //     cc.callFunc(() => {
            //         this._onShowed();
            //     })
            // ));
            cc.tween(this.gamePlay).to(0.3, { scale: 1.0, opacity: 255 }, { easing: cc.easing.backOut }).call(function () {
                _this._onShowed();
            }).start();
        };
        MiniGame.prototype._onShowed = function () {
            //  //Utils.Log("_onShowed");
        };
        MiniGame.prototype.dismiss = function () {
            var _this = this;
            this.gamePlay.stopAllActions();
            // this.gamePlay.runAction(cc.sequence(
            //     cc.scaleTo(0.3, 0),
            //     cc.callFunc(() => {
            //         this._onDismissed();
            //     })
            // ));
            cc.tween(this.gamePlay).to(0.3, { scale: 0.8, opacity: 150 }, { easing: cc.easing.backIn }).call(function () {
                _this._onDismissed();
            }).start();
        };
        MiniGame.prototype._onDismissed = function () {
            //  //Utils.Log("_onDismissed");
            this.node.active = false;
        };
        __decorate([
            property(cc.Node)
        ], MiniGame.prototype, "gamePlay", void 0);
        __decorate([
            property
        ], MiniGame.prototype, "nameGame", void 0);
        MiniGame = __decorate([
            ccclass
        ], MiniGame);
        return MiniGame;
    }(cc.Component));
    lobby.MiniGame = MiniGame;
})(lobby || (lobby = {}));
exports.default = lobby.MiniGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxNaW5pR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFFaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBVSxLQUFLLENBeUVkO0FBekVELFdBQVUsS0FBSztJQUVYO1FBQThCLDRCQUFZO1FBQTFDO1lBQUEscUVBcUVDO1lBbEVHLGNBQVEsR0FBWSxJQUFJLENBQUM7WUFFekIsY0FBUSxHQUFXLEVBQUUsQ0FBQzs7UUFnRTFCLENBQUM7UUEvREcseUJBQU0sR0FBTjtZQUFBLGlCQVdDO1lBVkcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBMEI7Z0JBQ3ZFLGFBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFVCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsVUFBQyxLQUEwQjtnQkFDdEUsSUFBSSxHQUFHLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7Z0JBQ2pDLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUMzQixHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDM0IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1lBQ2pDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNiLENBQUM7UUFFRCwwQkFBTyxHQUFQO1lBQ0ksa0JBQWtCO1lBQ2xCLDZEQUE2RDtZQUM3RCwrQ0FBK0M7WUFDL0MsK0JBQStCO1lBQy9CLGtDQUFrQztZQUNsQyxRQUFRO1lBQ1IsSUFBSTtZQUNKLCtCQUErQjtZQUMvQiw4Q0FBOEM7WUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDOUQsQ0FBQztRQUVELHVCQUFJLEdBQUo7WUFBQSxpQkFjQztZQWJHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUMxQix1Q0FBdUM7WUFDdkMsMEJBQTBCO1lBQzFCLDBCQUEwQjtZQUMxQiw0QkFBNEI7WUFDNUIsU0FBUztZQUNULE1BQU07WUFDTixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDOUYsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQztRQUVELDRCQUFTLEdBQVQ7WUFDSSw2QkFBNkI7UUFDakMsQ0FBQztRQUVELDBCQUFPLEdBQVA7WUFBQSxpQkFXQztZQVZHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDL0IsdUNBQXVDO1lBQ3ZDLDBCQUEwQjtZQUMxQiwwQkFBMEI7WUFDMUIsK0JBQStCO1lBQy9CLFNBQVM7WUFDVCxNQUFNO1lBQ04sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzdGLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN4QixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLENBQUM7UUFFRCwrQkFBWSxHQUFaO1lBQ0ksZ0NBQWdDO1lBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDO1FBakVEO1lBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ087UUFFekI7WUFEQyxRQUFRO2tEQUNhO1FBTGIsUUFBUTtZQURwQixPQUFPO1dBQ0ssUUFBUSxDQXFFcEI7UUFBRCxlQUFDO0tBckVELEFBcUVDLENBckU2QixFQUFFLENBQUMsU0FBUyxHQXFFekM7SUFyRVksY0FBUSxXQXFFcEIsQ0FBQTtBQUVMLENBQUMsRUF6RVMsS0FBSyxLQUFMLEtBQUssUUF5RWQ7QUFFRCxrQkFBZSxLQUFLLENBQUMsUUFBUSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL0FwcFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5uYW1lc3BhY2UgbG9iYnkge1xuICAgIEBjY2NsYXNzXG4gICAgZXhwb3J0IGNsYXNzIE1pbmlHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgICAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAgICAgZ2FtZVBsYXk6IGNjLk5vZGUgPSBudWxsO1xuICAgICAgICBAcHJvcGVydHlcbiAgICAgICAgbmFtZUdhbWU6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkgPT4ge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93QmdNaW5pR2FtZSh0aGlzLm5hbWVHYW1lKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBwb3MgPSB0aGlzLmdhbWVQbGF5LnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHBvcy54ICs9IGV2ZW50LmdldERlbHRhWCgpO1xuICAgICAgICAgICAgICAgIHBvcy55ICs9IGV2ZW50LmdldERlbHRhWSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkucG9zaXRpb24gPSBwb3M7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlT3JkZXIoKSB7XG4gICAgICAgICAgICAvLyB2YXIgekluZGV4ID0gMDtcbiAgICAgICAgICAgIC8vIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ub2RlLnBhcmVudC5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIC8vICAgICBsZXQgbm9kZSA9IHRoaXMubm9kZS5wYXJlbnQuY2hpbGRyZW5baV07XG4gICAgICAgICAgICAvLyAgICAgaWYgKG5vZGUgIT0gdGhpcy5ub2RlKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIG5vZGUuekluZGV4ID0gekluZGV4Kys7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnpJbmRleCA9IHpJbmRleCsrO1xuICAgICAgICAgICAgLy8gQXBwLmluc3RhbmNlLnNob3dCZ01pbmlHYW1lKHRoaXMubmFtZUdhbWUpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFNpYmxpbmdJbmRleCh0aGlzLm5vZGUucGFyZW50LmNoaWxkcmVuQ291bnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2hvdygpIHtcbiAgICAgICAgICAgIHRoaXMucmVPcmRlcigpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LnNjYWxlID0gMC44O1xuICAgICAgICAgICAgLy8gdGhpcy5nYW1lUGxheS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAvLyAgICAgY2Muc2NhbGVUbygwLjMsIDEpLFxuICAgICAgICAgICAgLy8gICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5fb25TaG93ZWQoKTtcbiAgICAgICAgICAgIC8vICAgICB9KVxuICAgICAgICAgICAgLy8gKSk7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmdhbWVQbGF5KS50bygwLjMsIHsgc2NhbGU6IDEuMCwgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuYmFja091dCB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vblNob3dlZCgpO1xuICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9vblNob3dlZCgpIHtcbiAgICAgICAgICAgIC8vICAvL1V0aWxzLkxvZyhcIl9vblNob3dlZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpc21pc3MoKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICAvLyB0aGlzLmdhbWVQbGF5LnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgIC8vICAgICBjYy5zY2FsZVRvKDAuMywgMCksXG4gICAgICAgICAgICAvLyAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLl9vbkRpc21pc3NlZCgpO1xuICAgICAgICAgICAgLy8gICAgIH0pXG4gICAgICAgICAgICAvLyApKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZ2FtZVBsYXkpLnRvKDAuMywgeyBzY2FsZTogMC44LCBvcGFjaXR5OiAxNTAgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5iYWNrSW4gfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb25EaXNtaXNzZWQoKTtcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBfb25EaXNtaXNzZWQoKSB7XG4gICAgICAgICAgICAvLyAgLy9VdGlscy5Mb2coXCJfb25EaXNtaXNzZWRcIik7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9iYnkuTWluaUdhbWU7Il19