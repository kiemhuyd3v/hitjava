"use strict";
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