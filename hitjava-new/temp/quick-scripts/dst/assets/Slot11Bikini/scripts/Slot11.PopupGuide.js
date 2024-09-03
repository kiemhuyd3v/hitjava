
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot11Bikini/scripts/Slot11.PopupGuide.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c67295LtrhLEIKgSY9BzJ5Q', 'Slot11.PopupGuide');
// Slot11Bikini/scripts/Slot11.PopupGuide.ts

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
        this.btnPrev.active = true;
    };
    PopupGuide.prototype.actNext = function () {
        if (this.page < this.pageView.getPages().length - 1) {
            this.page++;
        }
        if (this.page == this.pageView.getPages().length - 1) {
            this.btnNext.active = false;
        }
        this.btnPrev.active = true;
        this.pageView.scrollToPage(this.page, 0.2);
    };
    PopupGuide.prototype.actPrev = function () {
        if (this.page > 0) {
            this.page--;
        }
        if (this.page == 0) {
            this.btnPrev.active = false;
        }
        this.btnNext.active = true;
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
        var soundSave = cc.sys.localStorage.getItem("sound_Slot_1");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDExQmlraW5pXFxzY3JpcHRzXFxTbG90MTEuUG9wdXBHdWlkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUVBQWtFO0FBRzVELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWdDLDhCQUFNO0lBQXRDO1FBQUEscUVBZ0ZDO1FBN0VHLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLHVCQUF1QjtRQUN2Qix5QkFBeUI7UUFFekIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUV4QixVQUFJLEdBQUcsQ0FBQyxDQUFDO1FBRVQsb0JBQWMsR0FBRyxJQUFJLENBQUM7O0lBZ0VsQyxDQUFDO0lBOURHLDBCQUFLLEdBQUw7SUFDQSxDQUFDO0lBR0QseUJBQUksR0FBSjtRQUNJLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQ3JCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsaUJBQU0sSUFBSSxXQUFFLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVELDRCQUFPLEdBQVA7UUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2pELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNmO1FBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDL0I7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxHQUFHLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsNEJBQU8sR0FBUDtRQUNJLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDZixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZjtRQUVELElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRTNCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUdELDRCQUFPLEdBQVA7UUFDSSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUNyQixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNsRDtRQUNELGlCQUFNLE9BQU8sV0FBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxpQ0FBWSxHQUFaO1FBQ0ksSUFBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUk7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUN6QyxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUQsSUFBSSxTQUFTLElBQUksSUFBSSxFQUFFO1lBQ25CLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzdDO2FBQU07WUFDSCxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztTQUMzQjtRQUVELElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEVBQUU7WUFDMUIsT0FBTyxJQUFJLENBQUM7U0FDZjthQUFNO1lBQ0gsT0FBTyxLQUFLLENBQUM7U0FDaEI7SUFDTCxDQUFDO0lBNUVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0RBQ1E7SUFLOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztrREFDRDtJQVp2QixVQUFVO1FBRHRCLE9BQU87T0FDSyxVQUFVLENBZ0Z0QjtJQUFELGlCQUFDO0NBaEZELEFBZ0ZDLENBaEYrQixnQkFBTSxHQWdGckM7QUFoRlksZ0NBQVU7QUFpRnZCLGtCQUFlLFVBQVUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWFsb2cgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vRGlhbG9nXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBQb3B1cEd1aWRlIGV4dGVuZHMgRGlhbG9nIHtcblxuICAgIEBwcm9wZXJ0eShjYy5QYWdlVmlldylcbiAgICBwYWdlVmlldyA6IGNjLlBhZ2VWaWV3ID0gbnVsbDtcblxuICAgIC8vIEBwcm9wZXJ0eShbY2MuTm9kZV0pXG4gICAgLy8gcGFnZXM6IGNjLk5vZGVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0bk5leHQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0blByZXY6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHNvdW5kQ2xpY2s6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBwcml2YXRlIHBhZ2UgPSAwO1xuXG4gICAgcHJpdmF0ZSBzb3VuZFNsb3RTdGF0ZSA9IG51bGw7XG5cbiAgICBzdGFydCgpIHtcbiAgICB9XG5cblxuICAgIHNob3coKSB7XG4gICAgICAgIGlmICh0aGlzLmNhblBsYXlTb3VuZCgpKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyLnNob3coKTtcbiAgICAgICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlVmlldy5nZXRDdXJyZW50UGFnZUluZGV4KCk7XG4gICAgICAgIHRoaXMuYnRuUHJldi5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIGFjdE5leHQoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhZ2UgPCB0aGlzLnBhZ2VWaWV3LmdldFBhZ2VzKCkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgdGhpcy5wYWdlKys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wYWdlID09IHRoaXMucGFnZVZpZXcuZ2V0UGFnZXMoKS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLmJ0bk5leHQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5idG5QcmV2LmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5wYWdlVmlldy5zY3JvbGxUb1BhZ2UodGhpcy5wYWdlLDAuMik7XG4gICAgfVxuXG4gICAgYWN0UHJldigpIHtcbiAgICAgICAgaWYgKHRoaXMucGFnZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucGFnZS0tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucGFnZSA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmJ0blByZXYuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5idG5OZXh0LmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5wYWdlVmlldy5zY3JvbGxUb1BhZ2UodGhpcy5wYWdlLDAuMik7XG4gICAgfVxuXG4gXG4gICAgZGlzbWlzcygpIHtcbiAgICAgICAgaWYgKHRoaXMuY2FuUGxheVNvdW5kKCkpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIuZGlzbWlzcygpO1xuICAgIH1cblxuICAgIGNhblBsYXlTb3VuZCgpIHtcbiAgICAgICAgaWYodGhpcy5zb3VuZENsaWNrID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHNvdW5kU2F2ZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNvdW5kX1Nsb3RfMVwiKTtcbiAgICAgICAgaWYgKHNvdW5kU2F2ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNvdW5kU2xvdFN0YXRlID0gcGFyc2VJbnQoc291bmRTYXZlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc291bmRTbG90U3RhdGUgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBQb3B1cEd1aWRlOyJdfQ==