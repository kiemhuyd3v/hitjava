
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/MiniGame1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'adb936YKzFEWJKD3IU88WAd', 'MiniGame1');
// Lobby/LobbyScript/MiniGame1.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var lobby;
(function (lobby) {
    var MiniGame = /** @class */ (function (_super) {
        __extends(MiniGame, _super);
        function MiniGame() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.gamePlay = null;
            return _this;
        }
        MiniGame.prototype.onLoad = function () {
            var _this = this;
            this.gamePlay.on(cc.Node.EventType.TOUCH_START, function (event) {
                _this.reOrder();
            }, this);
            this.gamePlay.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
                var pos = _this.gamePlay.position;
                pos.x += event.getDeltaX();
                pos.y += event.getDeltaY();
                _this.gamePlay.position = pos;
            }, this);
        };
        MiniGame.prototype.reOrder = function () {
            var zIndex = 0;
            for (var i = 0; i < this.node.parent.childrenCount; i++) {
                var node = this.node.parent.children[i];
                if (node != this.node) {
                    node.zIndex = zIndex++;
                }
            }
            this.node.zIndex = zIndex++;
        };
        MiniGame.prototype.show = function () {
            var _this = this;
            this.reOrder();
            this.node.active = true;
            this.gamePlay.stopAllActions();
            this.gamePlay.scale = 0;
            this.gamePlay.runAction(cc.sequence(cc.scaleTo(0.3, 1), cc.callFunc(function () {
                _this._onShowed();
            })));
        };
        MiniGame.prototype._onShowed = function () {
            // console.log("_onShowed");
        };
        MiniGame.prototype.dismiss = function () {
            var _this = this;
            this.gamePlay.stopAllActions();
            this.gamePlay.runAction(cc.sequence(cc.scaleTo(0.3, 0), cc.callFunc(function () {
                _this._onDismissed();
            })));
        };
        MiniGame.prototype._onDismissed = function () {
            // console.log("_onDismissed");
            this.node.active = false;
        };
        __decorate([
            property(cc.Node)
        ], MiniGame.prototype, "gamePlay", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxNaW5pR2FtZTEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBVSxLQUFLLENBZ0VkO0FBaEVELFdBQVUsS0FBSztJQUVYO1FBQThCLDRCQUFZO1FBQTFDO1lBQUEscUVBNERDO1lBekRHLGNBQVEsR0FBWSxJQUFJLENBQUM7O1FBeUQ3QixDQUFDO1FBdkRHLHlCQUFNLEdBQU47WUFBQSxpQkFXQztZQVZHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxVQUFDLEtBQTBCO2dCQUN2RSxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRVQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFVBQUMsS0FBMEI7Z0JBQ3RFLElBQUksR0FBRyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO2dCQUNqQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDM0IsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUNqQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDYixDQUFDO1FBRUQsMEJBQU8sR0FBUDtZQUNJLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3JELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQUUsQ0FBQztpQkFDMUI7YUFDSjtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRSxDQUFDO1FBQ2hDLENBQUM7UUFFRCx1QkFBSSxHQUFKO1lBQUEsaUJBV0M7WUFWRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FDL0IsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQ2xCLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBQ1IsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxDQUNMLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRCw0QkFBUyxHQUFUO1lBQ0ksNEJBQTRCO1FBQ2hDLENBQUM7UUFFRCwwQkFBTyxHQUFQO1lBQUEsaUJBUUM7WUFQRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQy9CLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUNsQixFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUNSLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN4QixDQUFDLENBQUMsQ0FDTCxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRUQsK0JBQVksR0FBWjtZQUNJLCtCQUErQjtZQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQztRQXhERDtZQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNPO1FBSGhCLFFBQVE7WUFEcEIsT0FBTztXQUNLLFFBQVEsQ0E0RHBCO1FBQUQsZUFBQztLQTVERCxBQTREQyxDQTVENkIsRUFBRSxDQUFDLFNBQVMsR0E0RHpDO0lBNURZLGNBQVEsV0E0RHBCLENBQUE7QUFFTCxDQUFDLEVBaEVTLEtBQUssS0FBTCxLQUFLLFFBZ0VkO0FBRUQsa0JBQWUsS0FBSyxDQUFDLFFBQVEsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5uYW1lc3BhY2UgbG9iYnkge1xyXG4gICAgQGNjY2xhc3NcclxuICAgIGV4cG9ydCBjbGFzcyBNaW5pR2FtZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgICAgIGdhbWVQbGF5OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAgICAgb25Mb2FkKCkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVPcmRlcigpO1xyXG4gICAgICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9zID0gdGhpcy5nYW1lUGxheS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IGV2ZW50LmdldERlbHRhWCgpO1xyXG4gICAgICAgICAgICAgICAgcG9zLnkgKz0gZXZlbnQuZ2V0RGVsdGFZKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5LnBvc2l0aW9uID0gcG9zO1xyXG4gICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlT3JkZXIoKSB7XHJcbiAgICAgICAgICAgIHZhciB6SW5kZXggPSAwO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubm9kZS5wYXJlbnQuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMubm9kZS5wYXJlbnQuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZSAhPSB0aGlzLm5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnpJbmRleCA9IHpJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS56SW5kZXggPSB6SW5kZXgrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNob3coKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVPcmRlcigpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LnNjYWxlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMywgMSksXHJcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25TaG93ZWQoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgX29uU2hvd2VkKCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIl9vblNob3dlZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpc21pc3MoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMywgMCksXHJcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25EaXNtaXNzZWQoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgX29uRGlzbWlzc2VkKCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIl9vbkRpc21pc3NlZFwiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYmJ5Lk1pbmlHYW1lOyJdfQ==