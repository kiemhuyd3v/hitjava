"use strict";
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