
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/common/NodeScaler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '47b78nTZ65Nkozgov27lpvd', 'NodeScaler');
// Lobby/LobbyScript/Script/common/NodeScaler.ts

"use strict";
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
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
var NodeScaler = /** @class */ (function (_super) {
    __extends(NodeScaler, _super);
    function NodeScaler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.designResolution = new cc.Size(1560, 720);
        _this.fitX = false;
        _this.fitY = false;
        _this.lastWitdh = 0;
        _this.lastHeight = 0;
        _this.canvas = null;
        return _this;
    }
    NodeScaler.prototype.start = function () {
        this.canvas = this.getCanvas();
        this.updateSize();
    };
    NodeScaler.prototype.update = function (dt) {
        this.updateSize();
    };
    NodeScaler.prototype.updateSize = function () {
        var frameSize = cc.view.getFrameSize();
        if (this.lastWitdh !== frameSize.width || this.lastHeight !== frameSize.height) {
            this.lastWitdh = frameSize.width;
            this.lastHeight = frameSize.height;
            if (this.canvas != null && this.fitX && !this.fitY) {
                this.node.scaleX = this.canvas.designResolution.width / this.designResolution.width;
            }
            else if (this.canvas != null && this.fitY && !this.fitX) {
                this.node.scaleY = this.canvas.designResolution.height / this.designResolution.height;
            }
            else {
                var frameScale = frameSize.width / frameSize.height;
                var designScale = this.designResolution.width / this.designResolution.height;
                if (this.designResolution.width / this.designResolution.height > frameSize.width / frameSize.height) {
                    this.node.setScale(designScale / frameScale);
                }
                else {
                    this.node.setScale(frameScale / designScale);
                }
            }
        }
    };
    NodeScaler.prototype.getCanvas = function (node) {
        if (node === void 0) { node = null; }
        if (node == null) {
            node = this.node;
        }
        if (node.parent != null) {
            var canvas = node.parent.getComponent(cc.Canvas);
            if (canvas != null) {
                return canvas;
            }
            else {
                return this.getCanvas(node.parent);
            }
        }
        return null;
    };
    __decorate([
        property
    ], NodeScaler.prototype, "designResolution", void 0);
    __decorate([
        property
    ], NodeScaler.prototype, "fitX", void 0);
    __decorate([
        property
    ], NodeScaler.prototype, "fitY", void 0);
    NodeScaler = __decorate([
        ccclass
    ], NodeScaler);
    return NodeScaler;
}(cc.Component));
exports.default = NodeScaler;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXGNvbW1vblxcTm9kZVNjYWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3RixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQTZEQztRQTFERyxzQkFBZ0IsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRW5ELFVBQUksR0FBWSxLQUFLLENBQUM7UUFFdEIsVUFBSSxHQUFZLEtBQUssQ0FBQztRQUV0QixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBRXZCLFlBQU0sR0FBYyxJQUFJLENBQUM7O0lBaUQ3QixDQUFDO0lBL0NHLDBCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELDJCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCwrQkFBVSxHQUFWO1FBQ0ksSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN2QyxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFFNUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUVuQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ3ZGO2lCQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7YUFDekY7aUJBQU07Z0JBQ0gsSUFBSSxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO2dCQUNwRCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7Z0JBRTdFLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRTtvQkFDakcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxDQUFDO2lCQUNoRDtxQkFBTTtvQkFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDLENBQUM7aUJBQ2hEO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUFFTyw4QkFBUyxHQUFqQixVQUFrQixJQUFvQjtRQUFwQixxQkFBQSxFQUFBLFdBQW9CO1FBQ2xDLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUNkLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtZQUNyQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakQsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO2dCQUNoQixPQUFPLE1BQU0sQ0FBQzthQUNqQjtpQkFBTTtnQkFDSCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3RDO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBekREO1FBREMsUUFBUTt3REFDMEM7SUFFbkQ7UUFEQyxRQUFROzRDQUNhO0lBRXRCO1FBREMsUUFBUTs0Q0FDYTtJQVBMLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0E2RDlCO0lBQUQsaUJBQUM7Q0E3REQsQUE2REMsQ0E3RHVDLEVBQUUsQ0FBQyxTQUFTLEdBNkRuRDtrQkE3RG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZVNjYWxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHlcbiAgICBkZXNpZ25SZXNvbHV0aW9uOiBjYy5TaXplID0gbmV3IGNjLlNpemUoMTU2MCwgNzIwKTtcbiAgICBAcHJvcGVydHlcbiAgICBmaXRYOiBib29sZWFuID0gZmFsc2U7XG4gICAgQHByb3BlcnR5XG4gICAgZml0WTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgbGFzdFdpdGRoOiBudW1iZXIgPSAwO1xuICAgIGxhc3RIZWlnaHQ6IG51bWJlciA9IDA7XG5cbiAgICBjYW52YXM6IGNjLkNhbnZhcyA9IG51bGw7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSB0aGlzLmdldENhbnZhcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTaXplKCkge1xuICAgICAgICB2YXIgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcbiAgICAgICAgaWYgKHRoaXMubGFzdFdpdGRoICE9PSBmcmFtZVNpemUud2lkdGggfHwgdGhpcy5sYXN0SGVpZ2h0ICE9PSBmcmFtZVNpemUuaGVpZ2h0KSB7XG5cbiAgICAgICAgICAgIHRoaXMubGFzdFdpdGRoID0gZnJhbWVTaXplLndpZHRoO1xuICAgICAgICAgICAgdGhpcy5sYXN0SGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY2FudmFzICE9IG51bGwgJiYgdGhpcy5maXRYICYmICF0aGlzLmZpdFkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gdGhpcy5jYW52YXMuZGVzaWduUmVzb2x1dGlvbi53aWR0aCAvIHRoaXMuZGVzaWduUmVzb2x1dGlvbi53aWR0aDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jYW52YXMgIT0gbnVsbCAmJiB0aGlzLmZpdFkgJiYgIXRoaXMuZml0WCkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVkgPSB0aGlzLmNhbnZhcy5kZXNpZ25SZXNvbHV0aW9uLmhlaWdodCAvIHRoaXMuZGVzaWduUmVzb2x1dGlvbi5oZWlnaHQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBmcmFtZVNjYWxlID0gZnJhbWVTaXplLndpZHRoIC8gZnJhbWVTaXplLmhlaWdodDtcbiAgICAgICAgICAgICAgICB2YXIgZGVzaWduU2NhbGUgPSB0aGlzLmRlc2lnblJlc29sdXRpb24ud2lkdGggLyB0aGlzLmRlc2lnblJlc29sdXRpb24uaGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVzaWduUmVzb2x1dGlvbi53aWR0aCAvIHRoaXMuZGVzaWduUmVzb2x1dGlvbi5oZWlnaHQgPiBmcmFtZVNpemUud2lkdGggLyBmcmFtZVNpemUuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRTY2FsZShkZXNpZ25TY2FsZSAvIGZyYW1lU2NhbGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRTY2FsZShmcmFtZVNjYWxlIC8gZGVzaWduU2NhbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q2FudmFzKG5vZGU6IGNjLk5vZGUgPSBudWxsKTogY2MuQ2FudmFzIHtcbiAgICAgICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgbm9kZSA9IHRoaXMubm9kZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS5wYXJlbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IGNhbnZhcyA9IG5vZGUucGFyZW50LmdldENvbXBvbmVudChjYy5DYW52YXMpO1xuICAgICAgICAgICAgaWYgKGNhbnZhcyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbnZhcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2FudmFzKG5vZGUucGFyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iXX0=