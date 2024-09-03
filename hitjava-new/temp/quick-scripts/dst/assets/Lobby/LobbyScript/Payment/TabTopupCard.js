
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Payment/TabTopupCard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '41fdetl/75Dvp4I3zkJYILt', 'TabTopupCard');
// Lobby/LobbyScript/Payment/TabTopupCard.ts

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
var TabTopupPaywell_1 = require("./TabTopupPaywell");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TabTopupCard = /** @class */ (function (_super) {
    __extends(TabTopupCard, _super);
    function TabTopupCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // LIFE-CYCLE CALLBACKS:
        _this.toggleChuyenKhoan = null;
        _this.toggleSieutToc = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    TabTopupCard.prototype.showPayTypes = function () {
        this.showTab("payasec");
    };
    TabTopupCard.prototype.hide = function () {
        this.node.active = false;
        this.tabNapThe.editMoney.tabIndex = -1;
        this.tabNapThe.editName.tabIndex = -1;
    };
    TabTopupCard.prototype.showTab = function (payTypeKey) {
        this.tabNapThe.show(this.data, this.dataProvider.providerName);
        this.tabNapThe.editMoney.tabIndex = 0;
        this.tabNapThe.editName.tabIndex = 0;
    };
    __decorate([
        property({
            type: cc.Toggle,
            visible: false,
            override: true
        })
    ], TabTopupCard.prototype, "toggleChuyenKhoan", void 0);
    __decorate([
        property({
            type: cc.Toggle,
            visible: false,
            override: true
        })
    ], TabTopupCard.prototype, "toggleSieutToc", void 0);
    TabTopupCard = __decorate([
        ccclass
    ], TabTopupCard);
    return TabTopupCard;
}(TabTopupPaywell_1.default));
exports.default = TabTopupCard;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxQYXltZW50XFxUYWJUb3B1cENhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQWdEO0FBRzFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFlO0lBQXpEO1FBQUEscUVBZ0NDO1FBOUJHLHdCQUF3QjtRQU14Qix1QkFBaUIsR0FBYyxJQUFJLENBQUM7UUFNcEMsb0JBQWMsR0FBYyxJQUFJLENBQUM7O1FBaUJqQyxpQkFBaUI7SUFDckIsQ0FBQztJQWpCRyxlQUFlO0lBRWYsbUNBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELDJCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0QsOEJBQU8sR0FBUCxVQUFRLFVBQVU7UUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUF0QkQ7UUFMQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU07WUFDZixPQUFPLEVBQUUsS0FBSztZQUNkLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUM7MkRBQ2tDO0lBTXBDO1FBTEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNO1lBQ2YsT0FBTyxFQUFFLEtBQUs7WUFDZCxRQUFRLEVBQUUsSUFBSTtTQUNqQixDQUFDO3dEQUMrQjtJQWRoQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBZ0NoQztJQUFELG1CQUFDO0NBaENELEFBZ0NDLENBaEN5Qyx5QkFBZSxHQWdDeEQ7a0JBaENvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhYlRvcHVwUGF5d2VsbCBmcm9tIFwiLi9UYWJUb3B1cFBheXdlbGxcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFiVG9wdXBDYXJkIGV4dGVuZHMgVGFiVG9wdXBQYXl3ZWxsIHtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IGNjLlRvZ2dsZSxcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgIG92ZXJyaWRlOiB0cnVlXG4gICAgfSlcbiAgICB0b2dnbGVDaHV5ZW5LaG9hbjogY2MuVG9nZ2xlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5Ub2dnbGUsXG4gICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICBvdmVycmlkZTogdHJ1ZVxuICAgIH0pXG4gICAgdG9nZ2xlU2lldXRUb2M6IGNjLlRvZ2dsZSA9IG51bGw7XG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzaG93UGF5VHlwZXMoKSB7XG4gICAgICAgIHRoaXMuc2hvd1RhYihcInBheWFzZWNcIik7XG4gICAgfVxuICAgIFxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50YWJOYXBUaGUuZWRpdE1vbmV5LnRhYkluZGV4ID0gLTE7XG4gICAgICAgIHRoaXMudGFiTmFwVGhlLmVkaXROYW1lLnRhYkluZGV4ID0gLTE7XG4gICAgfVxuICAgIHNob3dUYWIocGF5VHlwZUtleSkge1xuICAgICAgICB0aGlzLnRhYk5hcFRoZS5zaG93KHRoaXMuZGF0YSwgdGhpcy5kYXRhUHJvdmlkZXIucHJvdmlkZXJOYW1lKTtcbiAgICAgICAgdGhpcy50YWJOYXBUaGUuZWRpdE1vbmV5LnRhYkluZGV4ID0gMDtcbiAgICAgICAgdGhpcy50YWJOYXBUaGUuZWRpdE5hbWUudGFiSW5kZXggPSAwO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19