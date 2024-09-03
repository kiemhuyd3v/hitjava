
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/games/GameData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'facc9+aHPhBxKW+WSSr5sCG', 'GameData');
// Lobby/LobbyScript/Script/games/GameData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameData = /** @class */ (function () {
    function GameData() {
        this.gameLogic = null;
        this.gameType = 0;
        this.moneyBetWinList = [];
        this.moneyBetXuList = [];
        this.configVinList = [];
        this.configXuList = [];
        this.configGameCoVin = [];
        this.configGameCoXu = [];
        this.save_BetVinList = [];
        this.save_BetXuList = [];
        this.xuTopServerWeekListMoney = [];
        this.xuTopServerAllListMoney = [];
        this.vinTopServerWeekListMoney = [];
        this.vinTopServerAllListMoney = [];
        this.xuTopServerWeekListNumber = [];
        this.xuTopServerAllListNumber = [];
        this.vinTopServerWeekListNumber = [];
        this.vinTopServerAllListNumber = [];
        this.topDayVin_money = [];
        this.topWeekVin_money = [];
        this.topMonthVin_money = [];
        this.topDayVin_number = [];
        this.topWeekVin_number = [];
        this.topMonthVin_number = [];
        this.topDayXu_money = [];
        this.topWeekXu_money = [];
        this.topMonthXu_money = [];
        this.topDayXu_number = [];
        this.topWeekXu_number = [];
        this.topMonthXu_number = [];
        this.vinCaoThuList = [];
        this.xuCaoThuList = [];
        this.maxPlayer = -1;
        this.RoomFind = [];
        this.fundVipMinRegis = null;
        this.ListRoomHavePass = [];
        this.ruleType = 0;
        this.openMoiChoi = !1;
        this.gameLogic = null;
        this.gameType = 0;
        this.moneyBetWinList = [];
        this.moneyBetXuList = [];
        this.configVinList = [];
        this.configXuList = [];
        this.configGameCoVin = [];
        this.configGameCoXu = [];
        this.save_BetVinList = [];
        this.save_BetXuList = [];
        this.xuTopServerWeekListMoney = [];
        this.xuTopServerAllListMoney = [];
        this.vinTopServerWeekListMoney = [];
        this.vinTopServerAllListMoney = [];
        this.xuTopServerWeekListNumber = [];
        this.xuTopServerAllListNumber = [];
        this.vinTopServerWeekListNumber = [];
        this.vinTopServerAllListNumber = [];
        this.topDayVin_money = [];
        this.topWeekVin_money = [];
        this.topMonthVin_money = [];
        this.topDayVin_number = [];
        this.topWeekVin_number = [];
        this.topMonthVin_number = [];
        this.topDayXu_money = [];
        this.topWeekXu_money = [];
        this.topMonthXu_money = [];
        this.topDayXu_number = [];
        this.topWeekXu_number = [];
        this.topMonthXu_number = [];
        this.vinCaoThuList = [];
        this.xuCaoThuList = [];
        this.maxPlayer = -1;
        this.RoomFind = [];
        this.fundVipMinRegis = null;
        this.ListRoomHavePass = [];
        this.ruleType = 0;
        this.openMoiChoi = !1;
    }
    GameData.getInstance = function () {
        if (this.instance == null) {
            this.instance = new GameData();
        }
        return this.instance;
    };
    return GameData;
}());
exports.default = GameData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXGdhbWVzXFxHYW1lRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBMENJO1FBdkNBLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsYUFBUSxHQUFHLENBQUMsQ0FBQztRQUNiLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLDZCQUF3QixHQUFHLEVBQUUsQ0FBQztRQUM5Qiw0QkFBdUIsR0FBRyxFQUFFLENBQUM7UUFDN0IsOEJBQXlCLEdBQUcsRUFBRSxDQUFDO1FBQy9CLDZCQUF3QixHQUFHLEVBQUUsQ0FBQztRQUM5Qiw4QkFBeUIsR0FBRyxFQUFFLENBQUM7UUFDL0IsNkJBQXdCLEdBQUcsRUFBRSxDQUFDO1FBQzlCLCtCQUEwQixHQUFHLEVBQUUsQ0FBQztRQUNoQyw4QkFBeUIsR0FBRyxFQUFFLENBQUM7UUFDL0Isb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN2QixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUN4QixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN2QixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixjQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDZixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2Qsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixnQkFBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBR2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLHdCQUF3QixHQUFHLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMseUJBQXlCLEdBQUcsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLDBCQUEwQixHQUFHLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMseUJBQXlCLEdBQUcsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRWEsb0JBQVcsR0FBekI7UUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztTQUNsQztRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBQ0wsZUFBQztBQUFELENBekZBLEFBeUZDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lRGF0YSB7XG4gICAgc3RhdGljIGluc3RhbmNlOiBHYW1lRGF0YTtcblxuICAgIGdhbWVMb2dpYyA9IG51bGw7XG4gICAgZ2FtZVR5cGUgPSAwO1xuICAgIG1vbmV5QmV0V2luTGlzdCA9IFtdO1xuICAgIG1vbmV5QmV0WHVMaXN0ID0gW107XG4gICAgY29uZmlnVmluTGlzdCA9IFtdO1xuICAgIGNvbmZpZ1h1TGlzdCA9IFtdO1xuICAgIGNvbmZpZ0dhbWVDb1ZpbiA9IFtdO1xuICAgIGNvbmZpZ0dhbWVDb1h1ID0gW107XG4gICAgc2F2ZV9CZXRWaW5MaXN0ID0gW107XG4gICAgc2F2ZV9CZXRYdUxpc3QgPSBbXTtcbiAgICB4dVRvcFNlcnZlcldlZWtMaXN0TW9uZXkgPSBbXTtcbiAgICB4dVRvcFNlcnZlckFsbExpc3RNb25leSA9IFtdO1xuICAgIHZpblRvcFNlcnZlcldlZWtMaXN0TW9uZXkgPSBbXTtcbiAgICB2aW5Ub3BTZXJ2ZXJBbGxMaXN0TW9uZXkgPSBbXTtcbiAgICB4dVRvcFNlcnZlcldlZWtMaXN0TnVtYmVyID0gW107XG4gICAgeHVUb3BTZXJ2ZXJBbGxMaXN0TnVtYmVyID0gW107XG4gICAgdmluVG9wU2VydmVyV2Vla0xpc3ROdW1iZXIgPSBbXTtcbiAgICB2aW5Ub3BTZXJ2ZXJBbGxMaXN0TnVtYmVyID0gW107XG4gICAgdG9wRGF5VmluX21vbmV5ID0gW107XG4gICAgdG9wV2Vla1Zpbl9tb25leSA9IFtdO1xuICAgIHRvcE1vbnRoVmluX21vbmV5ID0gW107XG4gICAgdG9wRGF5VmluX251bWJlciA9IFtdO1xuICAgIHRvcFdlZWtWaW5fbnVtYmVyID0gW107XG4gICAgdG9wTW9udGhWaW5fbnVtYmVyID0gW107XG4gICAgdG9wRGF5WHVfbW9uZXkgPSBbXTtcbiAgICB0b3BXZWVrWHVfbW9uZXkgPSBbXTtcbiAgICB0b3BNb250aFh1X21vbmV5ID0gW107XG4gICAgdG9wRGF5WHVfbnVtYmVyID0gW107XG4gICAgdG9wV2Vla1h1X251bWJlciA9IFtdO1xuICAgIHRvcE1vbnRoWHVfbnVtYmVyID0gW107XG4gICAgdmluQ2FvVGh1TGlzdCA9IFtdO1xuICAgIHh1Q2FvVGh1TGlzdCA9IFtdO1xuICAgIG1heFBsYXllciA9IC0xO1xuICAgIFJvb21GaW5kID0gW107XG4gICAgZnVuZFZpcE1pblJlZ2lzID0gbnVsbDtcbiAgICBMaXN0Um9vbUhhdmVQYXNzID0gW107XG4gICAgcnVsZVR5cGUgPSAwO1xuICAgIG9wZW5Nb2lDaG9pID0gITE7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5nYW1lTG9naWMgPSBudWxsO1xuICAgICAgICB0aGlzLmdhbWVUeXBlID0gMDtcbiAgICAgICAgdGhpcy5tb25leUJldFdpbkxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5tb25leUJldFh1TGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmNvbmZpZ1Zpbkxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5jb25maWdYdUxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5jb25maWdHYW1lQ29WaW4gPSBbXTtcbiAgICAgICAgdGhpcy5jb25maWdHYW1lQ29YdSA9IFtdO1xuICAgICAgICB0aGlzLnNhdmVfQmV0VmluTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLnNhdmVfQmV0WHVMaXN0ID0gW107XG4gICAgICAgIHRoaXMueHVUb3BTZXJ2ZXJXZWVrTGlzdE1vbmV5ID0gW107XG4gICAgICAgIHRoaXMueHVUb3BTZXJ2ZXJBbGxMaXN0TW9uZXkgPSBbXTtcbiAgICAgICAgdGhpcy52aW5Ub3BTZXJ2ZXJXZWVrTGlzdE1vbmV5ID0gW107XG4gICAgICAgIHRoaXMudmluVG9wU2VydmVyQWxsTGlzdE1vbmV5ID0gW107XG4gICAgICAgIHRoaXMueHVUb3BTZXJ2ZXJXZWVrTGlzdE51bWJlciA9IFtdO1xuICAgICAgICB0aGlzLnh1VG9wU2VydmVyQWxsTGlzdE51bWJlciA9IFtdO1xuICAgICAgICB0aGlzLnZpblRvcFNlcnZlcldlZWtMaXN0TnVtYmVyID0gW107XG4gICAgICAgIHRoaXMudmluVG9wU2VydmVyQWxsTGlzdE51bWJlciA9IFtdO1xuICAgICAgICB0aGlzLnRvcERheVZpbl9tb25leSA9IFtdO1xuICAgICAgICB0aGlzLnRvcFdlZWtWaW5fbW9uZXkgPSBbXTtcbiAgICAgICAgdGhpcy50b3BNb250aFZpbl9tb25leSA9IFtdO1xuICAgICAgICB0aGlzLnRvcERheVZpbl9udW1iZXIgPSBbXTtcbiAgICAgICAgdGhpcy50b3BXZWVrVmluX251bWJlciA9IFtdO1xuICAgICAgICB0aGlzLnRvcE1vbnRoVmluX251bWJlciA9IFtdO1xuICAgICAgICB0aGlzLnRvcERheVh1X21vbmV5ID0gW107XG4gICAgICAgIHRoaXMudG9wV2Vla1h1X21vbmV5ID0gW107XG4gICAgICAgIHRoaXMudG9wTW9udGhYdV9tb25leSA9IFtdO1xuICAgICAgICB0aGlzLnRvcERheVh1X251bWJlciA9IFtdO1xuICAgICAgICB0aGlzLnRvcFdlZWtYdV9udW1iZXIgPSBbXTtcbiAgICAgICAgdGhpcy50b3BNb250aFh1X251bWJlciA9IFtdO1xuICAgICAgICB0aGlzLnZpbkNhb1RodUxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy54dUNhb1RodUxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5tYXhQbGF5ZXIgPSAtMTtcbiAgICAgICAgdGhpcy5Sb29tRmluZCA9IFtdO1xuICAgICAgICB0aGlzLmZ1bmRWaXBNaW5SZWdpcyA9IG51bGw7XG4gICAgICAgIHRoaXMuTGlzdFJvb21IYXZlUGFzcyA9IFtdO1xuICAgICAgICB0aGlzLnJ1bGVUeXBlID0gMDtcbiAgICAgICAgdGhpcy5vcGVuTW9pQ2hvaSA9ICExO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogR2FtZURhdGEge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IEdhbWVEYXRhKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfVxufSJdfQ==