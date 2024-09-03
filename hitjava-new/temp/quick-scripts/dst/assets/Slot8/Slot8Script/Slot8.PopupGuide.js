
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot8/Slot8Script/Slot8.PopupGuide.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7d3c39F/xBO95FWPBMqKT58', 'Slot8.PopupGuide');
// Slot8/Slot8Script/Slot8.PopupGuide.ts

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
exports.PopupGuide = void 0;
var Dialog_1 = require("../../Lobby/LobbyScript/Script/common/Dialog");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupGuide = /** @class */ (function (_super) {
    __extends(PopupGuide, _super);
    function PopupGuide() {
        // @property([cc.Node])
        // pages: cc.Node[] = [];
        // @property(cc.Node)
        // btnNext: cc.Node = null;
        // @property(cc.Node)
        // btnPrev: cc.Node = null;
        // @property({ type: cc.AudioClip })
        // soundClick: cc.AudioClip = null;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.page = 0;
        _this.soundSlotState = null;
        return _this;
    }
    PopupGuide.prototype.start = function () {
    };
    PopupGuide.prototype.show = function () {
        // if (this.canPlaySound()) {
        //     cc.audioEngine.play(this.soundClick, false, 1);
        // }
        _super.prototype.show.call(this);
        //this.page = 0;
        //this.btnPrev.active = true;
        // this.reloadData();
    };
    PopupGuide.prototype.dismiss = function () {
        _super.prototype.dismiss.call(this);
    };
    PopupGuide.prototype.canPlaySound = function () {
    };
    PopupGuide = __decorate([
        ccclass
    ], PopupGuide);
    return PopupGuide;
}(Dialog_1.default));
exports.PopupGuide = PopupGuide;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDhcXFNsb3Q4U2NyaXB0XFxTbG90OC5Qb3B1cEd1aWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RUFBa0U7QUFFNUQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBZ0MsOEJBQU07SUFBdEM7UUFFSSx1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLHFCQUFxQjtRQUNyQiwyQkFBMkI7UUFDM0IscUJBQXFCO1FBQ3JCLDJCQUEyQjtRQUMzQixvQ0FBb0M7UUFDcEMsbUNBQW1DO1FBVHZDLHFFQXNDQztRQTNCVyxVQUFJLEdBQUcsQ0FBQyxDQUFDO1FBRVQsb0JBQWMsR0FBRyxJQUFJLENBQUM7O0lBeUJsQyxDQUFDO0lBdkJHLDBCQUFLLEdBQUw7SUFDQSxDQUFDO0lBR0QseUJBQUksR0FBSjtRQUNJLDZCQUE2QjtRQUM3QixzREFBc0Q7UUFDdEQsSUFBSTtRQUNKLGlCQUFNLElBQUksV0FBRSxDQUFDO1FBQ2IsZ0JBQWdCO1FBQ2hCLDZCQUE2QjtRQUM5QixxQkFBcUI7SUFDeEIsQ0FBQztJQUdELDRCQUFPLEdBQVA7UUFFSSxpQkFBTSxPQUFPLFdBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsaUNBQVksR0FBWjtJQUVBLENBQUM7SUFyQ1EsVUFBVTtRQUR0QixPQUFPO09BQ0ssVUFBVSxDQXNDdEI7SUFBRCxpQkFBQztDQXRDRCxBQXNDQyxDQXRDK0IsZ0JBQU0sR0FzQ3JDO0FBdENZLGdDQUFVO0FBdUN2QixrQkFBZSxVQUFVLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlhbG9nIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0RpYWxvZ1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFBvcHVwR3VpZGUgZXh0ZW5kcyBEaWFsb2cge1xuXG4gICAgLy8gQHByb3BlcnR5KFtjYy5Ob2RlXSlcbiAgICAvLyBwYWdlczogY2MuTm9kZVtdID0gW107XG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gYnRuTmV4dDogY2MuTm9kZSA9IG51bGw7XG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gYnRuUHJldjogY2MuTm9kZSA9IG51bGw7XG4gICAgLy8gQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgLy8gc291bmRDbGljazogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIHByaXZhdGUgcGFnZSA9IDA7XG5cbiAgICBwcml2YXRlIHNvdW5kU2xvdFN0YXRlID0gbnVsbDtcblxuICAgIHN0YXJ0KCkge1xuICAgIH1cblxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMuY2FuUGxheVNvdW5kKCkpIHtcbiAgICAgICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgc3VwZXIuc2hvdygpO1xuICAgICAgICAvL3RoaXMucGFnZSA9IDA7XG4gICAgICAgIC8vdGhpcy5idG5QcmV2LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgLy8gdGhpcy5yZWxvYWREYXRhKCk7XG4gICAgfVxuXG4gICAgXG4gICAgZGlzbWlzcygpIHtcbiAgICAgICAgXG4gICAgICAgIHN1cGVyLmRpc21pc3MoKTtcbiAgICB9XG5cbiAgICBjYW5QbGF5U291bmQoKSB7XG4gICAgICAgXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUG9wdXBHdWlkZTsiXX0=