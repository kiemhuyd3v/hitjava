
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot3/Slot3Script/Slot3.PopupGuide.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5d500udDI5AHo8iwKnnRW+R', 'Slot3.PopupGuide');
// Slot3/Slot3Script/Slot3.PopupGuide.ts

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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pageView = null;
        // @property([cc.Node])
        // pages: cc.Node[] = [];
        _this.btnNext = null;
        _this.btnPrev = null;
        _this.soundClick = null;
        _this.page = 0;
        _this.soundSlotState = null;
        return _this;
    }
    PopupGuide.prototype.start = function () {
    };
    PopupGuide.prototype.show = function () {
        if (this.canPlaySound()) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        _super.prototype.show.call(this);
        this.page = this.pageView.getCurrentPageIndex();
        // this.btnPrev.active = true;
    };
    PopupGuide.prototype.actNext = function () {
        if (this.page < this.pageView.getPages().length - 1) {
            this.page++;
        }
        // if (this.page == this.pageView.getPages().length - 1) {
        //     this.btnNext.active = false;
        // }
        // this.btnPrev.active = true;
        this.pageView.scrollToPage(this.page, 0.2);
    };
    PopupGuide.prototype.actPrev = function () {
        if (this.page > 0) {
            this.page--;
        }
        // if (this.page == 0) {
        //     this.btnPrev.active = false;
        // }
        // this.btnNext.active = true;
        this.pageView.scrollToPage(this.page, 0.2);
    };
    PopupGuide.prototype.dismiss = function () {
        if (this.canPlaySound()) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        _super.prototype.dismiss.call(this);
    };
    PopupGuide.prototype.canPlaySound = function () {
        if (this.soundClick == null)
            return false;
        var soundSave = cc.sys.localStorage.getItem("sound_Slot_3");
        if (soundSave != null) {
            this.soundSlotState = parseInt(soundSave);
        }
        else {
            this.soundSlotState = 1;
        }
        if (this.soundSlotState == 1) {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        property(cc.PageView)
    ], PopupGuide.prototype, "pageView", void 0);
    __decorate([
        property(cc.Node)
    ], PopupGuide.prototype, "btnNext", void 0);
    __decorate([
        property(cc.Node)
    ], PopupGuide.prototype, "btnPrev", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], PopupGuide.prototype, "soundClick", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDNcXFNsb3QzU2NyaXB0XFxTbG90My5Qb3B1cEd1aWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RUFBa0U7QUFFNUQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBZ0MsOEJBQU07SUFBdEM7UUFBQSxxRUFnRkM7UUE3RUcsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFFOUIsdUJBQXVCO1FBQ3ZCLHlCQUF5QjtRQUV6QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRXhCLFVBQUksR0FBRyxDQUFDLENBQUM7UUFFVCxvQkFBYyxHQUFHLElBQUksQ0FBQzs7SUFnRWxDLENBQUM7SUE5REcsMEJBQUssR0FBTDtJQUNBLENBQUM7SUFHRCx5QkFBSSxHQUFKO1FBQ0ksSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDckIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDbEQ7UUFDRCxpQkFBTSxJQUFJLFdBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ2hELDhCQUE4QjtJQUNsQyxDQUFDO0lBRUQsNEJBQU8sR0FBUDtRQUNJLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDakQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2Y7UUFFRCwwREFBMEQ7UUFDMUQsbUNBQW1DO1FBQ25DLElBQUk7UUFDSiw4QkFBOEI7UUFFOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxHQUFHLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsNEJBQU8sR0FBUDtRQUNJLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDZixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZjtRQUVELHdCQUF3QjtRQUN4QixtQ0FBbUM7UUFDbkMsSUFBSTtRQUNKLDhCQUE4QjtRQUU5QixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFHRCw0QkFBTyxHQUFQO1FBQ0ksSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDckIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDbEQ7UUFDRCxpQkFBTSxPQUFPLFdBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsaUNBQVksR0FBWjtRQUNJLElBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDekMsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVELElBQUksU0FBUyxJQUFJLElBQUksRUFBRTtZQUNuQixJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM3QzthQUFNO1lBQ0gsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7U0FDM0I7UUFFRCxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7YUFBTTtZQUNILE9BQU8sS0FBSyxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQztJQTVFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2dEQUNRO0lBSzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7a0RBQ0Q7SUFadkIsVUFBVTtRQUR0QixPQUFPO09BQ0ssVUFBVSxDQWdGdEI7SUFBRCxpQkFBQztDQWhGRCxBQWdGQyxDQWhGK0IsZ0JBQU0sR0FnRnJDO0FBaEZZLGdDQUFVO0FBaUZ2QixrQkFBZSxVQUFVLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlhbG9nIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0RpYWxvZ1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFBvcHVwR3VpZGUgZXh0ZW5kcyBEaWFsb2cge1xuXG4gICAgQHByb3BlcnR5KGNjLlBhZ2VWaWV3KVxuICAgIHBhZ2VWaWV3IDogY2MuUGFnZVZpZXcgPSBudWxsO1xuXG4gICAgLy8gQHByb3BlcnR5KFtjYy5Ob2RlXSlcbiAgICAvLyBwYWdlczogY2MuTm9kZVtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnRuTmV4dDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnRuUHJldjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgc291bmRDbGljazogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIHByaXZhdGUgcGFnZSA9IDA7XG5cbiAgICBwcml2YXRlIHNvdW5kU2xvdFN0YXRlID0gbnVsbDtcblxuICAgIHN0YXJ0KCkge1xuICAgIH1cblxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgaWYgKHRoaXMuY2FuUGxheVNvdW5kKCkpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIuc2hvdygpO1xuICAgICAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VWaWV3LmdldEN1cnJlbnRQYWdlSW5kZXgoKTtcbiAgICAgICAgLy8gdGhpcy5idG5QcmV2LmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgYWN0TmV4dCgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFnZSA8IHRoaXMucGFnZVZpZXcuZ2V0UGFnZXMoKS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2UrKztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmICh0aGlzLnBhZ2UgPT0gdGhpcy5wYWdlVmlldy5nZXRQYWdlcygpLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuYnRuTmV4dC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB0aGlzLmJ0blByZXYuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnBhZ2VWaWV3LnNjcm9sbFRvUGFnZSh0aGlzLnBhZ2UsMC4yKTtcbiAgICB9XG5cbiAgICBhY3RQcmV2KCkge1xuICAgICAgICBpZiAodGhpcy5wYWdlID4gMCkge1xuICAgICAgICAgICAgdGhpcy5wYWdlLS07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiAodGhpcy5wYWdlID09IDApIHtcbiAgICAgICAgLy8gICAgIHRoaXMuYnRuUHJldi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB0aGlzLmJ0bk5leHQuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnBhZ2VWaWV3LnNjcm9sbFRvUGFnZSh0aGlzLnBhZ2UsMC4yKTtcbiAgICB9XG5cbiBcbiAgICBkaXNtaXNzKCkge1xuICAgICAgICBpZiAodGhpcy5jYW5QbGF5U291bmQoKSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci5kaXNtaXNzKCk7XG4gICAgfVxuXG4gICAgY2FuUGxheVNvdW5kKCkge1xuICAgICAgICBpZih0aGlzLnNvdW5kQ2xpY2sgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgc291bmRTYXZlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic291bmRfU2xvdF8zXCIpO1xuICAgICAgICBpZiAoc291bmRTYXZlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc291bmRTbG90U3RhdGUgPSBwYXJzZUludChzb3VuZFNhdmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zb3VuZFNsb3RTdGF0ZSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFBvcHVwR3VpZGU7Il19