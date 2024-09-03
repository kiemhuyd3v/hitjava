
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/TienLenScript/TienLen.Constant.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0f7d1OQxSZGDLP7T8ukp1Tu', 'TienLen.Constant');
// Lobby/LobbyScript/TienLenScript/TienLen.Constant.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TienLenConstant = void 0;
var TienLenConstant;
(function (TienLenConstant) {
    var GameState = /** @class */ (function () {
        function GameState() {
        }
        GameState.NONE = -1;
        GameState.AUTOSTART = 0;
        GameState.JOINROOM = 4;
        GameState.FIRSTTURN = 1;
        GameState.CHIABAI = 2;
        GameState.CHANGETURN = 3;
        GameState.USERJOIN = 5;
        GameState.DANHBAI = 6;
        GameState.BOLUOT = 7;
        GameState.QUIT = 8;
        GameState.USERLEAVE = 12;
        GameState.ENDGAME = 13;
        GameState.UPDATEMATH = 14;
        GameState.UPDATEOWNERROOM = 15;
        GameState.PLAYCONTINUE = 16;
        GameState.CHATCHONG = 17;
        GameState.JACKPOT = 18;
        GameState.REASONQUIT = 19;
        GameState.NOTIFYOUTROOM = 20;
        GameState.WAITBONDOITHONG = 21;
        return GameState;
    }());
    TienLenConstant.GameState = GameState;
    var Config = /** @class */ (function () {
        function Config() {
        }
        Config.MAX_PLAYER = 4;
        Config.MAX_CARDS = 13;
        return Config;
    }());
    TienLenConstant.Config = Config;
    var SortType = /** @class */ (function () {
        function SortType() {
        }
        SortType.kSortTangDan = 0;
        SortType.kSortGroup = 1;
        SortType.kSortUnkown = 2;
        return SortType;
    }());
    TienLenConstant.SortType = SortType;
    var PlayerType = /** @class */ (function () {
        function PlayerType() {
        }
        PlayerType.MY = 0;
        PlayerType.ENEMY = 1;
        PlayerType.STATENONE = 0;
        PlayerType.STATEVIEWING = 1;
        PlayerType.STATEBAOSAM = 2;
        return PlayerType;
    }());
    TienLenConstant.PlayerType = PlayerType;
})(TienLenConstant = exports.TienLenConstant || (exports.TienLenConstant = {}));
exports.default = TienLenConstant;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxUaWVuTGVuU2NyaXB0XFxUaWVuTGVuLkNvbnN0YW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQWlCLGVBQWUsQ0EwQy9CO0FBMUNELFdBQWlCLGVBQWU7SUFDNUI7UUFBQTtRQXFCQSxDQUFDO1FBcEJVLGNBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNWLG1CQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2Qsa0JBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixtQkFBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGlCQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osb0JBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixrQkFBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGlCQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osZ0JBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxjQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsbUJBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixpQkFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLG9CQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLHlCQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLHNCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLG1CQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsaUJBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixvQkFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQix1QkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQix5QkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNoQyxnQkFBQztLQXJCRCxBQXFCQyxJQUFBO0lBckJZLHlCQUFTLFlBcUJyQixDQUFBO0lBRUQ7UUFBQTtRQUdBLENBQUM7UUFGVSxpQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGdCQUFTLEdBQUcsRUFBRSxDQUFDO1FBQzFCLGFBQUM7S0FIRCxBQUdDLElBQUE7SUFIWSxzQkFBTSxTQUdsQixDQUFBO0lBRUQ7UUFBQTtRQUlBLENBQUM7UUFIVSxxQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixtQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLG9CQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLGVBQUM7S0FKRCxBQUlDLElBQUE7SUFKWSx3QkFBUSxXQUlwQixDQUFBO0lBRUQ7UUFBQTtRQU1BLENBQUM7UUFMVSxhQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1AsZ0JBQUssR0FBRyxDQUFDLENBQUM7UUFDVixvQkFBUyxHQUFHLENBQUMsQ0FBQztRQUNkLHVCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLHNCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLGlCQUFDO0tBTkQsQUFNQyxJQUFBO0lBTlksMEJBQVUsYUFNdEIsQ0FBQTtBQUNMLENBQUMsRUExQ2dCLGVBQWUsR0FBZix1QkFBZSxLQUFmLHVCQUFlLFFBMEMvQjtBQUNELGtCQUFlLGVBQWUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBuYW1lc3BhY2UgVGllbkxlbkNvbnN0YW50IHtcbiAgICBleHBvcnQgY2xhc3MgR2FtZVN0YXRlIHtcbiAgICAgICAgc3RhdGljIE5PTkUgPSAtMTtcbiAgICAgICAgc3RhdGljIEFVVE9TVEFSVCA9IDA7XG4gICAgICAgIHN0YXRpYyBKT0lOUk9PTSA9IDQ7XG4gICAgICAgIHN0YXRpYyBGSVJTVFRVUk4gPSAxO1xuICAgICAgICBzdGF0aWMgQ0hJQUJBSSA9IDI7XG4gICAgICAgIHN0YXRpYyBDSEFOR0VUVVJOID0gMztcbiAgICAgICAgc3RhdGljIFVTRVJKT0lOID0gNTtcbiAgICAgICAgc3RhdGljIERBTkhCQUkgPSA2O1xuICAgICAgICBzdGF0aWMgQk9MVU9UID0gNztcbiAgICAgICAgc3RhdGljIFFVSVQgPSA4O1xuICAgICAgICBzdGF0aWMgVVNFUkxFQVZFID0gMTI7XG4gICAgICAgIHN0YXRpYyBFTkRHQU1FID0gMTM7XG4gICAgICAgIHN0YXRpYyBVUERBVEVNQVRIID0gMTQ7XG4gICAgICAgIHN0YXRpYyBVUERBVEVPV05FUlJPT00gPSAxNTtcbiAgICAgICAgc3RhdGljIFBMQVlDT05USU5VRSA9IDE2O1xuICAgICAgICBzdGF0aWMgQ0hBVENIT05HID0gMTc7XG4gICAgICAgIHN0YXRpYyBKQUNLUE9UID0gMTg7XG4gICAgICAgIHN0YXRpYyBSRUFTT05RVUlUID0gMTk7XG4gICAgICAgIHN0YXRpYyBOT1RJRllPVVRST09NID0gMjA7XG4gICAgICAgIHN0YXRpYyBXQUlUQk9ORE9JVEhPTkcgPSAyMTtcbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgQ29uZmlnIHtcbiAgICAgICAgc3RhdGljIE1BWF9QTEFZRVIgPSA0O1xuICAgICAgICBzdGF0aWMgTUFYX0NBUkRTID0gMTM7XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNvcnRUeXBlIHtcbiAgICAgICAgc3RhdGljIGtTb3J0VGFuZ0RhbiA9IDA7XG4gICAgICAgIHN0YXRpYyBrU29ydEdyb3VwID0gMTtcbiAgICAgICAgc3RhdGljIGtTb3J0VW5rb3duID0gMjtcbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUGxheWVyVHlwZSB7XG4gICAgICAgIHN0YXRpYyBNWSA9IDA7XG4gICAgICAgIHN0YXRpYyBFTkVNWSA9IDE7XG4gICAgICAgIHN0YXRpYyBTVEFURU5PTkUgPSAwO1xuICAgICAgICBzdGF0aWMgU1RBVEVWSUVXSU5HID0gMTtcbiAgICAgICAgc3RhdGljIFNUQVRFQkFPU0FNID0gMjtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBUaWVuTGVuQ29uc3RhbnQ7Il19