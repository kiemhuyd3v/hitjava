
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.ItemTopHu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e03clpdn5Bg6ItcVfCFBkS', 'Lobby.ItemTopHu');
// Lobby/LobbyScript/Lobby.ItemTopHu.ts

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
exports.Tophudata = void 0;
var Tween_1 = require("./Script/common/Tween");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.labelName = null;
        _this.label = null;
        _this.icon = null;
        _this.spriteFrames = [];
        _this.iconX = null;
        _this.spriteFramesX = [];
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        //this.icon.spriteFrame=SpriteFrame;
    };
    NewClass.prototype.start = function () {
        this.icon.spriteFrame = this.spriteFrames[0];
    };
    NewClass.prototype.SetData = function (data) {
        if (data.valueX == 1) {
            this.iconX.node.active = true;
        }
        else {
            this.iconX.node.active = false;
        }
        this.labelName.string = data.gamename;
        this.ChangeIcon(data.gameid);
        Tween_1.default.numberTo(this.label, data.value, 3.0);
    };
    NewClass.prototype.ChangeIcon = function (id) {
        switch (id) {
            case "audition":
                this.icon.spriteFrame = this.spriteFrames[0];
                break;
            case "captain":
                this.icon.spriteFrame = this.spriteFrames[1];
                break;
            case "spartans":
                this.icon.spriteFrame = this.spriteFrames[2];
                break;
            case "tamhung":
                this.icon.spriteFrame = this.spriteFrames[3];
                break;
            case "aztec":
                this.icon.spriteFrame = this.spriteFrames[4];
                break;
            case "zeus":
                this.icon.spriteFrame = this.spriteFrames[5];
                break;
            case "gainhay":
                this.icon.spriteFrame = this.spriteFrames[6];
                break;
            case "rollRoye":
                this.icon.spriteFrame = this.spriteFrames[7];
                break;
            case "chiemtinh":
                this.icon.spriteFrame = this.spriteFrames[8];
                break;
            case "bikini":
                this.icon.spriteFrame = this.spriteFrames[4];
                break;
            case "gem":
                this.icon.spriteFrame = this.spriteFrames[1];
                break;
            default:
                this.icon.spriteFrame = this.spriteFrames[0];
                break;
        }
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "labelName", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "icon", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], NewClass.prototype, "spriteFrames", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "iconX", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], NewClass.prototype, "spriteFramesX", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;
var Tophudata = /** @class */ (function () {
    function Tophudata(gameid, gamename, value100, value1000, value10000, valueX100, valueX1000, valueX10000) {
        if (value10000 === void 0) { value10000 = 0; }
        if (valueX100 === void 0) { valueX100 = 0; }
        if (valueX1000 === void 0) { valueX1000 = 0; }
        if (valueX10000 === void 0) { valueX10000 = 0; }
        this.value100 = 0;
        this.value1000 = 0;
        this.value10000 = 0;
        this.valueX100 = 0;
        this.valueX1000 = 0;
        this.valueX10000 = 0;
        this.gameid = gameid;
        this.gamename = gamename;
        this.value100 = value100;
        this.value1000 = value1000;
        this.value10000 = value10000;
        this.valueX100 = valueX100;
        this.valueX1000 = valueX1000;
        this.valueX10000 = valueX10000;
    }
    return Tophudata;
}());
exports.Tophudata = Tophudata;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5JdGVtVG9wSHUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUEwQztBQUdwQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQThFQztRQTNFRyxlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFFdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixrQkFBWSxHQUFxQixFQUFFLENBQUM7UUFHcEMsV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixtQkFBYSxHQUFxQixFQUFFLENBQUM7O1FBK0RyQyxpQkFBaUI7SUFDckIsQ0FBQztJQS9ERyx3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNJLG9DQUFvQztJQUN4QyxDQUFDO0lBRUQsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNNLDBCQUFPLEdBQWQsVUFBZSxJQUFlO1FBQzFCLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNqQzthQUNJO1lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNsQztRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDNUIsZUFBSyxD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YyxFQUFFLFdBQWU7UUFBcEUsMkJBQUEsRUFBQSxjQUFvQjtRQUFFLDBCQUFBLEVBQUEsYUFBYTtRQUFFLDJCQUFBLEVBQUEsY0FBYztRQUFFLDRCQUFBLEVBQUEsZUFBZTtRQU52SixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FuQkEsQUFtQkMsSUFBQTtBQW5CWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUd2VlbiBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL1R3ZWVuXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsTmFtZTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgaWNvbjogY2MuU3ByaXRlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBzcHJpdGVGcmFtZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgaWNvblg6IGNjLlNwcml0ZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgc3ByaXRlRnJhbWVzWDogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvL3RoaXMuaWNvbi5zcHJpdGVGcmFtZT1TcHJpdGVGcmFtZTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5pY29uLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVGcmFtZXNbMF07XG4gICAgfVxuICAgIHB1YmxpYyBTZXREYXRhKGRhdGE6IFRvcGh1ZGF0YSkge1xuICAgICAgICBpZiAoZGF0YS52YWx1ZVggPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5pY29uWC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmljb25YLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYWJlbE5hbWUuc3RyaW5nID0gZGF0YS5nYW1lbmFtZTtcbiAgICAgICAgdGhpcy5DaGFuZ2VJY29uKGRhdGEuZ2FtZWlkKVxuICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxhYmVsLCBkYXRhLnZhbHVlLCAzLjApO1xuICAgIH1cbiAgICBwcml2YXRlIENoYW5nZUljb24oaWQ6IHN0cmluZykge1xuICAgICAgICBzd2l0Y2ggKGlkKSB7XG4gICAgICAgICAgICBjYXNlIFwiYXVkaXRpb25cIjpcbiAgICAgICAgICAgICAgICB0aGlzLmljb24uc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZUZyYW1lc1swXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjYXB0YWluXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVGcmFtZXNbMV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic3BhcnRhbnNcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmljb24uc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZUZyYW1lc1syXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0YW1odW5nXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVGcmFtZXNbM107XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYXp0ZWNcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmljb24uc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZUZyYW1lc1s0XTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ6ZXVzXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVGcmFtZXNbNV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZ2FpbmhheVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlRnJhbWVzWzZdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJvbGxSb3llXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVGcmFtZXNbN107XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY2hpZW10aW5oXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVGcmFtZXNbOF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmlraW5pXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVGcmFtZXNbNF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZ2VtXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVGcmFtZXNbMV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlRnJhbWVzWzBdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuZXhwb3J0IGNsYXNzIFRvcGh1ZGF0YSB7XG4gICAgZ2FtZWlkOiBzdHJpbmc7XG4gICAgZ2FtZW5hbWU6IHN0cmluZztcbiAgICB2YWx1ZTEwMDogbnVtYmVyID0gMDtcbiAgICB2YWx1ZTEwMDA6IG51bWJlciA9IDA7XG4gICAgdmFsdWUxMDAwMDogbnVtYmVyID0gMDtcbiAgICB2YWx1ZVgxMDA6IG51bWJlciA9IDA7XG4gICAgdmFsdWVYMTAwMDogbnVtYmVyID0gMDtcbiAgICB2YWx1ZVgxMDAwMDogbnVtYmVyID0gMDtcbiAgICBjb25zdHJ1Y3RvcihnYW1laWQ6IHN0cmluZywgZ2FtZW5hbWU6IHN0cmluZywgdmFsdWUxMDA6IG51bWJlciwgdmFsdWUxMDAwOiBudW1iZXIsIHZhbHVlMTAwMDA6IG51bWJlcj0wLCB2YWx1ZVgxMDAgPSAwLCB2YWx1ZVgxMDAwID0gMCwgdmFsdWVYMTAwMDAgPSAwKSB7XG4gICAgICAgIHRoaXMuZ2FtZWlkID0gZ2FtZWlkO1xuICAgICAgICB0aGlzLmdhbWVuYW1lID0gZ2FtZW5hbWU7XG4gICAgICAgIHRoaXMudmFsdWUxMDAgPSB2YWx1ZTEwMDtcbiAgICAgICAgdGhpcy52YWx1ZTEwMDAgPSB2YWx1ZTEwMDA7XG4gICAgICAgIHRoaXMudmFsdWUxMDAwMCA9IHZhbHVlMTAwMDA7XG4gICAgICAgIHRoaXMudmFsdWVYMTAwID0gdmFsdWVYMTAwO1xuICAgICAgICB0aGlzLnZhbHVlWDEwMDAgPSB2YWx1ZVgxMDAwO1xuICAgICAgICB0aGlzLnZhbHVlWDEwMDAwID0gdmFsdWVYMTAwMDA7XG4gICAgfVxufVxuIl19