
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Payment/TabTopupGameBank.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '41bcbh5Lq9IL5mTG5GKYwqy', 'TabTopupGameBank');
// Lobby/LobbyScript/Payment/TabTopupGameBank.ts

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
var Configs_1 = require("../../../Loading/src/Configs");
var Http_1 = require("../../../Loading/src/Http");
var App_1 = require("../Script/common/App");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TabTopupGameBank = /** @class */ (function (_super) {
    __extends(TabTopupGameBank, _super);
    function TabTopupGameBank() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeInfoTransfer = null;
        _this.edbAccountName = null;
        _this.edbBankNumber = null;
        _this.edbMoneyAmount = null;
        _this.btnConfirm = null;
        _this.bankCode = "";
        _this.transMsg = "";
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    TabTopupGameBank.prototype.start = function () {
    };
    TabTopupGameBank.prototype.onClickConfirm = function () {
        var accountName = this.edbAccountName.string.trim();
        var amount = this.edbMoneyAmount.string.trim();
        var bankNumber = this.edbBankNumber.string.trim();
        if (accountName == "" || amount == "" || bankNumber == "") {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_input_all'));
            return;
        }
        this.transMsg = this.generateTransMsg();
        Http_1.default.get(Configs_1.default.App.API, {
            "c": 2003,
            "nn": Configs_1.default.Login.Nickname,
            "at": Configs_1.default.Login.AccessToken,
            "pt": 1,
            "ds": this.transMsg,
            "bc": this.bankCode,
            "pn": "manual",
            "bn": parseInt(bankNumber)
        }, function (err, res) {
            App_1.default.instance.showLoading(false);
            //  cc.log(res);
            if (res['success']) {
            }
        });
    };
    __decorate([
        property(cc.Node)
    ], TabTopupGameBank.prototype, "nodeInfoTransfer", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabTopupGameBank.prototype, "edbAccountName", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabTopupGameBank.prototype, "edbBankNumber", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabTopupGameBank.prototype, "edbMoneyAmount", void 0);
    __decorate([
        property(cc.Button)
    ], TabTopupGameBank.prototype, "btnConfirm", void 0);
    TabTopupGameBank = __decorate([
        ccclass
    ], TabTopupGameBank);
    return TabTopupGameBank;
}(cc.Component));
exports.default = TabTopupGameBank;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxQYXltZW50XFxUYWJUb3B1cEdhbWVCYW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHdEQUFtRDtBQUNuRCxrREFBNkM7QUFDN0MsNENBQXVDO0FBRWpDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBd0RDO1FBckRHLHNCQUFnQixHQUFZLElBQUksQ0FBQztRQUdqQyxvQkFBYyxHQUFlLElBQUksQ0FBQztRQUdsQyxtQkFBYSxHQUFlLElBQUksQ0FBQztRQUdqQyxvQkFBYyxHQUFlLElBQUksQ0FBQztRQUdsQyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUM3QixjQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsY0FBUSxHQUFHLEVBQUUsQ0FBQTs7UUFzQ2IsaUJBQWlCO0lBQ3JCLENBQUM7SUF0Q0csd0JBQXdCO0lBRXhCLGVBQWU7SUFFZixnQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHlDQUFjLEdBQWQ7UUFDSSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsRCxJQUFJLFdBQVcsSUFBSSxFQUFFLElBQUksTUFBTSxJQUFJLEVBQUUsSUFBSSxVQUFVLElBQUksRUFBRSxFQUFFO1lBQ3ZELGFBQUcsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDeEUsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QyxjQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFDcEI7WUFDSSxHQUFHLEVBQUUsSUFBSTtZQUNULElBQUksRUFBRSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxRQUFRO1lBQzVCLElBQUksRUFBRSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxXQUFXO1lBQy9CLElBQUksRUFBRSxDQUFDO1lBQ1AsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUTtZQUNuQixJQUFJLEVBQUUsUUFBUTtZQUNkLElBQUksRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDO1NBQzdCLEVBQ0QsVUFBQyxHQUFHLEVBQUUsR0FBRztZQUNMLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hDLGdCQUFnQjtZQUNoQixJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRTthQUVuQjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQWxERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhEQUNlO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7NERBQ2E7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzsyREFDWTtJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzREQUNhO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0RBQ1M7SUFmWixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQXdEcEM7SUFBRCx1QkFBQztDQXhERCxBQXdEQyxDQXhENkMsRUFBRSxDQUFDLFNBQVMsR0F3RHpEO2tCQXhEb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgSHR0cCBmcm9tIFwiLi4vLi4vLi4vTG9hZGluZy9zcmMvSHR0cFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9BcHBcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYlRvcHVwR2FtZUJhbmsgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZUluZm9UcmFuc2ZlcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBlZGJBY2NvdW50TmFtZTogY2MuRWRpdEJveCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBlZGJCYW5rTnVtYmVyOiBjYy5FZGl0Qm94ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIGVkYk1vbmV5QW1vdW50OiBjYy5FZGl0Qm94ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgYnRuQ29uZmlybTogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBiYW5rQ29kZSA9IFwiXCI7XG4gICAgdHJhbnNNc2cgPSBcIlwiXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgb25DbGlja0NvbmZpcm0oKSB7XG4gICAgICAgIGxldCBhY2NvdW50TmFtZSA9IHRoaXMuZWRiQWNjb3VudE5hbWUuc3RyaW5nLnRyaW0oKTtcbiAgICAgICAgbGV0IGFtb3VudCA9IHRoaXMuZWRiTW9uZXlBbW91bnQuc3RyaW5nLnRyaW0oKTtcbiAgICAgICAgbGV0IGJhbmtOdW1iZXIgPSB0aGlzLmVkYkJhbmtOdW1iZXIuc3RyaW5nLnRyaW0oKTtcbiAgICAgICAgaWYgKGFjY291bnROYW1lID09IFwiXCIgfHwgYW1vdW50ID09IFwiXCIgfHwgYmFua051bWJlciA9PSBcIlwiKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2lucHV0X2FsbCcpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyYW5zTXNnID0gdGhpcy5nZW5lcmF0ZVRyYW5zTXNnKCk7XG4gICAgICAgIEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImNcIjogMjAwMyxcbiAgICAgICAgICAgICAgICBcIm5uXCI6IENvbmZpZ3MuTG9naW4uTmlja25hbWUsXG4gICAgICAgICAgICAgICAgXCJhdFwiOiBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuLFxuICAgICAgICAgICAgICAgIFwicHRcIjogMSxcbiAgICAgICAgICAgICAgICBcImRzXCI6IHRoaXMudHJhbnNNc2csXG4gICAgICAgICAgICAgICAgXCJiY1wiOiB0aGlzLmJhbmtDb2RlLFxuICAgICAgICAgICAgICAgIFwicG5cIjogXCJtYW51YWxcIixcbiAgICAgICAgICAgICAgICBcImJuXCI6IHBhcnNlSW50KGJhbmtOdW1iZXIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAvLyAgY2MubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc1snc3VjY2VzcyddKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgIFxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=