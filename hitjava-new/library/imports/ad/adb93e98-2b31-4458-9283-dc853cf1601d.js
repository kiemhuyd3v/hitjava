"use strict";
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