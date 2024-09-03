
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/MutipleJackpot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd9778HJTt9CG6JdbjuOB/vh', 'MutipleJackpot');
// Lobby/LobbyScript/MutipleJackpot.ts

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
var Lobby_Cmd_1 = require("./Lobby.Cmd");
var Tween_1 = require("./Script/common/Tween");
var Network_InPacket_1 = require("./Script/networks/Network.InPacket");
var SlotNetworkClient_1 = require("./Script/networks/SlotNetworkClient");
var GAME_INDEX = {
    ANGRY: 0,
    BITCOIN: 1,
    CHIEMTINH: 2,
    THETHAO: 3,
    THANTAI: 4,
    DUAXE: 5
};
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MutipleJackpot = /** @class */ (function (_super) {
    __extends(MutipleJackpot, _super);
    function MutipleJackpot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lbJackpot = [];
        _this.sprBg = [];
        _this.Bg = null;
        _this.position_lb_ANGRY = [];
        _this.position_lb_BITCOIN = [];
        _this.position_lb_CHIEMTINH = [];
        _this.position_lb_EURO = [];
        _this.position_lb_THANTAI = [];
        _this.position_lb_DUAXE = [];
        _this.position_init = [];
        _this.listPosLb = [];
        _this.gameType = "";
        _this.dataJPGame = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    /*name game :
    spartans-Thantai
    BENLEY:bitcoin
    audition:duaxe
    maybach:thethao
    tamhung:chimdien
    chiemtinh:chiemtinh
    
    */
    MutipleJackpot.prototype.onLoad = function () {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (touch) {
            _this.node.setPosition(_this.node.position.add(cc.v3(touch.getDeltaX(), touch.getDeltaY(), 0)));
        });
    };
    MutipleJackpot.prototype.setInfo = function (gametype) {
        var _this = this;
        this.gameType = gametype;
        switch (gametype) {
            case "ANGRY":
                this.listPosLb = this.position_lb_ANGRY;
                this.Bg.getComponent(cc.Sprite).spriteFrame = this.sprBg[GAME_INDEX.ANGRY];
                this.node.setPosition(this.position_init[GAME_INDEX.ANGRY]);
                break;
            case "BITCOIN":
                this.listPosLb = this.position_lb_BITCOIN;
                this.Bg.getComponent(cc.Sprite).spriteFrame = this.sprBg[GAME_INDEX.BITCOIN];
                this.node.setPosition(this.position_init[GAME_INDEX.BITCOIN]);
                break;
            case "CHIEMTINH":
                this.listPosLb = this.position_lb_CHIEMTINH;
                this.Bg.getComponent(cc.Sprite).spriteFrame = this.sprBg[GAME_INDEX.CHIEMTINH];
                this.node.setPosition(this.position_init[GAME_INDEX.CHIEMTINH]);
                break;
            case "THETHAO":
                this.listPosLb = this.position_lb_EURO;
                this.Bg.getComponent(cc.Sprite).spriteFrame = this.sprBg[GAME_INDEX.THETHAO];
                this.node.setPosition(this.position_init[GAME_INDEX.THETHAO]);
                break;
            case "THANTAI":
                this.listPosLb = this.position_lb_THANTAI;
                this.Bg.getComponent(cc.Sprite).spriteFrame = this.sprBg[GAME_INDEX.THANTAI];
                this.node.setPosition(this.position_init[GAME_INDEX.THANTAI]);
                break;
            case "DUAXE":
                this.listPosLb = this.position_lb_DUAXE;
                this.Bg.getComponent(cc.Sprite).spriteFrame = this.sprBg[GAME_INDEX.DUAXE];
                this.node.setPosition(this.position_init[GAME_INDEX.DUAXE]);
                break;
        }
        for (var i = 0; i < this.listPosLb.length; i++) {
            this.lbJackpot[i].node.setPosition(cc.v2(this.listPosLb[i].x - 7, this.listPosLb[i].y + 10));
        }
        SlotNetworkClient_1.default.getInstance().sendCheck(new Lobby_Cmd_1.default.ReqSubcribeHallSlot());
        SlotNetworkClient_1.default.getInstance().addListener(function (data) {
            var inpacket = new Network_InPacket_1.default(data);
            switch (inpacket.getCmdId()) {
                case Lobby_Cmd_1.default.Code.UPDATE_JACKPOT_SLOTS:
                    {
                        var res = new Lobby_Cmd_1.default.ResUpdateJackpotSlots(data);
                        var resJson = JSON.parse(res.pots);
                        //  //Utils.Log("UPDATE_JACKPOT_SLOTS:" + JSON.stringify(resJson['maybach']));
                        //  //Utils.Log("gametype="+this.gameType);
                        switch (_this.gameType) {
                            case "ANGRY":
                                _this.dataJPGame = resJson['tamhung'];
                                break;
                            case "BITCOIN":
                                _this.dataJPGame = resJson['benley'];
                                break;
                            case "CHIEMTINH":
                                _this.dataJPGame = resJson['chiemtinh'];
                                break;
                            case "THETHAO":
                                _this.dataJPGame = resJson['maybach'];
                                break;
                            case "THANTAI":
                                _this.dataJPGame = resJson['spartan'];
                                break;
                            case "DUAXE":
                                _this.dataJPGame = resJson['audition'];
                                break;
                        }
                    }
                    break;
            }
            //  //Utils.Log("dataJP==", this.dataJPGame);
            if (_this.dataJPGame != null) {
                Tween_1.default.numberTo(_this.lbJackpot[0], _this.dataJPGame['100']['p'], 3.0);
                Tween_1.default.numberTo(_this.lbJackpot[1], _this.dataJPGame['1000']['p'], 3.0);
                Tween_1.default.numberTo(_this.lbJackpot[2], _this.dataJPGame['10000']['p'], 3.0);
            }
        }, this);
    };
    MutipleJackpot.prototype.start = function () {
    };
    MutipleJackpot.prototype.onDestroy = function () {
        SlotNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqUnSubcribeHallSlot());
    };
    __decorate([
        property([cc.Label])
    ], MutipleJackpot.prototype, "lbJackpot", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], MutipleJackpot.prototype, "sprBg", void 0);
    __decorate([
        property(cc.Node)
    ], MutipleJackpot.prototype, "Bg", void 0);
    __decorate([
        property([cc.Vec2])
    ], MutipleJackpot.prototype, "position_lb_ANGRY", void 0);
    __decorate([
        property([cc.Vec2])
    ], MutipleJackpot.prototype, "position_lb_BITCOIN", void 0);
    __decorate([
        property([cc.Vec2])
    ], MutipleJackpot.prototype, "position_lb_CHIEMTINH", void 0);
    __decorate([
        property([cc.Vec2])
    ], MutipleJackpot.prototype, "position_lb_EURO", void 0);
    __decorate([
        property([cc.Vec2])
    ], MutipleJackpot.prototype, "position_lb_THANTAI", void 0);
    __decorate([
        property([cc.Vec2])
    ], MutipleJackpot.prototype, "position_lb_DUAXE", void 0);
    __decorate([
        property([cc.Vec2])
    ], MutipleJackpot.prototype, "position_init", void 0);
    MutipleJackpot = __decorate([
        ccclass
    ], MutipleJackpot);
    return MutipleJackpot;
}(cc.Component));
exports.default = MutipleJackpot;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxNdXRpcGxlSmFja3BvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBOEI7QUFDOUIsK0NBQTBDO0FBQzFDLHVFQUEwRDtBQUMxRCx5RUFBb0U7QUFFcEUsSUFBSSxVQUFVLEdBQUc7SUFDYixLQUFLLEVBQUUsQ0FBQztJQUNSLE9BQU8sRUFBRSxDQUFDO0lBQ1YsU0FBUyxFQUFFLENBQUM7SUFDWixPQUFPLEVBQUUsQ0FBQztJQUNWLE9BQU8sRUFBRSxDQUFDO0lBQ1YsS0FBSyxFQUFFLENBQUM7Q0FDWCxDQUFBO0FBQ0ssSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFnSUM7UUE3SEcsZUFBUyxHQUFlLEVBQUUsQ0FBQztRQUUzQixXQUFLLEdBQXFCLEVBQUUsQ0FBQztRQUU3QixRQUFFLEdBQVksSUFBSSxDQUFDO1FBR25CLHVCQUFpQixHQUFjLEVBQUUsQ0FBQztRQUVsQyx5QkFBbUIsR0FBYyxFQUFFLENBQUM7UUFFcEMsMkJBQXFCLEdBQWMsRUFBRSxDQUFDO1FBRXRDLHNCQUFnQixHQUFjLEVBQUUsQ0FBQztRQUVqQyx5QkFBbUIsR0FBYyxFQUFFLENBQUM7UUFFcEMsdUJBQWlCLEdBQWMsRUFBRSxDQUFDO1FBRWxDLG1CQUFhLEdBQWMsRUFBRSxDQUFDO1FBQzlCLGVBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixjQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsZ0JBQVUsR0FBRyxJQUFJLENBQUM7O1FBc0dsQixpQkFBaUI7SUFDckIsQ0FBQztJQXRHRyx3QkFBd0I7SUFDeEI7Ozs7Ozs7O01BUUU7SUFFRiwrQkFBTSxHQUFOO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsVUFBQyxLQUEwQjtZQUNsRSxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEVBQUUsS0FBSyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDRCxnQ0FBTyxHQUFQLFVBQVEsUUFBUTtRQUFoQixpQkE4RUM7UUE3RUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsUUFBUSxRQUFRLEVBQUU7WUFDZCxLQUFLLE9BQU87Z0JBQ1IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQzFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7Z0JBQzNELE1BQU07WUFDVixLQUFLLFNBQVM7Z0JBQ1YsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQzVFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7Z0JBQzdELE1BQU07WUFDVixLQUFLLFdBQVc7Z0JBQ1osSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7Z0JBQzlFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUE7Z0JBQy9ELE1BQU07WUFDVixLQUFLLFNBQVM7Z0JBQ1YsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzdFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7Z0JBQzdELE1BQU07WUFDVixLQUFLLFNBQVM7Z0JBQ1YsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzdFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQzlELE1BQU07WUFDVixLQUFLLE9BQU87Z0JBQ1IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENB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QWMsQ0FnSWxDO0lBQUQscUJBQUM7Q0FoSUQsQUFnSUMsQ0FoSTJDLEVBQUUsQ0FBQyxTQUFTLEdBZ0l2RDtrQkFoSW9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY21kIGZyb20gXCIuL0xvYmJ5LkNtZFwiO1xuaW1wb3J0IFR3ZWVuIGZyb20gXCIuL1NjcmlwdC9jb21tb24vVHdlZW5cIjtcbmltcG9ydCBJblBhY2tldCBmcm9tIFwiLi9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5JblBhY2tldFwiO1xuaW1wb3J0IFNsb3ROZXR3b3JrQ2xpZW50IGZyb20gXCIuL1NjcmlwdC9uZXR3b3Jrcy9TbG90TmV0d29ya0NsaWVudFwiO1xuXG52YXIgR0FNRV9JTkRFWCA9IHtcbiAgICBBTkdSWTogMCxcbiAgICBCSVRDT0lOOiAxLFxuICAgIENISUVNVElOSDogMixcbiAgICBUSEVUSEFPOiAzLFxuICAgIFRIQU5UQUk6IDQsXG4gICAgRFVBWEU6IDVcbn1cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNdXRpcGxlSmFja3BvdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoW2NjLkxhYmVsXSlcbiAgICBsYkphY2twb3Q6IGNjLkxhYmVsW10gPSBbXTtcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBzcHJCZzogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIEJnOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShbY2MuVmVjMl0pXG4gICAgcG9zaXRpb25fbGJfQU5HUlk6IGNjLlZlYzJbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShbY2MuVmVjMl0pXG4gICAgcG9zaXRpb25fbGJfQklUQ09JTjogY2MuVmVjMltdID0gW107XG4gICAgQHByb3BlcnR5KFtjYy5WZWMyXSlcbiAgICBwb3NpdGlvbl9sYl9DSElFTVRJTkg6IGNjLlZlYzJbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShbY2MuVmVjMl0pXG4gICAgcG9zaXRpb25fbGJfRVVSTzogY2MuVmVjMltdID0gW107XG4gICAgQHByb3BlcnR5KFtjYy5WZWMyXSlcbiAgICBwb3NpdGlvbl9sYl9USEFOVEFJOiBjYy5WZWMyW10gPSBbXTtcbiAgICBAcHJvcGVydHkoW2NjLlZlYzJdKVxuICAgIHBvc2l0aW9uX2xiX0RVQVhFOiBjYy5WZWMyW10gPSBbXTtcbiAgICBAcHJvcGVydHkoW2NjLlZlYzJdKVxuICAgIHBvc2l0aW9uX2luaXQ6IGNjLlZlYzJbXSA9IFtdO1xuICAgIGxpc3RQb3NMYiA9IFtdO1xuICAgIGdhbWVUeXBlID0gXCJcIjtcbiAgICBkYXRhSlBHYW1lID0gbnVsbDtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICAvKm5hbWUgZ2FtZSA6XG4gICAgc3BhcnRhbnMtVGhhbnRhaVxuICAgIEJFTkxFWTpiaXRjb2luXG4gICAgYXVkaXRpb246ZHVheGVcbiAgICBtYXliYWNoOnRoZXRoYW9cbiAgICB0YW1odW5nOmNoaW1kaWVuXG4gICAgY2hpZW10aW5oOmNoaWVtdGluaFxuICAgIFxuICAgICovXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCAodG91Y2g6IGNjLkV2ZW50LkV2ZW50VG91Y2gpID0+IHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUucG9zaXRpb24uYWRkKGNjLnYzKHRvdWNoLmdldERlbHRhWCgpLCB0b3VjaC5nZXREZWx0YVkoKSwgMCkpKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgc2V0SW5mbyhnYW1ldHlwZSkge1xuICAgICAgICB0aGlzLmdhbWVUeXBlID0gZ2FtZXR5cGU7XG4gICAgICAgIHN3aXRjaCAoZ2FtZXR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJBTkdSWVwiOlxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFBvc0xiID0gdGhpcy5wb3NpdGlvbl9sYl9BTkdSWTtcbiAgICAgICAgICAgICAgICB0aGlzLkJnLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJCZ1tHQU1FX0lOREVYLkFOR1JZXVxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLnBvc2l0aW9uX2luaXRbR0FNRV9JTkRFWC5BTkdSWV0pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQklUQ09JTlwiOlxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFBvc0xiID0gdGhpcy5wb3NpdGlvbl9sYl9CSVRDT0lOO1xuICAgICAgICAgICAgICAgIHRoaXMuQmcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwckJnW0dBTUVfSU5ERVguQklUQ09JTl1cbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5wb3NpdGlvbl9pbml0W0dBTUVfSU5ERVguQklUQ09JTl0pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQ0hJRU1USU5IXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0UG9zTGIgPSB0aGlzLnBvc2l0aW9uX2xiX0NISUVNVElOSDtcbiAgICAgICAgICAgICAgICB0aGlzLkJnLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJCZ1tHQU1FX0lOREVYLkNISUVNVElOSF1cbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5wb3NpdGlvbl9pbml0W0dBTUVfSU5ERVguQ0hJRU1USU5IXSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJUSEVUSEFPXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0UG9zTGIgPSB0aGlzLnBvc2l0aW9uX2xiX0VVUk87XG4gICAgICAgICAgICAgICAgdGhpcy5CZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByQmdbR0FNRV9JTkRFWC5USEVUSEFPXTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5wb3NpdGlvbl9pbml0W0dBTUVfSU5ERVguVEhFVEhBT10pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiVEhBTlRBSVwiOlxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFBvc0xiID0gdGhpcy5wb3NpdGlvbl9sYl9USEFOVEFJO1xuICAgICAgICAgICAgICAgIHRoaXMuQmcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwckJnW0dBTUVfSU5ERVguVEhBTlRBSV07XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMucG9zaXRpb25faW5pdFtHQU1FX0lOREVYLlRIQU5UQUldKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJEVUFYRVwiOlxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFBvc0xiID0gdGhpcy5wb3NpdGlvbl9sYl9EVUFYRTtcbiAgICAgICAgICAgICAgICB0aGlzLkJnLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJCZ1tHQU1FX0lOREVYLkRVQVhFXVxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLnBvc2l0aW9uX2luaXRbR0FNRV9JTkRFWC5EVUFYRV0pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RQb3NMYi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5sYkphY2twb3RbaV0ubm9kZS5zZXRQb3NpdGlvbihjYy52Mih0aGlzLmxpc3RQb3NMYltpXS54LTcsIHRoaXMubGlzdFBvc0xiW2ldLnkgKyAxMCkpO1xuICAgICAgICB9XG4gICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZENoZWNrKG5ldyBjbWQuUmVxU3ViY3JpYmVIYWxsU2xvdCgpKTtcblxuICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmFkZExpc3RlbmVyKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBsZXQgaW5wYWNrZXQgPSBuZXcgSW5QYWNrZXQoZGF0YSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGlucGFja2V0LmdldENtZElkKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlVQREFURV9KQUNLUE9UX1NMT1RTOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZXNVcGRhdGVKYWNrcG90U2xvdHMoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzSnNvbiA9IEpTT04ucGFyc2UocmVzLnBvdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIC8vVXRpbHMuTG9nKFwiVVBEQVRFX0pBQ0tQT1RfU0xPVFM6XCIgKyBKU09OLnN0cmluZ2lmeShyZXNKc29uWydtYXliYWNoJ10pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAvL1V0aWxzLkxvZyhcImdhbWV0eXBlPVwiK3RoaXMuZ2FtZVR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmdhbWVUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFOR1JZXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YUpQR2FtZSA9IHJlc0pzb25bJ3RhbWh1bmcnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkJJVENPSU5cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhSlBHYW1lID0gcmVzSnNvblsnYmVubGV5J107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJDSElFTVRJTkhcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhSlBHYW1lID0gcmVzSnNvblsnY2hpZW10aW5oJ107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJUSEVUSEFPXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YUpQR2FtZSA9IHJlc0pzb25bJ21heWJhY2gnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlRIQU5UQUlcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhSlBHYW1lID0gcmVzSnNvblsnc3BhcnRhbiddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiRFVBWEVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhSlBHYW1lID0gcmVzSnNvblsnYXVkaXRpb24nXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgLy9VdGlscy5Mb2coXCJkYXRhSlA9PVwiLCB0aGlzLmRhdGFKUEdhbWUpO1xuICAgICAgICAgICAgaWYodGhpcy5kYXRhSlBHYW1lIT1udWxsKXtcbiAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxiSmFja3BvdFswXSwgdGhpcy5kYXRhSlBHYW1lWycxMDAnXVsncCddLCAzLjApO1xuICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJKYWNrcG90WzFdLCB0aGlzLmRhdGFKUEdhbWVbJzEwMDAnXVsncCddLCAzLjApO1xuICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJKYWNrcG90WzJdLCB0aGlzLmRhdGFKUEdhbWVbJzEwMDAwJ11bJ3AnXSwgMy4wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuUmVxVW5TdWJjcmliZUhhbGxTbG90KCkpO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19