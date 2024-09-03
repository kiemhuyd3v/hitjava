
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Profile/ItemBankProfile.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9317bOaB1xJrq1I1oOkNM5S', 'ItemBankProfile');
// Lobby/LobbyScript/Profile/ItemBankProfile.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.txtBank = null;
        _this.txtBranch = null;
        _this.txtName = null;
        _this.txtNumber = null;
        _this.data = null;
        _this.popupProfile = null;
        return _this;
    }
    NewClass.prototype.init = function (data, popupProfile) {
        this.data = data;
        this.popupProfile = popupProfile;
        this.txtBank.string = data.bankName;
        this.txtBranch.string = data.branch;
        this.txtName.string = data.customerName;
        this.txtNumber.string = data.bankNumber;
    };
    NewClass.prototype.onBtnClick = function () {
        this.popupProfile.ShowBoxUpdate(this.data);
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "txtBank", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "txtBranch", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "txtName", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "txtNumber", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxQcm9maWxlXFxJdGVtQmFua1Byb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE4QkM7UUEzQkcsYUFBTyxHQUFhLElBQUksQ0FBQztRQUd6QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRzNCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFHekIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUduQixVQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osa0JBQVksR0FBRyxJQUFJLENBQUM7O0lBY2hDLENBQUM7SUFiRyx1QkFBSSxHQUFKLFVBQUssSUFBSSxFQUFDLFlBQVk7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFFakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFFLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUM1QyxDQUFDO0lBRUQsNkJBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBMUJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ007SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDUTtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNNO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ1E7SUFaVixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBOEI1QjtJQUFELGVBQUM7Q0E5QkQsQUE4QkMsQ0E5QnFDLEVBQUUsQ0FBQyxTQUFTLEdBOEJqRDtrQkE5Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdHh0QmFuazogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHR4dEJyYW5jaDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHR4dE5hbWU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB0eHROdW1iZXI6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBcblxuICAgIHByaXZhdGUgZGF0YSA9IG51bGw7XG4gICAgcHJpdmF0ZSBwb3B1cFByb2ZpbGUgPSBudWxsO1xuICAgIGluaXQoZGF0YSxwb3B1cFByb2ZpbGUpe1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLnBvcHVwUHJvZmlsZSA9IHBvcHVwUHJvZmlsZTtcblxuICAgICAgICB0aGlzLnR4dEJhbmsuc3RyaW5nID0gZGF0YS5iYW5rTmFtZTtcbiAgICAgICAgdGhpcy50eHRCcmFuY2guc3RyaW5nID0gZGF0YS5icmFuY2g7XG4gICAgICAgIHRoaXMudHh0TmFtZS5zdHJpbmcgPWRhdGEuY3VzdG9tZXJOYW1lO1xuICAgICAgICB0aGlzLnR4dE51bWJlci5zdHJpbmcgPSBkYXRhLmJhbmtOdW1iZXI7XG4gICAgfVxuXG4gICAgb25CdG5DbGljaygpe1xuICAgICAgICB0aGlzLnBvcHVwUHJvZmlsZS5TaG93Qm94VXBkYXRlKHRoaXMuZGF0YSk7XG4gICAgfVxufVxuIl19