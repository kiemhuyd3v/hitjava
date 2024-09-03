
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.ItemGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9e11294F1RIspsl8Pbos8PZ', 'Lobby.ItemGame');
// Lobby/LobbyScript/Lobby.ItemGame.ts

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
exports.ItemGameType = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemGameType;
(function (ItemGameType) {
    ItemGameType[ItemGameType["OTHER"] = 0] = "OTHER";
    ItemGameType[ItemGameType["SLOT"] = 1] = "SLOT";
    ItemGameType[ItemGameType["CARD"] = 2] = "CARD";
})(ItemGameType = exports.ItemGameType || (exports.ItemGameType = {}));
var ItemGame = /** @class */ (function (_super) {
    __extends(ItemGame, _super);
    function ItemGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = "";
        _this.type = ItemGameType.OTHER;
        return _this;
    }
    __decorate([
        property
    ], ItemGame.prototype, "id", void 0);
    __decorate([
        property({ type: cc.Enum(ItemGameType) })
    ], ItemGame.prototype, "type", void 0);
    ItemGame = __decorate([
        ccclass
    ], ItemGame);
    return ItemGame;
}(cc.Component));
exports.default = ItemGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5JdGVtR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBWSxZQUlYO0FBSkQsV0FBWSxZQUFZO0lBQ3BCLGlEQUFLLENBQUE7SUFDTCwrQ0FBSSxDQUFBO0lBQ0osK0NBQUksQ0FBQTtBQUNSLENBQUMsRUFKVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQUl2QjtBQUdEO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBS0M7UUFIRyxRQUFFLEdBQVcsRUFBRSxDQUFDO1FBRWhCLFVBQUksR0FBaUIsWUFBWSxDQUFDLEtBQUssQ0FBQzs7SUFDNUMsQ0FBQztJQUhHO1FBREMsUUFBUTt3Q0FDTztJQUVoQjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7MENBQ0Y7SUFKdkIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQUs1QjtJQUFELGVBQUM7Q0FMRCxBQUtDLENBTHFDLEVBQUUsQ0FBQyxTQUFTLEdBS2pEO2tCQUxvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuZXhwb3J0IGVudW0gSXRlbUdhbWVUeXBlIHtcbiAgICBPVEhFUixcbiAgICBTTE9ULFxuICAgIENBUkRcbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW1HYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHlcbiAgICBpZDogc3RyaW5nID0gXCJcIjtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5FbnVtKEl0ZW1HYW1lVHlwZSkgfSlcbiAgICB0eXBlOiBJdGVtR2FtZVR5cGUgPSBJdGVtR2FtZVR5cGUuT1RIRVI7XG59XG4iXX0=