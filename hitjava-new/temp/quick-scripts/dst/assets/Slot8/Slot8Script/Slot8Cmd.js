
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot8/Slot8Script/Slot8Cmd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0f1d7Z4a21FPoLO/9aPXOqa', 'Slot8Cmd');
// Slot8/Slot8Script/Slot8Cmd.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmd = void 0;
var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
var Network_OutPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.OutPacket");
var ccclass = cc._decorator.ccclass;
var cmd;
(function (cmd) {
    var Code = /** @class */ (function () {
        function Code() {
        }
        Code.SUBCRIBE = 5003;
        Code.UNSUBCRIBE = 5004;
        Code.CHANGE_ROOM = 5005;
        Code.PLAY = 5001;
        Code.UPDATE_RESULT = 5001;
        Code.UPDATE_POT = 5002;
        Code.AUTO = 5006;
        Code.STOP_AUTO = 5006;
        Code.FORCE_STOP_AUTO = 5008;
        Code.DATE_X2 = 5009;
        Code.BIG_WIN = 5010;
        Code.FREE = 5011;
        Code.FREE_DAI_LY = 5012;
        Code.MINIMIZE = 5013;
        Code.UPDATE_JACKPOT_SLOTS = 10003;
        Code.SUBCRIBE_HALL_SLOT = 10001;
        return Code;
    }());
    cmd.Code = Code;
    var ReceiveFreeDaiLy = /** @class */ (function (_super) {
        __extends(ReceiveFreeDaiLy, _super);
        function ReceiveFreeDaiLy(data) {
            var _this = _super.call(this, data) || this;
            _this.freeSpin = 0;
            _this.freeSpin = _this.getByte();
            return _this;
        }
        return ReceiveFreeDaiLy;
    }(Network_InPacket_1.default));
    cmd.ReceiveFreeDaiLy = ReceiveFreeDaiLy;
    var ResUpdateJackpotSlots = /** @class */ (function (_super) {
        __extends(ResUpdateJackpotSlots, _super);
        function ResUpdateJackpotSlots(data) {
            var _this = _super.call(this, data) || this;
            _this.pots = "";
            _this.pots = _this.getString();
            return _this;
        }
        return ResUpdateJackpotSlots;
    }(Network_InPacket_1.default));
    cmd.ResUpdateJackpotSlots = ResUpdateJackpotSlots;
    var SendUnSubcribe = /** @class */ (function (_super) {
        __extends(SendUnSubcribe, _super);
        function SendUnSubcribe(roomId) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.UNSUBCRIBE);
            _this.packHeader();
            _this.putByte(roomId);
            _this.updateSize();
            return _this;
        }
        return SendUnSubcribe;
    }(Network_OutPacket_1.default));
    cmd.SendUnSubcribe = SendUnSubcribe;
    var SendSubcribe = /** @class */ (function (_super) {
        __extends(SendSubcribe, _super);
        function SendSubcribe(roomId) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.SUBCRIBE);
            _this.packHeader();
            _this.putByte(roomId);
            _this.updateSize();
            return _this;
        }
        return SendSubcribe;
    }(Network_OutPacket_1.default));
    cmd.SendSubcribe = SendSubcribe;
    var SendPlay = /** @class */ (function (_super) {
        __extends(SendPlay, _super);
        function SendPlay(lines) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.PLAY);
            _this.packHeader();
            _this.putString(lines);
            _this.updateSize();
            return _this;
        }
        return SendPlay;
    }(Network_OutPacket_1.default));
    cmd.SendPlay = SendPlay;
    var SendChangeRoom = /** @class */ (function (_super) {
        __extends(SendChangeRoom, _super);
        function SendChangeRoom(roomLeavedId, roomJoinedId) {
            var _this = _super.call(this) || this;
            // //  cc.log("SendChangeRoom roomLeavedId:"+roomLeavedId+" roomJoinedId:"+roomJoinedId);
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.CHANGE_ROOM);
            _this.packHeader();
            _this.putByte(roomLeavedId);
            _this.putByte(roomJoinedId);
            _this.updateSize();
            return _this;
        }
        return SendChangeRoom;
    }(Network_OutPacket_1.default));
    cmd.SendChangeRoom = SendChangeRoom;
    var ReceiveUpdatePot = /** @class */ (function (_super) {
        __extends(ReceiveUpdatePot, _super);
        function ReceiveUpdatePot(data) {
            var _this = _super.call(this, data) || this;
            _this.valueRoom1 = 0;
            _this.valueRoom2 = 0;
            _this.valueRoom3 = 0;
            _this.x21 = 0;
            _this.x22 = 0;
            _this.valueRoom1 = _this.getLong();
            _this.valueRoom2 = _this.getLong();
            _this.valueRoom3 = _this.getLong();
            _this.x21 = _this.getByte();
            _this.x22 = _this.getByte();
            return _this;
        }
        return ReceiveUpdatePot;
    }(Network_InPacket_1.default));
    cmd.ReceiveUpdatePot = ReceiveUpdatePot;
    var ReceiveResult = /** @class */ (function (_super) {
        __extends(ReceiveResult, _super);
        function ReceiveResult(data) {
            var _this = _super.call(this, data) || this;
            _this.ref = 0;
            _this.result = 0;
            _this.matrix = "";
            _this.linesWin = "";
            _this.haiSao = "";
            _this.prize = 0;
            _this.currentMoney = 0;
            _this.isFreeSpin = 0;
            _this.ratio = 0;
            _this.currentNumberFreeSpin = 0;
            _this.ref = _this.getLong();
            _this.result = _this.getByte();
            _this.matrix = _this.getString();
            _this.linesWin = _this.getString();
            _this.haiSao = _this.getString();
            _this.prize = _this.getLong();
            _this.currentMoney = _this.getLong();
            _this.isFreeSpin = _this.getByte();
            _this.ratio = _this.getByte();
            _this.currentNumberFreeSpin = _this.getByte();
            return _this;
        }
        return ReceiveResult;
    }(Network_InPacket_1.default));
    cmd.ReceiveResult = ReceiveResult;
    var ReceiveDateX2 = /** @class */ (function (_super) {
        __extends(ReceiveDateX2, _super);
        function ReceiveDateX2(data) {
            var _this = _super.call(this, data) || this;
            _this.ngayX2 = "";
            _this.remain = 0;
            _this.currentMoney = 0;
            _this.freeSpin = 0;
            _this.lines = "";
            _this.currentRoom = 0;
            _this.ngayX2 = _this.getString();
            _this.remain = _this.getByte();
            _this.currentMoney = _this.getLong();
            _this.freeSpin = _this.getByte();
            _this.lines = _this.getString();
            _this.currentRoom = _this.getByte();
            return _this;
        }
        return ReceiveDateX2;
    }(Network_InPacket_1.default));
    cmd.ReceiveDateX2 = ReceiveDateX2;
    var ReqSubcribeHallSlot = /** @class */ (function (_super) {
        __extends(ReqSubcribeHallSlot, _super);
        function ReqSubcribeHallSlot() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.SUBCRIBE_HALL_SLOT);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return ReqSubcribeHallSlot;
    }(Network_OutPacket_1.default));
    cmd.ReqSubcribeHallSlot = ReqSubcribeHallSlot;
})(cmd = exports.cmd || (exports.cmd = {}));
exports.default = cmd;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDhcXFNsb3Q4U2NyaXB0XFxTbG90OENtZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkZBQWdGO0FBQ2hGLCtGQUFrRjtBQUUxRSxJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUVsQyxJQUFpQixHQUFHLENBNEpuQjtBQTVKRCxXQUFpQixHQUFHO0lBQ2hCO1FBQUE7UUFpQkEsQ0FBQztRQWhCVSxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsU0FBSSxHQUFHLElBQUksQ0FBQztRQUNaLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsU0FBSSxHQUFHLElBQUksQ0FBQztRQUNaLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixTQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQix5QkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDN0IsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLFdBQUM7S0FqQkQsQUFpQkMsSUFBQTtJQWpCWSxRQUFJLE9BaUJoQixDQUFBO0lBQ0Q7UUFBc0Msb0NBQVE7UUFHMUMsMEJBQVksSUFBZ0I7WUFBNUIsWUFDSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtZQUpELGNBQVEsR0FBRyxDQUFDLENBQUM7WUFHVCxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7UUFDbkMsQ0FBQztRQUNMLHVCQUFDO0lBQUQsQ0FQQSxBQU9DLENBUHFDLDBCQUFRLEdBTzdDO0lBUFksb0JBQWdCLG1CQU81QixDQUFBO0lBQ0Q7UUFBMkMseUNBQVE7UUFHL0MsK0JBQVksSUFBZ0I7WUFBNUIsWUFDSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtZQUxELFVBQUksR0FBRyxFQUFFLENBQUM7WUFJTixLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTs7UUFDaEMsQ0FBQztRQUNMLDRCQUFDO0lBQUQsQ0FQQSxBQU9DLENBUDBDLDBCQUFRLEdBT2xEO0lBUFkseUJBQXFCLHdCQU9qQyxDQUFBO0lBQ0Q7UUFBb0Msa0NBQVM7UUFDekMsd0JBQVksTUFBYztZQUExQixZQUNJLGlCQUFPLFNBT1Y7WUFORyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0IsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOztRQUN0QixDQUFDO1FBQ0wscUJBQUM7SUFBRCxDQVZBLEFBVUMsQ0FWbUMsMkJBQVMsR0FVNUM7SUFWWSxrQkFBYyxpQkFVMUIsQ0FBQTtJQUNEO1FBQWtDLGdDQUFTO1FBQ3ZDLHNCQUFZLE1BQWM7WUFBMUIsWUFDSSxpQkFBTyxTQU9WO1lBTkcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7UUFDdEIsQ0FBQztRQUNMLG1CQUFDO0lBQUQsQ0FWQSxBQVVDLENBVmlDLDJCQUFTLEdBVTFDO0lBVlksZ0JBQVksZUFVeEIsQ0FBQTtJQUNEO1FBQThCLDRCQUFTO1FBQ25DLGtCQUFZLEtBQWE7WUFBekIsWUFDSSxpQkFBTyxTQU9WO1lBTkcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7UUFDdEIsQ0FBQztRQUNMLGVBQUM7SUFBRCxDQVZBLEFBVUMsQ0FWNkIsMkJBQVMsR0FVdEM7SUFWWSxZQUFRLFdBVXBCLENBQUE7SUFDRDtRQUFvQyxrQ0FBUztRQUN6Qyx3QkFBWSxZQUFvQixFQUFFLFlBQW9CO1lBQXRELFlBQ0ksaUJBQU8sU0FTVjtZQVJHLHlGQUF5RjtZQUN6RixLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDaEMsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDM0IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMzQixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7O1FBQ3RCLENBQUM7UUFDTCxxQkFBQztJQUFELENBWkEsQUFZQyxDQVptQywyQkFBUyxHQVk1QztJQVpZLGtCQUFjLGlCQVkxQixDQUFBO0lBQ0Q7UUFBc0Msb0NBQVE7UUFRMUMsMEJBQVksSUFBZ0I7WUFBNUIsWUFDSSxrQkFBTSxJQUFJLENBQUMsU0FPZDtZQWZELGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsZ0JBQVUsR0FBRyxDQUFDLENBQUM7WUFDZixnQkFBVSxHQUFHLENBQUMsQ0FBQztZQUVmLFNBQUcsR0FBRyxDQUFDLENBQUM7WUFDUixTQUFHLEdBQUcsQ0FBQyxDQUFDO1lBSUosS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakMsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakMsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFakMsS0FBSSxDQUFDLEdBQUcsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDMUIsS0FBSSxDQUFDLEdBQUcsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7O1FBQzlCLENBQUM7UUFDTCx1QkFBQztJQUFELENBakJBLEFBaUJDLENBakJxQywwQkFBUSxHQWlCN0M7SUFqQlksb0JBQWdCLG1CQWlCNUIsQ0FBQTtJQUNEO1FBQW1DLGlDQUFRO1FBV3ZDLHVCQUFZLElBQWdCO1lBQTVCLFlBQ0ksa0JBQU0sSUFBSSxDQUFDLFNBV2Q7WUF0QkQsU0FBRyxHQUFHLENBQUMsQ0FBQztZQUNSLFlBQU0sR0FBRyxDQUFDLENBQUM7WUFDWCxZQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ1osY0FBUSxHQUFHLEVBQUUsQ0FBQztZQUNkLFlBQU0sR0FBRyxFQUFFLENBQUM7WUFDWixXQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ1Ysa0JBQVksR0FBRyxDQUFDLENBQUM7WUFDakIsZ0JBQVUsR0FBRyxDQUFDLENBQUM7WUFDZixXQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ1YsMkJBQXFCLEdBQUcsQ0FBQyxDQUFDO1lBR3RCLEtBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzFCLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQy9CLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQy9CLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ25DLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7O1FBQ2hELENBQUM7UUFDTCxvQkFBQztJQUFELENBeEJBLEFBd0JDLENBeEJrQywwQkFBUSxHQXdCMUM7SUF4QlksaUJBQWEsZ0JBd0J6QixDQUFBO0lBRUQ7UUFBbUMsaUNBQVE7UUFVdkMsdUJBQVksSUFBZ0I7WUFBNUIsWUFDSSxrQkFBTSxJQUFJLENBQUMsU0FRZDtZQWpCRCxZQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ1osWUFBTSxHQUFHLENBQUMsQ0FBQztZQUNYLGtCQUFZLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLGNBQVEsR0FBRyxDQUFDLENBQUM7WUFDYixXQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ1gsaUJBQVcsR0FBRyxDQUFDLENBQUM7WUFNWixLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUMvQixLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM3QixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNuQyxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMvQixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUM5QixLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7UUFDdEMsQ0FBQztRQUNMLG9CQUFDO0lBQUQsQ0FwQkEsQUFvQkMsQ0FwQmtDLDBCQUFRLEdBb0IxQztJQXBCWSxpQkFBYSxnQkFvQnpCLENBQUE7SUFDRDtRQUF5Qyx1Q0FBUztRQUM5QztZQUFBLFlBQ0ksaUJBQU8sU0FNVjtZQUxHLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7O1FBQ3RCLENBQUM7UUFDTCwwQkFBQztJQUFELENBVEEsQUFTQyxDQVR3QywyQkFBUyxHQVNqRDtJQVRZLHVCQUFtQixzQkFTL0IsQ0FBQTtBQUNMLENBQUMsRUE1SmdCLEdBQUcsR0FBSCxXQUFHLEtBQUgsV0FBRyxRQTRKbkI7QUFDRCxrQkFBZSxHQUFHLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5QYWNrZXQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLkluUGFja2V0XCI7XG5pbXBvcnQgT3V0UGFja2V0IGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5PdXRQYWNrZXRcIjtcblxuY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5leHBvcnQgbmFtZXNwYWNlIGNtZCB7XG4gICAgZXhwb3J0IGNsYXNzIENvZGUge1xuICAgICAgICBzdGF0aWMgU1VCQ1JJQkUgPSA1MDAzO1xuICAgICAgICBzdGF0aWMgVU5TVUJDUklCRSA9IDUwMDQ7XG4gICAgICAgIHN0YXRpYyBDSEFOR0VfUk9PTSA9IDUwMDU7XG4gICAgICAgIHN0YXRpYyBQTEFZID0gNTAwMTtcbiAgICAgICAgc3RhdGljIFVQREFURV9SRVNVTFQgPSA1MDAxO1xuICAgICAgICBzdGF0aWMgVVBEQVRFX1BPVCA9IDUwMDI7XG4gICAgICAgIHN0YXRpYyBBVVRPID0gNTAwNjtcbiAgICAgICAgc3RhdGljIFNUT1BfQVVUTyA9IDUwMDY7XG4gICAgICAgIHN0YXRpYyBGT1JDRV9TVE9QX0FVVE8gPSA1MDA4O1xuICAgICAgICBzdGF0aWMgREFURV9YMiA9IDUwMDk7XG4gICAgICAgIHN0YXRpYyBCSUdfV0lOID0gNTAxMDtcbiAgICAgICAgc3RhdGljIEZSRUUgPSA1MDExO1xuICAgICAgICBzdGF0aWMgRlJFRV9EQUlfTFkgPSA1MDEyO1xuICAgICAgICBzdGF0aWMgTUlOSU1JWkUgPSA1MDEzO1xuICAgICAgICBzdGF0aWMgVVBEQVRFX0pBQ0tQT1RfU0xPVFMgPSAxMDAwMztcbiAgICAgICAgc3RhdGljIFNVQkNSSUJFX0hBTExfU0xPVCA9IDEwMDAxO1xuICAgIH1cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZUZyZWVEYWlMeSBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgIFxuICAgICAgICBmcmVlU3BpbiA9IDA7XG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5mcmVlU3BpbiA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBSZXNVcGRhdGVKYWNrcG90U2xvdHMgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIHBvdHMgPSBcIlwiO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5wb3RzID0gdGhpcy5nZXRTdHJpbmcoKVxuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBTZW5kVW5TdWJjcmliZSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHJvb21JZDogbnVtYmVyKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuVU5TVUJDUklCRSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShyb29tSWQpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IGNsYXNzIFNlbmRTdWJjcmliZSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHJvb21JZDogbnVtYmVyKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuU1VCQ1JJQkUpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUocm9vbUlkKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBTZW5kUGxheSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGxpbmVzOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7ICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5QTEFZKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRTdHJpbmcobGluZXMpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IGNsYXNzIFNlbmRDaGFuZ2VSb29tIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3Iocm9vbUxlYXZlZElkOiBudW1iZXIsIHJvb21Kb2luZWRJZDogbnVtYmVyKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgLy8gLy8gIGNjLmxvZyhcIlNlbmRDaGFuZ2VSb29tIHJvb21MZWF2ZWRJZDpcIityb29tTGVhdmVkSWQrXCIgcm9vbUpvaW5lZElkOlwiK3Jvb21Kb2luZWRJZCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5DSEFOR0VfUk9PTSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShyb29tTGVhdmVkSWQpO1xuICAgICAgICAgICAgdGhpcy5wdXRCeXRlKHJvb21Kb2luZWRJZCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZVVwZGF0ZVBvdCBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgdmFsdWVSb29tMSA9IDA7XG4gICAgICAgIHZhbHVlUm9vbTIgPSAwO1xuICAgICAgICB2YWx1ZVJvb20zID0gMDtcbiAgICAgIFxuICAgICAgICB4MjEgPSAwO1xuICAgICAgICB4MjIgPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZVJvb20xID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLnZhbHVlUm9vbTIgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMudmFsdWVSb29tMyA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLngyMSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy54MjIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZVJlc3VsdCBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgcmVmID0gMDtcbiAgICAgICAgcmVzdWx0ID0gMDtcbiAgICAgICAgbWF0cml4ID0gXCJcIjtcbiAgICAgICAgbGluZXNXaW4gPSBcIlwiO1xuICAgICAgICBoYWlTYW8gPSBcIlwiO1xuICAgICAgICBwcml6ZSA9IDA7XG4gICAgICAgIGN1cnJlbnRNb25leSA9IDA7XG4gICAgICAgIGlzRnJlZVNwaW4gPSAwO1xuICAgICAgICByYXRpbyA9IDA7XG4gICAgICAgIGN1cnJlbnROdW1iZXJGcmVlU3BpbiA9IDA7XG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5yZWYgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLm1hdHJpeCA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmxpbmVzV2luID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuaGFpU2FvID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMucHJpemUgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vbmV5ID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLmlzRnJlZVNwaW4gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMucmF0aW8gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE51bWJlckZyZWVTcGluID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZURhdGVYMiBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgXG4gICAgICAgIG5nYXlYMiA9IFwiXCI7XG4gICAgICAgIHJlbWFpbiA9IDA7XG4gICAgICAgIGN1cnJlbnRNb25leSA9IDA7XG4gICAgICAgIGZyZWVTcGluID0gMDtcbiAgICAgICAgbGluZXMgPSBcIlwiO1xuICAgICAgICBjdXJyZW50Um9vbSA9IDA7XG5cbiAgICAgIFxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLm5nYXlYMiA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLnJlbWFpbiA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9uZXkgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMuZnJlZVNwaW4gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMubGluZXMgPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Um9vbSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBSZXFTdWJjcmliZUhhbGxTbG90IGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuU1VCQ1JJQkVfSEFMTF9TTE9UKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjbWQ7Il19