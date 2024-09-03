
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/common/CanvasResizer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2a33dcxF+NBW6IzkrkZ/0RB', 'CanvasResizer');
// Lobby/LobbyScript/Script/common/CanvasResizer.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent;
var CanvasResizer = /** @class */ (function (_super) {
    __extends(CanvasResizer, _super);
    function CanvasResizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.designResolution = new cc.Size(1560, 720);
        _this.lastWitdh = 0;
        _this.lastHeight = 0;
        return _this;
    }
    CanvasResizer.prototype.onLoad = function () {
        this.canvas = this.node.getComponent(cc.Canvas);
        this.updateCanvas();
        var tile = cc.winSize.width / cc.winSize.height;
        if (tile >= (16 / 9)) {
            cc.Canvas.instance.fitHeight = true;
            cc.Canvas.instance.fitWidth = false;
        }
        else {
            cc.Canvas.instance.fitHeight = false;
            cc.Canvas.instance.fitWidth = true;
        }
    };
    CanvasResizer.prototype.update = function (dt) {
        this.updateCanvas();
    };
    CanvasResizer.prototype.updateCanvas = function () {
        var frameSize = cc.view.getFrameSize();
        if (this.lastWitdh !== frameSize.width || this.lastHeight !== frameSize.height) {
            this.lastWitdh = frameSize.width;
            this.lastHeight = frameSize.height;
            if (this.designResolution.width / this.designResolution.height > frameSize.width / frameSize.height) {
                var newDesignSize = cc.size(this.designResolution.width, this.designResolution.width * (frameSize.height / frameSize.width));
                this.canvas.designResolution = newDesignSize;
                //Utils.Log("update canvas size: " + newDesignSize);
            }
            else {
                var newDesignSize = cc.size(this.designResolution.height * (frameSize.width / frameSize.height), this.designResolution.height);
                this.canvas.designResolution = newDesignSize;
                //Utils.Log("update canvas size: " + newDesignSize);
            }
        }
    };
    __decorate([
        property
    ], CanvasResizer.prototype, "designResolution", void 0);
    CanvasResizer = __decorate([
        ccclass,
        requireComponent(cc.Canvas)
    ], CanvasResizer);
    return CanvasResizer;
}(cc.Component));
exports.default = CanvasResizer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXGNvbW1vblxcQ2FudmFzUmVzaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQTBDLEVBQUUsQ0FBQyxVQUFVLEVBQXJELE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGdCQUFnQixzQkFBa0IsQ0FBQztBQUk5RDtJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQTRDQztRQXpDRyxzQkFBZ0IsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRW5ELGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7O0lBc0MzQixDQUFDO0lBbkNHLDhCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUE7UUFDL0MsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDbEIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUNwQyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3ZDO2FBQU07WUFDSCxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3JDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDdEM7SUFDTCxDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELG9DQUFZLEdBQVo7UUFDSSxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUU1RSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO1lBRW5DLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRTtnQkFDakcsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUM3SCxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixHQUFHLGFBQWEsQ0FBQztnQkFDNUMsb0RBQW9EO2FBQ3hEO2lCQUFNO2dCQUNILElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDL0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxhQUFhLENBQUM7Z0JBQzVDLG9EQUFvRDthQUN4RDtTQUNKO0lBQ0wsQ0FBQztJQXhDRDtRQURDLFFBQVE7MkRBQzBDO0lBSGxDLGFBQWE7UUFGakMsT0FBTztRQUNQLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7T0FDUCxhQUFhLENBNENqQztJQUFELG9CQUFDO0NBNUNELEFBNENDLENBNUMwQyxFQUFFLENBQUMsU0FBUyxHQTRDdEQ7a0JBNUNvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIHJlcXVpcmVDb21wb25lbnQgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5AcmVxdWlyZUNvbXBvbmVudChjYy5DYW52YXMpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXNSZXNpemVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eVxuICAgIGRlc2lnblJlc29sdXRpb246IGNjLlNpemUgPSBuZXcgY2MuU2l6ZSgxNTYwLCA3MjApO1xuXG4gICAgbGFzdFdpdGRoOiBudW1iZXIgPSAwO1xuICAgIGxhc3RIZWlnaHQ6IG51bWJlciA9IDA7XG4gICAgY2FudmFzOiBjYy5DYW52YXM7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNhbnZhcygpO1xuICAgICAgICBsZXQgdGlsZSA9IGNjLndpblNpemUud2lkdGggLyBjYy53aW5TaXplLmhlaWdodFxuICAgICAgICBpZiAodGlsZSA+PSAoMTYgLyA5KSkge1xuICAgICAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLmZpdEhlaWdodCA9IHRydWU7XG4gICAgICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2UuZml0V2lkdGggPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5maXRIZWlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5maXRXaWR0aCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy51cGRhdGVDYW52YXMoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVDYW52YXMoKSB7XG4gICAgICAgIHZhciBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xuICAgICAgICBpZiAodGhpcy5sYXN0V2l0ZGggIT09IGZyYW1lU2l6ZS53aWR0aCB8fCB0aGlzLmxhc3RIZWlnaHQgIT09IGZyYW1lU2l6ZS5oZWlnaHQpIHtcblxuICAgICAgICAgICAgdGhpcy5sYXN0V2l0ZGggPSBmcmFtZVNpemUud2lkdGg7XG4gICAgICAgICAgICB0aGlzLmxhc3RIZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5kZXNpZ25SZXNvbHV0aW9uLndpZHRoIC8gdGhpcy5kZXNpZ25SZXNvbHV0aW9uLmhlaWdodCA+IGZyYW1lU2l6ZS53aWR0aCAvIGZyYW1lU2l6ZS5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3RGVzaWduU2l6ZSA9IGNjLnNpemUodGhpcy5kZXNpZ25SZXNvbHV0aW9uLndpZHRoLCB0aGlzLmRlc2lnblJlc29sdXRpb24ud2lkdGggKiAoZnJhbWVTaXplLmhlaWdodCAvIGZyYW1lU2l6ZS53aWR0aCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmRlc2lnblJlc29sdXRpb24gPSBuZXdEZXNpZ25TaXplO1xuICAgICAgICAgICAgICAgICAvL1V0aWxzLkxvZyhcInVwZGF0ZSBjYW52YXMgc2l6ZTogXCIgKyBuZXdEZXNpZ25TaXplKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0Rlc2lnblNpemUgPSBjYy5zaXplKHRoaXMuZGVzaWduUmVzb2x1dGlvbi5oZWlnaHQgKiAoZnJhbWVTaXplLndpZHRoIC8gZnJhbWVTaXplLmhlaWdodCksIHRoaXMuZGVzaWduUmVzb2x1dGlvbi5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmRlc2lnblJlc29sdXRpb24gPSBuZXdEZXNpZ25TaXplO1xuICAgICAgICAgICAgICAgICAvL1V0aWxzLkxvZyhcInVwZGF0ZSBjYW52YXMgc2l6ZTogXCIgKyBuZXdEZXNpZ25TaXplKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==