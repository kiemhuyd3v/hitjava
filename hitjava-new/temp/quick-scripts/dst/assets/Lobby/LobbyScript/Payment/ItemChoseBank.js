
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Payment/ItemChoseBank.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5950662i/dP/5mp7okzsoDF', 'ItemChoseBank');
// Lobby/LobbyScript/Payment/ItemChoseBank.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemChoseBank = /** @class */ (function (_super) {
    __extends(ItemChoseBank, _super);
    function ItemChoseBank() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spriteBank = null;
        _this.sfBankArray = [];
        _this.callback = null;
        _this.data = null;
        return _this;
    }
    ItemChoseBank.prototype.init = function (tabWell, data, callback) {
        this.data = data;
        this.callback = callback;
        var self = this;
        this.spriteBank.spriteFrame = null;
        if (tabWell == "clickpay") {
            try {
                cc.loader.load(data.bank_logo, function (err, texture) {
                    var newSpriteFrame = new cc.SpriteFrame(texture);
                    self.spriteBank.spriteFrame = newSpriteFrame;
                });
            }
            catch (e) {
            }
        }
        else {
            cc.loader.load(data.imageUrl, function (err, texture) {
                var newSpriteFrame = new cc.SpriteFrame(texture);
                self.spriteBank.spriteFrame = newSpriteFrame;
            });
        }
    };
    ItemChoseBank.prototype.onBtnClick = function () {
        if (this.callback != null) {
            this.callback(this.data);
        }
    };
    __decorate([
        property(cc.Sprite)
    ], ItemChoseBank.prototype, "spriteBank", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], ItemChoseBank.prototype, "sfBankArray", void 0);
    ItemChoseBank = __decorate([
        ccclass
    ], ItemChoseBank);
    return ItemChoseBank;
}(cc.Component));
exports.default = ItemChoseBank;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxQYXltZW50XFxJdGVtQ2hvc2VCYW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBd0NDO1FBckNHLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRzdCLGlCQUFXLEdBQXFCLEVBQUUsQ0FBQztRQUUzQixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFVBQUksR0FBRyxJQUFJLENBQUM7O0lBK0J4QixDQUFDO0lBOUJHLDRCQUFJLEdBQUosVUFBSyxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVE7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUNuQyxJQUFJLE9BQU8sSUFBSSxVQUFVLEVBQUU7WUFDdkIsSUFBSTtnQkFDQSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQVUsR0FBRyxFQUFFLE9BQU87b0JBQ2pELElBQUksY0FBYyxHQUFHLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDakQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDO2dCQUNqRCxDQUFDLENBQUMsQ0FBQzthQUNOO1lBQ0QsT0FBTyxDQUFDLEVBQUU7YUFFVDtTQUNKO2FBQ0k7WUFDRCxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsR0FBRyxFQUFFLE9BQU87Z0JBQ2hELElBQUksY0FBYyxHQUFHLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDakQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDO1lBQ2pELENBQUMsQ0FBQyxDQUFDO1NBQ047SUFFTCxDQUFDO0lBRUQsa0NBQVUsR0FBVjtRQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBcENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cURBQ1M7SUFHN0I7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7c0RBQ1E7SUFObEIsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQXdDakM7SUFBRCxvQkFBQztDQXhDRCxBQXdDQyxDQXhDMEMsRUFBRSxDQUFDLFNBQVMsR0F3Q3REO2tCQXhDb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW1DaG9zZUJhbmsgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBzcHJpdGVCYW5rOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgc2ZCYW5rQXJyYXk6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcblxuICAgIHByaXZhdGUgY2FsbGJhY2sgPSBudWxsO1xuICAgIHByaXZhdGUgZGF0YSA9IG51bGw7XG4gICAgaW5pdCh0YWJXZWxsLCBkYXRhLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5zcHJpdGVCYW5rLnNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICAgICAgaWYgKHRhYldlbGwgPT0gXCJjbGlja3BheVwiKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKGRhdGEuYmFua19sb2dvLCBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdTcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zcHJpdGVCYW5rLnNwcml0ZUZyYW1lID0gbmV3U3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZChkYXRhLmltYWdlVXJsLCBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1Nwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xuICAgICAgICAgICAgICAgIHNlbGYuc3ByaXRlQmFuay5zcHJpdGVGcmFtZSA9IG5ld1Nwcml0ZUZyYW1lO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIG9uQnRuQ2xpY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2sodGhpcy5kYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==