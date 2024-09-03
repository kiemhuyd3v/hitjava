
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.CardRoom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2c896w3xjRKTb9MKH8qoYLn', 'Lobby.CardRoom');
// Lobby/LobbyScript/Lobby.CardRoom.ts

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
var App_1 = require("./Script/common/App");
var Tween_1 = require("./Script/common/Tween");
var CardGame_Cmd_1 = require("./Script/networks/CardGame.Cmd");
var Network_InPacket_1 = require("./Script/networks/Network.InPacket");
var TienLen_Cmd_1 = require("./TienLenScript/TienLen.Cmd");
var TienLen_GameLogic_1 = require("./TienLenScript/TienLen.GameLogic");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Lobby;
(function (Lobby) {
    var CardRoom = /** @class */ (function (_super) {
        __extends(CardRoom, _super);
        function CardRoom() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.roomContent = null;
            _this.roomItem = null;
            _this.networkClient = null;
            _this.handleRoomRespone = function (data) {
                var inpacket = new Network_InPacket_1.default(data);
                ////Utils.Log(inpacket.getCmdId());
                switch (inpacket.getCmdId()) {
                    case CardGame_Cmd_1.default.Code.JOIN_ROOM_FAIL: {
                        var res = new CardGame_Cmd_1.default.ReceivedJoinRoomFail(data);
                        var e = "";
                        switch (res.error) {
                            case 1:
                                e = "L\u1ed7i ki\u1ec3m tra th\u00f4ng tin!";
                                break;
                            case 2:
                                e = "Kh\u00f4ng t\u00ecm \u0111\u01b0\u1ee3c ph\u00f2ng th\u00edch h\u1ee3p. Vui l\u00f2ng th\u1eed l\u1ea1i sau!";
                                break;
                            case 3:
                                e = "B\u1ea1n kh\u00f4ng \u0111\u1ee7 ti\u1ec1n v\u00e0o ph\u00f2ng ch\u01a1i n\u00e0y!";
                                break;
                            case 4:
                                e = "Kh\u00f4ng t\u00ecm \u0111\u01b0\u1ee3c ph\u00f2ng th\u00edch h\u1ee3p. Vui l\u00f2ng th\u1eed l\u1ea1i sau!";
                                break;
                            case 5:
                                e = "M\u1ed7i l\u1ea7n v\u00e0o ph\u00f2ng ph\u1ea3i c\u00e1ch nhau 10 gi\u00e2y!";
                                break;
                            case 6:
                                e = "H\u1ec7 th\u1ed1ng b\u1ea3o tr\u00ec!";
                                break;
                            case 7:
                                e = "Kh\u00f4ng t\u00ecm th\u1ea5y ph\u00f2ng ch\u01a1i!";
                                break;
                            case 8:
                                e = "M\u1eadt kh\u1ea9u ph\u00f2ng ch\u01a1i kh\u00f4ng \u0111\u00fang!";
                                break;
                            case 9:
                                e = "Ph\u00f2ng ch\u01a1i \u0111\u00e3 \u0111\u1ee7 ng\u01b0\u1eddi!";
                                break;
                            case 10:
                                e = "B\u1ea1n b\u1ecb ch\u1ee7 ph\u00f2ng kh\u00f4ng cho v\u00e0o b\u00e0n!";
                        }
                        App_1.default.instance.alertDialog.showMsg(e);
                        break;
                    }
                    case TienLen_Cmd_1.default.Code.JOIN_ROOM_SUCCESS: {
                        var res = new TienLen_Cmd_1.default.ReceivedJoinRoomSuccess(data);
                        ////Utils.Log(res);
                        TienLen_GameLogic_1.default.getInstance().initWith(res);
                        App_1.default.instance.openGame("TienLen", "TienLen");
                        break;
                    }
                    case TienLen_Cmd_1.default.Code.AUTO_START: {
                        var res = new TienLen_Cmd_1.default.ReceivedAutoStart(data);
                        ////Utils.Log(res);
                        TienLen_GameLogic_1.default.getInstance().autoStart(res);
                        break;
                    }
                }
            };
            return _this;
        }
        CardRoom.prototype.start = function () {
            this.networkClient.addListener(this.handleRoomRespone, this);
        };
        CardRoom.prototype.initRooms = function (rooms, client) {
            var _this = this;
            this.networkClient = client;
            this.roomContent.removeAllChildren();
            rooms.forEach(function (room) {
                var item = cc.instantiate(_this.roomItem);
                var txts = item.getComponentsInChildren(cc.Label);
                Tween_1.default.numberTo(txts[2], room.moneyRequire, 0.3);
                Tween_1.default.numberTo(txts[3], room.moneyBet, 0.3);
                txts[4].string = room.nPersion + "/" + room.maxUserPerRoom;
                var progress = item.getComponentInChildren(cc.ProgressBar);
                progress.progress = room.nPersion / room.maxUserPerRoom;
                var btnJoin = item.getComponentInChildren(cc.Button);
                btnJoin.node.on(cc.Node.EventType.TOUCH_END, function (event) {
                    _this.networkClient.send(new CardGame_Cmd_1.default.SendJoinRoom(Configs_1.default.App.MONEY_TYPE, room.maxUserPerRoom, room.moneyBet, 0, room.roomIndex));
                });
                item.parent = _this.roomContent;
            });
        };
        __decorate([
            property(cc.Node)
        ], CardRoom.prototype, "roomContent", void 0);
        __decorate([
            property(cc.Prefab)
        ], CardRoom.prototype, "roomItem", void 0);
        CardRoom = __decorate([
            ccclass
        ], CardRoom);
        return CardRoom;
    }(cc.Component));
    Lobby.CardRoom = CardRoom;
})(Lobby || (Lobby = {}));
exports.default = Lobby.CardRoom;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5DYXJkUm9vbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBZ0Q7QUFDaEQsMkNBQXNDO0FBQ3RDLCtDQUEwQztBQUUxQywrREFBeUQ7QUFFekQsdUVBQTBEO0FBQzFELDJEQUFxRDtBQUNyRCx1RUFBaUU7QUFHM0QsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBVSxLQUFLLENBNEZkO0FBNUZELFdBQVUsS0FBSztJQUVYO1FBQThCLDRCQUFZO1FBQTFDO1lBQUEscUVBeUZDO1lBdEZHLGlCQUFXLEdBQVksSUFBSSxDQUFDO1lBRTVCLGNBQVEsR0FBWSxJQUFJLENBQUM7WUFFekIsbUJBQWEsR0FBMEIsSUFBSSxDQUFDO1lBTTVDLHVCQUFpQixHQUFHLFVBQUMsSUFBSTtnQkFDckIsSUFBSSxRQUFRLEdBQUcsSUFBSSwwQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqQyxtQ0FBbUM7Z0JBQ3BDLFFBQVEsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFO29CQUN6QixLQUFLLHNCQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dCQUNsQyxJQUFJLEdBQUcsR0FBRyxJQUFJLHNCQUFXLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3JELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFDWCxRQUFRLEdBQUcsQ0FBQyxLQUFLLEVBQUU7NEJBQ2YsS0FBSyxDQUFDO2dDQUNGLENBQUMsR0FBRyx3Q0FBd0MsQ0FBQztnQ0FDN0MsTUFBTTs0QkFDVixLQUFLLENBQUM7Z0NBQ0YsQ0FBQyxHQUFHLDhHQUE4RyxDQUFDO2dDQUNuSCxNQUFNOzRCQUNWLEtBQUssQ0FBQztnQ0FDRixDQUFDLEdBQUcsb0ZB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QUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNyRCxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsVUFBQyxLQUFLO29CQUMvQyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLHNCQUFXLENBQUMsWUFBWSxDQUFDLGlCQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUN6SSxDQUFDLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBckZEO1lBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ1U7UUFFNUI7WUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDSztRQUxoQixRQUFRO1lBRHBCLE9BQU87V0FDSyxRQUFRLENBeUZwQjtRQUFELGVBQUM7S0F6RkQsQUF5RkMsQ0F6RjZCLEVBQUUsQ0FBQyxTQUFTLEdBeUZ6QztJQXpGWSxjQUFRLFdBeUZwQixDQUFBO0FBQ0wsQ0FBQyxFQTVGUyxLQUFLLEtBQUwsS0FBSyxRQTRGZDtBQUNELGtCQUFlLEtBQUssQ0FBQyxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IFR3ZWVuIGZyb20gXCIuL1NjcmlwdC9jb21tb24vVHdlZW5cIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgQ2FyZEdhbWVDbWQgZnJvbSBcIi4vU2NyaXB0L25ldHdvcmtzL0NhcmRHYW1lLkNtZFwiO1xuaW1wb3J0IENhcmRHYW1lTmV0d29ya0NsaWVudCBmcm9tIFwiLi9TY3JpcHQvbmV0d29ya3MvQ2FyZEdhbWVOZXR3b3JrQ2xpZW50XCI7XG5pbXBvcnQgSW5QYWNrZXQgZnJvbSBcIi4vU2NyaXB0L25ldHdvcmtzL05ldHdvcmsuSW5QYWNrZXRcIjtcbmltcG9ydCBUaWVuTGVuQ21kIGZyb20gXCIuL1RpZW5MZW5TY3JpcHQvVGllbkxlbi5DbWRcIjtcbmltcG9ydCBUaWVuTGVuR2FtZUxvZ2ljIGZyb20gXCIuL1RpZW5MZW5TY3JpcHQvVGllbkxlbi5HYW1lTG9naWNcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5uYW1lc3BhY2UgTG9iYnkge1xuICAgIEBjY2NsYXNzXG4gICAgZXhwb3J0IGNsYXNzIENhcmRSb29tIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgICAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAgICAgcm9vbUNvbnRlbnQ6IGNjLk5vZGUgPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgICAgICByb29tSXRlbTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAgICAgbmV0d29ya0NsaWVudDogQ2FyZEdhbWVOZXR3b3JrQ2xpZW50ID0gbnVsbDtcblxuICAgICAgICBzdGFydCgpIHtcbiAgICAgICAgICAgIHRoaXMubmV0d29ya0NsaWVudC5hZGRMaXN0ZW5lcih0aGlzLmhhbmRsZVJvb21SZXNwb25lLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhbmRsZVJvb21SZXNwb25lID0gKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGxldCBpbnBhY2tldCA9IG5ldyBJblBhY2tldChkYXRhKTtcbiAgICAgICAgICAgICAvLy8vVXRpbHMuTG9nKGlucGFja2V0LmdldENtZElkKCkpO1xuICAgICAgICAgICAgc3dpdGNoIChpbnBhY2tldC5nZXRDbWRJZCgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBDYXJkR2FtZUNtZC5Db2RlLkpPSU5fUk9PTV9GQUlMOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgQ2FyZEdhbWVDbWQuUmVjZWl2ZWRKb2luUm9vbUZhaWwoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZXMuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0gXCJMXFx1MWVkN2kga2lcXHUxZWMzbSB0cmEgdGhcXHUwMGY0bmcgdGluIVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBcIktoXFx1MDBmNG5nIHRcXHUwMGVjbSBcXHUwMTExXFx1MDFiMFxcdTFlZTNjIHBoXFx1MDBmMm5nIHRoXFx1MDBlZGNoIGhcXHUxZWUzcC4gVnVpIGxcXHUwMGYybmcgdGhcXHUxZWVkIGxcXHUxZWExaSBzYXUhXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9IFwiQlxcdTFlYTFuIGtoXFx1MDBmNG5nIFxcdTAxMTFcXHUxZWU3IHRpXFx1MWVjMW4gdlxcdTAwZTBvIHBoXFx1MDBmMm5nIGNoXFx1MDFhMWkgblxcdTAwZTB5IVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBcIktoXFx1MDBmNG5nIHRcXHUwMGVjbSBcXHUwMTExXFx1MDFiMFxcdTFlZTNjIHBoXFx1MDBmMm5nIHRoXFx1MDBlZGNoIGhcXHUxZWUzcC4gVnVpIGxcXHUwMGYybmcgdGhcXHUxZWVkIGxcXHUxZWExaSBzYXUhXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9IFwiTVxcdTFlZDdpIGxcXHUxZWE3biB2XFx1MDBlMG8gcGhcXHUwMGYybmcgcGhcXHUxZWEzaSBjXFx1MDBlMWNoIG5oYXUgMTAgZ2lcXHUwMGUyeSFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0gXCJIXFx1MWVjNyB0aFxcdTFlZDFuZyBiXFx1MWVhM28gdHJcXHUwMGVjIVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBcIktoXFx1MDBmNG5nIHRcXHUwMGVjbSB0aFxcdTFlYTV5IHBoXFx1MDBmMm5nIGNoXFx1MDFhMWkhXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9IFwiTVxcdTFlYWR0IGtoXFx1MWVhOXUgcGhcXHUwMGYybmcgY2hcXHUwMWExaSBraFxcdTAwZjRuZyBcXHUwMTExXFx1MDBmYW5nIVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBcIlBoXFx1MDBmMm5nIGNoXFx1MDFhMWkgXFx1MDExMVxcdTAwZTMgXFx1MDExMVxcdTFlZTcgbmdcXHUwMWIwXFx1MWVkZGkhXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBcIkJcXHUxZWExbiBiXFx1MWVjYiBjaFxcdTFlZTcgcGhcXHUwMGYybmcga2hcXHUwMGY0bmcgY2hvIHZcXHUwMGUwbyBiXFx1MDBlMG4hXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgVGllbkxlbkNtZC5Db2RlLkpPSU5fUk9PTV9TVUNDRVNTOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgVGllbkxlbkNtZC5SZWNlaXZlZEpvaW5Sb29tU3VjY2VzcyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgIC8vLy9VdGlscy5Mb2cocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgVGllbkxlbkdhbWVMb2dpYy5nZXRJbnN0YW5jZSgpLmluaXRXaXRoKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5vcGVuR2FtZShcIlRpZW5MZW5cIiwgXCJUaWVuTGVuXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBUaWVuTGVuQ21kLkNvZGUuQVVUT19TVEFSVDoge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IFRpZW5MZW5DbWQuUmVjZWl2ZWRBdXRvU3RhcnQoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAvLy8vVXRpbHMuTG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIFRpZW5MZW5HYW1lTG9naWMuZ2V0SW5zdGFuY2UoKS5hdXRvU3RhcnQocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGluaXRSb29tcyhyb29tcywgY2xpZW50KSB7XG4gICAgICAgICAgICB0aGlzLm5ldHdvcmtDbGllbnQgPSBjbGllbnQ7XG5cbiAgICAgICAgICAgIHRoaXMucm9vbUNvbnRlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgIHJvb21zLmZvckVhY2gocm9vbSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJvb21JdGVtKTtcbiAgICAgICAgICAgICAgICB2YXIgdHh0cyA9IGl0ZW0uZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oY2MuTGFiZWwpO1xuICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHR4dHNbMl0sIHJvb20ubW9uZXlSZXF1aXJlLCAwLjMpO1xuICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHR4dHNbM10sIHJvb20ubW9uZXlCZXQsIDAuMyk7XG4gICAgICAgICAgICAgICAgdHh0c1s0XS5zdHJpbmcgPSByb29tLm5QZXJzaW9uICsgXCIvXCIgKyByb29tLm1heFVzZXJQZXJSb29tO1xuICAgICAgICAgICAgICAgIHZhciBwcm9ncmVzcyA9IGl0ZW0uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5Qcm9ncmVzc0Jhcik7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MucHJvZ3Jlc3MgPSByb29tLm5QZXJzaW9uIC8gcm9vbS5tYXhVc2VyUGVyUm9vbTtcbiAgICAgICAgICAgICAgICB2YXIgYnRuSm9pbiA9IGl0ZW0uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5CdXR0b24pO1xuICAgICAgICAgICAgICAgIGJ0bkpvaW4ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ldHdvcmtDbGllbnQuc2VuZChuZXcgQ2FyZEdhbWVDbWQuU2VuZEpvaW5Sb29tKENvbmZpZ3MuQXBwLk1PTkVZX1RZUEUsIHJvb20ubWF4VXNlclBlclJvb20sIHJvb20ubW9uZXlCZXQsIDAsIHJvb20ucm9vbUluZGV4KSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaXRlbS5wYXJlbnQgPSB0aGlzLnJvb21Db250ZW50O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBMb2JieS5DYXJkUm9vbTtcbiJdfQ==