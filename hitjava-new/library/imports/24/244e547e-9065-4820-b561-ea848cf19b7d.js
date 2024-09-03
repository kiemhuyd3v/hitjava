"use strict";
cc._RF.push(module, '244e5R+kGVIILVh6oSM8Zt9', 'EditboxFormat');
// Lobby/LobbyScript/EditboxFormat.ts

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
var Utils_1 = require("./Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EditboxFormat = /** @class */ (function (_super) {
    __extends(EditboxFormat, _super);
    function EditboxFormat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.edit = null;
        _this.isMutiple = false;
        _this.number = 0;
        return _this;
    }
    EditboxFormat.prototype.onLoad = function () {
        this.edit = this.node.getComponent(cc.EditBox);
    };
    EditboxFormat.prototype.onChanged = function () {
        var temp = Utils_1.default.ToInt(this.edit.string);
        temp = Math.abs(temp);
        this.edit.string = Utils_1.default.ToVND(temp);
        if (cc.sys.isBrowser) {
            this.edit.focus();
        }
    };
    EditboxFormat.prototype.onFormatName = function () {
        this.edit.string = Utils_1.default.formatName(this.edit.string);
        if (cc.sys.isBrowser) {
            this.edit.focus();
        }
    };
    EditboxFormat.prototype.onFormatNameMark = function () {
        this.edit.string = Utils_1.default.formatNameBank(this.edit.string);
        if (cc.sys.isBrowser) {
            this.edit.focus();
        }
    };
    EditboxFormat.prototype.onEnded = function () {
        var _this = this;
        setTimeout(function () {
            var temp = Utils_1.default.ToInt(_this.edit.string);
            if (_this.isMutiple && temp > 1000) {
                var hs = 1000;
                if (temp % hs != 0) {
                    temp = temp - (temp % hs);
                }
            }
            temp = Math.abs(temp);
            _this.edit.string = Utils_1.default.ToVND(temp);
        }, 200);
    };
    __decorate([
        property
    ], EditboxFormat.prototype, "isMutiple", void 0);
    EditboxFormat = __decorate([
        ccclass
    ], EditboxFormat);
    return EditboxFormat;
}(cc.Component));
exports.default = EditboxFormat;

cc._RF.pop();