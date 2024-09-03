
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot1/Slot1Script/Slot1.PopupGuide.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '812783YWhZDhZoyNS1qc2Qn', 'Slot1.PopupGuide');
// Slot1/Slot1Script/Slot1.PopupGuide.ts

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
        _this.pages = [];
        _this.page = 0;
        _this.soundSlotState = null;
        return _this;
    }
    PopupGuide.prototype.start = function () {
    };
    PopupGuide.prototype.show = function () {
        _super.prototype.show.call(this);
        this.page = 0;
        // this.reloadData();
    };
    PopupGuide.prototype.actNext = function () {
        if (this.page < this.pages.length - 1) {
            this.page++;
        }
        this.reloadData();
    };
    PopupGuide.prototype.actPrev = function () {
        if (this.page > 0) {
            this.page--;
        }
        this.reloadData();
    };
    PopupGuide.prototype.reloadData = function () {
        for (var i = 0; i < this.pages.length; i++) {
            this.pages[i].active = i == this.page;
        }
    };
    PopupGuide.prototype.dismiss = function () {
        _super.prototype.dismiss.call(this);
    };
    PopupGuide.prototype.canPlaySound = function () {
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
        property([cc.Node])
    ], PopupGuide.prototype, "pages", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDFcXFNsb3QxU2NyaXB0XFxTbG90MS5Qb3B1cEd1aWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RUFBa0U7QUFFNUQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBZ0MsOEJBQU07SUFBdEM7UUFBQSxxRUE4REM7UUEzREcsV0FBSyxHQUFjLEVBQUUsQ0FBQztRQUdkLFVBQUksR0FBRyxDQUFDLENBQUM7UUFFVCxvQkFBYyxHQUFHLElBQUksQ0FBQzs7SUFzRGxDLENBQUM7SUFwREcsMEJBQUssR0FBTDtJQUNBLENBQUM7SUFHRCx5QkFBSSxHQUFKO1FBRUksaUJBQU0sSUFBSSxXQUFFLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNkLHFCQUFxQjtJQUN6QixDQUFDO0lBRUQsNEJBQU8sR0FBUDtRQUNJLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2Y7UUFDRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFFdEIsQ0FBQztJQUVELDRCQUFPLEdBQVA7UUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ2YsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2Y7UUFDRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFFdEIsQ0FBQztJQUVPLCtCQUFVLEdBQWxCO1FBQ0ksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3pDO0lBQ0wsQ0FBQztJQUVELDRCQUFPLEdBQVA7UUFFSSxpQkFBTSxPQUFPLFdBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsaUNBQVksR0FBWjtRQUNJLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1RCxJQUFJLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNILElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1NBQzNCO1FBRUQsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQztTQUNmO2FBQU07WUFDSCxPQUFPLEtBQUssQ0FBQztTQUNoQjtJQUNMLENBQUM7SUExREQ7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7NkNBQ0U7SUFIYixVQUFVO1FBRHRCLE9BQU87T0FDSyxVQUFVLENBOER0QjtJQUFELGlCQUFDO0NBOURELEFBOERDLENBOUQrQixnQkFBTSxHQThEckM7QUE5RFksZ0NBQVU7QUErRHZCLGtCQUFlLFVBQVUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWFsb2cgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vRGlhbG9nXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgUG9wdXBHdWlkZSBleHRlbmRzIERpYWxvZyB7XG5cbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxuICAgIHBhZ2VzOiBjYy5Ob2RlW10gPSBbXTtcbiAgICBcblxuICAgIHByaXZhdGUgcGFnZSA9IDA7XG5cbiAgICBwcml2YXRlIHNvdW5kU2xvdFN0YXRlID0gbnVsbDtcblxuICAgIHN0YXJ0KCkge1xuICAgIH1cblxuXG4gICAgc2hvdygpIHtcbiAgICAgICBcbiAgICAgICAgc3VwZXIuc2hvdygpO1xuICAgICAgICB0aGlzLnBhZ2UgPSAwO1xuICAgICAgICAvLyB0aGlzLnJlbG9hZERhdGEoKTtcbiAgICB9XG5cbiAgICBhY3ROZXh0KCkge1xuICAgICAgICBpZiAodGhpcy5wYWdlIDwgdGhpcy5wYWdlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2UrKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbG9hZERhdGEoKTtcbiAgICAgICBcbiAgICB9XG5cbiAgICBhY3RQcmV2KCkge1xuICAgICAgICBpZiAodGhpcy5wYWdlID4gMCkge1xuICAgICAgICAgICAgdGhpcy5wYWdlLS07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWxvYWREYXRhKCk7XG4gICAgICBcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbG9hZERhdGEoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wYWdlc1tpXS5hY3RpdmUgPSBpID09IHRoaXMucGFnZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc21pc3MoKSB7XG4gICAgICAgIFxuICAgICAgICBzdXBlci5kaXNtaXNzKCk7XG4gICAgfVxuXG4gICAgY2FuUGxheVNvdW5kKCkge1xuICAgICAgICB2YXIgc291bmRTYXZlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic291bmRfU2xvdF8xXCIpO1xuICAgICAgICBpZiAoc291bmRTYXZlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc291bmRTbG90U3RhdGUgPSBwYXJzZUludChzb3VuZFNhdmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zb3VuZFNsb3RTdGF0ZSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFBvcHVwR3VpZGU7Il19