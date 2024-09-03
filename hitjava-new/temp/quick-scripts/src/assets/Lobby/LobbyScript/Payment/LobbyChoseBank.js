"use strict";
cc._RF.push(module, '82e7cHeU+lHOaWOjtarMnfq', 'LobbyChoseBank');
// Lobby/LobbyScript/Payment/LobbyChoseBank.ts

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
var App_1 = require("../Script/common/App");
var Dialog_1 = require("../Script/common/Dialog");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LobbyChoseBank = /** @class */ (function (_super) {
    __extends(LobbyChoseBank, _super);
    function LobbyChoseBank() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeContent = null;
        _this.prefabItem = null;
        _this.nodeBox = null;
        _this.lbTitle = null;
        return _this;
    }
    LobbyChoseBank.prototype.init = function (tabWell, banks, callback, isWithDraw) {
        var _this = this;
        if (isWithDraw === void 0) { isWithDraw = false; }
        this.node.active = true;
        this.nodeContent.removeAllChildren();
        this.lbTitle.string = App_1.default.instance.getTextLang('txt_select_bank').toUpperCase();
        if (tabWell == "clickpay") {
            for (var i = 0; i < banks.length; i++) {
                if (banks[i].stat == 1) {
                    var nodeItem = cc.instantiate(this.prefabItem);
                    nodeItem.parent = this.nodeContent;
                    nodeItem.getComponent("ItemChoseBank").init(tabWell, banks[i], function (dataBank) {
                        callback(dataBank);
                        _this.dismiss();
                    });
                }
            }
        }
        else {
            for (var i = 0; i < banks.length; i++) {
                if (banks[i].status == 1) {
                    var nodeItem = cc.instantiate(this.prefabItem);
                    nodeItem.parent = this.nodeContent;
                    nodeItem.getComponent("ItemChoseBank").init(tabWell, banks[i], function (dataBank) {
                        callback(dataBank);
                        _this.dismiss();
                    });
                }
            }
        }
        if (tabWell == "payasec") {
            this.lbTitle.string = App_1.default.instance.getTextLang('txt_select_card').toUpperCase();
        }
    };
    LobbyChoseBank.prototype.onBtnExit = function () {
        this.dismiss();
    };
    __decorate([
        property(cc.Node)
    ], LobbyChoseBank.prototype, "nodeContent", void 0);
    __decorate([
        property(cc.Node)
    ], LobbyChoseBank.prototype, "prefabItem", void 0);
    __decorate([
        property(cc.Node)
    ], LobbyChoseBank.prototype, "nodeBox", void 0);
    __decorate([
        property(cc.Label)
    ], LobbyChoseBank.prototype, "lbTitle", void 0);
    LobbyChoseBank = __decorate([
        ccclass
    ], LobbyChoseBank);
    return LobbyChoseBank;
}(Dialog_1.default));
exports.default = LobbyChoseBank;

cc._RF.pop();