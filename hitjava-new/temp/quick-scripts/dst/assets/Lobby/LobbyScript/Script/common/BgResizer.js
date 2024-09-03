
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/common/BgResizer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cbf1dlYiXRG35Ei6K+I4cFm', 'BgResizer');
// Lobby/LobbyScript/Script/common/BgResizer.ts

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
var BgResizer = /** @class */ (function (_super) {
    __extends(BgResizer, _super);
    function BgResizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.designResolution = new cc.Size(1560, 720);
        _this.lastWitdh = 0;
        _this.lastHeight = 0;
        return _this;
    }
    BgResizer.prototype.start = function () {
        this.updateSize();
    };
    BgResizer.prototype.update = function (dt) {
        this.updateSize();
    };
    BgResizer.prototype.updateSize = function () {
        var frameSize = cc.view.getFrameSize();
        if (this.lastWitdh !== frameSize.width || this.lastHeight !== frameSize.height) {
            this.lastWitdh = frameSize.width;
            this.lastHeight = frameSize.height;
            if (this.designResolution.width / this.designResolution.height > frameSize.width / frameSize.height) {
                var height = this.designResolution.width * frameSize.height / frameSize.width;
                var width = height * this.designResolution.width / this.designResolution.height;
                var newDesignSize = cc.size(width, height);
                this.node.setContentSize(newDesignSize);
            }
            else {
                var width = this.designResolution.height * frameSize.width / frameSize.height;
                var height = width * this.designResolution.height / this.designResolution.width;
                var newDesignSize = cc.size(width, height);
                var newDesignSize = cc.size(width, height);
                this.node.setContentSize(newDesignSize);
            }
        }
    };
    __decorate([
        property
    ], BgResizer.prototype, "designResolution", void 0);
    BgResizer = __decorate([
        ccclass
    ], BgResizer);
    return BgResizer;
}(cc.Component));
exports.default = BgResizer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXGNvbW1vblxcQmdSZXNpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBc0NDO1FBcENHLHNCQUFnQixHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFbkQsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixnQkFBVSxHQUFXLENBQUMsQ0FBQzs7SUFpQzNCLENBQUM7SUEvQkcseUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsMEJBQU0sR0FBTixVQUFPLEVBQVU7UUFDYixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELDhCQUFVLEdBQVY7UUFDSSxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUU1RSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO1lBRW5DLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRTtnQkFDakcsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7Z0JBQzlFLElBQUksS0FBSyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7Z0JBRWhGLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUMzQztpQkFBTTtnQkFDSCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztnQkFDOUUsSUFBSSxNQUFNLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEYsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBRTNDLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUMzQztTQUNKO0lBQ0wsQ0FBQztJQW5DRDtRQURDLFFBQVE7dURBQzBDO0lBRmxDLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FzQzdCO0lBQUQsZ0JBQUM7Q0F0Q0QsQUFzQ0MsQ0F0Q3NDLEVBQUUsQ0FBQyxTQUFTLEdBc0NsRDtrQkF0Q29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmdSZXNpemVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHlcbiAgICBkZXNpZ25SZXNvbHV0aW9uOiBjYy5TaXplID0gbmV3IGNjLlNpemUoMTU2MCwgNzIwKTtcblxuICAgIGxhc3RXaXRkaDogbnVtYmVyID0gMDtcbiAgICBsYXN0SGVpZ2h0OiBudW1iZXIgPSAwO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZVNpemUoKSB7XG4gICAgICAgIHZhciBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xuICAgICAgICBpZiAodGhpcy5sYXN0V2l0ZGggIT09IGZyYW1lU2l6ZS53aWR0aCB8fCB0aGlzLmxhc3RIZWlnaHQgIT09IGZyYW1lU2l6ZS5oZWlnaHQpIHtcblxuICAgICAgICAgICAgdGhpcy5sYXN0V2l0ZGggPSBmcmFtZVNpemUud2lkdGg7XG4gICAgICAgICAgICB0aGlzLmxhc3RIZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5kZXNpZ25SZXNvbHV0aW9uLndpZHRoIC8gdGhpcy5kZXNpZ25SZXNvbHV0aW9uLmhlaWdodCA+IGZyYW1lU2l6ZS53aWR0aCAvIGZyYW1lU2l6ZS5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5kZXNpZ25SZXNvbHV0aW9uLndpZHRoICogZnJhbWVTaXplLmhlaWdodCAvIGZyYW1lU2l6ZS53aWR0aDtcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSBoZWlnaHQgKiB0aGlzLmRlc2lnblJlc29sdXRpb24ud2lkdGggLyB0aGlzLmRlc2lnblJlc29sdXRpb24uaGVpZ2h0O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBuZXdEZXNpZ25TaXplID0gY2Muc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0Q29udGVudFNpemUobmV3RGVzaWduU2l6ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IHRoaXMuZGVzaWduUmVzb2x1dGlvbi5oZWlnaHQgKiBmcmFtZVNpemUud2lkdGggLyBmcmFtZVNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIHZhciBoZWlnaHQgPSB3aWR0aCAqIHRoaXMuZGVzaWduUmVzb2x1dGlvbi5oZWlnaHQgLyB0aGlzLmRlc2lnblJlc29sdXRpb24ud2lkdGg7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0Rlc2lnblNpemUgPSBjYy5zaXplKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICAgICAgICAgICAgdmFyIG5ld0Rlc2lnblNpemUgPSBjYy5zaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZShuZXdEZXNpZ25TaXplKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==