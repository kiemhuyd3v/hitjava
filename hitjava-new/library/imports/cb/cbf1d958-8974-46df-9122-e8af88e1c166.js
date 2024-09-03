"use strict";
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