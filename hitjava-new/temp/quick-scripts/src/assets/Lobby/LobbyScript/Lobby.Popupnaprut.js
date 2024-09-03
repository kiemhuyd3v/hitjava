"use strict";
cc._RF.push(module, 'a6692xgqI9L1JNb2b0x9ula', 'Lobby.Popupnaprut');
// Lobby/LobbyScript/Lobby.Popupnaprut.ts

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
var Configs_1 = require("../../Loading/src/Configs");
var Global_1 = require("../../Loading/src/Global");
var Http_1 = require("../../Loading/src/Http");
var App_1 = require("./Script/common/App");
var Dialog_1 = require("./Script/common/Dialog");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Popupnaprut = /** @class */ (function (_super) {
    __extends(Popupnaprut, _super);
    function Popupnaprut() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Popupnaprut.prototype.show = function () {
        _super.prototype.show.call(this);
        // for (let i = 0; i < this.itemTemplate.parent.childrenCount; i++) {
        //     this.itemTemplate.parent.children[i].active = false;
        // }
        if (Configs_1.default.Login.ListBankRut == null) {
            App_1.default.instance.showLoading(true);
            var data = {};
            data["c"] = 2008;
            data["nn"] = Configs_1.default.Login.Nickname;
            data["pn"] = 1;
            data["l"] = 10;
            Http_1.default.get(Configs_1.default.App.API, data, function (err, res) {
                App_1.default.instance.showLoading(false);
                var list = JSON.parse(res.data).data;
                Configs_1.default.Login.ListBankRut = list;
            });
        }
    };
    Popupnaprut.prototype.dismiss = function () {
        _super.prototype.dismiss.call(this);
        // for (let i = 0; i < this.itemTemplate.parent.childrenCount; i++) {
        //     this.itemTemplate.parent.children[i].active = false;
        // }
    };
    Popupnaprut.prototype.onClickNap = function () {
        Global_1.Global.LobbyController.actAddCoin();
        this.dismiss();
    };
    Popupnaprut.prototype.onClickRut = function () {
        Global_1.Global.LobbyController.actCashout();
        this.dismiss();
    };
    Popupnaprut.prototype.onClickDL = function () {
        Global_1.Global.LobbyController.actDaiLy();
        this.dismiss();
    };
    Popupnaprut = __decorate([
        ccclass
    ], Popupnaprut);
    return Popupnaprut;
}(Dialog_1.default));
exports.default = Popupnaprut;

cc._RF.pop();